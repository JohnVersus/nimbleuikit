import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { FlexBox } from "../FlexBox";
import { Form, FormProps } from ".";
import { Input } from "../Input";
import { Label } from "../Label";
import { TextArea } from "../TextArea";

/**
 * Refer to [Props Details](?path=/docs/propsdetails--documentation) for details on the available props.
 */
const meta: Meta<FormProps> = {
  title: "Atoms/Form",
  component: Form,
  tags: ["autodocs"],
};

export default meta;

/**
 * Signup Form
 */
export const SignupForm: StoryObj<FormProps> = {
  args: {
    p: 3,
    width: 400,
    bg: "whitesmoke",
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    borderRadius: "8px",
    border: "1px solid lightblue",
    onSubmit: (event) => {
      event.preventDefault();
    },
    children: (
      <FlexBox flexDirection="column" alignItems="stretch">
        <Label m={2}>
          <FlexBox flexDirection="column">
            Name
            <Input
              placeholder="Your name"
              mt={1}
              border="1px solid lightblue"
              p={2}
              borderRadius="8px"
              css={{
                ":focus": {
                  outline: "2px solid lightblue",
                },
              }}
            />
          </FlexBox>
        </Label>
        <Label m={2}>
          <FlexBox flexDirection="column">
            Email
            <Input
              type="email"
              placeholder="Your email"
              mt={1}
              border="1px solid lightblue"
              p={2}
              borderRadius="8px"
              css={{
                ":focus": {
                  outline: "2px solid lightblue",
                },
              }}
            />
          </FlexBox>
        </Label>
        <Label m={2}>
          <FlexBox flexDirection="column">
            Password
            <Input
              type="password"
              placeholder="Your password"
              mt={1}
              border="1px solid lightblue"
              p={2}
              borderRadius="8px"
              css={{
                ":focus": {
                  outline: "2px solid lightblue",
                },
              }}
            />
          </FlexBox>
        </Label>
        <Label m={2}>
          <FlexBox flexDirection="column">
            About you
            <TextArea
              placeholder="Tell us something about yourself"
              mt={1}
              rows={5}
              border="1px solid lightblue"
              p={2}
              borderRadius="8px"
              css={{
                resize: "none",
                ":focus": {
                  outline: "2px solid lightblue",
                },
              }}
            />
          </FlexBox>
        </Label>
        <Button
          backgroundColor="lightgreen"
          m={2}
          py={2}
          borderRadius="8px"
          border={"1px solid lightblue"}
          css={{
            ":active": {
              outline: "2px solid lightblue",
            },
          }}
        >
          Sign Up
        </Button>
      </FlexBox>
    ),
  },
};

SignupForm.storyName = "Signup Form";
