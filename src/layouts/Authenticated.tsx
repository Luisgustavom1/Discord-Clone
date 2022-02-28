import React, { ReactNode } from "react";

import ChannelsList from "src/components/UI/ChannelsList";
import mockupData from "src/mockupData";

interface IAuthenticatedProps {
  children: ReactNode;
}

export default function Authenticated({ children }: IAuthenticatedProps) {
  return (
    <div className="flex">
      <ChannelsList channels={mockupData.channels} />
      <main>{children}</main>
    </div>
  );
}
