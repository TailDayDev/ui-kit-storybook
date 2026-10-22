import{j as e,l as t,V as d}from"./iframe-Drba6mZ1.js";import{B as a}from"./Box-P5sGDsdo.js";import{T as o}from"./Text-Do5dS1qg.js";import"./preload-helper-Zf8nSx-t.js";import"./index-Do3x-qHF.js";const w={title:"Foundations/Tokens"},h=({name:r,value:n})=>e.jsxs(a,{row:!0,gap:3,align:"center",children:[e.jsx(d,{style:{width:40,height:40,borderRadius:t.radius.sm,backgroundColor:n,borderWidth:t.stroke[1],borderColor:t.colors.border.default}}),e.jsxs(a,{children:[e.jsx(o,{variant:"body/medium",children:r}),e.jsx(o,{variant:"caption/regular",color:"secondary",children:n})]})]}),s={render:()=>e.jsx(a,{gap:4,children:Object.entries(t.colors).map(([r,n])=>e.jsxs(a,{gap:2,children:[e.jsx(o,{variant:"headline/bold",children:r}),Object.entries(n).map(([p,g])=>e.jsx(h,{name:`${r}.${p}`,value:g},p))]},r))})},i={render:()=>e.jsx(a,{gap:2,children:Object.entries(t.palette).map(([r,n])=>e.jsx(h,{name:r,value:n},r))})},c={render:()=>e.jsx(a,{gap:2,children:Object.entries(t.space).filter(([,r])=>r>0).map(([r,n])=>e.jsxs(a,{row:!0,gap:3,align:"center",children:[e.jsx(o,{variant:"caption/regular",style:{width:64},children:`space[${r}] ${n}`}),e.jsx(d,{style:{width:n,height:12,backgroundColor:t.colors.bg.accent}})]},r))})},l={render:()=>e.jsxs(a,{gap:4,children:[e.jsx(a,{row:!0,gap:3,children:Object.entries(t.radius).map(([r,n])=>e.jsxs(a,{align:"center",gap:1,children:[e.jsx(d,{style:{width:56,height:56,borderRadius:Math.min(n,28),backgroundColor:t.colors.bg.accentSoft}}),e.jsx(o,{variant:"caption/regular",children:r})]},r))}),e.jsx(a,{row:!0,gap:4,children:Object.keys(t.shadows).map(r=>e.jsxs(a,{align:"center",gap:2,children:[e.jsx(a,{background:"surface",radius:"md",shadow:r,style:{width:72,height:56}}),e.jsx(o,{variant:"caption/regular",children:r})]},r))})]})},y=["SemanticColors","Palette","Spacing","RadiusAndShadows"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Box gap={4}>
      {Object.entries(lightTheme.colors).map(([group, roles]) => <Box key={group} gap={2}>
          <Text variant="headline/bold">{group}</Text>
          {Object.entries(roles).map(([role, value]) => <Swatch key={role} name={\`\${group}.\${role}\`} value={value} />)}
        </Box>)}
    </Box>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Box gap={2}>
      {Object.entries(lightTheme.palette).map(([name, value]) => <Swatch key={name} name={name} value={value} />)}
    </Box>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Box gap={2}>
      {Object.entries(lightTheme.space).filter(([, value]) => value > 0).map(([key, value]) => <Box key={key} row gap={3} align="center">
            <Text variant="caption/regular" style={{
        width: 64
      }}>
              {\`space[\${key}] \${value}\`}
            </Text>
            <View style={{
        width: value,
        height: 12,
        backgroundColor: lightTheme.colors.bg.accent
      }} />
          </Box>)}
    </Box>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Box gap={4}>
      <Box row gap={3}>
        {Object.entries(lightTheme.radius).map(([key, value]) => <Box key={key} align="center" gap={1}>
            <View style={{
          width: 56,
          height: 56,
          borderRadius: Math.min(value, 28),
          backgroundColor: lightTheme.colors.bg.accentSoft
        }} />
            <Text variant="caption/regular">{key}</Text>
          </Box>)}
      </Box>
      <Box row gap={4}>
        {Object.keys(lightTheme.shadows).map(key => <Box key={key} align="center" gap={2}>
            <Box background="surface" radius="md" shadow={key as keyof typeof lightTheme.shadows} style={{
          width: 72,
          height: 56
        }} />
            <Text variant="caption/regular">{key}</Text>
          </Box>)}
      </Box>
    </Box>
}`,...l.parameters?.docs?.source}}};export{i as Palette,l as RadiusAndShadows,s as SemanticColors,c as Spacing,y as __namedExportsOrder,w as default};
