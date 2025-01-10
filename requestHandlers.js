//requestHandlers.js

let query = require("querystring");
let fs = require("fs");
let formidable = require("formidable");
function start(response, postData){
    console.log("start 함수 실행됨");
    // requestHandler는 컨트롤러의 역할을 해줌.
    // 그리하여 view와 controller 로직을 한곳에 같이 구현하는것은 미권장.
    //  -> why? 소프트웨어 개발은 현대에는 복잡성을 최소화하는것이 목적
    //  -> 아래와 같이 작성하게되면 유지보수시 너무 힘들어짐
    let body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" '+
    'content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="file" name="upload">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type" : "text/html"});
    response.write(body);
    response.end();

}   
function upload(response, request){
    // console.log("업로드 함수 실행됨");
    
    // console.log(query.parse(postData).text);
    // response.writeHead(200, {"Content-Type" : "text/plain"});
    // response.write("ㅇㅇ" + query.parse(postData).text);


    // response.end();

    // 업로드 확인용
    let form = new formidable.IncomingForm();
    console.log("전송확인")
    form.parse(request, function(error, fields, files){
        console.log("전송완료");
        console.log(files);
        // 파일의 이름은 지금처럼 하드코딩하는게 아님(리터럴값으로 쓰면 큰일남)
        // 파일의 이름은 uuid같은 개념을 활용하여
        // 원래 이름과 스토리지 저장용 이름을 따로 구분해두는것이 좋음
        fs.renameSync(files.upload.path, "uploadfiles/test.png");
        response.writeHead(200, {"Content-Type" : "text/html"});
        response.write("received image:<br/>");
        response.write("<img src='/show' />");
        response.end();
    });

}

function show(response, postData){
    console.log("첨부파일 볼거에요");
    fs.readFile("images.png", "binary", function(error, file){
        if(error){
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(error + "\n");
            response.end();            
        }else{
            response.writeHead(200, {"Content-Type": "image/png"});
            response.write(file, "binary");
            response.end();
        }
    });
}


exports.start = start;
exports.upload = upload;
exports.show = show;