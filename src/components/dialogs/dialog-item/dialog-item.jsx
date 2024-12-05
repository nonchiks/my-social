import dialog_logo from "../../../assets/img/akashi-seij.png";
function DialogItem(props) {
  return (
    <div className="dialog-item">
      <img src={dialog_logo} alt="" />
      <p>{props.name}</p>
    </div>
  );
}

export default DialogItem;
