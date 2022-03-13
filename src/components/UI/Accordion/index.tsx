import IconArrow from "public/assets/svg/icons/icon-arrow-down.svg";

import styles from "./styles.module.css";

interface IAccordionProps {
  title: string;
}

const Accordion = ({ title }: IAccordionProps) => {
  return (
    <div className="px-8">
      <span className="text-xs text-gray-300 flex items-center hover:text-gray-100 hover:cursor-pointer">
        <i
          className={`fa-solid fa-angle-down mr-4 text-[8px] ${styles["arrow-animation"]}`}
        />
        <p className="font-title uppercase tracking-wide">{title}</p>
      </span>
    </div>
  );
};

export default Accordion;
