import AvatarUser from "src/components/UI/AvatarUser";
import LinkButton from "../../LinkButton";

import styles from "./styles.module.css";

type userDmType = {
  id: number;
  name: string;
  user: string;
  imgUrl: string;
};

interface IDMProps {
  userDm: userDmType;
}

export default function DM({ userDm: { id, name, user, imgUrl } }: IDMProps) {
  return (
    <LinkButton
      href={`/channels/@me/${id}`}
      tag="a"
      className={styles["dm-container"]}
      icon={[
        {
          iconElement: (
            <AvatarUser userImg={imgUrl} userName={`Avatar do ${user}`} />
          ),
          size: "32",
          position: "start",
        },
        {
          iconElement: (
            <i
              className={`${styles["icon-plus"]} opacity-0 fa-solid fa-xmark mr-[3px] text-gray-100`}
            />
          ),
          size: "auto",
          position: "end",
        },
      ]}
    >
      {name}
    </LinkButton>
  );
}
