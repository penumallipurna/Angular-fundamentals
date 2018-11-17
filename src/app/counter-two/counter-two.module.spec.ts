import { CounterTwoModule } from './counter-two.module';

describe('CounterTwoModule', () => {
  let counterTwoModule: CounterTwoModule;

  beforeEach(() => {
    counterTwoModule = new CounterTwoModule();
  });

  it('should create an instance', () => {
    expect(counterTwoModule).toBeTruthy();
  });
});
