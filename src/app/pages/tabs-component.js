import { FWComponent } from "../../own-framework/index";

class TabsComponent extends FWComponent {
    constructor(config) {
        super(config);
    }
}

export const tabsComponent = new TabsComponent({
    selector: 'app-tabs',
    template: `<h1>Tabs Page</h1>`
});