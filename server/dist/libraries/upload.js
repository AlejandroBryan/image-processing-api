"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
var path_1 = require("path");
var diskStorage = multer_1.default.diskStorage({
    destination: function (req, file, done) {
        if (!file) {
            done(new Error('Upload file error'), null);
        }
        else {
            done(null, path_1.resolve(__dirname, '../assets/images/'));
        }
    },
    filename: function (req, file, done) {
        done(null, file.originalname);
    }
});
var fileValidator = function (req, file, done) {
    var extFile = file.originalname.replace('.', '');
    var extPattern = /(jpg|jpeg|png|gif|svg|doc)/gi.test(extFile);
    if (!extPattern) {
        done(new TypeError('File format is not valid'), null);
    }
    else {
        done(null, true);
    }
};
var fileUpload = multer_1.default({ storage: diskStorage, limits: { fileSize: 1000000 }, fileFilter: fileValidator });
exports.default = fileUpload;
