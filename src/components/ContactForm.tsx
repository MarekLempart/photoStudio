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

emailjs.init("xtkeKbpRdN9dos4sU");

const ContactForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Imię jest wymagane"),
      lastName: Yup.string().required("Nazwisko jest wymagane"),
      email: Yup.string()
        .email("Nieprawidłowy email")
        .required("Email jest wymagany"),
      phone: Yup.string().required("Numer jest wymagany"),
      message: Yup.string().required("Treść zapytania jest wymagana"),
    }),
    onSubmit: (values, { resetForm }) => {
      emailjs
        .send(
          "service_jydn2ns",
          "template_ic5gljh",
          values,
          "xtkeKbpRdN9dos4sU"
        )
        .then(() => {
          toast.success("Wiadomość wysłana!", {
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
          toast.error("Wystąpił błąd. Spróbuj ponownie.", {
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
      <SectionTitle>Kontakt</SectionTitle>
      <InputContainer>
        <Input
          name="firstName"
          placeholder="Imię"
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
          placeholder="Nazwisko"
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
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && <ErrorText>{formik.errors.email}</ErrorText>}
      </InputContainer>

      <PhoneInputStyledContainer>
        <PhoneInput
          placeholder="Numer telefonu"
          defaultCountry="PL"
          value={formik.values.phone}
          onChange={(value) => formik.setFieldValue("phone", value || "")}
        />
        {formik.errors.phone && <ErrorText>{formik.errors.phone}</ErrorText>}
      </PhoneInputStyledContainer>

      <InputContainer>
        <TextArea
          name="message"
          placeholder="Treść zapytania"
          value={formik.values.message}
          onChange={formik.handleChange}
        />
        {formik.errors.message && (
          <ErrorText>{formik.errors.message}</ErrorText>
        )}
      </InputContainer>

      <SubmitButton type="submit">Wyślij</SubmitButton>
    </FormContainer>
  );
};

export default ContactForm;
