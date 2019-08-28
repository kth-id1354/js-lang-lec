function useExc() {
    try {
        thrower(true);
    } catch (errMsg) {
        alert(errMsg);
    }
}

function thrower(doThrow) {
    if (doThrow) {
        throw "Error message";
    }
}
