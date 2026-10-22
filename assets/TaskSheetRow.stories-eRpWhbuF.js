import{j as o}from"./iframe-Drba6mZ1.js";import{T as i}from"./TaskSheetRow-C3ykQ86d.js";import{I as n}from"./IconTrash2-Cc7moD6f.js";import{I as u}from"./IconCalendarDays-DX291SwN.js";import{B as m}from"./Box-P5sGDsdo.js";import"./preload-helper-Zf8nSx-t.js";import"./useThemedStyles-cVR-DtoZ.js";import"./Pressable-CfC83KfU.js";import"./index-BeTpEGf2.js";import"./extends-CF3RwP-h.js";import"./index-NHC-rSwp.js";import"./Text-Do5dS1qg.js";import"./index-Do3x-qHF.js";import"./Icon-Cwc6oh7S.js";import"./xml-COHihjjg.js";import"./index-Cpa-95Zj.js";import"./index-CJrLMJTa.js";const p=()=>{},C={title:"Components/TaskSheetRow",component:i,args:{label:"Label",icon:u,isDestructive:!1,onPress:p}},e={name:"isDestructive=false"},s={name:"isDestructive=true",args:{isDestructive:!0}},r={args:{label:"Удалить",icon:n,isDestructive:!0}},t={args:{disabled:!0}},a={render:c=>o.jsxs(m,{gap:4,children:[o.jsx(i,{...c,isDestructive:!1}),o.jsx(i,{...c,isDestructive:!0})]})},y=["IsDestructiveFalse","IsDestructiveTrue","Delete","Disabled","AllVariants"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'isDestructive=false'
}`,...e.parameters?.docs?.source},description:{story:"Figma `TaskSheetRow` isDestructive=false.",...e.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'isDestructive=true',
  args: {
    isDestructive: true
  }
}`,...s.parameters?.docs?.source},description:{story:"Figma `TaskSheetRow` isDestructive=true.",...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Удалить',
    icon: IconTrash2,
    isDestructive: true
  }
}`,...r.parameters?.docs?.source},description:{story:'How the app uses the destructive row (TaskSheetContent "Удалить").',...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Box gap={4}>
      <TaskSheetRow {...args} isDestructive={false} />
      <TaskSheetRow {...args} isDestructive />
    </Box>
}`,...a.parameters?.docs?.source}}};export{a as AllVariants,r as Delete,t as Disabled,e as IsDestructiveFalse,s as IsDestructiveTrue,y as __namedExportsOrder,C as default};
