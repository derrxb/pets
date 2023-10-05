import { type ChangeEvent } from "react";

export type CheckboxProps = {
  id: string;
  name: string;
  label: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
};

export const Checkbox = ({
  id,
  label,
  checked,
  name,
  onChange,
}: CheckboxProps) => {
  return (
    <div className="flex h-12 w-28 flex-row items-center space-x-2">
      <input
        id={id}
        name={name}
        className=""
        type="checkbox"
        checked={checked}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onChange={onChange}
      />

      <label className="" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
