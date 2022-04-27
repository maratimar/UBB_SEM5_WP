// function validate(){
    
    //document.getElementById("myform").addEventListener("submit", e => {
    //e.preventDefault();
    
    //}
    
    // let y = document.getElementById("userName").value;
    
    // if( y == "" ){
     
      // alert("Please input a valid name!");
      // document.getElementById("userName").style.borderColor = "red";     
    // }
    
    
    // let x = document.getElementById("age").value;
    
    // if (isNaN(x) || x < 1){
        
        // alert("Input valid age!");
        // document.getElementById("age").style.borderColor = "red";
    // }
    
    
    // let z = document.getElementById("e-mail").value;
    
    // if( z == "" ){
     
      // alert("Please input a valid email addres!"); 
      // document.getElementById("e-mail").style.borderColor = "red";      
    // } 
    
    
// }
// document.getElementById("submitButton").addEventListener("click", validate());

const nume = document.getElementById("userName")

const age = document.getElementById("age")

const email = document.getElementById("e-mail")

document.getElementById("myform").addEventListener("submit", (e) => {
    
    let messages = []
    
    
    if( nume.value == "" || nume.value == null ){
        
        messages.push("Name is required!")
        document.getElementById("userName").style.borderColor = "red"
        
    }
    else{
        document.getElementById("userName").style.borderColor = "black"
    }
    
    if ( age.value == null || age.value < 1){
        
        messages.push("Invalid age value!")
        document.getElementById("age").style.borderColor = "red"
        
    }
    else{
        document.getElementById("age").style.borderColor = "black"
    }
    
    if ( email.value === "" || email.value == null ){
         
        messages.push("Invalid email address!")
        document.getElementById("e-mail").style.borderColor = "red"  
    }
    else{
        document.getElementById("e-mail").style.borderColor = "black"
    }
    
    if( messages.length > 0){
       e.preventDefault();
       document.getElementById("errors").innerHTML = messages.join(", ")
       
    }
    
    })

