import { Link, useLocation } from "react-router-dom";
import clsx from 'clsx';
import TwitterSvg from "@/components/icons/twitter-svg";
import TelegramSvg from "@/components/icons/Telegram-svg";
import RedditSvg from "@/components/icons/Reddit-svg";
import WhatsAppSvg from "@/components/icons/Whatsapp-svg";

interface listType {
  title: string;
  url: string;
}

const listArrOne: listType[] = [
  { title: "All Presales", url: "/launchpad/all-presales" },
  { title: "Create Token", url: "/launchpad/create-token" },
];

const listArrTwo: listType[] = [
  { title: "Create Regular Presale", url: "/launchpad/create-regular-presale" },
  { title: "Manage Presale", url: "/launchpad/manage-presale" },
  { title: "Locks", url: "/launchpad/locks" },
  { title: "My Portfolio", url: "/launchpad/my-portfolio/tokens" },
  { title: "Create Airdrop", url: "/launchpad/create-airdrop" },
];

const listArrThree: listType[] = [
  { title: "Doc", url: "/launchpad/doc" },
  { title: "Apply For Audit", url: "/launchpad/apply-for-audit" },
  { title: "Market Makers", url: "/launchpad/market-makers" },
  { title: "Advertising Orgs", url: "/launchpad/advertising-orgs" },
  { title: "KOL Groups", url: "/launchpad/kol-groups" },
]

const LeftSidebar: React.FC = () => {
  return (
    <div className="border-r border-r-borderColor relative text-[13px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]">
      <div className="py-8 xl:w-[17vw]">
        <ul className="px-9">
          {
            listArrOne.map((item: listType) => (
              <LinkText key={item.title} title={item.title} url={item.url} />
            ))
          }
        </ul>
        <ul className="px-9 mt-16">
          {
            listArrTwo.map((item: listType) => (
              <LinkText key={item.title} title={item.title} url={item.url} />
            ))
          }
        </ul>
        <hr className="mt-10 border-borderColor" />
        <ul className="px-9">
          {
            listArrThree.map((item: listType) => (
              <LinkText key={item.title} title={item.title} url={item.url} />
            ))
          }
        </ul>
        <ul className="absolute bottom-[40px] left-[48.5px]">
          <LinkText title="Contact Us" url="/launchpad/contact-us" />
        </ul>
        <div className="flex absolute bottom-[20px] left-[48.5px]">
          <TwitterSvg className="mr-2" />
          <TelegramSvg className="mr-2" />
          <RedditSvg className="mr-2" />
          <WhatsAppSvg className="mr-2" />
        </div>
      </div>
    </div>
  )
}

interface LinkTextProp {
  title: string,
  url: string
}
const LinkText: React.FC<LinkTextProp> = ({ title, url }) => {
  const route = useLocation();
  return (
    <Link to={url}>
      <li className={clsx("my-4 font-primary text-sm", route.pathname.split("/")[2] === url.split("/")[2] && "gradient-text")}>{title}</li>
    </Link>
  )
}
export default LeftSidebar;