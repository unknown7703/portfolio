import { ReactNode } from "react";

export interface ChildProps {
  children: ReactNode;
}

export interface LeetcodeContestRanking {
  attendedContestsCount: number;
  rating: number;
  globalRanking: number;
  totalParticipants: number;
  topPercentage: number;
}

