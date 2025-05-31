"use client";

type IFilterSelectProps = {
  defaultTitle: string;
  options: string[];
  selected?: string;
  onChange: (value: string) => void;
};

export default function FilterSelect({
  defaultTitle,
  options,
  selected,
  onChange,
}: IFilterSelectProps) {
  return (
    <select
      defaultValue={selected}
      onChange={(e) => onChange(e.target.value)}
      className="bg-black w-full p-2 border rounded"
    >
      <option value="">{defaultTitle}</option>
      {options.map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  );
}
