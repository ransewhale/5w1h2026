import { describe, expect, it } from "vitest";
import { GET } from "./route";

describe("GET", () => {

    it("returns a suggestion when there is a unique candidate within the threshold", async () => {
        const request = new Request("http://localhost:3000/api/suggest?q=whcih");
        const response = await GET(request);
        const data = await response.json();
        expect(response.status).toBe(200);
        expect(data.suggestion).not.toBeNull();
        expect(data.suggestion?.slug).toBe("which");
    });

    it("returns whether when the query is weather", async () => {
        const request = new Request("http://localhost:3000/api/suggest?q=weather");
        const response = await GET(request);
        const data = await response.json();
        expect(response.status).toBe(200);
        expect(data.suggestion).not.toBeNull();
        expect(data.suggestion?.slug).toBe("whether");
    });

    it("returns null when there is more than one candidate within the threshold", async () => {
        const request = new Request("http://localhost:3000/api/suggest?q=whi");
        const response = await GET(request);
        const data = await response.json();
        expect(response.status).toBe(200);
        expect(data.suggestion).toBeNull();
    });

    it("prioritizes visible candidates", async () => {
        const request = new Request("http://localhost:3000/api/suggest?q=whenc");
        const response = await GET(request);
        const data = await response.json();
        expect(response.status).toBe(200);
        expect(data.suggestion).not.toBeNull();
        expect(data.suggestion?.slug).toBe("when");
    });
    

    it("returns null when the query is null", async () => {
        const request = new Request("http://localhost:3000/api/suggest");
        const response = await GET(request);
        const data = await response.json();
        expect(response.status).toBe(200);
        expect(data.suggestion).toBeNull();
    });


    it("returns null when the query is empty", async () => {
        const request = new Request("http://localhost:3000/api/suggest?q=");
        const response = await GET(request);
        const data = await response.json();
        expect(response.status).toBe(200);
        expect(data.suggestion).toBeNull();
    });

});