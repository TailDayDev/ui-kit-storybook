import{j as e}from"./iframe-Drba6mZ1.js";import{B as r}from"./BaseSkeleton-kLYet8VB.js";import{B as n}from"./Box-P5sGDsdo.js";import"./preload-helper-Zf8nSx-t.js";import"./xml-COHihjjg.js";import"./index-Cpa-95Zj.js";import"./index-CJrLMJTa.js";import"./Animated-C1wt_1Nj.js";import"./extends-CF3RwP-h.js";import"./index-o-lnbjyp.js";import"./index-B8j4hG7g.js";import"./index-CdAw7h69.js";import"./index-FuSJnDjU.js";import"./index-BPIMqECe.js";import"./index-Do3x-qHF.js";import"./useThemedStyles-cVR-DtoZ.js";const C={title:"Components/Skeleton",component:r,args:{width:120,height:20}},s={},o={args:{width:"100%",height:void 0},render:d=>e.jsx(n,{padding:4,children:e.jsx(r,{...d})})},t={render:()=>e.jsxs(n,{gap:3,padding:4,children:[e.jsx(r,{height:64,borderRadius:16}),e.jsxs(n,{row:!0,gap:2,children:[e.jsx(r,{width:56,height:56}),e.jsx(r,{width:56,height:56,borderRadius:28})]}),e.jsx(r,{width:"56%",height:20}),e.jsx(r,{width:"72%",height:16}),e.jsx(r,{height:1})]})},a={args:{backgroundColor:"#E0E0E0"}},i={args:{accessibilityLabel:"Loading"}},y=["Default","FullWidth","Shapes","CustomColor","Accessible"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source},description:{story:"Figma `BaseSkeleton`: 120×20, radius 8, `softGray` fill.",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    width: '100%',
    height: undefined
  },
  render: args => <Box padding={4}>
      <BaseSkeleton {...args} />
    </Box>
}`,...o.parameters?.docs?.source},description:{story:"App defaults: full width, 22 tall.",...o.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Box gap={3} padding={4}>
      <BaseSkeleton height={64} borderRadius={16} />
      <Box row gap={2}>
        <BaseSkeleton width={56} height={56} />
        <BaseSkeleton width={56} height={56} borderRadius={28} />
      </Box>
      <BaseSkeleton width="56%" height={20} />
      <BaseSkeleton width="72%" height={16} />
      <BaseSkeleton height={1} />
    </Box>
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    backgroundColor: '#E0E0E0'
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    accessibilityLabel: 'Loading'
  }
}`,...i.parameters?.docs?.source}}};export{i as Accessible,a as CustomColor,s as Default,o as FullWidth,t as Shapes,y as __namedExportsOrder,C as default};
