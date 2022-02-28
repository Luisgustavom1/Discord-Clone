import Diviser from "../Diviser";
import CircleChannel from "../CircleChannel";

type channel = {
  id: number;
  notification: number;
  name: string;
  imgUrl: string;
  slugChannel: string;
};

interface IChannelList {
  channels: channel[];
}

const ChannelsList = ({ channels }: IChannelList) => {
  return (
    <nav className="w-72 h-screen bg-black-800 overflow-hidden">
      <div className="flex flex-col justify-start gap-8 pt-12 h-screen overflow-scroll scroll-bar-0">
        <CircleChannel imgUrl="" notification={4} active />
        <span className="w-32 mx-auto">
          <Diviser />
        </span>
        {channels.map(({ id, imgUrl, notification }) => (
          <CircleChannel key={id} imgUrl={imgUrl} notification={notification} />
        ))}
      </div>
    </nav>
  );
};

export default ChannelsList;
