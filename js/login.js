/**
 * Created by user-pc on 2016/12/21.
 */
window.onload=function(){
    animate.init();
};

var s=function (str){
    var st=str.slice(0,1);
    var s=str.slice(1);
    var newStr;
    if(st =="#"){
        newStr=document.getElementById(s)

    }else if(st =="."){
        newStr=document.getElementsByClassName(s)[0]
    }else{
        newStr=document.getElementsByTagName(str)[0]
    }
    return newStr;
};

var animate={
    focu:function(){
        var input=document.getElementById("input");
        input.onfocus=function(){
            input.setAttribute("placeholder","");
        };
        input.onblur=function(){
            input.setAttribute("placeholder",input.getAttribute("data-defaultword"));
        }

    },
    fix:function(){
        var img=s('.a').getElementsByTagName('img')[0].cloneNode();
        img.style.width='105px';
        var a=s('.a').cloneNode();
        a.appendChild(img);
        var list=document.querySelectorAll('.li');
        var icona=s('.gouwu').cloneNode();
        var icon=s('.i').cloneNode();
        icona.appendChild(icon);
        window.onscroll=function(){
            if(document.body.scrollTop >=165||document.documentElement.scrollTop>=165){
                s('.ul').className='ul ull';
                s('#ul').style.cssText="margin:15px 0 15px;background-color:#fff;width:800px;";
                for(var i= 0,len=list.length;i<len;i++){
                    list[i].style.cssText="padding:0 19px;";
                    if(i==len-3){
                        list[i].style.border='none';
                    }
                    if(i>len-3){
                        list[i].style.display="none";
                    }
                }
                s('.ul-in').insertBefore(a,s('#ul'));
                a.style.cssText='left:0;top:15px;';
                s('#div').style.display='inline-block';
                s('#div').appendChild(icona);
                icona.style.display='inline-block';
                s('.mid').className='mid mid-down';
            }else{
                s('.ul').className='ul';
                s('#ul').style.cssText="";
                for(var j= 0,lenn=list.length;j<lenn;j++){
                    list[j].style.cssText="display:inline-block;font-size: 14px;padding:6px 26px 0;";
                }
                a.style.display='none';
                s('#div').style.display='none';
                icona.style.display='none';
                s('.mid').className='mid';
            }
        }


    },
    cookie:function(){
        this.checkCookie=function(use,pas){
            var cookL=document.cookie.length;
            var cook=document.cookie;
            var u=user.getAttribute('name');
            var p=pass.getAttribute('name');
            var arr=[];
            arr.push(u,p);
            if(cookL>0){
                console.log(document.cookie);
                this.getCookie=function(){
                    function get(c_use){
                        var start=cook.indexOf(c_use + "=");
                        if (start!=-1)
                        {
                            start=start + c_use.length+1;
                            var end=cook.indexOf(";",start);
                            if (end==-1) {
                                end=cook.length;
                            }
                            return unescape(cook.substring(start,end))
                        }
                        return ""
                    }
                    console.log(get(u)+'/'+get(p));
                    var uValue=get(u);
                    var pValue=get(p);
                    if(use==uValue&&pas==pValue){
                        alert('登陆成功！');
                        location.href='./index.html'
                    }
                };
                //this.getCookie();
            }else{
                this.setCookie=function(use,password,expiredays){
                    (function(){
                        var arg=arguments;
                        var date=new Date();
                        date.setDate(date.getDate()+expiredays);
                        for(var i=0,len=arg.length;i<len-1;i++){
                            document.cookie=arr[i]+'='+escape(arg[i])+((expiredays==null)?'':';expires='+date.toGMTString())
                        }
                    })(use,password,expiredays);
                };
                this.setCookie(use,pas,30);
            }
        };
    },
    login:function(){
         var th=this;
         var user=s('#user'),pass=s('#pass'),button=s('.button');
         var input=document.querySelectorAll('form p .inp');
         var vali=s('.valite');
         for(var i=0,len=input.length;i<len;i++){
          input[i].addEventListener('input',show,false);
          input[i].addEventListener('focus',foCus,false);
         }
        function show(){
               this.nextElementSibling.style.display='inline-block';
               this.nextElementSibling.addEventListener('click',hiDe,false);
               if(this.value ==''){
                this.nextElementSibling.style.display='none';
               }
        }
        function hiDe(){
            this.previousElementSibling.value='';
            this.style.display='none';
        }
        function foCus(){
            this.parentNode.style.border='1px solid #e8e8e8';
            vali.className='valite vali';
        }
        button.addEventListener('click',test,false);
        function test(){
            var use=user.value,pas=pass.value;
            if(use==''||pas==''){
                vali.className='valite';
                if(use==''){
                    vali.lastElementChild.innerHTML='请输入用户名';
                    user.parentNode.style.border='1px solid #fa6060';
                }else{
                    vali.lastElementChild.innerHTML='请输入密码';
                    pass.parentNode.style.border='1px solid #fa6060';
                }
            }else{
                var xhr;
                if(window.XMLHttpRequest){
                    xhr=new XMLHttpRequest();
                }else{
                    xhr=new ActiveXObject('Microsoft.XMLHTTP');
                }
                xhr.onreadystatechange=function(){
                    if(xhr.readyState==4){
                        if(xhr.status==200||xhr.status==304){
                            if(xhr.responseText.trim()=='ok'){
                                alert('登录成功！');
                                location.href="./index.html";
                                th.checkCookie(use,pas);
                            }else{
                                vali.className='valite';
                            }
                        }
                    }
                };
                xhr.open("POST",'login.php?user='+use+'&password='+pas,true);
                xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8");
                xhr.send();
            }
            }
    },
    init:function(){
        this.focu();
        this.fix();
        this.login();
        this.cookie();

    }
};


