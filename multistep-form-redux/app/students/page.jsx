import { steps } from "@/config";

import Steps from "@/components/steps";
import StepForm from "@/components/step-form";

export default function Page() {
  return (
    <div className="bg-blue-50 min-h-screen p-4">
      <div className="mx-auto w-full max-w-5xl p-4 bg-white border border-gray-200 rounded-md shadow sm:p-4 md:p-6 grid grid-cols-12 gap-4 min-h-screen">
        <Steps steps={steps} />
        <div className="rounded-md col-span-full md:col-span-8">
          <StepForm />
          <h2 className="text-center text-3xl font-bold">HELLO</h2>
        </div>
      </div>
    </div>
  );
}
