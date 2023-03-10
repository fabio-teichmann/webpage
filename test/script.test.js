const googleSearch = require('./script');

dbMock = [
    'dog.com',
    'disneyland.com',
    'dogpictures.com',
];

// group tests together
describe('googleSearch', () => {
    it('this is a test', () => {
        expect('hello').toBe('hello');
        // googleSearch('testtest', dbMock);
    })
    
    it('it is searching google', () => {
        expect(googleSearch('testtest', dbMock)).toEqual([]);
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com'])
    })
    
    it('work with undefined and null input', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
    })
    
    it('does not return more than 3 items', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3);
    })
})
