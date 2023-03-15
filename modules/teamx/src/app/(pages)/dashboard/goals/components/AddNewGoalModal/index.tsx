import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormInput from "@/app/components/forms/FormInput";
import { Button, Modal } from "@/app/components/atoms";
import FormTeamMemberSelect from "@/app/components/forms/FormTeamMemberSelect";
import { Goal } from "@/database/db";

interface AddNewGoalModalProps {
  open: boolean;
  isAdding: boolean;
  onConfirm: (values: Goal) => void;
  onClose: () => void;
}

const AddNewGoalModal: React.FC<AddNewGoalModalProps> = ({
  open,
  isAdding,
  onConfirm,
  onClose,
}) => {
  const schema = yup.object().shape({
    title: yup.string().required("Please input the goal title"),
    progress: yup.number().typeError("Please input the goal title"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Goal>({
    resolver: yupResolver(schema),
  });

  return (
    <Modal open={open} onClose={onClose}>
      <h1 className="text-xl font-semibold">Add New Goal</h1>
      <form className="mt-4 space-y-4" onSubmit={handleSubmit(onConfirm)}>
        <FormInput
          label="Title"
          name="title"
          control={control}
          error={errors.title}
        />
        <FormInput
          label="Progress (%)"
          name="progress"
          control={control}
          error={errors.progress}
        />
        <FormTeamMemberSelect
          label="Assign To"
          control={control}
          name="assignTo"
          type="list"
        />
        <div>
          <div className="pt-4 flex justify-end space-x-2">
            <Button variant="white" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" loading={isAdding}>
              Submit
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default AddNewGoalModal;
