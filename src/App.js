import MapChartComponent from "./components/MapMoroccoChart";
import CentroidsChartsComponents from "./components/CentroidsCharts";
import RegionWeatherDetailComponent from "./components/RegionWeatherDetail";
import FooterComponent from "./components/Footer";

export default function App() {
  return (
    <main class="bg-gray-100 h-full relative">
      <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4 mt-2">
        {/* content general view */}
        <section className="grid grid-cols-12 gap-4">
          {/* map container */}
          <div class="col-span-12 p-4 w-full shadow-lg bg-white dark:bg-gray-700 items-center h-full rounded-2xl z-40">
            <MapChartComponent />
          </div>
        </section>

        {/* graphs centroids container*/}
        <section className="grid grid-cols-12 gap-4">
          <div class="col-span-6 p-4 w-full shadow-lg bg-white items-center h-full rounded-2xl z-40">
            <CentroidsChartsComponents />
          </div>

          <div class="col-span-6 p-4 w-full shadow-lg bg-white items-center h-full rounded-2xl z-40">
            <CentroidsChartsComponents />
          </div>

          <div class="col-span-6 p-4 w-full shadow-lg bg-white items-center h-full rounded-2xl z-40">
            <CentroidsChartsComponents />
          </div>

          <div class="col-span-6 p-4 w-full shadow-lg bg-white items-center h-full rounded-2xl z-40">
            <CentroidsChartsComponents />
          </div>
        </section>

        {/* content region details */}
        <section className="grid grid-cols-12 gap-4">
          <div className="col-span-12 p-4 w-full shadow-lg bg-white dark:bg-gray-700 items-center h-full rounded-2xl z-40">
            <RegionWeatherDetailComponent />
          </div>
        </section>

        {/* footer */}
        <FooterComponent />
      </div>
    </main>
  );
}
