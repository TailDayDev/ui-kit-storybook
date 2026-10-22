import{j as e}from"./iframe-Drba6mZ1.js";import{T as n}from"./TodayPlacementList-CyKkxY7P.js";import{B as m}from"./Box-P5sGDsdo.js";import{I as c}from"./Icon-Cwc6oh7S.js";import{I as p}from"./IconPawPrint-C_bXBfXe.js";import"./preload-helper-Zf8nSx-t.js";import"./useThemedStyles-cVR-DtoZ.js";import"./Text-Do5dS1qg.js";import"./index-Do3x-qHF.js";import"./xml-COHihjjg.js";import"./index-Cpa-95Zj.js";import"./index-CJrLMJTa.js";const i=e.jsx(c,{icon:p,size:16}),I={title:"Components/TodayPlacementList",component:n,args:{itemsCount:1,title:"Label",image:i,secondTitle:"Label",secondImage:i},argTypes:{itemsCount:{control:"inline-radio",options:[1,2]}},decorators:[r=>e.jsx(m,{style:{width:290},children:e.jsx(r,{})})]},o={},s={args:{itemsCount:2}},t={args:{itemsCount:2,title:"Room 12 — big sunny suite",secondTitle:"Daycare playground with a very long name"}},a={render:r=>e.jsxs(m,{gap:4,children:[e.jsx(n,{...r,itemsCount:1}),e.jsx(n,{...r,itemsCount:2})]})},P=["One","Two","LongNames","AllVariants"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source},description:{story:"Figma itemsCount=1.",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    itemsCount: 2
  }
}`,...s.parameters?.docs?.source},description:{story:"Figma itemsCount=2.",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    itemsCount: 2,
    title: 'Room 12 — big sunny suite',
    secondTitle: 'Daycare playground with a very long name'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Box gap={4}>
      <TodayPlacementList {...args} itemsCount={1} />
      <TodayPlacementList {...args} itemsCount={2} />
    </Box>
}`,...a.parameters?.docs?.source}}};export{a as AllVariants,t as LongNames,o as One,s as Two,P as __namedExportsOrder,I as default};
