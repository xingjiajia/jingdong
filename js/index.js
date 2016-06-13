window.onload=function(){
	boxs=getClass('banner_box')[0].getElementsByTagName('a');
	btns=getClass('list_btn')[0].getElementsByTagName('li');
	banner_boxs=getClass('banner_box')[0];
//	console.log(btns);
	//所有的图片
	//console.log(btns);
	var index=0;
	var t=setInterval(wheel,3000);
	function wheel(){
	    index++;
	    if(index>boxs.length-1){
          index=0;
	    }
      for (var i = 0; i < boxs.length; i++) {
         	animate(boxs[i],{opacity:0});
         	btns[i].style.background="";
         }
        animate(boxs[index],{opacity:1});
        btns[index].style.background="#C81623";
	}
     banner_boxs.onmouseover=function(){
          clearInterval(t);
          leftbox.style.display="block";
          rightbox.style.display="block";
     }
     banner_boxs.onmouseout=function(){
          t=setInterval(wheel,3000);
          rightbox.style.display="none";
          leftbox.style.display="none";
     }

   /*
   下面按钮
   */  
        for (var i = 0; i < btns.length; i++) {
            btns[i].index=i;
            btns[i].onclick=function(){
             // alert(this.index);
              for (var j = 0; j < boxs.length; j++) {
               animate(boxs[j],{opacity:0});
               btns[j].style.background="";
              }
               animate(boxs[this.index],{opacity:1});
                this.style.background="#C81623";
                 index=this.index;
            }
        };


/*
左右按钮
*/
    var leftbox=getClass('left_btn')[0];
   // console.log(leftbox);
       leftbox.onclick=function(){
           index--;
           if(index==-1){
               index=boxs.length-1;
           }
          for (var i = 0; i < boxs.length; i++) {
                  animate(boxs[i],{opacity:0});
                  btns[i].style.background="";
            }
           animate(boxs[index],{opacity:1});
           btns[index].style.background="#C81623";
            // index=this.index;
        }

 //右边
       var rightbox=getClass('right_btn')[0]; 
       rightbox.onclick=function(){
          wheel();
       }

/*
  选项卡
*/
 /*   var fz=getClass('fz_js',getClass('fz_box')[0]);//所有盒子
    as=getClass('toptitle')[0].getElementsByTagName('li');
    var aa=0;
     xuan(as,fz)
  // 封选项卡start/
     function xuan(a,f){
      for (var i = 0; i < a.length; i++) {
          a[i].aa=i;
          a[i].onmouseover=function(){
            for (var j = 0; j < f.length; j++) {
                f[j].style.zIndex="0";
                a[j].className="";

            };
              f[this.aa].style.zIndex="99";
               this.className="border-red";  

          }
    }

     }*/
//  封选项卡end/
   var asBox=getClass('toptitle');//[0][1]
   var divBox=getClass('fz_box');//[0][1]
   // tab(asBox[0],divBox[0]);
    //tab(asBox[1],divBox[1]);
    //getClass('toptitle')[i];   
    //getClass('fz_box')[i]  可以直接传进tab();  
       for (var i = 0; i < asBox.length; i++) {
            tab(asBox[i],divBox[i]);
       //循环出每一层楼的lih和总大框,给了下面的函数
       };
       function tab(asBox,divBox){
        var  links=asBox.getElementsByTagName('li');
        //这里links，divs必须是局部变量,全局时会覆盖之前调用的
        var  divs=getClass('fz_js',divBox);
       // console.log(divs);
         for (var i = 0; i < links.length; i++) {
          links[i].aa=i;
        //自定义个属性用来保存下标，否则for循环很快得到是最后一个
          links[i].onmouseover=function(){
            for (var j = 0; j < divs.length; j++) {
                divs[j].style.zIndex="0";
                links[j].className="";
            };
              divs[this.aa].style.zIndex="99";
              this.className="border-red";  
          }
    }
 
}


/*
banner 下的无缝轮播
*/
var noFengBox=getClass('xia_js')[0];//获取总共的宽度
  //console.log(noFeng)
var noFeng1=getClass('every');
//console.log(noFeng1);//得到所有的图片集合
 var wids=parseInt(getStyle(noFeng1[0],'width'));
 //console.log(wids);//得到一个图片的宽度
 //noFengBox.style.width=noFeng1.length*wids+'px';
  var tuij_l=getClass('t-left')[0];
  var tuij_r=getClass('t-right')[0];
 // console.log(tuij_l);
  tuij_l.onclick=function(){
     insertBefore(getLast(noFengBox),getFirst(noFengBox));
     noFengBox.style.marginLeft=-wids+'px';
     animate(noFengBox,{marginLeft:0},400,function(){
          index--;
          if(index==-1){
            index=noFeng.length-1;
          }
     })  
  }
   var flag=true;
  tuij_r.onclick=function(){
    if(!flag){
      return;
    }
     flag=false;
     animate(noFengBox,{marginLeft:-wids},400,function(){
      noFengBox.appendChild(getFirst(noFengBox));
      noFengBox.style.marginLeft=0;
      index++;
      if(index==noFeng1.length){
        index=0;
      }
      flag=true;
     });
  }

  var tuijBox=getClass('xiaRBox')[0];
  tuijBox.onmouseover=function(){
    tuij_l.style.display="block";
    tuij_r.style.display="block";
  }
  tuijBox.onmouseout=function(){
    tuij_l.style.display="none";
    tuij_r.style.display="none";
  }




/*
F1
*/
 var bigBox=getClass('f1bo')
  for (var i = 0; i <bigBox.length; i++) {
         louceng(i);
  };
  
function louceng(gg){

 var bigBox=getClass('f1bo')[gg];
 //console.log(bigBox);
 var bigAs=getChild(bigBox);//集合
 //console.log(bigAs);
 var aw=parseInt(getStyle(bigAs[0],'width'));
 //console.log(aw);
 var tims=setInterval(aa,3000);
 var sum=0;
 var flag=true;
 //获取四个小按钮
var ulbtn=getClass('f1-Btn')[gg].getElementsByTagName('li');
//console.log(ulbtn);
var btn_box=getClass('f1_two2')[gg];//获取大框用于显示按钮
//console.log(btn_box);
var tui_l=getClass('left')[gg];//左
 //console.log(tui_l)
var tui_r=getClass('right')[gg];//右
//console.log(tui_r);

  function aa(){
     if(!flag){
       return;
     }
      flag=false;
      animate(bigBox,{marginLeft:-aw},400,function(){//整体把容器往左移动一个图片的宽度
        bigBox.appendChild(getFirst(bigBox));//把第一张插入到第三张的后面
        bigBox.style.marginLeft=0;//把容器的左边归零;
        sum++;
        if(sum==bigAs.length){
          sum=0; 
        }
        for (var i = 0; i < ulbtn.length; i++) {
             ulbtn[i].className="";
        }
          ulbtn[sum].className='styles-red';
          flag=true;
      });
  }
 
  btn_box.onmouseover=function(){
    tui_l.style.display='block'
    tui_r.style.display='block'
    clearInterval(tims)
  }
 btn_box.onmouseout=function(){
    tui_l.style.display='none';
    tui_r.style.display='none';
    tims=setInterval(aa,3000);
  }
//下边按钮
  for (var i = 0; i < ulbtn.length; i++) {
       ulbtn[i].sum=i;
       ulbtn[i].onclick=function(){
        for (var i = 0; i < ulbtn.length; i++) {
            ulbtn[i].className='';
        };
        this.className='styles-red';
        animate(bigBox,{marginLeft:-aw*this.sum});
        sum=this.sum;
       }
  };
//左右按钮
     tui_l.onclick=function(){
       if(!flag){
        return
       }
       flag=false;
       insertBefore(getLast(bigBox),getFirst(bigBox));
       bigBox.style.marginLeft=-aw+'px';//把容器向左移动一个图片的宽度
       animate(bigBox,{marginLeft:0},400,function(){
        sum--;
         if(sum==-1){
          sum=bigAs.length-1;
         }
         for (var i = 0; i < ulbtn.length; i++) {
             ulbtn[i].className='';
         };
         ulbtn[sum].className='styles-red';
         //sum=this.sum;
         flag=true;
       })
     }
   tui_r.onclick=function(){
     aa();
   }


}
//楼层end

/*
移动
*/
 // var move=getClass('yidong')[0].getElementsByTagName('img')[0];
 //    console.log(move);
 /* move.onmouseover=function(){
    animate(move,{marginLeft:-8})
  }
   move.onmouseout=function(){
    animate(move,{marginLeft:0})
  }*/
     
   var move=getClass('yidong');
  // console.log(move)

   for (var i = 0; i < move.length; i++) {
    var  mobox=move[i].getElementsByTagName('img')[0];
      // console.log(mobox);
        moves(mobox);
   };
    
   function moves(move){
      move.onmouseover=function(){
     animate(move,{marginLeft:-8})
   }
     move.onmouseout=function(){
     animate(move,{marginLeft:0})
   }

    }




/*
fix 右
*/
    var fixRight=getClass('over');
   // console.log(fixRight)
    for (var i = 0; i < fixRight.length; i++) {
          var up=getClass('fixUp',fixRight[i])[0]
          var down=getClass('fixDown',fixRight[i])[0]
          fixd(fixRight[i],down,up);
    };  
    function fixd(Fa,Db,Uc){
     Fa.onmouseover=function(){
       animate(Db,{marginLeft:-61})
       Db.style.background='#C81623';
       Uc.style.background='#C81623';
    } 
    Fa.onmouseout=function(){
       animate(Db,{marginLeft:1})
        Db.style.background='#7A6E6E';
        Uc.style.background='#7A6E6E';
    }


    }

    
    
//天天低价
 var daysbox=getClass('Toplunbo')[0];
console.log(daysbox)
 var lis=daysbox.getElementsByTagName('li')[0];
 console.log(lis);
 var lih=parseInt(getStyle(lis,'height'));//一个的高度
 console.log(lih);
  var num=0;
  var s=setInterval(moveT,2000);
   function moveT(){
     num++; 
     insertBefore(getLast(daysbox),getFirst(daysbox));
     daysbox.style.marginTop=-lih+'px';
     animate(daysbox,{marginTop:0});
     //console.log(getLast(daysbox))
   }
   

  /*
 关闭banner
  */
  var banner_close=$('.topbanner_box')[0];
 // console.log(banner_close);
  var closeBox=$('.close')[0];
  //console.log(closeBox);
   closeBox.onclick=function(){
     banner_close.style.display="none";
   }


/*
左侧楼层
*/
 
  var btnBox=getClass('foorceng')[0].getElementsByTagName('li');
    //console.log(floors);
   var nums=getClass('num');
   //console.log(nums);
   var fonts=getClass('font');
   var floorBox=$('.floor');
  // console.log(floorBox);
    var tops=[];
    for (var i = 0; i < floorBox.length; i++) {
         tops.push(floorBox[i].offsetTop);
          btnBox[i].index=i;
          btnBox[i].onclick=function(){
             animate(document.documentElement,{scrollTop:tops[this.index]});
                animate(document.body,{scrollTop:tops[this.index]});
          }
    };
//console.log(tops);
var fbox=$('.foorceng')[0];
 var h=document.documentElement.clientHeight;
 window.onscroll=function(){
  var doc=document.body.scrollTop?document.body:document.documentElement;
  var positions=doc.scrollTop;
 // console.log(positions);
   if(tops[0]-50>positions){
      fbox.style.display="none"
   }
   if(tops[0]<positions){
      fbox.style.display="block"
   }
   if(tops[tops.length-1]+300<positions){
      fbox.style.display="none"
   }
    for (var i = 0; i < btnBox.length; i++) {
        if(positions>=tops[i]){
          for (var j = 0; j < btnBox.length; j++) {
           nums[j].style.display="block";
           fonts[j].style.display="none";
          };
          nums[i].style.display="none";
           fonts[i].style.display="block";
           fonts[i].style.color="#C81623"
        }
       
    };
 }
  
  var back=$('.back')[0];
  console.log(back);
  back.onclick=function(){
    var doc=document.body.scrollTop?document.body:document.documentElement;
    animate(doc,{scrollTop:0});
  };
   
  
  
 

  
/*
二级菜单导航
*/
 
 
 var ListItem=getChild($('.kg')[0]);//获取kg下的子节点，15个
  //console.log(ListItem)
   for (var i = 0; i < ListItem.length; i++) {
          ListItem[i].list=i;
         ListItem[i].onmouseover=function(){
             this.className="lihover";
         }
          ListItem[i].onmouseout=function(){
             this.className="";
         }



   };
      
}



