import React from "react";

const Header = React.lazy(() => import("header/Header"));
const Footer = React.lazy(() => import("footer/Footer"));
const Side = React.lazy(() => import("side/Side"));

function App() {
  return (
    <div>
      <React.Suspense fallback="Loading Header...">
        <Header />
      </React.Suspense>

      <React.Suspense fallback="Loading Side...">
        <Side />
      </React.Suspense>
      <h1 style={{ textAlign: "center" }}>App Shell Content</h1>
      <React.Suspense fallback="Loading Footer...">
        <Footer />
      </React.Suspense>
    </div>
  );
}

export default App;
