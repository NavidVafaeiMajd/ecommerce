"use client";

import { Form } from "@/app/components/sections/CompoundForm";
import { Button } from "@/app/components/ui/button";
import { SignInchema } from "@/app/lib/definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTransition } from "react";
import { toast } from "sonner";
import z from "zod";
import { useRouter } from "next/navigation";
import { signIn } from "@/app/lib/auth-client";
import { isErrorWithMessage } from "@/app/lib/utils";

const SignIn = () => {
  const router = useRouter();
  const [loading, startTransition] = useTransition();

  const form = useForm<z.infer<typeof SignInchema>>({
    resolver: zodResolver(SignInchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof SignInchema>) {
    console.log(data)
    startTransition(async () => {
      try {
        const { email, password } = data;

        await signIn.email({
          email,
          password,
          callbackURL: "/MyAccount",
          fetchOptions: {
            onError: (ctx) => {
              toast.error(ctx.error.message);
            },
            onSuccess: () => {
              toast.success("Successfully signed in");
              router.push("/MyAccount");
            },
          },
        });
      } catch (error: unknown) {
        if (isErrorWithMessage(error)) {
          toast.error(error.message);
        } else {
          toast.error("Something went wrong");
        }
      }
});
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
            <Form.Input
              disabled={loading}
              label="Email"
              name="email"
              variant="filled"
              required
            />
          </div>

          <div className="flex max-lg:flex-col gap-5">
            <Form.Input
              disabled={loading}
              label="Password"
              name="password"
              variant="filled"
              required
            />
          </div>

          <Button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Sign In"}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
