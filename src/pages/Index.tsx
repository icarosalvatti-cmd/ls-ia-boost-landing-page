import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { Solution } from "@/components/Solution";
import { Technology } from "@/components/Technology";
import { Differentials } from "@/components/Differentials";
import { Results } from "@/components/Results";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Problems />
      <Solution />
      <Technology />
      <Differentials />
      <Results />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Index;
