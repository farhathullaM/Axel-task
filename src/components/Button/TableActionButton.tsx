import type { LucideIcon } from "lucide-react";
import "./Button.scss";

interface ButtonProps {
  icon: LucideIcon;
  text: string;
}

const TableActionButton = ({ icon: Icon, text }: ButtonProps) => {
  return (
    <div className="action-button">
      <Icon className="action-button-icon" />
      <span>{text}</span>
    </div>
  );
};

export default TableActionButton;
