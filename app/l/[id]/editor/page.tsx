import { EditorHeader } from './header';
import { TabContent } from './tabs/TabContent';

export default function Editor({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { tab?: string };
}) {
  const tab = searchParams?.tab || 'link';

  return (
    <div className="p-2 md:p-6">
      <div className="space-y-3 md:space-y-5">
        <EditorHeader id={params.id} tab={tab} />
        <TabContent tab={tab} />
      </div>
    </div>
  );
}
