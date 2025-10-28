import "./team.scss";

const TeamDetail = ({ team }: { team: string }) => {
  if (team === "Marketing")
    return <div className="teamstyle marketing">{team}</div>;
  else if (team === "Product")
    return <div className="teamstyle product">{team}</div>;
  else return <div className="teamstyle design">{team}</div>;
};

export default TeamDetail;
