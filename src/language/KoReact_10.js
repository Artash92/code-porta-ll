import React from 'react';

function KoReact_10() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

      <h2>HTTP 오류</h2>
   
   {/* 정보 응답 (100 – 199) */}
    
     <h3>정보 응답 (100 – 199)</h3>
     <p>
       <strong>100 Continue:</strong> 서버가 요청 헤더를 수신하였으며, 클라이언트는 요청 본문을 보내야 합니다 (예: POST 요청).
     </p>
     <p>
       <strong>101 Switching Protocols:</strong> 요청자가 서버에게 프로토콜을 변경하라고 요청하고, 서버가 그러기로 합의했습니다.
     </p>
     <p>
       <strong>102 Processing:</strong> 서버가 요청을 수신하고 처리 중이지만, 아직 응답이 없습니다.
     </p>
     <p>
       <strong>103 Early Hints:</strong> 서버가 최종 응답을 보내기 전에 정보 응답에 포함된 헤더 필드를 클라이언트에게 알립니다.
     </p>
    

   {/* 성공 응답 (200 – 299) */}
    
     <h3>성공 응답 (200 – 299)</h3>
     <p>
       <strong>200 OK:</strong> 요청이 성공했습니다. 응답과 함께 반환된 정보는 요청에 사용된 방법에 따라 달라집니다.
     </p>
     <p>
       <strong>201 Created:</strong> 요청이 성공적으로 수행되었으며, 새로운 리소스가 생성되었습니다.
     </p>
     <p>
       <strong>202 Accepted:</strong> 요청은 처리를 위해 수락되었지만, 처리가 아직 완료되지 않았습니다.
     </p>
     <p>
       <strong>203 Non-Authoritative Information:</strong> 서버가 요청을 성공적으로 처리했지만, 다른 소스에서 올 수 있는 정보를 반환합니다.
     </p>
     <p>
       <strong>204 No Content:</strong> 서버가 요청을 성공적으로 처리했으며, 어떤 내용도 반환하지 않습니다.
     </p>
     <p>
       <strong>205 Reset Content:</strong> 서버가 요청을 성공적으로 처리했지만, 어떤 내용도 반환하지 않습니다. 클라이언트는 문서 보기를 재설정해야 합니다.
     </p>
     <p>
       <strong>206 Partial Content:</strong> 서버가 클라이언트가 보낸 범위 헤더로 인해 리소스의 일부만 전달하고 있습니다.
     </p>
     <p>
       <strong>207 Multi-Status:</strong> 다중 상태 응답은 여러 상태 코드가 적절한 상황에서 여러 리소스에 대한 정보를 전달합니다.
     </p>
    

   {/* 리디렉션 메시지 (300 – 399) */}
   
     <h3>리디렉션 메시지 (300 – 399)</h3>
     <p>
       <strong>300 Multiple Choices:</strong> 요청한 리소스에는 여러 선택지가 있으며, 각각 다른 속성과 응답이 있습니다.
     </p>
     <p>
       <strong>301 Moved Permanently:</strong> 요청한 리소스가 영구적으로 새 URL로 이동되었으며, 이후에는 이 리소스에 대한 참조는 반환된 URL 중 하나를 사용해야 합니다.
     </p>
     <p>
       <strong>302 Found:</strong> 요청한 리소스가 일시적으로 다른 URI에 있습니다.
     </p>
     <p>
       <strong>303 See Other:</strong> 요청에 대한 응답은 다른 URI 아래에 있으며, 그 리소스를 검색하기 위해 GET 방법을 사용해야 합니다.
     </p>
     <p>
       <strong>304 Not Modified:</strong> 리소스가 요청 헤더의 If-Modified-Since 또는 If-None-Match로 지정된 버전 이후로 수정되지 않았음을 나타냅니다. 이 경우, 클라이언트에게 이전에 다운로드된 사본이 아직 있으므로 리소스를 다시 전송할 필요가 없습니다.
     </p>
     <p>
       <strong>305 Use Proxy:</strong> 요청한 리소스는 Location 필드에서 주어진 프록시를 통해 액세스해야 합니다.
     </p>
     <p>
       <strong>307 Temporary Redirect:</strong> 요청한 리소스가 일시적으로 다른 URI에 있습니다.
     </p>
     <p>
       <strong>308 Permanent Redirect:</strong> 요청한 리소스가 영구적으로 다른 URI로 이동되었으며, 클라이언트는 이 새 URI에 대한 모든 참조를 업데이트해야 합니다.
     </p>
    

   {/* 클라이언트 오류 응답 (400 – 499) */}
    
     <h3>클라이언트 오류 응답 (400 – 499)</h3>
     <p>
       <strong>400 Bad Request:</strong> 서버가 클라이언트 오류로 인해 요청을 처리할 수 없습니다 (예: 잘못된 구문, 크기가 너무 큼, 잘못된 요청 메시지 구성 또는 속임수 있는 요청 라우팅).
     </p>
     <p>
       <strong>401 Unauthorized:</strong> 403 Forbidden과 유사하지만, 인증이 필요하고 실패했거나 아직 제공되지 않았을 때 사용됩니다.
     </p>
     <p>
       <strong>402 Payment Required:</strong> 미래 사용을 위해 예약되어 있습니다.
     </p>
     <p>
       <strong>403 Forbidden:</strong> 클라이언트가 요청한 리소스에 액세스할 권한이 없습니다.
     </p>
     <p>
       <strong>404 Not Found:</strong> 서버가 요청한 리소스를 찾을 수 없습니다.
     </p>
     <p>
       <strong>405 Method Not Allowed:</strong> 요청 라인에서 받은 메서드는 원본 서버에서 알려져 있지만 대상 리소스에서는 지원되지 않습니다.
     </p>
     <p>
       <strong>406 Not Acceptable:</strong> 대상 리소스에는 요청에서 수신한 미래 상호 협상 헤더 필드에 따라 사용할 수 있는 현재 표현이 없습니다.
     </p>
     <p>
       <strong>407 Proxy Authentication Required:</strong> 클라이언트는 먼저 프록시와 인증해야 합니다.
     </p>
     <p>
       <strong>408 Request Timeout:</strong> 클라이언트가 서버가 기다릴 준비가 된 시간 내에 요청을 생성하지 않았습니다.
     </p>
     <p>
       <strong>409 Conflict:</strong> 요청은 대상 리소스의 현재 상태와 충돌로 인해 완료할 수 없습니다.
     </p>
     <p>
       <strong>410 Gone:</strong> 대상 리소스가 서버에서 더 이상 사용할 수 없으며 전달할 주소가 알려지지 않습니다.
     </p>
     <p>
       <strong>411 Length Required:</strong> 서버가 정의된 Content-Length 없이 요청을 수락하지 않습니다.
     </p>
     <p>
       <strong>412 Precondition Failed:</strong> 요청 헤더 필드 중 하나 이상의 조건이 서버에서 테스트시 거짓으로 평가되었습니다.
     </p>
     <p>
       <strong>413 Payload Too Large:</strong> 서버가 요청 페이로드가 서버가 처리하려는 것보다 크거나 처리할 수 없음을 거부하고 있습니다.
     </p>
     <p>
       <strong>414 URI Too Long:</strong> 서버가 요청 대상이 서버가 해석하기를 원하는 것보다 길기 때문에 요청을 처리하지 않습니다.
     </p>
     <p>
       <strong>415 Unsupported Media Type:</strong> 원 서버가 페이로드 형식이 지원되지 않는 형식으로 인해 요청을 처리하지 않습니다.
     </p>
     <p>
       <strong>416 Range Not Satisfiable:</strong> 클라이언트가 파일의 일부를 요청했지만 서버가 해당 부분을 제공할 수 없습니다.
     </p>
     <p>
       <strong>417 Expectation Failed:</strong> 서버가 Expect 요청 헤더 필드의 요구 사항을 충족시킬 수 없습니다.
     </p>
     <p>
       <strong>418 I'm a teapot:</strong> 끓이기를 템포로 할 때 오류 코드 "418 I'm a teapot"이어야 합니다.
     </p>
     <p>
       <strong>420 Enhance Your Calm:</strong> 클라이언트가 요청량 제한을 받고 있는 경우 Twitter 검색 및 트렌드 API에서 반환됩니다.
     </p>
     <p>
       <strong>421 Misdirected Request:</strong> 요청이 응답을 생성할 수 없는 서버로 전송되었습니다.
     </p>
     <p>
       <strong>422 Unprocessable Entity:</strong> 요청은 잘 형성되었지만 의미적 오류로 인해 따를 수 없었습니다.
     </p>
     <p>
       <strong>423 Locked:</strong> 액세스 중인 리소스가 잠겨 있습니다.
     </p>
     <p>
       <strong>425 Too Early:</strong> 서버가 재생될 수 있는 요청을 처리하기를 원하지 않습니다.
     </p>
     <p>
       <strong>426 Upgrade Required:</strong> 서버는 현재 프로토콜을 사용하여 요청을 수행하지 않지만 클라이언트가 다른 프로토콜로 업그레이드 한 후에 수락할 수 있습니다.
     </p>
     <p>
       <strong>428 Precondition Required:</strong> 원 서버가 요청에 조건을 요구합니다.
     </p>
     <p>
       <strong>429 Too Many Requests:</strong> 사용자가 주어진 시간 내에 너무 많은 요청을 보냈습니다.
     </p>
    

   {/* 서버 오류 응답 (500 – 599) */}
    
     <h3>서버 오류 응답 (500 – 599)</h3>
     <p>
       <strong>500 Internal Server Error:</strong> 예상치 못한 상황이 발생했고 더 구체적인 메시지가 적합하지 않은 경우에 제공되는 일반적인 오류 메시지입니다. 이는 서버 측의 다양한 문제로 인해 발생할 수 있는 매우 일반적인 오류입니다.
     </p>
     <p>
       <strong>501 Not Implemented:</strong> 서버가 요청 메서드를 인식하지 않거나 요청을 수행할 수 있는 능력이 없습니다.
     </p>
     <p>
       <strong>502 Bad Gateway:</strong> 게이트웨이 또는 프록시로 작동하는 서버가 요청을 완수하기 위해 액세스한 상위 서버에서 잘못된 응답을 받았습니다.
     </p>
     <p>
       <strong>503 Service Unavailable:</strong> 서버가 현재 일시적으로 요청을 처리할 수 없습니다.
     </p>
     <p>
       <strong>504 Gateway Timeout:</strong> 게이트웨이 또는 프록시로 작동하는 서버가 요청을 완수하기 위해 필요한 URI에서 또는 완료하기 위해 필요한 다른 보조 서버에서 적시에 응답을 받지 못했습니다.
     </p>
     <p>
       <strong>505 HTTP Version Not Supported:</strong> 서버가 요청 메시지에서 사용된 주요 HTTP 버전을 지원하지 않거나 지원하지 않습니다.
     </p>
     <p>
       <strong>506 Variant Also Negotiates:</strong> 서버에 내부 구성 오류가 있습니다: 선택된 변형 리소스는 투명한 콘텐츠 협상을 수행하도록 구성되어 있으므로 협상 프로세스에서 올바른 종점이 아닙니다.
     </p>
     <p>
       <strong>507 Insufficient Storage:</strong> 서버가 요청을 완료하는 데 필요한 표현을 저장할 수 없습니다.
     </p>
     <p>
       <strong>508 Loop Detected:</strong> 서버가 요청을 처리하는 동안 무한 루프를 감지했습니다.
     </p>
     <p>
       <strong>510 Not Extended:</strong> 서버가 요청을 충족하기 위해 추가 확장이 필요합니다.
     </p>
     <p>
       <strong>511 Network Authentication Required:</strong> 네트워크 액세스를 위해 클라이언트가 인증해야 합니다.
     </p>

   <b><p>* 번역기를 사용하여 작성된 텍스트입니다. 오류를 발견하시면 알려주시면 감사하겠습니다 *</p></b>
   
   <div className='ads-container'>  
   {/*  реклама  */}
  </div>
    </div>
  )
}

export default KoReact_10;