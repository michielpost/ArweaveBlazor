// This is a JavaScript module that is loaded on demand. It can export any number of
// functions, and may import other JavaScript modules if required.

let arweave;

export function loadJs(sourceUrl) {
    if (sourceUrl.Length == 0) {
        console.error("Invalid source URL");
        return;
    }

    var tag = document.createElement('script');
    tag.src = sourceUrl;
    tag.type = "text/javascript";

    //tag.onload = function () {
    //    console.log("Script loaded successfully");
    //}

    tag.onerror = function () {
        console.error("Failed to load script");
    }

    document.body.appendChild(tag);
}

export async function InitArweave() {
    arweave = Arweave.init({});
}

export async function HasArConnect() {
    if (window.arweaveWallet) {
        return true;
    }
    else {
        return false;
    }
};

export async function GetWalletBalance(address) {
    var result = await arweave.wallets.getBalance(address)
    console.log(result);
    
    return result;
}

export async function Connect(permissions, appInfo) {
    var result = await window.arweaveWallet.connect(permissions, appInfo)
    console.log(result);

    return result;
}

export async function Disconnect() {
    var result = await window.arweaveWallet.disconnect()
    console.log(result);
    return result;
}

export async function GetActiveAddress(permissions, appInfo) {
    var result = await window.arweaveWallet.getActiveAddress()
    console.log(result);

    return result;
}

