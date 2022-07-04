/**
 * Mock everything.
 *
 * @param {number|undefined} template see http://mockjs.com/examples.html
 *
 * @returns {string} Mocked result.
 */
export declare function mock_(template: string): string;
/**
 * Mock id.
 *
 * @param {number|undefined} start Minimum value between two numbers.
 * @param {number|undefined} end Maximum value between two numbers.
 *
 * @returns {number} Mocked id.
 *
 * @example
 *
 * mock_id() // 23
 */
export declare function mock_id(start?: number, end?: number): number;
/**
 * Mock unique id.
 *
 * @param {number|undefined} start Minimum value between two numbers.
 * @param {number|undefined} end Maximum value between two numbers.
 *
 * @returns {string} Mocked unique id.
 *
 * @example
 *
 * mock_unique_id() // '320000200608168153'
 */
export declare function mock_unique_id(): string;
/**
 * Mock image.
 *
 * @param {number|undefined} width Image width.
 * @param {number|undefined} height Image height.
 *
 * @returns {string} Mocked Image url.
 *
 * @example
 *
 * mock_image() // 'http://dummyimage.com/100x100'
 */
export declare function mock_image(width?: number, height?: number): string;
/**
 * Mock title.
 *
 * @returns {string} Mocked title.
 *
 * @example
 *
 * mock_title() // '养去全对快'
 */
export declare function mock_title(): string;
/**
 * Mock avatar.
 *
 * @param {number|undefined} width Avatar width.
 * @param {number|undefined} height Avatar height.
 *
 * @returns {string} Mocked Avatar url.
 *
 * @example
 *
 * mock_avatar() // 'http://dummyimage.com/100x100'
 */
export declare function mock_avatar(width?: number, height?: number): string;
/**
 * Mock nick name.
 *
 * @returns {string} Mocked nick name.
 *
 * @example
 *
 * mock_nick_name() // '薛强'
 */
export declare function mock_nick_name(): string;
/**
 * Mock email.
 *
 * @param {string|undefined} suffix Email suffix.
 *
 * @returns {string} Mocked email.
 *
 * @example
 *
 * mock_email() // 'y.adwjjhbmn@qq.com'
 */
export declare function mock_email(suffix?: string): string;
/**
 * Mock province.
 *
 * @returns {string} Mocked province.
 *
 * @example
 *
 * mock_province() // '安徽省'
 */
export declare function mock_province(): string;
/**
 * Mock city.
 *
 * @returns {string} Mocked city.
 *
 * @example
 *
 * mock_city() // '萍乡市'
 */
export declare function mock_city(): string;
/**
 * Mock district.
 *
 * @returns {string} Mocked district.
 *
 * @example
 *
 * mock_district() // '都昌县'
 */
export declare function mock_district(): string;
/**
 * Mock address.
 *
 * @returns {string} Mocked address.
 *
 * @example
 *
 * mock_address() // '山东省 烟台市 蓬莱市'
 */
export declare function mock_address(): string;
/**
 * Mock url.
 *
 * @returns {string} Mocked url.
 *
 * @example
 *
 * mock_url() // 'http://ovmqzolocc.la/ecvrv'
 */
export declare function mock_url(): string;
/**
 * Mock ip.
 *
 * @returns {string} Mocked ip.
 *
 * @example
 *
 * mock_ip() // '202.40.46.57'
 */
export declare function mock_ip(): string;
/**
 * Mock created at.
 *
 * @returns {string} Mocked created at.
 *
 * @example
 *
 * mock_created_at() // '1998-12-22 17:15:31'
 */
export declare function mock_created_at(): string;
