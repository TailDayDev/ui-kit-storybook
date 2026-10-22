import{j as t}from"./iframe-Drba6mZ1.js";import{P as p}from"./PetOwnerAvatar-CaYYu9Jv.js";import{B as c}from"./Box-P5sGDsdo.js";import{N as m}from"./NoImagePlaceholder-DEBvwDl8.js";import"./preload-helper-Zf8nSx-t.js";import"./useThemedStyles-cVR-DtoZ.js";import"./PetAvatar-BB4u9InR.js";import"./index-BPIMqECe.js";import"./extends-CF3RwP-h.js";import"./index-Cpa-95Zj.js";import"./EmptyProfileImage-BK98bpa1.js";import"./Text-Do5dS1qg.js";import"./index-Do3x-qHF.js";import"./index-CxdHYcqo.js";const d=t.jsx(m,{renderImage:()=>t.jsx(c,{flex:!0,background:"subtle",radius:"sm"})}),A={title:"Components/PetOwnerAvatar",component:p,args:{petPhotoUrl:"https://picsum.photos/id/237/112/112",ownerFirstName:"Anna",ownerLastName:"Cooper",petPlaceholder:d}},r={},o={args:{ownerPhotoUrl:"https://picsum.photos/id/64/48/48"}},s={args:{petPhotoUrl:null}},a={args:{petPhotoUrl:null,ownerPhotoUrl:null}},n={render:i=>t.jsxs(c,{padding:4,background:"surface",row:!0,gap:4,children:[t.jsx(p,{...i}),t.jsx(p,{...i,ownerPhotoUrl:"https://picsum.photos/id/64/48/48"})]})},e={args:{size:64,petPhotoUrl:null}},F=["OwnerInitials","OwnerPhoto","NoPetPhoto","NoPhotos","OnSurface","FigmaSize"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source},description:{story:"Figma hasPhoto=false: owner initials in the badge.",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ownerPhotoUrl: 'https://picsum.photos/id/64/48/48'
  }
}`,...o.parameters?.docs?.source},description:{story:"Figma hasPhoto=true: owner photo in the badge.",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    petPhotoUrl: null
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    petPhotoUrl: null,
    ownerPhotoUrl: null
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Box padding={4} background="surface" row gap={4}>
      <PetOwnerAvatar {...args} />
      <PetOwnerAvatar {...args} ownerPhotoUrl="https://picsum.photos/id/64/48/48" />
    </Box>
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    size: 64,
    petPhotoUrl: null
  }
}`,...e.parameters?.docs?.source},description:{story:"Figma `PetOwnerAvatar`: 64pt photo, radius 12, `body/regular` initials.",...e.parameters?.docs?.description}}};export{e as FigmaSize,s as NoPetPhoto,a as NoPhotos,n as OnSurface,r as OwnerInitials,o as OwnerPhoto,F as __namedExportsOrder,A as default};
