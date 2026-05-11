import Hero from "../components/Hero";
import ValuePropBar from "../components/ValuePropBar";
import ProblemApproach from "../components/ProblemApproach";
import Solutions from "../components/Solutions";
import PlatformOverview from "../components/PlatformOverview";
import VideoSection from "../components/VideoSection";
import HowItWorks from "../components/HowItWorks";
import AriaFeature from "../components/AriaFeature";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <ValuePropBar />
      <ProblemApproach />
      <Solutions />
      <PlatformOverview />
      <VideoSection />
      <HowItWorks />
      <AriaFeature />
      <ContactForm />
    </>
  );
}
