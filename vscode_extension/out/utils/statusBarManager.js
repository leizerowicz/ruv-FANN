"use strict";
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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusBarManager = void 0;
const vscode = __importStar(require("vscode"));
class StatusBarManager {
    constructor() {
        this.statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
        this.statusBarItem.command = 'ruv-swarm.openDashboard';
        this.statusBarItem.show();
        this.updateStatus('offline', 'RUV-Swarm Offline');
    }
    updateStatus(status, text) {
        this.statusBarItem.text = `$(brain) ${text}`;
        // Update tooltip and color based on status
        switch (status) {
            case 'ready':
                this.statusBarItem.backgroundColor = undefined;
                this.statusBarItem.tooltip = 'RUV-Swarm is ready. Click to open dashboard.';
                break;
            case 'initializing':
                this.statusBarItem.backgroundColor = new vscode.ThemeColor('statusBarItem.warningBackground');
                this.statusBarItem.tooltip = 'RUV-Swarm is initializing...';
                break;
            case 'busy':
            case 'analyzing':
            case 'generating':
            case 'reviewing':
            case 'optimizing':
            case 'scanning':
            case 'explaining':
            case 'refactoring':
            case 'benchmarking':
                this.statusBarItem.backgroundColor = new vscode.ThemeColor('statusBarItem.prominentBackground');
                this.statusBarItem.tooltip = `RUV-Swarm is ${status}...`;
                break;
            case 'error':
                this.statusBarItem.backgroundColor = new vscode.ThemeColor('statusBarItem.errorBackground');
                this.statusBarItem.tooltip = 'RUV-Swarm encountered an error. Click for details.';
                break;
            case 'offline':
            default:
                this.statusBarItem.backgroundColor = undefined;
                this.statusBarItem.tooltip = 'RUV-Swarm is offline. Click to initialize.';
                break;
        }
    }
    dispose() {
        this.statusBarItem.dispose();
    }
}
exports.StatusBarManager = StatusBarManager;
//# sourceMappingURL=statusBarManager.js.map