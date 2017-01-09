/**
 * Created by user-pc on 2016/12/24.
 */
window.onload=function(){
    validate.init();
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

var regUse=  /(^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+)|^((13[0-9]{1})|159|153)+\d{8} +@([a-zA-Z0-9_-])$/;
var regPass=/\S{6,16}/;
var regTel=/^((13[0-9]{1})|159|153)+\d{8}$/;
var validate={
    deLet:function(){
        var input=document.querySelectorAll('.common .com .input');
        var deLe=document.querySelectorAll('.common .com .delete');
        for(var i=0,len=deLe.length;i<len;i++){
            input[i].addEventListener('input',show,false);
            deLe[i].addEventListener('click',del,false);
        }
        function show(){
            if(this.value==''){
                this.nextElementSibling.style.display='none';
                this.parentNode.nextElementSibling.innerHTML='';
            }else{
                this.nextElementSibling.style.display='inline-block';
                this.parentNode.nextElementSibling.innerHTML='';
            }
        }
        function del(){
                this.parentNode.parentNode.nextElementSibling.innerHTML='';
                this.parentNode.previousElementSibling.value='';
                this.parentNode.style.display='none';
        }
    },
    user:function(){
        var user=s('#user');
        user.addEventListener('blur',useTest,false);
        function useTest(){
            var uValue = user.value;
            var U=regUse.test(uValue);
            var span=user.parentNode.nextElementSibling;
            if(uValue.length<6 || uValue.length>18){
                if(uValue.length==0){}else{
                    span.innerHTML="<i class='default'></i>帐号须由6-18个字符组成";
                }
            }else{
                if(U<=0){
                    span.innerHTML="<i class='default'></i>邮箱或手机号错误";
                }else{
                    span.innerHTML="<i class='current'></i>";
                }
            }

        }
    },
    pass:function(){
        var pass=s('#pass');
        pass.addEventListener('blur',passTest,false);
        function passTest() {
            var pValue = pass.value;
            var P = regPass.test(pValue);
            var span = pass.parentNode.nextElementSibling;
            if (pValue.length > 16) {
                    span.innerHTML = "<i class='default'></i>密码须由6-16个字符组成，区分大小写";
            } else if (pValue.length >= 0 && pValue.length < 6) {
                if(pValue.length == 0){}else{
                    span.innerHTML = "<i class='default'></i>密码须由6-16个字符组成，区分大小写";
                }
            } else {
                if (P < 0) {
                    span.innerHTML = "<i class='default'></i>密码须由6-16个字符组成，区分大小写";
                } else {
                    var num=function(s){
                        var patrn=/^[0-9]{6,16}$/;
                        var c=patrn.exec(s);
                        if(!c) {
                            return false
                        }else{
                            return true
                        }
                    };
                    if(num(pValue)){
                        span.innerHTML ="密码过于简单，请重新设置"
                    }else{
                        span.innerHTML = "<i class='current'></i>";
                    }
                }
            }
        }
    },
    cPass:function(){
        var cPass=s('#cpass');
        cPass.addEventListener('blur',cPassTest,false);
        function cPassTest(){
            var pass=s('#pass'),pValue = pass.value;
            var cpValue = cPass.value;
            var span = cPass.parentNode.nextElementSibling;
            if (cpValue == pValue) {
                if(pValue!=''){
                    span.innerHTML = "<i class='current'></i>";
                }
            } else {
                    span.innerHTML = "<i class='default'></i>密码不一致";

            }
        }
    },
    tel:function(){
        var tel=s('#telphone');
        tel.addEventListener('blur',teLe,false);
        function teLe(){
            var tValue=tel.value;
            var T = regTel.test(tValue);
            var span = tel.parentNode.nextElementSibling;
            if(tValue.length<11 || tValue.length>11){
                if(tValue==''){}else{
                    span.innerHTML="<i class='default'></i>帐号须由11位数字组成";
                }
            }else{
                if(T<=0){
                    span.innerHTML="<i class='default'></i>输入手机号错误";
                }else{
                    span.innerHTML="<i class='current'></i>"
                }
            }
        }

    },
    change:function(){
        var input=document.querySelectorAll('.common .com .input');
        for(var i=0,len=input.length;i<len;i++){
            input[i].addEventListener('focus',foc,false);
            input[i].addEventListener('blur',blu,false);
        }
        function foc() {
            this.parentNode.nextElementSibling.value = '';
            this.parentNode.style.border = "1px solid blue";
        }
        function blu(){
            this.parentNode.style.border = "1px solid #ddd";
        }
    },
    register:function(){
        var button=s('#button');
        button.addEventListener('click',riGist,false);
        function riGist(){
            var users=s('#user').parentNode.nextElementSibling.firstElementChild.className,passs=s('#pass').parentNode.nextElementSibling.firstElementChild.className,cPass=s('#cpass').parentNode.nextElementSibling.firstElementChild.className,tel=s('#telphone').parentNode.nextElementSibling.firstElementChild.className;
            if(users =='current'&&passs=='current'&&cPass=='current'&&tel=='current'){
              var use=s('#user').value,pas=s('#pass').value,te=s('#telphone').value;
              var xhr;
              if(window.XMLHttpRequest){
                xhr=new XMLHttpRequest();
              }else{
                xhr=new ActiveXObject('Microsoft.XMLHTTP')
              }
              xhr.onreadystatechange=function(){
                if(xhr.readyState==4){
                    if(xhr.status==200||xhr.status==304){
                        console.log(xhr.responseText);
                        if(xhr.responseText.trim()=='ok'){
                            alert('注册成功!');
                            location.href='./login.html';
                        }else{
                            alert('账号已被注册!');
                        }
                    }
                }
              };
              xhr.open("POST",'register.php?user='+use+'&password='+pas+'&telPhone='+te,true);
              xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8");
              xhr.send();
            }
        }


    },
    init:function(){
        this.deLet();
        this.user();
        this.pass();
        this.cPass();
        this.tel();
        this.change();
        this.register();
    }
};