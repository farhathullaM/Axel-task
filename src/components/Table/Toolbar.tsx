import "./Toolbar.scss";
import SearchBar from "../Search/SearchBar";
import TableActionButton from "../Button/TableActionButton";
import { ArrowUpDown, File, FileCheck2, Filter } from "lucide-react";

const Toolbar = () => {
  return (
    <div className="toolbar">
      <SearchBar />

      <TableActionButton icon={Filter} text={"Filter"} />
      <TableActionButton icon={ArrowUpDown} text={"Sort"} />
      <TableActionButton icon={File} text={"Import"} />
      <TableActionButton icon={FileCheck2} text={"Export"} />
    </div>
  );
};

export default Toolbar;
