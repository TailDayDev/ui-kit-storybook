import{j as e}from"./iframe-Drba6mZ1.js";import{R as i}from"./Radio-COxHwmuU.js";import{B as n}from"./Box-P5sGDsdo.js";import{T as c}from"./Text-Do5dS1qg.js";import"./preload-helper-Zf8nSx-t.js";import"./useThemedStyles-cVR-DtoZ.js";import"./index-Do3x-qHF.js";const g={title:"Components/Radio",component:i,args:{isActive:!0,size:24,dotSize:12}},o={},a={args:{isActive:!1}},r={render:()=>e.jsx(n,{gap:4,children:[[20,10],[24,12],[32,16]].map(([s,t])=>e.jsxs(n,{row:!0,gap:4,align:"center",children:[e.jsx(i,{isActive:!1,size:s,dotSize:t}),e.jsx(i,{isActive:!0,size:s,dotSize:t}),e.jsxs(c,{variant:"caption/regular",color:"secondary",children:["size ",s,", dot ",t]})]},s))})},v=["Active","Inactive","Sizes"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isActive: false
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Box gap={4}>
      {([[20, 10], [24, 12], [32, 16]] as const).map(([size, dotSize]) => <Box key={size} row gap={4} align="center">
          <Radio isActive={false} size={size} dotSize={dotSize} />
          <Radio isActive size={size} dotSize={dotSize} />
          <Text variant="caption/regular" color="secondary">
            size {size}, dot {dotSize}
          </Text>
        </Box>)}
    </Box>
}`,...r.parameters?.docs?.source},description:{story:"Figma `Radio` size=20 (dot 10) next to the app default size=24 and the 32/16 used in wizards.",...r.parameters?.docs?.description}}};export{o as Active,a as Inactive,r as Sizes,v as __namedExportsOrder,g as default};
