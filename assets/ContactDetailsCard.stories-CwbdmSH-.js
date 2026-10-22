import{j as r,V as n,s as V}from"./iframe-Drba6mZ1.js";import{u as R}from"./useThemedStyles-cVR-DtoZ.js";import{C}from"./Card-CrDEn9J4.js";import{T as h}from"./Text-Do5dS1qg.js";import{L as H}from"./LabeledDetailRow-CWdb0yK2.js";import{B as I}from"./Button-CkI-qFPZ.js";import"./preload-helper-Zf8nSx-t.js";import"./index-BeTpEGf2.js";import"./extends-CF3RwP-h.js";import"./index-NHC-rSwp.js";import"./index-Do3x-qHF.js";import"./index-CxdHYcqo.js";import"./index-nQAgfKya.js";import"./index-CdAw7h69.js";import"./index-FuSJnDjU.js";const M=e=>V.create({footer:{marginTop:e.space[4]},header:{marginBottom:e.space[4]},headerDivider:{backgroundColor:e.colors.border.default,height:e.stroke[1],width:"100%"},headerWithDivider:{gap:e.space[3],marginBottom:e.space[3]}}),W=e=>"message"in e,g=e=>{const{disabled:a,title:w,testID:f,withShadow:x=!1,header:v,hasHeaderDivider:y=!1,footer:S,onPress:b}=e,t=R(M);if(W(e))return r.jsx(C,{title:w,disabled:a,testID:f,withShadow:x,onPress:b,children:r.jsx(h,{color:"secondary",children:e.message})});const{emptyText:j,rows:o}=e,D=y&&o.length>0;return r.jsxs(C,{title:w,disabled:a,testID:f,withShadow:x,onPress:b,children:[v?r.jsxs(n,{style:[t.header,D?t.headerWithDivider:null],children:[v,D?r.jsx(n,{style:t.headerDivider}):null]}):null,o.length?r.jsx(n,{children:o.map((s,T)=>r.jsx(H,{label:s.label,value:s.value,description:s.description,isLast:T===o.length-1,isValueNarrow:s.isValueNarrow,onPress:s.onPress,onValuePress:s.onValuePress,testID:s.testID,valueTestID:s.valueTestID},s.id))}):r.jsx(h,{color:"secondary",children:j}),S?r.jsx(n,{style:t.footer,children:S}):null]})};g.__docgenInfo={description:"Card with label / value contact rows (or a message / empty text).",methods:[],displayName:"ContactDetailsCard"};const P=[{id:"phone",label:"Phone",value:"+373 60 112 233"},{id:"email",label:"Email",value:"owner@example.com"},{id:"address",label:"Address",value:"Strada Ștefan cel Mare 123, Chișinău",description:"Ring the bell twice",isValueNarrow:!0}],B=e=>r.jsx(g,{...e}),X={title:"Components/ContactDetailsCard",component:B,args:{title:"Owner contacts",emptyText:"No contacts added",rows:P,withShadow:!1}},i={},d={args:{rows:[]}},l={render:({title:e,withShadow:a})=>r.jsx(g,{title:e,withShadow:a,message:"Contacts are hidden for your role"})},c={args:{header:r.jsx(h,{variant:"headline/medium",children:"Maria Popescu"}),hasHeaderDivider:!0,footer:r.jsx(I,{title:"Call",onPress:()=>{}})}},m={args:{withShadow:!0,onPress:()=>{}}},u={args:{withShadow:!0,disabled:!0,onPress:()=>{}}},p={args:{rows:P.map(e=>({...e,onValuePress:()=>{}}))}},Y=["Rows","Empty","Message","WithHeaderAndFooter","Pressable","Disabled","TappableValues"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    rows: []
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: ({
    title,
    withShadow
  }) => <ContactDetailsCard title={title} withShadow={withShadow} message="Contacts are hidden for your role" />
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    header: <Text variant="headline/medium">Maria Popescu</Text>,
    hasHeaderDivider: true,
    footer: <Button title="Call" onPress={() => undefined} />
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    withShadow: true,
    onPress: () => undefined
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    withShadow: true,
    disabled: true,
    onPress: () => undefined
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    rows: ROWS.map(row => ({
      ...row,
      onValuePress: () => undefined
    }))
  }
}`,...p.parameters?.docs?.source}}};export{u as Disabled,d as Empty,l as Message,m as Pressable,i as Rows,p as TappableValues,c as WithHeaderAndFooter,Y as __namedExportsOrder,X as default};
