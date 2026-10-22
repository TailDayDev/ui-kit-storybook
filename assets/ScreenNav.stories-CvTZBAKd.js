import{r as R,u as j,E as N,j as e,V as o,D as O,s as W,S as P}from"./iframe-Drba6mZ1.js";import{P as V}from"./PlusIcon-BjD-KlOj.js";import{C as H}from"./ChevronLeftIcon-NmXlZ3mi.js";import{M as L}from"./index-DMl0EwHp.js";import{I as _}from"./Icon-Cwc6oh7S.js";import{T as q}from"./Text-Do5dS1qg.js";import{b as i,S as M,a as z,c as G}from"./screenHeaderMetrics-CWcXgeGY.js";import{I as A}from"./Input-q-vVyBxW.js";import{I as Z}from"./IconRoundButton-QinA3QVo.js";import"./preload-helper-Zf8nSx-t.js";import"./xml-COHihjjg.js";import"./index-Cpa-95Zj.js";import"./index-CJrLMJTa.js";import"./extends-CF3RwP-h.js";import"./index-NHC-rSwp.js";import"./index-Do3x-qHF.js";import"./CheckIcon-Df8qcKU4.js";import"./CloseIcon-Djtgu8vC.js";import"./useThemedStyles-cVR-DtoZ.js";import"./index-BeTpEGf2.js";import"./SyncedTextInput-SayiDFe8.js";import"./useNativeEchoValue-DVEVbt6b.js";import"./index-ClMYSwEP.js";import"./index-FuSJnDjU.js";import"./index-nQAgfKya.js";import"./index-CdAw7h69.js";import"./InputClearButton-CWwrP1Ns.js";import"./IconControlButton-Bo_jLQvg.js";import"./index-CxdHYcqo.js";const K=24,U=16,F=16,D=52,J=20,Q=({theme:r,isDevider:s,insets:l,centeredTitle:k,isBackButtonVisible:c,hasChildren:S})=>{const d=O.get("window").width,a=s?z:0,p=(G-a-i)/2,E=c||k?M:K;return W.create({container:{borderBottomColor:r.colors.border.default,borderBottomWidth:a,borderStyle:"solid",gap:U,paddingBottom:S?F:p,paddingHorizontal:E,paddingTop:l.top+p,width:d},backButton:{alignItems:"center",backgroundColor:r.colors.bg.subtle,borderRadius:i/2,height:i,justifyContent:"center",width:i},rightBlock:{flexShrink:0},centeredRightBlock:{marginLeft:"auto"},leftBlock:{flexShrink:0},row:{alignItems:"center",flexDirection:"row",gap:r.space[3],height:i,justifyContent:"space-between",maxWidth:"100%"},centeredRow:{gap:r.space[4],justifyContent:"flex-start",position:"relative"},title:{flexShrink:1},titleWrapper:{alignItems:"center",flexDirection:"row",flex:1,minWidth:0},centeredTitleWrapper:{bottom:0,justifyContent:"center",left:D,position:"absolute",right:D,top:0}})},w=R.memo(function({title:s,children:l,hasBackButton:k=!1,goBack:c,rightBlock:S,leftBlock:d,isDevider:a=!0,restStyle:p,isOnlyChildren:E=!1,centeredTitle:n=!1}){const v=j(),x=N(),C=k&&!!c,I=!!l,t=R.useMemo(()=>Q({theme:v,isDevider:a,insets:x,centeredTitle:n,isBackButtonVisible:C,hasChildren:I}),[n,I,x,C,a,v]);return e.jsxs(o,{style:[t.container,p],children:[!E&&e.jsxs(o,{style:[t.row,n&&t.centeredRow],children:[d&&e.jsx(o,{style:t.leftBlock,children:d}),C?e.jsx(L,{onPress:c,style:t.backButton,accessibilityRole:"button",accessibilityLabel:s,children:e.jsx(_,{icon:H,color:"text.primary",size:J})}):null,s?e.jsx(o,{style:[t.titleWrapper,n&&t.centeredTitleWrapper],children:e.jsx(q,{variant:"title/bold",style:t.title,numberOfLines:1,ellipsizeMode:"tail",children:s})}):e.jsx(o,{style:t.titleWrapper}),e.jsx(o,{style:[t.rightBlock,n&&t.centeredRightBlock],children:S})]}),l]})});w.__docgenInfo={description:`Screen top bar used by most app screens: title, optional round back button,
left / right blocks and optional content under the bar. Adds the top
safe-area inset and spans the window width.`,methods:[],displayName:"ScreenNav",props:{title:{required:!1,tsType:{name:"string"},description:"Title (`title/bold`, one line). Also the back button's screen-reader label."},children:{required:!1,tsType:{name:"ReactElement"},description:"Content under the bar (search, tabs…), separated by 16pt."},hasBackButton:{required:!1,tsType:{name:"boolean"},description:"Shows the round back button. Needs `goBack` too. Defaults to `false`.",defaultValue:{value:"false",computed:!1}},goBack:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called by the back button. The app passes its navigation `goBack`."},rightBlock:{required:!1,tsType:{name:"ReactElement"},description:"Element at the right edge of the bar."},leftBlock:{required:!1,tsType:{name:"ReactElement"},description:"Element before the back button / title."},isDevider:{required:!1,tsType:{name:"boolean"},description:"Bottom divider. Defaults to `true`. (Spelling kept for API compatibility with the app.)",defaultValue:{value:"true",computed:!1}},restStyle:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:"Container style, applied last."},isOnlyChildren:{required:!1,tsType:{name:"boolean"},description:"Hides the bar row and renders only `children`. Defaults to `false`.",defaultValue:{value:"false",computed:!1}},centeredTitle:{required:!1,tsType:{name:"boolean"},description:"Centers the title over the whole bar. Defaults to `false`.",defaultValue:{value:"false",computed:!1}}}};const X={frame:{x:0,y:0,width:390,height:844},insets:{top:47,left:0,right:0,bottom:34}},T=()=>e.jsx(Z,{accessibilityLabel:"Add",icon:e.jsx(_,{icon:V,size:20}),onPress:()=>{}}),Ie={title:"Components/ScreenNav",component:w,decorators:[r=>e.jsx(P,{initialMetrics:X,children:e.jsx(r,{})})],args:{title:"Bookings",isDevider:!0,hasBackButton:!1,centeredTitle:!1,isOnlyChildren:!1}},u={},m={args:{rightBlock:e.jsx(T,{})}},h={args:{title:"Pet profile",hasBackButton:!0,goBack:()=>{}}},f={args:{title:"Check-in",hasBackButton:!0,goBack:()=>{},centeredTitle:!0,rightBlock:e.jsx(T,{})}},g={args:{isDevider:!1}},B={args:{title:"Clients",children:e.jsx(A,{placeholder:"Search",value:"",setValue:()=>{}})}},b={args:{isOnlyChildren:!0,children:e.jsx(A,{placeholder:"Search",value:"",setValue:()=>{}})}},y={args:{title:"A very long screen title that is truncated at the end",rightBlock:e.jsx(T,{})}},Re=["Root","WithRightBlock","WithBackButton","CenteredTitle","WithoutDivider","WithChildren","OnlyChildren","LongTitle"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{}",...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    rightBlock: <AddButton />
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Pet profile',
    hasBackButton: true,
    goBack: () => undefined
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Check-in',
    hasBackButton: true,
    goBack: () => undefined,
    centeredTitle: true,
    rightBlock: <AddButton />
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    isDevider: false
  }
}`,...g.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Clients',
    children: <Input placeholder="Search" value="" setValue={() => undefined} />
  }
}`,...B.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    isOnlyChildren: true,
    children: <Input placeholder="Search" value="" setValue={() => undefined} />
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'A very long screen title that is truncated at the end',
    rightBlock: <AddButton />
  }
}`,...y.parameters?.docs?.source}}};export{f as CenteredTitle,y as LongTitle,b as OnlyChildren,u as Root,h as WithBackButton,B as WithChildren,m as WithRightBlock,g as WithoutDivider,Re as __namedExportsOrder,Ie as default};
