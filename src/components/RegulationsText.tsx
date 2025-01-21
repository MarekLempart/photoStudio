// src/components/RegulationsText.tsx

import React from "react";
import { regulationsData } from "../data/regulationsTextData";
import { RegulationsTextContainer, Section, Title, Point, SubPoint } from "../styles/RegulationsTextStyles";

const RegulationsText: React.FC = () => {
return (
    <RegulationsTextContainer>
    <Title>{regulationsData.title}</Title>
    {regulationsData.sections.map((section, sectionIndex) => (
        <Section key={sectionIndex}>
        <h3>{section.title}</h3>
        {section.content.map((item, itemIndex) => (
            <div key={itemIndex}>
            <Point>{item.point}</Point>
            {item.subpoints && (
                <ul>
                {item.subpoints.map((subpoint, subIndex) => (
                    <SubPoint key={subIndex}>{subpoint}</SubPoint>
                ))}
                </ul>
            )}
            </div>
        ))}
        </Section>
    ))}
    </RegulationsTextContainer>
);
};

export default RegulationsText;