import HeroSection from "@/components/template/Homepage/HeroSection/HeroSection";
import MyProjects from "@/components/template/Homepage/MyProjects/MyProjects";
import MySkills from "@/components/template/Homepage/MySkills/MySkills";

export default function Home() {
  return (
    <main className="2xl:container mx-auto">
      <HeroSection />
      <MyProjects/>
      <MySkills/>
    </main>
  );
}
