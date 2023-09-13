import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative w-full  h-screen flex flex-col justify-center items-center">
      <div className="min-w-full flex flex-col justify-center items-center">
        <object data="../404.svg" width="300" height="300"></object>
        <div className="w-full flex justify-center items-center py-4">
          <Link href="/" className="py-2 px-4 text-center bg-[#1A8CD8] rounded-2xl">
            Volver
          </Link>
        </div>
      </div>
    </section>
  );
}
