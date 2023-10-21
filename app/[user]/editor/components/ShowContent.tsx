import { useLinkInputStore } from "@/hooks/useLinkForm";

const ShowContent = () => {
  const { linkInputs } = useLinkInputStore();
  console.log(linkInputs);
  return <div>{JSON.stringify(linkInputs)}</div>;
};

export default ShowContent;
