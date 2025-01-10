// 서버에서 정보를 받아오는것은 확인.
// 라우터와 서버를 엮을거임
// 라우터는 어떤 코드를 실행할지 결정하는 영역.
function route(handle, pathname,response, request){
    console.log("경로명 : " + pathname);
    if(typeof handle[pathname] === 'function'){
        return handle[pathname](response, request);
    }else{
        console.log("요청받은 핸들러가 없어요" + pathname);
        response.writeHead(404, {"Content-Type" : "text/plain"});
        response.write("404 not found");
        response.end();
        //return "404";
    }

}
exports.route = route;