


// debugger;


///////////////      #1 

/////// متغیر ها

var Name = 'Mobin';
var Family = 'Hemmat';
// console.log(Name) ;
// console.log(typeof Name);

/////// توابع

function MobinA() {
    var x = 5;
    var y = 6;
    var c = x + y;
    console.log(c)
}







/////////////   #2

////////////////            آرایه هاس

// document.write(Name + " " + Family)

// document.write("<br>")   

var Names = ["Mobin", "Ali", "Mohammad"]

// document.write(Names[2])  

function Names_length() {
    console.log(Names.length)
}

function log_Names() {
    console.log(Names)
}






/////////////   #3




function math1() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    var output_answer = num1 + num2;
    var output = document.getElementById('math--output--p');
    output.innerHTML = output_answer;
}
function math2() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    var output_answer = num1 - num2;
    var output = document.getElementById('math--output--p');
    output.innerHTML = output_answer;
}
function math3() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    var output_answer = num1 * num2;
    var output = document.getElementById('math--output--p');
    output.innerHTML = output_answer;
}
function math4() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    var output_answer = num1 / num2;
    var output = document.getElementById('math--output--p');
    output.innerHTML = output_answer;
}









/////////////   #4




function Fullname() {
    var Firstname = document.getElementById('Firstname').value;
    var Lastname = document.getElementById('Lastname').value;
    var result = document.getElementById('result-box');
    result.innerHTML = "";
    result.innerHTML = Firstname + " " + Lastname;
}


function Sharp4(x, y) {
    return x + y;
}
function Sharp4_active() {

    console.log(Sharp4(3, 5));
}



/////////////   #5


var person_object = {
    person1: {
        Name: "ali",
        Family: "Kiani",
        Age: 30,
    },
    person2: {
        Name: "hesam",
        Family: "alian",
        Age: 15,
    },
    person3: {
        Name: "matin",
        Family: "fagih",
        Age: 17,
    },
    person_Fullname: function () {
        return this.person2.Name + " " + this.person3.Family;
    }
}

function person_object_active() {
    console.log(person_object.person_Fullname());
}





/////////////   #6




function Timenow() {
    document.getElementById('onclick--time-p').innerHTML = Date();
}

function typemoment_change() {
    var typeinput = document.getElementById('type-moment-input-c').value;
    document.getElementById('type-moment-result-c').innerHTML = typeinput;
}

function typemoment_keypress() {
    var typeinput = document.getElementById('type-moment-input-k').value;
    document.getElementById('type-moment-result-k').innerHTML = typeinput;
}





/////////////   #7



function time_if_btn() {
    var time_input = document.getElementById('time--input').value;
    var hint_answer = document.getElementById('time--answer');

    if (time_input < 6) {
        hint_answer.innerHTML = "Have a nice sleep !"
    } else if (time_input < 11) {
        hint_answer.innerHTML = "Good Morning !"
    } else if (time_input < 15) {
        hint_answer.innerHTML = "Good afternoon !"
    } else if (time_input < 18) {
        hint_answer.innerHTML = "Good evening !"
    } else if (time_input <= 24) {
        hint_answer.innerHTML = "Have a beautiful night !"
    } else  {
        hint_answer.innerHTML = "WTF BRO !"
    }

}





/////////////   #8



function waht_day() {
    
    var today_p = document.getElementById('what--day-p');
    switch (new Date().getDay()) {
        case 0 - 1: {
            today_p.innerHTML = "Saturday !";
            break;
        }
        case 1 - 1: {
            today_p.innerHTML = "Sunday !";
            break;
        }
        case 2 - 1: {
            today_p.innerHTML = "Monday !";
            break;
        }
        case 3 - 1: {
            today_p.innerHTML = "Tuesday !";
            break;
        }
        case 4 - 1: {
            today_p.innerHTML = "Wednesday !";
            break;
        }
        case 5 - 1: {
            today_p.innerHTML = "Thursday !";
            break;
        }
        case 6 - 1: {
            today_p.innerHTML = "Friday !";
            break;
        }
    }

}



