import{a as l,j as e}from"./jsx-runtime-91a467a5.js";import{B as x}from"./Button-7f410dd2.js";import{F as r}from"./FlexBox-6a512847.js";import{F as c}from"./Form-59f6147f.js";import{L as n,I as i}from"./Label-d89b6511.js";import{T as m}from"./TextArea-7ac07bcb.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./system-af6bb858.js";const y={title:"Atoms/Form",component:c,tags:["autodocs"],parameters:{docs:{description:{component:"Refer to [Props Details](?path=/docs/propsdetails--documentation) for details on the available props."}}}},o={args:{p:3,width:400,bg:"whitesmoke",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",borderRadius:"8px",border:"1px solid lightblue",onSubmit:u=>{u.preventDefault()},children:l(r,{flexDirection:"column",alignItems:"stretch",children:[e(n,{m:2,children:l(r,{flexDirection:"column",children:["Name",e(i,{placeholder:"Your name",mt:1,border:"1px solid lightblue",p:2,borderRadius:"8px",css:{":focus":{outline:"2px solid lightblue"}}})]})}),e(n,{m:2,children:l(r,{flexDirection:"column",children:["Email",e(i,{type:"email",placeholder:"Your email",mt:1,border:"1px solid lightblue",p:2,borderRadius:"8px",css:{":focus":{outline:"2px solid lightblue"}}})]})}),e(n,{m:2,children:l(r,{flexDirection:"column",children:["Password",e(i,{type:"password",placeholder:"Your password",mt:1,border:"1px solid lightblue",p:2,borderRadius:"8px",css:{":focus":{outline:"2px solid lightblue"}}})]})}),e(n,{m:2,children:l(r,{flexDirection:"column",children:["About you",e(m,{placeholder:"Tell us something about yourself",mt:1,rows:5,border:"1px solid lightblue",p:2,borderRadius:"8px",css:{resize:"none",":focus":{outline:"2px solid lightblue"}}})]})}),e(x,{backgroundColor:"lightgreen",m:2,py:2,borderRadius:"8px",border:"1px solid lightblue",css:{":active":{outline:"2px solid lightblue"}},children:"Sign Up"})]})}};o.storyName="Signup Form";var s,t,p,d,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(t=o.parameters)==null?void 0:t.docs)==null?void 0:p.source},description:{story:"Signup Form",...(a=(d=o.parameters)==null?void 0:d.docs)==null?void 0:a.description}}};const S=["SignupForm"];export{o as SignupForm,S as __namedExportsOrder,y as default};
//# sourceMappingURL=Form.stories-14c8f80e.js.map
