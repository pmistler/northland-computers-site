import Image from "next/image";
import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className="focus-ring flex shrink-0 items-center rounded-md"
      aria-label="Northland Computers home"
    >
      <Image
        src={light ? "/images/logo-primary-light.svg" : "/images/logo-primary.svg"}
        alt="Northland Computers"
        width={620}
        height={168}
        priority
        className="h-auto w-[210px] sm:w-[235px]"
      />
    </Link>
  );
}
