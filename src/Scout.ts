export class Scout {
    private hadError = false;
    run(source: string): void {
        console.log(source)
    }
    
    reportError(line: number, message: string): void {
        console.error(`[line ${line}] Error: ${message}`);
        this.hadError = true
    }

    get hasError(): boolean {
        return this.hadError;
    }
}