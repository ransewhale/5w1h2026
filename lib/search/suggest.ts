import { questions } from "../../data/questions";
import { rankCandidates } from "./rank";

type Question = (typeof questions)[number];

type RankedQuestion = Question & {
  distance: number;
};

const MAX_DISTANCE = 2;

export function suggest(query: string, candidates: Question[]): RankedQuestion | null {
    const rankedQuestions = rankCandidates(query, candidates);
    
    if(rankedQuestions.length === 0){
        return null;
    }
    const suggestion = rankedQuestions
        .filter((candidate) => candidate.distance === rankedQuestions[0].distance)
        .filter((candidate) => candidate.hidden === rankedQuestions[0].hidden);
    if(suggestion.length === 0){
        return null;
    }
    if(suggestion[0].distance > MAX_DISTANCE || suggestion.length > 1){
        return null;
    }
    return suggestion[0];
}
