import{j as n,a as s}from"./jsx-runtime-91a467a5.js";const r=({size:e,color:a})=>n("div",{className:"spinner-loader",style:{width:`${e}px`,height:`${e}px`,borderColor:`${a} transparent transparent`}});try{r.displayName="Spinner",r.__docgenInfo={description:"",displayName:"Spinner",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"spinner"'},{value:'"double-bounce"'}]}}}}}catch{}const l=({size:e,color:a})=>s("div",{className:"double-bounce-loader",children:[n("div",{className:"bounce1",style:{width:`${e}px`,height:`${e}px`,backgroundColor:a}}),n("div",{className:"bounce2",style:{width:`${e}px`,height:`${e}px`,backgroundColor:a}})]});try{l.displayName="DoubleBounce",l.__docgenInfo={description:"",displayName:"DoubleBounce",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"spinner"'},{value:'"double-bounce"'}]}}}}}catch{}const t=({size:e=25,color:a="#000",type:o="spinner"})=>{switch(o){case"double-bounce":return n(l,{size:e,color:a});case"spinner":default:return n(r,{size:e,color:a})}};try{t.displayName="Loader",t.__docgenInfo={description:"",displayName:"Loader",props:{size:{defaultValue:{value:"25"},description:"",name:"size",required:!1,type:{name:"number"}},color:{defaultValue:{value:"#000"},description:"",name:"color",required:!1,type:{name:"string"}},type:{defaultValue:{value:"spinner"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"spinner"'},{value:'"double-bounce"'}]}}}}}catch{}export{t as L};
//# sourceMappingURL=Loader-2b6d4952.js.map
