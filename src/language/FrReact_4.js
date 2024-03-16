import React from 'react'

function FrReact_4() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
      
      <h1>Récupérer des données avec React</h1>

<p>1. Récupérer des données en utilisant l'API fetch :</p>

<code> 
  <p><span className='blueviole'>fetch</span>(<span className='blue1'>'https://api.example.com/data'</span>)</p>
  <p>.<span className='blue'>then</span>(response {'=>'} response.<span className='blue'>json</span>()) </p>
  <p>.<span className='blue'>then</span>(data {'=>'} console.<span className='blue'>log</span>(data))</p>
  <p>.<span className='blue'>catch</span>(error {'=>'} console.<span className='blue'>error</span>(error)) </p>
</code>

<p>Dans cet exemple, nous envoyons une requête à un serveur en utilisant l'API <b>fetch</b>. L'objet <b>response</b> est converti au format JSON en utilisant la méthode <b>json()</b>, et les données résultantes sont affichées dans la console. Si une erreur se produit, elle est capturée et affichée dans la console.</p>

<p>2. Afficher les données récupérées dans l'état du composant :</p>

<code>
  <p><span className='red'>import</span> {'React, { useState, useEffect } '} <span className='red'>from</span> <span className='blue1'>'react'</span>;   </p>
  <p><span className='red'>function</span> <span className='blueviole'>MonComposant</span>() {'{'}</p>
  <p><span className='red'>const</span> [data, setData] = <span className='blueviole'>useState</span>([]);</p>
  <p><span className='blueviole'>useEffect</span>{'(() => {'}</p>
  <p><span className='blueviole'>fetch</span>(<span className='blue1'>'https://api.example.com/data'</span>)</p>
  <p>.<span className='blue'>then</span>(response {'=>'} response.<span className='blue'>json</span>())</p>
  <p>.<span className='blue'>then</span>(data {'=>'} <span className='blueviole'>setData</span>(data))</p>
  <p>.<span className='blue'>catch</span>(error {'=>'} console.<span className='blue'>error</span>(error)); </p>
  <p>{'}, []);'}</p>
  <p><span className='red'>return</span> {'('}</p>
  <p>{'<'}<span className='green'>div</span>{'>'}</p>
  <p>{'{'}data.<span className='blue'>map</span>{'(item => ('}</p>
  <p>{'<'}<span className='green'>p</span> key={'{item.'}<span className='blue'>id</span>{'}>'}{'{item.'}<span className='blue'>name</span>{'}</'}<span className='green'>p</span>{'>'}</p>
  <p>{'))} '}</p>
  <p>{'</'}<span className='green'>div</span>{'>'}</p>
  <p>&nbsp;{');'}</p>
  <p>{'}'}</p>
</code>

<p>Dans cet exemple, nous utilisons le crochet <b>useState</b> pour définir une variable d'état appelée <b>data</b>. Nous utilisons également le crochet <b>useEffect</b> pour récupérer des données depuis le serveur lorsque le composant est monté, et mettre à jour la variable d'état <b>data</b> avec les données récupérées. Enfin, nous utilisons la méthode <b>map</b> pour parcourir le tableau de données et afficher chaque élément comme un élément de paragraphe.</p>

<h1>Axios</h1>

<p>Fetch et Axios sont tous deux des bibliothèques JavaScript utilisées pour effectuer des requêtes HTTP depuis le navigateur ou l'environnement Node.js. Cependant, il existe quelques différences entre les deux.</p>

<p>Fetch est une API native du navigateur qui utilise des promesses pour gérer les requêtes et les réponses. Elle a une syntaxe plus simple et est plus facile à utiliser pour les requêtes simples, mais elle ne dispose pas de certaines fonctionnalités avancées comme l'annulation de requête, les événements de progression et les nouvelles tentatives automatiques de requête.</p>

<p>Axios est une bibliothèque tierce populaire qui fournit une API plus riche en fonctionnalités et puissante pour effectuer des requêtes HTTP. Elle prend en charge l'annulation de requête, les événements de progression et les nouvelles tentatives automatiques dès le départ, et dispose également d'une prise en charge intégrée pour le traitement des données de réponse telles que JSON, XML et FormData.</p>

