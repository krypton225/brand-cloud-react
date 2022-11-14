import GenerateIDs, { insertIDIntoData } from "./GenerateIDs";

const NavbarDataItems = [
    { linkText: "home", url: "/home" },
    { linkText: "about", url: "/about" },
    { linkText: "support", url: "/support" },
    { linkText: "platforms", url: "/platforms" },
    { linkText: "pricing", url: "/pricing" },
];

(() => {
    insertIDIntoData(GenerateIDs, NavbarDataItems);
})();

export default NavbarDataItems;