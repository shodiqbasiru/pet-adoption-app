import {RouterProvider} from "react-router-dom";
import router from "./routes/routes.tsx";
import React from "react";

function App():React.ReactElement {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
