import { Component } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent  {

  inj_sql = "Comme son nom l’indique, l’injection SQL est une attaque qui consiste à insérer ou injecter tout ou une partie de requête SQL via une entrée de données (zone de texte, mot de passe, …) ou via une URL transmise du navigateur vers l’application Web. Une injection SQL réussie peut permettre à l’attaquant de lire des données sensibles de la base de données, de les modifier, les supprimer ou encore d’exécuter les opérations d’administration sur la base de données (désactiver la base de données) et bien d’autres actions néfastes pour l’application Web. En général, la manière avec laquelle les applications Web construisent des requêtes SQL implique une combinaison de syntaxe SQL écrite par les développeurs, avec des données fournies par l’utilisateur. La principale vulnérabilité exploitée pour effectuer cette attaque reste l’utilisation de la concaténation des chaînes de caractères dans les requêtes. "
 
  cross = "Les attaques XSS sont un type d’injection dans lequel des scripts malveillants sont injectés dans des sites Web bénins et fiables. Les attaques XSS se produisent lorsqu’un attaquant utilise une application Web pour envoyer un code malveillant, généralement sous la forme d’un script coté navigateur, à un autre utilisateur. Un attaquant peut utiliser le XSS pour envoyer un script malveillant à un autre utilisateur qui ne se soucie de rien. Le navigateur de la victime n’a aucun moyen de savoir que le script est malveillant car il provient d’une source de confiance et va donc l’exécuter. Un script malveillant peut par exemple accéder à des cookies, des jetons de session ou d’autres données sensibles."

  dir_trans = "La traversée de répertoire (également connue sous le nom de traversée de chemin de fichier) est une attaque sur les applications Web qui permet à un attaquant de lire des fichiers arbitraires sur le serveur qui exécute l'application. Cela peut inclure le code et les données d'application, les informations d'identification pour les systèmes principaux et les fichiers sensibles du système d'exploitation. Dans certains cas, un attaquant peut être en mesure d'écrire dans des fichiers arbitraires sur le serveur, leur permettant de modifier les données ou le comportement de l'application, et finalement de prendre le contrôle total du serveur."
}
