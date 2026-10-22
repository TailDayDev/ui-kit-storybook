import{j as s}from"./iframe-Drba6mZ1.js";import{P as o}from"./Pressable-CfC83KfU.js";import{B as n}from"./Box-P5sGDsdo.js";import{T as d}from"./Text-Do5dS1qg.js";import"./preload-helper-Zf8nSx-t.js";import"./index-BeTpEGf2.js";import"./extends-CF3RwP-h.js";import"./index-NHC-rSwp.js";import"./index-Do3x-qHF.js";const j={title:"Primitives/Pressable",component:o,args:{accessibilityLabel:"Tap me",disabled:!1,loading:!1}},i=()=>s.jsx(n,{padding:4,background:"subtle",radius:"sm",children:s.jsx(d,{variant:"body/medium",children:"Tap me"})}),r={render:t=>s.jsx(o,{...t,children:s.jsx(i,{})})},e={args:{disabled:!0},render:r.render},a={args:{loading:!0},render:r.render},D=["Default","Disabled","Loading"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <Pressable {...args}>
      <Surface />
    </Pressable>
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: Default.render
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  },
  render: Default.render
}`,...a.parameters?.docs?.source}}};export{r as Default,e as Disabled,a as Loading,D as __namedExportsOrder,j as default};
