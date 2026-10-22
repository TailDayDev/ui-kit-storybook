import{j as n}from"./iframe-Drba6mZ1.js";import{T as i}from"./TodayTaskHeader-DO6ysqZZ.js";import{I as c}from"./Icon-Cwc6oh7S.js";import{I as m}from"./IconPawPrint-C_bXBfXe.js";import{B as p}from"./Box-P5sGDsdo.js";import"./preload-helper-Zf8nSx-t.js";import"./useThemedStyles-cVR-DtoZ.js";import"./TodayTaskTypeBadge-DD72pU-B.js";import"./Text-Do5dS1qg.js";import"./index-Do3x-qHF.js";import"./TodayTaskTime-CuetABMm.js";import"./xml-COHihjjg.js";import"./index-Cpa-95Zj.js";import"./index-CJrLMJTa.js";const t=n.jsx(c,{icon:m}),j={title:"Components/TodayTaskHeader",component:i,args:{badge:{actionType:"CheckIn",label:"Label",icon:t},time:{title:"Title",subtitle:"Subtitle",tone:"default"}},decorators:[s=>n.jsx(p,{background:"surface",children:n.jsx(s,{})})]},e={},r={args:{badge:{actionType:"Feeding",label:"Feeding",icon:t},time:{title:"09:00",subtitle:"45 min late",tone:"overdue"}}},a={args:{badge:{actionType:"CheckIn",label:"Check-in",icon:t,hasCareType:!0,careType:"Boarding",hasSecondCareType:!0,secondCareType:"Grooming and a long care name"},time:{title:"10:00",subtitle:"in 2 h"}}},o={args:{time:void 0}},v=["Default","Overdue","LongCareTypes","WithoutTime"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source},description:{story:"Figma `TodayTaskHeader`.",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    badge: {
      actionType: 'Feeding',
      label: 'Feeding',
      icon: sampleIcon
    },
    time: {
      title: '09:00',
      subtitle: '45 min late',
      tone: 'overdue'
    }
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    badge: {
      actionType: 'CheckIn',
      label: 'Check-in',
      icon: sampleIcon,
      hasCareType: true,
      careType: 'Boarding',
      hasSecondCareType: true,
      secondCareType: 'Grooming and a long care name'
    },
    time: {
      title: '10:00',
      subtitle: 'in 2 h'
    }
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    time: undefined
  }
}`,...o.parameters?.docs?.source}}};export{e as Default,a as LongCareTypes,r as Overdue,o as WithoutTime,v as __namedExportsOrder,j as default};
