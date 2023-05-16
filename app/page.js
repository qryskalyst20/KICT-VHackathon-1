import ShootingStars from "@/public/ShootingStars/ShootingStars";
import NavigationBar from "@/public/components/NavigationBar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <p>test</p>
      <div className="-z-10 overflow-hidden">
        <ShootingStars />
      </div>
    </div>
  );
}
