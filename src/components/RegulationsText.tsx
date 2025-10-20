// src/components/RegulationsText.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import { RegulationsTextContainer, Section, Title, Point, SubPoint } from "../styles/RegulationsTextStyles";

type RegulationContent = {
    point: string;
    subpoints?: string[];
};

type RegulationSection = {
    title: string;
    content: RegulationContent[];
};

type RegulationsData = {
    title: string;
    sections: RegulationSection[];
};

const RegulationsText: React.FC = () => {
    const { t } = useTranslation();
    const regulationsData = t('regulations', { returnObjects: true }) as RegulationsData;

    if (!regulationsData || !regulationsData.sections) {
        return null;
    }

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