import { Button, Modal } from "@/app/(ui)/components/atoms";
import { Dialog } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";

interface DeleteGoalConfirmModal {
  open: boolean;
  isDeleting: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

const DeleteGoalConfirmModal: React.FC<DeleteGoalConfirmModal> = ({
  open,
  isDeleting,
  onConfirm,
  onClose,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="sm:flex sm:items-start">
        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
          <ExclamationTriangleIcon
            className="h-6 w-6 text-red-600"
            aria-hidden="true"
          />
        </div>
        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <Dialog.Title
            as="h3"
            className="text-base font-semibold leading-6 text-gray-900"
          >
            Delete Goal
          </Dialog.Title>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              {"The goal and it's sub goal will be permanently deleted"}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-4 sm:ml-10 sm:flex sm:pl-4 space-x-2">
        <Button
          className="!bg-red-600"
          onClick={onConfirm}
          loading={isDeleting}
        >
          Delete
        </Button>
        <Button variant="white" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteGoalConfirmModal;
