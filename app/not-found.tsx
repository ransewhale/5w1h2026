import Link from "next/link";
import Image from "next/image";
import QandA from "@/components/QandA";
import MenuItem from "@/components/MenuItem";
import Copyright from "@/components/Copyright";
import { questions } from "@/data/questions";

export function generateMetadata(){
  return {
    title: `404 Not Found — ransewhale.net`
  };
}

export default function NotFound() {
  const visibleQuestions = questions.filter(
    (question) => !question.hidden
  );
  return (
    <main className="Home mx-auto min-h-screen w-full max-w-xl flex-col">
      <header className="Header">
        <Link href="/" className="RWicon">
          <Image
            src="/rw.svg"
            alt="ransewhale icon"
            width={96}
            height={96}
            />
        </Link>
      </header>

      <QandA theme="Not Found">
        <p>The appropriate message for the not found page is not found.</p>
        <p>By the way, for your information, here are the words we use in questions:</p>
        <nav className="Navigation flex-1">
          <ul>
            {visibleQuestions.map((question) => (
              <MenuItem key={question.slug} href={`/${question.slug}`}>
                {question.title}
              </MenuItem>
            ))}
          </ul>
        </nav>
      </QandA>

      <Copyright />
    </main>
  );
}