/////////////   #9






var models = ["Benz" , "BMW" , "Samand"];

// var cars = models[0] + " ";
// cars += models[1] + " ";
// cars += models[2] + " ";
// console.log(cars)

// var i = 0;
// var i ;

function test_for() {

    for(var i = 0 ; i < models.length ; i++) {
        var cars = models[i];
        console.log(cars);
        // i++
    }

}

function test_for_2() {

    for(n in models) {
        var cars = models[n];
        console.log(cars); 
    }    

}







/////////////   #10





var i2 = 1 ;

function test_while() {

    while( i2 <= 10 ) {
        console.log(i2);
        i2 ++;
    }

}

function test_do_while() {
    do{
        console.log(i2);
        i2 ++;
        // کنسول اکر زیر i2++ باشد تا 21 کنسول میکند و  یک را کنسول نمیکند
    }
    while(i2 <= 10)
}


function test_break_continue() {

    for( i2 ; i2 <= 10 ; i2++ ){

        if(i2 === 4 || i2 === 3) {
            continue;
        }
        if (i2 === 9){
            break;
        }

        console.log(i2)
    }

}







/////////////   #11







function test_try() {

    var input_try = document.getElementById('test-try-cath-input').value;
    var try_result = document.getElementById('try-cath-err');
    
    try {

        if(isNaN(input_try)) throw "Not a number !";
        input_try = Number(input_try);
        if(input_try == "") throw "Empty !";
        if(input_try < 5) throw "Low !";
        if(input_try > 20) throw "Hight !";
        if(input_try >= 5 && input_try <= 20){
            try_result.innerHTML = "Done !";
            try_result.style.color = "#04ff00";
            try_result.style.textShadow = "none";
        };
    }
    catch(err) {
        try_result.style.color = "red";
        try_result.innerHTML = "The input value is " + err;
    }
    finally {
        document.getElementById('test-try-cath-input').value = "";
    }





}






/////////////   #12
/////////////   #13
/////////////   #14
/////////////   #15






function test_submit() {

    var test_id_input = document.forms["form-test"]["user-id"].value;
    var test_form_err = document.getElementById('form-err');
    
    if(test_id_input == "") {
        test_form_err.innerHTML = 'Please insert your ID';
        return false;
    } else if(isNaN(test_id_input)) {
        test_form_err.innerHTML = 'Is not a number';
        return false;
    } else if(test_id_input == 1384) {
        test_form_err.innerHTML = 'DONE ! on next tab';
        test_form_err.style.color = "#04ff00";
        return true;
    } else {
        test_form_err.innerHTML = 'undefined ID';
        return false;
    }



}






/////////////   #16



// class Person_16 {
//     constructor(Name, Age, City) {
//         this.Name = Name;
//         this.Age = Age;
//         this.City = City;
//     }
// }





function make_obj(){
    var name_16 = document.getElementById('obj-name').value;
    var age_16 = document.getElementById('obj-age').value;
    var city_16 = document.getElementById('obj-city').value;

    function Person_16(Name , Age , City){
        this.Name = Name;
        this.Age = Age;
        this.City = City;
    }

    // class Person_16 {                                نوع دوم
    //     constructor(Name, Age, City) {
    //         this.Name = Name;
    //         this.Age = Age;
    //         this.City = City;
    //     }
    // }

    var obj_con_err = document.getElementById('obj-con-err');

    var person_16 = new Person_16(name_16 , age_16 , city_16);

    if(isNaN(person_16.Age)) {
        obj_con_err.innerHTML = "Age is not a number"
        obj_con_err.style.color = "red";
        return;
    } else if(person_16.Name , person_16.Age , person_16.City == "") {
        obj_con_err.innerHTML = "Please complete input!";
        return;
    } else {

        var obj_con_output = document.getElementById('obj-con-output-p');
        obj_con_output.innerHTML += person_16.Name + " from " + person_16.City + " have " + person_16.Age + " years old" + "<br/><br/>" ;

        obj_con_err.innerHTML = "";

        document.getElementById('obj-name').value = "";
        document.getElementById('obj-age').value = "";
        document.getElementById('obj-city').value = ""; 

    }

    

    // console.log(person_16);

}









