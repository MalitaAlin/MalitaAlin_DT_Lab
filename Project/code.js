var main=$(".main");
var login=$(".login");
main.hide();

function auth(){
    login.hide();
  main.show();
 
}

function logout(){
    login.show();
  main.hide();
 
}