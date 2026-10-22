import{j as s}from"./iframe-Drba6mZ1.js";import{T as e}from"./TabBarItem-CGG9YrXI.js";import{I as i,a as n,b as d,c as u}from"./IconTabToday-DR7JxeUL.js";import{B as t}from"./Box-P5sGDsdo.js";import"./preload-helper-Zf8nSx-t.js";import"./useThemedStyles-cVR-DtoZ.js";import"./index-BeTpEGf2.js";import"./extends-CF3RwP-h.js";import"./index-NHC-rSwp.js";import"./Icon-Cwc6oh7S.js";import"./xml-COHihjjg.js";import"./index-Cpa-95Zj.js";import"./index-CJrLMJTa.js";const y={title:"Components/TabBarItem",component:e,args:{icon:i,isFocused:!0,hasBadge:!1,accessibilityLabel:"Today",onPress:()=>{}}},o={args:{isFocused:!0}},r={args:{isFocused:!1}},c={render:a=>s.jsxs(t,{gap:2,children:[s.jsxs(t,{row:!0,children:[s.jsx(e,{...a,isFocused:!0}),s.jsx(e,{...a,isFocused:!1}),s.jsx(e,{...a,isFocused:!0,hasBadge:!0}),s.jsx(e,{...a,isFocused:!1,hasBadge:!0})]}),s.jsxs(t,{row:!0,children:[s.jsx(e,{...a,icon:i,isFocused:!1}),s.jsx(e,{...a,icon:n,isFocused:!1}),s.jsx(e,{...a,icon:d,isFocused:!1}),s.jsx(e,{...a,icon:u,isFocused:!1})]})]})},w=["IsFocusedTrue","IsFocusedFalse","AllVariants"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isFocused: true
  }
}`,...o.parameters?.docs?.source},description:{story:"Figma `isFocused=true`.",...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    isFocused: false
  }
}`,...r.parameters?.docs?.source},description:{story:"Figma `isFocused=false`.",...r.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Box gap={2}>
      <Box row>
        <TabBarItem {...args} isFocused />
        <TabBarItem {...args} isFocused={false} />
        <TabBarItem {...args} isFocused hasBadge />
        <TabBarItem {...args} isFocused={false} hasBadge />
      </Box>
      <Box row>
        <TabBarItem {...args} icon={IconTabToday} isFocused={false} />
        <TabBarItem {...args} icon={IconTabCalendar} isFocused={false} />
        <TabBarItem {...args} icon={IconTabService} isFocused={false} />
        <TabBarItem {...args} icon={IconTabMenu} isFocused={false} />
      </Box>
    </Box>
}`,...c.parameters?.docs?.source},description:{story:"Both variants, with and without the badge, across the tab icons.",...c.parameters?.docs?.description}}};export{c as AllVariants,r as IsFocusedFalse,o as IsFocusedTrue,w as __namedExportsOrder,y as default};
