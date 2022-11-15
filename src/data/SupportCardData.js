import { BsFillTelephoneFill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { TfiLayoutMediaCenter } from "react-icons/tfi";

import GenerateIDs, { insertIDIntoData } from "./GenerateIDs";

const SupportCardData = [
    {
        itemIcon: <BsFillTelephoneFill />,
        itemTitle: "sales",
        itemDesc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, error? Fugiat, recusandae debitis saepe quod optio illum eligendi.",
        animateName: "flip-down"
    },
    {
        itemIcon: <BiWorld />,
        itemTitle: "technical support",
        itemDesc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, error? Fugiat, recusandae debitis saepe quod optio illum eligendi.",
        animateName: "flip-down"
    },
    {
        itemIcon: <TfiLayoutMediaCenter />,
        itemTitle: "media inquiries",
        itemDesc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, error? Fugiat, recusandae debitis saepe quod optio illum eligendi.",
        animateName: "flip-down"
    },
];

(() => {
    insertIDIntoData(GenerateIDs, SupportCardData);
})();

export default SupportCardData;