import IconFriends from "public/assets/svg/icon-friends.svg";
import IconNewGroup from "public/assets/svg/icon-new-group.svg";
import IconInbox from "public/assets/svg/icon-inbox.svg";
import IconSupport from "public/assets/svg/icon-support.svg";
import Diviser from "src/components/UI/Diviser";
import NavHeader from "src/components/UI/NavItemsHeader";
import SideBar from "src/components/UI/SideBar";
import TopBar from "src/container/TopBar";
import WrappedComponent from "src/HOC/WrappedComponentAuth";
import Authenticated from "src/layouts/Authenticated";

const Channels = () => {
  return (
    <Authenticated>
      <SideBar />
      <div className="w-full">
        <TopBar optionBg={2} size="lg" className="px-16 py-12">
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
      </div>
    </Authenticated>
  );
};

export default WrappedComponent(Channels);
