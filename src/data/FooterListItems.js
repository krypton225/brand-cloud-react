import GenerateIDs, { insertIDIntoData } from "./GenerateIDs";

const ListItemSolutions = [
    { itemText: "marketing" },
    { itemText: "analytics" },
    { itemText: "commerce" },
    { itemText: "data" },
    { itemText: "cloud" },
];

const ListItemSupport = [
    { itemText: "pricing" },
    { itemText: "documentation" },
    { itemText: "guides" },
    { itemText: "API status" },
    { itemText: "fixes" },
];

const ListItemCompany = [
    { itemText: "about" },
    { itemText: "blog" },
    { itemText: "jobs" },
    { itemText: "press" },
    { itemText: "partners" },
];

const ListItemLegal = [
    { itemText: "chain" },
    { itemText: "private" },
    { itemText: "public" },
    { itemText: "policies" },
    { itemText: "terms" },
];

(() => {
    insertIDIntoData(GenerateIDs, ListItemSolutions);
    insertIDIntoData(GenerateIDs, ListItemSupport);
    insertIDIntoData(GenerateIDs, ListItemCompany);
    insertIDIntoData(GenerateIDs, ListItemLegal);
})();

export const MyItemsArray = [ListItemSolutions, ListItemCompany, ListItemSupport, ListItemLegal];