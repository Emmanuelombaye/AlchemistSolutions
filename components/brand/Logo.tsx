import Image from "next/image";
import { siteConfig } from "@/lib/site.config";

type LogoSize = "sm" | "md" | "lg";

/** Wordmark is wider than tall after trim (~1.54 ratio). */
const sizeMap: Record<
  LogoSize,
  { className: string; width: number; height: number }
> = {
  sm: { className: "h-10 w-auto", width: 120, height: 78 },
  md: { className: "h-14 w-auto md:h-16", width: 180, height: 117 },
  lg: { className: "h-20 w-auto md:h-24", width: 220, height: 143 },
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
  const { className: box, width, height } = sizeMap[size];

  return (
    <span
      className={`relative inline-flex shrink-0 items-center bg-transparent ${box} ${className}`}
      aria-label={siteConfig.name}
    >
      <Image
        src="/images/logo.webp"
        alt={siteConfig.name}
        width={width}
        height={height}
        priority={priority}
        className="h-full w-auto object-contain"
        sizes="(max-width:768px) 160px, 200px"
      />
    </span>
  );
}
