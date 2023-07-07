import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { commonSystemProps } from "../system";
import { DialogProps } from "./types";

/**
 * `Dialog` is a styled `dialog` HTML element. It can be displayed as a simple dialog or as a modal.
 *
 * The visibility of the dialog is controlled via the `isOpen` prop. To help control this `isOpen` state,
 * you can use the `useDialog` hook which provides the `openDialog` and `closeDialog` functions.
 *
 * @param {object} props The properties for the component.
 * @param {boolean} props.isOpen Whether the dialog is currently open.
 * @param {boolean} [props.isModal] Whether the dialog should be displayed as a modal.
 * @param {() => void} [props.onRequestClose] A function to call when the dialog is requested to close (i.e., when the close event is fired on the dialog).
 * @param {React.ReactNode} props.children The content inside the dialog.
 *
 * @returns {React.ReactElement} Returns a dialog element.
 *
 * @example
 * ```jsx
 * const { isOpen, openDialog, closeDialog } = useDialog();
 *
 * return (
 *   <div>
 *     <button onClick={openDialog}>Open Dialog</button>
 *     <Dialog isOpen={isOpen} onRequestClose={closeDialog}>
 *       <p>This is a dialog</p>
 *     </Dialog>
 *   </div>
 * );
 * ```
 */

const StyledDialog = styled.dialog<DialogProps>({}, ...commonSystemProps);

const Dialog: React.FC<DialogProps> = ({
  isOpen,
  isModal,
  onRequestClose,
  children,
  ...props
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current) {
      isOpen
        ? isModal
          ? dialogRef.current.showModal()
          : dialogRef.current.show()
        : dialogRef.current.close();
    }
  }, [isOpen, isModal]);

  useEffect(() => {
    const dialogNode = dialogRef.current;
    if (dialogNode) {
      const handleCloseEvent = () => {
        onRequestClose && onRequestClose();
      };

      dialogNode.addEventListener("close", handleCloseEvent);

      return () => {
        dialogNode.removeEventListener("close", handleCloseEvent);
      };
    } else {
      return;
    }
  }, [onRequestClose]);

  return (
    <StyledDialog ref={dialogRef} {...props}>
      {children}
    </StyledDialog>
  );
};

export default Dialog;
