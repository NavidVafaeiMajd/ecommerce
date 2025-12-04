"use client";

import React, { createContext, useContext } from "react";
import {
  Form as ShadcnForm,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import type {
  FieldValues,
  Path,
  UseFormReturn,
  SubmitHandler,
} from "react-hook-form";
import { cn } from "@/app/lib/utils";
import { Checkbox } from "@/app/components/ui/checkbox";
// import Select from "react-select";

// ---------- Context ----------
interface FormContextType<T extends FieldValues> {
  form: UseFormReturn<T>;
}

const FormContext = createContext<FormContextType<any> | null>(null);

function useFormContextSafe<T extends FieldValues>() {
  const ctx = useContext(FormContext);
  if (!ctx) {
    throw new Error("Form.* components must be used inside <Form>");
  }
  return ctx.form as UseFormReturn<T>;
}

// ---------- Root ----------
interface FormRootProps<T extends FieldValues> {
  formProp: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
  className?: string;
  children: React.ReactNode;
  accordion?: boolean;
  accordionTitle?: string;
  defaultAccordionOpen?: boolean;
}

function FormRoot<T extends FieldValues>({
  formProp,
  onSubmit,
  className,
  children,
}: FormRootProps<T>) {
  const content = (
    <form onSubmit={formProp.handleSubmit(onSubmit)} className={cn(className)}>
      {children}
    </form>
  );

  return (
    <FormContext.Provider value={{ form: formProp }}>
      <ShadcnForm {...formProp}>{content}</ShadcnForm>
    </FormContext.Provider>
  );
}

// ---------- Input ----------
interface FormInputProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  inputClassName?: string;
  disabled?: boolean;
  variant?: "default" | "outline" | "filled" | null | undefined;
}

function FormInput<T extends FieldValues>({
  name,
  label,
  placeholder,
  required,
  className,
  inputClassName,
  disabled,
  variant,
}: FormInputProps<T>) {
  const { control } = useFormContextSafe<T>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={`w-full ${className ?? ""}`}>
          <FormLabel className="text-base">
            {label} {required && <span className="text-red-500">* </span>}
          </FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              className={` ${inputClassName ?? ""}`}
              disabled={disabled}
              {...field}
              variant={variant ? variant : "default"}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
// ---------- Textarea ----------
interface FormTextareaProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  textareaClassName?: string;
}

function FormTextarea<T extends FieldValues>({
  name,
  label,
  placeholder,
  required,
  className,
  textareaClassName,
}: FormTextareaProps<T>) {
  const { control } = useFormContextSafe<T>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={`w-full space-y-2 ${className ?? ""}`}>
          <FormLabel className="text-base">
            {label} {required && <span className="text-red-500">* </span>}
          </FormLabel>
          <FormControl>
            <textarea
              placeholder={placeholder}
              className={`w-full  p-2 border rounded-md ${
                textareaClassName ?? ""
              }`}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
// //---------- MultiSelect ----------

// interface MultiSelectProps<T extends FieldValues> {
//   name: Path<T>;
//   label: string;
//   options: { label: string; value: any }[];
//   required?: boolean;
//   className?: string;
//   placeholder?: string;
//   disabled?: boolean;
// }

// export function MultiSelect<T extends FieldValues>({
//   name,
//   label,
//   options,
//   required,
//   className,
//   placeholder,
//   disabled,
// }: MultiSelectProps<T>) {
//   const { control } = useFormContextSafe<T>();
//   return (
//     <FormField
//       control={control}
//       name={name}
//       render={({ field }) => (
//         <FormItem className={`grid gap-0! w-full ${className ?? ""}`}>
//           <FormLabel className="text-md mb-4!">
//             {label} {required && <span className="text-red-500">* </span>}
//           </FormLabel>
//           <FormControl>
//             <div className="select-box">
//               <Select<{ label: string; value: string }, false>
//                 isRtl
//                 closeMenuOnSelect
//                 placeholder={placeholder}
//                 options={options}
//                 className=" m-0!"
//                 value={options.find((opt) => opt.value === field.value) ?? null}
//                 onChange={(val) =>
//                   field.onChange(
//                     val ? (val as { label: string; value: string }).value : ""
//                   )
//                 }
//                 isDisabled={disabled}
//               />
//             </div>
//           </FormControl>
//           <div className="space-y-1 leading-none">
//             <FormMessage />
//           </div>
//         </FormItem>
//       )}
//     />
//   );
// }

// ---------- Checkbox ----------
interface FormCheckboxProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  required?: boolean;
  className?: string;
}

function FormCheckbox<T extends FieldValues>({
  name,
  label,
  required,
  className,
}: FormCheckboxProps<T>) {
  const { control } = useFormContextSafe<T>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={`flex flex-row items-center space-x-2 space-y-0 ${
            className ?? ""
          }`}
        >
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
              className="size-6"
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel className="text-md">
              {label} {required && <span className="text-red-500">* </span>}
            </FormLabel>
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
}

export const Form = Object.assign(FormRoot, {
  Input: FormInput,
  // Select: FormSelect,
  Textarea: FormTextarea,
  Checkbox: FormCheckbox,
});
