import Link from "next/link";
import Image from "next/image";
import QandA from "@/components/QandA";
import Copyright from "@/components/Copyright";
import { notFound } from "next/navigation";
import { questions } from "@/data/questions";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ question: string }>;
}) {
  const { question } = await params;

  const page = questions.find(
    (item) => item.slug === question
  );

  if (!page) {
    notFound();
  }

  return {
    title: `${page.title} — ransewhale.net`,
  };
}

export default async function Question({
  params,
}: {
  params: Promise<{ question: string }>;
}) {
  const { question } = await params;
  
  const page = questions.find(
    (item) => item.slug === question
  );

  if (!page) {
    notFound();
  }

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

      <QandA theme={page.title}>
        {page.paragraphs.map((paragraph, index) => (
          <p key={index}>
            {paragraph}
          </p>
        ))}
      </QandA>

      <Copyright />
    </main>
  );
}
