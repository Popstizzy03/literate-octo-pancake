import{i as P}from"./if.uYMcrbgI.js";import{i as R}from"./lifecycle.BKscdtVl.js";import{i as M,f as u,e as _,a as d,p as U,b as q,d as v,c as b,r as o,g as t,m as B,t as y,u as k,s as w}from"./template.Dzn40BDs.js";import{s as E}from"./render.DA6xZ-ht.js";import{e as V,s as N,i as C}from"./attributes.50Tklhsw.js";import{t as J,p as K,s as O}from"./props.CwhCBvmM.js";function Q(i,p,r,a,j,f){var c=i.__className;if(M||c!==r||c===void 0){var l=J(r);(!M||l!==i.getAttribute("class"))&&(l==null?i.removeAttribute("class"):i.className=l),i.__className=r}return f}var S=u('<iframe class="w-full h-full" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" loading="lazy"></iframe>'),T=u('<div class="absolute inset-0 transition-opacity duration-500 ease-in-out flex flex-col"><!> <div class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"><p class="text-[var(--color-signal)] font-mono text-sm mb-25"> </p></div></div>'),W=u("<button></button>"),X=u(`<div class="carousel-container relative w-full max-w-4xl mx-auto mb-32"><div class="flex items-end justify-between mb-8 border-b border-[var(--color-border)] pb-4"><h2 class="text-3xl font-bold text-[var(--color-ink-primary)]">Visual Reels</h2> <div class="flex gap-4"><style>.brutal-nav-btn {
            border: 3px solid black;
            box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
            transition: all 0.1s;
            background-color: white;
            color: black;
            font-size: 1.5rem; /* Larger arrow for visibility */
            width: 4rem;      /* Fixed width */
            height: 4rem;     /* Fixed height */
            display: flex;
            align-items: center;
            justify-content: center;
            user-select: none;
        }
        /* Active (click) state for the button */
        .brutal-nav-btn:active {
            transform: translate(4px, 4px);
            box-shadow: 0px 0px 0px 0px rgba(0,0,0,1);
            background-color: black;
            color: var(--color-signal, #ccff00); /* Use signal color or fallback */
        }
        /* Hover state */
        .brutal-nav-btn:hover {
            background-color: var(--color-signal, #ccff00);
            color: black;
        }</style> <button class="brutal-nav-btn" aria-label="Previous video">&larr;</button> <button class="brutal-nav-btn" aria-label="Next video">&rarr;</button></div></div> <div class="relative aspect-video bg-black rounded-sm overflow-hidden shadow-2xl border border-[var(--color-border)] group"></div> <div class="flex justify-center gap-2 mt-4"></div></div>`);function ot(i,p){q(p,!1);let r=K(p,"videos",24,()=>[{id:"1140313256",title:"Mint Lounge"},{id:"1140785377",title:"Marie's Glow"},{id:"1142988915",title:"Debby's Gadgets"}]),a=B(0);function j(){w(a,(t(a)+1)%r().length)}function f(){w(a,(t(a)-1+r().length)%r().length)}R();var c=X(),l=b(c),A=v(b(l),2),G=v(b(A),2),D=v(G,2);o(A),o(l);var m=v(l,2);V(m,5,r,C,(g,s,n)=>{var e=T(),z=b(e);{var H=x=>{var h=S();y(()=>{N(h,"src",`https://player.vimeo.com/video/${t(s),k(()=>t(s).id)??""}?title=0&byline=0&portrait=0`),N(h,"title",(t(s),k(()=>t(s).title)))}),d(x,h)};P(z,x=>{n===t(a)&&x(H)})}var F=v(z,2),L=b(F),I=b(L,!0);o(L),o(F),o(e),y(()=>{O(e,`opacity: ${n===t(a)?1:0}; pointer-events: ${n===t(a)?"auto":"none"}`),E(I,(t(s),k(()=>t(s).title)))}),d(g,e)}),o(m);var $=v(m,2);V($,5,r,C,(g,s,n)=>{var e=W();N(e,"aria-label",`Go to slide ${n+1}`),y(()=>Q(e,1,`w-2 h-2 rounded-full transition-colors duration-300 ${n===t(a)?"bg-[var(--color-signal)]":"bg-[var(--color-ink-secondary)] opacity-30"}`)),_("click",e,()=>w(a,n)),d(g,e)}),o($),o(c),_("click",G,f),_("click",D,j),d(i,c),U()}export{ot as default};
