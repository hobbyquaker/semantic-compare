/* global describe, it */

const assert = require('assert');
const semverCompare = require('..');

describe('core', () => {
    it('should return 0 on equal versions', () => {
        assert(semverCompare('1.0.0', '1.0.0') === 0);
        assert(semverCompare('1.2.3', '1.2.3') === 0);
        assert(semverCompare('3.2.1', '3.2.1') === 0);
        assert(semverCompare('0.0.0', '0.0.0') === 0);
        assert(semverCompare('0.0.1', '0.0.1') === 0);
        assert(semverCompare('10.0.1', '10.0.1') === 0);
        assert(semverCompare('10.0.10', '10.0.10') === 0);
        assert(semverCompare('0.0.0', '0.0.0') === 0);
    });
    it('should return 1 if a > b', () => {
        assert(semverCompare('1.0.0', '0.0.0') === 1);
        assert(semverCompare('1.0.0', '0.9.0') === 1);
        assert(semverCompare('1.0.0', '0.9.10') === 1);
        assert(semverCompare('0.0.1', '0.0.0') === 1);
        assert(semverCompare('0.0.2', '0.0.1') === 1);
        assert(semverCompare('0.1.0', '0.0.1') === 1);
        assert(semverCompare('2.0.0', '1.0.0') === 1);
        assert(semverCompare('0.2.0', '0.1.0') === 1);
        assert(semverCompare('0.2.0', '0.1.100') === 1);
        assert(semverCompare('10.2.0', '10.1.0') === 1);
        assert(semverCompare('10.12.0', '10.11.0') === 1);
    });
    it('should return -1 if a < b', () => {
        assert(semverCompare('0.0.0', '1.0.0') === -1);
        assert(semverCompare('0.9.0', '1.0.0') === -1);
        assert(semverCompare('0.9.10', '1.0.0') === -1);
        assert(semverCompare('0.0.0', '0.0.1') === -1);
        assert(semverCompare('0.0.1', '0.0.2') === -1);
        assert(semverCompare('0.0.1', '0.1.0') === -1);
        assert(semverCompare('1.0.0', '2.0.0') === -1);
        assert(semverCompare('0.1.0', '0.2.0') === -1);
        assert(semverCompare('0.1.100', '0.2.0') === -1);
        assert(semverCompare('10.1.0', '10.2.0') === -1);
        assert(semverCompare('10.11.0', '10.12.0') === -1);
    });
});

