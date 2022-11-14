import GenerateIDs, { insertIDIntoData } from "./GenerateIDs";

const AboutDataCards = [
    {
        itemNum: "100%",
        itemName: "completion"
    },
    {
        itemNum: "24 / 7",
        itemName: "delivery"
    },
    {
        itemNum: "100k",
        itemName: "transactions"
    },
];

(() => {
    insertIDIntoData(GenerateIDs, AboutDataCards);
})();

export default AboutDataCards;