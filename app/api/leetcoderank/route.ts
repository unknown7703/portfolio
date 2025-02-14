import { NextResponse } from "next/server";

export async function POST() {
  //console.log(" API Route Hit: /api/leetcode-rank"); 

  try {
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query { 
          userContestRanking(username: "Aatreya77") { 
            attendedContestsCount 
            rating 
            globalRanking 
            totalParticipants 
            topPercentage 
          } 
        }`,
      }),
    });

    if (!response.ok) {
      console.log(" Failed to fetch data from LeetCode.");
      return NextResponse.json(
        { error: `Failed to fetch LeetCode ranking. Status: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    //console.log(" Data fetched successfully:", data);

    return NextResponse.json(data);
  } catch (error) {
    console.error("LeetCode API Fetch Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
