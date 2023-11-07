import { UserHeader } from "@/components/userHeader";

export default function page({ params }: { params: { id: string } }) {
  return (
    <div className="p-6">
      <UserHeader id={params.id} />
    </div>
  );
}
