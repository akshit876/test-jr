import React, { useEffect, useRef } from "react";

interface ContextMenuProps {
  x: number;
  y: number;
  onClose: () => void;
  fileName: string;
  fileType: "file" | "folder";
}

const ContextMenu: React.FC<ContextMenuProps> = ({
  x,
  y,
  onClose,
  fileName,
  fileType,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const handleAction = (action: string) => {
    console.log(`${action} ${fileName}`);
    onClose();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="context-menu" style={{ left: x, top: y }} ref={menuRef}>
      <button onClick={() => handleAction("Copy")}>Copy</button>
      <button onClick={() => handleAction("Delete")}>Delete</button>
      <button onClick={() => handleAction("Rename")}>Rename</button>
      {fileType === "folder" && (
        <button onClick={() => handleAction("New File")}>New File</button>
      )}
    </div>
  );
};

export default ContextMenu;
