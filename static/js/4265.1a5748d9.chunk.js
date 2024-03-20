"use strict";(self.webpackChunksmart_brain=self.webpackChunksmart_brain||[]).push([[4265],{4265:(t,i,o)=>{o.d(i,{OutOfCanvasUpdater:()=>d});var e=o(4409);class s{constructor(t){this.container=t,this.modes=["bounce","split"]}update(t,i,o,s){if(!this.modes.includes(s))return;const n=this.container;let r=!1;for(const[,e]of n.plugins)if(void 0!==e.particleBounce&&(r=e.particleBounce(t,o,i)),r)break;if(r)return;const a=t.getPosition(),c=t.offset,d=t.getRadius(),u=(0,e.AE)(a,d),p=n.canvas.size;!function(t){if("bounce"!==t.outMode&&"split"!==t.outMode||"left"!==t.direction&&"right"!==t.direction)return;t.bounds.right<0&&"left"===t.direction?t.particle.position.x=t.size+t.offset.x:t.bounds.left>t.canvasSize.width&&"right"===t.direction&&(t.particle.position.x=t.canvasSize.width-t.size-t.offset.x);const i=t.particle.velocity.x;let o=!1;if("right"===t.direction&&t.bounds.right>=t.canvasSize.width&&i>0||"left"===t.direction&&t.bounds.left<=0&&i<0){const i=(0,e.VG)(t.particle.options.bounce.horizontal.value);t.particle.velocity.x*=-i,o=!0}if(!o)return;const s=t.offset.x+t.size;t.bounds.right>=t.canvasSize.width&&"right"===t.direction?t.particle.position.x=t.canvasSize.width-s:t.bounds.left<=0&&"left"===t.direction&&(t.particle.position.x=s),"split"===t.outMode&&t.particle.destroy()}({particle:t,outMode:s,direction:i,bounds:u,canvasSize:p,offset:c,size:d}),function(t){if("bounce"!==t.outMode&&"split"!==t.outMode||"bottom"!==t.direction&&"top"!==t.direction)return;t.bounds.bottom<0&&"top"===t.direction?t.particle.position.y=t.size+t.offset.y:t.bounds.top>t.canvasSize.height&&"bottom"===t.direction&&(t.particle.position.y=t.canvasSize.height-t.size-t.offset.y);const i=t.particle.velocity.y;let o=!1;if("bottom"===t.direction&&t.bounds.bottom>=t.canvasSize.height&&i>0||"top"===t.direction&&t.bounds.top<=0&&i<0){const i=(0,e.VG)(t.particle.options.bounce.vertical.value);t.particle.velocity.y*=-i,o=!0}if(!o)return;const s=t.offset.y+t.size;t.bounds.bottom>=t.canvasSize.height&&"bottom"===t.direction?t.particle.position.y=t.canvasSize.height-s:t.bounds.top<=0&&"top"===t.direction&&(t.particle.position.y=s),"split"===t.outMode&&t.particle.destroy()}({particle:t,outMode:s,direction:i,bounds:u,canvasSize:p,offset:c,size:d})}}class n{constructor(t){this.container=t,this.modes=["destroy"]}update(t,i,o,s){if(!this.modes.includes(s))return;const n=this.container;switch(t.outType){case"normal":case"outside":if((0,e.Tj)(t.position,n.canvas.size,e.Mi.origin,t.getRadius(),i))return;break;case"inside":{const{dx:i,dy:o}=(0,e.vr)(t.position,t.moveCenter),{x:s,y:n}=t.velocity;if(s<0&&i>t.moveCenter.radius||n<0&&o>t.moveCenter.radius||s>=0&&i<-t.moveCenter.radius||n>=0&&o<-t.moveCenter.radius)return;break}}n.particles.remove(t,void 0,!0)}}class r{constructor(t){this.container=t,this.modes=["none"]}update(t,i,o,s){var n;if(!this.modes.includes(s))return;if(null!==(n=t.options.move.distance.horizontal&&("left"===i||"right"===i))&&void 0!==n?n:t.options.move.distance.vertical&&("top"===i||"bottom"===i))return;const r=t.options.move.gravity,a=this.container,c=a.canvas.size,d=t.getRadius();if(r.enable){const o=t.position;(!r.inverse&&o.y>c.height+d&&"bottom"===i||r.inverse&&o.y<-d&&"top"===i)&&a.particles.remove(t)}else{if(t.velocity.y>0&&t.position.y<=c.height+d||t.velocity.y<0&&t.position.y>=-d||t.velocity.x>0&&t.position.x<=c.width+d||t.velocity.x<0&&t.position.x>=-d)return;(0,e.Tj)(t.position,a.canvas.size,e.Mi.origin,d,i)||a.particles.remove(t)}}}class a{constructor(t){this.container=t,this.modes=["out"]}update(t,i,o,s){if(!this.modes.includes(s))return;const n=this.container;switch(t.outType){case"inside":{const{x:i,y:o}=t.velocity,s=e.Mi.origin;s.length=t.moveCenter.radius,s.angle=t.velocity.angle+Math.PI,s.addTo(e.Mi.create(t.moveCenter));const{dx:r,dy:a}=(0,e.vr)(t.position,s);if(i<=0&&r>=0||o<=0&&a>=0||i>=0&&r<=0||o>=0&&a<=0)return;t.position.x=Math.floor((0,e.BH)({min:0,max:n.canvas.size.width})),t.position.y=Math.floor((0,e.BH)({min:0,max:n.canvas.size.height}));const{dx:c,dy:d}=(0,e.vr)(t.position,t.moveCenter);t.direction=Math.atan2(-d,-c),t.velocity.angle=t.direction;break}default:if((0,e.Tj)(t.position,n.canvas.size,e.Mi.origin,t.getRadius(),i))return;switch(t.outType){case"outside":{t.position.x=Math.floor((0,e.BH)({min:-t.moveCenter.radius,max:t.moveCenter.radius}))+t.moveCenter.x,t.position.y=Math.floor((0,e.BH)({min:-t.moveCenter.radius,max:t.moveCenter.radius}))+t.moveCenter.y;const{dx:i,dy:o}=(0,e.vr)(t.position,t.moveCenter);t.moveCenter.radius&&(t.direction=Math.atan2(o,i),t.velocity.angle=t.direction);break}case"normal":{const o=t.options.move.warp,s=n.canvas.size,r={bottom:s.height+t.getRadius()+t.offset.y,left:-t.getRadius()-t.offset.x,right:s.width+t.getRadius()+t.offset.x,top:-t.getRadius()-t.offset.y},a=t.getRadius(),c=(0,e.AE)(t.position,a);"right"===i&&c.left>s.width+t.offset.x?(t.position.x=r.left,t.initialPosition.x=t.position.x,o||(t.position.y=(0,e.G0)()*s.height,t.initialPosition.y=t.position.y)):"left"===i&&c.right<-t.offset.x&&(t.position.x=r.right,t.initialPosition.x=t.position.x,o||(t.position.y=(0,e.G0)()*s.height,t.initialPosition.y=t.position.y)),"bottom"===i&&c.top>s.height+t.offset.y?(o||(t.position.x=(0,e.G0)()*s.width,t.initialPosition.x=t.position.x),t.position.y=r.top,t.initialPosition.y=t.position.y):"top"===i&&c.bottom<-t.offset.y&&(o||(t.position.x=(0,e.G0)()*s.width,t.initialPosition.x=t.position.x),t.position.y=r.bottom,t.initialPosition.y=t.position.y);break}}}}}const c=(t,i)=>t.default===i||t.bottom===i||t.left===i||t.right===i||t.top===i;class d{constructor(t){this._updateOutMode=(t,i,o,e)=>{for(const s of this.updaters)s.update(t,e,i,o)},this.container=t,this.updaters=[]}init(t){this.updaters=[];const i=t.options.move.outModes;c(i,"bounce")?this.updaters.push(new s(this.container)):c(i,"out")?this.updaters.push(new a(this.container)):c(i,"destroy")?this.updaters.push(new n(this.container)):c(i,"none")&&this.updaters.push(new r(this.container))}isEnabled(t){return!t.destroyed&&!t.spawning}update(t,i){var o,e,s,n;const r=t.options.move.outModes;this._updateOutMode(t,i,null!==(o=r.bottom)&&void 0!==o?o:r.default,"bottom"),this._updateOutMode(t,i,null!==(e=r.left)&&void 0!==e?e:r.default,"left"),this._updateOutMode(t,i,null!==(s=r.right)&&void 0!==s?s:r.default,"right"),this._updateOutMode(t,i,null!==(n=r.top)&&void 0!==n?n:r.default,"top")}}}}]);
//# sourceMappingURL=4265.1a5748d9.chunk.js.map