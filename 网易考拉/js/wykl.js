var oUl=document.getElementById('img-change');
var aLi=oUl.children;
var aImg=oUl.getElementsByClassName('picture');
var arr=["images/9.png","images/10.png","images/11.png","images/12.png","images/13.png","images/14.png","images/15.png","images/16.png","images/17.png","images/18.png",]
var array=["images/19.png","images/20.png","images/21.png","images/22.png","images/23.png","images/24.png","images/25.png","images/26.png","images/27.png","images/28.png",]
for(var i=0;i<aImg.length;i++)
{
    aLi[i].index=i;
    aLi[i].onmouseover=function()
    {
        aImg[this.index].src=array[this.index];
    }
    aLi[i].onmouseout=function()
    {
        aImg[this.index].src=arr[this.index];
    }
}

var oDiv=document.getElementsByClassName('rotation')[0];
var Ul=document.getElementById('rotation');
var aLI=Ul.getElementsByTagName('li');
var oL=document.getElementById('list-circle');
var LI=oL.getElementsByTagName('li');
var aA=oL.getElementsByTagName('a');
var Prev=document.getElementById('prev');
var Next=document.getElementById('next');
var num=0;
var timer=0;

for(var i=0;i<aLI.length;i++)
{
    aLI[i].style.opacity="0";
}
aLI[0].style.opacity="1";

oDiv.onmouseover=function()
{
    clearInterval(timer);
}
oDiv.onmouseout=function()
{
    timer=setInterval(change,3000);
}
timer=setInterval(change,3000);

function change()
{
    num++;
    if(num>=aLI.length){num=0;}
    changeSty(aLI,num);
}
Prev.onclick=function()
{
    num--;
    if(num <= -1){num=aLI.length - 1;}
    changeSty(aLI,num);
    return false;
}
Next.onclick=function()
{
    num++;
    if(num == aLI.length){num=0;}
    changeSty(aLI,num);
    return false;
}
for(var i=0;i<LI.length;i++)
{
    LI[i].index=i;
    LI[i].onmouseover=function()
    {
        for(var j=0;j<LI.length;j++)
        {
            LI[j].className="";
        }
        LI[this.index].className="active";
        num=this.index;
        changeSty(aLI,num);
        return false;
    }
    aA[i].onclick=function()
    {
        return false;
    }
}

function changeSty(oj1,a)
{
    for(var i=0;i<oj1.length;i++)
    {
        oj1[i].style.opacity="0";
    }
    oj1[a].style.opacity="1";
    oj1[a].style.transition=".5s";
    for(var j=0;j<LI.length;j++)
    {
        LI[j].className="";
    }
    LI[num].className="active";
}

var UL=document.getElementById('Popular');
var DIV=UL.parentElement;
var aLink=UL.getElementsByTagName('li');
var oPrev=document.getElementById('previous');
var oNext=document.getElementById('T-next');
var time=0;
var index=0;
for(var i=0;i<aLink.length;i++)
{
    aLink[i].style.opacity="0";
}
aLink[0].style.opacity="1";

DIV.onmouseover=function()
{
    clearInterval(time);
}
DIV.onmouseout=function()
{
    time=setInterval(turn,3000);
}
time=setInterval(turn,3000);

function turn()
{
    index++;
    if(index>=aLink.length){index=0;}
    changeSty(aLink,index);
}
oPrev.onclick=function()
{
    index--;
    if(index <= -1){index=aLink.length - 1;}
    changeSty(aLink,index);
    return false;
}
oNext.onclick=function()
{
    index++;
    if(index == aLink.length){index=0;}
    changeSty(aLink,index);
    return false;
}
var Remai=document.getElementsByClassName('dot');
var aDot=Remai[0].getElementsByTagName('li');
var A=Remai[0].getElementsByTagName('a');
var oBRight=Remai[0].parentElement.parentElement;
var aSelling=oBRight.getElementsByClassName('selling');
var number=0;
var T=0;
for(var i=0;i<aSelling.length;i++)
{
    aSelling[i].style.opacity="0";
}
aSelling[0].style.opacity="1";

oBRight.onmouseover=function()
{
    clearInterval(T);
}
oBRight.onmouseout=function()
{
    T=setInterval(Alter,3000);
}
T=setInterval(Alter,3000);
function Alter()
{
    number++;
    if(number>=aSelling.length){number=0;}
    changeCom(aSelling,number,A);
}
for(var i=0;i<A.length;i++)
{
    A[i].index=i;
    A[i].onmouseover=function()
    {
        for(var j=0;j<A.length;j++)
        {
            A[j].className="";
        }
        A[this.index].className="cur";
        number=this.index;
        changeSty(aSelling,number,A);
        return false;
    }
    A[i].onclick=function()
    {
        return false;
    }
}
function changeCom(oj1,a,oj2)
{
    for(var i=0;i<oj1.length;i++)
    {
        oj1[i].style.opacity="0";
    }
    oj1[a].style.opacity="1";
    oj1[a].style.transition=".5s";
    for(var j=0;j<oj2.length;j++)
    {
        oj2[j].className="";
    }
    oj2[a].className="cur";
}
var Meirong=Remai[1].getElementsByTagName('li');
var ATow=Remai[1].getElementsByTagName('a');
var oBRightTow=Remai[1].parentElement.parentElement;
var aSellingTow=oBRightTow.getElementsByClassName('selling');
var numTow=0;
var TTow=0;
for(var i=0;i<aSellingTow.length;i++)
{
    aSellingTow[i].style.opacity="0";
}
aSellingTow[0].style.opacity="1";

