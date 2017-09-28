var nom=sessionStorage.getItem("Profil");
var pagevisitee=sessionStorage.getItem("Page");

console.log(nom + ' ' + pagevisitee);

if (nom==="tludik"){
    if (pagevisitee==="Accueil"){
        document.write('<div style="position:fixed;right:20px;bottom:20px"><video width="320" height="260" autoplay controls><source src="videos/didacticiel1.ogg" type="video/ogg"></video></div>');
    }
    if (pagevisitee==="Scolarite"){
        document.write('<div><input type="button" value="!" onclick="indice1(this)" style="position:absolute;top:374px;left:576px;background-color:red;border-color:red"></div>');
    }
}
if (nom==="jbonet"){
    if (pagevisitee==="Accueil"){
        document.write('<div style="position:fixed;right:20px;bottom:20px"><video width="320" height="260" autoplay controls><source src="videos/didacticiel2.ogg" type="video/ogg"></video></div>');
    }
    if (pagevisitee==="Moyennes"){
        document.write('<div><input type="button" value="!" onclick="indice2(this)" style="position:absolute;top:600px;left:950px;background-color:red;border-color:red"></div>');
    }
}
if (nom==="ldelrous"){
    if (pagevisitee==="Accueil"){
        document.write('<div style="position:fixed;right:20px;bottom:20px"><video width="320" height="260" autoplay controls><source src="videos/menace.ogg" type="video/ogg"></video></div>');
    }
    if (pagevisitee==="Envoyes"){
        document.write('<div><input type="button" value="!" onclick="indice3(this)" style="position:absolute;top:335px;left:1070px;background-color:red;border-color:red"></div>');
    }
}

function indice1(el){
    var vid1 = document.createElement("video");
    vid1.width = '320';
    vid1.height = '260';
    vid1.autoplay = true;
    vid1.controls = true;
    var src = document.createElement("source");
    src.src = 'videos/disculpe1.ogg';
    src.type = 'video/ogg';
    vid1.appendChild(src);
    document.getElementById('dis1').appendChild(vid1);
}

function indice2(el){
    var vid2 = document.createElement("video");
    vid2.width = '320';
    vid2.height = '260';
    vid2.autoplay = true;
    vid2.controls = true;
    var src = document.createElement("source");
    src.src = 'videos/disculpe2.ogg';
    src.type = 'video/ogg';
    vid2.appendChild(src);
    document.getElementById('dis2').appendChild(vid2);
}

function indice3(el){
    console.log("C'est un indice, un indice COLOSSAL !");
    alert("Bien joué, hacker. Tu as trouvé le coupable et ramener la paix à l'INU Champollion. Tu peux être fier de toi !");
}