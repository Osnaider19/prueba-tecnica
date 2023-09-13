import { Loader } from "@/components/loader/Loader";
export default function loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <Loader />
    </div>
  );
}
