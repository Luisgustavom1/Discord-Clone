import mockupData from "src/mockupData";
import DM from "./DM";

export default function DMs() {
  return (
    <article className="px-8 flex flex-col gap-4">
      {mockupData.messages.map((dm) => (
        <DM key={dm.id} userDm={dm} />
      ))}
    </article>
  );
}
