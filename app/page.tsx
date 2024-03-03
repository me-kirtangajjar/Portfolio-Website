import { Button } from "@/components/ui/button";
import { WavyBackground } from "@/components/ui/wavy-background";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Kirtan Gajjar
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          <Link href="https://www.linkedin.com/in/me-kirtangajjar" target="/">
            <Button variant="secondary">Linkedin</Button>
          </Link>

          <Button variant="secondary">Github</Button>
          <Button variant="secondary">Github</Button>
          <Button variant="secondary">Github</Button>
          <Button variant="secondary">Github</Button>
          <Button variant="secondary">Github</Button>
        </p>
      </WavyBackground>
    </main>
  );
}
