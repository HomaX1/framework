import {homeComponent} from "./pages/home.component";
import {tabsComponent} from "./pages/tabs-component";
import {errorNotFound} from "./common/error-not-found.component";

export const appRoutes = [
    { path: '', component: homeComponent },
    { path: 'tabs', component: tabsComponent },

    // ** - means, this components will loading, if we don't have any others tabs
    { path: '**', component: errorNotFound}
];
