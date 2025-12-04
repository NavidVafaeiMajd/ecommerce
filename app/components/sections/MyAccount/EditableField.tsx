"use client";

import { Input } from "@/app/components/ui/input";
import { useState } from "react";

interface EditableFieldProps {
  label: string;
  value: string;
  onSave: (newValue: string) => Promise<void> | void;
}

export default function EditableField({
  label,
  value,
  onSave,
}: EditableFieldProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value);

  const saveHandler = async () => {
    await onSave(tempValue); // ارسال به بک‌اند
    setIsEditing(false);
  };

  const isPassword = label.toLowerCase() === "password";

  return (
    <div className="w-full mb-4">
      <label className="text-sm text-gray-600">{label}</label>

      {!isEditing ? (
        <div className="flex items-center justify-between py-3 border-b">
          <span className="font-medium text-gray-800">
            {isPassword ? "********" : value}
          </span>
          <button
            className="text-blue-600 text-sm"
            onClick={() => setIsEditing(true)}
          >
            Change
          </button>
        </div>
      ) : (
        <div className="py-3 border-b">
          <Input
            value={tempValue}
            type={isPassword ? "password" : "text"}
            onChange={(e) => setTempValue(e.target.value)}
            className="w-full p-2 border rounded-md"
          />

          <div className="flex gap-3 mt-3">
            <button
              onClick={saveHandler}
              className="px-3 py-1 bg-blue-600 text-white rounded"
            >
              Save
            </button>

            <button
              onClick={() => {
                setTempValue(value);
                setIsEditing(false);
              }}
              className="px-3 py-1 border rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
