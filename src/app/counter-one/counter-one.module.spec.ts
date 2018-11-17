import { CounterOneModule } from './counter-one.module';

describe('CounterOneModule', () => {
  let counterOneModule: CounterOneModule;

  beforeEach(() => {
    counterOneModule = new CounterOneModule();
  });

  it('should create an instance', () => {
    expect(counterOneModule).toBeTruthy();
  });
});
