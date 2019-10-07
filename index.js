function split(version) {
    const [corepre, build] = version.split('+');
    const [core, pre] = corepre.split('-').map(x => String(x).split('.').map(y => isNaN(y) ? y : parseInt(y, 10)));
    return {core, pre, build};
}

function compareCore(va, vb) {
    for (let i = 0; i < 3; i++) {
        if (va.core[i] < vb.core[i]) {
            return -1;
        }

        if (va.core[i] > vb.core[i]) {
            return 1;
        }
    }
}

function comparePre(va, vb) {
    if (va.pre && !vb.pre) {
        return -1;
    }

    if (!va.pre && vb.pre) {
        return 1;
    }

    if (va.pre && vb.pre) {
        const len = va.pre.length > vb.pre.length ? va.pre.length : vb.pre.length;
        for (let i = 0; i < len; i++) {
            if (typeof va.pre[i] === 'undefined' && typeof vb.pre[i] !== 'undefined') {
                return -1;
            }

            if (typeof va.pre[i] !== 'undefined' && typeof vb.pre[i] === 'undefined') {
                return 1;
            }

            if (typeof va.pre[i] === 'number' && typeof vb.pre[i] === 'string') {
                return -1;
            }

            if (typeof va.pre[i] === 'string' && typeof vb.pre[i] === 'number') {
                return 1;
            }

            if (typeof va.pre[i] === typeof vb.pre[i]) {
                if (va.pre[i] < vb.pre[i]) {
                    return -1;
                }

                if (va.pre[i] > vb.pre[i]) {
                    return 1;
                }
            }
        }
    }
}

module.exports = (a, b) => {
    const va = split(a);
    const vb = split(b);

    const core = compareCore(va, vb);

    if (core) {
        return core;
    }

    const pre = comparePre(va, vb);

    if (pre) {
        return pre;
    }

    return 0;
};
