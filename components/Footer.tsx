import { useMemo } from "react";

export const Footer = () => {
  const date = useMemo(() => {
    const date = new Date();
    return `${date.getFullYear()}`;
  }, []);
  return (
    <footer className="w-full border-t border-t-gray-50/20">
      <div className="py-4 text-center">
        <p className="font-metamorphous text-sm">Aleix Canet © - {date}</p>
      </div>
    </footer>
  );
};
