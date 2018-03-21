import {FWComponent} from "../../own-framework/index";

class AppHeader extends FWComponent {
    constructor(config) {
        super(config);
    }
}

export const appHeader = new AppHeader({
    selector: 'app-header',
    template: `
        <nav class="cyan darken-4">
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">Framework</a>
                <ul class="right hide-on-med-and-down">
                    <li><a href="#">Главная</a></li>
                    <li><a href="#tabs">Табы</a></li>
                 </ul>
            </div>
        </nav>
    `
});