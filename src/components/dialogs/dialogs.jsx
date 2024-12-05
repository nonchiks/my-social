import dialog_logo from "../../assets/img/akashi-seij.png";
import DialogItem from "./dialog-item/dialog-item";
import Message from "./message/message";
function Dialogs(props) {
  return (
    <section className="dialogs-container">
      <div className="dialogs-items">
        {props.dialogs_data.map((el) => (
          <DialogItem name={el.name} key={el.id} />
        ))}
      </div>
      <div className="dialogs-content">
        <div className="dialogs-messages">
          {props.messages_data.map((el) => (
            <Message message={el.message} key={el.id} />
          ))}
        </div>
        <div>
          <input
            type="text"
            className="dialogs-input"
            placeholder="Enter your message"
          />
          <button className="dialogs-button">Send</button>
        </div>
      </div>
    </section>
  );
}

// https://drive.google.com/file/d/1RVd1sQM_z1eqK9k_Z9xqEjHOyaH5HivT/view?usp=sharing

export default Dialogs;
