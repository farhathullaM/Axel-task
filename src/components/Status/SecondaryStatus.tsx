import "./status.scss";

const SecondaryStatus = ({ subStatus }: { subStatus: string }) => {
  if (subStatus === "Away") {
    return (
      <div className="active">
        <div className="activespan " />
        {subStatus}
      </div>
    );
  } else if (subStatus === "Busy") {
    return (
      <div className="active">
        <div className="activespan busy" />
        {subStatus}
      </div>
    );
  } else if (subStatus === "On Leave") {
    return (
      <div className="active">
        <div className="activespan" />
        {subStatus}
      </div>
    );
  } else {
    return (
      <div className="active">
        <div className="activespan inactive" />
        {subStatus}
      </div>
    );
  }
};

export default SecondaryStatus;
