var zh=Object.defineProperty;var Gh=(s,e,t)=>e in s?zh(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var ze=(s,e,t)=>Gh(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xo="172",Ni={ROTATE:0,DOLLY:1,PAN:2},Ii={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hh=0,Jo=1,Vh=2,Fc=1,Wh=2,Tn=3,Rn=0,Vt=1,gn=2,wn=0,Oi=1,zi=2,Qo=3,$o=4,Xh=5,Qn=100,Yh=101,qh=102,jh=103,Kh=104,Zh=200,Jh=201,Qh=202,$h=203,Ta=204,ba=205,eu=206,tu=207,nu=208,iu=209,ru=210,su=211,au=212,ou=213,lu=214,Aa=0,wa=1,Ca=2,Gi=3,Ra=4,Pa=5,Da=6,Ua=7,Nc=0,cu=1,hu=2,Vn=0,Oc=1,Bc=2,kc=3,yo=4,uu=5,zc=6,Gc=7,Hc=300,Hi=301,Vi=302,La=303,Ia=304,Es=306,Fa=1e3,ei=1001,Na=1002,fn=1003,fu=1004,Ir=1005,$t=1006,ks=1007,ti=1008,Pn=1009,Vc=1010,Wc=1011,Er=1012,Mo=1013,ii=1014,bn=1015,_n=1016,So=1017,Eo=1018,Wi=1020,Xc=35902,Yc=1021,qc=1022,un=1023,jc=1024,Kc=1025,Bi=1026,Xi=1027,Zc=1028,To=1029,Jc=1030,bo=1031,Ao=1033,us=33776,fs=33777,ds=33778,ps=33779,Oa=35840,Ba=35841,ka=35842,za=35843,Ga=36196,Ha=37492,Va=37496,Wa=37808,Xa=37809,Ya=37810,qa=37811,ja=37812,Ka=37813,Za=37814,Ja=37815,Qa=37816,$a=37817,eo=37818,to=37819,no=37820,io=37821,ms=36492,ro=36494,so=36495,Qc=36283,ao=36284,oo=36285,lo=36286,du=3200,$c=3201,eh=0,pu=1,Hn="",jt="srgb",Yi="srgb-linear",xs="linear",rt="srgb",mi=7680,el=519,mu=512,gu=513,_u=514,th=515,vu=516,xu=517,yu=518,Mu=519,tl=35044,Su=35048,nl="300 es",An=2e3,ys=2001;class ai{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const n=r.slice(0);for(let i=0,a=n.length;i<a;i++)n[i].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let il=1234567;const _r=Math.PI/180,Tr=180/Math.PI;function Ki(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Pt[s&255]+Pt[s>>8&255]+Pt[s>>16&255]+Pt[s>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[r&255]+Pt[r>>8&255]+Pt[r>>16&255]+Pt[r>>24&255]).toLowerCase()}function Je(s,e,t){return Math.max(e,Math.min(t,s))}function wo(s,e){return(s%e+e)%e}function Eu(s,e,t,r,n){return r+(s-e)*(n-r)/(t-e)}function Tu(s,e,t){return s!==e?(t-s)/(e-s):0}function vr(s,e,t){return(1-t)*s+t*e}function bu(s,e,t,r){return vr(s,e,1-Math.exp(-t*r))}function Au(s,e=1){return e-Math.abs(wo(s,e*2)-e)}function wu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Cu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Ru(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Pu(s,e){return s+Math.random()*(e-s)}function Du(s){return s*(.5-Math.random())}function Uu(s){s!==void 0&&(il=s);let e=il+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lu(s){return s*_r}function Iu(s){return s*Tr}function Fu(s){return(s&s-1)===0&&s!==0}function Nu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ou(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Bu(s,e,t,r,n){const i=Math.cos,a=Math.sin,o=i(t/2),l=a(t/2),c=i((e+r)/2),h=a((e+r)/2),u=i((e-r)/2),f=a((e-r)/2),d=i((r-e)/2),g=a((r-e)/2);switch(n){case"XYX":s.set(o*h,l*u,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*d,o*c);break;case"YXY":s.set(l*d,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Ui(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Lt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const nh={DEG2RAD:_r,RAD2DEG:Tr,generateUUID:Ki,clamp:Je,euclideanModulo:wo,mapLinear:Eu,inverseLerp:Tu,lerp:vr,damp:bu,pingpong:Au,smoothstep:wu,smootherstep:Cu,randInt:Ru,randFloat:Pu,randFloatSpread:Du,seededRandom:Uu,degToRad:Lu,radToDeg:Iu,isPowerOfTwo:Fu,ceilPowerOfTwo:Nu,floorPowerOfTwo:Ou,setQuaternionFromProperEuler:Bu,normalize:Lt,denormalize:Ui};class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6],this.y=n[1]*t+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Je(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Je(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),n=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*r-a*n+e.x,this.y=i*n+a*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,r,n,i,a,o,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,n,i,a,o,l,c)}set(e,t,r,n,i,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=i,h[5]=l,h[6]=r,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,a=r[0],o=r[3],l=r[6],c=r[1],h=r[4],u=r[7],f=r[2],d=r[5],g=r[8],_=n[0],m=n[3],p=n[6],T=n[1],M=n[4],v=n[7],w=n[2],C=n[5],b=n[8];return i[0]=a*_+o*T+l*w,i[3]=a*m+o*M+l*C,i[6]=a*p+o*v+l*b,i[1]=c*_+h*T+u*w,i[4]=c*m+h*M+u*C,i[7]=c*p+h*v+u*b,i[2]=f*_+d*T+g*w,i[5]=f*m+d*M+g*C,i[8]=f*p+d*v+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-r*i*h+r*o*l+n*i*c-n*a*l}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*i,d=c*i-a*l,g=t*u+r*f+n*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(n*c-h*r)*_,e[2]=(o*r-n*a)*_,e[3]=f*_,e[4]=(h*t-n*l)*_,e[5]=(n*i-o*t)*_,e[6]=d*_,e[7]=(r*l-c*t)*_,e[8]=(a*t-r*i)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,n,i,a,o){const l=Math.cos(i),c=Math.sin(i);return this.set(r*l,r*c,-r*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(zs.makeScale(e,t)),this}rotate(e){return this.premultiply(zs.makeRotation(-e)),this}translate(e,t){return this.premultiply(zs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<9;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zs=new je;function ih(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ms(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ku(){const s=Ms("canvas");return s.style.display="block",s}const rl={};function Li(s){s in rl||(rl[s]=!0,console.warn(s))}function zu(s,e,t){return new Promise(function(r,n){function i(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(i,t);break;default:r()}}setTimeout(i,t)})}function Gu(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Hu(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const sl=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),al=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vu(){const s={enabled:!0,workingColorSpace:Yi,spaces:{},convert:function(n,i,a){return this.enabled===!1||i===a||!i||!a||(this.spaces[i].transfer===rt&&(n.r=Cn(n.r),n.g=Cn(n.g),n.b=Cn(n.b)),this.spaces[i].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[i].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(n.r=ki(n.r),n.g=ki(n.g),n.b=ki(n.b))),n},fromWorkingColorSpace:function(n,i){return this.convert(n,this.workingColorSpace,i)},toWorkingColorSpace:function(n,i){return this.convert(n,i,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Hn?xs:this.spaces[n].transfer},getLuminanceCoefficients:function(n,i=this.workingColorSpace){return n.fromArray(this.spaces[i].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,i,a){return n.copy(this.spaces[i].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Yi]:{primaries:e,whitePoint:r,transfer:xs,toXYZ:sl,fromXYZ:al,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:e,whitePoint:r,transfer:rt,toXYZ:sl,fromXYZ:al,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),s}const nt=Vu();function Cn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ki(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let gi;class Wu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{gi===void 0&&(gi=Ms("canvas")),gi.width=e.width,gi.height=e.height;const r=gi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=gi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ms("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const n=r.getImageData(0,0,e.width,e.height),i=n.data;for(let a=0;a<i.length;a++)i[a]=Cn(i[a]/255)*255;return r.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Cn(t[r]/255)*255):t[r]=Cn(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xu=0;class rh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=Ki(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let i;if(Array.isArray(n)){i=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?i.push(Gs(n[a].image)):i.push(Gs(n[a]))}else i=Gs(n);r.url=i}return t||(e.images[this.uuid]=r),r}}function Gs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Wu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yu=0;class Nt extends ai{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,r=ei,n=ei,i=$t,a=ti,o=un,l=Pn,c=Nt.DEFAULT_ANISOTROPY,h=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=Ki(),this.name="",this.source=new rh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=i,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fa:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case Na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fa:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case Na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=Hc;Nt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,r=0,n=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,n){return this.x=e,this.y=t,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*n+a[12]*i,this.y=a[1]*t+a[5]*r+a[9]*n+a[13]*i,this.z=a[2]*t+a[6]*r+a[10]*n+a[14]*i,this.w=a[3]*t+a[7]*r+a[11]*n+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,n,i;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,v=(d+1)/2,w=(p+1)/2,C=(h+f)/4,b=(u+_)/4,R=(g+m)/4;return M>v&&M>w?M<.01?(r=0,n=.707106781,i=.707106781):(r=Math.sqrt(M),n=C/r,i=b/r):v>w?v<.01?(r=.707106781,n=0,i=.707106781):(n=Math.sqrt(v),r=C/n,i=R/n):w<.01?(r=.707106781,n=.707106781,i=0):(i=Math.sqrt(w),r=b/i,n=R/i),this.set(r,n,i,t),this}let T=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-_)/T,this.z=(f-h)/T,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Je(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qu extends ai{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const n={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const i=new Nt(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);i.flipY=!1,i.generateMipmaps=r.generateMipmaps,i.internalFormat=r.internalFormat,this.textures=[];const a=r.count;for(let o=0;o<a;o++)this.textures[o]=i.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let n=0,i=this.textures.length;n<i;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,n=e.textures.length;r<n;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new rh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class en extends qu{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class sh extends Nt{constructor(e=null,t=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=fn,this.minFilter=fn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ju extends Nt{constructor(e=null,t=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=fn,this.minFilter=fn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ri{constructor(e=0,t=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=n}static slerpFlat(e,t,r,n,i,a,o){let l=r[n+0],c=r[n+1],h=r[n+2],u=r[n+3];const f=i[a+0],d=i[a+1],g=i[a+2],_=i[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let m=1-o;const p=l*f+c*d+h*g+u*_,T=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const w=Math.sqrt(M),C=Math.atan2(w,p*T);m=Math.sin(m*C)/w,o=Math.sin(o*C)/w}const v=o*T;if(l=l*m+f*v,c=c*m+d*v,h=h*m+g*v,u=u*m+_*v,m===1-o){const w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,r,n,i,a){const o=r[n],l=r[n+1],c=r[n+2],h=r[n+3],u=i[a],f=i[a+1],d=i[a+2],g=i[a+3];return e[t]=o*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-o*d,e[t+2]=c*g+h*d+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,n=e._y,i=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(r/2),h=o(n/2),u=o(i/2),f=l(r/2),d=l(n/2),g=l(i/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],n=t[4],i=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=r+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(i-c)*d,this._z=(a-n)*d}else if(r>o&&r>u){const d=2*Math.sqrt(1+r-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(n+a)/d,this._z=(i+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-r-u);this._w=(i-c)/d,this._x=(n+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-r-o);this._w=(a-n)/d,this._x=(i+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,n=e._y,i=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=r*h+a*o+n*c-i*l,this._y=n*h+a*l+i*o-r*c,this._z=i*h+a*c+r*l-n*o,this._w=a*h-r*o-n*l-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,n=this._y,i=this._z,a=this._w;let o=a*e._w+r*e._x+n*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=r,this._y=n,this._z=i,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*r+t*this._x,this._y=d*n+t*this._y,this._z=d*i+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=r*u+this._x*f,this._y=n*u+this._y*f,this._z=i*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),n=Math.sqrt(1-r),i=Math.sqrt(r);return this.set(n*Math.sin(e),n*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,r=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ol.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ol.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6]*n,this.y=i[1]*t+i[4]*r+i[7]*n,this.z=i[2]*t+i[5]*r+i[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=e.elements,a=1/(i[3]*t+i[7]*r+i[11]*n+i[15]);return this.x=(i[0]*t+i[4]*r+i[8]*n+i[12])*a,this.y=(i[1]*t+i[5]*r+i[9]*n+i[13])*a,this.z=(i[2]*t+i[6]*r+i[10]*n+i[14])*a,this}applyQuaternion(e){const t=this.x,r=this.y,n=this.z,i=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*r),h=2*(o*t-i*n),u=2*(i*r-a*t);return this.x=t+l*c+a*u-o*h,this.y=r+l*h+o*c-i*u,this.z=n+l*u+i*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[4]*r+i[8]*n,this.y=i[1]*t+i[5]*r+i[9]*n,this.z=i[2]*t+i[6]*r+i[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Je(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,n=e.y,i=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-i*o,this.y=i*a-r*l,this.z=r*o-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Hs.copy(this).projectOnVector(e),this.sub(Hs)}reflect(e){return this.sub(Hs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Je(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return t*t+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const n=Math.sin(t)*e;return this.x=n*Math.sin(r),this.y=Math.cos(t)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hs=new B,ol=new ri;class oi{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const i=r.getAttribute("position");if(t===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=i.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,on):on.fromBufferAttribute(i,a),on.applyMatrix4(e.matrixWorld),this.expandByPoint(on);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fr.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Fr.copy(r.boundingBox)),Fr.applyMatrix4(e.matrixWorld),this.union(Fr)}const n=e.children;for(let i=0,a=n.length;i<a;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),Nr.subVectors(this.max,lr),_i.subVectors(e.a,lr),vi.subVectors(e.b,lr),xi.subVectors(e.c,lr),Fn.subVectors(vi,_i),Nn.subVectors(xi,vi),Wn.subVectors(_i,xi);let t=[0,-Fn.z,Fn.y,0,-Nn.z,Nn.y,0,-Wn.z,Wn.y,Fn.z,0,-Fn.x,Nn.z,0,-Nn.x,Wn.z,0,-Wn.x,-Fn.y,Fn.x,0,-Nn.y,Nn.x,0,-Wn.y,Wn.x,0];return!Vs(t,_i,vi,xi,Nr)||(t=[1,0,0,0,1,0,0,0,1],!Vs(t,_i,vi,xi,Nr))?!1:(Or.crossVectors(Fn,Nn),t=[Or.x,Or.y,Or.z],Vs(t,_i,vi,xi,Nr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xn=[new B,new B,new B,new B,new B,new B,new B,new B],on=new B,Fr=new oi,_i=new B,vi=new B,xi=new B,Fn=new B,Nn=new B,Wn=new B,lr=new B,Nr=new B,Or=new B,Xn=new B;function Vs(s,e,t,r,n){for(let i=0,a=s.length-3;i<=a;i+=3){Xn.fromArray(s,i);const o=n.x*Math.abs(Xn.x)+n.y*Math.abs(Xn.y)+n.z*Math.abs(Xn.z),l=e.dot(Xn),c=t.dot(Xn),h=r.dot(Xn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ku=new oi,cr=new B,Ws=new B;class Ar{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Ku.setFromPoints(e).getCenter(r);let n=0;for(let i=0,a=e.length;i<a;i++)n=Math.max(n,r.distanceToSquared(e[i]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cr.subVectors(e,this.center);const t=cr.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.addScaledVector(cr,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ws.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cr.copy(e.center).add(Ws)),this.expandByPoint(cr.copy(e.center).sub(Ws))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new B,Xs=new B,Br=new B,On=new B,Ys=new B,kr=new B,qs=new B;class Ts{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yn.copy(this.origin).addScaledVector(this.direction,t),yn.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){Xs.copy(e).add(t).multiplyScalar(.5),Br.copy(t).sub(e).normalize(),On.copy(this.origin).sub(Xs);const i=e.distanceTo(t)*.5,a=-this.direction.dot(Br),o=On.dot(this.direction),l=-On.dot(Br),c=On.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=i*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=i,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-i,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*i+o)),f=u>0?-i:Math.min(Math.max(-i,-l),i),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-i,-l),i),d=f*(f+2*l)+c):(u=Math.max(0,-(a*i+o)),f=u>0?i:Math.min(Math.max(-i,-l),i),d=-u*u+f*(f+2*l)+c);else f=a>0?-i:i,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Xs).addScaledVector(Br,f),d}intersectSphere(e,t){yn.subVectors(e.center,this.origin);const r=yn.dot(this.direction),n=yn.dot(yn)-r*r,i=e.radius*e.radius;if(n>i)return null;const a=Math.sqrt(i-n),o=r-a,l=r+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,i,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(r=(e.min.x-f.x)*c,n=(e.max.x-f.x)*c):(r=(e.max.x-f.x)*c,n=(e.min.x-f.x)*c),h>=0?(i=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(i=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),r>a||i>n||((i>r||isNaN(r))&&(r=i),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),r>l||o>n)||((o>r||r!==r)&&(r=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,yn)!==null}intersectTriangle(e,t,r,n,i){Ys.subVectors(t,e),kr.subVectors(r,e),qs.crossVectors(Ys,kr);let a=this.direction.dot(qs),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;On.subVectors(this.origin,e);const l=o*this.direction.dot(kr.crossVectors(On,kr));if(l<0)return null;const c=o*this.direction.dot(Ys.cross(On));if(c<0||l+c>a)return null;const h=-o*On.dot(qs);return h<0?null:this.at(h/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,r,n,i,a,o,l,c,h,u,f,d,g,_,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,n,i,a,o,l,c,h,u,f,d,g,_,m)}set(e,t,r,n,i,a,o,l,c,h,u,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=r,p[12]=n,p[1]=i,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,n=1/yi.setFromMatrixColumn(e,0).length(),i=1/yi.setFromMatrixColumn(e,1).length(),a=1/yi.setFromMatrixColumn(e,2).length();return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=0,t[4]=r[4]*i,t[5]=r[5]*i,t[6]=r[6]*i,t[7]=0,t[8]=r[8]*a,t[9]=r[9]*a,t[10]=r[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,n=e.y,i=e.z,a=Math.cos(r),o=Math.sin(r),l=Math.cos(n),c=Math.sin(n),h=Math.cos(i),u=Math.sin(i);if(e.order==="XYZ"){const f=a*h,d=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f-_*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,d=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zu,e,Ju)}lookAt(e,t,r){const n=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Bn.crossVectors(r,Yt),Bn.lengthSq()===0&&(Math.abs(r.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Bn.crossVectors(r,Yt)),Bn.normalize(),zr.crossVectors(Yt,Bn),n[0]=Bn.x,n[4]=zr.x,n[8]=Yt.x,n[1]=Bn.y,n[5]=zr.y,n[9]=Yt.y,n[2]=Bn.z,n[6]=zr.z,n[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,a=r[0],o=r[4],l=r[8],c=r[12],h=r[1],u=r[5],f=r[9],d=r[13],g=r[2],_=r[6],m=r[10],p=r[14],T=r[3],M=r[7],v=r[11],w=r[15],C=n[0],b=n[4],R=n[8],E=n[12],x=n[1],D=n[5],P=n[9],U=n[13],N=n[2],X=n[6],G=n[10],$=n[14],Y=n[3],Z=n[7],K=n[11],I=n[15];return i[0]=a*C+o*x+l*N+c*Y,i[4]=a*b+o*D+l*X+c*Z,i[8]=a*R+o*P+l*G+c*K,i[12]=a*E+o*U+l*$+c*I,i[1]=h*C+u*x+f*N+d*Y,i[5]=h*b+u*D+f*X+d*Z,i[9]=h*R+u*P+f*G+d*K,i[13]=h*E+u*U+f*$+d*I,i[2]=g*C+_*x+m*N+p*Y,i[6]=g*b+_*D+m*X+p*Z,i[10]=g*R+_*P+m*G+p*K,i[14]=g*E+_*U+m*$+p*I,i[3]=T*C+M*x+v*N+w*Y,i[7]=T*b+M*D+v*X+w*Z,i[11]=T*R+M*P+v*G+w*K,i[15]=T*E+M*U+v*$+w*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],n=e[8],i=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+i*l*u-n*c*u-i*o*f+r*c*f+n*o*d-r*l*d)+_*(+t*l*d-t*c*f+i*a*f-n*a*d+n*c*h-i*l*h)+m*(+t*c*u-t*o*d-i*a*u+r*a*d+i*o*h-r*c*h)+p*(-n*o*h-t*l*u+t*o*f+n*a*u-r*a*f+r*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],T=u*m*c-_*f*c+_*l*d-o*m*d-u*l*p+o*f*p,M=g*f*c-h*m*c-g*l*d+a*m*d+h*l*p-a*f*p,v=h*_*c-g*u*c+g*o*d-a*_*d-h*o*p+a*u*p,w=g*u*l-h*_*l-g*o*f+a*_*f+h*o*m-a*u*m,C=t*T+r*M+n*v+i*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=T*b,e[1]=(_*f*i-u*m*i-_*n*d+r*m*d+u*n*p-r*f*p)*b,e[2]=(o*m*i-_*l*i+_*n*c-r*m*c-o*n*p+r*l*p)*b,e[3]=(u*l*i-o*f*i-u*n*c+r*f*c+o*n*d-r*l*d)*b,e[4]=M*b,e[5]=(h*m*i-g*f*i+g*n*d-t*m*d-h*n*p+t*f*p)*b,e[6]=(g*l*i-a*m*i-g*n*c+t*m*c+a*n*p-t*l*p)*b,e[7]=(a*f*i-h*l*i+h*n*c-t*f*c-a*n*d+t*l*d)*b,e[8]=v*b,e[9]=(g*u*i-h*_*i-g*r*d+t*_*d+h*r*p-t*u*p)*b,e[10]=(a*_*i-g*o*i+g*r*c-t*_*c-a*r*p+t*o*p)*b,e[11]=(h*o*i-a*u*i-h*r*c+t*u*c+a*r*d-t*o*d)*b,e[12]=w*b,e[13]=(h*_*n-g*u*n+g*r*f-t*_*f-h*r*m+t*u*m)*b,e[14]=(g*o*n-a*_*n-g*r*l+t*_*l+a*r*m-t*o*m)*b,e[15]=(a*u*n-h*o*n+h*r*l-t*u*l-a*r*f+t*o*f)*b,this}scale(e){const t=this.elements,r=e.x,n=e.y,i=e.z;return t[0]*=r,t[4]*=n,t[8]*=i,t[1]*=r,t[5]*=n,t[9]*=i,t[2]*=r,t[6]*=n,t[10]*=i,t[3]*=r,t[7]*=n,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,n))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),n=Math.sin(t),i=1-r,a=e.x,o=e.y,l=e.z,c=i*a,h=i*o;return this.set(c*a+r,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+r,h*l-n*a,0,c*l-n*o,h*l+n*a,i*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,n,i,a){return this.set(1,r,i,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,r){const n=this.elements,i=t._x,a=t._y,o=t._z,l=t._w,c=i+i,h=a+a,u=o+o,f=i*c,d=i*h,g=i*u,_=a*h,m=a*u,p=o*u,T=l*c,M=l*h,v=l*u,w=r.x,C=r.y,b=r.z;return n[0]=(1-(_+p))*w,n[1]=(d+v)*w,n[2]=(g-M)*w,n[3]=0,n[4]=(d-v)*C,n[5]=(1-(f+p))*C,n[6]=(m+T)*C,n[7]=0,n[8]=(g+M)*b,n[9]=(m-T)*b,n[10]=(1-(f+_))*b,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,r){const n=this.elements;let i=yi.set(n[0],n[1],n[2]).length();const a=yi.set(n[4],n[5],n[6]).length(),o=yi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(i=-i),e.x=n[12],e.y=n[13],e.z=n[14],ln.copy(this);const c=1/i,h=1/a,u=1/o;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,t.setFromRotationMatrix(ln),r.x=i,r.y=a,r.z=o,this}makePerspective(e,t,r,n,i,a,o=An){const l=this.elements,c=2*i/(t-e),h=2*i/(r-n),u=(t+e)/(t-e),f=(r+n)/(r-n);let d,g;if(o===An)d=-(a+i)/(a-i),g=-2*a*i/(a-i);else if(o===ys)d=-a/(a-i),g=-a*i/(a-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,n,i,a,o=An){const l=this.elements,c=1/(t-e),h=1/(r-n),u=1/(a-i),f=(t+e)*c,d=(r+n)*h;let g,_;if(o===An)g=(a+i)*u,_=-2*u;else if(o===ys)g=i*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<16;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const yi=new B,ln=new ot,Zu=new B(0,0,0),Ju=new B(1,1,1),Bn=new B,zr=new B,Yt=new B,ll=new ot,cl=new ri;class vn{constructor(e=0,t=0,r=0,n=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,n=this._order){return this._x=e,this._y=t,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const n=e.elements,i=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],f=n[6],d=n[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case"ZXY":this._x=Math.asin(Je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,i));break;case"ZYX":this._y=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return ll.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ll,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cl.setFromEuler(this),this.setFromQuaternion(cl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class Co{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qu=0;const hl=new B,Mi=new ri,Mn=new ot,Gr=new B,hr=new B,$u=new B,ef=new ri,ul=new B(1,0,0),fl=new B(0,1,0),dl=new B(0,0,1),pl={type:"added"},tf={type:"removed"},Si={type:"childadded",child:null},js={type:"childremoved",child:null};class _t extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new B,t=new vn,r=new ri,n=new B(1,1,1);function i(){r.setFromEuler(t,!1)}function a(){t.setFromQuaternion(r,void 0,!1)}t._onChange(i),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ot},normalMatrix:{value:new je}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.premultiply(Mi),this}rotateX(e){return this.rotateOnAxis(ul,e)}rotateY(e){return this.rotateOnAxis(fl,e)}rotateZ(e){return this.rotateOnAxis(dl,e)}translateOnAxis(e,t){return hl.copy(e).applyQuaternion(this.quaternion),this.position.add(hl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ul,e)}translateY(e){return this.translateOnAxis(fl,e)}translateZ(e){return this.translateOnAxis(dl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Gr.copy(e):Gr.set(e,t,r);const n=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(hr,Gr,this.up):Mn.lookAt(Gr,hr,this.up),this.quaternion.setFromRotationMatrix(Mn),n&&(Mn.extractRotation(n.matrixWorld),Mi.setFromRotationMatrix(Mn),this.quaternion.premultiply(Mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pl),Si.child=e,this.dispatchEvent(Si),Si.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tf),js.child=e,this.dispatchEvent(js),js.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pl),Si.child=e,this.dispatchEvent(Si),Si.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,n=this.children.length;r<n;r++){const a=this.children[r].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,e,$u),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,ef,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function i(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=i(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];i(e.shapes,u)}else i(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(i(e.materials,this.material[l]));n.material=o}else n.material=i(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(i(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),h.length>0&&(r.images=h),u.length>0&&(r.shapes=u),f.length>0&&(r.skeletons=f),d.length>0&&(r.animations=d),g.length>0&&(r.nodes=g)}return r.object=n,r;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const n=e.children[r];this.add(n.clone())}return this}}_t.DEFAULT_UP=new B(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new B,Sn=new B,Ks=new B,En=new B,Ei=new B,Ti=new B,ml=new B,Zs=new B,Js=new B,Qs=new B,$s=new it,ea=new it,ta=new it;class hn{constructor(e=new B,t=new B,r=new B){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,n){n.subVectors(r,t),cn.subVectors(e,t),n.cross(cn);const i=n.lengthSq();return i>0?n.multiplyScalar(1/Math.sqrt(i)):n.set(0,0,0)}static getBarycoord(e,t,r,n,i){cn.subVectors(n,t),Sn.subVectors(r,t),Ks.subVectors(e,t);const a=cn.dot(cn),o=cn.dot(Sn),l=cn.dot(Ks),c=Sn.dot(Sn),h=Sn.dot(Ks),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return i.set(1-d-g,g,d)}static containsPoint(e,t,r,n){return this.getBarycoord(e,t,r,n,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,r,n,i,a,o,l){return this.getBarycoord(e,t,r,n,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(i,En.x),l.addScaledVector(a,En.y),l.addScaledVector(o,En.z),l)}static getInterpolatedAttribute(e,t,r,n,i,a){return $s.setScalar(0),ea.setScalar(0),ta.setScalar(0),$s.fromBufferAttribute(e,t),ea.fromBufferAttribute(e,r),ta.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector($s,i.x),a.addScaledVector(ea,i.y),a.addScaledVector(ta,i.z),a}static isFrontFacing(e,t,r,n){return cn.subVectors(r,t),Sn.subVectors(e,t),cn.cross(Sn).dot(n)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,n){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,r,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),cn.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,n,i){return hn.getInterpolation(e,this.a,this.b,this.c,t,r,n,i)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,n=this.b,i=this.c;let a,o;Ei.subVectors(n,r),Ti.subVectors(i,r),Zs.subVectors(e,r);const l=Ei.dot(Zs),c=Ti.dot(Zs);if(l<=0&&c<=0)return t.copy(r);Js.subVectors(e,n);const h=Ei.dot(Js),u=Ti.dot(Js);if(h>=0&&u<=h)return t.copy(n);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(r).addScaledVector(Ei,a);Qs.subVectors(e,i);const d=Ei.dot(Qs),g=Ti.dot(Qs);if(g>=0&&d<=g)return t.copy(i);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(r).addScaledVector(Ti,o);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return ml.subVectors(i,n),o=(u-h)/(u-h+(d-g)),t.copy(n).addScaledVector(ml,o);const p=1/(m+_+f);return a=_*p,o=f*p,t.copy(r).addScaledVector(Ei,a).addScaledVector(Ti,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ah={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},Hr={h:0,s:0,l:0};function na(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class qe{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,n=nt.workingColorSpace){return this.r=e,this.g=t,this.b=r,nt.toWorkingColorSpace(this,n),this}setHSL(e,t,r,n=nt.workingColorSpace){if(e=wo(e,1),t=Je(t,0,1),r=Je(r,0,1),t===0)this.r=this.g=this.b=r;else{const i=r<=.5?r*(1+t):r+t-r*t,a=2*r-i;this.r=na(a,i,e+1/3),this.g=na(a,i,e),this.b=na(a,i,e-1/3)}return nt.toWorkingColorSpace(this,n),this}setStyle(e,t=jt){function r(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],a=i.length;if(a===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const r=ah[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cn(e.r),this.g=Cn(e.g),this.b=Cn(e.b),this}copyLinearToSRGB(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return nt.fromWorkingColorSpace(Dt.copy(this),e),Math.round(Je(Dt.r*255,0,255))*65536+Math.round(Je(Dt.g*255,0,255))*256+Math.round(Je(Dt.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Dt.copy(this),t);const r=Dt.r,n=Dt.g,i=Dt.b,a=Math.max(r,n,i),o=Math.min(r,n,i);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case r:l=(n-i)/u+(n<i?6:0);break;case n:l=(i-r)/u+2;break;case i:l=(r-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=jt){nt.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,r=Dt.g,n=Dt.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,t,r){return this.getHSL(kn),this.setHSL(kn.h+e,kn.s+t,kn.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(kn),e.getHSL(Hr);const r=vr(kn.h,Hr.h,t),n=vr(kn.s,Hr.s,t),i=vr(kn.l,Hr.l,t);return this.setHSL(r,n,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,n=this.b,i=e.elements;return this.r=i[0]*t+i[3]*r+i[6]*n,this.g=i[1]*t+i[4]*r+i[7]*n,this.b=i[2]*t+i[5]*r+i[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new qe;qe.NAMES=ah;let nf=0;class li extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=Oi,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ta,this.blendDst=ba,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=el,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mi,this.stencilZFail=mi,this.stencilZPass=mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(r.blending=this.blending),this.side!==Rn&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ta&&(r.blendSrc=this.blendSrc),this.blendDst!==ba&&(r.blendDst=this.blendDst),this.blendEquation!==Qn&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Gi&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==el&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mi&&(r.stencilFail=this.stencilFail),this.stencilZFail!==mi&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==mi&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(i){const a=[];for(const o in i){const l=i[o];delete l.metadata,a.push(l)}return a}if(t){const i=n(e.textures),a=n(e.images);i.length>0&&(r.textures=i),a.length>0&&(r.images=a)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const n=t.length;r=new Array(n);for(let i=0;i!==n;++i)r[i]=t[i].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ci extends li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new B,Vr=new Ce;class tn{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=tl,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,i=this.itemSize;n<i;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Vr.fromBufferAttribute(this,t),Vr.applyMatrix3(e),this.setXY(t,Vr.x,Vr.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ui(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Lt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array),n=Lt(n,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tl&&(e.usage=this.usage),e}}class oh extends tn{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class lh extends tn{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Ot extends tn{constructor(e,t,r){super(new Float32Array(e),t,r)}}let rf=0;const Qt=new ot,ia=new _t,bi=new B,qt=new oi,ur=new oi,Et=new B;class Zt extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ih(e)?lh:oh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const i=new je().getNormalMatrix(e);r.applyNormalMatrix(i),r.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,r){return Qt.makeTranslation(e,t,r),this.applyMatrix4(Qt),this}scale(e,t,r){return Qt.makeScale(e,t,r),this.applyMatrix4(Qt),this}lookAt(e){return ia.lookAt(e),ia.updateMatrix(),this.applyMatrix4(ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bi).negate(),this.translate(bi.x,bi.y,bi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let n=0,i=e.length;n<i;n++){const a=e[n];r.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ot(r,3))}else{const r=Math.min(e.length,t.count);for(let n=0;n<r;n++){const i=e[n];t.setXYZ(n,i.x,i.y,i.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){const i=t[r];qt.setFromBufferAttribute(i),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const r=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const o=t[i];ur.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(qt.min,ur.min),qt.expandByPoint(Et),Et.addVectors(qt.max,ur.max),qt.expandByPoint(Et)):(qt.expandByPoint(ur.min),qt.expandByPoint(ur.max))}qt.getCenter(r);let n=0;for(let i=0,a=e.count;i<a;i++)Et.fromBufferAttribute(e,i),n=Math.max(n,r.distanceToSquared(Et));if(t)for(let i=0,a=t.length;i<a;i++){const o=t[i],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Et.fromBufferAttribute(o,c),l&&(bi.fromBufferAttribute(e,c),Et.add(bi)),n=Math.max(n,r.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,n=t.normal,i=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*r.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<r.count;R++)o[R]=new B,l[R]=new B;const c=new B,h=new B,u=new B,f=new Ce,d=new Ce,g=new Ce,_=new B,m=new B;function p(R,E,x){c.fromBufferAttribute(r,R),h.fromBufferAttribute(r,E),u.fromBufferAttribute(r,x),f.fromBufferAttribute(i,R),d.fromBufferAttribute(i,E),g.fromBufferAttribute(i,x),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(D),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(D),o[R].add(_),o[E].add(_),o[x].add(_),l[R].add(m),l[E].add(m),l[x].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let R=0,E=T.length;R<E;++R){const x=T[R],D=x.start,P=x.count;for(let U=D,N=D+P;U<N;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const M=new B,v=new B,w=new B,C=new B;function b(R){w.fromBufferAttribute(n,R),C.copy(w);const E=o[R];M.copy(E),M.sub(w.multiplyScalar(w.dot(E))).normalize(),v.crossVectors(C,E);const D=v.dot(l[R])<0?-1:1;a.setXYZW(R,M.x,M.y,M.z,D)}for(let R=0,E=T.length;R<E;++R){const x=T[R],D=x.start,P=x.count;for(let U=D,N=D+P;U<N;U+=3)b(e.getX(U+0)),b(e.getX(U+1)),b(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let f=0,d=r.count;f<d;f++)r.setXYZ(f,0,0,0);const n=new B,i=new B,a=new B,o=new B,l=new B,c=new B,h=new B,u=new B;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);n.fromBufferAttribute(t,g),i.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,i),u.subVectors(n,i),h.cross(u),o.fromBufferAttribute(r,g),l.fromBufferAttribute(r,_),c.fromBufferAttribute(r,m),o.add(h),l.add(h),c.add(h),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(_,l.x,l.y,l.z),r.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)n.fromBufferAttribute(t,f+0),i.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,i),u.subVectors(n,i),h.cross(u),r.setXYZ(f+0,h.x,h.y,h.z),r.setXYZ(f+1,h.x,h.y,h.z),r.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new tn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zt,r=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,r);t.setAttribute(o,c)}const i=this.morphAttributes;for(const o in i){const l=[],c=i[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,r);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let i=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(n[l]=h,i=!0)}i&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const i=e.morphAttributes;for(const c in i){const h=[],u=i[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gl=new ot,Yn=new Ts,Wr=new Ar,_l=new B,Xr=new B,Yr=new B,qr=new B,ra=new B,jr=new B,vl=new B,Kr=new B;class Tt extends _t{constructor(e=new Zt,t=new ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=n.length;i<a;i++){const o=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}getVertexPosition(e,t){const r=this.geometry,n=r.attributes.position,i=r.morphAttributes.position,a=r.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(i&&o){jr.set(0,0,0);for(let l=0,c=i.length;l<c;l++){const h=o[l],u=i[l];h!==0&&(ra.fromBufferAttribute(u,e),a?jr.addScaledVector(ra,h):jr.addScaledVector(ra.sub(t),h))}t.add(jr)}return t}raycast(e,t){const r=this.geometry,n=this.material,i=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Wr.copy(r.boundingSphere),Wr.applyMatrix4(i),Yn.copy(e.ray).recast(e.near),!(Wr.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(Wr,_l)===null||Yn.origin.distanceToSquared(_l)>(e.far-e.near)**2))&&(gl.copy(i).invert(),Yn.copy(e.ray).applyMatrix4(gl),!(r.boundingBox!==null&&Yn.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Yn)))}_computeIntersections(e,t,r){let n;const i=this.geometry,a=this.material,o=i.index,l=i.attributes.position,c=i.attributes.uv,h=i.attributes.uv1,u=i.attributes.normal,f=i.groups,d=i.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],T=Math.max(m.start,d.start),M=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=T,w=M;v<w;v+=3){const C=o.getX(v),b=o.getX(v+1),R=o.getX(v+2);n=Zr(this,p,e,r,c,h,u,C,b,R),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=o.getX(m),M=o.getX(m+1),v=o.getX(m+2);n=Zr(this,a,e,r,c,h,u,T,M,v),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],T=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=T,w=M;v<w;v+=3){const C=v,b=v+1,R=v+2;n=Zr(this,p,e,r,c,h,u,C,b,R),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=m,M=m+1,v=m+2;n=Zr(this,a,e,r,c,h,u,T,M,v),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function sf(s,e,t,r,n,i,a,o){let l;if(e.side===Vt?l=r.intersectTriangle(a,i,n,!0,o):l=r.intersectTriangle(n,i,a,e.side===Rn,o),l===null)return null;Kr.copy(o),Kr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Kr);return c<t.near||c>t.far?null:{distance:c,point:Kr.clone(),object:s}}function Zr(s,e,t,r,n,i,a,o,l,c){s.getVertexPosition(o,Xr),s.getVertexPosition(l,Yr),s.getVertexPosition(c,qr);const h=sf(s,e,t,r,Xr,Yr,qr,vl);if(h){const u=new B;hn.getBarycoord(vl,Xr,Yr,qr,u),n&&(h.uv=hn.getInterpolatedAttribute(n,o,l,c,u,new Ce)),i&&(h.uv1=hn.getInterpolatedAttribute(i,o,l,c,u,new Ce)),a&&(h.normal=hn.getInterpolatedAttribute(a,o,l,c,u,new B),h.normal.dot(r.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new B,materialIndex:0};hn.getNormal(Xr,Yr,qr,f.normal),h.face=f,h.barycoord=u}return h}class wr extends Zt{constructor(e=1,t=1,r=1,n=1,i=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:n,heightSegments:i,depthSegments:a};const o=this;n=Math.floor(n),i=Math.floor(i),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,r,t,e,a,i,0),g("z","y","x",1,-1,r,t,-e,a,i,1),g("x","z","y",1,1,e,r,t,n,a,2),g("x","z","y",1,-1,e,r,-t,n,a,3),g("x","y","z",1,-1,e,t,r,n,i,4),g("x","y","z",-1,-1,e,t,-r,n,i,5),this.setIndex(l),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(h,3)),this.setAttribute("uv",new Ot(u,2));function g(_,m,p,T,M,v,w,C,b,R,E){const x=v/b,D=w/R,P=v/2,U=w/2,N=C/2,X=b+1,G=R+1;let $=0,Y=0;const Z=new B;for(let K=0;K<G;K++){const I=K*D-U;for(let V=0;V<X;V++){const ne=V*x-P;Z[_]=ne*T,Z[m]=I*M,Z[p]=N,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[p]=C>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(V/b),u.push(1-K/R),$+=1}}for(let K=0;K<R;K++)for(let I=0;I<b;I++){const V=f+I+X*K,ne=f+I+X*(K+1),F=f+(I+1)+X*(K+1),k=f+(I+1)+X*K;l.push(V,ne,k),l.push(ne,F,k),Y+=6}o.addGroup(d,Y,E),d+=Y,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qi(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const n=s[t][r];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=n.clone():Array.isArray(n)?e[t][r]=n.slice():e[t][r]=n}}return e}function It(s){const e={};for(let t=0;t<s.length;t++){const r=qi(s[t]);for(const n in r)e[n]=r[n]}return e}function af(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ch(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const ji={clone:qi,merge:It};var of=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ft extends li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=of,this.fragmentShader=lf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qi(e.uniforms),this.uniformsGroups=af(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class hh extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=An}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zn=new B,xl=new Ce,yl=new Ce;class Kt extends hh{constructor(e=50,t=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zn.x,zn.y).multiplyScalar(-e/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(zn.x,zn.y).multiplyScalar(-e/zn.z)}getViewSize(e,t){return this.getViewBounds(e,xl,yl),t.subVectors(yl,xl)}setViewOffset(e,t,r,n,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_r*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,i=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;i+=a.offsetX*n/l,t-=a.offsetY*r/c,n*=a.width/l,r*=a.height/c}const o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+n,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ai=-90,wi=1;class cf extends _t{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Kt(Ai,wi,e,t);n.layers=this.layers,this.add(n);const i=new Kt(Ai,wi,e,t);i.layers=this.layers,this.add(i);const a=new Kt(Ai,wi,e,t);a.layers=this.layers,this.add(a);const o=new Kt(Ai,wi,e,t);o.layers=this.layers,this.add(o);const l=new Kt(Ai,wi,e,t);l.layers=this.layers,this.add(l);const c=new Kt(Ai,wi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,n,i,a,o,l]=t;for(const c of t)this.remove(c);if(e===An)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ys)r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,n),e.render(t,i),e.setRenderTarget(r,1,n),e.render(t,a),e.setRenderTarget(r,2,n),e.render(t,o),e.setRenderTarget(r,3,n),e.render(t,l),e.setRenderTarget(r,4,n),e.render(t,c),r.texture.generateMipmaps=_,e.setRenderTarget(r,5,n),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,r.texture.needsPMREMUpdate=!0}}class uh extends Nt{constructor(e,t,r,n,i,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Hi,super(e,t,r,n,i,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hf extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];this.texture=new uh(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new wr(5,5,5),i=new Ft({name:"CubemapFromEquirect",uniforms:qi(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vt,blending:wn});i.uniforms.tEquirect.value=t;const a=new Tt(n,i),o=t.minFilter;return t.minFilter===ti&&(t.minFilter=$t),new cf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,r,n){const i=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,r,n);e.setRenderTarget(i)}}class Ro{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new qe(e),this.density=t}clone(){return new Ro(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ml extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class uf extends tn{constructor(e,t,r,n=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const sa=new B,ff=new B,df=new je;class Gn{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const n=sa.subVectors(r,t).cross(ff.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(sa),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/n;return i<0||i>1?null:t.copy(e.start).addScaledVector(r,i)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||df.getNormalMatrix(e),n=this.coplanarPoint(sa).applyMatrix4(e),i=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new Ar,Jr=new B;class Po{constructor(e=new Gn,t=new Gn,r=new Gn,n=new Gn,i=new Gn,a=new Gn){this.planes=[e,t,r,n,i,a]}set(e,t,r,n,i,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(n),o[4].copy(i),o[5].copy(a),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=An){const r=this.planes,n=e.elements,i=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],u=n[6],f=n[7],d=n[8],g=n[9],_=n[10],m=n[11],p=n[12],T=n[13],M=n[14],v=n[15];if(r[0].setComponents(l-i,f-c,m-d,v-p).normalize(),r[1].setComponents(l+i,f+c,m+d,v+p).normalize(),r[2].setComponents(l+a,f+h,m+g,v+T).normalize(),r[3].setComponents(l-a,f-h,m-g,v-T).normalize(),r[4].setComponents(l-o,f-u,m-_,v-M).normalize(),t===An)r[5].setComponents(l+o,f+u,m+_,v+M).normalize();else if(t===ys)r[5].setComponents(o,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(e){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(e){const t=this.planes,r=e.center,n=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const n=t[r];if(Jr.x=n.normal.x>0?e.max.x:e.min.x,Jr.y=n.normal.y>0?e.max.y:e.min.y,Jr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fh extends li{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Sl=new ot,co=new Ts,Qr=new Ar,$r=new B;class pf extends _t{constructor(e=new Zt,t=new fh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,n=this.matrixWorld,i=e.params.Points.threshold,a=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Qr.copy(r.boundingSphere),Qr.applyMatrix4(n),Qr.radius+=i,e.ray.intersectsSphere(Qr)===!1)return;Sl.copy(n).invert(),co.copy(e.ray).applyMatrix4(Sl);const o=i/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=r.index,u=r.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);$r.fromBufferAttribute(u,m),El($r,m,l,n,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,_=d;g<_;g++)$r.fromBufferAttribute(u,g),El($r,g,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=n.length;i<a;i++){const o=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}}function El(s,e,t,r,n,i,a){const o=co.distanceSqToPoint(s);if(o<t){const l=new B;co.closestPointToPoint(s,l),l.applyMatrix4(r);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;i.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class es extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}class dh extends Nt{constructor(e,t,r,n,i,a,o,l,c,h=Bi){if(h!==Bi&&h!==Xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&h===Bi&&(r=ii),r===void 0&&h===Xi&&(r=Wi),super(null,n,i,a,o,l,h,r,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Dn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,n=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)r=this.getPoint(a/e),i+=r.distanceTo(n),t.push(i),n=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let n=0;const i=r.length;let a;t?a=t:a=e*r[i-1];let o=0,l=i-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=r[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,r[n]===a)return n/(i-1);const h=r[n],f=r[n+1]-h,d=(a-h)/f;return(n+d)/(i-1)}getTangent(e,t){let n=e-1e-4,i=e+1e-4;n<0&&(n=0),i>1&&(i=1);const a=this.getPoint(n),o=this.getPoint(i),l=t||(a.isVector2?new Ce:new B);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new B,n=[],i=[],a=[],o=new B,l=new ot;for(let d=0;d<=e;d++){const g=d/e;n[d]=this.getTangentAt(g,new B)}i[0]=new B,a[0]=new B;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),u=Math.abs(n[0].y),f=Math.abs(n[0].z);h<=c&&(c=h,r.set(1,0,0)),u<=c&&(c=u,r.set(0,1,0)),f<=c&&r.set(0,0,1),o.crossVectors(n[0],r).normalize(),i[0].crossVectors(n[0],o),a[0].crossVectors(n[0],i[0]);for(let d=1;d<=e;d++){if(i[d]=i[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(n[d-1],n[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Je(n[d-1].dot(n[d]),-1,1));i[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(n[d],i[d])}if(t===!0){let d=Math.acos(Je(i[0].dot(i[e]),-1,1));d/=e,n[0].dot(o.crossVectors(i[0],i[e]))>0&&(d=-d);for(let g=1;g<=e;g++)i[g].applyMatrix4(l.makeRotationAxis(n[g],d*g)),a[g].crossVectors(n[g],i[g])}return{tangents:n,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ph extends Dn{constructor(e=0,t=0,r=1,n=1,i=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=n,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Ce){const r=t,n=Math.PI*2;let i=this.aEndAngle-this.aStartAngle;const a=Math.abs(i)<Number.EPSILON;for(;i<0;)i+=n;for(;i>n;)i-=n;i<Number.EPSILON&&(a?i=0:i=n),this.aClockwise===!0&&!a&&(i===n?i=-n:i=i-n);const o=this.aStartAngle+e*i;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return r.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class mf extends ph{constructor(e,t,r,n,i,a){super(e,t,r,r,n,i,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Do(){let s=0,e=0,t=0,r=0;function n(i,a,o,l){s=i,e=o,t=-3*i+3*a-2*o-l,r=2*i-2*a+o+l}return{initCatmullRom:function(i,a,o,l,c){n(a,o,c*(o-i),c*(l-a))},initNonuniformCatmullRom:function(i,a,o,l,c,h,u){let f=(a-i)/c-(o-i)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,n(a,o,f,d)},calc:function(i){const a=i*i,o=a*i;return s+e*i+t*a+r*o}}}const ts=new B,aa=new Do,oa=new Do,la=new Do;class ho extends Dn{constructor(e=[],t=!1,r="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=n}getPoint(e,t=new B){const r=t,n=this.points,i=n.length,a=(i-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:l===0&&o===i-1&&(o=i-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%i]:(ts.subVectors(n[0],n[1]).add(n[0]),c=ts);const u=n[o%i],f=n[(o+1)%i];if(this.closed||o+2<i?h=n[(o+2)%i]:(ts.subVectors(n[i-1],n[i-2]).add(n[i-1]),h=ts),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),aa.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),oa.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),la.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(aa.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),oa.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),la.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return r.set(aa.calc(l),oa.calc(l),la.calc(l)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const n=e.points[t];this.points.push(new B().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Tl(s,e,t,r,n){const i=(r-e)*.5,a=(n-t)*.5,o=s*s,l=s*o;return(2*t-2*r+i+a)*l+(-3*t+3*r-2*i-a)*o+i*s+t}function gf(s,e){const t=1-s;return t*t*e}function _f(s,e){return 2*(1-s)*s*e}function vf(s,e){return s*s*e}function xr(s,e,t,r){return gf(s,e)+_f(s,t)+vf(s,r)}function xf(s,e){const t=1-s;return t*t*t*e}function yf(s,e){const t=1-s;return 3*t*t*s*e}function Mf(s,e){return 3*(1-s)*s*s*e}function Sf(s,e){return s*s*s*e}function yr(s,e,t,r,n){return xf(s,e)+yf(s,t)+Mf(s,r)+Sf(s,n)}class Ef extends Dn{constructor(e=new Ce,t=new Ce,r=new Ce,n=new Ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=n}getPoint(e,t=new Ce){const r=t,n=this.v0,i=this.v1,a=this.v2,o=this.v3;return r.set(yr(e,n.x,i.x,a.x,o.x),yr(e,n.y,i.y,a.y,o.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Tf extends Dn{constructor(e=new B,t=new B,r=new B,n=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=n}getPoint(e,t=new B){const r=t,n=this.v0,i=this.v1,a=this.v2,o=this.v3;return r.set(yr(e,n.x,i.x,a.x,o.x),yr(e,n.y,i.y,a.y,o.y),yr(e,n.z,i.z,a.z,o.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class bf extends Dn{constructor(e=new Ce,t=new Ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ce){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Af extends Dn{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wf extends Dn{constructor(e=new Ce,t=new Ce,r=new Ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Ce){const r=t,n=this.v0,i=this.v1,a=this.v2;return r.set(xr(e,n.x,i.x,a.x),xr(e,n.y,i.y,a.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mh extends Dn{constructor(e=new B,t=new B,r=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new B){const r=t,n=this.v0,i=this.v1,a=this.v2;return r.set(xr(e,n.x,i.x,a.x),xr(e,n.y,i.y,a.y),xr(e,n.z,i.z,a.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cf extends Dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ce){const r=t,n=this.points,i=(n.length-1)*e,a=Math.floor(i),o=i-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return r.set(Tl(o,l.x,c.x,h.x,u.x),Tl(o,l.y,c.y,h.y,u.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const n=e.points[t];this.points.push(new Ce().fromArray(n))}return this}}var Rf=Object.freeze({__proto__:null,ArcCurve:mf,CatmullRomCurve3:ho,CubicBezierCurve:Ef,CubicBezierCurve3:Tf,EllipseCurve:ph,LineCurve:bf,LineCurve3:Af,QuadraticBezierCurve:wf,QuadraticBezierCurve3:mh,SplineCurve:Cf});class hi extends Zt{constructor(e=1,t=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:n};const i=e/2,a=t/2,o=Math.floor(r),l=Math.floor(n),c=o+1,h=l+1,u=e/o,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const T=p*f-a;for(let M=0;M<c;M++){const v=M*u-i;g.push(v,-T,0),_.push(0,0,1),m.push(M/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){const M=T+c*p,v=T+c*(p+1),w=T+1+c*(p+1),C=T+1+c*p;d.push(M,v,C),d.push(v,w,C)}this.setIndex(d),this.setAttribute("position",new Ot(g,3)),this.setAttribute("normal",new Ot(_,3)),this.setAttribute("uv",new Ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hi(e.width,e.height,e.widthSegments,e.heightSegments)}}class br extends Zt{constructor(e=1,t=32,r=16,n=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:n,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new B,f=new B,d=[],g=[],_=[],m=[];for(let p=0;p<=r;p++){const T=[],M=p/r;let v=0;p===0&&a===0?v=.5/t:p===r&&l===Math.PI&&(v=-.5/t);for(let w=0;w<=t;w++){const C=w/t;u.x=-e*Math.cos(n+C*i)*Math.sin(a+M*o),u.y=e*Math.cos(a+M*o),u.z=e*Math.sin(n+C*i)*Math.sin(a+M*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(C+v,1-M),T.push(c++)}h.push(T)}for(let p=0;p<r;p++)for(let T=0;T<t;T++){const M=h[p][T+1],v=h[p][T],w=h[p+1][T],C=h[p+1][T+1];(p!==0||a>0)&&d.push(M,v,C),(p!==r-1||l<Math.PI)&&d.push(v,w,C)}this.setIndex(d),this.setAttribute("position",new Ot(g,3)),this.setAttribute("normal",new Ot(_,3)),this.setAttribute("uv",new Ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ss extends Zt{constructor(e=new mh(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),t=64,r=1,n=8,i=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:n,closed:i};const a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new B,l=new B,c=new Ce;let h=new B;const u=[],f=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Ot(u,3)),this.setAttribute("normal",new Ot(f,3)),this.setAttribute("uv",new Ot(d,2));function _(){for(let M=0;M<t;M++)m(M);m(i===!1?t:0),T(),p()}function m(M){h=e.getPointAt(M/t,h);const v=a.normals[M],w=a.binormals[M];for(let C=0;C<=n;C++){const b=C/n*Math.PI*2,R=Math.sin(b),E=-Math.cos(b);l.x=E*v.x+R*w.x,l.y=E*v.y+R*w.y,l.z=E*v.z+R*w.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+r*l.x,o.y=h.y+r*l.y,o.z=h.z+r*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let M=1;M<=t;M++)for(let v=1;v<=n;v++){const w=(n+1)*(M-1)+(v-1),C=(n+1)*M+(v-1),b=(n+1)*M+v,R=(n+1)*(M-1)+v;g.push(w,C,R),g.push(C,b,R)}}function T(){for(let M=0;M<=t;M++)for(let v=0;v<=n;v++)c.x=M/t,c.y=v/n,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ss(new Rf[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Pf extends Ft{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gh extends li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eh,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Df extends gh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class _h extends li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=du,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vh extends li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class bs extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Uf extends bs{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ca=new ot,bl=new B,Al=new B;class xh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Po,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;bl.setFromMatrixPosition(e.matrixWorld),t.position.copy(bl),Al.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Al),t.updateMatrixWorld(),ca.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ca),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(ca)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const wl=new ot,fr=new B,ha=new B;class Lf extends xh{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ce(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,n=this.matrix,i=e.distance||r.far;i!==r.far&&(r.far=i,r.updateProjectionMatrix()),fr.setFromMatrixPosition(e.matrixWorld),r.position.copy(fr),ha.copy(r.position),ha.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(ha),r.updateMatrixWorld(),n.makeTranslation(-fr.x,-fr.y,-fr.z),wl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wl)}}class dr extends bs{constructor(e,t,r=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=n,this.shadow=new Lf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Uo extends hh{constructor(e=-1,t=1,r=1,n=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let i=r-e,a=r+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=c*this.view.offsetX,a=i+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class If extends xh{constructor(){super(new Uo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cl extends bs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new If}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ff extends bs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Nf extends Zt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Of extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Rl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Rl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Rl(){return performance.now()}const Pl=new ot;class kf{constructor(e,t,r=0,n=1/0){this.ray=new Ts(e,t),this.near=r,this.far=n,this.camera=null,this.layers=new Co,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Pl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pl),this}intersectObject(e,t=!0,r=[]){return uo(e,this,r,t),r.sort(Dl),r}intersectObjects(e,t=!0,r=[]){for(let n=0,i=e.length;n<i;n++)uo(e[n],this,r,t);return r.sort(Dl),r}}function Dl(s,e){return s.distance-e.distance}function uo(s,e,t,r){let n=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(n=!1),n===!0&&r===!0){const i=s.children;for(let a=0,o=i.length;a<o;a++)uo(i[a],e,t,!0)}}class Ul{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class zf extends ai{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Ll(s,e,t,r){const n=Gf(r);switch(t){case Yc:return s*e;case jc:return s*e;case Kc:return s*e*2;case Zc:return s*e/n.components*n.byteLength;case To:return s*e/n.components*n.byteLength;case Jc:return s*e*2/n.components*n.byteLength;case bo:return s*e*2/n.components*n.byteLength;case qc:return s*e*3/n.components*n.byteLength;case un:return s*e*4/n.components*n.byteLength;case Ao:return s*e*4/n.components*n.byteLength;case us:case fs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ds:case ps:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ba:case za:return Math.max(s,16)*Math.max(e,8)/4;case Oa:case ka:return Math.max(s,8)*Math.max(e,8)/2;case Ga:case Ha:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Va:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xa:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case qa:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ja:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ka:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Za:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ja:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Qa:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case $a:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case eo:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case to:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case no:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case io:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ms:case ro:case so:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Qc:case ao:return Math.ceil(s/4)*Math.ceil(e/4)*8;case oo:case lo:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gf(s){switch(s){case Pn:case Vc:return{byteLength:1,components:1};case Er:case Wc:case _n:return{byteLength:2,components:1};case So:case Eo:return{byteLength:2,components:4};case ii:case Mo:case bn:return{byteLength:4,components:1};case Xc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xo);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yh(){let s=null,e=!1,t=null,r=null;function n(i,a){t(i,a),r=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){s=i}}}function Hf(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function r(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function i(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,o,l),c.version=o.version}}return{get:n,remove:i,update:a}}var Vf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Qf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$f=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ed=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,td=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,id=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ld=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,md=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_d=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xd="gl_FragColor = linearToOutputTexel( gl_FragColor );",yd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Md=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Sd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ed=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Td=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ad=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Dd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ud=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ld=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Id=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Fd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Nd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Od=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$d=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ep=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,np=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ip=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ap=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,op=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,up=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_p=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ep=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,bp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ap=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Up=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ip=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Np=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Op=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$p=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,im=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,am=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,om=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,um=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_m=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ym=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:Vf,alphahash_pars_fragment:Wf,alphamap_fragment:Xf,alphamap_pars_fragment:Yf,alphatest_fragment:qf,alphatest_pars_fragment:jf,aomap_fragment:Kf,aomap_pars_fragment:Zf,batching_pars_vertex:Jf,batching_vertex:Qf,begin_vertex:$f,beginnormal_vertex:ed,bsdfs:td,iridescence_fragment:nd,bumpmap_pars_fragment:id,clipping_planes_fragment:rd,clipping_planes_pars_fragment:sd,clipping_planes_pars_vertex:ad,clipping_planes_vertex:od,color_fragment:ld,color_pars_fragment:cd,color_pars_vertex:hd,color_vertex:ud,common:fd,cube_uv_reflection_fragment:dd,defaultnormal_vertex:pd,displacementmap_pars_vertex:md,displacementmap_vertex:gd,emissivemap_fragment:_d,emissivemap_pars_fragment:vd,colorspace_fragment:xd,colorspace_pars_fragment:yd,envmap_fragment:Md,envmap_common_pars_fragment:Sd,envmap_pars_fragment:Ed,envmap_pars_vertex:Td,envmap_physical_pars_fragment:Fd,envmap_vertex:bd,fog_vertex:Ad,fog_pars_vertex:wd,fog_fragment:Cd,fog_pars_fragment:Rd,gradientmap_pars_fragment:Pd,lightmap_pars_fragment:Dd,lights_lambert_fragment:Ud,lights_lambert_pars_fragment:Ld,lights_pars_begin:Id,lights_toon_fragment:Nd,lights_toon_pars_fragment:Od,lights_phong_fragment:Bd,lights_phong_pars_fragment:kd,lights_physical_fragment:zd,lights_physical_pars_fragment:Gd,lights_fragment_begin:Hd,lights_fragment_maps:Vd,lights_fragment_end:Wd,logdepthbuf_fragment:Xd,logdepthbuf_pars_fragment:Yd,logdepthbuf_pars_vertex:qd,logdepthbuf_vertex:jd,map_fragment:Kd,map_pars_fragment:Zd,map_particle_fragment:Jd,map_particle_pars_fragment:Qd,metalnessmap_fragment:$d,metalnessmap_pars_fragment:ep,morphinstance_vertex:tp,morphcolor_vertex:np,morphnormal_vertex:ip,morphtarget_pars_vertex:rp,morphtarget_vertex:sp,normal_fragment_begin:ap,normal_fragment_maps:op,normal_pars_fragment:lp,normal_pars_vertex:cp,normal_vertex:hp,normalmap_pars_fragment:up,clearcoat_normal_fragment_begin:fp,clearcoat_normal_fragment_maps:dp,clearcoat_pars_fragment:pp,iridescence_pars_fragment:mp,opaque_fragment:gp,packing:_p,premultiplied_alpha_fragment:vp,project_vertex:xp,dithering_fragment:yp,dithering_pars_fragment:Mp,roughnessmap_fragment:Sp,roughnessmap_pars_fragment:Ep,shadowmap_pars_fragment:Tp,shadowmap_pars_vertex:bp,shadowmap_vertex:Ap,shadowmask_pars_fragment:wp,skinbase_vertex:Cp,skinning_pars_vertex:Rp,skinning_vertex:Pp,skinnormal_vertex:Dp,specularmap_fragment:Up,specularmap_pars_fragment:Lp,tonemapping_fragment:Ip,tonemapping_pars_fragment:Fp,transmission_fragment:Np,transmission_pars_fragment:Op,uv_pars_fragment:Bp,uv_pars_vertex:kp,uv_vertex:zp,worldpos_vertex:Gp,background_vert:Hp,background_frag:Vp,backgroundCube_vert:Wp,backgroundCube_frag:Xp,cube_vert:Yp,cube_frag:qp,depth_vert:jp,depth_frag:Kp,distanceRGBA_vert:Zp,distanceRGBA_frag:Jp,equirect_vert:Qp,equirect_frag:$p,linedashed_vert:em,linedashed_frag:tm,meshbasic_vert:nm,meshbasic_frag:im,meshlambert_vert:rm,meshlambert_frag:sm,meshmatcap_vert:am,meshmatcap_frag:om,meshnormal_vert:lm,meshnormal_frag:cm,meshphong_vert:hm,meshphong_frag:um,meshphysical_vert:fm,meshphysical_frag:dm,meshtoon_vert:pm,meshtoon_frag:mm,points_vert:gm,points_frag:_m,shadow_vert:vm,shadow_frag:xm,sprite_vert:ym,sprite_frag:Mm},Pe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},mn={basic:{uniforms:It([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:It([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:It([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:It([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:It([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:It([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:It([Pe.points,Pe.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:It([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:It([Pe.common,Pe.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:It([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:It([Pe.sprite,Pe.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:It([Pe.common,Pe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:It([Pe.lights,Pe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};mn.physical={uniforms:It([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const ns={r:0,b:0,g:0},jn=new vn,Sm=new ot;function Em(s,e,t,r,n,i,a){const o=new qe(0);let l=i===!0?0:1,c,h,u=null,f=0,d=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?t:e).get(v)),v}function _(M){let v=!1;const w=g(M);w===null?p(o,l):w&&w.isColor&&(p(w,1),v=!0);const C=s.xr.getEnvironmentBlendMode();C==="additive"?r.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,v){const w=g(v);w&&(w.isCubeTexture||w.mapping===Es)?(h===void 0&&(h=new Tt(new wr(1,1,1),new Ft({name:"BackgroundCubeMaterial",uniforms:qi(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),jn.copy(v.backgroundRotation),jn.x*=-1,jn.y*=-1,jn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Sm.makeRotationFromEuler(jn)),h.material.toneMapped=nt.getTransfer(w.colorSpace)!==rt,(u!==w||f!==w.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=w,f=w.version,d=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Tt(new hi(2,2),new Ft({name:"BackgroundMaterial",uniforms:qi(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=nt.getTransfer(w.colorSpace)!==rt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||f!==w.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=w,f=w.version,d=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,v){M.getRGB(ns,ch(s)),r.buffers.color.setClear(ns.r,ns.g,ns.b,v,a)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(M,v=1){o.set(M),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:_,addToRenderList:m,dispose:T}}function Tm(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},n=f(null);let i=n,a=!1;function o(x,D,P,U,N){let X=!1;const G=u(U,P,D);i!==G&&(i=G,c(i.object)),X=d(x,U,P,N),X&&g(x,U,P,N),N!==null&&e.update(N,s.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,v(x,D,P,U),N!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return s.createVertexArray()}function c(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function u(x,D,P){const U=P.wireframe===!0;let N=r[x.id];N===void 0&&(N={},r[x.id]=N);let X=N[D.id];X===void 0&&(X={},N[D.id]=X);let G=X[U];return G===void 0&&(G=f(l()),X[U]=G),G}function f(x){const D=[],P=[],U=[];for(let N=0;N<t;N++)D[N]=0,P[N]=0,U[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:P,attributeDivisors:U,object:x,attributes:{},index:null}}function d(x,D,P,U){const N=i.attributes,X=D.attributes;let G=0;const $=P.getAttributes();for(const Y in $)if($[Y].location>=0){const K=N[Y];let I=X[Y];if(I===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(I=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(I=x.instanceColor)),K===void 0||K.attribute!==I||I&&K.data!==I.data)return!0;G++}return i.attributesNum!==G||i.index!==U}function g(x,D,P,U){const N={},X=D.attributes;let G=0;const $=P.getAttributes();for(const Y in $)if($[Y].location>=0){let K=X[Y];K===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(K=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(K=x.instanceColor));const I={};I.attribute=K,K&&K.data&&(I.data=K.data),N[Y]=I,G++}i.attributes=N,i.attributesNum=G,i.index=U}function _(){const x=i.newAttributes;for(let D=0,P=x.length;D<P;D++)x[D]=0}function m(x){p(x,0)}function p(x,D){const P=i.newAttributes,U=i.enabledAttributes,N=i.attributeDivisors;P[x]=1,U[x]===0&&(s.enableVertexAttribArray(x),U[x]=1),N[x]!==D&&(s.vertexAttribDivisor(x,D),N[x]=D)}function T(){const x=i.newAttributes,D=i.enabledAttributes;for(let P=0,U=D.length;P<U;P++)D[P]!==x[P]&&(s.disableVertexAttribArray(P),D[P]=0)}function M(x,D,P,U,N,X,G){G===!0?s.vertexAttribIPointer(x,D,P,N,X):s.vertexAttribPointer(x,D,P,U,N,X)}function v(x,D,P,U){_();const N=U.attributes,X=P.getAttributes(),G=D.defaultAttributeValues;for(const $ in X){const Y=X[$];if(Y.location>=0){let Z=N[$];if(Z===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(Z=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(Z=x.instanceColor)),Z!==void 0){const K=Z.normalized,I=Z.itemSize,V=e.get(Z);if(V===void 0)continue;const ne=V.buffer,F=V.type,k=V.bytesPerElement,te=F===s.INT||F===s.UNSIGNED_INT||Z.gpuType===Mo;if(Z.isInterleavedBufferAttribute){const W=Z.data,re=W.stride,me=Z.offset;if(W.isInstancedInterleavedBuffer){for(let ye=0;ye<Y.locationSize;ye++)p(Y.location+ye,W.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ye=0;ye<Y.locationSize;ye++)m(Y.location+ye);s.bindBuffer(s.ARRAY_BUFFER,ne);for(let ye=0;ye<Y.locationSize;ye++)M(Y.location+ye,I/Y.locationSize,F,K,re*k,(me+I/Y.locationSize*ye)*k,te)}else{if(Z.isInstancedBufferAttribute){for(let W=0;W<Y.locationSize;W++)p(Y.location+W,Z.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let W=0;W<Y.locationSize;W++)m(Y.location+W);s.bindBuffer(s.ARRAY_BUFFER,ne);for(let W=0;W<Y.locationSize;W++)M(Y.location+W,I/Y.locationSize,F,K,I*k,I/Y.locationSize*W*k,te)}}else if(G!==void 0){const K=G[$];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(Y.location,K);break;case 3:s.vertexAttrib3fv(Y.location,K);break;case 4:s.vertexAttrib4fv(Y.location,K);break;default:s.vertexAttrib1fv(Y.location,K)}}}}T()}function w(){R();for(const x in r){const D=r[x];for(const P in D){const U=D[P];for(const N in U)h(U[N].object),delete U[N];delete D[P]}delete r[x]}}function C(x){if(r[x.id]===void 0)return;const D=r[x.id];for(const P in D){const U=D[P];for(const N in U)h(U[N].object),delete U[N];delete D[P]}delete r[x.id]}function b(x){for(const D in r){const P=r[D];if(P[x.id]===void 0)continue;const U=P[x.id];for(const N in U)h(U[N].object),delete U[N];delete P[x.id]}}function R(){E(),a=!0,i!==n&&(i=n,c(i.object))}function E(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:R,resetDefaultState:E,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function bm(s,e,t){let r;function n(c){r=c}function i(c,h){s.drawArrays(r,c,h),t.update(h,r,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(r,c,h,u),t.update(h,r,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,r,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(r,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];t.update(g,r,1)}}this.setMode=n,this.render=i,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Am(s,e,t,r){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(b){return!(b!==un&&r.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const R=b===_n&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Pn&&r.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==bn&&!R)}function l(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:w,maxSamples:C}}function wm(s){const e=this;let t=null,r=0,n=!1,i=!1;const a=new Gn,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||r!==0||n;return n=f,r=u.length,d},this.beginShadows=function(){i=!0,h(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!n||g===null||g.length===0||i&&!m)i?h(null):c();else{const T=i?0:r,M=T*4;let v=p.clippingState||null;l.value=v,v=h(g,f,M,d);for(let w=0;w!==M;++w)v[w]=t[w];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=d;M!==_;++M,v+=4)a.copy(u[M]).applyMatrix4(T,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Cm(s){let e=new WeakMap;function t(a,o){return o===La?a.mapping=Hi:o===Ia&&(a.mapping=Vi),a}function r(a){if(a&&a.isTexture){const o=a.mapping;if(o===La||o===Ia)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new hf(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",n),t(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function i(){e=new WeakMap}return{get:r,dispose:i}}const Fi=4,Il=[.125,.215,.35,.446,.526,.582],$n=20,ua=new Uo,Fl=new qe;let fa=null,da=0,pa=0,ma=!1;const Jn=(1+Math.sqrt(5))/2,Ci=1/Jn,Nl=[new B(-Jn,Ci,0),new B(Jn,Ci,0),new B(-Ci,0,Jn),new B(Ci,0,Jn),new B(0,Jn,-Ci),new B(0,Jn,Ci),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class fo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,n=100){fa=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),pa=this._renderer.getActiveMipmapLevel(),ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,r,n,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fa,da,pa),this._renderer.xr.enabled=ma,e.scissorTest=!1,is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hi||e.mapping===Vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fa=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),pa=this._renderer.getActiveMipmapLevel(),ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:_n,format:un,colorSpace:Yi,depthBuffer:!1},n=Ol(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ol(e,t,r);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rm(i)),this._blurMaterial=Pm(i,e,t)}return n}_compileMaterial(e){const t=new Tt(this._lodPlanes[0],e);this._renderer.compile(t,ua)}_sceneToCubeUV(e,t,r,n){const o=new Kt(90,1,t,r),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Fl),h.toneMapping=Vn,h.autoClear=!1;const d=new ci({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),g=new Tt(new wr,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Fl),_=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):T===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const M=this._cubeSize;is(n,T*M,p>2?M:0,M,M),h.setRenderTarget(n),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const r=this._renderer,n=e.mapping===Hi||e.mapping===Vi;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=kl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bl());const i=n?this._cubemapMaterial:this._equirectMaterial,a=new Tt(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;const l=this._cubeSize;is(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(a,ua)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let i=1;i<n;i++){const a=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Nl[(n-i-1)%Nl.length];this._blur(e,i-1,i,a,o)}t.autoClear=r}_blur(e,t,r,n,i){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,r,n,"latitudinal",i),this._halfBlur(a,e,r,r,n,"longitudinal",i)}_halfBlur(e,t,r,n,i,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Tt(this._lodPlanes[n],c),f=c.uniforms,d=this._sizeLods[r]-1,g=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*$n-1),_=i/g,m=isFinite(i)?1+Math.floor(h*_):$n;m>$n&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$n}`);const p=[];let T=0;for(let b=0;b<$n;++b){const R=b/_,E=Math.exp(-R*R/2);p.push(E),b===0?T+=E:b<m&&(T+=2*E)}for(let b=0;b<p.length;b++)p[b]=p[b]/T;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-r;const v=this._sizeLods[n],w=3*v*(n>M-Fi?n-M+Fi:0),C=4*(this._cubeSize-v);is(t,w,C,3*v,2*v),l.setRenderTarget(t),l.render(u,ua)}}function Rm(s){const e=[],t=[],r=[];let n=s;const i=s-Fi+1+Il.length;for(let a=0;a<i;a++){const o=Math.pow(2,n);t.push(o);let l=1/o;a>s-Fi?l=Il[a-s+Fi-1]:a===0&&(l=0),r.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*d),M=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let C=0;C<d;C++){const b=C%3*2/3-1,R=C>2?0:-1,E=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];T.set(E,_*g*C),M.set(f,m*g*C);const x=[C,C,C,C,C,C];v.set(x,p*g*C)}const w=new Zt;w.setAttribute("position",new tn(T,_)),w.setAttribute("uv",new tn(M,m)),w.setAttribute("faceIndex",new tn(v,p)),e.push(w),n>Fi&&n--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Ol(s,e,t){const r=new en(s,e,t);return r.texture.mapping=Es,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function is(s,e,t,r,n){s.viewport.set(e,t,r,n),s.scissor.set(e,t,r,n)}function Pm(s,e,t){const r=new Float32Array($n),n=new B(0,1,0);return new Ft({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Bl(){return new Ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function kl(){return new Ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Lo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Dm(s){let e=new WeakMap,t=null;function r(o){if(o&&o.isTexture){const l=o.mapping,c=l===La||l===Ia,h=l===Hi||l===Vi;if(c||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new fo(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&n(d)?(t===null&&(t=new fo(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",i),u.texture):null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function i(o){const l=o.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:a}}function Um(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let n;switch(r){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(r)}return e[r]=n,n}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const n=t(r);return n===null&&Li("THREE.WebGLRenderer: "+r+" extension not supported."),n}}}function Lm(s,e,t,r){const n={},i=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete n[f.id];const d=i.get(f);d&&(e.remove(d),i.delete(f)),r.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return n[f.id]===!0||(f.addEventListener("dispose",a),n[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)e.update(f[d],s.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const T=d.array;_=d.version;for(let M=0,v=T.length;M<v;M+=3){const w=T[M+0],C=T[M+1],b=T[M+2];f.push(w,C,C,b,b,w)}}else if(g!==void 0){const T=g.array;_=g.version;for(let M=0,v=T.length/3-1;M<v;M+=3){const w=M+0,C=M+1,b=M+2;f.push(w,C,C,b,b,w)}}else return;const m=new(ih(f)?lh:oh)(f,1);m.version=_;const p=i.get(u);p&&e.remove(p),i.set(u,m)}function h(u){const f=i.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return i.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Im(s,e,t){let r;function n(f){r=f}let i,a;function o(f){i=f.type,a=f.bytesPerElement}function l(f,d){s.drawElements(r,d,i,f*a),t.update(d,r,1)}function c(f,d,g){g!==0&&(s.drawElementsInstanced(r,d,i,f*a,g),t.update(d,r,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,d,0,i,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,r,1)}function u(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(r,d,0,i,f,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=d[T]*_[T];t.update(p,r,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Fm(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(i,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(i/3);break;case s.LINES:t.lines+=o*(i/2);break;case s.LINE_STRIP:t.lines+=o*(i-1);break;case s.LINE_LOOP:t.lines+=o*i;break;case s.POINTS:t.points+=o*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:r}}function Nm(s,e,t){const r=new WeakMap,n=new it;function i(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=r.get(o);if(f===void 0||f.count!==u){let x=function(){R.dispose(),r.delete(o),o.removeEventListener("dispose",x)};var d=x;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let w=o.attributes.position.count*v,C=1;w>e.maxTextureSize&&(C=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const b=new Float32Array(w*C*4*u),R=new sh(b,w,C,u);R.type=bn,R.needsUpdate=!0;const E=v*4;for(let D=0;D<u;D++){const P=p[D],U=T[D],N=M[D],X=w*C*4*D;for(let G=0;G<P.count;G++){const $=G*E;g===!0&&(n.fromBufferAttribute(P,G),b[X+$+0]=n.x,b[X+$+1]=n.y,b[X+$+2]=n.z,b[X+$+3]=0),_===!0&&(n.fromBufferAttribute(U,G),b[X+$+4]=n.x,b[X+$+5]=n.y,b[X+$+6]=n.z,b[X+$+7]=0),m===!0&&(n.fromBufferAttribute(N,G),b[X+$+8]=n.x,b[X+$+9]=n.y,b[X+$+10]=n.z,b[X+$+11]=N.itemSize===4?n.w:1)}}f={count:u,texture:R,size:new Ce(w,C)},r.set(o,f),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:i}}function Om(s,e,t,r){let n=new WeakMap;function i(l){const c=r.render.frame,h=l.geometry,u=e.get(l,h);if(n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return u}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:i,dispose:a}}const Mh=new Nt,zl=new dh(1,1),Sh=new sh,Eh=new ju,Th=new uh,Gl=[],Hl=[],Vl=new Float32Array(16),Wl=new Float32Array(9),Xl=new Float32Array(4);function Zi(s,e,t){const r=s[0];if(r<=0||r>0)return s;const n=e*t;let i=Gl[n];if(i===void 0&&(i=new Float32Array(n),Gl[n]=i),e!==0){r.toArray(i,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(i,o)}return i}function vt(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function xt(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function As(s,e){let t=Hl[e];t===void 0&&(t=new Int32Array(e),Hl[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function Bm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function km(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;s.uniform2fv(this.addr,e),xt(t,e)}}function zm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;s.uniform3fv(this.addr,e),xt(t,e)}}function Gm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;s.uniform4fv(this.addr,e),xt(t,e)}}function Hm(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(vt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,r))return;Xl.set(r),s.uniformMatrix2fv(this.addr,!1,Xl),xt(t,r)}}function Vm(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(vt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,r))return;Wl.set(r),s.uniformMatrix3fv(this.addr,!1,Wl),xt(t,r)}}function Wm(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(vt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,r))return;Vl.set(r),s.uniformMatrix4fv(this.addr,!1,Vl),xt(t,r)}}function Xm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Ym(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;s.uniform2iv(this.addr,e),xt(t,e)}}function qm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;s.uniform3iv(this.addr,e),xt(t,e)}}function jm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;s.uniform4iv(this.addr,e),xt(t,e)}}function Km(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Zm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;s.uniform2uiv(this.addr,e),xt(t,e)}}function Jm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;s.uniform3uiv(this.addr,e),xt(t,e)}}function Qm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;s.uniform4uiv(this.addr,e),xt(t,e)}}function $m(s,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(s.uniform1i(this.addr,n),r[0]=n);let i;this.type===s.SAMPLER_2D_SHADOW?(zl.compareFunction=th,i=zl):i=Mh,t.setTexture2D(e||i,n)}function eg(s,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(s.uniform1i(this.addr,n),r[0]=n),t.setTexture3D(e||Eh,n)}function tg(s,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(s.uniform1i(this.addr,n),r[0]=n),t.setTextureCube(e||Th,n)}function ng(s,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(s.uniform1i(this.addr,n),r[0]=n),t.setTexture2DArray(e||Sh,n)}function ig(s){switch(s){case 5126:return Bm;case 35664:return km;case 35665:return zm;case 35666:return Gm;case 35674:return Hm;case 35675:return Vm;case 35676:return Wm;case 5124:case 35670:return Xm;case 35667:case 35671:return Ym;case 35668:case 35672:return qm;case 35669:case 35673:return jm;case 5125:return Km;case 36294:return Zm;case 36295:return Jm;case 36296:return Qm;case 35678:case 36198:case 36298:case 36306:case 35682:return $m;case 35679:case 36299:case 36307:return eg;case 35680:case 36300:case 36308:case 36293:return tg;case 36289:case 36303:case 36311:case 36292:return ng}}function rg(s,e){s.uniform1fv(this.addr,e)}function sg(s,e){const t=Zi(e,this.size,2);s.uniform2fv(this.addr,t)}function ag(s,e){const t=Zi(e,this.size,3);s.uniform3fv(this.addr,t)}function og(s,e){const t=Zi(e,this.size,4);s.uniform4fv(this.addr,t)}function lg(s,e){const t=Zi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function cg(s,e){const t=Zi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function hg(s,e){const t=Zi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function ug(s,e){s.uniform1iv(this.addr,e)}function fg(s,e){s.uniform2iv(this.addr,e)}function dg(s,e){s.uniform3iv(this.addr,e)}function pg(s,e){s.uniform4iv(this.addr,e)}function mg(s,e){s.uniform1uiv(this.addr,e)}function gg(s,e){s.uniform2uiv(this.addr,e)}function _g(s,e){s.uniform3uiv(this.addr,e)}function vg(s,e){s.uniform4uiv(this.addr,e)}function xg(s,e,t){const r=this.cache,n=e.length,i=As(t,n);vt(r,i)||(s.uniform1iv(this.addr,i),xt(r,i));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||Mh,i[a])}function yg(s,e,t){const r=this.cache,n=e.length,i=As(t,n);vt(r,i)||(s.uniform1iv(this.addr,i),xt(r,i));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Eh,i[a])}function Mg(s,e,t){const r=this.cache,n=e.length,i=As(t,n);vt(r,i)||(s.uniform1iv(this.addr,i),xt(r,i));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||Th,i[a])}function Sg(s,e,t){const r=this.cache,n=e.length,i=As(t,n);vt(r,i)||(s.uniform1iv(this.addr,i),xt(r,i));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Sh,i[a])}function Eg(s){switch(s){case 5126:return rg;case 35664:return sg;case 35665:return ag;case 35666:return og;case 35674:return lg;case 35675:return cg;case 35676:return hg;case 5124:case 35670:return ug;case 35667:case 35671:return fg;case 35668:case 35672:return dg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return _g;case 36296:return vg;case 35678:case 36198:case 36298:case 36306:case 35682:return xg;case 35679:case 36299:case 36307:return yg;case 35680:case 36300:case 36308:case 36293:return Mg;case 36289:case 36303:case 36311:case 36292:return Sg}}class Tg{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=ig(t.type)}}class bg{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Eg(t.type)}}class Ag{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const n=this.seq;for(let i=0,a=n.length;i!==a;++i){const o=n[i];o.setValue(e,t[o.id],r)}}}const ga=/(\w+)(\])?(\[|\.)?/g;function Yl(s,e){s.seq.push(e),s.map[e.id]=e}function wg(s,e,t){const r=s.name,n=r.length;for(ga.lastIndex=0;;){const i=ga.exec(r),a=ga.lastIndex;let o=i[1];const l=i[2]==="]",c=i[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Yl(t,c===void 0?new Tg(o,s,e):new bg(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Ag(o),Yl(t,u)),t=u}}}class gs{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<r;++n){const i=e.getActiveUniform(t,n),a=e.getUniformLocation(t,i.name);wg(i,a,this)}}setValue(e,t,r,n){const i=this.map[t];i!==void 0&&i.setValue(e,r,n)}setOptional(e,t,r){const n=t[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,t,r,n){for(let i=0,a=t.length;i!==a;++i){const o=t[i],l=r[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const r=[];for(let n=0,i=e.length;n!==i;++n){const a=e[n];a.id in t&&r.push(a)}return r}}function ql(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const Cg=37297;let Rg=0;function Pg(s,e){const t=s.split(`
`),r=[],n=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let a=n;a<i;a++){const o=a+1;r.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return r.join(`
`)}const jl=new je;function Dg(s){nt._getMatrix(jl,nt.workingColorSpace,s);const e=`mat3( ${jl.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(s)){case xs:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Kl(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),n=s.getShaderInfoLog(e).trim();if(r&&n==="")return"";const i=/ERROR: 0:(\d+)/.exec(n);if(i){const a=parseInt(i[1]);return t.toUpperCase()+`

`+n+`

`+Pg(s.getShaderSource(e),a)}else return n}function Ug(s,e){const t=Dg(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Lg(s,e){let t;switch(e){case Oc:t="Linear";break;case Bc:t="Reinhard";break;case kc:t="Cineon";break;case yo:t="ACESFilmic";break;case zc:t="AgX";break;case Gc:t="Neutral";break;case uu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const rs=new B;function Ig(){nt.getLuminanceCoefficients(rs);const s=rs.x.toFixed(4),e=rs.y.toFixed(4),t=rs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function Ng(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Og(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){const i=s.getActiveAttrib(e,n),a=i.name;let o=1;i.type===s.FLOAT_MAT2&&(o=2),i.type===s.FLOAT_MAT3&&(o=3),i.type===s.FLOAT_MAT4&&(o=4),t[a]={type:i.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function mr(s){return s!==""}function Zl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function po(s){return s.replace(Bg,zg)}const kg=new Map;function zg(s,e){let t=Ze[e];if(t===void 0){const r=kg.get(e);if(r!==void 0)t=Ze[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return po(t)}const Gg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ql(s){return s.replace(Gg,Hg)}function Hg(s,e,t,r){let n="";for(let i=parseInt(e);i<parseInt(t);i++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return n}function $l(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vg(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Fc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Wh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Tn&&(e="SHADOWMAP_TYPE_VSM"),e}function Wg(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Hi:case Vi:e="ENVMAP_TYPE_CUBE";break;case Es:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xg(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Vi:e="ENVMAP_MODE_REFRACTION";break}return e}function Yg(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Nc:e="ENVMAP_BLENDING_MULTIPLY";break;case cu:e="ENVMAP_BLENDING_MIX";break;case hu:e="ENVMAP_BLENDING_ADD";break}return e}function qg(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function jg(s,e,t,r){const n=s.getContext(),i=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Vg(t),c=Wg(t),h=Xg(t),u=Yg(t),f=qg(t),d=Fg(t),g=Ng(i),_=n.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mr).join(`
`),p.length>0&&(p+=`
`)):(m=[$l(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),p=[$l(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Vn?Lg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Ug("linearToOutputTexel",t.outputColorSpace),Ig(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),a=po(a),a=Zl(a,t),a=Jl(a,t),o=po(o),o=Zl(o,t),o=Jl(o,t),a=Ql(a),o=Ql(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=T+m+a,v=T+p+o,w=ql(n,n.VERTEX_SHADER,M),C=ql(n,n.FRAGMENT_SHADER,v);n.attachShader(_,w),n.attachShader(_,C),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function b(D){if(s.debug.checkShaderErrors){const P=n.getProgramInfoLog(_).trim(),U=n.getShaderInfoLog(w).trim(),N=n.getShaderInfoLog(C).trim();let X=!0,G=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,_,w,C);else{const $=Kl(n,w,"vertex"),Y=Kl(n,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+P+`
`+$+`
`+Y)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(U===""||N==="")&&(G=!1);G&&(D.diagnostics={runnable:X,programLog:P,vertexShader:{log:U,prefix:m},fragmentShader:{log:N,prefix:p}})}n.deleteShader(w),n.deleteShader(C),R=new gs(n,_),E=Og(n,_)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=n.getProgramParameter(_,Cg)),x},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Rg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=C,this}let Kg=0;class Zg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,n=this._getShaderStage(t),i=this._getShaderStage(r),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Jg(e),t.set(e,r)),r}}class Jg{constructor(e){this.id=Kg++,this.code=e,this.usedTimes=0}}function Qg(s,e,t,r,n,i,a){const o=new Co,l=new Zg,c=new Set,h=[],u=n.logarithmicDepthBuffer,f=n.vertexTextures;let d=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,x,D,P,U){const N=P.fog,X=U.geometry,G=E.isMeshStandardMaterial?P.environment:null,$=(E.isMeshStandardMaterial?t:e).get(E.envMap||G),Y=$&&$.mapping===Es?$.image.height:null,Z=g[E.type];E.precision!==null&&(d=n.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const K=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,I=K!==void 0?K.length:0;let V=0;X.morphAttributes.position!==void 0&&(V=1),X.morphAttributes.normal!==void 0&&(V=2),X.morphAttributes.color!==void 0&&(V=3);let ne,F,k,te;if(Z){const Ve=mn[Z];ne=Ve.vertexShader,F=Ve.fragmentShader}else ne=E.vertexShader,F=E.fragmentShader,l.update(E),k=l.getVertexShaderID(E),te=l.getFragmentShaderID(E);const W=s.getRenderTarget(),re=s.state.buffers.depth.getReversed(),me=U.isInstancedMesh===!0,ye=U.isBatchedMesh===!0,ve=!!E.map,oe=!!E.matcap,Oe=!!$,L=!!E.aoMap,Be=!!E.lightMap,be=!!E.bumpMap,Re=!!E.normalMap,ae=!!E.displacementMap,Ae=!!E.emissiveMap,de=!!E.metalnessMap,S=!!E.roughnessMap,y=E.anisotropy>0,O=E.clearcoat>0,J=E.dispersion>0,Q=E.iridescence>0,se=E.sheen>0,fe=E.transmission>0,ce=y&&!!E.anisotropyMap,ge=O&&!!E.clearcoatMap,Ue=O&&!!E.clearcoatNormalMap,he=O&&!!E.clearcoatRoughnessMap,Me=Q&&!!E.iridescenceMap,Ee=Q&&!!E.iridescenceThicknessMap,Te=se&&!!E.sheenColorMap,le=se&&!!E.sheenRoughnessMap,Le=!!E.specularMap,Fe=!!E.specularColorMap,Ke=!!E.specularIntensityMap,z=fe&&!!E.transmissionMap,ue=fe&&!!E.thicknessMap,ee=!!E.gradientMap,pe=!!E.alphaMap,xe=E.alphaTest>0,_e=!!E.alphaHash,Ne=!!E.extensions;let Ye=Vn;E.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Ye=s.toneMapping);const ke={shaderID:Z,shaderType:E.type,shaderName:E.name,vertexShader:ne,fragmentShader:F,defines:E.defines,customVertexShaderID:k,customFragmentShaderID:te,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:ye,batchingColor:ye&&U._colorsTexture!==null,instancing:me,instancingColor:me&&U.instanceColor!==null,instancingMorph:me&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:W===null?s.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Yi,alphaToCoverage:!!E.alphaToCoverage,map:ve,matcap:oe,envMap:Oe,envMapMode:Oe&&$.mapping,envMapCubeUVHeight:Y,aoMap:L,lightMap:Be,bumpMap:be,normalMap:Re,displacementMap:f&&ae,emissiveMap:Ae,normalMapObjectSpace:Re&&E.normalMapType===pu,normalMapTangentSpace:Re&&E.normalMapType===eh,metalnessMap:de,roughnessMap:S,anisotropy:y,anisotropyMap:ce,clearcoat:O,clearcoatMap:ge,clearcoatNormalMap:Ue,clearcoatRoughnessMap:he,dispersion:J,iridescence:Q,iridescenceMap:Me,iridescenceThicknessMap:Ee,sheen:se,sheenColorMap:Te,sheenRoughnessMap:le,specularMap:Le,specularColorMap:Fe,specularIntensityMap:Ke,transmission:fe,transmissionMap:z,thicknessMap:ue,gradientMap:ee,opaque:E.transparent===!1&&E.blending===Oi&&E.alphaToCoverage===!1,alphaMap:pe,alphaTest:xe,alphaHash:_e,combine:E.combine,mapUv:ve&&_(E.map.channel),aoMapUv:L&&_(E.aoMap.channel),lightMapUv:Be&&_(E.lightMap.channel),bumpMapUv:be&&_(E.bumpMap.channel),normalMapUv:Re&&_(E.normalMap.channel),displacementMapUv:ae&&_(E.displacementMap.channel),emissiveMapUv:Ae&&_(E.emissiveMap.channel),metalnessMapUv:de&&_(E.metalnessMap.channel),roughnessMapUv:S&&_(E.roughnessMap.channel),anisotropyMapUv:ce&&_(E.anisotropyMap.channel),clearcoatMapUv:ge&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:le&&_(E.sheenRoughnessMap.channel),specularMapUv:Le&&_(E.specularMap.channel),specularColorMapUv:Fe&&_(E.specularColorMap.channel),specularIntensityMapUv:Ke&&_(E.specularIntensityMap.channel),transmissionMapUv:z&&_(E.transmissionMap.channel),thicknessMapUv:ue&&_(E.thicknessMap.channel),alphaMapUv:pe&&_(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Re||y),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!X.attributes.uv&&(ve||pe),fog:!!N,useFog:E.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:re,skinning:U.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:V,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ye,decodeVideoTexture:ve&&E.map.isVideoTexture===!0&&nt.getTransfer(E.map.colorSpace)===rt,decodeVideoTextureEmissive:Ae&&E.emissiveMap.isVideoTexture===!0&&nt.getTransfer(E.emissiveMap.colorSpace)===rt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===gn,flipSided:E.side===Vt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ne&&E.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&E.extensions.multiDraw===!0||ye)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ke.vertexUv1s=c.has(1),ke.vertexUv2s=c.has(2),ke.vertexUv3s=c.has(3),c.clear(),ke}function p(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)x.push(D),x.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(T(x,E),M(x,E),x.push(s.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function T(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function M(E,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),E.push(o.mask)}function v(E){const x=g[E.type];let D;if(x){const P=mn[x];D=ji.clone(P.uniforms)}else D=E.uniforms;return D}function w(E,x){let D;for(let P=0,U=h.length;P<U;P++){const N=h[P];if(N.cacheKey===x){D=N,++D.usedTimes;break}}return D===void 0&&(D=new jg(s,x,E,i),h.push(D)),D}function C(E){if(--E.usedTimes===0){const x=h.indexOf(E);h[x]=h[h.length-1],h.pop(),E.destroy()}}function b(E){l.remove(E)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:w,releaseProgram:C,releaseShaderCache:b,programs:h,dispose:R}}function $g(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function r(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function i(){s=new WeakMap}return{has:e,get:t,remove:r,update:n,dispose:i}}function e_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ec(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function tc(){const s=[];let e=0;const t=[],r=[],n=[];function i(){e=0,t.length=0,r.length=0,n.length=0}function a(u,f,d,g,_,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function o(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?r.push(p):d.transparent===!0?n.push(p):t.push(p)}function l(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?r.unshift(p):d.transparent===!0?n.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||e_),r.length>1&&r.sort(f||ec),n.length>1&&n.sort(f||ec)}function h(){for(let u=e,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:r,transparent:n,init:i,push:o,unshift:l,finish:h,sort:c}}function t_(){let s=new WeakMap;function e(r,n){const i=s.get(r);let a;return i===void 0?(a=new tc,s.set(r,[a])):n>=i.length?(a=new tc,i.push(a)):a=i[n],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function n_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new qe};break;case"SpotLight":t={position:new B,direction:new B,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new B,halfWidth:new B,halfHeight:new B};break}return s[e.id]=t,t}}}function i_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let r_=0;function s_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function a_(s){const e=new n_,t=i_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new B);const n=new B,i=new ot,a=new ot;function o(c){let h=0,u=0,f=0;for(let E=0;E<9;E++)r.probe[E].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,T=0,M=0,v=0,w=0,C=0,b=0;c.sort(s_);for(let E=0,x=c.length;E<x;E++){const D=c[E],P=D.color,U=D.intensity,N=D.distance,X=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=P.r*U,u+=P.g*U,f+=P.b*U;else if(D.isLightProbe){for(let G=0;G<9;G++)r.probe[G].addScaledVector(D.sh.coefficients[G],U);b++}else if(D.isDirectionalLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const $=D.shadow,Y=t.get(D);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,r.directionalShadow[d]=Y,r.directionalShadowMap[d]=X,r.directionalShadowMatrix[d]=D.shadow.matrix,T++}r.directional[d]=G,d++}else if(D.isSpotLight){const G=e.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(P).multiplyScalar(U),G.distance=N,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,r.spot[_]=G;const $=D.shadow;if(D.map&&(r.spotLightMap[w]=D.map,w++,$.updateMatrices(D),D.castShadow&&C++),r.spotLightMatrix[_]=$.matrix,D.castShadow){const Y=t.get(D);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,r.spotShadow[_]=Y,r.spotShadowMap[_]=X,v++}_++}else if(D.isRectAreaLight){const G=e.get(D);G.color.copy(P).multiplyScalar(U),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),r.rectArea[m]=G,m++}else if(D.isPointLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){const $=D.shadow,Y=t.get(D);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,Y.shadowCameraNear=$.camera.near,Y.shadowCameraFar=$.camera.far,r.pointShadow[g]=Y,r.pointShadowMap[g]=X,r.pointShadowMatrix[g]=D.shadow.matrix,M++}r.point[g]=G,g++}else if(D.isHemisphereLight){const G=e.get(D);G.skyColor.copy(D.color).multiplyScalar(U),G.groundColor.copy(D.groundColor).multiplyScalar(U),r.hemi[p]=G,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=h,r.ambient[1]=u,r.ambient[2]=f;const R=r.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==T||R.numPointShadows!==M||R.numSpotShadows!==v||R.numSpotMaps!==w||R.numLightProbes!==b)&&(r.directional.length=d,r.spot.length=_,r.rectArea.length=m,r.point.length=g,r.hemi.length=p,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=v,r.spotShadowMap.length=v,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=v+w-C,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=C,r.numLightProbes=b,R.directionalLength=d,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=T,R.numPointShadows=M,R.numSpotShadows=v,R.numSpotMaps=w,R.numLightProbes=b,r.version=r_++)}function l(c,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const M=c[p];if(M.isDirectionalLight){const v=r.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(m),u++}else if(M.isSpotLight){const v=r.spot[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const v=r.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),a.identity(),i.copy(M.matrixWorld),i.premultiply(m),a.extractRotation(i),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const v=r.point[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const v=r.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:r}}function nc(s){const e=new a_(s),t=[],r=[];function n(h){c.camera=h,t.length=0,r.length=0}function i(h){t.push(h)}function a(h){r.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:i,pushShadow:a}}function o_(s){let e=new WeakMap;function t(n,i=0){const a=e.get(n);let o;return a===void 0?(o=new nc(s),e.set(n,[o])):i>=a.length?(o=new nc(s),a.push(o)):o=a[i],o}function r(){e=new WeakMap}return{get:t,dispose:r}}const l_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function h_(s,e,t){let r=new Po;const n=new Ce,i=new Ce,a=new it,o=new _h({depthPacking:$c}),l=new vh,c={},h=t.maxTextureSize,u={[Rn]:Vt,[Vt]:Rn,[gn]:gn},f=new Ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:l_,fragmentShader:c_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Zt;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Tt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fc;let p=this.type;this.render=function(C,b,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const E=s.getRenderTarget(),x=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),P=s.state;P.setBlending(wn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const U=p!==Tn&&this.type===Tn,N=p===Tn&&this.type!==Tn;for(let X=0,G=C.length;X<G;X++){const $=C[X],Y=$.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;n.copy(Y.mapSize);const Z=Y.getFrameExtents();if(n.multiply(Z),i.copy(Y.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(i.x=Math.floor(h/Z.x),n.x=i.x*Z.x,Y.mapSize.x=i.x),n.y>h&&(i.y=Math.floor(h/Z.y),n.y=i.y*Z.y,Y.mapSize.y=i.y)),Y.map===null||U===!0||N===!0){const I=this.type!==Tn?{minFilter:fn,magFilter:fn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new en(n.x,n.y,I),Y.map.texture.name=$.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const K=Y.getViewportCount();for(let I=0;I<K;I++){const V=Y.getViewport(I);a.set(i.x*V.x,i.y*V.y,i.x*V.z,i.y*V.w),P.viewport(a),Y.updateMatrices($,I),r=Y.getFrustum(),v(b,R,Y.camera,$,this.type)}Y.isPointLightShadow!==!0&&this.type===Tn&&T(Y,R),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(E,x,D)};function T(C,b){const R=e.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new en(n.x,n.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(b,null,R,f,_,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(b,null,R,d,_,null)}function M(C,b,R,E){let x=null;const D=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)x=D;else if(x=R.isPointLight===!0?l:o,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const P=x.uuid,U=b.uuid;let N=c[P];N===void 0&&(N={},c[P]=N);let X=N[U];X===void 0&&(X=x.clone(),N[U]=X,b.addEventListener("dispose",w)),x=X}if(x.visible=b.visible,x.wireframe=b.wireframe,E===Tn?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:u[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const P=s.properties.get(x);P.light=R}return x}function v(C,b,R,E,x){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===Tn)&&(!C.frustumCulled||r.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const U=e.update(C),N=C.material;if(Array.isArray(N)){const X=U.groups;for(let G=0,$=X.length;G<$;G++){const Y=X[G],Z=N[Y.materialIndex];if(Z&&Z.visible){const K=M(C,Z,E,x);C.onBeforeShadow(s,C,b,R,U,K,Y),s.renderBufferDirect(R,null,U,K,C,Y),C.onAfterShadow(s,C,b,R,U,K,Y)}}}else if(N.visible){const X=M(C,N,E,x);C.onBeforeShadow(s,C,b,R,U,X,null),s.renderBufferDirect(R,null,U,X,C,null),C.onAfterShadow(s,C,b,R,U,X,null)}}const P=C.children;for(let U=0,N=P.length;U<N;U++)v(P[U],b,R,E,x)}function w(C){C.target.removeEventListener("dispose",w);for(const R in c){const E=c[R],x=C.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}const u_={[Aa]:wa,[Ca]:Da,[Ra]:Ua,[Gi]:Pa,[wa]:Aa,[Da]:Ca,[Ua]:Ra,[Pa]:Gi};function f_(s,e){function t(){let z=!1;const ue=new it;let ee=null;const pe=new it(0,0,0,0);return{setMask:function(xe){ee!==xe&&!z&&(s.colorMask(xe,xe,xe,xe),ee=xe)},setLocked:function(xe){z=xe},setClear:function(xe,_e,Ne,Ye,ke){ke===!0&&(xe*=Ye,_e*=Ye,Ne*=Ye),ue.set(xe,_e,Ne,Ye),pe.equals(ue)===!1&&(s.clearColor(xe,_e,Ne,Ye),pe.copy(ue))},reset:function(){z=!1,ee=null,pe.set(-1,0,0,0)}}}function r(){let z=!1,ue=!1,ee=null,pe=null,xe=null;return{setReversed:function(_e){if(ue!==_e){const Ne=e.get("EXT_clip_control");ue?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT);const Ye=xe;xe=null,this.setClear(Ye)}ue=_e},getReversed:function(){return ue},setTest:function(_e){_e?W(s.DEPTH_TEST):re(s.DEPTH_TEST)},setMask:function(_e){ee!==_e&&!z&&(s.depthMask(_e),ee=_e)},setFunc:function(_e){if(ue&&(_e=u_[_e]),pe!==_e){switch(_e){case Aa:s.depthFunc(s.NEVER);break;case wa:s.depthFunc(s.ALWAYS);break;case Ca:s.depthFunc(s.LESS);break;case Gi:s.depthFunc(s.LEQUAL);break;case Ra:s.depthFunc(s.EQUAL);break;case Pa:s.depthFunc(s.GEQUAL);break;case Da:s.depthFunc(s.GREATER);break;case Ua:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=_e}},setLocked:function(_e){z=_e},setClear:function(_e){xe!==_e&&(ue&&(_e=1-_e),s.clearDepth(_e),xe=_e)},reset:function(){z=!1,ee=null,pe=null,xe=null,ue=!1}}}function n(){let z=!1,ue=null,ee=null,pe=null,xe=null,_e=null,Ne=null,Ye=null,ke=null;return{setTest:function(Ve){z||(Ve?W(s.STENCIL_TEST):re(s.STENCIL_TEST))},setMask:function(Ve){ue!==Ve&&!z&&(s.stencilMask(Ve),ue=Ve)},setFunc:function(Ve,at,lt){(ee!==Ve||pe!==at||xe!==lt)&&(s.stencilFunc(Ve,at,lt),ee=Ve,pe=at,xe=lt)},setOp:function(Ve,at,lt){(_e!==Ve||Ne!==at||Ye!==lt)&&(s.stencilOp(Ve,at,lt),_e=Ve,Ne=at,Ye=lt)},setLocked:function(Ve){z=Ve},setClear:function(Ve){ke!==Ve&&(s.clearStencil(Ve),ke=Ve)},reset:function(){z=!1,ue=null,ee=null,pe=null,xe=null,_e=null,Ne=null,Ye=null,ke=null}}}const i=new t,a=new r,o=new n,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,T=null,M=null,v=null,w=null,C=null,b=new qe(0,0,0),R=0,E=!1,x=null,D=null,P=null,U=null,N=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,$=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Y)[1]),G=$>=1):Y.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),G=$>=2);let Z=null,K={};const I=s.getParameter(s.SCISSOR_BOX),V=s.getParameter(s.VIEWPORT),ne=new it().fromArray(I),F=new it().fromArray(V);function k(z,ue,ee,pe){const xe=new Uint8Array(4),_e=s.createTexture();s.bindTexture(z,_e),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ne=0;Ne<ee;Ne++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(ue,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,xe):s.texImage2D(ue+Ne,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xe);return _e}const te={};te[s.TEXTURE_2D]=k(s.TEXTURE_2D,s.TEXTURE_2D,1),te[s.TEXTURE_CUBE_MAP]=k(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[s.TEXTURE_2D_ARRAY]=k(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),te[s.TEXTURE_3D]=k(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),a.setClear(1),o.setClear(0),W(s.DEPTH_TEST),a.setFunc(Gi),be(!1),Re(Jo),W(s.CULL_FACE),L(wn);function W(z){h[z]!==!0&&(s.enable(z),h[z]=!0)}function re(z){h[z]!==!1&&(s.disable(z),h[z]=!1)}function me(z,ue){return u[z]!==ue?(s.bindFramebuffer(z,ue),u[z]=ue,z===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ue),z===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ue),!0):!1}function ye(z,ue){let ee=d,pe=!1;if(z){ee=f.get(ue),ee===void 0&&(ee=[],f.set(ue,ee));const xe=z.textures;if(ee.length!==xe.length||ee[0]!==s.COLOR_ATTACHMENT0){for(let _e=0,Ne=xe.length;_e<Ne;_e++)ee[_e]=s.COLOR_ATTACHMENT0+_e;ee.length=xe.length,pe=!0}}else ee[0]!==s.BACK&&(ee[0]=s.BACK,pe=!0);pe&&s.drawBuffers(ee)}function ve(z){return g!==z?(s.useProgram(z),g=z,!0):!1}const oe={[Qn]:s.FUNC_ADD,[Yh]:s.FUNC_SUBTRACT,[qh]:s.FUNC_REVERSE_SUBTRACT};oe[jh]=s.MIN,oe[Kh]=s.MAX;const Oe={[Zh]:s.ZERO,[Jh]:s.ONE,[Qh]:s.SRC_COLOR,[Ta]:s.SRC_ALPHA,[ru]:s.SRC_ALPHA_SATURATE,[nu]:s.DST_COLOR,[eu]:s.DST_ALPHA,[$h]:s.ONE_MINUS_SRC_COLOR,[ba]:s.ONE_MINUS_SRC_ALPHA,[iu]:s.ONE_MINUS_DST_COLOR,[tu]:s.ONE_MINUS_DST_ALPHA,[su]:s.CONSTANT_COLOR,[au]:s.ONE_MINUS_CONSTANT_COLOR,[ou]:s.CONSTANT_ALPHA,[lu]:s.ONE_MINUS_CONSTANT_ALPHA};function L(z,ue,ee,pe,xe,_e,Ne,Ye,ke,Ve){if(z===wn){_===!0&&(re(s.BLEND),_=!1);return}if(_===!1&&(W(s.BLEND),_=!0),z!==Xh){if(z!==m||Ve!==E){if((p!==Qn||v!==Qn)&&(s.blendEquation(s.FUNC_ADD),p=Qn,v=Qn),Ve)switch(z){case Oi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zi:s.blendFunc(s.ONE,s.ONE);break;case Qo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $o:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Oi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zi:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Qo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $o:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}T=null,M=null,w=null,C=null,b.set(0,0,0),R=0,m=z,E=Ve}return}xe=xe||ue,_e=_e||ee,Ne=Ne||pe,(ue!==p||xe!==v)&&(s.blendEquationSeparate(oe[ue],oe[xe]),p=ue,v=xe),(ee!==T||pe!==M||_e!==w||Ne!==C)&&(s.blendFuncSeparate(Oe[ee],Oe[pe],Oe[_e],Oe[Ne]),T=ee,M=pe,w=_e,C=Ne),(Ye.equals(b)===!1||ke!==R)&&(s.blendColor(Ye.r,Ye.g,Ye.b,ke),b.copy(Ye),R=ke),m=z,E=!1}function Be(z,ue){z.side===gn?re(s.CULL_FACE):W(s.CULL_FACE);let ee=z.side===Vt;ue&&(ee=!ee),be(ee),z.blending===Oi&&z.transparent===!1?L(wn):L(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),i.setMask(z.colorWrite);const pe=z.stencilWrite;o.setTest(pe),pe&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ae(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?W(s.SAMPLE_ALPHA_TO_COVERAGE):re(s.SAMPLE_ALPHA_TO_COVERAGE)}function be(z){x!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),x=z)}function Re(z){z!==Hh?(W(s.CULL_FACE),z!==D&&(z===Jo?s.cullFace(s.BACK):z===Vh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):re(s.CULL_FACE),D=z}function ae(z){z!==P&&(G&&s.lineWidth(z),P=z)}function Ae(z,ue,ee){z?(W(s.POLYGON_OFFSET_FILL),(U!==ue||N!==ee)&&(s.polygonOffset(ue,ee),U=ue,N=ee)):re(s.POLYGON_OFFSET_FILL)}function de(z){z?W(s.SCISSOR_TEST):re(s.SCISSOR_TEST)}function S(z){z===void 0&&(z=s.TEXTURE0+X-1),Z!==z&&(s.activeTexture(z),Z=z)}function y(z,ue,ee){ee===void 0&&(Z===null?ee=s.TEXTURE0+X-1:ee=Z);let pe=K[ee];pe===void 0&&(pe={type:void 0,texture:void 0},K[ee]=pe),(pe.type!==z||pe.texture!==ue)&&(Z!==ee&&(s.activeTexture(ee),Z=ee),s.bindTexture(z,ue||te[z]),pe.type=z,pe.texture=ue)}function O(){const z=K[Z];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function J(){try{s.compressedTexImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function se(){try{s.texSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{s.texSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ge(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ue(){try{s.texStorage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function he(){try{s.texStorage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Me(){try{s.texImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ee(){try{s.texImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Te(z){ne.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),ne.copy(z))}function le(z){F.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),F.copy(z))}function Le(z,ue){let ee=c.get(ue);ee===void 0&&(ee=new WeakMap,c.set(ue,ee));let pe=ee.get(z);pe===void 0&&(pe=s.getUniformBlockIndex(ue,z.name),ee.set(z,pe))}function Fe(z,ue){const pe=c.get(ue).get(z);l.get(ue)!==pe&&(s.uniformBlockBinding(ue,pe,z.__bindingPointIndex),l.set(ue,pe))}function Ke(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},Z=null,K={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,T=null,M=null,v=null,w=null,C=null,b=new qe(0,0,0),R=0,E=!1,x=null,D=null,P=null,U=null,N=null,ne.set(0,0,s.canvas.width,s.canvas.height),F.set(0,0,s.canvas.width,s.canvas.height),i.reset(),a.reset(),o.reset()}return{buffers:{color:i,depth:a,stencil:o},enable:W,disable:re,bindFramebuffer:me,drawBuffers:ye,useProgram:ve,setBlending:L,setMaterial:Be,setFlipSided:be,setCullFace:Re,setLineWidth:ae,setPolygonOffset:Ae,setScissorTest:de,activeTexture:S,bindTexture:y,unbindTexture:O,compressedTexImage2D:J,compressedTexImage3D:Q,texImage2D:Me,texImage3D:Ee,updateUBOMapping:Le,uniformBlockBinding:Fe,texStorage2D:Ue,texStorage3D:he,texSubImage2D:se,texSubImage3D:fe,compressedTexSubImage2D:ce,compressedTexSubImage3D:ge,scissor:Te,viewport:le,reset:Ke}}function d_(s,e,t,r,n,i,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,y){return d?new OffscreenCanvas(S,y):Ms("canvas")}function _(S,y,O){let J=1;const Q=de(S);if((Q.width>O||Q.height>O)&&(J=O/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const se=Math.floor(J*Q.width),fe=Math.floor(J*Q.height);u===void 0&&(u=g(se,fe));const ce=y?g(se,fe):u;return ce.width=se,ce.height=fe,ce.getContext("2d").drawImage(S,0,0,se,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+se+"x"+fe+")."),ce}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),S;return S}function m(S){return S.generateMipmaps}function p(S){s.generateMipmap(S)}function T(S){return S.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?s.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(S,y,O,J,Q=!1){if(S!==null){if(s[S]!==void 0)return s[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let se=y;if(y===s.RED&&(O===s.FLOAT&&(se=s.R32F),O===s.HALF_FLOAT&&(se=s.R16F),O===s.UNSIGNED_BYTE&&(se=s.R8)),y===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(se=s.R8UI),O===s.UNSIGNED_SHORT&&(se=s.R16UI),O===s.UNSIGNED_INT&&(se=s.R32UI),O===s.BYTE&&(se=s.R8I),O===s.SHORT&&(se=s.R16I),O===s.INT&&(se=s.R32I)),y===s.RG&&(O===s.FLOAT&&(se=s.RG32F),O===s.HALF_FLOAT&&(se=s.RG16F),O===s.UNSIGNED_BYTE&&(se=s.RG8)),y===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(se=s.RG8UI),O===s.UNSIGNED_SHORT&&(se=s.RG16UI),O===s.UNSIGNED_INT&&(se=s.RG32UI),O===s.BYTE&&(se=s.RG8I),O===s.SHORT&&(se=s.RG16I),O===s.INT&&(se=s.RG32I)),y===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(se=s.RGB8UI),O===s.UNSIGNED_SHORT&&(se=s.RGB16UI),O===s.UNSIGNED_INT&&(se=s.RGB32UI),O===s.BYTE&&(se=s.RGB8I),O===s.SHORT&&(se=s.RGB16I),O===s.INT&&(se=s.RGB32I)),y===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(se=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(se=s.RGBA16UI),O===s.UNSIGNED_INT&&(se=s.RGBA32UI),O===s.BYTE&&(se=s.RGBA8I),O===s.SHORT&&(se=s.RGBA16I),O===s.INT&&(se=s.RGBA32I)),y===s.RGB&&O===s.UNSIGNED_INT_5_9_9_9_REV&&(se=s.RGB9_E5),y===s.RGBA){const fe=Q?xs:nt.getTransfer(J);O===s.FLOAT&&(se=s.RGBA32F),O===s.HALF_FLOAT&&(se=s.RGBA16F),O===s.UNSIGNED_BYTE&&(se=fe===rt?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(se=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(se=s.RGB5_A1)}return(se===s.R16F||se===s.R32F||se===s.RG16F||se===s.RG32F||se===s.RGBA16F||se===s.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function v(S,y){let O;return S?y===null||y===ii||y===Wi?O=s.DEPTH24_STENCIL8:y===bn?O=s.DEPTH32F_STENCIL8:y===Er&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ii||y===Wi?O=s.DEPTH_COMPONENT24:y===bn?O=s.DEPTH_COMPONENT32F:y===Er&&(O=s.DEPTH_COMPONENT16),O}function w(S,y){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==fn&&S.minFilter!==$t?Math.log2(Math.max(y.width,y.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?y.mipmaps.length:1}function C(S){const y=S.target;y.removeEventListener("dispose",C),R(y),y.isVideoTexture&&h.delete(y)}function b(S){const y=S.target;y.removeEventListener("dispose",b),x(y)}function R(S){const y=r.get(S);if(y.__webglInit===void 0)return;const O=S.source,J=f.get(O);if(J){const Q=J[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(S),Object.keys(J).length===0&&f.delete(O)}r.remove(S)}function E(S){const y=r.get(S);s.deleteTexture(y.__webglTexture);const O=S.source,J=f.get(O);delete J[y.__cacheKey],a.memory.textures--}function x(S){const y=r.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),r.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(y.__webglFramebuffer[J]))for(let Q=0;Q<y.__webglFramebuffer[J].length;Q++)s.deleteFramebuffer(y.__webglFramebuffer[J][Q]);else s.deleteFramebuffer(y.__webglFramebuffer[J]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[J])}else{if(Array.isArray(y.__webglFramebuffer))for(let J=0;J<y.__webglFramebuffer.length;J++)s.deleteFramebuffer(y.__webglFramebuffer[J]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let J=0;J<y.__webglColorRenderbuffer.length;J++)y.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[J]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=S.textures;for(let J=0,Q=O.length;J<Q;J++){const se=r.get(O[J]);se.__webglTexture&&(s.deleteTexture(se.__webglTexture),a.memory.textures--),r.remove(O[J])}r.remove(S)}let D=0;function P(){D=0}function U(){const S=D;return S>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+n.maxTextures),D+=1,S}function N(S){const y=[];return y.push(S.wrapS),y.push(S.wrapT),y.push(S.wrapR||0),y.push(S.magFilter),y.push(S.minFilter),y.push(S.anisotropy),y.push(S.internalFormat),y.push(S.format),y.push(S.type),y.push(S.generateMipmaps),y.push(S.premultiplyAlpha),y.push(S.flipY),y.push(S.unpackAlignment),y.push(S.colorSpace),y.join()}function X(S,y){const O=r.get(S);if(S.isVideoTexture&&ae(S),S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){const J=S.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{F(O,S,y);return}}t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+y)}function G(S,y){const O=r.get(S);if(S.version>0&&O.__version!==S.version){F(O,S,y);return}t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+y)}function $(S,y){const O=r.get(S);if(S.version>0&&O.__version!==S.version){F(O,S,y);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+y)}function Y(S,y){const O=r.get(S);if(S.version>0&&O.__version!==S.version){k(O,S,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+y)}const Z={[Fa]:s.REPEAT,[ei]:s.CLAMP_TO_EDGE,[Na]:s.MIRRORED_REPEAT},K={[fn]:s.NEAREST,[fu]:s.NEAREST_MIPMAP_NEAREST,[Ir]:s.NEAREST_MIPMAP_LINEAR,[$t]:s.LINEAR,[ks]:s.LINEAR_MIPMAP_NEAREST,[ti]:s.LINEAR_MIPMAP_LINEAR},I={[mu]:s.NEVER,[Mu]:s.ALWAYS,[gu]:s.LESS,[th]:s.LEQUAL,[_u]:s.EQUAL,[yu]:s.GEQUAL,[vu]:s.GREATER,[xu]:s.NOTEQUAL};function V(S,y){if(y.type===bn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===$t||y.magFilter===ks||y.magFilter===Ir||y.magFilter===ti||y.minFilter===$t||y.minFilter===ks||y.minFilter===Ir||y.minFilter===ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(S,s.TEXTURE_WRAP_S,Z[y.wrapS]),s.texParameteri(S,s.TEXTURE_WRAP_T,Z[y.wrapT]),(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)&&s.texParameteri(S,s.TEXTURE_WRAP_R,Z[y.wrapR]),s.texParameteri(S,s.TEXTURE_MAG_FILTER,K[y.magFilter]),s.texParameteri(S,s.TEXTURE_MIN_FILTER,K[y.minFilter]),y.compareFunction&&(s.texParameteri(S,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(S,s.TEXTURE_COMPARE_FUNC,I[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===fn||y.minFilter!==Ir&&y.minFilter!==ti||y.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(S,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,n.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function ne(S,y){let O=!1;S.__webglInit===void 0&&(S.__webglInit=!0,y.addEventListener("dispose",C));const J=y.source;let Q=f.get(J);Q===void 0&&(Q={},f.set(J,Q));const se=N(y);if(se!==S.__cacheKey){Q[se]===void 0&&(Q[se]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Q[se].usedTimes++;const fe=Q[S.__cacheKey];fe!==void 0&&(Q[S.__cacheKey].usedTimes--,fe.usedTimes===0&&E(y)),S.__cacheKey=se,S.__webglTexture=Q[se].texture}return O}function F(S,y,O){let J=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(J=s.TEXTURE_3D);const Q=ne(S,y),se=y.source;t.bindTexture(J,S.__webglTexture,s.TEXTURE0+O);const fe=r.get(se);if(se.version!==fe.__version||Q===!0){t.activeTexture(s.TEXTURE0+O);const ce=nt.getPrimaries(nt.workingColorSpace),ge=y.colorSpace===Hn?null:nt.getPrimaries(y.colorSpace),Ue=y.colorSpace===Hn||ce===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let he=_(y.image,!1,n.maxTextureSize);he=Ae(y,he);const Me=i.convert(y.format,y.colorSpace),Ee=i.convert(y.type);let Te=M(y.internalFormat,Me,Ee,y.colorSpace,y.isVideoTexture);V(J,y);let le;const Le=y.mipmaps,Fe=y.isVideoTexture!==!0,Ke=fe.__version===void 0||Q===!0,z=se.dataReady,ue=w(y,he);if(y.isDepthTexture)Te=v(y.format===Xi,y.type),Ke&&(Fe?t.texStorage2D(s.TEXTURE_2D,1,Te,he.width,he.height):t.texImage2D(s.TEXTURE_2D,0,Te,he.width,he.height,0,Me,Ee,null));else if(y.isDataTexture)if(Le.length>0){Fe&&Ke&&t.texStorage2D(s.TEXTURE_2D,ue,Te,Le[0].width,Le[0].height);for(let ee=0,pe=Le.length;ee<pe;ee++)le=Le[ee],Fe?z&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,le.width,le.height,Me,Ee,le.data):t.texImage2D(s.TEXTURE_2D,ee,Te,le.width,le.height,0,Me,Ee,le.data);y.generateMipmaps=!1}else Fe?(Ke&&t.texStorage2D(s.TEXTURE_2D,ue,Te,he.width,he.height),z&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,he.width,he.height,Me,Ee,he.data)):t.texImage2D(s.TEXTURE_2D,0,Te,he.width,he.height,0,Me,Ee,he.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Fe&&Ke&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,Te,Le[0].width,Le[0].height,he.depth);for(let ee=0,pe=Le.length;ee<pe;ee++)if(le=Le[ee],y.format!==un)if(Me!==null)if(Fe){if(z)if(y.layerUpdates.size>0){const xe=Ll(le.width,le.height,y.format,y.type);for(const _e of y.layerUpdates){const Ne=le.data.subarray(_e*xe/le.data.BYTES_PER_ELEMENT,(_e+1)*xe/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,_e,le.width,le.height,1,Me,Ne)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,le.width,le.height,he.depth,Me,le.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ee,Te,le.width,le.height,he.depth,0,le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?z&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,le.width,le.height,he.depth,Me,Ee,le.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ee,Te,le.width,le.height,he.depth,0,Me,Ee,le.data)}else{Fe&&Ke&&t.texStorage2D(s.TEXTURE_2D,ue,Te,Le[0].width,Le[0].height);for(let ee=0,pe=Le.length;ee<pe;ee++)le=Le[ee],y.format!==un?Me!==null?Fe?z&&t.compressedTexSubImage2D(s.TEXTURE_2D,ee,0,0,le.width,le.height,Me,le.data):t.compressedTexImage2D(s.TEXTURE_2D,ee,Te,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?z&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,le.width,le.height,Me,Ee,le.data):t.texImage2D(s.TEXTURE_2D,ee,Te,le.width,le.height,0,Me,Ee,le.data)}else if(y.isDataArrayTexture)if(Fe){if(Ke&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,Te,he.width,he.height,he.depth),z)if(y.layerUpdates.size>0){const ee=Ll(he.width,he.height,y.format,y.type);for(const pe of y.layerUpdates){const xe=he.data.subarray(pe*ee/he.data.BYTES_PER_ELEMENT,(pe+1)*ee/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,he.width,he.height,1,Me,Ee,xe)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Me,Ee,he.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Te,he.width,he.height,he.depth,0,Me,Ee,he.data);else if(y.isData3DTexture)Fe?(Ke&&t.texStorage3D(s.TEXTURE_3D,ue,Te,he.width,he.height,he.depth),z&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Me,Ee,he.data)):t.texImage3D(s.TEXTURE_3D,0,Te,he.width,he.height,he.depth,0,Me,Ee,he.data);else if(y.isFramebufferTexture){if(Ke)if(Fe)t.texStorage2D(s.TEXTURE_2D,ue,Te,he.width,he.height);else{let ee=he.width,pe=he.height;for(let xe=0;xe<ue;xe++)t.texImage2D(s.TEXTURE_2D,xe,Te,ee,pe,0,Me,Ee,null),ee>>=1,pe>>=1}}else if(Le.length>0){if(Fe&&Ke){const ee=de(Le[0]);t.texStorage2D(s.TEXTURE_2D,ue,Te,ee.width,ee.height)}for(let ee=0,pe=Le.length;ee<pe;ee++)le=Le[ee],Fe?z&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,Me,Ee,le):t.texImage2D(s.TEXTURE_2D,ee,Te,Me,Ee,le);y.generateMipmaps=!1}else if(Fe){if(Ke){const ee=de(he);t.texStorage2D(s.TEXTURE_2D,ue,Te,ee.width,ee.height)}z&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Me,Ee,he)}else t.texImage2D(s.TEXTURE_2D,0,Te,Me,Ee,he);m(y)&&p(J),fe.__version=se.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function k(S,y,O){if(y.image.length!==6)return;const J=ne(S,y),Q=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,S.__webglTexture,s.TEXTURE0+O);const se=r.get(Q);if(Q.version!==se.__version||J===!0){t.activeTexture(s.TEXTURE0+O);const fe=nt.getPrimaries(nt.workingColorSpace),ce=y.colorSpace===Hn?null:nt.getPrimaries(y.colorSpace),ge=y.colorSpace===Hn||fe===ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ue=y.isCompressedTexture||y.image[0].isCompressedTexture,he=y.image[0]&&y.image[0].isDataTexture,Me=[];for(let pe=0;pe<6;pe++)!Ue&&!he?Me[pe]=_(y.image[pe],!0,n.maxCubemapSize):Me[pe]=he?y.image[pe].image:y.image[pe],Me[pe]=Ae(y,Me[pe]);const Ee=Me[0],Te=i.convert(y.format,y.colorSpace),le=i.convert(y.type),Le=M(y.internalFormat,Te,le,y.colorSpace),Fe=y.isVideoTexture!==!0,Ke=se.__version===void 0||J===!0,z=Q.dataReady;let ue=w(y,Ee);V(s.TEXTURE_CUBE_MAP,y);let ee;if(Ue){Fe&&Ke&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,Le,Ee.width,Ee.height);for(let pe=0;pe<6;pe++){ee=Me[pe].mipmaps;for(let xe=0;xe<ee.length;xe++){const _e=ee[xe];y.format!==un?Te!==null?Fe?z&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe,0,0,_e.width,_e.height,Te,_e.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe,Le,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe,0,0,_e.width,_e.height,Te,le,_e.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe,Le,_e.width,_e.height,0,Te,le,_e.data)}}}else{if(ee=y.mipmaps,Fe&&Ke){ee.length>0&&ue++;const pe=de(Me[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,Le,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(he){Fe?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Me[pe].width,Me[pe].height,Te,le,Me[pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Le,Me[pe].width,Me[pe].height,0,Te,le,Me[pe].data);for(let xe=0;xe<ee.length;xe++){const Ne=ee[xe].image[pe].image;Fe?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe+1,0,0,Ne.width,Ne.height,Te,le,Ne.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe+1,Le,Ne.width,Ne.height,0,Te,le,Ne.data)}}else{Fe?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Te,le,Me[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Le,Te,le,Me[pe]);for(let xe=0;xe<ee.length;xe++){const _e=ee[xe];Fe?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe+1,0,0,Te,le,_e.image[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe+1,Le,Te,le,_e.image[pe])}}}m(y)&&p(s.TEXTURE_CUBE_MAP),se.__version=Q.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function te(S,y,O,J,Q,se){const fe=i.convert(O.format,O.colorSpace),ce=i.convert(O.type),ge=M(O.internalFormat,fe,ce,O.colorSpace),Ue=r.get(y),he=r.get(O);if(he.__renderTarget=y,!Ue.__hasExternalTextures){const Me=Math.max(1,y.width>>se),Ee=Math.max(1,y.height>>se);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,se,ge,Me,Ee,y.depth,0,fe,ce,null):t.texImage2D(Q,se,ge,Me,Ee,0,fe,ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,S),Re(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,Q,he.__webglTexture,0,be(y)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,Q,he.__webglTexture,se),t.bindFramebuffer(s.FRAMEBUFFER,null)}function W(S,y,O){if(s.bindRenderbuffer(s.RENDERBUFFER,S),y.depthBuffer){const J=y.depthTexture,Q=J&&J.isDepthTexture?J.type:null,se=v(y.stencilBuffer,Q),fe=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=be(y);Re(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ce,se,y.width,y.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,ce,se,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,se,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,S)}else{const J=y.textures;for(let Q=0;Q<J.length;Q++){const se=J[Q],fe=i.convert(se.format,se.colorSpace),ce=i.convert(se.type),ge=M(se.internalFormat,fe,ce,se.colorSpace),Ue=be(y);O&&Re(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue,ge,y.width,y.height):Re(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ue,ge,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ge,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function re(S,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,S),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=r.get(y.depthTexture);J.__renderTarget=y,(!J.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X(y.depthTexture,0);const Q=J.__webglTexture,se=be(y);if(y.depthTexture.format===Bi)Re(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(y.depthTexture.format===Xi)Re(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function me(S){const y=r.get(S),O=S.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==S.depthTexture){const J=S.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),J){const Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=J}if(S.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");re(y.__webglFramebuffer,S)}else if(O){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]===void 0)y.__webglDepthbuffer[J]=s.createRenderbuffer(),W(y.__webglDepthbuffer[J],S,!1);else{const Q=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=y.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,se),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,se)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),W(y.__webglDepthbuffer,S,!1);else{const J=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,Q)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ye(S,y,O){const J=r.get(S);y!==void 0&&te(J.__webglFramebuffer,S,S.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&me(S)}function ve(S){const y=S.texture,O=r.get(S),J=r.get(y);S.addEventListener("dispose",b);const Q=S.textures,se=S.isWebGLCubeRenderTarget===!0,fe=Q.length>1;if(fe||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=y.version,a.memory.textures++),se){O.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[ce]=[];for(let ge=0;ge<y.mipmaps.length;ge++)O.__webglFramebuffer[ce][ge]=s.createFramebuffer()}else O.__webglFramebuffer[ce]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let ce=0;ce<y.mipmaps.length;ce++)O.__webglFramebuffer[ce]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(fe)for(let ce=0,ge=Q.length;ce<ge;ce++){const Ue=r.get(Q[ce]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=s.createTexture(),a.memory.textures++)}if(S.samples>0&&Re(S)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ce=0;ce<Q.length;ce++){const ge=Q[ce];O.__webglColorRenderbuffer[ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[ce]);const Ue=i.convert(ge.format,ge.colorSpace),he=i.convert(ge.type),Me=M(ge.internalFormat,Ue,he,ge.colorSpace,S.isXRRenderTarget===!0),Ee=be(S);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,Me,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,O.__webglColorRenderbuffer[ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),S.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),W(O.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(se){t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),V(s.TEXTURE_CUBE_MAP,y);for(let ce=0;ce<6;ce++)if(y.mipmaps&&y.mipmaps.length>0)for(let ge=0;ge<y.mipmaps.length;ge++)te(O.__webglFramebuffer[ce][ge],S,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ge);else te(O.__webglFramebuffer[ce],S,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(y)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let ce=0,ge=Q.length;ce<ge;ce++){const Ue=Q[ce],he=r.get(Ue);t.bindTexture(s.TEXTURE_2D,he.__webglTexture),V(s.TEXTURE_2D,Ue),te(O.__webglFramebuffer,S,Ue,s.COLOR_ATTACHMENT0+ce,s.TEXTURE_2D,0),m(Ue)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let ce=s.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ce=S.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ce,J.__webglTexture),V(ce,y),y.mipmaps&&y.mipmaps.length>0)for(let ge=0;ge<y.mipmaps.length;ge++)te(O.__webglFramebuffer[ge],S,y,s.COLOR_ATTACHMENT0,ce,ge);else te(O.__webglFramebuffer,S,y,s.COLOR_ATTACHMENT0,ce,0);m(y)&&p(ce),t.unbindTexture()}S.depthBuffer&&me(S)}function oe(S){const y=S.textures;for(let O=0,J=y.length;O<J;O++){const Q=y[O];if(m(Q)){const se=T(S),fe=r.get(Q).__webglTexture;t.bindTexture(se,fe),p(se),t.unbindTexture()}}}const Oe=[],L=[];function Be(S){if(S.samples>0){if(Re(S)===!1){const y=S.textures,O=S.width,J=S.height;let Q=s.COLOR_BUFFER_BIT;const se=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=r.get(S),ce=y.length>1;if(ce)for(let ge=0;ge<y.length;ge++)t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ge=0;ge<y.length;ge++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,fe.__webglColorRenderbuffer[ge]);const Ue=r.get(y[ge]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ue,0)}s.blitFramebuffer(0,0,O,J,0,0,O,J,Q,s.NEAREST),l===!0&&(Oe.length=0,L.length=0,Oe.push(s.COLOR_ATTACHMENT0+ge),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Oe.push(se),L.push(se),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Oe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ce)for(let ge=0;ge<y.length;ge++){t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,fe.__webglColorRenderbuffer[ge]);const Ue=r.get(y[ge]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,Ue,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const y=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function be(S){return Math.min(n.maxSamples,S.samples)}function Re(S){const y=r.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ae(S){const y=a.render.frame;h.get(S)!==y&&(h.set(S,y),S.update())}function Ae(S,y){const O=S.colorSpace,J=S.format,Q=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||O!==Yi&&O!==Hn&&(nt.getTransfer(O)===rt?(J!==un||Q!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function de(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=P,this.setTexture2D=X,this.setTexture2DArray=G,this.setTexture3D=$,this.setTextureCube=Y,this.rebindTextures=ye,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Re}function p_(s,e){function t(r,n=Hn){let i;const a=nt.getTransfer(n);if(r===Pn)return s.UNSIGNED_BYTE;if(r===So)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Eo)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Xc)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Vc)return s.BYTE;if(r===Wc)return s.SHORT;if(r===Er)return s.UNSIGNED_SHORT;if(r===Mo)return s.INT;if(r===ii)return s.UNSIGNED_INT;if(r===bn)return s.FLOAT;if(r===_n)return s.HALF_FLOAT;if(r===Yc)return s.ALPHA;if(r===qc)return s.RGB;if(r===un)return s.RGBA;if(r===jc)return s.LUMINANCE;if(r===Kc)return s.LUMINANCE_ALPHA;if(r===Bi)return s.DEPTH_COMPONENT;if(r===Xi)return s.DEPTH_STENCIL;if(r===Zc)return s.RED;if(r===To)return s.RED_INTEGER;if(r===Jc)return s.RG;if(r===bo)return s.RG_INTEGER;if(r===Ao)return s.RGBA_INTEGER;if(r===us||r===fs||r===ds||r===ps)if(a===rt)if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(r===us)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===fs)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ds)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ps)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=e.get("WEBGL_compressed_texture_s3tc"),i!==null){if(r===us)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===fs)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ds)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ps)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Oa||r===Ba||r===ka||r===za)if(i=e.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(r===Oa)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ba)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ka)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===za)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ga||r===Ha||r===Va)if(i=e.get("WEBGL_compressed_texture_etc"),i!==null){if(r===Ga||r===Ha)return a===rt?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(r===Va)return a===rt?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Wa||r===Xa||r===Ya||r===qa||r===ja||r===Ka||r===Za||r===Ja||r===Qa||r===$a||r===eo||r===to||r===no||r===io)if(i=e.get("WEBGL_compressed_texture_astc"),i!==null){if(r===Wa)return a===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Xa)return a===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ya)return a===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===qa)return a===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ja)return a===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ka)return a===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Za)return a===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ja)return a===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Qa)return a===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===$a)return a===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===eo)return a===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===to)return a===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===no)return a===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===io)return a===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ms||r===ro||r===so)if(i=e.get("EXT_texture_compression_bptc"),i!==null){if(r===ms)return a===rt?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ro)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===so)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Qc||r===ao||r===oo||r===lo)if(i=e.get("EXT_texture_compression_rgtc"),i!==null){if(r===ms)return i.COMPRESSED_RED_RGTC1_EXT;if(r===ao)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===oo)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===lo)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Wi?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const m_={type:"move"};class _a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,i=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,r),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,r),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,r),n===null&&i!==null&&(n=i),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(m_)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new es;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const g_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,__=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class v_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const n=new Nt,i=e.properties.get(n);i.__webglTexture=t.texture,(t.depthNear!==r.depthNear||t.depthFar!==r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Ft({vertexShader:g_,fragmentShader:__,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new hi(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class x_ extends ai{constructor(e,t){super();const r=this;let n=null,i=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const _=new v_,m=t.getContextAttributes();let p=null,T=null;const M=[],v=[],w=new Ce;let C=null;const b=new Kt;b.viewport=new it;const R=new Kt;R.viewport=new it;const E=[b,R],x=new Of;let D=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let k=M[F];return k===void 0&&(k=new _a,M[F]=k),k.getTargetRaySpace()},this.getControllerGrip=function(F){let k=M[F];return k===void 0&&(k=new _a,M[F]=k),k.getGripSpace()},this.getHand=function(F){let k=M[F];return k===void 0&&(k=new _a,M[F]=k),k.getHandSpace()};function U(F){const k=v.indexOf(F.inputSource);if(k===-1)return;const te=M[k];te!==void 0&&(te.update(F.inputSource,F.frame,c||a),te.dispatchEvent({type:F.type,data:F.inputSource}))}function N(){n.removeEventListener("select",U),n.removeEventListener("selectstart",U),n.removeEventListener("selectend",U),n.removeEventListener("squeeze",U),n.removeEventListener("squeezestart",U),n.removeEventListener("squeezeend",U),n.removeEventListener("end",N),n.removeEventListener("inputsourceschange",X);for(let F=0;F<M.length;F++){const k=v[F];k!==null&&(v[F]=null,M[F].disconnect(k))}D=null,P=null,_.reset(),e.setRenderTarget(p),d=null,f=null,u=null,n=null,T=null,ne.stop(),r.isPresenting=!1,e.setPixelRatio(C),e.setSize(w.width,w.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){i=F,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(F){if(n=F,n!==null){if(p=e.getRenderTarget(),n.addEventListener("select",U),n.addEventListener("selectstart",U),n.addEventListener("selectend",U),n.addEventListener("squeeze",U),n.addEventListener("squeezestart",U),n.addEventListener("squeezeend",U),n.addEventListener("end",N),n.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(w),n.enabledFeatures!==void 0&&n.enabledFeatures.includes("layers")){let te=null,W=null,re=null;m.depth&&(re=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?Xi:Bi,W=m.stencil?Wi:ii);const me={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:i};u=new XRWebGLBinding(n,t),f=u.createProjectionLayer(me),n.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new en(f.textureWidth,f.textureHeight,{format:un,type:Pn,depthTexture:new dh(f.textureWidth,f.textureHeight,W,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:i};d=new XRWebGLLayer(n,t,te),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new en(d.framebufferWidth,d.framebufferHeight,{format:un,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),ne.setContext(n),ne.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(F){for(let k=0;k<F.removed.length;k++){const te=F.removed[k],W=v.indexOf(te);W>=0&&(v[W]=null,M[W].disconnect(te))}for(let k=0;k<F.added.length;k++){const te=F.added[k];let W=v.indexOf(te);if(W===-1){for(let me=0;me<M.length;me++)if(me>=v.length){v.push(te),W=me;break}else if(v[me]===null){v[me]=te,W=me;break}if(W===-1)break}const re=M[W];re&&re.connect(te)}}const G=new B,$=new B;function Y(F,k,te){G.setFromMatrixPosition(k.matrixWorld),$.setFromMatrixPosition(te.matrixWorld);const W=G.distanceTo($),re=k.projectionMatrix.elements,me=te.projectionMatrix.elements,ye=re[14]/(re[10]-1),ve=re[14]/(re[10]+1),oe=(re[9]+1)/re[5],Oe=(re[9]-1)/re[5],L=(re[8]-1)/re[0],Be=(me[8]+1)/me[0],be=ye*L,Re=ye*Be,ae=W/(-L+Be),Ae=ae*-L;if(k.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Ae),F.translateZ(ae),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),re[10]===-1)F.projectionMatrix.copy(k.projectionMatrix),F.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const de=ye+ae,S=ve+ae,y=be-Ae,O=Re+(W-Ae),J=oe*ve/S*de,Q=Oe*ve/S*de;F.projectionMatrix.makePerspective(y,O,J,Q,de,S),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function Z(F,k){k===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(k.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(n===null)return;let k=F.near,te=F.far;_.texture!==null&&(_.depthNear>0&&(k=_.depthNear),_.depthFar>0&&(te=_.depthFar)),x.near=R.near=b.near=k,x.far=R.far=b.far=te,(D!==x.near||P!==x.far)&&(n.updateRenderState({depthNear:x.near,depthFar:x.far}),D=x.near,P=x.far),b.layers.mask=F.layers.mask|2,R.layers.mask=F.layers.mask|4,x.layers.mask=b.layers.mask|R.layers.mask;const W=F.parent,re=x.cameras;Z(x,W);for(let me=0;me<re.length;me++)Z(re[me],W);re.length===2?Y(x,b,R):x.projectionMatrix.copy(b.projectionMatrix),K(F,x,W)};function K(F,k,te){te===null?F.matrix.copy(k.matrixWorld):(F.matrix.copy(te.matrixWorld),F.matrix.invert(),F.matrix.multiply(k.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(k.projectionMatrix),F.projectionMatrixInverse.copy(k.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Tr*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(F){l=F,f!==null&&(f.fixedFoveation=F),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=F)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let I=null;function V(F,k){if(h=k.getViewerPose(c||a),g=k,h!==null){const te=h.views;d!==null&&(e.setRenderTargetFramebuffer(T,d.framebuffer),e.setRenderTarget(T));let W=!1;te.length!==x.cameras.length&&(x.cameras.length=0,W=!0);for(let me=0;me<te.length;me++){const ye=te[me];let ve=null;if(d!==null)ve=d.getViewport(ye);else{const Oe=u.getViewSubImage(f,ye);ve=Oe.viewport,me===0&&(e.setRenderTargetTextures(T,Oe.colorTexture,f.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(T))}let oe=E[me];oe===void 0&&(oe=new Kt,oe.layers.enable(me),oe.viewport=new it,E[me]=oe),oe.matrix.fromArray(ye.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(ye.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(ve.x,ve.y,ve.width,ve.height),me===0&&(x.matrix.copy(oe.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),W===!0&&x.cameras.push(oe)}const re=n.enabledFeatures;if(re&&re.includes("depth-sensing")){const me=u.getDepthInformation(te[0]);me&&me.isValid&&me.texture&&_.init(e,me,n.renderState)}}for(let te=0;te<M.length;te++){const W=v[te],re=M[te];W!==null&&re!==void 0&&re.update(W,k,c||a)}I&&I(F,k),k.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:k}),g=null}const ne=new yh;ne.setAnimationLoop(V),this.setAnimationLoop=function(F){I=F},this.dispose=function(){}}}const Kn=new vn,y_=new ot;function M_(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function r(m,p){p.color.getRGB(m.fogColor.value,ch(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,T,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(m,p):p.isMeshToonMaterial?(i(m,p),u(m,p)):p.isMeshPhongMaterial?(i(m,p),h(m,p)):p.isMeshStandardMaterial?(i(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(i(m,p),g(m,p)):p.isMeshDepthMaterial?i(m,p):p.isMeshDistanceMaterial?(i(m,p),_(m,p)):p.isMeshNormalMaterial?i(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,T,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Vt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Vt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),M=T.envMap,v=T.envMapRotation;M&&(m.envMap.value=M,Kn.copy(v),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),m.envMapRotation.value.setFromMatrix4(y_.makeRotationFromEuler(Kn)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function S_(s,e,t,r){let n={},i={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,M){const v=M.program;r.uniformBlockBinding(T,v)}function c(T,M){let v=n[T.id];v===void 0&&(g(T),v=h(T),n[T.id]=v,T.addEventListener("dispose",m));const w=M.program;r.updateUBOMapping(T,w);const C=e.render.frame;i[T.id]!==C&&(f(T),i[T.id]=C)}function h(T){const M=u();T.__bindingPointIndex=M;const v=s.createBuffer(),w=T.__size,C=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,w,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,v),v}function u(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const M=n[T.id],v=T.uniforms,w=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let C=0,b=v.length;C<b;C++){const R=Array.isArray(v[C])?v[C]:[v[C]];for(let E=0,x=R.length;E<x;E++){const D=R[E];if(d(D,C,E,w)===!0){const P=D.__offset,U=Array.isArray(D.value)?D.value:[D.value];let N=0;for(let X=0;X<U.length;X++){const G=U[X],$=_(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,P+N,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):(G.toArray(D.__data,N),N+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,P,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(T,M,v,w){const C=T.value,b=M+"_"+v;if(w[b]===void 0)return typeof C=="number"||typeof C=="boolean"?w[b]=C:w[b]=C.clone(),!0;{const R=w[b];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return w[b]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function g(T){const M=T.uniforms;let v=0;const w=16;for(let b=0,R=M.length;b<R;b++){const E=Array.isArray(M[b])?M[b]:[M[b]];for(let x=0,D=E.length;x<D;x++){const P=E[x],U=Array.isArray(P.value)?P.value:[P.value];for(let N=0,X=U.length;N<X;N++){const G=U[N],$=_(G),Y=v%w,Z=Y%$.boundary,K=Y+Z;v+=Z,K!==0&&w-K<$.storage&&(v+=w-K),P.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=v,v+=$.storage}}}const C=v%w;return C>0&&(v+=w-C),T.__size=v,T.__cache={},this}function _(T){const M={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),M}function m(T){const M=T.target;M.removeEventListener("dispose",m);const v=a.indexOf(M.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(n[M.id]),delete n[M.id],delete i[M.id]}function p(){for(const T in n)s.deleteBuffer(n[T]);a=[],n={},i={}}return{bind:l,update:c,dispose:p}}class E_{constructor(e={}){const{canvas:t=ku(),context:r=null,depth:n=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=r.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const T=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jt,this.toneMapping=Vn,this.toneMappingExposure=1;const v=this;let w=!1,C=0,b=0,R=null,E=-1,x=null;const D=new it,P=new it;let U=null;const N=new qe(0);let X=0,G=t.width,$=t.height,Y=1,Z=null,K=null;const I=new it(0,0,G,$),V=new it(0,0,G,$);let ne=!1;const F=new Po;let k=!1,te=!1;this.transmissionResolutionScale=1;const W=new ot,re=new ot,me=new B,ye=new it,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function Oe(){return R===null?Y:1}let L=r;function Be(A,q){return t.getContext(A,q)}try{const A={alpha:!0,depth:n,stencil:i,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xo}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",_e,!1),L===null){const q="webgl2";if(L=Be(q,A),L===null)throw Be(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let be,Re,ae,Ae,de,S,y,O,J,Q,se,fe,ce,ge,Ue,he,Me,Ee,Te,le,Le,Fe,Ke,z;function ue(){be=new Um(L),be.init(),Fe=new p_(L,be),Re=new Am(L,be,e,Fe),ae=new f_(L,be),Re.reverseDepthBuffer&&f&&ae.buffers.depth.setReversed(!0),Ae=new Fm(L),de=new $g,S=new d_(L,be,ae,de,Re,Fe,Ae),y=new Cm(v),O=new Dm(v),J=new Hf(L),Ke=new Tm(L,J),Q=new Lm(L,J,Ae,Ke),se=new Om(L,Q,J,Ae),Te=new Nm(L,Re,S),he=new wm(de),fe=new Qg(v,y,O,be,Re,Ke,he),ce=new M_(v,de),ge=new t_,Ue=new o_(be),Ee=new Em(v,y,O,ae,se,d,l),Me=new h_(v,se,Re),z=new S_(L,Ae,Re,ae),le=new bm(L,be,Ae),Le=new Im(L,be,Ae),Ae.programs=fe.programs,v.capabilities=Re,v.extensions=be,v.properties=de,v.renderLists=ge,v.shadowMap=Me,v.state=ae,v.info=Ae}ue();const ee=new x_(v,L);this.xr=ee,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=be.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=be.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(G,$,!1))},this.getSize=function(A){return A.set(G,$)},this.setSize=function(A,q,ie=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=A,$=q,t.width=Math.floor(A*Y),t.height=Math.floor(q*Y),ie===!0&&(t.style.width=A+"px",t.style.height=q+"px"),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(G*Y,$*Y).floor()},this.setDrawingBufferSize=function(A,q,ie){G=A,$=q,Y=ie,t.width=Math.floor(A*ie),t.height=Math.floor(q*ie),this.setViewport(0,0,A,q)},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(I)},this.setViewport=function(A,q,ie,H){A.isVector4?I.set(A.x,A.y,A.z,A.w):I.set(A,q,ie,H),ae.viewport(D.copy(I).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(V)},this.setScissor=function(A,q,ie,H){A.isVector4?V.set(A.x,A.y,A.z,A.w):V.set(A,q,ie,H),ae.scissor(P.copy(V).multiplyScalar(Y).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(A){ae.setScissorTest(ne=A)},this.setOpaqueSort=function(A){Z=A},this.setTransparentSort=function(A){K=A},this.getClearColor=function(A){return A.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(A=!0,q=!0,ie=!0){let H=0;if(A){let j=!1;if(R!==null){const Se=R.texture.format;j=Se===Ao||Se===bo||Se===To}if(j){const Se=R.texture.type,we=Se===Pn||Se===ii||Se===Er||Se===Wi||Se===So||Se===Eo,De=Ee.getClearColor(),Ie=Ee.getClearAlpha(),We=De.r,Xe=De.g,Ge=De.b;we?(g[0]=We,g[1]=Xe,g[2]=Ge,g[3]=Ie,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=We,_[1]=Xe,_[2]=Ge,_[3]=Ie,L.clearBufferiv(L.COLOR,0,_))}else H|=L.COLOR_BUFFER_BIT}q&&(H|=L.DEPTH_BUFFER_BIT),ie&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Ee.dispose(),ge.dispose(),Ue.dispose(),de.dispose(),y.dispose(),O.dispose(),se.dispose(),Ke.dispose(),z.dispose(),fe.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",ft),ee.removeEventListener("sessionend",Bt),Ct.stop()};function pe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const A=Ae.autoReset,q=Me.enabled,ie=Me.autoUpdate,H=Me.needsUpdate,j=Me.type;ue(),Ae.autoReset=A,Me.enabled=q,Me.autoUpdate=ie,Me.needsUpdate=H,Me.type=j}function _e(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ne(A){const q=A.target;q.removeEventListener("dispose",Ne),Ye(q)}function Ye(A){ke(A),de.remove(A)}function ke(A){const q=de.get(A).programs;q!==void 0&&(q.forEach(function(ie){fe.releaseProgram(ie)}),A.isShaderMaterial&&fe.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,ie,H,j,Se){q===null&&(q=ve);const we=j.isMesh&&j.matrixWorld.determinant()<0,De=Cs(A,q,ie,H,j);ae.setMaterial(H,we);let Ie=ie.index,We=1;if(H.wireframe===!0){if(Ie=Q.getWireframeAttribute(ie),Ie===void 0)return;We=2}const Xe=ie.drawRange,Ge=ie.attributes.position;let $e=Xe.start*We,et=(Xe.start+Xe.count)*We;Se!==null&&($e=Math.max($e,Se.start*We),et=Math.min(et,(Se.start+Se.count)*We)),Ie!==null?($e=Math.max($e,0),et=Math.min(et,Ie.count)):Ge!=null&&($e=Math.max($e,0),et=Math.min(et,Ge.count));const ut=et-$e;if(ut<0||ut===1/0)return;Ke.setup(j,H,De,ie,Ie);let ct,tt=le;if(Ie!==null&&(ct=J.get(Ie),tt=Le,tt.setIndex(ct)),j.isMesh)H.wireframe===!0?(ae.setLineWidth(H.wireframeLinewidth*Oe()),tt.setMode(L.LINES)):tt.setMode(L.TRIANGLES);else if(j.isLine){let He=H.linewidth;He===void 0&&(He=1),ae.setLineWidth(He*Oe()),j.isLineSegments?tt.setMode(L.LINES):j.isLineLoop?tt.setMode(L.LINE_LOOP):tt.setMode(L.LINE_STRIP)}else j.isPoints?tt.setMode(L.POINTS):j.isSprite&&tt.setMode(L.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)tt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))tt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const He=j._multiDrawStarts,dt=j._multiDrawCounts,Qe=j._multiDrawCount,Ut=Ie?J.get(Ie).bytesPerElement:1,pn=de.get(H).currentProgram.getUniforms();for(let bt=0;bt<Qe;bt++)pn.setValue(L,"_gl_DrawID",bt),tt.render(He[bt]/Ut,dt[bt])}else if(j.isInstancedMesh)tt.renderInstances($e,ut,j.count);else if(ie.isInstancedBufferGeometry){const He=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,dt=Math.min(ie.instanceCount,He);tt.renderInstances($e,ut,dt)}else tt.render($e,ut)};function Ve(A,q,ie){A.transparent===!0&&A.side===gn&&A.forceSinglePass===!1?(A.side=Vt,A.needsUpdate=!0,Jt(A,q,ie),A.side=Rn,A.needsUpdate=!0,Jt(A,q,ie),A.side=gn):Jt(A,q,ie)}this.compile=function(A,q,ie=null){ie===null&&(ie=A),p=Ue.get(ie),p.init(q),M.push(p),ie.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),A!==ie&&A.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),p.setupLights();const H=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Se=j.material;if(Se)if(Array.isArray(Se))for(let we=0;we<Se.length;we++){const De=Se[we];Ve(De,ie,j),H.add(De)}else Ve(Se,ie,j),H.add(Se)}),M.pop(),p=null,H},this.compileAsync=function(A,q,ie=null){const H=this.compile(A,q,ie);return new Promise(j=>{function Se(){if(H.forEach(function(we){de.get(we).currentProgram.isReady()&&H.delete(we)}),H.size===0){j(A);return}setTimeout(Se,10)}be.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let at=null;function lt(A){at&&at(A)}function ft(){Ct.stop()}function Bt(){Ct.start()}const Ct=new yh;Ct.setAnimationLoop(lt),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(A){at=A,ee.setAnimationLoop(A),A===null?Ct.stop():Ct.start()},ee.addEventListener("sessionstart",ft),ee.addEventListener("sessionend",Bt),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(q),q=ee.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,q,R),p=Ue.get(A,M.length),p.init(q),M.push(p),re.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),F.setFromProjectionMatrix(re),te=this.localClippingEnabled,k=he.init(this.clippingPlanes,te),m=ge.get(A,T.length),m.init(),T.push(m),ee.enabled===!0&&ee.isPresenting===!0){const Se=v.xr.getDepthSensingMesh();Se!==null&&Wt(Se,q,-1/0,v.sortObjects)}Wt(A,q,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(Z,K),oe=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,oe&&Ee.addToRenderList(m,A),this.info.render.frame++,k===!0&&he.beginShadows();const ie=p.state.shadowsArray;Me.render(ie,A,q),k===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,j=m.transmissive;if(p.setupLights(),q.isArrayCamera){const Se=q.cameras;if(j.length>0)for(let we=0,De=Se.length;we<De;we++){const Ie=Se[we];dn(H,j,A,Ie)}oe&&Ee.render(A);for(let we=0,De=Se.length;we<De;we++){const Ie=Se[we];nn(m,A,Ie,Ie.viewport)}}else j.length>0&&dn(H,j,A,q),oe&&Ee.render(A),nn(m,A,q);R!==null&&b===0&&(S.updateMultisampleRenderTarget(R),S.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(v,A,q),Ke.resetDefaultState(),E=-1,x=null,M.pop(),M.length>0?(p=M[M.length-1],k===!0&&he.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Wt(A,q,ie,H){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||F.intersectsSprite(A)){H&&ye.setFromMatrixPosition(A.matrixWorld).applyMatrix4(re);const we=se.update(A),De=A.material;De.visible&&m.push(A,we,De,ie,ye.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||F.intersectsObject(A))){const we=se.update(A),De=A.material;if(H&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ye.copy(A.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),ye.copy(we.boundingSphere.center)),ye.applyMatrix4(A.matrixWorld).applyMatrix4(re)),Array.isArray(De)){const Ie=we.groups;for(let We=0,Xe=Ie.length;We<Xe;We++){const Ge=Ie[We],$e=De[Ge.materialIndex];$e&&$e.visible&&m.push(A,we,$e,ie,ye.z,Ge)}}else De.visible&&m.push(A,we,De,ie,ye.z,null)}}const Se=A.children;for(let we=0,De=Se.length;we<De;we++)Wt(Se[we],q,ie,H)}function nn(A,q,ie,H){const j=A.opaque,Se=A.transmissive,we=A.transparent;p.setupLightsView(ie),k===!0&&he.setGlobalState(v.clippingPlanes,ie),H&&ae.viewport(D.copy(H)),j.length>0&&kt(j,q,ie),Se.length>0&&kt(Se,q,ie),we.length>0&&kt(we,q,ie),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function dn(A,q,ie,H){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new en(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float")?_n:Pn,minFilter:ti,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const Se=p.state.transmissionRenderTarget[H.id],we=H.viewport||D;Se.setSize(we.z*v.transmissionResolutionScale,we.w*v.transmissionResolutionScale);const De=v.getRenderTarget();v.setRenderTarget(Se),v.getClearColor(N),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),oe&&Ee.render(ie);const Ie=v.toneMapping;v.toneMapping=Vn;const We=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),k===!0&&he.setGlobalState(v.clippingPlanes,H),kt(A,ie,H),S.updateMultisampleRenderTarget(Se),S.updateRenderTargetMipmap(Se),be.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Ge=0,$e=q.length;Ge<$e;Ge++){const et=q[Ge],ut=et.object,ct=et.geometry,tt=et.material,He=et.group;if(tt.side===gn&&ut.layers.test(H.layers)){const dt=tt.side;tt.side=Vt,tt.needsUpdate=!0,yt(ut,ie,H,ct,tt,He),tt.side=dt,tt.needsUpdate=!0,Xe=!0}}Xe===!0&&(S.updateMultisampleRenderTarget(Se),S.updateRenderTargetMipmap(Se))}v.setRenderTarget(De),v.setClearColor(N,X),We!==void 0&&(H.viewport=We),v.toneMapping=Ie}function kt(A,q,ie){const H=q.isScene===!0?q.overrideMaterial:null;for(let j=0,Se=A.length;j<Se;j++){const we=A[j],De=we.object,Ie=we.geometry,We=H===null?we.material:H,Xe=we.group;De.layers.test(ie.layers)&&yt(De,q,ie,Ie,We,Xe)}}function yt(A,q,ie,H,j,Se){A.onBeforeRender(v,q,ie,H,j,Se),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(v,q,ie,H,A,Se),j.transparent===!0&&j.side===gn&&j.forceSinglePass===!1?(j.side=Vt,j.needsUpdate=!0,v.renderBufferDirect(ie,q,H,j,A,Se),j.side=Rn,j.needsUpdate=!0,v.renderBufferDirect(ie,q,H,j,A,Se),j.side=gn):v.renderBufferDirect(ie,q,H,j,A,Se),A.onAfterRender(v,q,ie,H,j,Se)}function Jt(A,q,ie){q.isScene!==!0&&(q=ve);const H=de.get(A),j=p.state.lights,Se=p.state.shadowsArray,we=j.state.version,De=fe.getParameters(A,j.state,Se,q,ie),Ie=fe.getProgramCacheKey(De);let We=H.programs;H.environment=A.isMeshStandardMaterial?q.environment:null,H.fog=q.fog,H.envMap=(A.isMeshStandardMaterial?O:y).get(A.envMap||H.environment),H.envMapRotation=H.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,We===void 0&&(A.addEventListener("dispose",Ne),We=new Map,H.programs=We);let Xe=We.get(Ie);if(Xe!==void 0){if(H.currentProgram===Xe&&H.lightsStateVersion===we)return ui(A,De),Xe}else De.uniforms=fe.getUniforms(A),A.onBeforeCompile(De,v),Xe=fe.acquireProgram(De,Ie),We.set(Ie,Xe),H.uniforms=De.uniforms;const Ge=H.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ge.clippingPlanes=he.uniform),ui(A,De),H.needsLights=fi(A),H.lightsStateVersion=we,H.needsLights&&(Ge.ambientLightColor.value=j.state.ambient,Ge.lightProbe.value=j.state.probe,Ge.directionalLights.value=j.state.directional,Ge.directionalLightShadows.value=j.state.directionalShadow,Ge.spotLights.value=j.state.spot,Ge.spotLightShadows.value=j.state.spotShadow,Ge.rectAreaLights.value=j.state.rectArea,Ge.ltc_1.value=j.state.rectAreaLTC1,Ge.ltc_2.value=j.state.rectAreaLTC2,Ge.pointLights.value=j.state.point,Ge.pointLightShadows.value=j.state.pointShadow,Ge.hemisphereLights.value=j.state.hemi,Ge.directionalShadowMap.value=j.state.directionalShadowMap,Ge.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ge.spotShadowMap.value=j.state.spotShadowMap,Ge.spotLightMatrix.value=j.state.spotLightMatrix,Ge.spotLightMap.value=j.state.spotLightMap,Ge.pointShadowMap.value=j.state.pointShadowMap,Ge.pointShadowMatrix.value=j.state.pointShadowMatrix),H.currentProgram=Xe,H.uniformsList=null,Xe}function $i(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=gs.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function ui(A,q){const ie=de.get(A);ie.outputColorSpace=q.outputColorSpace,ie.batching=q.batching,ie.batchingColor=q.batchingColor,ie.instancing=q.instancing,ie.instancingColor=q.instancingColor,ie.instancingMorph=q.instancingMorph,ie.skinning=q.skinning,ie.morphTargets=q.morphTargets,ie.morphNormals=q.morphNormals,ie.morphColors=q.morphColors,ie.morphTargetsCount=q.morphTargetsCount,ie.numClippingPlanes=q.numClippingPlanes,ie.numIntersection=q.numClipIntersection,ie.vertexAlphas=q.vertexAlphas,ie.vertexTangents=q.vertexTangents,ie.toneMapping=q.toneMapping}function Cs(A,q,ie,H,j){q.isScene!==!0&&(q=ve),S.resetTextureUnits();const Se=q.fog,we=H.isMeshStandardMaterial?q.environment:null,De=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Yi,Ie=(H.isMeshStandardMaterial?O:y).get(H.envMap||we),We=H.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,Xe=!!ie.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ge=!!ie.morphAttributes.position,$e=!!ie.morphAttributes.normal,et=!!ie.morphAttributes.color;let ut=Vn;H.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ut=v.toneMapping);const ct=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,tt=ct!==void 0?ct.length:0,He=de.get(H),dt=p.state.lights;if(k===!0&&(te===!0||A!==x)){const St=A===x&&H.id===E;he.setState(H,A,St)}let Qe=!1;H.version===He.__version?(He.needsLights&&He.lightsStateVersion!==dt.state.version||He.outputColorSpace!==De||j.isBatchedMesh&&He.batching===!1||!j.isBatchedMesh&&He.batching===!0||j.isBatchedMesh&&He.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&He.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&He.instancing===!1||!j.isInstancedMesh&&He.instancing===!0||j.isSkinnedMesh&&He.skinning===!1||!j.isSkinnedMesh&&He.skinning===!0||j.isInstancedMesh&&He.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&He.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&He.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&He.instancingMorph===!1&&j.morphTexture!==null||He.envMap!==Ie||H.fog===!0&&He.fog!==Se||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==he.numPlanes||He.numIntersection!==he.numIntersection)||He.vertexAlphas!==We||He.vertexTangents!==Xe||He.morphTargets!==Ge||He.morphNormals!==$e||He.morphColors!==et||He.toneMapping!==ut||He.morphTargetsCount!==tt)&&(Qe=!0):(Qe=!0,He.__version=H.version);let Ut=He.currentProgram;Qe===!0&&(Ut=Jt(H,q,j));let pn=!1,bt=!1,Rt=!1;const ht=Ut.getUniforms(),At=He.uniforms;if(ae.useProgram(Ut.program)&&(pn=!0,bt=!0,Rt=!0),H.id!==E&&(E=H.id,bt=!0),pn||x!==A){ae.buffers.depth.getReversed()?(W.copy(A.projectionMatrix),Gu(W),Hu(W),ht.setValue(L,"projectionMatrix",W)):ht.setValue(L,"projectionMatrix",A.projectionMatrix),ht.setValue(L,"viewMatrix",A.matrixWorldInverse);const mt=ht.map.cameraPosition;mt!==void 0&&mt.setValue(L,me.setFromMatrixPosition(A.matrixWorld)),Re.logarithmicDepthBuffer&&ht.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ht.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),x!==A&&(x=A,bt=!0,Rt=!0)}if(j.isSkinnedMesh){ht.setOptional(L,j,"bindMatrix"),ht.setOptional(L,j,"bindMatrixInverse");const St=j.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),ht.setValue(L,"boneTexture",St.boneTexture,S))}j.isBatchedMesh&&(ht.setOptional(L,j,"batchingTexture"),ht.setValue(L,"batchingTexture",j._matricesTexture,S),ht.setOptional(L,j,"batchingIdTexture"),ht.setValue(L,"batchingIdTexture",j._indirectTexture,S),ht.setOptional(L,j,"batchingColorTexture"),j._colorsTexture!==null&&ht.setValue(L,"batchingColorTexture",j._colorsTexture,S));const Mt=ie.morphAttributes;if((Mt.position!==void 0||Mt.normal!==void 0||Mt.color!==void 0)&&Te.update(j,ie,Ut),(bt||He.receiveShadow!==j.receiveShadow)&&(He.receiveShadow=j.receiveShadow,ht.setValue(L,"receiveShadow",j.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(At.envMap.value=Ie,At.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&q.environment!==null&&(At.envMapIntensity.value=q.environmentIntensity),bt&&(ht.setValue(L,"toneMappingExposure",v.toneMappingExposure),He.needsLights&&Cr(At,Rt),Se&&H.fog===!0&&ce.refreshFogUniforms(At,Se),ce.refreshMaterialUniforms(At,H,Y,$,p.state.transmissionRenderTarget[A.id]),gs.upload(L,$i(He),At,S)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(gs.upload(L,$i(He),At,S),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ht.setValue(L,"center",j.center),ht.setValue(L,"modelViewMatrix",j.modelViewMatrix),ht.setValue(L,"normalMatrix",j.normalMatrix),ht.setValue(L,"modelMatrix",j.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const St=H.uniformsGroups;for(let mt=0,Un=St.length;mt<Un;mt++){const rn=St[mt];z.update(rn,Ut),z.bind(rn,Ut)}}return Ut}function Cr(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function fi(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,q,ie){de.get(A.texture).__webglTexture=q,de.get(A.depthTexture).__webglTexture=ie;const H=de.get(A);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=ie===void 0,H.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,q){const ie=de.get(A);ie.__webglFramebuffer=q,ie.__useDefaultFramebuffer=q===void 0};const er=L.createFramebuffer();this.setRenderTarget=function(A,q=0,ie=0){R=A,C=q,b=ie;let H=!0,j=null,Se=!1,we=!1;if(A){const Ie=de.get(A);if(Ie.__useDefaultFramebuffer!==void 0)ae.bindFramebuffer(L.FRAMEBUFFER,null),H=!1;else if(Ie.__webglFramebuffer===void 0)S.setupRenderTarget(A);else if(Ie.__hasExternalTextures)S.rebindTextures(A,de.get(A.texture).__webglTexture,de.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ge=A.depthTexture;if(Ie.__boundDepthTexture!==Ge){if(Ge!==null&&de.has(Ge)&&(A.width!==Ge.image.width||A.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(A)}}const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(we=!0);const Xe=de.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xe[q])?j=Xe[q][ie]:j=Xe[q],Se=!0):A.samples>0&&S.useMultisampledRTT(A)===!1?j=de.get(A).__webglMultisampledFramebuffer:Array.isArray(Xe)?j=Xe[ie]:j=Xe,D.copy(A.viewport),P.copy(A.scissor),U=A.scissorTest}else D.copy(I).multiplyScalar(Y).floor(),P.copy(V).multiplyScalar(Y).floor(),U=ne;if(ie!==0&&(j=er),ae.bindFramebuffer(L.FRAMEBUFFER,j)&&H&&ae.drawBuffers(A,j),ae.viewport(D),ae.scissor(P),ae.setScissorTest(U),Se){const Ie=de.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ie.__webglTexture,ie)}else if(we){const Ie=de.get(A.texture),We=q;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ie.__webglTexture,ie,We)}else if(A!==null&&ie!==0){const Ie=de.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ie.__webglTexture,ie)}E=-1},this.readRenderTargetPixels=function(A,q,ie,H,j,Se,we){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=de.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(De=De[we]),De){ae.bindFramebuffer(L.FRAMEBUFFER,De);try{const Ie=A.texture,We=Ie.format,Xe=Ie.type;if(!Re.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-H&&ie>=0&&ie<=A.height-j&&L.readPixels(q,ie,H,j,Fe.convert(We),Fe.convert(Xe),Se)}finally{const Ie=R!==null?de.get(R).__webglFramebuffer:null;ae.bindFramebuffer(L.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(A,q,ie,H,j,Se,we){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=de.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(De=De[we]),De){const Ie=A.texture,We=Ie.format,Xe=Ie.type;if(!Re.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=A.width-H&&ie>=0&&ie<=A.height-j){ae.bindFramebuffer(L.FRAMEBUFFER,De);const Ge=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ge),L.bufferData(L.PIXEL_PACK_BUFFER,Se.byteLength,L.STREAM_READ),L.readPixels(q,ie,H,j,Fe.convert(We),Fe.convert(Xe),0);const $e=R!==null?de.get(R).__webglFramebuffer:null;ae.bindFramebuffer(L.FRAMEBUFFER,$e);const et=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await zu(L,et,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ge),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Se),L.deleteBuffer(Ge),L.deleteSync(et),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,q=null,ie=0){A.isTexture!==!0&&(Li("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,A=arguments[1]);const H=Math.pow(2,-ie),j=Math.floor(A.image.width*H),Se=Math.floor(A.image.height*H),we=q!==null?q.x:0,De=q!==null?q.y:0;S.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,ie,0,0,we,De,j,Se),ae.unbindTexture()};const Rs=L.createFramebuffer(),Rr=L.createFramebuffer();this.copyTextureToTexture=function(A,q,ie=null,H=null,j=0,Se=null){A.isTexture!==!0&&(Li("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,A=arguments[1],q=arguments[2],Se=arguments[3]||0,ie=null),Se===null&&(j!==0?(Li("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=j,j=0):Se=0);let we,De,Ie,We,Xe,Ge,$e,et,ut;const ct=A.isCompressedTexture?A.mipmaps[Se]:A.image;if(ie!==null)we=ie.max.x-ie.min.x,De=ie.max.y-ie.min.y,Ie=ie.isBox3?ie.max.z-ie.min.z:1,We=ie.min.x,Xe=ie.min.y,Ge=ie.isBox3?ie.min.z:0;else{const Mt=Math.pow(2,-j);we=Math.floor(ct.width*Mt),De=Math.floor(ct.height*Mt),A.isDataArrayTexture?Ie=ct.depth:A.isData3DTexture?Ie=Math.floor(ct.depth*Mt):Ie=1,We=0,Xe=0,Ge=0}H!==null?($e=H.x,et=H.y,ut=H.z):($e=0,et=0,ut=0);const tt=Fe.convert(q.format),He=Fe.convert(q.type);let dt;q.isData3DTexture?(S.setTexture3D(q,0),dt=L.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(S.setTexture2DArray(q,0),dt=L.TEXTURE_2D_ARRAY):(S.setTexture2D(q,0),dt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,q.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,q.unpackAlignment);const Qe=L.getParameter(L.UNPACK_ROW_LENGTH),Ut=L.getParameter(L.UNPACK_IMAGE_HEIGHT),pn=L.getParameter(L.UNPACK_SKIP_PIXELS),bt=L.getParameter(L.UNPACK_SKIP_ROWS),Rt=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ct.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ct.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,We),L.pixelStorei(L.UNPACK_SKIP_ROWS,Xe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ge);const ht=A.isDataArrayTexture||A.isData3DTexture,At=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const Mt=de.get(A),St=de.get(q),mt=de.get(Mt.__renderTarget),Un=de.get(St.__renderTarget);ae.bindFramebuffer(L.READ_FRAMEBUFFER,mt.__webglFramebuffer),ae.bindFramebuffer(L.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let rn=0;rn<Ie;rn++)ht&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,de.get(A).__webglTexture,j,Ge+rn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,de.get(q).__webglTexture,Se,ut+rn)),L.blitFramebuffer(We,Xe,we,De,$e,et,we,De,L.DEPTH_BUFFER_BIT,L.NEAREST);ae.bindFramebuffer(L.READ_FRAMEBUFFER,null),ae.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||de.has(A)){const Mt=de.get(A),St=de.get(q);ae.bindFramebuffer(L.READ_FRAMEBUFFER,Rs),ae.bindFramebuffer(L.DRAW_FRAMEBUFFER,Rr);for(let mt=0;mt<Ie;mt++)ht?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Mt.__webglTexture,j,Ge+mt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Mt.__webglTexture,j),At?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,St.__webglTexture,Se,ut+mt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,St.__webglTexture,Se),j!==0?L.blitFramebuffer(We,Xe,we,De,$e,et,we,De,L.COLOR_BUFFER_BIT,L.NEAREST):At?L.copyTexSubImage3D(dt,Se,$e,et,ut+mt,We,Xe,we,De):L.copyTexSubImage2D(dt,Se,$e,et,We,Xe,we,De);ae.bindFramebuffer(L.READ_FRAMEBUFFER,null),ae.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else At?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(dt,Se,$e,et,ut,we,De,Ie,tt,He,ct.data):q.isCompressedArrayTexture?L.compressedTexSubImage3D(dt,Se,$e,et,ut,we,De,Ie,tt,ct.data):L.texSubImage3D(dt,Se,$e,et,ut,we,De,Ie,tt,He,ct):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Se,$e,et,we,De,tt,He,ct.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Se,$e,et,ct.width,ct.height,tt,ct.data):L.texSubImage2D(L.TEXTURE_2D,Se,$e,et,we,De,tt,He,ct);L.pixelStorei(L.UNPACK_ROW_LENGTH,Qe),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ut),L.pixelStorei(L.UNPACK_SKIP_PIXELS,pn),L.pixelStorei(L.UNPACK_SKIP_ROWS,bt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Rt),Se===0&&q.generateMipmaps&&L.generateMipmap(dt),ae.unbindTexture()},this.copyTextureToTexture3D=function(A,q,ie=null,H=null,j=0){return A.isTexture!==!0&&(Li("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,H=arguments[1]||null,A=arguments[2],q=arguments[3],j=arguments[4]||0),Li('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,q,ie,H,j)},this.initRenderTarget=function(A){de.get(A).__webglFramebuffer===void 0&&S.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?S.setTextureCube(A,0):A.isData3DTexture?S.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?S.setTexture2DArray(A,0):S.setTexture2D(A,0),ae.unbindTexture()},this.resetState=function(){C=0,b=0,R=null,ae.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}function T_(s){let e=0;for(let t=0;t<s.length;t+=1)e=e*31+s.charCodeAt(t)>>>0;return e/4294967295}function ic(s,e,t){return e+T_(s)*(t-e)}function b_(s){return s.map(e=>({id:e.id,label:e.label,type:e.type,position:{x:e.x,y:ic(`${e.id}:y`,-15,15),z:ic(`${e.id}:z`,-8,8)},velocity:{x:0,y:0,z:0}}))}function A_(s){const e=new Map;for(const t of s)for(let r=0;r<t.nodeSequence.length-1;r+=1){const n=t.nodeSequence[r],i=t.nodeSequence[r+1],a=`${n}->${i}`,o=e.get(a);o?o.traineeIds.includes(t.id)||o.traineeIds.push(t.id):e.set(a,{source:n,target:i,traineeIds:[t.id]})}return Array.from(e.values())}function w_(){const s=[{id:"birth-berlin",label:"Berlin",type:"birthplace",x:-35},{id:"birth-hamburg",label:"Hamburg",type:"birthplace",x:-35},{id:"birth-muenchen",label:"Muenchen",type:"birthplace",x:-35},{id:"birth-koeln",label:"Koeln",type:"birthplace",x:-35},{id:"birth-essen",label:"Essen",type:"birthplace",x:-35},{id:"birth-stuttgart",label:"Stuttgart",type:"birthplace",x:-35},{id:"birth-dresden",label:"Dresden",type:"birthplace",x:-35},{id:"uni-tu-muenchen",label:"TU Muenchen",type:"university",x:-21},{id:"uni-rwth-aachen",label:"RWTH Aachen",type:"university",x:-21},{id:"uni-tu-berlin",label:"TU Berlin",type:"university",x:-21},{id:"uni-uni-koeln",label:"Universitaet zu Koeln",type:"university",x:-21},{id:"uni-hpi-potsdam",label:"HPI Potsdam",type:"university",x:-21},{id:"field-informatik",label:"Informatik",type:"field",x:-7},{id:"field-wirtschaftsinformatik",label:"Wirtschaftsinformatik",type:"field",x:-7},{id:"field-data-science",label:"Data Science",type:"field",x:-7},{id:"field-elektrotechnik",label:"Elektrotechnik",type:"field",x:-7},{id:"degree-bsc",label:"B.Sc.",type:"degree",x:7},{id:"degree-msc",label:"M.Sc.",type:"degree",x:7},{id:"firstjob-working-student",label:"Working Student IT",type:"firstJob",x:14},{id:"firstjob-junior-consultant",label:"Junior IT Consultant",type:"firstJob",x:14},{id:"firstjob-junior-developer",label:"Junior Software Developer",type:"firstJob",x:14},{id:"eon-trainee",label:"E.ON Trainee",type:"company",x:17},{id:"placement-it-strategy",label:"E.ON IT Strategy",type:"placement",x:20.1},{id:"placement-digital-transformation",label:"E.ON Digital Transformation",type:"placement",x:21},{id:"placement-data-analytics",label:"E.ON Data Analytics",type:"placement",x:21.9},{id:"placement-cloud-infrastructure",label:"E.ON Cloud Infrastructure",type:"placement",x:20.7},{id:"placement-cybersecurity",label:"E.ON Cybersecurity",type:"placement",x:21.4},{id:"placement-sap-solutions",label:"E.ON SAP Solutions",type:"placement",x:21.7},{id:"placement-eon-digital",label:"E.ON Digital",type:"placement",x:21.2},{id:"role-cloud-engineer",label:"Cloud Engineer",type:"currentRole",x:35},{id:"role-data-engineer",label:"Data Engineer",type:"currentRole",x:35},{id:"role-product-owner",label:"Digital Product Owner",type:"currentRole",x:35},{id:"role-cybersecurity-analyst",label:"Cybersecurity Analyst",type:"currentRole",x:35},{id:"role-sap-consultant",label:"SAP Consultant",type:"currentRole",x:35},{id:"role-software-engineer",label:"Software Engineer",type:"currentRole",x:35},{id:"role-it-strategy-manager",label:"IT Strategy Manager",type:"currentRole",x:35},{id:"role-ai-engineer",label:"AI Engineer",type:"currentRole",x:35}],e=[{id:"trainee-anna",name:"Anna Becker",color:"#00E5FF",nodeSequence:["birth-berlin","uni-tu-berlin","field-informatik","degree-msc","firstjob-junior-developer","eon-trainee","placement-cloud-infrastructure","placement-eon-digital","role-cloud-engineer"]},{id:"trainee-lukas",name:"Lukas Schneider",color:"#FF2BD6",nodeSequence:["birth-muenchen","uni-tu-muenchen","field-data-science","degree-msc","firstjob-working-student","eon-trainee","placement-data-analytics","placement-eon-digital","role-data-engineer"]},{id:"trainee-sophie",name:"Sophie Klein",color:"#7CFF3A",nodeSequence:["birth-hamburg","uni-rwth-aachen","field-wirtschaftsinformatik","degree-msc","firstjob-junior-consultant","eon-trainee","placement-digital-transformation","placement-it-strategy","role-product-owner"]},{id:"trainee-emre",name:"Emre Yilmaz",color:"#FF8A00",nodeSequence:["birth-essen","uni-rwth-aachen","field-elektrotechnik","degree-bsc","firstjob-junior-developer","eon-trainee","placement-cybersecurity","role-cybersecurity-analyst"]},{id:"trainee-maria",name:"Maria Hoffmann",color:"#FF4F9A",nodeSequence:["birth-koeln","uni-uni-koeln","field-wirtschaftsinformatik","degree-bsc","firstjob-working-student","eon-trainee","placement-sap-solutions","placement-eon-digital","role-sap-consultant"]},{id:"trainee-leon",name:"Leon Wagner",color:"#2A7BFF",nodeSequence:["birth-stuttgart","uni-tu-muenchen","field-informatik","degree-bsc","firstjob-junior-developer","eon-trainee","placement-cloud-infrastructure","role-software-engineer"]},{id:"trainee-felix",name:"Felix Neumann",color:"#FFD447",nodeSequence:["birth-dresden","uni-tu-muenchen","field-data-science","degree-msc","firstjob-junior-consultant","eon-trainee","placement-it-strategy","role-it-strategy-manager"]},{id:"trainee-jana",name:"Jana Richter",color:"#A44BFF",nodeSequence:["birth-berlin","uni-hpi-potsdam","field-informatik","degree-msc","firstjob-working-student","eon-trainee","placement-digital-transformation","placement-data-analytics","role-ai-engineer"]}];return{nodes:b_(s),edges:A_(e),trainees:e}}function C_(s){const e=new Ml;e.background=new qe("#050508"),e.fog=new Ro("#080812",.002);const t=s.parentElement,r=(t==null?void 0:t.clientWidth)??s.clientWidth??window.innerWidth,n=(t==null?void 0:t.clientHeight)??s.clientHeight??window.innerHeight,i=new Kt(60,r/n,.1,500);i.position.set(0,8,170),i.lookAt(0,0,0);const a=new E_({canvas:s,antialias:!0,alpha:!1,powerPreference:"high-performance"});a.toneMapping=yo,a.toneMappingExposure=1.1,a.outputColorSpace=jt,a.setPixelRatio(Math.min(Math.max(window.devicePixelRatio,2),4)),a.setSize(r,n,!1);const o=new Ml;o.add(new Uf("#0b1430","#09070f",.35));const l=new dr("#214b99",.45,30);l.position.set(3,2,4),o.add(l);const c=new dr("#4b2d88",.4,30);c.position.set(-4,-2,3),o.add(c);const h=new dr("#2f8da0",.35,30);h.position.set(2,-3,-4),o.add(h);const u=new fo(a),f=u.fromScene(o,.04);e.environment=f.texture,u.dispose();const d=new Ff("#2a3754",.25);e.add(d);const g=new Cl("#e0f0ff",.7);g.position.set(-15,20,15),e.add(g);const _=new Cl("#4466aa",.3);_.position.set(10,-5,-20),e.add(_);const m=new dr("#0066ff",.3,100);m.position.set(20,10,-10),e.add(m);const p=new dr("#6600ff",.25,100);return p.position.set(-20,-10,20),e.add(p),window.addEventListener("resize",()=>{const T=(t==null?void 0:t.clientWidth)??s.clientWidth??window.innerWidth,M=(t==null?void 0:t.clientHeight)??s.clientHeight??window.innerHeight;i.aspect=T/M,i.updateProjectionMatrix(),a.setSize(T,M,!1),a.setPixelRatio(Math.min(Math.max(window.devicePixelRatio,2),4))}),{scene:e,camera:i,renderer:a}}const bh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ji{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const R_=new Uo(-1,1,1,-1,0,1);class P_ extends Zt{constructor(){super(),this.setAttribute("position",new Ot([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ot([0,2,0,0,2,0],2))}}const D_=new P_;class Io{constructor(e){this._mesh=new Tt(D_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,R_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class U_ extends Ji{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ft?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ji.clone(e.uniforms),this.material=new Ft({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Io(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class rc extends Ji{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){const n=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),i.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(n.EQUAL,1,4294967295),i.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),i.buffers.stencil.setLocked(!0)}}class L_ extends Ji{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class I_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const r=e.getSize(new Ce);this._width=r.width,this._height=r.height,t=new en(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:_n}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new U_(bh),this.copyPass.material.blending=wn,this.clock=new Bf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let r=!1;for(let n=0,i=this.passes.length;n<i;n++){const a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),a.needsSwap){if(r){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}rc!==void 0&&(a instanceof rc?r=!0:a instanceof L_&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const r=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(r,n),this.renderTarget2.setSize(r,n);for(let i=0;i<this.passes.length;i++)this.passes[i].setSize(r,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class F_ extends Ji{constructor(e,t,r=null,n=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=n,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new qe}render(e,t,r){const n=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=n}}const N_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new qe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class si extends Ji{constructor(e,t,r,n){super(),this.strength=t!==void 0?t:1,this.radius=r,this.threshold=n,this.resolution=e!==void 0?new Ce(e.x,e.y):new Ce(256,256),this.clearColor=new qe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new en(i,a,{type:_n}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new en(i,a,{type:_n});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new en(i,a,{type:_n});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),i=Math.round(i/2),a=Math.round(a/2)}const o=N_;this.highPassUniforms=ji.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ft({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ce(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=bh;this.copyUniforms=ji.clone(h.uniforms),this.blendMaterial=new Ft({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:zi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new qe,this.oldClearAlpha=1,this.basic=new ci,this.fsQuad=new Io(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let r=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(r,n);for(let i=0;i<this.nMips;i++)this.renderTargetsHorizontal[i].setSize(r,n),this.renderTargetsVertical[i].setSize(r,n),this.separableBlurMaterials[i].uniforms.invSize.value=new Ce(1/r,1/n),r=Math.round(r/2),n=Math.round(n/2)}render(e,t,r,n,i){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),i&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=si.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=si.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,i&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(r),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeparableBlurMaterial(e){const t=[];for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(e*e))/e);return new Ft({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ce(.5,.5)},direction:{value:new Ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Ft({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}si.BlurDirectionX=new Ce(1,0);si.BlurDirectionY=new Ce(0,1);const O_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class B_ extends Ji{constructor(){super();const e=O_;this.uniforms=ji.clone(e.uniforms),this.material=new Pf({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Io(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},nt.getTransfer(this._outputColorSpace)===rt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Oc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Bc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===kc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===yo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===zc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Gc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function k_(s,e,t){const r=s.getDrawingBufferSize(new Ce),n=new en(r.x,r.y,{samples:4,type:_n}),i=new I_(s,n);i.setPixelRatio(s.getPixelRatio());const a=new F_(e,t);i.addPass(a);const o=new si(new Ce(window.innerWidth,window.innerHeight),.8,.3,.2);o.strength=.8,o.radius=.3,o.threshold=.2,i.addPass(o);const l=new B_;return i.addPass(l),{composer:i,bloomPass:o}}function z_(s,e,t,r){s.setPixelRatio(r),s.setSize(e,t);for(const n of s.passes)n instanceof si&&n.setSize(e,t)}const G_={repulsionStrength:900,linkDistance:32,linkStrength:.03,layerStrength:.1,centerStrength:.005,damping:.92,maxVelocity:3,wobbleAmplitude:.015,wobbleFrequency:.5,stabilizationThreshold:.01},sc=7,ac=sc*sc,ss=Math.PI*2,H_=60;class V_{constructor(e,t){ze(this,"data");ze(this,"config");ze(this,"nodeIndexById");ze(this,"targetXByNodeIndex");ze(this,"wobbleByNodeIndex");ze(this,"elapsedTime",0);ze(this,"hasStabilized",!1);this.data=e,this.config={...G_,...t},this.nodeIndexById=new Map,this.data.nodes.forEach((r,n)=>{this.nodeIndexById.set(r.id,n)}),this.targetXByNodeIndex=this.buildLayerTargets(this.data.nodes),this.wobbleByNodeIndex=this.buildWobbleStates(this.data.nodes.length)}tick(e){if(!Number.isFinite(e)||e<=0)return;const t=this.data.nodes;if(t.length===0)return;const r=Math.max(0,e*H_);this.elapsedTime+=e;const n=new Array(t.length).fill(0),i=new Array(t.length).fill(0),a=new Array(t.length).fill(0);this.applyRepulsion(t,n,i,a),this.applyLinkAttraction(t,n,i,a),this.applyLayerConstraint(t,n),this.applyCentering(t,n,i,a),this.hasStabilized&&this.applyWobble(t,r);const o=Math.pow(this.config.damping,r);let l=0;for(let h=0;h<t.length;h+=1){const u=t[h];if(u.fixed){u.velocity.x=0,u.velocity.y=0,u.velocity.z=0;continue}u.velocity.x+=n[h]*r,u.velocity.y+=i[h]*r,u.velocity.z+=a[h]*r,u.velocity.x*=o,u.velocity.y*=o,u.velocity.z*=o,u.velocity.x=this.clampAxisVelocity(u.velocity.x),u.velocity.y=this.clampAxisVelocity(u.velocity.y),u.velocity.z=this.clampAxisVelocity(u.velocity.z),u.position.x+=u.velocity.x*r,u.position.y+=u.velocity.y*r,u.position.z+=u.velocity.z*r,l+=u.velocity.x*u.velocity.x+u.velocity.y*u.velocity.y+u.velocity.z*u.velocity.z}l/t.length<this.config.stabilizationThreshold&&(this.hasStabilized=!0)}isStabilized(){return this.hasStabilized}getNodes(){return this.data.nodes}applyRepulsion(e,t,r,n){for(let i=0;i<e.length;i+=1){const a=e[i];for(let o=i+1;o<e.length;o+=1){const l=e[o],c=l.position.x-a.position.x,h=l.position.y-a.position.y,u=l.position.z-a.position.z,f=Math.max(c*c+h*h+u*u,ac),d=Math.sqrt(f),g=this.config.repulsionStrength/f,_=c/d,m=h/d,p=u/d,T=_*g,M=m*g,v=p*g;t[i]-=T,r[i]-=M,n[i]-=v,t[o]+=T,r[o]+=M,n[o]+=v}}}applyLinkAttraction(e,t,r,n){for(const i of this.data.edges){const a=this.nodeIndexById.get(i.source),o=this.nodeIndexById.get(i.target);if(a===void 0||o===void 0)continue;const l=e[a],c=e[o],h=c.position.x-l.position.x,u=c.position.y-l.position.y,f=c.position.z-l.position.z,d=Math.max(h*h+u*u+f*f,ac),g=Math.sqrt(d),_=g-this.config.linkDistance,m=this.config.linkStrength*_,p=h/g,T=u/g,M=f/g,v=p*m,w=T*m,C=M*m;t[a]+=v,r[a]+=w,n[a]+=C,t[o]-=v,r[o]-=w,n[o]-=C}}applyLayerConstraint(e,t){for(let r=0;r<e.length;r+=1){const n=e[r],i=this.targetXByNodeIndex[r];t[r]+=(i-n.position.x)*this.config.layerStrength}}applyCentering(e,t,r,n){for(let i=0;i<e.length;i+=1){const a=e[i];t[i]+=-a.position.x*this.config.centerStrength,r[i]+=-a.position.y*this.config.centerStrength,n[i]+=-a.position.z*this.config.centerStrength}}applyWobble(e,t){for(let r=0;r<e.length;r+=1){const n=e[r];if(n.fixed)continue;const i=this.wobbleByNodeIndex[r],a=ss*i.frequencyHz*this.elapsedTime,o=Math.sin(a+i.phaseX),l=Math.sin(a+i.phaseY),c=Math.sin(a+i.phaseZ);n.velocity.x+=this.config.wobbleAmplitude*.7*o*t,n.velocity.y+=this.config.wobbleAmplitude*1*l*t,n.velocity.z+=this.config.wobbleAmplitude*1.1*c*t}}buildLayerTargets(e){const t=new Map;for(const n of e){const i=t.get(n.type);if(!i){t.set(n.type,{sum:n.position.x,count:1});continue}i.sum+=n.position.x,i.count+=1}const r=new Map;return t.forEach((n,i)=>{r.set(i,n.sum/n.count)}),e.map(n=>r.get(n.type)??n.position.x)}buildWobbleStates(e){const n=[];for(let i=0;i<e;i+=1)n.push({phaseX:Math.random()*ss,phaseY:Math.random()*ss,phaseZ:Math.random()*ss,frequencyHz:.3+Math.random()*(.8-.3)});return n}clampAxisVelocity(e){const t=this.config.maxVelocity;return e>t?t:e<-t?-t:e}}const W_=2,X_=2.5,Y_=20,as=.4,va=.35,oc=.25,q_=.7,j_=1.15,K_=.2,Z_=.55,J_=.03,Q_=.05,$_=.2,ev=.05;class tv{constructor(){ze(this,"visualsById",new Map);ze(this,"nodeMeshes",new Map);ze(this,"highlightedNodeId",null);ze(this,"traineeHighlightNodeIds",new Set)}createNodes(e,t){this.disposeAllVisuals();const r=this.buildImportanceMap(e);for(const n of e.nodes){const i=r.get(n.id)??0,a=Math.min(Y_,W_+i*X_),o=new _t;o.position.set(n.position.x,n.position.y,n.position.z);const l=new br(a,128,128),c=new Df({color:6994167,transparent:!0,opacity:as,roughness:.05,metalness:0,transmission:.98,ior:1.5,thickness:5,emissive:2254540,emissiveIntensity:va,clearcoat:1,clearcoatRoughness:.01,specularIntensity:1,specularColor:new qe(16777215),side:Rn}),h=new Tt(l,c);h.userData.nodeId=n.id;const u=new br(a*.4,16,16),f=new ci({color:5609966,transparent:!0,opacity:.15,blending:zi}),d=new Tt(u,f);o.add(h),o.add(d),t.add(o);const g={group:o,outerMesh:h,innerMesh:d,baseRadius:a,phase:Math.random()*Math.PI*2,pulseSpeed:.5+Math.random()*.5,targetScaleMultiplier:1,targetOuterOpacity:as,targetEmissiveIntensity:va,targetInnerBaseOpacity:oc};this.visualsById.set(n.id,g),this.nodeMeshes.set(n.id,o)}return this.applyVisualTargets(),this.nodeMeshes}updatePositions(e){for(const t of e){const r=this.visualsById.get(t.id);r&&r.group.position.set(t.position.x,t.position.y,t.position.z)}}updateAnimations(e){for(const t of this.visualsById.values()){const n=1+Math.sin(e*t.pulseSpeed+t.phase)*.04;t.group.scale.setScalar(n*t.targetScaleMultiplier);const i=Math.sin(e*.8+t.phase)*.05,a=nh.clamp(t.targetInnerBaseOpacity+i,0,1);t.innerMesh.material.opacity=a}}highlightNode(e){this.visualsById.has(e)&&(this.highlightedNodeId=e,this.applyVisualTargets())}resetHighlights(){this.highlightedNodeId=null,this.traineeHighlightNodeIds=new Set,this.applyVisualTargets()}setTraineeHighlight(e){this.traineeHighlightNodeIds=new Set(e),this.applyVisualTargets()}getNodeMeshes(){return this.nodeMeshes}getNodeRadii(){const e=new Map;for(const[t,r]of this.visualsById)e.set(t,r.baseRadius);return e}applyVisualTargets(){const e=this.traineeHighlightNodeIds.size>0;for(const[t,r]of this.visualsById)e?this.traineeHighlightNodeIds.has(t)?(r.targetOuterOpacity=as,r.targetEmissiveIntensity=Z_,r.targetInnerBaseOpacity=$_):(r.targetOuterOpacity=Q_,r.targetEmissiveIntensity=J_,r.targetInnerBaseOpacity=ev):(r.targetOuterOpacity=as,r.targetEmissiveIntensity=va,r.targetInnerBaseOpacity=oc),t===this.highlightedNodeId?(r.targetScaleMultiplier=j_,r.targetEmissiveIntensity=q_,r.targetInnerBaseOpacity=Math.max(r.targetInnerBaseOpacity,K_)):r.targetScaleMultiplier=1,r.outerMesh.material.opacity=r.targetOuterOpacity,r.outerMesh.material.emissiveIntensity=r.targetEmissiveIntensity}buildImportanceMap(e){const t=new Map;for(const r of e.trainees){const n=new Set(r.nodeSequence);for(const i of n)t.set(i,(t.get(i)??0)+1)}return t}disposeAllVisuals(){for(const e of this.visualsById.values())e.group.removeFromParent(),e.outerMesh.geometry.dispose(),e.outerMesh.material.dispose(),e.innerMesh.geometry.dispose(),e.innerMesh.material.dispose();this.visualsById.clear(),this.nodeMeshes.clear(),this.highlightedNodeId=null,this.traineeHighlightNodeIds.clear()}}const lc=64,cc=6,os="#88ccff",nv="#ffffff",hc=.16,uc=.7,iv=1,rv=.06,sv=.15,av=.05;class ov{constructor(){ze(this,"pathByTraineeId",new Map);ze(this,"edgeByPairKey",new Map);ze(this,"data",null);ze(this,"previousNodePositions",new Map)}createPaths(e,t){this.disposePaths(),this.data=e,this.edgeByPairKey.clear(),this.buildEdgeLookup(e.edges);const r=this.mapPositionsFromData(e);e.trainees.forEach((n,i)=>{const a=this.buildOffsetControlPoints(n.nodeSequence,n.id,i,r);if(a.length<2)return;const o=new ho(a,!1,"centripetal"),l=new Ss(o,lc,hc,cc,!1),c=new gh({color:os,transparent:!0,opacity:uc,emissive:os,emissiveIntensity:.6,roughness:.4,metalness:.1}),h=new Tt(l,c);t.add(h),this.pathByTraineeId.set(n.id,{mesh:h,curve:o,material:c})}),this.previousNodePositions=this.cloneNodePositionMap(r)}updatePaths(e){this.data&&this.hasSignificantMovement(e)&&(this.data.trainees.forEach((t,r)=>{const n=this.pathByTraineeId.get(t.id);if(!n)return;const i=this.buildOffsetControlPoints(t.nodeSequence,t.id,r,e);if(i.length<2)return;const a=new ho(i,!1,"centripetal"),o=new Ss(a,lc,hc,cc,!1);n.mesh.geometry.dispose(),n.mesh.geometry=o,n.curve=a}),this.previousNodePositions=this.cloneNodePositionMap(e))}highlightTrainee(e){for(const[t,r]of this.pathByTraineeId){const n=t===e;r.material.opacity=n?iv:rv,r.material.color.set(n?nv:os)}}resetHighlights(){for(const e of this.pathByTraineeId.values())e.material.opacity=uc,e.material.color.set(os)}getCurves(){const e=new Map;for(const[t,r]of this.pathByTraineeId)e.set(t,r.curve);return e}disposePaths(){var e;for(const t of this.pathByTraineeId.values())(e=t.mesh.parent)==null||e.remove(t.mesh),t.mesh.geometry.dispose(),t.material.dispose();this.pathByTraineeId.clear()}buildEdgeLookup(e){for(const t of e)this.edgeByPairKey.set(this.makeEdgePairKey(t.source,t.target),t),this.edgeByPairKey.set(this.makeEdgePairKey(t.target,t.source),t)}buildOffsetControlPoints(e,t,r,n){var l,c;const i=[];for(const h of e){const u=n.get(h);u&&i.push(new B(u.x,u.y,u.z))}if(i.length<2)return[];const a=[];for(let h=0;h<e.length-1;h+=1){const u=e[h],f=e[h+1],d=n.get(u),g=n.get(f);if(!d||!g){a.push(new B);continue}const _=this.computeEdgeOffset(d,g,u,f,t,r);a.push(_)}const o=[];for(let h=0;h<i.length;h+=1){let u=new B;if(h===0)u=((l=a[0])==null?void 0:l.clone())??u;else if(h===i.length-1)u=((c=a[a.length-1])==null?void 0:c.clone())??u;else{const f=a[h-1]??new B,d=a[h]??new B;u=f.clone().add(d).multiplyScalar(.5)}o.push(i[h].clone().add(u))}return o}computeEdgeOffset(e,t,r,n,i,a){const o=this.edgeByPairKey.get(this.makeEdgePairKey(r,n)),l=Math.max((o==null?void 0:o.traineeIds.length)??1,1),c=o==null?void 0:o.traineeIds.indexOf(i),f=((c!==void 0&&c>=0?c:a%l)-(l-1)/2)*sv,d=t.y-e.y,g=t.z-e.z,_=Math.hypot(d,g);if(_<Number.EPSILON){const T=a%2===0?1:-1;return new B(0,0,T*f)}const m=-g/_,p=d/_;return new B(0,m*f,p*f)}hasSignificantMovement(e){if(this.previousNodePositions.size!==e.size)return!0;for(const[t,r]of e){const n=this.previousNodePositions.get(t);if(!n)return!0;const i=r.x-n.x,a=r.y-n.y,o=r.z-n.z;if(Math.hypot(i,a,o)>av)return!0}return!1}mapPositionsFromData(e){const t=new Map;for(const r of e.nodes)t.set(r.id,{x:r.position.x,y:r.position.y,z:r.position.z});return t}cloneNodePositionMap(e){const t=new Map;for(const[r,n]of e)t.set(r,new B(n.x,n.y,n.z));return t}makeEdgePairKey(e,t){return`${e}__${t}`}}const lv="#88ccff",fc=6,cv=.04,dc=8,pc=.9,hv=1,uv=0,mc=1,gc=1.2,fv=.3,dv=5,pv=.06;class mv{constructor(){ze(this,"flowByTraineeId",new Map);ze(this,"scene",null);ze(this,"highlightedTraineeId",null)}init(e,t,r){this.dispose(),this.scene=r,this.highlightedTraineeId=null;for(const[n,i]of e){const a=[],o=[];for(let l=0;l<fc;l+=1){const c=new br(cv,dc,dc),h=new ci({color:lv,transparent:!0,opacity:pc,blending:zi}),u=new Tt(c,h),f=l/fc;u.position.copy(i.getPointAt(f)),a.push(u),o.push(f),r.add(u)}this.flowByTraineeId.set(n,{dots:a,curve:i,offsets:o,speed:pv})}}update(e,t){for(const[r,n]of this.flowByTraineeId){const i=this.highlightedTraineeId!==null&&this.highlightedTraineeId===r?gc:mc;for(let a=0;a<n.dots.length;a+=1){const o=(n.offsets[a]+n.speed*t)%1;n.offsets[a]=o;const l=n.dots[a];l.position.copy(n.curve.getPointAt(o));const c=1+Math.sin(e*dv+a)*fv;l.scale.setScalar(i*c)}}}setHighlight(e){this.highlightedTraineeId=e;for(const[t,r]of this.flowByTraineeId){const n=e===null||t===e,i=e===null?pc:t===e?hv:uv,a=e!==null&&t===e?gc:mc;for(const o of r.dots)o.material.opacity=i,o.visible=n,o.scale.setScalar(a)}}dispose(){var e;for(const t of this.flowByTraineeId.values())for(const r of t.dots)(e=this.scene)==null||e.remove(r),r.geometry.dispose(),r.material.dispose();this.flowByTraineeId.clear(),this.highlightedTraineeId=null,this.scene=null}}const Ri=300,gv=-40,_v=40,vv=-20,xv=20,yv=-25,Mv=25;function Pi(s,e){return s+Math.random()*(e-s)}function Sv(s){const e=new Float32Array(Ri*3),t=new Float32Array(Ri),r=new Float32Array(Ri),n=new Float32Array(Ri);for(let c=0;c<Ri;c+=1){const h=c*3;e[h]=Pi(gv,_v),e[h+1]=Pi(vv,xv),e[h+2]=Pi(yv,Mv),t[c]=Pi(0,Math.PI*2),r[c]=Pi(.2,1.2),n[c]=Pi(3e-4,.0012)}const i=new Zt,a=new tn(e,3);a.setUsage(Su),i.setAttribute("position",a);const o=new fh({color:4491468,size:.08,transparent:!0,opacity:.3,blending:zi,sizeAttenuation:!0,depthWrite:!1}),l=new pf(i,o);return s.add(l),{update:c=>{for(let h=0;h<Ri;h+=1){const u=h*3,f=t[h],d=r[h],g=n[h];e[u+1]+=Math.sin(c*g+f)*d*.001,e[u]+=Math.cos(c*g*.7+f)*d*5e-4,e[u+2]+=Math.sin(c*g*.5+f+1)*d*8e-4}i.attributes.position.needsUpdate=!0}}}const Ev=5;class Tv{constructor(){ze(this,"onHover",null);ze(this,"onClick",null);ze(this,"raycaster",null);ze(this,"mouse",null);ze(this,"camera",null);ze(this,"domElement",null);ze(this,"nodeMeshes",null);ze(this,"hoveredNodeId",null);ze(this,"clickPending",!1);ze(this,"pointerDownX",0);ze(this,"pointerDownY",0);ze(this,"handlePointerMove",e=>{!this.domElement||!this.mouse||(this.mouse.x=e.clientX/this.domElement.clientWidth*2-1,this.mouse.y=-(e.clientY/this.domElement.clientHeight)*2+1)});ze(this,"handlePointerDown",e=>{this.handlePointerMove(e),this.clickPending=!0,this.pointerDownX=e.clientX,this.pointerDownY=e.clientY});ze(this,"handlePointerUp",e=>{var a;if(this.handlePointerMove(e),!this.clickPending)return;this.clickPending=!1;const t=e.clientX-this.pointerDownX,r=e.clientY-this.pointerDownY;if(Math.hypot(t,r)>=Ev)return;const i=this.raycastNodeId();(a=this.onClick)==null||a.call(this,i)})}init(e,t,r){this.dispose(),this.raycaster=new kf,this.mouse=new Ce,this.camera=e,this.domElement=t,this.nodeMeshes=r,this.hoveredNodeId=null,this.clickPending=!1,this.domElement.addEventListener("pointermove",this.handlePointerMove),this.domElement.addEventListener("pointerdown",this.handlePointerDown),this.domElement.addEventListener("pointerup",this.handlePointerUp)}update(){var t,r;if(!this.domElement)return;const e=this.raycastNodeId();if(e!==null){this.domElement.style.cursor="pointer",e!==this.hoveredNodeId&&(this.hoveredNodeId=e,(t=this.onHover)==null||t.call(this,e));return}this.domElement.style.cursor="",this.hoveredNodeId!==null&&(this.hoveredNodeId=null,(r=this.onHover)==null||r.call(this,null))}dispose(){this.domElement&&(this.domElement.removeEventListener("pointermove",this.handlePointerMove),this.domElement.removeEventListener("pointerdown",this.handlePointerDown),this.domElement.removeEventListener("pointerup",this.handlePointerUp),this.domElement.style.cursor=""),this.clickPending=!1,this.hoveredNodeId=null,this.raycaster=null,this.mouse=null,this.camera=null,this.domElement=null,this.nodeMeshes=null}raycastNodeId(){if(!this.raycaster||!this.mouse||!this.camera||!this.nodeMeshes)return null;this.raycaster.setFromCamera(this.mouse,this.camera);const e=[];for(const r of this.nodeMeshes.values())r.traverse(n=>{n instanceof Tt&&this.resolveNodeId(n)!==null&&e.push(n)});if(e.length===0)return null;const t=this.raycaster.intersectObjects(e,!1);return t.length===0?null:this.resolveNodeId(t[0].object)}resolveNodeId(e){var r;let t=e;for(;t;){const n=(r=t.userData)==null?void 0:r.nodeId;if(typeof n=="string")return n;t=t.parent}return null}}const _c={type:"change"},Fo={type:"start"},Ah={type:"end"},ls=new Ts,vc=new Gn,bv=Math.cos(70*nh.DEG2RAD),gt=new B,Ht=2*Math.PI,st={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},xa=1e-6;class Av extends zf{constructor(e,t=null){super(e,t),this.state=st.NONE,this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ni.ROTATE,MIDDLE:Ni.DOLLY,RIGHT:Ni.PAN},this.touches={ONE:Ii.ROTATE,TWO:Ii.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new ri,this._lastTargetPosition=new B,this._quat=new ri().setFromUnitVectors(e.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ul,this._sphericalDelta=new Ul,this._scale=1,this._panOffset=new B,this._rotateStart=new Ce,this._rotateEnd=new Ce,this._rotateDelta=new Ce,this._panStart=new Ce,this._panEnd=new Ce,this._panDelta=new Ce,this._dollyStart=new Ce,this._dollyEnd=new Ce,this._dollyDelta=new Ce,this._dollyDirection=new B,this._mouse=new Ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Cv.bind(this),this._onPointerDown=wv.bind(this),this._onPointerUp=Rv.bind(this),this._onContextMenu=Nv.bind(this),this._onMouseWheel=Uv.bind(this),this._onKeyDown=Lv.bind(this),this._onTouchStart=Iv.bind(this),this._onTouchMove=Fv.bind(this),this._onMouseDown=Pv.bind(this),this._onMouseMove=Dv.bind(this),this._interceptControlDown=Ov.bind(this),this._interceptControlUp=Bv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(_c),this.update(),this.state=st.NONE}update(e=null){const t=this.object.position;gt.copy(t).sub(this.target),gt.applyQuaternion(this._quat),this._spherical.setFromVector3(gt),this.autoRotate&&this.state===st.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(r)&&isFinite(n)&&(r<-Math.PI?r+=Ht:r>Math.PI&&(r-=Ht),n<-Math.PI?n+=Ht:n>Math.PI&&(n-=Ht),r<=n?this._spherical.theta=Math.max(r,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+n)/2?Math.max(r,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=a!=this._spherical.radius}if(gt.setFromSpherical(this._spherical),gt.applyQuaternion(this._quatInverse),t.copy(this.target).add(gt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=gt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),i=!!l}else if(this.object.isOrthographicCamera){const o=new B(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=l!==this.object.zoom;const c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=gt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ls.origin.copy(this.object.position),ls.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ls.direction))<bv?this.object.lookAt(this.target):(vc.setFromNormalAndCoplanarPoint(this.object.up,this.target),ls.intersectPlane(vc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>xa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>xa||this._lastTargetPosition.distanceToSquared(this.target)>xa?(this.dispatchEvent(_c),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ht/60*this.autoRotateSpeed*e:Ht/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){gt.setFromMatrixColumn(t,0),gt.multiplyScalar(-e),this._panOffset.add(gt)}_panUp(e,t){this.screenSpacePanning===!0?gt.setFromMatrixColumn(t,1):(gt.setFromMatrixColumn(t,0),gt.crossVectors(this.object.up,gt)),gt.multiplyScalar(e),this._panOffset.add(gt)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const n=this.object.position;gt.copy(n).sub(this.target);let i=gt.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/r.clientHeight,this.object.matrix),this._panUp(2*t*i/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),n=e-r.left,i=t-r.top,a=r.width,o=r.height;this._mouse.x=n/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ht*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ht*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ht*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ht*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ht*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ht*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._rotateStart.set(r,n)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panStart.set(r,n)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,n=e.pageY-t.y,i=Math.sqrt(r*r+n*n);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),n=.5*(e.pageX+r.x),i=.5*(e.pageY+r.y);this._rotateEnd.set(n,i)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ht*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ht*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panEnd.set(r,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,n=e.pageY-t.y,i=Math.sqrt(r*r+n*n);this._dollyEnd.set(0,i),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ce,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function wv(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Cv(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Rv(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ah),this.state=st.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Pv(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ni.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=st.DOLLY;break;case Ni.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=st.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=st.ROTATE}break;case Ni.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=st.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=st.PAN}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(Fo)}function Dv(s){switch(this.state){case st.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case st.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case st.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Uv(s){this.enabled===!1||this.enableZoom===!1||this.state!==st.NONE||(s.preventDefault(),this.dispatchEvent(Fo),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Ah))}function Lv(s){this.enabled!==!1&&this._handleKeyDown(s)}function Iv(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ii.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=st.TOUCH_ROTATE;break;case Ii.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=st.TOUCH_PAN;break;default:this.state=st.NONE}break;case 2:switch(this.touches.TWO){case Ii.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=st.TOUCH_DOLLY_PAN;break;case Ii.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=st.TOUCH_DOLLY_ROTATE;break;default:this.state=st.NONE}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(Fo)}function Fv(s){switch(this._trackPointer(s),this.state){case st.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case st.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case st.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case st.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=st.NONE}}function Nv(s){this.enabled!==!1&&s.preventDefault()}function Ov(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Bv(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function kv(s){return 1-Math.pow(1-s,3)}class zv{constructor(){ze(this,"camera",null);ze(this,"controls",null);ze(this,"defaultPosition",new B(0,0,170));ze(this,"defaultTarget",new B(0,0,0));ze(this,"startTarget",new B);ze(this,"endTarget",new B);ze(this,"startPosition",new B);ze(this,"endPosition",new B);ze(this,"transitionProgress",0);ze(this,"isTransitioning",!1);ze(this,"onControlsStart",()=>{this.isTransitioning&&this.cancelTransition()})}init(e,t){this.controls&&(this.controls.removeEventListener("start",this.onControlsStart),this.controls.dispose()),this.camera=e,this.controls=new Av(e,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.minDistance=30,this.controls.maxDistance=1e3,this.controls.screenSpacePanning=!0,this.controls.enablePan=!0,this.controls.rotateSpeed=.5,this.controls.zoomSpeed=.8,this.camera.position.copy(this.defaultPosition),this.controls.target.copy(this.defaultTarget),this.controls.update(),this.controls.addEventListener("start",this.onControlsStart),this.cancelTransition()}focusOn(e,t){const r=this.requireCamera(),n=this.requireControls();this.startTarget.copy(n.target),this.endTarget.copy(e),this.startPosition.copy(r.position);const i=new B().subVectors(r.position,n.target);i.lengthSq()<1e-8&&i.set(0,0,1),i.normalize();const a=Math.max(t*2,8);this.endPosition.copy(e).addScaledVector(i,a),this.transitionProgress=0,this.isTransitioning=!0}reset(){const e=this.requireCamera(),t=this.requireControls();this.startTarget.copy(t.target),this.endTarget.copy(this.defaultTarget),this.startPosition.copy(e.position),this.endPosition.copy(this.defaultPosition),this.transitionProgress=0,this.isTransitioning=!0}setInitialTarget(e){this.defaultTarget.copy(e);const t=this.requireControls(),r=this.requireCamera(),n=new B().subVectors(r.position,t.target);r.position.copy(e).add(n),t.target.copy(e),t.update()}setInitialPosition(e){this.defaultPosition.copy(e),this.requireCamera().position.copy(e),this.requireControls().update()}update(e){const t=this.requireCamera(),r=this.requireControls();if(this.isTransitioning&&Number.isFinite(e)&&e>0){this.transitionProgress=Math.min(1,this.transitionProgress+e*1.2);const n=kv(this.transitionProgress);r.target.lerpVectors(this.startTarget,this.endTarget,n),t.position.lerpVectors(this.startPosition,this.endPosition,n),this.transitionProgress>=1&&(this.isTransitioning=!1)}r.update()}getControls(){return this.requireControls()}cancelTransition(){this.isTransitioning=!1,this.transitionProgress=0}requireCamera(){if(!this.camera)throw new Error("CameraController has not been initialized. Call init() first.");return this.camera}requireControls(){if(!this.controls)throw new Error("CameraController has not been initialized. Call init() first.");return this.controls}}class Gv{constructor(e){ze(this,"nodeRenderer");ze(this,"pathRenderer");ze(this,"energyFlow");ze(this,"infoPanel");ze(this,"labelRenderer");ze(this,"graphData");ze(this,"hoveredNodeId",null);ze(this,"selectedTraineeId",null);ze(this,"isLocked",!1);this.nodeRenderer=e.nodeRenderer,this.pathRenderer=e.pathRenderer,this.energyFlow=e.energyFlow,this.infoPanel=e.infoPanel,this.labelRenderer=e.labelRenderer,this.graphData=e.graphData}handleHover(e){if(this.isLocked||this.hoveredNodeId===e)return;if(e===null){this.resetAll();return}const t=this.findFirstTraineeByNodeId(e);if(!t){this.resetAll();return}this.hoveredNodeId=e,this.applyTraineeVisuals(t)}handleClick(e){if(e===null){this.isLocked&&this.clearSelection();return}const t=this.findFirstTraineeByNodeId(e);if(t){if(this.isLocked&&this.selectedTraineeId===t.id){this.clearSelection();return}this.selectedTraineeId=t.id,this.isLocked=!0,this.applyTraineeVisuals(t),this.infoPanel.show(t,this.graphData.nodes)}}update(e){}clearSelection(){this.selectedTraineeId=null,this.isLocked=!1,this.resetAll(),this.infoPanel.hide()}resetAll(){this.nodeRenderer.resetHighlights(),this.pathRenderer.resetHighlights(),this.energyFlow.setHighlight(null),this.labelRenderer.resetLabels(),this.hoveredNodeId=null}applyTraineeVisuals(e){this.nodeRenderer.setTraineeHighlight(e.nodeSequence),this.pathRenderer.highlightTrainee(e.id),this.energyFlow.setHighlight(e.id),this.labelRenderer.highlightLabels(e.nodeSequence)}findFirstTraineeByNodeId(e){for(const t of this.graphData.trainees)if(t.nodeSequence.includes(e))return t;return null}}function Hv(){var s=Object.create(null);function e(n,i){var a=n.id,o=n.name,l=n.dependencies;l===void 0&&(l=[]);var c=n.init;c===void 0&&(c=function(){});var h=n.getTransferables;if(h===void 0&&(h=null),!s[a])try{l=l.map(function(f){return f&&f.isWorkerModule&&(e(f,function(d){if(d instanceof Error)throw d}),f=s[f.id].value),f}),c=r("<"+o+">.init",c),h&&(h=r("<"+o+">.getTransferables",h));var u=null;typeof c=="function"?u=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),s[a]={id:a,value:u,getTransferables:h},i(u)}catch(f){f&&f.noLog||console.error(f),i(f)}}function t(n,i){var a,o=n.id,l=n.args;(!s[o]||typeof s[o].value!="function")&&i(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var c=(a=s[o]).value.apply(a,l);c&&typeof c.then=="function"?c.then(h,function(u){return i(u instanceof Error?u:new Error(""+u))}):h(c)}catch(u){i(u)}function h(u){try{var f=s[o].getTransferables&&s[o].getTransferables(u);(!f||!Array.isArray(f)||!f.length)&&(f=void 0),i(u,f)}catch(d){console.error(d),i(d)}}}function r(n,i){var a=void 0;self.troikaDefine=function(l){return a=l};var o=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+i+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(l){console.error(l)}return URL.revokeObjectURL(o),delete self.troikaDefine,a}self.addEventListener("message",function(n){var i=n.data,a=i.messageId,o=i.action,l=i.data;try{o==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:{isCallable:typeof c=="function"}})}),o==="callModule"&&t(l,function(c,h){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:c},h||void 0)})}catch(c){postMessage({messageId:a,success:!1,error:c.stack})}})}function Vv(s){var e=function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=s.dependencies,r=s.init;t=Array.isArray(t)?t.map(function(i){return i&&(i=i.onMainThread||i,i._getInitResult&&(i=i._getInitResult())),i}):[];var n=Promise.all(t).then(function(i){return r.apply(null,i)});return e._getInitResult=function(){return n},n},e}var wh=function(){var s=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),s=!0}catch(t){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return wh=function(){return s},s},Wv=0,Xv=0,ya=!1,Mr=Object.create(null),Sr=Object.create(null),mo=Object.create(null);function Qi(s){if((!s||typeof s.init!="function")&&!ya)throw new Error("requires `options.init` function");var e=s.dependencies,t=s.init,r=s.getTransferables,n=s.workerId,i=Vv(s);n==null&&(n="#default");var a="workerModule"+ ++Wv,o=s.name||a,l=null;e=e&&e.map(function(h){return typeof h=="function"&&!h.workerModuleData&&(ya=!0,h=Qi({workerId:n,name:"<"+o+"> function dependency: "+h.name,init:`function(){return (
`+_s(h)+`
)}`}),ya=!1),h&&h.workerModuleData&&(h=h.workerModuleData),h});function c(){for(var h=[],u=arguments.length;u--;)h[u]=arguments[u];if(!wh())return i.apply(void 0,h);if(!l){l=xc(n,"registerModule",c.workerModuleData);var f=function(){l=null,Sr[n].delete(f)};(Sr[n]||(Sr[n]=new Set)).add(f)}return l.then(function(d){var g=d.isCallable;if(g)return xc(n,"callModule",{id:a,args:h});throw new Error("Worker module function was called but `init` did not return a callable function")})}return c.workerModuleData={isWorkerModule:!0,id:a,name:o,dependencies:e,init:_s(t),getTransferables:r&&_s(r)},c.onMainThread=i,c}function Yv(s){Sr[s]&&Sr[s].forEach(function(e){e()}),Mr[s]&&(Mr[s].terminate(),delete Mr[s])}function _s(s){var e=s.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function qv(s){var e=Mr[s];if(!e){var t=_s(Hv);e=Mr[s]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+s.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(r){var n=r.data,i=n.messageId,a=mo[i];if(!a)throw new Error("WorkerModule response with empty or unknown messageId");delete mo[i],a(n)}}return e}function xc(s,e,t){return new Promise(function(r,n){var i=++Xv;mo[i]=function(a){a.success?r(a.result):n(new Error("Error in worker "+e+" call: "+a.error))},qv(s).postMessage({messageId:i,action:e,data:t})})}function Ch(){var s=(function(e){function t(Z,K,I,V,ne,F,k,te){var W=1-k;te.x=W*W*Z+2*W*k*I+k*k*ne,te.y=W*W*K+2*W*k*V+k*k*F}function r(Z,K,I,V,ne,F,k,te,W,re){var me=1-W;re.x=me*me*me*Z+3*me*me*W*I+3*me*W*W*ne+W*W*W*k,re.y=me*me*me*K+3*me*me*W*V+3*me*W*W*F+W*W*W*te}function n(Z,K){for(var I=/([MLQCZ])([^MLQCZ]*)/g,V,ne,F,k,te;V=I.exec(Z);){var W=V[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(re){return parseFloat(re)});switch(V[1]){case"M":k=ne=W[0],te=F=W[1];break;case"L":(W[0]!==k||W[1]!==te)&&K("L",k,te,k=W[0],te=W[1]);break;case"Q":{K("Q",k,te,k=W[2],te=W[3],W[0],W[1]);break}case"C":{K("C",k,te,k=W[4],te=W[5],W[0],W[1],W[2],W[3]);break}case"Z":(k!==ne||te!==F)&&K("L",k,te,ne,F);break}}}function i(Z,K,I){I===void 0&&(I=16);var V={x:0,y:0};n(Z,function(ne,F,k,te,W,re,me,ye,ve){switch(ne){case"L":K(F,k,te,W);break;case"Q":{for(var oe=F,Oe=k,L=1;L<I;L++)t(F,k,re,me,te,W,L/(I-1),V),K(oe,Oe,V.x,V.y),oe=V.x,Oe=V.y;break}case"C":{for(var Be=F,be=k,Re=1;Re<I;Re++)r(F,k,re,me,ye,ve,te,W,Re/(I-1),V),K(Be,be,V.x,V.y),Be=V.x,be=V.y;break}}})}var a="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function h(Z,K){var I=Z.getContext?Z.getContext("webgl",c):Z,V=l.get(I);if(!V){let Be=function(S){var y=F[S];if(!y&&(y=F[S]=I.getExtension(S),!y))throw new Error(S+" not supported");return y},be=function(S,y){var O=I.createShader(y);return I.shaderSource(O,S),I.compileShader(O),O},Re=function(S,y,O,J){if(!k[S]){var Q={},se={},fe=I.createProgram();I.attachShader(fe,be(y,I.VERTEX_SHADER)),I.attachShader(fe,be(O,I.FRAGMENT_SHADER)),I.linkProgram(fe),k[S]={program:fe,transaction:function(ge){I.useProgram(fe),ge({setUniform:function(he,Me){for(var Ee=[],Te=arguments.length-2;Te-- >0;)Ee[Te]=arguments[Te+2];var le=se[Me]||(se[Me]=I.getUniformLocation(fe,Me));I["uniform"+he].apply(I,[le].concat(Ee))},setAttribute:function(he,Me,Ee,Te,le){var Le=Q[he];Le||(Le=Q[he]={buf:I.createBuffer(),loc:I.getAttribLocation(fe,he),data:null}),I.bindBuffer(I.ARRAY_BUFFER,Le.buf),I.vertexAttribPointer(Le.loc,Me,I.FLOAT,!1,0,0),I.enableVertexAttribArray(Le.loc),ne?I.vertexAttribDivisor(Le.loc,Te):Be("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Le.loc,Te),le!==Le.data&&(I.bufferData(I.ARRAY_BUFFER,le,Ee),Le.data=le)}})}}}k[S].transaction(J)},ae=function(S,y){W++;try{I.activeTexture(I.TEXTURE0+W);var O=te[S];O||(O=te[S]=I.createTexture(),I.bindTexture(I.TEXTURE_2D,O),I.texParameteri(I.TEXTURE_2D,I.TEXTURE_MIN_FILTER,I.NEAREST),I.texParameteri(I.TEXTURE_2D,I.TEXTURE_MAG_FILTER,I.NEAREST)),I.bindTexture(I.TEXTURE_2D,O),y(O,W)}finally{W--}},Ae=function(S,y,O){var J=I.createFramebuffer();re.push(J),I.bindFramebuffer(I.FRAMEBUFFER,J),I.activeTexture(I.TEXTURE0+y),I.bindTexture(I.TEXTURE_2D,S),I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,S,0);try{O(J)}finally{I.deleteFramebuffer(J),I.bindFramebuffer(I.FRAMEBUFFER,re[--re.length-1]||null)}},de=function(){F={},k={},te={},W=-1,re.length=0};var me=Be,ye=be,ve=Re,oe=ae,Oe=Ae,L=de,ne=typeof WebGL2RenderingContext<"u"&&I instanceof WebGL2RenderingContext,F={},k={},te={},W=-1,re=[];I.canvas.addEventListener("webglcontextlost",function(S){de(),S.preventDefault()},!1),l.set(I,V={gl:I,isWebGL2:ne,getExtension:Be,withProgram:Re,withTexture:ae,withTextureFramebuffer:Ae,handleContextLoss:de})}K(V)}function u(Z,K,I,V,ne,F,k,te){k===void 0&&(k=15),te===void 0&&(te=null),h(Z,function(W){var re=W.gl,me=W.withProgram,ye=W.withTexture;ye("copy",function(ve,oe){re.texImage2D(re.TEXTURE_2D,0,re.RGBA,ne,F,0,re.RGBA,re.UNSIGNED_BYTE,K),me("copy",a,o,function(Oe){var L=Oe.setUniform,Be=Oe.setAttribute;Be("aUV",2,re.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),L("1i","image",oe),re.bindFramebuffer(re.FRAMEBUFFER,te||null),re.disable(re.BLEND),re.colorMask(k&8,k&4,k&2,k&1),re.viewport(I,V,ne,F),re.scissor(I,V,ne,F),re.drawArrays(re.TRIANGLES,0,3)})})})}function f(Z,K,I){var V=Z.width,ne=Z.height;h(Z,function(F){var k=F.gl,te=new Uint8Array(V*ne*4);k.readPixels(0,0,V,ne,k.RGBA,k.UNSIGNED_BYTE,te),Z.width=K,Z.height=I,u(k,te,0,0,V,ne)})}var d=Object.freeze({__proto__:null,withWebGLContext:h,renderImageData:u,resizeWebGLCanvasWithoutClearing:f});function g(Z,K,I,V,ne,F){F===void 0&&(F=1);var k=new Uint8Array(Z*K),te=V[2]-V[0],W=V[3]-V[1],re=[];i(I,function(Be,be,Re,ae){re.push({x1:Be,y1:be,x2:Re,y2:ae,minX:Math.min(Be,Re),minY:Math.min(be,ae),maxX:Math.max(Be,Re),maxY:Math.max(be,ae)})}),re.sort(function(Be,be){return Be.maxX-be.maxX});for(var me=0;me<Z;me++)for(var ye=0;ye<K;ye++){var ve=Oe(V[0]+te*(me+.5)/Z,V[1]+W*(ye+.5)/K),oe=Math.pow(1-Math.abs(ve)/ne,F)/2;ve<0&&(oe=1-oe),oe=Math.max(0,Math.min(255,Math.round(oe*255))),k[ye*Z+me]=oe}return k;function Oe(Be,be){for(var Re=1/0,ae=1/0,Ae=re.length;Ae--;){var de=re[Ae];if(de.maxX+ae<=Be)break;if(Be+ae>de.minX&&be-ae<de.maxY&&be+ae>de.minY){var S=p(Be,be,de.x1,de.y1,de.x2,de.y2);S<Re&&(Re=S,ae=Math.sqrt(Re))}}return L(Be,be)&&(ae=-ae),ae}function L(Be,be){for(var Re=0,ae=re.length;ae--;){var Ae=re[ae];if(Ae.maxX<=Be)break;var de=Ae.y1>be!=Ae.y2>be&&Be<(Ae.x2-Ae.x1)*(be-Ae.y1)/(Ae.y2-Ae.y1)+Ae.x1;de&&(Re+=Ae.y1<Ae.y2?1:-1)}return Re!==0}}function _(Z,K,I,V,ne,F,k,te,W,re){F===void 0&&(F=1),te===void 0&&(te=0),W===void 0&&(W=0),re===void 0&&(re=0),m(Z,K,I,V,ne,F,k,null,te,W,re)}function m(Z,K,I,V,ne,F,k,te,W,re,me){F===void 0&&(F=1),W===void 0&&(W=0),re===void 0&&(re=0),me===void 0&&(me=0);for(var ye=g(Z,K,I,V,ne,F),ve=new Uint8Array(ye.length*4),oe=0;oe<ye.length;oe++)ve[oe*4+me]=ye[oe];u(k,ve,W,re,Z,K,1<<3-me,te)}function p(Z,K,I,V,ne,F){var k=ne-I,te=F-V,W=k*k+te*te,re=W?Math.max(0,Math.min(1,((Z-I)*k+(K-V)*te)/W)):0,me=Z-(I+re*k),ye=K-(V+re*te);return me*me+ye*ye}var T=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:_,generateIntoFramebuffer:m}),M="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",v="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",w="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",C=new Float32Array([0,0,2,0,0,2]),b=null,R=!1,E={},x=new WeakMap;function D(Z){if(!R&&!X(Z))throw new Error("WebGL generation not supported")}function P(Z,K,I,V,ne,F,k){if(F===void 0&&(F=1),k===void 0&&(k=null),!k&&(k=b,!k)){var te=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!te)throw new Error("OffscreenCanvas or DOM canvas not supported");k=b=te.getContext("webgl",{depth:!1})}D(k);var W=new Uint8Array(Z*K*4);h(k,function(ve){var oe=ve.gl,Oe=ve.withTexture,L=ve.withTextureFramebuffer;Oe("readable",function(Be,be){oe.texImage2D(oe.TEXTURE_2D,0,oe.RGBA,Z,K,0,oe.RGBA,oe.UNSIGNED_BYTE,null),L(Be,be,function(Re){N(Z,K,I,V,ne,F,oe,Re,0,0,0),oe.readPixels(0,0,Z,K,oe.RGBA,oe.UNSIGNED_BYTE,W)})})});for(var re=new Uint8Array(Z*K),me=0,ye=0;me<W.length;me+=4)re[ye++]=W[me];return re}function U(Z,K,I,V,ne,F,k,te,W,re){F===void 0&&(F=1),te===void 0&&(te=0),W===void 0&&(W=0),re===void 0&&(re=0),N(Z,K,I,V,ne,F,k,null,te,W,re)}function N(Z,K,I,V,ne,F,k,te,W,re,me){F===void 0&&(F=1),W===void 0&&(W=0),re===void 0&&(re=0),me===void 0&&(me=0),D(k);var ye=[];i(I,function(ve,oe,Oe,L){ye.push(ve,oe,Oe,L)}),ye=new Float32Array(ye),h(k,function(ve){var oe=ve.gl,Oe=ve.isWebGL2,L=ve.getExtension,Be=ve.withProgram,be=ve.withTexture,Re=ve.withTextureFramebuffer,ae=ve.handleContextLoss;if(be("rawDistances",function(Ae,de){(Z!==Ae._lastWidth||K!==Ae._lastHeight)&&oe.texImage2D(oe.TEXTURE_2D,0,oe.RGBA,Ae._lastWidth=Z,Ae._lastHeight=K,0,oe.RGBA,oe.UNSIGNED_BYTE,null),Be("main",M,v,function(S){var y=S.setAttribute,O=S.setUniform,J=!Oe&&L("ANGLE_instanced_arrays"),Q=!Oe&&L("EXT_blend_minmax");y("aUV",2,oe.STATIC_DRAW,0,C),y("aLineSegment",4,oe.DYNAMIC_DRAW,1,ye),O.apply(void 0,["4f","uGlyphBounds"].concat(V)),O("1f","uMaxDistance",ne),O("1f","uExponent",F),Re(Ae,de,function(se){oe.enable(oe.BLEND),oe.colorMask(!0,!0,!0,!0),oe.viewport(0,0,Z,K),oe.scissor(0,0,Z,K),oe.blendFunc(oe.ONE,oe.ONE),oe.blendEquationSeparate(oe.FUNC_ADD,Oe?oe.MAX:Q.MAX_EXT),oe.clear(oe.COLOR_BUFFER_BIT),Oe?oe.drawArraysInstanced(oe.TRIANGLES,0,3,ye.length/4):J.drawArraysInstancedANGLE(oe.TRIANGLES,0,3,ye.length/4)})}),Be("post",a,w,function(S){S.setAttribute("aUV",2,oe.STATIC_DRAW,0,C),S.setUniform("1i","tex",de),oe.bindFramebuffer(oe.FRAMEBUFFER,te),oe.disable(oe.BLEND),oe.colorMask(me===0,me===1,me===2,me===3),oe.viewport(W,re,Z,K),oe.scissor(W,re,Z,K),oe.drawArrays(oe.TRIANGLES,0,3)})}),oe.isContextLost())throw ae(),new Error("webgl context lost")})}function X(Z){var K=!Z||Z===b?E:Z.canvas||Z,I=x.get(K);if(I===void 0){R=!0;var V=null;try{var ne=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],F=P(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,Z);I=F&&ne.length===F.length&&F.every(function(k,te){return k===ne[te]}),I||(V="bad trial run results",console.info(ne,F))}catch(k){I=!1,V=k.message}V&&console.warn("WebGL SDF generation not supported:",V),R=!1,x.set(K,I)}return I}var G=Object.freeze({__proto__:null,generate:P,generateIntoCanvas:U,generateIntoFramebuffer:N,isSupported:X});function $(Z,K,I,V,ne,F){ne===void 0&&(ne=Math.max(V[2]-V[0],V[3]-V[1])/2),F===void 0&&(F=1);try{return P.apply(G,arguments)}catch(k){return console.info("WebGL SDF generation failed, falling back to JS",k),g.apply(T,arguments)}}function Y(Z,K,I,V,ne,F,k,te,W,re){ne===void 0&&(ne=Math.max(V[2]-V[0],V[3]-V[1])/2),F===void 0&&(F=1),te===void 0&&(te=0),W===void 0&&(W=0),re===void 0&&(re=0);try{return U.apply(G,arguments)}catch(me){return console.info("WebGL SDF generation failed, falling back to JS",me),_.apply(T,arguments)}}return e.forEachPathCommand=n,e.generate=$,e.generateIntoCanvas=Y,e.javascript=T,e.pathToLineSegments=i,e.webgl=G,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e})({});return s}function jv(){var s=(function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},r={},n={};r.L=1,n[1]="L",Object.keys(t).forEach(function(ae,Ae){r[ae]=1<<Ae+1,n[r[ae]]=ae}),Object.freeze(r);var i=r.LRI|r.RLI|r.FSI,a=r.L|r.R|r.AL,o=r.B|r.S|r.WS|r.ON|r.FSI|r.LRI|r.RLI|r.PDI,l=r.BN|r.RLE|r.LRE|r.RLO|r.LRO|r.PDF,c=r.S|r.WS|r.B|i|r.PDI|l,h=null;function u(){if(!h){h=new Map;var ae=function(de){if(t.hasOwnProperty(de)){var S=0;t[de].split(",").forEach(function(y){var O=y.split("+"),J=O[0],Q=O[1];J=parseInt(J,36),Q=Q?parseInt(Q,36):0,h.set(S+=J,r[de]);for(var se=0;se<Q;se++)h.set(++S,r[de])})}};for(var Ae in t)ae(Ae)}}function f(ae){return u(),h.get(ae.codePointAt(0))||r.L}function d(ae){return n[f(ae)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function _(ae,Ae){var de=36,S=0,y=new Map,O=Ae&&new Map,J;return ae.split(",").forEach(function Q(se){if(se.indexOf("+")!==-1)for(var fe=+se;fe--;)Q(J);else{J=se;var ce=se.split(">"),ge=ce[0],Ue=ce[1];ge=String.fromCodePoint(S+=parseInt(ge,de)),Ue=String.fromCodePoint(S+=parseInt(Ue,de)),y.set(ge,Ue),Ae&&O.set(Ue,ge)}}),{map:y,reverseMap:O}}var m,p,T;function M(){if(!m){var ae=_(g.pairs,!0),Ae=ae.map,de=ae.reverseMap;m=Ae,p=de,T=_(g.canonical,!1).map}}function v(ae){return M(),m.get(ae)||null}function w(ae){return M(),p.get(ae)||null}function C(ae){return M(),T.get(ae)||null}var b=r.L,R=r.R,E=r.EN,x=r.ES,D=r.ET,P=r.AN,U=r.CS,N=r.B,X=r.S,G=r.ON,$=r.BN,Y=r.NSM,Z=r.AL,K=r.LRO,I=r.RLO,V=r.LRE,ne=r.RLE,F=r.PDF,k=r.LRI,te=r.RLI,W=r.FSI,re=r.PDI;function me(ae,Ae){for(var de=125,S=new Uint32Array(ae.length),y=0;y<ae.length;y++)S[y]=f(ae[y]);var O=new Map;function J(zt,an){var Gt=S[zt];S[zt]=an,O.set(Gt,O.get(Gt)-1),Gt&o&&O.set(o,O.get(o)-1),O.set(an,(O.get(an)||0)+1),an&o&&O.set(o,(O.get(o)||0)+1)}for(var Q=new Uint8Array(ae.length),se=new Map,fe=[],ce=null,ge=0;ge<ae.length;ge++)ce||fe.push(ce={start:ge,end:ae.length-1,level:Ae==="rtl"?1:Ae==="ltr"?0:Ko(ge,!1)}),S[ge]&N&&(ce.end=ge,ce=null);for(var Ue=ne|V|I|K|i|re|F|N,he=function(zt){return zt+(zt&1?1:2)},Me=function(zt){return zt+(zt&1?2:1)},Ee=0;Ee<fe.length;Ee++){ce=fe[Ee];var Te=[{_level:ce.level,_override:0,_isolate:0}],le=void 0,Le=0,Fe=0,Ke=0;O.clear();for(var z=ce.start;z<=ce.end;z++){var ue=S[z];if(le=Te[Te.length-1],O.set(ue,(O.get(ue)||0)+1),ue&o&&O.set(o,(O.get(o)||0)+1),ue&Ue)if(ue&(ne|V)){Q[z]=le._level;var ee=(ue===ne?Me:he)(le._level);ee<=de&&!Le&&!Fe?Te.push({_level:ee,_override:0,_isolate:0}):Le||Fe++}else if(ue&(I|K)){Q[z]=le._level;var pe=(ue===I?Me:he)(le._level);pe<=de&&!Le&&!Fe?Te.push({_level:pe,_override:ue&I?R:b,_isolate:0}):Le||Fe++}else if(ue&i){ue&W&&(ue=Ko(z+1,!0)===1?te:k),Q[z]=le._level,le._override&&J(z,le._override);var xe=(ue===te?Me:he)(le._level);xe<=de&&Le===0&&Fe===0?(Ke++,Te.push({_level:xe,_override:0,_isolate:1,_isolInitIndex:z})):Le++}else if(ue&re){if(Le>0)Le--;else if(Ke>0){for(Fe=0;!Te[Te.length-1]._isolate;)Te.pop();var _e=Te[Te.length-1]._isolInitIndex;_e!=null&&(se.set(_e,z),se.set(z,_e)),Te.pop(),Ke--}le=Te[Te.length-1],Q[z]=le._level,le._override&&J(z,le._override)}else ue&F?(Le===0&&(Fe>0?Fe--:!le._isolate&&Te.length>1&&(Te.pop(),le=Te[Te.length-1])),Q[z]=le._level):ue&N&&(Q[z]=ce.level);else Q[z]=le._level,le._override&&ue!==$&&J(z,le._override)}for(var Ne=[],Ye=null,ke=ce.start;ke<=ce.end;ke++){var Ve=S[ke];if(!(Ve&l)){var at=Q[ke],lt=Ve&i,ft=Ve===re;Ye&&at===Ye._level?(Ye._end=ke,Ye._endsWithIsolInit=lt):Ne.push(Ye={_start:ke,_end:ke,_level:at,_startsWithPDI:ft,_endsWithIsolInit:lt})}}for(var Bt=[],Ct=0;Ct<Ne.length;Ct++){var Wt=Ne[Ct];if(!Wt._startsWithPDI||Wt._startsWithPDI&&!se.has(Wt._start)){for(var nn=[Ye=Wt],dn=void 0;Ye&&Ye._endsWithIsolInit&&(dn=se.get(Ye._end))!=null;)for(var kt=Ct+1;kt<Ne.length;kt++)if(Ne[kt]._start===dn){nn.push(Ye=Ne[kt]);break}for(var yt=[],Jt=0;Jt<nn.length;Jt++)for(var $i=nn[Jt],ui=$i._start;ui<=$i._end;ui++)yt.push(ui);for(var Cs=Q[yt[0]],Cr=ce.level,fi=yt[0]-1;fi>=0;fi--)if(!(S[fi]&l)){Cr=Q[fi];break}var er=yt[yt.length-1],Rs=Q[er],Rr=ce.level;if(!(S[er]&i)){for(var A=er+1;A<=ce.end;A++)if(!(S[A]&l)){Rr=Q[A];break}}Bt.push({_seqIndices:yt,_sosType:Math.max(Cr,Cs)%2?R:b,_eosType:Math.max(Rr,Rs)%2?R:b})}}for(var q=0;q<Bt.length;q++){var ie=Bt[q],H=ie._seqIndices,j=ie._sosType,Se=ie._eosType,we=Q[H[0]]&1?R:b;if(O.get(Y))for(var De=0;De<H.length;De++){var Ie=H[De];if(S[Ie]&Y){for(var We=j,Xe=De-1;Xe>=0;Xe--)if(!(S[H[Xe]]&l)){We=S[H[Xe]];break}J(Ie,We&(i|re)?G:We)}}if(O.get(E))for(var Ge=0;Ge<H.length;Ge++){var $e=H[Ge];if(S[$e]&E)for(var et=Ge-1;et>=-1;et--){var ut=et===-1?j:S[H[et]];if(ut&a){ut===Z&&J($e,P);break}}}if(O.get(Z))for(var ct=0;ct<H.length;ct++){var tt=H[ct];S[tt]&Z&&J(tt,R)}if(O.get(x)||O.get(U))for(var He=1;He<H.length-1;He++){var dt=H[He];if(S[dt]&(x|U)){for(var Qe=0,Ut=0,pn=He-1;pn>=0&&(Qe=S[H[pn]],!!(Qe&l));pn--);for(var bt=He+1;bt<H.length&&(Ut=S[H[bt]],!!(Ut&l));bt++);Qe===Ut&&(S[dt]===x?Qe===E:Qe&(E|P))&&J(dt,Qe)}}if(O.get(E))for(var Rt=0;Rt<H.length;Rt++){var ht=H[Rt];if(S[ht]&E){for(var At=Rt-1;At>=0&&S[H[At]]&(D|l);At--)J(H[At],E);for(Rt++;Rt<H.length&&S[H[Rt]]&(D|l|E);Rt++)S[H[Rt]]!==E&&J(H[Rt],E)}}if(O.get(D)||O.get(x)||O.get(U))for(var Mt=0;Mt<H.length;Mt++){var St=H[Mt];if(S[St]&(D|x|U)){J(St,G);for(var mt=Mt-1;mt>=0&&S[H[mt]]&l;mt--)J(H[mt],G);for(var Un=Mt+1;Un<H.length&&S[H[Un]]&l;Un++)J(H[Un],G)}}if(O.get(E))for(var rn=0,Oo=j;rn<H.length;rn++){var Bo=H[rn],Ps=S[Bo];Ps&E?Oo===b&&J(Bo,b):Ps&a&&(Oo=Ps)}if(O.get(o)){var tr=R|E|P,ko=tr|b,Pr=[];{for(var di=[],pi=0;pi<H.length;pi++)if(S[H[pi]]&o){var nr=ae[H[pi]],zo=void 0;if(v(nr)!==null)if(di.length<63)di.push({char:nr,seqIndex:pi});else break;else if((zo=w(nr))!==null)for(var ir=di.length-1;ir>=0;ir--){var Ds=di[ir].char;if(Ds===zo||Ds===w(C(nr))||v(C(Ds))===nr){Pr.push([di[ir].seqIndex,pi]),di.length=ir;break}}}Pr.sort(function(zt,an){return zt[0]-an[0]})}for(var Us=0;Us<Pr.length;Us++){for(var Go=Pr[Us],Dr=Go[0],Ls=Go[1],Ho=!1,sn=0,Is=Dr+1;Is<Ls;Is++){var Vo=H[Is];if(S[Vo]&ko){Ho=!0;var Wo=S[Vo]&tr?R:b;if(Wo===we){sn=Wo;break}}}if(Ho&&!sn){sn=j;for(var Fs=Dr-1;Fs>=0;Fs--){var Xo=H[Fs];if(S[Xo]&ko){var Yo=S[Xo]&tr?R:b;Yo!==we?sn=Yo:sn=we;break}}}if(sn){if(S[H[Dr]]=S[H[Ls]]=sn,sn!==we){for(var rr=Dr+1;rr<H.length;rr++)if(!(S[H[rr]]&l)){f(ae[H[rr]])&Y&&(S[H[rr]]=sn);break}}if(sn!==we){for(var sr=Ls+1;sr<H.length;sr++)if(!(S[H[sr]]&l)){f(ae[H[sr]])&Y&&(S[H[sr]]=sn);break}}}}for(var Ln=0;Ln<H.length;Ln++)if(S[H[Ln]]&o){for(var qo=Ln,Ns=Ln,Os=j,ar=Ln-1;ar>=0;ar--)if(S[H[ar]]&l)qo=ar;else{Os=S[H[ar]]&tr?R:b;break}for(var jo=Se,or=Ln+1;or<H.length;or++)if(S[H[or]]&(o|l))Ns=or;else{jo=S[H[or]]&tr?R:b;break}for(var Bs=qo;Bs<=Ns;Bs++)S[H[Bs]]=Os===jo?Os:we;Ln=Ns}}}for(var Xt=ce.start;Xt<=ce.end;Xt++){var Bh=Q[Xt],Ur=S[Xt];if(Bh&1?Ur&(b|E|P)&&Q[Xt]++:Ur&R?Q[Xt]++:Ur&(P|E)&&(Q[Xt]+=2),Ur&l&&(Q[Xt]=Xt===0?ce.level:Q[Xt-1]),Xt===ce.end||f(ae[Xt])&(X|N))for(var Lr=Xt;Lr>=0&&f(ae[Lr])&c;Lr--)Q[Lr]=ce.level}}return{levels:Q,paragraphs:fe};function Ko(zt,an){for(var Gt=zt;Gt<ae.length;Gt++){var In=S[Gt];if(In&(R|Z))return 1;if(In&(N|b)||an&&In===re)return 0;if(In&i){var Zo=kh(Gt);Gt=Zo===-1?ae.length:Zo}}return 0}function kh(zt){for(var an=1,Gt=zt+1;Gt<ae.length;Gt++){var In=S[Gt];if(In&N)break;if(In&re){if(--an===0)return Gt}else In&i&&an++}return-1}}var ye="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",ve;function oe(){if(!ve){var ae=_(ye,!0),Ae=ae.map,de=ae.reverseMap;de.forEach(function(S,y){Ae.set(y,S)}),ve=Ae}}function Oe(ae){return oe(),ve.get(ae)||null}function L(ae,Ae,de,S){var y=ae.length;de=Math.max(0,de==null?0:+de),S=Math.min(y-1,S==null?y-1:+S);for(var O=new Map,J=de;J<=S;J++)if(Ae[J]&1){var Q=Oe(ae[J]);Q!==null&&O.set(J,Q)}return O}function Be(ae,Ae,de,S){var y=ae.length;de=Math.max(0,de==null?0:+de),S=Math.min(y-1,S==null?y-1:+S);var O=[];return Ae.paragraphs.forEach(function(J){var Q=Math.max(de,J.start),se=Math.min(S,J.end);if(Q<se){for(var fe=Ae.levels.slice(Q,se+1),ce=se;ce>=Q&&f(ae[ce])&c;ce--)fe[ce]=J.level;for(var ge=J.level,Ue=1/0,he=0;he<fe.length;he++){var Me=fe[he];Me>ge&&(ge=Me),Me<Ue&&(Ue=Me|1)}for(var Ee=ge;Ee>=Ue;Ee--)for(var Te=0;Te<fe.length;Te++)if(fe[Te]>=Ee){for(var le=Te;Te+1<fe.length&&fe[Te+1]>=Ee;)Te++;Te>le&&O.push([le+Q,Te+Q])}}}),O}function be(ae,Ae,de,S){var y=Re(ae,Ae,de,S),O=[].concat(ae);return y.forEach(function(J,Q){O[Q]=(Ae.levels[J]&1?Oe(ae[J]):null)||ae[J]}),O.join("")}function Re(ae,Ae,de,S){for(var y=Be(ae,Ae,de,S),O=[],J=0;J<ae.length;J++)O[J]=J;return y.forEach(function(Q){for(var se=Q[0],fe=Q[1],ce=O.slice(se,fe+1),ge=ce.length;ge--;)O[fe-ge]=ce[ge]}),O}return e.closingToOpeningBracket=w,e.getBidiCharType=f,e.getBidiCharTypeName=d,e.getCanonicalBracket=C,e.getEmbeddingLevels=me,e.getMirroredCharacter=Oe,e.getMirroredCharactersMap=L,e.getReorderSegments=Be,e.getReorderedIndices=Re,e.getReorderedString=be,e.openingToClosingBracket=v,Object.defineProperty(e,"__esModule",{value:!0}),e})({});return s}const Rh=/\bvoid\s+main\s*\(\s*\)\s*{/g;function go(s){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(r,n){let i=Ze[n];return i?go(i):r}return s.replace(e,t)}const wt=[];for(let s=0;s<256;s++)wt[s]=(s<16?"0":"")+s.toString(16);function Kv(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wt[s&255]+wt[s>>8&255]+wt[s>>16&255]+wt[s>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[r&255]+wt[r>>8&255]+wt[r>>16&255]+wt[r>>24&255]).toUpperCase()}const Zn=Object.assign||function(){let s=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let r=arguments[e];if(r)for(let n in r)Object.prototype.hasOwnProperty.call(r,n)&&(s[n]=r[n])}return s},Zv=Date.now(),yc=new WeakMap,Mc=new Map;let Jv=1e10;function _o(s,e){const t=t0(e);let r=yc.get(s);if(r||yc.set(s,r=Object.create(null)),r[t])return new r[t];const n=`_onBeforeCompile${t}`,i=function(c,h){s.onBeforeCompile.call(this,c,h);const u=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let f=Mc[u];if(!f){const d=Qv(this,c,e,t);f=Mc[u]=d}c.vertexShader=f.vertexShader,c.fragmentShader=f.fragmentShader,Zn(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-Zv}}),this[n]&&this[n](c)},a=function(){return o(e.chained?s:s.clone())},o=function(c){const h=Object.create(c,l);return Object.defineProperty(h,"baseMaterial",{value:s}),Object.defineProperty(h,"id",{value:Jv++}),h.uuid=Kv(),h.uniforms=Zn({},c.uniforms,e.uniforms),h.defines=Zn({},c.defines,e.defines),h.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",h.extensions=Zn({},c.extensions,e.extensions),h._listeners=void 0,h},l={constructor:{value:a},isDerivedMaterial:{value:!0},type:{get:()=>s.type,set:c=>{s.type=c}},isDerivedFrom:{writable:!0,configurable:!0,value:function(c){const h=this.baseMaterial;return c===h||h.isDerivedMaterial&&h.isDerivedFrom(c)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return s.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return i},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return s.copy.call(this,c),!s.isShaderMaterial&&!s.isDerivedMaterial&&(Zn(this.extensions,c.extensions),Zn(this.defines,c.defines),Zn(this.uniforms,ji.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new s.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=_o(s.isDerivedMaterial?s.getDepthMaterial():new _h({depthPacking:$c}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=_o(s.isDerivedMaterial?s.getDistanceMaterial():new vh,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:h}=this;c&&c.dispose(),h&&h.dispose(),s.dispose.call(this)}}};return r[t]=a,new a}function Qv(s,{vertexShader:e,fragmentShader:t},r,n){let{vertexDefs:i,vertexMainIntro:a,vertexMainOutro:o,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:h,fragmentMainOutro:u,fragmentColorTransform:f,customRewriter:d,timeUniform:g}=r;if(i=i||"",a=a||"",o=o||"",c=c||"",h=h||"",u=u||"",(l||d)&&(e=go(e)),(f||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=go(t)),d){let _=d({vertexShader:e,fragmentShader:t});e=_.vertexShader,t=_.fragmentShader}if(f){let _=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,m=>(_.push(m),"")),u=`${f}
${_.join(`
`)}
${u}`}if(g){const _=`
uniform float ${g};
`;i=_+i,c=_+c}return l&&(e=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${e}
`,i=`${i}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,a=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${a}
`,e=e.replace(/\b(position|normal|uv)\b/g,(_,m,p,T)=>/\battribute\s+vec[23]\s+$/.test(T.substr(0,p))?m:`troika_${m}_${n}`),s.map&&s.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=Sc(e,n,i,a,o),t=Sc(t,n,c,h,u),{vertexShader:e,fragmentShader:t}}function Sc(s,e,t,r,n){return(r||n||t)&&(s=s.replace(Rh,`
${t}
void troikaOrigMain${e}() {`),s+=`
void main() {
  ${r}
  troikaOrigMain${e}();
  ${n}
}`),s}function $v(s,e){return s==="uniforms"?void 0:typeof e=="function"?e.toString():e}let e0=0;const Ec=new Map;function t0(s){const e=JSON.stringify(s,$v);let t=Ec.get(e);return t==null&&Ec.set(e,t=++e0),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function n0(){return typeof window>"u"&&(self.window=self),(function(s){var e={parse:function(n){var i=e._bin,a=new Uint8Array(n);if(i.readASCII(a,0,4)=="ttcf"){var o=4;i.readUshort(a,o),o+=2,i.readUshort(a,o),o+=2;var l=i.readUint(a,o);o+=4;for(var c=[],h=0;h<l;h++){var u=i.readUint(a,o);o+=4,c.push(e._readFont(a,u))}return c}return[e._readFont(a,0)]},_readFont:function(n,i){var a=e._bin,o=i;a.readFixed(n,i),i+=4;var l=a.readUshort(n,i);i+=2,a.readUshort(n,i),i+=2,a.readUshort(n,i),i+=2,a.readUshort(n,i),i+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],h={_data:n,_offset:o},u={},f=0;f<l;f++){var d=a.readASCII(n,i,4);i+=4,a.readUint(n,i),i+=4;var g=a.readUint(n,i);i+=4;var _=a.readUint(n,i);i+=4,u[d]={offset:g,length:_}}for(f=0;f<c.length;f++){var m=c[f];u[m]&&(h[m.trim()]=e[m.trim()].parse(n,u[m].offset,u[m].length,h))}return h},_tabOffset:function(n,i,a){for(var o=e._bin,l=o.readUshort(n,a+4),c=a+12,h=0;h<l;h++){var u=o.readASCII(n,c,4);c+=4,o.readUint(n,c),c+=4;var f=o.readUint(n,c);if(c+=4,o.readUint(n,c),c+=4,u==i)return f}return 0}};e._bin={readFixed:function(n,i){return(n[i]<<8|n[i+1])+(n[i+2]<<8|n[i+3])/65540},readF2dot14:function(n,i){return e._bin.readShort(n,i)/16384},readInt:function(n,i){return e._bin._view(n).getInt32(i)},readInt8:function(n,i){return e._bin._view(n).getInt8(i)},readShort:function(n,i){return e._bin._view(n).getInt16(i)},readUshort:function(n,i){return e._bin._view(n).getUint16(i)},readUshorts:function(n,i,a){for(var o=[],l=0;l<a;l++)o.push(e._bin.readUshort(n,i+2*l));return o},readUint:function(n,i){return e._bin._view(n).getUint32(i)},readUint64:function(n,i){return 4294967296*e._bin.readUint(n,i)+e._bin.readUint(n,i+4)},readASCII:function(n,i,a){for(var o="",l=0;l<a;l++)o+=String.fromCharCode(n[i+l]);return o},readUnicode:function(n,i,a){for(var o="",l=0;l<a;l++){var c=n[i++]<<8|n[i++];o+=String.fromCharCode(c)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,i,a){var o=e._bin._tdec;return o&&i==0&&a==n.length?o.decode(n):e._bin.readASCII(n,i,a)},readBytes:function(n,i,a){for(var o=[],l=0;l<a;l++)o.push(n[i+l]);return o},readASCIIArray:function(n,i,a){for(var o=[],l=0;l<a;l++)o.push(String.fromCharCode(n[i+l]));return o},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,i,a,o,l){var c=e._bin,h={},u=i;c.readFixed(n,i),i+=4;var f=c.readUshort(n,i);i+=2;var d=c.readUshort(n,i);i+=2;var g=c.readUshort(n,i);return i+=2,h.scriptList=e._lctf.readScriptList(n,u+f),h.featureList=e._lctf.readFeatureList(n,u+d),h.lookupList=e._lctf.readLookupList(n,u+g,l),h},e._lctf.readLookupList=function(n,i,a){var o=e._bin,l=i,c=[],h=o.readUshort(n,i);i+=2;for(var u=0;u<h;u++){var f=o.readUshort(n,i);i+=2;var d=e._lctf.readLookupTable(n,l+f,a);c.push(d)}return c},e._lctf.readLookupTable=function(n,i,a){var o=e._bin,l=i,c={tabs:[]};c.ltype=o.readUshort(n,i),i+=2,c.flag=o.readUshort(n,i),i+=2;var h=o.readUshort(n,i);i+=2;for(var u=c.ltype,f=0;f<h;f++){var d=o.readUshort(n,i);i+=2;var g=a(n,u,l+d,c);c.tabs.push(g)}return c},e._lctf.numOfOnes=function(n){for(var i=0,a=0;a<32;a++)(n>>>a&1)!=0&&i++;return i},e._lctf.readClassDef=function(n,i){var a=e._bin,o=[],l=a.readUshort(n,i);if(i+=2,l==1){var c=a.readUshort(n,i);i+=2;var h=a.readUshort(n,i);i+=2;for(var u=0;u<h;u++)o.push(c+u),o.push(c+u),o.push(a.readUshort(n,i)),i+=2}if(l==2){var f=a.readUshort(n,i);for(i+=2,u=0;u<f;u++)o.push(a.readUshort(n,i)),i+=2,o.push(a.readUshort(n,i)),i+=2,o.push(a.readUshort(n,i)),i+=2}return o},e._lctf.getInterval=function(n,i){for(var a=0;a<n.length;a+=3){var o=n[a],l=n[a+1];if(n[a+2],o<=i&&i<=l)return a}return-1},e._lctf.readCoverage=function(n,i){var a=e._bin,o={};o.fmt=a.readUshort(n,i),i+=2;var l=a.readUshort(n,i);return i+=2,o.fmt==1&&(o.tab=a.readUshorts(n,i,l)),o.fmt==2&&(o.tab=a.readUshorts(n,i,3*l)),o},e._lctf.coverageIndex=function(n,i){var a=n.tab;if(n.fmt==1)return a.indexOf(i);if(n.fmt==2){var o=e._lctf.getInterval(a,i);if(o!=-1)return a[o+2]+(i-a[o])}return-1},e._lctf.readFeatureList=function(n,i){var a=e._bin,o=i,l=[],c=a.readUshort(n,i);i+=2;for(var h=0;h<c;h++){var u=a.readASCII(n,i,4);i+=4;var f=a.readUshort(n,i);i+=2;var d=e._lctf.readFeatureTable(n,o+f);d.tag=u.trim(),l.push(d)}return l},e._lctf.readFeatureTable=function(n,i){var a=e._bin,o=i,l={},c=a.readUshort(n,i);i+=2,c>0&&(l.featureParams=o+c);var h=a.readUshort(n,i);i+=2,l.tab=[];for(var u=0;u<h;u++)l.tab.push(a.readUshort(n,i+2*u));return l},e._lctf.readScriptList=function(n,i){var a=e._bin,o=i,l={},c=a.readUshort(n,i);i+=2;for(var h=0;h<c;h++){var u=a.readASCII(n,i,4);i+=4;var f=a.readUshort(n,i);i+=2,l[u.trim()]=e._lctf.readScriptTable(n,o+f)}return l},e._lctf.readScriptTable=function(n,i){var a=e._bin,o=i,l={},c=a.readUshort(n,i);i+=2,c>0&&(l.default=e._lctf.readLangSysTable(n,o+c));var h=a.readUshort(n,i);i+=2;for(var u=0;u<h;u++){var f=a.readASCII(n,i,4);i+=4;var d=a.readUshort(n,i);i+=2,l[f.trim()]=e._lctf.readLangSysTable(n,o+d)}return l},e._lctf.readLangSysTable=function(n,i){var a=e._bin,o={};a.readUshort(n,i),i+=2,o.reqFeature=a.readUshort(n,i),i+=2;var l=a.readUshort(n,i);return i+=2,o.features=a.readUshorts(n,i,l),o},e.CFF={},e.CFF.parse=function(n,i,a){var o=e._bin;(n=new Uint8Array(n.buffer,i,a))[i=0],n[++i],n[++i],n[++i],i++;var l=[];i=e.CFF.readIndex(n,i,l);for(var c=[],h=0;h<l.length-1;h++)c.push(o.readASCII(n,i+l[h],l[h+1]-l[h]));i+=l[l.length-1];var u=[];i=e.CFF.readIndex(n,i,u);var f=[];for(h=0;h<u.length-1;h++)f.push(e.CFF.readDict(n,i+u[h],i+u[h+1]));i+=u[u.length-1];var d=f[0],g=[];i=e.CFF.readIndex(n,i,g);var _=[];for(h=0;h<g.length-1;h++)_.push(o.readASCII(n,i+g[h],g[h+1]-g[h]));if(i+=g[g.length-1],e.CFF.readSubrs(n,i,d),d.CharStrings){i=d.CharStrings,g=[],i=e.CFF.readIndex(n,i,g);var m=[];for(h=0;h<g.length-1;h++)m.push(o.readBytes(n,i+g[h],g[h+1]-g[h]));d.CharStrings=m}if(d.ROS){i=d.FDArray;var p=[];for(i=e.CFF.readIndex(n,i,p),d.FDArray=[],h=0;h<p.length-1;h++){var T=e.CFF.readDict(n,i+p[h],i+p[h+1]);e.CFF._readFDict(n,T,_),d.FDArray.push(T)}i+=p[p.length-1],i=d.FDSelect,d.FDSelect=[];var M=n[i];if(i++,M!=3)throw M;var v=o.readUshort(n,i);for(i+=2,h=0;h<v+1;h++)d.FDSelect.push(o.readUshort(n,i),n[i+2]),i+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(n,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(n,d.charset,d.CharStrings.length)),e.CFF._readFDict(n,d,_),d},e.CFF._readFDict=function(n,i,a){var o;for(var l in i.Private&&(o=i.Private[1],i.Private=e.CFF.readDict(n,o,o+i.Private[0]),i.Private.Subrs&&e.CFF.readSubrs(n,o+i.Private.Subrs,i.Private)),i)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(i[l]=a[i[l]-426+35])},e.CFF.readSubrs=function(n,i,a){var o=e._bin,l=[];i=e.CFF.readIndex(n,i,l);var c,h=l.length;c=h<1240?107:h<33900?1131:32768,a.Bias=c,a.Subrs=[];for(var u=0;u<l.length-1;u++)a.Subrs.push(o.readBytes(n,i+l[u],l[u+1]-l[u]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,i){for(var a=0;a<n.charset.length;a++)if(n.charset[a]==i)return a;return-1},e.CFF.glyphBySE=function(n,i){return i<0||i>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[i])},e.CFF.readEncoding=function(n,i,a){e._bin;var o=[".notdef"],l=n[i];if(i++,l!=0)throw"error: unknown encoding format: "+l;var c=n[i];i++;for(var h=0;h<c;h++)o.push(n[i+h]);return o},e.CFF.readCharset=function(n,i,a){var o=e._bin,l=[".notdef"],c=n[i];if(i++,c==0)for(var h=0;h<a;h++){var u=o.readUshort(n,i);i+=2,l.push(u)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<a;){u=o.readUshort(n,i),i+=2;var f=0;for(c==1?(f=n[i],i++):(f=o.readUshort(n,i),i+=2),h=0;h<=f;h++)l.push(u),u++}}return l},e.CFF.readIndex=function(n,i,a){var o=e._bin,l=o.readUshort(n,i)+1,c=n[i+=2];if(i++,c==1)for(var h=0;h<l;h++)a.push(n[i+h]);else if(c==2)for(h=0;h<l;h++)a.push(o.readUshort(n,i+2*h));else if(c==3)for(h=0;h<l;h++)a.push(16777215&o.readUint(n,i+3*h-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(i+=l*c)-1},e.CFF.getCharString=function(n,i,a){var o=e._bin,l=n[i],c=n[i+1];n[i+2],n[i+3],n[i+4];var h=1,u=null,f=null;l<=20&&(u=l,h=1),l==12&&(u=100*l+c,h=2),21<=l&&l<=27&&(u=l,h=1),l==28&&(f=o.readShort(n,i+1),h=3),29<=l&&l<=31&&(u=l,h=1),32<=l&&l<=246&&(f=l-139,h=1),247<=l&&l<=250&&(f=256*(l-247)+c+108,h=2),251<=l&&l<=254&&(f=256*-(l-251)-c-108,h=2),l==255&&(f=o.readInt(n,i+1)/65535,h=5),a.val=f??"o"+u,a.size=h},e.CFF.readCharString=function(n,i,a){for(var o=i+a,l=e._bin,c=[];i<o;){var h=n[i],u=n[i+1];n[i+2],n[i+3],n[i+4];var f=1,d=null,g=null;h<=20&&(d=h,f=1),h==12&&(d=100*h+u,f=2),h!=19&&h!=20||(d=h,f=2),21<=h&&h<=27&&(d=h,f=1),h==28&&(g=l.readShort(n,i+1),f=3),29<=h&&h<=31&&(d=h,f=1),32<=h&&h<=246&&(g=h-139,f=1),247<=h&&h<=250&&(g=256*(h-247)+u+108,f=2),251<=h&&h<=254&&(g=256*-(h-251)-u-108,f=2),h==255&&(g=l.readInt(n,i+1)/65535,f=5),c.push(g??"o"+d),i+=f}return c},e.CFF.readDict=function(n,i,a){for(var o=e._bin,l={},c=[];i<a;){var h=n[i],u=n[i+1];n[i+2],n[i+3],n[i+4];var f=1,d=null,g=null;if(h==28&&(g=o.readShort(n,i+1),f=3),h==29&&(g=o.readInt(n,i+1),f=5),32<=h&&h<=246&&(g=h-139,f=1),247<=h&&h<=250&&(g=256*(h-247)+u+108,f=2),251<=h&&h<=254&&(g=256*-(h-251)-u-108,f=2),h==255)throw g=o.readInt(n,i+1)/65535,f=5,"unknown number";if(h==30){var _=[];for(f=1;;){var m=n[i+f];f++;var p=m>>4,T=15&m;if(p!=15&&_.push(p),T!=15&&_.push(T),T==15)break}for(var M="",v=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],w=0;w<_.length;w++)M+=v[_[w]];g=parseFloat(M)}h<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][h],f=1,h==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][u],f=2)),d!=null?(l[d]=c.length==1?c[0]:c,c=[]):c.push(g),i+=f}return l},e.cmap={},e.cmap.parse=function(n,i,a){n=new Uint8Array(n.buffer,i,a),i=0;var o=e._bin,l={};o.readUshort(n,i),i+=2;var c=o.readUshort(n,i);i+=2;var h=[];l.tables=[];for(var u=0;u<c;u++){var f=o.readUshort(n,i);i+=2;var d=o.readUshort(n,i);i+=2;var g=o.readUint(n,i);i+=4;var _="p"+f+"e"+d,m=h.indexOf(g);if(m==-1){var p;m=l.tables.length,h.push(g);var T=o.readUshort(n,g);T==0?p=e.cmap.parse0(n,g):T==4?p=e.cmap.parse4(n,g):T==6?p=e.cmap.parse6(n,g):T==12?p=e.cmap.parse12(n,g):console.debug("unknown format: "+T,f,d,g),l.tables.push(p)}if(l[_]!=null)throw"multiple tables for one platform+encoding";l[_]=m}return l},e.cmap.parse0=function(n,i){var a=e._bin,o={};o.format=a.readUshort(n,i),i+=2;var l=a.readUshort(n,i);i+=2,a.readUshort(n,i),i+=2,o.map=[];for(var c=0;c<l-6;c++)o.map.push(n[i+c]);return o},e.cmap.parse4=function(n,i){var a=e._bin,o=i,l={};l.format=a.readUshort(n,i),i+=2;var c=a.readUshort(n,i);i+=2,a.readUshort(n,i),i+=2;var h=a.readUshort(n,i);i+=2;var u=h/2;l.searchRange=a.readUshort(n,i),i+=2,l.entrySelector=a.readUshort(n,i),i+=2,l.rangeShift=a.readUshort(n,i),i+=2,l.endCount=a.readUshorts(n,i,u),i+=2*u,i+=2,l.startCount=a.readUshorts(n,i,u),i+=2*u,l.idDelta=[];for(var f=0;f<u;f++)l.idDelta.push(a.readShort(n,i)),i+=2;for(l.idRangeOffset=a.readUshorts(n,i,u),i+=2*u,l.glyphIdArray=[];i<o+c;)l.glyphIdArray.push(a.readUshort(n,i)),i+=2;return l},e.cmap.parse6=function(n,i){var a=e._bin,o={};o.format=a.readUshort(n,i),i+=2,a.readUshort(n,i),i+=2,a.readUshort(n,i),i+=2,o.firstCode=a.readUshort(n,i),i+=2;var l=a.readUshort(n,i);i+=2,o.glyphIdArray=[];for(var c=0;c<l;c++)o.glyphIdArray.push(a.readUshort(n,i)),i+=2;return o},e.cmap.parse12=function(n,i){var a=e._bin,o={};o.format=a.readUshort(n,i),i+=2,i+=2,a.readUint(n,i),i+=4,a.readUint(n,i),i+=4;var l=a.readUint(n,i);i+=4,o.groups=[];for(var c=0;c<l;c++){var h=i+12*c,u=a.readUint(n,h+0),f=a.readUint(n,h+4),d=a.readUint(n,h+8);o.groups.push([u,f,d])}return o},e.glyf={},e.glyf.parse=function(n,i,a,o){for(var l=[],c=0;c<o.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(n,i){var a=e._bin,o=n._data,l=e._tabOffset(o,"glyf",n._offset)+n.loca[i];if(n.loca[i]==n.loca[i+1])return null;var c={};if(c.noc=a.readShort(o,l),l+=2,c.xMin=a.readShort(o,l),l+=2,c.yMin=a.readShort(o,l),l+=2,c.xMax=a.readShort(o,l),l+=2,c.yMax=a.readShort(o,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var h=0;h<c.noc;h++)c.endPts.push(a.readUshort(o,l)),l+=2;var u=a.readUshort(o,l);if(l+=2,o.length-l<u)return null;c.instructions=a.readBytes(o,l,u),l+=u;var f=c.endPts[c.noc-1]+1;for(c.flags=[],h=0;h<f;h++){var d=o[l];if(l++,c.flags.push(d),(8&d)!=0){var g=o[l];l++;for(var _=0;_<g;_++)c.flags.push(d),h++}}for(c.xs=[],h=0;h<f;h++){var m=(2&c.flags[h])!=0,p=(16&c.flags[h])!=0;m?(c.xs.push(p?o[l]:-o[l]),l++):p?c.xs.push(0):(c.xs.push(a.readShort(o,l)),l+=2)}for(c.ys=[],h=0;h<f;h++)m=(4&c.flags[h])!=0,p=(32&c.flags[h])!=0,m?(c.ys.push(p?o[l]:-o[l]),l++):p?c.ys.push(0):(c.ys.push(a.readShort(o,l)),l+=2);var T=0,M=0;for(h=0;h<f;h++)T+=c.xs[h],M+=c.ys[h],c.xs[h]=T,c.ys[h]=M}else{var v;c.parts=[];do{v=a.readUshort(o,l),l+=2;var w={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(w),w.glyphIndex=a.readUshort(o,l),l+=2,1&v){var C=a.readShort(o,l);l+=2;var b=a.readShort(o,l);l+=2}else C=a.readInt8(o,l),l++,b=a.readInt8(o,l),l++;2&v?(w.m.tx=C,w.m.ty=b):(w.p1=C,w.p2=b),8&v?(w.m.a=w.m.d=a.readF2dot14(o,l),l+=2):64&v?(w.m.a=a.readF2dot14(o,l),l+=2,w.m.d=a.readF2dot14(o,l),l+=2):128&v&&(w.m.a=a.readF2dot14(o,l),l+=2,w.m.b=a.readF2dot14(o,l),l+=2,w.m.c=a.readF2dot14(o,l),l+=2,w.m.d=a.readF2dot14(o,l),l+=2)}while(32&v);if(256&v){var R=a.readUshort(o,l);for(l+=2,c.instr=[],h=0;h<R;h++)c.instr.push(o[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(n,i,a,o){var l=i;i+=4;var c=e._bin.readUshort(n,i);return{glyphClassDef:c===0?null:e._lctf.readClassDef(n,l+c)}},e.GPOS={},e.GPOS.parse=function(n,i,a,o){return e._lctf.parse(n,i,a,o,e.GPOS.subt)},e.GPOS.subt=function(n,i,a,o){var l=e._bin,c=a,h={};if(h.fmt=l.readUshort(n,a),a+=2,i==1||i==2||i==3||i==7||i==8&&h.fmt<=2){var u=l.readUshort(n,a);a+=2,h.coverage=e._lctf.readCoverage(n,u+c)}if(i==1&&h.fmt==1){var f=l.readUshort(n,a);a+=2,f!=0&&(h.pos=e.GPOS.readValueRecord(n,a,f))}else if(i==2&&h.fmt>=1&&h.fmt<=2){f=l.readUshort(n,a),a+=2;var d=l.readUshort(n,a);a+=2;var g=e._lctf.numOfOnes(f),_=e._lctf.numOfOnes(d);if(h.fmt==1){h.pairsets=[];var m=l.readUshort(n,a);a+=2;for(var p=0;p<m;p++){var T=c+l.readUshort(n,a);a+=2;var M=l.readUshort(n,T);T+=2;for(var v=[],w=0;w<M;w++){var C=l.readUshort(n,T);T+=2,f!=0&&(P=e.GPOS.readValueRecord(n,T,f),T+=2*g),d!=0&&(U=e.GPOS.readValueRecord(n,T,d),T+=2*_),v.push({gid2:C,val1:P,val2:U})}h.pairsets.push(v)}}if(h.fmt==2){var b=l.readUshort(n,a);a+=2;var R=l.readUshort(n,a);a+=2;var E=l.readUshort(n,a);a+=2;var x=l.readUshort(n,a);for(a+=2,h.classDef1=e._lctf.readClassDef(n,c+b),h.classDef2=e._lctf.readClassDef(n,c+R),h.matrix=[],p=0;p<E;p++){var D=[];for(w=0;w<x;w++){var P=null,U=null;f!=0&&(P=e.GPOS.readValueRecord(n,a,f),a+=2*g),d!=0&&(U=e.GPOS.readValueRecord(n,a,d),a+=2*_),D.push({val1:P,val2:U})}h.matrix.push(D)}}}else if(i==4&&h.fmt==1)h.markCoverage=e._lctf.readCoverage(n,l.readUshort(n,a)+c),h.baseCoverage=e._lctf.readCoverage(n,l.readUshort(n,a+2)+c),h.markClassCount=l.readUshort(n,a+4),h.markArray=e.GPOS.readMarkArray(n,l.readUshort(n,a+6)+c),h.baseArray=e.GPOS.readBaseArray(n,l.readUshort(n,a+8)+c,h.markClassCount);else if(i==6&&h.fmt==1)h.mark1Coverage=e._lctf.readCoverage(n,l.readUshort(n,a)+c),h.mark2Coverage=e._lctf.readCoverage(n,l.readUshort(n,a+2)+c),h.markClassCount=l.readUshort(n,a+4),h.mark1Array=e.GPOS.readMarkArray(n,l.readUshort(n,a+6)+c),h.mark2Array=e.GPOS.readBaseArray(n,l.readUshort(n,a+8)+c,h.markClassCount);else{if(i==9&&h.fmt==1){var N=l.readUshort(n,a);a+=2;var X=l.readUint(n,a);if(a+=4,o.ltype==9)o.ltype=N;else if(o.ltype!=N)throw"invalid extension substitution";return e.GPOS.subt(n,o.ltype,c+X)}console.debug("unsupported GPOS table LookupType",i,"format",h.fmt)}return h},e.GPOS.readValueRecord=function(n,i,a){var o=e._bin,l=[];return l.push(1&a?o.readShort(n,i):0),i+=1&a?2:0,l.push(2&a?o.readShort(n,i):0),i+=2&a?2:0,l.push(4&a?o.readShort(n,i):0),i+=4&a?2:0,l.push(8&a?o.readShort(n,i):0),i+=8&a?2:0,l},e.GPOS.readBaseArray=function(n,i,a){var o=e._bin,l=[],c=i,h=o.readUshort(n,i);i+=2;for(var u=0;u<h;u++){for(var f=[],d=0;d<a;d++)f.push(e.GPOS.readAnchorRecord(n,c+o.readUshort(n,i))),i+=2;l.push(f)}return l},e.GPOS.readMarkArray=function(n,i){var a=e._bin,o=[],l=i,c=a.readUshort(n,i);i+=2;for(var h=0;h<c;h++){var u=e.GPOS.readAnchorRecord(n,a.readUshort(n,i+2)+l);u.markClass=a.readUshort(n,i),o.push(u),i+=4}return o},e.GPOS.readAnchorRecord=function(n,i){var a=e._bin,o={};return o.fmt=a.readUshort(n,i),o.x=a.readShort(n,i+2),o.y=a.readShort(n,i+4),o},e.GSUB={},e.GSUB.parse=function(n,i,a,o){return e._lctf.parse(n,i,a,o,e.GSUB.subt)},e.GSUB.subt=function(n,i,a,o){var l=e._bin,c=a,h={};if(h.fmt=l.readUshort(n,a),a+=2,i!=1&&i!=2&&i!=4&&i!=5&&i!=6)return null;if(i==1||i==2||i==4||i==5&&h.fmt<=2||i==6&&h.fmt<=2){var u=l.readUshort(n,a);a+=2,h.coverage=e._lctf.readCoverage(n,c+u)}if(i==1&&h.fmt>=1&&h.fmt<=2){if(h.fmt==1)h.delta=l.readShort(n,a),a+=2;else if(h.fmt==2){var f=l.readUshort(n,a);a+=2,h.newg=l.readUshorts(n,a,f),a+=2*h.newg.length}}else if(i==2&&h.fmt==1){f=l.readUshort(n,a),a+=2,h.seqs=[];for(var d=0;d<f;d++){var g=l.readUshort(n,a)+c;a+=2;var _=l.readUshort(n,g);h.seqs.push(l.readUshorts(n,g+2,_))}}else if(i==4)for(h.vals=[],f=l.readUshort(n,a),a+=2,d=0;d<f;d++){var m=l.readUshort(n,a);a+=2,h.vals.push(e.GSUB.readLigatureSet(n,c+m))}else if(i==5&&h.fmt==2){if(h.fmt==2){var p=l.readUshort(n,a);a+=2,h.cDef=e._lctf.readClassDef(n,c+p),h.scset=[];var T=l.readUshort(n,a);for(a+=2,d=0;d<T;d++){var M=l.readUshort(n,a);a+=2,h.scset.push(M==0?null:e.GSUB.readSubClassSet(n,c+M))}}}else if(i==6&&h.fmt==3){if(h.fmt==3){for(d=0;d<3;d++){f=l.readUshort(n,a),a+=2;for(var v=[],w=0;w<f;w++)v.push(e._lctf.readCoverage(n,c+l.readUshort(n,a+2*w)));a+=2*f,d==0&&(h.backCvg=v),d==1&&(h.inptCvg=v),d==2&&(h.ahedCvg=v)}f=l.readUshort(n,a),a+=2,h.lookupRec=e.GSUB.readSubstLookupRecords(n,a,f)}}else{if(i==7&&h.fmt==1){var C=l.readUshort(n,a);a+=2;var b=l.readUint(n,a);if(a+=4,o.ltype==9)o.ltype=C;else if(o.ltype!=C)throw"invalid extension substitution";return e.GSUB.subt(n,o.ltype,c+b)}console.debug("unsupported GSUB table LookupType",i,"format",h.fmt)}return h},e.GSUB.readSubClassSet=function(n,i){var a=e._bin.readUshort,o=i,l=[],c=a(n,i);i+=2;for(var h=0;h<c;h++){var u=a(n,i);i+=2,l.push(e.GSUB.readSubClassRule(n,o+u))}return l},e.GSUB.readSubClassRule=function(n,i){var a=e._bin.readUshort,o={},l=a(n,i),c=a(n,i+=2);i+=2,o.input=[];for(var h=0;h<l-1;h++)o.input.push(a(n,i)),i+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(n,i,c),o},e.GSUB.readSubstLookupRecords=function(n,i,a){for(var o=e._bin.readUshort,l=[],c=0;c<a;c++)l.push(o(n,i),o(n,i+2)),i+=4;return l},e.GSUB.readChainSubClassSet=function(n,i){var a=e._bin,o=i,l=[],c=a.readUshort(n,i);i+=2;for(var h=0;h<c;h++){var u=a.readUshort(n,i);i+=2,l.push(e.GSUB.readChainSubClassRule(n,o+u))}return l},e.GSUB.readChainSubClassRule=function(n,i){for(var a=e._bin,o={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var h=a.readUshort(n,i);i+=2,c==1&&h--,o[l[c]]=a.readUshorts(n,i,h),i+=2*o[l[c]].length}return h=a.readUshort(n,i),i+=2,o.subst=a.readUshorts(n,i,2*h),i+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(n,i){var a=e._bin,o=i,l=[],c=a.readUshort(n,i);i+=2;for(var h=0;h<c;h++){var u=a.readUshort(n,i);i+=2,l.push(e.GSUB.readLigature(n,o+u))}return l},e.GSUB.readLigature=function(n,i){var a=e._bin,o={chain:[]};o.nglyph=a.readUshort(n,i),i+=2;var l=a.readUshort(n,i);i+=2;for(var c=0;c<l-1;c++)o.chain.push(a.readUshort(n,i)),i+=2;return o},e.head={},e.head.parse=function(n,i,a){var o=e._bin,l={};return o.readFixed(n,i),i+=4,l.fontRevision=o.readFixed(n,i),i+=4,o.readUint(n,i),i+=4,o.readUint(n,i),i+=4,l.flags=o.readUshort(n,i),i+=2,l.unitsPerEm=o.readUshort(n,i),i+=2,l.created=o.readUint64(n,i),i+=8,l.modified=o.readUint64(n,i),i+=8,l.xMin=o.readShort(n,i),i+=2,l.yMin=o.readShort(n,i),i+=2,l.xMax=o.readShort(n,i),i+=2,l.yMax=o.readShort(n,i),i+=2,l.macStyle=o.readUshort(n,i),i+=2,l.lowestRecPPEM=o.readUshort(n,i),i+=2,l.fontDirectionHint=o.readShort(n,i),i+=2,l.indexToLocFormat=o.readShort(n,i),i+=2,l.glyphDataFormat=o.readShort(n,i),i+=2,l},e.hhea={},e.hhea.parse=function(n,i,a){var o=e._bin,l={};return o.readFixed(n,i),i+=4,l.ascender=o.readShort(n,i),i+=2,l.descender=o.readShort(n,i),i+=2,l.lineGap=o.readShort(n,i),i+=2,l.advanceWidthMax=o.readUshort(n,i),i+=2,l.minLeftSideBearing=o.readShort(n,i),i+=2,l.minRightSideBearing=o.readShort(n,i),i+=2,l.xMaxExtent=o.readShort(n,i),i+=2,l.caretSlopeRise=o.readShort(n,i),i+=2,l.caretSlopeRun=o.readShort(n,i),i+=2,l.caretOffset=o.readShort(n,i),i+=2,i+=8,l.metricDataFormat=o.readShort(n,i),i+=2,l.numberOfHMetrics=o.readUshort(n,i),i+=2,l},e.hmtx={},e.hmtx.parse=function(n,i,a,o){for(var l=e._bin,c={aWidth:[],lsBearing:[]},h=0,u=0,f=0;f<o.maxp.numGlyphs;f++)f<o.hhea.numberOfHMetrics&&(h=l.readUshort(n,i),i+=2,u=l.readShort(n,i),i+=2),c.aWidth.push(h),c.lsBearing.push(u);return c},e.kern={},e.kern.parse=function(n,i,a,o){var l=e._bin,c=l.readUshort(n,i);if(i+=2,c==1)return e.kern.parseV1(n,i-2,a,o);var h=l.readUshort(n,i);i+=2;for(var u={glyph1:[],rval:[]},f=0;f<h;f++){i+=2,a=l.readUshort(n,i),i+=2;var d=l.readUshort(n,i);i+=2;var g=d>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;i=e.kern.readFormat0(n,i,u)}return u},e.kern.parseV1=function(n,i,a,o){var l=e._bin;l.readFixed(n,i),i+=4;var c=l.readUint(n,i);i+=4;for(var h={glyph1:[],rval:[]},u=0;u<c;u++){l.readUint(n,i),i+=4;var f=l.readUshort(n,i);i+=2,l.readUshort(n,i),i+=2;var d=f>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;i=e.kern.readFormat0(n,i,h)}return h},e.kern.readFormat0=function(n,i,a){var o=e._bin,l=-1,c=o.readUshort(n,i);i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2;for(var h=0;h<c;h++){var u=o.readUshort(n,i);i+=2;var f=o.readUshort(n,i);i+=2;var d=o.readShort(n,i);i+=2,u!=l&&(a.glyph1.push(u),a.rval.push({glyph2:[],vals:[]}));var g=a.rval[a.rval.length-1];g.glyph2.push(f),g.vals.push(d),l=u}return i},e.loca={},e.loca.parse=function(n,i,a,o){var l=e._bin,c=[],h=o.head.indexToLocFormat,u=o.maxp.numGlyphs+1;if(h==0)for(var f=0;f<u;f++)c.push(l.readUshort(n,i+(f<<1))<<1);if(h==1)for(f=0;f<u;f++)c.push(l.readUint(n,i+(f<<2)));return c},e.maxp={},e.maxp.parse=function(n,i,a){var o=e._bin,l={},c=o.readUint(n,i);return i+=4,l.numGlyphs=o.readUshort(n,i),i+=2,c==65536&&(l.maxPoints=o.readUshort(n,i),i+=2,l.maxContours=o.readUshort(n,i),i+=2,l.maxCompositePoints=o.readUshort(n,i),i+=2,l.maxCompositeContours=o.readUshort(n,i),i+=2,l.maxZones=o.readUshort(n,i),i+=2,l.maxTwilightPoints=o.readUshort(n,i),i+=2,l.maxStorage=o.readUshort(n,i),i+=2,l.maxFunctionDefs=o.readUshort(n,i),i+=2,l.maxInstructionDefs=o.readUshort(n,i),i+=2,l.maxStackElements=o.readUshort(n,i),i+=2,l.maxSizeOfInstructions=o.readUshort(n,i),i+=2,l.maxComponentElements=o.readUshort(n,i),i+=2,l.maxComponentDepth=o.readUshort(n,i),i+=2),l},e.name={},e.name.parse=function(n,i,a){var o=e._bin,l={};o.readUshort(n,i),i+=2;var c=o.readUshort(n,i);i+=2,o.readUshort(n,i);for(var h,u=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],f=i+=2,d=0;d<c;d++){var g=o.readUshort(n,i);i+=2;var _=o.readUshort(n,i);i+=2;var m=o.readUshort(n,i);i+=2;var p=o.readUshort(n,i);i+=2;var T=o.readUshort(n,i);i+=2;var M=o.readUshort(n,i);i+=2;var v,w=u[p],C=f+12*c+M;if(g==0)v=o.readUnicode(n,C,T/2);else if(g==3&&_==0)v=o.readUnicode(n,C,T/2);else if(_==0)v=o.readASCII(n,C,T);else if(_==1)v=o.readUnicode(n,C,T/2);else if(_==3)v=o.readUnicode(n,C,T/2);else{if(g!=1)throw"unknown encoding "+_+", platformID: "+g;v=o.readASCII(n,C,T),console.debug("reading unknown MAC encoding "+_+" as ASCII")}var b="p"+g+","+m.toString(16);l[b]==null&&(l[b]={}),l[b][w!==void 0?w:p]=v,l[b]._lang=m}for(var R in l)if(l[R].postScriptName!=null&&l[R]._lang==1033)return l[R];for(var R in l)if(l[R].postScriptName!=null&&l[R]._lang==0)return l[R];for(var R in l)if(l[R].postScriptName!=null&&l[R]._lang==3084)return l[R];for(var R in l)if(l[R].postScriptName!=null)return l[R];for(var R in l){h=R;break}return console.debug("returning name table with languageID "+l[h]._lang),l[h]},e["OS/2"]={},e["OS/2"].parse=function(n,i,a){var o=e._bin.readUshort(n,i);i+=2;var l={};if(o==0)e["OS/2"].version0(n,i,l);else if(o==1)e["OS/2"].version1(n,i,l);else if(o==2||o==3||o==4)e["OS/2"].version2(n,i,l);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(n,i,l)}return l},e["OS/2"].version0=function(n,i,a){var o=e._bin;return a.xAvgCharWidth=o.readShort(n,i),i+=2,a.usWeightClass=o.readUshort(n,i),i+=2,a.usWidthClass=o.readUshort(n,i),i+=2,a.fsType=o.readUshort(n,i),i+=2,a.ySubscriptXSize=o.readShort(n,i),i+=2,a.ySubscriptYSize=o.readShort(n,i),i+=2,a.ySubscriptXOffset=o.readShort(n,i),i+=2,a.ySubscriptYOffset=o.readShort(n,i),i+=2,a.ySuperscriptXSize=o.readShort(n,i),i+=2,a.ySuperscriptYSize=o.readShort(n,i),i+=2,a.ySuperscriptXOffset=o.readShort(n,i),i+=2,a.ySuperscriptYOffset=o.readShort(n,i),i+=2,a.yStrikeoutSize=o.readShort(n,i),i+=2,a.yStrikeoutPosition=o.readShort(n,i),i+=2,a.sFamilyClass=o.readShort(n,i),i+=2,a.panose=o.readBytes(n,i,10),i+=10,a.ulUnicodeRange1=o.readUint(n,i),i+=4,a.ulUnicodeRange2=o.readUint(n,i),i+=4,a.ulUnicodeRange3=o.readUint(n,i),i+=4,a.ulUnicodeRange4=o.readUint(n,i),i+=4,a.achVendID=[o.readInt8(n,i),o.readInt8(n,i+1),o.readInt8(n,i+2),o.readInt8(n,i+3)],i+=4,a.fsSelection=o.readUshort(n,i),i+=2,a.usFirstCharIndex=o.readUshort(n,i),i+=2,a.usLastCharIndex=o.readUshort(n,i),i+=2,a.sTypoAscender=o.readShort(n,i),i+=2,a.sTypoDescender=o.readShort(n,i),i+=2,a.sTypoLineGap=o.readShort(n,i),i+=2,a.usWinAscent=o.readUshort(n,i),i+=2,a.usWinDescent=o.readUshort(n,i),i+=2},e["OS/2"].version1=function(n,i,a){var o=e._bin;return i=e["OS/2"].version0(n,i,a),a.ulCodePageRange1=o.readUint(n,i),i+=4,a.ulCodePageRange2=o.readUint(n,i),i+=4},e["OS/2"].version2=function(n,i,a){var o=e._bin;return i=e["OS/2"].version1(n,i,a),a.sxHeight=o.readShort(n,i),i+=2,a.sCapHeight=o.readShort(n,i),i+=2,a.usDefault=o.readUshort(n,i),i+=2,a.usBreak=o.readUshort(n,i),i+=2,a.usMaxContext=o.readUshort(n,i),i+=2},e["OS/2"].version5=function(n,i,a){var o=e._bin;return i=e["OS/2"].version2(n,i,a),a.usLowerOpticalPointSize=o.readUshort(n,i),i+=2,a.usUpperOpticalPointSize=o.readUshort(n,i),i+=2},e.post={},e.post.parse=function(n,i,a){var o=e._bin,l={};return l.version=o.readFixed(n,i),i+=4,l.italicAngle=o.readFixed(n,i),i+=4,l.underlinePosition=o.readShort(n,i),i+=2,l.underlineThickness=o.readShort(n,i),i+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,i){var a=n.cmap,o=-1;if(a.p0e4!=null?o=a.p0e4:a.p3e1!=null?o=a.p3e1:a.p1e0!=null?o=a.p1e0:a.p0e3!=null&&(o=a.p0e3),o==-1)throw"no familiar platform and encoding!";var l=a.tables[o];if(l.format==0)return i>=l.map.length?0:l.map[i];if(l.format==4){for(var c=-1,h=0;h<l.endCount.length;h++)if(i<=l.endCount[h]){c=h;break}return c==-1||l.startCount[c]>i?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[i-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:i+l.idDelta[c])}if(l.format==12){if(i>l.groups[l.groups.length-1][1])return 0;for(h=0;h<l.groups.length;h++){var u=l.groups[h];if(u[0]<=i&&i<=u[1])return u[2]+(i-u[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(n,i){var a={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[i]){var o=n.SVG.entries[i];return o==null?a:(typeof o=="string"&&(o=e.SVG.toPath(o),n.SVG.entries[i]=o),o)}if(n.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,h=n.CFF.Private;if(c.ROS){for(var u=0;c.FDSelect[u+2]<=i;)u+=2;h=c.FDArray[c.FDSelect[u+1]].Private}e.U._drawCFF(n.CFF.CharStrings[i],l,c,h,a)}else n.glyf&&e.U._drawGlyf(i,n,a);return a},e.U._drawGlyf=function(n,i,a){var o=i.glyf[n];o==null&&(o=i.glyf[n]=e.glyf._parseGlyf(i,n)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,a):e.U._compoGlyph(o,i,a))},e.U._simpleGlyph=function(n,i){for(var a=0;a<n.noc;a++){for(var o=a==0?0:n.endPts[a-1]+1,l=n.endPts[a],c=o;c<=l;c++){var h=c==o?l:c-1,u=c==l?o:c+1,f=1&n.flags[c],d=1&n.flags[h],g=1&n.flags[u],_=n.xs[c],m=n.ys[c];if(c==o)if(f){if(!d){e.U.P.moveTo(i,_,m);continue}e.U.P.moveTo(i,n.xs[h],n.ys[h])}else d?e.U.P.moveTo(i,n.xs[h],n.ys[h]):e.U.P.moveTo(i,(n.xs[h]+_)/2,(n.ys[h]+m)/2);f?d&&e.U.P.lineTo(i,_,m):g?e.U.P.qcurveTo(i,_,m,n.xs[u],n.ys[u]):e.U.P.qcurveTo(i,_,m,(_+n.xs[u])/2,(m+n.ys[u])/2)}e.U.P.closePath(i)}},e.U._compoGlyph=function(n,i,a){for(var o=0;o<n.parts.length;o++){var l={cmds:[],crds:[]},c=n.parts[o];e.U._drawGlyf(c.glyphIndex,i,l);for(var h=c.m,u=0;u<l.crds.length;u+=2){var f=l.crds[u],d=l.crds[u+1];a.crds.push(f*h.a+d*h.b+h.tx),a.crds.push(f*h.c+d*h.d+h.ty)}for(u=0;u<l.cmds.length;u++)a.cmds.push(l.cmds[u])}},e.U._getGlyphClass=function(n,i){var a=e._lctf.getInterval(i,n);return a==-1?0:i[a+2]},e.U._applySubs=function(n,i,a,o){for(var l=n.length-i-1,c=0;c<a.tabs.length;c++)if(a.tabs[c]!=null){var h,u=a.tabs[c];if(!u.coverage||(h=e._lctf.coverageIndex(u.coverage,n[i]))!=-1){if(a.ltype==1)n[i],u.fmt==1?n[i]=n[i]+u.delta:n[i]=u.newg[h];else if(a.ltype==4)for(var f=u.vals[h],d=0;d<f.length;d++){var g=f[d],_=g.chain.length;if(!(_>l)){for(var m=!0,p=0,T=0;T<_;T++){for(;n[i+p+(1+T)]==-1;)p++;g.chain[T]!=n[i+p+(1+T)]&&(m=!1)}if(m){for(n[i]=g.nglyph,T=0;T<_+p;T++)n[i+T+1]=-1;break}}}else if(a.ltype==5&&u.fmt==2)for(var M=e._lctf.getInterval(u.cDef,n[i]),v=u.cDef[M+2],w=u.scset[v],C=0;C<w.length;C++){var b=w[C],R=b.input;if(!(R.length>l)){for(m=!0,T=0;T<R.length;T++){var E=e._lctf.getInterval(u.cDef,n[i+1+T]);if(M==-1&&u.cDef[E+2]!=R[T]){m=!1;break}}if(m){var x=b.substLookupRecords;for(d=0;d<x.length;d+=2)x[d],x[d+1]}}}else if(a.ltype==6&&u.fmt==3){if(!e.U._glsCovered(n,u.backCvg,i-u.backCvg.length)||!e.U._glsCovered(n,u.inptCvg,i)||!e.U._glsCovered(n,u.ahedCvg,i+u.inptCvg.length))continue;var D=u.lookupRec;for(C=0;C<D.length;C+=2){M=D[C];var P=o[D[C+1]];e.U._applySubs(n,i+M,P,o)}}}}},e.U._glsCovered=function(n,i,a){for(var o=0;o<i.length;o++)if(e._lctf.coverageIndex(i[o],n[a+o])==-1)return!1;return!0},e.U.glyphsToPath=function(n,i,a){for(var o={cmds:[],crds:[]},l=0,c=0;c<i.length;c++){var h=i[c];if(h!=-1){for(var u=c<i.length-1&&i[c+1]!=-1?i[c+1]:0,f=e.U.glyphToPath(n,h),d=0;d<f.crds.length;d+=2)o.crds.push(f.crds[d]+l),o.crds.push(f.crds[d+1]);for(a&&o.cmds.push(a),d=0;d<f.cmds.length;d++)o.cmds.push(f.cmds[d]);a&&o.cmds.push("X"),l+=n.hmtx.aWidth[h],c<i.length-1&&(l+=e.U.getPairAdjustment(n,h,u))}}return o},e.U.P={},e.U.P.moveTo=function(n,i,a){n.cmds.push("M"),n.crds.push(i,a)},e.U.P.lineTo=function(n,i,a){n.cmds.push("L"),n.crds.push(i,a)},e.U.P.curveTo=function(n,i,a,o,l,c,h){n.cmds.push("C"),n.crds.push(i,a,o,l,c,h)},e.U.P.qcurveTo=function(n,i,a,o,l){n.cmds.push("Q"),n.crds.push(i,a,o,l)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,i,a,o,l){for(var c=i.stack,h=i.nStems,u=i.haveWidth,f=i.width,d=i.open,g=0,_=i.x,m=i.y,p=0,T=0,M=0,v=0,w=0,C=0,b=0,R=0,E=0,x=0,D={val:0,size:0};g<n.length;){e.CFF.getCharString(n,g,D);var P=D.val;if(g+=D.size,P=="o1"||P=="o18")c.length%2!=0&&!u&&(f=c.shift()+o.nominalWidthX),h+=c.length>>1,c.length=0,u=!0;else if(P=="o3"||P=="o23")c.length%2!=0&&!u&&(f=c.shift()+o.nominalWidthX),h+=c.length>>1,c.length=0,u=!0;else if(P=="o4")c.length>1&&!u&&(f=c.shift()+o.nominalWidthX,u=!0),d&&e.U.P.closePath(l),m+=c.pop(),e.U.P.moveTo(l,_,m),d=!0;else if(P=="o5")for(;c.length>0;)_+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,_,m);else if(P=="o6"||P=="o7")for(var U=c.length,N=P=="o6",X=0;X<U;X++){var G=c.shift();N?_+=G:m+=G,N=!N,e.U.P.lineTo(l,_,m)}else if(P=="o8"||P=="o24"){U=c.length;for(var $=0;$+6<=U;)p=_+c.shift(),T=m+c.shift(),M=p+c.shift(),v=T+c.shift(),_=M+c.shift(),m=v+c.shift(),e.U.P.curveTo(l,p,T,M,v,_,m),$+=6;P=="o24"&&(_+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,_,m))}else{if(P=="o11")break;if(P=="o1234"||P=="o1235"||P=="o1236"||P=="o1237")P=="o1234"&&(T=m,M=(p=_+c.shift())+c.shift(),x=v=T+c.shift(),C=v,R=m,_=(b=(w=(E=M+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,p,T,M,v,E,x),e.U.P.curveTo(l,w,C,b,R,_,m)),P=="o1235"&&(p=_+c.shift(),T=m+c.shift(),M=p+c.shift(),v=T+c.shift(),E=M+c.shift(),x=v+c.shift(),w=E+c.shift(),C=x+c.shift(),b=w+c.shift(),R=C+c.shift(),_=b+c.shift(),m=R+c.shift(),c.shift(),e.U.P.curveTo(l,p,T,M,v,E,x),e.U.P.curveTo(l,w,C,b,R,_,m)),P=="o1236"&&(p=_+c.shift(),T=m+c.shift(),M=p+c.shift(),x=v=T+c.shift(),C=v,b=(w=(E=M+c.shift())+c.shift())+c.shift(),R=C+c.shift(),_=b+c.shift(),e.U.P.curveTo(l,p,T,M,v,E,x),e.U.P.curveTo(l,w,C,b,R,_,m)),P=="o1237"&&(p=_+c.shift(),T=m+c.shift(),M=p+c.shift(),v=T+c.shift(),E=M+c.shift(),x=v+c.shift(),w=E+c.shift(),C=x+c.shift(),b=w+c.shift(),R=C+c.shift(),Math.abs(b-_)>Math.abs(R-m)?_=b+c.shift():m=R+c.shift(),e.U.P.curveTo(l,p,T,M,v,E,x),e.U.P.curveTo(l,w,C,b,R,_,m));else if(P=="o14"){if(c.length>0&&!u&&(f=c.shift()+a.nominalWidthX,u=!0),c.length==4){var Y=c.shift(),Z=c.shift(),K=c.shift(),I=c.shift(),V=e.CFF.glyphBySE(a,K),ne=e.CFF.glyphBySE(a,I);e.U._drawCFF(a.CharStrings[V],i,a,o,l),i.x=Y,i.y=Z,e.U._drawCFF(a.CharStrings[ne],i,a,o,l)}d&&(e.U.P.closePath(l),d=!1)}else if(P=="o19"||P=="o20")c.length%2!=0&&!u&&(f=c.shift()+o.nominalWidthX),h+=c.length>>1,c.length=0,u=!0,g+=h+7>>3;else if(P=="o21")c.length>2&&!u&&(f=c.shift()+o.nominalWidthX,u=!0),m+=c.pop(),_+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,_,m),d=!0;else if(P=="o22")c.length>1&&!u&&(f=c.shift()+o.nominalWidthX,u=!0),_+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,_,m),d=!0;else if(P=="o25"){for(;c.length>6;)_+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,_,m);p=_+c.shift(),T=m+c.shift(),M=p+c.shift(),v=T+c.shift(),_=M+c.shift(),m=v+c.shift(),e.U.P.curveTo(l,p,T,M,v,_,m)}else if(P=="o26")for(c.length%2&&(_+=c.shift());c.length>0;)p=_,T=m+c.shift(),_=M=p+c.shift(),m=(v=T+c.shift())+c.shift(),e.U.P.curveTo(l,p,T,M,v,_,m);else if(P=="o27")for(c.length%2&&(m+=c.shift());c.length>0;)T=m,M=(p=_+c.shift())+c.shift(),v=T+c.shift(),_=M+c.shift(),m=v,e.U.P.curveTo(l,p,T,M,v,_,m);else if(P=="o10"||P=="o29"){var F=P=="o10"?o:a;if(c.length==0)console.debug("error: empty stack");else{var k=c.pop(),te=F.Subrs[k+F.Bias];i.x=_,i.y=m,i.nStems=h,i.haveWidth=u,i.width=f,i.open=d,e.U._drawCFF(te,i,a,o,l),_=i.x,m=i.y,h=i.nStems,u=i.haveWidth,f=i.width,d=i.open}}else if(P=="o30"||P=="o31"){var W=c.length,re=($=0,P=="o31");for($+=W-(U=-3&W);$<U;)re?(T=m,M=(p=_+c.shift())+c.shift(),m=(v=T+c.shift())+c.shift(),U-$==5?(_=M+c.shift(),$++):_=M,re=!1):(p=_,T=m+c.shift(),M=p+c.shift(),v=T+c.shift(),_=M+c.shift(),U-$==5?(m=v+c.shift(),$++):m=v,re=!0),e.U.P.curveTo(l,p,T,M,v,_,m),$+=4}else{if((P+"").charAt(0)=="o")throw console.debug("Unknown operation: "+P,n),P;c.push(P)}}}i.x=_,i.y=m,i.nStems=h,i.haveWidth=u,i.width=f,i.open=d};var t=e,r={Typr:t};return s.Typr=t,s.default=r,Object.defineProperty(s,"__esModule",{value:!0}),s})({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function i0(){return(function(s){var e=Uint8Array,t=Uint16Array,r=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(P,U){for(var N=new t(31),X=0;X<31;++X)N[X]=U+=1<<P[X-1];var G=new r(N[30]);for(X=1;X<30;++X)for(var $=N[X];$<N[X+1];++$)G[$]=$-N[X]<<5|X;return[N,G]},l=o(n,2),c=l[0],h=l[1];c[28]=258,h[258]=28;for(var u=o(i,0)[0],f=new t(32768),d=0;d<32768;++d){var g=(43690&d)>>>1|(21845&d)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,f[d]=((65280&g)>>>8|(255&g)<<8)>>>1}var _=function(P,U,N){for(var X=P.length,G=0,$=new t(U);G<X;++G)++$[P[G]-1];var Y,Z=new t(U);for(G=0;G<U;++G)Z[G]=Z[G-1]+$[G-1]<<1;{Y=new t(1<<U);var K=15-U;for(G=0;G<X;++G)if(P[G])for(var I=G<<4|P[G],V=U-P[G],ne=Z[P[G]-1]++<<V,F=ne|(1<<V)-1;ne<=F;++ne)Y[f[ne]>>>K]=I}return Y},m=new e(288);for(d=0;d<144;++d)m[d]=8;for(d=144;d<256;++d)m[d]=9;for(d=256;d<280;++d)m[d]=7;for(d=280;d<288;++d)m[d]=8;var p=new e(32);for(d=0;d<32;++d)p[d]=5;var T=_(m,9),M=_(p,5),v=function(P){for(var U=P[0],N=1;N<P.length;++N)P[N]>U&&(U=P[N]);return U},w=function(P,U,N){var X=U/8|0;return(P[X]|P[X+1]<<8)>>(7&U)&N},C=function(P,U){var N=U/8|0;return(P[N]|P[N+1]<<8|P[N+2]<<16)>>(7&U)},b=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],R=function(P,U,N){var X=new Error(U||b[P]);if(X.code=P,Error.captureStackTrace&&Error.captureStackTrace(X,R),!N)throw X;return X},E=function(P,U,N){var X=P.length;if(!X||N&&!N.l&&X<5)return U||new e(0);var G=!U||N,$=!N||N.i;N||(N={}),U||(U=new e(3*X));var Y,Z=function(le){var Le=U.length;if(le>Le){var Fe=new e(Math.max(2*Le,le));Fe.set(U),U=Fe}},K=N.f||0,I=N.p||0,V=N.b||0,ne=N.l,F=N.d,k=N.m,te=N.n,W=8*X;do{if(!ne){N.f=K=w(P,I,1);var re=w(P,I+1,3);if(I+=3,!re){var me=P[(de=((Y=I)/8|0)+(7&Y&&1)+4)-4]|P[de-3]<<8,ye=de+me;if(ye>X){$&&R(0);break}G&&Z(V+me),U.set(P.subarray(de,ye),V),N.b=V+=me,N.p=I=8*ye;continue}if(re==1)ne=T,F=M,k=9,te=5;else if(re==2){var ve=w(P,I,31)+257,oe=w(P,I+10,15)+4,Oe=ve+w(P,I+5,31)+1;I+=14;for(var L=new e(Oe),Be=new e(19),be=0;be<oe;++be)Be[a[be]]=w(P,I+3*be,7);I+=3*oe;var Re=v(Be),ae=(1<<Re)-1,Ae=_(Be,Re);for(be=0;be<Oe;){var de,S=Ae[w(P,I,ae)];if(I+=15&S,(de=S>>>4)<16)L[be++]=de;else{var y=0,O=0;for(de==16?(O=3+w(P,I,3),I+=2,y=L[be-1]):de==17?(O=3+w(P,I,7),I+=3):de==18&&(O=11+w(P,I,127),I+=7);O--;)L[be++]=y}}var J=L.subarray(0,ve),Q=L.subarray(ve);k=v(J),te=v(Q),ne=_(J,k),F=_(Q,te)}else R(1);if(I>W){$&&R(0);break}}G&&Z(V+131072);for(var se=(1<<k)-1,fe=(1<<te)-1,ce=I;;ce=I){var ge=(y=ne[C(P,I)&se])>>>4;if((I+=15&y)>W){$&&R(0);break}if(y||R(2),ge<256)U[V++]=ge;else{if(ge==256){ce=I,ne=null;break}var Ue=ge-254;if(ge>264){var he=n[be=ge-257];Ue=w(P,I,(1<<he)-1)+c[be],I+=he}var Me=F[C(P,I)&fe],Ee=Me>>>4;if(Me||R(3),I+=15&Me,Q=u[Ee],Ee>3&&(he=i[Ee],Q+=C(P,I)&(1<<he)-1,I+=he),I>W){$&&R(0);break}G&&Z(V+131072);for(var Te=V+Ue;V<Te;V+=4)U[V]=U[V-Q],U[V+1]=U[V+1-Q],U[V+2]=U[V+2-Q],U[V+3]=U[V+3-Q];V=Te}}N.l=ne,N.p=ce,N.b=V,ne&&(K=1,N.m=k,N.d=F,N.n=te)}while(!K);return V==U.length?U:(function(le,Le,Fe){(Fe==null||Fe>le.length)&&(Fe=le.length);var Ke=new(le instanceof t?t:le instanceof r?r:e)(Fe-Le);return Ke.set(le.subarray(Le,Fe)),Ke})(U,0,V)},x=new e(0),D=typeof TextDecoder<"u"&&new TextDecoder;try{D.decode(x,{stream:!0})}catch{}return s.convert_streams=function(P){var U=new DataView(P),N=0;function X(){var ve=U.getUint16(N);return N+=2,ve}function G(){var ve=U.getUint32(N);return N+=4,ve}function $(ve){me.setUint16(ye,ve),ye+=2}function Y(ve){me.setUint32(ye,ve),ye+=4}for(var Z={signature:G(),flavor:G(),length:G(),numTables:X(),reserved:X(),totalSfntSize:G(),majorVersion:X(),minorVersion:X(),metaOffset:G(),metaLength:G(),metaOrigLength:G(),privOffset:G(),privLength:G()},K=0;Math.pow(2,K)<=Z.numTables;)K++;K--;for(var I=16*Math.pow(2,K),V=16*Z.numTables-I,ne=12,F=[],k=0;k<Z.numTables;k++)F.push({tag:G(),offset:G(),compLength:G(),origLength:G(),origChecksum:G()}),ne+=16;var te,W=new Uint8Array(12+16*F.length+F.reduce((function(ve,oe){return ve+oe.origLength+4}),0)),re=W.buffer,me=new DataView(re),ye=0;return Y(Z.flavor),$(Z.numTables),$(I),$(K),$(V),F.forEach((function(ve){Y(ve.tag),Y(ve.origChecksum),Y(ne),Y(ve.origLength),ve.outOffset=ne,(ne+=ve.origLength)%4!=0&&(ne+=4-ne%4)})),F.forEach((function(ve){var oe,Oe=P.slice(ve.offset,ve.offset+ve.compLength);if(ve.compLength!=ve.origLength){var L=new Uint8Array(ve.origLength);oe=new Uint8Array(Oe,2),E(oe,L)}else L=new Uint8Array(Oe);W.set(L,ve.outOffset);var Be=0;(ne=ve.outOffset+ve.origLength)%4!=0&&(Be=4-ne%4),W.set(new Uint8Array(Be).buffer,ve.outOffset+ve.origLength),te=ne+Be})),re.slice(0,te)},Object.defineProperty(s,"__esModule",{value:!0}),s})({}).convert_streams}function r0(s,e){const t={M:2,L:2,Q:4,C:6,Z:0},r={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,i=2,a=4,o=8,l=16,c=32;let h;function u(b){if(!h){const R={R:i,L:n,D:a,C:l,U:c,T:o};h=new Map;for(let E in r){let x=0;r[E].split(",").forEach(D=>{let[P,U]=D.split("+");P=parseInt(P,36),U=U?parseInt(U,36):0,h.set(x+=P,R[E]);for(let N=U;N--;)h.set(++x,R[E])})}}return h.get(b)||c}const f=1,d=2,g=3,_=4,m=[null,"isol","init","fina","medi"];function p(b){const R=new Uint8Array(b.length);let E=c,x=f,D=-1;for(let P=0;P<b.length;P++){const U=b.codePointAt(P);let N=u(U)|0,X=f;N&o||(E&(n|a|l)?N&(i|a|l)?(X=g,(x===f||x===g)&&R[D]++):N&(n|c)&&(x===d||x===_)&&R[D]--:E&(i|c)&&(x===d||x===_)&&R[D]--,x=R[P]=X,E=N,D=P,U>65535&&P++)}return R}function T(b,R){const E=[];for(let D=0;D<R.length;D++){const P=R.codePointAt(D);P>65535&&D++,E.push(s.U.codeToGlyph(b,P))}const x=b.GSUB;if(x){const{lookupList:D,featureList:P}=x;let U;const N=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,X=[];P.forEach(G=>{if(N.test(G.tag))for(let $=0;$<G.tab.length;$++){if(X[G.tab[$]])continue;X[G.tab[$]]=!0;const Y=D[G.tab[$]],Z=/^(isol|init|fina|medi)$/.test(G.tag);Z&&!U&&(U=p(R));for(let K=0;K<E.length;K++)(!U||!Z||m[U[K]]===G.tag)&&s.U._applySubs(E,K,Y,D)}})}return E}function M(b,R){const E=new Int16Array(R.length*3);let x=0;for(;x<R.length;x++){const N=R[x];if(N===-1)continue;E[x*3+2]=b.hmtx.aWidth[N];const X=b.GPOS;if(X){const G=X.lookupList;for(let $=0;$<G.length;$++){const Y=G[$];for(let Z=0;Z<Y.tabs.length;Z++){const K=Y.tabs[Z];if(Y.ltype===1){if(s._lctf.coverageIndex(K.coverage,N)!==-1&&K.pos){U(K.pos,x);break}}else if(Y.ltype===2){let I=null,V=D();if(V!==-1){const ne=s._lctf.coverageIndex(K.coverage,R[V]);if(ne!==-1){if(K.fmt===1){const F=K.pairsets[ne];for(let k=0;k<F.length;k++)F[k].gid2===N&&(I=F[k])}else if(K.fmt===2){const F=s.U._getGlyphClass(R[V],K.classDef1),k=s.U._getGlyphClass(N,K.classDef2);I=K.matrix[F][k]}if(I){I.val1&&U(I.val1,V),I.val2&&U(I.val2,x);break}}}}else if(Y.ltype===4){const I=s._lctf.coverageIndex(K.markCoverage,N);if(I!==-1){const V=D(P),ne=V===-1?-1:s._lctf.coverageIndex(K.baseCoverage,R[V]);if(ne!==-1){const F=K.markArray[I],k=K.baseArray[ne][F.markClass];E[x*3]=k.x-F.x+E[V*3]-E[V*3+2],E[x*3+1]=k.y-F.y+E[V*3+1];break}}}else if(Y.ltype===6){const I=s._lctf.coverageIndex(K.mark1Coverage,N);if(I!==-1){const V=D();if(V!==-1){const ne=R[V];if(v(b,ne)===3){const F=s._lctf.coverageIndex(K.mark2Coverage,ne);if(F!==-1){const k=K.mark1Array[I],te=K.mark2Array[F][k.markClass];E[x*3]=te.x-k.x+E[V*3]-E[V*3+2],E[x*3+1]=te.y-k.y+E[V*3+1];break}}}}}}}}else if(b.kern&&!b.cff){const G=D();if(G!==-1){const $=b.kern.glyph1.indexOf(R[G]);if($!==-1){const Y=b.kern.rval[$].glyph2.indexOf(N);Y!==-1&&(E[G*3+2]+=b.kern.rval[$].vals[Y])}}}}return E;function D(N){for(let X=x-1;X>=0;X--)if(R[X]!==-1&&(!N||N(R[X])))return X;return-1}function P(N){return v(b,N)===1}function U(N,X){for(let G=0;G<3;G++)E[X*3+G]+=N[G]||0}}function v(b,R){const E=b.GDEF&&b.GDEF.glyphClassDef;return E?s.U._getGlyphClass(R,E):0}function w(...b){for(let R=0;R<b.length;R++)if(typeof b[R]=="number")return b[R]}function C(b){const R=Object.create(null),E=b["OS/2"],x=b.hhea,D=b.head.unitsPerEm,P=w(E&&E.sTypoAscender,x&&x.ascender,D),U={unitsPerEm:D,ascender:P,descender:w(E&&E.sTypoDescender,x&&x.descender,0),capHeight:w(E&&E.sCapHeight,P),xHeight:w(E&&E.sxHeight,P),lineGap:w(E&&E.sTypoLineGap,x&&x.lineGap),supportsCodePoint(N){return s.U.codeToGlyph(b,N)>0},forEachGlyph(N,X,G,$){let Y=0;const Z=1/U.unitsPerEm*X,K=T(b,N);let I=0;const V=M(b,K);return K.forEach((ne,F)=>{if(ne!==-1){let k=R[ne];if(!k){const{cmds:te,crds:W}=s.U.glyphToPath(b,ne);let re="",me=0;for(let L=0,Be=te.length;L<Be;L++){const be=t[te[L]];re+=te[L];for(let Re=1;Re<=be;Re++)re+=(Re>1?",":"")+W[me++]}let ye,ve,oe,Oe;if(W.length){ye=ve=1/0,oe=Oe=-1/0;for(let L=0,Be=W.length;L<Be;L+=2){let be=W[L],Re=W[L+1];be<ye&&(ye=be),Re<ve&&(ve=Re),be>oe&&(oe=be),Re>Oe&&(Oe=Re)}}else ye=oe=ve=Oe=0;k=R[ne]={index:ne,advanceWidth:b.hmtx.aWidth[ne],xMin:ye,yMin:ve,xMax:oe,yMax:Oe,path:re}}$.call(null,k,Y+V[F*3]*Z,V[F*3+1]*Z,I),Y+=V[F*3+2]*Z,G&&(Y+=G*X)}I+=N.codePointAt(I)>65535?2:1}),Y}};return U}return function(R){const E=new Uint8Array(R,0,4),x=s._bin.readASCII(E,0,4);if(x==="wOFF")R=e(R);else if(x==="wOF2")throw new Error("woff2 fonts not supported");return C(s.parse(R)[0])}}const s0=Qi({name:"Typr Font Parser",dependencies:[n0,i0,r0],init(s,e,t){const r=s(),n=e();return t(r,n)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function a0(){return(function(s){var e=function(){this.buckets=new Map};e.prototype.add=function(M){var v=M>>5;this.buckets.set(v,(this.buckets.get(v)||0)|1<<(31&M))},e.prototype.has=function(M){var v=this.buckets.get(M>>5);return v!==void 0&&(v&1<<(31&M))!=0},e.prototype.serialize=function(){var M=[];return this.buckets.forEach((function(v,w){M.push((+w).toString(36)+":"+v.toString(36))})),M.join(",")},e.prototype.deserialize=function(M){var v=this;this.buckets.clear(),M.split(",").forEach((function(w){var C=w.split(":");v.buckets.set(parseInt(C[0],36),parseInt(C[1],36))}))};var t=Math.pow(2,8),r=t-1,n=~r;function i(M){var v=(function(C){return C&n})(M).toString(16),w=(function(C){return(C&n)+t-1})(M).toString(16);return"codepoint-index/plane"+(M>>16)+"/"+v+"-"+w+".json"}function a(M,v){var w=M&r,C=v.codePointAt(w/6|0);return((C=(C||48)-48)&1<<w%6)!=0}function o(M,v){var w;(w=M,w.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map((function(C){return C.split("-").map((function(b){return parseInt(b.trim(),16)}))}))).forEach((function(C){var b=C[0],R=C[1];R===void 0&&(R=b),v(b,R)}))}function l(M,v){o(M,(function(w,C){for(var b=w;b<=C;b++)v(b)}))}var c={},h={},u=new WeakMap,f="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(M){var v=u.get(M);return v||(v=new e,l(M.ranges,(function(w){return v.add(w)})),u.set(M,v)),v}var g,_=new Map;function m(M,v,w){return M[v]?v:M[w]?w:(function(C){for(var b in C)return b})(M)}function p(M,v){var w=v;if(!M.includes(w)){w=1/0;for(var C=0;C<M.length;C++)Math.abs(M[C]-v)<Math.abs(w-v)&&(w=M[C])}return w}function T(M){return g||(g=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",(function(v){g.add(v)}))),g.has(M)}return s.CodePointSet=e,s.clearCache=function(){c={},h={}},s.getFontsForString=function(M,v){v===void 0&&(v={});var w,C=v.lang;C===void 0&&(C=new RegExp("\\p{Script=Hangul}","u").test(w=M)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(w)?"ja":"en");var b=v.category;b===void 0&&(b="sans-serif");var R=v.style;R===void 0&&(R="normal");var E=v.weight;E===void 0&&(E=400);var x=(v.dataUrl||f).replace(/\/$/g,""),D=new Map,P=new Uint8Array(M.length),U={},N={},X=new Array(M.length),G=new Map,$=!1;function Y(I){var V=_.get(I);return V||(V=fetch(x+"/"+I).then((function(ne){if(!ne.ok)throw new Error(ne.statusText);return ne.json().then((function(F){if(!Array.isArray(F)||F[0]!==1)throw new Error("Incorrect schema version; need 1, got "+F[0]);return F[1]}))})).catch((function(ne){if(x!==f)return $||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+x+'", trying default CDN. '+ne.message),$=!0),x=f,_.delete(I),Y(I);throw ne})),_.set(I,V)),V}for(var Z=function(I){var V=M.codePointAt(I),ne=i(V);X[I]=ne,c[ne]||G.has(ne)||G.set(ne,Y(ne).then((function(F){c[ne]=F}))),V>65535&&(I++,K=I)},K=0;K<M.length;K++)Z(K);return Promise.all(G.values()).then((function(){G.clear();for(var I=function(ne){var F=M.codePointAt(ne),k=null,te=c[X[ne]],W=void 0;for(var re in te){var me=N[re];if(me===void 0&&(me=N[re]=new RegExp(re).test(C||"en")),me){for(var ye in W=re,te[re])if(a(F,te[re][ye])){k=ye;break}break}}if(!k){e:for(var ve in te)if(ve!==W){for(var oe in te[ve])if(a(F,te[ve][oe])){k=oe;break e}}}k||(console.debug("No font coverage for U+"+F.toString(16)),k="latin"),X[ne]=k,h[k]||G.has(k)||G.set(k,Y("font-meta/"+k+".json").then((function(Oe){h[k]=Oe}))),F>65535&&(ne++,V=ne)},V=0;V<M.length;V++)I(V);return Promise.all(G.values())})).then((function(){for(var I,V=null,ne=0;ne<M.length;ne++){var F=M.codePointAt(ne);if(V&&(T(F)||d(V).has(F)))P[ne]=P[ne-1];else{V=h[X[ne]];var k=U[V.id];if(!k){var te=V.typeforms,W=m(te,b,"sans-serif"),re=m(te[W],R,"normal"),me=p((I=te[W])===null||I===void 0?void 0:I[re],E);k=U[V.id]=x+"/font-files/"+V.id+"/"+W+"."+re+"."+me+".woff"}var ye=D.get(k);ye==null&&(ye=D.size,D.set(k,ye)),P[ne]=ye}F>65535&&(ne++,P[ne]=P[ne-1])}return{fontUrls:Array.from(D.keys()),chars:P}}))},Object.defineProperty(s,"__esModule",{value:!0}),s})({})}function o0(s,e){const t=Object.create(null),r=Object.create(null);function n(a,o){const l=c=>{console.error(`Failure loading font ${a}`,c)};try{const c=new XMLHttpRequest;c.open("get",a,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const h=s(c.response);h.src=a,o(h)}catch(h){l(h)}},c.onerror=l,c.send()}catch(c){l(c)}}function i(a,o){let l=t[a];l?o(l):r[a]?r[a].push(o):(r[a]=[o],n(a,c=>{c.src=a,t[a]=c,r[a].forEach(h=>h(c)),delete r[a]}))}return function(a,o,{lang:l,fonts:c=[],style:h="normal",weight:u="normal",unicodeFontsURL:f}={}){const d=new Uint8Array(a.length),g=[];a.length||T();const _=new Map,m=[];if(h!=="italic"&&(h="normal"),typeof u!="number"&&(u=u==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(v=>!v.lang||v.lang.test(l)).reverse(),c.length){let b=0;(function R(E=0){for(let x=E,D=a.length;x<D;x++){const P=a.codePointAt(x);if(b===1&&g[d[x-1]].supportsCodePoint(P)||x>0&&/\s/.test(a[x]))d[x]=d[x-1],b===2&&(m[m.length-1][1]=x);else for(let U=d[x],N=c.length;U<=N;U++)if(U===N){const X=b===2?m[m.length-1]:m[m.length]=[x,x];X[1]=x,b=2}else{d[x]=U;const{src:X,unicodeRange:G}=c[U];if(!G||M(P,G)){const $=t[X];if(!$){i(X,()=>{R(x)});return}if($.supportsCodePoint(P)){let Y=_.get($);typeof Y!="number"&&(Y=g.length,g.push($),_.set($,Y)),d[x]=Y,b=1;break}}}P>65535&&x+1<D&&(d[x+1]=d[x],x++,b===2&&(m[m.length-1][1]=x))}p()})()}else m.push([0,a.length-1]),p();function p(){if(m.length){const v=m.map(w=>a.substring(w[0],w[1]+1)).join(`
`);e.getFontsForString(v,{lang:l||void 0,style:h,weight:u,dataUrl:f}).then(({fontUrls:w,chars:C})=>{const b=g.length;let R=0;m.forEach(x=>{for(let D=0,P=x[1]-x[0];D<=P;D++)d[x[0]+D]=C[R++]+b;R++});let E=0;w.forEach((x,D)=>{i(x,P=>{g[D+b]=P,++E===w.length&&T()})})})}else T()}function T(){o({chars:d,fonts:g})}function M(v,w){for(let C=0;C<w.length;C++){const[b,R=b]=w[C];if(b<=v&&v<=R)return!0}return!1}}}const l0=Qi({name:"FontResolver",dependencies:[o0,s0,a0],init(s,e,t){return s(e,t())}});function c0(s,e){const r=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",i=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function a({text:g,lang:_,fonts:m,style:p,weight:T,preResolvedFonts:M,unicodeFontsURL:v},w){const C=({chars:b,fonts:R})=>{let E,x;const D=[];for(let P=0;P<b.length;P++)b[P]!==x?(x=b[P],D.push(E={start:P,end:P,fontObj:R[b[P]]})):E.end=P;w(D)};M?C(M):s(g,C,{lang:_,fonts:m,style:p,weight:T,unicodeFontsURL:v})}function o({text:g="",font:_,lang:m,sdfGlyphSize:p=64,fontSize:T=400,fontWeight:M=1,fontStyle:v="normal",letterSpacing:w=0,lineHeight:C="normal",maxWidth:b=1/0,direction:R,textAlign:E="left",textIndent:x=0,whiteSpace:D="normal",overflowWrap:P="normal",anchorX:U=0,anchorY:N=0,metricsOnly:X=!1,unicodeFontsURL:G,preResolvedFonts:$=null,includeCaretPositions:Y=!1,chunkedBoundsSize:Z=8192,colorRanges:K=null},I){const V=u(),ne={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),T=+T,w=+w,b=+b,C=C||"normal",x=+x,a({text:g,lang:m,style:v,weight:M,fonts:typeof _=="string"?[{src:_}]:_,unicodeFontsURL:G,preResolvedFonts:$},F=>{ne.fontLoad=u()-V;const k=isFinite(b);let te=null,W=null,re=null,me=null,ye=null,ve=null,oe=null,Oe=null,L=0,Be=0,be=D!=="nowrap";const Re=new Map,ae=u();let Ae=x,de=0,S=new f;const y=[S];F.forEach(fe=>{const{fontObj:ce}=fe,{ascender:ge,descender:Ue,unitsPerEm:he,lineGap:Me,capHeight:Ee,xHeight:Te}=ce;let le=Re.get(ce);if(!le){const ue=T/he,ee=C==="normal"?(ge-Ue+Me)*ue:C*T,pe=(ee-(ge-Ue)*ue)/2,xe=Math.min(ee,(ge-Ue)*ue),_e=(ge+Ue)/2*ue+xe/2;le={index:Re.size,src:ce.src,fontObj:ce,fontSizeMult:ue,unitsPerEm:he,ascender:ge*ue,descender:Ue*ue,capHeight:Ee*ue,xHeight:Te*ue,lineHeight:ee,baseline:-pe-ge*ue,caretTop:_e,caretBottom:_e-xe},Re.set(ce,le)}const{fontSizeMult:Le}=le,Fe=g.slice(fe.start,fe.end+1);let Ke,z;ce.forEachGlyph(Fe,T,w,(ue,ee,pe,xe)=>{ee+=de,xe+=fe.start,Ke=ee,z=ue;const _e=g.charAt(xe),Ne=ue.advanceWidth*Le,Ye=S.count;let ke;if("isEmpty"in ue||(ue.isWhitespace=!!_e&&new RegExp(n).test(_e),ue.canBreakAfter=!!_e&&i.test(_e),ue.isEmpty=ue.xMin===ue.xMax||ue.yMin===ue.yMax||r.test(_e)),!ue.isWhitespace&&!ue.isEmpty&&Be++,be&&k&&!ue.isWhitespace&&ee+Ne+Ae>b&&Ye){if(S.glyphAt(Ye-1).glyphObj.canBreakAfter)ke=new f,Ae=-ee;else for(let at=Ye;at--;)if(at===0&&P==="break-word"){ke=new f,Ae=-ee;break}else if(S.glyphAt(at).glyphObj.canBreakAfter){ke=S.splitAt(at+1);const lt=ke.glyphAt(0).x;Ae-=lt;for(let ft=ke.count;ft--;)ke.glyphAt(ft).x-=lt;break}ke&&(S.isSoftWrapped=!0,S=ke,y.push(S),L=b)}let Ve=S.glyphAt(S.count);Ve.glyphObj=ue,Ve.x=ee+Ae,Ve.y=pe,Ve.width=Ne,Ve.charIndex=xe,Ve.fontData=le,_e===`
`&&(S=new f,y.push(S),Ae=-(ee+Ne+w*T)+x)}),de=Ke+z.advanceWidth*Le+w*T});let O=0;y.forEach(fe=>{let ce=!0;for(let ge=fe.count;ge--;){const Ue=fe.glyphAt(ge);ce&&!Ue.glyphObj.isWhitespace&&(fe.width=Ue.x+Ue.width,fe.width>L&&(L=fe.width),ce=!1);let{lineHeight:he,capHeight:Me,xHeight:Ee,baseline:Te}=Ue.fontData;he>fe.lineHeight&&(fe.lineHeight=he);const le=Te-fe.baseline;le<0&&(fe.baseline+=le,fe.cap+=le,fe.ex+=le),fe.cap=Math.max(fe.cap,fe.baseline+Me),fe.ex=Math.max(fe.ex,fe.baseline+Ee)}fe.baseline-=O,fe.cap-=O,fe.ex-=O,O+=fe.lineHeight});let J=0,Q=0;if(U&&(typeof U=="number"?J=-U:typeof U=="string"&&(J=-L*(U==="left"?0:U==="center"?.5:U==="right"?1:c(U)))),N&&(typeof N=="number"?Q=-N:typeof N=="string"&&(Q=N==="top"?0:N==="top-baseline"?-y[0].baseline:N==="top-cap"?-y[0].cap:N==="top-ex"?-y[0].ex:N==="middle"?O/2:N==="bottom"?O:N==="bottom-baseline"?-y[y.length-1].baseline:c(N)*O)),!X){const fe=e.getEmbeddingLevels(g,R);te=new Uint16Array(Be),W=new Uint8Array(Be),re=new Float32Array(Be*2),me={},oe=[1/0,1/0,-1/0,-1/0],Oe=[],Y&&(ve=new Float32Array(g.length*4)),K&&(ye=new Uint8Array(Be*3));let ce=0,ge=-1,Ue=-1,he,Me;if(y.forEach((Ee,Te)=>{let{count:le,width:Le}=Ee;if(le>0){let Fe=0;for(let xe=le;xe--&&Ee.glyphAt(xe).glyphObj.isWhitespace;)Fe++;let Ke=0,z=0;if(E==="center")Ke=(L-Le)/2;else if(E==="right")Ke=L-Le;else if(E==="justify"&&Ee.isSoftWrapped){let xe=0;for(let _e=le-Fe;_e--;)Ee.glyphAt(_e).glyphObj.isWhitespace&&xe++;z=(L-Le)/xe}if(z||Ke){let xe=0;for(let _e=0;_e<le;_e++){let Ne=Ee.glyphAt(_e);const Ye=Ne.glyphObj;Ne.x+=Ke+xe,z!==0&&Ye.isWhitespace&&_e<le-Fe&&(xe+=z,Ne.width+=z)}}const ue=e.getReorderSegments(g,fe,Ee.glyphAt(0).charIndex,Ee.glyphAt(Ee.count-1).charIndex);for(let xe=0;xe<ue.length;xe++){const[_e,Ne]=ue[xe];let Ye=1/0,ke=-1/0;for(let Ve=0;Ve<le;Ve++)if(Ee.glyphAt(Ve).charIndex>=_e){let at=Ve,lt=Ve;for(;lt<le;lt++){let ft=Ee.glyphAt(lt);if(ft.charIndex>Ne)break;lt<le-Fe&&(Ye=Math.min(Ye,ft.x),ke=Math.max(ke,ft.x+ft.width))}for(let ft=at;ft<lt;ft++){const Bt=Ee.glyphAt(ft);Bt.x=ke-(Bt.x+Bt.width-Ye)}break}}let ee;const pe=xe=>ee=xe;for(let xe=0;xe<le;xe++){const _e=Ee.glyphAt(xe);ee=_e.glyphObj;const Ne=ee.index,Ye=fe.levels[_e.charIndex]&1;if(Ye){const ke=e.getMirroredCharacter(g[_e.charIndex]);ke&&_e.fontData.fontObj.forEachGlyph(ke,0,0,pe)}if(Y){const{charIndex:ke,fontData:Ve}=_e,at=_e.x+J,lt=_e.x+_e.width+J;ve[ke*4]=Ye?lt:at,ve[ke*4+1]=Ye?at:lt,ve[ke*4+2]=Ee.baseline+Ve.caretBottom+Q,ve[ke*4+3]=Ee.baseline+Ve.caretTop+Q;const ft=ke-ge;ft>1&&h(ve,ge,ft),ge=ke}if(K){const{charIndex:ke}=_e;for(;ke>Ue;)Ue++,K.hasOwnProperty(Ue)&&(Me=K[Ue])}if(!ee.isWhitespace&&!ee.isEmpty){const ke=ce++,{fontSizeMult:Ve,src:at,index:lt}=_e.fontData,ft=me[at]||(me[at]={});ft[Ne]||(ft[Ne]={path:ee.path,pathBounds:[ee.xMin,ee.yMin,ee.xMax,ee.yMax]});const Bt=_e.x+J,Ct=_e.y+Ee.baseline+Q;re[ke*2]=Bt,re[ke*2+1]=Ct;const Wt=Bt+ee.xMin*Ve,nn=Ct+ee.yMin*Ve,dn=Bt+ee.xMax*Ve,kt=Ct+ee.yMax*Ve;Wt<oe[0]&&(oe[0]=Wt),nn<oe[1]&&(oe[1]=nn),dn>oe[2]&&(oe[2]=dn),kt>oe[3]&&(oe[3]=kt),ke%Z===0&&(he={start:ke,end:ke,rect:[1/0,1/0,-1/0,-1/0]},Oe.push(he)),he.end++;const yt=he.rect;if(Wt<yt[0]&&(yt[0]=Wt),nn<yt[1]&&(yt[1]=nn),dn>yt[2]&&(yt[2]=dn),kt>yt[3]&&(yt[3]=kt),te[ke]=Ne,W[ke]=lt,K){const Jt=ke*3;ye[Jt]=Me>>16&255,ye[Jt+1]=Me>>8&255,ye[Jt+2]=Me&255}}}}}),ve){const Ee=g.length-ge;Ee>1&&h(ve,ge,Ee)}}const se=[];Re.forEach(({index:fe,src:ce,unitsPerEm:ge,ascender:Ue,descender:he,lineHeight:Me,capHeight:Ee,xHeight:Te})=>{se[fe]={src:ce,unitsPerEm:ge,ascender:Ue,descender:he,lineHeight:Me,capHeight:Ee,xHeight:Te}}),ne.typesetting=u()-ae,I({glyphIds:te,glyphFontIndices:W,glyphPositions:re,glyphData:me,fontData:se,caretPositions:ve,glyphColors:ye,chunkedBounds:Oe,fontSize:T,topBaseline:Q+y[0].baseline,blockBounds:[J,Q-O,J+L,Q],visibleBounds:oe,timings:ne})})}function l(g,_){o({...g,metricsOnly:!0},m=>{const[p,T,M,v]=m.blockBounds;_({width:M-p,height:v-T})})}function c(g){let _=g.match(/^([\d.]+)%$/),m=_?parseFloat(_[1]):NaN;return isNaN(m)?0:m/100}function h(g,_,m){const p=g[_*4],T=g[_*4+1],M=g[_*4+2],v=g[_*4+3],w=(T-p)/m;for(let C=0;C<m;C++){const b=(_+C)*4;g[b]=p+w*C,g[b+1]=p+w*(C+1),g[b+2]=M,g[b+3]=v}}function u(){return(self.performance||Date).now()}function f(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return f.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(g){let _=f.flyweight;return _.data=this.data,_.index=g,_},splitAt(g){let _=new f;return _.data=this.data.splice(g*d.length),_}},f.flyweight=d.reduce((g,_,m,p)=>(Object.defineProperty(g,_,{get(){return this.data[this.index*d.length+m]},set(T){this.data[this.index*d.length+m]=T}}),g),{data:null,index:0}),{typeset:o,measure:l}}const ni=()=>(self.performance||Date).now(),ws=Ch();let Tc;function h0(s,e,t,r,n,i,a,o,l,c,h=!0){return h?f0(s,e,t,r,n,i,a,o,l,c).then(null,u=>(Tc||(console.warn("WebGL SDF generation failed, falling back to JS",u),Tc=!0),Ac(s,e,t,r,n,i,a,o,l,c))):Ac(s,e,t,r,n,i,a,o,l,c)}const vs=[],u0=5;let vo=0;function Ph(){const s=ni();for(;vs.length&&ni()-s<u0;)vs.shift()();vo=vs.length?setTimeout(Ph,0):0}const f0=(...s)=>new Promise((e,t)=>{vs.push(()=>{const r=ni();try{ws.webgl.generateIntoCanvas(...s),e({timing:ni()-r})}catch(n){t(n)}}),vo||(vo=setTimeout(Ph,0))}),d0=4,p0=2e3,bc={};let m0=0;function Ac(s,e,t,r,n,i,a,o,l,c){const h="TroikaTextSDFGenerator_JS_"+m0++%d0;let u=bc[h];return u||(u=bc[h]={workerModule:Qi({name:h,workerId:h,dependencies:[Ch,ni],init(f,d){const g=f().javascript.generate;return function(..._){const m=d();return{textureData:g(..._),timing:d()-m}}},getTransferables(f){return[f.textureData.buffer]}}),requests:0,idleTimer:null}),u.requests++,clearTimeout(u.idleTimer),u.workerModule(s,e,t,r,n,i).then(({textureData:f,timing:d})=>{const g=ni(),_=new Uint8Array(f.length*4);for(let m=0;m<f.length;m++)_[m*4+c]=f[m];return ws.webglUtils.renderImageData(a,_,o,l,s,e,1<<3-c),d+=ni()-g,--u.requests===0&&(u.idleTimer=setTimeout(()=>{Yv(h)},p0)),{timing:d}})}function g0(s){s._warm||(ws.webgl.isSupported(s),s._warm=!0)}const _0=ws.webglUtils.resizeWebGLCanvasWithoutClearing,gr={unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},v0=new qe;function Di(){return(self.performance||Date).now()}const wc=Object.create(null);function x0(s,e){s=M0({},s);const t=Di(),r=[];if(s.font&&r.push({label:"user",src:S0(s.font)}),s.font=r,s.text=""+s.text,s.sdfGlyphSize=s.sdfGlyphSize||gr.sdfGlyphSize,s.unicodeFontsURL=s.unicodeFontsURL||gr.unicodeFontsURL,s.colorRanges!=null){let f={};for(let d in s.colorRanges)if(s.colorRanges.hasOwnProperty(d)){let g=s.colorRanges[d];typeof g!="number"&&(g=v0.set(g).getHex()),f[d]=g}s.colorRanges=f}Object.freeze(s);const{textureWidth:n,sdfExponent:i}=gr,{sdfGlyphSize:a}=s,o=n/a*4;let l=wc[a];if(!l){const f=document.createElement("canvas");f.width=n,f.height=a*256/o,l=wc[a]={glyphCount:0,sdfGlyphSize:a,sdfCanvas:f,sdfTexture:new Nt(f,void 0,void 0,void 0,$t,$t),contextLost:!1,glyphsByFont:new Map},l.sdfTexture.generateMipmaps=!1,y0(l)}const{sdfTexture:c,sdfCanvas:h}=l;Lh(s).then(f=>{const{glyphIds:d,glyphFontIndices:g,fontData:_,glyphPositions:m,fontSize:p,timings:T}=f,M=[],v=new Float32Array(d.length*4);let w=0,C=0;const b=Di(),R=_.map(U=>{let N=l.glyphsByFont.get(U.src);return N||l.glyphsByFont.set(U.src,N=new Map),N});d.forEach((U,N)=>{const X=g[N],{src:G,unitsPerEm:$}=_[X];let Y=R[X].get(U);if(!Y){const{path:ne,pathBounds:F}=f.glyphData[G][U],k=Math.max(F[2]-F[0],F[3]-F[1])/a*(gr.sdfMargin*a+.5),te=l.glyphCount++,W=[F[0]-k,F[1]-k,F[2]+k,F[3]+k];R[X].set(U,Y={path:ne,atlasIndex:te,sdfViewBox:W}),M.push(Y)}const{sdfViewBox:Z}=Y,K=m[C++],I=m[C++],V=p/$;v[w++]=K+Z[0]*V,v[w++]=I+Z[1]*V,v[w++]=K+Z[2]*V,v[w++]=I+Z[3]*V,d[N]=Y.atlasIndex}),T.quads=(T.quads||0)+(Di()-b);const E=Di();T.sdf={};const x=h.height,D=Math.ceil(l.glyphCount/o),P=Math.pow(2,Math.ceil(Math.log2(D*a)));P>x&&(console.info(`Increasing SDF texture size ${x}->${P}`),_0(h,n,P),c.dispose()),Promise.all(M.map(U=>Dh(U,l,s.gpuAccelerateSDF).then(({timing:N})=>{T.sdf[U.atlasIndex]=N}))).then(()=>{M.length&&!l.contextLost&&(Uh(l),c.needsUpdate=!0),T.sdfTotal=Di()-E,T.total=Di()-t,e(Object.freeze({parameters:s,sdfTexture:c,sdfGlyphSize:a,sdfExponent:i,glyphBounds:v,glyphAtlasIndices:d,glyphColors:f.glyphColors,caretPositions:f.caretPositions,chunkedBounds:f.chunkedBounds,ascender:f.ascender,descender:f.descender,lineHeight:f.lineHeight,capHeight:f.capHeight,xHeight:f.xHeight,topBaseline:f.topBaseline,blockBounds:f.blockBounds,visibleBounds:f.visibleBounds,timings:f.timings}))})}),Promise.resolve().then(()=>{l.contextLost||g0(h)})}function Dh({path:s,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:r,sdfCanvas:n,contextLost:i},a){if(i)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:l}=gr,c=Math.max(t[2]-t[0],t[3]-t[1]),h=Math.floor(e/4),u=h%(o/r)*r,f=Math.floor(h/(o/r))*r,d=e%4;return h0(r,r,s,t,c,l,n,u,f,d,a)}function y0(s){const e=s.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),s.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),s.contextLost=!1;const r=[];s.glyphsByFont.forEach(n=>{n.forEach(i=>{r.push(Dh(i,s,!0))})}),Promise.all(r).then(()=>{Uh(s),s.sdfTexture.needsUpdate=!0})})}function M0(s,e){for(let t in e)e.hasOwnProperty(t)&&(s[t]=e[t]);return s}let cs;function S0(s){return cs||(cs=typeof document>"u"?{}:document.createElement("a")),cs.href=s,cs.href}function Uh(s){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=s,{width:r,height:n}=e,i=s.sdfCanvas.getContext("webgl");let a=t.image.data;(!a||a.length!==r*n*4)&&(a=new Uint8Array(r*n*4),t.image={width:r,height:n,data:a},t.flipY=!1,t.isDataTexture=!0),i.readPixels(0,0,r,n,i.RGBA,i.UNSIGNED_BYTE,a)}}const E0=Qi({name:"Typesetter",dependencies:[c0,l0,jv],init(s,e,t){return s(e,t())}}),Lh=Qi({name:"Typesetter",dependencies:[E0],init(s){return function(e){return new Promise(t=>{s.typeset(e,t)})}},getTransferables(s){const e=[];for(let t in s)s[t]&&s[t].buffer&&e.push(s[t].buffer);return e}});Lh.onMainThread;const Cc={};function T0(s){let e=Cc[s];return e||(e=Cc[s]=new hi(1,1,s,s).translate(.5,.5,0)),e}const b0="aTroikaGlyphBounds",Rc="aTroikaGlyphIndex",A0="aTroikaGlyphColor";class w0 extends Nf{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new Ar,this.boundingBox=new oi}computeBoundingSphere(){}computeBoundingBox(){}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=T0(e);["position","normal","uv"].forEach(r=>{this.attributes[r]=t.attributes[r].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,r,n,i){this.updateAttributeData(b0,e,4),this.updateAttributeData(Rc,t,1),this.updateAttributeData(A0,i,3),this._blockBounds=r,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:r}=this;if(t){const{PI:n,floor:i,min:a,max:o,sin:l,cos:c}=Math,h=n/2,u=n*2,f=Math.abs(t),d=e[0]/f,g=e[2]/f,_=i((d+h)/u)!==i((g+h)/u)?-f:a(l(d)*f,l(g)*f),m=i((d-h)/u)!==i((g-h)/u)?f:o(l(d)*f,l(g)*f),p=i((d+n)/u)!==i((g+n)/u)?f*2:o(f-c(d)*f,f-c(g)*f);r.min.set(_,e[1],t<0?-p:0),r.max.set(m,e[3],t<0?0:p)}else r.min.set(e[0],e[1],0),r.max.set(e[2],e[3],0);r.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(Rc).count,r=this._chunkedBounds;if(r)for(let n=r.length;n--;){t=r[n].end;let i=r[n].rect;if(i[1]<e.w&&i[3]>e.y&&i[0]<e.z&&i[2]>e.x)break}this.instanceCount=t}updateAttributeData(e,t,r){const n=this.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(this.setAttribute(e,new uf(t,r)),delete this._maxInstanceCount,this.dispose()):n&&this.deleteAttribute(e)}}const C0=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,R0=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,P0=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,D0=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function U0(s){const e=_o(s,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new Ce},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new it(0,0,0,0)},uTroikaClipRect:{value:new it(0,0,0,0)},uTroikaEdgeOffset:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new Ce},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new qe},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new je},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:C0,vertexTransform:R0,fragmentDefs:P0,fragmentColorTransform:D0,customRewriter({vertexShader:t,fragmentShader:r}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(r)&&(r=r.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(Rh,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:r}}});return e.transparent=!0,e.forceSinglePass=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const No=new ci({color:16777215,side:gn,transparent:!0}),Pc=8421504,Dc=new ot,hs=new B,Ma=new B,pr=[],L0=new B,Sa="+x+y";function Uc(s){return Array.isArray(s)?s[0]:s}let Ih=()=>{const s=new Tt(new hi(1,1),No);return Ih=()=>s,s},Fh=()=>{const s=new Tt(new hi(1,1,32,1),No);return Fh=()=>s,s};const I0={type:"syncstart"},F0={type:"synccomplete"},Nh=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],N0=Nh.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class Oh extends Tt{constructor(){const e=new w0;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=Pc,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=Sa,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(I0),x0({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const r=this._queuedSyncs;r&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{r.forEach(n=>n&&n())})),this.dispatchEvent(F0),e&&e()})))}onBeforeRender(e,t,r,n,i,a){this.sync(),i.isTroikaTextMaterial&&this._prepareForRender(i)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(e){return U0(e)}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=No.clone());if((!e||!e.isDerivedFrom(t))&&(e=this._derivedMaterial=this.createDerivedMaterial(t),t.addEventListener("dispose",function r(){t.removeEventListener("dispose",r),e.dispose()})),this.hasOutline()){let r=e._outlineMtl;return r||(r=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),r.isTextOutlineMaterial=!0,r.depthWrite=!1,r.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),r.dispose()})),[r,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}hasOutline(){return!!(this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY)}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return Uc(this.material).getDepthMaterial()}set customDepthMaterial(e){}get customDistanceMaterial(){return Uc(this.material).getDistanceMaterial()}set customDistanceMaterial(e){}_prepareForRender(e){const t=e.isTextOutlineMaterial,r=e.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:o,blockBounds:l}=n;r.uTroikaSDFTexture.value=o,r.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),r.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,r.uTroikaSDFExponent.value=n.sdfExponent,r.uTroikaTotalBounds.value.fromArray(l),r.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let c=0,h=0,u=0,f,d,g,_=0,m=0;if(t){let{outlineWidth:T,outlineOffsetX:M,outlineOffsetY:v,outlineBlur:w,outlineOpacity:C}=this;c=this._parsePercent(T)||0,h=Math.max(0,this._parsePercent(w)||0),f=C,_=this._parsePercent(M)||0,m=this._parsePercent(v)||0}else u=Math.max(0,this._parsePercent(this.strokeWidth)||0),u&&(g=this.strokeColor,r.uTroikaStrokeColor.value.set(g??Pc),d=this.strokeOpacity,d==null&&(d=1)),f=this.fillOpacity;r.uTroikaEdgeOffset.value=c,r.uTroikaPositionOffset.value.set(_,m),r.uTroikaBlurRadius.value=h,r.uTroikaStrokeWidth.value=u,r.uTroikaStrokeOpacity.value=d,r.uTroikaFillOpacity.value=f??1,r.uTroikaCurveRadius.value=this.curveRadius||0;let p=this.clipRect;if(p&&Array.isArray(p)&&p.length===4)r.uTroikaClipRect.value.fromArray(p);else{const T=(this.fontSize||.1)*100;r.uTroikaClipRect.value.set(l[0]-T,l[1]-T,l[2]+T,l[3]+T)}this.geometry.applyClipRect(r.uTroikaClipRect.value)}r.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const i=t?this.outlineColor||0:this.color;if(i==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new qe;(i!==o._input||typeof i=="object")&&o.set(o._input=i)}let a=this.orientation||Sa;if(a!==e._orientation){let o=r.uTroikaOrient.value;a=a.replace(/[^-+xyz]/g,"");let l=a!==Sa&&a.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,h,u,f]=l;hs.set(0,0,0)[h]=c==="-"?1:-1,Ma.set(0,0,0)[f]=u==="-"?-1:1,Dc.lookAt(L0,hs.cross(Ma),Ma),o.setFromMatrix4(Dc)}else o.identity();e._orientation=a}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),r=t?parseFloat(t[1]):NaN;e=(isNaN(r)?0:r/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new Ce){t.copy(e);const r=this.curveRadius;return r&&(t.x=Math.atan2(e.x,Math.abs(r)-Math.abs(e.z))*Math.abs(r)),t}worldPositionToTextCoords(e,t=new Ce){return hs.copy(e),this.localPositionToTextCoords(this.worldToLocal(hs),t)}raycast(e,t){const{textRenderInfo:r,curveRadius:n}=this;if(r){const i=r.blockBounds,a=n?Fh():Ih(),o=a.geometry,{position:l,uv:c}=o.attributes;for(let h=0;h<c.count;h++){let u=i[0]+c.getX(h)*(i[2]-i[0]);const f=i[1]+c.getY(h)*(i[3]-i[1]);let d=0;n&&(d=n-Math.cos(u/n)*n,u=Math.sin(u/n)*n),l.setXYZ(h,u,f,d)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,a.matrixWorld=this.matrixWorld,a.material.side=this.material.side,pr.length=0,a.raycast(e,pr);for(let h=0;h<pr.length;h++)pr[h].object=this,t.push(pr[h])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,N0.forEach(r=>{this[r]=e[r]}),this}clone(){return new this.constructor().copy(this)}}Nh.forEach(s=>{const e="_private_"+s;Object.defineProperty(Oh.prototype,s,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});new oi;new qe;const Ea=16777215,O0=.15,B0=1.6,k0=2.6,z0=128,Lc=.78,G0=.45;class H0{constructor(){ze(this,"labels",new Map);ze(this,"cameraPos",new B);ze(this,"labelPos",new B)}init(){}createLabels(e,t,r){this.dispose();for(const n of e){const i=t.get(n.id);if(!i)continue;const a=r.get(n.id)??3.5,o=new ci({color:Ea,transparent:!0,opacity:Lc,alphaTest:G0,depthWrite:!1}),l=new Oh;l.text=n.label,l.fontSize=k0,l.color=Ea,l.material=o,l.anchorX="center",l.anchorY="bottom",l.outlineWidth=0,l.outlineBlur=0,l.sdfGlyphSize=z0,l.position.set(0,a+B0,0),l.renderOrder=1,l.sync(),i.add(l),this.labels.set(n.id,{text:l,baseMaterial:o,dimmed:!1,highlighted:!1})}}update(e){var t;e.getWorldPosition(this.cameraPos);for(const r of this.labels.values()){r.text.quaternion.copy(e.quaternion);const n=((t=r.text.parent)==null?void 0:t.scale.x)??1,i=n!==0?1/n:1;r.text.scale.setScalar(i),r.text.getWorldPosition(this.labelPos);const a=this.cameraPos.distanceTo(this.labelPos),o=this.getDistanceOpacity(a),l=r.dimmed?O0:Lc;r.baseMaterial.opacity=o*l,r.text.visible=o>.01,r.text.material instanceof li&&(r.text.material.transparent=!0)}}highlightLabels(e){const t=new Set(e);for(const[r,n]of this.labels.entries())t.has(r)?(n.highlighted=!0,n.dimmed=!1):(n.highlighted=!1,n.dimmed=!0),this.applyLabelState(n)}resetLabels(){for(const e of this.labels.values())e.highlighted=!1,e.dimmed=!1,this.applyLabelState(e)}dispose(){for(const e of this.labels.values())e.text.removeFromParent(),e.text.dispose(),e.baseMaterial.dispose();this.labels.clear()}getDistanceOpacity(e){if(e<100)return 1;if(e>500)return 0;const t=(e-100)/400;return Math.max(0,1-t)}applyLabelState(e){e.text.color=Ea,e.text.outlineWidth=0,e.text.outlineBlur=0}}class V0{constructor(){ze(this,"panelElement",null);ze(this,"visible",!1)}getNodeTypeLabel(e){return{birthplace:"Birthplace",university:"University",degree:"Degree",field:"Field of Study",firstJob:"First Job",company:"Company",placement:"E.ON Placement",currentRole:"Current Role"}[e]||e}init(e){if(this.panelElement)return;this.panelElement=document.createElement("div"),this.panelElement.style.cssText=`
      position: fixed;
      top: 50%;
      right: 24px;
      transform: translateY(-50%) translateX(360px);
      width: 320px;
      background: rgba(10, 15, 30, 0.65);
      backdrop-filter: blur(24px) saturate(150%);
      -webkit-backdrop-filter: blur(24px) saturate(150%);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 16px;
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1);
      padding: 24px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      color: rgba(255, 255, 255, 0.95);
      transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
      opacity: 0;
      pointer-events: none;
      box-sizing: border-box;
      z-index: 1000;
      max-height: 90vh;
      overflow-y: auto;
    `;const t=document.createElement("button");t.innerHTML="&times;",t.style.cssText=`
      position: absolute;
      top: 16px;
      right: 16px;
      background: none;
      border: none;
      color: rgba(255, 255, 255, 0.5);
      font-size: 24px;
      cursor: pointer;
      line-height: 1;
      padding: 0;
      transition: color 0.2s;
    `,t.addEventListener("mouseenter",()=>t.style.color="#fff"),t.addEventListener("mouseleave",()=>t.style.color="rgba(255, 255, 255, 0.5)"),t.addEventListener("click",()=>this.hide()),this.panelElement.appendChild(t);const r=document.createElement("div");r.className="panel-content",this.panelElement.appendChild(r),e.appendChild(this.panelElement)}show(e,t){if(!this.panelElement)return;const r=this.panelElement.querySelector(".panel-content");if(!r)return;let n=`
      <div style="display: flex; align-items: center; margin-bottom: 24px;">
        <div style="width: 16px; height: 16px; border-radius: 50%; background: ${e.color}; box-shadow: 0 0 12px ${e.color}, 0 0 24px ${e.color}88; margin-right: 12px;"></div>
        <h2 style="margin: 0; font-size: 22px; font-weight: 600; color: #fff; letter-spacing: 0.5px;">${e.name}</h2>
      </div>
      <div style="position: relative; padding-left: 10px;">
        <div style="position: absolute; left: 14px; top: 8px; bottom: 8px; width: 2px; background: linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0.05));"></div>
    `;e.nodeSequence.forEach(i=>{const a=t.find(o=>o.id===i);a&&(n+=`
        <div style="position: relative; margin-bottom: 24px; padding-left: 24px; transition: transform 0.3s ease;">
          <div style="
            position: absolute;
            left: -4px;
            top: 4px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${e.color};
            box-shadow: 0 0 10px ${e.color}, 0 0 20px ${e.color}66;
            z-index: 2;
          "></div>
          <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; color: rgba(255,255,255,0.4); margin-bottom: 2px;">
            ${this.getNodeTypeLabel(a.type)}
          </div>
          <div style="font-size: 14px; color: #fff;">
            ${a.label}
          </div>
        </div>
      `)}),n+="</div>",r.innerHTML=n,this.panelElement.style.transform="translateY(-50%) translateX(0)",this.panelElement.style.opacity="1",this.panelElement.style.pointerEvents="auto",this.visible=!0}hide(){this.panelElement&&(this.panelElement.style.transform="translateY(-50%) translateX(360px)",this.panelElement.style.opacity="0",this.panelElement.style.pointerEvents="none",this.visible=!1)}isVisible(){return this.visible}}function W0(){const s=document.getElementById("canvas"),e=document.getElementById("ui-overlay");if(!s){console.error("Initialization failed: #canvas element is missing.");return}if(!e){console.error("Initialization failed: #ui-overlay element is missing.");return}const t=w_(),{scene:r,camera:n,renderer:i}=C_(s),{composer:a}=k_(i,r,n),o=new V_(t),l=new tv,c=l.createNodes(t,r),h=l.getNodeRadii();for(let D=0;D<100;D+=1)o.tick(.016);l.updatePositions(o.getNodes());const u=o.getNodes(),f={x:0,y:0,z:0};for(const D of u)f.x+=D.position.x,f.y+=D.position.y,f.z+=D.position.z;f.x/=u.length,f.y/=u.length,f.z/=u.length;const d=new ov;d.createPaths(t,r);const g=Ic(o.getNodes());d.updatePaths(g);const _=new Map(t.trainees.map(D=>[D.id,D.color]));let m=d.getCurves();const p=new mv;p.init(m,_,r);const T=Sv(r),M=new zv;M.init(n,i.domElement);const v=new B(f.x,f.y,f.z);M.setInitialTarget(v);const w=new Tv;w.init(n,i.domElement,c);const C=new H0;C.init(),C.createLabels(t.nodes,c,h);const b=new V0;b.init(e);const R=new Gv({nodeRenderer:l,pathRenderer:d,energyFlow:p,infoPanel:b,labelRenderer:C,graphData:t});w.onHover=D=>R.handleHover(D),w.onClick=D=>R.handleClick(D);let E=0;function x(D){const P=D/1e3,U=Math.min(P-E,.05);E=P,o.tick(U);const N=o.getNodes();l.updatePositions(N),l.updateAnimations(P);const X=Ic(N);d.updatePaths(X);const G=d.getCurves();X0(m,G)&&(p.init(G,_,r),m=G),p.update(P,U),T.update(P),w.update(),R.update(U),M.update(U),C.update(n),a.render()}i.setAnimationLoop(x),window.addEventListener("resize",()=>{const D=window.innerWidth,P=window.innerHeight;z_(a,D,P,i.getPixelRatio())})}function Ic(s){const e=new Map;for(const t of s)e.set(t.id,t.position);return e}function X0(s,e){if(s.size!==e.size)return!0;for(const[t,r]of e)if(s.get(t)!==r)return!0;return!1}W0();
