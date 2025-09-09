import {
  Award,
  Cloud,
  Code,
  GitBranch,
  Server,
  Settings,
  Shield,
  Users,
  Zap,
} from "lucide-react";

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
      title: "AWS Certified Solutions Architect - Associate",
      description:
        "Learn to design and deploy scalable systems on AWS. Prepare for the AWS Certified Solutions Architect - Associate exam with hands-on labs and real-world scenarios.",
      keyPoints: ["EC2", "S3", "VPC", "IAM"],
      link: "#",
      icon: Cloud,
    },
    {
      id: 2,
      title: "AWS Certified Developer - Associate",
      description:
        "Master the skills needed to develop and maintain applications on AWS. This course covers core AWS services, best practices, and exam preparation.",
      keyPoints: ["Lambda", "DynamoDB", "API Gateway", "Cognito"],
      link: "#",
      icon: Code,
    },
    {
      id: 3,
      title: "AWS Certified SysOps Administrator - Associate",
      description:
        "Gain expertise in deploying, managing, and operating scalable systems on AWS. This course prepares you for the AWS Certified SysOps Administrator - Associate exam.",
      keyPoints: ["CloudWatch", "CloudFormation", "Auto Scaling", "RDS"],
      link: "#",
      icon: Server,
    },
    {
      id: 4,
      title: "DevOps on AWS",
      description:
        "Learn how to implement DevOps practices using AWS services. This course covers CI/CD pipelines, infrastructure as code, and monitoring on AWS.",
      keyPoints: ["CodePipeline", "CodeBuild", "CloudFormation", "ECS"],
      link: "#",
      icon: GitBranch,
    },
    {
      id: 5,
      title: "AWS Security Essentials",
      description:
        "Understand AWS security best practices and tools to protect your workloads. Learn IAM policies, KMS, and compliance frameworks.",
      keyPoints: ["IAM Policies", "KMS", "GuardDuty", "Security Hub"],
      link: "#",
      icon: Shield,
    },
    {
      id: 6,
      title: "AWS Automation with Terraform",
      description:
        "Automate AWS infrastructure provisioning using Terraform. Learn how to build reusable infrastructure as code modules and manage deployments at scale.",
      keyPoints: ["Terraform Basics", "Modules", "Workspaces", "IaC Pipelines"],
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
  ],
  aboutUs: {
    title: "About Dr. Cloud",
    description1:
      "Dr. Cloud is dedicated to empowering individuals with the skills and knowledge needed to excel in the cloud computing and DevOps landscape. Our mission is to provide high-quality, accessible education that bridges the gap between theory and practice, enabling our students to achieve their career goals.",
    desciption2:
      "With a team of experienced instructors and industry professionals, we offer a range of courses that cover essential AWS services and DevOps practices. Our hands-on approach ensures that learners not only understand the concepts but also gain practical experience through real-world scenarios and labs.",
    keyPoints: [
      "AWS Advanced Consulting Partner",
      "Kubernetes Certified Service Provider",
      "ISO 27001 Certified Training",
    ],
    features: [
      {
        icon: "🌐",
        title: "Mission-Driven",
        description:
          "We're committed to bridging the skills gap in cloud computing and helping professionals excel in the digital transformation era.",
      },
      {
        icon: "🌐",
        title: "Community Focus",
        description:
          "Building a supportive learning community where students and instructors collaborate and grow together.",
      },
      {
        icon: "🌐",
        title: "Innovation First",
        description:
          "We stay ahead of industry trends, constantly updating our curriculum with the latest technologies and best practices.",
      },
      {
        icon: "🌐",
        title: "Career Growth",
        description:
          "Our programs are designed to accelerate career advancement with practical skills that employers value.",
      },
    ],
  },
  contactInfo: {
    email: "info@drcloud.com",
    phone: "+91-800-123-4567",
    address: "123 Cloud St, Sangli City, MH 416416",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/dr-cloud",
    twitter: "https://twitter.com/dr_cloud",
    facebook: "https://www.facebook.com/drcloud",
    instagram: "https://www.instagram.com/dr_cloud",
    youtube: "https://www.youtube.com/drcloud",
  },
};
