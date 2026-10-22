import{j as p}from"./iframe-Drba6mZ1.js";import{E as u,P}from"./EmptyProfileImage-BK98bpa1.js";import{B as g}from"./Box-P5sGDsdo.js";import"./preload-helper-Zf8nSx-t.js";import"./Text-Do5dS1qg.js";import"./index-Do3x-qHF.js";import"./index-CxdHYcqo.js";import"./extends-CF3RwP-h.js";import"./index-BPIMqECe.js";import"./index-Cpa-95Zj.js";const m="https://picsum.photos/id/64/192/192",h=Object.keys(P),L={title:"Components/EmptyProfileImage",component:u,args:{firstName:"Anna",lastName:"Cooper",size:"l",shape:"square"},argTypes:{size:{control:"select",options:h},shape:{control:"inline-radio",options:["square","circle"]}}},r={},s={args:{shape:"circle"}},o={args:{imageUrl:m}},a={args:{imageUrl:"https://invalid.example/photo.jpg"}},t={args:{loading:!0}},i={args:{loading:!0,imageUrl:m}},n={args:{backgroundColor:"#F4EFFF",initialsColor:"#7962FF"}},e={render:S=>p.jsx(g,{gap:3,children:["square","circle"].map(l=>p.jsx(g,{row:!0,gap:3,align:"center",children:h.map(d=>p.jsx(u,{...S,size:d,shape:l},d))},l))})},c={args:{imageUrl:m},render:e.render},j=["Initials","Circle","WithPhoto","BrokenPhoto","Loading","LoadingWithPhoto","CustomColors","Sizes","SizesWithPhoto"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source},description:{story:"Figma `EmptyProfileImage`: 56×56, radius 8, initials headline/bold.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    shape: 'circle'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    imageUrl: SAMPLE_PHOTO
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://invalid.example/photo.jpg'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    imageUrl: SAMPLE_PHOTO
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    backgroundColor: '#F4EFFF',
    initialsColor: '#7962FF'
  }
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => <Box gap={3}>
      {(['square', 'circle'] as const).map(shape => <Box key={shape} row gap={3} align="center">
          {SIZE_KEYS.map(size => <EmptyProfileImage key={size} {...args} size={size} shape={shape} />)}
        </Box>)}
    </Box>
}`,...e.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    imageUrl: SAMPLE_PHOTO
  },
  render: Sizes.render
}`,...c.parameters?.docs?.source}}};export{a as BrokenPhoto,s as Circle,n as CustomColors,r as Initials,t as Loading,i as LoadingWithPhoto,e as Sizes,c as SizesWithPhoto,o as WithPhoto,j as __namedExportsOrder,L as default};
