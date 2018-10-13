import { PepboysRoutingModule } from './pepboys-routing.module';

describe('PepboysRoutingModule', () => {
  let pepboysRoutingModule: PepboysRoutingModule;

  beforeEach(() => {
    pepboysRoutingModule = new PepboysRoutingModule();
  });

  it('should create an instance', () => {
    expect(pepboysRoutingModule).toBeTruthy();
  });
});