<p>En ce qui concerne les raisons pour lesquelles il est préférable d'utiliser Axios plutôt que Fetch, cela dépend vraiment des besoins spécifiques de votre projet. Si vous construisez une application web simple qui ne nécessite que des requêtes de base, alors Fetch pourrait être suffisant. Cependant, si vous avez besoin de fonctionnalités plus avancées et d'une API plus puissante pour gérer les requêtes et les réponses, alors Axios est un meilleur choix.</p>


<p>Quelques avantages d'utiliser Axios par rapport à Fetch incluent :</p>

<p>1. Meilleure gestion des erreurs : Axios dispose d'un système plus robuste pour gérer les erreurs et fournit des messages d'erreur plus utiles par rapport à Fetch.</p>

<p>2. Intercepteurs : Axios fournit des intercepteurs qui vous permettent de modifier les requêtes ou les réponses avant qu'elles ne soient envoyées ou reçues.</p>

<p>3. Transformation automatique des données de requête et de réponse : Axios peut automatiquement transformer les données de requête et de réponse dans différents formats, comme JSON, ce qui peut être très utile lors de travaux avec des API.</p>

<p>4. Annulation facile des requêtes : Axios fournit un moyen simple d'annuler les requêtes, ce qui peut être utile lors de la gestion de réseaux lents ou peu fiables.</p>

<p>En résumé, Fetch et Axios sont des outils utiles pour effectuer des requêtes HTTP en JavaScript, mais Axios fournit des fonctionnalités plus avancées et une API plus puissante qui peut être très utile pour la construction d'applications plus complexes.</p>

<p>Axios est une bibliothèque permettant d'effectuer des requêtes HTTP depuis le navigateur ou Node.js. Elle facilite l'envoi de requêtes en utilisant des promesses et la gestion des réponses.</p>

<p>Pour utiliser Axios dans React.js, vous devez d'abord l'installer en utilisant la commande :</p>

<b>npm install axios</b>

<p>Ensuite, vous pouvez utiliser Axios dans vos composants React. Par exemple, le code suivant envoie une requête GET à un serveur distant et affiche la réponse sur la page :</p>

<code>
  <p><span className='red'>import</span> {' React, { useState, useEffect }'} <span className='red'>from</span> <span className='blue1'>"react"</span>;</p>  
  <p><span className='red'>import</span> axios <span className='red'>from</span> <span className='blue1'>"axios"</span>;</p>
  <p><span className='red'>function</span> <span className='blueviole'>App</span>() {'{'}</p>  
  <p><span className='red'>const</span> {'[data, setData]'} = <span className='blueviole'>useState</span>("");</p>
  <p><span className='blueviole'>useEffect</span>{'(() => { '}</p>
  <p>axios.<span className='blue'>get</span>(<span className='blue1'>"https://jsonplaceholder.typicode.com/todos/1"</span>).<span className='blue'>then</span>{'((response) => {'}</p>
  <p><span className='blueviole'>setData</span>(response.<span className='blue'>data</span>);</p>
  <p>{'});'}</p>
  <p>{' }, []);'}</p>
  <p> return {'<'}<span className='green'>div</span>{'>'}{'{'}data.<span className='blue'>title</span>{'}'}{'</'}<span className='green'>div</span>{'>;'}</p>
  <p>{'}'}</p>
  <p><span className='red'>export default</span> App;</p>
</code>

<p>Dans cet exemple, le crochet <b>useEffect</b> est utilisé pour envoyer une requête GET au serveur et mettre à jour la variable d'état <b>data</b> avec la réponse. La variable data est ensuite affichée sur la page en utilisant JSX.</p>

<p>Axios prend également en charge d'autres méthodes HTTP, telles que POST, PUT et DELETE, qui peuvent être utilisées pour envoyer des données au serveur et modifier des ressources. L'objet axios fournit également de nombreuses options de configuration, telles que la définition des en-têtes, des délais d'attente et des intercepteurs de requête, qui vous permettent de personnaliser le comportement des requêtes.</p>

<p>En fin de compte, Axios est une bibliothèque puissante et flexible pour travailler avec des requêtes HTTP dans React.js, et elle peut simplifier de nombreuses tâches courantes, telles que la récupération de données à partir d'une API distante.</p>

<p>Le protocole HTTP prend en charge plusieurs méthodes de requête permettant d'effectuer diverses opérations avec des données. Voici une brève description des quatre principales méthodes de requête ainsi que des exemples de leur utilisation dans React :</p>

