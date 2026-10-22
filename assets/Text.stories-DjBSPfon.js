import{j as r,l as i}from"./iframe-Drba6mZ1.js";import{T as n}from"./Text-Do5dS1qg.js";import{B as c}from"./Box-P5sGDsdo.js";import"./preload-helper-Zf8nSx-t.js";import"./index-Do3x-qHF.js";const p=Object.entries(i.typography).flatMap(([o,e])=>Object.keys(e).map(l=>`${o}/${l}`)),h={title:"Primitives/Text",component:n,args:{children:"Барон — корм на сегодня",variant:"body/regular"},argTypes:{variant:{control:"select",options:p},color:{control:"select",options:Object.keys(i.colors.text)}}},a={},t={render:o=>r.jsx(c,{gap:3,children:p.map(e=>r.jsxs(c,{gap:1,children:[r.jsx(n,{variant:"caption/regular",color:"secondary",children:e}),r.jsx(n,{...o,variant:e})]},e))})},s={render:o=>r.jsx(c,{gap:2,children:Object.keys(i.colors.text).map(e=>r.jsx(c,{background:e==="inverse"?"accent":void 0,padding:1,children:r.jsx(n,{...o,color:e,children:`text.${e}`})},e))})},j=["Default","AllVariants","Colors"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Box gap={3}>
      {VARIANTS.map(variant => <Box key={variant} gap={1}>
          <Text variant="caption/regular" color="secondary">
            {variant}
          </Text>
          <Text {...args} variant={variant} />
        </Box>)}
    </Box>
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Box gap={2}>
      {(Object.keys(lightTheme.colors.text) as (keyof typeof lightTheme.colors.text)[]).map(color => <Box key={color} background={color === 'inverse' ? 'accent' : undefined} padding={1}>
          <Text {...args} color={color}>
            {\`text.\${color}\`}
          </Text>
        </Box>)}
    </Box>
}`,...s.parameters?.docs?.source}}};export{t as AllVariants,s as Colors,a as Default,j as __namedExportsOrder,h as default};
