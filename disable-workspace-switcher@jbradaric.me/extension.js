import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';
import { WorkspaceSwitcherPopup } from 'resource:///org/gnome/shell/ui/workspaceSwitcherPopup.js';

export default class extends Extension {
    enable() {
        this._originalWorkspaceSwitcherPopup_display = WorkspaceSwitcherPopup.prototype.display;
        WorkspaceSwitcherPopup.prototype.display = () => {};
    }

    disable() {
        WorkspaceSwitcherPopup.prototype.display = this._originalWorkspaceSwitcherPopup_display;
        this._originalWorkspaceSwitcherPopup_display = null;
    }
}
