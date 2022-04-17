//伪装设备ID
common.hookAllMethods('android.provider.Settings.Secure', 'getString', function (param) {
    param.setResult('test1');
});
//伪装设备型号
common.setStaticObjectField('android.os.Build', 'DEVICE', 'test2');
common.setStaticObjectField('android.os.Build', 'PRODUCT', 'test2');
common.setStaticObjectField('android.os.Build', 'SERIAL', 'test2');
common.setStaticObjectField('android.os.Build', 'MODEL', 'test2');
common.setStaticObjectField('android.os.Build', 'BRAND', 'test2');
common.setStaticObjectField('android.os.Build', 'HARDWARE', 'test2');
common.setStaticObjectField('android.os.Build', 'MANUFACTURER', 'test2');
//其它
common.hookAllMethods('android.os.SystemProperties', 'get', function (param) {
    //...
});
//伪装IMEI
common.hookAllMethods('android.telephony.TelephonyManager', 'getDeviceId', function (param) {
    param.setResult('test3');
});
//伪装ICCID
common.hookAllMethods('android.telephony.TelephonyManager', 'getSimSerialNumber', function (param) {
    param.setResult('test4');
});
//伪装IMSI
common.hookAllMethods('android.telephony.TelephonyManager', 'getSubscriberId', function (param) {
    param.setResult('test5');
});
//伪装手机网络
common.hookAllMethods('android.telephony.TelephonyManager', 'getNetworkType', function (param) {
    //0:没有网络
    //1:wifi连接
    //2:2G
    //3:3G
    //4:4G
    //5:手机流量
    param.setResult(java.lang.Integer.valueOf('1'));
});
//伪装wifi状态
common.hookAllMethods('android.net.wifi.WifiManager', 'getWifiState', function (param) {
    //0:正在关闭
    //1:已关闭
    //2:正在开启
    //3:已开启
    //4:未知
    param.setResult(java.lang.Integer.valueOf('3'));
});
//伪装wifi_ssid
common.hookAllMethods('android.net.wifi.WifiInfo', 'getSSID', function (param) {
    param.setResult('test6');
});
