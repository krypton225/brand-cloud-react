import GenerateIDs, { insertIDIntoData } from "./GenerateIDs";

export const ListItemSolutions = [
    { itemText: "marketing" },
    { itemText: "analytics" },
    { itemText: "commerce" },
    { itemText: "data" },
    { itemText: "cloud" },
];

export const ListItemSupport = [
    { itemText: "pricing" },
    { itemText: "documentation" },
    { itemText: "guides" },
    { itemText: "API status" },
    { itemText: "fixes" },
];

export const ListItemCompany = [
    { itemText: "about" },
    { itemText: "blog" },
    { itemText: "jobs" },
    { itemText: "press" },
    { itemText: "partners" },
];

export const ListItemLegal = [
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