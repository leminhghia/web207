[{
    "Id": 25106,
    "Text": "Có mấy loại Service?",
    "Marks": 1,
    "AnswerId": 104121,
    "Answers": [{
            "Id": 104118,
            "Text": "3"
        },
        {
            "Id": 104119,
            "Text": "4"
        },
        {
            "Id": 104120,
            "Text": "1"
        },
        {
            "Id": 104121,
            "Text": "2"
        }
    ]
}, {
    "Id": 25107,
    "Text": "Trong IntentService, phương thức onHandlerIntent sẽ được tự động gọi trong phương thức nào?",
    "Marks": 1,
    "AnswerId": 104124,
    "Answers": [{
        "Id": 104122,
        "Text": "onServiceConnected()"
    }, {
        "Id": 104123,
        "Text": "onServiceDisConnected()"
    }, {
        "Id": 104124,
        "Text": "onStartCommand()"
    }, {
        "Id": 104125,
        "Text": "onBind()"
    }]
}, {
    "Id": 25108,
    "Text": "Khi nào phương thức ServiceConnection.onServiceConnected được gọi?",
    "Marks": 1,
    "AnswerId": 104126,
    "Answers": [{
        "Id": 104126,
        "Text": "Sau khi một thành phần gọi Context.startService()"
    }, {
        "Id": 104127,
        "Text": "Sau khi một thành phần gọi Context.bindService()"
    }, {
        "Id": 104128,
        "Text": "Sau khi BroadcastReceiver nhận một Intent được gửi bởi Service"
    }, {
        "Id": 104129,
        "Text": "Khi một Service gọi Context.startActivity()"
    }]
}, {
    "Id": 25109,
    "Text": "Phương thức Service.stopSelf(int startId) có tham số kiểu int. Tham số này dùng để làm gì?",
    "Marks": 1,
    "AnswerId": 104132,
    "Answers": [{
        "Id": 104130,
        "Text": "Nếu startId khác 0, Service sẽ bị hủy một cách vô điều kiện"
    }, {
        "Id": 104131,
        "Text": "Tham số miêu tả số miliseconds bị trì hoãn trước khi Service bị hủy"
    }, {
        "Id": 104132,
        "Text": "Là start identifier gần nhất nhận được bởi lời gọi onStart(Intent, int)"
    }, {
        "Id": 104133,
        "Text": "Được sử dụng để dừng Service nếu Service đang chạy trong process id với process id bằng giá trị startid"
    }]
}, {
    "Id": 25110,
    "Text": "Câu nào là đúng khi đề cập đến Service?",
    "Marks": 1,
    "AnswerId": 104137,
    "Answers": [{
        "Id": 104134,
        "Text": "Các ứng dụng khác nhau không thể truy cập đến các Service của chính nó"
    }, {
        "Id": 104135,
        "Text": "Tất cả phương án đều đúng"
    }, {
        "Id": 104136,
        "Text": "Lớp Service luôn luôn được truy cập bởi tất cả ứng dụng Android khác cài trên thiết bị"
    }, {
        "Id": 104137,
        "Text": "Service có thể chạy nền vô hạn kể cả khi thành phần khởi tạo Service đã bị hủy"
    }]
}, {
    "Id": 25111,
    "Text": "Trong IntentService, onBind mặc định trả lại giá trị nào?",
    "Marks": 1,
    "AnswerId": 104139,
    "Answers": [{
        "Id": 104138,
        "Text": "-1"
    }, {
        "Id": 104139,
        "Text": "null"
    }, {
        "Id": 104140,
        "Text": "0"
    }, {
        "Id": 104141,
        "Text": "\"\""
    }]
}, {
    "Id": 25112,
    "Text": "Phương thức stopSelf dùng để làm gì?",
    "Marks": 1,
    "AnswerId": 104145,
    "Answers": [{
        "Id": 104142,
        "Text": "Dừng thông báo notification tới người dùng"
    }, {
        "Id": 104143,
        "Text": "Dừng chương trình"
    }, {
        "Id": 104144,
        "Text": "Dừng kết nối Service với Sqlite"
    }, {
        "Id": 104145,
        "Text": "Dừng Service"
    }]
}, {
    "Id": 25113,
    "Text": "Phương thức onStartCommand được gọi khi nào?",
    "Marks": 1,
    "AnswerId": 104149,
    "Answers": [{
        "Id": 104146,
        "Text": "Khi phương thức bindService được gọi"
    }, {
        "Id": 104147,
        "Text": "Khi phương thức stopSelf được gọi"
    }, {
        "Id": 104148,
        "Text": "Khi phương thức onBind được gọi"
    }, {
        "Id": 104149,
        "Text": "Khi phương thức startService được gọi"
    }]
}, {
    "Id": 25114,
    "Text": "Bạn nên giải phóng tài nguyên mà Service sử dụng trong phương thức nào?",
    "Marks": 1,
    "AnswerId": 104152,
    "Answers": [{
        "Id": 104150,
        "Text": "onPause"
    }, {
        "Id": 104151,
        "Text": "pauseService"
    }, {
        "Id": 104152,
        "Text": "onDestroy"
    }, {
        "Id": 104153,
        "Text": "startService"
    }]
}, {
    "Id": 25115,
    "Text": "Để hủy Service dùng phương thức nào?",
    "Marks": 1,
    "AnswerId": 104155,
    "Answers": [{
        "Id": 104154,
        "Text": "PauseService"
    }, {
        "Id": 104155,
        "Text": "StopService"
    }, {
        "Id": 104156,
        "Text": "PauseServices"
    }, {
        "Id": 104157,
        "Text": "StopServices"
    }]
}, {
    "Id": 25116,
    "Text": "Làm thế nào để disable một Broadcast Receiver khi nó đã được đăng ký trong AndroidManifest.xml?",
    "Marks": 1,
    "AnswerId": 104161,
    "Answers": [{
        "Id": 104158,
        "Text": "Sử dụng lớp PackageReceiverManager"
    }, {
        "Id": 104159,
        "Text": "Sử dụng lớp BroadcastReceiver"
    }, {
        "Id": 104160,
        "Text": "Sử dụng lớp BroadcastReceiverManger"
    }, {
        "Id": 104161,
        "Text": "Sử dụng lớp PackageManager"
    }]
}, {
    "Id": 25117,
    "Text": "Có mấy cách phát, nhận broadcast receiver?",
    "Marks": 1,
    "AnswerId": 104163,
    "Answers": [{
        "Id": 104162,
        "Text": "1"
    }, {
        "Id": 104163,
        "Text": "2"
    }, {
        "Id": 104164,
        "Text": "4"
    }, {
        "Id": 104165,
        "Text": "3"
    }]
}, {
    "Id": 25118,
    "Text": "Khi sử dụng Intent.ACTION_BOOT_COMPLETED, hệ thống sẽ broadcast mấy lần?",
    "Marks": 1,
    "AnswerId": 104167,
    "Answers": [{
        "Id": 104166,
        "Text": "4"
    }, {
        "Id": 104167,
        "Text": "1"
    }, {
        "Id": 104168,
        "Text": "3"
    }, {
        "Id": 104169,
        "Text": "2"
    }]
}, {
    "Id": 25119,
    "Text": "Vòng đời của Broadcast Receiver bao gồm mấy phương thức?",
    "Marks": 1,
    "AnswerId": 104170,
    "Answers": [{
        "Id": 104170,
        "Text": "1"
    }, {
        "Id": 104171,
        "Text": "2"
    }, {
        "Id": 104172,
        "Text": "4"
    }, {
        "Id": 104173,
        "Text": "3"
    }]
}, {
    "Id": 25120,
    "Text": "Lệnh sau dùng để làm gì?                                                                                   \u003creceiver             android:name=\".MyCallReceiver\"             android:exported=\"false\" \u003e  \u003c/receiver\u003e",
    "Marks": 1,
    "AnswerId": 104177,
    "Answers": [{
        "Id": 104174,
        "Text": "Disable receiver MyCallReceiver"
    }, {
        "Id": 104175,
        "Text": "Khai báo MyCallReceiver là broadcast hệ thống"
    }, {
        "Id": 104176,
        "Text": "Cho phép ứng dụng Calendar của hệ thống gửi broadcast tới receiver MyCallReceiver"
    }, {
        "Id": 104177,
        "Text": "Cấm ứng dụng khác gửi broadcast tới receiver MyCallReceiver"
    }]
}, {
    "Id": 25121,
    "Text": "Nếu ứng dụng của bạn ở trạng thái foreground, bạn chỉ muốn ứng dụng chỉ nhận broadcast nhất định khi nó active, bạn phải làm gì?",
    "Marks": 1,
    "AnswerId": 104181,
    "Answers": [{
        "Id": 104178,
        "Text": "Load Intent thông qua menu hoặc Action Bar"
    }, {
        "Id": 104179,
        "Text": "Đăng ký BroadcastReceiver với mức độ ưu tiên thấp"
    }, {
        "Id": 104180,
        "Text": "Đăng ký động BroadcastReceiver với mức độ ưu tiếp thấp.Sử dụng abortBroadcast lúc runtime để ngăn cản gửi"
    }, {
        "Id": 104181,
        "Text": "Đăng ký động BroadcastReceiver trong onResume và hủy đăng ký trong onPause"
    }]
}, {
    "Id": 25122,
    "Text": "Broadcast Intent thông thường sẽ biến mất khi hệ thống xử lý xong?",
    "Marks": 1,
    "AnswerId": 104183,
    "Answers": [{
        "Id": 104182,
        "Text": "Sai"
    }, {
        "Id": 104183,
        "Text": "Đúng"
    }]
}, {
    "Id": 25123,
    "Text": "Phương thức onReceive có mấy tham số đầu vào?",
    "Marks": 1,
    "AnswerId": 104184,
    "Answers": [{
        "Id": 104184,
        "Text": "2"
    }, {
        "Id": 104185,
        "Text": "4"
    }, {
        "Id": 104186,
        "Text": "1"
    }, {
        "Id": 104187,
        "Text": "3"
    }]
}, {
    "Id": 25124,
    "Text": "Phương thức nào được sử dụng để gửi broadcast intent mà intent này sẽ không mất đi sau khi hệ thống xử lý?",
    "Marks": 1,
    "AnswerId": 104191,
    "Answers": [{
        "Id": 104188,
        "Text": "Context.sendStickyBroadcast"
    }, {
        "Id": 104189,
        "Text": "Context.sendingStickyBroadcast"
    }, {
        "Id": 104190,
        "Text": "Context.sendingStickyBroadcastIntent"
    }, {
        "Id": 104191,
        "Text": "Context.sendStickyBroadcastIntent"
    }]
}, {
    "Id": 25125,
    "Text": "Để nhận thông tin người dùng qua wifi, phải sử dụng gì?",
    "Marks": 1,
    "AnswerId": 104192,
    "Answers": [{
        "Id": 104192,
        "Text": "LocationManager.NETWORK_PROVIDER"
    }, {
        "Id": 104193,
        "Text": "LocationManager.WIFI_PROVIDER"
    }, {
        "Id": 104194,
        "Text": "LocationManager.GPS_PROVIDER"
    }, {
        "Id": 104195,
        "Text": "LocationManager.CELLUAR_PROVIDER"
    }]
}, {
    "Id": 25126,
    "Text": "Phương thức callback nào gọi khi vị trí người dùng thay đổi?",
    "Marks": 1,
    "AnswerId": 104196,
    "Answers": [{
        "Id": 104196,
        "Text": "onLocationChanged"
    }, {
        "Id": 104197,
        "Text": "onCurrentLocationChanged"
    }, {
        "Id": 104198,
        "Text": "onLocationChange"
    }, {
        "Id": 104199,
        "Text": "onCurentLocationChange"
    }]
}, {
    "Id": 25127,
    "Text": "Khi tạo ứng dụng trên trang developer của Facebook, ngoài thông tin username và password, người dùng phải nhập thêm thông tin gì?",
    "Marks": 1,
    "AnswerId": 104203,
    "Answers": [{
        "Id": 104200,
        "Text": "Không cần thêm thông tin nào"
    }, {
        "Id": 104201,
        "Text": "app id"
    }, {
        "Id": 104202,
        "Text": "certificate"
    }, {
        "Id": 104203,
        "Text": "key hash"
    }]
}, {
    "Id": 25128,
    "Text": "Để đăng nhập ứng dụng Facebook từ ứng dụng Android, Facebook SDK yêu cầu gì?",
    "Marks": 1,
    "AnswerId": 104207,
    "Answers": [{
        "Id": 104204,
        "Text": "Không có yêu cầu nào"
    }, {
        "Id": 104205,
        "Text": "Sử dụng Google social API"
    }, {
        "Id": 104206,
        "Text": "Sử dụng Facebook Graph API"
    }, {
        "Id": 104207,
        "Text": "Thiết bị phải cài đặt ứng dụng native Facebook"
    }]
}, {
    "Id": 25129,
    "Text": "Có thể cài đặt ứng dụng native Facebook trên Emulator không?",
    "Marks": 1,
    "AnswerId": 104208,
    "Answers": [{
        "Id": 104208,
        "Text": "Có thể"
    }, {
        "Id": 104209,
        "Text": "Không thể"
    }]
}, {
    "Id": 25130,
    "Text": "Để lấy thông tin vị trí người dùng sử dụng GPS_PROVIDER, phải thêm permission nào vào Android manifest file?",
    "Marks": 1,
    "AnswerId": 104213,
    "Answers": [{
        "Id": 104210,
        "Text": "android.permission.USE_CREDENTIALS"
    }, {
        "Id": 104211,
        "Text": "android.permission.android.permission.ACCESS_MOCK_LOCATION"
    }, {
        "Id": 104212,
        "Text": "android.permission.INTERNET"
    }, {
        "Id": 104213,
        "Text": "android.permission.ACCESS_FINE_LOCATION"
    }]
}, {
    "Id": 25131,
    "Text": "Để đăng nhập ứng dụng Facebook từ ứng dụng Android, phải thêm Activity nào vào Android manifest?",
    "Marks": 1,
    "AnswerId": 104215,
    "Answers": [{
        "Id": 104214,
        "Text": "com.facebook.SingleSignInActivity"
    }, {
        "Id": 104215,
        "Text": "com.facebook.LoginActivity"
    }, {
        "Id": 104216,
        "Text": "com.facebook.SignInActivity"
    }, {
        "Id": 104217,
        "Text": "com.facebook.SignOnActivity"
    }]
}, {
    "Id": 25132,
    "Text": "Có thể gửi dữ liệu người dùng giả tới Emulator thông qua DDMS không?",
    "Marks": 1,
    "AnswerId": 104218,
    "Answers": [{
        "Id": 104218,
        "Text": "Có"
    }, {
        "Id": 104219,
        "Text": "Không"
    }]
}, {
    "Id": 25133,
    "Text": "Địa chỉ trang web nào cung cấp facebook sdk cho ứng dụng Android?",
    "Marks": 1,
    "AnswerId": 104222,
    "Answers": [{
        "Id": 104220,
        "Text": "http://facebook.com"
    }, {
        "Id": 104221,
        "Text": "http://facebook.com.vn"
    }, {
        "Id": 104222,
        "Text": "https://developers.facebook.com"
    }, {
        "Id": 104223,
        "Text": "http://developers.facebook.com.vn"
    }]
}, {
    "Id": 25134,
    "Text": "Phương thức getLastKnownLocation của LocationManager dùng để làm gì?",
    "Marks": 1,
    "AnswerId": 104226,
    "Answers": [{
        "Id": 104224,
        "Text": "Trả lại thông tin location của địa điểm đầu tiên ghi nhận được"
    }, {
        "Id": 104225,
        "Text": "Trả lại thông tin location của địa điểm gần nhất"
    }, {
        "Id": 104226,
        "Text": "Trả lại thông tin cache location"
    }, {
        "Id": 104227,
        "Text": "Trả lại thông tin location hiện tại"
    }]
}, {
    "Id": 25135,
    "Text": "Media Player có hỗ trợ một số listener để tương tác với Player?",
    "Marks": 1,
    "AnswerId": 104229,
    "Answers": [{
        "Id": 104228,
        "Text": "Sai"
    }, {
        "Id": 104229,
        "Text": "Đúng"
    }]
}, {
    "Id": 25136,
    "Text": "Dùng phương thức gì để cho phép media process thao tác với camera?",
    "Marks": 1,
    "AnswerId": 104230,
    "Answers": [{
        "Id": 104230,
        "Text": "unlock()"
    }, {
        "Id": 104231,
        "Text": "opening()"
    }, {
        "Id": 104232,
        "Text": "unlocking()"
    }, {
        "Id": 104233,
        "Text": "open()"
    }]
}, {
    "Id": 25137,
    "Text": "Google cloud messaging cho phép gửi thông điệp đến tối đa bao nhiêu người?",
    "Marks": 1,
    "AnswerId": 104237,
    "Answers": [{
        "Id": 104234,
        "Text": "10000"
    }, {
        "Id": 104235,
        "Text": "100"
    }, {
        "Id": 104236,
        "Text": "100"
    }, {
        "Id": 104237,
        "Text": "1000"
    }]
}, {
    "Id": 25138,
    "Text": "Quyền nào là cần thiết để ứng dụng có thể lưu ảnh chụp của Camera trên SD card?",
    "Marks": 1,
    "AnswerId": 104238,
    "Answers": [{
        "Id": 104238,
        "Text": "android.permission.WRITE_EXTERNAL_STORAGE"
    }, {
        "Id": 104239,
        "Text": "android.permission.WRITE_GSERVICES"
    }, {
        "Id": 104240,
        "Text": "android.permission.WRITE_APN_SETTINGS"
    }, {
        "Id": 104241,
        "Text": "android.permission.WAKE_LOCK"
    }]
}, {
    "Id": 25139,
    "Text": "Phương thức nào của Camera được sử dụng để lấy các thông số thiết lập cho Camera?",
    "Marks": 1,
    "AnswerId": 104245,
    "Answers": [{
        "Id": 104242,
        "Text": "setParameter"
    }, {
        "Id": 104243,
        "Text": "setParameters"
    }, {
        "Id": 104244,
        "Text": "getParameter"
    }, {
        "Id": 104245,
        "Text": "getParameters"
    }]
}, {
    "Id": 25140,
    "Text": "Lớp nào hỗ trợ xây dựng backup agent?",
    "Marks": 1,
    "AnswerId": 104249,
    "Answers": [{
        "Id": 104246,
        "Text": "FilesHelper"
    }, {
        "Id": 104247,
        "Text": "BackupHelper"
    }, {
        "Id": 104248,
        "Text": "SharedBackupHelper"
    }, {
        "Id": 104249,
        "Text": "SharedPreferencesBackupHelper"
    }]
}, {
    "Id": 25141,
    "Text": "Khi kết thúc quay phim, sử dụng phương thức nào để khóa camera?",
    "Marks": 1,
    "AnswerId": 104250,
    "Answers": [{
        "Id": 104250,
        "Text": "reConnect()"
    }, {
        "Id": 104251,
        "Text": "reConnecting()"
    }, {
        "Id": 104252,
        "Text": "reLock()"
    }, {
        "Id": 104253,
        "Text": "reLocking()"
    }]
},







chuyển đổi dữ liệu sang sql để tôi gửi vào database lưu ý ko thay đổi câu hỏi và câu trả lời và subId = 1
nhưng theo table  CREATE TABLE `question` (
  `queId` int(11) NOT NULL,
  `content` varchar(200) DEFAULT NULL,
  `score` varchar(20) DEFAULT NULL,
  `subId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
và 
CREATE TABLE `answer` (
  `ansId` int(11) NOT NULL,
  `content` varchar(200) DEFAULT NULL,
  `is_correct` tinyint(1) DEFAULT 0,
  `queId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
[{
    "Id": 25106,
    "Text": "Có mấy loại Service?",
    "Marks": 1,
    "AnswerId": 104121,
    "Answers": [{
            "Id": 104118,
            "Text": "3"
        },
        {
            "Id": 104119,
            "Text": "4"
        },
        {
            "Id": 104120,
            "Text": "1"
        },
        {
            "Id": 104121,
            "Text": "2"
        }
    ]
}, {
    "Id": 25107,
    "Text": "Trong IntentService, phương thức onHandlerIntent sẽ được tự động gọi trong phương thức nào?",
    "Marks": 1,
    "AnswerId": 104124,
    "Answers": [{
        "Id": 104122,
        "Text": "onServiceConnected()"
    }, {
        "Id": 104123,
        "Text": "onServiceDisConnected()"
    }, {
        "Id": 104124,
        "Text": "onStartCommand()"
    }, {
        "Id": 104125,
        "Text": "onBind()"
    }]
}, {
    "Id": 25108,
    "Text": "Khi nào phương thức ServiceConnection.onServiceConnected được gọi?",
    "Marks": 1,
    "AnswerId": 104126,
    "Answers": [{
        "Id": 104126,
        "Text": "Sau khi một thành phần gọi Context.startService()"
    }, {
        "Id": 104127,
        "Text": "Sau khi một thành phần gọi Context.bindService()"
    }, {
        "Id": 104128,
        "Text": "Sau khi BroadcastReceiver nhận một Intent được gửi bởi Service"
    }, {
        "Id": 104129,
        "Text": "Khi một Service gọi Context.startActivity()"
    }]
}, {
    "Id": 25109,
    "Text": "Phương thức Service.stopSelf(int startId) có tham số kiểu int. Tham số này dùng để làm gì?",
    "Marks": 1,
    "AnswerId": 104132,
    "Answers": [{
        "Id": 104130,
        "Text": "Nếu startId khác 0, Service sẽ bị hủy một cách vô điều kiện"
    }, {
        "Id": 104131,
        "Text": "Tham số miêu tả số miliseconds bị trì hoãn trước khi Service bị hủy"
    }, {
        "Id": 104132,
        "Text": "Là start identifier gần nhất nhận được bởi lời gọi onStart(Intent, int)"
    }, {
        "Id": 104133,
        "Text": "Được sử dụng để dừng Service nếu Service đang chạy trong process id với process id bằng giá trị startid"
    }]
}, {
    "Id": 25110,
    "Text": "Câu nào là đúng khi đề cập đến Service?",
    "Marks": 1,
    "AnswerId": 104137,
    "Answers": [{
        "Id": 104134,
        "Text": "Các ứng dụng khác nhau không thể truy cập đến các Service của chính nó"
    }, {
        "Id": 104135,
        "Text": "Tất cả phương án đều đúng"
    }, {
        "Id": 104136,
        "Text": "Lớp Service luôn luôn được truy cập bởi tất cả ứng dụng Android khác cài trên thiết bị"
    }, {
        "Id": 104137,
        "Text": "Service có thể chạy nền vô hạn kể cả khi thành phần khởi tạo Service đã bị hủy"
    }]
}, {
    "Id": 25111,
    "Text": "Trong IntentService, onBind mặc định trả lại giá trị nào?",
    "Marks": 1,
    "AnswerId": 104139,
    "Answers": [{
        "Id": 104138,
        "Text": "-1"
    }, {
        "Id": 104139,
        "Text": "null"
    }, {
        "Id": 104140,
        "Text": "0"
    }, {
        "Id": 104141,
        "Text": "\"\""
    }]
}, {
    "Id": 25112,
    "Text": "Phương thức stopSelf dùng để làm gì?",
    "Marks": 1,
    "AnswerId": 104145,
    "Answers": [{
        "Id": 104142,
        "Text": "Dừng thông báo notification tới người dùng"
    }, {
        "Id": 104143,
        "Text": "Dừng chương trình"
    }, {
        "Id": 104144,
        "Text": "Dừng kết nối Service với Sqlite"
    }, {
        "Id": 104145,
        "Text": "Dừng Service"
    }]
}




















{
    "Id": 25113,
    "Text": "Phương thức onStartCommand được gọi khi nào?",
    "Marks": 1,
    "AnswerId": 104149,
    "Answers": [{
        "Id": 104146,
        "Text": "Khi phương thức bindService được gọi"
    }, {
        "Id": 104147,
        "Text": "Khi phương thức stopSelf được gọi"
    }, {
        "Id": 104148,
        "Text": "Khi phương thức onBind được gọi"
    }, {
        "Id": 104149,
        "Text": "Khi phương thức startService được gọi"
    }]
}, {
    "Id": 25114,
    "Text": "Bạn nên giải phóng tài nguyên mà Service sử dụng trong phương thức nào?",
    "Marks": 1,
    "AnswerId": 104152,
    "Answers": [{
        "Id": 104150,
        "Text": "onPause"
    }, {
        "Id": 104151,
        "Text": "pauseService"
    }, {
        "Id": 104152,
        "Text": "onDestroy"
    }, {
        "Id": 104153,
        "Text": "startService"
    }]
}, {
    "Id": 25115,
    "Text": "Để hủy Service dùng phương thức nào?",
    "Marks": 1,
    "AnswerId": 104155,
    "Answers": [{
        "Id": 104154,
        "Text": "PauseService"
    }, {
        "Id": 104155,
        "Text": "StopService"
    }, {
        "Id": 104156,
        "Text": "PauseServices"
    }, {
        "Id": 104157,
        "Text": "StopServices"
    }]
}, {
    "Id": 25116,
    "Text": "Làm thế nào để disable một Broadcast Receiver khi nó đã được đăng ký trong AndroidManifest.xml?",
    "Marks": 1,
    "AnswerId": 104161,
    "Answers": [{
        "Id": 104158,
        "Text": "Sử dụng lớp PackageReceiverManager"
    }, {
        "Id": 104159,
        "Text": "Sử dụng lớp BroadcastReceiver"
    }, {
        "Id": 104160,
        "Text": "Sử dụng lớp BroadcastReceiverManger"
    }, {
        "Id": 104161,
        "Text": "Sử dụng lớp PackageManager"
    }]
}, {
    "Id": 25117,
    "Text": "Có mấy cách phát, nhận broadcast receiver?",
    "Marks": 1,
    "AnswerId": 104163,
    "Answers": [{
        "Id": 104162,
        "Text": "1"
    }, {
        "Id": 104163,
        "Text": "2"
    }, {
        "Id": 104164,
        "Text": "4"
    }, {
        "Id": 104165,
        "Text": "3"
    }]
}, {
    "Id": 25118,
    "Text": "Khi sử dụng Intent.ACTION_BOOT_COMPLETED, hệ thống sẽ broadcast mấy lần?",
    "Marks": 1,
    "AnswerId": 104167,
    "Answers": [{
        "Id": 104166,
        "Text": "4"
    }, {
        "Id": 104167,
        "Text": "1"
    }, {
        "Id": 104168,
        "Text": "3"
    }, {
        "Id": 104169,
        "Text": "2"
    }]
}, {
    "Id": 25119,
    "Text": "Vòng đời của Broadcast Receiver bao gồm mấy phương thức?",
    "Marks": 1,
    "AnswerId": 104170,
    "Answers": [{
        "Id": 104170,
        "Text": "1"
    }, {
        "Id": 104171,
        "Text": "2"
    }, {
        "Id": 104172,
        "Text": "4"
    }, {
        "Id": 104173,
        "Text": "3"
    }]
}, {
    "Id": 25120,
    "Text": "Lệnh sau dùng để làm gì?                                                                                   \u003creceiver             android:name=\".MyCallReceiver\"             android:exported=\"false\" \u003e  \u003c/receiver\u003e",
    "Marks": 1,
    "AnswerId": 104177,
    "Answers": [{
        "Id": 104174,
        "Text": "Disable receiver MyCallReceiver"
    }, {
        "Id": 104175,
        "Text": "Khai báo MyCallReceiver là broadcast hệ thống"
    }, {
        "Id": 104176,
        "Text": "Cho phép ứng dụng Calendar của hệ thống gửi broadcast tới receiver MyCallReceiver"
    }, {
        "Id": 104177,
        "Text": "Cấm ứng dụng khác gửi broadcast tới receiver MyCallReceiver"
    }]
}, {
    "Id": 25121,
    "Text": "Nếu ứng dụng của bạn ở trạng thái foreground, bạn chỉ muốn ứng dụng chỉ nhận broadcast nhất định khi nó active, bạn phải làm gì?",
    "Marks": 1,
    "AnswerId": 104181,
    "Answers": [{
        "Id": 104178,
        "Text": "Load Intent thông qua menu hoặc Action Bar"
    }, {
        "Id": 104179,
        "Text": "Đăng ký BroadcastReceiver với mức độ ưu tiên thấp"
    }, {
        "Id": 104180,
        "Text": "Đăng ký động BroadcastReceiver với mức độ ưu tiếp thấp.Sử dụng abortBroadcast lúc runtime để ngăn cản gửi"
    }, {
        "Id": 104181,
        "Text": "Đăng ký động BroadcastReceiver trong onResume và hủy đăng ký trong onPause"
    }]
}, {
    "Id": 25122,
    "Text": "Broadcast Intent thông thường sẽ biến mất khi hệ thống xử lý xong?",
    "Marks": 1,
    "AnswerId": 104183,
    "Answers": [{
        "Id": 104182,
        "Text": "Sai"
    }, {
        "Id": 104183,
        "Text": "Đúng"
    }]
}, {
    "Id": 25123,
    "Text": "Phương thức onReceive có mấy tham số đầu vào?",
    "Marks": 1,
    "AnswerId": 104184,
    "Answers": [{
        "Id": 104184,
        "Text": "2"
    }, {
        "Id": 104185,
        "Text": "4"
    }, {
        "Id": 104186,
        "Text": "1"
    }, {
        "Id": 104187,
        "Text": "3"
    }]
}, {
    "Id": 25124,
    "Text": "Phương thức nào được sử dụng để gửi broadcast intent mà intent này sẽ không mất đi sau khi hệ thống xử lý?",
    "Marks": 1,
    "AnswerId": 104191,
    "Answers": [{
        "Id": 104188,
        "Text": "Context.sendStickyBroadcast"
    }, {
        "Id": 104189,
        "Text": "Context.sendingStickyBroadcast"
    }, {
        "Id": 104190,
        "Text": "Context.sendingStickyBroadcastIntent"
    }, {
        "Id": 104191,
        "Text": "Context.sendStickyBroadcastIntent"
    }]
}, {
    "Id": 25125,
    "Text": "Để nhận thông tin người dùng qua wifi, phải sử dụng gì?",
    "Marks": 1,
    "AnswerId": 104192,
    "Answers": [{
        "Id": 104192,
        "Text": "LocationManager.NETWORK_PROVIDER"
    }, {
        "Id": 104193,
        "Text": "LocationManager.WIFI_PROVIDER"
    }, {
        "Id": 104194,
        "Text": "LocationManager.GPS_PROVIDER"
    }, {
        "Id": 104195,
        "Text": "LocationManager.CELLUAR_PROVIDER"
    }]
}, 















{
    "Id": 25142,
    "Text": "Media Player có thể play mọi loại file audio?",
    "Marks": 1,
    "AnswerId": 104254,
    "Answers": [{
        "Id": 104254,
        "Text": "Sai"
    }, {
        "Id": 104255,
        "Text": "Đúng"
    }]
}, {
    "Id": 25143,
    "Text": "Sử dụng phương thức gì của Camera để nhận thông tin của Camera?",
    "Marks": 1,
    "AnswerId": 104259,
    "Answers": [{
        "Id": 104256,
        "Text": "start"
    }, {
        "Id": 104257,
        "Text": "close"
    }, {
        "Id": 104258,
        "Text": "launch"
    }, {
        "Id": 104259,
        "Text": "open"
    }]
}, {
    "Id": 25144,
    "Text": "Phương thức nào được gọi để ngừng cập nhật preview surface?",
    "Marks": 1,
    "AnswerId": 104263,
    "Answers": [{
        "Id": 104260,
        "Text": "DestroypPreviews()"
    }, {
        "Id": 104261,
        "Text": "stopPreviews()"
    }, {
        "Id": 104262,
        "Text": "DestroyPreview()"
    }, {
        "Id": 104263,
        "Text": "stopPreview()"
    }]
}, {
    "Id": 25145,
    "Text": "Loại Animation nào chỉ sử dụng được cho View?",
    "Marks": 1,
    "AnswerId": 104265,
    "Answers": [{
        "Id": 104264,
        "Text": "Drawable Animation"
    }, {
        "Id": 104265,
        "Text": "View Animation"
    }, {
        "Id": 104266,
        "Text": "Property Animation"
    }, {
        "Id": 104267,
        "Text": "Không có Animation nào đáp ứng được yêu cầu này"
    }]
}, {
    "Id": 25146,
    "Text": "Phải thiết lập thuộc tính nào bằng true để hỗ trợ tạo hoạt hình cho ViewGroup?",
    "Marks": 1,
    "AnswerId": 104268,
    "Answers": [{
        "Id": 104268,
        "Text": "android:animateLayoutChanges"
    }, {
        "Id": 104269,
        "Text": "android:animateLayoutChange"
    }, {
        "Id": 104270,
        "Text": "android:animateLayoutModify"
    }, {
        "Id": 104271,
        "Text": "android:animateLayoutModifying"
    }]
}, {
    "Id": 25147,
    "Text": "Đối với drawable animation, phải thiết lập giá trị của thuộc tính android:oneshot bằng true đối với animation-list để làm gì?",
    "Marks": 1,
    "AnswerId": 104272,
    "Answers": [{
        "Id": 104272,
        "Text": "Cho phép animation chỉ chạy một lần duy nhất"
    }, {
        "Id": 104273,
        "Text": "Thuộc tính android:oneshot không có giá trị true và false"
    }, {
        "Id": 104274,
        "Text": "Cho phép animation chạy lặp đi lặp lại"
    }, {
        "Id": 104275,
        "Text": "Không có thuộc tính android:oneshot của animation-list"
    }]
}, {
    "Id": 25148,
    "Text": "Android có hỗ trợ khai báo animation trong XML hay không?",
    "Marks": 1,
    "AnswerId": 104276,
    "Answers": [{
        "Id": 104276,
        "Text": "Có"
    }, {
        "Id": 104277,
        "Text": "Không"
    }]
}, {
    "Id": 25149,
    "Text": "Trong animation, có thể định nghĩa tối đa bao nhiêu frame?",
    "Marks": 1,
    "AnswerId": 104280,
    "Answers": [{
        "Id": 104278,
        "Text": "3"
    }, {
        "Id": 104279,
        "Text": "2"
    }, {
        "Id": 104280,
        "Text": "Không giới hạn số frame"
    }, {
        "Id": 104281,
        "Text": "1"
    }]
}, {
    "Id": 25150,
    "Text": "Khái niệm nào đề cập đến cặp gồm thời gian và giá trị để định nghĩa trạng thái xác định tại thời gian xác định của animation?",
    "Marks": 1,
    "AnswerId": 104285,
    "Answers": [{
        "Id": 104282,
        "Text": "keys"
    }, {
        "Id": 104283,
        "Text": "frame"
    }, {
        "Id": 104284,
        "Text": "key"
    }, {
        "Id": 104285,
        "Text": "keyframe"
    }]
}, {
    "Id": 25151,
    "Text": "File XML liệt kê danh sách frame tạo nên animation nằm trong thư mục nào?",
    "Marks": 1,
    "AnswerId": 104289,
    "Answers": [{
        "Id": 104286,
        "Text": "res/layout"
    }, {
        "Id": 104287,
        "Text": "res/values"
    }, {
        "Id": 104288,
        "Text": "res/menu"
    }, {
        "Id": 104289,
        "Text": "res/drawable"
    }]
}, {
    "Id": 25152,
    "Text": "ObjectAnimator là lớp con của lớp nào?",
    "Marks": 1,
    "AnswerId": 104290,
    "Answers": [{
        "Id": 104290,
        "Text": "ValueAnimator"
    }, {
        "Id": 104291,
        "Text": "ButtonAnimator"
    }, {
        "Id": 104292,
        "Text": "TextAnimator"
    }, {
        "Id": 104293,
        "Text": "ValuableAnimator"
    }]
}, {
    "Id": 25153,
    "Text": "Khi khai báo Broadcast Receiver để nhận biết sự thay đổi kết nối mạng của thiết bị, bạn có thể disable broadcast receiver không?",
    "Marks": 1,
    "AnswerId": 104294,
    "Answers": [{
        "Id": 104294,
        "Text": "Có"
    }, {
        "Id": 104295,
        "Text": "Không"
    }]
}, {
    "Id": 25154,
    "Text": "Lệnh nào để kiểm tra kết nối 3G của thiết bị?",
    "Marks": 1,
    "AnswerId": 104298,
    "Answers": [{
        "Id": 104296,
        "Text": "ConnectivityManager connMgr = (ConnectivityManager)           getSystemService(Context.CONNECTIVITY_SERVICE); NetworkInfo networkInfo = connMgr.getNetworkInfo(ConnectivityManager.TYPE_WIMAX);"
    }, {
        "Id": 104297,
        "Text": "ConnectivityManager connMgr = (ConnectivityManager)           getSystemService(Context.CONNECTIVITY_SERVICE); NetworkInfo networkInfo = connMgr.getNetworkInfo(ConnectivityManager.TYPE_2.5G);"
    }, {
        "Id": 104298,
        "Text": "ConnectivityManager connMgr = (ConnectivityManager)           getSystemService(Context.CONNECTIVITY_SERVICE); NetworkInfo networkInfo = connMgr.getNetworkInfo(ConnectivityManager.TYPE_MOBILE);"
    }, {
        "Id": 104299,
        "Text": "ConnectivityManager connMgr = (ConnectivityManager)           getSystemService(Context.CONNECTIVITY_SERVICE); NetworkInfo networkInfo = connMgr.getNetworkInfo(ConnectivityManager.TYPE_3G);"
    }]
}, {
    "Id": 25155,
    "Text": "Để trích xuất dữ liệu link trong XML, phải sử dụng phương thức nào của XmlPullParser?",
    "Marks": 1,
    "AnswerId": 104303,
    "Answers": [{
        "Id": 104300,
        "Text": "getHrefValue(\"href\")"
    }, {
        "Id": 104301,
        "Text": "getAttributeValue(\"href\")"
    }, {
        "Id": 104302,
        "Text": "getHrefValue(null,\"href\")"
    }, {
        "Id": 104303,
        "Text": "getAttributeValue(null,\"href\")"
    }]
}, {
    "Id": 25156,
    "Text": "Bạn hãy cho biết kết quả khi thực hiện gọi phương thức sau? private String readLink(XmlPullParser parser) throws IOException, XmlPullParserException {         String link = \"\";         parser.require(XmlPullParser.START_TAG, ns, \"link\");         String ta",
    "Marks": 1,
    "AnswerId": 104305,
    "Answers": [{
        "Id": 104304,
        "Text": "Trả lại giá trị của tag title"
    }, {
        "Id": 104305,
        "Text": "Trả lại giá trị href của link"
    }, {
        "Id": 104306,
        "Text": "Chương trình báo lỗi khi biên dich"
    }, {
        "Id": 104307,
        "Text": "Chương trình báo lỗi khi chạy"
    }]
}, {
    "Id": 25157,
    "Text": "Tại sao phải sử dụng AsyncTask để phân tích dữ liệu XML?",
    "Marks": 1,
    "AnswerId": 104310,
    "Answers": [{
        "Id": 104308,
        "Text": "Để xử lý dữ liệu XML ngay cả khi máy không có kết nối WiFi"
    }, {
        "Id": 104309,
        "Text": "Để xử lý dữ liệu XML ngay cả khi máy không có kết nối 3G"
    }, {
        "Id": 104310,
        "Text": "Để tránh cho ứng dụng bị treo vì xử lý dữ liệu trên main thread"
    }, {
        "Id": 104311,
        "Text": "Để đỡ tốn tài nguyên khi xử lý dữ liệu XML lưu trong SQLite"
    }]
}, {
    "Id": 25158,
    "Text": "Broadcast Receiver xử lý dữ liệu XML trên mạng cần được đăng ký trong phương thức nào?",
    "Marks": 1,
    "AnswerId": 104315,
    "Answers": [{
        "Id": 104312,
        "Text": "onStart"
    }, {
        "Id": 104313,
        "Text": "onPause"
    }, {
        "Id": 104314,
        "Text": "onDestroy"
    }, {
        "Id": 104315,
        "Text": "onCreate"
    }]
}, {
    "Id": 25159,
    "Text": "Phím tắt nào dùng để tắt bật kết nối mạng trên Emulator?",
    "Marks": 1,
    "AnswerId": 104318,
    "Answers": [{
        "Id": 104316,
        "Text": "F9"
    }, {
        "Id": 104317,
        "Text": "F4"
    }, {
        "Id": 104318,
        "Text": "F8"
    }, {
        "Id": 104319,
        "Text": "F5"
    }]
}, {
    "Id": 25160,
    "Text": "Kiểu nào không nằm trong lớp ConnectivityManager?",
    "Marks": 1,
    "AnswerId": 104323,
    "Answers": [{
        "Id": 104320,
        "Text": "TYPE_WIMAX"
    }, {
        "Id": 104321,
        "Text": "TYPE_MOBILE"
    }, {
        "Id": 104322,
        "Text": "TYPE_WIFI"
    }, {
        "Id": 104323,
        "Text": "TYPE_3G"
    }]
}, {
    "Id": 25161,
    "Text": "Để phân tích XML, bạn sẽ sử dụng lớp nào?",
    "Marks": 1,
    "AnswerId": 104325,
    "Answers": [{
        "Id": 104324,
        "Text": "XmlPushParser"
    }, {
        "Id": 104325,
        "Text": "XmlPullParser"
    }, {
        "Id": 104326,
        "Text": "XmlParseParser"
    }, {
        "Id": 104327,
        "Text": "XmlPopParser"
    }]
}, {
    "Id": 25162,
    "Text": "Để thực hiện đọc file XML trên SD Card, bạn phải bổ sung thêm quyền gì trong AndroidManifest.xml?",
    "Marks": 1,
    "AnswerId": 104328,
    "Answers": [{
        "Id": 104328,
        "Text": "android.permission.READ_EXTERNAL_STORAGE"
    }, {
        "Id": 104329,
        "Text": "android.permission.READ"
    }, {
        "Id": 104330,
        "Text": "android.permission.READ_SD_CARD"
    }, {
        "Id": 104331,
        "Text": "Không cần thêm quyền"
    }]
}, {
    "Id": 25163,
    "Text": "Contacts Provider cung cấp mấy loại dữ liệu về person?",
    "Marks": 1,
    "AnswerId": 104334,
    "Answers": [{
        "Id": 104332,
        "Text": "1"
    }, {
        "Id": 104333,
        "Text": "2"
    }, {
        "Id": 104334,
        "Text": "3"
    }, {
        "Id": 104335,
        "Text": "4"
    }]
}, {
    "Id": 25164,
    "Text": "Trong ứng dụng bạn sử dụng lớp nào để truy xuất thông tin Contact?",
    "Marks": 1,
    "AnswerId": 104338,
    "Answers": [{
        "Id": 104336,
        "Text": "PersonResolver"
    }, {
        "Id": 104337,
        "Text": "ContactResolver"
    }, {
        "Id": 104338,
        "Text": "ContentResolver"
    }, {
        "Id": 104339,
        "Text": "PeopleResolver"
    }]
}, {
    "Id": 25165,
    "Text": "Hằng số nào dùng để thấy thông tin Contact có số phone hay không?",
    "Marks": 1,
    "AnswerId": 104340,
    "Answers": [{
        "Id": 104340,
        "Text": "ContactsContract.Contacts.HAS_PHONE_NUMBER"
    }, {
        "Id": 104341,
        "Text": "ContactsContract.Contacts.HAS_MOBILE_NUMBER"
    }, {
        "Id": 104342,
        "Text": "ContactsContract.Contacts.HAS_PHONE"
    }, {
        "Id": 104343,
        "Text": "ContactsContract.Contacts.PHONE_NUMBER"
    }]
}, {
    "Id": 25166,
    "Text": "Content URI nào được sử dụng để lấy thông tin email của Contact?",
    "Marks": 1,
    "AnswerId": 104347,
    "Answers": [{
        "Id": 104344,
        "Text": "ContactsContracts.CommonDataKinds.Email.CONTENT_URI"
    }, {
        "Id": 104345,
        "Text": "ContactsContract.CommonDataKinds.Email.CONTENT"
    }, {
        "Id": 104346,
        "Text": "ContactsContract.Email.CONTENT_URI"
    }, {
        "Id": 104347,
        "Text": "ContactsContract.CommonDataKinds.Email.CONTENT_URI"
    }]
}, {
    "Id": 25167,
    "Text": "Có thể thêm Contact vào Emulator hay không?",
    "Marks": 1,
    "AnswerId": 104348,
    "Answers": [{
        "Id": 104348,
        "Text": "Có"
    }, {
        "Id": 104349,
        "Text": "Không"
    }]
}, {
    "Id": 25168,
    "Text": "Content URI nào được sử dụng để lấy thông tin phone của Contact?",
    "Marks": 1,
    "AnswerId": 104352,
    "Answers": [{
        "Id": 104350,
        "Text": "ContactsContract.Phone.CONTENT_URI"
    }, {
        "Id": 104351,
        "Text": "ContactsContract.CommonDataKinds.Phone.CONTENT"
    }, {
        "Id": 104352,
        "Text": "ContactsContract.CommonDataKinds.Phone.CONTENT_URI"
    }, {
        "Id": 104353,
        "Text": "ContactsContracts.CommonDataKinds.Phone.CONTENT_URI"
    }]
}, {
    "Id": 25169,
    "Text": "Bảng nào cung cấp thông tin về person như thông tin dữ liệu về person, như user account và type?",
    "Marks": 1,
    "AnswerId": 104356,
    "Answers": [{
        "Id": 104354,
        "Text": "ContactsContract.Contacts"
    }, {
        "Id": 104355,
        "Text": "ContactsContract.DataTable"
    }, {
        "Id": 104356,
        "Text": "ContactsContract.RawContacts"
    }, {
        "Id": 104357,
        "Text": "ContactsContract.Data"
    }]
}, {
    "Id": 25170,
    "Text": "Hãy cho biết kết quả khi thực hiện lệnh sau: Cursor phoneCursor = contentResolver.query(ContactsContract.CommonDataKinds.Phone.CONTENT_URI,        null,        Phone_CONTACT_ID + \" = ?\",        new String[] { contact_id }, null);",
    "Marks": 1,
    "AnswerId": 104360,
    "Answers": [{
        "Id": 104358,
        "Text": "Bị lỗi khi chạy"
    }, {
        "Id": 104359,
        "Text": "Bị lỗi khi biên dịch"
    }, {
        "Id": 104360,
        "Text": "Trả lại một Cursor chức các số điện thoại của Contact với id là contact_id"
    }, {
        "Id": 104361,
        "Text": "Trả lại một Cursor chức các số điện thoại mobile của Contact với id là contact_id"
    }]
}, {
    "Id": 25171,
    "Text": "Contacts Provider có hỗ trợ xóa thông tin một contact trong thiết bị hay không?",
    "Marks": 1,
    "AnswerId": 104363,
    "Answers": [{
        "Id": 104362,
        "Text": "Không"
    }, {
        "Id": 104363,
        "Text": "Có"
    }]
}, {
    "Id": 25172,
    "Text": "Phương thức nào của ContentResolver để cập nhật thông tin cho nhiều Contact cùng lúc?",
    "Marks": 1,
    "AnswerId": 104364,
    "Answers": [{
        "Id": 104364,
        "Text": "applyBatch"
    }, {
        "Id": 104365,
        "Text": "applyAllContacts"
    }, {
        "Id": 104366,
        "Text": "applyBatches"
    }, {
        "Id": 104367,
        "Text": "applyGroupContact"
    }]
}, {
    "Id": 25173,
    "Text": "Để lấy thông tin SHA1 fingerprint, phải sử dụng công cụ nào?",
    "Marks": 1,
    "AnswerId": 104368,
    "Answers": [{
        "Id": 104368,
        "Text": "keytool"
    }, {
        "Id": 104369,
        "Text": "telnet"
    }, {
        "Id": 104370,
        "Text": "logchat"
    }, {
        "Id": 104371,
        "Text": "ping"
    }]
}, {
    "Id": 25174,
    "Text": "Thư mục nào chứa code project Google Play Service?",
    "Marks": 1,
    "AnswerId": 104372,
    "Answers": [{
        "Id": 104372,
        "Text": "/extras/google/google_play_services"
    }, {
        "Id": 104373,
        "Text": "/google/google_play_services"
    }, {
        "Id": 104374,
        "Text": "/extras/google/play_licensing"
    }, {
        "Id": 104375,
        "Text": "/extras/google/play_billing"
    }]
}, {
    "Id": 25175,
    "Text": "Làm thế nào để cài đặt Google Play Service?",
    "Marks": 1,
    "AnswerId": 104378,
    "Answers": [{
        "Id": 104376,
        "Text": "Vào SDK Manager, chọn extra \u003e google play billing library"
    }, {
        "Id": 104377,
        "Text": "Vào SDK Manager, chọn extra \u003e google repository"
    }, {
        "Id": 104378,
        "Text": "Vào SDK Manager, chọn extra \u003e google play service"
    }, {
        "Id": 104379,
        "Text": "Vào SDK Manager, chọn extra \u003e google play apk expansion librariry"
    }]
}, {
    "Id": 25176,
    "Text": "Địa chỉ trang web nào cung cấp Google Play API cho ứng dụng sử dụng Google Map?",
    "Marks": 1,
    "AnswerId": 104380,
    "Answers": [{
        "Id": 104380,
        "Text": "https://code.google.com/apis/console"
    }, {
        "Id": 104381,
        "Text": "https://code.google.com/"
    }, {
        "Id": 104382,
        "Text": "https://code.google.com/apis"
    }, {
        "Id": 104383,
        "Text": "https://google.com/apis"
    }]
}, {
    "Id": 25177,
    "Text": "Khi tạo ứng dụng trên google console, bạn phải kích hoạt chức năng nào cho project để ứng dụng có thể hiển thị google map?",
    "Marks": 1,
    "AnswerId": 104386,
    "Answers": [{
        "Id": 104384,
        "Text": "Google Notification Service"
    }, {
        "Id": 104385,
        "Text": "Google Cloud SQL"
    }, {
        "Id": 104386,
        "Text": "Google Map Android API v2"
    }, {
        "Id": 104387,
        "Text": "BigQuery API"
    }]
}, {
    "Id": 25178,
    "Text": "Phải tải và cấu hình SDK nào để có thể sử dụng Google Map Android API?",
    "Marks": 1,
    "AnswerId": 104390,
    "Answers": [{
        "Id": 104388,
        "Text": "Google Admob Ads SDK"
    }, {
        "Id": 104389,
        "Text": "Google Analytics App Tracking SDK"
    }, {
        "Id": 104390,
        "Text": "Google Play Service SDK"
    }, {
        "Id": 104391,
        "Text": "Android Support Library"
    }]
}, {
    "Id": 25179,
    "Text": "Trong các quyền dưới đây, quyền nào không cần thiết để hiển thị Google Map?",
    "Marks": 1,
    "AnswerId": 104392,
    "Answers": [{
        "Id": 104392,
        "Text": "android.permission.CHANGE_CONFIGURATION"
    }, {
        "Id": 104393,
        "Text": "android.permission.ACCESS_NETWORK_STATE"
    }, {
        "Id": 104394,
        "Text": "android.permission.WRITE_EXTERNAL_STORAGE"
    }, {
        "Id": 104395,
        "Text": "android.permission.INTERNET"
    }]
}, {
    "Id": 25180,
    "Text": "Để nhận API key cho phép hiển thị map trong ứng dụng, trang nào được sử dụng để nhận API key?",
    "Marks": 1,
    "AnswerId": 104396,
    "Answers": [{
        "Id": 104396,
        "Text": "Trang web của Google API Console"
    }, {
        "Id": 104397,
        "Text": "Trang chủ Microsoft"
    }, {
        "Id": 104398,
        "Text": "Trang chủ Google"
    }, {
        "Id": 104399,
        "Text": "Trang trủ Apple"
    }]
}, {
    "Id": 25181,
    "Text": "Trong Eclipse, làm thế nào để biết được đường dẫn của debug keystore?",
    "Marks": 1,
    "AnswerId": 104401,
    "Answers": [{
        "Id": 104400,
        "Text": "Không có cách nào để biết được đường dẫn debug keystore"
    }, {
        "Id": 104401,
        "Text": "Vào Eclipse, Preferences-\u003eAndroid-\u003eBuild"
    }, {
        "Id": 104402,
        "Text": "Vào Eclipse, Preferences-\u003eAndroid-\u003eDDMS"
    }, {
        "Id": 104403,
        "Text": "Vào Eclipse, Preferences-\u003eAndroid-\u003eNDK"
    }]
}, {
    "Id": 25182,
    "Text": "Google Map Android API đòi hỏi thư viện nào để hiển thị Map?",
    "Marks": 1,
    "AnswerId": 104405,
    "Answers": [{
        "Id": 104404,
        "Text": "UserVoice SDK"
    }, {
        "Id": 104405,
        "Text": "OpenGL ES version 2"
    }, {
        "Id": 104406,
        "Text": "HttpClient"
    }, {
        "Id": 104407,
        "Text": "Maven SDK"
    }]
}]