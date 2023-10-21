import { type } from "os";
import { useReducer } from "react";

type Direction = "up" | "down";
export type FieldName = "selectedValue" | "value";

interface Link {
  id: number;
  selectedValue: string;
  value: string;
}

type Action =
  | { type: "add" }
  | { type: "move"; payload: { id: number; direction: Direction } }
  | { type: "remove"; payload: number }
  | {
      type: "change";
      payload: {
        id: number;
        fieldName: FieldName;
        newValue: string;
      };
    };

const initialState = {
  nextLinkId: 1,
  links: [] as Link[],
};

type State = typeof initialState;

export function useLinkForm() {
  const linkReducer = (state: State, action: Action): State => {
    const { links } = state;
    let updatedLinks: Link[] = [...links]; // Define updatedLinks here

    switch (action.type) {
      case "add":
        const newLink: Link = {
          id: state.nextLinkId,
          selectedValue: "",
          value: "",
        };
        return {
          ...state,
          nextLinkId: state.nextLinkId + 1,
          links: [...links, newLink],
        };

      case "move":
        const { id, direction } = action.payload;
        const linkIndex = links.findIndex((link) => link.id === id);
        if (linkIndex === -1) return state;

        const canMoveUp = direction === "up" && linkIndex > 0;
        const canMoveDown =
          direction === "down" && linkIndex < links.length - 1;

        if (!canMoveUp && !canMoveDown) return state;

        updatedLinks = [...links];
        const movedLink = updatedLinks[linkIndex];
        updatedLinks.splice(linkIndex, 1);
        updatedLinks.splice(
          canMoveUp ? linkIndex - 1 : linkIndex + 1,
          0,
          movedLink
        );

        return { ...state, links: updatedLinks };

      case "remove":
        const idToRemove = action.payload;
        updatedLinks = links.filter((link) => link.id !== idToRemove);
        return { ...state, links: updatedLinks };

      case "change":
        const { id: linkId, fieldName, newValue } = action.payload;
        updatedLinks = links.map((link) =>
          link.id === linkId ? { ...link, [fieldName]: newValue } : link
        );
        return { ...state, links: updatedLinks };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(linkReducer, initialState);

  return {
    links: state.links,
    addLink: () => dispatch({ type: "add" }),
    moveLink: (id: number, direction: Direction) =>
      dispatch({ type: "move", payload: { id, direction } }),
    removeLink: (id: number) => dispatch({ type: "remove", payload: id }),
    handleLinkChange: (id: number, fieldName: FieldName, newValue: string) =>
      dispatch({ type: "change", payload: { id, fieldName, newValue } }),
  };
}
