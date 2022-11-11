import{S as gt,i as vt,s as Et,a as I,w as st,c as L,x as ot,b as k,y as nt,f as F,d as Tt,t as K,N as $t,h as u,z as rt,o as Dt,q as w,r as R,g as kt,O as Pt,P as wt,k as b,l as g,m as v,n as P,D as c,u as Q,R as Rt}from"../../../../chunks/index-baa1f9fa.js";import{g as Bt}from"../../../../chunks/navigation-07f11af0.js";import{B as It}from"../../../../chunks/Button-55e0cbf6.js";import{C as Lt}from"../../../../chunks/Card-6cf664a9.js";import{I as Ct}from"../../../../chunks/Input-c15af6c4.js";import{g as Ht,r as qt,a as U,s as At}from"../../../../chunks/functions-076e4cf7.js";function dt(s,e,n){const o=s.slice();return o[4]=e[n],o[5]=e,o[6]=n,o}function ht(s,e,n){const o=s.slice();return o[7]=e[n],o[9]=n,o}function mt(s){let e,n,o=s[9]+1+"",i,r,p,t=s[7]+"",a,_,f,T=U(s[4],s[9])+"",q;return{c(){e=b("tr"),n=b("td"),i=w(o),r=I(),p=b("td"),a=w(t),_=I(),f=b("td"),q=w(T),this.h()},l(E){e=g(E,"TR",{});var h=v(e);n=g(h,"TD",{class:!0});var D=v(n);i=R(D,o),D.forEach(u),r=L(h),p=g(h,"TD",{class:!0});var S=v(p);a=R(S,t),S.forEach(u),_=L(h),f=g(h,"TD",{class:!0});var A=v(f);q=R(A,T),A.forEach(u),h.forEach(u),this.h()},h(){P(n,"class","text-center"),P(p,"class","text-center"),P(f,"class","text-center")},m(E,h){k(E,e,h),c(e,n),c(n,i),c(e,r),c(e,p),c(p,a),c(e,_),c(e,f),c(f,q)},p(E,h){h&1&&t!==(t=E[7]+"")&&Q(a,t),h&1&&T!==(T=U(E[4],E[9])+"")&&Q(q,T)},d(E){E&&u(e)}}}function Nt(s){let e,n=s[4].name+"",o,i,r,p=U(s[4])+"",t,a,_,f,T,q,E,h,D,S,A,C,G,H,V,X,Z,O,y,x,z,tt,et,M,N;function bt(l){s[3](l,s[4])}let at={type:"number",id:"round-points-"+s[4].name.toLowerCase()+"-"+s[6]};s[4].rounds[s[4].rounds.length-1]!==void 0&&(at.value=s[4].rounds[s[4].rounds.length-1]),D=new Ct({props:at}),Pt.push(()=>wt(D,"value",bt));let Y=s[4].rounds,$=[];for(let l=0;l<Y.length;l+=1)$[l]=mt(ht(s,Y,l));return{c(){e=b("div"),o=w(n),i=I(),r=b("div"),t=w(p),a=I(),_=b("label"),f=w("Round "),T=w(s[1]),q=w(" Points"),E=I(),h=b("div"),st(D.$$.fragment),A=I(),C=b("table"),G=b("thead"),H=b("tr"),V=b("th"),X=w("Round"),Z=I(),O=b("th"),y=w("Points"),x=I(),z=b("th"),tt=w("Total"),et=I(),M=b("tbody");for(let l=0;l<$.length;l+=1)$[l].c();this.h()},l(l){e=g(l,"DIV",{class:!0});var d=v(e);o=R(d,n),d.forEach(u),i=L(l),r=g(l,"DIV",{class:!0});var B=v(r);t=R(B,p),B.forEach(u),a=L(l),_=g(l,"LABEL",{for:!0,class:!0});var m=v(_);f=R(m,"Round "),T=R(m,s[1]),q=R(m," Points"),m.forEach(u),E=L(l),h=g(l,"DIV",{class:!0});var J=v(h);ot(D.$$.fragment,J),J.forEach(u),A=L(l),C=g(l,"TABLE",{class:!0});var W=v(C);G=g(W,"THEAD",{});var ut=v(G);H=g(ut,"TR",{});var j=v(H);V=g(j,"TH",{class:!0});var ft=v(V);X=R(ft,"Round"),ft.forEach(u),Z=L(j),O=g(j,"TH",{class:!0});var ct=v(O);y=R(ct,"Points"),ct.forEach(u),x=L(j),z=g(j,"TH",{class:!0});var it=v(z);tt=R(it,"Total"),it.forEach(u),j.forEach(u),ut.forEach(u),et=L(W),M=g(W,"TBODY",{});var _t=v(M);for(let lt=0;lt<$.length;lt+=1)$[lt].l(_t);_t.forEach(u),W.forEach(u),this.h()},h(){P(e,"class","text-center text-2xl mb-2"),P(r,"class","text-center text-3xl"),P(_,"for","round-points"),P(_,"class","block text-center"),P(h,"class","w-36 mx-auto"),P(V,"class","border-b pb-1"),P(O,"class","border-b pb-1"),P(z,"class","border-b pb-1"),P(C,"class","table-auto w-full mt-4")},m(l,d){k(l,e,d),c(e,o),k(l,i,d),k(l,r,d),c(r,t),k(l,a,d),k(l,_,d),c(_,f),c(_,T),c(_,q),k(l,E,d),k(l,h,d),nt(D,h,null),k(l,A,d),k(l,C,d),c(C,G),c(G,H),c(H,V),c(V,X),c(H,Z),c(H,O),c(O,y),c(H,x),c(H,z),c(z,tt),c(C,et),c(C,M);for(let B=0;B<$.length;B+=1)$[B].m(M,null);N=!0},p(l,d){s=l,(!N||d&1)&&n!==(n=s[4].name+"")&&Q(o,n),(!N||d&1)&&p!==(p=U(s[4])+"")&&Q(t,p),(!N||d&2)&&Q(T,s[1]);const B={};if(d&1&&(B.id="round-points-"+s[4].name.toLowerCase()+"-"+s[6]),!S&&d&1&&(S=!0,B.value=s[4].rounds[s[4].rounds.length-1],Rt(()=>S=!1)),D.$set(B),d&1){Y=s[4].rounds;let m;for(m=0;m<Y.length;m+=1){const J=ht(s,Y,m);$[m]?$[m].p(J,d):($[m]=mt(J),$[m].c(),$[m].m(M,null))}for(;m<$.length;m+=1)$[m].d(1);$.length=Y.length}},i(l){N||(F(D.$$.fragment,l),N=!0)},o(l){K(D.$$.fragment,l),N=!1},d(l){l&&u(e),l&&u(i),l&&u(r),l&&u(a),l&&u(_),l&&u(E),l&&u(h),rt(D),l&&u(A),l&&u(C),$t($,l)}}}function pt(s){let e,n;return e=new Lt({props:{classList:"mt-4",$$slots:{default:[Nt]},$$scope:{ctx:s}}}),{c(){st(e.$$.fragment)},l(o){ot(e.$$.fragment,o)},m(o,i){nt(e,o,i),n=!0},p(o,i){const r={};i&1027&&(r.$$scope={dirty:i,ctx:o}),e.$set(r)},i(o){n||(F(e.$$.fragment,o),n=!0)},o(o){K(e.$$.fragment,o),n=!1},d(o){rt(e,o)}}}function St(s){let e;return{c(){e=w("Done")},l(n){e=R(n,"Done")},m(n,o){k(n,e,o)},d(n){n&&u(e)}}}function Vt(s){let e,n,o,i=s[0],r=[];for(let t=0;t<i.length;t+=1)r[t]=pt(dt(s,i,t));const p=t=>K(r[t],1,1,()=>{r[t]=null});return n=new It({props:{$$slots:{default:[St]},$$scope:{ctx:s}}}),n.$on("click",s[2]),{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=I(),st(n.$$.fragment)},l(t){for(let a=0;a<r.length;a+=1)r[a].l(t);e=L(t),ot(n.$$.fragment,t)},m(t,a){for(let _=0;_<r.length;_+=1)r[_].m(t,a);k(t,e,a),nt(n,t,a),o=!0},p(t,[a]){if(a&3){i=t[0];let f;for(f=0;f<i.length;f+=1){const T=dt(t,i,f);r[f]?(r[f].p(T,a),F(r[f],1)):(r[f]=pt(T),r[f].c(),F(r[f],1),r[f].m(e.parentNode,e))}for(kt(),f=i.length;f<r.length;f+=1)p(f);Tt()}const _={};a&1024&&(_.$$scope={dirty:a,ctx:t}),n.$set(_)},i(t){if(!o){for(let a=0;a<i.length;a+=1)F(r[a]);F(n.$$.fragment,t),o=!0}},o(t){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)K(r[a]);K(n.$$.fragment,t),o=!1},d(t){$t(r,t),t&&u(e),rt(n,t)}}}function Ot(s,e,n){let o=[],i=0;const r=()=>{At(o),Bt("/game/scores")};Dt(()=>{n(0,o=Ht()),o.length?(o.forEach(t=>{t.rounds.push("-")}),n(0,o),n(1,i=o[0].rounds.length)):qt()});function p(t,a){s.$$.not_equal(a.rounds[a.rounds.length-1],t)&&(a.rounds[a.rounds.length-1]=t,n(0,o))}return s.$$.update=()=>{s.$$.dirty&1&&n(0,o=o.map(t=>({name:t.name,score:U(t),rounds:t.rounds})))},[o,i,r,p]}class Jt extends gt{constructor(e){super(),vt(this,e,Ot,Vt,Et,{})}}export{Jt as default};