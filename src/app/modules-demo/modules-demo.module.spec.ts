import { ModulesDemoModule } from './modules-demo.module';

describe('ModulesDemoModule', () => {
  let modulesDemoModule: ModulesDemoModule;

  beforeEach(() => {
    modulesDemoModule = new ModulesDemoModule();
  });

  it('should create an instance', () => {
    expect(modulesDemoModule).toBeTruthy();
  });
});
