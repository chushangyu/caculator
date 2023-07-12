const buttonContainer=document.querySelector('.button');
// const caculate="0";  //运算的对象
const prevElement=document.querySelector('.prev');
let iffinish="0";  //是否运算完成
let leftnumber="";  //左边的数
let rightnumber="";  //右边的数
let fuhao='';  //运算符号
let fuhao2='';  //显示符号
let suanshi='1';  //是否显示算式
let yunsuan="0";  //点击运算符号时刷新inp
let lianxuyunsuan="0";
let key="";
let equal="0";
let yuunsuan1="0";
let zhuangtai="";
buttonContainer.addEventListener('click',e=>{
    const type=e.target.dataset.type;
    console.log(e.target);  //获取按钮属性
}) 



function addStr(s){
    var inp=document.getElementById("inp");
    var caculate=document.getElementById("caculate");
    
    // var fuhao1=document.getElementById('jisuan');
    if((inp.value=="0"||iffinish=="1"||yunsuan=="1")&&(s!="+"&&s!="-"&&s!="*"&&s!="/")){
        // alert(s)
        if(iffinish=="1"){
         caculate.value="";  
         iffinish="0";
         key="number"; 
        } 
        if(yunsuan=="1"){
        caculate.value=leftnumber+fuhao2;
        key="number";
        yunsuan="0";  
        yunsuan1="0";  
        }   
        inp.value=s;  //重置inp 
        // alert(s);     
        rightnumber=s;
    }
    else{
        if(s<"0"||s>"9"&&iffinish=="0"){
           
           fuhao2=s;                  
              if(s=='/'){
               fuhao2="÷";
              }
              else if(s=='*'){
               fuhao2="×";
              }
        //    fuhao1.value=fuhao;    
           //caculate.value="";
           yunsuan="1";  
           if((s!=""&&caculate.value=="")||equal=="1"||yunsuan1=="1"){
            leftnumber=inp.value;
              caculate.value=leftnumber+fuhao2;  
             yunsuan1="1";
            //  alert("s:"+s+" caculate:"+caculate.value+" equal:"+equal+"yunsuan1: "+yunsuan1);
            }
             else if(equal!="1"){
                val=eval(leftnumber+fuhao+rightnumber);
            //  alert("zuo"+leftnumber);
            //  alert("fuhao"+fuhao);
            //  alert("you"+rightnumber)
            // alert("val"+val);
            inp.value=val;
            iffinish="1";
            leftnumber=val;
            fuhao=s;
            caculate.value=val+fuhao2;
                // count1();
              yunsuan1="0"; 
            }   
             fuhao=s;            
        }
           //数字
        else{
            inp.value=inp.value+s;
            rightnumber=inp.value;
            // alert(leftnumber);
            // if(iffinish=="0"){
            //  caculate.value+=s;   
            // }
            key="number";
            // caculate.value+=s;
            // iffinish="0";
            yunsuan1="0";   
            var text_length = inp.value.length;  //获取当前长度
            var size=90-(8*(text_length-10));
            if(text_length>10&&text_length<15){
            $(".number").css('font-size',size+'px');    
            // alert(size);
            }
        }

    }
    equal="0";
}
    function C(){
        var inp=document.getElementById("inp");
        var caculate=document.getElementById("caculate");
        caculate.value=""
        inp.value="0";
        leftnumber="";
        rightnumber="";
        fuhao="";
        fuhao2="0";
        lianxuyunsuan="0"
        key="";
        equal="0";
        yunsuan="0";
        yunsuan1="0";
        $(".number").css('font-size','90px'); 

    }
    function count1(){
        var inp=document.getElementById("inp");
        var caculate=document.getElementById("caculate");
        if(fuhao!=""){
         val=eval(leftnumber+fuhao+rightnumber);
        // alert("zuo"+left);
        // alert("fuhao"+fuhao);
        // alert("you"+caculate.value)
        // alert("val: "+val);
        caculate.value=leftnumber+fuhao2+rightnumber+"=";  
        inp.value=val;
        iffinish="1";
        leftnumber=val;
        // fuhao="";
        lianxuyunsuan="0"; 
        equal="1";
        yunsuan1="0";
        }
        else{
            caculate.value=rightnumber+"=";
        }
        var text_length = inp.value.length;  //获取当前长度
            var size=90-(8*(text_length-10));
            if(text_length>10&&text_length<15){
            $(".number").css('font-size',size+'px');    
            // alert(size);
            }
        
    }
    function Bs(){
        var inp=document.getElementById("inp");
        // var caculate=document.getElementById("caculate");
        var str=inp.value.substr(0,inp.value.length-1);
        if(str==''||str=="-"){
          str="0";  
        }
        inp.value=str;
        rightnumber=str;
        // alert("right:"+rightnumber);
        // caculate.value=str;
        key="";
        equal="0";
        yunsuan1="0";
        var text_length = inp.value.length;  //获取当前长度
            var size=90-(8*(text_length-10));
            if(text_length>10&&text_length<15){
            $(".number").css('font-size',size+'px');    
            // alert(size);
            }
    } 
    function CE(){
        var caculate=document.getElementById("caculate");
        caculate.value="";
        equal="0";
        yunsuan1="0";
        
    }
    function zhengfu(){
        var inp=document.getElementById("inp");
        if(inp.value>"0"){
            inp.value="-"+inp.value;
        }
        else if(inp.value<"0"){
            var str=inp.value.substr(1,inp.value.length);
            inp.value=str;
            // alert(str);
        }

    }
    // $(function(){
    //     $('.number').bind('input propertychange',function(){
    //         var obj = $(this); 
    //         var text_length = obj.val().length;  //获取当前长度
    //         var size=40-(5*(text_length-10));
    //         var width = parseInt(text_length)*12; //该12是改变前的宽度除以当前字符串的长度，算出每个字符的长度
    //         if(text_length>10&&text_length<15){
    //         size-=3;
    //         obj.css('font-size',size+'px');    
    //         }
    //     });
    // })
    // $(function(){
    //     $('.number').bind('input propertychange',function(){
    //         var obj = $(this);
    //         var text_length = obj.val().length;  //获取当前长度
    //         var width = parseInt(text_length)*12; //该12是改变前的宽度除以当前字符串的长度，算出每个字符的长度
    //         obj.css('width',width+'px');
    //     });
    // })
    // $(function(){
     
    //     //propertychange监听input里面的字符变化,属性改变事件
         
    //     $('.number').bind('input propertychange', function() {
         
    //     var $this = $(this);
         
    //     console.log($this);
         
    //     var text_length = $this.val().length;//获取当前文本框的长度
         
    //     var current_width = parseInt(text_length) *16;//该16是改变前的宽度除以当前字符串的长度,算出每个字符的长度
         
    //     console.log(current_width)
         
    //     $this.css("width",current_width+"px");
         
    //     });
         
    //     })