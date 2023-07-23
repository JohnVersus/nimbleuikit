import { useState, useCallback } from "react";

/**
 * `useDialog` is a hook for controlling the open state of a `Dialog` component.
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
 *
 * @returns {object} An object containing the `isOpen` state and the `openDialog` and `closeDialog` functions.
 */

interface UseDialogResult {
  isOpen: boolean;
  openDialog: () => void;
  closeDialog: () => void;
}

export const useDialog = (initialState: boolean = false): UseDialogResult => {
  const [isOpen, setIsOpen] = useState(initialState);

  const openDialog = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeDialog = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    openDialog,
    closeDialog,
  };
};
