import ShootingStars from "@/public/ShootingStars/ShootingStars";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p>test</p>
      <div className="-z-10 overflow-hidden">
        <ShootingStars />
      </div>
    </div>
  );
}
