import IconFriend from "public/assets/svg/icon-friends.svg";
import IconNitro from "public/assets/svg/icon-nitro.svg";
import TopBar from "src/container/TopBar";
import LinkButton from "src/components/UI/LinkButton";
import DMs from "../DMs";

export default function SideBar() {
  return (
    <aside className="bg-black-600 h-full">
      <TopBar>
        <span className="bg-black-800 cursor-pointer text-gray-400 font-medium flex items-center rounded h-28 text-sm px-8 py-1">
          Encontre ou comece uma conversa
        </span>
      </TopBar>
      <section className="overflow-scroll scroll-bar-0 main-content">
        <div className="flex flex-col p-8 gap-[2px]">
          <LinkButton
            icon={{
              position: "start",
              iconElement: IconFriend,
              size: "24px",
            }}
            notifications={4}
            tag="a"
            href="/channels/@me"
          >
            Amigos
          </LinkButton>
          <LinkButton
            icon={{
              position: "start",
              iconElement: IconNitro,
              size: "24px",
            }}
            tag="a"
            href="/store"
          >
            Nitro
          </LinkButton>
        </div>
        <span className="flex items-center justify-between px-16 pt-8 cursor-pointer text-gray-300 mb-8 hover:text-gray-100">
          <p className="font-title text-xs uppercase">Mensagens Diretas</p>
          <i className="fa-solid fa-plus text-sm text-gray-100 mr-[2px]" />
        </span>
        <DMs />
      </section>
    </aside>
  );
}
