import { initialBoot } from './own-framework/core/initial-boot';
import { appModule } from './app/app.module';
import { wfm } from './own-framework/index'

//Make a delay of 1 second to create preloader. If promise returns resolve, the framework will declare himself with all application
wfm.delay().then(() => {
    initialBoot(appModule);
});