describe('core+build', () => {
    it('should return 0 on equal versions', () => {
        assert(semverCompare('1.0.0+123', '1.0.0') === 0);
        assert(semverCompare('1.2.3+123', '1.2.3') === 0);
        assert(semverCompare('3.2.1+123', '3.2.1') === 0);
        assert(semverCompare('0.0.0+123', '0.0.0') === 0);
        assert(semverCompare('0.0.1', '0.0.1+123') === 0);
        assert(semverCompare('10.0.1', '10.0.1+123') === 0);
        assert(semverCompare('10.0.10', '10.0.10+123') === 0);
        assert(semverCompare('0.0.0+1', '0.0.0+2') === 0);
    });
    it('should return 1 if a > b', () => {
        assert(semverCompare('1.0.0+123', '0.0.0') === 1);
        assert(semverCompare('1.0.0+123', '0.9.0') === 1);
        assert(semverCompare('1.0.0+123', '0.9.10') === 1);
        assert(semverCompare('0.0.1+123', '0.0.0') === 1);
        assert(semverCompare('0.0.2+123', '0.0.1') === 1);
        assert(semverCompare('0.1.0+123', '0.0.1') === 1);
        assert(semverCompare('2.0.0+123', '1.0.0') === 1);
        assert(semverCompare('0.2.0+123', '0.1.0') === 1);
        assert(semverCompare('0.2.0+123', '0.1.100') === 1);
        assert(semverCompare('10.2.0+123', '10.1.0') === 1);
        assert(semverCompare('10.12.0+123', '10.11.0') === 1);
        assert(semverCompare('1.0.0', '0.0.0+123+1') === 1);
        assert(semverCompare('1.0.0', '0.9.0+123+1') === 1);
        assert(semverCompare('1.0.0', '0.9.10+123+1') === 1);
        assert(semverCompare('0.0.1', '0.0.0+123+1') === 1);
        assert(semverCompare('0.0.2', '0.0.1+123+1') === 1);
        assert(semverCompare('0.1.0', '0.0.1+123+1') === 1);
        assert(semverCompare('2.0.0', '1.0.0+123+1') === 1);
        assert(semverCompare('0.2.0', '0.1.0+123+1') === 1);
        assert(semverCompare('0.2.0', '0.1.100+123+1') === 1);
        assert(semverCompare('10.2.0', '10.1.0+123+1') === 1);
        assert(semverCompare('10.12.0', '10.11.0+123+1') === 1);
        assert(semverCompare('1.0.0+1', '0.0.0+2') === 1);
        assert(semverCompare('1.0.0+1', '0.9.0+2') === 1);
        assert(semverCompare('1.0.0+1', '0.9.10+2') === 1);
        assert(semverCompare('0.0.1+1', '0.0.0+2') === 1);
        assert(semverCompare('0.0.2+1', '0.0.1+2') === 1);
        assert(semverCompare('0.1.0+1', '0.0.1+2') === 1);
        assert(semverCompare('2.0.0+1', '1.0.0+2') === 1);
        assert(semverCompare('0.2.0+1', '0.1.0+2') === 1);
        assert(semverCompare('0.2.0+1', '0.1.100+2') === 1);
        assert(semverCompare('10.2.0+1', '10.1.0+2') === 1);
        assert(semverCompare('10.12.0+1', '10.11.0+2') === 1);
    });
    it('should return -1 if a < b', () => {
        assert(semverCompare('0.0.0+123', '1.0.0') === -1);
        assert(semverCompare('0.9.0+123', '1.0.0') === -1);
        assert(semverCompare('0.9.10+123', '1.0.0') === -1);
        assert(semverCompare('0.0.0+123', '0.0.1') === -1);
        assert(semverCompare('0.0.1+123', '0.0.2') === -1);
        assert(semverCompare('0.0.1+123', '0.1.0') === -1);
        assert(semverCompare('1.0.0+123', '2.0.0') === -1);
        assert(semverCompare('0.1.0+123', '0.2.0') === -1);
        assert(semverCompare('0.1.100+123', '0.2.0') === -1);
        assert(semverCompare('10.1.0+123', '10.2.0') === -1);
        assert(semverCompare('10.11.0+123', '10.12.0') === -1);
        assert(semverCompare('0.0.0', '1.0.0+123') === -1);
        assert(semverCompare('0.9.0', '1.0.0+123') === -1);
        assert(semverCompare('0.9.10', '1.0.0+123') === -1);
        assert(semverCompare('0.0.0', '0.0.1+123') === -1);
        assert(semverCompare('0.0.1', '0.0.2+123') === -1);
        assert(semverCompare('0.0.1', '0.1.0+123') === -1);
        assert(semverCompare('1.0.0', '2.0.0+123') === -1);
        assert(semverCompare('0.1.0', '0.2.0+123') === -1);
        assert(semverCompare('0.1.100', '0.2.0+123') === -1);
        assert(semverCompare('10.1.0', '10.2.0+123') === -1);
        assert(semverCompare('10.11.0', '10.12.0+123') === -1);
        assert(semverCompare('0.0.0+1', '1.0.0+2') === -1);
        assert(semverCompare('0.9.0+1', '1.0.0+2') === -1);
        assert(semverCompare('0.9.10+1', '1.0.0+2') === -1);
        assert(semverCompare('0.0.0+1', '0.0.1+2') === -1);
        assert(semverCompare('0.0.1+1', '0.0.2+2') === -1);
        assert(semverCompare('0.0.1+1', '0.1.0+2') === -1);
        assert(semverCompare('1.0.0+1', '2.0.0+2') === -1);
        assert(semverCompare('0.1.0+1', '0.2.0+2') === -1);
        assert(semverCompare('0.1.100+1', '0.2.0+2') === -1);
        assert(semverCompare('10.1.0+1', '10.2.0+2') === -1);
        assert(semverCompare('10.11.0+1', '10.12.0+2') === -1);
    });
});

