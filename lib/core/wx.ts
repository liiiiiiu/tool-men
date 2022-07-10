import Check from '../helper/check'

const check = new Check()

function exception(handle: any) {
  try {
    return handle && check.fun(handle) && handle()
  } catch (error: any) {
    throw Error(error || 'This tool only for weapp!')
  }
}

/**
 * Only for weapp!
 *
 * Deep clone value.
 *
 * @param {any}value The value to clone.
 *
 * @returns {any} The copied value.
 */
export function wx_clone_deep(value: any): any {
  return exception(() => JSON.parse(JSON.stringify(value)))
}

/**
 * Only for weapp!
 *
 * Parse the dataset in e.
 *
 * @param {Object} e Weapp `e` value.
 *
 * @returns {any} `e.currentTarget.dataset`.
 */
export function wx_dataset(e: any): any {
  return exception(() => e?.currentTarget?.dataset ?? null)
}

/**
 * Only for weapp!
 *
 * Make weapp API promisify.
 *
 * @param {Function} fn Weapp API.
 *
 * @returns {Function} Promisify API.
 */
export function wx_promisify(fn: Function): Function {
  return exception(() => function (obj: any) {
    let args: any[] = [],
      len = arguments.length - 1

    while (len-- > 0) {
      args[len] = arguments[len + 1]
    }

    if (obj === undefined) obj = {}

    return new Promise((resolve, reject) => {
      obj.success = (res: any) => {
        resolve(res)
      }
      obj.fail = (err: any) => {
        reject(err)
      }

      fn.apply(null, [obj].concat(args))
    })
  })
}

/**
 * Only for weapp!
 *
 * Get window width.
 *
 * @returns {number} Window width.
 */
export function wx_window_width(): number {
  // @ts-ignore
  return exception(() => parseInt(wx.getSystemInfoSync().windowWidth || 0))
}

/**
 * Only for weapp!
 *
 * Get window height.
 *
 * @returns {number} Window height.
 */
export function wx_window_height(): number {
  // @ts-ignore
  return exception(() => parseInt(wx.getSystemInfoSync().windowHeight || 0))
}

/**
 * Only for weapp!
 *
 * Get window pixel ratio.
 *
 * @returns {number} Window pixel ratio.
 */
export function wx_window_pixel_ratio(): number {
  // @ts-ignore
  return exception(() => parseInt(wx.getSystemInfoSync().pixelRatio || 0))
}

/**
 * Only for weapp!
 *
 * Get image info sync.
 *
 * @returns {Object} Image info.
 */
export function wx_image_info_sync(path: string) {
  // @ts-ignore
  return exception(() => wx_promisify(wx.getImageInfo)({ src: path }))
}

/**
 * Only for weapp!
 *
 * Get file info sync.
 *
 * @returns {Object} File info.
 */
export function wx_file_info_sync(path: string) {
  // @ts-ignore
  return exception(() => wx_promisify(wx.getFileInfo)({ filePath: path }))
}

/**
 * Only for weapp!
 */
class WxRouter {
  protected _pages: string[]
  protected _tabbars: string[]
  protected _routes: {
    [key: string]: string
  }
  protected _route: {
    to: string,
    from: string,
    params: any
  } | null

  static TABBAR_TAG: string
  static RELAUNCH_TAG: string

  constructor() {
    // @ts-ignore
    this._pages = (__wxConfig && __wxConfig.pages) || []
    // @ts-ignore
    this._tabbars = (__wxConfig && __wxConfig.tabBar && __wxConfig.tabBar.list && __wxConfig.tabBar.list.length && __wxConfig.tabBar.list.map(_ => _.pagePath)) || []

    this._routes = {}
    this._route = null

    WxRouter.TABBAR_TAG = '@tabbar'
    WxRouter.RELAUNCH_TAG = '@relaunch'

    this.pages2Routes()
  }

  /**
   * Get the Collections of the `routes`.
   */
  get routes() {
    const temp: { [key: string]: string } = {}

    Object.keys(this._routes).forEach((key: string) => {
      if (key.indexOf(WxRouter.TABBAR_TAG) === -1) {
        temp[key] = this._routes[key]
      }
    })

    return temp
  }

