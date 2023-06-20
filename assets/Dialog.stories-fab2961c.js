import{a as c,j as o}from"./jsx-runtime-91a467a5.js";import{B as p}from"./Box-27aaf5fd.js";import{B as d}from"./Button-76d85f6b.js";import{D}from"./Tooltip-1374056d.js";import{F as _}from"./FlexBox-3590fa2e.js";import"./Form-0f5723e2.js";import"./Grid-9cc8b09a.js";import"./Label-3503ff7d.js";import"./IntlText-8e3517f4.js";import{T as m}from"./Text-3e49330d.js";import"./TextArea-f6fca39f.js";import{r as u}from"./index-8db94870.js";import"./Body-d5e6a869.js";import"./ContentLoader-ab8283dc.js";import"./Header-f221caa9.js";import"./Loader-2b6d4952.js";import"./SEO-a0f424ca.js";import"./system-8e4bc0f2.js";import"./_commonjsHelpers-042e6b4d.js";const S=(l=!1)=>{const[a,e]=u.useState(l),i=u.useCallback(()=>{e(!0)},[]),t=u.useCallback(()=>{e(!1)},[]);return{isOpen:a,openDialog:i,closeDialog:t}},{useArgs:b}=__STORYBOOK_MODULE_ADDONS__,Q={title:"Atoms/Dialog",component:D,tags:["autodocs"],argTypes:{isOpen:{control:null},isModal:{control:"boolean"},onRequestClose:{action:"closed"}},parameters:{docs:{description:{component:"Refer to [Props Details](?path=/docs/propsdetails--documentation) for details on the available props."}}}},n=l=>{const[{isOpen:a},e]=b(),{openDialog:i,closeDialog:t}=S(),g=()=>{i(),e({isOpen:!0})},r=()=>{t(),e({isOpen:!1})};return c(p,{children:[o(d,{onClick:g,children:"Open Dialog"}),c(D,{isOpen:a,onRequestClose:r,...l,children:[o(m,{children:"This is a dialog box"}),o(d,{onClick:r,children:"Close Dialog"})]})]})};n.args={isModal:!1};const s=l=>{const[{isOpen:a},e]=b(),{openDialog:i,closeDialog:t}=S(),g=()=>{i(),e({isOpen:!0})},r=()=>{t(),e({isOpen:!1})};return c(p,{children:[o(d,{onClick:g,children:"Open Modal Dialog"}),o(D,{isOpen:a,onRequestClose:r,isModal:l.isModal,children:c(_,{flexDirection:"column",children:[o(p,{children:o(m,{children:"Modal Title"})}),o(p,{children:o(m,{children:"This is a modal dialog box"})}),o(p,{children:o(d,{onClick:r,children:"Close Modal Dialog"})})]})})]})};s.args={isModal:!0};var h,x,O,C,B;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`(args: DialogProps) => {
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
}`,...(T=(M=s.parameters)==null?void 0:M.docs)==null?void 0:T.source},description:{story:"Simple dialog as modal",...(k=(A=s.parameters)==null?void 0:A.docs)==null?void 0:k.description}}};const V=["SimpleDialog","ModalDialog"];export{s as ModalDialog,n as SimpleDialog,V as __namedExportsOrder,Q as default};
//# sourceMappingURL=Dialog.stories-fab2961c.js.map
