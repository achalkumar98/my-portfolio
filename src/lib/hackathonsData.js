import hackImg1 from "@/assets/hackathons/1000651306.jpg";
import hackImg2 from "@/assets/hackathons/spark-6.jpg";
import hackImg3 from "@/assets/hackathons/img_5_1729430688968.jpg";
import hackImg4 from "@/assets/hackathons/IMG_20241011_023107.jpg";
import hackImg5 from "@/assets/hackathons/HackTheSpaceS2 (275).jpg";
import hackImg6 from "@/assets/hackathons/IMG_20250927_225611.jpg";
import hackImg7 from "@/assets/hackathons/IMG_20250927_225642.jpg";
import hackImg8 from "@/assets/hackathons/IMG_20250927_225721.jpg";

const hackathons = [
  {
    id: 1,
    badge: "🥈 1st Runner-Up",
    badgeColor: "from-yellow-500 to-amber-400",
    coverImage: hackImg6,
    title: "HackIndia 2024 — National Finals",
    subtitle: "India's Largest Web3 Hackathon",
    team: "StrawHat Fleet",
    project: "VegaBattle",
    projectDesc:
      "A gamified competitive coding platform built with Web3 & AI technologies.",
    date: "October 17-18, 2024",
    location: "New Delhi",
    participants: "9,251 students | 50+ universities",
    prize: "$150,000 Prize Pool",
    tags: ["Web3", "AI", "Blockchain", "National Level"],
    youtube: "https://youtu.be/gi1kkMbfNAE?si=YCZJ9gvdXSEhVQoV",
    youtubeEmbed: "gi1kkMbfNAE",
    images: [hackImg3, hackImg6, hackImg7, hackImg8],
    highlight: true,
  },
  {
    id: 2,
    badge: "🏆 Regional Winner",
    badgeColor: "from-blue-500 to-cyan-400",
    coverImage: hackImg2,
    title: "HackIndia Spark 6 — Regional",
    subtitle: "Regional Qualifier — College Level",
    team: "StrawHat Fleet",
    project: "VegaBattle",
    projectDesc:
      "Won the regional spark at college level, qualifying for the national finals in Delhi.",
    date: "September 07, 2024",
    location: "Bhilai, ChattishGarh",
    participants: "250 students | 10+ colleges",
    prize: "5000 INR",
    tags: ["Web3", "Regional", "Spark 6"],
    youtube: "https://youtu.be/vwhbkog9vTs?si=Pv65tIqcxRzK9xXB",
    youtubeEmbed: "vwhbkog9vTs",
    images: [hackImg1, hackImg2, hackImg3],
    highlight: false,
  },
  {
    id: 3,
    badge: "🏅 Best Use of TinyMCE & GitHub",
    badgeColor: "from-purple-500 to-pink-400",
    coverImage: hackImg5,
    title: "HackTheSpace 2.0",
    subtitle: "Track Award Winner",
    team: "StrawHat Fleet",
    project: "HackTheSpace Project",
    projectDesc:
      "Recognized for Best Use of TinyMCE Track Award and Best Use of GitHub at HackTheSpace 2.0.",
    date: "October 11, 2024",
    location: "Online / Hybrid",
    participants: "National Level",
    prize: "Best Use of TinyMCE + GitHub Award",
    tags: ["TinyMCE", "GitHub", "Award"],
    youtube: null,
    youtubeEmbed: null,
    images: [hackImg4, hackImg5],
    highlight: false,
  },
];

export default hackathons;
