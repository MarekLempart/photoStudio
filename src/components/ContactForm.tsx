// src/components/ContactForm.tsx
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import PhoneInput from "react-phone-number-input";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-number-input/style.css";
import {
  FormContainer,
  SectionTitle,
  InputContainer,
  Input,
  TextArea,
  SubmitButton,
  ErrorText,
  PhoneInputStyledContainer,
} from "../styles/ContactFormStyles";
import { useTranslation } from "react-i18next";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

if (PUBLIC_KEY) {
  emailjs.init(PUBLIC_KEY);
} else {
  console.error("Brak klucza publicznego EmailJS w zmiennych środowiskowych!");
}

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required(t('contactForm.validation.firstNameRequired')),
      lastName: Yup.string().required(t('contactForm.validation.lastNameRequired')),
      email: Yup.string()
        .email(t('contactForm.validation.emailInvalid'))
        .required(t('contactForm.validation.emailRequired')),
      phone: Yup.string().required(t('contactForm.validation.phoneRequired')),
      message: Yup.string().required(t('contactForm.validation.messageRequired')),
    }),
    onSubmit: (values, { resetForm }) => {
      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        toast.error(t('contactForm.toast.error'), {
          position: "top-right",
          autoClose: 5000,
          theme: "light",
        });
        console.error("Brak konfiguracji EmailJS");
        return;
      }

      emailjs
        .send(
          SERVICE_ID,
          TEMPLATE_ID,
          values,
          PUBLIC_KEY
        )
        .then(() => {
          toast.success(t('contactForm.toast.success'), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          resetForm();
        })
        .catch(() =>
          toast.error(t('contactForm.toast.error'), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        );
    },
  });

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <SectionTitle>{t('contactForm.title')}</SectionTitle>
      <InputContainer>
        <Input
          name="firstName"
          placeholder={t('contactForm.firstName')}
          value={formik.values.firstName}
          onChange={formik.handleChange}
        />
        {formik.errors.firstName && (
          <ErrorText>{formik.errors.firstName}</ErrorText>
        )}
      </InputContainer>

      <InputContainer>
        <Input
          name="lastName"
          placeholder={t('contactForm.lastName')}
          value={formik.values.lastName}
          onChange={formik.handleChange}
        />
        {formik.errors.lastName && (
          <ErrorText>{formik.errors.lastName}</ErrorText>
        )}
      </InputContainer>

      <InputContainer>
        <Input
          name="email"
          placeholder={t('contactForm.email')}
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && <ErrorText>{formik.errors.email}</ErrorText>}
      </InputContainer>

      <PhoneInputStyledContainer>
        <PhoneInput
          placeholder={t('contactForm.phone')}
          defaultCountry="PL"
          value={formik.values.phone}
          onChange={(value) => formik.setFieldValue("phone", value || "")}
        />
        {formik.errors.phone && <ErrorText>{formik.errors.phone}</ErrorText>}
      </PhoneInputStyledContainer>

      <InputContainer>
        <TextArea
          name="message"
          placeholder={t('contactForm.message')}
          value={formik.values.message}
          onChange={formik.handleChange}
        />
        {formik.errors.message && (
          <ErrorText>{formik.errors.message}</ErrorText>
        )}
      </InputContainer>

      <SubmitButton type="submit">{t('contactForm.submit')}</SubmitButton>
    </FormContainer>
  );
};

export default ContactForm;
