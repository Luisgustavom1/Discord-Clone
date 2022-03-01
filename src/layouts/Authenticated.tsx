import React, { ReactNode } from "react";
import CircleChannel from "src/components/UI/CircleChannel";

import ChannelsList from "src/container/ChannelsList";
import mockupData from "src/mockupData";

interface IAuthenticatedProps {
  children: ReactNode;
}

export default function Authenticated({ children }: IAuthenticatedProps) {
  return (
    <div className="flex">
      <ChannelsList>
        <CircleChannel imgUrl="" notification={4} active />
        {mockupData.channels.map(({ id, imgUrl, notification }) => (
          <CircleChannel key={id} imgUrl={imgUrl} notification={notification} />
        ))}
      </ChannelsList>
      <main className="flex flex-1">{children}</main>
    </div>
  );
}
