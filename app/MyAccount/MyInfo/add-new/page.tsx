"use client";

import { Form } from "@/app/components/sections/CompoundForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/app/components/ui/button";

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters." }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters." }),
  Country: z.string().min(2, { message: "Country is required." }),
  componyName: z.string().optional(),
  streatAddress: z.string().min(2, { message: "Street address required." }),
  Unit: z.string().optional(),
  city: z.string().min(2, { message: "City is required." }),
  state: z.string().min(2, { message: "State is required." }),
  phone: z.string().min(5, { message: "Phone number is required." }),
  postalCode: z.string().min(3, { message: "Postal code is required." }),
});

const Page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      Country: "",
      componyName: "",
      streatAddress: "",
      Unit: "",
      city: "",
      state: "",
      phone: "",
      postalCode: "",
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
        <Form
          formProp={form}
          onSubmit={onSubmit}
          className="flex flex-col gap-5"
        >
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
            <Form.Input label="Unit" name="Unit" variant="filled" required />
          </div>
          <div className="flex max-lg:flex-col gap-5">
            <Form.Input label="City" name="city" variant="filled" required />
            <Form.Input label="State" name="state" variant="filled" required />
          </div>
          <div className="flex max-lg:flex-col gap-5">
            <Form.Input label="Phone" name="phone" variant="filled" required />
            <Form.Input
              label="Postal Code"
              name="postalCode"
              variant="filled"
              required
            />
          </div>
          <div></div>
          <Button type="submit">save</Button>
        </Form>
      </div>
    </div>
  );
};

export default Page;
