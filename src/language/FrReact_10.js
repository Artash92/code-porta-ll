import React from 'react';

function FrReact_10() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

      <h2>Erreurs HTTP</h2>

{/* Réponses d'information (100 – 199) */}

  <h3>Réponses d'information (100 – 199)</h3>
  <p>
    <strong>100 Continue :</strong> Le serveur a reçu les en-têtes de la requête et le client doit maintenant envoyer le corps de la requête (dans le cas d'une requête pour laquelle un corps doit être envoyé ; par exemple, une requête POST).
  </p>
  <p>
    <strong>101 Switching Protocols :</strong> Le demandeur a demandé au serveur de changer de protocole et le serveur a accepté de le faire.
  </p>
  <p>
    <strong>102 Traitement :</strong> Le serveur a reçu et traite la requête, mais aucune réponse n'est disponible pour le moment.
  </p>
  <p>
    <strong>103 Informations anticipées :</strong> Indique au client que le serveur est susceptible d'envoyer une réponse finale avec les champs d'en-tête inclus dans la réponse informative.
  </p>


{/* Réponses réussies (200 – 299) */}

  <h3>Réponses réussies (200 – 299)</h3>
  <p>
    <strong>200 OK :</strong> La requête a réussi. Les informations renvoyées avec la réponse dépendent de la méthode utilisée dans la requête.
  </p>
  <p>
    <strong>201 Créé :</strong> La requête a été satisfaite, entraînant la création d'une nouvelle ressource.
  </p>
  <p>
    <strong>202 Accepté :</strong> La requête a été acceptée pour traitement, mais le traitement n'est pas encore terminé.
  </p>
  <p>
    <strong>203 Informations non autoritatives :</strong> Le serveur a traité avec succès la requête, mais renvoie des informations qui peuvent provenir d'une autre source.
  </p>
  <p>
    <strong>204 Pas de contenu :</strong> Le serveur a traité avec succès la requête et ne renvoie aucun contenu.
  </p>
  <p>
    <strong>205 Réinitialiser le contenu :</strong> Le serveur a traité avec succès la requête, mais ne renvoie aucun contenu. Le client doit réinitialiser la vue du document.
  </p>
  <p>
    <strong>206 Contenu partiel :</strong> Le serveur envoie uniquement une partie de la ressource en raison d'un en-tête de plage envoyé par le client.
  </p>
  <p>
    <strong>207 Multi-Statut :</strong> Une réponse multi-états transmet des informations sur plusieurs ressources dans des situations où plusieurs codes d'état pourraient être appropriés.
  </p>


{/* Messages de redirection (300 – 399) */}

  <h3>Messages de redirection (300 – 399)</h3>
  <p>
    <strong>300 Choix multiples :</strong> La ressource demandée a plusieurs choix, chacun avec des attributs et des réponses différents.
  </p>
  <p>
    <strong>301 Déplacé définitivement :</strong> La ressource demandée a été définitivement déplacée vers une nouvelle URL, et toute référence future à cette ressource doit utiliser l'une des URLs renvoyées.
  </p>
  <p>
    <strong>302 Trouvé :</strong> La ressource demandée réside temporairement sous une URI différente.
  </p>
  <p>
    <strong>303 Voir autre :</strong> La réponse à la requête peut être trouvée sous une URI différente et doit être récupérée en utilisant une méthode GET sur cette ressource.
  </p>
  <p>
    <strong>304 Non modifié :</strong> Indique que la ressource n'a pas été modifiée depuis la version spécifiée par les en-têtes de requête If-Modified-Since ou If-None-Match. Dans ce cas, il n'est pas nécessaire de retransmettre la ressource car le client possède toujours une copie précédemment téléchargée.
  </p>
  <p>
    <strong>305 Utiliser un mandataire :</strong> La ressource demandée doit être accédée via le mandataire donné par le champ Location.
  </p>
  <p>
    <strong>307 Redirection temporaire :</strong> La ressource demandée réside temporairement sous une URI différente.
  </p>
  <p>
    <strong>308 Redirection permanente :</strong> La ressource demandée a été définitivement déplacée vers une autre URI, et le client doit mettre à jour toutes les références vers cette nouvelle URI.
  </p>


{/* Réponses d'erreur du client (400 – 499) */}

  <h3>Réponses d'erreur du client (400 – 499)</h3>
  <p>
    <strong>400 Mauvaise requête :</strong> Le serveur ne peut pas traiter la requête en raison d'une erreur du client (par exemple, une syntaxe incorrecte, une taille trop importante, un encadrement de message de requête invalide ou un routage de requête trompeur).
  </p>
  <p>
    <strong>401 Non autorisé :</strong> Similaire au 403 Interdit, mais spécifiquement utilisé lorsque l'authentification est requise et a échoué ou n'a pas encore été fournie.
  </p>
  <p>
    <strong>402 Paiement requis :</strong> Réservé pour une utilisation future.
  </p>
  <p>
    <strong>403 Interdit :</strong> Le client n'a pas la permission d'accéder à la ressource demandée.
  </p>
  <p>
    <strong>404 Non trouvé :</strong> Le serveur ne peut pas trouver la ressource demandée.
  </p>
  <p>
    <strong>405 Méthode non autorisée :</strong> La méthode reçue dans la ligne de demande est connue par le serveur d'origine mais n'est pas prise en charge par la ressource cible.
  </p>
  <p>
    <strong>406 Non acceptable :</strong> La ressource cible n'a pas de représentation actuelle qui serait acceptable pour l'agent utilisateur, selon les champs d'en-tête de négociation proactive reçus dans la requête.
  </p>
  <p>
    <strong>407 Authentification de proxy requise :</strong> Le client doit d'abord s'authentifier auprès du proxy.
  </p>
  <p>
    <strong>408 Délai d'attente de la requête :</strong> Le client n'a pas produit de requête dans le délai que le serveur était prêt à attendre.
  </p>
  <p>
    <strong>409 Conflit :</strong> La requête n'a pas pu être terminée en raison d'un conflit avec l'état actuel de la ressource cible.
  </p>
  <p>
    <strong>410 Disparu :</strong> Indique que la ressource cible n'est plus disponible sur le serveur et qu'aucune adresse de transfert n'est connue.
  </p>
  <p>
    <strong>411 Longueur requise :</strong> Le serveur refuse d'accepter la requête sans une longueur de contenu définie.
  </p>
  <p>
    <strong>412 Précondition échouée :</strong> Une ou plusieurs conditions données dans les champs d'en-tête de requête ont évalué à faux lorsqu'elles ont été testées sur le serveur.
  </p>
  <p>
    <strong>413 Charge utile trop grande :</strong> Le serveur refuse de traiter une requête car la charge utile de la requête est plus grande que ce que le serveur est prêt ou capable de traiter.
  </p>
  <p>
    <strong>414 URI trop long :</strong> Le serveur refuse de traiter la requête car la cible de la requête est plus longue que ce que le serveur est prêt à interpréter.
  </p>
  <p>
    <strong>415 Type de support non pris en charge :</strong> Le serveur d'origine refuse de traiter la requête car le format de la charge utile est dans un format non pris en charge.
  </p>
  <p>
    <strong>416 Plage non satisfaisable :</strong> Le client a demandé une partie du fichier (service de bytes), mais le serveur ne peut pas fournir cette partie.
  </p>
  <p>
    <strong>417 Attente échouée :</strong> Le serveur ne peut pas répondre aux exigences du champ d'en-tête de requête Expect.
  </p>
  <p>
    <strong>418 Je suis une théière :</strong> Toute tentative de préparation de café avec une théière doit entraîner le code d'erreur "418 Je suis une théière".
  </p>
  <p>
    <strong>420 Améliorez votre calme :</strong> Retourné par l'API Twitter Search and Trends lorsque le client est soumis à une limitation de débit.
  </p>
  <p>
    <strong>421 Requête mal dirigée :</strong> La requête était dirigée vers un serveur qui n'est pas en mesure de produire une réponse.
  </p>
  <p>
    <strong>422 Entité non traitable :</strong> La requête était bien formulée mais n'a pas pu être suivie en raison d'erreurs sémantiques.
  </p>
  <p>
    <strong>423 Verrouillé :</strong> La ressource à laquelle on accède est verrouillée.
  </p>
  <p>
    <strong>425 Trop tôt :</strong> Indique que le serveur ne souhaite pas risquer de traiter une requête qui pourrait être rejouée.
  </p>
  <p>
    <strong>426 Mise à niveau requise :</strong> Le serveur refuse d'exécuter la requête en utilisant le protocole actuel mais pourrait être prêt à le faire après la mise à niveau du client vers un autre protocole.
  </p>
  <p>
    <strong>428 Condition préalable requise :</strong> Le serveur d'origine exige que la requête soit conditionnelle.
  </p>
  <p>
    <strong>429 Trop de requêtes :</strong> L'utilisateur a envoyé trop de requêtes dans un laps de temps donné.
  </p>


{/* Réponses d'erreur du serveur (500 – 599) */}

  <h3>Réponses d'erreur du serveur (500 – 599)</h3>
  <p>
    <strong>500 Erreur interne du serveur :</strong> Un message d'erreur générique, donné lorsqu'une condition inattendue a été rencontrée et qu'aucun message plus spécifique n'est approprié. Il s'agit d'une erreur très générale qui peut être causée par une large gamme de problèmes côté serveur.
  </p>
  <p>
    <strong>501 Non mis en œuvre :</strong> Le serveur ne reconnaît pas la méthode de requête ou ne possède pas la capacité de répondre à la requête.
  </p>
  <p>
    <strong>502 Mauvaise passerelle :</strong> Le serveur, tout en agissant en tant que passerelle ou proxy, a reçu une réponse invalide de la part du serveur amont qu'il a accédé en essayant de répondre à la requête.
  </p>
  <p>
    <strong>503 Service non disponible :</strong> Le serveur est actuellement incapable de traiter la requête en raison d'une surcharge temporaire ou de la maintenance du serveur.
  </p>
  <p>
    <strong>504 Délai d'attente de la passerelle :</strong> Le serveur, tout en agissant en tant que passerelle ou proxy, n'a pas reçu de réponse en temps opportun du serveur amont spécifié par l'URI ou d'un autre serveur auxiliaire qu'il devait accéder pour compléter la requête.
  </p>
  <p>
    <strong>505 Version HTTP non prise en charge :</strong> Le serveur ne prend pas en charge, ou refuse de prendre en charge, la version majeure de HTTP qui a été utilisée dans le message de requête.
  </p>
  <p>
    <strong>506 La variante négocie également :</strong> Le serveur a une erreur de configuration interne : la ressource de variante choisie est configurée pour engager une négociation transparente de contenu elle-même, et n'est donc pas un point final approprié dans le processus de négociation.
  </p>
  <p>
    <strong>507 Stockage insuffisant :</strong> Le serveur est incapable de stocker la représentation nécessaire pour compléter la requête.
  </p>
  <p>
    <strong>508 Détection de boucle :</strong> Le serveur a détecté une boucle infinie lors du traitement de la requête.
  </p>
  <p>
    <strong>510 Non étendu :</strong> Des extensions supplémentaires de la requête sont nécessaires pour que le serveur puisse la compléter.
  </p>
  <p>
    <strong>511 Authentification réseau requise :</strong> Le client doit s'authentifier pour obtenir un accès réseau.
  </p>

  <b><p>* Texte écrit avec l'aide d'un traducteur. Si vous trouvez une erreur, veuillez nous en informer *</p></b>
  
  <div className='ads-container'>  
{/*  реклама  */}
</div>
    </div>
  )
}

export default FrReact_10;