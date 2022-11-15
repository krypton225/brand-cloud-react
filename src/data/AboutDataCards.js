import GenerateIDs, { insertIDIntoData } from "./GenerateIDs";

const AboutDataCards = [
    {
        itemNum: "100%",
        itemName: "completion",
        animateItem: "fade-right"
    },
    {
        itemNum: "24 / 7",
        itemName: "delivery",
        animateItem: "zoom-in"
    },
    {
        itemNum: "100k",
        itemName: "transactions",
        animateItem: "fade-left"
    },
];

(() => {
    insertIDIntoData(GenerateIDs, AboutDataCards);
})();

export default AboutDataCards;