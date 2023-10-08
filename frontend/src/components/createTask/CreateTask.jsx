import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import TaskContext from "../../context/TaskContext";
import TokenContext from "../../context/TokenContext";
import axios from "../../Axios/axios.js";
import "./createTask.css";
function CreateTask() {
  const { dispatch } = useContext(TaskContext);
  const { userToken } = useContext(TokenContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [toast, setToast] = useState();
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "/task/addTask",
        { title, description },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      //setToast(res.data)
      // showToast();
    } catch (error) {
      console.log(error);
    }
    dispatch({
      type: "ADD_TASK",
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  // const showToast = () => {
  //     const toast = document.getElementById('toast');
  //     toast.style.display = "block"
  //     setTimeout(hideToast,2000)
  // }
  // const hideToast = () => {
  //     const toast = document.getElementById('toast');
  //     toast.style.display = "none"
  // }
  return (
    <div className="addContainer md:w-1/3 md:mx-auto mx-3 mt-3 justify-center">
      <h1 class="text-4xl font-bold uppercase tracking-wide text-[black] p-4 text-center">
        Create task
      </h1>
      <div className="w-11/12">
        <form onSubmit={handleAdd}>
          <div className="text-center">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className="text-center my-3">
            <label htmlFor="description">Description</label>
            <textarea
              rows={5}
              name="description"
              id="description"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
              style={{ resize: "none" }}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className="flex justify-center gap-2">
            <button
              type="submit"
              className=" bg-[#ffdd00] rounded-md text-white px-8 py-1 "
            >
              Add
            </button>

            <Link to="/">
              <button className=" bg-[#ffdd00] rounded-md text-white px-5 py-1 ">
                Cancel
              </button>
            </Link>
          </div>
        </form>
        <div
          className="toast bg-green-600 text-white p-3 rounded-xl shadow-2xl text-center absolute bottom-4 left-1/2 -translate-x-1/2"
          id="toast"
        >
          <p>This is test</p>
        </div>
      </div>
    </div>
  );
}

export default CreateTask;
