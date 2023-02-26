import Navigation from "./components/navigation";
import BodyInfo from "./components/info";
import FAQ from "./components/faq";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen text-center text-red-900">
      <Navigation />
      {/* <div class="bg-fixed bg-cover" style={{height: "25rem", backgroundImage: "url(https://media.istockphoto.com/id/1130561533/photo/lebanese-doctor-standing-with-stethoscope-on-lebanon-flag-background-national-healthcare.jpg?s=612x612&w=0&k=20&c=ZXw5uNochGSky3VNSvnHmn0ZMIIWmx65wSh_k3fGa18=)"}}></div> */}
      <div class="bg-fixed bg-cover" style={{height: "25rem", backgroundImage: "url(https://www.brighamandwomens.org/assets/BWH/about-bwh/images/westwood-health-center-100-brigham-way-700x400.jpg)"}}></div>
      <BodyInfo />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
