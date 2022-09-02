# Tool Men

Tool Men! 工具“人” ~

## Installing

```bash
npm install tool-men --save
```

## Example

```javascript
// you can import it when you need
import { is_string, to_number, wow_array } from 'tool-men'

// or use any name to import all functions
import * as utils from 'tool-men'
```

### wow

#### wow_array

**Wow array, better array!**

```javascript
let arr = wow_array([1, 2, 3])
arr[0] // 1
arr[-1] // 3
arr.first // 1
arr.last // 3
arr['1:'] // [2, 3]
arr['1:2'] // [2]
arr[':'] // [1, 2, 3]
arr['1:3:2'] // [2]
arr['::'] // [1, 2, 3]
arr['::-1'] // [3, 2, 1]
arr.min // 1
arr.max // 3
arr.remove(0, val => val === 3) // [2]
arr.shuffle // [1, 3, 2]

let nestArr = wow_array([
  { id: 1, parent_id: null },
  { id: 2, parent_id: 1 },
  { id: 3, parent_id: 1 },
  { id: 4, parent_id: 2 },
  { id: 5, parent_id: 4 }
])
nestArr.nest(null, 'parent_id')
```

### is

Check the type of value.

|     is_   |     usage    | result |
|    ---    |      ---     |  ----  |
| is_string | is_string(0) |  false |
| is_number | is_number(0) |  true  |
| is_integer | is_integer(0) |  true |
| is_positive_integer | is_positive_integer(-1) |  false |
| is_float | is_float(0) |  false |
| is_positive_float | is_positive_float(1.1) |  true |
| is_boolean | is_boolean(0) |  false |
| is_array | is_array([]) |  true |
| is_array_like | is_array_like([]) |  true |
| is_object | is_object([]) / is_object({}) |  true / true |
| is_plain_object | is_object([]) / is_object({}) |  false / true |
| is_object_like | is_object_like({}) |  true |
| is_symbol | is_symbol(0) |  false |
| is_function | is_function(0) |  false |
| is_NaN | is_NaN(0) |  false |
| is_undefined | is_undefined(0) |  false |
| is_null | is_null(undefined) |  false |
| is_length | is_length([1, 2].length) |  true |
| is_arguments | is_arguments(0) |  false |
| is_error | is_error(0) |  false |
| is_leap_year | is_leap_year(2022) |  false |
| is_cn_phone_number | is_cn_phone_number(18888888888) |  true |
| is_email | is_email('123@qq.com') |  true |
| is_url | is_url('https://www.abc.com') |  true |

### to

Convert value to the needed.

|     to_   |     usage    | result |
|    ---    |      ---     |  ----  |
| to_string | to_string(0) |  '0' |
| to_number | to_number('1') |  1  |
| to_integer | to_integer(1.6, false) / to_integer(1.6, true) |  1 / 2 |
| to_float | to_float(1.256, 1, false) / to_float(1.256, 2, true) |  '1.2' / '1.26' |
| to_cn_cent | to_cn_cent(190.50) |  19050 |
| to_boolean | to_boolean(0) | false |
| to_array | to_array(0) / to_array('1, 2, 3') | [0] / [1, 2, 3] |
| to_symbol | to_symbol(0) | Symbol(0) |
| to_undefined | to_undefined() | undefined |
| to_null | to_null |  null |
| to_cn_pinyin | to_cn_pinyin('你好') | ['NH'] |

### date

Used for date formatting.

|     d_   |     usage    | result |
|    ---    |      ---     |  ----  |
| d_time | d_time() |  1656571581142 |
| d_format | d_format() |  '2022-06-30 14:45:15' |
| d_format_YMD | d_format_YMD() |  '2022-06-30'  |

### gen

Generate some useful data.

|     gen_   |     usage    | result |
|    ---    |      ---     |  ----  |
| gen_uuid | gen_uuid() |  '3e479fc2-ab2e-42bc-85f3-c592be4e0cb4' |
| gen_random_integer | gen_random_integer() / gen_random_integer(20, 30) |  3 / 25 |

### mock

Get the mock data needed in development quickly.

**Depend on MockJS.**

