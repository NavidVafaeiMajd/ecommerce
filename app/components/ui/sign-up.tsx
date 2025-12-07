"use client";
import { Form } from "@/app/components/sections/CompoundForm";
import { Button } from "@/app/components/ui/button";
import { signUp } from "@/app/lib/auth-client";
import { SignUpchema } from "@/app/lib/definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const SignUp = () => {
    const [loading, startTransition] = useTransition();
  const router = useRouter();
  const form = useForm<z.infer<typeof SignUpchema>>({
    resolver: zodResolver(SignUpchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  function onSubmit(data: any) {
    startTransition(async () => {
      try {
        const { email, password, name } = data;

        await signUp.email({
          email,
          password,
          name: `${name}`,
          image: "",
          callbackURL: "/MyAccount",
          fetchOptions: {
            onError: (ctx) => {
              toast.error(ctx.error.message);
            },
            onSuccess: () => {
              toast.success("Successfully signed up");
              router.push("/MyAccount");
            },
          },
        });
      } catch (error: any) {
        toast.error(error?.message || "Something went wrong");
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
            <Form.Input disabled={loading} label="Name" name="name" variant="filled" required />
          </div>
          <div className="flex max-lg:flex-col gap-5">
            <Form.Input disabled={loading} label="Email" name="email" variant="filled" required />
          </div>
          <div className="flex max-lg:flex-col gap-5">
            <Form.Input
              label="Password"
              name="password"
              variant="filled"
                          required
                disabled={loading}
            />
          </div>
          <Button type="submit" disabled={loading}>{loading ? "Loading...":"Sign Up"}</Button>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
