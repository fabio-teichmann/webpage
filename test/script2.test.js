import fetch from "node-fetch";
import { extractContentType } from "node-fetch/src/body.js";
import swapi from "./script2.js";

it('calls swapi to get people', () => {
    expect.assertions(1)
    // in Jest, the test waits for return/resolve of promise
    return swapi.getPeople(fetch).then(data => {
        // assertions
        expect(data.count).toEqual(87)
        // callback done
        // done();
    })
});

it('calls swapi to get people with a promise', () => {
    expect.assertions(2)
    return swapi.getPeoplePromise(fetch).then(data => {
        // assertions
        expect(data.count).toEqual(87)
        expect(data.results.length).toBeGreaterThan(5)
    })
});

it('getPeolpe returns count and results', () => {
    // create mock / spy function
    const mockFetch = jest.fn()
        .mockReturnValue(Promise.resolve({ json: () => Promise.resolve({
            count: 87,
            results: [1,2,3,4,5]
        })
    }))

    expect.assertions(4);
    return swapi.getPeoplePromise(mockFetch).then(data => {
        expect(mockFetch.mock.calls.length).toBe(1);
        expect(mockFetch).toBeCalledWith('https://swapi.co/api/people');
        expect(data.count).toEqual(87);
        expect(data.results.length).toBeGreaterThan(5);
    });
})