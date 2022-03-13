import { ReactNode } from "react";

import TopBar from "src/container/TopBar";

interface ISideBarProps {
  children: ReactNode[];
}

export default function SideBar({ children }: ISideBarProps) {
  const [childrenHeader, childrenBody] = children;
  return (
    <aside className="bg-black-600 h-full">
      <TopBar>{childrenHeader}</TopBar>
      <section className="overflow-scroll scroll-bar-0 main-content">
        {childrenBody}
      </section>
    </aside>
  );
}
