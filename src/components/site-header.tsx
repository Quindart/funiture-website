import {
  ChevronDown,
  Heart,
  Search,
  ShoppingBag,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import { primaryNavigation, siteInfo, socialLinks } from "@/lib/site-config";

type SocialName = (typeof socialLinks)[number]["name"];

function SocialIcon({ name }: { name: SocialName }) {
  if (name === "Facebook") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[17px] fill-current">
        <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.03 4.39 11.03 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.27h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07Z" />
      </svg>
    );
  }

  if (name === "Instagram") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-[17px] fill-none stroke-current stroke-[2]"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".75" className="fill-current stroke-none" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[18px] fill-current">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
    </svg>
  );
}

const utilityActions = [
  { label: "Account", Icon: UserRound },
  { label: "Search", Icon: Search },
  { label: "Wishlist", Icon: Heart },
  { label: "Shopping bag", Icon: ShoppingBag },
];

export function SiteHeader() {
  return (
    <header className="w-full bg-background text-foreground">
      <div className="relative grid h-[72px] grid-cols-[1fr_auto] items-center border-b border-border px-4 sm:h-[88px] sm:grid-cols-[1fr_auto_1fr] sm:px-8">
        <div className="hidden items-center gap-6 text-muted-foreground sm:flex">
          {socialLinks.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              title={name}
              className="inline-flex size-8 cursor-pointer items-center justify-center transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <SocialIcon name={name} />
            </a>
          ))}
        </div>

        <Link
          href="/"
          aria-label={`${siteInfo.name} home`}
          className="justify-self-start whitespace-nowrap text-[18px] font-bold tracking-[0.15em] sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:justify-self-auto sm:text-[30px] sm:tracking-[0.36em]"
        >
          {siteInfo.name}
        </Link>

        <div className="col-start-2 flex items-center justify-self-end gap-1 sm:col-start-3 sm:gap-3">
          {utilityActions.map(({ label, Icon }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              title={label}
              className="inline-flex size-9 cursor-pointer items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Icon aria-hidden="true" className="size-[21px] stroke-[1.5]" />
            </button>
          ))}
        </div>
      </div>

      <div className="border-b border-border px-4 sm:px-8">
        <div className="mx-auto flex min-h-[58px] max-w-[1920px] items-center justify-between gap-8">
          <div className="hidden shrink-0 items-center gap-7 text-[13px] font-medium uppercase tracking-wide xl:flex">
            <a href={`tel:${siteInfo.phone}`} className="hover:text-muted-foreground">
              {siteInfo.phone}
            </a>
            <a href={`mailto:${siteInfo.email}`} className="hover:text-muted-foreground">
              {siteInfo.email}
            </a>
          </div>

          <nav
            aria-label="Main navigation"
            className="mx-auto flex min-w-0 items-center gap-7 overflow-x-auto py-4 text-[14px] font-medium uppercase tracking-wide [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-9"
          >
            {primaryNavigation.map(({ name, href, hasSubmenu }) => (
              <Link
                key={name}
                href={href}
                className="inline-flex shrink-0 items-center gap-1.5 transition-colors hover:text-muted-foreground focus-visible:outline-none focus-visible:underline"
              >
                {name}
                {hasSubmenu && (
                  <ChevronDown
                    aria-hidden="true"
                    className="size-3 text-muted-foreground"
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className=" shrink-0 items-center gap-8 text-[13px] font-medium uppercase tracking-wide min-[1800px]:flex">
            <span>{siteInfo.address}</span>
            <span>{siteInfo.hours}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
