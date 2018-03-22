import { FWModule } from '../own-framework/index';
import { appComponent } from './app.component';
import { appHeader } from './common/app.header';
import { appRoutes } from './app.routes';

//Create AppModule class, that inherits main module FWModule
class AppModule extends FWModule {
    constructor(config) {
        super(config);
    }
}


//register all components in module
export const appModule = new AppModule({
    components: [
        appHeader
    ],
    initialBoot: appComponent,
    routes: appRoutes
});

