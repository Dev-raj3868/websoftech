
import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/home/HeroSection';
import AchievementsSection from '../components/home/AchievementsSection';
import StatsSection from '../components/home/StatsSection';
import ServicesPreview from '../components/home/ServicesPreview';
import TechnologiesSection from '../components/home/TechnologiesSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import TestimonialsPreview from '../components/home/TestimonialsPreview';
import CTASection from '../components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AchievementsSection />
      <StatsSection />
      <ServicesPreview />
      <TechnologiesSection />
      <WhyChooseUsSection />
      <TestimonialsPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
