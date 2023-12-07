import "@styles/global.css";
import { Suspense } from "react";
import Loader from "@components/loader";
import Navbar from "@components/navbar";

export const metadeta = {
  title: "Butterfly Effect Universe",
  description:
    "A web application for the butterfly effect universe, which aims the conservation of butterflies in Pakistan, and create awareness about the impact of butterflies in our ecosystem",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en-US">
      <head>
        <title>Butterfly Effect Universe</title>
        <link rel="icon" href="/assets/images/logo2.svg" />
      </head>
      <body>
        <Suspense fallback={<Loader />}>
          <Navbar />
          <main style={{
            backgroundImage: `url("/assets/images/bg.jpg")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            // backgroundSize: "cover",
            backgroundAttachment: "fixed",
            // define background size
            backgroundSize: "100% 100%",
            // opacity of the background image
            
          }}>
            <div className="main" style={{ position: "absolute", width: 'auto' }}>
              <div className="gradient" />
            </div>
            {children}
          </main>
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