/////////////   #17
/////////////   #18
/////////////   #19
/////////////   #20







function anim_move() {

    var animate = document.getElementById('animate');

    var pos = 0;
    var movement = setInterval(frame , 1);
    function frame() {

        if(pos === 349) { // 400 - 50px(width heigth) -1px for border
            clearInterval(movement);
        } else {
            pos++;
            animate.style.top = pos + "px";
            animate.style.left = pos + "px";
        }
    }
}








function show_time() {

    var time_show = setInterval(live_time , 1);

    function live_time() {
        var date_time = new Date();
        var time = date_time.toLocaleTimeString();
        document.getElementById('time-now-p').innerHTML = time;
    }

}






var red = 0;
var green = 0;
var blue = 0;
var div_back = document.getElementById('back-live');

function start_change_back_red() {

    var change_background = setInterval(change_back , 1);


    function change_back() {
        if(red === 255){
            clearInterval(change_background);
        } else {
            red++;
            div_back.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
            document.getElementById('color-live-num').innerHTML = "rgb( "+red+" , "+green+" , "+blue+" )";
        }
    }

}
function start_change_back_green() {

    var change_background = setInterval(change_back , 1);

    function change_back() {
        if(green === 255){
            clearInterval(change_background);
        } else {
            green++;
            div_back.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
            document.getElementById('color-live-num').innerHTML = "rgb( "+red+" , "+green+" , "+blue+" )";
        }
    }

}
function start_change_back_blue() {

    var change_background = setInterval(change_back , 1);

    function change_back() {
        if(blue  === 255){
            clearInterval(change_background);
        } else {
            blue++;
            div_back.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
            document.getElementById('color-live-num').innerHTML = "rgb( "+red+" , "+green+" , "+blue+" )";
        }
    }

}

function start_change_back_red_reset() {

    var change_background = setInterval(change_back , 1);

    function change_back() {
        if(red === 0){
            clearInterval(change_background);
        } else {
            red--;
            div_back.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
            document.getElementById('color-live-num').innerHTML = "rgb( "+red+" , "+green+" , "+blue+" )";
        }
    }

}
function start_change_back_green_reset() {

    var change_background = setInterval(change_back , 1);

    function change_back() {
        if(green === 0){
            clearInterval(change_background);
        } else {
            green--;
            div_back.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
            document.getElementById('color-live-num').innerHTML = "rgb( "+red+" , "+green+" , "+blue+" )";
        }
    }

}
function start_change_back_blue_reset() {

    var change_background = setInterval(change_back , 1);

    function change_back() {
        if(blue  === 0){
            clearInterval(change_background);
        } else {
            blue--;
            div_back.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
            document.getElementById('color-live-num').innerHTML = "rgb( "+red+" , "+green+" , "+blue+" )";
        }
    }

}





/////////////   #21 - #22




var even_btn = document.getElementById('event-lis-btn');

document.getElementById('event-lis-btn-reset').addEventListener("click" , even_reset);
function even_reset() {
    document.getElementById('click-result').style.backgroundColor = "rgba(0,0,0, 0.04)";
    document.getElementById('MouseOver-result').style.backgroundColor = "rgba(0,0,0, 0.04)";
    document.getElementById('MouseOut-result').style.backgroundColor = "rgba(0,0,0, 0.04)";
    document.getElementById('MouseDown-result').style.backgroundColor = "rgba(0,0,0, 0.04)";
    document.getElementById('MouseUp-result').style.backgroundColor = "rgba(0,0,0, 0.04)";
}

even_btn.addEventListener("click" , even_click);
even_btn.addEventListener("mouseover" , even_mouseover);
even_btn.addEventListener("mouseout" , even_mouseout);
even_btn.addEventListener("mousedown" , even_mousedown);
even_btn.addEventListener("mouseup" , even_mouseup);

