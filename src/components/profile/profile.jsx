import "./profile.css";
import avatar from "../../assets/img/akashi-seij.png";

function Profile() {
  return (
    <div className="App-profile">
      <div className="profile_header">
        <img src={avatar} alt="" className="profile_avatar" />
        <div>
          <p className="profile_name">Akashi Seijuro</p>
          <p className="profile_status">Learning React</p>
        </div>
      </div>
      <div className="profile_posts">
        <div className="profile_add_post">
          <textarea placeholder="What's on your mind?"></textarea>
          <button>Add post</button>
        </div>
        <div className="all_posts">
          <div className="post">
            <img src={avatar} alt="" className="post_avatar" />
            <p className="post_name">Akashi Seijuro</p>
            <p className="post_text">My first post</p>
          </div>
          <div className="post">
            <img src={avatar} alt="" className="post_avatar" />
            <p className="post_name">Akashi Seijuro</p>
            <p className="post_text">My first post</p>
          </div>
          <div className="post">
            <img src={avatar} alt="" className="post_avatar" />
            <p className="post_name">Akashi Seijuro</p>
            <p className="post_text">My first post</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
