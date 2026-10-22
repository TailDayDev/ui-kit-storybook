import{j as o}from"./iframe-Drba6mZ1.js";import{P as n}from"./PetPickerRow-CdsUdY1h.js";import{B as c}from"./Box-P5sGDsdo.js";import{I as p}from"./Icon-Cwc6oh7S.js";import{I as l}from"./IconPawPrint-C_bXBfXe.js";import"./preload-helper-Zf8nSx-t.js";import"./useThemedStyles-cVR-DtoZ.js";import"./Pressable-CfC83KfU.js";import"./index-BeTpEGf2.js";import"./extends-CF3RwP-h.js";import"./index-NHC-rSwp.js";import"./PetOwnerAvatar-CaYYu9Jv.js";import"./PetAvatar-BB4u9InR.js";import"./index-BPIMqECe.js";import"./index-Cpa-95Zj.js";import"./EmptyProfileImage-BK98bpa1.js";import"./Text-Do5dS1qg.js";import"./index-Do3x-qHF.js";import"./index-CxdHYcqo.js";import"./TodayPlacementList-CyKkxY7P.js";import"./Radio-COxHwmuU.js";import"./xml-COHihjjg.js";import"./index-CJrLMJTa.js";const d=()=>{},i=o.jsx(p,{icon:l,size:16}),E={title:"Components/PetPickerRow",component:n,args:{name:"Title",meta:"Subtitle",placements:[{title:"Label",image:i},{title:"Label",image:i}],avatar:{petPhotoUrl:"https://picsum.photos/id/237/128/128",ownerFirstName:"Robert",ownerLastName:"Lewis",ownerPhotoUrl:"https://picsum.photos/id/64/48/48"},isSelected:!1,onPress:d}},e={name:"isSelected=false"},t={name:"isSelected=true",args:{isSelected:!0}},r={args:{name:"Bella",meta:"Такса",placements:[{title:"Standard Kennel",image:i}],avatar:{petPhotoUrl:"https://picsum.photos/id/237/128/128",ownerFirstName:"Robert",ownerLastName:"Lewis"}}},s={args:{name:"Rocky",meta:null,placements:[]}},a={render:m=>o.jsxs(c,{gap:4,children:[o.jsx(n,{...m,isSelected:!1}),o.jsx(n,{...m,isSelected:!0})]})},K=["IsSelectedFalse","IsSelectedTrue","OnePlacement","NameOnly","AllVariants"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'isSelected=false'
}`,...e.parameters?.docs?.source},description:{story:"Figma `PetPickerRow` isSelected=false.",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'isSelected=true',
  args: {
    isSelected: true
  }
}`,...t.parameters?.docs?.source},description:{story:"Figma `PetPickerRow` isSelected=true.",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Bella',
    meta: 'Такса',
    placements: [{
      title: 'Standard Kennel',
      image: sampleImage
    }],
    avatar: {
      petPhotoUrl: 'https://picsum.photos/id/237/128/128',
      ownerFirstName: 'Robert',
      ownerLastName: 'Lewis'
    }
  }
}`,...r.parameters?.docs?.source},description:{story:"One placement, owner initials instead of a photo.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Rocky',
    meta: null,
    placements: []
  }
}`,...s.parameters?.docs?.source},description:{story:"App data today: no breed, no placement.",...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Box gap={4}>
      <PetPickerRow {...args} isSelected={false} />
      <PetPickerRow {...args} isSelected />
    </Box>
}`,...a.parameters?.docs?.source}}};export{a as AllVariants,e as IsSelectedFalse,t as IsSelectedTrue,s as NameOnly,r as OnePlacement,K as __namedExportsOrder,E as default};
