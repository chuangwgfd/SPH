(function(){"use strict";var t={4029:function(t,e,a){var n=a(2856),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},s=[],l=a(1656),r={},o=(0,l.A)(r,i,s,!1,null,null,null),c=o.exports,d=a(1594),u=function(){var t=this,e=t._self._c;return e("div",{staticClass:"login flex-col bg-pri"},[e("div",{staticClass:"login__logo flex center-center"},[e("img",{attrs:{src:t.logo}}),t._m(0)]),e("div",{staticClass:"login__form flex-col bg-white"},[e("div",{staticClass:"login__field flex"},[e("label",[t._v("使用者代碼")]),e("el-input",{model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),e("div",{staticClass:"login__field flex"},[e("label",[t._v("使用者密碼")]),e("el-input",{attrs:{type:"password"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleLogin.apply(null,arguments)}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),e("span",{staticClass:"forgot pointer"},[t._v("忘記密碼?")]),e("el-button",{staticClass:"login__button bg-btn",on:{click:t.handleLogin}},[t._v("登入")])],1)])},m=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-col center-center"},[e("h2",[t._v("市北公立醫院")]),e("h5",[t._v("SHIHPEI PUBLIC HOSPITAL")])])}],v=(a(4114),a.p+"img/公立醫院Logo.c7ada5c0.png"),b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header flex bg-header"},[e("div",{staticClass:"header__logo flex"},[e("img",{attrs:{src:t.logo}}),t._m(0)]),e("el-menu",{staticClass:"menu",attrs:{"default-active":"2",mode:"horizontal"}},[t._l(t.menus,(function(a,n){return[e("el-menu-item",{key:n,attrs:{index:`${n+1}`},on:{click:function(e){return t.$router.push("/main")}}},[t._v(t._s(a.label))])]}))],2)],1)},g=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-col"},[e("h2",[t._v("市北公立醫院")]),e("h5",[t._v("SHIHPEI PUBLIC HOSPITAL")])])}],f={name:"Header",data(){return{logo:v,menus:[{label:"部門科別"},{label:"病歷管理"},{label:"門診科別"},{label:"刀房資訊"},{label:"設備管理"},{label:"系統設定"}]}}},h=f,p=(0,l.A)(h,b,g,!1,null,"4a162d6b",null),C=p.exports,k=function(){var t=this,e=t._self._c;return e("Layout",[e("div",{staticClass:"progress"},[e("div",{staticClass:"menu flex"},[e("div",{staticClass:"menu-item pointer"},[t._v("門診人數")]),e("div",{staticClass:"menu-item pointer active"},[t._v("看診進度")]),e("div",{staticClass:"menu-item pointer"},[t._v("住院病患")]),e("div",{staticClass:"menu-item pointer"},[t._v("藥品管理")])]),e("div",{staticClass:"wrapper"},[e("el-breadcrumb",{staticClass:"breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},[e("el-breadcrumb-item",[t._v("病歷管理")]),e("el-breadcrumb-item",{staticClass:"breadActive"},[t._v("看診進度")])],1),e("div",{staticClass:"wrapper border"},[e("div",{staticClass:"label"},[t._v("今日門診進度")]),e("div",{staticClass:"table border"},[e("div",{staticClass:"t-header grid"},[t._l(t.headers,(function(a){return[e("div",{staticClass:"t-cell"},[t._v(t._s(a.label))])]}))],2),e("div",{staticClass:"t-body"},[t._l(t.tableData,(function(a,n){return[e("div",{key:n,staticClass:"t-row grid",class:a.disabled&&"disabled",on:{click:function(e){return t.handleCheckPatient(a)}}},[t._l(t.headers,(function(i){return["order"===i.key?e("div",{staticClass:"t-cell"},[t._v(t._s(t._f("formatOrder")(n+22)))]):"name"===i.key?e("div",{staticClass:"t-cell"},[t._v(t._s(t._f("formatName")(a[i.key])))]):e("div",{staticClass:"t-cell",style:{color:("uncheck"===a[i.key]||"pass"===a[i.key])&&"red"}},[t._v(t._s(t._f("formatState")(a[i.key])))])]}))],2)]}))],2)])])],1)])])},y=[],_=function(){var t=this,e=t._self._c;return e("div",{staticClass:"layout"},[e("Header"),t._t("default")],2)},I=[],x={name:"Layout",components:{Header:C}},w=x,R=(0,l.A)(w,_,I,!1,null,"4660af7a",null),A=R.exports,O=function(){var t=this,e=t._self._c;return e("div",{staticClass:"sideMenu flex-col"},t._l(t.menu,(function(a,n){return e("div",{key:n,staticClass:"menu-item pointer",class:0===n&&"action"},[t._v(t._s(a))])})),0)},W=[],E={name:"SideMenu",data(){return{menu:["病患資料","歷史病歷","檢驗查詢","診斷證明","住院紀錄","報告彙整"]}}},S=E,B=(0,l.A)(S,O,W,!1,null,"16b75763",null),Z=B.exports,z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"rightTable flex-col"},[t._m(0),e("div",{staticClass:"table"},[e("div",{staticClass:"header"},[t._v("上午診【候診名單】共有38人")]),e("div",{staticClass:"t-header grid"},t._l(t.header,(function(a){return e("div",{staticClass:"t-cell"},[t._v(t._s(a.label))])})),0),e("div",{staticClass:"t-body"},t._l(t.data1,(function(a,n){return e("div",{staticClass:"t-row grid"},[t._l(t.header,(function(i){return["order"===i.key?e("div",{staticClass:"t-cell"},[t._v(t._s(t._f("formatOrder")(n+23)))]):e("div",{staticClass:"t-cell"},[t._v(t._s(a[i.key]))])]}))],2)})),0)]),e("div",{staticClass:"table"},[e("div",{staticClass:"header"},[t._v("下午診【候診名單】共有36人")]),e("div",{staticClass:"t-header grid"},t._l(t.header,(function(a){return e("div",{staticClass:"t-cell"},[t._v(t._s(a.label))])})),0),e("div",{staticClass:"t-body"},t._l(t.data2,(function(a,n){return e("div",{staticClass:"t-row grid"},[t._l(t.header,(function(i){return["order"===i.key?e("div",{staticClass:"t-cell"},[t._v(t._s(t._f("formatOrder")(n+1)))]):e("div",{staticClass:"t-cell"},[t._v(t._s(a[i.key]))])]}))],2)})),0)])])},N=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"doctor-info flex"},[e("span",[t._v("江浩宇 醫師")]),e("span",[t._v("科別：整型外科")]),e("span",[t._v("班別：一般門診")])])}],Q={name:"RightTable",data(){return{header:[{label:"掛號號碼",key:"order"},{label:"病患姓名",key:"name"},{label:"性別",key:"gender"},{label:"病歷號碼",key:"id"},{label:"備註",key:"comment"}],data1:[{name:"劉禹安",gender:"男",id:"3058208",comment:""},{name:"陳文玲",gender:"女",id:"2462503",comment:""},{name:"李世庭",gender:"男",id:"2622886",comment:""},{name:"林小婷",gender:"女",id:"3532483",comment:""},{name:"許永馨",gender:"女",id:"3240572",comment:""},{name:"許津儀",gender:"女",id:"2392803",comment:""},{name:"章小杰",gender:"男",id:"2869005",comment:""},{name:"王安妮",gender:"女",id:"3068526",comment:""},{name:"陳品恩",gender:"女",id:"2724450",comment:""},{name:"廖慈安",gender:"女",id:"3062855",comment:""},{name:"張雅晴",gender:"女",id:"3142500",comment:""},{name:"王士強",gender:"男",id:"2822774",comment:""},{name:"林文禹",gender:"女",id:"2234250",comment:""},{name:"林旬言",gender:"男",id:"3186529",comment:""},{name:"劉禹安",gender:"男",id:"123132",comment:""},{name:"劉禹安",gender:"男",id:"123132",comment:""},{name:"劉禹安",gender:"男",id:"123132",comment:""},{name:"劉禹安",gender:"男",id:"123132",comment:""}],data2:[{name:"林君宜",gender:"女",id:"2166456",comment:""},{name:"王一語",gender:"女",id:"2211540",comment:""},{name:"彭與哲",gender:"男",id:"2771396",comment:""},{name:"林旬言",gender:"男",id:"3186529",comment:""},{name:"林旬言",gender:"男",id:"3186529",comment:""},{name:"林旬言",gender:"男",id:"3186529",comment:""},{name:"林旬言",gender:"男",id:"3186529",comment:""},{name:"林旬言",gender:"男",id:"3186529",comment:""},{name:"林旬言",gender:"男",id:"3186529",comment:""}]}},filters:{formatOrder(t){return String(t).padStart(3,"0")}}},P=Q,G=(0,l.A)(P,z,N,!1,null,"978628b6",null),V=G.exports,U={components:{Layout:A,SideMenu:Z,RightTable:V},data(){return{headers:[{label:"預約號碼",key:"order"},{label:"病患姓名",key:"name"},{label:"病歷號碼",key:"id"},{label:"看診情況",key:"status"},{label:"備註",key:"comment"}],tableData:[{name:"林斯文",id:"3058220",status:"done",comment:"",disabled:!0},{name:"劉O安",id:"3094238",status:"done",comment:"",disabled:!0},{name:"陳O玲",id:"2104585",status:"pass",comment:"",disabled:!0},{name:"李O庭",id:"2205604",status:"uncheck",comment:"",disabled:!0},{name:"林O婷",id:"3049583",status:"done",comment:"",disabled:!0},{name:"許永馨",id:"3532483",status:"wait",comment:"",disabled:!1,clickabled:!0},{name:"許津儀",id:"2392803",status:"wait",comment:"",disabled:!1,clickabled:!0},{name:"吳O宇",id:"3028550",status:"wait",comment:""},{name:"楊O易",id:"2403622",status:"wait",comment:""},{name:"張O瑋",id:"2105968",status:"wait",comment:""},{name:"廖慈安",id:"",status:"wait",comment:""},{name:"張雅晴",id:"",status:"wait",comment:""},{name:"王士強",id:"",status:"wait",comment:""}]}},filters:{formatState(t){const e={done:"已看診完成",pass:"已過號",uncheck:"未報到",wait:"尚未看診"};return e[t]?e[t]:t},formatName(t){return t[0]+"◯"+t[2]},formatOrder(t){return String(t).padStart(3,"0")}},methods:{handleCheckPatient(t){t.clickabled&&this.$router.push({path:"/patient",query:{id:t.id}})}}},Y=U,D=(0,l.A)(Y,k,y,!1,null,"6af11d62",null),j=D.exports,M={data(){return{logo:v,username:"",password:""}},components:{Header:C,Progress:j},methods:{handleLogin(){console.log("Logging in with",this.username,this.password),this.$router.push("/main")}}},J=M,L=(0,l.A)(J,u,m,!1,null,"6eff2c47",null),T=L.exports,H=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("img",{attrs:{alt:"Vue logo",src:a(3153)}}),e("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},K=[],X=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.msg))]),t._m(0),e("h3",[t._v("Installed CLI Plugins")]),t._m(1),e("h3",[t._v("Essential Links")]),t._m(2),e("h3",[t._v("Ecosystem")]),t._m(3)])},F=[function(){var t=this,e=t._self._c;return e("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),e("br"),t._v(" check out the "),e("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t._self._c;return e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])])])},function(){var t=this,e=t._self._c;return e("ul",[e("li",[e("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),e("li",[e("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),e("li",[e("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),e("li",[e("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),e("li",[e("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t._self._c;return e("ul",[e("li",[e("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),e("li",[e("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),e("li",[e("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],q={name:"HelloWorld",props:{msg:String}},$=q,tt=(0,l.A)($,X,F,!1,null,"116c7c08",null),et=tt.exports,at={name:"HomeView",components:{HelloWorld:et}},nt=at,it=(0,l.A)(nt,H,K,!1,null,null,null),st=(it.exports,function(){var t=this,e=t._self._c;return e("Layout",[e("div",{staticClass:"patientInfo"},[e("div",{staticClass:"menu flex"},[e("div",{staticClass:"menu-item pointer"},[t._v("門診人數")]),e("div",{staticClass:"menu-item pointer active"},[t._v("看診進度")]),e("div",{staticClass:"menu-item pointer"},[t._v("住院病患")]),e("div",{staticClass:"menu-item pointer"},[t._v("藥品管理")])]),e("div",{staticClass:"wrapper"},[e("el-breadcrumb",{staticClass:"breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},[e("el-breadcrumb-item",[t._v("病歷管理")]),e("el-breadcrumb-item",[t._v("看診進度")]),e("el-breadcrumb-item",{staticClass:"breadActive"},[t._v("病患資料")])],1),e("div",{staticClass:"wrapper-inner flex"},[e("div",{staticClass:"side"},[e("SideMenu")],1),e("div",{staticClass:"info-section"},[e("label",[t._v("病患基本資料")]),e("div",{staticClass:"flex"},[e("div",{staticClass:"basic grid"},[t._l(t.infoCol,(function(a){return[e("div",{staticClass:"label col"},[t._v(t._s(a.label))]),e("div",{staticClass:"col"},[t._v(t._s(t.patientData[a.key]))])]}))],2),e("button",{staticClass:"actionBtn pointer flex-col center-center",on:{click:t.handleClickBtn}},[e("span",[t._v("進行")]),e("span",[t._v("看診")]),e("Icon",{staticClass:"arrow",attrs:{icon:"tdesign:swap-right"}})],1)]),e("label",[t._v("過敏紀錄")]),e("div",{staticClass:"allergy grid"},[e("div",{staticClass:"label col"},[t._v("過敏藥物名稱")]),e("div",{staticClass:"label col"},[t._v("過敏反應一")]),e("div",{staticClass:"label col"},[t._v("過敏反應二")]),e("div",{staticClass:"label col"},[t._v("註記日期")]),t._l(t.patientData.allergy,(function(a){return[t._l(a,(function(a){return[e("div",{staticClass:"col"},[t._v(t._s(a))])]}))]}))],2),e("label",[t._v("門診看診紀錄")]),e("div",{staticClass:"record grid"},[e("div",{staticClass:"label col"},[t._v("看診日期")]),e("div",{staticClass:"label col"},[t._v("診斷說明")]),e("div",{staticClass:"label col"},[t._v("備註")]),t._l(t.patientData.record,(function(a){return[t._l(a,(function(a){return[e("div",{staticClass:"col"},[t._v(t._s(a))])]}))]}))],2)])])],1)])])}),lt=[],rt=a(8298),ot={components:{Layout:A,SideMenu:Z,Icon:rt.In},data(){return{infoCol:[{label:"姓名",key:"name"},{label:"身分證號碼",key:"national_id"},{label:"病歷號碼",key:"id"},{label:"出生日期",key:"birth"},{label:"性別",key:"gender"},{label:"健保身份",key:"insurance"},{label:"患者年齡",key:"age"},{label:"血型",key:"blood"},{label:"註記",key:"comment"}],allergyCol:[],data:[{name:"許永馨",national_id:"F2209837121",id:"3532483",birth:"1964/4/11",gender:"女",insurance:"符合",age:"61歲",blood:"A",comment:"無",allergy:[{name:"Aspirin",action1:"FEVER",action2:"",time:"2024.03.05"},{name:"Chloramohenicol",action1:"RASH",action2:"",time:"2024.03.05"}],record:[{date:"2024.02.16",description:"因咳嗽症狀就醫",comment:""},{date:"　",description:"　",comment:"　"},{date:"　",description:"　",comment:"　"}]},{name:"許津儀",national_id:"K2223567909",id:"2392803",birth:"1999/7/8",gender:"女",insurance:"符合",age:"26歲",blood:"O",comment:"無",allergy:[{name:"　",action1:"　",action2:"　",time:"　"},{name:"　",action1:"　",action2:"　",time:"　"}],record:[{date:"2024.02.20",description:"一般感冒症狀",comment:""},{date:"　",description:"　",comment:"　"},{date:"　",description:"　",comment:"　"}]},{name:"張志先",national_id:"F12828273655",id:"3575083",birth:"1952/3/18",gender:"男",insurance:"符合",age:"73歲",blood:"AB",comment:"無",allergy:[{name:"Chloramohenicol",action1:"RASH",action2:"",time:"2025.02.12"},{name:"　",action1:"　",action2:"　",time:"　"}],record:[{date:"2025.02.12",description:"因輕微感冒症狀就醫",comment:"　"},{date:"　",description:"　",comment:"　"},{date:"　",description:"　",comment:"　"}]}]}},computed:{patientData(){let t=this.$route.query.id;return this.data.find((e=>e.id===String(t)))}},mounted(){window.scrollTo(0,0)},methods:{handleClickBtn(){this.$router.push({path:"/patient/diagnosis",query:{id:this.$route.query.id}})}}},ct=ot,dt=(0,l.A)(ct,st,lt,!1,null,"7ea8d917",null),ut=dt.exports,mt=function(){var t=this,e=t._self._c;return e("Layout",[e("div",{staticClass:"diagnosis"},[e("div",{staticClass:"top-section"},[t._v("市北公立醫院 > 掛號作業｜日期：2025/1/20")]),e("div",{staticClass:"tabs flex"},[t._l(t.tabs,(function(a,n){return e("div",{staticClass:"tab-item pointer",class:{active:3===n}},[t._v(t._s(a))])})),e("div",{staticClass:"tab-fake flex-1"})],2),e("div",{staticClass:"main-section flex"},[e("div",{staticClass:"flex-col"},[e("div",{staticClass:"base-info grid"},[t._l(t.infoCol,(function(a){return[e("div",{staticClass:"label col text-center"},[t._v(t._s(a.label))]),e("div",{staticClass:"col"},[t._v(t._s(t.patientData[a.key]))])]}))],2),e("div",{staticClass:"diagnosis-info"},[e("div",{staticClass:"flex align-center"},[e("div",{staticClass:"datetime"},[t._v("看診日期")]),e("div",{staticClass:"col"},[t._v(t._s(t.patientData.datetime))]),e("div",{staticClass:"insurance"},[t._v("健保狀態")]),e("div",{staticClass:"col"},[t._v(t._s(t.patientData.insurance))])]),e("div",{staticClass:"input-section"},[e("div",{staticClass:"flex"},[e("div",{staticClass:"label text-center"},[t._v("主訴")]),e("textarea",{staticClass:"flex-1"})]),e("div",{staticClass:"flex"},[e("div",{staticClass:"label text-center"},[t._v("醫囑")]),e("textarea",{staticClass:"flex-1"},[t._v(t._s(t.patientData.doctor_order))])]),e("div",{staticClass:"flex"},[e("div",{staticClass:"label text-center"},[t._v("診斷")]),e("div",{staticClass:"diagnosis-record grid"},t._l(t.patientData.diagnosis,(function(a){return e("div",{staticClass:"col"},[t._v(t._s(a))])})),0)])]),e("div",{staticClass:"drug-table grid"},[e("div",{staticClass:"label col text-center"},[t._v("編號")]),e("div",{staticClass:"label col text-center"},[t._v("藥品處置名稱")]),e("div",{staticClass:"label col text-center"},[t._v("次量")]),e("div",{staticClass:"label col text-center"},[t._v("天數")]),e("div",{staticClass:"label col text-center"},[t._v("總量")]),e("div",{staticClass:"label col text-center"},[t._v("用法說明")]),t._l(t.patientData.drug,(function(a){return[t._l(a,(function(a,n){return[e("div",{staticClass:"cell",class:{"text-center":"num"===n||"days"===n||"usage"===n,"text-right":"per_mount"===n||"total_mount"===n}},[t._v(t._s(a))])]}))]}))],2)])]),e("RightTable")],1)])])},vt=[],bt={name:"Diagnosis",components:{Layout:A,RightTable:V},data(){return{tabs:["F1 病歷首頁","F2 掛號進度","F3 報告查看","F4 看診作業","F5 藥物庫存"],infoCol:[{label:"姓名",key:"name"},{label:"身分證號碼",key:"national_id"},{label:"病歷號碼",key:"id"},{label:"出生日期",key:"birth"},{label:"性別",key:"gender"},{label:"IC註記",key:"insurance"}],data:[{name:"許永馨",national_id:"F2209837121",id:"3532483",birth:"1964/4/11",gender:"女",insurance:"符合",age:"61歲",blood:"A",comment:"無",datetime:"2025/1/20 11:05",doctor_order:"病人之疾病對於現在治療有良好緩解，因腫瘤之標準葡萄糖最大攝取值低，右側肺門淋巴結沒有\n發現腫瘤轉移，本次檢查沒有發現其他異常葡萄糖聚積的地方。",diagnosis:["ICD58:041","消化不良及其他胃功能障礙","ISPA過敏","ICD45:068","ROS1基因異常","","　","　","　"],drug:[{num:"520843",name:"Bevacizumab",per_mount:"0.50",days:"7",total_mount:"7.00",usage:"1天3次"},{num:"650362",name:"Erlotinib",per_mount:"0.50",days:"7",total_mount:"7.00",usage:"1天2次"},{num:"　",name:"",per_mount:"",days:"",total_mount:"",usage:""}]},{name:"許津儀",national_id:"K2223567909",id:"2392803",birth:"1999/7/8",gender:"女",insurance:"符合",age:"26歲",blood:"O",comment:"無",datetime:"2025/1/20 13:20",doctor_order:"病人因確診口腔癌需進行腫瘤切除手術以及口腔重建術，進行右側頸清掃皮瓣修補手術。",diagnosis:["ICD33:026","頰粘膜惡性腫瘤","","ICD33:054","口腔癌合併右側頸部轉移","","　","",""],drug:[{num:"306826",name:"Alloponinal",per_mount:"0.50",days:"3",total_mount:"3.00",usage:"1天3次"},{num:"　",name:"",per_mount:"",days:"",total_mount:"",usage:""},{num:"　",name:"",per_mount:"",days:"",total_mount:"",usage:""}]},{name:"張志先",national_id:"F12828273655",id:"3575083",birth:"1952/3/18",gender:"男",insurance:"符合",age:"73歲",blood:"AB",comment:"無",datetime:"2025/3/3 09:20",doctor_order:"",diagnosis:[{name:"Chloramohenicol",action1:"RASH",action2:"",time:"2025.02.12"},{name:"　",action1:"　",action2:"　",time:"　"}],drug:[{num:"532640",name:"Lansoprazole",per_mount:"0.50",days:"3",total_mount:"3.00",usage:"1天3次"},{num:"440318",name:"Carvedilol",per_mount:"0.50",days:"3",total_mount:"3.00",usage:"1天3次"},{num:"　",name:"",per_mount:"",days:"",total_mount:"",usage:""}]}]}},computed:{patientData(){let t=this.$route.query.id;return this.data.find((e=>e.id===String(t)))}},mounted(){window.scrollTo(0,0)}},gt=bt,ft=(0,l.A)(gt,mt,vt,!1,null,"4649ca0e",null),ht=ft.exports;n["default"].use(d.Ay);const pt=[{path:"/",name:"login",component:T},{path:"/main",name:"main",component:j},{path:"/patient",name:"patient",component:ut},{path:"/patient/diagnosis",name:"diagnosis",component:ht}],Ct=new d.Ay({mode:"history",routes:pt,scrollBehavior(t,e,a){return a||{x:0,y:0}}});var kt=Ct,yt=a(4927),_t=a.n(yt);n["default"].use(_t()),n["default"].config.productionTip=!1,new n["default"]({router:kt,render:t=>t(c)}).$mount("#app")},3153:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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"}},e={};function a(n){var i=e[n];if(void 0!==i)return i.exports;var s=e[n]={id:n,loaded:!1,exports:{}};return t[n].call(s.exports,s,s.exports,a),s.loaded=!0,s.exports}a.m=t,function(){a.amdO={}}(),function(){var t=[];a.O=function(e,n,i,s){if(!n){var l=1/0;for(d=0;d<t.length;d++){n=t[d][0],i=t[d][1],s=t[d][2];for(var r=!0,o=0;o<n.length;o++)(!1&s||l>=s)&&Object.keys(a.O).every((function(t){return a.O[t](n[o])}))?n.splice(o--,1):(r=!1,s<l&&(l=s));if(r){t.splice(d--,1);var c=i();void 0!==c&&(e=c)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[n,i,s]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){a.p="/"}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,s,l=n[0],r=n[1],o=n[2],c=0;if(l.some((function(e){return 0!==t[e]}))){for(i in r)a.o(r,i)&&(a.m[i]=r[i]);if(o)var d=o(a)}for(e&&e(n);c<l.length;c++)s=l[c],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(d)},n=self["webpackChunksph"]=self["webpackChunksph"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(4029)}));n=a.O(n)})();
//# sourceMappingURL=app.110561c4.js.map