import * as assert from 'assert';

/**
 * Switchのdefaultに記載しておくと、対象が増えたときにエラーが出て検知できる
 */
export function unreachable(): never {
  assert.fail('unreachable');
}
