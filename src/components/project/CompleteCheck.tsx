interface Props {
  checked: boolean;
  onChange: (check: boolean) => void;
}

export default function CompleteCheck({ checked, onChange }: Props) {
  return (
    <div>
      <label className="flex items-center gap-2 text-sm text-gray-700">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        완료된 프로젝트 포함
      </label>
    </div>
  );
}
