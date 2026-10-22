import{j as p}from"./iframe-Drba6mZ1.js";import{T as m}from"./TodayTaskTypeBadge-DD72pU-B.js";import{B as g}from"./Box-P5sGDsdo.js";import{I as l}from"./Icon-Cwc6oh7S.js";import{I as u}from"./IconPawPrint-C_bXBfXe.js";import"./preload-helper-Zf8nSx-t.js";import"./useThemedStyles-cVR-DtoZ.js";import"./Text-Do5dS1qg.js";import"./index-Do3x-qHF.js";import"./xml-COHihjjg.js";import"./index-Cpa-95Zj.js";import"./index-CJrLMJTa.js";const y=["CheckIn","CheckOut","Feeding","Medication","AdditionalService","Manual","Transfer"],h=p.jsx(l,{icon:u}),b={title:"Components/TodayTaskTypeBadge",component:m,args:{actionType:"CheckIn",label:"Label",icon:h,hasCareType:!1,careType:"Label",hasSecondCareType:!1,secondCareType:"Label"},argTypes:{actionType:{control:"select",options:y}}},e={},a={args:{actionType:"CheckOut"}},r={args:{actionType:"Feeding"}},o={args:{actionType:"Medication"}},s={args:{actionType:"AdditionalService"}},n={args:{actionType:"Manual"}},t={args:{actionType:"Transfer"}},c={args:{label:"Check-in",hasCareType:!0,careType:"Boarding",hasSecondCareType:!0,secondCareType:"Grooming with a very long name",style:{maxWidth:300}}},i={render:T=>p.jsx(g,{gap:3,children:y.map(d=>p.jsx(m,{...T,actionType:d},d))})},j=["CheckIn","CheckOut","Feeding","Medication","AdditionalService","Manual","Transfer","WithCareTypes","AllVariants"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source},description:{story:"Figma actionType=CheckIn.",...e.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    actionType: 'CheckOut'
  }
}`,...a.parameters?.docs?.source},description:{story:"Figma actionType=CheckOut.",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    actionType: 'Feeding'
  }
}`,...r.parameters?.docs?.source},description:{story:"Figma actionType=Feeding.",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    actionType: 'Medication'
  }
}`,...o.parameters?.docs?.source},description:{story:"Figma actionType=Medication.",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    actionType: 'AdditionalService'
  }
}`,...s.parameters?.docs?.source},description:{story:"Figma actionType=AdditionalService.",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    actionType: 'Manual'
  }
}`,...n.parameters?.docs?.source},description:{story:"Figma actionType=Manual.",...n.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    actionType: 'Transfer'
  }
}`,...t.parameters?.docs?.source},description:{story:"Figma actionType=Transfer.",...t.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Check-in',
    hasCareType: true,
    careType: 'Boarding',
    hasSecondCareType: true,
    secondCareType: 'Grooming with a very long name',
    style: {
      maxWidth: 300
    }
  }
}`,...c.parameters?.docs?.source},description:{story:"Check-in with two care types (Figma hasCareType + hasSecondCareType).",...c.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <Box gap={3}>
      {ACTION_TYPES.map(actionType => <TodayTaskTypeBadge key={actionType} {...args} actionType={actionType} />)}
    </Box>
}`,...i.parameters?.docs?.source}}};export{s as AdditionalService,i as AllVariants,e as CheckIn,a as CheckOut,r as Feeding,n as Manual,o as Medication,t as Transfer,c as WithCareTypes,j as __namedExportsOrder,b as default};
