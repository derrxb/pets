import React, { type ChangeEvent } from "react";
import clsx from "clsx";
import { Heading } from "./heading";
import { Checkbox } from "./checkbox";
import { useRouter } from "next/router";

export type FiltersProps = {
  label: string;
  listClassName: string;
};

export const Filters = ({ label, listClassName }: FiltersProps) => {
  const router = useRouter();
  const onChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const searchParams = new URLSearchParams();

    // We merge the existing query values in order to
    // maintain the currently selected filter values.
    Object.keys(router.query)
      .filter((key) => key !== event.target.name)
      .map((key: string) => {
        searchParams.append(key, String(router.query[key]));
      });

    searchParams.append(event.target.name, event.target.checked.toString());
    await router.push(`/?${searchParams.toString()}`);
  };

  return (
    <div className="flex h-full flex-col items-center px-0 pb-10 md:space-y-8 md:px-4 md:pb-12 xl:px-0">
      <Heading>{label}</Heading>

      <ul className={clsx("flex", listClassName)}>
        <li className="w-full px-2">
          <Checkbox
            id={`${label}-showAll`}
            name="showAll"
            label="Show All"
            checked={router.query.showAll === "true"}
            onChange={onChange}
          />
        </li>
        <li className="w-full px-2">
          <Checkbox
            id={`${label}-showCats`}
            name="showCats"
            label="Show Cats"
            checked={router.query.showCats === "true"}
            onChange={onChange}
          />
        </li>
        <li className="w-full px-2">
          <Checkbox
            id={`${label}-showDogs`}
            name="showDogs"
            label="Show Dogs"
            checked={router.query.showDogs === "true"}
            onChange={onChange}
          />
        </li>
      </ul>
    </div>
  );
};
