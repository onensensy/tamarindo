var d=Object.defineProperty;var u=(n,e,t)=>e in n?d(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var i=(n,e,t)=>(u(n,typeof e!="symbol"?e+"":e,t),t);import{P as f,C as v,S as y,d as h,W as p,A as w,a as g,b as _,c as x,M as z}from"./three.module.2f883259.js";import"./index.8f0bf197.js";import{n as W}from"./app.be92839b.js";import"./Btn.abe2bb59.js";import"./_plugin-vue_export-helper.cdc0426e.js";class S{constructor(e,t=36){i(this,"fov");i(this,"container");i(this,"camera");i(this,"clock");i(this,"scene");i(this,"renderer");i(this,"uniforms");i(this,"onWindowResize");i(this,"onDocumentWheel");this.container=e,this.fov=t,this.camera=new f(this.fov,this.container.clientWidth/this.container.clientHeight,1,1e3),this.camera.position.z=128,this.clock=new v,this.scene=new y,this.uniforms={u_time:{type:"f",value:1},colorB:{type:"vec3",value:new h(16773120)},colorA:{type:"vec3",value:new h(16777215)}},this.renderer=new p({antialias:!0}),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),e.appendChild(this.renderer.domElement);const r=new w(16777215,.7);r.castShadow=!1,this.scene.add(r);const o=new g(16777215,.55);o.castShadow=!0,o.position.set(0,80,10),this.scene.add(o),this.onWindowResize=()=>{this.camera.aspect=this.container.clientWidth/this.container.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight)},this.onDocumentWheel=s=>{const c=this.camera.position.z+s.deltaY/100;this.camera.position.z=Math.min(Math.max(c,84),256)},window.addEventListener("resize",this.onWindowResize,!1),document.addEventListener("wheel",this.onDocumentWheel,!1)}animate(){requestAnimationFrame(this.animate.bind(this)),this.render()}render(){this.uniforms.u_time.value+=this.clock.getDelta(),this.renderer.render(this.scene,this.camera)}destroy(){window.removeEventListener("resize",this.onWindowResize,!1),document.removeEventListener("wheel",this.onDocumentWheel,!1),this.renderer.domElement.remove(),this.renderer.dispose()}}const m={vertex:`
    varying float x;
    varying float y;
    varying float z;
    varying vec3 vUv;
    uniform float u_time;
    uniform float u_amplitude;
    uniform float[64] u_data_arr;
    void main() {
      vUv = position;
      x = abs(position.x);
      y = abs(position.y);
      float floor_x = round(x);
      float floor_y = round(y);
      z = sin(u_data_arr[int(floor_x)] / 50.0 + u_data_arr[int(floor_y)] / 20.0) * u_amplitude * 2.0;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, position.y, z, 1.0);
    }
  `,fragment:`
    varying float x;
    varying float y;
    varying float z;
    varying vec3 vUv;
    uniform float u_time;
    void main() {
      gl_FragColor = vec4((32.0 - abs(x)) / 32.0, (32.0 - abs(y)) / 32.0, (abs(x + y) / 2.0) / 32.0, 1.0);
    }
  `},D=n=>{const e=new S(n),t=W.analyzer;t.fftSize=512;let r=new Uint8Array(t.frequencyBinCount);const o={u_time:{type:"f",value:1},u_amplitude:{type:"f",value:3},u_data_arr:{type:"float[64]",value:r}},s=new _(64,64,64,64),c=new x({uniforms:o,vertexShader:m.vertex,fragmentShader:m.fragment,wireframe:!0}),a=new z(s,c);a.rotation.x=-Math.PI/2+Math.PI/4,a.scale.x=2,a.scale.y=2,a.scale.z=2,a.position.y=8,e.scene.add(a);const l=()=>{t.getByteFrequencyData(r),requestAnimationFrame(l)};return l(),e.animate(),()=>e.destroy()};export{D as init};
