function split(version) {
    const [corepre, build] = version.split('+');
    const [core, pre] = corepre.split('-').map(x => String(x).split('.').map(y => isNaN(y) ? y : parseInt(y, 10)));
    return {core, pre, build};
}

function compareCore(a, b) {
    for (let i = 0; i < 3; i++) {
        if (a[i] < b[i]) {
            return -1;
        }

        if (a[i] > b[i]) {
            return 1;
        }
    }
}

function comparePre(a, b) {
    if (a && !b) {
        return -1;
    }

    if (!a && b) {
        return 1;
    }

    if (a && b) {
        const len = a.length > b.length ? a.length : b.length;
        for (let i = 0; i < len; i++) {
            if (typeof a[i] === 'undefined' && typeof b[i] !== 'undefined') {
                return -1;
            }

            if (typeof a[i] !== 'undefined' && typeof b[i] === 'undefined') {
                return 1;
            }

            if (typeof a[i] === 'number' && typeof b[i] === 'string') {
                return -1;
            }

            if (typeof a[i] === 'string' && typeof b[i] === 'number') {
                return 1;
            }

            if (a[i] < b[i]) {
                return -1;
            }

            if (a[i] > b[i]) {
                return 1;
            }
        }
    }
}

module.exports = (a, b) => {
    const va = split(a);
    const vb = split(b);

    const core = compareCore(va.core, vb.core);

    if (core) {
        return core;
    }

    const pre = comparePre(va.pre, vb.pre);

    if (pre) {
        return pre;
    }

    return 0;
};
