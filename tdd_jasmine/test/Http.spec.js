describe('Http', function () {

    // Suite
    describe('.get()', function () {
        // Specs
        it('should exist', function () {
            expect(Http).toBeDefined();
        });

        it('should have get', function () {
            expect(Http.get).toBeDefined();
        });

        it('should throw an error', function () {
            // expectation . matcher()
            expect(Http.get).toThrowError();
        });

    });
});