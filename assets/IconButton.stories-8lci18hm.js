import{j as o}from"./iframe-Drba6mZ1.js";import{P as m}from"./PlusIcon-BjD-KlOj.js";import{I as c}from"./IconRoundButton-QinA3QVo.js";import{B as l}from"./Box-P5sGDsdo.js";import{I as d}from"./IconSquareButton-C-OyZBZP.js";import{I as b}from"./Icon-Cwc6oh7S.js";import{T as g}from"./Text-Do5dS1qg.js";import"./preload-helper-Zf8nSx-t.js";import"./xml-COHihjjg.js";import"./index-Cpa-95Zj.js";import"./index-CJrLMJTa.js";import"./IconControlButton-Bo_jLQvg.js";import"./useThemedStyles-cVR-DtoZ.js";import"./index-BeTpEGf2.js";import"./extends-CF3RwP-h.js";import"./index-NHC-rSwp.js";import"./index-CxdHYcqo.js";import"./index-Do3x-qHF.js";const S=[28,36,40],y=[40,48],x=20,s=o.jsx(b,{icon:m,size:x}),O={title:"Components/IconButton",component:c,args:{accessibilityLabel:"Add",icon:s,disabled:!1,loading:!1,size:40},argTypes:{icon:{control:!1}}},a={},t={render:e=>o.jsx(d,{...e})},p=({label:e,children:u})=>o.jsxs(l,{gap:2,children:[o.jsx(g,{variant:"body/medium",children:e}),o.jsx(l,{row:!0,gap:4,align:"center",children:u})]}),r={render:()=>o.jsxs(l,{gap:6,children:[S.map(e=>o.jsxs(p,{label:`IconRoundButton ${e}`,children:[o.jsx(c,{accessibilityLabel:"Add",icon:s,size:e}),o.jsx(c,{accessibilityLabel:"Add",icon:s,size:e,disabled:!0}),o.jsx(c,{accessibilityLabel:"Add",icon:s,size:e,loading:!0})]},`round-${e}`)),y.map(e=>o.jsxs(p,{label:`IconSquareButton ${e}`,children:[o.jsx(d,{accessibilityLabel:"Add",icon:s,size:e}),o.jsx(d,{accessibilityLabel:"Add",icon:s,size:e,disabled:!0}),o.jsx(d,{accessibilityLabel:"Add",icon:s,size:e,loading:!0})]},`square-${e}`))]})},i={args:{disabled:!0}},n={args:{loading:!0}},T=["Round","Square","Matrix","Disabled","Loading"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source},description:{story:"Round, size 40. Press it to see the 0.9 pressed opacity.",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <IconSquareButton {...args} />
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Box gap={6}>
      {ROUND_SIZES.map(size => <StateRow key={\`round-\${size}\`} label={\`IconRoundButton \${size}\`}>
          <IconRoundButton accessibilityLabel="Add" icon={glyph} size={size} />
          <IconRoundButton accessibilityLabel="Add" icon={glyph} size={size} disabled />
          <IconRoundButton accessibilityLabel="Add" icon={glyph} size={size} loading />
        </StateRow>)}
      {SQUARE_SIZES.map(size => <StateRow key={\`square-\${size}\`} label={\`IconSquareButton \${size}\`}>
          <IconSquareButton accessibilityLabel="Add" icon={glyph} size={size} />
          <IconSquareButton accessibilityLabel="Add" icon={glyph} size={size} disabled />
          <IconSquareButton accessibilityLabel="Add" icon={glyph} size={size} loading />
        </StateRow>)}
    </Box>
}`,...r.parameters?.docs?.source},description:{story:"Every size × default / disabled / loading.",...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...n.parameters?.docs?.source}}};export{i as Disabled,n as Loading,r as Matrix,a as Round,t as Square,T as __namedExportsOrder,O as default};
