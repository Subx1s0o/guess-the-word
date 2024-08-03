import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitcher";

export default function Header() {
  const user = false;
  return (
    <header>
      <div
        className={`my-container flex relative shadow-header dark:shadow-none rounded-b-3xl ${
          !user ? " justify-center items-center" : ""
        }  dark:bg-slate-900 py-7 `}
      >
        <ThemeSwitcher className="absolute left-5 top-1/2 -translate-y-1/2" />
        <Link href="/" className=" font-semibold text-xl ">
          Guess The Word
        </Link>
      </div>
    </header>
  );
}
