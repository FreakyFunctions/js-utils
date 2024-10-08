// Simple JavaScript VM with Custom Error Handling

const vm_info = {
    name = "jsvm",
    error = `[${vm_info.name}]: ERR => $error$`
}

const vm = {
    run = function(theFunc) {
        let result;

        try {
            result = theFunc();
        } 
        catch(error) {
            let ERR = vm_info.error;
            ERR = ERR.replace("$error$", error);
            console.error(ERR);
            result = null;
        }

        return result;
    }
}