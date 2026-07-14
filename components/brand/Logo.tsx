import Image from "next/image";
import { siteConfig } from "@/lib/site.config";

type LogoSize = "sm" | "md" | "lg";

const sizeMap: Record<LogoSize, { className: string; px: number }> = {
  sm: { className: "h-9 w-9", px: 36 },
  md: { className: "h-11 w-11 md:h-12 md:w-12", px: 48 },
  lg: { className: "h-16 w-16", px: 64 },
};

export function Logo({
  size = "md",
  priority = false,
  className = "",
}: {
  size?: LogoSize;
  priority?: boolean;
  className?: string;
}) {
  const { className: box, px } = sizeMap[size];

  return (
    <span
      className={`relative inline-block shrink-0 overflow-hidden bg-black ${box} ${className}`}
      aria-label={siteConfig.name}
    >
      <Image
        src="/images/logo.webp"
        alt={siteConfig.name}
        width={px}
        height={px}
        priority={priority}
        className="h-full w-full object-cover"
        sizes={`${px}px`}
      />
    </span>
  );
}
