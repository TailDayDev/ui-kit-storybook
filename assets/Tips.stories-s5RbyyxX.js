import{j as o,V as p,s as d}from"./iframe-Drba6mZ1.js";import{u as l}from"./useThemedStyles-cVR-DtoZ.js";import{T as u}from"./Text-Do5dS1qg.js";import{B as m}from"./Box-P5sGDsdo.js";import"./preload-helper-Zf8nSx-t.js";import"./index-Do3x-qHF.js";const g=e=>d.create({tipsContainer:{alignItems:"center",backgroundColor:e.colors.bg.successSoft,borderRadius:e.radius.lg,flexDirection:"row",gap:e.space[3],paddingHorizontal:e.space[4],paddingVertical:e.space[3],width:"100%"},tipsText:{flex:1,flexShrink:1,flexWrap:"wrap"}}),i=({icon:e,text:c})=>{const a=l(g);return o.jsxs(p,{style:a.tipsContainer,children:[e,o.jsx(u,{variant:"caption/regular",style:a.tipsText,children:c})]})};i.__docgenInfo={description:"Green hint banner with a leading illustration.",methods:[],displayName:"Tips",props:{icon:{required:!0,tsType:{name:"ReactNode"},description:`Leading illustration, rendered as is. The app passes a 40pt image
(formerly built inside from an image URL).`},text:{required:!0,tsType:{name:"string"},description:"Hint text (`caption/regular`), wraps."}}};const n=40,x=()=>o.jsx(m,{background:"warningSoft",radius:"full",style:{width:n,height:n}}),I={title:"Components/Tips",component:i,args:{icon:o.jsx(x,{}),text:"Keep feeding notes short and action-oriented so staff can scan them quickly."}},s={},r={args:{text:"More discounts soon."}},t={args:{icon:null}},b=["Default","ShortText","WithoutIcon"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'More discounts soon.'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    icon: null
  }
}`,...t.parameters?.docs?.source}}};export{s as Default,r as ShortText,t as WithoutIcon,b as __namedExportsOrder,I as default};
