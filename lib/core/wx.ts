// only for weapp

export function wx_clone_deep(value: any): any {
  return JSON.parse(JSON.stringify(value))
}

export function wx_dataset(value: any): any {
  return value?.currentTarget?.dataset ?? null
}

export function wx_promisify(fn: Function) {
  return function (obj: any) {
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
  }
}

export function wx_window_width(): number {
  // @ts-ignore
  return parseInt(wx?.getSystemInfoSync()?.windowWidth || 0)
}

export function wx_window_height(): number {
  // @ts-ignore
  return parseInt(wx?.getSystemInfoSync()?.windowHeight || 0)
}

export function wx_window_pixel_ratio(): number {
  // @ts-ignore
  return parseInt(wx?.getSystemInfoSync()?.pixelRatio || 0)
}

export function wx_image_info_sync(path: string) {
  if (!path) return

  // @ts-ignore
  return wx_promisify(wx?.getImageInfo)({ src: path })
}

export function wx_file_info_sync(path: string) {
  if (!path) return

  // @ts-ignore
  return wx_promisify(wx?.getFileInfo)({ filePath: path })
}