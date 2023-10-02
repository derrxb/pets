import { api } from "~/utils/api";

export const PetsFeature = () => {
  return (
    <div className="gid-cols-1 font-poppins grid min-h-screen w-full grid-cols-[20rem_1fr]">
      <LeftSide />
      <RightSide />
    </div>
  );
};

const LeftSide = () => {
  return (
    <div className="flex h-full flex-col space-y-0 border border-slate-100 px-0 pb-10 md:space-y-8 md:px-4 md:pb-12 xl:px-0">
      <div className="flex flex-col items-start justify-start p-6">
        <h2 className="text-sm font-bold capitalize text-slate-500">Filters</h2>
        <div className="flex h-12 flex-row items-center justify-center space-x-2">
          <input className="" type="checkbox" value="" />
          <label className="" htmlFor="checkboxDefault">
            Show All
          </label>
        </div>
        <div className="flex h-12 flex-row items-center justify-center space-x-2">
          <input className="" type="checkbox" value="" />
          <label className="" htmlFor="checkboxDefault">
            Show Cats
          </label>
        </div>
        <div className="flex h-12 flex-row items-center justify-center space-x-2">
          <input className="" type="checkbox" value="" />
          <label className="" htmlFor="checkboxDefault">
            Show Dogs
          </label>
        </div>
      </div>
    </div>
  );
};

const RightSide = () => {
  const { data, isLoading, isError } = api.pets.getPets.useQuery();
  console.log({
    data,
    isLoading,
    isError,
  });

  return (
    <div className="flex h-full flex-col space-y-0 border  border-slate-100 bg-gradient-to-tl px-0 pb-10 md:space-y-8 md:px-4 md:pb-12 xl:px-0">
      <div className="flex flex-col items-center justify-center bg-slate-50 p-3 text-center">
        <div className="flex h-16 flex-col px-6">
          <h2 className="text-sm font-bold capitalize text-slate-500">
            Filters
          </h2>
          <div className="flex flex-row items-start justify-start space-x-6">
            <div className="flex h-12 flex-row items-center justify-center space-x-2">
              <input className="" type="checkbox" value="" />
              <label className="" htmlFor="checkboxDefault">
                Show All
              </label>
            </div>
            <div className="flex h-12 flex-row items-center justify-center space-x-2">
              <input className="" type="checkbox" value="" />
              <label className="" htmlFor="checkboxDefault">
                Show Cats
              </label>
            </div>
            <div className="flex h-12 flex-row items-center justify-center space-x-2">
              <input className="" type="checkbox" value="" />
              <label className="" htmlFor="checkboxDefault">
                Show Dogs
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start">
        <div className="h-full w-full p-6">{JSON.stringify(data)}</div>
      </div>
    </div>
  );
};
