import{E as V,j as e,V as y,s as A,r as _}from"./iframe-Drba6mZ1.js";import{C as q,a as I}from"./CustomModal-BCR-nnz0.js";import{T as B}from"./TaskSheetContent-CvY5PHcR.js";import{M as P}from"./ModalHeader-DcJpMICK.js";import{I as f}from"./IconCalendarDays-DX291SwN.js";import{I as L}from"./IconUndo2-B39qdSbI.js";import{I as W,a as D}from"./IconClockEditOutline-DlmcpalE.js";import{M as E}from"./ModalLayerRoot-uUSMYPWp.js";import{B as H}from"./Box-P5sGDsdo.js";import{B as N}from"./Button-CkI-qFPZ.js";import"./preload-helper-Zf8nSx-t.js";import"./index-nQAgfKya.js";import"./index-CdAw7h69.js";import"./index-FuSJnDjU.js";import"./index-CJrLMJTa.js";import"./Animated-C1wt_1Nj.js";import"./extends-CF3RwP-h.js";import"./index-o-lnbjyp.js";import"./index-B8j4hG7g.js";import"./index-BPIMqECe.js";import"./index-Cpa-95Zj.js";import"./index-Do3x-qHF.js";import"./ChevronLeftIcon-NmXlZ3mi.js";import"./xml-COHihjjg.js";import"./CloseIcon-Djtgu8vC.js";import"./index-DMl0EwHp.js";import"./index-NHC-rSwp.js";import"./IconRoundButton-QinA3QVo.js";import"./IconControlButton-Bo_jLQvg.js";import"./useThemedStyles-cVR-DtoZ.js";import"./index-BeTpEGf2.js";import"./index-CxdHYcqo.js";import"./index-C84XXpb-.js";import"./TaskSheetRow-C3ykQ86d.js";import"./Pressable-CfC83KfU.js";import"./Text-Do5dS1qg.js";import"./Icon-Cwc6oh7S.js";import"./IconTrash2-Cc7moD6f.js";import"./IconX--Vr5Xf9R.js";import"./index-DFoXgwmB.js";import"./hoist-non-react-statics.cjs-CVY4v-ZL.js";import"./index-Cy8RnwP-.js";import"./index-ClMYSwEP.js";import"./index-Czb_DysZ.js";const g=A.create({headerRow:{paddingHorizontal:0,paddingVertical:0},header:{flex:1},replaced:{opacity:0}}),c=({isVisible:s,onClose:r,onDismissed:t,rows:x,closeAccessibilityLabel:w,title:b,isLocked:R=!1,isReplaced:h=!1,nestedOverlays:v,modalKey:F,closeTestID:j,style:C,testID:M})=>{const O=V(),k=R||h;return e.jsx(q,{visible:s,onClose:r,onDismissed:t,isLocked:k,autoHeight:!0,closeOnBackdropPress:!0,withBackdrop:!h,containerStyles:h?g.replaced:void 0,contentTopPadding:0,divider:!1,modalKey:F,closeAccessibilityLabel:w,headerStyles:g.headerRow,header:e.jsx(P,{title:b,hasTitle:!!b,onClose:r,closeAccessibilityLabel:w,isDisabled:k,closeTestID:j,style:g.header}),nestedOverlays:v,children:e.jsx(y,{style:{paddingBottom:O.bottom},children:e.jsx(B,{rows:x,style:C,testID:M})})})};c.__docgenInfo={description:'Task actions sheet (Figma `TaskSheet`): bottom sheet with a close-only\n`ModalHeader` and `TaskSheetContent` rows. Figma `hasFooter=false`, so there\nis no footer; the "Полоска дома" frame is the device safe area.',methods:[],displayName:"TaskSheet",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:"Shown while true; hidden (animated out) when false. CustomModal `visible`."},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Close request (× button, backdrop, Android Back). Set `isVisible` to false\nto close; keep it to refuse. CustomModal `onClose`."},onDismissed:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"The sheet is gone; for hand-offs (navigation) that wait for it. CustomModal `onDismissed`."},rows:{required:!0,tsType:{name:"unknown"},description:"Action rows in display order; destructive ones go to the separate block\nbelow. Their count (1–3) is Figma VARIANT `rows`."},closeAccessibilityLabel:{required:!0,tsType:{name:"string"},description:"Screen-reader label of the close button (Figma `ModalHeader` › CloseButton)."},title:{required:!1,tsType:{name:"string"},description:"Header title (Figma `ModalHeader` TEXT `title`). Figma `TaskSheet` uses\n`hasTitle=false`, so it is shown only when given."},isLocked:{required:!1,tsType:{name:"boolean"},description:"Busy (e.g. a request is pending): rows and close controls are blocked.\nCustomModal `isLocked`.",defaultValue:{value:"false",computed:!1}},isReplaced:{required:!1,tsType:{name:"boolean"},description:"Another sheet opened from this one replaces it: the menu turns invisible,\nloses its backdrop and is locked, but stays mounted under the new sheet\n(app `isMenuReplaced`). Defaults to `false`.",defaultValue:{value:"false",computed:!1}},nestedOverlays:{required:!1,tsType:{name:"ReactNode"},description:"Modals opened from the sheet (skip reason, confirmations). Rendered inside\nthis modal's layer, never as siblings. CustomModal `nestedOverlays`."},modalKey:{required:!1,tsType:{name:"string"},description:"Name of the modal for the app (registry, telemetry, tests)."},closeTestID:{required:!1,tsType:{name:"string"},description:"Test identifier of the close button."},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:"Extra style of the rows block (`TaskSheetContent`), applied last."},testID:{required:!1,tsType:{name:"string"},description:"Test identifier of the rows block (`TaskSheetContent`)."}}};const z={width:398,height:520},K={width:398,height:340},o=()=>{},p=[{key:"booking",label:"Label",icon:f,onPress:o}],T=[{key:"uncomplete",label:"Label",icon:L,onPress:o},{key:"booking",label:"Label",icon:f,onPress:o}],S=[{key:"noShow",label:"Label",icon:W,onPress:o},{key:"time",label:"Label",icon:D,onPress:o},{key:"booking",label:"Label",icon:f,onPress:o}],m=({children:s,size:r=z})=>e.jsx(y,{style:r,children:e.jsx(E,{children:e.jsx(I,{closeAccessibilityLabel:"Закрыть",children:s})})}),u=s=>{const[r,t]=_.useState(!0);return e.jsxs(H,{padding:4,children:[e.jsx(N,{onPress:()=>t(!0),title:"Открыть"}),e.jsx(c,{...s,isVisible:r,onClose:()=>t(!1)})]})},Be={title:"Components/TaskSheet",component:c,args:{isVisible:!0,rows:p,closeAccessibilityLabel:"Закрыть",onClose:o}},a={name:"rows=1",args:{rows:p},render:s=>e.jsx(m,{children:e.jsx(u,{...s})})},n={name:"rows=2",args:{rows:T},render:s=>e.jsx(m,{children:e.jsx(u,{...s})})},i={name:"rows=3",args:{rows:S},render:s=>e.jsx(m,{children:e.jsx(u,{...s})})},d={args:{rows:[...p,{key:"delete",label:"Удалить",onPress:o,isDestructive:!0}]},render:s=>e.jsx(m,{children:e.jsx(u,{...s})})},l={render:s=>e.jsx(y,{children:[p,T,S].map((r,t)=>e.jsx(m,{size:K,children:e.jsx(c,{...s,rows:r,modalKey:`TaskSheet${t}`})},r.length))})},Pe=["Rows1","Rows2","Rows3","WithDestructive","AllVariants"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'rows=1',
  args: {
    rows: ROWS_1
  },
  render: args => <Frame>
      <Opener {...args} />
    </Frame>
}`,...a.parameters?.docs?.source},description:{story:"Figma `TaskSheet` rows=1.",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'rows=2',
  args: {
    rows: ROWS_2
  },
  render: args => <Frame>
      <Opener {...args} />
    </Frame>
}`,...n.parameters?.docs?.source},description:{story:"Figma `TaskSheet` rows=2.",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'rows=3',
  args: {
    rows: ROWS_3
  },
  render: args => <Frame>
      <Opener {...args} />
    </Frame>
}`,...i.parameters?.docs?.source},description:{story:"Figma `TaskSheet` rows=3.",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    rows: [...ROWS_1, {
      key: 'delete',
      label: 'Удалить',
      onPress: noop,
      isDestructive: true
    }]
  },
  render: args => <Frame>
      <Opener {...args} />
    </Frame>
}`,...d.parameters?.docs?.source},description:{story:'Manual task: actions plus the destructive "Удалить" block.',...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <View>
      {[ROWS_1, ROWS_2, ROWS_3].map((rows, index) => <Frame key={rows.length} size={VARIANT_FRAME}>
          <TaskSheet {...args} rows={rows} modalKey={\`TaskSheet\${index}\`} />
        </Frame>)}
    </View>
}`,...l.parameters?.docs?.source},description:{story:"All Figma variants, each in its own modal layer.",...l.parameters?.docs?.description}}};export{l as AllVariants,a as Rows1,n as Rows2,i as Rows3,d as WithDestructive,Pe as __namedExportsOrder,Be as default};
