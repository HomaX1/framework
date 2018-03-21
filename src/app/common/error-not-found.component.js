import {FWComponent} from "../../own-framework/index";

class ErrorNotFound extends FWComponent {
    constructor(config) {
        super(config);
    }
}

export const errorNotFound = new ErrorNotFound({
    selector: 'app-error-not-found',
    template: `
        <div class="error">
            <div class="not-find">
                <h1 class="not-find__text red lighten-3">Страница не найдена!</h1>
                <a class="btn not-find__link" href="#">Перейти на главную страницу</a>
            </div>
        </div>
    `
});