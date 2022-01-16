import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faCalendar,
} from "@fortawesome/free-regular-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const colorConfig = {
  blue: {
    borderColor: "border-blue",
    bgColor: "bg-blue",
  },
  fuschia: {
    borderColor: "border-fuschia",
    bgColor: "bg-fuschia",
  },
  gold: {
    borderColor: "border-gold",
    bgColor: "bg-gold",
  },
  green: {
    borderColor: "border-green",
    bgColor: "bg-green",
  },
};

const TaskCard = ({ taskInfo }) => {
  const { id, color, description, date, name } = taskInfo;
  const today = new Date(date);
  return (
    <div
      className={`${colorConfig[color].borderColor} p-4 gap-4 border-2 rounded-xl max-w-fit flex flex-col justify-center items-center`}
    >
      <div className="flex flex-row justify-center items-center gap-4 text-base">
        <FontAwesomeIcon icon={faEdit} />
        <div
          className={`text-white text-center ${colorConfig[color].bgColor} px-4 py-2 rounded-large flex flex-row justify-center items-center`}
        >
          {name}
        </div>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <div>{description}</div>
      <div className="bg-white">
        <FontAwesomeIcon icon={faCalendar} className="mr-2" />
        {`${today.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })} ${today.toLocaleDateString([], {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
        })}`}
      </div>
    </div>
  );
};

export default TaskCard;
