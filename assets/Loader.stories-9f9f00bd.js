import{j as a,a as $}from"./jsx-runtime-91a467a5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const t=({size:e,color:r})=>a("div",{className:"spinner-loader",style:{width:`${e}px`,height:`${e}px`,borderColor:`${r} transparent transparent`}});try{t.displayName="Spinner",t.__docgenInfo={description:"",displayName:"Spinner",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"spinner"'},{value:'"double-bounce"'}]}}}}}catch{}const l=({size:e,color:r})=>$("div",{className:"double-bounce-loader",children:[a("div",{className:"bounce1",style:{width:`${e}px`,height:`${e}px`,backgroundColor:r}}),a("div",{className:"bounce2",style:{width:`${e}px`,height:`${e}px`,backgroundColor:r}})]});try{l.displayName="DoubleBounce",l.__docgenInfo={description:"",displayName:"DoubleBounce",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"spinner"'},{value:'"double-bounce"'}]}}}}}catch{}const i=({size:e=25,color:r="#000",type:N="spinner"})=>{switch(N){case"double-bounce":return a(l,{size:e,color:r});case"spinner":default:return a(t,{size:e,color:r})}};try{i.displayName="Loader",i.__docgenInfo={description:"",displayName:"Loader",props:{size:{defaultValue:{value:"25"},description:"",name:"size",required:!1,type:{name:"number"}},color:{defaultValue:{value:"#000"},description:"",name:"color",required:!1,type:{name:"string"}},type:{defaultValue:{value:"spinner"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"spinner"'},{value:'"double-bounce"'}]}}}}}catch{}const S={title:"Atoms/Utils/Loader",component:i,tags:["autodocs"],argTypes:{size:{control:"number",description:"The size of the loader in pixels"},color:{control:"color",description:"The color of the loader"},type:{control:"select",description:"The type of loader",options:["spinner","double-bounce"]}},parameters:{docs:{description:{component:"This is a simple loading spinner."}}}},s={args:{size:25,color:"#000",type:"spinner"}},o={args:{size:50,color:"#000",type:"spinner"}},n={args:{size:50,color:"#000",type:"double-bounce"}};var p,c,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 25,
    color: "#000",
    type: "spinner"
  }
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,m,y,b,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 50,
    color: "#000",
    type: "spinner"
  }
}`,...(y=(m=o.parameters)==null?void 0:m.docs)==null?void 0:y.source},description:{story:"This is an example of a spinner loader.",...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.description}}};var g,_,h,v,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 50,
    color: "#000",
    type: "double-bounce"
  }
}`,...(h=(_=n.parameters)==null?void 0:_.docs)==null?void 0:h.source},description:{story:"This is an example of a double bounce loader.",...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.description}}};const D=["Default","Spinner","DoubleBounce"];export{s as Default,n as DoubleBounce,o as Spinner,D as __namedExportsOrder,S as default};
//# sourceMappingURL=Loader.stories-9f9f00bd.js.map
