"use client";
import Link from "next/link";
export default function Home({ user }) {
  return (
    <div className="my-container">
      <p>{user && user.username}</p>
      <Link href="/profile">profile</Link>
    </div>
  );
}
