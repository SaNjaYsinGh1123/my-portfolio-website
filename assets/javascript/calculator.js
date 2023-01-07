var button=document.getElementsByTagName("button");
var display=document.getElementById("text");
var op1="0";
var op2=null;
var op=null;
var flag=0;
var error=0;

//console.log(display.innerText);
for(var i=0;i<button.length;i++)
{
    button[i].addEventListener('click',function()
    {
      var value=this.getAttribute('data-value');
    if(value=="clear")
        {
            op1=0;
            op2=null;
            op=null;
            flag=0;
            display.innerText=0;
            error=0;
        }
    else if(error==0)
    {
        if(value=='+'||value=='-'||value=='*'||value=='/'||value=='%')
        {
            var screen=display.innerText;
            if(screen=='+'||screen=='-'||screen=='*'||screen=='/'||screen=="%")
            {
                display.innerText="Not valid (press AC)";
                error=1;
            }
            else
            {
                if(flag==0){
                op1=display.textContent;
                display.innerText=value;
                //console.log(op1);
                flag=1;
                }
                else
                {
                    op2=display.innerText;
                    op1=op1+op+op2;
                   // console.log(op1);
                   // console.log("op2 "+op2);
                    display.innerText=value;
                }
        
            }
        }
        else if(value=='=')
         {
          //op2=parseFloat(display.textcontent);
          op2=display.textContent;
          //console.log(op2);
          var result=eval(op1+op+op2);
          flag=0;
          display.innerText=result;
         }

        else if(value=="+/-")
        {
            var screen=display.innerText;
            if(screen=="+/-")
            {
                display.innerText=0;
            }
            else {
                display.innerText="+/-";
             }
        
            }
        else
        {
            var screen=display.innerText;
            if(screen=="0")
            {
                display.innerText=value;
    
             }
            else if(screen=='+'||screen=='-'||screen=='*'||screen=='/'||screen=='%')
            {
                op=screen;
                display.innerText=value;
            }
            else{
                if(screen=="+/-"){
                    value=(-value);
                   // console.log(value);
                    display.innerText=value;
                }
                else
                {
                display.innerText+=value;
                }
               }
        }
    
    }
 else
 {
    display.textContent="Not valid(press AC)";
 }});
}    

/*
console.log(button[0].innerText);

console.log(key["three"]);



var cli=document.getElementById('one');
var btn=document.getElementById('text');
cli.addEventListener('click',function(){
    btn.innerText=1; 
});*/