import Image from "next/image";
import { Facebook, Instagram, Linkedin, Github, Heart } from 'lucide-react';
import { motion } from "framer-motion";

export default function Footer() {
  const socials = [
    {
      name: "Facebook",
      url: "https://facebook.com/tadiwa.tips.37",
      icon: <Facebook className="w-6 h-6" />,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/young_tips_blessed",
      icon: <Instagram className="w-6 h-6" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/tadiwa-chipungu",
      icon: <Linkedin className="w-6 h-6" />,
    },
    {
      name: "TikTok",
      url: "https://github.com/VIPERtips",
     icon: <Github className="w-6 h-6"/>
    },
  ];

  const techStack = [
    {
      name: "Java",
      icon: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
    },
    {
      name: "Spring",
      icon: "https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white",
    },
    {
      name: "Bootstrap",
      icon: "https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white",
    },
    {
      name: "MySQL",
      icon: "https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white",
    },
    {
      name: "Python",
      icon: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
    },
    {
      name: "Adobe Illustrator",
      icon: "https://img.shields.io/badge/adobe%20illustrator-%23FF9A00.svg?style=for-the-badge&logo=adobe%20illustrator&logoColor=white",
    },
    {
      name: "CSS3",
      icon: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0">
            © {currentYear} Made with <Heart className="inline w-4 h-4 text-red-500 mx-1 " /> by Tadiwa Blessed
          </p>
          <div className="flex space-x-4">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}