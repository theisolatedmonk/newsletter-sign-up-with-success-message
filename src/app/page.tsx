import Image from 'next/image'
import Imaillustration from '@/assets/images/illustration-sign-up-desktop.svg'
import List from './List'



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex text-black bg-white w-full">
        <div className="">
          <p className="font-bold">Stay Updated!</p>
          <p className="text-sm">Join 60,000+ product managers receiving monthly updates on:</p>
         <List text={'Product discovery and building what matters '}/>
         <List text={'Measuring to ensure updates are a success '}/>
         <List text={'And much more!'}/>
        </div>
        <Image src={Imaillustration} alt={''}/>

      </div>
    </main>
  )
}