function even_click() {
    document.getElementById('click-result').style.backgroundColor = "rgb(0,255,0)";
}
function even_mouseover() {
    document.getElementById('MouseOver-result').style.backgroundColor = "rgb(0,255,0)";
}
function even_mouseout() {
    document.getElementById('MouseOut-result').style.backgroundColor = "rgb(0,255,0)";
}
function even_mousedown() {
    document.getElementById('MouseDown-result').style.backgroundColor = "rgb(0,255,0)";
}
function even_mouseup() {
    document.getElementById('MouseUp-result').style.backgroundColor = "rgb(0,255,0)";
}






/////////////   #23



var dad_elem = document.getElementById('creat-elem-elements');

function create_Element() {

    var para = document.createElement("p");
    var para_node = document.createTextNode("This is new one");
    para.appendChild(para_node);
    para.classList.add('error-p');
    // dad_elem.appendChild(para);
    var p__3 = document.getElementById('p#3');
    dad_elem.insertBefore(para , p__3);

}

function remove_Element() {

    var p__1 = document.getElementById('p#1');
    dad_elem.removeChild(p__1);

}

function replace_Element() {

    var para = document.createElement("p");
    var para_node = document.createTextNode("This is new one p#4");
    para.appendChild(para_node);
    para.classList.add('error-p');
    // dad_elem.appendChild(para);
    var p__2 = document.getElementById('p#2');
    dad_elem.replaceChild(para , p__2);

}



/////////////   #24



function colection_change() {

    var my_dom_colcetion = document.getElementsByClassName('p-colc-dom');
    var i;

    for(i = 0 ; i < my_dom_colcetion.length ; i++){
        my_dom_colcetion[i].style.color = "rgb(0 ,241, 27)";
    }

}




/////////////   #25





function window_width_height() {

    var window_Width = window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
    var window_Height = window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

    document.getElementById('window-width-p').innerHTML = 
    "window Width = " + window_Width +" || window Height = " + window_Height; 

}

function screen_width_height() {

    var screen_Width = screen.availWidth;
    var screen_Height = screen.availHeight;

    document.getElementById('Screen-width-p').innerHTML = 
    "Screen Width = " + screen_Width +" || Screen Height = " + screen_Height; 

}

function window_href() {

    var window_href = window.location.href;
    document.getElementById('Window-href-p').innerHTML = window_href;

}

function window_pathname() {

    var window_pathname = window.location.pathname;
    document.getElementById('Window-pathname-p').innerHTML = window_pathname;

}


function window_protocol() {

    var window_protocol = window.location.protocol;
    document.getElementById('Window-protocol-p').innerHTML = window_protocol;

}






/////////////   #26




function move_forward() {
    window.history.forward();
}

function move_back() {
    window.history.back();
}





/////////////   #27





function alert_popup() {
    alert("Hello \n How are you today?")
}

var popup_p = document.getElementById('popup-result');

function confirm_popup() {

    var txt_popup = "";
    if(confirm()){
        txt_popup = "User click OK !";
        popup_p.innerHTML = txt_popup;
    } else {
        txt_popup = "User click Cancel !";
        popup_p.innerHTML = txt_popup;
    }
}

function prompt_popup() {

    var txt = "";
    var prompt_message = prompt("Insert your Name : " , "Name");

    if(prompt_message == null || prompt_message == "Name" || prompt_message == ""){
        
        txt = "The user did not enter her/his name";
        popup_p.style.color= "red";
    
    } else {
        txt = "Hello " + prompt_message;
        popup_p.style.color= "black";
    }
    popup_p.innerHTML = txt;
}






/////////////   #28






var time___green;

function time_green() {

    time___green = setTimeout(time__green , 3000);

    function time__green(){
        document.getElementById('div-timer').style.backgroundColor = "rgb(0,255,0)";
    }

}

function stop_time_green() {
    clearTimeout(time___green);
    document.getElementById('div-timer').style.backgroundColor = "rgb(255,0,0)";
}


////////////////


var time_interval;
var time_live_p = document.getElementById('live-timer-p');

