
    function addStr(s){
        var inp=document.getElementById("inp");
        var caculate=document.getElementById("caculate");
        // var fuhao1=document.getElementById('jisuan');
        if((inp.value=="0"||iffinish=="1"||yunsuan=="1")&&(s!="+"&&s!="-"&&s!="*"&&s!="/")){
            // alert(s)
            if(iffinish=="1"){
             caculate.value="";  
             iffinish="0"; 
            } 
            if(yunsuan=="1"){
            caculate.value=leftnumber+fuhao2;
            yunsuan="0";    
            }   
            inp.value=s;  //重置inp
            
                
        }
        else{
            if(s<"0"||s>"9"&&iffinish=="0"){
               fuhao=s; 
               fuhao2=s;
            //    fuhao1.value=fuhao; 
               leftnumber=inp.value;
               //caculate.value="";
               yunsuan="1";  
               //suanshi="1";
               // alert(left)  
               if(s=='/'){
                caculate.value=leftnumber+"÷";
                fuhao2="÷";
                }
               else if(s=='*'){
                caculate.value=leftnumber+"×";
                fuhao2="×";
                }
                else{
                 caculate.value=leftnumber+fuhao2;   
                }
                
            }
               // alert(inp);
            else{
                inp.value=inp.value+s;
                // if(iffinish=="0"){
                //  caculate.value+=s;   
                // }
                
                // caculate.value+=s;
                // iffinish="0";   
            }
            
        }
    }
    function C(){
        var inp=document.getElementById("inp");
        var caculate=document.getElementById("caculate");
        caculate.value=""
        inp.value="0";
    }
    function count1(){
        var inp=document.getElementById("inp");
        var caculate=document.getElementById("caculate");
        val=eval(leftnumber+fuhao+inp.value);
        // alert("zuo"+left);
        // alert("fuhao"+fuhao);
        // alert("you"+caculate.value)
        // alert("val: "+val);
        caculate.value=leftnumber+fuhao2+inp.value+"=";  
        inp.value=val;
        iffinish="1";
        leftnumber=val;
    }
    function Bs(){
        var inp=document.getElementById("inp");
        // var caculate=document.getElementById("caculate");
        var str=inp.value.substr(0,inp.value.length-1);
        if(str==''){
          str="0";    
        }
        inp.value=str;
        // caculate.value=str;
    } 
    function CE(){
        var caculate=document.getElementById("caculate");
        caculate.value="";
    }