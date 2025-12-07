"use client";
import { Form } from "@/app/components/sections/CompoundForm";
import { Button } from "@/app/components/ui/button";
import { SignInchema } from "@/app/lib/definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const SignIn = () => {
  const form = useForm<z.infer<typeof SignInchema>>({
    resolver: zodResolver(SignInchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit() {
    console.log("ok");
  }
  return (
    <div className="md:col-span-4 flex flex-col gap-10">
      <div>
        <Form
          formProp={form}
          onSubmit={onSubmit}
          className="flex flex-col gap-5"
        >
          <div className="flex max-lg:flex-col gap-5">
            <Form.Input label="Email" name="email" variant="filled" required />
          </div>
          <div className="flex max-lg:flex-col gap-5">
            <Form.Input
              label="Password"
              name="password"
              variant="filled"
              required
            />
          </div>
          <Button type="submit">Sign In</Button>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
