import { PropsWithChildren } from "react";

type HomeSectionProps = {
  id: string;
  title: string;
  reverse?: boolean;
};

export const HomeSection = ({
  id,
  title,
  reverse,
  children,
}: PropsWithChildren<HomeSectionProps>) => {
  return (
    <section id={id}>
      <div
        className={`flex flex-col ${
          reverse ? " md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="grid place-items-center py-6 text-center font-medievalSharp text-3xl font-bold text-red-800/90 md:w-1/3 md:py-0">
          {title}
        </div>
        <div className="w-auto flex-1">{children}</div>
      </div>
    </section>
  );
};
