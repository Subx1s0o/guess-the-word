import dynamic from "next/dynamic";

const TopUsersTable = dynamic(() => import("@/components/user/TopUsersTable"));

export default function Home() {
  return (
    <div className="my-container">
      <TopUsersTable />
    </div>
  );
}
