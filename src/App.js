import PreviewComponent from "./components/Preview";
import FooterComponent from "./components/Footer";

export default function App() {
  return (
    <main class="bg-gray-100 dark:bg-gray rounded-2xl h-screen overflow-hidden relative">
      <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
        {/* Header */}
        {/* <header class="w-full items-center h-16 rounded-2xl z-40">
          <span className="">This a header</span>
        </header> */}

        {/* content general view */}
        <section className="grid grid-cols-12 gap-4">
          {/* map container */}
          <div class="col-start-1 col-end-7 w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
            1
          </div>
          {/* graphs centroids container*/}
          <div class="col-span-6 w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
            2
          </div>
        </section>

        {/* content region details */}
        <section className="grid grid-cols-12 gap-4">
          <div className="col-span-12 w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
            content
          </div>
        </section>

        {/* footer */}
        <FooterComponent />
      </div>
    </main>
  );
}
