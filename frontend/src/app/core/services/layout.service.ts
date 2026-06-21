import {Injectable, signal} from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class LayoutService {

     _isSidebarOpen = signal(false);

    toggleSidebar() {
        this._isSidebarOpen.update(isOpen => !isOpen);
    }
    closeSidebar() {
        this._isSidebarOpen.set(false);
    }
    get isSidebarOpen() {
        return this._isSidebarOpen;
    }    
}