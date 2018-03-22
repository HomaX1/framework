import { FWComponent } from '../../own-framework/index';

//Create TabTwoComponent class, that inherits main component
class TabTwoComponent extends FWComponent {
    constructor(config) {
        super(config);
    }
}

//Set the HTML to TabTwoComponent and exports tabTwoComponent
export const tabTwoComponent = new TabTwoComponent({
    selector: 'app-tabs',
    template: `<div class="tab-one">
        <h2 class="tab-one__title">Hello World 2!</h2>
        <p class="tab-one__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
        laborum.</p>
    </div>`
});