"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";


type Suggestion = {
    slug: string;
    title: string;
    hidden: boolean;
};

type SuggestionResponse = {
    suggestion: Suggestion | null;
};

export default function Suggest() {
    const [loading, setLoading] = useState<boolean>(true);
    const [suggestion, setSuggestion] = useState<Suggestion | null>(null);

    const pathname = usePathname();
    const query = pathname.replace(/^\/|\/$/g, "");

    useEffect(() => {
        const controller = new AbortController();
        async function fetchSuggestion(){
            try{
                const response = await fetch(
                    "/api/suggest?q=" + query,
                    { signal: controller.signal }
                );
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }
                const data: SuggestionResponse = await response.json();
                setSuggestion(data.suggestion);
            } catch(error){
                if (error instanceof Error && error.name === "AbortError") {
                    return;
                }
                console.error("Failed to fetch suggestion: ", error);
            }finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        }
        fetchSuggestion();
        return () => {
            controller.abort();
        };
    }, [query]);

    if (loading) {
        return (<p className="notfound-suggestion">Now thinking a suggestion for you...</p>);
    }
    if (suggestion === null) {
        return (<p className="notfound-suggestion">The appropriate suggestion for you is not found either.</p>);
    }
    // ここまで来たら suggestion は null ではない
    return (
    <p className="notfound-suggestion">
        {suggestion.hidden?"Whether meantest thou?: ":"Did you mean?: "}
        <Link href={`/${suggestion.slug}`}>
            {suggestion.title} 
        </Link>
    </p>
    );
}