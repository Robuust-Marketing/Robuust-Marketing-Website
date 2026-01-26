import { Link } from "@/i18n/routing";
import { User, Linkedin, Instagram, Facebook, Youtube, Twitter } from "lucide-react";

interface AuthorBioProps {
  author?: string;
}

const socialLinks = [
  { href: "https://www.linkedin.com/company/18149224/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/robuustmarketing/", icon: Instagram, label: "Instagram" },
  { href: "https://www.facebook.com/RobuustMarketing/", icon: Facebook, label: "Facebook" },
  { href: "https://www.youtube.com/channel/UCqqewiSClIhuAeuWVh9eidQ", icon: Youtube, label: "YouTube" },
  { href: "https://x.com/RobuustM", icon: Twitter, label: "X" },
];

const authorProfiles: Record<string, { role: string; bio: string }> = {
  "Robuust Marketing": {
    role: "Marketing & Development Team",
    bio: "Het team van Robuust Marketing helpt MKB-bedrijven met professionele websites, hosting en online marketing strategieën.",
  },
  default: {
    role: "Auteur",
    bio: "Expert op het gebied van webdevelopment, hosting en online marketing voor het MKB.",
  },
};

export function AuthorBio({ author = "Robuust Marketing" }: AuthorBioProps) {
  const profile = authorProfiles[author] || authorProfiles.default;

  return (
    <div className="flex gap-4 p-6 rounded-xl bg-surface border border-white/5">
      <div className="flex-shrink-0">
        <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
          <User className="h-7 w-7 text-accent" />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-white">{author}</p>
        <p className="text-sm text-accent mb-2">{profile.role}</p>
        <p className="text-sm text-muted-foreground">{profile.bio}</p>
        <div className="flex items-center gap-4 mt-4">
          <Link
            href="/blog"
            className="text-sm text-accent hover:underline"
          >
            Bekijk alle artikelen
          </Link>
          <div className="flex gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-muted-foreground hover:bg-accent/20 hover:text-accent transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
