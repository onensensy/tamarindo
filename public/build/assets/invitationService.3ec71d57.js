import{h as i,u as s}from"./index.8f0bf197.js";const c={getUserProspect:async t=>await i.get(`invitations?token=${t}`),async accept(t,a,e){await i.post("invitations/accept",{token:t,name:a,password:e})},invite:async(t,a)=>{(await i.post("invitations",{emails:t,is_admin:a})).forEach(n=>s.add(n))},revoke:async t=>{await i.delete("invitations",{email:t.email}),s.remove(t)}};export{c as i};