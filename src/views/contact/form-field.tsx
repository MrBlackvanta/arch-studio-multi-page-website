import type { ChangeEvent } from "react";

import type { ContactField } from "@/data";
import { cn } from "@/lib/utils";

type FormFieldProps = ContactField & {
  value: string;
  error: string | null;
  onChange: (value: string) => void;
};

export default function FormField({
  name,
  label,
  type,
  autoComplete,
  multiline,
  value,
  error,
  onChange,
}: FormFieldProps) {
  const id = `contact-${name}`;
  const errorId = `${id}-error`;

  const control = {
    id,
    name,
    value,
    autoComplete,
    placeholder: label,
    "aria-invalid": error !== null,
    "aria-describedby": error ? errorId : undefined,
    onChange: ({
      target,
    }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange(target.value),
  };

  const placeholderTone = error
    ? "placeholder:text-red-ink"
    : "placeholder:text-dark-grey";

  return (
    <div className="group relative v-reveal [--rise-shift:2rem]">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>

      {multiline ? (
        <textarea
          {...control}
          rows={3}
          className={cn(
            "v-field field-sizing-content min-h-23 resize-none pb-6.5",
            placeholderTone,
          )}
        />
      ) : (
        <input
          {...control}
          type={type ?? "text"}
          className={cn("v-field pb-5.5", placeholderTone, error && "pr-36")}
        />
      )}

      <div
        className={cn(
          "absolute inset-x-0 top-full -mt-px h-px bg-very-dark-blue group-focus-within:h-0.75",
          error && "bg-red",
        )}
      />

      {error && (
        <p
          id={errorId}
          className="absolute right-4 bottom-4 text-error font-bold text-red-ink"
        >
          {error}
        </p>
      )}
    </div>
  );
}
