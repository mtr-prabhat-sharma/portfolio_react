import profile from "../../assets/profile.jpg";

const ProfileImage = () => {
  return (
    <img
      src={profile}
      alt="Profile"
      className="profile-image"
    />
  );
};

export default ProfileImage;
