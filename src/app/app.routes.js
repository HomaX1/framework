import { tabOneComponent } from './pages/tab-one-component';
import { tabTwoComponent } from './pages/tab-two-component';
import { errorNotFound } from './common/error-not-found.component';

//There are all paths that we have in our project
export const appRoutes = [
    { path: '', component: tabOneComponent },
    { path: 'tab1', component: tabOneComponent },
    { path: 'tab2', component: tabTwoComponent },

    // ** - means, this components will loading, if we don't have any others tabs
    { path: '**', component: errorNotFound}
];
