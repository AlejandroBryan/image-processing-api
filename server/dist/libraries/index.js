"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharp_1 = __importDefault(require("sharp"));
var path_1 = __importDefault(require("path"));
var create = function (file, width, height) {
    var pathImage = path_1.default.resolve(__dirname, "../assets/images/" + file);
    var pathOutput = path_1.default.resolve(__dirname, "../assets/thumbnails/" + file);
    sharp_1.default(pathImage).resize(width, height, { fit: 'fill', position: 'center' }).toFile(pathOutput);
};
exports.default = create;
