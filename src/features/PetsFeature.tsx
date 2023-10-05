import React from "react";
import { api } from "~/utils/api";
import { Filters } from "~/components/filters";
import { useRouter } from "next/router";
import { Pet } from "~/components/pet";

export type PetDetails = {
  id: number;
  description: string;
  name: string;
  photoUrl: string;
  species: "Cat" | "Dog";
  primary_photo_cropped?: {
    medium?: string;
  };
};

export type EditablePetDetails = Pick<PetDetails, "name" | "description">;

export const PetsFeature = () => {
  const { data, isLoading, isError } = api.pets.getPets.useQuery();
  const [animals, setAnimals] = React.useState<PetDetails[]>(
    (data?.pets?.animals as unknown as PetDetails[]) ?? [],
  );

  // TRPC returns default value, we need to check `isLoading` and `isError`
  React.useEffect(
    () => setAnimals((data?.pets?.animals as unknown as PetDetails[]) ?? []),
    [data?.pets?.animals],
  );

  const router = useRouter();
  const filteredData = React.useMemo(() => {
    const isFilteringDogs = router.query.showDogs === "true";
    const isFilteringCats = router.query.showCats === "true";
    const isShowingAll =
      router.query.showAll === "true" || (!isFilteringCats && !isFilteringDogs);

    return animals?.filter((animal) => {
      if (isShowingAll) {
        return true;
      }

      if (isFilteringCats && animal.species === "Cat") {
        return true;
      }

      if (isFilteringDogs && animal.species === "Dog") {
        return true;
      }

      return false;
    });
  }, [
    animals,
    router.query.showAll,
    router.query.showCats,
    router.query.showDogs,
  ]);

  const onDelete = (id: number) => {
    setAnimals((animals) => animals?.filter((animal) => animal.id !== id));
  };

  const onEdit = (id: number, updates: EditablePetDetails) => {
    setAnimals(
      (animals) =>
        animals?.map((animal) => {
          if (animal.id !== id) {
            return animal;
          }

          return {
            ...animal,
            name: updates.name,
            description: updates.description,
          };
        }),
    );
  };

  return (
    <div className="gid-cols-1 font-poppins grid min-h-screen w-full grid-cols-[20rem_1fr]">
      <div className="border border-slate-100 p-4">
        <Filters label="Navigation Filters" listClassName="flex-col" />
      </div>

      <div className="flex h-full flex-col space-y-0 border  border-slate-100 bg-gradient-to-tl px-0 pb-10 md:space-y-8 md:px-4 md:pb-12 xl:px-0">
        <div className="flex flex-col items-center justify-center bg-slate-50 p-3 text-center">
          <Filters label="Header Filters" listClassName="flex-row" />
        </div>

        <div className="flex flex-col items-start justify-start">
          <div className="grid h-full w-full grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
            {!filteredData?.length ? (
              <h4 className="text-lg text-gray-900">No pets remaining</h4>
            ) : null}

            {filteredData?.map((animal) => (
              <Pet
                id={animal.id}
                key={animal.id}
                name={animal.name}
                description={animal.description ?? "N/A"}
                photoUrl={animal.primary_photo_cropped?.medium}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
