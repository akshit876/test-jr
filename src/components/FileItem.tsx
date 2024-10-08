import React, { useState } from "react";
import { FileData } from "../types/FileTypes";
import ContextMenu from "./ContextMenu";

interface FileItemProps {
  file: FileData;
  level: number;
  isSelected: boolean;
  onSelect: (fileName: string) => void;
  children?: React.ReactNode;
}

const FileItem: React.FC<FileItemProps> = ({ file, level, isSelected, onSelect, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [contextMenu, setContextMenu] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (file.type === "folder") {
      setIsExpanded(!isExpanded);
    } else {
      onSelect(file.name);
    }
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (file.type === "file") {
      setContextMenu({ x: e.clientX, y: e.clientY });
    }
  };

  const handleCloseContextMenu = () => {
    setContextMenu(null);
  };

  const getIcon = () => {
    if (file.type === "folder") {
      return isExpanded ? "📂" : "📁";
    }
    switch (file.meta) {
      case "js":
        return "📄";
      case "ts":
        return "📄";
      case "html":
        return "🌐";
      case "css":
        return "🎨";
      case "img":
        return "🖼️";
      case "svg":
        return "🖼️";
      default:
        return "📄";
    }
  };

  return (
    <div style={{ marginLeft: `${level * 20}px` }}>
      <div
        className={`file-item ${isSelected ? "selected" : ""}`}
        onClick={handleClick}
        onContextMenu={handleContextMenu}
      >
        {getIcon()} {file.name}
      </div>
      {isExpanded && children && (
        <div className="file-children">
          {children}
        </div>
      )}
      {contextMenu && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onClose={handleCloseContextMenu}
          fileName={file.name}
        />
      )}
    </div>
  );
};

export default FileItem;
