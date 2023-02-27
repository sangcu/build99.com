import Image from "next/image";

export interface TeamMemberProps {
  id?: number;
  name: string;
  job_title: string;
  profile_photo: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  job_title,
  profile_photo,
}) => {
  return (
    <div>
      {profile_photo ? (
        <Image
          width={240}
          height={240}
          className="mx-auto h-24 w-24 rounded-full"
          src={profile_photo}
          alt=""
        />
      ) : (
        <div className="flex items-center w-full justify-center">
          <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
        </div>
      )}

      <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
        {name}
      </h3>
      <p className="text-sm leading-6 text-gray-600">{job_title}</p>
    </div>
  );
};

export default TeamMember;
