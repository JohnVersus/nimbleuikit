import type { Meta, StoryObj } from "@storybook/react";
import { Box, Button, FlexBox, Text } from "../"; // assuming these exist
import { Dialog, DialogProps } from "./";
import { useDialog } from "../";
import { useArgs } from "@storybook/addons";

/**
 * Refer to [Props Details](?path=/docs/propsdetails--documentation) for details on the available props.
 */

const meta: Meta<DialogProps> = {
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

export const SimpleDialog: StoryObj<DialogProps> = (args: DialogProps) => {
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

  return (
    <Box>
      <Button onClick={handleOpen}>Open Dialog</Button>
      <Dialog isOpen={isOpen} onRequestClose={handleClose} {...args}>
        <Text>This is a dialog box</Text>
        <Button onClick={handleClose}>Close Dialog</Button>
      </Dialog>
    </Box>
  );
};

SimpleDialog.args = {
  isModal: false,
};

/**
 * Simple dialog as modal
 */
export const ModalDialog: StoryObj<DialogProps> = (args: DialogProps) => {
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

  return (
    <Box>
      <Button onClick={handleOpen}>Open Modal Dialog</Button>
      <Dialog
        isOpen={isOpen}
        onRequestClose={handleClose}
        isModal={args.isModal}
      >
        <FlexBox flexDirection="column">
          <Box>
            <Text>Modal Title</Text>
          </Box>
          <Box>
            <Text>This is a modal dialog box</Text>
          </Box>
          <Box>
            <Button onClick={handleClose}>Close Modal Dialog</Button>
          </Box>
        </FlexBox>
      </Dialog>
    </Box>
  );
};

ModalDialog.args = {
  isModal: true,
};
