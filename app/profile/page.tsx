import { PersonIcon } from "@radix-ui/react-icons";
import { Details } from "./form";

export default function Profile() {
  return (
    <main className="flex max-w-sm mx-auto flex-col justify-center items-center min-h-screen">
      <div className="border border-white p-4 rounded-full">
        <PersonIcon className="w-16 h-16" />
      </div>
      <div className="w-[90%]">
        <Details />
      </div>
    </main>
  );
}
