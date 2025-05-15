const { expect } = require('chai');
const formatDate = require('../utils/formatDate');

describe('formatDate util', () => {
  it('should format a JS Date object correctly', () => {
    const date = new Date('2020-05-15T00:00:00Z');
    const formatted = formatDate(date);
    expect(formatted).to.equal('2020-5-15');
  });
});