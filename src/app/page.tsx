'use client'

import About from "./components/About";
import ContactMe from "./components/ContactMe";
import DragCarousel from "./components/DragCarousel";
import Featured from "./components/Featured";
import PageHeader from "./components/PageHeader";
import SineWaveDivs from "./components/SineWaveDivs";
export default function Home() {

  return (
    <main >
      <div className="sticky top-0">
        <PageHeader />
      </div>
      <div className="sticky md:top-0 -top-[400px]">
        <About />
      </div>
      <div className="sticky top-0">
        <Featured />
      </div>
      <div className="sticky top-0">
        <ContactMe />
      </div>

      {/* <Test/> */}
    </main>
  );
}
