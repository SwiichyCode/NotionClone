import { BsSearch } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { FaCog } from "react-icons/fa";

export const AsideTools = () => {
  const items = [
    { icon: <BsSearch />, text: "Rechercher" },
    { icon: <BiTimeFive />, text: "Dernières modifications" },
    { icon: <FaCog />, text: "Paramètres et membres" },
  ];
  return (
    <ul className="mb-6">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-center gap-2 pl-4 cursor-pointer text-xs py-2 hover:bg-gray-100"
        >
          <div className="flex items-center justify-center w-[22px] h-[22px] text-slate-500">
            {item.icon}
          </div>
          <span className=" font-light text-sm">{item.text}</span>
        </li>
      ))}
    </ul>
  );
};
