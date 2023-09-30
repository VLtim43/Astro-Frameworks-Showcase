import { h } from 'preact';

export const PreactCard = () => {
  return (
    <div className="relative flex flex-col justify-between h-full w-full bg-gradient-to-br from-violet-500 to-violet-900 text-gray-200">
      <div className="flex justify-end px-2 pt-1">
        <h1 className="font-onest text-xs text-gray-300">Made with Preact</h1>
      </div>

      <div className="font-onest px-4 ">
        <h1 className="text-4xl text-left font-onest font-bold">Preact</h1>
        <h3 className="py-3">
          A fast 3kB alternative to React with the same modern API
        </h3>
        <a
          href="https://preactjs.com/"
          className="text-white hover:text-violet-900 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View the documentation
        </a>
      </div>

      <div className="flex justify-end ">
        <img
          src="/preactLogo.png" 
          alt="Preact Logo"
          className="w-7 h-7 m-1 p-0.5"
        />
      </div>
    </div>
  );
};

export default PreactCard;
