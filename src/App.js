import Navigation from "./components/layout/navigation";
import Footer from "./components/layout/footer";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen text-center">
        <Navigation />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
