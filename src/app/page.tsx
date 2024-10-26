import LatestTrips from "./components/Dashboard/LatestTrips";
import LineGraph from "./components/Dashboard/LineGraph";
import TopThree from "./components/Dashboard/TopThree";

export default async function Home() {
  let data = await fetch('https://rapidtechinsights.github.io/hr-assignment/recent.json');
  let res = await data.json()
  return (
    <div className="max-w-[80%] grid gap-4  grid-cols-2 mx-auto mt-6">
      <div className="col-span-2 border-red-500 ">
        <LineGraph dts={res}/>
      </div>
      <div className="col-span-2 md:col-span-1">
        <LatestTrips dts={res}/>
      </div>
      <div className="col-span-2 md:col-span-1">
        <TopThree dts={res}/>
      </div>
    </div>

  );
}
