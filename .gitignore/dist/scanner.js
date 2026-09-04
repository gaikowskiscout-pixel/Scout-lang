"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scanner = void 0;
class Scanner {
    source;
    tokens = [];
    start = 0;
    current = 0;
    line = 1;
    constructor(source) {
        this.source = source;
    }
    scanToken() {
        const c = this.advance();
        console.log(c);
    }
    scanTokens() {
        while (!this.isAtEnd()) {
            this.start = this.current;
            this.scanToken();
        }
        return this.tokens;
    }
    isAtEnd() {
        return this.current >= this.source.length;
    }
    advance() {
        return this.source[this.current++];
    }
    peek() {
        if (this.isAtEnd())
            return "\0";
        return this.source[this.current];
    }
}
exports.Scanner = Scanner;