  /**
   * Get the Collections of the `route`.
   */
  get route() {
    return this._route
  }

  protected firstUpper(value: string): string {
    value = value + ''
    return value.length > 1 ? value[0].toUpperCase() + value.slice(1).toLowerCase() : value.toUpperCase()
  }

  protected path2Join(path: string): string {
    if (path[0] === '/') {
      path = path.substring(1)
    }

    let arrPath = path.split('/')
    arrPath.splice(arrPath.length - 1, 1)
    arrPath = arrPath.map(_ => this.firstUpper(_))

    return arrPath.join('')
  }

  protected path2ConcatParam(path: string, params?: {
    [key: string]: any
  } | null): string {
    if (!path || !params || !check.plainObj(params)) {
      return path
    }

    // If the `path` contains these characters,
    // it is considered that the `path` has params,
    // so, return the `path` directly.
    if (path.indexOf('?') > 0
      || path.indexOf('&') > 0
      || path.indexOf('=') > 0) {
      return path
    }

    let newPath: string = path + '?'

    // concat params
    Object.keys(params).forEach((key, index, keys) => {
      newPath += `${key}=${params[key]}${index !== keys.length - 1 ? '&' : ''}`
    })

    return newPath
  }

  // Check whether the current path is a tabbar page or call `wx.relaunch`
  protected path2Check(path: string): {
    newPath: string,
    isTabbar: boolean,
    isRelaunch: boolean
  } {
    path = path + ''

    // `routes` does not contain `RELAUNCH_TAG`,
    // so, after handle `isRelaunch`, remove `RELAUNCH_TAG` from `path`.
    let isRelaunch: boolean = path.indexOf(WxRouter.RELAUNCH_TAG) > -1
    if (isRelaunch) {
      path = path.replace(WxRouter.RELAUNCH_TAG, '')
    }

    // find a matching path from the `routes` after `isRelaunch` settled.
    let newPath: string = this._routes[path] || this._routes[path + WxRouter.TABBAR_TAG] || path

    // checks if the `path` is a tabbar page.
    let isTabbar: boolean = (!!this._routes[path + WxRouter.TABBAR_TAG] || path.indexOf(WxRouter.TABBAR_TAG) > -1)

    return { newPath: newPath.replace(WxRouter.TABBAR_TAG, ''), isTabbar, isRelaunch }
  }

  protected container4Callback(
    successCallback?: Function,
    failCallback?: Function,
    completeCallback?: Function
  ): {
    success: Function,
    fail: Function,
    complete: Function
  } {
    return {
      success: (res: any) => {
        successCallback && check.fun(successCallback) && successCallback(res)
      },
      fail: (err: any) => {
        failCallback && check.fun(failCallback) && failCallback(err)
      },
      complete: (res: any) => {
        completeCallback && check.fun(completeCallback) && completeCallback(res)
      },
    }
  }

  protected log4Route(path: string | number, params?: {
    [key: string]: any
  } | null) {
    if (!path) return

    // @ts-ignore
    const pages = getCurrentPages()
    const page = pages[pages.length - 1]

    this._route = {
      from: page.route,
      to: typeof path === 'number'
        ? pages[pages.length - path < 0 ? 0 : pages.length - path].route
        : path,
      params: params
    }
  }

  protected pages2Routes() {
    let tabbarRoutes: string[] = []
    if (this._tabbars.length) {
      let i = -1, l = this._tabbars.length
      while (++i < l) {
        tabbarRoutes.push(this.path2Join(this._tabbars[i]))
      }
    }

    // build routes
    if (this._pages.length) {
      let i = 0, l = this._pages.length
      for (; i < l; i++) {
        let route, page
        route = page = this._pages[i]

        route = this.path2Join(route)

        Object.assign(this._routes, {
          [route]: '/' + page
        })
        // if cur page is a tabbar page,
        // join a `TABBAR_TAG` on the key,
        // used later to know whether it is a tabbar page.
        if (tabbarRoutes.includes(route)) {
          Object.assign(this._routes, {
            [route + WxRouter.TABBAR_TAG]: '/' + page
          })
        }
      }
    } else {
      console.warn('[wx_router] Unable to get `pages` from app.json, url is needed!')
    }
  }

