import dynamic from "next/dynamic";

const TopUsersTable = dynamic(
  () => import("@/components/elements/TopUsersTable")
);
export default function Home() {
  return (
    <>
      <section>
        <div className="my-container">
          <h1 className="text-4xl text-center font-semibold">Top Users</h1>
          <TopUsersTable />
          Hi
        </div>
      </section>
    </>
  );
}
