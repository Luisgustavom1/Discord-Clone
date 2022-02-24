import { ReactNode } from "react";

interface IAuthenticationProps {
  children: ReactNode;
}

export default function Authentication({ children }: IAuthenticationProps) {
  return (
    <div className="h-screen w-screen grid place-items-center bg-[url('../../public/assets/svg/bg-login.svg')] bg-cover">
      {children}
    </div>
  );
}
