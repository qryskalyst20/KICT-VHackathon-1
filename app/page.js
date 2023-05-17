import ShootingStars from "@/public/ShootingStars/ShootingStars";
import HomeContainer from "@/public/components/HomeContainer";
import Landing from "@/public/components/Landing";
// import NavigationBar from "@/public/components/NavigationBar";

export default function Home() {
  return (
    <div>
      {/* <NavigationBar /> */}
      <div className="-z-10 overflow-hidden">
        <ShootingStars />
      </div>
      <main className="relative z-2">
        <Landing />
        <HomeContainer />
      </main>
    </div>
  );
}
