import { OrderedSet } from 'immutable';
import { customStyleFn } from '../../../Toolbar/Actions';


describe('customStyleFn', () => {

  it('must work font-family inline custom', () => {
    const style = OrderedSet(['font-family: Arial;']);
    const output = customStyleFn(style);
    expect(output).toEqual({ fontFamily: "Arial" });
  });
});
