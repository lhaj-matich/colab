import BroardCastIcon from "@/assets/broadcast_icon.svg";
import SendIcon from "@/assets/send_icon.svg";
import CycleIcon from "@/assets/cycle_icon.svg";
import CogIcon from "@/assets/cog_logo.svg";
import UsersIcon from "@/assets/users_logo.svg";
import UserIcon from "@/assets/user_logo.svg";

export const features = [
  {
    category: "SEO",
    content:
      "Boost your visibility and drive organic traffic with our expert SEO strategies. We optimize your site to rank higher in search engines, helping you reach more potential customers.",
    image: BroardCastIcon,
    inverted: false,
  },
  {
    category: "Marketing",
    content:
      "Elevate your brand with our targeted marketing strategies. We craft tailored campaigns to engage your audience and drive growth across digital platforms.",
    image: SendIcon,
    inverted: true,
  },
  {
    category: "Promotion",
    content:
      "Maximize your reach with our effective promotion techniques. We create impactful campaigns to boost your brand’s visibility and attract more customers.",
    image: CycleIcon,
    inverted: false,
  },
];

export const processes = [
  {
    icon: CogIcon,
    title: "Working Process",
    content:
      "We tailor our approach to your needs, ensuring clear communication and high-quality results every step of the way.",
  },
  {
    icon: UsersIcon,
    title: "Dedicated Team",
    content:
      "Our dedicated team focuses exclusively on your project, bringing expertise and commitment to deliver exceptional results.",
  },
  {
    icon: UserIcon,
    title: "24/7 Support",
    content:
      "We provide round-the-clock support to address any concerns or issues, ensuring you're never left in the dark.",
  },
];
