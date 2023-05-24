import{a as ee,F as te,j as u}from"./jsx-runtime-91a467a5.js";import{s as Z,c as $}from"./system-af6bb858.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const c=Z.input({},...$);try{c.displayName="Input",c.__docgenInfo={description:"",displayName:"Input",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null"}},as:{defaultValue:null,description:"The HTML element or custom component as which the component should render",name:"as",required:!1,type:{name:"undefined"}},css:{defaultValue:null,description:`Custom CSS for the component.
This can either be a CSSObject, or a function that receives the theme and returns a CSSObject.`,name:"css",required:!1,type:{name:"CSSObject | ((theme: any) => CSSObject)"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const i=Z.label({},...$);try{i.displayName="Label",i.__docgenInfo={description:"",displayName:"Label",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLLabelElement | null) => void) | RefObject<HTMLLabelElement> | null"}},as:{defaultValue:null,description:"The HTML element or custom component as which the component should render",name:"as",required:!1,type:{name:"undefined"}},css:{defaultValue:null,description:`Custom CSS for the component.
This can either be a CSSObject, or a function that receives the theme and returns a CSSObject.`,name:"css",required:!1,type:{name:"CSSObject | ((theme: any) => CSSObject)"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const se={title:"Atoms/Input",component:c,tags:["autodocs"],argTypes:{type:{control:"select",options:["text","password","number","email","url","tel","search","range","color","date","time","datetime-local","month","week","file","radio","checkbox","button","image","submit","reset"]}},parameters:{docs:{description:{component:"Refer to [Props Details](?path=/docs/propsdetails--documentation) for details on the available props."}}}},t={args:{p:2,color:"black",type:"text",placeholder:"Enter.."}};t.storyName="Text Input";const r={args:{p:2,color:"black",type:"password",placeholder:"Password Input"}};r.storyName="Password Input";const a={args:{p:2,color:"black",type:"number",placeholder:"Number Input"}};a.storyName="Number Input";const n={args:{type:"button",value:"Click Me"}};n.storyName="Button Input";const o={args:{type:"color"}};o.storyName="Color Input";const s={args:{type:"file"}};s.storyName="File Input";const p={args:{type:"range",min:"1",max:"100",defaultValue:"50"}};p.storyName="Range Input";const e=l=>ee(te,{children:[u(c,{...l,id:"checkbox"}),u(i,{htmlFor:"checkbox",children:"Check this box"})]});e.args={type:"checkbox"};e.storyName="Checkbox with Label";var d,m,h,y,b;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    p: 2,
    color: "black",
    type: "text",
    placeholder: "Enter.."
  }
}`,...(h=(m=t.parameters)==null?void 0:m.docs)==null?void 0:h.source},description:{story:"A simple Input component with text input type.",...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.description}}};var f,g,I,S,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    p: 2,
    color: "black",
    type: "password",
    placeholder: "Password Input"
  }
}`,...(I=(g=r.parameters)==null?void 0:g.docs)==null?void 0:I.source},description:{story:"An Input component with password input type.",...(x=(S=r.parameters)==null?void 0:S.docs)==null?void 0:x.description}}};var C,k,w,_,N;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    p: 2,
    color: "black",
    type: "number",
    placeholder: "Number Input"
  }
}`,...(w=(k=a.parameters)==null?void 0:k.docs)==null?void 0:w.source},description:{story:"An Input component with number input type.",...(N=(_=a.parameters)==null?void 0:_.docs)==null?void 0:N.description}}};var L,T,j,A,V;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    type: "button",
    value: "Click Me"
  }
}`,...(j=(T=n.parameters)==null?void 0:T.docs)==null?void 0:j.source},description:{story:"An input of type 'button'.",...(V=(A=n.parameters)==null?void 0:A.docs)==null?void 0:V.description}}};var O,q,M,P,v;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    type: "color"
  }
}`,...(M=(q=o.parameters)==null?void 0:q.docs)==null?void 0:M.source},description:{story:"An input of type 'color'.",...(v=(P=o.parameters)==null?void 0:P.docs)==null?void 0:v.description}}};var E,F,H,R,B;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    type: "file"
  }
}`,...(H=(F=s.parameters)==null?void 0:F.docs)==null?void 0:H.source},description:{story:"An input of type 'file'.",...(B=(R=s.parameters)==null?void 0:R.docs)==null?void 0:B.description}}};var W,D,z,G,J;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    type: "range",
    min: "1",
    max: "100",
    defaultValue: "50"
  }
}`,...(z=(D=p.parameters)==null?void 0:D.docs)==null?void 0:z.source},description:{story:"An input of type 'range'.",...(J=(G=p.parameters)==null?void 0:G.docs)==null?void 0:J.description}}};var K,Q,U,X,Y;e.parameters={...e.parameters,docs:{...(K=e.parameters)==null?void 0:K.docs,source:{originalSource:`(args: InputProps) => <>
    <Input {...args} id="checkbox" />
    <Label htmlFor="checkbox">Check this box</Label>
  </>`,...(U=(Q=e.parameters)==null?void 0:Q.docs)==null?void 0:U.source},description:{story:"An example of a checkbox input with a label.",...(Y=(X=e.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};const pe=["TextInput","PasswordInput","NumberInput","ButtonInput","ColorInput","FileInput","RangeInput","CheckboxWithLabel"];export{n as ButtonInput,e as CheckboxWithLabel,o as ColorInput,s as FileInput,a as NumberInput,r as PasswordInput,p as RangeInput,t as TextInput,pe as __namedExportsOrder,se as default};
//# sourceMappingURL=Input.stories-13fcca48.js.map
