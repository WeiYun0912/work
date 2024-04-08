import { setTextInvisible, setTextVisible } from "../../../store";

const Profile = () => {
  return (
    <>
      <button onClick={() => setTextVisible()}>Set Text Visible</button>
      <button onClick={() => setTextInvisible()}>Set Text Invisible</button>
    </>
  );
};

export default Profile;
