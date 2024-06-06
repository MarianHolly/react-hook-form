"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { z } from "zod";
import { FormDataSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

const steps = [];

export default function Form() {
  const {} = useForm();

  return (
    <section className="absolute inset-0 flex flex-col justify-between p-24">
      {/* Steps */}
      <nav aria-label="Progress"></nav>

      {/* Form */}
      <form className="mt-12 py-12"></form>

      {/* Navigation */}
      <div className="mt-8 pt-5"></div>
    </section>
  );
}
