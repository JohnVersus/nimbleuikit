import{s as R,c as E}from"./system-af6bb858.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const n=R.div({},...E);try{n.displayName="Box",n.__docgenInfo={description:"",displayName:"Box",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},as:{defaultValue:null,description:"The HTML element or custom component as which the component should render",name:"as",required:!1,type:{name:"undefined"}},css:{defaultValue:null,description:`Custom CSS for the component.
This can either be a CSSObject, or a function that receives the theme and returns a CSSObject.`,name:"css",required:!1,type:{name:"CSSObject | ((theme: any) => CSSObject)"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const P={title:"Atoms/Box",component:n,tags:["autodocs"],argTypes:{color:{control:"color"},bg:{control:"color"}},parameters:{docs:{description:{component:"Refer to [Props Details](?path=/docs/propsdetails--documentation) for details on the available props."}}}},e={args:{as:"div",p:3,color:"white",bg:"gray",width:[1,1/2,1/4],children:"Hello, world!"}},o={args:{as:"button",p:3,width:1/2,bg:"lightgray",children:"I'm a Box as a button!",color:"red",fontWeight:"lighter",css:{cursor:"pointer",":hover":{fontWeight:"bold"}}}},r={args:{as:"p",p:3,width:1/2,bg:"lightgray",children:"I'm a Box as a text!",color:"blue",fontSize:"20px",css:{textDecoration:"underline",":hover":{textDecoration:"none"}}}},t={args:{as:"input",p:3,width:1/2,bg:"lightgray",placeholder:"I'm a Box as a input!",color:"red",fontSize:"20px"}},s={args:{p:3,width:1/2,bg:"lightgray",children:"I'm a Box with a border!",border:"2px solid black",borderRadius:"5px"}},a={args:{p:3,width:1/2,bg:"lightgray",children:"I'm a Box with custom CSS!",css:{boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.1)",transition:"box-shadow 0.3s ease-in-out",":hover":{boxShadow:"0px 0px 20px rgba(0, 0, 0, 0.2)"}}}};var i,c,d,p,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    as: "div",
    p: 3,
    color: "white",
    bg: "gray",
    width: [1, 1 / 2, 1 / 4],
    children: "Hello, world!"
  }
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source},description:{story:`Simple Box component.
This component renders a simple box with text.`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.description}}};var m,h,u,g,x;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    as: "button",
    p: 3,
    width: 1 / 2,
    bg: "lightgray",
    children: "I'm a Box as a button!",
    color: "red",
    fontWeight: "lighter",
    css: {
      cursor: "pointer",
      ":hover": {
        fontWeight: "bold"
      }
    }
  }
}`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source},description:{story:`Box as a button.
This component shows how Box can be used as a button.`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.description}}};var b,w,S,f,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    as: "p",
    p: 3,
    width: 1 / 2,
    bg: "lightgray",
    children: "I'm a Box as a text!",
    color: "blue",
    fontSize: "20px",
    css: {
      textDecoration: "underline",
      ":hover": {
        textDecoration: "none"
      }
    }
  }
}`,...(S=(w=r.parameters)==null?void 0:w.docs)==null?void 0:S.source},description:{story:`Box as a text.
This component demonstrates how Box can be used as a paragraph.`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.description}}};var B,v,C,T,I;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    as: "input",
    p: 3,
    width: 1 / 2,
    bg: "lightgray",
    placeholder: "I'm a Box as a input!",
    color: "red",
    fontSize: "20px"
  }
}`,...(C=(v=t.parameters)==null?void 0:v.docs)==null?void 0:C.source},description:{story:`Box as an input.
This component shows how Box can be used as an input element.`,...(I=(T=t.parameters)==null?void 0:T.docs)==null?void 0:I.description}}};var _,A,W,D,O;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    p: 3,
    width: 1 / 2,
    bg: "lightgray",
    children: "I'm a Box with a border!",
    border: "2px solid black",
    borderRadius: "5px"
  }
}`,...(W=(A=s.parameters)==null?void 0:A.docs)==null?void 0:W.source},description:{story:`Box with a border.
This component shows a Box with a solid border.`,...(O=(D=s.parameters)==null?void 0:D.docs)==null?void 0:O.description}}};var j,q,H,V,z;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    p: 3,
    width: 1 / 2,
    bg: "lightgray",
    children: "I'm a Box with custom CSS!",
    css: {
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      transition: "box-shadow 0.3s ease-in-out",
      ":hover": {
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)"
      }
    }
  }
}`,...(H=(q=a.parameters)==null?void 0:q.docs)==null?void 0:H.source},description:{story:`Box with custom CSS.
This component demonstrates a Box with custom CSS applied.`,...(z=(V=a.parameters)==null?void 0:V.docs)==null?void 0:z.description}}};const F=["SimpleBox","AsButton","AsText","AsInput","WithBorder","WithCustomCSS"];export{o as AsButton,t as AsInput,r as AsText,e as SimpleBox,s as WithBorder,a as WithCustomCSS,F as __namedExportsOrder,P as default};
//# sourceMappingURL=Box.stories-fede66a8.js.map