<p>1. <b>GET</b> : une méthode de requête utilisée pour récupérer des données depuis le serveur. En React, vous pouvez utiliser la méthode <b>axios.get</b></p>  

<code>
  <p>axios.<span className='blue'>get</span>(<span className='blue1'>'/api/data'</span>)</p>
  <p>.<span className='blue'>then</span>{'(response => {'}</p>
  <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>); </p>
  <p>{'})'}</p>
  <p>.<span className='blue'>catch</span>{'(error => {' }</p>
  <p>{'console'}.<span className='blue'>log</span>(error);</p>
  <p>{'});'}</p>  
</code>

<p>Dans cet exemple, nous récupérons des données depuis l'endpoint <b>/api/data</b>. Les données de réponse sont affichées dans la console si la requête est réussie, et toutes les erreurs sont capturées et affichées dans la console.</p>

<p>2. <b>PUT</b> : une méthode de requête utilisée pour mettre à jour des données existantes sur le serveur. En React, vous pouvez utiliser la méthode <b>axios.put</b></p>  

<code>
  <p>axios.<span className='blue'>put</span>{'('}<span className='blue1'>'/api/data/1'</span>, {'{'} <span className='blue'>newData</span>: <span className='blue1'>'updatedData'</span> {"})"}</p>
  <p>.<span className='blue'>then</span>{'('}response { '=> {' }</p>
  <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>  
  <p>{'})'}</p>
  <p>.<span className='blue'>catch</span>{'(error => {'}</p>
  <p>{'console'}.<span className='blue'>log</span>(error);</p>
  <p>{'});'}</p>
</code>

<p>Dans cet exemple, nous mettons à jour des données à l'endpoint <b>/api/data/1</b>. Nous envoyons une charge utile avec les nouvelles données en tant que deuxième argument à <b>axios.put</b>. Les données de réponse sont affichées dans la console si la requête est réussie, et toutes les erreurs sont capturées et affichées dans la console.</p>

<p>3. <b>POST</b> : une méthode de requête utilisée pour créer de nouvelles données sur le serveur. En React, vous pouvez utiliser la méthode <b>axios.post</b></p>  

<code>
  <p>axios.<span className='blue'>post</span>{'('}<span className='blue1'>'/api/data'</span>, {'{'} <span className='blue'>newData</span>: <span className='blue1'>'newData'</span> {"})"}</p>
  <p>.<span className='blue'>then</span>{'(response => {'}</p>
  <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>
  <p>{'})'}</p>  
  <p>.<span className='blue'>catch</span>{'(error => {'}</p>
  <p>{'console'}.<span className='blue'>log</span>(error);</p> 
  <p>{'});'}</p> 
</code>

<p>Dans cet exemple, nous créons de nouvelles données à l'endpoint <b>/api/data</b>. Nous envoyons une charge utile avec les nouvelles données en tant que deuxième argument à <b>axios.post</b>. Les données de réponse sont affichées dans la console si la requête est réussie, et toutes les erreurs sont capturées et affichées dans la console.</p>

<p>4. <b>DELETE</b> : une méthode de requête utilisée pour supprimer des données existantes sur le serveur. En React, vous pouvez utiliser la méthode <b>axios.delete</b></p>  

<code>
  <p> axios.<span className='blue'>delete</span>(<span className='blue1'>'/api/data/1'</span>)  </p>
  <p>.<span className='blue'>then</span>{'(response => { '}</p>
  <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>
  <p>{'}) '}</p>
  <p>.<span className='blue'>catch</span>{'(error => { '}</p>
  <p>{'console'}.<span className='blue'>log</span>(error);</p>
  <p>{'});'}</p>
</code>

<p>Dans cet exemple, nous supprimons des données à l'endpoint <b>/api/data/1</b>. Les données de réponse sont affichées dans la console si la requête est réussie, et toutes les erreurs sont capturées et affichées dans la console.</p>

<p>Pour plus d'informations sur Axios, veuillez visiter leur site officiel : <a href=" https://axios-http.com" target='_blank' > 👉🏼  https://axios-http.com</a></p>
   
<b><p>* Texte écrit avec l'aide d'un traducteur. Si vous trouvez une erreur, veuillez nous en informer *</p></b>
  
    <div className='ads-container'>  
  {/*  реклама  */}
  </div> 
</div>
  )
}

export default FrReact_4;