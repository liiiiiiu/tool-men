import * as checker from './core/is'
import * as transformer from './core/to'
import * as generator from './core/gen'
import * as datetTransformer from './core/date'
import * as weapp from './core/wx'
import * as enhancer from './core/wow'
import * as mocker from './core/mock'

export const {
  is_string,
  is_number,
  is_integer,
  is_positive_integer,
  is_float,
  is_positive_float,
  is_boolean,
  is_array,
  is_array_like,
  is_object,
  is_plain_object,
  is_object_like,
  is_symbol,
  is_function,
  is_NaN,
  is_undefined,
  is_null,
  is_length,
  is_arguments,
  is_error,
  is_leap_year,
  is_cn_phone_number,
  is_email,
  is_url
} = checker

export const {
  to_string,
  to_number,
  to_integer,
  to_float,
  to_cn_cent,
  to_boolean,
  to_array,
  to_symbol,
  to_undefined,
  to_null,
  to_cn_pinyin
} = transformer

export const {
  gen_uuid,
  gen_random_integer,
} = generator

export const {
  d_time,
  d_format,
  d_format_YMD
} = datetTransformer

export const {
  wx_clone_deep,
  wx_dataset,
  wx_promisify,
  wx_window_width,
  wx_window_height,
  wx_window_pixel_ratio,
  wx_image_info_sync,
  wx_file_info_sync,
  wx_router
} = weapp

export const {
  wow_array
} = enhancer

export const {
  mock_,
  mock_id,
  mock_unique_id,
  mock_image,
  mock_title,
  mock_avatar,
  mock_nick_name,
  mock_email,
  mock_province,
  mock_city,
  mock_district,
  mock_address,
  mock_url,
  mock_ip,
  mock_created_at,
} = mocker