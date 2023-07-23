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
export declare const useDialog: (initialState?: boolean) => UseDialogResult;
export {};
