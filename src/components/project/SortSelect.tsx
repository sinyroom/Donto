import { SortType } from './ProjectContainer';

interface Props {
  value: SortType;
  onChange: (value: SortType) => void;
}

export default function SortSelect({ value, onChange }: Props) {
  return (
    <div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortType)}
        className="text-sm border border-gray-200 bg-white rounded px-2 py-1"
      >
        <option value="latest">최신순</option>
        <option value="oldest">생성일순</option>
      </select>
    </div>
  );
}
