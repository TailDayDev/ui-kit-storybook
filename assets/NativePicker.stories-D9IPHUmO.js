import{j as n,r as m}from"./iframe-Drba6mZ1.js";import{N as i}from"./NativePicker-CxV_RIXL.js";import"./preload-helper-Zf8nSx-t.js";import"./useNativeEchoValue-DVEVbt6b.js";import"./index-CJrLMJTa.js";const o=Array.from({length:24},(e,r)=>{const c=String(r).padStart(2,"0");return{label:c,value:c}}),v={title:"Components/NativePicker",component:i,args:{items:o,selectedValue:"09",onValueChange:()=>{},accessibilityLabel:"Hour"}},t={},a={args:{items:o.map((e,r)=>r%2===0?{...e,color:"#EB5757"}:e)}},u=()=>{const[e,r]=m.useState("09");return n.jsx(i,{items:o,selectedValue:e,onValueChange:r,accessibilityLabel:"Hour"})},s={render:()=>n.jsx(u,{})},S=["Default","CustomItemColor","Interactive"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items: HOURS.map((item, index) => index % 2 === 0 ? {
      ...item,
      color: '#EB5757'
    } : item)
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <InteractivePicker />
}`,...s.parameters?.docs?.source}}};export{a as CustomItemColor,t as Default,s as Interactive,S as __namedExportsOrder,v as default};
