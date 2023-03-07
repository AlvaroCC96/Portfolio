import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import experience from "../data/experience.js";
const WorkExperience = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        iconStyle={{ background: "rgb(188, 52, 51)", color: "#fff" }}
      />
      {experience.map((data) => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work shadow-lg bg-slate-300 dark:bg-slate-400 dark:text-slate-800 rounded-xl duration-300 ease int-out hover:scale-110"
          contentStyle={{
            backgroundColor: "inherit",
            color: "inherit",
            boxShadow: "none",
            ...(document.body.classList.contains("dark") && {
              backgroundColor: "#718096",
              color: "#1A202C",
            }),
          }}
          contentArrowStyle={{ borderRight: "7px solid" }}
          date={data.date}
          iconStyle={{ background: "#CBD5E0", color: "#444444" }}
          icon={data.icon}
        >
          <h3 className="vertical-timeline-element-title">{data.name}</h3>
          <h4 className="vertical-timeline-element-subtitle">{data.job}</h4>
          <p>{data.description}</p>
        </VerticalTimelineElement>
      ))}
      <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
      />
    </VerticalTimeline>
  );
};

export default WorkExperience;
