import Check from '../helper/check'

// only for weapp

const check = new Check()

function exception(handle: any) {
  let wx = (<any>window)['wx'] ?? null

  if (check.wx() && wx) {
    return handle && check.fun(handle) && handle(wx)
  } else {
    throw Error('This tool only for weapp!')
  }
}

export function wx_clone_deep(value: any): any {
  return exception(() => JSON.parse(JSON.stringify(value)))
}

export function wx_dataset(e: any): any {
  return exception(() => e?.currentTarget?.dataset ?? null)
}

export function wx_promisify(fn: Function) {
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

export function wx_window_width(): number {
  return exception((wx: any) => parseInt(wx.getSystemInfoSync().windowWidth || 0))
}

export function wx_window_height(): number {
  return exception((wx: any) => parseInt(wx.getSystemInfoSync().windowHeight || 0))
}

export function wx_window_pixel_ratio(): number {
  return exception((wx: any) => parseInt(wx.getSystemInfoSync().pixelRatio || 0))
}

export function wx_image_info_sync(path: string) {
  return exception((wx: any) => wx_promisify(wx.getImageInfo)({ src: path }))
}

export function wx_file_info_sync(path: string) {
  return exception((wx: any) => wx_promisify(wx.getFileInfo)({ filePath: path }))
}