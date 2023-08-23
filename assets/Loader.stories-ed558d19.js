import{j as a,a as $}from"./jsx-runtime-e6a661ac.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";const t=({size:e,color:o})=>a("div",{className:"spinner-loader",style:{width:`${e}px`,height:`${e}px`,borderColor:`${o} transparent transparent`}});try{t.displayName="Spinner",t.__docgenInfo={description:"",displayName:"Spinner",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"spinner"'},{value:'"double-bounce"'}]}}}}}catch{}const l=({size:e,color:o})=>$("div",{className:"double-bounce-loader",children:[a("div",{className:"bounce1",style:{width:`${e}px`,height:`${e}px`,backgroundColor:o}}),a("div",{className:"bounce2",style:{width:`${e}px`,height:`${e}px`,backgroundColor:o}})]});try{l.displayName="DoubleBounce",l.__docgenInfo={description:"",displayName:"DoubleBounce",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"spinner"'},{value:'"double-bounce"'}]}}}}}catch{}const i=({size:e=25,color:o="#000",type:N="spinner"})=>{switch(N){case"double-bounce":return a(l,{size:e,color:o});case"spinner":default:return a(t,{size:e,color:o})}};try{i.displayName="Loader",i.__docgenInfo={description:"",displayName:"Loader",props:{size:{defaultValue:{value:"25"},description:"",name:"size",required:!1,type:{name:"number"}},color:{defaultValue:{value:"#000"},description:"",name:"color",required:!1,type:{name:"string"}},type:{defaultValue:{value:"spinner"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"spinner"'},{value:'"double-bounce"'}]}}}}}catch{}const w={title:"Atoms/Utils/Loader",component:i,tags:["autodocs"],argTypes:{size:{control:"number",description:"The size of the loader in pixels"},color:{control:"color",description:"The color of the loader"},type:{control:"select",description:"The type of loader",options:["spinner","double-bounce"]}},parameters:{docs:{description:{component:"This is a simple loading spinner."}}}},s={args:{size:25,color:"#000",type:"spinner"}},r={args:{size:50,color:"#000",type:"spinner"}},n={args:{size:50,color:"#000",type:"double-bounce"}};var c,p,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: 25,
    color: "#000",
    type: "spinner"
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,m,b,_,y;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 50,
    color: "#000",
    type: "spinner"
  }
}`,...(b=(m=r.parameters)==null?void 0:m.docs)==null?void 0:b.source},description:{story:"This is an example of a spinner loader.",...(y=(_=r.parameters)==null?void 0:_.docs)==null?void 0:y.description}}};var f,g,h,v,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: 50,
    color: "#000",
    type: "double-bounce"
  }
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source},description:{story:"This is an example of a double bounce loader.",...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.description}}};const S=["Default","Spinner","DoubleBounce"];export{s as Default,n as DoubleBounce,r as Spinner,S as __namedExportsOrder,w as default};
//# sourceMappingURL=Loader.stories-ed558d19.js.map
