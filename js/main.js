(function(){
var d=document,root=d.documentElement;
root.className+=" js";
var drawer=d.getElementById("drawer"),openBtn=d.getElementById("burger");
function setDrawer(on){
  if(!drawer)return;
  drawer.classList.toggle("open",on);
  if(openBtn)openBtn.setAttribute("aria-expanded",on?"true":"false");
  root.style.overflow=on?"hidden":"";
  if(on){var c=drawer.querySelector(".drawer-top button");if(c)c.focus();}else if(openBtn){openBtn.focus();}
}
if(openBtn){openBtn.addEventListener("click",function(){setDrawer(true);});}
if(drawer){
  drawer.querySelectorAll("[data-close]").forEach(function(el){el.addEventListener("click",function(){setDrawer(false);});});
  d.addEventListener("keydown",function(e){if(e.key==="Escape"&&drawer.classList.contains("open"))setDrawer(false);});
}
var mq=window.matchMedia("(min-width:901px)");
function onMq(){if(mq.matches&&drawer&&drawer.classList.contains("open")){drawer.classList.remove("open");root.style.overflow="";}}
if(mq.addEventListener){mq.addEventListener("change",onMq);}else if(mq.addListener){mq.addListener(onMq);}
d.querySelectorAll(".faq-q").forEach(function(b){
  b.addEventListener("click",function(){
    var a=b.nextElementSibling,open=b.getAttribute("aria-expanded")==="true";
    b.setAttribute("aria-expanded",open?"false":"true");
    a.style.maxHeight=open?"0px":a.scrollHeight+"px";
  });
});
var bar=d.querySelector(".callbar"),foot=d.querySelector("footer");
if(bar&&foot&&"IntersectionObserver" in window){
  new IntersectionObserver(function(es){es.forEach(function(e){bar.classList.toggle("hide",e.isIntersecting);});},{threshold:0.05}).observe(foot);
}
})();
