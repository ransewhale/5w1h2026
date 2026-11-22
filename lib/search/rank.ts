import { questions } from "../../data/questions";
import { osaDistance } from "./distance";

type Question = (typeof questions)[number];

type RankedQuestion = Question & {
  distance: number;
};

export function rankCandidates(query: string, candidates: Question[]): RankedQuestion[] {
    const rankedQuestions = candidates
    .map((question) => ({
        ...question,
        distance: osaDistance(question.slug, query),
    }))
    .sort((a, b) => {
        // まず距離で比較
        if (a.distance !== b.distance) {
            return a.distance - b.distance;
        }
        // 距離が同じなら公開ページを優先
        return Number(a.hidden) - Number(b.hidden);
        });
    return rankedQuestions;
}
