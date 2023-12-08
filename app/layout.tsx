"use client";
import "@styles/global.css";
import React, { Suspense } from "react";
import Loader from "@components/loader";
import Navbar from "@components/navbar";

export const metadeta = {
  title: "Butterfly Effect Universe",
  description:
    "A web application for the butterfly effect universe, which aims the conservation of butterflies in Pakistan, and create awareness about the impact of butterflies in our ecosystem",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setLoading(true), 1200);
  });
  return (
    <html lang="en-US">
      <head>
        <title>Butterfly Effect Universe</title>
        <link rel="icon" href="/assets/images/logo2.svg" />
      </head>
      <body>
        {!loading ? (
          <Loader />
        ) : (
          <Suspense fallback={<Loader />}>
            <Navbar />
            <main
              style={{
                backgroundImage: `url("/assets/images/bg.jpg")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundSize: "auto 100%",
              }}
            >
              <div
                className="main"
                style={{ position: "absolute", width: "auto" }}
              >
                <div className="gradient" />
              </div>
              {children}
            </main>
          </Suspense>
        )}
      </body>
    </html>
  );
};

export default RootLayout;
