import React from "react";
import Button from "./Button";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="py-8 px-16 w-full text-base flex flex-row justify-between items-center">
      <h1 className="text-xl">Sched</h1>
      <ul className="w-2/5 flex flex-row justify-center items-center gap-x-8">
        <li>
          <Link href="../tasks">My Tasks</Link>
        </li>
        <li>
          <Link href="../schedules">My Schedules</Link>
        </li>
      </ul>
      <div className="flex flex-row justify-center gap-x-8">
        <Button text="Log in" type="secondary"></Button>
        <Button text="Sign up"></Button>
      </div>
    </nav>
  );
};

export default Navigation;
