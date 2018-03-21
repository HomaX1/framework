import { bootstrap } from './own-framework/core/bootstrap';
import { appModule } from './app/app.module';
import { wfm } from './own-framework/index'

wfm.delay().then(() => {
    bootstrap(appModule);
});
