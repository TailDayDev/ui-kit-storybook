import{j as e,V as p}from"./iframe-Drba6mZ1.js";import{T as a}from"./TodaySectionHeader-B8NCP8WT.js";import"./preload-helper-Zf8nSx-t.js";import"./useThemedStyles-cVR-DtoZ.js";import"./Text-Do5dS1qg.js";import"./index-Do3x-qHF.js";import"./IconRoundButton-QinA3QVo.js";import"./IconControlButton-Bo_jLQvg.js";import"./index-BeTpEGf2.js";import"./extends-CF3RwP-h.js";import"./index-NHC-rSwp.js";import"./index-CxdHYcqo.js";import"./Icon-Cwc6oh7S.js";import"./IconChevronUp-C-wpkdaf.js";import"./xml-COHihjjg.js";import"./index-Cpa-95Zj.js";import"./index-CJrLMJTa.js";import"./IconChevronDown-Bb9oKGxx.js";const c=()=>{},l=398,A={title:"Components/TodaySectionHeader",component:a,args:{title:"Title",isCollapsible:!0,isExpanded:!0,isPastDate:!1,onToggle:c},decorators:[s=>e.jsx(p,{style:{width:l},children:e.jsx(s,{})})]},r={},t={args:{isPastDate:!0}},o={args:{isExpanded:!1}},i={args:{isExpanded:!1,isPastDate:!0}},d={args:{isCollapsible:!1}},n={render:s=>e.jsxs(p,{children:[e.jsx(a,{...s,isExpanded:!0,isPastDate:!1}),e.jsx(a,{...s,isExpanded:!0,isPastDate:!0}),e.jsx(a,{...s,isExpanded:!1,isPastDate:!1}),e.jsx(a,{...s,isExpanded:!1,isPastDate:!0}),e.jsx(a,{...s,isCollapsible:!1})]})},h=["ExpandedCurrent","ExpandedPastDate","CollapsedCurrent","CollapsedPastDate","NotCollapsible","AllVariants"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source},description:{story:"Figma isExpanded=true, isPastDate=false.",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isPastDate: true
  }
}`,...t.parameters?.docs?.source},description:{story:"Figma isExpanded=true, isPastDate=true.",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isExpanded: false
  }
}`,...o.parameters?.docs?.source},description:{story:"Figma isExpanded=false, isPastDate=false.",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isExpanded: false,
    isPastDate: true
  }
}`,...i.parameters?.docs?.source},description:{story:"Figma isExpanded=false, isPastDate=true.",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    isCollapsible: false
  }
}`,...d.parameters?.docs?.source},description:{story:"Figma isCollapsible=false.",...d.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <View>
      <TodaySectionHeader {...args} isExpanded isPastDate={false} />
      <TodaySectionHeader {...args} isExpanded isPastDate />
      <TodaySectionHeader {...args} isExpanded={false} isPastDate={false} />
      <TodaySectionHeader {...args} isExpanded={false} isPastDate />
      <TodaySectionHeader {...args} isCollapsible={false} />
    </View>
}`,...n.parameters?.docs?.source}}};export{n as AllVariants,o as CollapsedCurrent,i as CollapsedPastDate,r as ExpandedCurrent,t as ExpandedPastDate,d as NotCollapsible,h as __namedExportsOrder,A as default};
