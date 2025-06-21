import { SearchInput } from "@/components/ui/search-input";

export function RightSidebar() {
  return (
    <aside className="sticky top-0 hidden h-fit w-96 flex-col gap-6 border-l-2 border-gray-900 px-8 py-6 lg:flex">
      <div>
        <SearchInput hideOnSearch />
      </div>
      <div>...</div>
      <div>...</div>
    </aside>
  );
}
