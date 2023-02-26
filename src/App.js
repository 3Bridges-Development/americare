import Navigation from "./components/layout/navigation";
import Footer from "./components/layout/footer";
import HomePage from "./views/HomeView";
import AboutPage from "./views/AboutView";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen text-center">
      <Navigation />
      <div
        class="bg-fixed bg-cover"
        style={{
          height: "25rem",
          backgroundImage:
            "url(https://media.istockphoto.com/id/1130561533/photo/lebanese-doctor-standing-with-stethoscope-on-lebanon-flag-background-national-healthcare.jpg?s=612x612&w=0&k=20&c=ZXw5uNochGSky3VNSvnHmn0ZMIIWmx65wSh_k3fGa18=)",
        }}
      ></div>
      <HomePage />
      <AboutPage />
      <Footer />
    </div>
  );
}

export default App;
