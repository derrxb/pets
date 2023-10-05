import React from "react";
import { api } from "~/utils/api";
import { Filters } from "~/components/filters";

export const PetsFeature = () => {
  const { data, isLoading, isError } = api.pets.getPets.useQuery();

  console.log({
    data,
    isLoading,
    isError,
  });

  return (
    <div className="gid-cols-1 font-poppins grid min-h-screen w-full grid-cols-[20rem_1fr]">
      <Filters label="Navigation Filters" listClassName="flex-col" />

      <div className="flex h-full flex-col space-y-0 border  border-slate-100 bg-gradient-to-tl px-0 pb-10 md:space-y-8 md:px-4 md:pb-12 xl:px-0">
        <div className="flex flex-col items-center justify-center bg-slate-50 p-3 text-center">
          <Filters label="Header Filters" listClassName="flex-row" />
        </div>

        <div className="flex flex-col items-start justify-start">
          <div className="h-full w-full p-6">{JSON.stringify(data)}</div>
        </div>
      </div>
    </div>
  );
};
