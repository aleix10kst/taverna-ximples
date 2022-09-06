import { PropsWithChildren } from "react";

type HomeSectionProps = {
  id: string;
  title: string;
};

export const HomeSection = ({
  id,
  title,
  children,
}: PropsWithChildren<HomeSectionProps>) => {
  return (
    <section id={id}>
      <div className={`flex flex-col px-4 md:flex-row`}>
        <div className="grid place-items-center pt-5 pb-2 text-center font-medievalSharp text-3xl font-bold text-red-800/90 md:w-1/3 md:py-0">
          {title}
        </div>
        <div className="w-auto flex-1">{children}</div>
      </div>
    </section>
  );
};
