import React, { useState, useContext } from "react";
import axios from "axios";
import TokenContext from "../../context/TokenContext";
export const EditTask = (props) => {
  const [isVisible, setIsVisible] = useState(true);
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const { userToken } = useContext(TokenContext);

  async function editTask() {
    try {
      const response = await axios.post(
        "https://noteapp-apqs.onrender.com/api/task/editTask",
        {
          id: props.id,
          title,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      if (response.status === 200) {
        console.log("DOne");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error editing task:", error);
    }
  }

  if (!props.show || !isVisible) return null;

  return (
    <div className="fixed inset-0 bg-slate-900 backdrop-blur-sm bg-opacity-25 flex justify-center items-center z-20 ">
      <div className=" relative w-[600px] h-[400px] bg-[#bf88ff] gap-y-2 rounded-md flex flex-col p-4 shadow-lightGrey shadow-inner ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            editTask();
          }}
        >
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="title"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div className="my-3">
            <label htmlFor="description">Description</label>
            <textarea
              rows={5}
              name="description"
              id="description"
              placeholder="description"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
              style={{ resize: "none" }}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div className="flex justify-center gap-2">
            <button
              type="submit"
              className="bg-[#ffdd00] rounded-md text-white px-8 py-1"
            >
              Update
            </button>

            <button
              className="bg-[#ffdd00] rounded-md text-white px-10 py-1"
              onClick={() => {
                setIsVisible(false);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
