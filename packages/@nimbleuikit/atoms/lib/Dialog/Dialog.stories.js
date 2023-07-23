import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, FlexBox, Text } from "../"; // assuming these exist
import { Dialog } from "./";
import { useDialog } from "../";
import { useArgs } from "@storybook/addons";
/**
 * Refer to [Props Details](?path=/docs/propsdetails--documentation) for details on the available props.
 */
const meta = {
    title: "Atoms/Dialog",
    component: Dialog,
    tags: ["autodocs"],
    argTypes: {
        isOpen: { control: null },
        isModal: { control: "boolean" },
        onRequestClose: { action: "closed" },
    },
};
export default meta;
/**
 * Simple dialog
 */
export const SimpleDialog = (args) => {
    const [{ isOpen }, updateArgs] = useArgs();
    const { openDialog, closeDialog } = useDialog();
    const handleOpen = () => {
        openDialog();
        updateArgs({ isOpen: true });
    };
    const handleClose = () => {
        closeDialog();
        updateArgs({ isOpen: false });
    };
    return (_jsxs(Box, { children: [_jsx(Button, { onClick: handleOpen, children: "Open Dialog" }), _jsxs(Dialog, { isOpen: isOpen, onRequestClose: handleClose, ...args, children: [_jsx(Text, { children: "This is a dialog box" }), _jsx(Button, { onClick: handleClose, children: "Close Dialog" })] })] }));
};
SimpleDialog.args = {
    isModal: false,
};
/**
 * Simple dialog as modal
 */
export const ModalDialog = (args) => {
    const [{ isOpen }, updateArgs] = useArgs();
    const { openDialog, closeDialog } = useDialog();
    const handleOpen = () => {
        openDialog();
        updateArgs({ isOpen: true });
    };
    const handleClose = () => {
        closeDialog();
        updateArgs({ isOpen: false });
    };
    return (_jsxs(Box, { children: [_jsx(Button, { onClick: handleOpen, children: "Open Modal Dialog" }), _jsx(Dialog, { isOpen: isOpen, onRequestClose: handleClose, isModal: args.isModal, children: _jsxs(FlexBox, { flexDirection: "column", children: [_jsx(Box, { children: _jsx(Text, { children: "Modal Title" }) }), _jsx(Box, { children: _jsx(Text, { children: "This is a modal dialog box" }) }), _jsx(Box, { children: _jsx(Button, { onClick: handleClose, children: "Close Modal Dialog" }) })] }) })] }));
};
ModalDialog.args = {
    isModal: true,
};
