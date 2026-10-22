import{j as e,r as l}from"./iframe-Drba6mZ1.js";import{L as u}from"./LoadingWrapper-DjhGEOd6.js";import{B as g}from"./Box-P5sGDsdo.js";import{T as d}from"./Text-Do5dS1qg.js";import{B as m}from"./BaseSkeleton-kLYet8VB.js";import"./preload-helper-Zf8nSx-t.js";import"./Animated-C1wt_1Nj.js";import"./index-CJrLMJTa.js";import"./extends-CF3RwP-h.js";import"./index-o-lnbjyp.js";import"./index-B8j4hG7g.js";import"./index-CdAw7h69.js";import"./index-FuSJnDjU.js";import"./index-BPIMqECe.js";import"./index-Cpa-95Zj.js";import"./index-Do3x-qHF.js";import"./xml-COHihjjg.js";import"./useThemedStyles-cVR-DtoZ.js";const x=1500,p=48,j=240,f=()=>e.jsxs(g,{gap:2,children:[e.jsx(m,{height:p}),e.jsx(m,{height:p}),e.jsx(m,{height:p})]}),h=()=>e.jsxs(g,{gap:2,children:[e.jsx(d,{children:"First row"}),e.jsx(d,{children:"Second row"}),e.jsx(d,{children:"Third row"})]}),S=r=>e.jsx(u,{...r}),M={title:"Components/LoadingWrapper",component:S,args:{loading:!0,skeleton:e.jsx(f,{}),children:e.jsx(h,{}),fitContent:!1},decorators:[r=>e.jsx(g,{style:{height:j},children:e.jsx(r,{})})]},t={},a={args:{loading:!1}},n={args:{loading:!1,fitContent:!0}},T=()=>{const[r,o]=l.useState(!0);return l.useEffect(()=>{const c=setTimeout(()=>o(!1),x);return()=>clearTimeout(c)},[]),e.jsx(u,{loading:r,skeleton:e.jsx(f,{}),children:e.jsx(h,{})})},s={render:()=>e.jsx(T,{})},R=()=>{const[r,o]=l.useState(!1),c=()=>{o(!0),setTimeout(()=>o(!1),x)};return e.jsx(u,{loading:!1,skeleton:e.jsx(f,{}),enablePullToRefresh:!0,refreshing:r,onRetry:c,children:e.jsx(h,{})})},i={render:()=>e.jsx(R,{})},N=["Loading","Loaded","FitContent","CrossFade","PullToRefresh"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false,
    fitContent: true
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <CrossFadeDemo />
}`,...s.parameters?.docs?.source},description:{story:"Skeleton fades into the content after 1.5 s (iOS/web; Android switches instantly).",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <PullToRefreshDemo />
}`,...i.parameters?.docs?.source}}};export{s as CrossFade,n as FitContent,a as Loaded,t as Loading,i as PullToRefresh,N as __namedExportsOrder,M as default};
