import Link from "next/link";
import Image from "next/image";
import MenuItem from "@/components/MenuItem";
import Copyright from "@/components/Copyright";
import { questions } from "@/data/questions";

export default function Home() {
  const visibleQuestions = questions.filter(
    (question) => !question.hidden
  );
  return (
    <main className="Home mx-auto min-h-screen w-full max-w-xl">
      <header className="Header">
        <Link href="/" className="RWicon">
          <Image
            src="/rwanime.svg"
            alt="ransewhale animation icon"
            width={120}
            height={120}
            />
        </Link>
        <h1 className="TopTitle">ransewhale.net</h1>
      </header>

      <nav className="Navigation flex-1">
        <ul>
          {visibleQuestions.map((question) => (
            <MenuItem key={question.slug} href={`/${question.slug}`}>
              {question.title}
            </MenuItem>
          ))}
        </ul>
      </nav>

      <Copyright />
    </main>
  );
}
