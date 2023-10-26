import Image from 'next/image'
import {HomeComponent} from "@/components/Home/Home";
import {Problems} from "@/components/Problems/Problems";
import {Work} from "@/components/Work/Work";

export default function Home() {
  return (
    <main>
        <HomeComponent />
        <Problems />
        <Work />
    </main>
  )
}
