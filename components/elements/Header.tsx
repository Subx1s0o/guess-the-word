import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitcher";

export default function Header() {
  const user = false;
  return (
    <header>
      <div
        className={`my-container relative shadow-header dark:shadow-none rounded-b-3xl ${
          !user ? "flex justify-center" : ""
        }  dark:bg-slate-900 py-7 `}
      >
        <ThemeSwitcher className="absolute top-3 left-14" />
        <Link href="/" className=" font-semibold text-xl ">
          Guess The Word
        </Link>
      </div>
    </header>
  );
}
