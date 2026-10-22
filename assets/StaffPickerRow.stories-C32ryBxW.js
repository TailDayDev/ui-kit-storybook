import{j as a}from"./iframe-Drba6mZ1.js";import{S as i}from"./StaffPickerRow-BuDOJIq0.js";import{B as c}from"./Box-P5sGDsdo.js";import"./preload-helper-Zf8nSx-t.js";import"./useThemedStyles-cVR-DtoZ.js";import"./Pressable-CfC83KfU.js";import"./index-BeTpEGf2.js";import"./extends-CF3RwP-h.js";import"./index-NHC-rSwp.js";import"./EmptyProfileImage-BK98bpa1.js";import"./Text-Do5dS1qg.js";import"./index-Do3x-qHF.js";import"./index-CxdHYcqo.js";import"./index-BPIMqECe.js";import"./index-Cpa-95Zj.js";import"./Radio-COxHwmuU.js";const m=()=>{},B={title:"Components/StaffPickerRow",component:i,args:{name:"Title",position:"Subtitle",isSelected:!1,onPress:m}},e={name:"isSelected=false"},r={name:"isSelected=true",args:{isSelected:!0}},s={args:{name:"Robert Lewis",position:"Groomer"}},o={args:{name:"Robert Lewis",position:null}},t={render:n=>a.jsxs(c,{gap:4,children:[a.jsx(i,{...n,isSelected:!1}),a.jsx(i,{...n,isSelected:!0})]})},F=["IsSelectedFalse","IsSelectedTrue","WithName","WithoutPosition","AllVariants"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'isSelected=false'
}`,...e.parameters?.docs?.source},description:{story:"Figma `StaffPickerRow` isSelected=false.",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'isSelected=true',
  args: {
    isSelected: true
  }
}`,...r.parameters?.docs?.source},description:{story:"Figma `StaffPickerRow` isSelected=true.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Robert Lewis',
    position: 'Groomer'
  }
}`,...s.parameters?.docs?.source},description:{story:'Real name: initials come from the first two words ("RL").',...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Robert Lewis',
    position: null
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Box gap={4}>
      <StaffPickerRow {...args} isSelected={false} />
      <StaffPickerRow {...args} isSelected />
    </Box>
}`,...t.parameters?.docs?.source}}};export{t as AllVariants,e as IsSelectedFalse,r as IsSelectedTrue,s as WithName,o as WithoutPosition,F as __namedExportsOrder,B as default};
