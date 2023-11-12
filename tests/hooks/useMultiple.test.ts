import { expect } from "chai";
import { describe, it } from "node:test";

import { useMultipleInput } from "@/hooks/use-multiple-input";

describe("useMultipleInput", () => {
  it("should add new input field", () => {
    const { addInputField, inputFields } = useMultipleInput();
    addInputField();
    expect(inputFields.length).to.equal(2);
  });

  it("should remove an input field", () => {
    const { removeInputField, inputFields } = useMultipleInput();
    const idToRemove = inputFields[0].id;
    removeInputField(idToRemove);
    expect(inputFields.length).to.equal(0);
  });

  it("should move an input field up", () => {
    const { moveInputField, inputFields } = useMultipleInput();
    const idToMove = inputFields[0].id;
    moveInputField(idToMove, "up");
    expect(inputFields[0].id).to.equal(idToMove);
  });

  it("should move an input field down", () => {
    const { moveInputField, inputFields } = useMultipleInput();
    const idToMove = inputFields[0].id;
    moveInputField(idToMove, "down");
    expect(inputFields[1].id).to.equal(idToMove);
  });
});
