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
  const onSubmit = () => ({});
  return (
    <Authenticated>
      <SideBar />
      <div className="w-full">
        <TopBar optionBg="gray" size="lg" className="px-16 py-12">
          <span className="flex items-center px-8 gap-8 text-gray-400">
            <IconFriends />
            <p className="font-title text-base text-white">Amigos</p>
          </span>
          <Diviser direction="vertical" className="mx-8" />
          <nav className="flex flex-1 gap-16 px-8">
            <NavHeader isActive={false} notifications={0}>
              Disponível
            </NavHeader>
            <NavHeader isActive={false} notifications={0}>
              Todos
            </NavHeader>
            <NavHeader isActive notifications={8}>
              Pendente
            </NavHeader>
            <NavHeader isActive={false} notifications={0}>
              Bloqueado
            </NavHeader>
          </nav>
          <span className="flex gap-16 pr-8 h-full text-gray-200">
            <IconNewGroup />
            <Diviser direction="vertical" className="" />
            <IconInbox />
            <IconSupport />
          </span>
        </TopBar>
        <div className="flex bg-gray-600 h-auto main-content">
          <section className="flex-1 pt-16">
            <FormContext onSubmit={onSubmit} className="pl-32 pr-20">
              <InputForm
                label=""
                name="search"
                placeholder="Buscar"
                className="!bg-black-800 !bg-opacity-100 mb-16"
                Icon={IconSearch}
                SecondIcon={IconClose}
              />
            </FormContext>
            <div className="overflow-scroll scroll-bar-0 h-[calc(100%-64px)]">
              <h3 className="my-16 pl-32 pr-20 font-medium font-title tracking-wide text-gray-200 text-xs uppercase">
                Online - 5
              </h3>
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
              <FriendOptions />
            </div>
          </section>
          <article className="w-384 border-x border-opacity-10 border-gray-200" />
        </div>
      </div>
    </Authenticated>
  );
};

export default WrappedComponentAuth(Channels);
