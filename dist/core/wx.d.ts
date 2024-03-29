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
export interface ResponseViewType {
    showLoading: Function;
    hideLoading: Function;
    showNavigationBarLoading: Function;
    hideNavigationBarLoading: Function;
    startPullDownRefresh: Function;
    stopPullDownRefresh: Function;
    clear: Boolean;
    /**
     * 发起 GET 请求获取列表数据
     *
     * @param {Function} sendRequest 发送请求函数，接收 ResponseView 传入的分页
     * @param {Function|undefined|null} successCallback 请求成功后的回调函数
     * @param {Function|undefined|null} failCallback 请求失败后的回调函数
     * @param {boolean} reachBottom 是否正在执行页面上拉触底事件
     */
    fetchList: Function;
    /**
     * 发起 GET 请求获取数据
     *
     * @param {Function} sendRequest 发送请求函数
     * @param {Function|undefined|null} successCallback 请求成功后的回调函数
     * @param {Function|undefined|null} failCallback 请求失败后的回调函数
     */
    fetch: Function;
    /**
     * 发起 POST 请求新增数据
     *
     * @param {Function} sendRequest 发送请求函数
     * @param {Function|undefined|null} successCallback 请求成功后的回调函数
     * @param {Function|undefined|null} failCallback 请求失败后的回调函数
     */
    post: Function;
    /**
     * 发起 PUT 请求更新数据
     *
     * @param {Function} sendRequest 发送请求函数
     * @param {Function|undefined|null} successCallback 请求成功后的回调函数
     * @param {Function|undefined|null} failCallback 请求失败后的回调函数
     */
    put: Function;
    /**
     * 发起 DELETE 请求删除数据
     *
     * @param {Function} sendRequest 发送请求函数
     * @param {Function|undefined|null} successCallback 请求成功后的回调函数
     * @param {Function|undefined|null} failCallback 请求失败后的回调函数
     */
    delete: Function;
}
export interface ResponseViewConfigType {
    view_key_prefix?: string;
    show_loading?: boolean;
    loading_title?: string;
    loading_mask?: boolean;
    show_success_toast?: boolean;
    success_toast_title?: string;
    show_fail_toast?: boolean;
    fail_toast_title?: string;
}
/**
 * ResponseView 响应视图
 *
 * 在发送请求到后端并获得响应数据后，自动处理、控制与 wxml 中的数据绑定；
 *
 * 这里的数据绑定包括 “渲染数据” “是否为空数据” “全部数据是否加载完毕” “分页数” 等。
 */
export declare class ResponseView implements ResponseViewType {
    protected page: {
        data: {
            [prop: string]: unknown;
        };
        setData: Function;
    };
    protected config: ResponseViewConfigType;
    protected objKey: string;
    protected objInitialValue: unknown;
    protected viewKey: string;
    protected viewValue: {
        reqPage: number;
        reqLoading: boolean;
        empty: boolean;
        last: boolean;
    };
    protected resValue: {
        data: any;
        total?: number;
    };
    constructor(key: string, config?: ResponseViewConfigType);
    protected resetObjValue(): any;
    protected resetViewValue(): {
        reqPage: number;
        reqLoading: boolean;
        empty: boolean;
        last: boolean;
    };
    get showLoading(): any;
    get hideLoading(): any;
    get showNavigationBarLoading(): any;
    get hideNavigationBarLoading(): any;
    get startPullDownRefresh(): any;
    get stopPullDownRefresh(): any;
    protected get reqLoading(): boolean;
    protected set reqLoading(state: boolean);
    protected get reqPage(): number;
    protected set reqPage(page: number);
    protected get empty(): boolean;
    protected set empty(state: boolean);
    protected get last(): boolean;
    protected set last(state: boolean);
    get clear(): boolean;
    /**
     * 发起 GET 请求获取列表数据
     *
     * @param {Function} sendRequest 发送请求函数，接收 ResponseView 传入的分页
     * @param {Function|undefined|null} successCallback 请求成功后的回调函数
     * @param {Function|undefined|null} failCallback 请求失败后的回调函数
     * @param {boolean} reachBottom 是否正在执行页面上拉触底事件
     */
    fetchList(sendRequest: Function, successCallback?: Function | null, failCallback?: Function | null, reachBottom?: boolean): Promise<void>;
    /**
     * 发起 GET 请求获取数据
     *
     * @param {Function} sendRequest 发送请求函数
     * @param {Function|undefined|null} successCallback 请求成功后的回调函数
     * @param {Function|undefined|null} failCallback 请求失败后的回调函数
     */
    fetch(sendRequest: Function, successCallback?: Function | null, failCallback?: Function | null): Promise<void>;
    protected common(sendRequest: Function, successCallback?: Function | null, failCallback?: Function | null): Promise<void>;
    /**
     * 发起 POST 请求新增数据
     *
     * @param {Function} sendRequest 发送请求函数
     * @param {Function|undefined|null} successCallback 请求成功后的回调函数
     * @param {Function|undefined|null} failCallback 请求失败后的回调函数
     */
    post(sendRequest: Function, successCallback?: Function | null, failCallback?: Function | null): Promise<void>;
    /**
     * 发起 PUT 请求更新数据
     *
     * @param {Function} sendRequest 发送请求函数
     * @param {Function|undefined|null} successCallback 请求成功后的回调函数
     * @param {Function|undefined|null} failCallback 请求失败后的回调函数
     */
    put(sendRequest: Function, successCallback?: Function | null, failCallback?: Function | null): void;
    /**
     * 发起 DELETE 请求删除数据
     *
     * @param {Function} sendRequest 发送请求函数
     * @param {Function|undefined|null} successCallback 请求成功后的回调函数
     * @param {Function|undefined|null} failCallback 请求失败后的回调函数
     */
    delete(sendRequest: Function, successCallback?: Function | null, failCallback?: Function | null): void;
}
