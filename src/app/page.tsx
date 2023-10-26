import {HomeComponent} from "@/components/Home/Home";
import {Problems} from "@/components/Problems/Problems";
import {Work} from "@/components/Work/Work";
import {Advertisement} from "@/components/Advertisment/Advertisement";
import {Insurance} from "@/components/Insurance/Insurance";

export default function Home() {
  return (
    <main>
        <HomeComponent />
        <Problems />
        <Work />
        <Advertisement />
        <Insurance />
    </main>
  )
}
