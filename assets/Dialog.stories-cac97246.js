import{j as o,a as m}from"./jsx-runtime-91a467a5.js";import{B as p}from"./Box-27aaf5fd.js";import{B as g}from"./Button-76d85f6b.js";import{r as d}from"./index-8db94870.js";import{s as q,c as R}from"./system-8e4bc0f2.js";import{F as k}from"./FlexBox-3590fa2e.js";import"./Form-0f5723e2.js";import"./Grid-9cc8b09a.js";import"./Label-3503ff7d.js";import"./IntlText-8e3517f4.js";import{T as h}from"./Text-3e49330d.js";import"./TextArea-f6fca39f.js";import"./Tooltip-08c59c36.js";import"./_commonjsHelpers-042e6b4d.js";const E=q.dialog({},...R),u=({isOpen:s,isModal:l,onRequestClose:e,children:t,...i})=>{const n=d.useRef(null);return d.useEffect(()=>{n.current&&(s?l?n.current.showModal():n.current.show():n.current.close())},[s,l]),d.useEffect(()=>{const a=n.current;if(a){const D=()=>{e&&e()};return a.addEventListener("close",D),()=>{a.removeEventListener("close",D)}}else return},[e]),o(E,{ref:n,...i,children:t})};try{u.displayName="Dialog",u.__docgenInfo={description:"",displayName:"Dialog",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},isModal:{defaultValue:null,description:"",name:"isModal",required:!1,type:{name:"boolean"}},onRequestClose:{defaultValue:null,description:"",name:"onRequestClose",required:!1,type:{name:"(() => void)"}},as:{defaultValue:null,description:"The HTML element or custom component as which the component should render",name:"as",required:!1,type:{name:"ElementType<any>"}},children:{defaultValue:null,description:"The content of the component",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},css:{defaultValue:null,description:`Custom CSS for the component.
This can either be a CSSObject, or a function that receives the theme and returns a CSSObject.`,name:"css",required:!1,type:{name:"CSSObject | ((theme: any) => CSSObject)"}}}}}catch{}const b=(s=!1)=>{const[l,e]=d.useState(s),t=d.useCallback(()=>{e(!0)},[]),i=d.useCallback(()=>{e(!1)},[]);return{isOpen:l,openDialog:t,closeDialog:i}},{useArgs:A}=__STORYBOOK_MODULE_ADDONS__,G={title:"Atoms/Dialog",component:u,tags:["autodocs"],argTypes:{isOpen:{control:null},isModal:{control:"boolean"},onRequestClose:{action:"closed"}},parameters:{docs:{description:{component:"Refer to [Props Details](?path=/docs/propsdetails--documentation) for details on the available props."}}}},r=s=>{const[{isOpen:l},e]=A(),{openDialog:t,closeDialog:i}=b(),n=()=>{t(),e({isOpen:!0})},a=()=>{i(),e({isOpen:!1})};return m(p,{children:[o(g,{onClick:n,children:"Open Dialog"}),m(u,{isOpen:l,onRequestClose:a,...s,children:[o(h,{children:"This is a dialog box"}),o(g,{onClick:a,children:"Close Dialog"})]})]})};r.args={isModal:!1};const c=s=>{const[{isOpen:l},e]=A(),{openDialog:t,closeDialog:i}=b(),n=()=>{t(),e({isOpen:!0})},a=()=>{i(),e({isOpen:!1})};return m(p,{children:[o(g,{onClick:n,children:"Open Modal Dialog"}),o(u,{isOpen:l,onRequestClose:a,isModal:s.isModal,children:m(k,{flexDirection:"column",children:[o(p,{children:o(h,{children:"Modal Title"})}),o(p,{children:o(h,{children:"This is a modal dialog box"})}),o(p,{children:o(g,{onClick:a,children:"Close Modal Dialog"})})]})})]})};c.args={isModal:!0};var f,O,x,C,B;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`(args: DialogProps) => {
  const [{
    isOpen
  }, updateArgs] = useArgs();
  const {
    openDialog,
    closeDialog
  } = useDialog();
  const handleOpen = () => {
    openDialog();
    updateArgs({
      isOpen: true
    });
  };
  const handleClose = () => {
    closeDialog();
    updateArgs({
      isOpen: false
    });
  };
  return <Box>
      <Button onClick={handleOpen}>Open Dialog</Button>
      <Dialog isOpen={isOpen} onRequestClose={handleClose} {...args}>
        <Text>This is a dialog box</Text>
        <Button onClick={handleClose}>Close Dialog</Button>
      </Dialog>
    </Box>;
}`,...(x=(O=r.parameters)==null?void 0:O.docs)==null?void 0:x.source},description:{story:"Simple dialog",...(B=(C=r.parameters)==null?void 0:C.docs)==null?void 0:B.description}}};var S,T,y,M,_;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`(args: DialogProps) => {
  const [{
    isOpen
  }, updateArgs] = useArgs();
  const {
    openDialog,
    closeDialog
  } = useDialog();
  const handleOpen = () => {
    openDialog();
    updateArgs({
      isOpen: true
    });
  };
  const handleClose = () => {
    closeDialog();
    updateArgs({
      isOpen: false
    });
  };
  return <Box>
      <Button onClick={handleOpen}>Open Modal Dialog</Button>
      <Dialog isOpen={isOpen} onRequestClose={handleClose} isModal={args.isModal}>
        <FlexBox flexDirection="column">
          <Box>
            <Text>Modal Title</Text>
          </Box>
          <Box>
            <Text>This is a modal dialog box</Text>
          </Box>
          <Box>
            <Button onClick={handleClose}>Close Modal Dialog</Button>
          </Box>
        </FlexBox>
      </Dialog>
    </Box>;
}`,...(y=(T=c.parameters)==null?void 0:T.docs)==null?void 0:y.source},description:{story:"Simple dialog as modal",...(_=(M=c.parameters)==null?void 0:M.docs)==null?void 0:_.description}}};const J=["SimpleDialog","ModalDialog"];export{c as ModalDialog,r as SimpleDialog,J as __namedExportsOrder,G as default};
//# sourceMappingURL=Dialog.stories-cac97246.js.map
