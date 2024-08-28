import { Component, OnInit, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { AuditService } from 'src/app/audit.service';
import { Audit } from 'src/app/shared/audit';
import { siteWeb } from 'src/app/shared/siteWeb';
import { Vuln } from 'src/app/shared/Vuln';
@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})

export class AuditComponent implements OnInit  {

  constructor(private auditService: AuditService, private route: Router){

  }
  ngOnInit(): void {
      this.auditService.getAudits().subscribe()
  }
  date = Date.now()
  auditor = sessionStorage.getItem("nom")+" "+sessionStorage.getItem("prenom")
  audit: Audit = {
    app_name: '',
    app_url: '',
    date: '',
    auditor: ''
  }
  appweb:siteWeb={
    name: '',
    url: ''
  }
  appname = true
  results=false
  barChartType: ChartType = 'bar';
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLegend=true
  barChartLabels: unknown[] = ['Vulnérabilités critiques', 'Vulnérabilités moyennes', 'Faibles vulnérabilités'];
  barChartData: ChartDataset[] = [
    { data: [], label:'Critiques'},
    { data: [], label:'Moyennes'},
    { data: [], label:'Faibles'}
  ];
  col_Info = {
    hid_pages: '',
    robot_hid:'',
    nmap:'',
    sql_rqst: false,
    api_key: false,
    admin_pass: false,
    hid_data: false,
    source_map: '',
    up_serv:'',
  }
  inj_Sql ={
    encod:'',
    sgbd:'',
    error:'',
    ver_post:'',
    ver_my:'',
    ver_ora:'',
    ver_ms:'',
    pt_v:false,
    apost:false,
    equal_rest:false,
    and_rest: false,
    or_rest: false

  }
  ctrlAcc = {
    admin:'',
    url_admin:'',
    id:'',
    strict_url:'',
    entete:''
  }
  xss = {
    syntax:'',
    front_end:false,
    back_end:false,
    url:'',
    ctr_url:'',
    encode:''
  }
  cors = {
    other_site:'',
    acaoh:'',
    list:'',
    restric:'',
    same_site:'',
    jtn_csrf:'',
    jtn_cookie:'',
    get_valid:false,
    put_valid:false,
    post_valid:false,
    delete_valid:false,
  }
  auth = {
    authen:'',
    encrypt_token_server:false,
    encrypt_token_client:false,
    encrypt_cred_client:false,
    https:'',
    min_char:false,
    maj_min:false,
    char_spe:false,
    max_co:'',
    after_fail:'',
    reinit:'',
    mess_err:'',
    captcha:'',
  }
  file_up = {
    upload:'',
    file_restric:'',
    php:false,
    aspx:false,
    autre:false,
    script:''
  }
  xxe={
    format:'',
    ext_ent:'',
    x_include:''
  }
  ssrf={
    backend:'',
    filters:'',
    back_end_auth:''
  }
  web_cache={
    freq_modif:'',
    cache:'',
    freq_cache:''
  }
  trans={
    seq:'',
  }
  net = {
    ips:false,
    ids:false,
    pare_feu:false,
    anti_virus:false,
    dmz:'',
    freq_serv:'',
    save:''
  }
  columns = [
    {
      columnDef: 'vuln',
      header: 'Vulnérabilités',
      cell: (element: Vuln) => `${element.vuln}`,
    },
    {
      columnDef: 'men',
      header: 'Menaces',
      cell: (element: Vuln) => `${element.men}`,
    },
    {
      columnDef: 'rec',
      header: 'Récommandations',
      cell: (element: Vuln) => `${element.rec}`,
    },
  ];
  dataSource = MED_VULN;
  displayedColumns = this.columns.map(c => c.columnDef);
  columns_high = [
    {
      columnDef: 'vuln',
      header: 'Vulnérabilités',
      cell: (element: Vuln) => `${element.vuln}`,
    },
    {
      columnDef: 'men',
      header: 'Menaces',
      cell: (element: Vuln) => `${element.men}`,
    },
    {
      columnDef: 'rec',
      header: 'Récommandations',
      cell: (element: Vuln) => `${element.rec}`,
    },
  ];
  dataSource_high = HIGH_VULN;
  displayedColumns_high = this.columns.map(c => c.columnDef);
  columns_low = [
    {
      columnDef: 'vuln',
      header: 'Vulnérabilités',
      cell: (element: Vuln) => `${element.vuln}`,
    },
    {
      columnDef: 'men',
      header: 'Menaces',
      cell: (element: Vuln) => `${element.men}`,
    },
    {
      columnDef: 'rec',
      header: 'Récommandations',
      cell: (element: Vuln) => `${element.rec}`,
    },
  ];
  dataSource_low = LOW_VULN;
  displayedColumns_low = this.columns.map(c => c.columnDef);
  audit_low(){
    if(this.web_cache.freq_modif=='month' && this.web_cache.freq_cache!='modif')
    LOW_VULN[0].disp=true
    if(this.inj_Sql.ver_post=='9.6' || this.inj_Sql.ver_post=='10')
    LOW_VULN[1].disp=true
    if(this.inj_Sql.error=='non')
    LOW_VULN[2].disp=true
    if(this.auth.captcha=='non')
    LOW_VULN[3].disp=true
    if(this.xxe.format=='json')
    LOW_VULN[4].disp=true
    if(this.ssrf.back_end_auth=='non')
    LOW_VULN[5].disp=true
    if(this.ctrlAcc.strict_url == 'non')
    LOW_VULN[6].disp=true
  }
  audit_med(){
    if(this.col_Info.robot_hid=='aucun')
    MED_VULN[0].disp=true
    if(this.ctrlAcc.url_admin=='oui')
    MED_VULN[1].disp=true
    if(this.ctrlAcc.entete=='seul')
    MED_VULN[2].disp=true
    if(this.xss.back_end==true)
    MED_VULN[3].disp=true
    if(this.cors.list=='black')
    MED_VULN[4].disp=true
    if(this.cors.get_valid==true || this.cors.post_valid==true || this.cors.put_valid==true || this.cors.delete_valid==true)
    MED_VULN[5].disp=true
    if(this.auth.min_char==true || this.auth.maj_min==true || this.auth.char_spe==true)
    MED_VULN[6].disp=true
    if(this.audit.aspx==true || this.audit.php==true)
    MED_VULN[7].disp=true
  }
  audit_high(){
    if(this.inj_Sql.encod=='aucune')
    HIGH_VULN[0].disp=true
    if(this.inj_Sql.and_rest==true || this.inj_Sql.or_rest==true || this.inj_Sql.apost==true || this.inj_Sql.pt_v==true || this.inj_Sql.equal_rest==true)
    HIGH_VULN[1].disp=true
    if(this.ctrlAcc.id=='oui')
    HIGH_VULN[2].disp=true
    if(this.xss.ctr_url=='non' || this.xss.syntax=='non' )
    HIGH_VULN[3].disp=true
    if(this.cors.restric=='souple')
    HIGH_VULN[4].disp=true
    if(this.auth.encrypt_cred_client==true || this.auth.encrypt_token_client==true || this.auth.encrypt_token_server==true )
    HIGH_VULN[5].disp=true
    if(this.auth.max_co=='non')
    HIGH_VULN[6].disp=true
    if(this.auth.after_fail!='block_lock'&& this.auth.after_fail!='')
    HIGH_VULN[7].disp=true
    if(this.auth.mess_err=='exact_id')
    HIGH_VULN[8].disp=true
    if(this.file_up.file_restric=='non')
    HIGH_VULN[9].disp=true
    if(this.trans.seq=='non')
    HIGH_VULN[11].disp=true
  }