function start_time_live() {
    time_live_p.style.color = "Black";
    time_interval = setInterval(live_timer , 1);
    function live_timer(){
        var win_date = new Date();
        time_live_p.innerHTML = win_date.toLocaleTimeString();
    }

}

function stop_time_live() {
    clearInterval(time_interval);
    time_live_p.style.color = "Red";
}








/////////////   #29
/////////////   #30





function read_info_ajax() {

    var xhttp = new XMLHttpRequest();

    xhttp.open('GET' , './ajax-text/info.txt' , true);
    xhttp.send();

    xhttp.onreadystatechange = function() {
        document.getElementById('ajax-result').innerHTML = this.responseText;
    }

}



/////////////   #31
/////////////   #32
/////////////   #33




function ajax_request() {
    
    var request = new XMLHttpRequest();
    request.open('GET' , './ajax-text/data.txt' , false)
    request.send();

    if(request.status === 200){
        document.getElementById('new-ajax-result').innerHTML = request.responseText;
    } else {
        console.log("Error in Ajax");
    }

}



/////////////   #34
/////////////   #35




var tab_nav = document.querySelectorAll('.tab-selector ul li');

for(i = 0 ; i < tab_nav.length ; i++){
    tab_nav[i].addEventListener("click" , tab_click)

    function tab_click(){
        document.querySelector('li.tab-nav-active').classList.remove('tab-nav-active');
        this.classList.add('tab-nav-active');

        var data_content = this.getAttribute('data-content');

        document.querySelector('.tab-text-active').classList.remove('tab-text-active');
        document.querySelector(`.tab-selected-text ul li[data-content="${data_content}"]`).classList.add('tab-text-active');
    }

}


var tab_nav_ajax = document.querySelectorAll('.tab-selector-ajax ul li');

for(i = 0 ; i < tab_nav_ajax.length ; i++){

    tab_nav_ajax[i].addEventListener("click" , tab_click_ajax)


    function tab_click_ajax(){
        document.querySelector('li.tab-nav-active-ajax').classList.remove('tab-nav-active-ajax');
        this.classList.add('tab-nav-active-ajax');

        var data_content_ajax = this.getAttribute('data-content');
        var tab_ajax_result = document.getElementById('tab-ajax-result');
    
            var request = new XMLHttpRequest();
            request.open('GET' , `./ajax-text/ajax-tab-data/data-${data_content_ajax}.txt` , false);
            request.send();
            tab_ajax_result.innerHTML = request.responseText;        

    }


}





/////////////   #36
/////////////   #37
/////////////   #38
/////////////   #39




var game_1_btn = document.querySelectorAll('.game1-buttom button');
var game_1_score = ["0","0"];

for(i = 0 ; i < game_1_btn.length ; i++ ) {
    game_1_btn[i].addEventListener("click" , game_1_click);
    function game_1_click() {

        var user_selected = this.innerHTML;
        var game1_rnm = Math.floor(Math.random()*2);
        var game_1_object = ["Man" , "Num"];
        var pc_selected = game_1_object[game1_rnm];

        if(pc_selected === "Man"){
            document.querySelector('.active-game-1').classList.remove('active-game-1');
            document.querySelector('.game1-logo-lion').classList.add('active-game-1');
        }else {
            document.querySelector('.active-game-1').classList.remove('active-game-1');
            document.querySelector('.game1-logo-line').classList.add('active-game-1');
        }

        if(user_selected === pc_selected) {
            game_1_score[0]++;
            document.getElementById('game-1-result').innerHTML = "User Win!";
            document.getElementById('game-1-result').style.color = "rgb(3 201 0)";
        } else {
            game_1_score[1]++;
            document.getElementById('game-1-result').innerHTML = "PC Win!";
            document.getElementById('game-1-result').style.color = "red";
        }

        var game_1_score_panel = "User : " + game_1_score[0] + " | " + game_1_score[1] + " : PC";
        document.getElementById('game1-score').innerHTML = game_1_score_panel;

    }
}


































































































