import packageJson from "../package.json";
import ThemeSwitch from "../componets/ThemeSwitch";
import { useTheme } from "next-themes";

const version = packageJson.version;
const dependencies = packageJson.dependencies;
const devDependencies = packageJson.devDependencies;
export default function index() {
  const { theme } = useTheme();
  return (
    <div className="flex items-center font-thin justify-center w-full h-screen space-y-9 flex-col">
      <h1 className="text-3xl">
        🚀 NextJs SuperStarter{" "}
        <sup className="bg-purple-700 text-xs font-mono text-white px-2">
          <i>v{version}</i>
        </sup>
      </h1>
      <div className="flex space-x-6">
        <ThemeSwitch />
        <div className="transition ease-in-out">
          The current theme is:
          <span className="transition ease-in-out animate-pulse"> {theme}</span>
        </div>
      </div>
      <div className="flex space-x-2">
        <p>
          Next js{" "}
          <i className="text-xs font-mono bg-green-600 text-gray-200 px-1">
            {dependencies.next}
          </i>
        </p>
        <p>
          Tailwind CSS{" "}
          <i className="text-xs font-mono bg-green-600 text-gray-200 px-1">
            {devDependencies.tailwindcss}
          </i>
        </p>
        <p>
          Headless UI{" "}
          <i className="text-xs font-mono bg-green-600 text-gray-200 px-1">
            {dependencies["@headlessui/react"]}
          </i>
        </p>
      </div>
      <a
        className="text-sm font-mono bg-blue-900 text-white py-3 px-5 rounded-full hover:bg-blue-800"
        href="https://github.com/aamibhoot"
        target="_blank"
      >
        👻 @aamibhoot
      </a>
      <span>Made in Bangladesh 🇧🇩</span>
    </div>
  );
}
