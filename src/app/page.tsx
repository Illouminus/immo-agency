import {HomeComponent} from "@/components/Home/Home";
import {Problems} from "@/components/Problems/Problems";
import {Work} from "@/components/Work/Work";
import {Advertisement} from "@/components/Advertisment/Advertisement";
import {Insurance} from "@/components/Insurance/Insurance";
import {Jurist} from "@/components/Jurist/Jurist";
import {Contacts} from "@/components/Contacts/Contacts";

export default function Home() {
  return (
    <main>
        <HomeComponent />
        {/*<Problems />*/}
        <Work />
        <Advertisement />
        <Insurance />
        <Jurist />
        <Contacts />
    </main>
  )
}
