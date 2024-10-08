import React, { useState } from 'react';
import { Files, FileData } from '../types/FileTypes';
import FileItem from './FileItem';

interface FileExplorerProps {
  files: Files;
}

const FileExplorer: React.FC<FileExplorerProps> = ({ files }) => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const handleFileSelect = (fileName: string) => {
    setSelectedFile(prevSelected => prevSelected === fileName ? null : fileName);
  };

  const renderFileTree = (data: FileData[], level: number = 0) => {
    return data.map((item) => (
      <FileItem
        key={item.name}
        file={item}
        level={level}
        isSelected={item.name === selectedFile}
        onSelect={handleFileSelect}
      >
        {item.data && renderFileTree(item.data, level + 1)}
      </FileItem>
    ));
  };

  return (
    <div className="file-explorer">
      {renderFileTree(files.data)}
    </div>
  );
};

export default FileExplorer;
