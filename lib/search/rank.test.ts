import { describe, expect, it } from "vitest";
import { rankCandidates } from "./rank";

describe("rankCandidates", () => {
    const candidates = [
        { slug: "who", title: "WHO", hidden: true },
        { slug: "which", title: "WHICH", hidden: true },
        { slug: "why", title: "WHY", hidden: false },
    ];

    it("adds OSA distance to each candidate", () => {
        const result = rankCandidates("which", candidates);
        expect(result.find((item) => item.slug === "which")?.distance).toBe(0);
    });
    
    it("is ordered by OSA distance", () => {
        const result = rankCandidates("whcih", candidates);
        expect(result.map((item) => item.slug)).toEqual(["which", "why", "who"]);
    }); 

    it("prioritizes visible candidates when distances are equal", () => {
        const result = rankCandidates("whi",  candidates);
        expect(result.map((item) => item.slug)).toEqual(["why", "who", "which"]);
    }); 

    it("does not modify the original candidates", () => {
        rankCandidates("", candidates);
        expect(candidates[0]).not.toHaveProperty("distance");
    }); 
});