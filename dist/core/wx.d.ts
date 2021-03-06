/**
 * Only for weapp!
 *
 * Deep clone value.
 *
 * @param {any}value The value to clone.
 *
 * @returns {any} The copied value.
 */
export declare function wx_clone_deep(value: any): any;
/**
 * Only for weapp!
 *
 * Parse the dataset in e.
 *
 * @param {Object} e Weapp `e` value.
 *
 * @returns {any} `e.currentTarget.dataset`.
 */
export declare function wx_dataset(e: any): any;
/**
 * Only for weapp!
 *
 * Make weapp API promisify.
 *
 * @param {Function} fn Weapp API.
 *
 * @returns {Function} Promisify API.
 */
export declare function wx_promisify(fn: Function): Function;
/**
 * Only for weapp!
 *
 * Get window width.
 *
 * @returns {number} Window width.
 */
export declare function wx_window_width(): number;
/**
 * Only for weapp!
 *
 * Get window height.
 *
 * @returns {number} Window height.
 */
export declare function wx_window_height(): number;
/**
 * Only for weapp!
 *
 * Get window pixel ratio.
 *
 * @returns {number} Window pixel ratio.
 */
export declare function wx_window_pixel_ratio(): number;
/**
 * Only for weapp!
 *
 * Get image info sync.
 *
 * @returns {Object} Image info.
 */
export declare function wx_image_info_sync(path: string): any;
/**
 * Only for weapp!
 *
 * Get file info sync.
 *
 * @returns {Object} File info.
 */
export declare function wx_file_info_sync(path: string): any;
/**
 * Router for Weapp.
 */
export declare const wx_router: {
    routes: {
        [key: string]: string;
    };
    route: {
        to: string;
        from: string;
        params: any;
    };
    push: Function;
    replace: Function;
    back: Function;
};
