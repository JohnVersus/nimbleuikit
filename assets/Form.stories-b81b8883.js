import{a as r,j as e}from"./jsx-runtime-91a467a5.js";import{B as m}from"./Button-7f410dd2.js";import{F as l}from"./FlexBox-6a512847.js";import{s as x,c as b}from"./system-af6bb858.js";import{L as n,I as t}from"./Label-d89b6511.js";import{T as h}from"./TextArea-7ac07bcb.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const i=x.form({},...b);try{i.displayName="Form",i.__docgenInfo={description:"`Form` is a styled-component used to create HTML form elements.",displayName:"Form",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLFormElement | null) => void) | RefObject<HTMLFormElement> | null"}},as:{defaultValue:null,description:"The HTML element or custom component as which the component should render",name:"as",required:!1,type:{name:"undefined"}},css:{defaultValue:null,description:`Custom CSS for the component.
This can either be a CSSObject, or a function that receives the theme and returns a CSSObject.`,name:"css",required:!1,type:{name:"CSSObject | ((theme: any) => CSSObject)"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const R={title:"Atoms/Form",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"Refer to [Props Details](?path=/docs/propsdetails--documentation) for details on the available props."}}}},o={args:{p:3,width:400,bg:"whitesmoke",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",borderRadius:"8px",border:"1px solid lightblue",onSubmit:s=>{s.preventDefault()},children:r(l,{flexDirection:"column",alignItems:"stretch",children:[e(n,{m:2,children:r(l,{flexDirection:"column",children:["Name",e(t,{placeholder:"Your name",mt:1,border:"1px solid lightblue",p:2,borderRadius:"8px",css:{":focus":{outline:"2px solid lightblue"}}})]})}),e(n,{m:2,children:r(l,{flexDirection:"column",children:["Email",e(t,{type:"email",placeholder:"Your email",mt:1,border:"1px solid lightblue",p:2,borderRadius:"8px",css:{":focus":{outline:"2px solid lightblue"}}})]})}),e(n,{m:2,children:r(l,{flexDirection:"column",children:["Password",e(t,{type:"password",placeholder:"Your password",mt:1,border:"1px solid lightblue",p:2,borderRadius:"8px",css:{":focus":{outline:"2px solid lightblue"}}})]})}),e(n,{m:2,children:r(l,{flexDirection:"column",children:["About you",e(h,{placeholder:"Tell us something about yourself",mt:1,rows:5,border:"1px solid lightblue",p:2,borderRadius:"8px",css:{resize:"none",":focus":{outline:"2px solid lightblue"}}})]})}),e(m,{backgroundColor:"lightgreen",m:2,py:2,borderRadius:"8px",border:"1px solid lightblue",css:{":active":{outline:"2px solid lightblue"}},children:"Sign Up"})]})}};o.storyName="Signup Form";var a,d,p,u,c;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source},description:{story:"Signup Form",...(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.description}}};const D=["SignupForm"];export{o as SignupForm,D as __namedExportsOrder,R as default};
//# sourceMappingURL=Form.stories-b81b8883.js.map
