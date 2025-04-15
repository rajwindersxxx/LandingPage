import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import MovingLogo from "./components/MovingLogo";
import SessionCallToAction from "./components/SessionCallToAction";
import SessionContact from "./components/SessionContact";
import SessionService from "./components/SessionService";
import SessionTestimonials from "./components/SessionTestimonials";
import SocialIcons from "./components/SocialIcons";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        {/* <MovingLogo /> */}
        <SocialIcons />
        <Features />
        <SessionService />
        <SessionTestimonials />
        <SessionContact />
        <SessionCallToAction />
        <Footer />
      </main>
    </div>
  );
}
