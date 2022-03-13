import IconFriends from "public/assets/svg/icons/icon-friends.svg";
import IconNewGroup from "public/assets/svg/icons/icon-new-group.svg";
import IconInbox from "public/assets/svg/icons/icon-inbox.svg";
import IconSupport from "public/assets/svg/icons/icon-support.svg";
import IconSearch from "public/assets/svg/icons/icon-search.svg";
import IconClose from "public/assets/svg/icons/icon-close.svg";
import IconNitro from "public/assets/svg/icons/icon-nitro.svg";

import Diviser from "src/components/UI/Diviser";
import NavHeader from "src/components/UI/NavItemsHeader";
import SideBar from "src/container/SideBar";
import TopBar from "src/container/TopBar";
import WrappedComponentAuth from "src/HOC/WrappedComponentAuth";
import Authenticated from "src/layouts/Authenticated";
import FormContext from "src/components/ReactHookForm/FormContext";
import FriendOptions from "src/components/UI/FriendOptions";
import mockupData from "src/mockupData";
import LinkButton from "src/components/UI/LinkButton";
import DMs from "src/components/UI/DMs";
import { InputForm } from "src/components/ReactHookForm/InputForm";
import MainContent from "src/container/MainContent";

const Me = () => {
  const onSubmit = () => ({});
  return (
    <Authenticated>
      <SideBar>
        <span className="bg-black-800 text-gray-400 font-medium cursor-pointer w-full flex items-center justify-center rounded h-28 text-sm py-1">
          Encontre ou comece uma conversa
        </span>
        <>
          <div className="flex flex-col p-8 gap-[2px]">
            <LinkButton
              icon={[
                {
                  position: "start",
                  iconElement: <IconFriends />,
                  size: "24",
                },
              ]}
              notifications={4}
              tag="a"
              href="/user/@me"
            >
              Amigos
            </LinkButton>
            <LinkButton
              icon={[
                {
                  position: "start",
                  iconElement: <IconNitro />,
                  size: "24",
                },
              ]}
              tag="a"
              href="/store"
            >
              Nitro
            </LinkButton>
          </div>
          <span className="flex items-center justify-between px-16 pt-8 cursor-pointer text-gray-300 mb-8 hover:text-gray-100">
            <p className="font-title text-xs uppercase">Mensagens Diretas</p>
            <i className="fa-solid fa-plus text-sm text-gray-100 mr-[6px]" />
          </span>
          <DMs messages={mockupData.messages} />
        </>
      </SideBar>
      <div className="w-full">
        <TopBar optionBg="gray" size="lg">
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
            <Diviser direction="vertical" />
            <IconInbox />
            <IconSupport />
          </span>
        </TopBar>
        <MainContent>
          <section className="flex-1">
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
              {mockupData.friends.map(({ name, status, id }) => (
                <FriendOptions key={id} name={name} status={status} />
              ))}
            </div>
          </section>
          <article className="w-384 border-x border-opacity-10 border-gray-200" />
        </MainContent>
      </div>
    </Authenticated>
  );
};

export default WrappedComponentAuth(Me);
