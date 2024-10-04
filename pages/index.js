import LeftCard from "./components/LeftCard";
import RightCard from "./components/RightCard";

export default function Home() {
  return (
    <div className="min-h-0 w-full h-fit lg:h-[100vh] flex flex-col lg:flex-row items-center justify-center text-center pt-10">
      <LeftCard />
      <RightCard />
    </div>
  );
}
