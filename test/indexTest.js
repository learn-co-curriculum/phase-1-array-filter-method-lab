const sinon = require( 'sinon' )

describe('index.js', function () {
  describe('findMatching()', function () {
    it('returns all drivers that match the passed in name', function () {
      const drivers = ['Azar', 'Samip', 'Guadalupe', 'Aki', 'Lin', 'Azar']

      expect(findMatching(drivers, 'Azar')).to.eql(['Azar', 'Azar']);
      expect(findMatching(drivers, 'Samip')).to.eql(['Samip']);
    });

    it('returns matching drivers if case does not match but letters do', function () {
      const drivers = ['Azar', 'Samip', 'Guadalupe', 'Aki', 'Lin', 'azar'];

      expect(findMatching(drivers, 'Azar')).to.eql(['Azar', 'azar']);
    });

    it('returns an empty array if there is no match', function () {
      const drivers = ['Azar', 'Samip', 'Guadalupe', 'Aki', 'Lin', 'azar'];

      expect(findMatching(drivers, 'Susan')).to.eql([]);
    });
  });

  describe('fuzzyMatch()', function () {
    const drivers = [];

    beforeEach(function () {
      drivers.length = 0;

      drivers.push('Azar', 'Samip', 'Guadalupe', 'Aki', 'Lin', 'azar');
    });

    it('returns a driver if beginning provided letters match', function () {
      expect(fuzzyMatch(drivers, 'Sa')).to.have.members(['Samip', 'Lin', 'Guadalupe']);
    });

    it('does not return drivers if only middle or ending letters match', function () {
      expect(fuzzyMatch(drivers, 'y')).to.have.members([]);
    });

    it('does not return drivers if only middle or ending letters match', function () {
      expect(fuzzyMatch(drivers, 'mm')).to.have.members([]);
    });
  });

  describe('matchName()', function () {
    it('accesses the data structure to check if name matches', function () {
      const drivers = [
        {
          name: 'Azar',
          hometown: 'Pittsburgh' },
        {
          name: 'Samip',
          hometown: 'New York' } ,
        {
          name: 'Guadalupe',
          hometown: 'Cleveland' },
        {
          name: 'Aki',
          hometown: 'Los Angeles' },
        {
          name: 'Azar',
          hometown: 'Tampa Bay' }
      ];

      expect(matchName(drivers, 'Azar')).to.eql([
        {
          name: 'Azar',
          hometown: 'Pittsburgh'
        },
        {
          name: 'Azar',
          hometown: 'Tampa Bay'
        }
      ]);
    });
  });
});
