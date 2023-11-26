import { UserHeader } from '@/app/l/[id]/Header';

export default function page({ params }: { params: { id: string } }) {
  return (
    <div className="p-6">
      <UserHeader id={params.id} />
    </div>
  );
}
