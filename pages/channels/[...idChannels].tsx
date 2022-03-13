import IconFriends from "public/assets/svg/icon-friends.svg";
import IconNewGroup from "public/assets/svg/icon-new-group.svg";
import IconInbox from "public/assets/svg/icon-inbox.svg";
import IconSupport from "public/assets/svg/icon-support.svg";
import IconSearch from "public/assets/svg/icon-search.svg";
import IconClose from "public/assets/svg/icon-close.svg";

import Diviser from "src/components/UI/Diviser";
import NavHeader from "src/components/UI/NavItemsHeader";
import SideBar from "src/components/UI/SideBar";
import TopBar from "src/container/TopBar";
import WrappedComponentAuth from "src/HOC/WrappedComponentAuth";
import Authenticated from "src/layouts/Authenticated";
import FormContext from "src/components/ReactHookForm/FormContext";
import FriendOptions from "src/components/UI/FriendOptions";
import { InputForm } from "src/components/ReactHookForm/InputForm";

const Channels = () => {
  return (
    <Authenticated>
      <SideBar />
      <div className="w-full">
        <TopBar optionBg="gray" size="lg" className="px-16 py-12">
          <span className="flex gap-16 pr-8 h-full text-gray-200">
            <IconInbox />
            <IconSupport />
          </span>
        </TopBar>
        <div className="flex bg-gray-600 h-auto main-content">
          <section className="flex-1 pt-16">CHANNELS</section>
          <article className="w-384 border-x border-opacity-10 border-gray-200" />
        </div>
      </div>
    </Authenticated>
  );
};

export default WrappedComponentAuth(Channels);
