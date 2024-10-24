import LatestTrips from "./components/Dashboard/LatestTrips";
import LineGraph from "./components/Dashboard/LineGraph";
import TopThree from "./components/Dashboard/TopThree";

export default function Home() {
  return (
    <div className="max-w-[80%] grid gap-4  grid-cols-2 mx-auto h-[90vh] mt-6">
      <div className="col-span-2 border-red-500 ">
        <LineGraph />
      </div>
      <div className="col-span-2 md:col-span-1">
        <LatestTrips />
      </div>
      <div className="col-span-2 md:col-span-1">
        <TopThree/>
      </div>
    </div>

  );
}
