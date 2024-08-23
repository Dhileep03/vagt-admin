"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function LandingHeader() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/auth/login");
  };

  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <span className="text-lg font-semibold">VAGT</span>
        </Link>
        <nav className="hidden space-x-4 md:flex">
          <Link href="#home" className="hover:underline" prefetch={false}>
            Home
          </Link>
          <Link href="#features" className="hover:underline" prefetch={false}>
            Features
          </Link>
          <Link href="#contact" className="hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button variant="outline" className="text-black" onClick={handleLoginClick}>
          Login
        </Button>
      </div>
    </header>
  );
}

