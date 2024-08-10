import CheckAuth from "@/components/checkers/CheckAuth";
export default function Main() {
  return (
    <section className="flex-1 flex">
      <div className="my-container">
        <CheckAuth />
      </div>
    </section>
  );
}
