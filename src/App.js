import MapChart from "./views/MapChart";
import CentroidsClustersCharts from "./views/CentroidsClustersCharts";
import DetailsWeatherCharts from "./views/DetailsWeatherCharts";
import { FooterComponent } from "./components/Footer";

export default function App() {
  return (
    <main className="bg-gray-100 h-full w-full relative">
      <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4 mt-2">
        {/* content general view */}
        <section className="grid grid-cols-12 gap-4">
          {/* map container */}
          <div className="col-span-12 p-4 w-full shadow-lg bg-white dark:bg-gray-700 items-center h-full rounded-2xl z-40">
            <MapChart />
          </div>
        </section>

        {/* graphs centroids container*/}
        <section className="p-4 w-full shadow-lg bg-white h-full rounded-2xl z-40">
          <CentroidsClustersCharts />
        </section>

        {/* content region details */}
        <section className="grid grid-cols-12 gap-4">
          <div className="col-span-12 p-4 w-full shadow-lg bg-white dark:bg-gray-700 items-center h-full rounded-2xl z-40">
            <DetailsWeatherCharts />
          </div>
        </section>

        {/* footer */}
        <footer>
          <FooterComponent />
        </footer>
      </div>
    </main>
  );
}
