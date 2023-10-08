import React from "react";

import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div>
      {/* <div className="flex flex-col md:flex-row md:justify-between"> */}
        <div className="task-container w-auto mx-auto md:w-2/3 mt-3 ">
          <div className="outlet">
            <Outlet />
          </div>
          {/* <div className="indicator">
            <TaskIndicator />
          </div> */}
        </div>
      </div>
    // </div>
  );
}

export default Layout;
