"use client";

import EditableField from "@/app/components/sections/MyAccount/EditableField";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function MyInfo() {
  const [name, setName] = useState("Navid");

  const updateField = async (field: string, newValue: string) => {
    await fetch(`/api/profile/${field}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value: newValue }),
    });
    setName(newValue);
  };

  return (
    <>
      <div className="text-foreground! mb-5">
        <h3 className="text-3xl mb-2!"> My Info </h3>
      </div>
      <div className="mt-6">
        <EditableField
          label="Your Name"
          value={name}
          onSave={(v) => updateField("first_name", v)}
        />

        <EditableField
          label="Email"
          value="navid@example.com"
          onSave={(v) => updateField("email", v)}
        />
        <EditableField
          label="Phone Number"
          value="57657867"
          onSave={(v) => updateField("last_name", v)}
        />
        <EditableField
          label="Password"
          value="57657867"
          onSave={(v) => updateField("last_name", v)}
        />
        <div>
          <div className="flex justify-between items-center my-5">
            <span className="text-xl">Address</span>
            <Link href="MyInfo/add-new">add new</Link>
          </div>
          <div className="grid lg:grid-cols-2 gap-5">
            <AddressItem />
            <AddressItem />
            <AddressItem />
            <AddressItem />
          </div>
        </div>
      </div>
    </>
  );
}

const AddressItem = () => {
  return (
    <div className="bg-grayColor rounded-xl px-10 py-5 flex flex-col gap-5 text-ring!">
      <span className="text-foreground">Jhanvi shah</span>
      <span>456577658678</span>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
        eveniet sit quasi, provident quidem iste{" "}
      </p>
      <div>
        <Button variant={"outline"}>Home</Button>
      </div>
      <div className="flex gap-5 text-foreground!">
        <span>Remove</span>
        <span>
          <Link href="MyInfo/edit">Edit</Link>{" "}
        </span>
      </div>
    </div>
  );
};
