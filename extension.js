'use strict'

const WorkspaceSwitcherPopup = imports.ui.workspaceSwitcherPopup.WorkspaceSwitcherPopup;

class Extension {
    constructor() {
        this.originalWorkspaceSwitcherPopup_display = WorkspaceSwitcherPopup.prototype.display;
    }

    enable() {
        WorkspaceSwitcherPopup.prototype.display = () => {};
    }

    disable() {
        WorkspaceSwitcherPopup.prototype.display = this.originalWorkspaceSwitcherPopup_display;
    }
}

function init() {
    return new Extension();
}
