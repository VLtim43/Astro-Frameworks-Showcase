export const ReactCard = () => {
  return (
    <div className="relative flex flex-col justify-between h-full w-full bg-gradient-to-br from-sky-600 to-blue-600 text-gray-200">
      <div className="flex justify-end px-2 pt-1">
        <h1 className="font-onest text-xs text-gray-300">Made with React</h1>
      </div>

      <div className="font-onest px-4 ">
        <h1 className="text-4xl text-left font-onest font-bold">React</h1>
        <h3 className="py-3">
          The most famous library for web and native user interfaces
        </h3>
        <a
          href="https://react.dev/"
          className="text-white hover:text-blue-700 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View the documentation
        </a>
      </div>

      <div className="flex justify-end ">
        <img
          src="/reactLogo.svg"
          alt="React Logo"
          className="w-7 h-7 m-1 p-0.5"
        />
      </div>
    </div>
  );
};
