"use client"
export const navItems = [
  // { name: "Home", link: "#" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Frontend Lead at Property Cibil, shipping production React & Next.js interfaces daily",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Based in Jaipur, India — comfortable collaborating across distributed, cross-functional teams",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Frontend-driven full stack engineer, 2+ years shipping production web apps.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Recently shipped a vendor stock-tracking dashboard with CSV bulk uploads",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Vendor Stock Dashboard (Smith & Sky)",
    des: "Inventory dashboard tracking merchandise stock per vendor/cafe, with automatic low-stock alerts when quantities drop below a set minimum. Supports manual updates and direct CSV bulk uploads. Built end-to-end, solo.",
    img: "/vendor-dashboard.png",
    iconLists: ["nextjs", "react", "typescript", "tailwind", "supabase"],
    link: "https://vendorsdashboard.vercel.app/",
    githubLink: "https://github.com/Neelbhat/Dashboard",
  },
  {
    id: 2,
    title: "PH Security Labs — Learning & Certification Platform",
    des: "Multi-tenant learning platform serving two organizations from a shared codebase, with course enrollment, lesson progress tracking, voucher-based discounts, and a certificate issuance system with QR-code public verification.",
    img: "/ph-security.png",
    iconLists: ["nextjs", "typescript", "postgresql", "prisma", "firebase", "tailwind"],
    link: "https://ph-ju7b.vercel.app/",
    githubLink: "https://github.com/Neelbhat/ph",
  },
  {
    id: 3,
    title: "PayrollPro — Multi-Tenant HR & Payroll Platform",
    des: "Frontend for a multi-tenant payroll SaaS with schema-based company isolation and role-based access control across admin, company, and employee roles, including a full payroll run workflow and an HR support-ticketing module.",
    img: "/payroll.jpg",
    iconLists: ["react", "tailwind", "javascript"],
    link: "https://payrollsystem-seven.vercel.app/login",
  },
];

export const testimonials = [
  {
    quote:
      "Neel has demonstrated exceptional performance during their internship, showcasing impressive frontend skills with strong attention to detail and creativity. Their backend knowledge complemented their work effectively, enabling seamless integration. During his stay in the company as an intern , he displays enthusiasm, leadership, self-disipline and self-motivation!. We are lucky to have him as an interns before and we would like to wish him all the Best",
    name: "Chanchal Goyal",
    title: "Director of Vigorus Healtech Private limited",
    image: "/chanchal.png",
  },
  {
    quote:
      "Collaborating with Neel was an absolute pleasure.He showcased excellent skills in UI/UX design, creating intuitive, user-friendly interfaces. Their strong frontend expertise, creativity, and proactive problem-solving made them a valuable asset throughout their internship. Great potential!!",
    name: "S.K. Jagannath Charya",
    title: "Founder of FLAC services",
    image: "/sk.png",
  },
  {
    quote:
      "Collaborating with Neel was an absolute pleasure.He showcased excellent skills in UI/UX design, creating intuitive, user-friendly interfaces. Their strong frontend expertise, creativity, and proactive problem-solving made them a valuable asset throughout their internship. Great potential!!",
    name: "Ajay singh Hada",
    title: "Founder of Ariaiq Technology",
    image: "/sk.png",
  },
];

export const clientTestimonials = [
  {
    quote:
      "Baaki sab first class hai! Great job — jaisa socha tha, usse bhi badiya kiya hai.",
    name: "Mukesh Ji",
    title: "Owner, YoungMK NGO",
    image: "/mukesh.svg",
  },
  {
    quote: "Fantastic job — you framed my thinking in actual code!!",
    name: "Aasma Saurabh Shah",
    title: "Owner, Smith & Sky",
    image: "/aasma.svg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Lead",
    desc: "Leading frontend for a 2-person team on Next.js/React property dashboards; cut post-merge bugs ~40% via a new PR review process.",
    className: "md:col-span-2",
    place: "Property Cibil",
    url: "https://propertycibil.com/",
    thumbnail: "/exp4.svg",
  },
  {
    id: 2,
    title: "Software Engineer",
    desc: "Built UI systems for an AI video surveillance platform, including a frame-by-frame event timeline optimized with viewport-based rendering.",
    className: "md:col-span-2",
    place: "Ariaiq Technologies",
    url: "https://ariaiq.com/",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Web Developer Intern",
    desc: "Built React modules for a healthcare admin dashboard (Analytics, Inventory, Appointments); cut page load time by 10%.",
    className: "md:col-span-2",
    place: "Vigorus Healthtech",
    url: "https://www.chikitsa.io/",
    thumbnail: "/exp1.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Neelbhat",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/BhatnagarNeel",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/neel-bhatnagar-04a413227/",
  },
];
