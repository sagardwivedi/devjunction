import { UserHeader } from "@/components/userHeader";
import { getUserByName } from "@/lib/data";

export default async function page({ params }: { params: { id: string } }) {
  const data = await getUserByName(params.id);

  return (
    <div className="p-6">
      <UserHeader id={params.id} />
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
