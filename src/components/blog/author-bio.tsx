import Link from "next/link";
import { User } from "lucide-react";

interface AuthorBioProps {
  author?: string;
}

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
        <Link
          href="/blog"
          className="inline-block mt-3 text-sm text-accent hover:underline"
        >
          Bekijk alle artikelen
        </Link>
      </div>
    </div>
  );
}
