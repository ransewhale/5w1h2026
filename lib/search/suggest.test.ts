import { describe, expect, it } from "vitest";
import { suggest } from "./suggest";

describe("suggest", () => {
    const candidates = [
        { slug: "who", title: "WHO", hidden: true, content: "who page" },
        { slug: "which", title: "WHICH", hidden: true, content: "which page" },
        { slug: "why", title: "WHY", hidden: false, content: "why page" },
        { slug: "whither", title: "WHITHER", hidden: false, content: "whither page" },
        { slug: "whether", title: "WHETHER", hidden: false, content: "whether page" },
    ];

    it("returns a suggestion when there is a unique candidate within the threshold", () => {
        const result = suggest("whcih", candidates);
        expect(result).not.toBeNull();
        expect(result?.slug).toBe("which");
    });
    

    it("returns null when there is no candidates within the threshold", () => {
        const result = suggest("g", candidates);
        expect(result).toBeNull();
    });

    it("returns null when there is more than one candidate within the threshold", () => {
        const result = suggest("weather", candidates);
        expect(result).toBeNull();
    });

    it("prioritizes visible candidates", () => {
        const result = suggest("whi", candidates);
        expect(result).not.toBeNull();
        expect(result?.slug).toBe("why");
    });
    
});