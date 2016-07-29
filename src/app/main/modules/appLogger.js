export const defaultLogger = {
    log: function(message, messageObject = null) {
        console.log('%c' + message, 'color:grey; font-weight: bold', messageObject);
    },
    info: function(message, messageObject = null) {
        console.log('%c'+message, 'color:green; font-weight: bold', messageObject);
    },
    error: function(message, messageObject = null) {
        console.log('%c'+message, 'color:red; font-weight: bold', messageObject);
    }
}