describe('core-pre', () => {
    it('should return 0 on equal versions', () => {
        assert(semverCompare('1.0.0-beta', '1.0.0-beta') === 0);
        assert(semverCompare('1.2.3-beta.1', '1.2.3-beta.1') === 0);
        assert(semverCompare('3.2.1-beta.1.1', '3.2.1-beta.1.1') === 0);
        assert(semverCompare('0.0.0-x.1.y.2', '0.0.0-x.1.y.2') === 0);
        assert(semverCompare('0.0.1-alpha', '0.0.1-alpha') === 0);
        assert(semverCompare('10.0.1-alpha.1', '10.0.1-alpha.1') === 0);
        assert(semverCompare('10.0.10-alpha.1.1', '10.0.10-alpha.1.1') === 0);
        assert(semverCompare('0.0.0-alpha.1.2', '0.0.0-alpha.1.2') === 0);
    });
    it('should return 1 if a > b', () => {
        assert(semverCompare('1.0.0', '0.0.0') === 1);
        assert(semverCompare('1.0.0', '1.0.0-beta') === 1);
        assert(semverCompare('1.0.0-beta.1', '1.0.0-beta') === 1);
        assert(semverCompare('1.0.0-beta.2', '1.0.0-beta.1') === 1);
        assert(semverCompare('1.0.0-beta.x', '1.0.0-beta.1') === 1);
        assert(semverCompare('1.0.0-beta.x', '1.0.0-beta.a') === 1);
        assert(semverCompare('1.0.0', '1.0.0-beta.1') === 1);
        assert(semverCompare('1.0.0-beta.1.1', '1.0.0-beta.1') === 1);
        assert(semverCompare('1.0.0', '1.0.0-beta.1.1') === 1);
        assert(semverCompare('1.0.0-beta.1.1', '1.0.0-beta.1') === 1);
        assert(semverCompare('1.0.0-a.1', '1.0.0-a') === 1);
        assert(semverCompare('1.0.0-a.1', '1.0.0-a.0') === 1);
        assert(semverCompare('1.0.0-b', '1.0.0-a') === 1);
        assert(semverCompare('1.0.0-rc', '0.9.0') === 1);
        assert(semverCompare('1.0.0-rc', '0.9.10') === 1);
        assert(semverCompare('0.0.1-beta', '0.0.0') === 1);
        assert(semverCompare('0.0.2-alpha', '0.0.1') === 1);
        assert(semverCompare('0.1.0-y', '0.1.0-x') === 1);
        assert(semverCompare('0.1.0-x.1', '0.1.0-x') === 1);
        assert(semverCompare('0.1.0-x.1.x', '0.1.0-x.1') === 1);
        assert(semverCompare('0.1.0-x.1.x.1', '0.1.0-x.1.x') === 1);
        assert(semverCompare('0.1.0-x.1.x.2', '0.1.0-x.1.x.1') === 1);
        assert(semverCompare('0.1.0-x.1.y.1', '0.1.0-x.1.x.1') === 1);
        assert(semverCompare('2.0.0-beta', '1.0.0') === 1);
        assert(semverCompare('0.2.0-alpha', '0.1.0') === 1);
        assert(semverCompare('0.2.0-rc.1', '0.1.100') === 1);
        assert(semverCompare('10.2.0-rc.2', '10.1.0') === 1);
        assert(semverCompare('10.12.0-beta.1', '10.11.0') === 1);
    });
    it('should return -1 if a < b', () => {
        assert(semverCompare('0.0.0', '1.0.0') === -1);
        assert(semverCompare('1.0.0-beta', '1.0.0') === -1);
        assert(semverCompare('1.0.0-beta', '1.0.0-beta.1') === -1);
        assert(semverCompare('1.0.0-beta.1', '1.0.0-beta.2') === -1);
        assert(semverCompare('1.0.0-beta.1', '1.0.0-beta.x') === -1);
        assert(semverCompare('1.0.0-beta.a', '1.0.0-beta.x') === -1);
        assert(semverCompare('1.0.0-beta.1', '1.0.0') === -1);
        assert(semverCompare('1.0.0-beta.1', '1.0.0-beta.1.1') === -1);
        assert(semverCompare('1.0.0-beta.1.1', '1.0.0') === -1);
        assert(semverCompare('1.0.0-beta.1', '1.0.0-beta.1.1') === -1);
        assert(semverCompare('1.0.0-a', '1.0.0-a.1') === -1);
        assert(semverCompare('1.0.0-a.0', '1.0.0-a.1') === -1);
        assert(semverCompare('1.0.0-a', '1.0.0-b') === -1);
        assert(semverCompare('0.9.0', '1.0.0-rc') === -1);
        assert(semverCompare('0.9.10', '1.0.0-rc') === -1);
        assert(semverCompare('0.0.0', '0.0.1-beta') === -1);
        assert(semverCompare('0.0.1', '0.0.2-alpha') === -1);
        assert(semverCompare('0.1.0-x', '0.1.0-y') === -1);
        assert(semverCompare('0.1.0-x', '0.1.0-x.1') === -1);
        assert(semverCompare('0.1.0-x.1', '0.1.0-x.1.x') === -1);
        assert(semverCompare('0.1.0-x.1.x', '0.1.0-x.1.x.1') === -1);
        assert(semverCompare('0.1.0-x.1.x.1', '0.1.0-x.1.x.2') === -1);
        assert(semverCompare('0.1.0-x.1.x.1', '0.1.0-x.1.y.1') === -1);
        assert(semverCompare('1.0.0', '2.0.0-beta') === -1);
        assert(semverCompare('0.1.0', '0.2.0-alpha') === -1);
        assert(semverCompare('0.1.100', '0.2.0-rc.1') === -1);
        assert(semverCompare('10.1.0', '10.2.0-rc.2') === -1);
        assert(semverCompare('10.11.0', '10.12.0-beta.1') === -1);
    });
});

