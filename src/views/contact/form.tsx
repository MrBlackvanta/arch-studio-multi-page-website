"use client";

import { useState } from "react";
import type { SubmitEvent } from "react";
import { flushSync } from "react-dom";

import { ArrowIcon } from "@/components/icons";
import { contactForm } from "@/data";
import type { ContactField, ContactFieldName } from "@/data";

import FormField from "./form-field";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const blank: Record<ContactFieldName, string> = {
  name: "",
  email: "",
  message: "",
};

export default function Form() {
  const { lines, fields, submitLabel, emptyError, emailError, success } =
    contactForm;
  const [values, setValues] = useState(blank);
  const [submitted, setSubmitted] = useState(false);
  const [sent, setSent] = useState(0);

  const errorFor = ({ name, type }: ContactField) => {
    const value = values[name].trim();
    if (!value) return emptyError;
    if (type === "email" && !EMAIL_PATTERN.test(value)) return emailError;
    return null;
  };

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const invalid = fields.find((field) => errorFor(field));

    if (!invalid) {
      setValues(blank);
      setSubmitted(false);
      setSent(sent + 1);
      return;
    }

    flushSync(() => {
      setSubmitted(true);
      setSent(0);
    });
    form.querySelector<HTMLElement>(`[name="${invalid.name}"]`)?.focus();
  };

  return (
    <section className="pt-18.25 pb-18 md:pt-49.75 md:pb-50 lg:pt-39.75 lg:pb-40">
      <div className="v-container lg:grid lg:grid-cols-3 lg:gap-x-7.5">
        <h2
          id="connect-with-us"
          className="text-h2-sm font-bold text-very-dark-blue md:text-h2 lg:col-start-1 lg:row-start-1"
        >
          <span className="block v-clip md:inline-block md:align-bottom lg:block">
            <span className="block v-reveal">{lines[0]}</span>
          </span>{" "}
          <span className="block v-clip md:inline-block md:align-bottom lg:block">
            <span className="block v-reveal">{lines[1]}</span>
          </span>
        </h2>

        <form
          noValidate
          aria-labelledby="connect-with-us"
          onSubmit={handleSubmit}
          className="mt-10.5 md:mt-15 lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:mt-1.5"
        >
          <div className="space-y-10.75">
            {fields.map((field) => (
              <FormField
                key={field.name}
                {...field}
                value={values[field.name]}
                error={submitted ? errorFor(field) : null}
                onChange={(value) =>
                  setValues({ ...values, [field.name]: value })
                }
              />
            ))}
          </div>

          <div className="flex items-center gap-8 v-reveal [--rise-shift:2rem]">
            <p
              key={sent}
              role="status"
              className="text-label text-very-dark-blue"
            >
              {sent > 0 && success}
            </p>
            <button
              type="submit"
              aria-label={submitLabel}
              className="ml-auto v-btn size-20 justify-center"
            >
              <ArrowIcon className="h-5 w-6.5" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
