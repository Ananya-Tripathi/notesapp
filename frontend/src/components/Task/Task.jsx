import React from "react";
import moment from "moment";
import axios from "axios";
import "./task.css";
import { useContext, useState } from "react";
import TaskContext from "../../context/TaskContext";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEdit from "@mui/icons-material/ModeEdit";
import { EditTask } from "./EditTask";
import { ShowTask } from "./ShowTask";
import TokenContext from "../../context/TokenContext";
function Task({ task, id }) {
  const { dispatch } = useContext(TaskContext);
  const [showModal, setShowModal] = useState(false);
  const [editTask, setEditTask] = useState(false);
  const { userToken } = useContext(TokenContext);
  async function handleRemove() {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/task/removeTask",
        {
          id,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      if (response.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      console.error("Error editing task:", error);
    }
  }

  return (
    <>
      <div className="bg-[#bf88ff] p-4 rounded-lg shadow-md flex items-center justify-center gap-2 mb-3">
        {/* <div className="mark-done">
        <input
          type="checkbox"
          className="checkbox"
          onChange={handleMarkDone}
          checked={task.completed}
        />
      </div> */}
        <div className="task-info text-slate-900 text-sm w-10/12">
          <h4
            className="task-title text-lg font-bold capitalize"
            onClick={() => setShowModal(true)}
          >
            {task.title}
          </h4>
          {/* <p className="task-description">{task.description}</p> */}
          <div className=" italic opacity-60">
            {/* {task?.createdAt ? (
            <p>{moment(task.createdAt).fromNow()}</p>
          ) : (
            <p>just now</p>
          )} */}
          </div>
        </div>
        <div className="flex gap:2">
          <div>
            <ModeEditIcon
              style={{ fontSize: 30, cursor: "pointer" }}
              size="large"
              onClick={() => {
                setEditTask(true);
              }}
              className="remove-task-btn mr-2 bg-[#ffdd00] rounded-full border-2 shadow-2xl border-white p-1"
            />
          </div>
          <div className="remove-task text-sm text-white flex gap-2">
            <DeleteIcon
              style={{ fontSize: 30, cursor: "pointer" }}
              size="large"
              onClick={handleRemove}
              className="remove-task-btn bg-blue-700 rounded-full border-2 shadow-2xl border-white p-1"
            />
          </div>
        </div>
      </div>
      <ShowTask
        onClose={() => setShowModal(false)}
        show={showModal}
        title={task.title}
        description={task.description}
      />
      <EditTask
        onClose={() => setEditTask(false)}
        show={editTask}
        id={id}
        title={task.title}
        description={task.description}
      />
    </>
  );
}

export default Task;
