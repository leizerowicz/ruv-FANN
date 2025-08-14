import * as vscode from 'vscode';
export declare class StatusBarManager implements vscode.Disposable {
    private statusBarItem;
    constructor();
    updateStatus(status: string, text: string): void;
    dispose(): void;
}
//# sourceMappingURL=statusBarManager.d.ts.map