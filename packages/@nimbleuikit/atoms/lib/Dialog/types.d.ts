import { CommonStyleProps } from "../types";
export interface DialogProps extends CommonStyleProps {
    isOpen?: boolean;
    isModal?: boolean;
    onRequestClose?: () => void;
}
