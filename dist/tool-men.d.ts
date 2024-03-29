import * as checker from './core/is';
import * as transformer from './core/to';
import * as generator from './core/gen';
import * as datetTransformer from './core/date';
import * as weapp from './core/wx';
import * as enhancer from './core/wow';
import * as mocker from './core/mock';
export declare const is_string: typeof checker.is_string, is_number: typeof checker.is_number, is_integer: typeof checker.is_integer, is_positive_integer: typeof checker.is_positive_integer, is_float: typeof checker.is_float, is_positive_float: typeof checker.is_positive_float, is_boolean: typeof checker.is_boolean, is_array: typeof checker.is_array, is_array_like: typeof checker.is_array_like, is_object: typeof checker.is_object, is_plain_object: typeof checker.is_plain_object, is_object_like: typeof checker.is_object_like, is_symbol: typeof checker.is_symbol, is_function: typeof checker.is_function, is_NaN: typeof checker.is_NaN, is_undefined: typeof checker.is_undefined, is_null: typeof checker.is_null, is_length: typeof checker.is_length, is_arguments: typeof checker.is_arguments, is_error: typeof checker.is_error, is_leap_year: typeof checker.is_leap_year, is_cn_phone_number: typeof checker.is_cn_phone_number, is_email: typeof checker.is_email, is_url: typeof checker.is_url;
export declare const to_string: typeof transformer.to_string, to_number: typeof transformer.to_number, to_integer: typeof transformer.to_integer, to_float: typeof transformer.to_float, to_cn_cent: typeof transformer.to_cn_cent, to_boolean: typeof transformer.to_boolean, to_array: typeof transformer.to_array, to_symbol: typeof transformer.to_symbol, to_undefined: typeof transformer.to_undefined, to_null: typeof transformer.to_null, to_cn_pinyin: typeof transformer.to_cn_pinyin;
export declare const gen_uuid: typeof generator.gen_uuid, gen_random_integer: typeof generator.gen_random_integer;
export declare const d_time: typeof datetTransformer.d_time, d_format: typeof datetTransformer.d_format, d_format_YMD: typeof datetTransformer.d_format_YMD;
export declare const wx_clone_deep: typeof weapp.wx_clone_deep, wx_dataset: typeof weapp.wx_dataset, wx_promisify: typeof weapp.wx_promisify, wx_window_width: typeof weapp.wx_window_width, wx_window_height: typeof weapp.wx_window_height, wx_window_pixel_ratio: typeof weapp.wx_window_pixel_ratio, wx_image_info_sync: typeof weapp.wx_image_info_sync, wx_file_info_sync: typeof weapp.wx_file_info_sync, wx_router: {
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
}, ResponseView: typeof weapp.ResponseView;
export declare const wow_array: typeof enhancer.wow_array;
export declare const mock_: typeof mocker.mock_, mock_id: typeof mocker.mock_id, mock_unique_id: typeof mocker.mock_unique_id, mock_image: typeof mocker.mock_image, mock_title: typeof mocker.mock_title, mock_avatar: typeof mocker.mock_avatar, mock_nick_name: typeof mocker.mock_nick_name, mock_email: typeof mocker.mock_email, mock_province: typeof mocker.mock_province, mock_city: typeof mocker.mock_city, mock_district: typeof mocker.mock_district, mock_address: typeof mocker.mock_address, mock_url: typeof mocker.mock_url, mock_ip: typeof mocker.mock_ip, mock_created_at: typeof mocker.mock_created_at;
export type { ResponseViewType, ResponseViewConfigType } from './core/wx';
