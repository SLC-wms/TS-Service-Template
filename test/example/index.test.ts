import example from "../../src/example";

describe('example general test', () => {
    it('should return the correct value', () => {
        const result = example();
        expect(result).toEqual({ hello: 'world' });
    });
});
