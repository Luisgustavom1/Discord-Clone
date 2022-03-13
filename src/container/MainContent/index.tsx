import { ReactNode } from "react";

interface IMainContentProps {
  children: ReactNode;
}

const MainContent = ({ children }: IMainContentProps) => {
  return (
    <div className="flex bg-gray-600 h-auto main-content pt-16">{children}</div>
  );
};

export default MainContent;
