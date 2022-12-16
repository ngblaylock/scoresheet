import{S as Ge,i as Te,s as Me,w as pe,a as v,k as o,q as d,x as he,c as b,l as i,m as u,r as f,h as n,n as s,K as Pe,y as ge,b as L,E as t,t as K,d as He,f as j,z as _e,o as qe,g as Ke}from"../../../chunks/index-248baa26.js";import{g as je}from"../../../chunks/functions-0020b864.js";import{B as Be}from"../../../chunks/Button-af951ed6.js";import{N as ze}from"../../../chunks/NavBar-efee75db.js";function Ce(m){let a,r;return a=new Be({props:{href:"/setup",$$slots:{default:[Ye]},$$scope:{ctx:m}}}),{c(){pe(a.$$.fragment)},l(e){he(a.$$.fragment,e)},m(e,p){ge(a,e,p),r=!0},i(e){r||(j(a.$$.fragment,e),r=!0)},o(e){K(a.$$.fragment,e),r=!1},d(e){_e(a,e)}}}function Fe(m){let a,r;return a=new Be({props:{href:"/game/scores/",$$slots:{default:[Je]},$$scope:{ctx:m}}}),{c(){pe(a.$$.fragment)},l(e){he(a.$$.fragment,e)},m(e,p){ge(a,e,p),r=!0},i(e){r||(j(a.$$.fragment,e),r=!0)},o(e){K(a.$$.fragment,e),r=!1},d(e){_e(a,e)}}}function Ye(m){let a;return{c(){a=d("New Game")},l(r){a=f(r,"New Game")},m(r,e){L(r,a,e)},d(r){r&&n(a)}}}function Je(m){let a;return{c(){a=d("Scores")},l(r){a=f(r,"Scores")},m(r,e){L(r,a,e)},d(r){r&&n(a)}}}function Le(m){let a,r,e,p,O,Q,q,R,U,P,W,X,y,Z,$,ee,te,ae,h,g,z,x,w,B,E,I,ve,re,G,N,S,be,se,_,V,le,ye=new Date().getFullYear()+"",ne,oe,A,ie,ce,ue,T,k,de,C;a=new ze({});const $e=[Fe,Ce],D=[];function xe(l,c){return l[0]&&l[0].length?0:1}return h=xe(m),g=D[h]=$e[h](m),{c(){pe(a.$$.fragment),r=v(),e=o("main"),p=o("h1"),O=d("About"),Q=v(),q=o("p"),R=d(`Scoresheet is designed and maintained by Nathan Blaylock. It's primary
		purpose was primarily to learn Svelte/SvelteKit and Tailwind while creating
		an app that would actually be used by friends and family.`),U=v(),P=o("p"),W=d(`The purpose of this app is to do the math for each scoring round during a
		card game. It is designed to be as general purpose as possible. The app is
		designed for mobile devices and can be "installed" by creating a shortcut on
		your device home screen.`),X=v(),y=o("p"),Z=d(`Any bug fixes or suggestions can be submitted by creating an issue on
		`),$=o("a"),ee=d("GitHub"),te=d("."),ae=v(),g.c(),z=v(),x=o("div"),w=o("div"),B=o("div"),E=o("a"),I=o("img"),re=v(),G=o("div"),N=o("a"),S=o("img"),se=v(),_=o("div"),V=o("div"),le=d("\xA9 Nathan Blaylock "),ne=d(ye),oe=v(),A=o("div"),ie=d("Version "),ce=d(m[1]),ue=v(),T=o("div"),k=o("a"),de=d("Privacy Policy"),this.h()},l(l){he(a.$$.fragment,l),r=b(l),e=i(l,"MAIN",{class:!0});var c=u(e);p=i(c,"H1",{class:!0});var M=u(p);O=f(M,"About"),M.forEach(n),Q=b(c),q=i(c,"P",{});var we=u(q);R=f(we,`Scoresheet is designed and maintained by Nathan Blaylock. It's primary
		purpose was primarily to learn Svelte/SvelteKit and Tailwind while creating
		an app that would actually be used by friends and family.`),we.forEach(n),U=b(c),P=i(c,"P",{class:!0});var ke=u(P);W=f(ke,`The purpose of this app is to do the math for each scoring round during a
		card game. It is designed to be as general purpose as possible. The app is
		designed for mobile devices and can be "installed" by creating a shortcut on
		your device home screen.`),ke.forEach(n),X=b(c),y=i(c,"P",{class:!0});var F=u(y);Z=f(F,`Any bug fixes or suggestions can be submitted by creating an issue on
		`),$=i(F,"A",{class:!0,href:!0,target:!0});var Ee=u($);ee=f(Ee,"GitHub"),Ee.forEach(n),te=f(F,"."),F.forEach(n),ae=b(c),g.l(c),z=b(c),x=i(c,"DIV",{class:!0});var Y=u(x);w=i(Y,"DIV",{class:!0});var J=u(w);B=i(J,"DIV",{class:!0});var Ie=u(B);E=i(Ie,"A",{href:!0,target:!0});var Ne=u(E);I=i(Ne,"IMG",{src:!0,alt:!0,class:!0}),Ne.forEach(n),Ie.forEach(n),re=b(J),G=i(J,"DIV",{class:!0});var Se=u(G);N=i(Se,"A",{href:!0,target:!0});var Ve=u(N);S=i(Ve,"IMG",{src:!0,alt:!0,class:!0}),Ve.forEach(n),Se.forEach(n),J.forEach(n),se=b(Y),_=i(Y,"DIV",{class:!0});var H=u(_);V=i(H,"DIV",{class:!0});var fe=u(V);le=f(fe,"\xA9 Nathan Blaylock "),ne=f(fe,ye),fe.forEach(n),oe=b(H),A=i(H,"DIV",{class:!0});var me=u(A);ie=f(me,"Version "),ce=f(me,m[1]),me.forEach(n),ue=b(H),T=i(H,"DIV",{class:!0});var Ae=u(T);k=i(Ae,"A",{class:!0,href:!0,target:!0});var De=u(k);de=f(De,"Privacy Policy"),De.forEach(n),Ae.forEach(n),H.forEach(n),Y.forEach(n),c.forEach(n),this.h()},h(){s(p,"class","text-3xl"),s(P,"class","mt-3"),s($,"class","text-primary underline"),s($,"href","https://github.com/ngblaylock/scoresheet/issues"),s($,"target","_blank"),s(y,"class","mt-3"),Pe(I.src,ve="/icons/nb-mark.svg")||s(I,"src",ve),s(I,"alt","Nathan Blaylock Media logo"),s(I,"class","w-8 max-w-none"),s(E,"href","https://nathanblaylock.com"),s(E,"target","_blank"),s(B,"class","mx-4"),Pe(S.src,be="/icons/github-mark.svg")||s(S,"src",be),s(S,"alt","GitHub"),s(S,"class","w-8 max-w-none"),s(N,"href","https://github.com/ngblaylock/scoresheet"),s(N,"target","_blank"),s(G,"class","mx-4"),s(w,"class","flex items-center"),s(V,"class","mx-4 text-center flex-grow"),s(A,"class","mx-4 text-center flex-grow"),s(k,"class","text-primary underline"),s(k,"href","https://nathanblaylock.com/privacy/"),s(k,"target","_blank"),s(T,"class","mx-4 text-center flex-grow "),s(_,"class","flex flex-wrap mt-3"),s(x,"class","flex flex-col justify-between items-center py-2 border-t"),s(e,"class","w-screen max-w-lg mx-auto px-4 mt-6 h-full flex flex-col")},m(l,c){ge(a,l,c),L(l,r,c),L(l,e,c),t(e,p),t(p,O),t(e,Q),t(e,q),t(q,R),t(e,U),t(e,P),t(P,W),t(e,X),t(e,y),t(y,Z),t(y,$),t($,ee),t(y,te),t(e,ae),D[h].m(e,null),t(e,z),t(e,x),t(x,w),t(w,B),t(B,E),t(E,I),t(w,re),t(w,G),t(G,N),t(N,S),t(x,se),t(x,_),t(_,V),t(V,le),t(V,ne),t(_,oe),t(_,A),t(A,ie),t(A,ce),t(_,ue),t(_,T),t(T,k),t(k,de),C=!0},p(l,[c]){let M=h;h=xe(l),h!==M&&(Ke(),K(D[M],1,1,()=>{D[M]=null}),He(),g=D[h],g||(g=D[h]=$e[h](l),g.c()),j(g,1),g.m(e,z))},i(l){C||(j(a.$$.fragment,l),j(g),C=!0)},o(l){K(a.$$.fragment,l),K(g),C=!1},d(l){_e(a,l),l&&n(r),l&&n(e),D[h].d()}}}function Oe(m,a,r){let e;const p="1.0.4";return qe(()=>{r(0,e=je())}),[e,p]}class Xe extends Ge{constructor(a){super(),Te(this,a,Oe,Le,Me,{})}}export{Xe as default};
