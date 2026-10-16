/* Local SVG figures: no external chart library, network requests, or tracking. */
(function () {
  'use strict';
  const months = ['January','February','March','April','May','June','July','August'];
  const clicks = [5773,15007,31346,41433,55332,64901,64194,42728];
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const number = value => Number(value).toLocaleString('en-US');
  const text = (x,y,value,extra='') => `<text x="${x}" y="${y}" ${extra}>${escape(value)}</text>`;
  const table = (headers,rows) => `<details class="chart-data"><summary>View chart data</summary><div class="table-scroll" tabindex="0" role="region" aria-label="Chart data"><table><thead><tr>${headers.map(h=>`<th scope="col">${escape(h)}</th>`).join('')}</tr></thead><tbody>${rows.map(row=>`<tr>${row.map((v,i)=>i===0?`<th scope="row">${escape(v)}</th>`:`<td>${escape(v)}</td>`).join('')}</tr>`).join('')}</tbody></table></div></details>`;
  function svg(title, height, content, width=640) {
    return `<svg class="data-chart" role="img" aria-label="${escape(title)}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg"><title>${escape(title)}</title>${content}</svg>`;
  }
  function bars(title,labels,series,{max,unit='',approx=false}={}) {
    // Horizontal bars keep long labels readable. Every numeric scale starts at zero.
    max=max||Math.max(...series.flatMap(s=>s.values))*1.18;
    const width=640,left=12,plot=540,top=38,group=series.length*35+45,height=top+labels.length*group+45;
    let content='';
    labels.forEach((label,i)=>{
      const y=top+i*group;
      content+=text(left,y,label,'class="chart-label"');
      series.forEach((s,j)=>{
        const value=s.values[i],barWidth=value/max*plot,barY=y+12+j*35;
        const labelText=`${s.name}: ${approx?'≈ ':''}${number(value)}${unit}`;
        content+=`<g tabindex="0" role="img" aria-label="${escape(label+': '+labelText)}"><title>${escape(label+': '+labelText)}</title><rect x="${left}" y="${barY}" width="${barWidth}" height="17" rx="2" class="series-${j}"/>${text(left+barWidth+8,barY+14,(approx?'≈ ':'')+number(value)+unit,'class="chart-value"')}</g>`;
      });
    });
    const axisY=height-27;
    content+=`<line x1="12" y1="${axisY}" x2="552" y2="${axisY}" class="chart-axis"/>`;
    for(let i=0;i<=4;i++){const v=max*i/4;content+=text(12+plot*i/4,axisY+20,number(Math.round(v*100)/100)+unit,`text-anchor="${i===0?'start':i===4?'end':'middle'}" class="axis-label"`);}
    const legend=series.length>1?`<div class="chart-legend">${series.map((s,i)=>`<span><i class="series-${i}" aria-hidden="true"></i>${escape(s.name)}</span>`).join('')}</div>`:'';
    return legend+svg(title,height,content,width)+table(['Period / page',...series.map(s=>s.name+(unit?' ('+unit+')':''))],labels.map((l,i)=>[l,...series.map(s=>(approx?'≈ ':'')+number(s.values[i]))]));
  }
  function monthly(line=false) {
    const title=line?'Monthly organic growth trajectory':'Monthly Google Search clicks';
    const max=70000,left=62,top=40,plotW=540,plotH=240,base=280;
    let content='';
    for(let v=0;v<=max;v+=10000){const y=base-v/max*plotH;content+=`<line x1="${left}" y1="${y}" x2="620" y2="${y}" class="chart-grid"/>`+text(left-9,y+4,v===0?'0':(v/1000)+'k','text-anchor="end" class="axis-label"');}
    const points=clicks.map((v,i)=>[left+28+i*(plotW/8),base-v/max*plotH]);
    if(line) content+=`<polyline points="${points.map(p=>p.join(',')).join(' ')}" fill="none" class="trend-line"/>`;
    clicks.forEach((v,i)=>{const [x,y]=points[i];content+=`<g tabindex="0" role="img" aria-label="${months[i]}: ${number(v)} clicks"><title>${months[i]}: ${number(v)} clicks</title>${line?`<circle cx="${x}" cy="${y}" r="4" class="series-0"/>`:`<rect x="${x-19}" y="${y}" width="38" height="${base-y}" rx="2" class="series-0"/>`}${text(x,y-10,number(v),'text-anchor="middle" class="chart-value"')}${text(x,base+24,months[i].slice(0,3),'text-anchor="middle" class="axis-label"')}</g>`;});
    return `<p class="chart-unit">Google Search clicks · zero-based axis</p>`+svg(title,322,content)+table(['Month','Clicks'],months.map((m,i)=>[m,number(clicks[i])]));
  }
  function comparison(title,labels,metrics){return `<div class="comparison-panels">${metrics.map(m=>`<section class="metric-panel"><h4>${escape(m.name)}</h4>${m.note?`<p class="chart-note">${escape(m.note)}</p>`:''}${bars(title+' — '+m.name,labels,[{name:m.name,values:m.values}],{max:m.max,unit:m.unit||''})}</section>`).join('')}</div>`;}
  function renderFigure(n){
    switch(n){
      case 1:return monthly();
      case 2:return monthly(true);
      case 3:return comparison('July versus August',['July','August'],[{name:'Clicks',values:[64194,42728],max:80000},{name:'Impressions',values:[584717,374296],max:700000},{name:'CTR',values:[10.98,11.42],max:15,unit:'%'},{name:'Average position',values:[6.74,7.17],max:10,note:'Lower average position is better. This is not a count of rankings.'}]);
      case 4:return comparison('August 20 versus August 21',['August 20','August 21'],[{name:'Clicks',values:[1493,216],max:1800,note:'85.5% decline (rounded from the supplied values).'},{name:'Impressions',values:[12016,972],max:15000,note:'91.9% decline (rounded from the supplied values).'}]);
      case 5:return bars('Approximate average daily clicks',['August 1–20 (20 days)','August 21–31 (11 days)'],[{name:'Average daily clicks',values:[2008,233]}],{max:2500,approx:true});
      case 6:return bars('Selected landing page clicks',['Littleman Remake','Summertime Saga','Daily Lives of My Countryside','Zombies Retreat 2','Agent 17','Being a DIK'],[{name:'July',values:[2714,4377,1661,1453,1551,1271]},{name:'August',values:[1033,3304,835,699,917,3404]}],{max:5500});
      case 7:return bars('Indexing exclusions — October 12, 2026',['Blocked by robots.txt','Excluded by noindex','Crawled — currently not indexed'],[{name:'Reported URLs',values:[521,446,415]}],{max:650});
      default:throw new Error('Unknown figure');
    }
  }
  if(typeof module!=='undefined'&&module.exports) module.exports={renderFigure};
  // Figures are pre-rendered in HTML, so charts and data work without JavaScript.
  if(typeof document!=='undefined'){
    document.querySelectorAll('.case-study table').forEach(t=>{
      t.querySelectorAll('thead th').forEach(th=>th.scope='col');
    });
  }
})();
