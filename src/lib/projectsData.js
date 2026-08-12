import aiCareerNavigator from "@/assets/images/aiCareerNavigator.png";
import devTinder from "@/assets/images/devTinder.png";
import ecom from "@/assets/images/ecom.png";

import {
  Target,
  Bot,
  FileText,
  Brain,
  Briefcase,
  BarChart2,
  TrendingUp,
  BookOpen,
  ShieldCheck,
  SunMoon,
  MessageCircle,
  Mail,
  Lock,
  MousePointerClick,
  UserPlus,
  CreditCard,
  User,
  Settings,
  Search,
  ShoppingCart,
  Smartphone,
  Wrench,
} from "lucide-react";

const projectsData = [
  {
    id: "ai-career-navigator",
    title: "AI Career Navigator",
    shortTitle: "AI Career Navigator",
    tagline: "Your AI-powered career companion — all in one place.",
    description:
      "A full-stack AI-powered career platform that helps users explore career paths, analyse resumes, find jobs, and get personalised guidance — all in one place.",
    image: aiCareerNavigator,
    color: "#7093FF",
    accentFrom: "from-blue-600",
    accentTo: "to-indigo-500",
    githubLink: "https://github.com/achalkumar98/ai-career-path-predicator",
    liveLink: "https://ai-career-path-predicator-tawny.vercel.app/",
    backendLink: "https://ai-career-path-predicator.onrender.com",
    videoId: "1NDcBNWmcEginrlFp55nEstwmNrh-OsJX",
    videoType: "drive",
    badges: ["Full Stack", "AI/ML", "Next.js 15", "Node.js"],
    techStack: [
      { layer: "Frontend",        tech: "Next.js 15, React 19, TypeScript, Tailwind CSS v4" },
      { layer: "Backend",         tech: "Node.js, Express 5" },
      { layer: "Database",        tech: "MongoDB with Mongoose" },
      { layer: "AI",              tech: "Groq API" },
      { layer: "Authentication",  tech: "JWT + bcryptjs" },
      { layer: "Validation",      tech: "Joi — every api validated" },
      { layer: "File Upload",     tech: "Multer + pdf-parse" },
      { layer: "Email",           tech: "Nodemailer with Gmail SMTP" },
      { layer: "Job Search",      tech: "Puppeteer + LinkedIn public job listings" },
      { layer: "API Docs",        tech: "Swagger UI" },
    ],
    features: [
      {
        title: "Career Assessment",
        desc: "Submit your skills and interests; get AI-generated career path recommendations.",
        icon: Target,
      },
      {
        title: "AI Chat Assistant",
        desc: "Ask anything about resumes, interviews, job search, or career growth.",
        icon: Bot,
      },
      {
        title: "Resume Analyser",
        desc: "Upload a PDF resume; extract skills, experience years, and structured data.",
        icon: FileText,
      },
      {
        title: "Personality & Insights",
        desc: "Generate a career personality profile from free-text input using Groq AI.",
        icon: Brain,
      },
      {
        title: "Job Matching",
        desc: "Search LinkedIn public listings by keyword and location via Puppeteer.",
        icon: Briefcase,
      },
      {
        title: "Progress Tracker",
        desc: "Review your full assessment and AI insight history in one view.",
        icon: BarChart2,
      },
      {
        title: "Dashboard Analytics",
        desc: "Live charts — activity trends, top skills, career interests, assessment depth.",
        icon: TrendingUp,
      },
      {
        title: "Resource Recommendations",
        desc: "Get curated learning resources matched to your skills and interests.",
        icon: BookOpen,
      },
      {
        title: "Auth & Profile",
        desc: "JWT-based auth with register, login, password reset, and profile editing.",
        icon: ShieldCheck,
      },
      {
        title: "Feedback & Contact",
        desc: "In-app feedback form and contact form delivered via Gmail SMTP.",
        icon: Mail,
      },
    ],
    team: [
      { name: "Achal Kumar",   role: "Software Engineer" },
      { name: "Adarsh Bhagat", role: "AI Engineer" },
      { name: "Aastha Jaiswal", role: "DevOps Engineer" },
      { name: "Sachin Kumar",  role: "Full Stack Developer" },
    ],
  },

  {
    id: "dev-tinder",
    title: "DevTinder",
    shortTitle: "DevTinder",
    tagline: "Connect with Developers Like Never Before!",
    description:
      "A developer networking platform where tech enthusiasts can connect, chat, and collaborate based on mutual interest. Inspired by Tinder — swipe left to ignore, swipe right to connect, with real-time chat powered by Socket.io.",
    image: devTinder,
    color: "#f59e0b",
    accentFrom: "from-orange-500",
    accentTo: "to-rose-500",
    githubLink: "https://github.com/achalkumar98/devTinder-web",
    githubBackendLink: "https://github.com/achalkumar98/devTinder",
    liveLink: "https://dev-tinder-web-flame.vercel.app/",
    videoId: "1taWJzmf4cv0K78DSWGc79ss0u8zAg1i_",
    videoType: "drive",
    badges: ["Full Stack", "Real-time", "React.js", "Socket.io"],
    techStack: [
      { layer: "Frontend",       tech: "React.js, Redux, Tailwind CSS, DaisyUI" },
      { layer: "Backend",        tech: "Node.js, Express.js, MongoDB" },
      { layer: "Real-time",      tech: "Socket.io" },
      { layer: "Authentication", tech: "JWT & Cookies" },
      { layer: "Payments",       tech: "Razorpay with webhook support" },
    ],
    features: [
      {
        title: "JWT & Cookie Auth",
        desc: "Secure login and signup with JWT tokens stored in cookies.",
        icon: Lock,
      },
      {
        title: "Swipeable Feed",
        desc: "Browse developer profiles and swipe left to ignore or right to connect.",
        icon: MousePointerClick,
      },
      {
        title: "Connection Requests",
        desc: "Accept or reject incoming connection requests with ease.",
        icon: UserPlus,
      },
      {
        title: "Razorpay Payments",
        desc: "Secure payment gateway integration with webhook support.",
        icon: CreditCard,
      },
      {
        title: "Real-time Chat",
        desc: "Live messaging powered by Socket.io with online/offline status indicators.",
        icon: MessageCircle,
      },
      {
        title: "Profile Management",
        desc: "Edit and update your developer profile details at any time.",
        icon: User,
      },
    ],
    upcomingFeatures: [
      "Typing Indicator — WhatsApp-style",
      "File Attachments in Chat",
      "Daily Match Suggestions",
      "Activity Stats",
      "Reporting & Blocking",
      "Push Notifications",
    ],
  },

  {
    id: "ecommerce",
    title: "E-Commerce Website",
    shortTitle: "E-Commerce",
    tagline: "MERN Full Stack Shopping Platform",
    description:
      "An e-commerce platform that provides a seamless shopping experience. Customers can explore products, view detailed information, add items to their cart, and complete purchases securely through Stripe integration.",
    image: ecom,
    color: "#22EEB4",
    accentFrom: "from-cyan-500",
    accentTo: "to-teal-400",
    githubLink: "https://github.com/achalkumar98/e-commerce-website",
    liveLink: "https://e-commerce-website-jfor.vercel.app/",
    videoId: "1Tdb4RnAdWy6zQenu8BqZLgUuQqkqeyCK",
    videoType: "drive",
    badges: ["Full Stack", "MERN", "Stripe", "Redux"],
    techStack: [
      { layer: "Frontend",       tech: "React.js, Redux, Tailwind CSS, DaisyUI" },
      { layer: "Backend",        tech: "Node.js, Express.js, MongoDB" },
      { layer: "Authentication", tech: "JWT & Cookies" },
      { layer: "Payments",       tech: "Stripe with webhook support" },
    ],
    features: [
      {
        title: "JWT & Cookie Auth",
        desc: "Secure login and signup for both users and admins.",
        icon: ShieldCheck,
      },
      {
        title: "Admin Panel",
        desc: "Only admins can add, update, or delete products.",
        icon: Settings,
      },
      {
        title: "Product Management",
        desc: "View product details with image zoom functionality.",
        icon: Search,
      },
      {
        title: "Cart & Checkout",
        desc: "Add products to cart, update quantities, and remove items.",
        icon: ShoppingCart,
      },
      {
        title: "Stripe Payments",
        desc: "Secure checkout with Stripe integration and webhook support.",
        icon: CreditCard,
      },
      {
        title: "Responsive Design",
        desc: "Mobile-first UI built with Tailwind CSS for all screen sizes.",
        icon: Smartphone,
      },
    ],
    upcomingFeatures: [
      "User Reviews & Ratings",
      "Wishlist",
      "Order History",
      "Push Notifications",
      "PWA Support",
    ],
  },
];

export default projectsData;
