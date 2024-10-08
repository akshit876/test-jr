import React from "react";
import { Files } from "../types/FileTypes";
import FileItem from "./FileItem";

interface FileExplorerProps {
  files: Files;
}

const FileExplorer: React.FC<FileExplorerProps> = ({ files }) => {
  return (
    <div className="file-explorer">
      <FileItem file={files} level={0} />
    </div>
  );
};

export default FileExplorer;
