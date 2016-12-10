/**
 * Service restarts everything
 */

const onError = (err, blame, api, event) => {
    process.emitWarning(blame.toLowerCase().trim() + ' has crashed, restarting...');
    exports.platform.shutdown(StatusFlag.ShutdownShouldRestart);
};

exports.load = (platform) => {
    platform.on('uncaughtError', onError);
};

exports.unload = () => {
    exports.platform.removeListener('uncaughtError', onError);
};