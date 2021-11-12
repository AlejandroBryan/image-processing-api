"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var morgan_1 = __importDefault(require("morgan"));
var path_1 = __importDefault(require("path"));
var http_1 = __importDefault(require("http"));
var index_1 = __importDefault(require("./routes/index"));
var ExpressErrorHandler_1 = __importDefault(require("./libraries/ExpressErrorHandler"));
var app = express_1.default();
// middlewares
app.use(cookie_parser_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(morgan_1.default('dev'));
// app.use(express.static(path.join(__dirname + 'assets')));
app.use(express_1.default.static(path_1.default.join(__dirname, 'assets/thumbnails')));
// server setup
var server = http_1.default.createServer(app);
var hostname = '0.0.0.0';
var PORT = 3001;
app.get('/', function (req, res, next) {
    var readMe = path_1.default.resolve(__dirname, "../README.md");
    res.status(200).sendFile(readMe);
});
app.use('/api/images', index_1.default);
app.all('*', function (req, res, next) {
    next(new ExpressErrorHandler_1.default('Page Not Found', 404));
});
app.use(function (err, req, res, next) {
    var _a = err.statusCode, statusCode = _a === void 0 ? 500 : _a;
    if (!err.message)
        err.message = 'Oh No, Something Went Wrong!';
    res.status(statusCode).json(err.message);
});
server.listen(PORT, hostname, function () {
    console.log("\u26A1\uFE0F[server]: Server is running at http://localhost:" + PORT);
});
exports.default = app;
