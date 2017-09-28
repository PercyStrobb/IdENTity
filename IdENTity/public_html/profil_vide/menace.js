var men=parseInt(localStorage.getItem("Menace"));
if (men<100){
    document.write('<div style="color: rgb(255,0,0);font-family:Arial;position:fixed;height:200px;top:100px;left:50px;z-index:8"><p><b>MENACE</b></p><p><progress id="avancement" value="'+men+'" max="100"></progress></p></div>');        
}
else{
	sessionStorage.setItem("End","True");
	alert("PERDU, DECONNECTEZ VOUS D'URGENCE");
    document.write('<div style="color: rgb(255,0,0);font-family:Arial;position:fixed;height:200px;top:100px;left:50px;z-index:8"><p><b>Vous avez perdu! Le hacker vous a repéré! Retournez sur le premier profil pour recommencer le jeu.</b></p></div>');        
} 