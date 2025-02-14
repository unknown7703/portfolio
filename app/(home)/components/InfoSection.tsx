import { BriefcaseBusiness,SquareChevronRight } from "lucide-react";

export function InfoSection() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center mb-14 px-10 md:px-24">
        <div className="w-full md:w-[70%] bg-muted p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-2 mb-4 text-sm md:text-xl font-semibold">
            <BriefcaseBusiness />
            <span>Education / Experience</span>
          </div>
          <div className="flex flex-col gap-4 text-sm md:text-xl">
            <div className="flex justify-between">
              <p>Intern Software Developer | Dorklabs</p>
              <p>Aug 23 - Sep 23</p>
            </div>
            <div className="flex justify-between">
              <p>B.Tech CSE | Vellore Institute of Technology, Vellore</p>
              <p>2021 - 2025</p>
            </div>
            <div className="flex justify-between">
              <p>Delhi Public School, Bhilai</p>
              <p>2021</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-40 px-10 md:px-24">
        <div className="w-full md:w-[70%] bg-muted p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-2 mb-4 text-sm md:text-xl font-semibold">
          <SquareChevronRight />
            <span>Competitve Coding</span>
          </div>
          <div className="flex flex-col gap-4 text-sm md:text-xl">
            <div className="flex justify-between">
              <p>Leetcode</p>
              <p>1721 | top 11.4%</p>
            </div>
            <div className="flex justify-between">
              <p>CodeForces</p>
              <p>1332 | Pupil</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
