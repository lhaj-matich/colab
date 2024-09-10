import BroardCastIcon from "@/assets/broadcast_icon.svg";
import SendIcon from "@/assets/send_icon.svg";
import CycleIcon from "@/assets/cycle_icon.svg";
import CogIcon from "@/assets/cog_logo.svg";
import UsersIcon from "@/assets/users_logo.svg";
import UserIcon from "@/assets/user_logo.svg";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";

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

export const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com quickly caught my eye and proved indispensable.",
    imageSrc: avatar1,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has soared since we integrated this tool into our daily workflow. It's been a game-changer.",
    imageSrc: avatar2,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has revolutionized how I manage projects and deadlines, making every task more organized and efficient.",
    imageSrc: avatar3,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how seamlessly we integrated this app into our workflow, enhancing our team's efficiency right away.",
    imageSrc: avatar4,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has become much simpler with this app. It helps me manage every detail and avoid missing anything.",
    imageSrc: avatar5,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration features of this app are exceptional, making it a perfect fit for our varied needs.",
    imageSrc: avatar6,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Using this app has streamlined our project management, significantly improving communication and collaboration across our team.",
    imageSrc: avatar7,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, assigning tasks, tracking progress, and managing documents is now a breeze, all in one convenient place.",
    imageSrc: avatar8,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features cater to our diverse needs, making it an invaluable tool for our operations.",
    imageSrc: avatar9,
    name: "Casey Harper",
    username: "@casey09",
  },
];

export const pricingPackages = [
  {
    name: "Starter",
    description: "Essential tools to launch your digital presence.",
    price: 19,
    features: ["SEO Optimization", "Social Media Setup", "Basic Website"],
    inverted: false,
  },
  {
    name: "Professional",
    description: "Advanced marketing strategies and solutions.",
    price: 54,
    features: [
      "SEO Optimization",
      "Social Media Management",
      "Advanced Analytics",
      "Custom Website Design",
    ],
    inverted: false,
  },
  {
    name: "Company",
    description: "Comprehensive solutions for a robust strategy.",
    price: 89,
    features: [
      "SEO Optimization",
      "Social Media Management",
      "Content Creation",
      "Advanced Analytics",
      "Premium Website Design",
    ],
    inverted: true,
  },
];
