import React from "react";
import TimelineView from "./TimelineView";

export default {
  title: "Timeline/TimelineView",
  component: TimelineView,
};

export const Default: React.FC = () => {
  const sampleRows = [
    { id: "row-1", label: "Frontend Team", tasks: ["task-1", "task-2"] },
    { id: "row-2", label: "Backend Team", tasks: ["task-3"] },
    { id: "row-3", label: "Design Team", tasks: ["task-4"] },
  ];

  const sampleTasks = {
    "task-1": {
      id: "task-1",
      title: "UI Component Development",
      startDate: new Date(2024, 0, 1),
      endDate: new Date(2024, 0, 15),
      progress: 60,
      assignee: "Frontend Team",
      rowId: "row-1",
      dependencies: [],
      color: "#3b82f6",
      isMilestone: false,
    },
  };

  return (
    <TimelineView
      rows={sampleRows}
      tasks={sampleTasks}
      startDate={new Date(2024, 0, 1)}
      endDate={new Date(2024, 0, 31)}
      viewMode="week"
      onTaskUpdate={() => {}}
      onTaskMove={() => {}}
    />
  );
};
