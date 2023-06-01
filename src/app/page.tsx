import Image from "next/image";
import Imaillustration from "@/assets/images/illustration-sign-up-desktop.svg";
import List from "./List";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[hsl(234,9%,20%)]  w-[1440px] ">
      <div className="flex text-black bg-white p-8 w- gap-6 items-center ">
        <div className="   justify-center items gap-12 border-0 flex flex-col items-start">
          <p className="font-bold text-5xl">Stay Updated!</p>
          <p className="text-sm">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
         <div className="flex flex-col gap-2">
         <List text={"Product discovery and building what matters "} />
          <List text={"Measuring to ensure updates are a success "} />
          <List text={"And much more!"} />
         </div>
          <div className="flex flex-col w-full gap-2">
            <p className="text-[hsl(234,29%,20%)]">Email address</p>
            <input type="email" placeholder="email@company.com" className="p-3 border rounded-md"/>
            <p className="font-bold text-white text-center bg-[hsl(234,29%,20%)] p-3 rounded-md ">
              Subscribe to monthly newsletter
            </p>
          </div>
        </div>

        <Image className="w-[50%]" src={Imaillustration} alt={""} />
      </div>
    </main>
  );
}
