"use strict";(self.webpackChunksmart_brain=self.webpackChunksmart_brain||[]).push([[8427],{8427:(t,e,a)=>{a.d(e,{RotateUpdater:()=>r});var o=a(4409);class i{constructor(){this.enable=!1,this.speed=0,this.decay=0,this.sync=!1}load(t){t&&(void 0!==t.enable&&(this.enable=t.enable),void 0!==t.speed&&(this.speed=(0,o.DT)(t.speed)),void 0!==t.decay&&(this.decay=(0,o.DT)(t.decay)),void 0!==t.sync&&(this.sync=t.sync))}}class n extends o.PV{constructor(){super(),this.animation=new i,this.direction="clockwise",this.path=!1,this.value=0}load(t){t&&(super.load(t),void 0!==t.direction&&(this.direction=t.direction),this.animation.load(t.animation),void 0!==t.path&&(this.path=t.path))}}const s=2*Math.PI;class r{constructor(t){this.container=t}init(t){const e=t.options.rotate;if(!e)return;t.rotate={enable:e.animation.enable,value:(0,o.pu)((0,o.VG)(e.value)),min:0,max:s},t.pathRotation=e.path;let a=e.direction;if("random"===a){a=Math.floor(2*(0,o.G0)())>0?"counter-clockwise":"clockwise"}switch(a){case"counter-clockwise":case"counterClockwise":t.rotate.status="decreasing";break;case"clockwise":t.rotate.status="increasing"}const i=e.animation;i.enable&&(t.rotate.decay=1-(0,o.VG)(i.decay),t.rotate.velocity=(0,o.VG)(i.speed)/360*this.container.retina.reduceFactor,i.sync||(t.rotate.velocity*=(0,o.G0)())),t.rotation=t.rotate.value}isEnabled(t){const e=t.options.rotate;return!!e&&(!t.destroyed&&!t.spawning&&e.animation.enable&&!e.path)}loadOptions(t){t.rotate||(t.rotate=new n);for(var e=arguments.length,a=new Array(e>1?e-1:0),o=1;o<e;o++)a[o-1]=arguments[o];for(const i of a)t.rotate.load(null===i||void 0===i?void 0:i.rotate)}update(t,e){this.isEnabled(t)&&t.rotate&&((0,o.UC)(t,t.rotate,!1,"none",e),t.rotation=t.rotate.value)}}}}]);
//# sourceMappingURL=8427.713f580f.chunk.js.map