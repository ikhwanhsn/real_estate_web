import Contact from "./elements/Contact"
import Deals from "./elements/Deals"
import Footer from "./elements/Footer"
import Gallery from "./elements/Gallery"
import Header from "./elements/Header"
import OurStory from "./elements/OurStory"
import Reviews from "./elements/Reviews"
import Services from "./elements/Services"
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className="h-full bg-gray-100 relative">
      <Header/>
      <OurStory/>
      <Services/>
      <Deals/>
      <Reviews/>
      <Gallery/>
      <Contact/>
      <Footer/>
      <ScrollToTop smooth top={700} component={'^'}/>
    </div>
  )
}


export default App
