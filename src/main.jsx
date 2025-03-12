import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="max-w-screen px-[137px]">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
