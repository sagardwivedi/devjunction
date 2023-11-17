import { getUserSocial } from "@/lib/data";
import { Details } from "./Details";

export async function MobileMockup() {
  const { social } = await getUserSocial();
  return (
    <div className="h-[80%] w-80 overflow-hidden rounded-2xl border-4 border-black">
      <div className="h-full w-full">
        <Details social={social} />
      </div>
    </div>
  );
}
