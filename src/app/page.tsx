import Button from "@/components/ui/Button";
import LinkTag from "@/components/ui/LinkTag";
import TextInput from "@/components/ui/TextInput";
import { Check, Circle } from "lucide-react";

export default function Home() {
  return (
    <main className=" h-[1005px] mt[60px] pt-[60px]">
      <div className="flex justify-center items-center h-screen">
        <h1 className=" text-light-20 flex inline-block">
          <TextInput type="text" placeholder="Type your mail"></TextInput>
          <Button className="ml-2">Send</Button>
        </h1>
      </div>
    </main>
  );
}