  /**
   * Call wx.navigateTo or wx.switchTab.
   *
   * Will automatically use `wx.navigateTo` or `wx.switchTab`.
   *
   * @param {string} path The path to jump to.
   * @param {object} params Parameters passed to the next page.
   * @param {Function} successCallback Success callback.
   * @param {Function} failCallback Fail callback.
   * @param {Function} completeCallback Complete callback.
   *
   * @example
   *
   * // You can use the shorthand of the `path`, and the specific path will be build automatically(not include the last level).
   * // `/pages/logs/logs` => `PagesLogs`
   * wx_router.push('PagesLogs')
   *
   * // Use the specific path.
   * wx_router.push('/pages/logs/logs')
   *
   * // Use the `routes`.
   * wx_router.push(wx_router.routes.PagesLogs)
   */
  public push(
    path: string,
    params?: object | null,
    successCallback?: Function,
    failCallback?: Function,
    completeCallback?: Function
  ) {
    if (!path) return

    const { newPath, isTabbar } = this.path2Check(path);

    // console.log('push', newPath, path, isTabbar);

    this.log4Route(newPath, params);

    // @ts-ignore
    ((!isTabbar ? wx.navigateTo : wx.switchTab) as Function)({
      url: !isTabbar ? this.path2ConcatParam(newPath, params) : newPath,

      ...this.container4Callback(successCallback, failCallback, completeCallback)
    })
  }

  /**
   * Call wx.redirectTo or wx.reLaunch.
   *
   * @param {string} path The page to jump to.
   * @param {object} params Parameters passed to the next page.
   * @param {Function} successCallback Success callback.
   * @param {Function} failCallback Fail callback.
   * @param {Function} completeCallback Complete callback.
   *
   * @example
   *
   * // Use `wx.redirectTo`.
   * // You can use the shorthand of the `path`, and the specific path will be build automatically(not include the last level).
   * // `/pages/logs/logs` => `PagesLogs`
   * wx_router.replace('PagesLogs')
   *
   * // Add `@relaunch` tag to use `wx.reLaunch`.
   * wx_router.replace(`PagesLogs@relaunch`, null, (res: any) => {console.log(res)})
   *
   * // Use the specific path.
   * wx_router.replace('/pages/logs/logs')
   *
   * // Use the `routes`.
   * wx_router.replace(wx_router.routes.PagesLogs)
   */
  public replace(
    path: string,
    params?: object | null,
    successCallback?: Function,
    failCallback?: Function,
    completeCallback?: Function) {
    if (!path) return

    const { newPath, isTabbar, isRelaunch } = this.path2Check(path);

    // console.log('replace', newPath, isTabbar, isRelaunch);

    this.log4Route(newPath, params);

    // @ts-ignore
    ((!isRelaunch ? wx.redirectTo : wx.reLaunch) as Function)({
      url: !isTabbar ? this.path2ConcatParam(newPath, params) : newPath,

      ...this.container4Callback(successCallback, failCallback, completeCallback)
    })
  }

  /**
   * Exactly like wx.navigateBack.
   *
   * @param {number} delta The number of pages to return-back.
   * @param {Function} successCallback Success callback.
   * @param {Function} failCallback Fail callback.
   * @param {Function} completeCallback Complete callback.
   *
   * @example
   *
   * wx_router.back()
   *
   * wx_router.back(2, () => (res: any) => {console.log(res)})
   */
  public back(
    delta?: number,
    successCallback?: Function,
    failCallback?: Function,
    completeCallback?: Function
  ) {
    if (!check.num(delta) || (delta && delta < 1)) {
      delta = 1
    }

    this.log4Route(delta || 1, null);

    // @ts-ignore
    wx.navigateBack({
      delta,

      ...(this.container4Callback(successCallback, failCallback, completeCallback) as any)
    })
  }
}

/**
 * Router for Weapp.
 */
export const wx_router: {
    routes: { [key: string]: string }
    route: {
      to: string,
      from: string,
      params: any
    }
    push: Function
    replace: Function
    back: Function
  } = exception(() => {
  return new WxRouter()
})