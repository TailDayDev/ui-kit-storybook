import{j as n}from"./iframe-Drba6mZ1.js";import{T as c}from"./TodayTaskTime-CuetABMm.js";import{B as m}from"./Box-P5sGDsdo.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Do5dS1qg.js";import"./index-Do3x-qHF.js";const i=["default","overdue","completed"],f={title:"Components/TodayTaskTime",component:c,args:{title:"Title",subtitle:"Subtitle",hasSubtitle:!0,tone:"default"},argTypes:{tone:{control:"select",options:i}}},e={},r={args:{tone:"overdue"}},t={args:{tone:"completed"}},o={args:{hasSubtitle:!1}},s={render:p=>n.jsx(m,{row:!0,gap:6,children:i.map(a=>n.jsx(c,{...p,tone:a},a))})},x=["Default","Overdue","Completed","WithoutSubtitle","AllVariants"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source},description:{story:"Figma tone=default.",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'overdue'
  }
}`,...r.parameters?.docs?.source},description:{story:"Figma tone=overdue.",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'completed'
  }
}`,...t.parameters?.docs?.source},description:{story:"Figma tone=completed.",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    hasSubtitle: false
  }
}`,...o.parameters?.docs?.source},description:{story:"Figma hasSubtitle=false.",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Box row gap={6}>
      {TONES.map(tone => <TodayTaskTime key={tone} {...args} tone={tone} />)}
    </Box>
}`,...s.parameters?.docs?.source}}};export{s as AllVariants,t as Completed,e as Default,r as Overdue,o as WithoutSubtitle,x as __namedExportsOrder,f as default};
