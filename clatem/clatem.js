$(document).ready(function(){
    var $registrationSymbol = $("#registration-symbol");
    var $newAlertDiv = $("#register-error");
    $newAlertDiv.slideUp();
    var $newAlert = $("<ul>");
    $newAlert.css("text-align","center");
    $newAlert.css("list-style-type","none");
    $registration_value = $("#registration-div input");
    $registration_div = $("#registration-div");
    var $login_value = $("#login-div input");
    var $login_div = $("#login-div");
    $("#registration-div-items").slideUp(0);
    $("#register-botton").on("click",function(e){
        for(var i=0;i<6;i++){$registration_value.eq(i).val("");}
        $registration_div.css("z-index","1");
        $registration_div.css("left","350px");
        $registration_div.css("opacity","1");
        $registration_div.css("-webkit-box-shadow","rgb(70, 70, 70)3px 3px 3px 3px");
        $registration_div.css("border-radius","10px");
        $("#login-botton").show();
        $login_div.css("z-index","0");
        $login_div.css("left","0");
        $login_div.css("opacity","0");
        $login_div.css("-webkit-box-shadow","rgb(70, 70, 70)0px 0px 0px 0px");
        $("#item-div").css("left","-300px");
        $("#item-div").css("-webkit-transform","rotate(-360deg)");
        $("#registration-div-items").slideDown(2000);
        $("#login-div-item").slideUp(2000);
        $(e.target).hide()
        e.stopPropagation();
    })
    $("#registration-cancel").on("click",function(e){
        $registration_div.css("z-index","0");
        $registration_div.css("left","0");
        $registration_div.css("opacity","0");
        $registration_div.css("-webkit-box-shadow","rgb(70, 70, 70)0px 0px 0px 0px");
        $("#register-botton").show();
        $("#registration-div-items").slideUp(2000);
        $("#item-div").css("-webkit-transform","rotate(360deg)");
        $("#item-div").css("left","10px");
        e.stopPropagation();
    });
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if( re.test(email)){
            return true;
        }
        return false;
      }
      function validateFirstName(firstname) {
        var re = /^[a-zA-Z]+$/;
        if( re.test(firstname)){
            return true;
        }
        return false;
      }
      function validateLastName(lastname) {
        var re = /^[a-zA-Z]+$/;
        if( re.test(lastname)){
            return true;
        }
        return false;
      }
      function validateUserName(username) {
          if((username.length > 5)&&(username.length<10)){
        var re = /^[a-zA-Z]+(?=.*[a-z])(?=.*[0-9])/;
        if( re.test(username)){
            return true;
        }
        return false;}
        return false;
      }
      function validatePassword(password) {
        if((password.length > 8)&&(password.length<15)){
            var re = /^((?=.*[a-z])|(?=.*[A-Z]))(?=.*[0-9])(?=.{8,})/;
        if( re.test(password)){
            return true;
        }
        return false;}
        return false;
      }  
      $("#registration-error-close").on("click",function(e){
      $newAlertDiv.slideUp(500); })
    $("#registration-submit").on("click",function(e){
        $registrationSymbol.removeClass("glyphicon glyphicon-ok");
        $registrationSymbol.addClass("fa fa-warning");
        $registrationSymbol.attr("style","color:#d80b0b;");
        $registrationSymbol.attr("style","font-size: 4em;padding-top:100px;");
        $("#register-error ul").html("");
        e.preventDefault();
        $newAlert.attr("class","text-left")
        if( ( $registration_value.eq(0).val()!=="")&&( $registration_value.eq(1).val()!=="")&&( $registration_value.eq(2).val()!=="")&&
        ( $registration_value.eq(3).val()!=="")&&( $registration_value.eq(4).val()!=="")&&( $registration_value.eq(5).val()!=="") ){
            if($registration_value.eq(4).val() !== $registration_value.eq(5).val()){
            $registration_value.eq(4).val("")
            $registration_value.eq(5).val("")
            var $newAlertLi = $("<li>");
            $newAlertLi.text("Password does not match");
            $newAlertLi.attr("style","padding:3px;margin-top:-5px;margin-botton:1px;list-style-type:none;");
            $newAlert.append($newAlertLi);
            }
            if(validateEmail($registration_value.eq(3).val())===false){
                $registration_value.eq(4).val("")
                $registration_value.eq(5).val("")
            var $newAlertLi = $("<li>");
            $newAlertLi.text("email is not a valid email");
            $newAlertLi.attr("style","padding:3px;margin-top:-5px;margin-botton:1px;list-style-type:none;");
            $newAlert.append($newAlertLi);
            }
            if(validateFirstName($registration_value.eq(0).val())===false){
                $registration_value.eq(4).val("")
            $registration_value.eq(5).val("")
                var $newAlertLi = $("<li>");
                $newAlertLi.text("firstName should consist of only letters");
                $newAlertLi.attr("style","padding:3px;margin-top:-5px;margin-botton:1px;list-style-type:none;");
                $newAlert.append($newAlertLi); 
            }
            if(validateLastName($registration_value.eq(1).val())===false){
                $registration_value.eq(4).val("")
                $registration_value.eq(5).val("")
                var $newAlertLi = $("<li>");
                $newAlertLi.text("lastName should consist of only letters");
                $newAlertLi.attr("style","padding:3px;margin-top:-5px;margin-botton:1px;list-style-type:none;");
                $newAlert.append($newAlertLi); 
            }
            if(validateUserName($registration_value.eq(2).val())===false){
                $registration_value.eq(4).val("")
                $registration_value.eq(5).val("")
                var $newAlertLi = $("<li>");
                $newAlertLi.text("username is not valid");
                $newAlertLi.attr("style","padding:3px;margin-top:-5px;margin-botton:1px;list-style-type:none;");
                $newAlert.append($newAlertLi); 
            }
            if(validatePassword($registration_value.eq(5).val())===false){
                $registration_value.eq(4).val("")
            $registration_value.eq(5).val("")
                var $newAlertLi = $("<li>");
                $newAlertLi.text("password should consist of atleast 8 characters including numbers");
                $newAlertLi.attr("style","padding:3px;margin-top:-5px;margin-botton:1px;list-style-type:none;");
                $newAlert.append($newAlertLi); 
            }
            else{
                //registration success should be here
                $registrationSymbol.removeClass("fa fa-warning");
                $registrationSymbol.addClass("glyphicon glyphicon-ok");
                $registrationSymbol.attr("style","font-size: 4em;color:green;padding-top:100px;");
                $("#registration-error-close").hide();
                var $newAlertLi = $("<li>");
                $newAlertLi.html("successfully registered <a href='#'>Login</a>");
                $newAlertLi.attr("style","padding:3px;margin-top:-5px;margin-botton:1px;color:green;");
                $newAlertLi.addClass("login-botton");
                $newAlert.append($newAlertLi);

            }
        }
        else{
            
            for(var i=0;i<6;i++){
            if($registration_value.eq(i).val()===""){
                var $registration_value1 = $registration_value.eq(i).parent().prev();
                var registrationName = $registration_value1.html();
                registrationName = registrationName.split("");
                registrationName.pop();
                registrationName = registrationName.join("");
                var $newAlertLi = $("<li>");
                $newAlertLi.text(registrationName+" can not be blank");
                $newAlertLi.attr("style","padding:3px;margin-top:-5px;margin-botton:1px;");
                $newAlert.append($newAlertLi);
            }}
        }
        $newAlertDiv.append($newAlert);
        $newAlertDiv.slideDown(500);
        if($registrationSymbol.attr("class")==="glyphicon glyphicon-ok"){
            }
        else{
        setTimeout(function(){
            $newAlertDiv.slideUp();
        },3000)}
    })
//script for the login:
$("#login-div-item").slideUp(0);
for(var ii=0;ii<2;ii++){
$(".login-botton").eq(ii).on("click",function(e){
    e.preventDefault();
    for(var i=0;i<2;i++){$login_value.eq(i).val("");}
    $registration_div.css("z-index","0");
    $registration_div.css("left","0");
    $registration_div.css("opacity","0");
    $registration_div.css("-webkit-box-shadow","rgb(70, 70, 70)0px 0px 0px 0px");
    $("#register-botton").show();
    $login_div.css("z-index","1");
    $login_div.css("left","350px");
    $login_div.css("opacity","1");
    $login_div.css("-webkit-box-shadow","rgb(70, 70, 70)3px 3px 3px 3px");
    $login_div.css("border-radius","10px");
    $("#item-div").css("left","-300px");
    $("#item-div").css("-webkit-transform","rotate(-360deg)");
    $("#login-div-item").slideDown(2000);
    $("#registration-div-items").slideUp(2000);
    $(e.target).hide()
    e.stopPropagation();
})
}
$("#login-cancel").on("click",function(e){
    $login_div.css("z-index","0");
    $login_div.css("left","0");
    $login_div.css("opacity","0");
    $login_div.css("-webkit-box-shadow","rgb(70, 70, 70)0px 0px 0px 0px");
    $("#login-botton").show();
    $("#login-div-item").slideUp(2000);
    $("#item-div").css("-webkit-transform","rotate(360deg)");
    $("#item-div").css("left","10px");
    e.stopPropagation();
});
$("#login-submit").on("click",function(e){
    e.preventDefault();
})
var c = document.getElementsByClassName("c")
var shakeInterval;
$("#clatem").on("mouseover",function(e){
    var i=0;
    shakeInterval = setInterval(function () {
        if (i > 5) {
            i = 0;
        }
        c[i].classList.add("C");
        i++ 
    },250)
})
$("#clatem").on("mouseout",function(e){
    clearInterval(shakeInterval);
    for(var i=0;i<6;i++){
        c[i].classList.remove("C");  
    } 
})
});
