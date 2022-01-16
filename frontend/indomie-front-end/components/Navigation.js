import React from "react";
import Button from "./Button";

const Navigation = () => {
  return (
    <nav className="py-8 px-16 w-full text-base flex flex-row justify-between items-center">
      <h1 className="text-xl">Sched</h1>
      <ul className="w-2/5 flex flex-row justify-center items-center gap-x-8">
        <li>My Tasks</li>
        <li>My Schedules</li>
      </ul>
      <div className="flex flex-row justify-center gap-x-8">
        <Button text="Log in"></Button>
        <Button text="Sign up"></Button>
      </div>
    </nav>
  );
};

export default Navigation;
