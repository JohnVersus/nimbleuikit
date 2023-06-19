import{a as c,j as o}from"./jsx-runtime-91a467a5.js";import{B as p}from"./Box-49a6b108.js";import{B as d}from"./Button-7f410dd2.js";import{D}from"./Tooltip-b9046ab6.js";import{F as _}from"./FlexBox-6a512847.js";import"./Form-59f6147f.js";import"./Grid-49a860ea.js";import"./Label-d89b6511.js";import"./IntlText-e61d29b9.js";import{T as m}from"./Text-a93cf70b.js";import"./TextArea-7ac07bcb.js";import{r as u}from"./index-8db94870.js";import"./system-af6bb858.js";import"./_commonjsHelpers-042e6b4d.js";const S=(l=!1)=>{const[a,e]=u.useState(l),i=u.useCallback(()=>{e(!0)},[]),t=u.useCallback(()=>{e(!1)},[]);return{isOpen:a,openDialog:i,closeDialog:t}},{useArgs:b}=__STORYBOOK_MODULE_ADDONS__,w={title:"Atoms/Dialog",component:D,tags:["autodocs"],argTypes:{isOpen:{control:null},isModal:{control:"boolean"},onRequestClose:{action:"closed"}},parameters:{docs:{description:{component:"Refer to [Props Details](?path=/docs/propsdetails--documentation) for details on the available props."}}}},n=l=>{const[{isOpen:a},e]=b(),{openDialog:i,closeDialog:t}=S(),g=()=>{i(),e({isOpen:!0})},r=()=>{t(),e({isOpen:!1})};return c(p,{children:[o(d,{onClick:g,children:"Open Dialog"}),c(D,{isOpen:a,onRequestClose:r,...l,children:[o(m,{children:"This is a dialog box"}),o(d,{onClick:r,children:"Close Dialog"})]})]})};n.args={isModal:!1};const s=l=>{const[{isOpen:a},e]=b(),{openDialog:i,closeDialog:t}=S(),g=()=>{i(),e({isOpen:!0})},r=()=>{t(),e({isOpen:!1})};return c(p,{children:[o(d,{onClick:g,children:"Open Modal Dialog"}),o(D,{isOpen:a,onRequestClose:r,isModal:l.isModal,children:c(_,{flexDirection:"column",children:[o(p,{children:o(m,{children:"Modal Title"})}),o(p,{children:o(m,{children:"This is a modal dialog box"})}),o(p,{children:o(d,{onClick:r,children:"Close Modal Dialog"})})]})})]})};s.args={isModal:!0};var h,x,O,C,B;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`(args: DialogProps) => {
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
}`,...(O=(x=n.parameters)==null?void 0:x.docs)==null?void 0:O.source},description:{story:"Simple dialog",...(B=(C=n.parameters)==null?void 0:C.docs)==null?void 0:B.description}}};var f,M,T,A,k;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`(args: DialogProps) => {
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
}`,...(T=(M=s.parameters)==null?void 0:M.docs)==null?void 0:T.source},description:{story:"Simple dialog as modal",...(k=(A=s.parameters)==null?void 0:A.docs)==null?void 0:k.description}}};const z=["SimpleDialog","ModalDialog"];export{s as ModalDialog,n as SimpleDialog,z as __namedExportsOrder,w as default};
//# sourceMappingURL=Dialog.stories-f5c7cc95.js.map
