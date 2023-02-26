import Navigation from "./components/navigation";
import BodyInfo from "./components/info";
import FAQ from "./components/faq";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen text-center">
      <Navigation />
      <BodyInfo />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
