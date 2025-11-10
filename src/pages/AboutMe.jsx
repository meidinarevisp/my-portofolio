import AboutHero from "../components/AboutHero";
import AboutSkills from "../components/AboutSkills";
import WorkExperienceSection from "../components/WorkExperienceSection";
import EducationSection from "../components/EducationSection";
import CertificationsSection from "../components/CertificationsSection";

export default function AboutMe() {
  return (
    <div>
      <AboutHero />
      <AboutSkills />
      <WorkExperienceSection />
      <EducationSection />
      <CertificationsSection />
    </div>
  );
}
