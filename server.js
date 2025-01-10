let http = require("http");

// // 요청과 응답처리 함수를 따로 만들어서 사용해도 상관없음.
// function onReq(req, response){
//     console.log("대충 요청왔다 가정하고")// 대부분의 브라우저가 요청시 index와 favicon을 로딩하기떄문.
//     //response.statusCode = 200;
//     //response.setHeader('Content-Type', 'text/plain');

//     // 위의 두 코드를 하나로 쓰는법
//     response.writeHead(200, {'Content-Type' : "text/plain"});
//     response.write("이번엔 뭐지 ㅋㅋㅋㅋ")
//     response.end();

// }
// http.createServer(onReq).listen(9724);
// // 위의 코드는 서버가 실행은되지만 아무일도 하지않아서
// // 브라우저가 무한 대기상태에 빠짐.
// console.log("우리가게 정상영업 합니다");


// 서버의 모듈화 
// 다른페이지에 굳이 쓸필요 없이 해당 모듈만 불러다가 쓸수 있도록 처리
let url = require("url");

// 요청과 응답처리 함수를 따로 만들어서 사용해도 상관없음.
function start(route, handle){
    function onReq(req, response){
        console.log("대충 요청왔다 가정하고")// 대부분의 브라우저가 요청시 index와 favicon을 로딩하기떄문.
        //response.statusCode = 200;
        //response.setHeader('Content-Type', 'text/plain');
        let postData = "";
    
       
        // url 모듈과 querystring 모듈을 사용하여 req객체의 정보를 얻어낼거
        // 요청과 응답을 잘 처리하는 방법은 기본적으로 주소가 맞는지부터 확인.
        const myURL = new URL(req.url, `http://${req.headers.host}`);
        const pathname = myURL.pathname;
        //route(handle, pathname, response, postData);
        route(handle, pathname, response, req); // req로 파라미터를 바꾼것은
                                                // 사용자 요청에따라 내용을
                                                // 처리하기위함.

        //console.log("라우터인지 라이터인지 : " + route(pathname));
        // console.log("req.url : " +req.url); // localhost:포트번호 이후 값
        // console.log("req.headers.host : " +req.headers.host);// 요청온 주소
        // //let pathname = url.parse(req.url).pathname;
        // console.log("요청왔어요 여기서 " + pathname + "ㅇㅇ");

        // // 비동기 전송방식 구현을 위해 POST로 내용을 전송하고 받으려면
        // // 특정 이벤트마다 콜백을 호출하는 방식으로 구현해야함.
        // // data(POST데이터 도착), end(모든 내용을 다 받았음)

        // req.setEncoding("utf8");

        // req.addListener("data", function(chunk) {
        //     // chunk : 받아온 데이터
        //     postData += chunk;
        //     console.log("전송받은 POST data 청크 :" + chunk);
        //     // called when a new chunk of data was received
        // });
          
        // req.addListener("end", function() {
        //     // called when all chunks of data have been received
            
        // });

        // 위의 두 코드를 하나로 쓰는법
        // response.writeHead(200, {'Content-Type' : "text/plain"});
        // let content = route(handle, pathname);
        // if(content === undefined){
        //     console.error("그런거 없쓰요");
        //     return;
        // }

        // console.log("?????????????????????? " + content);
        // response.write(content);
        // response.end();
    
        // /start
        // /upload
        // /gunchimssak
    }
    http.createServer(onReq).listen(9724);
    // 위의 코드는 서버가 실행은되지만 아무일도 하지않아서
    // 브라우저가 무한 대기상태에 빠짐.
    console.log("우리가게 정상영업 합니다");
}

exports.start = start;