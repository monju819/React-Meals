import { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      onClick={props.onClose}
      className="fixed inset-0 w-full h-[100vh] z-20 bg-black bg-opacity-75 "
    />
  );
};

const ModalOverlay = (props) => {
  return (
    // <div className="fixed top-[20vh]  w-[700px] bg-white p-4 rounded-2xl shadow-md z-30">
    //   <div>{props.children}</div>
    // </div>]

    <div className="fixed inset-0 flex items-start mt-[200px] justify-center z-30">
      <div className="w-[700px] bg-white p-4 rounded-2xl shadow-md">
        {props.children}
      </div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
