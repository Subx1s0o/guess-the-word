export default function Footer() {
  return (
    <footer>
      <div className="my-container  shadow-footer dark:shadow-none rounded-t-3xl   dark:bg-slate-900 py-7 ">
        <div className="flex justify-between mb-5 relative after:content-[''] after:absolute after:h-0.5 after:w-full after:bg-black after:-bottom-3 dark:after:bg-white  ">
          <p className="">Made in Ukraine</p>
          <a className="" href="https://github.com/Subx1s0o" target="_blank">
            GitHub
          </a>
        </div>
        <div className="flex justify-center">
          <button className="">Contact Me</button>
        </div>
      </div>
    </footer>
  );
}
