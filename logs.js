// Keep track of important logs for debugging.

let uLog = {}

const logs = {
    add = function(log) {
        uLog.push(`[uLog]: ${log}`);
    },
    view = function() {
        return uLog;
    },
    print = function() {
        uLog.forEach(log => {
            console.log(log);
        });
    }
}