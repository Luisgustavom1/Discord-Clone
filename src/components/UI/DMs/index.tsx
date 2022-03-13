import DM from "./DM";

type messageType = {
  id: number;
  name: string;
  user: string;
  imgUrl: string;
  online: boolean;
};

interface IDMsProps {
  messages: messageType[];
}

export default function DMs({ messages }: IDMsProps) {
  return (
    <article className="px-8 flex flex-col gap-4">
      {messages.map((dm) => (
        <DM key={dm.id} userDm={dm} />
      ))}
    </article>
  );
}
