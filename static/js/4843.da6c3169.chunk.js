"use strict";(self.webpackChunksmart_brain=self.webpackChunksmart_brain||[]).push([[4843],{4843:(e,i,s)=>{s.d(i,{ImagePreloaderPlugin:()=>o});class r{constructor(){this.src="",this.gif=!1}load(e){e&&(void 0!==e.gif&&(this.gif=e.gif),void 0!==e.height&&(this.height=e.height),void 0!==e.name&&(this.name=e.name),void 0!==e.replaceColor&&(this.replaceColor=e.replaceColor),void 0!==e.src&&(this.src=e.src),void 0!==e.width&&(this.width=e.width))}}class o{constructor(e){this.id="imagePreloader",this._engine=e}async getPlugin(){return await Promise.resolve(),{}}loadOptions(e,i){if(null===i||void 0===i||!i.preload)return;e.preload||(e.preload=[]);const s=e.preload;for(const o of i.preload){const e=s.find((e=>e.name===o.name||e.src===o.src));if(e)e.load(o);else{const e=new r;e.load(o),s.push(e)}}}needsPlugin(){return!0}}}}]);
//# sourceMappingURL=4843.da6c3169.chunk.js.map