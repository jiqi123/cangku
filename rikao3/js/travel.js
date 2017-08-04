$.ajax({
    url:"data/data.json",
    success:function(data){
        render(data.menu);
        renderList(data.trip);
        renderAddress(data.interest);
    }
})
/*导航渲染*/
function render(data){
    var str="";
    str='<div class="swiper-wrapper">';
    for(var i=0;i<2;i++){
        str+='<div class="swiper-slide list">';
        $.each(data,function(i,val){
         str+='<dl><dt><i class="iconfont '+val.name+' '+val.color+'"></i></dt><dd>'+val.dd+'</dd></dl>';
         })
        str+='</div>';
    }
    str+='</div>';
    $(".swiper-container").append(str);
    var myswiper = new Swiper('.swiper-container',{
        pagination:".swiper-pagination",
        autoplay:1000
    })
}
/*风向标渲染*/
function renderList(data){
    var str1="";
    $.each(data,function(i,val){
        str1+='<dl><dt><img src='+val.url+'></dt><dd>'+val.dd+'</dd></dl>';
    })
    $(".just-cen").append(str1);
}

/*自然探渲染*/
function renderAddress(data){
    var str2="";
    $.each(data,function(i,val){
        for(var i=0;i<val.length;i++){
            str2+='<li>'+val[i]+'</li>';
        }
    })
    $(".list-explore").append(str2);
}

/*景点渲染*/
function renderScenery(){
    $.ajax({
        "url":"data/data.json",
        "success":function(data){
            var section="";
            $.each(data.section,function(i,obj){
                section+='<div class="scenery"><img src='+obj.url+' alt=""><ul>';
                $.each(obj.ul,function(j,val){
                    section+='<li><a href="#">'+val.li+'<p>'+val.span+'</p></a></li>';
                })
                section+='</ul></div>';
            })
            $('.content').append(section)
        }
    })
}
renderScenery();




