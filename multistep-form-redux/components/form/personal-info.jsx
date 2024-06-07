"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentStep, updateFormData } from "@/redux/studentsSlice";
import { gender } from "@/config";

import TextInput from "../elements/text-input";
import SelectInput from "../elements/select-input";
import NavButtons from "../elements/nav-buttons";

export default function PersonalInfo() {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const formData = useSelector((store) => store.students.formData);
  const currentStep = useSelector((store) => store.students.currentStep);

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { ...formData } });

  async function processData(data) {
    dispatch(updateFormData(data));
    dispatch(setCurrentStep(currentStep + 1));
  }

  return (
    <form className="px-12 py-4" onSubmit={handleSubmit(processData)}>
      <div className="mb-8">
        <h5 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">
          Personal info
        </h5>
        <p>Please provide your name,email address,and phone number.</p>
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        <TextInput
          label="Full Name"
          name="fullName"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Email Address"
          name="email"
          type="email"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Phone Number"
          name="phone"
          type="number"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Date of Birth"
          type="date"
          name="dob"
          register={register}
          errors={errors}
        />
        <SelectInput
          label="Select your Gender"
          name="gender"
          register={register}
          options={gender}
        />
        <TextInput
          label="Your Location Address"
          name="location"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Your Country of Residence"
          name="country"
          register={register}
          errors={errors}
        />
      </div>

      <NavButtons />
    </form>
  );
}
