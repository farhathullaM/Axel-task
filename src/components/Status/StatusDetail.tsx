import { plus_icon } from "../../constants/exportIcons";

const StatusDetail = () => {
  return (
    <div className="statusDetail">
      <input type="text" placeholder="Find Status" />
      <div className="statustypes">
        <span>Active</span>
        <span>Inactive</span>
        <span>Busy</span>
        <span>Away</span>
        <span>Terminated</span>
      </div>

      <div className="addnewstatu">
        <img src={plus_icon} className="iconsvg" alt="" />
        <span> Add New Status</span>
      </div>
    </div>
  );
};

export default StatusDetail;
