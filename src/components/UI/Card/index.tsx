import { ReactNode } from "react";

interface ICardProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export default function Card({ children, title, subtitle }: ICardProps) {
  return (
    <div className="bg-gray-600 min-h-screen w-screen rounded-md xs:w-480 xs:min-h-min">
      <div className="px-16 pt-36 mt-116 pb-40 xs:p-32 xs:mt-0">
        <section className="text-center mb-20">
          <h1 className="text-white leading-7 mb-8 font-title font-semibold text-2xl">
            {title}
          </h1>
          <h4 className="text-gray-200 leading-5 font-normal text-base">
            {subtitle}
          </h4>
        </section>
        {children}
      </div>
    </div>
  );
}
