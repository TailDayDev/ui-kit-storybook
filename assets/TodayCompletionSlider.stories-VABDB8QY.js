import{j as r,r as n}from"./iframe-Drba6mZ1.js";import{T as p}from"./TodayCompletionSlider-BBDpxmDi.js";import{B as l}from"./Box-P5sGDsdo.js";import"./preload-helper-Zf8nSx-t.js";import"./index-DFoXgwmB.js";import"./Animated-C1wt_1Nj.js";import"./index-CJrLMJTa.js";import"./extends-CF3RwP-h.js";import"./index-o-lnbjyp.js";import"./index-B8j4hG7g.js";import"./index-CdAw7h69.js";import"./index-FuSJnDjU.js";import"./index-BPIMqECe.js";import"./index-Cpa-95Zj.js";import"./index-Do3x-qHF.js";import"./hoist-non-react-statics.cjs-CVY4v-ZL.js";import"./index-Cy8RnwP-.js";import"./index-ClMYSwEP.js";import"./index-IGWuf7O1.js";import"./useThemedStyles-cVR-DtoZ.js";import"./workletFunctions-lPAlqvRH.js";import"./Text-Do5dS1qg.js";import"./Icon-Cwc6oh7S.js";import"./IconCheck-DBTM99Yq.js";import"./xml-COHihjjg.js";const q={title:"Components/TodayCompletionSlider",component:p,args:{completedLabel:"Label",isCompleted:!1,isDisabled:!1,onComplete:()=>{}}},s={},o={args:{isCompleted:!0}},t={args:{isDisabled:!0}},a={render:e=>r.jsxs(l,{gap:3,children:[r.jsx(p,{...e}),r.jsx(p,{...e,isCompleted:!0}),r.jsx(p,{...e,isDisabled:!0})]})},c=e=>{const[m,d]=n.useState(!1);return r.jsx(p,{...e,isCompleted:m,onComplete:()=>d(!0)})},i={args:{completedLabel:"Готово!"},render:e=>r.jsx(c,{...e})},z=["Default","Completed","Disabled","AllVariants","Interactive"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source},description:{story:"Figma `isCompleted=false, isDisabled=false`.",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isCompleted: true
  }
}`,...o.parameters?.docs?.source},description:{story:"Figma `isCompleted=true, isDisabled=false`.",...o.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...t.parameters?.docs?.source},description:{story:"Figma `isCompleted=false, isDisabled=true`.",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Box gap={3}>
      <TodayCompletionSlider {...args} />
      <TodayCompletionSlider {...args} isCompleted />
      <TodayCompletionSlider {...args} isDisabled />
    </Box>
}`,...a.parameters?.docs?.source},description:{story:"All Figma variants side by side.",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    completedLabel: 'Готово!'
  },
  render: args => <InteractiveSlider {...args} />
}`,...i.parameters?.docs?.source},description:{story:"Swipe right to complete.",...i.parameters?.docs?.description}}};export{a as AllVariants,o as Completed,s as Default,t as Disabled,i as Interactive,z as __namedExportsOrder,q as default};
