interface ICircleNotificationProps {
  numberNotifications: number;
}

export default function CircleNotifications({
  numberNotifications,
}: ICircleNotificationProps) {
  return (
    <span className="block w-16 h-16 rounded-full text-center text-xs font-medium text-white bg-red">
      {numberNotifications}
    </span>
  );
}
