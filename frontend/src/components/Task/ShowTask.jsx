import React from "react";
import { useState } from "react";
export const ShowTask = (props) => {
  const [users, setUsers] = useState([]);
  const [usernames, setusernames] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  if (!props.show || !isVisible) return null;
  return (
    <>
      <div
        className="fixed inset-0 bg-slate-900 backdrop-blur-sm bg-opacity-25 flex justify-center items-center z-20 "
        onClick={() => {
          setIsVisible(false);
        }}
      >
        <div className=" relative w-[600px] h-[400px] bg-[#bf88ff] gap-y-2 rounded-md flex flex-col p-4 shadow-lightGrey shadow-inner ">
          {/* <button className="rounded-full w-8 h-8 p-2 justify-end items-end" onClick={props.onClose}>x</button> */}

          <h4 className="task-title text-xl font-bold capitalize p-4">
            {props.title}
          </h4>
          <p className="task-description p-4">{props.description}</p>
        </div>
      </div>
    </>
  );
};
