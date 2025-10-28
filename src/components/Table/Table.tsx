import "./Table.scss";
import Toolbar from "./Toolbar";
import PrimaryStatus from "../Status/PrimaryStatus";
import { tableData } from "../../constants/tableData";
import SecondaryStatus from "../Status/SecondaryStatus";
import type { TableDataType } from "../../types/TableDataType";
import UserDetailContainer from "./elements/UserDetailContainer";
import { ArrowDown, CircleQuestionMark, Pen, Trash2 } from "lucide-react";
import TeamDetail from "./elements/TeamDetail";
import { useState } from "react";
import Popup from "../Popup/Popup";
import StatusDetail from "../Status/StatusDetail";

const Table = () => {
  const [checkAll, setCheckAll] = useState(false);
  const [data, setData] = useState<TableDataType[]>(tableData);

  const handleSelectAll = () => {
    const newCheckState = !checkAll;
    setCheckAll(newCheckState);
    setData((prevData) =>
      prevData.map((item) => ({ ...item, selected: newCheckState }))
    );
  };

  return (
    <div className="table-container">
      <Toolbar />

      <table className="custom-table">
        <thead>
          <tr>
            <th>
              <div>
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={checkAll}
                    onChange={handleSelectAll}
                  />
                  <span className="checkmark"></span>
                </label>
                <span>Name</span>
              </div>
            </th>
            <th>
              <div className="role">
                <span>Status</span>
                <ArrowDown className="questionmark" />
              </div>
            </th>
            <th>
              <div className="role">
                <span>Role</span>
                <CircleQuestionMark className="questionmark" />
              </div>
            </th>
            <th>Email address</th>
            <th>Teams</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: TableDataType) => (
            <tr key={item.username}>
              <td className="bordertable">
                <UserDetailContainer
                  checked={item.selected}
                  image={item.image}
                  username={item.username}
                  name={item.name}
                  onChange={() => {
                    const updated = data.map((d) =>
                      d.username === item.username
                        ? { ...d, selected: !d.selected }
                        : d
                    );
                    setData(updated);

                    const allChecked = updated.every((d) => d.selected);
                    setCheckAll(allChecked);
                  }}
                />
              </td>
              <td>
                <Popup
                  children={<StatusDetail />}
                  trigger={
                    <div className="statusData">
                      <PrimaryStatus status={item.status} />
                      <SecondaryStatus subStatus={item.subStatus} />
                    </div>
                  }
                />
              </td>
              <td>{item.role}</td>
              <td>{item.email}</td>
              <td>
                <div className="teams">
                  {item.teams.map((team: string, index: number) => (
                    <TeamDetail key={index} team={team}></TeamDetail>
                  ))}

                  <span>+4</span>
                </div>
              </td>

              <td>
                <div className="statusData">
                  <Trash2 className="actionIcon" />
                  <Pen className="actionIcon" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
