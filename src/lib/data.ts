import {
  Award,
  Cloud,
  Code,
  GitBranch,
  Lightbulb,
  Server,
  Settings,
  Shield,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { BsPeople } from "react-icons/bs";
import { MdCardMembership, MdSupportAgent } from "react-icons/md";

export const data = {
  heroData: {
    title: "Master Cloud and DevOps",
    subtitle: "Your Gateway to Knowledge",
    description:
      "Transform your career with hands-on AWS training and cutting-edge DevOps practices. Join thousands of professionals who've accelerated their cloud journey with us.",
    buttonText1: "Start Learning Today",
    buttonText2: "View Our Courses",
  },
  stats: [
    {
      title: "Students Enrolled",
      number: "1200+",
    },
    {
      title: "Success Rate",
      number: "98%",
    },
    {
      title: "AWS Services",
      number: "50+",
    },
    {
      title: "Support",
      number: "24/7",
    },
  ],
  courses: [
    {
      id: 1,
      title: "AWS",
      description:
        "Comprehensive AWS certification courses covering AWS Certified Solutions Architect, DynamoDB, RDS and more. Get hands-on experience with real-world projects.",
      keyPoints: [
        "Hands-on Practice Sandbox",
        "Cloud Practitioner & AI Practitioner",
        "Expert Training",
        "Placement Placement Assistance",
      ],
      link: "#",
      icon: Cloud,
    },
    {
      id: 2,
      title: "Azure",
      description:
        "Comprehensive Azure certification courses covering Azure Fundamentals (AZ-900) and Azure Administrator Associate (AZ-104). Get hands-on experience with real-world projects.",
      keyPoints: [
        "Hands-on Practice Sandbox",
        "Azure, Cloud & AI Practitioner",
        "Expert Training",
        "Placement Assistance",
      ],
      link: "#",
      icon: Code,
    },
    {
      id: 3,
      title: "Cloud Computing Services (GCP)",
      description:
        "Gain expertise in deploying, managing, and operating scalable systems on Google Cloud Platform (GCP). This course prepares you for the Google Cloud Certified - Professional Cloud Architect exam.",
      keyPoints: [
        "Hands-on Practice Sandbox",
        "Azure, Cloud & AI Practitioner",
        "Expert Training",
        "Placement Assistance",
      ],
      link: "#",
      icon: Server,
    },
    {
      id: 4,
      title: "Docker and Kubernetes",
      description:
        "Master CI/CD and infrastructure automation. Learn industry best practices from experienced professionals. Work on real-world projects that mirror industry challenges.Receive personalized career guidance and placement assistance.",
      keyPoints: [
        "Hands-on Practice Sandbox",
        "Expert Training",
        "Placement Assistance",
      ],
      link: "#",
      icon: GitBranch,
    },
    {
      id: 5,
      title: "DevOps Bootcamp",
      description:
        "Master CI/CD and infrastructure automation. Learn industry best practices from experienced professionals.",
      keyPoints: [
        "End-to-End CI/CD Implementation",
        "Containerization & Orchestration with Docker & Kubernetes",
        "Placement Assistance",
      ],
      link: "#",
      icon: Shield,
    },
    {
      id: 6,
      title: "Infrastructure as Code",
      description:
        "Infrastructure as Code Learn to manage infrastructure using code with Terraform, CloudFormation, and other modern tools for scalable deployments.",
      keyPoints: [
        "Terraform Mastery",
        "Ansible",
        "Git Workflows",
        "Placement assistance",
      ],
      link: "#",
      icon: Settings,
    },
  ],
  features: [
    {
      title: "Hands-on Labs",
      description: "Get practical experience with real AWS environments.",
    },
    {
      title: "Expert Instructors",
      description:
        "Learn from industry professionals with extensive AWS experience.",
    },
    {
      title: "Comprehensive Curriculum",
      description:
        "Courses designed to cover all exam objectives and real-world applications.",
    },
    {
      title: "Community Support",
      description:
        "Join a community of learners and get support from peers and instructors.",
    },
  ],
  benefits: [
    {
      icon: Users,
      title: "Expert Instructors",
      description:
        "Learn from industry professionals with years of real-world experience in cloud and DevOps.",
    },
    {
      icon: Award,
      title: "Certification Support",
      description:
        "Get comprehensive preparation for AWS, Azure, and other industry-recognized certifications.",
    },
    {
      icon: Zap,
      title: "Hands-on Labs",
      description:
        "Practice with real cloud environments and build projects you can showcase to employers.",
    },
    {
      icon: MdSupportAgent,
      title: "Placement Support",
      description:
        "Learn from industry professionals with years of real-world experience in cloud and DevOps.",
    },
    {
      icon: MdCardMembership,
      title: "One to One Membership",
      description:
        "Learn from industry professionals with years of real-world experience in cloud and DevOps.",
    },
    {
      icon: BsPeople,
      title: "Community & Networking",
      description:
        "Join a vibrant community of learners and professionals to collaborate, share knowledge, and grow your career network.",
    },
  ],
  aboutUs: {
    title: "About DrCloud",
    tagline:
      "Empowering professionals with cutting-edge cloud and DevOps skills for the digital future.",
    description1:
      "DrCloud is dedicated to empowering individuals with the skills and knowledge needed to excel in the cloud computing and DevOps landscape. Our mission is to provide high-quality, accessible education that bridges the gap between theory and practice, enabling our students to achieve their career goals.",
    description2:
      "With a team of experienced instructors and industry professionals, we offer a range of courses that cover essential AWS services and DevOps practices. Our hands-on approach ensures that learners not only understand the concepts but also gain practical experience through real-world scenarios and labs.",
    keyPoints: [
      "AWS Advanced Consulting Partner",
      "Kubernetes Certified Service Provider",
    ],
    missions: [
      {
        icon: Target,
        title: "Mission-Driven",
        description:
          "We're committed to bridging the skills gap in cloud computing and helping professionals excel in the digital transformation era.",
      },
      {
        icon: Users,
        title: "Community Focus",
        description:
          "Building a supportive learning community where students and instructors collaborate and grow together.",
      },
      {
        icon: Lightbulb,
        title: "Innovation First",
        description:
          "We stay ahead of industry trends, constantly updating our curriculum with the latest technologies and best practices.",
      },
      {
        icon: TrendingUp,
        title: "Career Growth",
        description:
          "Our programs are designed to accelerate career advancement with practical skills that employers value.",
      },
    ],
  },
  contactInfo: {
    email: "support@drcloud.co.in",
    phone: "+91-842-115-0803",
    address: "S. B. Patil Road, Ravet, Pune, MH 411044",
  },
  socials: {
    linkedin: "https://www.linkedin.com/company/dr-cloud-co-in/8421150803",
    instagram: "https://www.instagram.com/drcloud.ai?igsh=MXRuNmhjYjltcXIyMQ==",
  },
  testimonials: {
    student: [
      {
        name: " Atharva Gawali",
        placement: "Johnson Controls Placement",
        description:
          "DrCloud's expert training and placement support helped me land a position at Johnson Controls, a global leader in smart building technologies and automation. The hands-on skills, mentorship, and industry connections gave me the confidence to excel at interviews and adapt quickly in my professional role. I amm grateful to the entire Dr Cloud team for turning my career aspirations into reality",
      },
      {
        name: " Rounak",
        placement: "Talenio Placement",
        description:
          "Dr Cloud’s practical cloud and DevOps training made a real difference in my career journey. Thanks to expert guidance and focused placement support, I was placed at Talenio, a fast-growing company redefining employability training and tech solutions. The curriculum, real-world projects, and dedicated team at Dr Cloud gave me the confidence and clarity to succeed professionally. I truly appreciate their commitment to every student’s future",
      },
      {
        name: " Trupti Wankhede",
        placement: "Johnson Controls Placement",
        description:
          "Thanks to Dr Cloud’s comprehensive training and dedicated placement support, I secured my role at Johnson Controls, a global leader in smart building technologies and sustainable solutions. The real-world skills and personalized guidance prepared me well for the professional challenges I face today. Dr Cloud truly transforms learning into career success.",
      },
    ],
    professionals: [
      {
        company: "Placement Assurance",
        designation: "Chairman",
        description:
          "As Chairman, I ensure Dr Cloud’s commitment to outstanding placement support, helping every student build a successful tech career. Our board is dedicated to expanding corporate links and ensuring quality job opportunities as a top priority",
      },
      {
        company: "Career Focus",
        designation: "CEO",
        description:
          "As CEO, my focus is on providing robust placement assistance—resume building, interview prep, and direct access to top hiring partners—so our graduates are job-ready from day one. We believe in transforming skills into careers, supporting each learner until they reach their goals",
      },
    ],
  },
};
