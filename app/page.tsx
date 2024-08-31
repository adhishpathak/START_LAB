import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturedLogos from './components/FeaturedLogos';
import PricingSection from './components/PricingSection';
import Testimonials from './components/Testimonials';
import MarketingSection from './components/MarketingSection';
import AboutCourseSection from './components/AboutCourseSection';
import CourseSummary from './components/CourseSummary';
import WhatYouLearn from './components/WhatYouLearn';

export default function Page() {
  return (
    <>
      <HeroSection />
      <Testimonials />
      <FeaturedLogos />
      <AboutCourseSection />
      <CourseSummary />
      <WhatYouLearn />
      <MarketingSection />
      <PricingSection />
    </>
  );
}
