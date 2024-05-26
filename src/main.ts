import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCeExwWmFZfVpgdVVMYl9bQXJPMyBoS35RckVmWXhfcHZWQ2VfV0N3');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
