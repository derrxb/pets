/* eslint-disable @typescript-eslint/no-misused-promises */
import { TrashIcon } from "@heroicons/react/24/outline";
import { EditPetModal } from "./edit-pet-modal";
import { type EditablePetDetails } from "~/features/PetsFeature";

/* eslint-disable @next/next/no-img-element */
export type PetProps = {
  id: number;
  photoUrl?: string;
  name: string;
  description: string;
  onDelete: (id: number) => void;
  onEdit: (id: number, updates: EditablePetDetails) => void;
};

export const Pet = ({
  id,
  photoUrl,
  name,
  description,
  onDelete,
  onEdit,
}: PetProps) => {
  return (
    <div className="flex flex-col space-y-2 overflow-hidden rounded-md">
      {photoUrl ? (
        <img
          src={photoUrl}
          alt={name}
          className="h-72 rounded-bl-md rounded-br-md object-cover object-center"
        />
      ) : (
        <div className="inline-flex h-72 items-center justify-center rounded-bl-md rounded-br-md bg-gray-200 object-cover object-center text-gray-500">
          Unavailable
        </div>
      )}

      <div className="flex flex-row justify-between">
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>

        <div className="flex space-x-4">
          <EditPetModal
            pet={{ name, description }}
            onEditSave={(pet) => onEdit(id, pet)}
          />

          <button onClick={() => onDelete(id)}>
            <TrashIcon className="h-6 w-6 text-gray-500 hover:text-red-500" />
          </button>
        </div>
      </div>

      <span className="truncate text-lg font-medium text-gray-600">
        {description.slice(0, 60)}
      </span>
    </div>
  );
};
