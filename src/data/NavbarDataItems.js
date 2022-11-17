import GenerateIDs, { insertIDIntoData } from "./GenerateIDs";

const NavbarDataItems = [
    { linkText: "home", url: "/" },
    { linkText: "about", url: "/about" },
    { linkText: "support", url: "/support" },
    { linkText: "platforms", url: "/platforms" }
];

(() => {
    insertIDIntoData(GenerateIDs, NavbarDataItems);
})();

export default NavbarDataItems;