
import shuffle from '../territoryAssigner';

const array = ['Kamchatka', 'Japan', 'Eastern Australia', 'Alaska', 'Northwest Territory', 'Iceland'];

it('shuffle function shuffles array', () => {
  expect(shuffle(array)).not.toEqual(array)
});

