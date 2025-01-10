const http = require('http'); // http 모듈 로딩

//createserver : http 서버 객체 생성
// 요청 이벤트가 발생하면 req를 처리하여 res를 반환하는
// request Listener 메서드를 호출하는 구조.
// http.createServer((request, response) =>{
//     request 객체 : 웹페이지에서 요청이 들어오면 그 내용을 받아서 처리할거.
//     response.statusCode = 200;
//     response.setHeader('Content-Type', 'text/plain');
//     response.end("message");

// }).listen(4000);
// console.log("4000번 포트 서버 오픈.");

// 웹 페이지 만들거임
// 파일을 업로드받아 업로드할 이미지파일을 선택해서 폼으로 전송하면
// 해당 이미지를 어딘가로 업로드.
// node 최고의 장점중 하나가 첨부파일 관리가 다른언어 대비 쉬운편.

// 필요한것들
// 웹페이지 제공(http 서버가 있어야함)
// 요청과 요청을 처리할 핸들러들을 연결짓기 위한 무언가가 필요
// (라우터)
// 서버로 도착한 요청, 그리고 라우터를 이용해서 실질적 요청핸들러를 구현할거.

// 서버단이 node일 경우는 비동기로 처리되는 경우가 굉장히 많음.
//  -> 동기 방식을 최대한 지양.

// 첨부파일 업로드
// 사용자가 이미지 파일을 업로드하면 업로드된 이미지를 출력하고자함.
// node는 모듈의 힘을 빌려서 조금 쉽게할수있음

// var formidable = require('formidable'),
//     http = require('http'),
//     util = require('util');

// http.createServer(function(req, res) {
//   if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
//     // parse a file upload
//     var form = new formidable.IncomingForm(); // submit된 form 객체

//     form.parse(req, function(err, fields, files) {
//       res.writeHead(200, {'content-type': 'text/plain'});
//       res.write('received upload:\n\n');
//       res.end(util.inspect({fields: fields, files: files}));
//     });

//     return;
//   }

//   // show a file upload form
//   res.writeHead(200, {'content-type': 'text/html'});
//   res.end(
//     '<form action="/upload" enctype="multipart/form-data" method="post">'+
//     '<input type="text" name="title"><br>'+
//     '<input type="file" name="upload" multiple="multiple"><br>'+
//     '<input type="submit" value="Upload">'+
//     '</form>'
//   );
// }).listen(8888);