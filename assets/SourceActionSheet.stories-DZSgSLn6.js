import{j as r,V as A,s as T}from"./iframe-Drba6mZ1.js";import{C as w}from"./CloseIcon-Djtgu8vC.js";import{P as n}from"./PlusIcon-BjD-KlOj.js";import{u as C}from"./useThemedStyles-cVR-DtoZ.js";import{A as I}from"./ActionListRow-B6l2WZFy.js";import{I as t}from"./Icon-Cwc6oh7S.js";import"./preload-helper-Zf8nSx-t.js";import"./xml-COHihjjg.js";import"./index-Cpa-95Zj.js";import"./index-CJrLMJTa.js";import"./Text-Do5dS1qg.js";import"./index-Do3x-qHF.js";import"./index-BeTpEGf2.js";import"./extends-CF3RwP-h.js";import"./index-NHC-rSwp.js";const x=o=>T.create({container:{backgroundColor:o.colors.bg.surface,paddingHorizontal:o.space[6],paddingVertical:o.space[1]},cardRowSpacing:{marginBottom:o.space[2]}}),f=({actions:o,onClose:S,closeOnAction:h=!0,variant:p="trailing-icon",containerStyle:y,testID:P})=>{const u=C(x),m=p.startsWith("card-"),v=e=>{h&&S(),e.onPress()};return r.jsx(A,{testID:P,style:[u.container,y],children:o.map((e,D)=>{const g=D===o.length-1;return r.jsx(I,{title:e.title,description:e.description,variant:p,leading:e.icon,trailing:e.trailing,isDanger:e.isDanger,isDisabled:e.isDisabled,showDivider:!m&&!g,style:m&&!g?u.cardRowSpacing:void 0,testID:e.testID,onPress:()=>v(e)},e.id)})})};f.__docgenInfo={description:"Body of an action sheet (camera / gallery / delete…): a column of\n`ActionListRow`s. Put it inside the app's modal; it does not open one.",methods:[],displayName:"SourceActionSheet",props:{actions:{required:!0,tsType:{name:"Array",elements:[{name:"SourceActionSheetAction"}],raw:"SourceActionSheetAction[]"},description:"Actions in display order."},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called before an action when `closeOnAction` is on."},closeOnAction:{required:!1,tsType:{name:"boolean"},description:"Close the sheet before running an action. Defaults to `true`.",defaultValue:{value:"true",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:`| 'flat'
| 'trailing-icon'
| 'card-source'
| 'card-source-trailing'
| 'card-settings'
| 'card-attachment'`,elements:[{name:"literal",value:"'flat'"},{name:"literal",value:"'trailing-icon'"},{name:"literal",value:"'card-source'"},{name:"literal",value:"'card-source-trailing'"},{name:"literal",value:"'card-settings'"},{name:"literal",value:"'card-attachment'"}]},description:"Row look. Defaults to `'trailing-icon'` (Figma `TaskSheetRow`).",defaultValue:{value:"'trailing-icon'",computed:!1}},containerStyle:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:"Container style, applied last."},testID:{required:!1,tsType:{name:"string"},description:"Test identifier of the container."}}};const a=()=>{},J={title:"Components/SourceActionSheet",component:f,args:{onClose:a,closeOnAction:!0,variant:"trailing-icon",actions:[{id:"camera",title:"Take a photo",icon:r.jsx(t,{icon:n}),onPress:a},{id:"gallery",title:"Choose from gallery",icon:r.jsx(t,{icon:n}),onPress:a},{id:"disabled",title:"Scan document",isDisabled:!0,icon:r.jsx(t,{icon:n}),onPress:a},{id:"delete",title:"Delete photo",isDanger:!0,icon:r.jsx(t,{icon:w,color:"text.error"}),onPress:a}]}},s={},i={args:{variant:"flat"}},c={args:{variant:"card-source"}},l={args:{variant:"card-source-trailing"}},d={args:{variant:"card-source",actions:[{id:"camera",title:"Take a photo",description:"Opens the camera",icon:r.jsx(t,{icon:n}),onPress:a},{id:"files",title:"Upload a file",description:"PDF, JPG or PNG up to 10 MB",icon:r.jsx(t,{icon:n}),onPress:a}]}},M=["TrailingIcon","Flat","CardSource","CardSourceTrailing","WithDescriptions"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'flat'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'card-source'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'card-source-trailing'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'card-source',
    actions: [{
      id: 'camera',
      title: 'Take a photo',
      description: 'Opens the camera',
      icon: <Icon icon={PlusIcon} />,
      onPress: noop
    }, {
      id: 'files',
      title: 'Upload a file',
      description: 'PDF, JPG or PNG up to 10 MB',
      icon: <Icon icon={PlusIcon} />,
      onPress: noop
    }]
  }
}`,...d.parameters?.docs?.source}}};export{c as CardSource,l as CardSourceTrailing,i as Flat,s as TrailingIcon,d as WithDescriptions,M as __namedExportsOrder,J as default};
