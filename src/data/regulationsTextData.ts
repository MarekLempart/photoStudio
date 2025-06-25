// src/data/regulationsTextData.ts
type RegulationPoint = {
    title: string; // h3
    content: {
        point: string; // Main point
        subpoints?: string[]; // Subpoints
    }[];
};

type RegulationsData = {
    title: string; // h2
    sections: RegulationPoint[];
};

export const regulationsData: RegulationsData = {
    title: "Regulamin Usług Fotograficznych",
    sections: [
        {
            title: "Postanowienia ogólne",
            content: [
                { point: "Regulamin określa zasady świadczenia usług fotograficznych przez studio fotograficzne." },
                { point: "Studio fotograficzne działa zgodnie z obowiązującymi przepisami prawa." },
                { point: "Klient zobowiązuje się do przestrzegania regulaminu." },
            ],
        },
        {
            title: "Rezerwacje i płatności",
            content: [
                {
                    point: "Rezerwacje sesji fotograficznych odbywają się poprzez kontakt telefoniczny lub mailowy.",
                    subpoints: [
                        "Rezerwacja zostaje potwierdzona po wpłacie zadatku w wysokości 30% wartości usługi.",
                        "Pozostała kwota płatna jest w dniu realizacji usługi.",
                    ],
                },
                {
                    point: "Odwołanie rezerwacji:",
                    subpoints: [
                        "Klient ma prawo odwołać rezerwację najpóźniej na 48 godzin przed planowaną sesją.",
                        "W przypadku odwołania w krótszym czasie, zadatek nie podlega zwrotowi.",
                    ],
                },
            ],
        },
        {
            title: "Realizacja usług",
            content: [
                { point: "Studio fotograficzne zapewnia sprzęt i warunki odpowiednie do wykonania usługi." },
                {
                    point: "Klient jest odpowiedzialny za przygotowanie do sesji (np. makijaż, stylizacja), jeśli nie wykupiono pakietu zawierającego te usługi.",
                },
                {
                    point: "Przekazanie zdjęć odbywa się w formie cyfrowej, chyba że uzgodniono inaczej.",
                    subpoints: [
                        "Czas oczekiwania na zdjęcia wynosi do 14 dni roboczych od dnia sesji.",
                    ],
                },
            ],
        },
        {
            title: "Prawa autorskie",
            content: [
                {
                    point: "Studio fotograficzne zastrzega sobie prawo do wykorzystywania zdjęć do celów promocyjnych.",
                    subpoints: [
                        "Klient może wyrazić pisemny sprzeciw wobec takiego wykorzystania zdjęć.",
                    ],
                },
                { point: "Przekazane zdjęcia nie mogą być edytowane lub wykorzystywane komercyjnie bez zgody studia." },
            ],
        },
    ],
};