import React from 'react'

interface ProjectTagProps {
  name: string;
  onClick: () => (name: string) => void;
  isSelected: boolean;
}

const ProjectTag: React.FC<ProjectTagProps> = ({ name, onClick, isSelected }) => {

  const buttonStyles = isSelected
    ? "text-[var(--foreground)] border-b-4 border-b-orange-500"
    : "text-[#ADB7BE]"

  return (
    <button className={`${buttonStyles} text-xl px-3 py-3 cursor-pointer`}
      onClick={onClick}
    >
      {name}
    </button>
  )
}

export default ProjectTag
