import{j as o}from"./iframe-Drba6mZ1.js";import{B as t}from"./Box-P5sGDsdo.js";import{T as n}from"./Text-Do5dS1qg.js";import"./preload-helper-Zf8nSx-t.js";import"./index-Do3x-qHF.js";const g={title:"Primitives/Box",component:t,args:{padding:4,gap:2,background:"surface",radius:"md"}},r={render:d=>o.jsxs(t,{...d,children:[o.jsx(n,{children:"First"}),o.jsx(n,{children:"Second"})]})},e={args:{row:!0,justify:"space-between",align:"center"},render:r.render},s={args:{border:1,background:"surface"},render:r.render},a={args:{shadow:"block"},render:r.render},l=["Default","Row","Bordered","WithShadow"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <Box {...args}>
      <Text>First</Text>
      <Text>Second</Text>
    </Box>
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    row: true,
    justify: 'space-between',
    align: 'center'
  },
  render: Default.render
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    border: 1,
    background: 'surface'
  },
  render: Default.render
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    shadow: 'block'
  },
  render: Default.render
}`,...a.parameters?.docs?.source}}};export{s as Bordered,r as Default,e as Row,a as WithShadow,l as __namedExportsOrder,g as default};
