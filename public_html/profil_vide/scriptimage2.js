var nom=sessionStorage.getItem("Profil");
nom=parseInt(nom);
//var nom=1;
var pagevisitee=sessionStorage.getItem("Page");
if (pagevisitee=="Documents"){
        if(nom==0){
        document.write('<img src="images/templates/nom_prenom1/template_documents-docsPub.png" alt="template" style="display:block;position:absolute;left:575px;top:215px;width:501px;height:661px;" usemap="#docpubtmp">');       
        document.write('<img src="images/templates/nom_prenom1/template_documents-mesEspaces.png" alt="template2" style="display:block;position:absolute;left:35px;top:215px;width:501px;height:661px;" usemap="#docmespacestmp">');       
        }
        if(nom==1){
        document.write('<img src="images/templates/nom_prenom2/template_documents-mesEspaces.png" alt="template2" style="display:block;position:absolute;left:35px;top:215px;width:501px;height:661px;" usemap="#docmespacestmp">'); 
        document.write('<img src="images/templates/nom_prenom2/template_documents-docsPub.png" alt="templatedocpub" style="display:block;position:absolute;left:575px;top:215px;width:501px;height:661px;">');       
  
        }
        if(nom==2){
        document.write('<img src="images/templates/nom_prenom3/template_documents-mesEspaces.png" alt="template2" style="display:block;position:absolute;left:35px;top:215px;width:501px;height:661px;" usemap="#docmespacestmp">');   
        document.write('<img src="images/templates/nom_prenom3/template_documents-docsPub.png" alt="template" style="display:block;position:absolute;left:575px;top:215px;width:501px;height:661px;" usemap="#docpubtmp">');                   
                
        }
 }
 else if(pagevisitee=="Accueil"){
    if(nom==0){
        document.write('<img src="images/templates/nom_prenom1/template_connecté-mesImpr.png" alt="mesimpr" style="display:block;position:absolute;width:609px;height:498px;left:490px;top:200px;">');
        document.write('<img src="images/templates/nom_prenom1/template_connecté-mesDocs.png" alt="mesdocs" style="display:block;position:absolute;width:408px;height:664px;top:200px;left:50px;" >');
    }
    if(nom==1){
	document.write('<img src="images/templates/nom_prenom2/template_connecté-mesImpr.png" alt="mesimpr2" style="display:block;position:absolute;width:609px;height:498px;left:490px;top:200px;">');
        document.write('<img src="images/templates/nom_prenom2/template_connecté-mesDocs.png" alt="mesdocs2" style="display:block;position:absolute;width:408px;height:664px;top:200px;left:50px;">');    
    
    }
    if(nom==2){
        document.write('<img src="images/templates/nom_prenom3/template_connecté-mesImpr.png" alt="mesimpr3" style="display:block;position:absolute;width:609px;height:498px;left:490px;top:200px;">');
        document.write('<img src="images/templates/nom_prenom3/template_connecté-mesDocs.png" alt="mesdocs3" style="display:block;position:absolute;width:408px;height:664px;top:200px;left:50px;">');
    }
}