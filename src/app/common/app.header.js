import { FWComponent } from '../../own-framework/index';

//Create AppHeader class, that inherits main component
class AppHeader extends FWComponent {
    constructor(config) {
        super(config);
    }
}

//Set the HTML to AppHeader and exports appHeader
export const appHeader = new AppHeader({
    selector: 'app-header',
    template: `
        <div class="logo">
            <h1 class="logo-title"><a href="#" class="brand-logo center">Framework</a></h1>
        </div>
        <nav class="cyan darken-4">
            <div class="nav-wrapper">
                <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li><a href="#tab1">Tab 1</a></li>
                    <li><a href="#tab2">Tab 2</a></li>
                 </ul>
            </div>
        </nav>
    `
});