"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_1 = require("fs");
var express_1 = require("express");
var index_1 = __importDefault(require("../libraries/index"));
var upload_1 = __importDefault(require("../libraries/upload"));
var router = express_1.Router();
router.get('/', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var width, height, file, result, exitingFile, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 7, , 8]);
                return [4 /*yield*/, Number(req.query.width)];
            case 1:
                width = (_a.sent()) || null;
                return [4 /*yield*/, Number(req.query.height)];
            case 2:
                height = (_a.sent()) || null;
                return [4 /*yield*/, req.query.file];
            case 3:
                file = (_a.sent());
                return [4 /*yield*/, path_1.default.resolve(__dirname, "../assets/thumbnails/" + file)];
            case 4:
                result = _a.sent();
                return [4 /*yield*/, path_1.default.resolve(__dirname, "../assets/images/" + file)];
            case 5:
                exitingFile = _a.sent();
                if (!fs_1.existsSync(exitingFile)) {
                    return [2 /*return*/, next(new Error('The required file does not exist and as result a new thumbnail could not be created'))];
                }
                // invoke your your function and pass the thr arguments
                index_1.default(file, width, height);
                return [4 /*yield*/, res.status(200).sendFile(result)];
            case 6:
                _a.sent();
                return [3 /*break*/, 8];
            case 7:
                err_1 = _a.sent();
                next(new Error('An error occurred while getting the file'));
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); });
router.post('/upload', upload_1.default.single('image'), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            // console.log(req.file, req.body);
            res.status(200).json({ message: req.body });
        }
        catch (err) {
            console.log(err);
        }
        return [2 /*return*/];
    });
}); });
/* router.get('/pictures', async (req: Request, res: Response) =>{
  const exitingFile = await path.resolve(__dirname, `../assets/images`);
  const result = await readdirSync(exitingFile, 'utf8');
  res.status(200).json(result);
  console.log(result);
}); */
exports.default = router;
