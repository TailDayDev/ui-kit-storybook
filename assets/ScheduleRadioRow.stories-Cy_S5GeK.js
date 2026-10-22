import{l as u,j as d,r as g}from"./iframe-Drba6mZ1.js";import{S as l}from"./ScheduleRadioRow-CGOqTqqs.js";import{B as h}from"./Box-P5sGDsdo.js";import"./preload-helper-Zf8nSx-t.js";import"./useThemedStyles-cVR-DtoZ.js";import"./index-DMl0EwHp.js";import"./extends-CF3RwP-h.js";import"./index-NHC-rSwp.js";import"./Radio-COxHwmuU.js";import"./Text-Do5dS1qg.js";import"./index-Do3x-qHF.js";const j={title:"Components/ScheduleRadioRow",component:l,args:{title:"Schedule by time",description:"Times of day",selected:!0,disabled:!1,onPress:()=>{}}},r={},s={args:{selected:!1}},a={args:{disabled:!0}},o={args:{disabled:!0,selected:!1}},t={args:{descriptionColor:u.palette.darkGray}},c={args:{title:"Exact time with a long title that wraps onto the next line",description:"Pick the exact times when the pet should get the medication every day"}},n=[{key:"day_part",title:"Schedule by time",description:"Times of day"},{key:"exact",title:"Exact time",description:"Set specific hours"}],y=()=>{const[p,m]=g.useState(n[0].key);return d.jsx(h,{gap:4,children:n.map(e=>d.jsx(l,{title:e.title,description:e.description,selected:p===e.key,onPress:()=>m(e.key)},e.key))})},i={render:()=>d.jsx(y,{})},I=["Selected","Unselected","DisabledSelected","DisabledUnselected","CustomDescriptionColor","LongText","Interactive"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    selected: false
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    descriptionColor: lightTheme.palette.darkGray
  }
}`,...t.parameters?.docs?.source},description:{story:"`descriptionColor` override as used by the medication wizard.",...t.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Exact time with a long title that wraps onto the next line',
    description: 'Pick the exact times when the pet should get the medication every day'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveGroup />
}`,...i.parameters?.docs?.source}}};export{t as CustomDescriptionColor,a as DisabledSelected,o as DisabledUnselected,i as Interactive,c as LongText,r as Selected,s as Unselected,I as __namedExportsOrder,j as default};
