(()=>{"use strict";const t=document.createElement("div");t.setAttribute("id","content"),document.body.append(t);const e=document.createElement("p");e.textContent="hello wmmggwgwmmmmorld",t.append(e);const i=new class{constructor(t,e,i,n){this.title=t,this.description=e,this.dueDate=i,this.priority=n}get title(){return this._title}set title(t){this._title=t}get description(){return this._description}set description(t){this._description=t}get dueDate(){return this._dueDate}set dueDate(t){this._title=t}get priority(){return this._priority}set priority(t){this._priority=t}}("t","t","t","t");t.append(i.title),t.append(function(){document.createElement("div").setAttribute("id","content");const t=document.createElement("header"),e=document.createElement("h1");return e.textContent="Todo List",t.append(e),t}())})();