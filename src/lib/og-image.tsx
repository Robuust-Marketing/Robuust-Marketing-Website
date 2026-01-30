import { ImageResponse } from "next/og";

// Brand colors from globals.css
const BRAND_COLORS = {
  background: "#18242e",
  foreground: "#ffffff",
  accent: "#c53c0b",
  muted: "#94a3b8",
  surface: "#25313b",
};

// OG Image dimensions
export const OG_IMAGE_SIZE = {
  width: 1200,
  height: 630,
};

export interface OGImageProps {
  title: string;
  subtitle?: string;
  type?: "default" | "blog" | "kennisbank" | "portfolio" | "service";
}

/**
 * Generates an Open Graph image with brand styling
 * Used by the /api/og route and convention-based opengraph-image.tsx files
 */
export async function generateOGImage({
  title,
  subtitle,
  type = "default",
}: OGImageProps): Promise<ImageResponse> {
  // Fetch Inter font from Google Fonts
  const interBold = await fetch(
    new URL(
      "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYMZhrib2Bg-4.ttf",
      import.meta.url
    )
  ).then((res) => res.arrayBuffer());

  const interRegular = await fetch(
    new URL(
      "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuI6fMZhrib2Bg-4.ttf",
      import.meta.url
    )
  ).then((res) => res.arrayBuffer());

  // Fetch the Robuust logo
  const logoData = await fetch(
    new URL("https://robuustmarketing.nl/logo.png", import.meta.url)
  ).then((res) => res.arrayBuffer());

  // Type-specific styling
  const typeStyles = {
    default: { subtitleColor: BRAND_COLORS.accent },
    blog: { subtitleColor: BRAND_COLORS.accent },
    kennisbank: { subtitleColor: BRAND_COLORS.accent },
    portfolio: { subtitleColor: BRAND_COLORS.accent },
    service: { subtitleColor: BRAND_COLORS.accent },
  };

  const style = typeStyles[type] || typeStyles.default;

  // Truncate title if too long
  const displayTitle =
    title.length > 80 ? title.substring(0, 77) + "..." : title;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: BRAND_COLORS.background,
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            backgroundColor: BRAND_COLORS.accent,
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "auto",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`data:image/png;base64,${Buffer.from(logoData).toString("base64")}`}
            alt="Robuust Marketing"
            height={48}
            style={{ height: "48px", width: "auto" }}
          />
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            maxWidth: "900px",
          }}
        >
          {/* Subtitle / Category */}
          {subtitle && (
            <span
              style={{
                color: style.subtitleColor,
                fontSize: "24px",
                fontWeight: 600,
                fontFamily: "Inter",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "16px",
              }}
            >
              {subtitle}
            </span>
          )}

          {/* Title */}
          <h1
            style={{
              color: BRAND_COLORS.foreground,
              fontSize: title.length > 50 ? "52px" : "64px",
              fontWeight: 700,
              fontFamily: "Inter",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            {displayTitle}
          </h1>
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "auto",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "4px",
              backgroundColor: BRAND_COLORS.accent,
              marginRight: "24px",
            }}
          />
          <span
            style={{
              color: BRAND_COLORS.muted,
              fontSize: "20px",
              fontFamily: "Inter",
            }}
          >
            robuustmarketing.nl
          </span>
        </div>
      </div>
    ),
    {
      ...OG_IMAGE_SIZE,
      fonts: [
        {
          name: "Inter",
          data: interBold,
          weight: 700,
          style: "normal",
        },
        {
          name: "Inter",
          data: interRegular,
          weight: 400,
          style: "normal",
        },
      ],
    }
  );
}

/**
 * Generate OG image URL with query parameters
 * Used by static pages in their generateMetadata functions
 */
export function getOGImageUrl(
  title: string,
  subtitle?: string,
  type?: OGImageProps["type"]
): string {
  const params = new URLSearchParams();
  params.set("title", title);
  if (subtitle) params.set("subtitle", subtitle);
  if (type) params.set("type", type);
  return `/api/og?${params.toString()}`;
}
