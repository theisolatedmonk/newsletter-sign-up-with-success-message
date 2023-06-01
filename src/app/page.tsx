import Image from "next/image";
import Imaillustration from "@/assets/images/illustration-sign-up-desktop.svg";
import List from "./List";
import iconList from '@/assets/images/icon-list.svg'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[hsl(234,9%,20%)] font-Roboto ">
      <div className="flex text-black bg-white p-8  items-center rounded-lg gap-4 w-[900px] ">
       <form action="
       ">
         <div className="   justify-center items gap-12 border-0 flex flex-col items-start text-[16px]">
          <p className="font-bold text-5xl">Stay Updated!</p>
          <p className=" ">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
         <div className="flex flex-col  gap-2">
         <List text={"Product discovery and building what matters "} />
          <List text={"Measuring to ensure updates are a success "} />
          <List text={"And much more!"} />
         </div>
          <div className="flex flex-col w-full gap-2">
            <div className="flex justify-between">
              <p className="text-[hsl(234,29%,20%)] text-sm font-bold">Email address</p>
              <p className="text-[hsl(4,100%,67%)] text-sm font-bold">Valid email required</p>

              </div>
            <div className="flex flex-col gap-4"><input type="email" placeholder="email@company.com" className="p-3 border-2 rounded-md"/>
            <input  type="submit" value="Subscribe to monthly newsletter"  className="font-bold text-white text-center bg-[hsl(234,29%,20%)]  p-3 rounded-md hover:bg-[hsl(4,100%,67%)] "pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
              
            
            type="submit" value="Subscribe to monthly newsletter" 
            </div>
          </div>
        </div>
       </form>

        <Image className="" src={Imaillustration} alt={""} />
      </div>

      <div className="flex bg-white rounded-3xl text-[hsl(234,29%,20%)]  flex-col w-[500px] p-12 gap-4 hidden">
      <Image src={iconList} alt={''} className="w-16 h-16"/>
      <p className="text-5xl font-bold">Thanks for subscribing! </p>
      <p className="text-[hsl(234,9%,20%)]">A confirmation email has been sent to <span className="text-[hsl(234,29%,20%)] font-bold">ash@loremcompany.com</span> . Please open it and click the button inside to confirm your subscription.</p>
      <button className="hover:bg-[hsl(4,100%,67%)]  bg-[hsl(234,29%,20%)] text-center rounded-lg p-4 font-bold text-white">Dismiss message</button>
      </div>
      
    </main>
  );
}
