"use client";

import { useState } from "react";

interface InputType {
  id: number;
  link: string;
  platform: string;
}

export function useMultipleInput(
  initialFields: InputType[] = [{ id: 1, link: "", platform: "" }],
) {
  const [inputFields, setInputFields] = useState(initialFields);

  const addInputField = () => {
    const newId =
      inputFields.length > 0 ? inputFields[inputFields.length - 1].id + 1 : 1;
    setInputFields([...inputFields, { id: newId, link: "", platform: "" }]);
  };

  const removeInputField = (id: number) => {
    setInputFields(inputFields.filter((field) => field.id !== id));
  };

  const moveInputField = (id: number, direction: "up" | "down") => {
    const currentIndex = inputFields.findIndex((field) => field.id === id);
    if (currentIndex === -1) return;

    const newIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;
    if (newIndex < 0 || newIndex >= inputFields.length) return;

    const updatedFields = [...inputFields];
    [updatedFields[currentIndex], updatedFields[newIndex]] = [
      updatedFields[newIndex],
      updatedFields[currentIndex],
    ];
    setInputFields(updatedFields);
  };

  return { addInputField, inputFields, removeInputField, moveInputField };
}
