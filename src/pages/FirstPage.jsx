import { 
    Box
} from "@chakra-ui/react";

import LandingPageNavBar from '../util/LandingPageNavBar';
import Hero from "../components/Hero";
import About from "../components/About";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import Footer from "../components/Footer";

const FirstPage = () => {
    return (
    <Box>
      <LandingPageNavBar />
      <Hero />
      <About />
      <HowItWorks />
      <Features />
      <Footer />
    </Box>
    )
}

export default FirstPage