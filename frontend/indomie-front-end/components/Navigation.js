import React from "react";
import Button from "./Button";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="py-8 px-16 w-full text-base flex flex-row justify-between items-center">
      <Link href={"/"}>
        <a className="text-xl">Sched</a>
      </Link>
      <ul className="w-2/5 flex flex-row justify-center items-center gap-x-8">
        <li>
          <Link href="/tasks">My Tasks</Link>
        </li>
        <li>
          <Link href="/schedules">My Schedules</Link>
        </li>
      </ul>
      <div className="flex flex-row justify-center gap-x-8">
        <Link href="/login" passHref>
          <Button text="Log in" type="secondary" link={true}></Button>
        </Link>
        <Link href="/signup" passHref>
          <Button text="Sign up" link={true}></Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
