"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scout = void 0;
class Scout {
    hadError = false;
    run(source) {
        console.log(source);
    }
    reportError(line, message) {
        console.error(`[line ${line}] Error: ${message}`);
        this.hadError = true;
    }
    get hasError() {
        return this.hadError;
    }
}
exports.Scout = Scout;
