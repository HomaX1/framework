import { router } from '../tools/router';
import { wfm } from '../tools/util';

export class Module {
    constructor(config) {
        this.components = config.components;
        this.initialBootComponent = config.initialBoot;
        this.routes = config.routes;
    }

    //Start our module
    start() {
        this.initComponents();
        if (this.routes) this.initRoutes();

    }

    //Add components and rendering them
    initComponents() {
        this.initialBootComponent.render();
        this.components.forEach(this.renderComponent.bind(this));
    }

    //Attach an event to change hash for different templates and rendering them
    initRoutes() {
        window.addEventListener('hashchange', this.renderRoute.bind(this));
        this.renderRoute();
    }

    //Render routes
    renderRoute() {
        let url = router.getUrl();
        let route = this.routes.find(routItem => routItem.path === url);

        if(wfm.isUndefined(route)) {
            route = this.routes.find(routeItem => routeItem.path === '**');
        }

        document.querySelector('router-outlet').innerHTML = `<${route.component.selector}></${route.component.selector}>`;
        this.renderComponent(route.component);
    }

    //Render component
    renderComponent(component) {
        component.render();
    }
}