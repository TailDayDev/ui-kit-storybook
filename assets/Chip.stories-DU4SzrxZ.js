import{j as e}from"./iframe-Drba6mZ1.js";import{C as t}from"./Chip-gT-nv_jW.js";import{B as i}from"./Box-P5sGDsdo.js";import"./preload-helper-Zf8nSx-t.js";import"./useThemedStyles-cVR-DtoZ.js";import"./Pressable-CfC83KfU.js";import"./index-BeTpEGf2.js";import"./extends-CF3RwP-h.js";import"./index-NHC-rSwp.js";import"./Text-Do5dS1qg.js";import"./index-Do3x-qHF.js";const f={title:"Components/Chip",component:t,args:{name:"Label",count:"0",hasBadge:!0,isSelected:!0,onPress:()=>{}}},s={args:{isSelected:!0}},r={args:{isSelected:!1}},a={render:o=>e.jsxs(i,{gap:2,children:[e.jsxs(i,{row:!0,gap:1,children:[e.jsx(t,{...o,isSelected:!0}),e.jsx(t,{...o,isSelected:!1})]}),e.jsxs(i,{row:!0,gap:1,children:[e.jsx(t,{...o,isSelected:!0,hasBadge:!1}),e.jsx(t,{...o,isSelected:!1,hasBadge:!1})]})]})},B=["IsSelectedTrue","IsSelectedFalse","AllVariants"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isSelected: true
  }
}`,...s.parameters?.docs?.source},description:{story:"Figma `isSelected=true`.",...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    isSelected: false
  }
}`,...r.parameters?.docs?.source},description:{story:"Figma `isSelected=false`.",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Box gap={2}>
      <Box row gap={1}>
        <Chip {...args} isSelected />
        <Chip {...args} isSelected={false} />
      </Box>
      <Box row gap={1}>
        <Chip {...args} isSelected hasBadge={false} />
        <Chip {...args} isSelected={false} hasBadge={false} />
      </Box>
    </Box>
}`,...a.parameters?.docs?.source},description:{story:"Both variants, with and without the badge.",...a.parameters?.docs?.description}}};export{a as AllVariants,r as IsSelectedFalse,s as IsSelectedTrue,B as __namedExportsOrder,f as default};
