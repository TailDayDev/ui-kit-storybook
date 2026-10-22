import{j as r,r as h}from"./iframe-Drba6mZ1.js";import{C as i,a as u}from"./ChipGroup-DVUXdYAK.js";import{B as x}from"./Box-P5sGDsdo.js";import{T as d}from"./Text-Do5dS1qg.js";import"./preload-helper-Zf8nSx-t.js";import"./index-B8j4hG7g.js";import"./extends-CF3RwP-h.js";import"./index-CdAw7h69.js";import"./index-FuSJnDjU.js";import"./index-CJrLMJTa.js";import"./BaseSkeleton-kLYet8VB.js";import"./xml-COHihjjg.js";import"./index-Cpa-95Zj.js";import"./Animated-C1wt_1Nj.js";import"./index-o-lnbjyp.js";import"./index-BPIMqECe.js";import"./index-Do3x-qHF.js";import"./useThemedStyles-cVR-DtoZ.js";import"./index-BeTpEGf2.js";import"./index-NHC-rSwp.js";import"./LoadingWrapper-DjhGEOd6.js";const c=[{id:"dogs",name:"Собаки",count:12},{id:"cats",name:"Кошки",count:4},{id:"birds",name:"Птицы"},{id:"rodents",name:"Грызуны",count:1},{id:"reptiles",name:"Рептилии",count:0}],g=({variant:p,isShowAll:v})=>{const[l,m]=h.useState(null);return v?r.jsx(i,{items:c,value:l,onChange:m,variant:p,allLabel:"Все"}):r.jsx(i,{items:c,value:l,onChange:m,variant:p,showAll:!1})},O={title:"Components/ChipGroup",component:i,args:{items:c,value:null,onChange:()=>{},allLabel:"Все",variant:"compact",isLoading:!1},argTypes:{variant:{control:"select",options:["compact","filter"]}}},a={},t={args:{value:"cats"}},o={args:{variant:"filter",value:"dogs"}},s={args:{isLoading:!0}},n={render:()=>r.jsxs(x,{gap:4,children:[r.jsx(d,{variant:"caption/regular",color:"secondary",children:"compact, with “All”"}),r.jsx(g,{variant:"compact",isShowAll:!0}),r.jsx(d,{variant:"caption/regular",color:"secondary",children:"filter, without “All”"}),r.jsx(g,{variant:"filter",isShowAll:!1})]})},e={render:()=>r.jsxs(x,{gap:4,children:[r.jsx(u,{}),r.jsx(u,{variant:"filter"})]})},R=["Playground","CompactSelected","Filter","Loading","InteractiveVariants","Skeletons"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'cats'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'filter',
    value: 'dogs'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Box gap={4}>
      <Text variant="caption/regular" color="secondary">
        compact, with “All”
      </Text>
      <Interactive variant="compact" isShowAll />
      <Text variant="caption/regular" color="secondary">
        filter, without “All”
      </Text>
      <Interactive variant="filter" isShowAll={false} />
    </Box>
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <Box gap={4}>
      <ChipGroupSkeleton />
      <ChipGroupSkeleton variant="filter" />
    </Box>
}`,...e.parameters?.docs?.source},description:{story:"Figma `ChipGroupSkeleton`.",...e.parameters?.docs?.description}}};export{t as CompactSelected,o as Filter,n as InteractiveVariants,s as Loading,a as Playground,e as Skeletons,R as __namedExportsOrder,O as default};
