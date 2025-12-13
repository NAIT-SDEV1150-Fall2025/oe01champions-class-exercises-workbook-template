(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const a=document.createElement("template");a.innerHTML=`
  <style>
    :host {
      --card-bg: var(--global-card-bg, #ffffff);
      --card-color: var(--global-card-color, #222222);
      --card-accent: var(--global-card-accent, #0077ff);
      display: block;
    }
    .card {
      background: var(--card-bg);
      color: var(--card-color);
      border: 1px solid #e6e6e6;
      padding: 12px;
      border-radius: 8px;
      display: flex;
      gap: 12px;
      align-items: center;
      width: 320px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
    }
    .name {
      color: var(--card-accent);
      display: block;
      font-size: 1.2em;
      font-weight: bold;
      margin: 0;
    }
    .description {
      font-size: 0.9rem;
      color: #666;
      display: block;
      margin-top: 4px;
    }
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      flex: 0 0 80px;
    }
  </style>
  
  <div class="card">
    <img src="" width="80" height="80" alt="avatar">
    <div class="info">
      <slot name="name" class="name"></slot>
      <slot name="description" class="description"></slot>
      <button>Follow</button>
    </div>
  </div>
`;document.body.appendChild(a);class f extends HTMLElement{#t=!1;#e=null;constructor(){super(),this.#t=!1,this.#e=null,this._onButtonClick=this._onButtonClick.bind(this);const e=this.attachShadow({mode:"open"}),r=a.content.cloneNode(!0);this._img=r.querySelector("img"),this._btn=r.querySelector("button"),e.appendChild(r)}_renderFromUser(){if(this.#e){this.#e.avatar?this._img.src=this.#e.avatar:this._img.src="https://placehold.co/80x80/0077ff/ffffff",this.setAttribute("user-id",this.#e.id||"");const e=this.shadowRoot.querySelector('[name="name"]');e&&(e.textContent=this.#e.name||"");const r=this.shadowRoot.querySelector('[name="description"]');r&&(r.textContent=this.#e.description||"")}}set user(e){this.#e=e,this._renderFromUser()}get user(){return this.#e}_onButtonClick(){this._setFollow(!this.#t)}connectedCallback(){if(this._btn.addEventListener("click",this._onButtonClick),this.#e)this._renderFromUser();else{const e=this.getAttribute("avatar");e?this._img.src=e:this._img.src="https://placehold.co/80x80/0077ff/ffffff"}}disconnectedCallback(){this._btn.removeEventListener("click",this._onButtonClick)}follow(){this._setFollow(!0)}unfollow(){this._setFollow(!1)}get followed(){return this.#t}_setFollow(e){this.#t=e,this._btn.textContent=this.#t?"Following":"Follow",this.dispatchEvent(new CustomEvent("follow-change",{detail:{id:this.getAttribute("user-id")||null,followed:this.followed},bubbles:!0,composed:!0}))}static get observedAttributes(){return["avatar"]}attributeChangedCallback(e,r,n){if(e==="avatar"&&this.shadowRoot){const t=this.shadowRoot.querySelector("img");t&&(t.src=n)}}}customElements.define("user-card",f);const h=[{id:"u1",name:"Zelda",avatar:"assets/zelda-avatar.png",description:"Princess of Hyrule"},{id:"u2",name:"Link",avatar:"assets/link-avatar.png",description:"Hero of Hyrule"},{id:"u3",name:"Mipha",description:"Zora Champion"}],u=document.querySelector("main");h.forEach(s=>{const e=document.createElement("user-card");e.user=s,u.appendChild(e)});let c=0;u.addEventListener("follow-change",s=>{c+=s.detail.followed?1:-1;const e=document.querySelector("#follow-counter");e.textContent=`Followed: ${c}`,console.log("follow-change:",s.detail)});document.querySelector("user-card")?.follow();let l=!1;const d=document.querySelector("#btn-theme");d.addEventListener("click",()=>{l=!l,document.documentElement.style.setProperty("--global-card-bg",l?"#1f2937":"#ffffff"),document.documentElement.style.setProperty("--global-card-color",l?"#e5e7eb":"#222222"),document.documentElement.style.setProperty("--global-card-accent",l?"gold":"#0077ff"),d.textContent=l?"☀️":"🌙"});
