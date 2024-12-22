import Donate from "@/components/Donate";
import HeroPage from "@/components/HeroPage";
import Mission from "@/components/Mission";
import Partners from "@/components/Partners";
import Projects from "@/components/Projects";
import VHeart from "@/components/VHeart";


export default function Home() {
  return (
    <div>
      <HeroPage/>
      <VHeart/>
      <Mission/>
      <Projects/>
      <Partners/>
      <Donate/>
      <div className="h-5"/>
    </div>
  );
}
