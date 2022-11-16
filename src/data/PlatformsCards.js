import GenerateIDs, { insertIDIntoData } from "./GenerateIDs";

const PlatformsCards = [
    [
        {
            id: 1,
            cardTitle: "notifications",
            cardDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, aperiam!"
        },
        {
            id: 2,
            cardTitle: "notifications",
            cardDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, aperiam!"
        },
        {
            id: 3,
            cardTitle: "notifications",
            cardDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, aperiam!"
        },
        {
            id: 4,
            cardTitle: "notifications",
            cardDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, aperiam!"
        },
    ],
    [
        {
            id: 5,
            cardTitle: "notifications",
            cardDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, aperiam!"
        },
        {
            id: 6,
            cardTitle: "notifications",
            cardDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, aperiam!"
        },
        {
            id: 7,
            cardTitle: "notifications",
            cardDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, aperiam!"
        },
        {
            id: 8,
            cardTitle: "notifications",
            cardDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, aperiam!"
        },
    ],
    [
        {
            id: 9,
            cardTitle: "notifications",
            cardDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, aperiam!"
        },
        {
            id: 10,
            cardTitle: "notifications",
            cardDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, aperiam!"
        },
        {
            id: 11,
            cardTitle: "notifications",
            cardDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, aperiam!"
        },
        {
            id: 12,
            cardTitle: "notifications",
            cardDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, aperiam!"
        },
    ],
];

(() => {
    insertIDIntoData(GenerateIDs, PlatformsCards);
})();

export default PlatformsCards;