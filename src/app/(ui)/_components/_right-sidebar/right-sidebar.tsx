import { SearchInput } from "@/components/ui/search-input";

export function RightSidebar() {
  return (
    <aside className="h-fit w-96 px-8 py-6 hidden lg:flex flex-col gap-6 sticky top-0 border-l-2 border-gray-900">
      <div>
        <SearchInput hideOnSearch />
      </div>
      <div>...</div>
      <div>...</div>
    </aside>
  );
}
