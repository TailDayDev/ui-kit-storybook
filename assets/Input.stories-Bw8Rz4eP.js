import{j as u,r as g}from"./iframe-Drba6mZ1.js";import{C as h}from"./CheckIcon-Df8qcKU4.js";import{I as d}from"./Input-q-vVyBxW.js";import{I as w}from"./Icon-Cwc6oh7S.js";import"./preload-helper-Zf8nSx-t.js";import"./xml-COHihjjg.js";import"./index-Cpa-95Zj.js";import"./index-CJrLMJTa.js";import"./CloseIcon-Djtgu8vC.js";import"./useThemedStyles-cVR-DtoZ.js";import"./index-BeTpEGf2.js";import"./extends-CF3RwP-h.js";import"./index-NHC-rSwp.js";import"./Text-Do5dS1qg.js";import"./index-Do3x-qHF.js";import"./SyncedTextInput-SayiDFe8.js";import"./useNativeEchoValue-DVEVbt6b.js";import"./index-ClMYSwEP.js";import"./index-FuSJnDjU.js";import"./index-nQAgfKya.js";import"./index-CdAw7h69.js";import"./InputClearButton-CWwrP1Ns.js";const E=s=>{const[m,p]=g.useState(s.value);return u.jsx(d,{...s,value:m,setValue:p})},A={title:"Components/Input",component:d,render:s=>u.jsx(E,{...s}),args:{value:"",setValue:()=>{},label:"Client name",placeholder:"Enter full name",clearButtonLabel:"Clear"}},a={},o={args:{value:"Marta Green"}},e={args:{value:"Marta Green",autoFocus:!0}},t={args:{value:"marta@",label:"Email",hasError:!0,errorText:"Enter a valid email address"}},b=[{text:"At least 8 characters",isCorrect:!0},{text:"One digit",isCorrect:!1}],n={args:{value:"password",label:"Password",secureTextEntry:!0,showPasswordToggle:!0,showPasswordLabel:"Show password",hidePasswordLabel:"Hide password",hasError:!0,errorText:b}},c={args:{value:"Locked field",label:"Disabled",disabled:!0}},i={args:{value:"Bella",maxLength:40}},l={args:{value:"Verified",icon:u.jsx(w,{icon:h,size:20,color:"text.success"})}},r={args:{autoFocus:!0,isClearButtonVisibleWhenEmpty:!0}},z=["Empty","Filled","Focused","WithError","PasswordRules","Disabled","WithCounter","WithLeftIcon","ClearWhenEmpty"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Marta Green'
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Marta Green',
    autoFocus: true
  }
}`,...e.parameters?.docs?.source},description:{story:"Focused on mount: accent border + shadow, clear control visible.",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'marta@',
    label: 'Email',
    hasError: true,
    errorText: 'Enter a valid email address'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'password',
    label: 'Password',
    secureTextEntry: true,
    showPasswordToggle: true,
    showPasswordLabel: 'Show password',
    hidePasswordLabel: 'Hide password',
    hasError: true,
    errorText: PASSWORD_RULES
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Locked field',
    label: 'Disabled',
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Bella',
    maxLength: 40
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Verified',
    icon: <Icon icon={CheckIcon} size={20} color="text.success" />
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    autoFocus: true,
    isClearButtonVisibleWhenEmpty: true
  }
}`,...r.parameters?.docs?.source},description:{story:"Clear control shown even while empty once focused.",...r.parameters?.docs?.description}}};export{r as ClearWhenEmpty,c as Disabled,a as Empty,o as Filled,e as Focused,n as PasswordRules,i as WithCounter,t as WithError,l as WithLeftIcon,z as __namedExportsOrder,A as default};
