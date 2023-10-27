import { FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[10px] p-[100px]">
      <div className="flex flex-col gap-y-5">
        <div className="flex flex-row flex-nowrap items-center justify-center gap-5">
          <FaTwitter size={32} className="fill-primary" />
          <FaInstagram size={32} className="fill-primary" />
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
