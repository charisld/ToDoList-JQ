$(function(){
    var finish=$(".finish");
    var unfinish=$(".unfinish");
    var f_list=$(".f_list");
    var unf_list=$(".unf_list");
    var add=$(".add_task");
    var content;
    //切换任务模块
    finish.click(function(){
        unfinish.removeClass("present");
        finish.addClass("present");
        unf_list.css("display","none");
        f_list.css("display","block");
    });
    unfinish.click(
        function(){
            finish.removeClass("present");
            unfinish.addClass("present");
            f_list.css("display","none");
            unf_list.css("display","block");
        }
    );  
    // $(".set").toggle(function(){
    //     $(".color").show();
    // },function(){
    //     $(".color").hide();
    // }
    // );
    $(".set").click(function(){
        $(".color").toggle();
   
    });
    $(".color span").hover(function(){
        $(this).addClass("chose");
    },function(){
        $(this).removeClass("chose")
    }
);
    add.on("click",function(){
        $("#addTask").css("display","block");
    });

    $(".left").click(function(){
        $("#addTask").css("display","none");
       
    });

    $(".right").click(function(){
        $("#addTask").css("display","none");
        appendTask();
        
    });
    //删除任务
    $('body').on('click','.delete',function(){
        $(this).parent().parent().remove();

    });
    //完成任务
    $('body').on('click','.unf_list .done',function(){
        $(this).parent().parent().appendTo(f_list);
        f_list.find(".done").remove();
    });
    //添加新任务
    $("#textarea").keyup(function(e){
        e.stopPropagation();
        e.preventDefault();
         content=e.target.value;
    } );
    function appendTask(){
        var Task1="<div class='task'><div class='taskWrap'><img src='./images/one.png'>"+
        "<p>"+content+"</p> <button class='delete'>删除</button><button class='done'>完成</button></div></div>";
       unf_list.append(Task1);
     }
});

