import Features from "./Features";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import MovingLogo from "./MovingLogo";
// import MovingLogo from "./MovingLogo";
import SessionCallToAction from "./SessionCallToAction";
import SessionContact from "./SessionContact";
import SessionService from "./SessionService";
import SessionTestimonials from "./SessionTestimonials";
import SocialIcons from "./SocialIcons";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MovingLogo />
        <SocialIcons />
        <Features />
        <SessionService />
        <SessionTestimonials />
        <SessionContact/>
        <SessionCallToAction/>
        <Footer/>
      </main>
    </>
  );
}
