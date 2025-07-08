// src/pages/Contact.tsx
import React from "react";
import ContactDetails from "../components/ContactDetails";
import ContactForm from "../components/ContactForm";
import {
  ContactContainer,
  ContactContainerForm,
} from "../styles/ContactStyles";

const Contact: React.FC = () => {
  return (
    <ContactContainer>
      <ContactContainerForm>
        <ContactDetails />
        <ContactForm />
      </ContactContainerForm>
    </ContactContainer>
  );
};

export default Contact;
