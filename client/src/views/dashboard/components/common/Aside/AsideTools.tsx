import { BsSearch } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { FaCog } from "react-icons/fa";
import { AsideButton } from "../Aside/AsideButton";

export const AsideTools = () => {
  const items = [
    { icon: <BsSearch />, text: "Rechercher" },
    { icon: <BiTimeFive />, text: "Dernières modifications" },
    { icon: <FaCog />, text: "Paramètres et membres" },
  ];
  return (
    <ul className="mb-6">
      {items.map((item, index) => (
        <AsideButton
          index={index}
          as={"button"}
          icon={item.icon}
          text={item.text}
        />
      ))}
    </ul>
  );
};
