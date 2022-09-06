export const Header = () => {
  return (
    <header className="sticky inset-x-0 top-0 flex flex-col space-y-2 border-b-2 border-red-800 px-4 pt-4 pb-1 md:flex-row md:items-center md:justify-between md:py-6">
      <h1 className="text-center font-metamorphous text-3xl md:text-xl">
        Taverna dels ximples <span className="text-sm">(i la ximpleta)</span>
      </h1>
      <nav className="flex items-center justify-center space-x-4 text-center md:mr-8 md:space-x-8">
        <a className="font-metamorphous" href="#els-ximples">
          Els ximples
        </a>
        <a className="font-metamorphous" href="#la-ximpleta">
          La ximpleta
        </a>
        <a className="font-metamorphous" href="#activitats">
          Activitats
        </a>
        <a className="font-metamorphous" href="#on-som">
          On som?
        </a>
      </nav>
    </header>
  );
};
