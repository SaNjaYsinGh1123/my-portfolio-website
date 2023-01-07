var navMenuAnchorTags=document.querySelectorAll('.nav a');
var interval;

for(let navMenuAnchorTag of navMenuAnchorTags)
{
navMenuAnchorTag.addEventListener('click',function(event){
    event.preventDefault();
    var targetsectionid=this.textContent.trim().toLowerCase();
    var targetsection=document.getElementById(targetsectionid);
    interval=setInterval(function(){
        scrollEffect(targetsection);
    },30);
});
}
function scrollEffect(targetsection){
    var targetsectioncoordinates=targetsection.getBoundingClientRect();
    if(targetsectioncoordinates.top<=0) {
        clearInterval(interval);
        return;
    }
     else if(targetsectioncoordinates.bottom < window.innerHeight)
     {
         clearInterval(interval);
         return;
     }

    window.scrollBy(0,50);
}



var skill_element=document.getElementsByClassName('skill-nam');

function initialisebar(i)
{
        skill_element[i].style.width = 0+"%";
}


var skillcontainer=document.getElementById('skills');

function barfill(i){
    initialisebar(i);
        let currentwidth=0;
        let targetlevel=skill_element[i].getAttribute('data-skill-level');
        let skillInterval= setInterval(function()
        {
            if(currentwidth>=targetlevel)
            {
                clearInterval(skillInterval);
            }
            skill_element[i].style.width=currentwidth+"%";
            currentwidth++;
        },10);
}

var barfilldone=[];
for(var a=0;a<skill_element.length;a++)
{
   barfilldone[a]=false;
}

window.addEventListener('scroll',function(){
    for(let i=0;i<skill_element.length;i++)
    {
        let skillBar_coordinates=skill_element[i].getBoundingClientRect();
        if(!barfilldone[i] && skillBar_coordinates.top <= window.innerHeight)
        {
        barfilldone[i]=true;
        barfill(i);
        }
        else if(skillBar_coordinates.top > window.innerHeight)
        {
            barfilldone[i]=false;
        }
    } 
});

const burger = document.getElementById('burger');

const nav = document.getElementsByClassName('nav')[0];

const navbar = document.getElementById('navbar');

burger.addEventListener('click',function(){
  
    nav.classList.toggle('opacity');
    navbar.classList.toggle('navbarheight');

});












