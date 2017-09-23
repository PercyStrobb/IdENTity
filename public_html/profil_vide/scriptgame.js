//var nom=sessionStorage.getItem("Profil");
//nom=parseInt(nom);
var nom=1;
 var pagevisitee=sessionStorage.getItem("Page");
 
 if (pagevisitee=="Reception"){
 	if(nom==0){
 		document.write('<img src="images/templates/nom_prenom1/scout_template_interne.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:1028px;height:661px;"usemap="#bureautmp"');
 	}
 	if(nom==1){
 		document.write('<img src="images/templates/nom_prenom2/scout_template_interne.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:1028px;height:661px;"usemap="#bureautmp"');
 	}
 	if(nom==2){
 		document.write('<img src="images/templates/nom_prenom3/scout_template_interne.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:1028px;height:661px;"usemap="#bureautmp"');
 	}
 }
 else if(pagevisitee=="Envoyes"){
 	if(nom==0){
 		document.write('<img src="images/templates/nom_prenom1/scout_template_interne_envoyes.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:1028px;height:661px;"usemap="#bureautmp"');
 	}
 	if(nom==1){
 		document.write('<img src="images/templates/nom_prenom2/scout_template_interne_envoyes.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:1028px;height:661px;"usemap="#bureautmp"');
 	}
 	if(nom==2){
 		document.write('<img src="images/templates/nom_prenom3/scout_template_interne_envoyes.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:1028px;height:661px;"usemap="#bureautmp"');
 	}
 }
 else if(pagevisitee=="Corbeille"){
 	if(nom==0){
 		document.write('<img src="images/templates/nom_prenom1/scout_template_interne_corbeille.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:1028px;height:661px;"usemap="#bureautmp"');
 	}
 	if(nom==1){
 		document.write('<img src="images/templates/nom_prenom2/scout_template_interne_corbeille.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:1028px;height:661px;"usemap="#bureautmp"');
 	}
 	if(nom==2){
 		document.write('<img src="images/templates/nom_prenom3/scout_template_interne_corbeille.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:1028px;height:661px;"usemap="#bureautmp"');
 	}
 
 }
 else if(pagevisitee=="Brouillons"){
 	if(nom==0){
 		document.write('<img src="images/templates/nom_prenom1/scout_template_interne_brouillons.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:1028px;height:661px;"usemap="#bureautmp"');
 	}
 	if(nom==1){
 		document.write('<img src="images/templates/nom_prenom2/scout_template_interne_brouillons.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:1028px;height:661px;"usemap="#bureautmp"');
 	}
 	if(nom==2){
 		document.write('<img src="images/templates/nom_prenom3/scout_template_interne_brouillons.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:1028px;height:661px;"usemap="#bureautmp"');
 	}
 }
 else if(pagevisitee=="ListesDiffusion"){
 	if(nom==0){
 		document.write('<img src="images/templates/nom_prenom1/template_applications-listes_de_diff.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:1028px;height:287px;" usemap="#favoristmp"');
 	}
 	if(nom==1){
 		document.write('<img src="images/templates/nom_prenom2/template_applications-listes_de_diff.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:1028px;height:287px;" usemap="#favoristmp"');
 	}
 	if(nom==2){
 		document.write('<img src="images/templates/nom_prenom3/template_applications-listes_de_diff.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:1028px;height:287px;" usemap="#favoristmp"');
 	}
 
 }
 else if(pagevisitee=="MonDossier"){
 	if(nom==0){
 		document.write('<img src="images/templates/nom_prenom1/template_monDoss-coord.png" alt="template" style="position:absolute;display:block;left:0px;top:0px;width:1028px;height:720px;" usemap="#mondossiertmp"');		
 	}
 	if(nom==1){
 		document.write('<img src="images/templates/nom_prenom2/template_monDoss-coord.png" alt="template" style="position:absolute;display:block;left:0px;top:0px;width:1028px;height:720px;" usemap="#mondossiertmp"');
 	}
 	if(nom==2){
 		document.write('<img src="images/templates/nom_prenom3/template_monDoss-coord.png" alt="template" style="position:absolute;display:block;left:0px;top:0px;width:1028px;height:720px;	" usemap="#mondossiertmp"');
 	}
 }
 
 else if(pagevisitee=="Compte"){
 if(nom==0){
 		document.write('<img src="images/templates/nom_prenom1/template_monDoss-compte.png" alt="template" style="position:absolute;display:block;left:0px;top:0px;width:1028px;height:664px;" usemap="#mondossiertmp"');		
 	}
 	if(nom==1){
 		document.write('<img src="images/templates/nom_prenom2/template_monDoss-compte.png" alt="template" style="position:absolute;width:1028px;height:664px;display:block;left:0px;top:0px;" usemap="#mondossiertmp"');
 	}
 	if(nom==2){
 		document.write('<img src="images/templates/nom_prenom3/template_monDoss-compte.png" alt="template" style="position:absolute;width:1028px;height:664px;display:block;left:0px;top:0px;" usemap="#mondossiertmp"');
 	}
 }
 
 else if(pagevisitee=="Examens"){
 if(nom==0){
 		document.write('<img src="images/templates/nom_prenom1/template_monDoss-examens.png" alt="template" style="position:absolute;width:1028px;height:1389px;display:block;left:0px;top:0px;" usemap="#mondossiertmp"');
 	}
 	if(nom==1){
 		document.write('<img src="images/templates/nom_prenom2/template_monDoss-examens.png" alt="template" style="position:absolute;width:1028px;height:1389px;display:block;left:0px;top:0px;" usemap="#mondossiertmp"');
 
 	}
 	if(nom==2){
 		document.write('<img src="images/templates/nom_prenom3/template_monDoss-examens.png" alt="template" style="position:absolute;width:1028px;height:1389px;display:block;left:0px;top:0px;" usemap="#mondossiertmp"');
 
 	}
 }
 
 else if(pagevisitee=="Infos"){
 if(nom==0){
 		document.write('<img src="images/templates/nom_prenom1/template_monDoss-infos.png" alt="template" style="position:absolute;width:1028px;height:823px;display:block;left:0px;top:0px;" usemap="#mondossiertmp"');		
 	}
 	if(nom==1){
 		document.write('<img src="images/templates/nom_prenom2/template_monDoss-infos.png" alt="template" style="position:absolute;width:1028px;height:823px;display:block;left:0px;top:0px;" usemap="#mondossiertmp"');
 	}
 	if(nom==2){
 		document.write('<img src="images/templates/nom_prenom3/template_monDoss-infos.png" alt="template" style="position:absolute;width:1028px;height:823px;display:block;left:0x;top:0px;" usemap="#mondossiertmp"');
 	}
 }
 
 else if(pagevisitee=="Moyennes"){
 	if(nom==0){
 	document.write('<img src="images/templates/nom_prenom1/template_monDoss-moyennes.png" alt="template" style="position:absolute;width:1028px;height:1006px;display:block;left:0px;top:0px;" usemap="#mondossiertmp"');
 	}
 	if(nom==1){
 	document.write('<img src="images/templates/nom_prenom2/template_monDoss-moyennes.png" alt="template" style="position:absolute;width:1028px;height:1006px;display:block;left:0px;top:0px;" usemap="#mondossiertmp"');
 	}
 	if(nom==2){
 	document.write('<img src="images/templates/nom_prenom3/template_monDoss-moyennes.png" alt="template" style="position:absolute;width:1028px;height:1006px;display:block;left:0px;top:0x;" usemap="#mondossiertmp"');
 
 	}
 }
 else if(pagevisitee=="Scolarite"){
 if(nom==0){
 		document.write('<img src="images/templates/nom_prenom1/template_monDoss-scolarite.png" alt="template" style="position:absolute;width:1028px;height:661px;display:block;left:0px;top:0px;" usemap="#mondossiertmp"');		
 	}
 	if(nom==1){
 		document.write('<img src="images/templates/nom_prenom2/template_monDoss-scolarite.png" alt="template" style="position:absolute;width:1028px;height:661px;display:block;left:0px;top:0px;" usemap="#mondossiertmp"');
 	}
 	if(nom==2){
 		document.write('<img src="images/templates/nom_prenom3/template_monDoss-scolarite.png" alt="template" style="position:absolute;width:1028px;height:661px;display:block;left:0px;top:0px;" usemap="#mondossiertmp"');
 	}
 }
 
 else if(pagevisitee=="SeFormer"){
 	if(nom==0){
 		document.write('<img src="images/templates/nom_prenom1/template_se_former-moodle.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:1028px;height:661px;" usemap="#seformertmp"');		
 	}
 	if(nom==1){
 		document.write('<img src="images/templates/nom_prenom2/template_se_former-moodle.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:1028px;height:661px;" usemap="#seformertmp"');
 	}
 	if(nom==2){
 		document.write('<img src="images/templates/nom_prenom3/template_se_former-moodle.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:1028px;height:661px;" usemap="#seformertmp"');
 	}
 }
 else if (pagevisitee=="Documents"){
        if(nom==0){
         document.write('<img src="images/templates/nom_prenom1/template_documents-mesEspaces.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:501px;height:661px;" usemap="#docmespacestmp"');
         document.write('<img src="images/templates/nom_prenom1/template_documents-docsPub.png" alt="template" style="display:block;position:absolute;left:575px;top:215px;width:501px;height:661px;" usemap="#docpubtmp"');       
        }
        if(nom==1){
         document.write('<img src="images/templates/nom_prenom2/template_documents-mesEspaces.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:501px;height:661px;" usemap="#docmespacestmp"');
         document.write('<img src="images/templates/nom_prenom2/template_documents-docsPub.png" alt="template" style="display:block;position:absolute;left:575px;top:215px;width:501px;height:661px;" usemap="#docpubtmp"');       
            
        }
        if(nom==2){
         document.write('<img src="images/templates/nom_prenom3/template_documents-mesEspaces.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:501px;height:661px;" usemap="#docmespacestmp"');
         document.write('<img src="images/templates/nom_prenom3/template_documents-docsPub.png" alt="template" style="display:block;position:absolute;left:575px;top:215px;width:501px;height:661px;" usemap="#docpubtmp"');       
            
        }
 }
