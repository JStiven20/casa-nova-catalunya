
import { Facebook, Instagram, Youtube } from "lucide-react";

interface SocialMediaLinksProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const SocialMediaLinks = ({ className = "", size = "md" }: SocialMediaLinksProps) => {
  const iconSize = size === "sm" ? "h-4 w-4" : size === "lg" ? "h-6 w-6" : "h-5 w-5";
  const buttonSize = size === "sm" ? "p-2" : size === "lg" ? "p-3" : "p-2.5";

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://facebook.com/novacasa", // Replace with actual URL
      icon: Facebook,
      color: "hover:bg-blue-600"
    },
    {
      name: "Instagram", 
      url: "https://instagram.com/novacasa", // Replace with actual URL
      icon: Instagram,
      color: "hover:bg-pink-600"
    },
    {
      name: "TikTok",
      url: "https://tiktok.com/@novacasa", // Replace with actual URL
      icon: Youtube, // Using Youtube as TikTok icon not available in lucide
      color: "hover:bg-black"
    }
  ];

  return (
    <div className={`flex space-x-2 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonSize} bg-gray-100 text-gray-600 rounded-full transition-all duration-300 ${social.color} hover:text-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-steel-blue`}
          aria-label={`Síguenos en ${social.name}`}
        >
          <social.icon className={iconSize} />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
