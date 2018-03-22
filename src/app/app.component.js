//This file is a root component that response for the template of our application
import { FWComponent } from '../own-framework/index';

//Create AppComponent class, that inherits main component
class AppComponent extends FWComponent {
    constructor(config) {
        super(config);
    }
}

//Set the HTML to AppComponent and exports appComponent
export const appComponent = new AppComponent({
    selector: 'app-root',
    template: `
        <app-header></app-header>
        
        <router-outlet></router-outlet>
    `
});