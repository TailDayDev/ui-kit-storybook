import{j as e}from"./iframe-Drba6mZ1.js";import{S as m,P as p}from"./xml-COHihjjg.js";import{N as i}from"./NoImagePlaceholder-DEBvwDl8.js";import{B as d}from"./Box-P5sGDsdo.js";import"./preload-helper-Zf8nSx-t.js";import"./index-Cpa-95Zj.js";import"./index-CJrLMJTa.js";const l=({color:r})=>e.jsx(m,{width:"100%",height:"100%",viewBox:"0 0 24 24",fill:"none",children:e.jsx(p,{d:"M4 5h16v14H4zM4 15l4-4 4 4 3-3 5 5",stroke:r??"#BDBDBD",strokeWidth:1.5,strokeLinejoin:"round"})}),B={title:"Components/NoImagePlaceholder",component:i,args:{size:56,renderImage:l}},s={},a={args:{color:"#7962FF"}},t={render:r=>e.jsx(d,{row:!0,gap:3,align:"center",children:[24,40,48,56,96].map(c=>e.jsx(i,{...r,size:c},c))})},n={args:{size:"100%"},render:r=>e.jsx(d,{style:{width:120,height:120},background:"subtle",children:e.jsx(i,{...r})})},o={args:{renderImage:void 0}},S=["Default","Tinted","Sizes","FillParent","WithoutArtwork"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    color: '#7962FF'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Box row gap={3} align="center">
      {[24, 40, 48, 56, 96].map(size => <NoImagePlaceholder key={size} {...args} size={size} />)}
    </Box>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: '100%'
  },
  render: args => <Box style={{
    width: 120,
    height: 120
  }} background="subtle">
      <NoImagePlaceholder {...args} />
    </Box>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    renderImage: undefined
  }
}`,...o.parameters?.docs?.source},description:{story:"Without `renderImage` the frame is empty: the artwork is app-provided.",...o.parameters?.docs?.description}}};export{s as Default,n as FillParent,t as Sizes,a as Tinted,o as WithoutArtwork,S as __namedExportsOrder,B as default};
