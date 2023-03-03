import { Button } from "@/components/atoms";

interface ImportProfileProps {
  onCancel: () => void;
}

const ImportProfile: React.FC<ImportProfileProps> = ({ onCancel }) => {
  return (
    <div>
      <div className="mt-8">
        <h2 className="text-center text-2xl font-medium leading-6 text-gray-900">
          Do you already have yLeader profile?
        </h2>
      </div>
      <div className="mt-8 flex items-center justify-center">
        <div className="w-48 h-48 border-orange-500 border-2 border-gray-200 border-dashed flex items-center justify-center p-8">
          <div className="text-center">Click here to import</div>
        </div>
      </div>
      <div className="mt-8 w-full text-center">
        <Button
          onClick={onCancel}
          className="!px-6 !py-4 !text-lg"
          variant="white"
        >
          {"No, I don't have yLamba profile"}
        </Button>
      </div>
    </div>
  );
};

export default ImportProfile;
