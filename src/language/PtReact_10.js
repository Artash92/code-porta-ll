import React from 'react';

function PtReact_10() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

      <h2>Erros HTTP</h2>

           {/* Respostas informativas (100 – 199) */}
      
           <h3>Respostas informativas (100 – 199)</h3>
       <p>
         <strong>100 Continuar:</strong> O servidor recebeu os cabeçalhos da solicitação e o cliente deve prosseguir para enviar o corpo da solicitação (no caso de uma solicitação para a qual um corpo precisa ser enviado; por exemplo, uma solicitação POST).
       </p>
       <p>
         <strong>101 Trocando Protocolos:</strong> O solicitante pediu ao servidor para trocar de protocolo e o servidor concordou em fazê-lo.
       </p>
       <p>
         <strong>102 Processando:</strong> O servidor recebeu e está processando a solicitação, mas ainda não há resposta disponível.
       </p>
       <p>
         <strong>103 Sugestões Iniciais:</strong> Indica ao cliente que o servidor provavelmente enviará uma resposta final com os campos de cabeçalho incluídos na resposta informativa.
       </p>
      

     {/* Respostas bem-sucedidas (200 – 299) */}
      
       <h3>Respostas bem-sucedidas (200 – 299)</h3>
       <p>
         <strong>200 OK:</strong> A solicitação foi bem-sucedida. As informações retornadas com a resposta dependem do método usado na solicitação.
       </p>
       <p>
         <strong>201 Criado:</strong> A solicitação foi atendida, resultando na criação de um novo recurso.
       </p>
       <p>
         <strong>202 Aceito:</strong> A solicitação foi aceita para processamento, mas o processamento não foi concluído.
       </p>
       <p>
         <strong>203 Informações Não Autorizadas:</strong> O servidor processou com sucesso a solicitação, mas está retornando informações que podem ser de outra fonte.
       </p>
       <p>
         <strong>204 Sem Conteúdo:</strong> O servidor processou com sucesso a solicitação e não está retornando nenhum conteúdo.
       </p>
       <p>
         <strong>205 Redefinir Conteúdo:</strong> O servidor processou com sucesso a solicitação, mas não está retornando nenhum conteúdo. O cliente deve redefinir a visualização do documento.
       </p>
       <p>
         <strong>206 Conteúdo Parcial:</strong> O servidor está entregando apenas parte do recurso devido a um cabeçalho de intervalo enviado pelo cliente.
       </p>
       <p>
         <strong>207 Status Múltiplo:</strong> Uma resposta de Status Múltiplo transmite informações sobre vários recursos em situações em que múltiplos códigos de status podem ser apropriados.
       </p>
      

     {/* Mensagens de redirecionamento (300 – 399) */}
     
       <h3>Mensagens de redirecionamento (300 – 399)</h3>
       <p>
         <strong>300 Múltiplas Escolhas:</strong> O recurso solicitado tem várias escolhas, cada uma com diferentes atributos e respostas.
       </p>
       <p>
         <strong>301 Movido Permanentemente:</strong> O recurso solicitado foi movido permanentemente para um novo URL, e quaisquer referências futuras a este recurso devem usar um dos URLs retornados.
       </p>
       <p>
         <strong>302 Encontrado:</strong> O recurso solicitado reside temporariamente em um URI diferente.
       </p>
       <p>
         <strong>303 Ver Outro:</strong> A resposta à solicitação pode ser encontrada em um URI diferente e deve ser recuperada usando um método GET nesse recurso.
       </p>
       <p>
         <strong>304 Não Modificado:</strong> Indica que o recurso não foi modificado desde a versão especificada pelos cabeçalhos de solicitação If-Modified-Since ou If-None-Match. Nesse caso, não há necessidade de retransmitir o recurso, já que o cliente ainda tem uma cópia previamente baixada.
       </p>
       <p>
         <strong>305 Usar Proxy:</strong> O recurso solicitado deve ser acessado por meio do proxy fornecido pelo campo Location.
       </p>
       <p>
         <strong>307 Redirecionamento Temporário:</strong> O recurso solicitado reside temporariamente em um URI diferente.
       </p>
       <p>
         <strong>308 Redirecionamento Permanente:</strong> O recurso solicitado foi movido permanentemente para outro URI, e o cliente deve atualizar todas as referências para este novo URI.
       </p>
      

     {/* Respostas de erro do cliente (400 – 499) */}
      
       <h3>Respostas de erro do cliente (400 – 499)</h3>
       <p>
         <strong>400 Solicitação Inválida:</strong> O servidor não pode processar a solicitação devido a um erro do cliente (por exemplo, sintaxe malformada, tamanho muito grande, formatação de mensagem de solicitação inválida ou roteamento de solicitação enganoso).
       </p>
       <p>
         <strong>401 Não Autorizado:</strong> Semelhante ao 403 Proibido, mas especificamente para uso quando a autenticação é necessária e falhou ou ainda não foi fornecida.
       </p>
       <p>
         <strong>402 Pagamento Necessário:</strong> Reservado para uso futuro.
       </p>
       <p>
         <strong>403 Proibido:</strong> O cliente não tem permissão para acessar o recurso solicitado.
       </p>
       <p>
         <strong>404 Não Encontrado:</strong> O servidor não pode encontrar o recurso solicitado.
       </p>
       <p>
         <strong>405 Método Não Permitido:</strong> O método recebido na linha de solicitação é conhecido pelo servidor de origem, mas não é suportado pelo recurso de destino.
       </p>
       <p>
         <strong>406 Não Aceitável:</strong> O recurso de destino não possui uma representação atual que seria aceitável para o agente do usuário, de acordo com os campos de cabeçalho de negociação proativa recebidos na solicitação.
       </p>
       <p>
         <strong>407 Autenticação de Proxy Necessária:</strong> O cliente deve primeiro autenticar-se com o proxy.
       </p>
       <p>
         <strong>408 Tempo Limite da Solicitação:</strong> O cliente não produziu uma solicitação dentro do tempo que o servidor estava preparado para aguardar.
       </p>
       <p>
         <strong>409 Conflito:</strong> A solicitação não pôde ser concluída devido a um conflito com o estado atual do recurso de destino.
       </p>
       <p>
         <strong>410 Desaparecido:</strong> Indica que o recurso de destino não está mais disponível no servidor e nenhum endereço de encaminhamento é conhecido.
       </p>
       <p>
         <strong>411 Comprimento Necessário:</strong> O servidor recusa-se a aceitar a solicitação sem um comprimento de conteúdo definido.
       </p>
       <p>
         <strong>412 Pré-condição Falhou:</strong> Uma ou mais condições fornecidas nos campos de cabeçalho da solicitação avaliaram-se como falsas quando testadas no servidor.
       </p>
       <p>
         <strong>413 Carga Útil Muito Grande:</strong> O servidor está recusando-se a processar uma solicitação porque a carga útil da solicitação é maior do que o servidor está disposto ou capaz de processar.
       </p>
       <p>
         <strong>414 URI Muito Longo:</strong> O servidor está recusando-se a atender à solicitação porque o destino da solicitação é mais longo do que o servidor está disposto a interpretar.
       </p>
       <p>
         <strong>415 Tipo de Mídia Não Suportado:</strong> O servidor de origem está recusando-se a atender à solicitação porque o formato da carga útil está em um formato não suportado.
       </p>
       <p>
         <strong>416 Intervalo Não Satisfatório:</strong> O cliente solicitou uma parte do arquivo (serviço de byte), mas o servidor não pode fornecer essa parte.
       </p>
       <p>
         <strong>417 Expectativa Falhou:</strong> O servidor não pode atender aos requisitos do campo de cabeçalho Expect da solicitação.
       </p>
       <p>
         <strong>418 Sou uma Chaleira:</strong> Qualquer tentativa de fazer café com uma chaleira deve resultar no código de erro "418 Sou uma chaleira".
       </p>
       <p>
         <strong>420 Melhore sua Calma:</strong> Retornado pela API de Pesquisa e Tendências do Twitter quando o cliente está sendo limitado em taxas.
       </p>
       <p>
         <strong>421 Solicitação Desviada:</strong> A solicitação foi direcionada a um servidor que não é capaz de produzir uma resposta.
       </p>
       <p>
         <strong>422 Entidade Não Processável:</strong> A solicitação estava bem formulada, mas não pôde ser seguida devido a erros semânticos.
       </p>
       <p>
         <strong>423 Bloqueado:</strong> O recurso que está sendo acessado está bloqueado.
       </p>
       <p>
         <strong>425 Muito Cedo:</strong> Indica que o servidor não está disposto a arriscar o processamento de uma solicitação que possa ser reproduzida.
       </p>
       <p>
         <strong>426 Atualização Necessária:</strong> O servidor recusa-se a executar a solicitação usando o protocolo atual, mas pode estar disposto a fazê-lo depois que o cliente atualizar para um protocolo diferente.
       </p>
       <p>
         <strong>428 Pré-condição Necessária:</strong> O servidor de origem requer que a solicitação seja condicional.
       </p>
       <p>
         <strong>429 Muitas Solicitações:</strong> O usuário enviou muitas solicitações em um determinado período de tempo.
       </p>
      

     {/* Respostas de erro do servidor (500 – 599) */}
      
       <h3>Respostas de erro do servidor (500 – 599)</h3>
       <p>
         <strong>500 Erro Interno do Servidor:</strong> Uma mensagem de erro genérica, fornecida quando uma condição inesperada foi encontrada e nenhuma mensagem mais específica é adequada. Este é um erro muito geral que pode ser causado por uma ampla gama de problemas no lado do servidor.
       </p>
       <p>
         <strong>501 Não Implementado:</strong> O servidor não reconhece o método de solicitação ou não tem a capacidade de atender à solicitação.
       </p>
       <p>
         <strong>502 Gateway Ruim:</strong> O servidor, agindo como um gateway ou proxy, recebeu uma resposta inválida do servidor upstream que acessou ao tentar atender à solicitação.
       </p>
       <p>
         <strong>503 Serviço Indisponível:</strong> O servidor está atualmente incapaz de lidar com a solicitação devido a uma sobrecarga temporária ou manutenção do servidor.
       </p>
       <p>
         <strong>504 Tempo Limite do Gateway:</strong> O servidor, agindo como um gateway ou proxy, não recebeu uma resposta oportuna do servidor upstream especificado pelo URI ou algum outro servidor auxiliar que precisava acessar para concluir a solicitação.
       </p>
       <p>
         <strong>505 Versão do HTTP Não Suportada:</strong> O servidor não suporta, ou se recusa a suportar, a versão principal do HTTP que foi usada na mensagem de solicitação.
       </p>
       <p>
         <strong>506 Variante Também Negocia:</strong> O servidor tem um erro de configuração interna: o recurso da variante escolhida está configurado para participar da negociação de conteúdo transparente, e portanto não é um ponto final adequado no processo de negociação.
       </p>
       <p>
         <strong>507 Armazenamento Insuficiente:</strong> O servidor não é capaz de armazenar a representação necessária para concluir a solicitação.
       </p>
       <p>
         <strong>508 Loop Detectado:</strong> O servidor detectou um loop infinito enquanto processava a solicitação.
       </p>
       <p>
         <strong>510 Não Estendido:</strong> São necessárias mais extensões para a solicitação para que o servidor a atenda.
       </p>
       <p>
         <strong>511 Autenticação de Rede Necessária:</strong> O cliente precisa autenticar-se para obter acesso à rede.
       </p>

       <b><p>* Texto escrito com a ajuda de um tradutor. Se encontrar algum erro, por favor, avise-nos *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
      </div>
    </div>
  )
}

export default PtReact_10;