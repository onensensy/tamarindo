var L=Object.defineProperty;var k=(a,e,s)=>e in a?L(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s;var i=(a,e,s)=>(k(a,typeof e!="symbol"?e+"":e,s),s);import{P as R,W as U,e as V,V as N,T as y,f as l,L as _,g as q,D as G,c as I,h as c,i as D,S as W,M as P,j as S,k as z,B as K,l as j,m as O,R as A}from"./three.module.2f883259.js";import"./index.8f0bf197.js";import{n as Q}from"./app.be92839b.js";import"./Btn.abe2bb59.js";import"./_plugin-vue_export-helper.cdc0426e.js";class J{constructor(e){i(this,"camera");i(this,"timer");i(this,"renderer");i(this,"container");i(this,"resizeHandler");this.container=e,this.camera=new R(45,this.container.clientWidth/this.container.clientHeight,.1,100),this.camera.position.z=5,this.camera.updateProjectionMatrix(),this.timer=0,this.initRenderer(),this.resizeHandler=this.resize.bind(this),window.addEventListener("resize",this.resizeHandler,!1)}resize(){this.camera.aspect=this.container.clientWidth/this.container.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight)}initRenderer(){this.renderer=new U,this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.renderer.autoClear=!0,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=V,this.container.appendChild(this.renderer.domElement)}render(e){for(let s=0;s<e.length;s++)this.renderer.clearDepth(),e[s]();this.timer+=.001,this.timer>999999&&(this.timer=0)}ziggleCam(e){const s=e,t=new N(Math.sin(s),Math.cos(s*.9)*Math.sin(s*.7),Math.cos(s)).normalize();t.multiplyScalar(8+2*Math.sin(2*s)),this.camera.position.copy(t),this.camera.lookAt(0,0,0),this.camera.updateProjectionMatrix()}getInverseMatrix(){return this.camera.matrixWorldInverse}getTimer(){return this.timer==null?0:this.timer}getCamera(){return this.camera}destroy(){window.removeEventListener("resize",this.resizeHandler,!1),this.renderer.dispose()}}const X="/build/assets/nx_3js.c650ec73.jpg",Y="/build/assets/ny_3js.6a7c247d.jpg",Z="/build/assets/nz_3js.52e40f11.jpg",$="/build/assets/px_3js.441b7500.jpg",ee="/build/assets/py_3js.f5fc5da9.jpg",ie="/build/assets/pz_3js.788fef10.jpg",se="/build/assets/nx.4d5c02b9.jpg",te="/build/assets/ny.e343c0ac.jpg",oe="/build/assets/nz.3c4e001b.jpg",re="/build/assets/px.1f159379.jpg",ae="/build/assets/py.ef516744.jpg",ne="/build/assets/pz.79d4b89c.jpg",he="/build/assets/sprite_additive_rect.65047332.png",de="/build/assets/normal.3904ff76.jpg",le="/build/assets/roughness.8a2957ac.jpg",_e="/build/assets/metallic.c289a137.jpg";class ue{constructor(){i(this,"normalMap");i(this,"roughnessMap");i(this,"metallicMap");i(this,"normal",1);i(this,"roughness",0);i(this,"metallic",1);i(this,"exposure",2);i(this,"gamma",2.2);this.normalMap=new y().load(de),this.normalMap.wrapS=l,this.normalMap.wrapT=l,this.normalMap.magFilter=_,this.normalMap.minFilter=_,this.roughnessMap=new y().load(le),this.roughnessMap.wrapS=l,this.roughnessMap.wrapT=l,this.roughnessMap.magFilter=_,this.roughnessMap.minFilter=_,this.metallicMap=new y().load(_e),this.metallicMap.wrapS=l,this.metallicMap.wrapT=l,this.metallicMap.magFilter=_,this.metallicMap.minFilter=_}getNormalMap(){return this.normalMap}getRoughnessMap(){return this.roughnessMap}getMetallicMap(){return this.metallicMap}getExposure(){return this.exposure}getGamma(){return this.gamma}getNormal(){return this.normal}getRoughness(){return this.roughness}getMetallic(){return this.metallic}}class ce{constructor(){i(this,"shadowBuffer");i(this,"light");this.shadowBuffer=new q(2048,2048),this.shadowBuffer.depthBuffer=!0,this.shadowBuffer.depthTexture=new G(0,0),this.light=new R(35,this.shadowBuffer.width/this.shadowBuffer.height,.1,1e3),this.light.lookAt(0,0,0)}ziggle(e){const s=e*10;this.light.position.copy(new N(this.light.position.x*Math.sin(s),this.light.position.y,this.light.position.z*Math.cos(s))),this.light.lookAt(0,0,0),this.light.updateProjectionMatrix()}getLight(){return this.light}getLightPosition(){return this.light.position}getShadowMap(){return this.shadowBuffer.depthTexture}destroy(){this.shadowBuffer.dispose()}}const me=`
varying vec3 v_direction;
void main(){
	v_direction = position.xyz;
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position.xyz, 1.);
}
`,pe=`
#define A 0.15
#define B 0.50
#define C 0.10
#define D 0.20
#define E 0.02
#define F 0.30

uniform samplerCube u_cubemap;
uniform samplerCube u_cubemap_b;
uniform float cross_fader;
uniform float u_exposure;
uniform float u_gamma;
uniform bool u_show_cubemap;

varying vec3 v_direction;

vec3 Uncharted2Tonemap( vec3 x ){
	return ((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;
}

void main( void ){
	vec3 cube_a = pow( abs(textureCube( u_cubemap, v_direction ).rgb), vec3( 2.2 ) );
	vec3 cube_b = pow( abs(textureCube( u_cubemap_b, v_direction ).rgb), vec3( 2.2 ) );

	vec3 color 	= mix(cube_a, cube_b, cross_fader);

	// apply the tone-mapping
	// color 		= Uncharted2Tonemap( color * u_exposure );
	// white balance
	// color		= color * ( 1. / Uncharted2Tonemap( vec3( 20. ) ) );

	// gamma correction
	// color = pow( color, vec3( 1. / u_gamma ) );

	color *= u_show_cubemap ? 1. : 0.;

	gl_FragColor = vec4( color, 1. );
}
`,h=`
uniform vec2 u_mouse;
uniform vec2 u_mouse_delta;
uniform float u_t;
uniform bool u_is_init;

uniform float u_audio_high;
uniform float u_audio_mid;
uniform float u_audio_bass;
uniform float u_audio_level;
uniform float u_audio_history;

varying float v_noise;




#if defined(IS_PBR) && defined(HAS_CUBEMAP)
	uniform mat4 u_view_matrix_inverse;

	varying vec3 v_world_normal;
	varying vec3 v_eye_pos;
	varying vec3 v_object_pos;
	varying vec3 v_pos;
	varying vec3 v_normal;
	varying vec3 v_world_pos;
	varying vec2 v_uv;
#endif



#if defined(HAS_SHADOW)
	uniform mat4 u_shadow_matrix;
	varying vec4 v_shadow_coord;

	const mat4 biasMat  = mat4(	0.5, 0.0, 0.0, 0.0,
							0.0, 0.5, 0.0, 0.0,
							0.0, 0.0, 0.5, 0.0,
							0.5, 0.5, 0.5, 1.0 );
#endif


// (Keijiro) This shader was slightly modified from the original version.
// It's recommended to use the original version for other purposes.

//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : ijm
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//

vec3 mod289(vec3 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
    return mod289((x * 34.0 + 1.0) * x);
}

vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v)
{
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);

    // First corner
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v   - i + dot(i, C.xxx);

    // Other corners
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    // x1 = x0 - i1  + 1.0 * C.xxx;
    // x2 = x0 - i2  + 2.0 * C.xxx;
    // x3 = x0 - 1.0 + 3.0 * C.xxx;
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - 0.5;

    // Permutations
    i = mod289(i); // Avoid truncation effects in permutation
    vec4 p =
      permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0))
                            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                            + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    // Gradients: 7x7 points over a square, mapped onto an octahedron.
    // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
    vec4 j = p - 49.0 * floor(p * (1.0 / 49.0));  // mod(p,7*7)

    vec4 x_ = floor(j * (1.0 / 7.0));
    vec4 y_ = floor(j - 7.0 * x_ );  // mod(j,N)

    vec4 x = x_ * (2.0 / 7.0) + 0.5 / 7.0 - 1.0;
    vec4 y = y_ * (2.0 / 7.0) + 0.5 / 7.0 - 1.0;

    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    //vec4 s0 = vec4(lessThan(b0, 0.0)) * 2.0 - 1.0;
    //vec4 s1 = vec4(lessThan(b1, 0.0)) * 2.0 - 1.0;
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

    vec3 g0 = vec3(a0.xy, h.x);
    vec3 g1 = vec3(a0.zw, h.y);
    vec3 g2 = vec3(a1.xy, h.z);
    vec3 g3 = vec3(a1.zw, h.w);

    // Normalise gradients
    vec4 norm = taylorInvSqrt(vec4(dot(g0, g0), dot(g1, g1), dot(g2, g2), dot(g3, g3)));
    g0 *= norm.x;
    g1 *= norm.y;
    g2 *= norm.z;
    g3 *= norm.w;

    // Mix final noise value
    vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
    m = m * m;
    m = m * m;

    vec4 px = vec4(dot(x0, g0), dot(x1, g1), dot(x2, g2), dot(x3, g3));
    return (42.0 * dot(m, px) + 1.) * .5;
}

vec3 norm(in vec3 _v){
	return length(_v) > .0 ? normalize(_v) : vec3(.0);
}

mat4 rotationMatrix(vec3 axis, float angle)
{
    axis = norm(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;

    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                0.0,                                0.0,                                0.0,                                1.0);
}

void main(){
	float m_bass = u_audio_bass;
	float m_mid = u_audio_mid;
	float m_high = u_audio_high;
	float m_level = u_audio_level;
	float m_history = u_audio_history;

	vec3 m_noise_seed = position.xyz;
	float m_noise_complexity = .6;
	float m_noise_time = u_audio_history * .3;
	float m_noise_scale = 1.2 + m_level;

	vec3 m_tangent_vector = .00001 * norm(cross(position, vec3(1., 0., 0.))
							+ cross(position, vec3(0., 1., 0.)));
	vec3 m_bitangent_vector = .00001 * norm(cross(m_tangent_vector, position));

    float m_fbm = 0.;
    float m_fbm_tangent = 0.;
    float m_fbm_bitangent = 0.;

    const int m_noise_oct = 5;
    for(int i = 0; i < m_noise_oct; i++){
    	m_fbm += snoise(
    		(m_noise_seed) * m_noise_complexity * float(i) +
    		m_noise_time * float(i)
    	);
    	m_fbm_tangent += snoise(
    		(m_noise_seed + m_tangent_vector) * m_noise_complexity * float(i) +
    		m_noise_time * float(i)
    	);
    	m_fbm_bitangent += snoise(
    		(m_noise_seed + m_bitangent_vector) * m_noise_complexity * float(i) +
    		m_noise_time * float(i)
    	);
    }
    m_fbm /= (float(m_noise_oct));
    m_fbm_tangent /= (float(m_noise_oct));
    m_fbm_bitangent /= (float(m_noise_oct));

    vec3 m_pos = position + norm(position) * m_fbm * m_noise_scale;
    vec3 m_pos_tangent = (position + m_tangent_vector) + norm(position + m_tangent_vector) * m_fbm * m_noise_scale;
    vec3 m_pos_bitangent = (position + m_bitangent_vector) + norm(position + m_bitangent_vector) * m_fbm * m_noise_scale;

    vec3 m_normal = norm(cross( (m_pos_tangent - m_pos), (m_pos_bitangent - m_pos)));


	// get color
    float m_noise_col = pow(abs(1.-m_fbm), 3.5);
    v_noise = m_noise_col + m_noise_col * m_level * 2.2;

    // rand direction
    float _dirx = snoise(m_pos.zyx * 4. + m_noise_time * .01);
	float _diry = snoise(m_pos.yzx * 4. + m_noise_time * .01);
	float _dirz = snoise(m_pos.zxy * 4. + m_noise_time * .01);
	vec3 _rand_point_dir = vec3(_dirx, _diry, _dirz);
	_rand_point_dir = 1.-2.*_rand_point_dir;

#if defined(IS_WIRE) || defined(IS_POINTS)
	// size
	gl_PointSize = pow(abs(m_fbm), 6.) * 1000. * m_high;

	m_pos += (_rand_point_dir * .3 * m_level);
#endif

#if defined(IS_POP)
	gl_PointSize *= .5;
	m_pos *= 1.1 * m_fbm;
	m_pos = vec3(rotationMatrix(vec3(.3,1.,.2), .5*m_history) * vec4(m_pos, 1.));
#endif
#if defined(IS_POP_OUT)
	gl_PointSize *= .5;
	m_pos *= 1.2;

	m_pos += (_rand_point_dir*_rand_point_dir * .2 * m_high);
	m_pos = vec3(rotationMatrix(vec3(1.,.2,.3), -.5*m_history) * vec4(m_pos, 1.));
#endif



#if defined(IS_PBR) && defined(HAS_CUBEMAP)
	vec4 _world_pos	= modelMatrix * vec4(m_pos, 1.);
    vec4 _view_pos	= viewMatrix * _world_pos;

    v_object_pos = m_pos;
    v_pos = _view_pos.xyz;
	v_normal = normalMatrix * m_normal;
	v_world_pos = _world_pos.xyz;
	v_world_normal = vec3(u_view_matrix_inverse * vec4(v_normal, 0.));
	v_eye_pos = -1. * vec3(u_view_matrix_inverse * (_view_pos - vec4(0.,0.,0.,1.)) );
	v_uv = uv;

#endif

#if defined(HAS_SHADOW)
	v_shadow_coord = (biasMat * u_shadow_matrix) * vec4(m_pos, 1.);
#endif

	gl_Position = projectionMatrix * modelViewMatrix * vec4(m_pos, 1.);
}
`,d=`

varying float v_noise;

uniform float u_audio_high;
uniform float u_audio_mid;
uniform float u_audio_bass;
uniform float u_audio_level;
uniform float u_audio_history;

vec3 norm(in vec3 _v){
  return length(_v) > .0 ? normalize(_v) : vec3(.0);
}

#if defined(IS_POINTS)
  uniform sampler2D tex_sprite;
#endif

#if defined(IS_PBR) && defined(HAS_CUBEMAP)
  uniform samplerCube cubemap;
  uniform samplerCube cubemap_b;
  uniform float cross_fader;

  uniform sampler2D tex_normal;
  uniform sampler2D tex_roughness;
  uniform sampler2D tex_metallic;

  uniform float u_normal;
  uniform float u_roughness;
  uniform float u_metallic;
  uniform float u_exposure;
  uniform float u_gamma;

  varying vec3 v_world_normal;
  varying vec3 v_object_pos;
  varying vec3 v_eye_pos;
  varying vec3 v_pos;
  varying vec3 v_normal;
  varying vec3 v_world_pos;
  varying vec2 v_uv;

  #define PI 3.1415926535897932384626433832795

  // Filmic tonemapping from
  // http://filmicgames.com/archives/75
  const float A = 0.15;
  const float B = 0.50;
  const float C = 0.10;
  const float D = 0.20;
  const float E = 0.02;
  const float F = 0.30;

  vec3 Uncharted2Tonemap( vec3 x )
  {
    return ((x*(A*x+C*B)+D*E)/((x*(A*x+B)+D*F) + .00001))-E/F;
  }

  // https://www.unrealengine.com/blog/physically-based-shading-on-mobile
  vec3 EnvBRDFApprox( vec3 SpecularColor, float Roughness, float NoV )
  {
    const vec4 c0 = vec4( -1, -0.0275, -0.572, 0.022 );
    const vec4 c1 = vec4( 1, 0.0425, 1.04, -0.04 );
    vec4 r = Roughness * c0 + c1;
    float a004 = min( r.x * r.x, exp2( -9.28 * NoV ) ) * r.x + r.y;
    vec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;
    return SpecularColor * AB.x + AB.y;
  }


  // http://the-witness.net/news/2012/02/seamless-cube-map-filtering/
  vec3 fix_cube_lookup( vec3 v, float cube_size, float lod ) {
    float M = max(max(abs(v.x), abs(v.y)), abs(v.z));
    float scale = 1. - exp2(lod) / (cube_size + .00001);
    if (abs(v.x) != M) v.x *= scale;
    if (abs(v.y) != M) v.y *= scale;
    if (abs(v.z) != M) v.z *= scale;
    return v;
  }

  // Normal Blending
  // Source adapted from http://blog.selfshadow.com/publications/blending-in-detail/
  vec3 blendNormalsUnity( vec3 baseNormal, vec3 detailsNormal )
  {
      vec3 n1 = baseNormal;
      vec3 n2 = detailsNormal;
      mat3 nBasis = mat3(
          vec3(n1.z, n1.y, -n1.x), // +90 degree rotation around y axis
          vec3(n1.x, n1.z, -n1.y), // -90 degree rotation around x axis
          vec3(n1.x, n1.y,  n1.z));
      return norm(n2.x*nBasis[0] + n2.y*nBasis[1] + n2.z*nBasis[2]);
  }
  vec3 blendNormals( vec3 n1, vec3 n2 )
  {
    return blendNormalsUnity( n1, n2 );
  }
#endif

#if defined(HAS_SHADOW)
  uniform sampler2D u_shadow_map;
  uniform vec3 u_light_pos;
  uniform bool u_debug_shadow;
  varying vec4 v_shadow_coord;

  float sample_shadow( vec4 sc )
  {
    float s = 1./1024.;

    vec2 unproj2D = vec2 (sc.s / (sc.q + .00001),
                          sc.t / (sc.q + .00001));

    float shadow = 0.0;
    shadow += texture2D( u_shadow_map, unproj2D + vec2(-s,-s) ).r;
    shadow += texture2D( u_shadow_map, unproj2D + vec2(-s, 0.) ).r;
    shadow += texture2D( u_shadow_map, unproj2D + vec2(-s, s) ).r;
    shadow += texture2D( u_shadow_map, unproj2D + vec2( 0.,-s) ).r;
    shadow += texture2D( u_shadow_map, unproj2D + vec2( 0., 0.) ).r;
    shadow += texture2D( u_shadow_map, unproj2D + vec2( 0., s) ).r;
    shadow += texture2D( u_shadow_map, unproj2D + vec2( s,-s) ).r;
    shadow += texture2D( u_shadow_map, unproj2D + vec2( s, 0.) ).r;
    shadow += texture2D( u_shadow_map, unproj2D + vec2( s, s) ).r;

    return shadow/9.0;;
  }
#endif


void main(){
  float m_noise = v_noise;
  float m_noise_inv = 1.-v_noise;

  vec3 m_diffuse = vec3(0.);
  m_diffuse.r += m_noise_inv + m_noise;
  m_diffuse.g += m_noise*1.5;
  //m_diffuse.b += m_noise;
  m_diffuse -= pow(abs(1.-m_noise), 4.)*.95; //<- darken peak
  m_diffuse = clamp(m_diffuse, vec3(0.), vec3(2.));

  m_diffuse *= pow(u_audio_level, 2.);

  vec3 m_col = m_diffuse;


#if defined(IS_SHADOW)
  gl_FragColor = vec4(m_col, 1.);

  return;
#endif


#if defined(IS_PBR) && defined(HAS_CUBEMAP)
  vec3 N = norm( v_world_normal );

  // blend with PBR's
  N = blendNormals( N, texture2D( tex_normal, v_uv ).xyz );

  vec3 V = norm( v_eye_pos );

  // fresnel
  float m_fresnel = pow(1. + dot(norm(v_world_pos - v_eye_pos), v_world_normal), 8.);

#if defined(HAS_SHADOW)
  // Light direction
  vec3  L = norm( u_light_pos - v_world_pos.xyz );
  // Surface reflection vector
  vec3  R = norm( -reflect( L, N ) );
#endif

  // sample the roughness and metallic textures
  float roughnessMask = texture2D( tex_roughness, v_uv ).r;
  float metallicMask  = texture2D( tex_metallic, v_uv ).r;

  // deduce the diffuse and specular color from the baseColor and how metallic the material is
  vec3 m_specular_col = vec3(m_diffuse)*8.;
  vec3 m_diffuse_col = vec3(m_diffuse)*8.;
  vec3 diffuseColor = m_diffuse_col - m_diffuse_col * u_metallic * metallicMask;
  vec3 specularColor  = mix( vec3( 0.08 * m_specular_col ), m_diffuse_col, u_metallic * metallicMask );

  // sample the pre-filtered cubemap at the corresponding mipmap level
  int numMips     = 6;
  float mip     = float(numMips) - 1. + log2( u_roughness * roughnessMask );
  vec3 lookup     = -reflect( V, N );

  vec3 cube_a_rad = pow( abs(textureCube( cubemap, fix_cube_lookup( lookup, 2048., mip ) ).rgb), vec3( 2.2 ) );
  vec3 cube_b_rad = pow( abs(textureCube( cubemap_b, fix_cube_lookup( lookup, 2048., mip ) ).rgb), vec3( 2.2 ) );
  vec3 cube_a_irr = pow( abs(textureCube( cubemap, fix_cube_lookup( N, 2048., 0. ) ).rgb), vec3( 2.2 ) );
  vec3 cube_b_irr = pow( abs(textureCube( cubemap_b, fix_cube_lookup( N, 2048., 0. ) ).rgb), vec3( 2.2 ) );

  vec3 radiance = mix(cube_a_rad, cube_b_rad, cross_fader);
  vec3 irradiance = mix(cube_a_irr, cube_b_irr, cross_fader);

  // get the approximate reflectance
  // float NoV     = saturate( dot( N, V ) );
  float NoV     = clamp( dot( N, V ), 0., 1. );
  vec3 reflectance  = EnvBRDFApprox( specularColor, pow( abs(u_roughness * roughnessMask), 4.0 ), NoV );

  // combine the specular IBL and the BRDF
  vec3 diffuse  = diffuseColor * radiance;
  vec3 specular = radiance * reflectance;
  m_col = (diffuse + specular)*u_audio_level*(1.-min(m_fresnel, .99));

#if defined(HAS_SHADOW)
  // from light source
  vec3 m_light_diffuse_color = vec3(m_diffuse)*3.;
  vec3 m_light_specular_color = vec3(m_diffuse)*3.;
  float m_light_diffuse_intensity = 30.;
  float m_light_specular_intensity = 30.;
  float m_light_diffuse_pow = 150.;
  float m_light_specular_pow = 120.;

  // Diffuse factor
  float NdotL = max( dot( N, L ), 0.0 );
  vec3  D = vec3( NdotL );
  D = pow(abs(D), vec3(m_light_diffuse_pow));
  D *= m_light_diffuse_color * m_light_diffuse_intensity;

  // Specular factor
  vec3  S = pow( max( dot( R, V ), 0.0 ), m_light_specular_pow ) * vec3(1.);
  S *= m_light_specular_color * m_light_specular_intensity;

  m_col += (D + S)*u_audio_level*(1.-min(m_fresnel, .99));

  // cal shadow
  float m_shadow = 1.;
  vec4 m_shadow_coord = v_shadow_coord;
  m_shadow_coord.z += .0003; // <- bias

  m_shadow = sample_shadow(m_shadow_coord);
  m_col *= (m_shadow + m_col*.2 + m_diffuse*.5);
#endif

  // add noise diffuse
  m_col += pow(abs(m_diffuse), vec3(10.))*8.;

  // apply the tone-mapping
  m_col       = Uncharted2Tonemap( m_col * u_exposure );
  // white balance
  m_col       = m_col * ( 1. / (Uncharted2Tonemap( vec3( 20. ) ) + .00001) );

  // gamma correction
  m_col       = pow( abs(m_col), vec3( 1. / (u_gamma + .00001) ) );
#endif




#if defined(IS_WIRE) || defined(IS_POINTS)
  m_col.b -= m_col.g;

  // inner ziggle
  m_col *= .4 * pow(abs(m_noise), 6.);

  // outter ziggle
  m_col.rg += .2 * pow(abs(m_noise_inv), 4.);
  m_col.g *= .5;

  // treble burn
  m_col += pow(abs(u_audio_high), 3.) * 1.;

  // on&off
  m_col *= u_audio_level;

  #if defined(IS_WIRE)
    m_col *= .7;
  #endif
#endif


  gl_FragColor = vec4(m_col, 1.);

#if defined(HAS_SHADOW)
  if(u_debug_shadow)
    gl_FragColor = vec4(vec3(m_shadow), 1.);
#endif


#if defined(IS_POINTS)
  gl_FragColor *= texture2D(tex_sprite, gl_PointCoord);
#endif


#if defined(IS_POP) || defined(IS_POP_OUT)
  gl_FragColor.rgb = pow(abs(gl_FragColor.rgb), vec3(1.2));

  #if defined(IS_POINTS) && defined(IS_POP)
    gl_FragColor.rgb *= pow(u_audio_level, 2.);
    gl_FragColor.rgb *= 50.;
  #endif

  #if defined(IS_WIRE)
    gl_FragColor.rgb *= 2.;

    #if defined(IS_POP_OUT)
      gl_FragColor.rgb *= .2;
    #endif
  #endif
#endif

}
`;class fe{constructor(e,s,t){i(this,"textSprite");i(this,"renderer");i(this,"isInit");i(this,"showHdr");i(this,"w");i(this,"h");i(this,"shaderCubeMap");i(this,"pbr");i(this,"scene");i(this,"shadowScene");i(this,"shaderMesh");i(this,"shaderWire");i(this,"shaderPoints");i(this,"shaderShadow");i(this,"shaderPopPoints");i(this,"shaderPopWire");i(this,"shaderPopPointsOut");i(this,"shaderPopWireOut");i(this,"light");i(this,"cubeMapB");i(this,"cubeMap");i(this,"analyzer");i(this,"timer",0);this.renderer=e,this.analyzer=s,this.light=t,this.isInit=!1,this.showHdr=!0,this.w=e.container.clientWidth,this.h=e.container.clientHeight,this.initTexture(),this.initShader(),this.initScene(),this.initCubeMap()}destroy(){var e,s,t,o,r,n,f,v,g,x,b,p;this.renderer.destroy(),this.light.destroy(),(e=this.textSprite)==null||e.dispose(),(s=this.shaderCubeMap)==null||s.dispose(),(t=this.shaderMesh)==null||t.dispose(),(o=this.shaderWire)==null||o.dispose(),(r=this.shaderPoints)==null||r.dispose(),(n=this.shaderShadow)==null||n.dispose(),(f=this.shaderPopPoints)==null||f.dispose(),(v=this.shaderPopWire)==null||v.dispose(),(g=this.shaderPopPointsOut)==null||g.dispose(),(x=this.shaderPopWireOut)==null||x.dispose(),(b=this.cubeMapB)==null||b.dispose(),(p=this.cubeMap)==null||p.dispose()}initTexture(){this.textSprite=new y().load(he),this.textSprite.wrapS=l,this.textSprite.wrapT=l,this.textSprite.magFilter=_,this.textSprite.minFilter=_}initShader(){const e="vec2( "+this.w.toFixed(1)+", "+this.h.toFixed(1)+")",s=(r,n)=>new I({defines:{SCREEN_RES:e},uniforms:{u_t:{value:0},u_is_init:{value:!1},u_audio_high:{value:0},u_audio_mid:{value:0},u_audio_bass:{value:0},u_audio_level:{value:0},u_audio_history:{value:0}},vertexShader:r,fragmentShader:n});this.shaderCubeMap=new I({defines:{SCREEN_RES:e},uniforms:{u_cubemap:{value:this.cubeMap},u_cubemap_b:{value:this.cubeMapB},u_exposure:{value:2},u_gamma:{value:2.2}},vertexShader:me,fragmentShader:pe}),this.shaderMesh=s(h,d),this.shaderWire=s(h,d),this.shaderPoints=s(h,d),this.shaderShadow=s(h,d),this.shaderPopPoints=s(h,d),this.shaderPopWire=s(h,d),this.shaderPopPointsOut=s(h,d),this.shaderPopWireOut=s(h,d),this.shaderMesh.extensions.derivatives=!0,this.shaderMesh.defines.IS_MESH="true",this.shaderMesh.defines.HAS_SHADOW="true",this.shaderWire.defines.IS_WIRE="true",this.shaderPoints.defines.IS_POINTS="true",this.shaderShadow.defines.IS_SHADOW="true",this.shaderPopPoints.defines.IS_POINTS="true",this.shaderPopPoints.defines.IS_POP="true",this.shaderPopWire.defines.IS_WIRE="true",this.shaderPopWire.defines.IS_POP="true",this.shaderPopPointsOut.defines.IS_POINTS="true",this.shaderPopPointsOut.defines.IS_POP_OUT="true",this.shaderPopWireOut.defines.IS_WIRE="true",this.shaderPopWireOut.defines.IS_POP_OUT="true";const t=this.light.getLightPosition();t.applyMatrix4(this.renderer.camera.modelViewMatrix);const o=new j;o.identity(),o.multiplyMatrices(this.light.getLight().projectionMatrix,this.light.getLight().modelViewMatrix),this.shaderMesh.uniforms.u_light_pos={value:t},this.shaderMesh.uniforms.u_shadow_matrix={value:o},this.shaderMesh.uniforms.u_shadow_map={value:this.light.getShadowMap()},this.shaderMesh.uniforms.u_debug_shadow={value:!1},this.shaderPoints.uniforms.textSprite={value:this.textSprite},this.shaderPopPoints.uniforms.textSprite={value:this.textSprite},this.shaderPopWire.uniforms.textSprite={value:this.textSprite},this.shaderPopPointsOut.uniforms.textSprite={value:this.textSprite},this.shaderPopWireOut.uniforms.textSprite={value:this.textSprite},this.shaderPoints.blending=c,this.shaderWire.blending=c,this.shaderPopPoints.blending=c,this.shaderPopWire.blending=c,this.shaderPopPointsOut.blending=c,this.shaderPopWireOut.blending=c,this.shaderWire.transparent=!0,this.shaderPoints.transparent=!0,this.shaderPopPoints.transparent=!0,this.shaderPopWire.transparent=!0,this.shaderPopPointsOut.transparent=!0,this.shaderPopWireOut.transparent=!0,this.shaderWire.depthTest=!1,this.shaderPoints.depthTest=!1,this.shaderPopPoints.depthTest=!1,this.shaderPopWire.depthTest=!1,this.shaderPopPointsOut.depthTest=!1,this.shaderPopWireOut.depthTest=!1}initScene(){const s=new D(.7,128,128),t=new D(.7,64,64);this.scene=new W,this.shadowScene=new W;const o=new P(s,this.shaderMesh),r=new S(t,this.shaderWire),n=new z(s,this.shaderPoints),f=new P(s,this.shaderShadow),v=new z(t,this.shaderPopPoints),g=new S(t,this.shaderPopWire),x=new z(t,this.shaderPopPointsOut),b=new S(t,this.shaderPopWireOut);this.scene.add(o),this.scene.add(r),this.scene.add(n),this.scene.add(v),this.scene.add(g),this.scene.add(x),this.scene.add(b),this.shadowScene.add(f);const p=new K(100,100,100),H=new P(p,this.shaderCubeMap),w=new j().identity();w.elements[0]=-1,w.elements[5]=-1,w.elements[10]=-1,p.applyMatrix4(w),this.scene.add(H)}initCubeMap(){this.cubeMap=new O().load([$,X,ee,Y,ie,Z]),this.cubeMap.format=A,this.cubeMapB=new O().load([re,se,ae,te,ne,oe]),this.cubeMapB.format=A,this.shaderMesh.uniforms.cubemap={value:this.cubeMap},this.shaderCubeMap.uniforms.u_cubemap.value=this.cubeMap,this.shaderMesh.uniforms.cubemap_b={value:this.cubeMapB},this.shaderCubeMap.uniforms.u_cubemap_b.value=this.cubeMapB,this.shaderCubeMap.uniforms.u_show_cubemap={value:this.showHdr},this.shaderMesh.defines.HAS_CUBEMAP="true"}updateCubeMap(){this.shaderMesh.uniforms.cross_fader={value:0},this.shaderCubeMap.uniforms.cross_fader={value:0},this.shaderCubeMap.uniforms.u_exposure.value=this.pbr.getExposure(),this.shaderCubeMap.uniforms.u_gamma.value=this.pbr.getGamma()}update(){const e=[this.shaderMesh,this.shaderWire,this.shaderPoints,this.shaderPopPoints,this.shaderPopWire,this.shaderPopPointsOut,this.shaderPopWireOut,this.shaderShadow];for(let t=0;t<e.length;t++)e[t].uniforms.u_is_init.value=this.isInit,e[t].uniforms.u_t.value=this.timer,e[t].uniforms.u_audio_high.value=this.analyzer.getHigh(),e[t].uniforms.u_audio_mid.value=this.analyzer.getMid(),e[t].uniforms.u_audio_bass.value=this.analyzer.getBass(),e[t].uniforms.u_audio_level.value=this.analyzer.getLevel(),e[t].uniforms.u_audio_history.value=this.analyzer.getHistory();this.updateCubeMap();const s=this.renderer.getCamera();this.renderer.renderer.render(this.scene,s),this.isInit||(this.isInit=!0),this.timer=this.renderer.getTimer()}setRetina(){this.w*=.5,this.h*=.5}setPBR(e){this.pbr=e,this.shaderMesh.uniforms.tex_normal={value:this.pbr.getNormalMap()},this.shaderMesh.uniforms.tex_roughness={value:this.pbr.getRoughnessMap()},this.shaderMesh.uniforms.tex_metallic={value:this.pbr.getMetallicMap()},this.shaderMesh.uniforms.u_normal={value:this.pbr.getNormal()},this.shaderMesh.uniforms.u_roughness={value:this.pbr.getRoughness()},this.shaderMesh.uniforms.u_metallic={value:this.pbr.getMetallic()},this.shaderMesh.uniforms.u_exposure={value:this.pbr.getExposure()},this.shaderMesh.uniforms.u_gamma={value:this.pbr.getGamma()},this.shaderMesh.uniforms.u_view_matrix_inverse={value:this.renderer.getInverseMatrix()},this.shaderMesh.defines.IS_PBR="true"}updatePBR(){this.shaderMesh.uniforms.u_normal.value=this.pbr.getNormal(),this.shaderMesh.uniforms.u_roughness.value=this.pbr.getRoughness(),this.shaderMesh.uniforms.u_metallic.value=this.pbr.getMetallic(),this.shaderMesh.uniforms.u_exposure.value=this.pbr.getExposure(),this.shaderMesh.uniforms.u_gamma.value=this.pbr.getGamma(),this.shaderMesh.uniforms.u_view_matrix_inverse.value=this.renderer.getInverseMatrix()}}class ve{constructor(){i(this,"bass",0);i(this,"mid",0);i(this,"high",0);i(this,"level",0);i(this,"history",0);i(this,"frame",0);i(this,"frequencyBinCount");i(this,"audioBuffer");i(this,"analyzer");this.analyzer=Q.analyzer,this.analyzer.fftSize=128,this.frequencyBinCount=this.analyzer.frequencyBinCount,this.audioBuffer=new Uint8Array(this.frequencyBinCount)}update(){this.analyzer.getByteFrequencyData(this.audioBuffer);let e=0,s=0,t=0;if(this.audioBuffer[0]===0)this.frame%40==Math.floor(Math.random()*40)&&(e=Math.random(),s=Math.random(),t=Math.random());else{const o=this.frequencyBinCount/3;for(let r=0;r<this.frequencyBinCount;r++){const n=Math.pow(this.audioBuffer[r]/196,3);r<o?e+=n:r>=o&&r<o*2?s+=n:r>=o*2&&(t+=n)}e/=o,s/=o,t/=o}this.bass=this.bass>e?this.bass*.96:e,this.mid=this.mid>s?this.mid*.96:s,this.high=this.high>t?this.high*.96:t,this.level=(this.bass+this.mid+this.high)/3,this.history+=this.level*.01+.005,this.frame++}getBass(){return this.bass||0}getMid(){return this.mid||0}getHigh(){return this.high||0}getLevel(){return this.level||0}getHistory(){return this.history||0}}class ge{isRetina(){const e=window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");return e&&e.matches||window.devicePixelRatio>1}}let M,m,F,u,C,B,T;const Se=a=>{T=new ge;const e=T.isRetina();return M=new ve,m=new J(a),C=new ue,B=new ce,u=new fe(m,M,B),u.setPBR(C),e&&u.setRetina(),F=[u.update.bind(u)],E(),()=>{u.destroy()}},E=()=>{requestAnimationFrame(E),M.update(),u.updatePBR(),C.exposure=5+30*M.getLevel(),B.ziggle(m.getTimer()),m.ziggleCam(m.getTimer()),m.render(F)};export{Se as init};
