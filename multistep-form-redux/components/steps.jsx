import Step from "./step";

export default function Steps({ steps }) {
  return (
    <div className="rounded-md col-span-full md:col-span-4 bg-blue-800 p-10 flex flex-row justify-between md:flex-col md:justify-start gap-6 flex-wrap">
      {steps.map((step, i) => {
        return <Step key={i} step={step} />;
      })}
    </div>
  );
}
