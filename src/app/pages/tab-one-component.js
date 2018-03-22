import { FWComponent } from '../../own-framework/index';

//Create TabOneComponent class, that inherits main component
class TabOneComponent extends FWComponent {
    constructor(config) {
        super(config);
    }
}

//Set the HTML to TabOneComponent and exports tabOneComponent
export const tabOneComponent = new TabOneComponent({
    selector: 'app-home',
    template: `<div class="tab-one">
        <h2 class="tab-one__title">Hello World 1!</h2>
        <p class="tab-one__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
        laborum.</p>
    </div>`
});