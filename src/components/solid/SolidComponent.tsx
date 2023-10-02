const SolidCard = () => {
  return (
    <div className="relative flex flex-col justify-between h-full w-full bg-solidBlue text-gray-200">
      <div className="flex justify-end px-2 pt-1">
        <h1 className="font-onest text-xs text-gray-300">Made with Solid</h1>
      </div>

      <div className="font-onest px-4 ">
        <h1 className="text-4xl text-left font-onest font-bold">Solid</h1>
        <h3 className="py-3">
          Simple and performant reactivity for building user interfaces
        </h3>
        <a
          href="https://www.solidjs.com/"
          className="text-white hover:text-slate-800 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View the documentation
        </a>
      </div>

      <div className="flex justify-end ">
        <img
          src="/solidLogo.svg"
          alt="solid Logo"
          className="w-7 h-7 m-1 p-0.5"
        />
      </div>
    </div>
  );
};

export default SolidCard;
