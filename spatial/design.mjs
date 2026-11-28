const disciplines=Object.freeze([
 {id:'software',name:'Software and interface design',group:'digital'},{id:'games',name:'Game design',group:'digital'},{id:'3d',name:'3D modeling and environment design',group:'digital'},{id:'fashion',name:'Fashion and clothing',group:'physical'},{id:'merch',name:'Merchandise and accessories',group:'physical'},{id:'industrial',name:'Industrial and physical product design',group:'physical'},{id:'audio',name:'Sound design and audio',group:'sound'},{id:'music',name:'Music production',group:'sound'},{id:'graphics',name:'Graphics, branding and visual identity',group:'sound'}
]);
export function mountDesign(host,section){
 const root=document.createElement('section');host.append(root);
 const make=(tag,text,parent=root)=>{const e=document.createElement(tag);e.textContent=text;parent.append(e);return e;};
 const link=(label,url)=>{const a=make('a',label);a.href=url;return a;};
 if(section==='studio'){
 make('p','Unsaved local project concept. No public profile, upload, commission, contract or payment is enabled.');
 const title=make('input','');title.placeholder='Project title';title.setAttribute('aria-label','Project title');title.maxLength=120;
 const discipline=make('select','');discipline.setAttribute('aria-label','Design discipline');for(const d of disciplines)discipline.add(new Option(d.name,d.id));
 const kind=make('select','');kind.setAttribute('aria-label','Project purpose');for(const t of ['Portfolio showcase','Find a collaborator','Commission concept','Digital or physical product concept'])kind.add(new Option(t,t));
 const description=make('textarea','');description.placeholder='Describe your original work or brief';description.setAttribute('aria-label','Project brief');description.maxLength=2500;description.rows=6;
 const preview=make('article','');preview.className='mission-card';const render=()=>{preview.replaceChildren();make('h3',title.value.trim()||'Untitled design',preview);make('p',disciplines.find(d=>d.id===discipline.value).name+' · '+kind.value,preview);make('p',description.value,preview).style.whiteSpace='pre-wrap';};title.oninput=description.oninput=discipline.onchange=kind.onchange=render;render();
 make('button','Publish · not connected').disabled=true;link('1AGE Page — identity','https://1age.page/');link('1AGE Work — professional opportunities','https://1age.work/');return;
 }
 make('p','Creative categories only; no live designer profiles, commissions or products are indexed yet.');
 const q=make('input','');q.placeholder='Search design disciplines';q.setAttribute('aria-label','Search design disciplines');const results=make('div','');
 const render=()=>{results.replaceChildren();const rows=disciplines.filter(d=>(section==='discover'||d.group===section)&&d.name.toLowerCase().includes(q.value.trim().toLowerCase()));for(const d of rows){const c=make('article','',results);c.className='mission-card';make('strong',d.name,c);make('p','Planned designer discovery and collaboration',c);}if(!rows.length)make('p','No matching disciplines.',results);};q.oninput=render;render();
 link('Discover products on 1AGE Shop','https://1age.shop/');link('Explore virtual spaces','https://1age.space/');
}
