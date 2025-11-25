"use client";

import { Form } from "@/components/sections/CompoundForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";

const Page = () => {
  const formSchema = z.object({
    firstName: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
    },
  });
  function onSubmit() {
    console.log("ok");
  }
  return (
    <div>
      <div className="text-foreground! mb-5">
        <h3 className="text-2xl mb-2!">My Order</h3>
        <p>Add Address</p>
      </div>
      <div>
        <Form formProp={form} onSubmit={onSubmit} className="flex flex-col gap-5">
          <div className="flex max-lg:flex-col gap-5">
            <Form.Input
              label="Fisrt Name"
              name="firstName"
              variant="filled"
              required
            />
            <Form.Input
              label="Last Name"
              name="lastName"
              variant="filled"
              required
            />
          </div>
          <div className="flex max-lg:flex-col gap-5">
            <Form.Input
              label="Country / Region"
              name="Country"
              variant="filled"
              required
            />
            <Form.Input
              label="Compony Name"
              name="componyName"
              variant="filled"
              required
            />
          </div>
          <div className="flex max-lg:flex-col gap-5">
            <Form.Input
              label="Streat Address"
              name="streatAddress"
              variant="filled"
              required
            />
            <Form.Input
              label="Unit"
              name="Unit"
              variant="filled"
              required
            />
          </div>
          <div className="flex max-lg:flex-col gap-5">
            <Form.Input
              label="City"
              name="city"
              variant="filled"
              required
            />
            <Form.Input
              label="State"
              name="state"
              variant="filled"
              required
            />
                  </div>
                            <div className="flex max-lg:flex-col gap-5">
            <Form.Input
              label="Phone"
              name="phone"
              variant="filled"
              required
            />
            <Form.Input
              label="Postal Code"
              name="postalCode"
              variant="filled"
              required
            />
                  </div>
                  <div>
                      
                  </div>
          <Button type="submit">save</Button>
        </Form>
      </div>
    </div>
  );
};

export default Page;
