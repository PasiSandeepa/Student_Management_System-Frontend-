import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

export default function About() {
     return (
          <div className="container">
               <div className="row">
                    <NavBar />
               </div>
               <div className="row">
                    <h1 className="bg-gradient display-5 fw-bold lh-1 mb-3">ABOUT PAGE</h1>
               </div>
               <div className="row">
                    <Hero />
               </div>
               <div className="row">
                    <Footer />
               </div>
          </div>
     )
}