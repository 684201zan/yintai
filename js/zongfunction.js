// 获取元素的简化
function $(selector,range){
 
  if(typeof selector=="string"){
     var range=range||document;
    if(selector.charAt(0)=="#"){
      return document.getElementById(selector.slice(1));
      }
    if(selector.charAt(0)=="."){
      return getClass(selector.substr(1),range);
    }
    if(/^[a-zA-Z][a-zA-Z1-6]{0,9}$/.test(selector)){
      return range.getElementsByTagName(selector)
    }
  }else if(typeof selector=="function"){
    window.onload=selector;
  }
}





//类名方式去获取方式
//总体思想
//因为IE6-8不支持document.getElementsByClassName这个方法，所以需要进行分支处理，就需要用到if（）{}else{},当支持的时候执行的是上边，不执行的时候执行else里边的代码，当IE6-8不支持的时候，就需要用一种新的办法，document.getElementsByTagName()这个方法所有的浏览器都支持，
function getClass(classname,range){ //声明一个getclassd的函数，并且传两个参数，一个是类名，一个是范围
   if(range.getElementsByClassName){//因为兼容性问题，IE6-8，不支持的时候，所以需要进行判断，这个是判断条件，当支持document.getElementsByClassName
       return range.getElementsByClassName(classname);//当支持这个的时候返回这个，range范围里的classname
   }else{//不执行的时候执行的是下边这个
      var all=range.getElementsByTagName("*");//因为所有浏览器都支持标签名,因此对所有的标签名进行查取
      var arr=[];//定义一个新的数组，用来放取符合条件的值
      for(var i=0;i<all.length;i++){//对所有去到的标签名进行遍历
        if(checkClass(all[i].className,classname)){//让查询到的所有的标签名字和传入参数的名字一样
           arr.push(all[i]);//如果两个类名相等的话，在数组后面添加新的值，将查询的值得第i个加在新数组的后面
        }
        }return arr;//返回新的数组
  }
}

function checkClass(tagClass,aclass){
  var arr=tagClass.split(" ");
    for(var i=0;i<arr.length;i++){
      if(arr[i]==aclass){
        return true;
      }
    }
return false;
}

//解决IE6-8不支持textContent的问题 获取文本内容设置文本内容
function text(obj,val){
  if(val==undefined){//等于为传值，返回为false
        if(obj.textContent!=undefined){//有的div里边没内容的话，但是div是存在的
           return obj.textContent;
        }else{
           return obj.innerText;
          }
   }else{
        if(obj.textContent!=undefined){//等于时返回的是false
           obj.textContent=val;
        }else{
           obj.innerText=val;
             }
        }
           
}

//
function getStyle(obj,attr){//obj获取的是对象，att是属性
  if(obj.currentStyle){
     return obj.currentStyle[attr];
   }else{ 
     return getComputedStyle(obj,null)[attr];
  }
}
