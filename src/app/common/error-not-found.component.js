import { FWComponent } from '../../own-framework/index';

//Create ErrorNotFound class, that inherits main component
class ErrorNotFound extends FWComponent {
    constructor(config) {
        super(config);
    }
}

//Set the HTML to ErrorNotFound and exports errorNotFound
export const errorNotFound = new ErrorNotFound({
    selector: 'app-error-not-found',
    template: `
        <div class="error">
            <div class="not-find">
                <h1 class="not-find__text red lighten-3">Page not found!</h1>
                <a class="btn not-find__link" href="#">Go to main page</a>
            </div>
        </div>
    `
});