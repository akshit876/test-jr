import React from "react";
import FileExplorer from "./components/FileExplorer";
import "./styles/FileExplorer.css";

const Files = {
  type: "folder" as const,
  name: "parent",
  data: [
    {
      type: "folder" as const,
      name: "root",
      data: [
        {
          type: "folder" as const,
          name: "src",
          data: [
            {
              type: "file" as const,
              meta: "js",
              name: "index.js",
            },
          ],
        },
        {
          type: "folder" as const,
          name: "public",
          data: [
            {
              type: "file" as const,
              meta: "ts",
              name: "index.ts",
            },
          ],
        },
        {
          type: "file" as const,
          meta: "html",
          name: "index.html",
        },
        {
          type: "folder" as const,
          name: "data",
          data: [
            {
              type: "folder" as const,
              name: "images",
              data: [
                {
                  type: "file" as const,
                  meta: "img",
                  name: "image.png",
                },
                {
                  type: "file" as const,
                  meta: "img",
                  name: "image2.webp",
                },
              ],
            },
            {
              type: "file" as const,
              meta: "svg",
              name: "logo.svg",
            },
          ],
        },
        {
          type: "file" as const,
          meta: "css",
          name: "style.css",
        },
      ],
    },
  ],
};

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>File Explorer</h1>
      <FileExplorer files={Files} />
    </div>
  );
};

export default App;
