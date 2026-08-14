import Link from "next/link";

type QandAProps = {
  theme: string;
  children: React.ReactNode;
};

export default function QandA({ theme, children }: QandAProps) {
  return (
      <section className="QandA flex-1">
        <h1>{theme}</h1>
        {children}
        <div className="QandA-BackNav">
          <hr />
          <Link href="/">&larr;Back</Link>
        </div>
      </section>
  );
}
