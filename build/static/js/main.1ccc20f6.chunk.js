(this["webpackJsonp@ibm-watson/speech-to-text-code-pattern"]=this["webpackJsonp@ibm-watson/speech-to-text-code-pattern"]||[]).push([[0],{111:function(e,t,a){},120:function(e,t){},122:function(e,t){},130:function(e,t){},132:function(e,t){},166:function(e,t){},168:function(e,t){},173:function(e,t){},175:function(e,t){},182:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(91),o=a.n(i),c=(a(111),a(186)),s=a(194),u=a(97),l=a.n(u),d=a(98),p=a.n(d),f=a(101),m=a.n(f),b=a(100),y=a.n(b),h=a(99),v=a.n(h),j=a(195),g=a(3),x=function(e){var t=e.description,a=e.links,n=e.title;return Object(g.jsxs)(j.a,{className:"header",children:[Object(g.jsxs)("div",{className:"title-container",children:[Object(g.jsx)("h2",{className:"header-title",children:n}),Object(g.jsx)("p",{children:t})]}),Object(g.jsx)("div",{className:"link-container",children:Object(g.jsx)("div",{className:"link-wrapper",children:a.map((function(e){return e}))})})]})};x.defaultProps={description:"",links:[],title:""};var S=x,O=a(5),k=a(7),w=a.n(k),C=a(14),P=a(13),A=a(57),_=a.n(A),T=a(92),I=a.n(T),R=a(188),E=a(192),D=a(190),N=a(196),W=a(93),U=a.n(W),F=a(36),B=function(e){var t=e.isRecording,a=e.isSamplePlaying,r=e.isUploadPlaying,i=e.keywordText,o=e.modelName,c=e.onError,u=e.onStartPlayingFileUpload,l=e.onStopPlayingFileUpload,d=e.onStartPlayingSample,p=e.onStopPlayingSample,f=e.onStartRecording,m=e.onStopRecording,b=e.useSpeakerLabels,y=Object(n.useState)([]),h=Object(P.a)(y,2),v=h[0],j=h[1];Object(n.useEffect)((function(){var e=[];i.length>0&&(e=i.split(",").map((function(e){return e.trim()}))),j(e)}),[i]);var x=F.find((function(e){return e.name===o})),S=x?x.filename:null,k=function(){var e=Object(C.a)(w.a.mark((function e(){var t,a,n,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U()("/api/auth");case 2:return t=e.sent,e.next=5,t.json();case 5:if(a=e.sent,t.ok){e.next=9;break}return c(a),e.abrupt("return",{error:a});case 9:return n={},r=v.map((function(e){return e.toLowerCase()})),n=Object(O.a)(Object(O.a)({},n),{},{url:a.url||void 0,accessToken:a.accessToken,format:!0,keywords:v.length>0?r:void 0,keywordsThreshold:v.length>0?.01:void 0,model:o,objectMode:!0,play:!0,realtime:!0,resultsBySpeaker:b,speakerlessInterim:!0,timestamps:!0}),e.abrupt("return",n);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(C.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:return t=e.sent,e.abrupt("return",Object(O.a)(Object(O.a)({},t),{},{file:"audio/".concat(S)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(C.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:return t=e.sent,e.abrupt("return",Object(O.a)(Object(O.a)({},t),{},{resultsBySpeaker:!1}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(C.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:return a=e.sent,e.abrupt("return",Object(O.a)(Object(O.a)({},a),{},{file:t,resultsBySpeaker:!1}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"submit-container",children:[a?Object(g.jsx)(s.a,{className:"submit-button",kind:"tertiary",onClick:p,children:"Stop audio sample"}):Object(g.jsx)(s.a,{className:"submit-button",disabled:!o,kind:"tertiary",onClick:Object(C.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:(t=e.sent).error||d(t);case 4:case"end":return e.stop()}}),e)}))),children:"Play audio sample"}),t?Object(g.jsx)(s.a,{className:"submit-button",kind:"tertiary",onClick:m,children:"Stop recording"}):Object(g.jsx)(s.a,{className:"submit-button",disabled:!o,kind:"tertiary",onClick:Object(C.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:(t=e.sent).error||f(t);case 4:case"end":return e.stop()}}),e)}))),children:"Record your own"}),r?Object(g.jsx)(s.a,{className:"submit-button",kind:"tertiary",onClick:l,children:"Stop playing"}):Object(g.jsx)(N.a,{accept:["audio/wav","audio/mpeg","audio/flac","audio/opus"],buttonKind:"tertiary",className:"submit-button",disabled:!o,disableLabelChanges:!0,labelText:"Upload file",onChange:function(){var e=Object(C.a)(w.a.mark((function e(t){var a,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.currentTarget.files[0],e.next=3,T(a);case 3:(n=e.sent).error||u(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})]})};B.defaultProps={isRecording:!1,isSamplePlaying:!1,isUploadPlaying:!1,keywordText:"",modelName:null,onError:function(){},onStartPlayingFileUpload:function(){},onStopPlayingFileUpload:function(){},onStartPlayingSample:function(){},onStopPlayingSample:function(){},onStartRecording:function(){},onStopRecording:function(){},useSpeakerLabels:!1};var L=B,M=function(e){var t=e.isRecording,a=e.isSamplePlaying,r=e.isUploadPlaying,i=e.onError,o=e.onSelectNewModel,c=e.onStartPlayingFileUpload,s=e.onStopPlayingFileUpload,u=e.onStartPlayingSample,l=e.onStopPlayingSample,d=e.onStartRecording,p=e.onStopRecording,f=F.map((function(e){return{id:e.name,label:e.description,supportsSpeakerLabels:e.supported_features.speaker_labels}})),m=Object(n.useState)(f[0]),b=Object(P.a)(m,2),y=b[0],h=b[1],v=Object(n.useState)(F[0].keywords),x=Object(P.a)(v,2),S=x[0],O=x[1],k=Object(n.useState)(!1),w=Object(P.a)(k,2),C=w[0],A=w[1];return Object(g.jsxs)(j.a,{className:"control-container",children:[Object(g.jsx)("h3",{className:"container-title",children:"Input"}),Object(g.jsx)(R.a,{legendText:"Language model",children:Object(g.jsx)(E.a,{id:"language-model-dropdown",label:"Select a language model",onChange:function(e){h(e.selectedItem);var t=F.find((function(t){return t.name===e.selectedItem.id})).keywords;O(t),C&&!e.selectedItem.supportsSpeakerLabels&&A(!1),o()},items:f,selectedItem:y&&y.label,defaultText:"Select a language model",ariaLabel:"Language selection dropdown",light:!0})}),Object(g.jsx)(R.a,{legendText:"Keywords to spot",children:Object(g.jsx)(D.a,{id:"custom-keyword-input",labelText:"Custom language keyword input",placeholder:"Enter custom language keywords",hideLabel:!0,invalidText:"Invalid keywords provided",value:S,onChange:function(e){O(e.target.value)},light:!0})}),Object(g.jsx)(L,{isRecording:t,isSamplePlaying:a,isUploadPlaying:r,keywordText:S,modelName:y&&y.id,onError:i,onStartPlayingFileUpload:c,onStopPlayingFileUpload:s,onStartPlayingSample:u,onStopPlayingSample:l,onStartRecording:d,onStopRecording:p,useSpeakerLabels:C})]})};M.defaultProps={isRecording:!1,isSamplePlaying:!1,isUploadPlaying:!1,onError:function(){},onSelectNewModel:function(){},onStartPlayingFileUpload:function(){},onStopPlayingFileUpload:function(){},onStartPlayingSample:function(){},onStopPlayingSample:function(){},onStartRecording:function(){},onStopRecording:function(){}};var z=M,G=a(94),J=a(95),K=a(48),Y=a(103),q=a(102),V=50,Z=50,H=function(e){Object(Y.a)(a,e);var t=Object(q.a)(a);function a(e){var n;return Object(G.a)(this,a),(n=t.call(this,e)).audioWaveCanvasRef=r.a.createRef(),n.audioWaveCanvasCtx=null,n.animationFrameId=null,n.draw=n.draw.bind(Object(K.a)(n)),n.state={startingTimestamp:0,microphoneData:new Uint8Array(1024)},n}return Object(J.a)(a,[{key:"componentDidMount",value:function(){this.audioWaveCanvasCtx=this.audioWaveCanvasRef.current.getContext("2d"),this.audioWaveCanvasCtx.lineCap="round",this.initializeCanvasDimensions()}},{key:"componentDidUpdate",value:function(e){Object(P.a)(e.data,1)[0]!==Object(P.a)(this.props.data,1)[0]&&this.drawInitialAudioWave(),!1===e.isTranscribing&&!0===this.props.isTranscribing?(this.setStartingTimestamp(),this.draw()):!0===e.isTranscribing&&!1===this.props.isTranscribing&&this.stopDrawing()}},{key:"setStartingTimestamp",value:function(){this.setState({startingTimestamp:Date.now()})}},{key:"initializeCanvasDimensions",value:function(){var e=this.audioWaveCanvasRef.current,t=this.props.audioWaveContainerRef.current;e.width=t.clientWidth,e.height=100}},{key:"drawInitialAudioWave",value:function(){this.resetCanvasForNewFrame(),this.drawEmptyDataPoints()}},{key:"drawEmptyDataPoints",value:function(){var e=this;this.props.data.forEach((function(t,a){e.audioWaveCanvasCtx.beginPath(),e.audioWaveCanvasCtx.fillStyle="rgba(0, 98, 255, 0.5)",e.audioWaveCanvasCtx.fillRect(2*a,Z,1,V*t),e.audioWaveCanvasCtx.fillRect(2*a,Z,1,-50*t),e.audioWaveCanvasCtx.stroke(),e.audioWaveCanvasCtx.closePath()}))}},{key:"drawMicrophoneDataPoints",value:function(){var e=this;this.props.audioAnalyzer.getByteFrequencyData(this.state.microphoneData);var t=this.state.microphoneData;[].slice.call(t).map((function(e){return e/255})).forEach((function(t,a){e.audioWaveCanvasCtx.beginPath(),e.audioWaveCanvasCtx.fillStyle="rgba(0, 98, 255, 1)",e.audioWaveCanvasCtx.fillRect(2*a,Z,1,V*t),e.audioWaveCanvasCtx.fillRect(2*a,Z,1,-50*t),e.audioWaveCanvasCtx.stroke(),e.audioWaveCanvasCtx.closePath()}))}},{key:"drawAudioDataPoints",value:function(){var e=this,t=this.props,a=t.data,n=t.duration,r=(Date.now()-this.state.startingTimestamp)/n,i=a.length*r,o=Math.floor(i),c=i-o;c>1&&(c=1),c<.5&&(c=.5),a.forEach((function(t,a){e.audioWaveCanvasCtx.beginPath();var n="rgba(0, 98, 255, 1)";a>o&&(n="rgba(0, 98, 255, 0.5)"),a-1===o&&(n="rgba(0, 98, 255, ".concat(c.toFixed(2),")")),e.audioWaveCanvasCtx.fillStyle=n,e.audioWaveCanvasCtx.fillRect(2*a,Z,1,V*t),e.audioWaveCanvasCtx.fillRect(2*a,Z,1,-50*t),e.audioWaveCanvasCtx.stroke(),e.audioWaveCanvasCtx.closePath()}))}},{key:"draw",value:function(){this.resetCanvasForNewFrame(),this.props.audioSource&&"microphone"===this.props.audioSource?this.drawMicrophoneDataPoints():this.drawAudioDataPoints(),this.animationFrameId=requestAnimationFrame(this.draw)}},{key:"resetCanvasForNewFrame",value:function(){var e=this.audioWaveCanvasRef.current;this.audioWaveCanvasCtx.clearRect(0,0,e.width,e.height)}},{key:"stopDrawing",value:function(){this.animationFrameId&&cancelAnimationFrame(this.animationFrameId)}},{key:"render",value:function(){return Object(g.jsx)("div",{ref:this.props.audioWaveContainerRef,className:"audiowave",children:Object(g.jsx)("canvas",{ref:this.audioWaveCanvasRef})})}}]),a}(r.a.Component);H.defaultProps={audioSource:null,audioAnalyzer:null};var Q=H,X=a(191),$=function(e){var t=e.confidence,a=e.startTime,n=e.endTime;return Object(g.jsxs)("div",{className:"keyword-tooltip",children:[Object(g.jsxs)("p",{children:["Confidence: ",t]}),Object(g.jsxs)("p",{children:[a,"s - ",n,"s"]})]})},ee=a(27),te=function(e,t,a){var n=[];if(t.length>0){var r=function(e){var t=[];e.forEach((function(e){t=[].concat(Object(ee.a)(t),Object(ee.a)(Object.keys(e)))}));var a=t.map((function(e,a){return a!==t.length-1?"".concat(e,"|"):e})).reduce((function(e,t){return e+t}),"");return new RegExp("(".concat(a,")(?!')"),"gi")}(t);n=e.split(r)}if(0===n.length)return[{text:e,type:"normal"}];var i={};return n.map((function(e,n){var r=e.toLowerCase();if(n%2===0)return{text:e,type:"normal"};var o=t[a]&&t[a][r],c=0;i[r]?(c=i[r],i[r]+=1):i[r]=1;var s=o&&o[c];return s?{text:e,type:"keyword",startTime:s.start_time,endTime:s.end_time,confidence:s.confidence}:{}}))},ae=function(e){var t=e.keywordInfo,a=e.transcriptArray;return Object(g.jsx)("div",{className:"transcript-box",children:a.map((function(e,a){var n=e.speaker,r=e.text,i=te(r,t,a);return Object(g.jsxs)("div",{children:[null!==n&&Object(g.jsx)("span",{className:"speaker-label--".concat(n),children:"Speaker ".concat(n,": ")}),i.map((function(e,t){return e?"normal"===e.type?Object(g.jsx)("span",{children:"".concat(e.text)},"transcript-text-".concat(a,"-").concat(t)):"keyword"===e.type?Object(g.jsx)(X.a,{align:"center",direction:"top",tooltipText:Object(g.jsx)($,{confidence:e.confidence,startTime:e.startTime,endTime:e.endTime}),triggerClassName:"keyword-info-trigger",children:e.text},"transcript-keyword-".concat(a,"-").concat(t)):null:null}))]},"transcript-".concat(a))}))})};ae.defaultProps={keywordInfo:[],transcriptArray:[]};var ne=ae,re=function(e){var t=e.keywordInfo,a=e.transcriptArray;return Object(g.jsx)("div",{className:"keyword-box",children:a.map((function(e,a){var n=e.speaker,r=function(e,t){var a=[],n=[];t.forEach((function(e){n=[].concat(Object(ee.a)(n),Object(ee.a)(Object.keys(e)))}));var r=e.length;return n.map((function(t){for(var n=0;n<r;){var i=e.indexOf(t,n);if(i<0)n=r;else{var o=i-5>-1?i-5:0,c=(n=i+t.length)+5<r?n+5:r,s={pos:i,keyword:t,subtext:e.slice(o,c)};a.push(s)}}})),a}(e.text,t);return Object(g.jsxs)("div",{children:[null!==n&&Object(g.jsx)("span",{className:"keywordbox-speaker-label--".concat(n),children:"Speaker ".concat(n,": ")}),r.sort((function(e,t){return e.pos-t.pos})).map((function(e,t){return e?Object(g.jsx)("p",{children:Object(g.jsxs)("span",{children:["Position:","".concat(e.pos),", Keyword: ","".concat(e.keyword),", Subtext:","".concat(e.subtext)]},"searchresult-".concat(a,"-").concat(t))}):null}))]},"keyword-".concat(a))}))})};re.defaultProps={keywordInfo:[],transcriptArray:[]};var ie=re,oe=function(e){var t=e.audioAnalyzer,a=e.audioDataArray,n=e.audioDuration,r=e.audioSource,i=e.audioWaveContainerRef,o=e.isTranscribing,c=e.keywordInfo,s=e.transcriptArray;return Object(g.jsxs)(j.a,{className:"output-container",children:[Object(g.jsx)("h3",{className:"container-title",children:"Output"}),Object(g.jsx)(R.a,{legendText:"Audio",children:Object(g.jsx)(Q,{audioWaveContainerRef:i,data:a,duration:n,isTranscribing:o,audioSource:r,audioAnalyzer:t})}),Object(g.jsx)(R.a,{legendText:"Transcript",children:Object(g.jsx)(ne,{keywordInfo:c,transcriptArray:s})}),Object(g.jsx)(R.a,{legendText:"Keyword",children:Object(g.jsx)(ie,{keywordInfo:c,transcriptArray:s})})]})};oe.defaultProps={audioDataArray:[],audioDuration:0,audioSource:"",isTranscribing:!1,keywordInfo:[],transcriptArray:[]};var ce=oe,se=a(193),ue="notificationHasBeenSeen",le=function(e){var t=e.caption,a=e.children,r=e.className,i=e.hideAfterFirstDisplay,o=e.hideCloseButton,c=e.iconDescription,s=e.kind,u=e.lowContrast,l=e.onCloseButtonClick,d=e.role,p=e.subtitle,f=e.timeout,m=e.title,b=Object(n.useState)(),y=Object(P.a)(b,2),h=y[0],v=y[1],j=Object(n.useState)(!1),x=Object(P.a)(j,2),S=x[0],O=x[1];return Object(n.useEffect)((function(){v(Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15))}),[]),Object(n.useEffect)((function(){var e=document.querySelector(".custom-toast-".concat(h));e&&(e.className+="enter")}),[h]),Object(n.useEffect)((function(){i&&void 0!==typeof window&&void 0!==typeof window.localStorage&&"true"===window.localStorage.getItem(ue)&&O(!0)}),[i]),S?null:Object(g.jsx)(se.a,{caption:t,className:"custom-toast-".concat(h," ").concat(r),hideCloseButton:o,iconDescription:c,kind:s,lowContrast:u,onCloseButtonClick:function(){i&&void 0!==typeof window&&void 0!==typeof window.localStorage&&window.localStorage.setItem(ue,"true"),l()},role:d,subtitle:p,timeout:f,title:m,children:a})};le.defaultProps={caption:"",children:null,className:"",hideAfterFirstDisplay:!0,hideCloseButton:!1,iconDescription:"closes notification",kind:"error",lowContrast:!1,onCloseButtonClick:function(){},role:"alert",subtitle:"",timeout:0,title:""};var de=le,pe="SET_AUDIO_ANALYZER",fe="SET_AUDIO_CONTEXT",me="SET_AUDIO_SOURCE",be="SET_AUDIO_STREAM",ye="SET_AUDIO_VISUALIZATION_DATA",he="SET_ERROR",ve="SET_SPEAKER_LABELS",je="SET_IS_RECORDING",ge="SET_IS_SAMPLE_PLAYING",xe="SET_IS_TRANSCRIBING",Se="SET_IS_UPLOAD_PLAYING",Oe="UPDATE_RESULTS",ke={audioAnalyzer:{},audioContext:null,audioDataArray:[],audioDurationInMs:0,audioSource:"",audioStream:null,error:null,isRecording:!1,isSamplePlaying:!1,isTranscribing:!1,isUploadPlaying:!1,keywordInfo:[],speakerLabels:[],transcript:[]},we=function(e,t){switch(t.type){case"SET_AUDIO_ANALYZER":return Object(O.a)(Object(O.a)({},e),{},{audioAnalyzer:t.audioAnalyzer});case"SET_AUDIO_CONTEXT":return Object(O.a)(Object(O.a)({},e),{},{audioContext:t.audioContext});case"SET_AUDIO_SOURCE":return Object(O.a)(Object(O.a)({},e),{},{audioSource:t.audioSource});case"SET_AUDIO_STREAM":return Object(O.a)(Object(O.a)({},e),{},{audioStream:t.audioStream});case"SET_AUDIO_VISUALIZATION_DATA":return Object(O.a)(Object(O.a)({},e),{},{audioDataArray:t.audioDataArray,audioDurationInMs:t.audioDurationInMs});case"SET_ERROR":return Object(O.a)(Object(O.a)({},e),{},{error:t.error});case"SET_IS_RECORDING":return Object(O.a)(Object(O.a)({},e),{},{isRecording:t.isRecording});case"SET_IS_SAMPLE_PLAYING":return Object(O.a)(Object(O.a)({},e),{},{isSamplePlaying:t.isSamplePlaying});case"SET_IS_TRANSCRIBING":return Object(O.a)(Object(O.a)({},e),{},{isTranscribing:t.isTranscribing});case"SET_IS_UPLOAD_PLAYING":return Object(O.a)(Object(O.a)({},e),{},{isUploadPlaying:t.isUploadPlaying});case"SET_SPEAKER_LABELS":return Object(O.a)(Object(O.a)({},e),{},{speakerLabels:t.speakerLabels});case"UPDATE_RESULTS":var a=Object(ee.a)(e.transcript);return 0===t.resultIndex?a=t.transcript:a[t.resultIndex]=t.transcript[0],Object(O.a)(Object(O.a)({},e),{},{keywordInfo:t.keywordInfo,transcript:a});default:throw new Error}},Ce=2,Pe=function(e){var t=new FileReader;return new Promise((function(a,n){t.onload=function(){var e=t.result;a(e)},t.onerror=function(){t.abort(),n(new Error("failed to process file"))},t.readAsArrayBuffer(e)}))},Ae=function(){var e=Object(C.a)(w.a.mark((function e(t,a,n){var r,i;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Pe(t);case 2:return r=e.sent,i=new Uint8Array(r.slice(0)),e.abrupt("return",new Promise((function(e,t){a.decodeAudioData(r,(function(t){for(var a=t.duration,r=n-2*Ce,o=Math.floor(r/2),c=i.length/o,s=[],u=1;u<o;u+=1){var l=u-1;l<0&&(l=0),s.push(i.slice(l*c,u*c))}var d=s.map((function(e){return e.reduce((function(e,t){return e+t}))/(255*c)}));e({duration:a,reducedFloatArray:d})}),(function(){t(new Error("failed to chunk audio"))}))})));case 5:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),_e=function(e,t){return{title:e,description:t}},Te=function(){var e=Object(n.useReducer)(we,ke),t=Object(P.a)(e,2),a=t[0],r=t[1],i=Object(n.useRef)(null);Object(n.useEffect)((function(){var e=new(window.AudioContext||window.webkitAudioContext),t=e.createAnalyser();r({audioAnalyzer:t,type:pe}),r({audioContext:e,type:fe})}),[]);var o=function(e){if(e.speaker_labels)r({speakerLabels:e.speaker_labels,type:ve});else{var t=function(e){var t=e.results,a=e.result_index,n=[],r=[],i=!1;return t.forEach((function(e){var t=e.final,a=null,o=null,c=null;t?(a=e.alternatives,o=e.speaker,c=e.keywords_result):(a=e.alternatives,o=e.speaker);var s=a,u=Object(P.a)(s,1)[0].transcript;void 0===o&&(o=null),r.push({final:t,speaker:o,text:u}),i=t,c&&n.push(c)})),{transcript:r,keywordInfo:n,resultIndex:a,final:i}}(e),a=t.transcript,n=t.keywordInfo,i=t.resultIndex;r({keywordInfo:n,resultIndex:i,transcript:a,type:Oe})}},c=function(){a.audioStream&&a.audioStream.stop(),r({isTranscribing:!1,type:xe}),r({isUploadPlaying:!1,type:Se}),r({isSamplePlaying:!1,type:ge}),r({isRecording:!1,type:je})},s=function(){var e=Object(C.a)(w.a.mark((function e(t){var n,o,c,s,u,l,d,p;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=null,i&&i.current&&i.current.clientWidth&&(n=i.current.clientWidth),o=n||300,c=t instanceof File,e.prev=4,s=null,!c){e.next=10;break}s=t,e.next=16;break;case 10:return e.next=12,fetch(t);case 12:return u=e.sent,e.next=15,u.blob();case 15:s=e.sent;case 16:return e.next=18,Ae(s,a.audioContext,o);case 18:l=e.sent,d=l.reducedFloatArray,p=l.duration,r({audioDataArray:d,audioDurationInMs:1e3*p,type:ye}),e.next=27;break;case 24:e.prev=24,e.t0=e.catch(4),r({error:_e("File upload error","There was a problem trying to read the file."),type:he});case 27:case"end":return e.stop()}}),e,null,[[4,24]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(C.a)(w.a.mark((function e(t){var n,i,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.prev=1,e.next=4,navigator.mediaDevices.getUserMedia({video:!1,audio:!0});case 4:n=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),r({error:_e("No microphone detected","Cannot transcribe from microphone."),type:he});case 10:return i=I()(Object(O.a)(Object(O.a)({},t),{},{mediaStream:n,keepMic:!0})),n&&((o=a.audioAnalyzer).fttSize=2048,r({audioAnalyzer:o,type:pe}),a.audioContext.createMediaStreamSource(n).connect(a.audioAnalyzer)),e.abrupt("return",i);case 13:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(e){e.on("data",(function(e){o(e)})).on("end",(function(){c()})).on("error",(function(){r({error:_e("Audio transcription error","There was an error trying to read the audio data. Please try again."),type:he}),c()})),r({isTranscribing:!0,type:xe})},d=function(){a.audioStream&&(a.audioStream.stop(),a.audioStream.removeAllListeners(),a.audioStream.recognizeStream.removeAllListeners()),a.audioContext&&"suspended"===a.audioContext.state&&a.audioContext.resume()},p=function(){var e=Object(C.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(),a=_()(t),e.next=4,s(t.file);case 4:r({isUploadPlaying:!0,type:Se}),r({isSamplePlaying:!1,type:ge}),r({isRecording:!1,type:je}),r({audioSource:"upload",type:me}),r({audioStream:a,type:be}),l(a);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(C.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(),a=_()(t),e.next=4,s(t.file);case 4:r({isSamplePlaying:!0,type:ge}),r({isUploadPlaying:!1,type:Se}),r({isRecording:!1,type:je}),r({audioSource:"sample",type:me}),r({audioStream:a,type:be}),l(a);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(C.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(),e.next=3,u(t);case 3:a=e.sent,r({isRecording:!0,type:je}),r({isSamplePlaying:!1,type:ge}),r({isUploadPlaying:!1,type:Se}),r({audioSource:"microphone",type:me}),r({audioStream:a,type:be}),l(a);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"service-container",children:[Object(g.jsx)(de,{kind:"info",subtitle:"This system is for demonstration purposes only and is not intended to process Personal Data. No Personal Data is to be entered into this system as it may not have the necessary controls in place to meet the requirements of the General Data Protection Regulation (EU) 2016/679."}),a.error&&Object(g.jsx)(de,{kind:"error",title:a.error.title,subtitle:a.error.description,hideAfterFirstDisplay:!1,timeout:5e3,onCloseButtonClick:function(){return r({error:null,type:he})}}),Object(g.jsx)(z,{isRecording:a.isRecording,isSamplePlaying:a.isSamplePlaying,isUploadPlaying:a.isUploadPlaying,onError:function(e){r({error:e,type:he})},onSelectNewModel:function(){r({audioDataArray:[],audioDurationInMs:0,type:ye}),r({keywordInfo:[],resultIndex:0,transcript:[],type:Oe})},onStartPlayingFileUpload:p,onStopPlayingFileUpload:function(){c(),r({isUploadPlaying:!1,type:Se})},onStartPlayingSample:f,onStopPlayingSample:function(){c(),r({isSamplePlaying:!1,type:ge})},onStartRecording:m,onStopRecording:function(){c(),r({isRecording:!1,type:je})}}),Object(g.jsx)(ce,{audioAnalyzer:a.audioAnalyzer,audioDataArray:a.audioDataArray,audioDuration:a.audioDurationInMs,audioSource:a.audioSource,audioWaveContainerRef:i,isTranscribing:a.isTranscribing,keywordInfo:a.keywordInfo,transcriptArray:a.transcript})]})},Ie=function(e){Object(n.useEffect)((function(){var t=document.createElement("script");return t.src=e,t.async=!0,document.body.appendChild(t),function(){document.body.removeChild(t)}}),[e])},Re=[Object(g.jsxs)(c.a,{className:"link",target:"_blank",rel:"noopener noreferrer",href:"https://cloud.ibm.com/apidocs/speech-to-text",children:[Object(g.jsx)("p",{className:"link-text",children:"API reference"}),Object(g.jsx)(l.a,{className:"link-icon"})]},"api-link"),Object(g.jsxs)(c.a,{className:"link",target:"_blank",rel:"noopener noreferrer",href:"https://cloud.ibm.com/docs/services/speech-to-text?topic=speech-to-text-gettingStarted",children:[Object(g.jsx)("p",{className:"link-text",children:"Documentation"}),Object(g.jsx)(p.a,{className:"link-icon"})]},"docs-link"),Object(g.jsxs)(c.a,{className:"link",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/IBM/speech-to-text-code-pattern",children:[Object(g.jsx)("p",{className:"link-text",children:"GitHub"}),Object(g.jsx)(v.a,{className:"link-icon"})]},"github-link"),Object(g.jsxs)(c.a,{className:"link getting-started",target:"_blank",rel:"noopener noreferrer",href:"https://cloud.ibm.com/registration?target=%2Fcatalog%2Fservices%2Fspeech-to-text%3FhideTours%3Dtrue%26cm_mmc%3D-_-Watson%2BCore_Watson%2BCore%2B-%2BPlatform-_-WW_WW-_-wdc-ref%26cm_mmc%3D-_-Watson%2BCore_Watson%2BCore%2B-%2BPlatform-_-WW_WW-_-wdc-ref%26cm_mmca1%3D000000OF%26cm_mmca2%3D10000409&_ga=2.158846578.918027017.1572271296-1405764752.1539884377&_gac=1.250083700.1571850605.Cj0KCQjw3JXtBRC8ARIsAEBHg4m4g1PSkKQRoI6YUe4A-6ysul0ziiWU0DVbqlbWAQpq3721u-bxkd0aAkV3EALw_wcB&cm_mc_uid=83381689395615475202389&cm_mc_sid_50200000=82214471572470185115&cm_mc_sid_52640000=21949701572470185117&cm_mmc=Earned-_-Watson%20Core%20-%20Platform-_-WW_WW-_-intercom&cm_mmca1=000000OF&cm_mmca2=10000409",children:[Object(g.jsx)(s.a,{className:"link-button",kind:"tertiary",renderIcon:y.a,children:"Start for free on IBM Cloud"}),Object(g.jsx)(m.a,{className:"link-icon"})]},"ibm-cloud-link")],Ee=function(){return Ie("https://cdn.jsdelivr.net/gh/watson-developer-cloud/watson-developer-cloud.github.io@master/analytics.js"),Object(g.jsxs)("div",{className:"app-container",children:[Object(g.jsx)(S,{description:"IBM Watson Speech to Text is a cloud-native API that transforms voice into written text.",links:Re,title:"Watson Speech to Text Example for CheckRide"}),Object(g.jsx)(Te,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(g.jsx)(Ee,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},36:function(e){e.exports=JSON.parse('[{"name":"ja-JP_BroadbandModel","language":"ja-JP","url":"https://stream.watsonplatform.net/speech-to-text/api/v1/models/ja-JP_BroadbandModel","rate":16000,"filename":"ja-JP_Broadband-sample.wav","keywords":"\u97f3\u58f0\u8a8d\u8b58, \u30c7\u30a3\u30fc\u30d7\u30e9\u30fc\u30cb\u30f3\u30b0, \u6280\u8853","supported_features":{"custom_language_model":true,"speaker_labels":true},"description":"Japanese (16khz Broadband)"}]')}},[[182,1,2]]]);
//# sourceMappingURL=main.1ccc20f6.chunk.js.map