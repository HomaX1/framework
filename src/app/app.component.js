import { FWComponent } from '../own-framework/index';

class AppComponent extends FWComponent {
    constructor(config) {
        super(config);
    }
}

export const appComponent = new AppComponent({
    selector: 'app-root',
    template: `
        <div>
            <h4>App component works</h4>
            <h6>Does it really works?</h6>
        </div>
`
});