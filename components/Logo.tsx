import Image from "next/image";
import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="focus-ring flex items-center rounded-md" aria-label="Northland Computers home">
      <Image
        src={light ? "/images/logo-light.svg" : "/images/logo-dark.svg"}
        alt="Northland Computers"
        width={195}
        height={60}
        priority
        className="h-12 w-auto"
      />
    </Link>
  );
}
