import profile from "../../assets/profile.jpg";

const ProfileImage = () => {
  return (
    <img
      src={profile}
      alt="Profile"
      className="w-40 h-40 md:w-64 md:h-64 rounded-full object-cover"
    />
  );
};

export default ProfileImage;
