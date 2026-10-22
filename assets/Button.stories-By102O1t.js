import{j as e}from"./iframe-Drba6mZ1.js";import{B as r}from"./Button-CkI-qFPZ.js";import{B as o}from"./Box-P5sGDsdo.js";import{T as u}from"./Text-Do5dS1qg.js";import"./preload-helper-Zf8nSx-t.js";import"./useThemedStyles-cVR-DtoZ.js";import"./index-Do3x-qHF.js";import"./index-BeTpEGf2.js";import"./extends-CF3RwP-h.js";import"./index-NHC-rSwp.js";import"./index-CxdHYcqo.js";import"./index-nQAgfKya.js";import"./index-CdAw7h69.js";import"./index-FuSJnDjU.js";const p=["default","light","danger","dangerSimple","secondary","green","softGray","transparent","edit","link","main"],g=["extraSmall","small","medium","large"],P={title:"Components/Button",component:r,args:{title:"Сохранить",onPress:()=>{},style:"default",size:"medium",disabled:!1,loading:!1},argTypes:{style:{control:"select",options:p},size:{control:"select",options:g}}},n={},a={render:t=>e.jsxs(o,{gap:3,children:[e.jsx(r,{...t,style:"default"}),e.jsx(r,{...t,style:"light"}),e.jsx(r,{...t,style:"danger",title:"Удалить"})]})},i={render:t=>e.jsx(o,{gap:3,children:p.map(s=>e.jsxs(o,{gap:1,children:[e.jsx(u,{variant:"caption/regular",color:"secondary",children:s}),e.jsx(r,{...t,style:s})]},s))})},l={render:t=>e.jsx(o,{gap:3,children:g.map(s=>e.jsx(r,{...t,size:s,title:s},s))})},c={render:t=>e.jsxs(o,{gap:3,children:[e.jsx(r,{...t,title:"Default"}),e.jsx(r,{...t,title:"Disabled",disabled:!0}),e.jsx(r,{...t,title:"Loading",loading:!0}),e.jsx(r,{...t,title:"Light loading",style:"light",loading:!0}),e.jsx(r,{...t,title:"Rounded",isRounded:!0})]})},d={render:t=>e.jsxs(o,{gap:3,children:[e.jsx(r,{...t,icon:e.jsx(u,{color:"inverse",children:"+"})}),e.jsx(r,{...t,icon:e.jsx(u,{color:"inverse",children:"→"}),iconPosition:"right"}),e.jsx(r,{...t,title:"",accessibilityLabel:"Добавить",icon:e.jsx(u,{color:"inverse",children:"+"})})]})},R=["Playground","FigmaStyles","AllStyles","Sizes","States","WithIcon"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Box gap={3}>
      <Button {...args} style="default" />
      <Button {...args} style="light" />
      <Button {...args} style="danger" title="Удалить" />
    </Box>
}`,...a.parameters?.docs?.source},description:{story:"Figma `Button`: default / light / red (`danger`).",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <Box gap={3}>
      {STYLES.map(style => <Box key={style} gap={1}>
          <Text variant="caption/regular" color="secondary">
            {style}
          </Text>
          <Button {...args} style={style} />
        </Box>)}
    </Box>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <Box gap={3}>
      {SIZES.map(size => <Button key={size} {...args} size={size} title={size} />)}
    </Box>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Box gap={3}>
      <Button {...args} title="Default" />
      <Button {...args} title="Disabled" disabled />
      <Button {...args} title="Loading" loading />
      <Button {...args} title="Light loading" style="light" loading />
      <Button {...args} title="Rounded" isRounded />
    </Box>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Box gap={3}>
      <Button {...args} icon={<Text color="inverse">+</Text>} />
      <Button {...args} icon={<Text color="inverse">→</Text>} iconPosition="right" />
      <Button {...args} title="" accessibilityLabel="Добавить" icon={<Text color="inverse">+</Text>} />
    </Box>
}`,...d.parameters?.docs?.source}}};export{i as AllStyles,a as FigmaStyles,n as Playground,l as Sizes,c as States,d as WithIcon,R as __namedExportsOrder,P as default};
