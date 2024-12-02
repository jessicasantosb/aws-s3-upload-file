import Image from "next/image";
import Link from "next/link";

export function Logo({ size }: { size: number }) {
  return (
    <Link href={"/"}>
      <Image
        alt="Z"
        src={"/logo.png"}
        width={size}
        height={size}
        quality={100}
      />
    </Link>
  );
}
