import Link from "next/link";
import Image from "next/image";
import QandA from "@/components/QandA";
import Copyright from "@/components/Copyright";
import fs from "fs/promises";
import path from "path";
import ReactMarkdown from "react-markdown";
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
    robots: page.hidden
      ? {
          index: false,
          follow: false,
        }
      : undefined,
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

  const content = page.content ? 
    await fs.readFile(
      path.join(process.cwd(), "content", page.content),
      "utf-8"
    ) : 'No Content (ERROR)';
  console.log(content);
  

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
        <div className="QApage-md">
          <ReactMarkdown 
            components={{
              ul: ({ children }) => (
                <ul className="list-disc pl-6">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal pl-6">
                  {children}
                </ol>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
            }}>
            {content}
          </ReactMarkdown>
        </div>
      </QandA>
      <Copyright />
    </main>
  );
}
