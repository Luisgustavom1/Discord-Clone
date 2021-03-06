import { ReactNode } from "react";

import IconOptions from "public/assets/svg/icons/icon-options.svg";
import IconChat from "public/assets/svg/icons/icon-chat.svg";
import AvatarUser from "../AvatarUser";

interface IFriendOptionsProps {
  name: string;
  status: string;
}

const CircleIcon = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center justify-center w-36 h-36 rounded-full bg-black-600">
      {children}
    </div>
  );
};

export default function FriendOptions({ name, status }: IFriendOptionsProps) {
  return (
    <div className="border-t border-white border-opacity-5 h-60 w-508 ml-32 rounded flex items-center justify-between cursor-pointer hover:bg-gray-500 hover:bg-opacity-10 hover:w-[524px] hover:px-8 hover:ml-24 hover:border-0 hover:pt-1">
      <span className="flex items-center">
        <AvatarUser
          userImg="/../public/assets/img/testeCanal.png"
          userName="Luisao teste 43"
        />
        <div className="ml-12">
          <p className="text-white text-base font-semibold -mb-4">{name}</p>
          <p className="text-gray-200 text-sm font-medium">{status}</p>
        </div>
      </span>
      <span className="flex gap-12 text-gray-200">
        <CircleIcon>
          <IconChat />
        </CircleIcon>
        <CircleIcon>
          <IconOptions />
        </CircleIcon>
      </span>
    </div>
  );
}
