"use strict";(self.webpackChunksmart_brain=self.webpackChunksmart_brain||[]).push([[6118],{6118:(i,n,s)=>{s.d(n,{Linker:()=>c});var t=s(4409);class e extends t.jl{constructor(i,n,s,t){super(i,n,s),this.canvasSize=t,this.canvasSize={...t}}contains(i){const{width:n,height:s}=this.canvasSize,{x:t,y:e}=i;return super.contains(i)||super.contains({x:t-n,y:e})||super.contains({x:t-n,y:e-s})||super.contains({x:t,y:e-s})}intersects(i){if(super.intersects(i))return!0;const n=i,s=i,e={x:i.position.x-this.canvasSize.width,y:i.position.y-this.canvasSize.height};if(void 0!==s.radius){const i=new t.jl(e.x,e.y,2*s.radius);return super.intersects(i)}if(void 0!==n.size){const i=new t.M_(e.x,e.y,2*n.size.width,2*n.size.height);return super.intersects(i)}return!1}}var o=s(1744);const r=0,a=0;function l(i,n,s,e,o){const{dx:r,dy:a,distance:l}=(0,t.vr)(i,n);if(!o||l<=s)return l;const c={x:Math.abs(r),y:Math.abs(a)},h=Math.min(c.x,e.width-c.x),u=Math.min(c.y,e.height-c.y);return Math.sqrt(h**2+u**2)}class c extends t.U4{constructor(i){super(i),this._setColor=i=>{if(!i.options.links)return;const n=this.linkContainer,s=i.options.links;let e=void 0===s.id?n.particles.linksColor:n.particles.linksColors.get(s.id);if(e)return;const o=s.color;e=(0,t.PG)(o,s.blink,s.consent),void 0===s.id?n.particles.linksColor=e:n.particles.linksColors.set(s.id,e)},this.linkContainer=i}clear(){}init(){this.linkContainer.particles.linksColor=void 0,this.linkContainer.particles.linksColors=new Map}interact(i){var n;if(!i.options.links)return;i.links=[];const s=i.getPosition(),o=this.container,c=o.canvas.size;if(s.x<r||s.y<a||s.x>c.width||s.y>c.height)return;const h=i.options.links,u=h.opacity,d=null!==(n=i.retina.linksDistance)&&void 0!==n?n:0,p=h.warp;let k;k=p?new e(s.x,s.y,d,c):new t.jl(s.x,s.y,d);const y=o.particles.quadTree.query(k);for(const t of y){const n=t.options.links;if(i===t||null===n||void 0===n||!n.enable||h.id!==n.id||t.spawning||t.destroyed||!t.links||i.links.some((i=>i.destination===t))||t.links.some((n=>n.destination===i)))continue;const e=t.getPosition();if(e.x<r||e.y<a||e.x>c.width||e.y>c.height)continue;const o=l(s,e,d,c,p&&n.warp);if(o>d)continue;const k=(1-o/d)*u;this._setColor(i),i.links.push({destination:t,opacity:k})}}isEnabled(i){var n;return!(null===(n=i.options.links)||void 0===n||!n.enable)}loadParticlesOptions(i){i.links||(i.links=new o.q);for(var n=arguments.length,s=new Array(n>1?n-1:0),t=1;t<n;t++)s[t-1]=arguments[t];for(const e of s)i.links.load(null===e||void 0===e?void 0:e.links)}reset(){}}}}]);
//# sourceMappingURL=6118.ebb64c5b.chunk.js.map