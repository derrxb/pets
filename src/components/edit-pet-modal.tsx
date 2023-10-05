import { Dialog } from "@headlessui/react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { type EditablePetDetails } from "~/features/PetsFeature";
import React from "react";

export type EditPetModalProps = {
  pet: EditablePetDetails;
  onEditSave: (pet: EditablePetDetails) => void;
};

export const EditPetModal = ({ onEditSave, pet }: EditPetModalProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [petDetails, setPetDetails] = React.useState(pet);

  const onSubmit = () => {
    onEditSave(petDetails);
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        <PencilSquareIcon className="h-6 w-6 text-gray-500 hover:text-indigo-500" />
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true"></div>

        <div className="fixed inset-0 flex w-screen items-center justify-center p-8">
          <Dialog.Panel className="w-full max-w-md overflow-hidden rounded-md bg-slate-50">
            <div className="space-y-1 border border-slate-200 p-4 pb-2">
              <Dialog.Title className="text-xl font-bold">
                Edit pet details
              </Dialog.Title>

              <Dialog.Description className="text-gray-600">
                Change this pet&apos;s details
              </Dialog.Description>
            </div>

            <div className="flex flex-col p-8">
              <div className="flex flex-col">
                <label htmlFor="pet-name">Name</label>
                <input
                  id="pet-name"
                  type="text"
                  name="name"
                  value={petDetails.name}
                  onChange={(event) =>
                    setPetDetails((details) => ({
                      ...details,
                      name: event.target.value,
                    }))
                  }
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="pet-name">Description</label>
                <input
                  id="pet-name"
                  type="text"
                  name="name"
                  value={petDetails.description}
                  onChange={(event) =>
                    setPetDetails((details) => ({
                      ...details,
                      description: event.target.value,
                    }))
                  }
                />
              </div>

              <div className="ml-auto flex items-center">
                <button
                  className="px-4 py-2 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>

                <button
                  className="rounded-md bg-indigo-500 px-4 py-2 text-lg text-white hover:bg-indigo-600"
                  onClick={onSubmit}
                >
                  Save
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};
