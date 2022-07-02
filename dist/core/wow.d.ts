interface WowArrayType {
    first?: any;
    last?: any;
    min?: any;
    max?: any;
    remove: any[];
    [prop: string]: any[];
}
/**
 * wow array
 *
 * see examples.
 *
 * @example
 *
 * 1. [1, 2, 3][-1] => 3
 * 2. [1, 2, 3].first => 1
 * 3. [1, 2, 3].last => 3
 * 4. [1, 2, 3]['1:'] => [2, 3]
 *    [1, 2, 3]['1:2'] => [2]
 *    [1, 2, 3][':'] => [1, 2, 3]
 *    [1, 2, 3]['1:3:2'] => [2]
 *    [1, 2, 3]['::'] => [1, 2, 3]
 *    [1, 2, 3]['::-1'] => [3, 2, 1]
 * 5. [1, 2, 3].min => 1
 * 6. [1, 2, 3].max => 3
 * 7. [1, 2, 3].remove(0, val => val === 3) => [2]
 */
export declare function wow_array(value: object): WowArrayType;
export {};
