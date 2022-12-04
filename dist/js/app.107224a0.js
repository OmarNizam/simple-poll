(function(){"use strict";var t={8943:function(t,e,n){var o=n(9242),a=n(1020),i=n(3396);function s(t,e,n,o,a,s){const r=(0,i.up)("HomePage");return(0,i.wg)(),(0,i.j4)(r)}const r=t=>((0,i.dD)("data-v-c5815bca"),t=t(),(0,i.Cn)(),t),l={class:"container"},u=r((()=>(0,i._)("div",{class:"row text-center"},[(0,i._)("div",null,[(0,i._)("h1",{"test-data-id":"title",class:"text-light py-4"}," Create Simple Poll! ")])],-1))),c={class:"d-lg-flex w-auto",style:{height:"100vh"}},d={class:"col-lg-4 p-lg-0 text-start"},h={class:"col-lg-4 px-lg-2 pt-lg-0 py-2 text-start"},p={class:"col-lg-4 p-lg-0 text-center"};function g(t,e,n,o,a,s){const r=(0,i.up)("PollForm"),g=(0,i.up)("PollVote"),b=(0,i.up)("PollChart");return(0,i.wg)(),(0,i.iD)("main",null,[(0,i._)("div",l,[u,(0,i._)("div",c,[(0,i._)("section",d,[(0,i.Wm)(r)]),(0,i._)("section",h,[(0,i.Wm)(g)]),(0,i._)("section",p,[(0,i.Wm)(b)])])])])}var b=n(7139);const m=t=>((0,i.dD)("data-v-71621b71"),t=t(),(0,i.Cn)(),t),f={class:"card"},v={class:"card-body"},x={class:"mb-3"},_=m((()=>(0,i._)("label",{"test-data-id":"question-input-label",for:"question-input",class:"form-label"},"Poll Question:",-1))),w=["maxlength"],y={key:0,"test-data-id":"question-input-validation",class:"text-danger"},O=m((()=>(0,i._)("label",{for:"answer-input",class:"form-label"},"Poll Options:",-1))),V={"test-data-id":"options-input",class:"d-flex pb-3"},q=["maxlength","onUpdate:modelValue"],k=["test-data-id","disabled"],C=["test-data-id","onClick"],P=["test-data-id"],D={class:"d-flex justify-content-between"},I={class:"mb-0 mt-2 me-3"};function S(t,e,n,a,s,r){const l=(0,i.up)("ion-icon");return(0,i.wg)(),(0,i.iD)("div",f,[(0,i._)("div",v,[(0,i._)("div",x,[_,(0,i.wy)((0,i._)("input",{type:"text",class:"form-control",placeholder:"Enter your question","aria-label":"Question input","test-data-id":"question-input",id:"question-input",maxlength:s.max,"onUpdate:modelValue":e[0]||(e[0]=t=>s.question=t),onInput:e[1]||(e[1]=(...t)=>r.handleQuestion&&r.handleQuestion(...t)),required:""},null,40,w),[[o.nr,s.question]]),s.msg.question?((0,i.wg)(),(0,i.iD)("span",y,(0,b.zw)(s.msg.question),1)):(0,i.kq)("",!0)]),O,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.options.slice(0,10),((n,a)=>((0,i.wg)(),(0,i.iD)("div",{key:a},[(0,i._)("div",V,[(0,i.wy)((0,i._)("input",{type:"text",class:"form-control",placeholder:"Enter your option","aria-label":"Option input",id:"question-input",maxlength:s.max,"onUpdate:modelValue":t=>n.option=t,onInput:e[2]||(e[2]=(...t)=>r.handleOption&&r.handleOption(...t)),required:""},null,40,q),[[o.nr,n.option]]),(0,i.wy)((0,i._)("button",{"test-data-id":`add-button-option-${a}`,class:"btn ms-1 bg-success",onClick:e[3]||(e[3]=(...t)=>r.addOption&&r.addOption(...t)),disabled:t.chartXValues.length>9},[(0,i.Wm)(l,{id:"add-icon",name:"add-circle-outline",size:"large",color:"light"})],8,k),[[o.F8,a===s.options.length-1]]),(0,i.wy)((0,i._)("button",{"test-data-id":`delete-button-option-${a}`,class:"btn bg-danger",onClick:t=>r.removeOption(a)},[(0,i.Wm)(l,{name:"trash-outline",size:"large",color:"light"})],8,C),[[o.F8,a<s.options.length&&0!=a&&1!=a]])]),s.msg.option&&a===s.optionIndex?((0,i.wg)(),(0,i.iD)("span",{key:0,"test-data-id":`option-input-validation-${a}`,class:"text-danger"},(0,b.zw)(s.msg.option),9,P)):(0,i.kq)("",!0)])))),128)),(0,i._)("div",D,[(0,i._)("button",{"test-data-id":"reset-button",class:"btn bg-info",onClick:e[4]||(e[4]=(...t)=>r.reset&&r.reset(...t))},[(0,i.Wm)(l,{id:"reset-icon",name:"refresh-circle-outline",size:"large",color:"light"})]),(0,i._)("p",I,(0,b.zw)(t.chartXValuesLength)+"/10",1)])])])}n(7658);const j=(0,a.Q_)("PollStore",{state:()=>({question:"",answers:[],chartState:{xValues:[],yValues:[0,0,0,0,0,0,0,0,0,0],label:"Votes count",backgroundColor:["rgba(255, 241, 0, 0.2)","rgba(255, 140, 0, 0.2)","rgba(232, 17, 35, 0.2)","rgba(236, 0, 140, 0.2)","rgba(104, 33, 122, 0.2)","rgba(0, 24, 143, 0.2)","rgba(0, 188, 242, 0.2)","rgba(0, 178, 148, 0.2)","rgba(0, 158, 73, 0.2)","rgba(186, 216, 10, 0.2)"],borderColor:["rgb(255, 241, 0)","rgb(255, 140, 0)","rgb(232, 17, 35)","rgb(236, 0, 140)","rgb(104, 33, 122)","rgb(0, 24, 143)","rgb(0, 188, 242)","rgb(0, 178, 148)","rgb(0, 158, 73)","rgb(186, 216, 10)"],borderWidth:1}}),getters:{chartXValues(t){return t.chartState.xValues.map((t=>Object.values(t)[0]))},chartXValuesLength(){return this.chartXValues.length}},actions:{setQuestion(t){this.question=t},setOptions(t){this.chartState.xValues=t},vote(t){this.chartState.yValues[t]++},resetYValues(){this.chartState.yValues=[0,0,0,0,0,0,0,0,0,0]}}});var X={name:"PollForm",data(){return{max:80,msg:[],optionIndex:null,question:"",options:[{option:"option-1"},{option:"option-2"}]}},watch:{question(t){this.validateInput(t,"question")},options:{handler:function(t){this.validateInput(t,"option")},deep:!0}},mounted(){this.handleOption()},computed:{...(0,a.rn)(j,["chartXValues","chartXValuesLength"])},methods:{...(0,a.nv)(j,["setQuestion","setOptions","resetYValues"]),handleQuestion(){this.setQuestion(this.question)},addOption(){this.chartXValues.length<=10&&this.options.push({option:""}),this.handleOption()},removeOption(t){this.options.splice(t,1),this.handleOption()},handleOption(){this.setOptions(this.options)},reset(){this.options=[{option:"option-1"},{option:"option-2"}],this.handleOption(),this.resetYValues()},validateInput(t,e){if(t.length>=this.max&&"question"===e)this.msg[e]="You reach the max limit 80!";else if("option"===e)for(const n of t)if(Object.values(n)[0].length>=this.max){const o=t.indexOf(n);this.optionIndex=o,this.msg[e]=`You reach the max limit 80! for option ${o+1}`}else this.msg[e]="";else this.msg[e]=""}}},Q=n(89);const W=(0,Q.Z)(X,[["render",S],["__scopeId","data-v-71621b71"]]);var $=W;const z={class:"card"},Y={class:"card-body"},F=(0,i._)("h5",null,"Question:",-1),Z={"test-data-id":"question-text"},H=["test-data-id","id","value"],L=["test-data-id","for"],U={class:"d-flex justify-content-end"};function B(t,e,n,a,s,r){return(0,i.wg)(),(0,i.iD)("div",z,[(0,i._)("div",Y,[F,(0,i._)("p",Z,(0,b.zw)(this.question),1),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.chartXValues,((t,n)=>((0,i.wg)(),(0,i.iD)("div",{class:"d-flex form-check justify-content-start align-items-center",key:n},[(0,i.wy)((0,i._)("input",{"test-data-id":`option-radio-${n}`,id:`optionRadio-${n}`,class:"form-check-input",type:"radio",name:"optionRadio",value:`${n}`,"onUpdate:modelValue":e[0]||(e[0]=t=>s.choiceIndex=t)},null,8,H),[[o.G2,s.choiceIndex]]),(0,i._)("label",{"test-data-id":`option-label-${n}`,class:"form-check-label",for:`optionRadio-${n}`},(0,b.zw)(t),9,L)])))),128)),(0,i._)("div",U,[(0,i._)("button",{"test-data-id":"vote-button",class:"btn mt-2 bg-success text-light",onClick:e[1]||(e[1]=e=>t.vote(s.choiceIndex))}," Vote ")])])])}var E={name:"PollVote",data(){return{choiceIndex:""}},computed:{...(0,a.rn)(j,["question","chartXValues"])},methods:{...(0,a.nv)(j,["vote"])}};const R=(0,Q.Z)(E,[["render",B]]);var K=R;const N={class:"card"},T={class:"card-body"};function A(t,e,n,o,a,s){const r=(0,i.up)("Bar");return(0,i.wg)(),(0,i.iD)("div",N,[(0,i._)("div",T,[(0,i.Wm)(r,{"test-data-id":"bar-component","chart-options":s.chartOptions,"chart-data":s.chartData,width:n.width,height:n.height},null,8,["chart-options","chart-data","width","height"])])])}var G=n(6294),M=n(741);M.kL.register(M.Dx,M.u,M.De,M.ZL,M.uw,M.f$);var J={name:"PollChart",components:{Bar:G.$Q},props:{width:{type:Number,default:400},height:{type:Number,default:400}},computed:{...(0,a.rn)(j,["chartState","chartXValues"]),chartData(){return{labels:this.chartXValues,datasets:[{label:this.chartState.label,data:this.chartState.yValues,backgroundColor:this.chartState.backgroundColor,borderColor:this.chartState.borderColor,borderWidth:this.chartState.borderWidth}]}},chartOptions(){return{responsive:!0}}}};const tt=(0,Q.Z)(J,[["render",A]]);var et=tt,nt={name:"HomePage",components:{PollForm:$,PollVote:K,PollChart:et}};const ot=(0,Q.Z)(nt,[["render",g],["__scopeId","data-v-c5815bca"]]);var at=ot,it={name:"App",components:{HomePage:at}};const st=(0,Q.Z)(it,[["render",s]]);var rt=st;const lt=(0,a.WB)(),ut=(0,o.ri)(rt);ut.use(lt),ut.mount("#app")}},e={};function n(o){var a=e[o];if(void 0!==a)return a.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,a,i){if(!o){var s=1/0;for(c=0;c<t.length;c++){o=t[c][0],a=t[c][1],i=t[c][2];for(var r=!0,l=0;l<o.length;l++)(!1&i||s>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[l])}))?o.splice(l--,1):(r=!1,i<s&&(s=i));if(r){t.splice(c--,1);var u=a();void 0!==u&&(e=u)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[o,a,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var a,i,s=o[0],r=o[1],l=o[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(l)var c=l(n)}for(e&&e(o);u<s.length;u++)i=s[u],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(c)},o=self["webpackChunkvue_single_app_template"]=self["webpackChunkvue_single_app_template"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(8943)}));o=n.O(o)})();
//# sourceMappingURL=app.107224a0.js.map