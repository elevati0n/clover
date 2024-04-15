import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "./../";

export default function IndexPage() {
  return (
    <>
      <Seo title="Clover Fields || Fine Artist and Tattooer || @LoveYouClover" />
      <Page useSplashScreenAnimation={false}>
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['blog']} />
        <AboutSection sectionId="about" heading="About Portfolio Minimal" />
        <ContactSection sectionId="" heading="Book now!" />
        <InterestsSection sectionId="details" heading="Details" />
        <ProjectsSection sectionId="features" heading="Built-in Features" />
      </Page>
    </>
  );
}
