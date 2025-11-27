"use client";
import OrderSummary from "@/components/sections/checkout/OrderSummary";
import { Form } from "@/components/sections/CompoundForm";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

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
    <div className="grid grid-cols-6 gap-10 items-start">
      <div className="col-span-4 flex flex-col gap-10">
        <div>
          <h4 className="text-2xl my-5">Biling Details</h4>
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
            <Button type="submit">save</Button>
          </Form>
        </div>
        <div>
          <h4 className="text-2xl my-5">Shiping Method</h4>
          <div className="bg-grayColor p-5 rounded-md">
            <div className="p-5 border-b-1">
              <p>Arrives By Monday, June7</p>
            </div>
            <div className="flex justify-between items-center p-5">
              <span>Delivery Charges</span>
              <span>$5.00</span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-2xl my-5">Peyment Method</h4>
          <div className="bg-grayColor p-5 rounded-md">
            <div className="flex flex-col p-5 gap-5">
              <span className="text-2xl">Cash On Delivery</span>
              <span>Pay with cashupon delivery.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-2 border rounded-md p-5 flex flex-col gap-5">
        <OrderSummary />
      </div>
    </div>
  );
};

export default Page;
