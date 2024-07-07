#! /usr/bin/env node
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("input", ["require", "exports", "@inquirer/prompts"], function (require, exports, prompts_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function getInput() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = { dir: "", services: [] };
            result.dir = yield (0, prompts_1.input)({
                message: "Choose your directory",
                default: "./"
            });
            result.services = yield (0, prompts_1.checkbox)({
                message: "Choose your services",
                choices: [
                    { name: "client", value: "client", checked: true },
                    { name: "server", value: "server", checked: true },
                    { name: "postgresql", value: "postgresql", disabled: true },
                    { name: "mysql", value: "mysql" },
                    { name: "mongodb", value: "mongodb" },
                    { name: "redis", value: "redis" },
                    { name: "nginx", value: "nginx" }
                ]
            });
            return result;
        });
    }
    exports.default = getInput;
});
define("index", ["require", "exports", "fs", "ejs", "path", "input", "commander"], function (require, exports, fs, ejs, path, input_1, commander_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    fs = __importStar(fs);
    ejs = __importStar(ejs);
    path = __importStar(path);
    input_1 = __importDefault(input_1);
    const program = new commander_1.Command();
    program
        .name("get-docker-compose")
        .description("Generate a docker-compose file")
        .version("1.0.0")
        .action(() => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, input_1.default)();
        yield write(res);
    }))
        .parse();
    path.resolve(__dirname, "./docker-compose.yml");
    function write(_a) {
        return __awaiter(this, arguments, void 0, function* ({ dir, services }) {
            const index = fs.readFileSync(path.resolve(__dirname, "./template/index.yml"), "utf8");
            const template = yield services
                .map((service) => {
                return fs.readFileSync(path.resolve(__dirname, `./template/${service}.yml`), "utf8");
            })
                .join("\n\n");
            fs.writeFileSync(`${dir}/docker-compose.yml`, ejs.render(index, { services: template }), "utf8");
            return 1;
        });
    }
});
