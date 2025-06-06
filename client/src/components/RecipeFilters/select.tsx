"use client";

type IFilterSelectProps = {
  defaultTitle: string;
  options: string[];
  selected?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
};

export default function FilterSelect({
  defaultTitle,
  options,
  selected,
  onChange,
  disabled,
}: IFilterSelectProps) {
  const bgColor = !disabled
    ? "bg-white dark:bg-black"
    : "bg-gray-200 dark:bg-gray-800";

  const textColor = !disabled
    ? "text-black dark:text-white"
    : "text-gray-600 dark:text-gray-400";

  return (
    <select
      defaultValue={selected}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      className={`${bgColor} w-full p-2 border rounded ${textColor}`}
    >
      <option value="">{defaultTitle}</option>
      {options.map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  );
}
