import Gallery from "@components/gallery";
import AboutUs from "@components/about";
import Hero from "@components/hero";
import Footer from "@components/footer";
import React, { Suspense } from "react";
import Contact from "@components/contact";
import Loader from "@components/loader";

export default function page() {
  return (
    <div className="flex flex-col">
      <Suspense fallback={<Loader />}>
        <Hero />
        <AboutUs />
        <Gallery />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}
