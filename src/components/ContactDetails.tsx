// src/components/ContactDetails.tsx
import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import {
  DetailsContainer,
  DetailItem,
  DetailIcon,
  DetailText,
  SectionTitle,
} from "../styles/ContactDetailsStyles";
import Map from "./Map";

const ContactDetails: React.FC = () => {
  const [showMap, setShowMap] = useState(false);

  const toggleMap = () => setShowMap(!showMap);

  return (
    <DetailsContainer>
      <SectionTitle>Dane kontaktowe</SectionTitle>
      <DetailItem>
        <DetailIcon>
          <FaUser />
        </DetailIcon>
        <DetailText>Marta Matczuk-Pisarek</DetailText>
      </DetailItem>
      <DetailItem>
        <DetailIcon>
          <FaMapMarkerAlt />
        </DetailIcon>
        <DetailText>
          <button onClick={toggleMap}>Wrocław, Polska</button>
        </DetailText>
      </DetailItem>
      <DetailItem>
        <DetailIcon>
          <FaPhoneAlt />
        </DetailIcon>
        <DetailText>
          <a href="tel:+48603758565">(+48) 603 758 565</a>
        </DetailText>
      </DetailItem>
      <DetailItem>
        <DetailIcon>
          <FaEnvelope />
        </DetailIcon>
        <DetailText>
          <a href="mailto:marta_mm@wp.pl">marta_mm@wp.pl</a>
        </DetailText>
      </DetailItem>

      {showMap && (
        <Map
          latitude={51.11075}
          longitude={17.03129}
          address="Wrocław, Polska"
          onClose={toggleMap}
        />
      )}
    </DetailsContainer>
  );
};

export default ContactDetails;
