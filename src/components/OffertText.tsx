// src/components/OffertText.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import { OffertTextData } from "../data/offertTextDataTypes";
import { OffertTextContainer, Section, Title, Point, SubPoint } from "../styles/OffertTextStyles";

interface OffertTextProps {
    dataKey: string;
}

const OffertText: React.FC<OffertTextProps> = ({ dataKey }) => {
    const { t } = useTranslation();
    const data = t(dataKey, { returnObjects: true }) as OffertTextData;
    if (!data || !data.sections) {
        return null;
    }

    return (
        <OffertTextContainer>
            <Title>{data.title}</Title>
            {data.sections.map((section, sectionIndex) => (
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
        </OffertTextContainer>
    );
};

export default OffertText;