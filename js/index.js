window.onload=function(){
var imgsbox=getClass("datupian",document)
var imgbox=getClass("tupian",document);
var lunbobox=getClass("lunbo",imgbox[0])
var aaa=lunbobox[0].getElementsByTagName("a")
var list=getClass("buttonbox",imgbox[0])
 var bbb=list[0].getElementsByTagName("li")
 var buttonb=getClass("buttonb",imgbox[0]);
 var ccc=getClass("right",buttonb[0])
 var ddd=getClass("left",buttonb[0])
  bbb[0].style.background="#e5004f"
 aaa[0].style.zIndex=10
var index=0;

	var t=setInterval(move,1000)
	
	function move(){
       index++;
       if(index>aaa.length-1){
       	 index=0;
       }
       for(var i=0;i<aaa.length;i++){
       	aaa[i].style.zIndex=0
       	bbb[i].style.background=""
       }
       aaa[index].style.zIndex=10
       bbb[index].style.background="#e5004f"
      }
	imgbox[0].onmouseover=function(){
		clearInterval(t);
	}
	imgbox[0].onmouseout=function(){
		t=setInterval(move,1000);
	}
	for(var j=0;j<bbb.length;j++){
		bbb[j].index=j;
	bbb[j].onclick=function(){
      for(var k=0;k<bbb.length;k++){
        bbb[k].style.background=""
		aaa[k].style.zIndex=0
          }
		bbb[this.index].style.background="#e5004f"
		aaa[this.index].style.zIndex=15
		index=this.index
	}
}
   imgsbox[0].onmousemove=function(){
        buttonb[0].style.opacity="0.8"
   }
 imgsbox[0].onmouseout=function(){
        buttonb[0].style.opacity=0
	}
	ccc[0].onclick=function(){
		move();
	}

   ddd[0].onclick=function(){
          index--;
         if(index<0){
         	index=aaa.length-1
         } 
     for(var k=0;k<bbb.length;k++){
        bbb[k].style.background=""
		aaa[k].style.zIndex=0
		}
		bbb[index].style.background="#e5004f"
	    aaa[index].style.zIndex=15
	    }
  var rightimg=getClass("rights",imgbox[0])
  var brimgs=rightimg[0].getElementsByTagName("img")[0]
  brimgs.onmouseover=function(){
  animate(brimgs,{marginLeft:-5})
 }
 brimgs.onmouseout=function(){
  animate(brimgs,{marginLeft:0})
 }
//轮播图结束
//超值特卖开始
	var chao=getClass("chaozhizhong",document)
	var centerleft=getClass("chaozhizhongzuo",chao[0])
    var temai=getClass("temai",centerleft[0]);
    var aa=temai[0].getElementsByTagName("a")
    var zhi=getClass("chaozhitemai",centerleft[0])
    var divs=$("div",temai[0])
    var k=0;
	for(var i=0;i<aa.length;i++){
	   aa[i].index=i;
       aa[i].onmouseover=function(){
       	for(var j=0;j<aa.length;j++){
				zhi[j].style.display="none"
				aa[j].style.fontSize="14px"
				aa[j].style.borderBottom=""
              divs[j].style.display="none"

			 }
			aa[this.index].style.fontSize="18px"
            zhi[this.index].style.display="block"
            aa[this.index].style.borderBottom="2px solid red"
            divs[this.index].style.display="block"
		}
	}

  var yintai=$(".yintai")
  var yintaia=$("a",yintai[0])
  
 for(var i=0;i<yintaia.length;i++){
     yintaia[i].index=i;
       yintaia[i].onmouseover=function(){
        for(var j=0;j<yintaia.length;j++){
          yintaia[j].style.borderBottom=""
          yintaia[j].style.color=""
        }
       yintaia[this.index].style.borderBottom="2px solid red"
       yintaia[this.index].style.color="red"
        }
      }
//超值特卖结束
//银泰百货开始
  var zhuan=getClass("zhuanguiyou",document);
  var you=getClass("z",zhuan[0]);
  var youa=you[0].getElementsByTagName("a")
  var dis=you[0].getElementsByTagName("div")
  var tupian=getClass("zhutupian",zhuan[0])
  var youshang=getClass("youshang",tupian[0])
  youshang[0].style.zIndex=10
  youa[0].style.borderBottom="5px solid #e70050"
   youa[0].style.fontWeight="bold"
  for(var i=0;i<youa.length;i++){
        youa[i].index=i
  	youa[i].onmouseover=function(){
  		for(j=0;j<youa.length;j++){
  	      youshang[j].style.zIndex=0
            youa[j].style.borderBottom=""
            youa[j].fontSize="12px"
           youa[j].style.fontWeight="normal"
           dis[j].style.display="none"
  		}
           youshang[this.index].style.zIndex=10
           youa[this.index].style.borderBottom="5px solid #e70050"
           youa[this.index].fontSize="15px"
           youa[this.index].style.fontWeight="bold"
           dis[this.index].style.display="block"
  	}
  }
// 无缝连接
  var xia=$(".shizhutizuoxia")
    for(var i=0;i<xia.length;i++){
       small(xia[i])
    }
    function small(xia){
      var big=$(".bigimg",xia)[0]
      var xiaimg=$(".xiaimg",big)
      var xiatubiao=$(".xiatubiao",xia)[0]
    var left=$(".left",xiatubiao)[0]
    var right=$(".right",xiatubiao)[0]
    var iw=parseInt(getStyle(xiaimg[0],"width"))
    xiaimg[0].style.left=0;
    var index=0;
    var next=0;
    function mo(){
      next++;
      if(next==xiaimg.length){
        next=0;
      }
      xiaimg[next].style.left=iw+"px"
      animate(xiaimg[index],{left:-iw})
      animate(xiaimg[next],{left:0})
       index=next
    }
    right.onclick=function(){
       mo()
    }
    left.onclick=function(){
      next--;
      if(next<0){
        next=xiaimg.length-1;
      }
      xiaimg[next].style.left=-iw+"px"
      animate(xiaimg[index],{left:iw})
      animate(xiaimg[next],{left:0})
       index=next
      }
  }
// 线条动画
  var shizhutiyou=$(".shizhutiyou")
  for(var i=0;i<shizhutiyou.length;i++){
    m(shizhutiyou[i]);
  }
  function m(shizhutiyou){
     var youda=$(".youda",shizhutiyou)
    for(var i=0;i<youda.length;i++){
    youda[i].onmouseover=function(){
     animate($(".bl",this)[0],{height:180})
     animate($(".bt",this)[0],{width:270})
     animate($(".br",this)[0],{height:180})
     animate($(".bb",this)[0],{width:270})
    }
   }
    for(var i=0;i<youda.length;i++){
    youda[i].onmouseout=function(){
     animate($(".bl",this)[0],{height:0})
     animate($(".bt",this)[0],{width:0})
     animate($(".br",this)[0],{height:0})
     animate($(".bb",this)[0],{width:0})
    }
   }
    
  }
//第一个线条动画
  var zhuanguiyou=$(".zhuanguiyou")
  var zhuanyouda=$(".zhuanyouda",zhuanguiyou[0])
  for(var i=0;i<zhuanyouda.length;i++){
     zhuanyouda[i].onmouseover=function(){
     animate($(".bl",this)[0],{height:250})
     animate($(".bt",this)[0],{width:200})
     animate($(".br",this)[0],{height:250})
     animate($(".bb",this)[0],{width:200})
    }
   }
   for(var i=0;i<zhuanyouda.length;i++){
    zhuanyouda[i].onmouseout=function(){
     animate($(".bl",this)[0],{height:0})
     animate($(".bt",this)[0],{width:0})
     animate($(".br",this)[0],{height:0})
     animate($(".bb",this)[0],{width:0})
    }
   }
//第二个线条动画
  var chaozhitemai=$(".chaozhitemai")
  tt(chaozhitemai[0])
  tt(chaozhitemai[1])
  function tt(chaozhitemai){
    var tm=$(".chaozhite",chaozhitemai[0])
    for(var i=0;i<tm.length;i++){
     tm[i].onmouseover=function(){
     animate($(".bl",this)[0],{height:260})
     animate($(".bt",this)[0],{width:220})
     animate($(".br",this)[0],{height:260})
     animate($(".bb",this)[0],{width:220})
    }
   }
   for(var i=0;i<tm.length;i++){
    tm[i].onmouseout=function(){
     animate($(".bl",this)[0],{height:0})
     animate($(".bt",this)[0],{width:0})
     animate($(".br",this)[0],{height:0})
     animate($(".bb",this)[0],{width:0})
    }
   }
  }
//线条动画结束
  var floor=$(".shishangda")
  var floors=$(".floor-bar")
  var span=$("span",floors[0])
     var arr=[];
     for(var i=0;i<floor.length;i++){
      arr.push(floor[i].offsetTop)
       }
   //优化
 var yu=$(".yu")
  var arr2=[];
  var lw=document.documentElement.clientHeight
  for(var i=0;i<yu.length;i++){
    arr2.push(yu[i].offsetTop)
   }
   window.onscroll=function(){
    var stop=document.body.scrollTop||document.documentElement.scrollTop
     for(var i=0;i<arr2.length;i++){
      if(stop+lw>arr2[i]){
        var img=yu[i].getElementsByTagName("img")
        for(var j=0;j<img.length;j++){
          img[j].src=img[j].getAttribute("asrc")
        }
      }
     }










       //优化结束
        for(var i=0;i<span.length;i++){
          span[i].index=i;
          span[i].onclick=function(){
             animate(document.body,{scrollTop:arr[this.index]},200)
                animate(document.documentElement,{scrollTop:arr[this.index]},200)
          }
        }
     if(stop<900){
        floors[0].style.display="none"
      }else{
        floors[0].style.display="block"
      }
      for(var i=0;i<arr.length;i++){
        if(stop<1982){
        span[i].style.background="#ccc"
      }
           if(stop+50>arr[i]){
        for(var j=0;j<span.length;j++){
          span[j].style.background=""
        }
        span[i].style.background="red"
        }

      }
    }
//导航栏结束
  var yintaika=$(".yintaika")
   var yinimg=$("img",yintaika[0])
  for(var i=0;i<yinimg.length;i++){
    yinimg[i].index=i
    yinimg[i].onmouseover=function(){
      for(var j=0;j<yinimg.length;j++){
      yinimg[j].style.opacity=1
      }
      yinimg[this.index].style.opacity=0.7
    }
  }
  var sz=$(".shizhutizhong1")
  for(var i=0;i<sz.length;i++){
    sz[i].index=i
    sz[i].onmouseover=function(){
      for(var j=0;j<sz.length;j++){
      sz[j].style.opacity=1
      }
      sz[this.index].style.opacity=0.8
    }
  }
  //推荐品牌透明度
   var sz1=$(".youshang")[1]
   var szimg1=$("img",sz1)
   console.log(szimg1)
  for(var i=0;i<szimg1.length;i++){
    szimg1[i].index=i
    szimg1[i].onmouseover=function(){
      for(var j=0;j<szimg1.length;j++){
      szimg1[j].style.opacity=1
      }
      szimg1[this.index].style.opacity=0.8
    }
  }

//手机专享透明度
 var sz2=$(".chaozhitemai")[2]
  var szimg2=$("img",sz2)

  for(var i=0;i<szimg2.length;i++){
    szimg2[i].index=i
    szimg2[i].onmouseover=function(){
      for(var j=0;j<szimg2.length;j++){
      szimg2[j].style.opacity=1
      }
      szimg2[this.index].style.opacity=0.8
    }
  }
//银泰卡结束

  var shizhu=$(".shizhutizhong")
  for(var i=0;i<shizhu.length;i++){
    whell(shizhu[i])
  }
  function whell(shizhu){
  var stupian=$(".stupian",shizhu)[0];
  var img=$("a",stupian);
  var iw=parseInt($("img",img[0])[0].width)
  var yuan=$(".yuan",shizhu)[0];
  var s=$("a",yuan);
  var zhubiao=$(".zhubiao",shizhu)[0];
  var zhua=$(".left",zhubiao)
  var right=$(".right",zhubiao)
// zhubiao.style.opacity=0
  shizhu.onmouseover=function(){
    zhubiao.style.opacity=1
    shizhu.style.opacity=0.7
  }
  shizhu.onmouseout=function(){
    zhubiao.style.opacity=0
    shizhu.style.opacity=1
  }
   stupian.style.width=iw*img.length+"px";
   var index=0;
     function mov(){
        index++;
        if(index==s.length){
          index=1;
           }
        animate(stupian,{left:-iw*index})
        for(var i=0;i<img.length;i++){
          s[i].style.background=""
        }
        s[index].style.background="blue"}
      
      for(var j=0;j<img.length;j++){
         s[j].index=j;
        s[j].onclick=function(){
        for(var i=0;i<img.length;i++){
          s[i].style.background=""
        }
        animate(stupian,{left:-iw*this.index})
       s[this.index].style.background="blue"
       index=this.index
         }

        }
         right[0].onclick=function(){
          mov();
         }
         zhua[0].onclick=function(){
          index--;
              if(index<0){
                index=0;
          }
        animate(stupian,{left:-iw*index})
        for(var i=0;i<img.length;i++){
          s[i].style.background=""
        }
        s[index].style.background="blue"
       } 
     }
// 无缝轮播
//下来菜单开始
   //右边
   var dengyou=$(".dengyou")[0]
   var onesss=$(".onesss",dengyou)[0]
   var da=$("a",onesss)[0]
   // console.log(da)[0]
   var uls=$("ul",dengyou)[0]
    hover(onesss,function(){
      uls.style.display="block"
      da.style.background="#fff"
      da.style.color="#e5004f"
    },function(){
      uls.style.display="none"
      da.style.background="#eee"
      da.style.color="black"
    })
    
  //左边
  var dengzuo=$(".dengzuo")[0]
  var ons=$(".ons")
  var dengr=$(".dengr",dengzuo)
  var de=$(".de",dengzuo)
   hover(ons[0],function(){
        dengr[0].style.display="block"
   },function(){
      dengr[0].style.display="none"
   })
  hover(ons[1],function(){
        de[0].style.display="block"
   },function(){
      de[0].style.display="none"
   })

//下来菜单结束
}
 