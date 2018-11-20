import { FormsDemoModule } from './forms-demo.module';

describe('FormsDemoModule', () => {
  let formsDemoModule: FormsDemoModule;

  beforeEach(() => {
    formsDemoModule = new FormsDemoModule();
  });

  it('should create an instance', () => {
    expect(formsDemoModule).toBeTruthy();
  });
});
