import React from "react";
import TrackCard from "./TrackCard";

export default function HomeContainer() {
  return (
    <div className="flex flex-col my-0 mx-auto max-w-[1000px] py-[4em] px-[2em]">
      <div
        id="heroblurbcontainer"
        className="flex items-center justify-center flex-col gap-[1.5em] mb-[5em]"
      >
        <p className="text-center text-[32px] font-[600]">
          ENCOURAGING A NEW GENERATION OF SOCIAL GOOD INNOVATORS
        </p>
        <p className="flex text-center text-[20px] font-[400]">
          A non-profit, student-run, annual hackathon based in UC Santa Cruz.
          Each year we welcome hundreds of college and high school students
          interested in developing technology for social good. We strive to
          empower the next generation of creators by providing the tools,
          environment, and motivation to plausibly solve real-world problems.
        </p>
      </div>
      <div>
        <p className="text-center text-[28px] font-[600]">TECH CARE TRACKS</p>
        <div
          id="trackscontainer"
          className="flex flex-wrap items-center justify-center mb-[5em]"
        >
          <TrackCard
            title={"SUSTAINABILITY"}
            description={
              "This category is dedicated to supporting sustainability and conservation efforts. How can we live harmoniously with our planet?"
            }
          />
          <TrackCard
            title={"HEALTH"}
            description={
              "This category aspires to address healthcare disparities. How do we support mental & physical well-being with accessible services?"
            }
          />
          <TrackCard
            title={"JUSTICE"}
            description={
              "This category aims to drive innovation for civil liberty and social justice. How can we uphold truth & order in a (mis)information age?"
            }
          />
          <TrackCard
            title={"FINTECH"}
            description={
              "This category is dedicated to driving innovation in financial technology for social good. How can we make finances and banking more accessible to the general public?"
            }
          />
        </div>
      </div>
      <div>
        <p className="text-center text-[28px] font-[600]">CATEGORY PRIZES</p>
        <div
          id="trackscontainer"
          className="flex flex-wrap items-center justify-center mb-[5em]"
        >
          <TrackCard
            title={"BEGINNER"}
            description={
              "Hackathons are meant for everyone, especially our first-timers! We've created a prize category to reward teams composed of all first-time hackers."
            }
          />
          <TrackCard
            title={"NEW TECHNOLOGIES"}
            description={
              "The world is constantly changing, and so is technology! Create a project using some of the newest technologies, such as AI/ML, AR/VR, or decentralized technology."
            }
          />
          <TrackCard
            title={"UI/UX"}
            description={
              "Have a new paradigm for interaction design? Create a project that has an awesome user experience!"
            }
          />
          <TrackCard
            title={"SLUGHACKS"}
            description={
              "Create something that benefits the UC Santa Cruz campus community!"
            }
          />
        </div>
      </div>
    </div>
  );
}
