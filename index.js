// server가 router를 사용하는것을 인지시켜야함.
//  -> 둘을 느슨하게 결합.

// 모듈들은 응집도가 높고 결합도가 낮을 수록 좋은 모듈이라 할수있음
let server = require("./server");
let router = require("./router"); // router를 server로 의존성 주입 처리.
let requestHandlers = require("./requestHandlers");

// 여기서 url을 만들어서 그쪽에 뿌릴거.
let handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;


server.start(router.route, handle);