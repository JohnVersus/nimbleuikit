import{I as w}from"./IntlText-e61d29b9.js";import"./jsx-runtime-91a467a5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./Text-a93cf70b.js";import"./system-af6bb858.js";const J={title:"Atoms/IntlText",component:w,tags:["autodocs"],argTypes:{formatType:{control:{type:"select",options:["number","date","time","relative"]}},locales:{control:"text"},formatOptions:{control:"object"},value:{control:"text"},unit:{control:"text"}},parameters:{docs:{description:{component:"Refer to [Props Details](?path=/docs/propsdetails--documentation) for details on the available props."}}}},e={args:{formatType:"number",value:5e3,formatOptions:{style:"currency",currency:"USD",notation:"compact",compactDisplay:"long"}}};e.storyName="Currency Display";const t={args:{formatType:"number",value:105e4,formatOptions:{notation:"compact",compactDisplay:"short"}}};t.storyName="Views Count";const a={args:{formatType:"date",value:"04/20/1988",formatOptions:{dateStyle:"full",timeStyle:"medium",timeZone:"UTC"}}};a.storyName="Full Date Display";const r={args:{formatType:"date",value:"Mon Jun 12 2023 23:19:46 GMT+0530 (India Standard Time)",formatOptions:{year:"2-digit",month:"numeric",day:"numeric"}}};r.storyName="Short Date Display";const o={args:{formatType:"relativeTime",value:-3,unit:"day",locales:"en-US"}};o.storyName="Relative Time Display";var n,s,i,p,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    formatType: "number",
    value: 5000,
    formatOptions: {
      style: "currency",
      currency: "USD",
      notation: "compact",
      compactDisplay: "long"
    }
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source},description:{story:"An example of using IntlText for displaying currency values.",...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.description}}};var c,l,d,u,y;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    formatType: "number",
    value: 1050000,
    formatOptions: {
      notation: "compact",
      compactDisplay: "short"
    }
  }
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source},description:{story:"An example of using IntlText for displaying large numbers, like views on a video.",...(y=(u=t.parameters)==null?void 0:u.docs)==null?void 0:y.description}}};var f,g,T,D,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    formatType: "date",
    value: "04/20/1988",
    formatOptions: {
      dateStyle: "full",
      timeStyle: "medium",
      timeZone: "UTC"
    }
  }
}`,...(T=(g=a.parameters)==null?void 0:g.docs)==null?void 0:T.source},description:{story:"An example of using IntlText for displaying dates in full format.",...(v=(D=a.parameters)==null?void 0:D.docs)==null?void 0:v.description}}};var S,x,h,I,O;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    formatType: "date",
    value: "Mon Jun 12 2023 23:19:46 GMT+0530 (India Standard Time)",
    formatOptions: {
      year: "2-digit",
      month: "numeric",
      day: "numeric"
    }
  }
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source},description:{story:"An example of using IntlText for displaying dates in short format.",...(O=(I=r.parameters)==null?void 0:I.docs)==null?void 0:O.description}}};var b,C,A,U,N;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    formatType: "relativeTime",
    value: -3,
    unit: "day",
    locales: "en-US"
  }
}`,...(A=(C=o.parameters)==null?void 0:C.docs)==null?void 0:A.source},description:{story:"An example of using IntlText for displaying relative time, like post upload time.",...(N=(U=o.parameters)==null?void 0:U.docs)==null?void 0:N.description}}};const Z=["CurrencyDisplay","ViewsCount","FullDateDisplay","ShortDateDisplay","RelativeTimeDisplay"];export{e as CurrencyDisplay,a as FullDateDisplay,o as RelativeTimeDisplay,r as ShortDateDisplay,t as ViewsCount,Z as __namedExportsOrder,J as default};
//# sourceMappingURL=IntlText.stories-634ec4bf.js.map
