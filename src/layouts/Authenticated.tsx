/* eslint-disable react/jsx-pascal-case */
import { ReactComponent as iconFriends } from "public/assets/svg/icon-friends.svg";
import { ReactComponent as iconNitro } from "public/assets/svg/icon-nitro.svg";

import MainContent from "../container/MainContent";
import TopBar from "../container/TopBar";
import Diviser from "../components/UI/Diviser";
import CircleChannel from "../components/UI/CircleChannel";
import LinkButton from "../components/UI/LinkButton";

export default function Authenticated() {
  return (
    <div className="flex">
      <nav className="w-72 min-h-screen h-full bg-black-800 flex flex-col justify-start gap-8 pt-12">
        <CircleChannel active />
        <span className="w-32 mx-auto">
          <Diviser />
        </span>
        <CircleChannel notification imgUrl="./assets/img/testeCanal.png" />
        <CircleChannel notification />
        <CircleChannel notification />
        <CircleChannel notification />
        <CircleChannel notification />
        <CircleChannel notification />
        <CircleChannel notification />
        <CircleChannel notification />
        <CircleChannel notification />
        <CircleChannel notification />
        <CircleChannel notification />
        <CircleChannel notification />
      </nav>
      <MainContent>
        <MainContent.row size="sm">
          <TopBar>
            <span className="bg-black-800 cursor-pointer text-gray-400 font-medium flex items-center rounded h-28 text-sm px-8 py-1">
              Encontre ou comece uma conversa
            </span>
          </TopBar>
          <TopBar optionBg={2} size="lg">
            <div className="flex items-center py-8">
              <span className="flex items-center gap-8 font-title leading-5 text-white text-base">
                <svg
                  x="0"
                  y="0"
                  className="icon-2xnN2Y"
                  aria-hidden="true"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" fillRule="evenodd">
                    <path
                      fill="#72767D"
                      fillRule="nonzero"
                      d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z"
                      transform="translate(2 4)"
                    />
                    <path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z" />
                  </g>
                </svg>
                Amigos
              </span>
              <Diviser direction="vertical" className="mx-8" />
            </div>
            <nav>NAV BAR</nav>
          </TopBar>
        </MainContent.row>
        <MainContent.row size="lg" className="bg-gray-600">
          <MainContent.col size="sm">
            <aside className="bg-black-600 h-full p-8">
              <section className="flex flex-col gap-[2px]">
                <LinkButton
                  icon={{
                    position: "start",
                    iconElement: iconFriends,
                    size: "24px",
                  }}
                  notifications={4}
                  tag="a"
                  href="@me"
                >
                  Amigos
                </LinkButton>
                <LinkButton
                  icon={{
                    position: "start",
                    iconElement: iconNitro,
                    size: "24px",
                  }}
                  tag="a"
                  href="store"
                >
                  Nitro
                </LinkButton>
              </section>
              <section>
                <span className="flex items-center justify-between px-16 pt-16 cursor-pointer text-gray-300 >uppercase">
                  <p className="font-title text-xs">Mensagens Diretas</p>
                  <i className="fa-solid fa-plus" />
                </span>
              </section>
            </aside>
          </MainContent.col>
          <MainContent.col size="lg">Content</MainContent.col>
          <MainContent.col size="md">Amigos ativos</MainContent.col>
        </MainContent.row>
      </MainContent>
    </div>
  );
}
