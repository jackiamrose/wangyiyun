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
    foCu:function(){
        var input=document.getElementById("input");
        input.onfocus=function(){
            input.setAttribute("placeholder","");
        };
        input.onblur=function(){
            input.setAttribute("placeholder",input.getAttribute("data-defaultword"));
        }

    },
    sre:function(){
        var img1 = document.querySelector('.mid-in').offsetWidth;
        var but = document.querySelectorAll(".btn");
        but[0].style.left=(img1-1100)/(window.screen.width-1100)*105-25+"px";
        but[1].style.right=(img1-1100)/(window.screen.width-1100)*105-25+"px";
        window.onresize=function() {
            var img = document.querySelector(".mid-in").offsetWidth;
            but[0].style.left=(img-1100)/(window.screen.width-1100)*105-25+"px";
            but[1].style.right=(img-1100)/(window.screen.width-1100)*105-25+"px";
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
                s('.mid').className='mid middle';
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
    lunBo:function(){
        var img=document.querySelectorAll('.img');
        var btn=document.querySelectorAll('.btn');
        var circle=document.querySelectorAll('.circle');
        var i= 0;
        var len=img.length;
        animate();
        function animate(){
            if(i==len){
                i=0;
            }
            for(var j=0;j<len;j++){
                img[j].style.display='none';
                circle[j].className='circle';
            }
            circle[i].className='circle one';
            img[i].style.display='inline-block';
            i++;
        }
        function fun1(){
            i-=2;
            if(i<0){
                i=len-1;
            }
            animate();
        }

        function fun2(){
            if(i>len-1){
                i=0;
            }
            animate();
        }
        function fun3(event){
            animate();
            var e= event.target||window.event.srcElement;
            for(var j=0;j<len;j++){
                img[j].style.display='none';
                circle[j].className='circle';
            }
            if(e==circle[0]){
                img[0].style.display='inline-block';
            }else if(e==circle[1]){
                img[1].style.display='inline-block';
            }else if(e==circle[2]){
                img[2].style.display='inline-block';
            }else{
                img[3].style.display='inline-block';
            }
            e.className='circle one';
        }
       btn[0].addEventListener('click',fun1,false);
       btn[1].addEventListener('click',fun2,false);
       for(var m= 0,n=circle.length;m<n;m++){
           circle[m].addEventListener('mouseover',fun3,false);
       }
       setInterval(animate,5000);

    },
    init:function(){
        this.foCu();
        this.sre();
        this.fix();
        this.lunBo();
    }


};