const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });
    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });

    var emailArray=[];
    var passwordArray=[];

    function register(){
        event.preventDefault();
        
        var email = document.getElementById("email").value;
        var password = document.getElementById("pass").value;
        var passwordRetype = document.getElementById("rpass").value;

        if (email == ""){
            alert("Email required.");
            return ;
        }
        else if (password == ""){
            alert("Password required.");
            return ;
        }
        else if (passwordRetype == ""){
            alert("Password required.");
            return ;
        }
        else if ( password != passwordRetype ){
            alert("Password don't match retype your Password.");
            return;
        }
        else if(emailArray.indexOf(email) == -1){
            emailArray.push(email);
            passwordArray.push(password);

            alert(email + "  Thanks for registration. \nTry to login Now");

            document.getElementById("fname").value ="";
            document.getElementById("email").value="";
            document.getElementById("pass").value="";
            document.getElementById("rpass").value="";
            document.getElementById("phone").value="";
            
        }
        else{
            alert(email + " is already register.");
            return ;
        }
    } 


    function login(){
        event.preventDefault();

        var email = document.getElementById("lemail").value;
        var password = document.getElementById("lpass").value;

        var i = emailArray.indexOf(email);

        if(emailArray.indexOf(email) == -1){
            if (email == ""){
                alert("Email required.");
                return ;
            }
            alert("Email does not exist.");
            return ;
        }
        else if(passwordArray[i] != password){
            if (password == ""){
                alert("Password required.");
                return ;
            }
            alert("Password does not match.");
            return ;
        }
        else {
            alert(email + " Logging In \n welcome to My website.");
            window.open("http://dawit-nigus.github.io/")

            document.getElementById("lemail").value ="";
            document.getElementById("lpass").value="";
            return ;
        }

    }
   