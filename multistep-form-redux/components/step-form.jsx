"use client";

import { useSelector } from "react-redux";

import Education from "./form/education";
import PersonalInfo from "./form/personal-info";
import TechnicalSkills from "./form/technical-skills";
import FormConfirmation from "./form/form-confirmation";
import PreferredLanguages from "./form/preferred-languages";
import ProgrammingExperience from "./form/programming-experience";

export default function StepForm() {
  const currentStep = 3
  
  function renderFormByStep(step) {
    if (step === 1) {
      <PersonalInfo />;
    } else if (step === 2) {
      <Education />;
    } else if (step === 3) {
      <ProgrammingExperience />;
    } else if (step === 4) {
      <PreferredLanguages />;
    } else if (step === 5) {
      <TechnicalSkills />;
    } else if (step === 6) {
      <FormConfirmation />;
    }
  }

  return <>{renderFormByStep(currentStep)}</>;
}
