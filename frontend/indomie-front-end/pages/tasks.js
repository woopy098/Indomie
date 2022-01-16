import React from "react";
import Image from "next/image";
import Button from "../components/Button";
import TaskCard from "../components/TaskCard";

import taskLists from "../libs/pseudoTasks.json";

const Tasks = () => {
  return (
    <div className="px-16 text-base w-full h-full mb-8">
      <div className="w-full flex flex-row">
        <div className="w-1/2 flex flex-col justify-center">
          <div className="my-8">
            <h1 className="p-0 m-0 font-bold text-4xl">Hello Duc!</h1>
            <h2 className="p-0 m-0 font-bold text-2xl">
              Take a look at your task here!
            </h2>
          </div>
          <Button text="Add a Task" />
        </div>
        <div className="w-1/2 relative">
          <Image
            src="/tasks.png"
            alt="Task"
            layout="fill"
            objectPosition={"right"}
            objectFit="contain"
          />
        </div>
      </div>
      <div className="my-16 my-custom-grid-layout  justify-items-center items-center	">
        {taskLists.map((elem, id) => (
          <TaskCard taskInfo={elem} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
