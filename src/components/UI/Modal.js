import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
const Backdrop = (props) => {
  return <div onClick={props.onBackdropClk} className={classes.backdrop}></div>;
};
const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}> {props.children} </div>
    </div>
  );
};
const Modal = (props) => {
  const portalElement = document.getElementById("modal-overlay");
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onBackdropClk={props.onBackdropClk} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
