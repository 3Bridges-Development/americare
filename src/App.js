import Navigation from "./components/layout/navigation";
import Footer from "./components/layout/footer";
import HomePage from "./views/HomeView";
import AboutPage from "./views/AboutView";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen text-center text-red-900">
      <Navigation />
      <div
        class="bg-fixed bg-cover"
        style={{
          height: "25rem",
          backgroundImage:
            "url(https://www.brighamandwomens.org/assets/BWH/about-bwh/images/westwood-health-center-100-brigham-way-700x400.jpg)",
        }}
      ></div>
      <BodyInfo />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
