import{j as e,V as t,r as u,s as m}from"./iframe-Drba6mZ1.js";import{P as d}from"./PercentageValueField-CCw7kmpX.js";import{M as g}from"./index-BeTpEGf2.js";import"./preload-helper-Zf8nSx-t.js";import"./useThemedStyles-cVR-DtoZ.js";import"./SyncedTextInput-SayiDFe8.js";import"./useNativeEchoValue-DVEVbt6b.js";import"./index-ClMYSwEP.js";import"./index-FuSJnDjU.js";import"./Text-Do5dS1qg.js";import"./index-Do3x-qHF.js";import"./extends-CF3RwP-h.js";import"./index-NHC-rSwp.js";const p=({value:r,onValueChange:n})=>e.jsxs(t,{style:s.sliderFrame,children:[e.jsx(t,{style:s.track,children:e.jsx(t,{style:[s.fill,{width:`${r}%`}]})}),e.jsx(t,{style:s.hitRow,children:[25,50,75,100].map(a=>e.jsx(g,{style:s.hit,onPress:()=>n(a)},a))})]}),E={title:"Components/PercentageValueField",component:d,args:{value:25,onChange:()=>{},renderSlider:r=>e.jsx(p,{...r})},decorators:[r=>e.jsx(t,{style:{width:343},children:e.jsx(r,{})})]},o={},i={args:{value:0}},c={args:{value:100}},h=()=>{const[r,n]=u.useState(30);return e.jsx(d,{value:r,onChange:n,renderSlider:a=>e.jsx(p,{...a})})},l={render:()=>e.jsx(h,{})},s=m.create({fill:{backgroundColor:"#7962FF",height:4},hit:{flex:1},hitRow:{...m.absoluteFillObject,flexDirection:"row"},sliderFrame:{marginVertical:32},track:{backgroundColor:"#F4EFFF",height:4,width:"100%"}}),I=["Default","Zero","Full","Interactive"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    value: 0
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: 100
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveField />
}`,...l.parameters?.docs?.source}}};export{o as Default,c as Full,l as Interactive,i as Zero,I as __namedExportsOrder,E as default};
