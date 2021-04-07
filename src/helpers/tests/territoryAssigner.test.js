
import shuffler from '../territoryAssigner';

const array = ['Kamchatka', 'Japan', 'Eastern Australia', 'Alaska', 'Northwest Territory', 'Iceland'];

test('shuffler function shuffles array', () => {
  expect(shuffler(array)).not.toEqual(array)
});
