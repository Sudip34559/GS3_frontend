import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Service from "./pages/Service";
import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { TransitionProvider } from "./Context/TransitionContext";
import TransitionComponent from "./Context/Transition";
import Layout from "./layout/Layout";
import { useEffect, useState } from "react";
import PageLoder from "./layout/components/common/PageLoder";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate 3-second loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer); // cleanup
  }, []);
  if (loading) {
    return <PageLoder />;
  }
  return (
    <BrowserRouter>
      <Layout>
        <TransitionProvider>
          <Routes>
            <Route
              index
              element={
                <TransitionComponent>
                  <Home />
                </TransitionComponent>
              }
            />
            <Route
              path="/about"
              element={
                <TransitionComponent>
                  <About />
                </TransitionComponent>
              }
            />
            <Route
              path="/contact"
              element={
                <TransitionComponent>
                  <Contact />
                </TransitionComponent>
              }
            />

            <Route
              path="/services"
              element={
                <TransitionComponent>
                  <Service />
                </TransitionComponent>
              }
            />

            {/* Add more routes here as needed */}
          </Routes>
        </TransitionProvider>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
