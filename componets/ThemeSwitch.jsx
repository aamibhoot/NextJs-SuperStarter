import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
export default function ThemeSwitch({ themeStatus }) {
  const [enabled, setEnabled] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setEnabled(true);
  }, []);

  const switchTheme = () => {
    if (enabled) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };
  themeStatus = theme;
  return (
    <Switch
      checked={enabled}
      onChange={switchTheme}
      className={`${
        theme === "dark" ? "bg-gray-800" : "bg-gray-200"
      } relative inline-flex items-center h-6 rounded-full w-11 focus-within:outline-none`}
    >
      <span className="sr-only">Change Theme</span>
      <span
        className={`${
          theme === "dark"
            ? "bg-gray-200 translate-x-1"
            : "bg-gray-800 translate-x-6"
        } inline-block w-4 h-4 transform rounded-full transition ease-in-out`}
      />
    </Switch>
  );
}

//TODO: Fix the switch 🤦‍♂️
//Switch always starts from light mode state
