import avatar from "../../../../assets/img/akashi-seij.png";

export function Post(props) {
  return (
    <div className="post">
      <img src={avatar} alt="" className="post_avatar" />
      <div className="post_content">
        <p className="post_name">{props.name}</p>
        <div className="post_underline"></div>
        <p className="post_text">{props.text}</p>
      </div>
    </div>
  );
}
