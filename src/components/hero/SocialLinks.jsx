import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex space-x-4 text-xl text-black">
      <FaLinkedin className="cursor-pointer hover:scale-110 transition" />
      <FaGithub className="cursor-pointer hover:scale-110 transition" />
      <FaTwitter className="cursor-pointer hover:scale-110 transition" />
    </div>
  );
};

export default SocialLinks;
