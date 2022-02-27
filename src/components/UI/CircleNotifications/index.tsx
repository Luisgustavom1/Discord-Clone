interface ICircleNotificationProps {
  numberNotifications: number;
}

export default function CircleNotifications({
  numberNotifications,
}: ICircleNotificationProps) {
  return (
    <span className="block py-0 px-[4.5px] rounded-full text-center text-xs font-semibold text-white bg-red">
      {numberNotifications > 99 ? "99+" : numberNotifications}
    </span>
  );
}
