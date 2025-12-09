function log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    console[level](`${timestamp} - ${level.toUpperCase()}: ${message}`);
}

module.exports = {
    log,
};