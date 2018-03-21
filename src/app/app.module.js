import { FWModule } from '../own-framework/index';
import { appComponent } from './app.component';

class AppModule extends FWModule {
    constructor(config) {
        super(config);
    }
}

export const appModule = new AppModule({
    components: [
        appComponent
    ]
});

