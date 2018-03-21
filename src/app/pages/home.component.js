import {FWComponent} from "../../own-framework/index";

class HomeComponent extends FWComponent {
    constructor(config) {
        super(config);
    }
}

export const homeComponent = new HomeComponent({
    selector: 'app-home',
    template: `
        <div class="row">
        <div class="col s6 offset-s3 card">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Главная страница</span>
              <p>Пока тут нет никакого фунционала</p>
            </div>
            <div class="card-action">
              <a href="#">Перейти на другую страницу</a>
            </div>
          </div>
        </div>
      </div>
    `
});