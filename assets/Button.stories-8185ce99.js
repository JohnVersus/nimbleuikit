import{s as F,c as G,C as J}from"./system-595ef67d.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const d=F.button({cursor:"pointer",":disabled":{opacity:.8,cursor:"not-allowed"}},...G,c=>c.css&&J(c.css));try{d.displayName="Button",d.__docgenInfo={description:"",displayName:"Button",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},as:{defaultValue:null,description:"The HTML element or custom component as which the component should render",name:"as",required:!1,type:{name:"undefined"}},css:{defaultValue:null,description:`Custom CSS for the component.
This can either be a CSSObject, or a function that receives the theme and returns a CSSObject.`,name:"css",required:!1,type:{name:"CSSObject | ((theme: any) => CSSObject)"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const X={title:"Atoms/Button",component:d,tags:["autodocs"],argTypes:{color:{control:"color"},bg:{control:"color"}}},e={args:{p:2,children:"Default Button"}};e.storyName="Default Button";const t={args:{p:2,color:"white",bg:"gray",children:"Click me!"}};t.storyName="Simple Button";const r={args:{p:2,color:"blue",bg:"pink",border:"2px solid purple",borderRadius:"5px",children:"Styled Button"}};r.storyName="Styled Button";const o={args:{p:2,color:"white",bg:"green",boxShadow:"2px 2px 2px 1px rgba(0, 0, 0, 0.2)",children:"Button With Shadow"}};o.storyName="Button With Shadow";const s={args:{p:2,color:"black",bg:"yellow",css:{cursor:"progress"},children:"Cursor Button"}};s.storyName="Cursored Button";const n={args:{p:2,children:"Click Me!!",onClick:()=>{alert("Button Clicked")}}};n.storyName="Clickable Button";const a={args:{p:2,children:"Disabled",disabled:!0}};a.storyName="Disabled Button";var i,l,u,p,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    p: 2,
    children: "Default Button"
  }
}`,...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source},description:{story:"A default button with no additional styling. Refer to [Props Details](?path=/docs/propsdetails--documentation) for details on the available props.",...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.description}}};var h,b,g,y,B;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    p: 2,
    color: "white",
    bg: "gray",
    children: "Click me!"
  }
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source},description:{story:"A simple styled button.",...(B=(y=t.parameters)==null?void 0:y.docs)==null?void 0:B.description}}};var S,f,C,w,k;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    p: 2,
    color: "blue",
    bg: "pink",
    border: "2px solid purple",
    borderRadius: "5px",
    children: "Styled Button"
  }
}`,...(C=(f=r.parameters)==null?void 0:f.docs)==null?void 0:C.source},description:{story:"A styled button.",...(k=(w=r.parameters)==null?void 0:w.docs)==null?void 0:k.description}}};var x,D,A,_,N;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    p: 2,
    color: "white",
    bg: "green",
    boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
    children: "Button With Shadow"
  }
}`,...(A=(D=o.parameters)==null?void 0:D.docs)==null?void 0:A.source},description:{story:"A button with shadow.",...(N=(_=o.parameters)==null?void 0:_.docs)==null?void 0:N.description}}};var O,T,j,q,v;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    p: 2,
    color: "black",
    bg: "yellow",
    css: {
      cursor: "progress"
    },
    children: "Cursor Button"
  }
}`,...(j=(T=s.parameters)==null?void 0:T.docs)==null?void 0:j.source},description:{story:"A button with custom cursor on hover.",...(v=(q=s.parameters)==null?void 0:q.docs)==null?void 0:v.description}}};var M,V,W,R,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    p: 2,
    children: "Click Me!!",
    onClick: () => {
      alert("Button Clicked");
    }
  }
}`,...(W=(V=n.parameters)==null?void 0:V.docs)==null?void 0:W.source},description:{story:"A button with click event.",...(E=(R=n.parameters)==null?void 0:R.docs)==null?void 0:E.description}}};var H,L,P,I,z;a.parameters={...a.parameters,docs:{...(H=a.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    p: 2,
    children: "Disabled",
    disabled: true
  }
}`,...(P=(L=a.parameters)==null?void 0:L.docs)==null?void 0:P.source},description:{story:"A diabled button.",...(z=(I=a.parameters)==null?void 0:I.docs)==null?void 0:z.description}}};const Y=["DefaultButton","SimpleButton","StyledButton","ButtonWithShadow","CursoredButton","ClickableButton","DisabledButton"];export{o as ButtonWithShadow,n as ClickableButton,s as CursoredButton,e as DefaultButton,a as DisabledButton,t as SimpleButton,r as StyledButton,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=Button.stories-8185ce99.js.map
