import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chooseDesign, chooseFramework, chooseLanguage, chooseLevel } from "../../redux/formSlice";

const levels = [
  { value: "junior", title: "Junior" },
  { value: "medior", title: "Medior" },
  { value: "senior", title: "Senior" },
];

export function StepOne() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const level = useSelector((state) => state.form.level);
  const { register, handleSubmit } = useForm({ defaultValues: { level } });

  const onSubmit = (data) => {
    dispatch(chooseLevel(data.level));
    navigate("/step-two");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="level">Choose Your Level:</label>
        <select name="level" id="level" {...register("level")}>
          {levels.map((level) => (
            <option key={level.value} value={level.value}>
              {level.title}
            </option>
          ))}
        </select>
      </div>
      <button>Next</button>
    </form>
  );
}

const languages = [
  { value: "php", title: "PHP" },
  { value: "javascript", title: "JavaScript" },
];

export function StepTwo() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const language = useSelector((state) => state.form.language);
  const { register, handleSubmit } = useForm({ defaultValues: { language } });

  const onSubmit = (data) => {
    dispatch(chooseLanguage(data.language));
    navigate("/step-three");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="language">Pick language:</label>
        <select id="language" name="language" {...register("language")}>
          {languages.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.title}
            </option>
          ))}
        </select>
      </div>
      <button>Next</button>
    </form>
  );
}

//TODO: Step Three

const frameworks = [
  { value: "react", title: "React" },
  { value: "vue", title: "Vue" },
  { value: "angular", title: "Angular" },
  { value: "svelte", title: "Svelte" },
];

export function StepThree() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const framework = useSelector((state) => state.form.framework);
  const { register, handleSubmit } = useForm({ defaultValues: { framework } });

  const onSubmit = (data) => {
    dispatch(chooseFramework(data.framework));
    navigate("/step-four");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="framework">Pick framework:</label>
        <select id="framework" name="framework" {...register("framework")}>
          {frameworks.map((fram) => (
            <option key={fram.value} value={fram.value}>
              {fram.title}
            </option>
          ))}
        </select>
      </div>
      <button>Next</button>
    </form>
  );
}

//TODO: Step Four -- Designing

const designing = [
  { value: "tailwind_css", title: "Tailwind Css" },
  { value: "shadcn_ui", title: "Shadcn Ui" },
  { value: "css_sass", title: "CSS & Saas" },
];

export function StepFour() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const design = useSelector((state) => state.form.design);
  const { register, handleSubmit } = useForm({ defaultValues: { design } });

  const onSubmit = (data) => {
    dispatch(chooseDesign(data.design));
    navigate("/result");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="design">Pick design:</label>
        <select id="design" name="design" {...register("design")}>
          {designing.map((design) => (
            <option key={design.value} value={design.value}>
              {design.title}
            </option>
          ))}
        </select>
      </div>
      <button>Next</button>
    </form>
  );
}

//TODO: Result

export function Result() {
  const state = useSelector((state) => state.form);

  return (
    <>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <Link to="/">Start over</Link>
    </>
  );
}
