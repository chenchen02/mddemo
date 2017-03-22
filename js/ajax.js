
    $(document).ready(function(){
        $(".input3").click(function(){

            $.ajax({
                type: "get",
                url: "music.txt",

                dataType:"json",
                success:function(data){
                    $.each(data,function(infoIndex,info) {
                        if ($(".input1").val() == info["username"] && $(".input2").val() == info["password"] ) {

                            window.location.href = "index.html";

                        }
                        else {

                            alert("用户名和密码错误！");
                            return false;

                        }
                        return false;
                    })

                }

            })

           
        });
    });
