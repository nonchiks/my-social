import "./profile.css";
import avatar from "../../assets/img/akashi-seij.png";
import { Posts } from "./posts/posts";

function Profile(props) {
  return (
    <div className="App-profile">
      <div className="profile_header">
        <img src={avatar} alt="" className="profile_avatar" />
        <div>
          <p className="profile_name">Akashi Seijuro</p>
          <p className="profile_status">Learning React</p>
        </div>
      </div>
      <Posts posts={props.posts} />
    </div>
  );
}

export default Profile;
