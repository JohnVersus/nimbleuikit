import{a as l,j as e}from"./jsx-runtime-236b79c2.js";import{B as x}from"./Button-8a62f49f.js";import{F as r}from"./FlexBox-c5d71453.js";import{F as c}from"./Form-fadd79b8.js";import{L as n,I as i}from"./Label-d907d0ab.js";import{T as m}from"./TextArea-006b7e5e.js";import"./jsx-runtime-4ca860c5.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./index.esm-617eedbf.js";import"./system-62e2d392.js";const L={title:"Atoms/Form",component:c,tags:["autodocs"],parameters:{docs:{description:{component:"Refer to [Props Details](?path=/docs/propsdetails--documentation) for details on the available props."}}}},o={args:{p:3,width:400,bg:"whitesmoke",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",borderRadius:"8px",border:"1px solid lightblue",onSubmit:u=>{u.preventDefault()},children:l(r,{flexDirection:"column",alignItems:"stretch",children:[e(n,{m:2,children:l(r,{flexDirection:"column",children:["Name",e(i,{placeholder:"Your name",mt:1,border:"1px solid lightblue",p:2,borderRadius:"8px",css:{":focus":{outline:"2px solid lightblue"}}})]})}),e(n,{m:2,children:l(r,{flexDirection:"column",children:["Email",e(i,{type:"email",placeholder:"Your email",mt:1,border:"1px solid lightblue",p:2,borderRadius:"8px",css:{":focus":{outline:"2px solid lightblue"}}})]})}),e(n,{m:2,children:l(r,{flexDirection:"column",children:["Password",e(i,{type:"password",placeholder:"Your password",mt:1,border:"1px solid lightblue",p:2,borderRadius:"8px",css:{":focus":{outline:"2px solid lightblue"}}})]})}),e(n,{m:2,children:l(r,{flexDirection:"column",children:["About you",e(m,{placeholder:"Tell us something about yourself",mt:1,rows:5,border:"1px solid lightblue",p:2,borderRadius:"8px",css:{resize:"none",":focus":{outline:"2px solid lightblue"}}})]})}),e(x,{backgroundColor:"lightgreen",m:2,py:2,borderRadius:"8px",border:"1px solid lightblue",css:{":active":{outline:"2px solid lightblue"}},children:"Sign Up"})]})}};o.storyName="Signup Form";var t,s,p,d,a;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    p: 3,
    width: 400,
    bg: "whitesmoke",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    borderRadius: "8px",
    border: "1px solid lightblue",
    onSubmit: event => {
      event.preventDefault();
    },
    children: <FlexBox flexDirection="column" alignItems="stretch">
        <Label m={2}>
          <FlexBox flexDirection="column">
            Name
            <Input placeholder="Your name" mt={1} border="1px solid lightblue" p={2} borderRadius="8px" css={{
            ":focus": {
              outline: "2px solid lightblue"
            }
          }} />
          </FlexBox>
        </Label>
        <Label m={2}>
          <FlexBox flexDirection="column">
            Email
            <Input type="email" placeholder="Your email" mt={1} border="1px solid lightblue" p={2} borderRadius="8px" css={{
            ":focus": {
              outline: "2px solid lightblue"
            }
          }} />
          </FlexBox>
        </Label>
        <Label m={2}>
          <FlexBox flexDirection="column">
            Password
            <Input type="password" placeholder="Your password" mt={1} border="1px solid lightblue" p={2} borderRadius="8px" css={{
            ":focus": {
              outline: "2px solid lightblue"
            }
          }} />
          </FlexBox>
        </Label>
        <Label m={2}>
          <FlexBox flexDirection="column">
            About you
            <TextArea placeholder="Tell us something about yourself" mt={1} rows={5} border="1px solid lightblue" p={2} borderRadius="8px" css={{
            resize: "none",
            ":focus": {
              outline: "2px solid lightblue"
            }
          }} />
          </FlexBox>
        </Label>
        <Button backgroundColor="lightgreen" m={2} py={2} borderRadius="8px" border={"1px solid lightblue"} css={{
        ":active": {
          outline: "2px solid lightblue"
        }
      }}>
          Sign Up
        </Button>
      </FlexBox>
  }
}`,...(p=(s=o.parameters)==null?void 0:s.docs)==null?void 0:p.source},description:{story:"Signup Form",...(a=(d=o.parameters)==null?void 0:d.docs)==null?void 0:a.description}}};const v=["SignupForm"];export{o as SignupForm,v as __namedExportsOrder,L as default};
//# sourceMappingURL=Form.stories-daf9c87d.js.map
