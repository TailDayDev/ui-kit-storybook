import{j as c}from"./iframe-Drba6mZ1.js";import{T as m}from"./TaskSheetContent-CvY5PHcR.js";import{I as d}from"./IconCalendarDays-DX291SwN.js";import{I as g}from"./IconUndo2-B39qdSbI.js";import{I as S,a as R}from"./IconClockEditOutline-DlmcpalE.js";import{B as h}from"./Box-P5sGDsdo.js";import"./preload-helper-Zf8nSx-t.js";import"./useThemedStyles-cVR-DtoZ.js";import"./TaskSheetRow-C3ykQ86d.js";import"./Pressable-CfC83KfU.js";import"./index-BeTpEGf2.js";import"./extends-CF3RwP-h.js";import"./index-NHC-rSwp.js";import"./Text-Do5dS1qg.js";import"./index-Do3x-qHF.js";import"./Icon-Cwc6oh7S.js";import"./IconTrash2-Cc7moD6f.js";import"./xml-COHihjjg.js";import"./index-Cpa-95Zj.js";import"./index-CJrLMJTa.js";const s=()=>{},p=[{key:"booking",label:"Label",icon:d,onPress:s}],w=[{key:"uncomplete",label:"Label",icon:g,onPress:s},{key:"booking",label:"Label",icon:d,onPress:s}],l=[{key:"noShow",label:"Label",icon:S,onPress:s},{key:"time",label:"Label",icon:R,onPress:s},{key:"booking",label:"Label",icon:d,onPress:s}],u={key:"delete",label:"Удалить",onPress:s,isDestructive:!0},A={title:"Components/TaskSheetContent",component:m,args:{rows:p}},e={name:"rows=1",args:{rows:p}},r={name:"rows=2",args:{rows:w}},o={name:"rows=3",args:{rows:l}},t={name:"rows=1, hasDestructive=true",args:{rows:[...p,u]}},a={name:"rows=2, hasDestructive=true",args:{rows:[...w,u]}},n={name:"rows=3, hasDestructive=true",args:{rows:[...l,u]}},i={render:()=>c.jsxs(h,{gap:6,children:[c.jsx(m,{rows:p}),c.jsx(m,{rows:w}),c.jsx(m,{rows:[...l,u]})]})},V=["Rows1","Rows2","Rows3","Rows1HasDestructive","Rows2HasDestructive","Rows3HasDestructive","AllVariants"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'rows=1',
  args: {
    rows: ROWS_1
  }
}`,...e.parameters?.docs?.source},description:{story:"Figma `TaskSheetContent` rows=1, hasDestructive=false.",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'rows=2',
  args: {
    rows: ROWS_2
  }
}`,...r.parameters?.docs?.source},description:{story:"Figma `TaskSheetContent` rows=2, hasDestructive=false.",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'rows=3',
  args: {
    rows: ROWS_3
  }
}`,...o.parameters?.docs?.source},description:{story:"Figma `TaskSheetContent` rows=3, hasDestructive=false.",...o.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'rows=1, hasDestructive=true',
  args: {
    rows: [...ROWS_1, DELETE_ROW]
  }
}`,...t.parameters?.docs?.source},description:{story:"Figma `TaskSheetContent` hasDestructive=true (rows=1).",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'rows=2, hasDestructive=true',
  args: {
    rows: [...ROWS_2, DELETE_ROW]
  }
}`,...a.parameters?.docs?.source},description:{story:"Figma `TaskSheetContent` hasDestructive=true (rows=2).",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'rows=3, hasDestructive=true',
  args: {
    rows: [...ROWS_3, DELETE_ROW]
  }
}`,...n.parameters?.docs?.source},description:{story:"Figma `TaskSheetContent` hasDestructive=true (rows=3).",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Box gap={6}>
      <TaskSheetContent rows={ROWS_1} />
      <TaskSheetContent rows={ROWS_2} />
      <TaskSheetContent rows={[...ROWS_3, DELETE_ROW]} />
    </Box>
}`,...i.parameters?.docs?.source}}};export{i as AllVariants,e as Rows1,t as Rows1HasDestructive,r as Rows2,a as Rows2HasDestructive,o as Rows3,n as Rows3HasDestructive,V as __namedExportsOrder,A as default};
