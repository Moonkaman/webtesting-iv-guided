const db = require('../data/dbConfig');
const Hobbits = require('./hobbitsModel');

describe('Hobbits model', () => {
  describe('insert()', () => {
    afterEach(async () => {
      await db('hobbits').truncate();
    })

    it('should insert the provided hobbit into the db', async () => {
      const hobbit = await Hobbits.insert({name: 'sam'});

      expect(hobbit.name).toBe('sam');
    });

    it('should insert the provided hobbits into the db', async () => {
      await Hobbits.insert({name: 'gaffer'});
      await Hobbits.insert({name: 'sam'});

      const hobbits = await db('hobbits');
      expect(hobbits).toHaveLength(2);
    });
  });
});