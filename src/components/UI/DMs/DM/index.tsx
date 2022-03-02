/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from "clsx";
import Link from "next/link";
import AvatarUser from "src/components/UI/AvatarUser";

import styles from "./styles.module.css";

type userDmType = {
  id: number;
  name: string;
  user: string;
  imgUrl: string;
  online: boolean;
};

interface IDMProps {
  userDm: userDmType;
}

export default function DM({
  userDm: { id, name, user, imgUrl, online },
}: IDMProps) {
  const isActive = true;
  return (
    <Link passHref href={`/channels/${id}`}>
      <a
        className={clsx({
          [`${styles["dm-container"]} font-medium leading-5 flex justify-between items-center py-4 px-8 rounded hover:bg-gray-500 hover:bg-opacity-30`]:
            true,
          "text-white bg-gray-500 bg-opacity-60": isActive,
          "text-gray-300": !isActive,
        })}
      >
        <span className="flex items-center gap-12">
          <AvatarUser userImg={imgUrl} userName={`Avatar do ${user}`} />
          <p>{name}</p>
        </span>
        <i
          className={`${styles["icon-plus"]} opacity-0 fa-solid fa-xmark mr-[3px] text-gray-100`}
        />
      </a>
    </Link>
  );
}