  men_high(){
    this.route.navigate(['/docs'])
  }
  onSubmit(ngForm: NgForm){
    this.date = Date.now()
    this.audit_low()
    this.audit_med()
    this.audit_high()
    this.barChartData=[{ data: [HIGH_VULN.filter(c => !!c.disp).length, MED_VULN.filter(c => !!c.disp).length, LOW_VULN.filter(c => !!c.disp).length],backgroundColor:["#ff0000","#ffff00","#0000ff"],label:'Critiques' }, {data:[], label:'Moyennes', backgroundColor:"#ffff00"}, {data:[], label:'Faibles', backgroundColor:"#0000ff"}]
    this.dataSource_low=LOW_VULN.filter(c => !!c.disp)
    this.dataSource=MED_VULN.filter(c => !!c.disp)
    this.dataSource_high=HIGH_VULN.filter(c => !!c.disp) 
    this.results=true
    this.audit = ngForm.value
    this.audit.app_name = this.appweb.name
    this.audit.app_url = this.appweb.url
    this.audit.auditor = this.auditor
    this.audit.date = this.date.toString()
    this.auditService.addAudit(this.audit).subscribe({next: (response: Audit)=> console.log(response), error: (e)=> console.error(e)
    })
  }
  webApp(appWeb: siteWeb){
    this.appweb=appWeb
    this.appname=false
  }
}

