import pino from 'pino';
const logger = pino();
test('adds 1 + 2 to equal 3', () => {
    logger.info('Running test');
    expect(1 + 2).toBe(3);
});
