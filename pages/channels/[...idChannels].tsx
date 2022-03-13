import IconInbox from "public/assets/svg/icons/icon-inbox.svg";
import IconSupport from "public/assets/svg/icons/icon-support.svg";
import IconArrow from "public/assets/svg/icons/icon-arrow-down.svg";
import IconHashtag from "public/assets/svg/icons/icon-hashtag.svg";

import SideBar from "src/container/SideBar";
import MainContent from "src/container/MainContent";
import TopBar from "src/container/TopBar";
import WrappedComponentAuth from "src/HOC/WrappedComponentAuth";
import Authenticated from "src/layouts/Authenticated";
import Accordion from "src/components/UI/Accordion";

const Channels = () => {
  return (
    <Authenticated>
      <SideBar>
        <span className="font-medium text-[15px] text-white font-title px-8 flex items-end justify-between w-full cursor-pointer">
          GSI002 da depressão
          <IconArrow />
        </span>
        <div className="pt-16">
          <Accordion title="Information" />
        </div>
      </SideBar>
      <div className="w-full">
        <TopBar optionBg="gray" size="lg">
          <span className="text-gray-400 flex px-8 flex-1">
            <IconHashtag />
            <p className="ml-8 font-title text-white">help</p>
          </span>
          <span className="flex gap-16 pr-8 h-full text-gray-200">
            <IconInbox />
            <IconSupport />
          </span>
        </TopBar>
        <MainContent>
          <section>CHANNELS</section>
        </MainContent>
      </div>
    </Authenticated>
  );
};

export default WrappedComponentAuth(Channels);