const MED_VULN: Vuln[] =[
  {vuln:"Absence d'un mécanisme permettant de masquer les pages privées, des moteurs de recherche", men:"Accès non autorisé à des pages web privées par un tiers",rec:"Utilisez la balise Disallow dans le fichier robots.txt pour masquer les pages censées être privées", disp:false},
  {vuln:"Divulgation d'URLs privées", men:"Accès non autorisé à une page Web par un tiers", rec:"Parcourez chacune des pages web, et retirez là où elles sont présentes les différentes URLs privées", disp:false},
  {vuln:"Prise en charge d'en-tête à risque", men:"Contournement des restrictions cotés front-end par un tiers non autorisé", rec:"Desactivez la prise en charge des en-tête X-Original-URL et X-Rewrite-URL", disp:false},
  {vuln:"Absence de contrôle syntaxique au niveau du Back-end", men:"Injection directe de scripts malveillants en cas de contournement du Front-end ", rec:"Implémentez des contrôles similaires, voire même plus stricts au niveau du Back-end, que ceux implémentés au niveau du Front-end", disp:false},
  {vuln:"Utilisation d'une liste noire pour restreindre les sites avec lesquelles l'application peut communiquer", men:"Attaque CORS en utilisant un site Web non-présent dans la liste noire", rec:"Utilisez plutôt une liste blanche pour restreindre les applications Web avec lesquelles la vôtre peut communiquer", disp:false},
  {vuln:"Non prise en charge de toutes les méthodes REST pour la validation du jeton CSRF", men:"Attaque CORS via une des méthodes non-prises en charge", rec:"Implémentez la prise en charge de la validation du jeton CSRF pour chacune des méthodes REST", disp:false},
  {vuln:"Utilisation de mots de passe faibles", men:"Facilité pour un attaquant de deviner le mot de passer", rec:"Rendez obligatoire l'utilisation de mot de passe ayant: au moins 8 caractères,une combinaison de majuscules et de minuscules, au moins un caractère spécial", disp:false},
  {vuln:"Non-restriction des fichiers php/aspx", men:"Execution par le serveur de scripts malveillants provenant d'un fichier uploadé par un utilisateur", rec:"Empêcher les utilisateurs d'uploader des fichiers php ou aspx", disp:false},
]
const HIGH_VULN: Vuln[] =[
  {vuln:"Non-chiffrement des paramètres dans une URL", men:"Injection de commandes SQL directement dans l'URL par un attaquant", rec:"Utilisez des algorithmes de chiffrement tels que RSA et DSS pour chiffrer chacune de vos requêtes contenant des paramètres sensibles", disp:false},
  {vuln:"Autorisation de caractères sensibles dans les champs de formulaire", men:"Injection SQL en utilisant un de ces caractères dans une des entrées utilisateur", rec:"Implémentez un mécanisme de validation des entrées empêchant qu'un des caractères sensibles (point virgule, 'AND', 'OR', le tiret ...) soit validé", disp:false},
  {vuln:"Utilisation d'un moyen d'authentification non-sécurisé", men:"Élevation de privilèges pour un utilisateur normal", rec:"Utilisez plutôt une page Web à part pour authentifier les administrateurs. Comme moyen d'authentification optez pour un nom d'utilisateur et un mot de passe", disp:false},
  {vuln:"Absence de vérification syntaxique des entrées utilisateurs", men:"Attaque XSS", rec:"Implémentéz des mécanismes controllant les entrées empêchant les utilisateurs d'envoyer des scripts vers l'application via une des entrées", disp:false},
  {vuln:"Non-encodage des requêtes/réponses", men:"Attaque XSS", rec:"Encodez les données présentes dans chacune des requêtes et des réponses", disp:false},
  {vuln:"Absence de restriction des sites Web avec lesquelles l'application peut communiquer", men:"Attaque CORS", rec:"Utilisez une liste blanche contenant les sites avec lesquels l'application peut uniquement communiquer", disp:false},
  {vuln:"Restriction trop peu exclusive", men:"L'attaquant pourrait utiliser un sous-domaine ou un sur-domaine d'un des domaines autorisés afin de contourner la restriction et communiquer avec votre  application", rec:"Implémentez une restriction stricte qui n'autorise que le domaine présent dans la liste blanche et non un de ses sous-domaines", disp:false},
  {vuln:"Circulation en clair de requêtes/réponses contenant des informations sensibles", men:"Vol/interception d'identifiants par un tiers non autorisé", rec:"Utilisez le protocole HTTPS pour chacune des requêtes contenant des informations sensibles (jeton de session, cookies, identifiants...)", disp:false},
  {vuln:"Non limitation des tentatives de connexion", men:"Attaaque par force brute", rec:"Limitez à 5 les tentatives de connextion à l'application", disp:false},
  {vuln:"Absence d'un dispositif efficace pour bloquer un utilisateur ayant échoué à se connecter un certain nombre de fois", men:"Aprés avoir échoué à se connecter avec un compte tiers, l'attaquant pourrait se connecter avec le sien afin de reinitialiser le compteur de tentatives de connexions infructeuses puis réessayer de se connecter avec ledit compte tiers", rec:"Implémentez à la fois un blocage de l'adresse IP de l'attaquant et un vérouillage du compte-tiers", disp:false},
  {vuln:"Spécification de la nature de l'identifiant incorrect lors de l'authentification", men:"Attaque par force brute", rec:"En cas d'échec d'authentification, affichez juste un message d'erreur du genre « Nom d'utilisateur et/ou mot de passe incorrect(s) »", disp:false},
  {vuln:"Absence d'un mécanisme permettant de bloquer les séquences de traversée de repertoire", men:"Traversée de répertoire par un attaquant", rec:"Implémentez une fonctionnalité qui empêche le serveur d'executer des requêtes lorsqu'un des paramètres de celles-ci contient une séquence de traversée", disp:false},
]
const LOW_VULN: Vuln[] =[
  {vuln:"Mise à jour peu fréquentes du cache Web",men:"Accès à des informations sensibles par un tiers non autorisé", rec:"Mettre à jour le cache Web à chaque fois que vous modifiez l'application Web", disp:false},
  {vuln:"Utilisation d'une version obsolète de SGBD",men:"Découverte par l'attaquant du type et de la version du SGBD utilisé et par conséquent les vulnérabilités y afférentes", rec:"Passer à la version la plus récentes du SGBD", disp:false},
  {vuln:"Non-personnalisation des messages d'erreurs renvoyés par la base de données",men:"Découverte par l'attaquant du type et de la version du SGBD utilisé et par conséquent les vulnérabilités y afférentes", rec:"Personnaliser chacun des messages d'erreur renvoyés par la base de données", disp:false},
  {vuln:"Absence d'un dispositif CAPTCHA lors de l'authentification",men:"Attaque par force brute", rec:"Implementer un dispositif CAPTCHA à chaque authentification", disp:false},
  {vuln:"Utilisation d'un format de données pas assez sécurisé",men:"Injection d'entités externes malveillantes par l'attaquant", rec:"Passer au format JSON", disp:false},
  {vuln:"Absence d'un mécanisme d'authentification sur les services Back-end",men:"Attaque SSRF", rec:"Implémenter un mécanisme d'authentification de sorte qu'aucune requête faite par l'application vers elle-même ou vers une autre application Web ne se fasse sans authentification", disp:false},
  {vuln:"Absence de contrôles au niveau du front-end pour empêcher/restreindre l'accès à des URLs sensibles", men:"Élevation de privilège", rec: "Utilisez des entêtes tels que X-Rewrite et X-Original URL qui empêcheront l'utilisateur de directement acceder à une page sensible même lorsqu'il dispose de son URL", disp:false}
]

