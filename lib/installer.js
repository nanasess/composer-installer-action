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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const exec = __importStar(require("@actions/exec"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const COMPOSER_PATH = '/usr/bin/composer';
function installComposer() {
    return __awaiter(this, void 0, void 0, function* () {
        if (process.platform === 'linux') {
            if (fs.existsSync(COMPOSER_PATH)) {
                yield exec.exec(path.join(__dirname, 'update-composer.sh'));
            }
            else {
                yield exec.exec(path.join(__dirname, 'install-composer.sh'));
            }
        }
        else if (process.platform === 'win32') {
            yield exec.exec('powershell -File ' + path.join(__dirname, 'install-composer.ps1'));
            core.addPath('C:\\ProgramData\\ComposerSetup\\bin');
        }
    });
}
exports.installComposer = installComposer;
