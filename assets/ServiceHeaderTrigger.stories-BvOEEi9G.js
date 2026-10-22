import{j as o}from"./iframe-Drba6mZ1.js";import{S as a}from"./ServiceHeaderTrigger-Do6IbEUl.js";import{B as n}from"./Box-P5sGDsdo.js";import"./preload-helper-Zf8nSx-t.js";import"./useThemedStyles-cVR-DtoZ.js";import"./Pressable-CfC83KfU.js";import"./index-BeTpEGf2.js";import"./extends-CF3RwP-h.js";import"./index-NHC-rSwp.js";import"./Text-Do5dS1qg.js";import"./index-Do3x-qHF.js";import"./Icon-Cwc6oh7S.js";import"./IconChevronDown-Bb9oKGxx.js";import"./xml-COHihjjg.js";import"./index-Cpa-95Zj.js";import"./index-CJrLMJTa.js";const j={title:"Components/ServiceHeaderTrigger",component:a,args:{titleSelected:"Title",notifications:"0",hasNotificationsBadge:!0,onPress:()=>{}}},e={},r={args:{hasNotificationsBadge:!1}},s={args:{titleSelected:"Hotel with a very long name for pets",notifications:"12"}},t={render:i=>o.jsxs(n,{gap:4,children:[o.jsx(a,{...i}),o.jsx(a,{...i,hasNotificationsBadge:!1}),o.jsx(a,{...i,notifications:"12"})]})},N=["Default","WithoutBadge","LongTitle","AllVariants"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source},description:{story:"Figma `ServiceHeaderTrigger` (default properties).",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    hasNotificationsBadge: false
  }
}`,...r.parameters?.docs?.source},description:{story:"Badge hidden.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    titleSelected: 'Hotel with a very long name for pets',
    notifications: '12'
  }
}`,...s.parameters?.docs?.source},description:{story:"Long name shrinks with an ellipsis.",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Box gap={4}>
      <ServiceHeaderTrigger {...args} />
      <ServiceHeaderTrigger {...args} hasNotificationsBadge={false} />
      <ServiceHeaderTrigger {...args} notifications="12" />
    </Box>
}`,...t.parameters?.docs?.source},description:{story:"All states side by side.",...t.parameters?.docs?.description}}};export{t as AllVariants,e as Default,s as LongTitle,r as WithoutBadge,N as __namedExportsOrder,j as default};
