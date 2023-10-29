import Gallery from "@components/gallery";
import AboutUs from "@components/about";
import Hero from "@components/hero";
import Footer from "@components/footer";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutUs />
      <Gallery />
      <Footer />
    </div>
  );
}
