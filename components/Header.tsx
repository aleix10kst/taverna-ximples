export const Header = () => {
  return (
    <header className="sticky inset-x-0 top-0 mx-4 flex flex-col space-y-2 py-6 md:flex-row md:items-center md:justify-between">
      <h1 className="text-center font-metamorphous text-3xl md:text-xl">
        Taverna dels ximples <span className="text-sm">(i la ximpleta)</span>
      </h1>
      <nav className="flex justify-center space-x-4 md:mr-8 md:space-x-8">
        <a className="font-metamorphous" href="#inici">
          Inici
        </a>
        <a className="font-metamorphous" href="#menjars">
          Menjar
        </a>
        <a className="font-metamorphous" href="#brevatges">
          Brevatges
        </a>
        <a className="font-metamorphous" href="#on-som">
          On som?
        </a>
      </nav>
    </header>
  );
};
