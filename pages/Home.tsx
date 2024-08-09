import Link from "next/link";
export default function Home() {
  return (
    <div className="my-container">
      <Link href="/profile">profile</Link>
    </div>
  );
}
