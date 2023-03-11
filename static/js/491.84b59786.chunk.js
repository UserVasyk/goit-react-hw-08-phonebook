"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[491],{1491:function(n,e,t){t.r(e),t.d(e,{default:function(){return K}});var r,a,i,o,s,u,c,d,p,l,x=t(9439),f=t(2791),m=t(9434),h=t(8893),b=function(n){return n.contacts.items},g=t(168),Z=t(4934),v=Z.Z.input(r||(r=(0,g.Z)(["\n  font-size: 15px;\n  padding: 5px 10px;\n"]))),j=Z.Z.form(a||(a=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  align-items: center;\n\n  border: 2px solid black;\n  padding: 15px;\n  width: 350px;\n  margin-bottom: 20px;\n"]))),y=Z.Z.button(i||(i=(0,g.Z)(["\n  max-width: 115px;\n  border: none;\n  background-color: #3894fd;\n  height: 35px;\n  border-radius: 4px;\n  cursor: pointer;\n  :hover,\n  :focus {\n    box-shadow: 3px 3px 14px -1px #1fa9ff;\n  }\n"]))),w=Z.Z.label(o||(o=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 25px;\n  max-width: 250px;\n  gap: 10px;\n"]))),k=t(3329),C=function(){var n=(0,f.useState)(""),e=(0,x.Z)(n,2),t=e[0],r=e[1],a=(0,f.useState)(""),i=(0,x.Z)(a,2),o=i[0],s=i[1],u=(0,m.I0)(),c=(0,m.v9)(b),d=function(n){var e=n.target;switch(e.name){case"name":r(e.value);break;case"number":s(e.value);break;default:return}};return(0,k.jsxs)(j,{onSubmit:function(n){if(n.preventDefault(),r(""),s(""),void 0!==c.find((function(n){return n.name===t})))return alert("".concat(t," is already in contacts"));u((0,h.uK)({name:t,number:o}))},children:[(0,k.jsxs)(w,{children:["Name",(0,k.jsx)(v,{type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:d})]}),(0,k.jsxs)(w,{children:["Number",(0,k.jsx)(v,{type:"tel",name:"number",value:o,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:d})]}),(0,k.jsx)(y,{type:"submit",children:"Add contact"})]})},z=Z.Z.ul(s||(s=(0,g.Z)(["\n  margin-left: 40px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),_=Z.Z.button(u||(u=(0,g.Z)(["\n  border: none;\n  background-color: #3894fd;\n  border-radius: 4px;\n  height:20px;\n  cursor: pointer; margin-left: 10px;\n  :hover,\n  :focus {\n    box-shadow: 3px 3px 14px -1px #1fa9ff;\n  }\n"]))),A=function(){var n=(0,m.v9)((function(n){return n.filter})),e=(0,m.v9)(b),t=(0,m.I0)();(0,f.useEffect)((function(){t((0,h.yF)())}),[t]);return(0,k.jsx)(z,{children:function(){var t=n.toLowerCase().trim();return e.filter((function(n){return n.name.toLowerCase().includes(t)}))}().map((function(n){var e=n.id,r=n.name,a=n.number;return(0,k.jsxs)("li",{children:[r,": ",a,(0,k.jsx)(_,{onClick:function(){return t((0,h.GK)(e))},type:"button",children:"Delete"})]},e)}))})},F=Z.Z.input(c||(c=(0,g.Z)(["\n  font-size: 15px;\n  padding: 5px 10px;\n"]))),I=Z.Z.label(d||(d=(0,g.Z)(["\n  font-size: 20px;\n  display: flex;\n  max-width: 250px;\n  flex-direction: column;\n  margin-bottom: 20px;\n  gap: 10px;\n"]))),N=t(6895),S=function(){var n=(0,m.I0)();return(0,k.jsxs)(I,{children:["Find Contacts by name",(0,k.jsx)(F,{type:"text",onChange:function(e){return n((0,N.T)(e.currentTarget.value))}})]})},q=Z.Z.h1(p||(p=(0,g.Z)(["\n  text-align: center;\n  margin: 20px;\n"]))),D=Z.Z.div(l||(l=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),K=function(){return(0,k.jsxs)(D,{children:[(0,k.jsx)(q,{children:"Contacts"}),(0,k.jsx)(C,{}),(0,k.jsx)(S,{}),(0,k.jsx)(A,{})]})}}}]);
//# sourceMappingURL=491.84b59786.chunk.js.map