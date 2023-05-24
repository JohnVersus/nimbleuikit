import{s as E,c as L,C as M}from"./system-595ef67d.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const i=E.div({},...L,n=>n.css&&M(n.css));try{i.displayName="Box",i.__docgenInfo={description:"",displayName:"Box",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},as:{defaultValue:null,description:"The HTML element or custom component as which the component should render",name:"as",required:!1,type:{name:"undefined"}},css:{defaultValue:null,description:`Custom CSS for the component.
This can either be a CSSObject, or a function that receives the theme and returns a CSSObject.`,name:"css",required:!1,type:{name:"CSSObject | ((theme: any) => CSSObject)"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const F={title:"Atoms/Box",component:i,tags:["autodocs"],argTypes:{color:{control:"color"},bg:{control:"color"}},parameters:{docs:{description:{component:"Refer to [Props Details](?path=/docs/propsdetails--documentation) for details on the available props."}}}},e={args:{as:"div",p:3,color:"white",bg:"gray",width:[1,1/2,1/4],children:"Hello, world!"}},o={args:{as:"button",p:3,width:1/2,bg:"lightgray",children:"I'm a Box as a button!",color:"red",fontWeight:"lighter",css:{cursor:"pointer",":hover":{fontWeight:"bold"}}}},r={args:{as:"p",p:3,width:1/2,bg:"lightgray",children:"I'm a Box as a text!",color:"blue",fontSize:"20px",css:{textDecoration:"underline",":hover":{textDecoration:"none"}}}},t={args:{as:"input",p:3,width:1/2,bg:"lightgray",placeholder:"I'm a Box as a input!",color:"red",fontSize:"20px"}},s={args:{p:3,width:1/2,bg:"lightgray",children:"I'm a Box with a border!",border:"2px solid black",borderRadius:"5px"}},a={args:{p:3,width:1/2,bg:"lightgray",children:"I'm a Box with custom CSS!",css:{boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.1)",transition:"box-shadow 0.3s ease-in-out",":hover":{boxShadow:"0px 0px 20px rgba(0, 0, 0, 0.2)"}}}};var c,d,p,l,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    as: "div",
    p: 3,
    color: "white",
    bg: "gray",
    width: [1, 1 / 2, 1 / 4],
    children: "Hello, world!"
  }
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source},description:{story:`Simple Box component.
This component renders a simple box with text.`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.description}}};var h,u,g,x,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source},description:{story:`Box as a button.
This component shows how Box can be used as a button.`,...(b=(x=o.parameters)==null?void 0:x.docs)==null?void 0:b.description}}};var w,S,f,y,B;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(f=(S=r.parameters)==null?void 0:S.docs)==null?void 0:f.source},description:{story:`Box as a text.
This component demonstrates how Box can be used as a paragraph.`,...(B=(y=r.parameters)==null?void 0:y.docs)==null?void 0:B.description}}};var C,v,T,I,_;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    as: "input",
    p: 3,
    width: 1 / 2,
    bg: "lightgray",
    placeholder: "I'm a Box as a input!",
    color: "red",
    fontSize: "20px"
  }
}`,...(T=(v=t.parameters)==null?void 0:v.docs)==null?void 0:T.source},description:{story:`Box as an input.
This component shows how Box can be used as an input element.`,...(_=(I=t.parameters)==null?void 0:I.docs)==null?void 0:_.description}}};var A,W,D,O,j;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    p: 3,
    width: 1 / 2,
    bg: "lightgray",
    children: "I'm a Box with a border!",
    border: "2px solid black",
    borderRadius: "5px"
  }
}`,...(D=(W=s.parameters)==null?void 0:W.docs)==null?void 0:D.source},description:{story:`Box with a border.
This component shows a Box with a solid border.`,...(j=(O=s.parameters)==null?void 0:O.docs)==null?void 0:j.description}}};var q,H,V,z,R;a.parameters={...a.parameters,docs:{...(q=a.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(V=(H=a.parameters)==null?void 0:H.docs)==null?void 0:V.source},description:{story:`Box with custom CSS.
This component demonstrates a Box with custom CSS applied.`,...(R=(z=a.parameters)==null?void 0:z.docs)==null?void 0:R.description}}};const G=["SimpleBox","AsButton","AsText","AsInput","WithBorder","WithCustomCSS"];export{o as AsButton,t as AsInput,r as AsText,e as SimpleBox,s as WithBorder,a as WithCustomCSS,G as __namedExportsOrder,F as default};
//# sourceMappingURL=Box.stories-278f5b6a.js.map
