"use client";

import { Link } from "@/types/definition";
import { useState } from "react";

type Direction = "up" | "down";

interface UseMultipleInputResult {
  addInputField: () => void;
  inputFields: Link[];
  removeInputField: (id: number) => void;
  moveInputField: (id: number, direction: Direction) => void;
}

const DEFAULT_INITIAL_FIELDS: Link[] = [{ id: 1, link: "", platform: "" }];

/**
 * Custom hook for managing an array of input fields.
 * @param initialFields - Initial array of input fields.
 * @returns Functions to add, remove, and move input fields.
 */
export function useMultipleInput(
  initialFields: Link[] = DEFAULT_INITIAL_FIELDS
): UseMultipleInputResult {
  const [inputFields, setInputFields] = useState(initialFields);

  /**
   * Generates a new unique ID for an input field.
   * @returns A new unique ID.
   */
  const generateNewId = (): number => {
    return inputFields.length > 0
      ? inputFields[inputFields.length - 1].id + 1
      : 1;
  };

  /**
   * Adds a new input field to the array.
   */
  const addInputField = (): void => {
    setInputFields((prevFields) => [
      ...prevFields,
      { id: generateNewId(), link: "", platform: "" },
    ]);
  };

  /**
   * Removes an input field based on its ID.
   * @param id - ID of the input field to be removed.
   */
  const removeInputField = (id: number): void => {
    setInputFields((prevFields) =>
      prevFields.filter((field) => field.id !== id)
    );
  };

  /**
   * Moves an input field up or down in the array.
   * @param id - ID of the input field to be moved.
   * @param direction - Direction of the movement ("up" or "down").
   */
  const moveInputField = (id: number, direction: Direction): void => {
    const currentIndex = inputFields.findIndex((field) => field.id === id);
    if (currentIndex === -1) return;

    const newIndex =
      direction === "up"
        ? currentIndex - 1
        : direction === "down"
        ? currentIndex + 1
        : currentIndex;

    if (
      newIndex < 0 ||
      newIndex >= inputFields.length ||
      newIndex === currentIndex
    )
      return;

    setInputFields((prevFields) => {
      const updatedFields = [...prevFields];
      [updatedFields[currentIndex], updatedFields[newIndex]] = [
        updatedFields[newIndex],
        updatedFields[currentIndex],
      ];
      return updatedFields;
    });
  };

  return { addInputField, inputFields, removeInputField, moveInputField };
}
