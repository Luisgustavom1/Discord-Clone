import Image from "next/image";

import AbsentStatus from "public/assets/svg/absent-status.svg";

interface IAvatarUser {
  userImg: string;
  userName: string;
}

export default function AvatarUser({ userImg, userName }: IAvatarUser) {
  return (
    <div className="relative w-32">
      <Image
        src={userImg}
        alt={`Imagem de usuário do ${userName}`}
        width="32"
        height="32"
        className="rounded-full"
      />
      <div className="flex items-center justify-center bg-black-600 absolute bottom-1 -right-4 w-16 h-16 rounded-full">
        <AbsentStatus className="absolute -top-[2px]" />
      </div>
    </div>
  );
}
