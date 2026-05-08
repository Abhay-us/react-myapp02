import "./App.css";
import Header from "./components/header/Header";
import FeaturesCard from "./components/featuresCard/FeaturesCard";
import Feedback from "./components/feedback/Feedback";
import NewsImg from "./components/newUpdate/NewsUpdate";
import Roadmap from "./components/roadmap/Roadmap";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <FeaturesCard />
      <Feedback />
      <NewsImg />
      <Roadmap />
      <Footer />
    </>
  );
}

export default App;
