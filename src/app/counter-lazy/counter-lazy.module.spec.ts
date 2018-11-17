import { CounterLazyModule } from './counter-lazy.module';

describe('CounterLazyModule', () => {
  let counterLazyModule: CounterLazyModule;

  beforeEach(() => {
    counterLazyModule = new CounterLazyModule();
  });

  it('should create an instance', () => {
    expect(counterLazyModule).toBeTruthy();
  });
});
