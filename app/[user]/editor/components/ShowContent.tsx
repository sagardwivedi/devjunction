"use client";

import { useLinkStore } from "@/hooks/useLinkForm";

const ShowContent = () => {
  const { linkInputs } = useLinkStore();
  console.log(linkInputs);
  return <div>{JSON.stringify(linkInputs)}</div>;
};

export default ShowContent;