describe('core-pre+build', () => {
    it('should return 0 on equal versions', () => {
        assert(semverCompare('1.0.0-beta', '1.0.0-beta') === 0);
        assert(semverCompare('1.2.3-beta.1', '1.2.3-beta.1') === 0);
        assert(semverCompare('3.2.1-beta.1.1', '3.2.1-beta.1.1') === 0);
        assert(semverCompare('0.0.0-x.1.y.2', '0.0.0-x.1.y.2') === 0);
        assert(semverCompare('0.0.1-alpha', '0.0.1-alpha') === 0);
        assert(semverCompare('10.0.1-alpha.1', '10.0.1-alpha.1') === 0);
        assert(semverCompare('10.0.10-alpha.1.1', '10.0.10-alpha.1.1') === 0);
        assert(semverCompare('0.0.0-alpha.1.2', '0.0.0-alpha.1.2') === 0);
        assert(semverCompare('1.0.0-beta+123', '1.0.0-beta') === 0);
        assert(semverCompare('1.2.3-beta.1+123', '1.2.3-beta.1') === 0);
        assert(semverCompare('3.2.1-beta.1.1+123', '3.2.1-beta.1.1') === 0);
        assert(semverCompare('0.0.0-x.1.y.2+123', '0.0.0-x.1.y.2') === 0);
        assert(semverCompare('0.0.1-alpha+123', '0.0.1-alpha') === 0);
        assert(semverCompare('10.0.1-alpha.1+123', '10.0.1-alpha.1') === 0);
        assert(semverCompare('10.0.10-alpha.1.1+123', '10.0.10-alpha.1.1') === 0);
        assert(semverCompare('0.0.0-alpha.1.2+123', '0.0.0-alpha.1.2') === 0);
        assert(semverCompare('1.0.0-beta', '1.0.0-beta+123') === 0);
        assert(semverCompare('1.2.3-beta.1', '1.2.3-beta.1+123') === 0);
        assert(semverCompare('3.2.1-beta.1.1', '3.2.1-beta.1.1+123') === 0);
        assert(semverCompare('0.0.0-x.1.y.2', '0.0.0-x.1.y.2+123') === 0);
        assert(semverCompare('0.0.1-alpha', '0.0.1-alpha+123') === 0);
        assert(semverCompare('10.0.1-alpha.1', '10.0.1-alpha.1+123') === 0);
        assert(semverCompare('10.0.10-alpha.1.1', '10.0.10-alpha.1.1+123') === 0);
        assert(semverCompare('0.0.0-alpha.1.2', '0.0.0-alpha.1.2+123') === 0);
        assert(semverCompare('1.0.0-beta+1', '1.0.0-beta+123') === 0);
        assert(semverCompare('1.2.3-beta.1+1', '1.2.3-beta.1+123') === 0);
        assert(semverCompare('3.2.1-beta.1.1+1', '3.2.1-beta.1.1+123') === 0);
        assert(semverCompare('0.0.0-x.1.y.2+1', '0.0.0-x.1.y.2+123') === 0);
        assert(semverCompare('0.0.1-alpha+1', '0.0.1-alpha+123') === 0);
        assert(semverCompare('10.0.1-alpha.1+1', '10.0.1-alpha.1+123') === 0);
        assert(semverCompare('10.0.10-alpha.1.1+1', '10.0.10-alpha.1.1+123') === 0);
        assert(semverCompare('0.0.0-alpha.1.2+1', '0.0.0-alpha.1.2+123') === 0);
    });
    it('should return 1 if a > b', () => {
        assert(semverCompare('1.0.0+123', '0.0.0') === 1);
        assert(semverCompare('1.0.0+123', '1.0.0-beta') === 1);
        assert(semverCompare('1.0.0-beta.1+123', '1.0.0-beta') === 1);
        assert(semverCompare('1.0.0+123', '1.0.0-beta.1') === 1);
        assert(semverCompare('1.0.0-beta.1.1+123', '1.0.0-beta.1') === 1);
        assert(semverCompare('1.0.0+123', '1.0.0-beta.1.1') === 1);
        assert(semverCompare('1.0.0-beta.1.1+123', '1.0.0-beta.1') === 1);
        assert(semverCompare('1.0.0-a.1+123', '1.0.0-a') === 1);
        assert(semverCompare('1.0.0-a.1+123', '1.0.0-a.0') === 1);
        assert(semverCompare('1.0.0-b+123', '1.0.0-a') === 1);
        assert(semverCompare('1.0.0-rc+123', '0.9.0') === 1);
        assert(semverCompare('1.0.0-rc+123', '0.9.10') === 1);
        assert(semverCompare('0.0.1-beta+123', '0.0.0') === 1);
        assert(semverCompare('0.0.2-alpha+123', '0.0.1') === 1);
        assert(semverCompare('0.1.0-y+123', '0.1.0-x') === 1);
        assert(semverCompare('0.1.0-x.1+123', '0.1.0-x') === 1);
        assert(semverCompare('0.1.0-x.1.x+123', '0.1.0-x.1') === 1);
        assert(semverCompare('0.1.0-x.1.x.1+123', '0.1.0-x.1.x') === 1);
        assert(semverCompare('0.1.0-x.1.x.2+123', '0.1.0-x.1.x.1') === 1);
        assert(semverCompare('0.1.0-x.1.y.1+123', '0.1.0-x.1.x.1') === 1);
        assert(semverCompare('2.0.0-beta+123', '1.0.0') === 1);
        assert(semverCompare('0.2.0-alpha+123', '0.1.0') === 1);
        assert(semverCompare('0.2.0-rc.1+123', '0.1.100') === 1);
        assert(semverCompare('10.2.0-rc.2+123', '10.1.0') === 1);
        assert(semverCompare('10.12.0-beta.1+123', '10.11.0') === 1);

        assert(semverCompare('1.0.0', '0.0.0+123') === 1);
        assert(semverCompare('1.0.0', '1.0.0-beta+123') === 1);
        assert(semverCompare('1.0.0-beta.1', '1.0.0-beta+123') === 1);
        assert(semverCompare('1.0.0', '1.0.0-beta.1+123') === 1);
        assert(semverCompare('1.0.0-beta.1.1', '1.0.0-beta.1+123') === 1);
        assert(semverCompare('1.0.0', '1.0.0-beta.1.1+123') === 1);
        assert(semverCompare('1.0.0-beta.1.1', '1.0.0-beta.1+123') === 1);
        assert(semverCompare('1.0.0-a.1', '1.0.0-a+123') === 1);
        assert(semverCompare('1.0.0-a.1', '1.0.0-a.0+123') === 1);
        assert(semverCompare('1.0.0-b', '1.0.0-a+123') === 1);
        assert(semverCompare('1.0.0-rc', '0.9.0+123') === 1);
        assert(semverCompare('1.0.0-rc', '0.9.10+123') === 1);
        assert(semverCompare('0.0.1-beta', '0.0.0+123') === 1);
        assert(semverCompare('0.0.2-alpha', '0.0.1+123') === 1);
        assert(semverCompare('0.1.0-y', '0.1.0-x+123') === 1);
        assert(semverCompare('0.1.0-x.1', '0.1.0-x+123') === 1);
        assert(semverCompare('0.1.0-x.1.x', '0.1.0-x.1+123') === 1);
        assert(semverCompare('0.1.0-x.1.x.1', '0.1.0-x.1.x+123') === 1);
        assert(semverCompare('0.1.0-x.1.x.2', '0.1.0-x.1.x.1+123') === 1);
        assert(semverCompare('0.1.0-x.1.y.1', '0.1.0-x.1.x.1+123') === 1);
        assert(semverCompare('2.0.0-beta', '1.0.0+123') === 1);
        assert(semverCompare('0.2.0-alpha', '0.1.0+123') === 1);
        assert(semverCompare('0.2.0-rc.1', '0.1.100+123') === 1);
        assert(semverCompare('10.2.0-rc.2', '10.1.0+123') === 1);
        assert(semverCompare('10.12.0-beta.1', '10.11.0+123') === 1);
    });
    it('should return -1 if a < b', () => {
        assert(semverCompare('1.0.0+123', '0.0.0') === 1);
        assert(semverCompare('1.0.0+123', '1.0.0-beta') === 1);
        assert(semverCompare('1.0.0-beta.1+123', '1.0.0-beta') === 1);
        assert(semverCompare('1.0.0+123', '1.0.0-beta.1') === 1);
        assert(semverCompare('1.0.0-beta.1.1+123', '1.0.0-beta.1') === 1);
        assert(semverCompare('1.0.0+123', '1.0.0-beta.1.1') === 1);
        assert(semverCompare('1.0.0-beta.1.1+123', '1.0.0-beta.1') === 1);
        assert(semverCompare('1.0.0-a.1+123', '1.0.0-a') === 1);
        assert(semverCompare('1.0.0-a.1', '1.0.0-a.0+123') === 1);
        assert(semverCompare('1.0.0-b', '1.0.0-a+123') === 1);
        assert(semverCompare('1.0.0-rc', '0.9.0+123') === 1);
        assert(semverCompare('1.0.0-rc', '0.9.10+123') === 1);
        assert(semverCompare('0.0.1-beta', '0.0.0+123') === 1);
        assert(semverCompare('0.0.2-alpha', '0.0.1+123') === 1);
        assert(semverCompare('0.1.0-y+1', '0.1.0-x+2') === 1);
        assert(semverCompare('0.1.0-x.1+1', '0.1.0-x+2') === 1);
        assert(semverCompare('0.1.0-x.1.x+1', '0.1.0-x.1+2') === 1);
        assert(semverCompare('0.1.0-x.1.x.1+1', '0.1.0-x.1.x+2') === 1);
        assert(semverCompare('0.1.0-x.1.x.2+1', '0.1.0-x.1.x.1+2') === 1);
        assert(semverCompare('0.1.0-x.1.y.1+1', '0.1.0-x.1.x.1+2') === 1);
        assert(semverCompare('2.0.0-bet+1a', '1.0.0+2') === 1);
        assert(semverCompare('0.2.0-alpha+1', '0.1.0+2') === 1);
        assert(semverCompare('0.2.0-rc.1+1', '0.1.100+2') === 1);
        assert(semverCompare('10.2.0-rc.2+1', '10.1.0+2') === 1);
        assert(semverCompare('10.12.0-beta.1+1', '10.11.0+2') === 1);
    });
});

