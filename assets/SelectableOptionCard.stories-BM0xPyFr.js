import{r as v,u as q,j as r,V as T,s as O}from"./iframe-Drba6mZ1.js";import{u as j}from"./useThemedStyles-cVR-DtoZ.js";import{T as b}from"./Text-Do5dS1qg.js";import{M as B}from"./index-BeTpEGf2.js";import{B as V}from"./Box-P5sGDsdo.js";import"./preload-helper-Zf8nSx-t.js";import"./index-Do3x-qHF.js";import"./extends-CF3RwP-h.js";import"./index-NHC-rSwp.js";const _=3,W=4,N=96,A=.6,k=e=>O.create({badge:{backgroundColor:e.colors.bg.accent,borderBottomLeftRadius:e.radius.lg,paddingHorizontal:e.space[3],paddingVertical:e.space[.5],position:"absolute",right:0,top:0},card:{borderRadius:e.radius.lg,borderWidth:e.stroke[1],overflow:"hidden",padding:e.space[4],position:"relative",width:"100%"},cardDefault:{borderColor:e.colors.border.default},cardDisabled:{opacity:A},cardSelected:{backgroundColor:e.colors.bg.accentSoft,borderColor:e.colors.bg.accent},description:{marginTop:e.space[2]},footer:{marginTop:e.space[3]},titleWithBadge:{paddingRight:N}}),S=v.memo(({title:e,description:a,badgeText:t,footer:h,isSelected:o=!1,isDisabled:y=!1,onPress:x,style:I,titleStyle:C,descriptionStyle:w,titleNumberOfLines:E=_,descriptionNumberOfLines:L=W,testID:P})=>{const R=q(),s=j(k),D=r.jsxs(T,{style:[s.card,o?s.cardSelected:s.cardDefault,y?s.cardDisabled:null,I],children:[t?r.jsx(T,{style:s.badge,children:r.jsx(b,{variant:"caption/regular",color:"inverse",numberOfLines:1,children:t})}):null,r.jsx(b,{variant:"headline/bold",color:o?"accent":"primary",style:[t?s.titleWithBadge:null,C],numberOfLines:E,children:e}),a?r.jsx(b,{variant:"caption/regular",color:o?"accent":"secondary",style:[s.description,w],numberOfLines:L,children:a}):null,h?r.jsx(T,{style:s.footer,children:h}):null]});return x?r.jsx(B,{accessibilityRole:"button",accessibilityState:{selected:o,disabled:y},disabled:y,onPress:x,testID:P,android_ripple:{color:R.colors.border.default},children:D}):D});S.displayName="SelectableOptionCard";S.__docgenInfo={description:"Selectable option card. With `onPress` it is a button reporting\n`selected`/`disabled`; without it, a static card.",methods:[],displayName:"SelectableOptionCard",props:{title:{required:!0,tsType:{name:"string"},description:"Card title (`headline/bold`)."},description:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Secondary text under the title (`caption/regular`). Hidden when empty."},badgeText:{required:!1,tsType:{name:"string"},description:'Text of the accent badge in the top-right corner (e.g. "Recommended"). Hidden when empty.'},footer:{required:!1,tsType:{name:"ReactNode"},description:"Extra content under the description."},isSelected:{required:!1,tsType:{name:"boolean"},description:"Selected state: accent border, soft accent fill, accent texts. Defaults to `false`.",defaultValue:{value:"false",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"Blocks taps and dims the card. Defaults to `false`.",defaultValue:{value:"false",computed:!1}},onPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called on tap. Without it the card is static (not pressable, no role)."},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:"Style of the card container."},titleStyle:{required:!1,tsType:{name:"StyleProp",elements:[{name:"TextStyle"}],raw:"StyleProp<TextStyle>"},description:"Style override of the title."},descriptionStyle:{required:!1,tsType:{name:"StyleProp",elements:[{name:"TextStyle"}],raw:"StyleProp<TextStyle>"},description:"Style override of the description."},titleNumberOfLines:{required:!1,tsType:{name:"number"},description:"Max title lines. Defaults to 3.",defaultValue:{value:"3",computed:!1}},descriptionNumberOfLines:{required:!1,tsType:{name:"number"},description:"Max description lines. Defaults to 4.",defaultValue:{value:"4",computed:!1}},testID:{required:!1,tsType:{name:"string"},description:"Test identifier of the pressable wrapper (only set when `onPress` is given)."}}};const Z={title:"Components/SelectableOptionCard",component:S,args:{title:"Rabies",description:"Core vaccine recommended for most dogs and cats.",isSelected:!1,isDisabled:!1,onPress:()=>{}}},i={},n={args:{isSelected:!0}},d={args:{badgeText:"Recommended"}},c={args:{badgeText:"Recommended",isSelected:!0}},l={args:{isDisabled:!0}},p={args:{isDisabled:!0,isSelected:!0}},u={args:{description:null}},m={args:{footer:r.jsx(b,{variant:"caption/medium",color:"secondary",children:"Valid for 1 year"})}},g={args:{onPress:void 0}},F=[{id:"rabies",title:"Rabies",badge:"Recommended"},{id:"bordetella",title:"Bordetella",badge:void 0}],M=()=>{const[e,a]=v.useState("rabies");return r.jsx(V,{gap:3,children:F.map(t=>r.jsx(S,{title:t.title,description:"Commonly required for boarding and daycare stays.",badgeText:t.badge,isSelected:e===t.id,onPress:()=>a(t.id)},t.id))})},f={render:()=>r.jsx(M,{})},$=["Default","Selected","WithBadge","SelectedWithBadge","Disabled","DisabledSelected","TitleOnly","WithFooter","Static","Interactive"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isSelected: true
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    badgeText: 'Recommended'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    badgeText: 'Recommended',
    isSelected: true
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    isSelected: true
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    description: null
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    footer: <Text variant="caption/medium" color="secondary">
        Valid for 1 year
      </Text>
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    onPress: undefined
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveList />
}`,...f.parameters?.docs?.source}}};export{i as Default,l as Disabled,p as DisabledSelected,f as Interactive,n as Selected,c as SelectedWithBadge,g as Static,u as TitleOnly,d as WithBadge,m as WithFooter,$ as __namedExportsOrder,Z as default};
