class Landing {
  dataBase = {};
  //   database={
  //     'milan@gmail.com':{name:'milan',email:'milan@gmail.com',password:"1234"}
  //   }
  registeruser() {
    if (localStorage.getItem("userData") != null) {
      this.getData();
    }
    let firstName = username.value;
    let email = exampleInputEmail1.value;
    let password = exampleInputPassword1.value;
    if (firstName !== "" && email !== "" && password !== ""){
      if(email in this.dataBase){
        alert(`${email} already exist`);
      } 
      else {
        this.dataBase[email] = {
          name: firstName,
          email: email,
          password: password,
        };
        //  save data
        this.saveData();
        alert("registration successfull");
        // method to navigate a new html page
        window.location = "login.html";
      }
    //   alert(`${firstName},${email},${password}`);
    } 
    else {
      alert("Please enter valid values");
    }
  }
  getData() {
    this.dataBase = JSON.parse(localStorage.getItem("userData"));
  }
  saveData() {
    localStorage.setItem("userData", JSON.stringify(this.dataBase));
  }
  login(){
    let loggedEmail=userEmail.value;
    let loggedPassword=userPassword.value;
    this.getData();
    if(loggedEmail==''|| loggedPassword==''){
      alert("Please enter values")
    }
    else{
      if(this.dataBase[loggedEmail]){
          if(this.dataBase[loggedEmail].password===loggedPassword){
            localStorage.setItem('firstname',this.dataBase[loggedEmail].name)
            window.location="home.html"
            }
            else{
              alert("password mismatch")
            }
      }
      else{
         alert(`${loggedEmail} not found`)
      }
    }
  }
}


const obj = new Landing();
