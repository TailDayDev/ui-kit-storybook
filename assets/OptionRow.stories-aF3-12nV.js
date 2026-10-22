import{j as o}from"./iframe-Drba6mZ1.js";import{O as a}from"./OptionRow-B0ZmZAEV.js";import{B as c}from"./Box-P5sGDsdo.js";import"./preload-helper-Zf8nSx-t.js";import"./useThemedStyles-cVR-DtoZ.js";import"./Pressable-CfC83KfU.js";import"./index-BeTpEGf2.js";import"./extends-CF3RwP-h.js";import"./index-NHC-rSwp.js";import"./Text-Do5dS1qg.js";import"./index-Do3x-qHF.js";const n=()=>{},b={title:"Components/OptionRow",component:a,args:{label:"Label",isSelected:!1,onPress:n}},e={name:"isSelected=false"},s={name:"isSelected=true",args:{isSelected:!0}},r={args:{disabled:!0}},t={render:i=>o.jsxs(c,{gap:4,children:[o.jsx(a,{...i,isSelected:!1}),o.jsx(a,{...i,isSelected:!0})]})},w=["IsSelectedFalse","IsSelectedTrue","Disabled","AllVariants"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'isSelected=false'
}`,...e.parameters?.docs?.source},description:{story:"Figma `OptionRow` isSelected=false.",...e.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'isSelected=true',
  args: {
    isSelected: true
  }
}`,...s.parameters?.docs?.source},description:{story:"Figma `OptionRow` isSelected=true.",...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Box gap={4}>
      <OptionRow {...args} isSelected={false} />
      <OptionRow {...args} isSelected />
    </Box>
}`,...t.parameters?.docs?.source}}};export{t as AllVariants,r as Disabled,e as IsSelectedFalse,s as IsSelectedTrue,w as __namedExportsOrder,b as default};
