import IconFb from "../../assets/shared/desktop/icon-facebook.svg";
import IconIg from "../../assets/shared/desktop/icon-instagram.svg";
import IconTw from "../../assets/shared/desktop/icon-twitter.svg";

interface SocialItemProps {
  link: string;
  img: string;
  alt: string;
  cn?: string;
}
export const SocialItem = ({ link, img, alt, cn }: SocialItemProps) => {
  return (
    <a href={link} className={cn ? cn : ""}>
      <img src={img} alt={alt} />
    </a>
  );
};

export const SocialList = () => (
  <>
    <SocialItem link="/facebook" img={IconFb} alt="icon facebook" cn="mr-4" />
    <SocialItem link="/instagram" img={IconIg} alt="icon instagram" cn="mr-4" />
    <SocialItem link="/twitter" img={IconTw} alt="icon twitter" />
  </>
);
