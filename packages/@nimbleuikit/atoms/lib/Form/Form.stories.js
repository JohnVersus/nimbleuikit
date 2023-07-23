import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "../Button";
import { FlexBox } from "../FlexBox";
import { Form } from ".";
import { Input } from "../Input";
import { Label } from "../Label";
import { TextArea } from "../TextArea";
/**
 * Refer to [Props Details](?path=/docs/propsdetails--documentation) for details on the available props.
 */
const meta = {
    title: "Atoms/Form",
    component: Form,
    tags: ["autodocs"],
};
export default meta;
/**
 * Signup Form
 */
export const SignupForm = {
    args: {
        p: 3,
        width: 400,
        bg: "whitesmoke",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        borderRadius: "8px",
        border: "1px solid lightblue",
        onSubmit: (event) => {
            event.preventDefault();
        },
        children: (_jsxs(FlexBox, { flexDirection: "column", alignItems: "stretch", children: [_jsx(Label, { m: 2, children: _jsxs(FlexBox, { flexDirection: "column", children: ["Name", _jsx(Input, { placeholder: "Your name", mt: 1, border: "1px solid lightblue", p: 2, borderRadius: "8px", css: {
                                    ":focus": {
                                        outline: "2px solid lightblue",
                                    },
                                } })] }) }), _jsx(Label, { m: 2, children: _jsxs(FlexBox, { flexDirection: "column", children: ["Email", _jsx(Input, { type: "email", placeholder: "Your email", mt: 1, border: "1px solid lightblue", p: 2, borderRadius: "8px", css: {
                                    ":focus": {
                                        outline: "2px solid lightblue",
                                    },
                                } })] }) }), _jsx(Label, { m: 2, children: _jsxs(FlexBox, { flexDirection: "column", children: ["Password", _jsx(Input, { type: "password", placeholder: "Your password", mt: 1, border: "1px solid lightblue", p: 2, borderRadius: "8px", css: {
                                    ":focus": {
                                        outline: "2px solid lightblue",
                                    },
                                } })] }) }), _jsx(Label, { m: 2, children: _jsxs(FlexBox, { flexDirection: "column", children: ["About you", _jsx(TextArea, { placeholder: "Tell us something about yourself", mt: 1, rows: 5, border: "1px solid lightblue", p: 2, borderRadius: "8px", css: {
                                    resize: "none",
                                    ":focus": {
                                        outline: "2px solid lightblue",
                                    },
                                } })] }) }), _jsx(Button, { backgroundColor: "lightgreen", m: 2, py: 2, borderRadius: "8px", border: "1px solid lightblue", css: {
                        ":active": {
                            outline: "2px solid lightblue",
                        },
                    }, children: "Sign Up" })] })),
    },
};
SignupForm.storyName = "Signup Form";
