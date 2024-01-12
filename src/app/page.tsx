import LinkTag from "@/components/ui/LinkTag";
import { Circle } from "lucide-react";

export default function Home() {
  return (
    <main className=" bg-dark-10 h-[1005px] mt[60px] pt-[60px]">
      <div className="flex justify-center items-center h-screen">
      <h1 className=" text-light-20">
          {" "}
          <LinkTag text="danilppzz" link="https://github.com/danilppzz"></LinkTag>{" "}
        </h1>
      </div>
    </main>
  );
}
