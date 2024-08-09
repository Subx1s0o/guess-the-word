import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <div className="my-container ">
        <h1 className="text-4xl font-semibold">Not Found</h1>
        <p className="mb-4">Could not find requested resource</p>
        <Link href="/" className="bg-black text-white p-2">
          Return Home
        </Link>
      </div>
    </section>
  );
}