[MockJS](http://mockjs.com/)

|     mock_   |     usage    | result |
|    ---    |      ---     |  ----  |
| mock_ | mock_('@string("lower", 1, 3)' |  'wtc' |
| mock_id | mock_id()  |  23 |
| mock_unique_id | mock_unique_id() |  '320000200608168153' |
| mock_image | mock_image() |  'http://dummyimage.com/100x100' |
| mock_title | mock_title() |  '养去全对快' |
| mock_avatar | mock_avatar() |  'http://dummyimage.com/100x100' |
| mock_nick_name | mock_nick_name() |  '薛强' |
| mock_email | mock_email() |  'y.adwjjhbmn@qq.com' |
| mock_province | mock_province() |  '安徽省' |
| mock_city | mock_city() |  '萍乡市' |
| mock_district | mock_district() |  '都昌县' |
| mock_address | mock_address() |  '山东省 烟台市 蓬莱市' |
| mock_url | mock_url() |  'http://ovmqzolocc.la/ecvrv' |
| mock_ip | mock_ip() |  '202.40.46.57' |
| mock_created_at | mock_created_at() | '1998-12-22 17:15:31' |

### wx

**Only for weapp.**

|     wx_   |     usage    | result |
|    ---    |      ---     |  ----  |
| wx_clone_deep | wx_clone_deep([1, 2, 3]) |  [1, 2, 3] |
| wx_dataset | wx_dataset(e) |  e.currentTarget.dataset => {} |
| wx_promisify | wx_promisify(wx.getImageInfo) |   |
| wx_window_width | wx_window_width() | 375  |
| wx_window_height | wx_window_height() |  555 |
| wx_window_pixel_ratio | wx_window_pixel_ratio() |  2 |
| wx_image_info_sync | wx_image_info_sync(path) |   |
| wx_file_info_sync | wx_file_info_sync(path) |   |

#### wx_router

**Router for Weapp.**

```javascript
import { wx_router } from 'tool-men'

// Get the Collections of the `routes`.
// Which includes all pages in your preject.
wx_router.routes
// {
//   PagesIndex: "/pages/index/index"
//   PagesLogs: "/pages/logs/logs"
//   PagesMyIndex: "/pages/my/index/index"
// }

// Get the Collections of the `route`.
wx_router.route
// {
//   from: "pages/index/index"
//   params: null
//   to: "/pages/logs/logs"
// }

// Call wx.navigateTo or wx.switchTab.
// Will automatically use `wx.navigateTo` or `wx.switchTab`.

// You can use the shorthand of the `path`, and the specific path will be build automatically(not include the last level).
// `/pages/logs/logs` => `PagesLogs`
wx_router.push('PagesLogs')

// Use the specific path.
wx_router.push('/pages/logs/logs')

// Use the `routes`.
wx_router.push(wx_router.routes.PagesLogs)


// Call wx.redirectTo or wx.reLaunch.

// Use `wx.redirectTo`.
// You can use the shorthand of the `path`, and the specific path will be build automatically(not include the last level).
// `/pages/logs/logs` => `PagesLogs`
wx_router.replace('PagesLogs')

// Add `@relaunch` tag to use `wx.reLaunch`.
wx_router.replace(`PagesLogs@relaunch`, null, (res: any) => {console.log(res)})

// Use the specific path.
wx_router.replace('/pages/logs/logs')

// Use the `routes`.
wx_router.replace(wx_router.routes.PagesLogs)


// Exactly like wx.navigateBack.

wx_router.back()

wx_router.back(2, () => (res: any) => {console.log(res)})
```

#### ResponseView

在发送请求到后端并获得响应数据后，自动处理、控制与 wxml 中的数据绑定；

这里的数据绑定包括 “渲染数据” “是否为空数据” “全部数据是否加载完毕” “分页数” 等;

并且可以自动处理下拉刷新，触底加载的相关逻辑，完成数据从请求、加载、处理到最终渲染的一整套逻辑。

```javascript
import { ResponseView, ResponseViewType } from 'tool-men'
import { getList, getUser, createUser, updateUser, deleteUser } from '../models/user'

let responseViewForList: ResponseViewType
let responseViewForUser: ResponseViewType

Page({
  data: {
    list: [],
    user: {}
  },

  async onLoad() {
    // ResponseView的实例化必须在 Page 函数体内
    responseViewForList = new ResponseView('list')
    responseViewForUser = new ResponseView('user')

    // 获取列表数据
    await responseViewForList.fetchList(
      async (page: number) => await getList({ page })
    )

    // 获取详情数据
    await responseViewForUser.fetch(
      async () => await getUser()
    )
  },

  // 下拉刷新
  async onPullDownRefresh() {
    await responseViewForList.fetchList(
      async (page: number) => await getList({ page })
    )

    await responseViewForUser.fetch(
      async () => await getUser()
    )

    responseViewForList.stopPullDownRefresh
  },

  // 触底加载
  async onReachBottom() {
    await responseViewForList.fetchList(
      async (page: number) => await getList({ page }),
      null,
      null,
      true
    )
  },

  async createDemo() {
    // 处理 post 请求
    await responseViewForUser.post(() => {
      return await createUser({})
    }, () => {
      console.log('create user success')
    }, () => {
      console.log('create user fail')
    })
  },

  async updateDemo() {
    // 处理 put 请求
    await responseViewForUser.put(
      () => await updateUser({})
    )
  },

  async deleteDemo() {
    // 处理 delete 请求
    await responseViewForUser.delete(
      () => await deleteUser({})
    )
  },
})
```

```html
<!-- ResponseView 与 wxml 的交互 -->
<view class="page-container">
  <view class="page-list-for-my-message">
    <view wx:if="{{ list && list.length }}" class="message-list">
      <view wx:for="{{ list }}" wx:key="index" class="message-list-item">
        <message-item item="{{ item }}" />
      </view>
    </view>
    <!-- `$messageList` 由 ResponseView 生成 -->
    <van-empty wx:if="{{ $list.empty }}" description="暂无数据" />
    <van-divider wx:if="{{ $list.last }}" contentPosition="center">已经到底了</van-divider>
  </view>
</view>
```

```javascript
// model/user

// 获取接口数据后按如下格式返回
// ResponseView 在拿到 `data` 值后会进行二次处理
export async funtion getList() {
  return {
    data: [/* ... */],
    total: 2
  }
}

export async funtion getUser() {
  return {
    data: {/* ... */},
    total: 1
  }
}

export async funtion createUser() {
  return {
    data: true,
  }
}

export async funtion updateUser() {
  return {
    data: true
  }
}

export async funtion deleteUser() {
  return {
    data: true
  }
}
```