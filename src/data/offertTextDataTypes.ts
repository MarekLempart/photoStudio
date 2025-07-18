// src/data/offertTextDataTypes.ts
export type OffertContent = {
    point: string;
    subpoints?: string[];
};

export type OffertSection = {
    title: string;
    content: OffertContent[];
};

export type OffertTextData = {
    title: string;
    sections: OffertSection[];
};