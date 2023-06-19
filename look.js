function values(id ,type ){
    if(type == "text" ){
      value = $(id).val();
    }
  return value;
}

function getval(){
//   fname = values("#fname","text");
  lname = values("#lname","text");
  phone = values("#phone","text");
  email = values("#email","text");
  pasword = values("#pasword","pasword");
  repasword = values("#repasword","repasword");
  select = values("#select","text");
  gender = values("#gender","text");
  file = values("#file","text"); 
  alert(lname);
}

