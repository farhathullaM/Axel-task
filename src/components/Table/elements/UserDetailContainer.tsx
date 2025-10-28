import "./UserDetail.scss";
type UserDetailContainerProps = {
  image: string;
  checked: boolean;
  username: string;
  name: string;
  onChange: () => void;
};

const UserDetailContainer = ({
  image,
  checked,
  username,
  name,
  onChange,
}: UserDetailContainerProps) => {
  return (
    <div className="userContainer">
      <label className="checkbox-container">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className="checkmark"></span>
      </label>
      <img src={image} alt="profile image" />

      <div className="namedetails">
        <h4>{name}</h4>
        <span>{username}</span>
      </div>
    </div>
  );
};

export default UserDetailContainer;
