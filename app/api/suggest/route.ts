import { suggest } from "@/lib/search/suggest";
import { questions } from "@/data/questions";

export async function GET(request: Request) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    if (q === null || q.trim() === "") {
        return Response.json({ suggestion: null });
    }
    const query = q.toLowerCase();
    const result = (query === "weather")?
        questions.find((question) => question.slug === "whether")
        :suggest(query, questions);
    return Response.json({ suggestion: result? {
        slug: result.slug,
        title: result.title,
        hidden: result.hidden,
    }:null });
}