describe('sorting core-pre', () => {
    it('should sort', () => {
        assert(JSON.stringify([
            '1.0.0-alpha.1',
            '1.0.0-beta',
            '1.0.0',
            '1.0.0-alpha.beta',
            '1.0.0-rc.1',
            '1.0.0-beta.2',
            '1.0.0-alpha',
            '1.0.0-beta.11',
        ].sort(semverCompare)) === '["1.0.0-alpha","1.0.0-alpha.1","1.0.0-alpha.beta","1.0.0-beta","1.0.0-beta.2","1.0.0-beta.11","1.0.0-rc.1","1.0.0"]');

        assert(JSON.stringify([
            '1.0.0-beta.1',
            '0.0.1',
            '2.0.0',
            '0.1.0',
            '2.0.0-alpha',
            '1.0.0',
            '2.0.0-alpha.1',
            '2.0.0-alpha.2',
            '1.0.0-beta',
            '2.0.0-rc.2',
            '2.0.0-beta',
            '1.0.0-rc.1',
            '2.0.0-beta.1',
            '2.0.0-rc.1',
            '2.0.0-beta.2',
            '2.0.0-rc',
        ].sort(semverCompare)) === '["0.0.1","0.1.0","1.0.0-beta","1.0.0-beta.1","1.0.0-rc.1","1.0.0","2.0.0-alpha","2.0.0-alpha.1","2.0.0-alpha.2","2.0.0-beta","2.0.0-beta.1","2.0.0-beta.2","2.0.0-rc","2.0.0-rc.1","2.0.0-rc.2","2.0.0"]');
    });
});

describe('invalid input', () => {
    it('should not throw', () => {
        assert(semverCompare('1.0.0', null) === 1);
        assert(semverCompare('2.0.0', 1) === 1);
        assert(semverCompare('2.0.0', 1.9) === 1);
        assert(semverCompare(null, null) === 0);
        assert(semverCompare(null, '1.0.0') === -1);
        assert(semverCompare('2.0.0', 3) === -1);
        assert(semverCompare(3.2, '3.3.0') === -1);
    });
});
