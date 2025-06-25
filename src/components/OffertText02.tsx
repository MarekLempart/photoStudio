// src/components/OffertText01.tsx
import React from "react";
import { offertTextData02 } from "../data/offertTextData02";
import { OffertTextContainer, Section, Title, Point, SubPoint } from "../styles/OffertTextStyles";

const OffertText02: React.FC = () => {
    return (
        <OffertTextContainer>
            <Title>{offertTextData02.title}</Title>
            {offertTextData02.sections.map((section, sectionIndex) => (
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

export default OffertText02;