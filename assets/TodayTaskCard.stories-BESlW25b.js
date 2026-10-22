import{j as e}from"./iframe-Drba6mZ1.js";import{T as u}from"./TodayTaskCard-B019iMtz.js";import{B as l}from"./Box-P5sGDsdo.js";import{I as c}from"./Icon-Cwc6oh7S.js";import{I as h}from"./IconPawPrint-C_bXBfXe.js";import{T as b}from"./TodayMultiPetSummary-C3FQi21Y.js";import{T as g}from"./TodayTaskDetails-BrtYzp5g.js";import{T as y}from"./TodayPetIdentity-C82b9Idi.js";import"./preload-helper-Zf8nSx-t.js";import"./useThemedStyles-cVR-DtoZ.js";import"./TodayTaskHeader-DO6ysqZZ.js";import"./TodayTaskTypeBadge-DD72pU-B.js";import"./Text-Do5dS1qg.js";import"./index-Do3x-qHF.js";import"./TodayTaskTime-CuetABMm.js";import"./TodayTaskFooter-ilQz1iT7.js";import"./IconSquareButton-C-OyZBZP.js";import"./IconControlButton-Bo_jLQvg.js";import"./index-BeTpEGf2.js";import"./extends-CF3RwP-h.js";import"./index-NHC-rSwp.js";import"./index-CxdHYcqo.js";import"./IconEllipsisVertical-CAXnKioY.js";import"./xml-COHihjjg.js";import"./index-Cpa-95Zj.js";import"./index-CJrLMJTa.js";import"./TodayCompletionSlider-BBDpxmDi.js";import"./index-DFoXgwmB.js";import"./Animated-C1wt_1Nj.js";import"./index-o-lnbjyp.js";import"./index-B8j4hG7g.js";import"./index-CdAw7h69.js";import"./index-FuSJnDjU.js";import"./index-BPIMqECe.js";import"./hoist-non-react-statics.cjs-CVY4v-ZL.js";import"./index-Cy8RnwP-.js";import"./index-ClMYSwEP.js";import"./index-IGWuf7O1.js";import"./workletFunctions-lPAlqvRH.js";import"./IconCheck-DBTM99Yq.js";import"./TodaySkippedAction-BMolEUiI.js";import"./IconX--Vr5Xf9R.js";import"./TodayDoorButton-DgB3LOSg.js";import"./IconRoundButton-QinA3QVo.js";import"./IconChevronRight-Wa41vJ5u.js";import"./PetOwnerAvatar-CaYYu9Jv.js";import"./PetAvatar-BB4u9InR.js";import"./EmptyProfileImage-BK98bpa1.js";import"./TodayPlacementList-CyKkxY7P.js";const s=()=>{},d=e.jsx(c,{icon:h}),F=e.jsx(c,{icon:h,size:16}),T=e.jsx(y,{name:"Title",meta:"Subtitle",avatar:{petPhotoUrl:"https://picsum.photos/id/237/128/128",ownerFirstName:"Rachel",ownerLastName:"Lee",ownerPhotoUrl:"https://picsum.photos/id/64/56/56"},placements:{title:"Label",image:F}}),f=e.jsx(g,{title:"Title",trailing:"Label",note:"Text",icon:d}),ge={title:"Components/TodayTaskCard",component:u,args:{header:{badge:{actionType:"Feeding",label:"Label",icon:d},time:{title:"Title",subtitle:"Subtitle",tone:"default"}},pet:T,details:f,footer:{onMenuPress:s,menuAccessibilityLabel:"Ещё действия",sliderProps:{completedLabel:"Label",onComplete:s}},skipReason:"Text"},decorators:[m=>e.jsx(l,{background:"screen",padding:4,children:e.jsx(m,{})})]},t={},o={args:{isFinished:!0,header:{badge:{actionType:"Feeding",label:"Label",icon:d},time:{title:"Title",subtitle:"Subtitle",tone:"completed"}},footer:{onMenuPress:s,menuAccessibilityLabel:"Ещё действия",sliderProps:{completedLabel:"Label",onComplete:s,isCompleted:!0}}}},r={args:{isFinished:!0,hasSkipReason:!0,skipReason:"Питомец отказался от еды",footer:{action:"skipped",onMenuPress:s,menuAccessibilityLabel:"Ещё действия",skippedProps:{label:"Пропущено"}}}},a={args:{hasHeader:!1}},i={args:{pet:e.jsx(b,{pets:[{id:"1"},{id:"2"},{id:"3"}],extraCount:"+2",detailsLabel:"Подробнее",onDetailsPress:s})}},n={args:{hasPet:!1,hasDetails:!1}},p={render:m=>e.jsxs(l,{gap:4,children:[e.jsx(u,{...m}),e.jsx(u,{...m,isFinished:!0})]})},ye=["NotFinished","Finished","SkippedWithReason","WithoutHeader","MultiPet","HeaderAndFooterOnly","AllVariants"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source},description:{story:"Figma `isFinished=false`.",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isFinished: true,
    header: {
      badge: {
        actionType: 'Feeding',
        label: 'Label',
        icon: sampleIcon
      },
      time: {
        title: 'Title',
        subtitle: 'Subtitle',
        tone: 'completed'
      }
    },
    footer: {
      onMenuPress: noop,
      menuAccessibilityLabel: 'Ещё действия',
      sliderProps: {
        completedLabel: 'Label',
        onComplete: noop,
        isCompleted: true
      }
    }
  }
}`,...o.parameters?.docs?.source},description:{story:"Figma `isFinished=true` (completed slider, completed time tone).",...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    isFinished: true,
    hasSkipReason: true,
    skipReason: 'Питомец отказался от еды',
    footer: {
      action: 'skipped',
      onMenuPress: noop,
      menuAccessibilityLabel: 'Ещё действия',
      skippedProps: {
        label: 'Пропущено'
      }
    }
  }
}`,...r.parameters?.docs?.source},description:{story:"Skipped task: «Пропущено» footer, veil, reason above the veil.",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    hasHeader: false
  }
}`,...a.parameters?.docs?.source},description:{story:"`hasHeader=false`: the card inside the details modal.",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    pet: <TodayMultiPetSummary pets={[{
      id: '1'
    }, {
      id: '2'
    }, {
      id: '3'
    }]} extraCount="+2" detailsLabel="Подробнее" onDetailsPress={noop} />
  }
}`,...i.parameters?.docs?.source},description:{story:"`pet` swapped to `TodayMultiPetSummary`.",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    hasPet: false,
    hasDetails: false
  }
}`,...n.parameters?.docs?.source},description:{story:"`hasPet=false`, `hasDetails=false`.",...n.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Box gap={4}>
      <TodayTaskCard {...args} />
      <TodayTaskCard {...args} isFinished />
    </Box>
}`,...p.parameters?.docs?.source},description:{story:"Both Figma variants stacked.",...p.parameters?.docs?.description}}};export{p as AllVariants,o as Finished,n as HeaderAndFooterOnly,i as MultiPet,t as NotFinished,r as SkippedWithReason,a as WithoutHeader,ye as __namedExportsOrder,ge as default};
