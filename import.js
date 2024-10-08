// Native Script Importer for JavaScript

let method_importer = document.body || document.head || null;
let n_import = null;

if (method_importer === null) {
    console.error("[Natie Importer]: Theres no body/head to inject script tags into!!");
} else {
    console.log("[Native Importer]: Native Script Importer (version 1)");
    n_import = function(link, isModule) {
        let script = document.createElement("script");
        script.src = link;
        script.type = isModule ? "module" : null;
        method_importer.appendChild(script);
        console.log(`[Native Importer]: Imported "${link}" successfully. (isModule: ${isModule ? "true" : "false"})`);
    }
}