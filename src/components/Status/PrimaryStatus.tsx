import "./status.scss";

const PrimaryStatus = ({ status }: { status: string }) => {
  if (status === "Active") {
    return (
      <div className="active">
        <div className="activespan" />
        {status}
      </div>
    );
  } else {
    return (
      <div className="active">
        <div className="activespan inactive" />
        {status}
      </div>
    );
  }
};

export default PrimaryStatus;
