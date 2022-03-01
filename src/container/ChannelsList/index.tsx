import { ReactNode } from "react";
import Diviser from "../../components/UI/Diviser";

interface IChannelList {
  children: ReactNode[];
}

const ChannelsList = ({ children }: IChannelList) => {
  return (
    <nav className="w-72 h-screen bg-black-800 overflow-hidden">
      <div className="flex flex-col justify-start gap-8 pt-12 h-screen overflow-scroll scroll-bar-0">
        {children[0]}
        <span className="w-32 mx-auto">
          <Diviser />
        </span>
        {children[1]}
      </div>
    </nav>
  );
};

export default ChannelsList;