oBRightTow.onmouseover=function()
{
    clearInterval(TTow);
}
oBRightTow.onmouseout=function()
{
    TTow=setInterval(AlterTow,3000);
}
TTow=setInterval(AlterTow,3000);
function AlterTow()
{
    numTow++;
    if(numTow>=aSellingTow.length){numTow=0;}
    changeCom(aSellingTow,numTow,ATow);
}
for(var i=0;i<ATow.length;i++)
{
    ATow[i].index=i;
    ATow[i].onmouseover=function()
    {
        for(var j=0;j<ATow.length;j++)
        {
            ATow[j].className="";
        }
        ATow[this.index].className="cur";
        numTow=this.index;
        changeSty(aSellingTow,numTow,ATow);
        return false;
    }
    ATow[i].onclick=function()
    {
        return false;
    }
}
var Fushi=Remai[2].getElementsByTagName('li');
var AThree=Remai[2].getElementsByTagName('a');
var oBRightThree=Remai[2].parentElement.parentElement;
var aSellingThree=oBRightThree.getElementsByClassName('selling');
var numThree=0;
var TThree=0;
for(var i=0;i<aSellingThree.length;i++)
{
    aSellingThree[i].style.opacity="0";
}
aSellingThree[0].style.opacity="1";

oBRightThree.onmouseover=function()
{
    clearInterval(TThree);
}
oBRightThree.onmouseout=function()
{
    TThree=setInterval(AlterThree,3000);
}
TTThreeTow=setInterval(AlterThree,3000);
function AlterThree()
{
    numThree++;
    if(numThree>=aSellingThree.length){numThree=0;}
    changeCom(aSellingThree,numThree,AThree);
}
for(var i=0;i<AThree.length;i++)
{
    AThree[i].index=i;
    AThree[i].onmouseover=function()
    {
        for(var j=0;j<AThree.length;j++)
        {
            AThree[j].className="";
        }
        AThree[this.index].className="cur";
        numThree=this.index;
        changeSty(aSellingThree,numThree,AThree);
        return false;
    }
    AThree[i].onclick=function()
    {
        return false;
    }
}
var Flxed=document.getElementsByClassName('flxed')[0];
var SideLeft=document.getElementsByClassName('aside-left')[0];
var SideRight=document.getElementsByClassName('aside-Right')[0];
var oTop=document.getElementById('top');
oTop.onclick=function()
{
    document.documentElement.scrollTop=0;
    return false;
}
window.onscroll=function()
{
    nav();
    side();
}
function nav()
{
    if(document.documentElement.scrollTop>81)
    {
        Flxed.style.display="block";
    }
    else
    {
        Flxed.style.display="none";
    }
}
function side()
{
    if(document.documentElement.scrollTop>700)
    {
        SideLeft.style.position="fixed";
        SideRight.style.position="fixed"; 
        SideLeft.style.top="80px";
        SideRight.style.top="80px";
        SideLeft.style.left="95px"; 
        SideRight.style.right="125px";
    }
    else
    {
        SideLeft.style.position="absolute";
        SideRight.style.position="absolute";
        SideLeft.style.left="-120px";
        SideLeft.style.top="0px";
        SideRight.style.top="0px";
        SideRight.style.right="-90px";
    }
}

var Jishi=document.getElementById('timing');
var Time=Jishi.getElementsByTagName('li');

setTimeout(countTime,1000);
function countTime() { 
    var date = new Date();  
    var now = date.getTime();
    var str="2018/12/1 00:00:00";
    var endDate = new Date(str); 
    var end = endDate.getTime();  
    
    var leftTime = end-now; 
    var h,m,s;  
    if (leftTime>=0) {   
        h = Math.floor(leftTime/1000/60/60%24);  
        m = Math.floor(leftTime/1000/60%60);  
        s = Math.floor(leftTime/1000%60);                     
    }
    
    Time[0].innerHTML = tow(h);  
    Time[2].innerHTML = tow(m);  
    Time[4].innerHTML = tow(s); 
    setTimeout(countTime,1000);
}
function tow(n)
{
    return n<10?"0"+n:""+n;
}