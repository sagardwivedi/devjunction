import { getUserSocial } from "@/lib/data";
import { LinkForm } from "./link-form";

export async function LinkTab() {
  const { social } = await getUserSocial();
  return (
    <div className="px-5 py-4 md:px-8 md:py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-xl font-semibold md:text-6xl">
            Customize your links
          </h1>
          <p className="mt-4 text-base">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
        </div>
      </div>
      <LinkForm social={social} />
    </div>
  );
}
