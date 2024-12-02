import banner from './banner.png'
import ADAVS from './ADAV.jpg'
import ADBSS from './ADBS.jpg'
import ADTES from './ADTE.jpg'
import ASNES from './ASNE.png'
import ADUIS from './ADUI.jpg'
import CLOCS from './CLCO.jpg'
import DBAVS from './DBAV.png'
import DBBSS from './DBBS.png'
import GAMES from './GAME.png'
import HTCSS from './HTCS.jpg'
import IMMAS from './INMA.jpg'
import JAAVS from './JAAV.png'
import JABSS from './JABS.png'
import JSPRS from './JSPR.png'
import LAYOS from './LAYO.jpg'
import MOWES from './MOWE.png'
import PHPPS from './PHPP.png'
import PMAGS from './PMAG.jpg'
import VBPRS from './VBPR.png'
import WEBUS from './WEBU.jpg'
import BANNERHOME from './BannerHome.png'
import LOGO from './logo.png'
import AIBANNER from './AIBanner.png'
import TOIUU from './ToiUuHomePages.png'
import HIEUQUA from './LinhHoatHome.png'
import BANNERBLOG from './BannerBlog.png'
import PAY from './Pay.png'
import APPSTORE from './AppStore.png'
import GOOGLEPLAY from './GooglePlay.png'
import BANNERBLOG2 from './Sua-thumb-tai-day.png'
import MACDINH from './MacDinh.png'
import search_icon from './search_icon.png'
import BANNERLOGIN from './loginBanner.png'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa6'
import { BiCategory } from 'react-icons/bi'
import cross_icon from './cross_icon.png'
export const assets = {
  BANNERLOGIN,
  cross_icon,
  search_icon,
  MACDINH,
  BANNERBLOG2,
  GOOGLEPLAY,
  APPSTORE,
  PAY,
  BANNERBLOG,
  HIEUQUA,
  TOIUU,
  AIBANNER,
  LOGO,
  BANNERHOME,
  banner,
  VBPRS,
  WEBUS,
  FaAngleUp,
  FaAngleDown,
  BiCategory,
}

export const subjects = [
  {
    Id: 'ADAV',
    Name: 'Lập trình Android nâng cao',
    Logo: [ADAVS],
  },
  {
    Id: 'ADBS',
    Name: 'Lập trình Android cơ bản',
    Logo: [ADBSS],
  },
  {
    Id: 'ADTE',
    Name: 'Kiểm thử và triển khai ứng dụng Android',
    Logo: [ADTES],
  },
  {
    Id: 'ADUI',
    Name: 'Thiết kế giao diện trên Android',
    Logo: [ADUIS],
  },
  {
    Id: 'ASNE',
    Name: 'Lập trình ASP.NET',
    Logo: [ASNES],
  },
  {
    Id: 'CLCO',
    Name: 'Điện toán đám mây',
    Logo: [CLOCS],
  },
  {
    Id: 'DBAV',
    Name: 'SQL Server',
    Logo: [DBAVS],
  },
  {
    Id: 'DBBS',
    Name: 'Cơ sở dữ liệu',
    Logo: [DBBSS],
  },
  {
    Id: 'GAME',
    Name: 'Lập trình game 2D',
    Logo: [GAMES],
  },
  {
    Id: 'HTCS',
    Name: 'HTML5 và CSS3',
    Logo: [HTCSS],
  },
  {
    Id: 'INMA',
    Name: 'Internet Marketing',
    Logo: [IMMAS],
  },
  {
    Id: 'JAAV',
    Name: 'Lập trình Java nâng cao',
    Logo: [JAAVS],
  },
  {
    Id: 'JABS',
    Name: 'Lập trình hướng đối tượng với Java',
    Logo: [JABSS],
  },
  {
    Id: 'JSPR',
    Name: 'Lập trình JavaScript',
    Logo: [JSPRS],
  },
  {
    Id: 'LAYO',
    Name: 'Thiết kế layout',
    Logo: [LAYOS],
  },
  {
    Id: 'MOWE',
    Name: 'Thiết kế web cho điện thoại di động',
    Logo: [MOWES],
  },
  {
    Id: 'PHPP',
    Name: 'Lập trình PHP',
    Logo: [PHPPS],
  },
  {
    Id: 'PMAG',
    Name: 'Quản lý dự án với Agile',
    Logo: [PMAGS],
  },
  {
    Id: 'VBPR',
    Name: 'Lập trình VB.NET',
    Logo: [VBPRS],
  },
  {
    Id: 'WEBU',
    Name: 'Xây dựng trang web',
    Logo: [WEBUS],
  },
]

export const ADAV = [
  {
    Id: 25106,
    Text: 'Có mấy loại Service?',
    Marks: 1,
    AnswerId: 104121,
    Answers: [
      {
        Id: 104118,
        Text: '3',
      },
      {
        Id: 104119,
        Text: '4',
      },
      {
        Id: 104120,
        Text: '1',
      },
      {
        Id: 104121,
        Text: '2',
      },
    ],
  },
  {
    Id: 25107,
    Text: 'Trong IntentService, phương thức onHandlerIntent sẽ được tự động gọi trong phương thức nào?',
    Marks: 1,
    AnswerId: 104124,
    Answers: [
      {
        Id: 104122,
        Text: 'onServiceConnected()',
      },
      {
        Id: 104123,
        Text: 'onServiceDisConnected()',
      },
      {
        Id: 104124,
        Text: 'onStartCommand()',
      },
      {
        Id: 104125,
        Text: 'onBind()',
      },
    ],
  },
  {
    Id: 25108,
    Text: 'Khi nào phương thức ServiceConnection.onServiceConnected được gọi?',
    Marks: 1,
    AnswerId: 104126,
    Answers: [
      {
        Id: 104126,
        Text: 'Sau khi một thành phần gọi Context.startService()',
      },
      {
        Id: 104127,
        Text: 'Sau khi một thành phần gọi Context.bindService()',
      },
      {
        Id: 104128,
        Text: 'Sau khi BroadcastReceiver nhận một Intent được gửi bởi Service',
      },
      {
        Id: 104129,
        Text: 'Khi một Service gọi Context.startActivity()',
      },
    ],
  },
  {
    Id: 25109,
    Text: 'Phương thức Service.stopSelf(int startId) có tham số kiểu int. Tham số này dùng để làm gì?',
    Marks: 1,
    AnswerId: 104132,
    Answers: [
      {
        Id: 104130,
        Text: 'Nếu startId khác 0, Service sẽ bị hủy một cách vô điều kiện',
      },
      {
        Id: 104131,
        Text: 'Tham số miêu tả số miliseconds bị trì hoãn trước khi Service bị hủy',
      },
      {
        Id: 104132,
        Text: 'Là start identifier gần nhất nhận được bởi lời gọi onStart(Intent, int)',
      },
      {
        Id: 104133,
        Text: 'Được sử dụng để dừng Service nếu Service đang chạy trong process id với process id bằng giá trị startid',
      },
    ],
  },
  {
    Id: 25110,
    Text: 'Câu nào là đúng khi đề cập đến Service?',
    Marks: 1,
    AnswerId: 104137,
    Answers: [
      {
        Id: 104134,
        Text: 'Các ứng dụng khác nhau không thể truy cập đến các Service của chính nó',
      },
      {
        Id: 104135,
        Text: 'Tất cả phương án đều đúng',
      },
      {
        Id: 104136,
        Text: 'Lớp Service luôn luôn được truy cập bởi tất cả ứng dụng Android khác cài trên thiết bị',
      },
      {
        Id: 104137,
        Text: 'Service có thể chạy nền vô hạn kể cả khi thành phần khởi tạo Service đã bị hủy',
      },
    ],
  },
  {
    Id: 25111,
    Text: 'Trong IntentService, onBind mặc định trả lại giá trị nào?',
    Marks: 1,
    AnswerId: 104139,
    Answers: [
      {
        Id: 104138,
        Text: '-1',
      },
      {
        Id: 104139,
        Text: 'null',
      },
      {
        Id: 104140,
        Text: '0',
      },
      {
        Id: 104141,
        Text: '""',
      },
    ],
  },
  {
    Id: 25112,
    Text: 'Phương thức stopSelf dùng để làm gì?',
    Marks: 1,
    AnswerId: 104145,
    Answers: [
      {
        Id: 104142,
        Text: 'Dừng thông báo notification tới người dùng',
      },
      {
        Id: 104143,
        Text: 'Dừng chương trình',
      },
      {
        Id: 104144,
        Text: 'Dừng kết nối Service với Sqlite',
      },
      {
        Id: 104145,
        Text: 'Dừng Service',
      },
    ],
  },
  {
    Id: 25113,
    Text: 'Phương thức onStartCommand được gọi khi nào?',
    Marks: 1,
    AnswerId: 104149,
    Answers: [
      {
        Id: 104146,
        Text: 'Khi phương thức bindService được gọi',
      },
      {
        Id: 104147,
        Text: 'Khi phương thức stopSelf được gọi',
      },
      {
        Id: 104148,
        Text: 'Khi phương thức onBind được gọi',
      },
      {
        Id: 104149,
        Text: 'Khi phương thức startService được gọi',
      },
    ],
  },
  {
    Id: 25114,
    Text: 'Bạn nên giải phóng tài nguyên mà Service sử dụng trong phương thức nào?',
    Marks: 1,
    AnswerId: 104152,
    Answers: [
      {
        Id: 104150,
        Text: 'onPause',
      },
      {
        Id: 104151,
        Text: 'pauseService',
      },
      {
        Id: 104152,
        Text: 'onDestroy',
      },
      {
        Id: 104153,
        Text: 'startService',
      },
    ],
  },
  {
    Id: 25115,
    Text: 'Để hủy Service dùng phương thức nào?',
    Marks: 1,
    AnswerId: 104155,
    Answers: [
      {
        Id: 104154,
        Text: 'PauseService',
      },
      {
        Id: 104155,
        Text: 'StopService',
      },
      {
        Id: 104156,
        Text: 'PauseServices',
      },
      {
        Id: 104157,
        Text: 'StopServices',
      },
    ],
  },
  {
    Id: 25116,
    Text: 'Làm thế nào để disable một Broadcast Receiver khi nó đã được đăng ký trong AndroidManifest.xml?',
    Marks: 1,
    AnswerId: 104161,
    Answers: [
      {
        Id: 104158,
        Text: 'Sử dụng lớp PackageReceiverManager',
      },
      {
        Id: 104159,
        Text: 'Sử dụng lớp BroadcastReceiver',
      },
      {
        Id: 104160,
        Text: 'Sử dụng lớp BroadcastReceiverManger',
      },
      {
        Id: 104161,
        Text: 'Sử dụng lớp PackageManager',
      },
    ],
  },
  {
    Id: 25117,
    Text: 'Có mấy cách phát, nhận broadcast receiver?',
    Marks: 1,
    AnswerId: 104163,
    Answers: [
      {
        Id: 104162,
        Text: '1',
      },
      {
        Id: 104163,
        Text: '2',
      },
      {
        Id: 104164,
        Text: '4',
      },
      {
        Id: 104165,
        Text: '3',
      },
    ],
  },
  {
    Id: 25118,
    Text: 'Khi sử dụng Intent.ACTION_BOOT_COMPLETED, hệ thống sẽ broadcast mấy lần?',
    Marks: 1,
    AnswerId: 104167,
    Answers: [
      {
        Id: 104166,
        Text: '4',
      },
      {
        Id: 104167,
        Text: '1',
      },
      {
        Id: 104168,
        Text: '3',
      },
      {
        Id: 104169,
        Text: '2',
      },
    ],
  },
  {
    Id: 25119,
    Text: 'Vòng đời của Broadcast Receiver bao gồm mấy phương thức?',
    Marks: 1,
    AnswerId: 104170,
    Answers: [
      {
        Id: 104170,
        Text: '1',
      },
      {
        Id: 104171,
        Text: '2',
      },
      {
        Id: 104172,
        Text: '4',
      },
      {
        Id: 104173,
        Text: '3',
      },
    ],
  },
  {
    Id: 25120,
    Text: 'Lệnh sau dùng để làm gì?                                                                                   \u003creceiver             android:name=".MyCallReceiver"             android:exported="false" \u003e  \u003c/receiver\u003e',
    Marks: 1,
    AnswerId: 104177,
    Answers: [
      {
        Id: 104174,
        Text: 'Disable receiver MyCallReceiver',
      },
      {
        Id: 104175,
        Text: 'Khai báo MyCallReceiver là broadcast hệ thống',
      },
      {
        Id: 104176,
        Text: 'Cho phép ứng dụng Calendar của hệ thống gửi broadcast tới receiver MyCallReceiver',
      },
      {
        Id: 104177,
        Text: 'Cấm ứng dụng khác gửi broadcast tới receiver MyCallReceiver',
      },
    ],
  },
  {
    Id: 25121,
    Text: 'Nếu ứng dụng của bạn ở trạng thái foreground, bạn chỉ muốn ứng dụng chỉ nhận broadcast nhất định khi nó active, bạn phải làm gì?',
    Marks: 1,
    AnswerId: 104181,
    Answers: [
      {
        Id: 104178,
        Text: 'Load Intent thông qua menu hoặc Action Bar',
      },
      {
        Id: 104179,
        Text: 'Đăng ký BroadcastReceiver với mức độ ưu tiên thấp',
      },
      {
        Id: 104180,
        Text: 'Đăng ký động BroadcastReceiver với mức độ ưu tiếp thấp.Sử dụng abortBroadcast lúc runtime để ngăn cản gửi',
      },
      {
        Id: 104181,
        Text: 'Đăng ký động BroadcastReceiver trong onResume và hủy đăng ký trong onPause',
      },
    ],
  },
  {
    Id: 25122,
    Text: 'Broadcast Intent thông thường sẽ biến mất khi hệ thống xử lý xong?',
    Marks: 1,
    AnswerId: 104183,
    Answers: [
      {
        Id: 104182,
        Text: 'Sai',
      },
      {
        Id: 104183,
        Text: 'Đúng',
      },
    ],
  },
  {
    Id: 25123,
    Text: 'Phương thức onReceive có mấy tham số đầu vào?',
    Marks: 1,
    AnswerId: 104184,
    Answers: [
      {
        Id: 104184,
        Text: '2',
      },
      {
        Id: 104185,
        Text: '4',
      },
      {
        Id: 104186,
        Text: '1',
      },
      {
        Id: 104187,
        Text: '3',
      },
    ],
  },
  {
    Id: 25124,
    Text: 'Phương thức nào được sử dụng để gửi broadcast intent mà intent này sẽ không mất đi sau khi hệ thống xử lý?',
    Marks: 1,
    AnswerId: 104191,
    Answers: [
      {
        Id: 104188,
        Text: 'Context.sendStickyBroadcast',
      },
      {
        Id: 104189,
        Text: 'Context.sendingStickyBroadcast',
      },
      {
        Id: 104190,
        Text: 'Context.sendingStickyBroadcastIntent',
      },
      {
        Id: 104191,
        Text: 'Context.sendStickyBroadcastIntent',
      },
    ],
  },
  {
    Id: 25125,
    Text: 'Để nhận thông tin người dùng qua wifi, phải sử dụng gì?',
    Marks: 1,
    AnswerId: 104192,
    Answers: [
      {
        Id: 104192,
        Text: 'LocationManager.NETWORK_PROVIDER',
      },
      {
        Id: 104193,
        Text: 'LocationManager.WIFI_PROVIDER',
      },
      {
        Id: 104194,
        Text: 'LocationManager.GPS_PROVIDER',
      },
      {
        Id: 104195,
        Text: 'LocationManager.CELLUAR_PROVIDER',
      },
    ],
  },
  {
    Id: 25126,
    Text: 'Phương thức callback nào gọi khi vị trí người dùng thay đổi?',
    Marks: 1,
    AnswerId: 104196,
    Answers: [
      {
        Id: 104196,
        Text: 'onLocationChanged',
      },
      {
        Id: 104197,
        Text: 'onCurrentLocationChanged',
      },
      {
        Id: 104198,
        Text: 'onLocationChange',
      },
      {
        Id: 104199,
        Text: 'onCurentLocationChange',
      },
    ],
  },
  {
    Id: 25127,
    Text: 'Khi tạo ứng dụng trên trang developer của Facebook, ngoài thông tin username và password, người dùng phải nhập thêm thông tin gì?',
    Marks: 1,
    AnswerId: 104203,
    Answers: [
      {
        Id: 104200,
        Text: 'Không cần thêm thông tin nào',
      },
      {
        Id: 104201,
        Text: 'app id',
      },
      {
        Id: 104202,
        Text: 'certificate',
      },
      {
        Id: 104203,
        Text: 'key hash',
      },
    ],
  },
  {
    Id: 25128,
    Text: 'Để đăng nhập ứng dụng Facebook từ ứng dụng Android, Facebook SDK yêu cầu gì?',
    Marks: 1,
    AnswerId: 104207,
    Answers: [
      {
        Id: 104204,
        Text: 'Không có yêu cầu nào',
      },
      {
        Id: 104205,
        Text: 'Sử dụng Google social API',
      },
      {
        Id: 104206,
        Text: 'Sử dụng Facebook Graph API',
      },
      {
        Id: 104207,
        Text: 'Thiết bị phải cài đặt ứng dụng native Facebook',
      },
    ],
  },
  {
    Id: 25129,
    Text: 'Có thể cài đặt ứng dụng native Facebook trên Emulator không?',
    Marks: 1,
    AnswerId: 104208,
    Answers: [
      {
        Id: 104208,
        Text: 'Có thể',
      },
      {
        Id: 104209,
        Text: 'Không thể',
      },
    ],
  },
  {
    Id: 25130,
    Text: 'Để lấy thông tin vị trí người dùng sử dụng GPS_PROVIDER, phải thêm permission nào vào Android manifest file?',
    Marks: 1,
    AnswerId: 104213,
    Answers: [
      {
        Id: 104210,
        Text: 'android.permission.USE_CREDENTIALS',
      },
      {
        Id: 104211,
        Text: 'android.permission.android.permission.ACCESS_MOCK_LOCATION',
      },
      {
        Id: 104212,
        Text: 'android.permission.INTERNET',
      },
      {
        Id: 104213,
        Text: 'android.permission.ACCESS_FINE_LOCATION',
      },
    ],
  },
  {
    Id: 25131,
    Text: 'Để đăng nhập ứng dụng Facebook từ ứng dụng Android, phải thêm Activity nào vào Android manifest?',
    Marks: 1,
    AnswerId: 104215,
    Answers: [
      {
        Id: 104214,
        Text: 'com.facebook.SingleSignInActivity',
      },
      {
        Id: 104215,
        Text: 'com.facebook.LoginActivity',
      },
      {
        Id: 104216,
        Text: 'com.facebook.SignInActivity',
      },
      {
        Id: 104217,
        Text: 'com.facebook.SignOnActivity',
      },
    ],
  },
  {
    Id: 25132,
    Text: 'Có thể gửi dữ liệu người dùng giả tới Emulator thông qua DDMS không?',
    Marks: 1,
    AnswerId: 104218,
    Answers: [
      {
        Id: 104218,
        Text: 'Có',
      },
      {
        Id: 104219,
        Text: 'Không',
      },
    ],
  },
  {
    Id: 25133,
    Text: 'Địa chỉ trang web nào cung cấp facebook sdk cho ứng dụng Android?',
    Marks: 1,
    AnswerId: 104222,
    Answers: [
      {
        Id: 104220,
        Text: 'http://facebook.com',
      },
      {
        Id: 104221,
        Text: 'http://facebook.com.vn',
      },
      {
        Id: 104222,
        Text: 'https://developers.facebook.com',
      },
      {
        Id: 104223,
        Text: 'http://developers.facebook.com.vn',
      },
    ],
  },
  {
    Id: 25134,
    Text: 'Phương thức getLastKnownLocation của LocationManager dùng để làm gì?',
    Marks: 1,
    AnswerId: 104226,
    Answers: [
      {
        Id: 104224,
        Text: 'Trả lại thông tin location của địa điểm đầu tiên ghi nhận được',
      },
      {
        Id: 104225,
        Text: 'Trả lại thông tin location của địa điểm gần nhất',
      },
      {
        Id: 104226,
        Text: 'Trả lại thông tin cache location',
      },
      {
        Id: 104227,
        Text: 'Trả lại thông tin location hiện tại',
      },
    ],
  },
  {
    Id: 25135,
    Text: 'Media Player có hỗ trợ một số listener để tương tác với Player?',
    Marks: 1,
    AnswerId: 104229,
    Answers: [
      {
        Id: 104228,
        Text: 'Sai',
      },
      {
        Id: 104229,
        Text: 'Đúng',
      },
    ],
  },
  {
    Id: 25136,
    Text: 'Dùng phương thức gì để cho phép media process thao tác với camera?',
    Marks: 1,
    AnswerId: 104230,
    Answers: [
      {
        Id: 104230,
        Text: 'unlock()',
      },
      {
        Id: 104231,
        Text: 'opening()',
      },
      {
        Id: 104232,
        Text: 'unlocking()',
      },
      {
        Id: 104233,
        Text: 'open()',
      },
    ],
  },
  {
    Id: 25137,
    Text: 'Google cloud messaging cho phép gửi thông điệp đến tối đa bao nhiêu người?',
    Marks: 1,
    AnswerId: 104237,
    Answers: [
      {
        Id: 104234,
        Text: '10000',
      },
      {
        Id: 104235,
        Text: '100',
      },
      {
        Id: 104236,
        Text: '100',
      },
      {
        Id: 104237,
        Text: '1000',
      },
    ],
  },
  {
    Id: 25138,
    Text: 'Quyền nào là cần thiết để ứng dụng có thể lưu ảnh chụp của Camera trên SD card?',
    Marks: 1,
    AnswerId: 104238,
    Answers: [
      {
        Id: 104238,
        Text: 'android.permission.WRITE_EXTERNAL_STORAGE',
      },
      {
        Id: 104239,
        Text: 'android.permission.WRITE_GSERVICES',
      },
      {
        Id: 104240,
        Text: 'android.permission.WRITE_APN_SETTINGS',
      },
      {
        Id: 104241,
        Text: 'android.permission.WAKE_LOCK',
      },
    ],
  },
  {
    Id: 25139,
    Text: 'Phương thức nào của Camera được sử dụng để lấy các thông số thiết lập cho Camera?',
    Marks: 1,
    AnswerId: 104245,
    Answers: [
      {
        Id: 104242,
        Text: 'setParameter',
      },
      {
        Id: 104243,
        Text: 'setParameters',
      },
      {
        Id: 104244,
        Text: 'getParameter',
      },
      {
        Id: 104245,
        Text: 'getParameters',
      },
    ],
  },
  {
    Id: 25140,
    Text: 'Lớp nào hỗ trợ xây dựng backup agent?',
    Marks: 1,
    AnswerId: 104249,
    Answers: [
      {
        Id: 104246,
        Text: 'FilesHelper',
      },
      {
        Id: 104247,
        Text: 'BackupHelper',
      },
      {
        Id: 104248,
        Text: 'SharedBackupHelper',
      },
      {
        Id: 104249,
        Text: 'SharedPreferencesBackupHelper',
      },
    ],
  },
  {
    Id: 25141,
    Text: 'Khi kết thúc quay phim, sử dụng phương thức nào để khóa camera?',
    Marks: 1,
    AnswerId: 104250,
    Answers: [
      {
        Id: 104250,
        Text: 'reConnect()',
      },
      {
        Id: 104251,
        Text: 'reConnecting()',
      },
      {
        Id: 104252,
        Text: 'reLock()',
      },
      {
        Id: 104253,
        Text: 'reLocking()',
      },
    ],
  },
  {
    Id: 25142,
    Text: 'Media Player có thể play mọi loại file audio?',
    Marks: 1,
    AnswerId: 104254,
    Answers: [
      {
        Id: 104254,
        Text: 'Sai',
      },
      {
        Id: 104255,
        Text: 'Đúng',
      },
    ],
  },
  {
    Id: 25143,
    Text: 'Sử dụng phương thức gì của Camera để nhận thông tin của Camera?',
    Marks: 1,
    AnswerId: 104259,
    Answers: [
      {
        Id: 104256,
        Text: 'start',
      },
      {
        Id: 104257,
        Text: 'close',
      },
      {
        Id: 104258,
        Text: 'launch',
      },
      {
        Id: 104259,
        Text: 'open',
      },
    ],
  },
  {
    Id: 25144,
    Text: 'Phương thức nào được gọi để ngừng cập nhật preview surface?',
    Marks: 1,
    AnswerId: 104263,
    Answers: [
      {
        Id: 104260,
        Text: 'DestroypPreviews()',
      },
      {
        Id: 104261,
        Text: 'stopPreviews()',
      },
      {
        Id: 104262,
        Text: 'DestroyPreview()',
      },
      {
        Id: 104263,
        Text: 'stopPreview()',
      },
    ],
  },
  {
    Id: 25145,
    Text: 'Loại Animation nào chỉ sử dụng được cho View?',
    Marks: 1,
    AnswerId: 104265,
    Answers: [
      {
        Id: 104264,
        Text: 'Drawable Animation',
      },
      {
        Id: 104265,
        Text: 'View Animation',
      },
      {
        Id: 104266,
        Text: 'Property Animation',
      },
      {
        Id: 104267,
        Text: 'Không có Animation nào đáp ứng được yêu cầu này',
      },
    ],
  },
  {
    Id: 25146,
    Text: 'Phải thiết lập thuộc tính nào bằng true để hỗ trợ tạo hoạt hình cho ViewGroup?',
    Marks: 1,
    AnswerId: 104268,
    Answers: [
      {
        Id: 104268,
        Text: 'android:animateLayoutChanges',
      },
      {
        Id: 104269,
        Text: 'android:animateLayoutChange',
      },
      {
        Id: 104270,
        Text: 'android:animateLayoutModify',
      },
      {
        Id: 104271,
        Text: 'android:animateLayoutModifying',
      },
    ],
  },
  {
    Id: 25147,
    Text: 'Đối với drawable animation, phải thiết lập giá trị của thuộc tính android:oneshot bằng true đối với animation-list để làm gì?',
    Marks: 1,
    AnswerId: 104272,
    Answers: [
      {
        Id: 104272,
        Text: 'Cho phép animation chỉ chạy một lần duy nhất',
      },
      {
        Id: 104273,
        Text: 'Thuộc tính android:oneshot không có giá trị true và false',
      },
      {
        Id: 104274,
        Text: 'Cho phép animation chạy lặp đi lặp lại',
      },
      {
        Id: 104275,
        Text: 'Không có thuộc tính android:oneshot của animation-list',
      },
    ],
  },
  {
    Id: 25148,
    Text: 'Android có hỗ trợ khai báo animation trong XML hay không?',
    Marks: 1,
    AnswerId: 104276,
    Answers: [
      {
        Id: 104276,
        Text: 'Có',
      },
      {
        Id: 104277,
        Text: 'Không',
      },
    ],
  },
  {
    Id: 25149,
    Text: 'Trong animation, có thể định nghĩa tối đa bao nhiêu frame?',
    Marks: 1,
    AnswerId: 104280,
    Answers: [
      {
        Id: 104278,
        Text: '3',
      },
      {
        Id: 104279,
        Text: '2',
      },
      {
        Id: 104280,
        Text: 'Không giới hạn số frame',
      },
      {
        Id: 104281,
        Text: '1',
      },
    ],
  },
  {
    Id: 25150,
    Text: 'Khái niệm nào đề cập đến cặp gồm thời gian và giá trị để định nghĩa trạng thái xác định tại thời gian xác định của animation?',
    Marks: 1,
    AnswerId: 104285,
    Answers: [
      {
        Id: 104282,
        Text: 'keys',
      },
      {
        Id: 104283,
        Text: 'frame',
      },
      {
        Id: 104284,
        Text: 'key',
      },
      {
        Id: 104285,
        Text: 'keyframe',
      },
    ],
  },
  {
    Id: 25151,
    Text: 'File XML liệt kê danh sách frame tạo nên animation nằm trong thư mục nào?',
    Marks: 1,
    AnswerId: 104289,
    Answers: [
      {
        Id: 104286,
        Text: 'res/layout',
      },
      {
        Id: 104287,
        Text: 'res/values',
      },
      {
        Id: 104288,
        Text: 'res/menu',
      },
      {
        Id: 104289,
        Text: 'res/drawable',
      },
    ],
  },
  {
    Id: 25152,
    Text: 'ObjectAnimator là lớp con của lớp nào?',
    Marks: 1,
    AnswerId: 104290,
    Answers: [
      {
        Id: 104290,
        Text: 'ValueAnimator',
      },
      {
        Id: 104291,
        Text: 'ButtonAnimator',
      },
      {
        Id: 104292,
        Text: 'TextAnimator',
      },
      {
        Id: 104293,
        Text: 'ValuableAnimator',
      },
    ],
  },
  {
    Id: 25153,
    Text: 'Khi khai báo Broadcast Receiver để nhận biết sự thay đổi kết nối mạng của thiết bị, bạn có thể disable broadcast receiver không?',
    Marks: 1,
    AnswerId: 104294,
    Answers: [
      {
        Id: 104294,
        Text: 'Có',
      },
      {
        Id: 104295,
        Text: 'Không',
      },
    ],
  },
  {
    Id: 25154,
    Text: 'Lệnh nào để kiểm tra kết nối 3G của thiết bị?',
    Marks: 1,
    AnswerId: 104298,
    Answers: [
      {
        Id: 104296,
        Text: 'ConnectivityManager connMgr = (ConnectivityManager)           getSystemService(Context.CONNECTIVITY_SERVICE); NetworkInfo networkInfo = connMgr.getNetworkInfo(ConnectivityManager.TYPE_WIMAX);',
      },
      {
        Id: 104297,
        Text: 'ConnectivityManager connMgr = (ConnectivityManager)           getSystemService(Context.CONNECTIVITY_SERVICE); NetworkInfo networkInfo = connMgr.getNetworkInfo(ConnectivityManager.TYPE_2.5G);',
      },
      {
        Id: 104298,
        Text: 'ConnectivityManager connMgr = (ConnectivityManager)           getSystemService(Context.CONNECTIVITY_SERVICE); NetworkInfo networkInfo = connMgr.getNetworkInfo(ConnectivityManager.TYPE_MOBILE);',
      },
      {
        Id: 104299,
        Text: 'ConnectivityManager connMgr = (ConnectivityManager)           getSystemService(Context.CONNECTIVITY_SERVICE); NetworkInfo networkInfo = connMgr.getNetworkInfo(ConnectivityManager.TYPE_3G);',
      },
    ],
  },
  {
    Id: 25155,
    Text: 'Để trích xuất dữ liệu link trong XML, phải sử dụng phương thức nào của XmlPullParser?',
    Marks: 1,
    AnswerId: 104303,
    Answers: [
      {
        Id: 104300,
        Text: 'getHrefValue("href")',
      },
      {
        Id: 104301,
        Text: 'getAttributeValue("href")',
      },
      {
        Id: 104302,
        Text: 'getHrefValue(null,"href")',
      },
      {
        Id: 104303,
        Text: 'getAttributeValue(null,"href")',
      },
    ],
  },
  {
    Id: 25156,
    Text: 'Bạn hãy cho biết kết quả khi thực hiện gọi phương thức sau? private String readLink(XmlPullParser parser) throws IOException, XmlPullParserException {         String link = "";         parser.require(XmlPullParser.START_TAG, ns, "link");         String ta',
    Marks: 1,
    AnswerId: 104305,
    Answers: [
      {
        Id: 104304,
        Text: 'Trả lại giá trị của tag title',
      },
      {
        Id: 104305,
        Text: 'Trả lại giá trị href của link',
      },
      {
        Id: 104306,
        Text: 'Chương trình báo lỗi khi biên dich',
      },
      {
        Id: 104307,
        Text: 'Chương trình báo lỗi khi chạy',
      },
    ],
  },
  {
    Id: 25157,
    Text: 'Tại sao phải sử dụng AsyncTask để phân tích dữ liệu XML?',
    Marks: 1,
    AnswerId: 104310,
    Answers: [
      {
        Id: 104308,
        Text: 'Để xử lý dữ liệu XML ngay cả khi máy không có kết nối WiFi',
      },
      {
        Id: 104309,
        Text: 'Để xử lý dữ liệu XML ngay cả khi máy không có kết nối 3G',
      },
      {
        Id: 104310,
        Text: 'Để tránh cho ứng dụng bị treo vì xử lý dữ liệu trên main thread',
      },
      {
        Id: 104311,
        Text: 'Để đỡ tốn tài nguyên khi xử lý dữ liệu XML lưu trong SQLite',
      },
    ],
  },
  {
    Id: 25158,
    Text: 'Broadcast Receiver xử lý dữ liệu XML trên mạng cần được đăng ký trong phương thức nào?',
    Marks: 1,
    AnswerId: 104315,
    Answers: [
      {
        Id: 104312,
        Text: 'onStart',
      },
      {
        Id: 104313,
        Text: 'onPause',
      },
      {
        Id: 104314,
        Text: 'onDestroy',
      },
      {
        Id: 104315,
        Text: 'onCreate',
      },
    ],
  },
  {
    Id: 25159,
    Text: 'Phím tắt nào dùng để tắt bật kết nối mạng trên Emulator?',
    Marks: 1,
    AnswerId: 104318,
    Answers: [
      {
        Id: 104316,
        Text: 'F9',
      },
      {
        Id: 104317,
        Text: 'F4',
      },
      {
        Id: 104318,
        Text: 'F8',
      },
      {
        Id: 104319,
        Text: 'F5',
      },
    ],
  },
  {
    Id: 25160,
    Text: 'Kiểu nào không nằm trong lớp ConnectivityManager?',
    Marks: 1,
    AnswerId: 104323,
    Answers: [
      {
        Id: 104320,
        Text: 'TYPE_WIMAX',
      },
      {
        Id: 104321,
        Text: 'TYPE_MOBILE',
      },
      {
        Id: 104322,
        Text: 'TYPE_WIFI',
      },
      {
        Id: 104323,
        Text: 'TYPE_3G',
      },
    ],
  },
  {
    Id: 25161,
    Text: 'Để phân tích XML, bạn sẽ sử dụng lớp nào?',
    Marks: 1,
    AnswerId: 104325,
    Answers: [
      {
        Id: 104324,
        Text: 'XmlPushParser',
      },
      {
        Id: 104325,
        Text: 'XmlPullParser',
      },
      {
        Id: 104326,
        Text: 'XmlParseParser',
      },
      {
        Id: 104327,
        Text: 'XmlPopParser',
      },
    ],
  },
  {
    Id: 25162,
    Text: 'Để thực hiện đọc file XML trên SD Card, bạn phải bổ sung thêm quyền gì trong AndroidManifest.xml?',
    Marks: 1,
    AnswerId: 104328,
    Answers: [
      {
        Id: 104328,
        Text: 'android.permission.READ_EXTERNAL_STORAGE',
      },
      {
        Id: 104329,
        Text: 'android.permission.READ',
      },
      {
        Id: 104330,
        Text: 'android.permission.READ_SD_CARD',
      },
      {
        Id: 104331,
        Text: 'Không cần thêm quyền',
      },
    ],
  },
  {
    Id: 25163,
    Text: 'Contacts Provider cung cấp mấy loại dữ liệu về person?',
    Marks: 1,
    AnswerId: 104334,
    Answers: [
      {
        Id: 104332,
        Text: '1',
      },
      {
        Id: 104333,
        Text: '2',
      },
      {
        Id: 104334,
        Text: '3',
      },
      {
        Id: 104335,
        Text: '4',
      },
    ],
  },
  {
    Id: 25164,
    Text: 'Trong ứng dụng bạn sử dụng lớp nào để truy xuất thông tin Contact?',
    Marks: 1,
    AnswerId: 104338,
    Answers: [
      {
        Id: 104336,
        Text: 'PersonResolver',
      },
      {
        Id: 104337,
        Text: 'ContactResolver',
      },
      {
        Id: 104338,
        Text: 'ContentResolver',
      },
      {
        Id: 104339,
        Text: 'PeopleResolver',
      },
    ],
  },
  {
    Id: 25165,
    Text: 'Hằng số nào dùng để thấy thông tin Contact có số phone hay không?',
    Marks: 1,
    AnswerId: 104340,
    Answers: [
      {
        Id: 104340,
        Text: 'ContactsContract.Contacts.HAS_PHONE_NUMBER',
      },
      {
        Id: 104341,
        Text: 'ContactsContract.Contacts.HAS_MOBILE_NUMBER',
      },
      {
        Id: 104342,
        Text: 'ContactsContract.Contacts.HAS_PHONE',
      },
      {
        Id: 104343,
        Text: 'ContactsContract.Contacts.PHONE_NUMBER',
      },
    ],
  },
  {
    Id: 25166,
    Text: 'Content URI nào được sử dụng để lấy thông tin email của Contact?',
    Marks: 1,
    AnswerId: 104347,
    Answers: [
      {
        Id: 104344,
        Text: 'ContactsContracts.CommonDataKinds.Email.CONTENT_URI',
      },
      {
        Id: 104345,
        Text: 'ContactsContract.CommonDataKinds.Email.CONTENT',
      },
      {
        Id: 104346,
        Text: 'ContactsContract.Email.CONTENT_URI',
      },
      {
        Id: 104347,
        Text: 'ContactsContract.CommonDataKinds.Email.CONTENT_URI',
      },
    ],
  },
  {
    Id: 25167,
    Text: 'Có thể thêm Contact vào Emulator hay không?',
    Marks: 1,
    AnswerId: 104348,
    Answers: [
      {
        Id: 104348,
        Text: 'Có',
      },
      {
        Id: 104349,
        Text: 'Không',
      },
    ],
  },
  {
    Id: 25168,
    Text: 'Content URI nào được sử dụng để lấy thông tin phone của Contact?',
    Marks: 1,
    AnswerId: 104352,
    Answers: [
      {
        Id: 104350,
        Text: 'ContactsContract.Phone.CONTENT_URI',
      },
      {
        Id: 104351,
        Text: 'ContactsContract.CommonDataKinds.Phone.CONTENT',
      },
      {
        Id: 104352,
        Text: 'ContactsContract.CommonDataKinds.Phone.CONTENT_URI',
      },
      {
        Id: 104353,
        Text: 'ContactsContracts.CommonDataKinds.Phone.CONTENT_URI',
      },
    ],
  },
  {
    Id: 25169,
    Text: 'Bảng nào cung cấp thông tin về person như thông tin dữ liệu về person, như user account và type?',
    Marks: 1,
    AnswerId: 104356,
    Answers: [
      {
        Id: 104354,
        Text: 'ContactsContract.Contacts',
      },
      {
        Id: 104355,
        Text: 'ContactsContract.DataTable',
      },
      {
        Id: 104356,
        Text: 'ContactsContract.RawContacts',
      },
      {
        Id: 104357,
        Text: 'ContactsContract.Data',
      },
    ],
  },
  {
    Id: 25170,
    Text: 'Hãy cho biết kết quả khi thực hiện lệnh sau: Cursor phoneCursor = contentResolver.query(ContactsContract.CommonDataKinds.Phone.CONTENT_URI,        null,        Phone_CONTACT_ID + " = ?",        new String[] { contact_id }, null);',
    Marks: 1,
    AnswerId: 104360,
    Answers: [
      {
        Id: 104358,
        Text: 'Bị lỗi khi chạy',
      },
      {
        Id: 104359,
        Text: 'Bị lỗi khi biên dịch',
      },
      {
        Id: 104360,
        Text: 'Trả lại một Cursor chức các số điện thoại của Contact với id là contact_id',
      },
      {
        Id: 104361,
        Text: 'Trả lại một Cursor chức các số điện thoại mobile của Contact với id là contact_id',
      },
    ],
  },
  {
    Id: 25171,
    Text: 'Contacts Provider có hỗ trợ xóa thông tin một contact trong thiết bị hay không?',
    Marks: 1,
    AnswerId: 104363,
    Answers: [
      {
        Id: 104362,
        Text: 'Không',
      },
      {
        Id: 104363,
        Text: 'Có',
      },
    ],
  },
  {
    Id: 25172,
    Text: 'Phương thức nào của ContentResolver để cập nhật thông tin cho nhiều Contact cùng lúc?',
    Marks: 1,
    AnswerId: 104364,
    Answers: [
      {
        Id: 104364,
        Text: 'applyBatch',
      },
      {
        Id: 104365,
        Text: 'applyAllContacts',
      },
      {
        Id: 104366,
        Text: 'applyBatches',
      },
      {
        Id: 104367,
        Text: 'applyGroupContact',
      },
    ],
  },
  {
    Id: 25173,
    Text: 'Để lấy thông tin SHA1 fingerprint, phải sử dụng công cụ nào?',
    Marks: 1,
    AnswerId: 104368,
    Answers: [
      {
        Id: 104368,
        Text: 'keytool',
      },
      {
        Id: 104369,
        Text: 'telnet',
      },
      {
        Id: 104370,
        Text: 'logchat',
      },
      {
        Id: 104371,
        Text: 'ping',
      },
    ],
  },
  {
    Id: 25174,
    Text: 'Thư mục nào chứa code project Google Play Service?',
    Marks: 1,
    AnswerId: 104372,
    Answers: [
      {
        Id: 104372,
        Text: '/extras/google/google_play_services',
      },
      {
        Id: 104373,
        Text: '/google/google_play_services',
      },
      {
        Id: 104374,
        Text: '/extras/google/play_licensing',
      },
      {
        Id: 104375,
        Text: '/extras/google/play_billing',
      },
    ],
  },
  {
    Id: 25175,
    Text: 'Làm thế nào để cài đặt Google Play Service?',
    Marks: 1,
    AnswerId: 104378,
    Answers: [
      {
        Id: 104376,
        Text: 'Vào SDK Manager, chọn extra \u003e google play billing library',
      },
      {
        Id: 104377,
        Text: 'Vào SDK Manager, chọn extra \u003e google repository',
      },
      {
        Id: 104378,
        Text: 'Vào SDK Manager, chọn extra \u003e google play service',
      },
      {
        Id: 104379,
        Text: 'Vào SDK Manager, chọn extra \u003e google play apk expansion librariry',
      },
    ],
  },
  {
    Id: 25176,
    Text: 'Địa chỉ trang web nào cung cấp Google Play API cho ứng dụng sử dụng Google Map?',
    Marks: 1,
    AnswerId: 104380,
    Answers: [
      {
        Id: 104380,
        Text: 'https://code.google.com/apis/console',
      },
      {
        Id: 104381,
        Text: 'https://code.google.com/',
      },
      {
        Id: 104382,
        Text: 'https://code.google.com/apis',
      },
      {
        Id: 104383,
        Text: 'https://google.com/apis',
      },
    ],
  },
  {
    Id: 25177,
    Text: 'Khi tạo ứng dụng trên google console, bạn phải kích hoạt chức năng nào cho project để ứng dụng có thể hiển thị google map?',
    Marks: 1,
    AnswerId: 104386,
    Answers: [
      {
        Id: 104384,
        Text: 'Google Notification Service',
      },
      {
        Id: 104385,
        Text: 'Google Cloud SQL',
      },
      {
        Id: 104386,
        Text: 'Google Map Android API v2',
      },
      {
        Id: 104387,
        Text: 'BigQuery API',
      },
    ],
  },
  {
    Id: 25178,
    Text: 'Phải tải và cấu hình SDK nào để có thể sử dụng Google Map Android API?',
    Marks: 1,
    AnswerId: 104390,
    Answers: [
      {
        Id: 104388,
        Text: 'Google Admob Ads SDK',
      },
      {
        Id: 104389,
        Text: 'Google Analytics App Tracking SDK',
      },
      {
        Id: 104390,
        Text: 'Google Play Service SDK',
      },
      {
        Id: 104391,
        Text: 'Android Support Library',
      },
    ],
  },
  {
    Id: 25179,
    Text: 'Trong các quyền dưới đây, quyền nào không cần thiết để hiển thị Google Map?',
    Marks: 1,
    AnswerId: 104392,
    Answers: [
      {
        Id: 104392,
        Text: 'android.permission.CHANGE_CONFIGURATION',
      },
      {
        Id: 104393,
        Text: 'android.permission.ACCESS_NETWORK_STATE',
      },
      {
        Id: 104394,
        Text: 'android.permission.WRITE_EXTERNAL_STORAGE',
      },
      {
        Id: 104395,
        Text: 'android.permission.INTERNET',
      },
    ],
  },
  {
    Id: 25180,
    Text: 'Để nhận API key cho phép hiển thị map trong ứng dụng, trang nào được sử dụng để nhận API key?',
    Marks: 1,
    AnswerId: 104396,
    Answers: [
      {
        Id: 104396,
        Text: 'Trang web của Google API Console',
      },
      {
        Id: 104397,
        Text: 'Trang chủ Microsoft',
      },
      {
        Id: 104398,
        Text: 'Trang chủ Google',
      },
      {
        Id: 104399,
        Text: 'Trang trủ Apple',
      },
    ],
  },
  {
    Id: 25181,
    Text: 'Trong Eclipse, làm thế nào để biết được đường dẫn của debug keystore?',
    Marks: 1,
    AnswerId: 104401,
    Answers: [
      {
        Id: 104400,
        Text: 'Không có cách nào để biết được đường dẫn debug keystore',
      },
      {
        Id: 104401,
        Text: 'Vào Eclipse, Preferences-\u003eAndroid-\u003eBuild',
      },
      {
        Id: 104402,
        Text: 'Vào Eclipse, Preferences-\u003eAndroid-\u003eDDMS',
      },
      {
        Id: 104403,
        Text: 'Vào Eclipse, Preferences-\u003eAndroid-\u003eNDK',
      },
    ],
  },
  {
    Id: 25182,
    Text: 'Google Map Android API đòi hỏi thư viện nào để hiển thị Map?',
    Marks: 1,
    AnswerId: 104405,
    Answers: [
      {
        Id: 104404,
        Text: 'UserVoice SDK',
      },
      {
        Id: 104405,
        Text: 'OpenGL ES version 2',
      },
      {
        Id: 104406,
        Text: 'HttpClient',
      },
      {
        Id: 104407,
        Text: 'Maven SDK',
      },
    ],
  },
]

export const ADTE = [
  {
    Id: 25262,
    Text: 'Kiểm thử nào không nằm trong kiểm thử hệ thống?',
    Marks: 1,
    AnswerId: 104715,
    Answers: [
      {
        Id: 104712,
        Text: 'Installation tests',
      },
      {
        Id: 104713,
        Text: 'Performance tests',
      },
      {
        Id: 104714,
        Text: 'GUI tests',
      },
      {
        Id: 104715,
        Text: 'Unit test',
      },
    ],
  },
  {
    Id: 25263,
    Text: 'Kiểm thử nào được sử dụng để kiểm thử hoạt động của các thành phần khi chúng làm việc chung với nhau?',
    Marks: 1,
    AnswerId: 104717,
    Answers: [
      {
        Id: 104716,
        Text: 'Kiểm thử đơn vị',
      },
      {
        Id: 104717,
        Text: 'Kiểm thử tích hợp',
      },
      {
        Id: 104718,
        Text: 'Kiểm thử chấp nhận',
      },
      {
        Id: 104719,
        Text: 'Kiểm thử giao diện',
      },
    ],
  },
  {
    Id: 25264,
    Text: 'Android sử dụng Framework nào để kiểm thử đơn vị?',
    Marks: 1,
    AnswerId: 104720,
    Answers: [
      {
        Id: 104720,
        Text: 'JUnit',
      },
      {
        Id: 104721,
        Text: 'FUnit',
      },
      {
        Id: 104722,
        Text: 'NUnit',
      },
      {
        Id: 104723,
        Text: 'AUnit',
      },
    ],
  },
  {
    Id: 25265,
    Text: 'Trong JUnit, phương thức nào được sử dụng để kiểm tra một giá trị có phải Null hay không?',
    Marks: 1,
    AnswerId: 104727,
    Answers: [
      {
        Id: 104724,
        Text: 'confirmNull',
      },
      {
        Id: 104725,
        Text: 'assertNulls',
      },
      {
        Id: 104726,
        Text: 'confirmNulls',
      },
      {
        Id: 104727,
        Text: 'assertNull',
      },
    ],
  },
  {
    Id: 25266,
    Text: 'Trong JUnit test case, phương thức nào được sử dụng để tạo đối tượng và khởi tạo giá trị cho các đối tượng?',
    Marks: 1,
    AnswerId: 104729,
    Answers: [
      {
        Id: 104728,
        Text: 'tearingDown()',
      },
      {
        Id: 104729,
        Text: 'setUp()',
      },
      {
        Id: 104730,
        Text: 'settingUp()',
      },
      {
        Id: 104731,
        Text: 'tearDown()',
      },
    ],
  },
  {
    Id: 25267,
    Text: 'Kiểm tra việc lưu thông tin trạng thái của Activity trong phương thức nào?',
    Marks: 1,
    AnswerId: 104733,
    Answers: [
      {
        Id: 104732,
        Text: 'onSearchRequested',
      },
      {
        Id: 104733,
        Text: 'onPause',
      },
      {
        Id: 104734,
        Text: 'onKeyUp',
      },
      {
        Id: 104735,
        Text: 'onNavigateUp',
      },
    ],
  },
  {
    Id: 25268,
    Text: 'Lớp nào không nằm trong gói android.test.mock?',
    Marks: 1,
    AnswerId: 104740,
    Answers: [
      {
        Id: 104736,
        Text: 'MockContext',
      },
      {
        Id: 104737,
        Text: 'MockContentResolver',
      },
      {
        Id: 104738,
        Text: 'MockCursor',
      },
      {
        Id: 104739,
        Text: 'MockContentProvider',
      },
      {
        Id: 104740,
        Text: 'MockResource',
      },
    ],
  },
  {
    Id: 25269,
    Text: 'Trong JUnit, phương thức nào được sử dụng để so sánh hai giá trị có bằng nhau hay không?',
    Marks: 1,
    AnswerId: 104742,
    Answers: [
      {
        Id: 104741,
        Text: 'assertEqual',
      },
      {
        Id: 104742,
        Text: 'assertEquals',
      },
      {
        Id: 104743,
        Text: 'confirmEqual',
      },
      {
        Id: 104744,
        Text: 'confirmEquals',
      },
    ],
  },
  {
    Id: 25270,
    Text: 'Phương thức nào được chạy trước tất cả test case?',
    Marks: 1,
    AnswerId: 104746,
    Answers: [
      {
        Id: 104745,
        Text: 'tearDown()',
      },
      {
        Id: 104746,
        Text: 'setUp()',
      },
      {
        Id: 104747,
        Text: 'settingUp()',
      },
      {
        Id: 104748,
        Text: 'tearingDown()',
      },
    ],
  },
  {
    Id: 25271,
    Text: 'Kiểm thử đơn vị được thực hiện bởi ai trong nhóm phát triển?',
    Marks: 1,
    AnswerId: 104751,
    Answers: [
      {
        Id: 104749,
        Text: 'Tester',
      },
      {
        Id: 104750,
        Text: 'QA',
      },
      {
        Id: 104751,
        Text: 'Lập trình viên',
      },
      {
        Id: 104752,
        Text: 'Product Owner',
      },
    ],
  },
  {
    Id: 25272,
    Text: 'Đoạn code sau có ý nghĩa gì?SecondActivity startedActivity = (SecondActivity)monitor. waitForActivityWithTimeout(2000);',
    Marks: 1,
    AnswerId: 104755,
    Answers: [
      {
        Id: 104753,
        Text: 'Khởi tạo SecondActivity. Nếu sau 2 milliseconds, SecondActivity không được khởi tạo thì sẽ trả lại giá trị NULL',
      },
      {
        Id: 104754,
        Text: 'Khởi tạo SecondActivity. Nếu sau 2 giờ, SecondActivity không được khởi tạo thì sẽ trả lại giá trị NULL',
      },
      {
        Id: 104755,
        Text: 'Khởi tạo SecondActivity. Nếu sau 2 giây, SecondActivity không được khởi tạo thì sẽ trả lại giá trị NULL',
      },
      {
        Id: 104756,
        Text: 'Khởi tạo SecondActivity',
      },
    ],
  },
  {
    Id: 25273,
    Text: 'Lớp nào hỗ trợ để sinh ra các sự kiện touch event?',
    Marks: 1,
    AnswerId: 104760,
    Answers: [
      {
        Id: 104757,
        Text: 'TouchLibraries',
      },
      {
        Id: 104758,
        Text: 'TouchUtil',
      },
      {
        Id: 104759,
        Text: 'TouchLibrary',
      },
      {
        Id: 104760,
        Text: 'TouchUtils',
      },
    ],
  },
  {
    Id: 25274,
    Text: 'Để gửi các sự kiện tới giao diện người dùng từ chương trình Android khi kiểm thử phải sử dụng công cụ nào?',
    Marks: 1,
    AnswerId: 104764,
    Answers: [
      {
        Id: 104761,
        Text: 'JUnit',
      },
      {
        Id: 104762,
        Text: 'Nunit',
      },
      {
        Id: 104763,
        Text: 'Ant',
      },
      {
        Id: 104764,
        Text: 'Instrumentation',
      },
    ],
  },
  {
    Id: 25275,
    Text: 'Phương thức nào của ViewAsserts được dùng để kiểm tra xem View có nằm trên màn hình hay không?',
    Marks: 1,
    AnswerId: 104768,
    Answers: [
      {
        Id: 104765,
        Text: 'assertOffScreenAbove',
      },
      {
        Id: 104766,
        Text: 'assertOffScreenBelow',
      },
      {
        Id: 104767,
        Text: 'assertOffScreen',
      },
      {
        Id: 104768,
        Text: 'assertOnScreen',
      },
    ],
  },
  {
    Id: 25276,
    Text: 'Đối với lớp kiểm thử SingleLaunchActivityTestCase, để lấy thông tin Activity sử dụng phương thức nào?',
    Marks: 1,
    AnswerId: 104770,
    Answers: [
      {
        Id: 104769,
        Text: 'getActivities()',
      },
      {
        Id: 104770,
        Text: 'getActivity()',
      },
      {
        Id: 104771,
        Text: 'getCurrentActivitiy()',
      },
      {
        Id: 104772,
        Text: 'getRecentActivitiy()',
      },
    ],
  },
  {
    Id: 25277,
    Text: 'Trước khi xuất bản ứng dụng lên Google Play, chúng ta nên kiểm tra ứng dụng trên các loại thiết bị nào?',
    Marks: 1,
    AnswerId: 104774,
    Answers: [
      {
        Id: 104773,
        Text: 'Chỉ cần kiểm tra ứng dụng trên Emulator',
      },
      {
        Id: 104774,
        Text: 'Kiểm tra thiết bị trên mọi kích thước màn hình và trên các màn hình với mật độ điểm ảnh khác nhau',
      },
      {
        Id: 104775,
        Text: 'Kiểm tra ứng dụng trên Galaxy S4',
      },
      {
        Id: 104776,
        Text: 'Kiểm tra ứng dụng trên Galaxy Tab',
      },
    ],
  },
  {
    Id: 25278,
    Text: 'Lớp kiểm thử nào chỉ cho phép gọi các phương thức setUp và tearDown một lần duy nhất, thay vì gọi 2 phương thức này trong các lần thực hiện gọi phương thức kiểm thử?',
    Marks: 1,
    AnswerId: 104777,
    Answers: [
      {
        Id: 104777,
        Text: 'SingleLaunchActivityTestCase',
      },
      {
        Id: 104778,
        Text: 'ActivityUnitTestCase',
      },
      {
        Id: 104779,
        Text: 'ActivityUnitTestCase2',
      },
      {
        Id: 104780,
        Text: 'SingleLaunchActivityTestCase2',
      },
    ],
  },
  {
    Id: 25279,
    Text: 'Phương thức nào của ViewAsserts được dùng để kiểm tra xem view cụ thể có nằm trong một ViewGroup hay không?',
    Marks: 1,
    AnswerId: 104781,
    Answers: [
      {
        Id: 104781,
        Text: 'assertGroupContains',
      },
      {
        Id: 104782,
        Text: 'assertGroupContain',
      },
      {
        Id: 104783,
        Text: 'assertViewContains',
      },
      {
        Id: 104784,
        Text: 'assertViewContains',
      },
    ],
  },
  {
    Id: 25280,
    Text: 'Phương thức nào của ActivityMonitor dùng để kiểm tra xem ActivityMonitor có cho phép Activity chạy không?',
    Marks: 1,
    AnswerId: 104785,
    Answers: [
      {
        Id: 104785,
        Text: 'isBlocking',
      },
      {
        Id: 104786,
        Text: 'isPreventing',
      },
      {
        Id: 104787,
        Text: 'isStopping',
      },
      {
        Id: 104788,
        Text: 'isLocking',
      },
    ],
  },
  {
    Id: 25281,
    Text: 'Lớp nào được sử dụng để gửi Intent giả lập tới Activity khi kiểm thử?',
    Marks: 1,
    AnswerId: 104789,
    Answers: [
      {
        Id: 104789,
        Text: 'ActivityInstrumentationTestcase2',
      },
      {
        Id: 104790,
        Text: 'ActivityUnitTestCase',
      },
      {
        Id: 104791,
        Text: 'ActivityInstrumentationTestcase',
      },
      {
        Id: 104792,
        Text: 'ActivityUnitTestCase2',
      },
    ],
  },
  {
    Id: 25282,
    Text: 'Thư viện nào hỗ trợ kiểm thử giao diện tự động?',
    Marks: 1,
    AnswerId: 104796,
    Answers: [
      {
        Id: 104793,
        Text: 'uiautomation',
      },
      {
        Id: 104794,
        Text: 'uiautomating',
      },
      {
        Id: 104795,
        Text: 'uiautomate',
      },
      {
        Id: 104796,
        Text: 'uiautomator',
      },
    ],
  },
  {
    Id: 25283,
    Text: 'Công cụ uiautomatorviewer dùng để làm gì?',
    Marks: 1,
    AnswerId: 104797,
    Answers: [
      {
        Id: 104797,
        Text: 'Hỗ trợ quét và phân tích giao diện của ứng dụng chạy trên thiết bị thật',
      },
      {
        Id: 104798,
        Text: 'Hỗ trợ quét và phân tích giao diện của ứng dụng chạy trên máy ảo',
      },
      {
        Id: 104799,
        Text: 'Hỗ trợ quét và phân tích các thành phần của ContentProvider',
      },
      {
        Id: 104800,
        Text: 'Hỗ trợ quét và phân tích các thành phần của Service',
      },
    ],
  },
  {
    Id: 25284,
    Text: 'Lớp nào không phải lớp có sẵn của uiautomator API?',
    Marks: 1,
    AnswerId: 104802,
    Answers: [
      {
        Id: 104801,
        Text: 'UiScrollable',
      },
      {
        Id: 104802,
        Text: 'UiSelectors',
      },
      {
        Id: 104803,
        Text: 'UiObject',
      },
      {
        Id: 104804,
        Text: 'UiDevice',
      },
    ],
  },
  {
    Id: 25285,
    Text: 'Sử dụng lệnh nào để cài đặt file JAR vào thiết bị kiểm thử?',
    Marks: 1,
    AnswerId: 104808,
    Answers: [
      {
        Id: 104805,
        Text: 'adb pull',
      },
      {
        Id: 104806,
        Text: 'android push',
      },
      {
        Id: 104807,
        Text: 'android pull',
      },
      {
        Id: 104808,
        Text: 'adb push',
      },
    ],
  },
  {
    Id: 25286,
    Text: 'Lệnh nào trong Window để thiết lập biến ANDROID_HOME?',
    Marks: 1,
    AnswerId: 104809,
    Answers: [
      {
        Id: 104809,
        Text: 'set ANDROID_HOME=',
      },
      {
        Id: 104810,
        Text: 'set path ANDROID_HOME=',
      },
      {
        Id: 104811,
        Text: 'setting up ANDROID_HOME=',
      },
      {
        Id: 104812,
        Text: 'set up ANDROID_HOME=',
      },
    ],
  },
  {
    Id: 25287,
    Text: 'Ngoại lệ UiAutomatorObjectNotFoundException xuất hiện khi nào?',
    Marks: 1,
    AnswerId: 104814,
    Answers: [
      {
        Id: 104813,
        Text: 'Có nhiều phần tử UI thỏa mãn điều kiện tìm kiếm',
      },
      {
        Id: 104814,
        Text: 'Không có phần tử UI nào thỏa mãn điều kiện tìm kiếm',
      },
      {
        Id: 104815,
        Text: 'Không có phần tử TextView nào thỏa mãn điều kiện tìm kiếm',
      },
      {
        Id: 104816,
        Text: 'Có nhiều phần tử UI thỏa mãn điều kiện tìm kiếm',
      },
    ],
  },
  {
    Id: 25288,
    Text: 'Phải bổ sung thư viện Junit nào để có thể kiểm thử được giao diện?',
    Marks: 1,
    AnswerId: 104820,
    Answers: [
      {
        Id: 104817,
        Text: 'Junit1',
      },
      {
        Id: 104818,
        Text: 'Junit5',
      },
      {
        Id: 104819,
        Text: 'Junit2',
      },
      {
        Id: 104820,
        Text: 'Junit3',
      },
    ],
  },
  {
    Id: 25289,
    Text: 'Lệnh sau dùng để làm gì?UiObject cancelButton = new UiObject(new UiSelector().text("Cancel") .className("android.widget.Button"));',
    Marks: 1,
    AnswerId: 104822,
    Answers: [
      {
        Id: 104821,
        Text: 'Tìm kiếm Button có giá trị description là Cancel',
      },
      {
        Id: 104822,
        Text: 'Tìm kiếm Button có giá trị text là Cancel',
      },
      {
        Id: 104823,
        Text: 'Tìm kiếm tất cả control có giá trị text là Cancel',
      },
      {
        Id: 104824,
        Text: 'Tìm kiếm Button có giá trị resource-id là Cancel',
      },
    ],
  },
  {
    Id: 25290,
    Text: 'Để kiểm thử giao diện trên Android sử dụng uiautomator, phải tạo project kiểu gì?',
    Marks: 1,
    AnswerId: 104826,
    Answers: [
      {
        Id: 104825,
        Text: 'Android Project',
      },
      {
        Id: 104826,
        Text: 'Java Project',
      },
      {
        Id: 104827,
        Text: 'Java Testing Project',
      },
      {
        Id: 104828,
        Text: 'Android Testing Project',
      },
    ],
  },
  {
    Id: 25291,
    Text: 'Đối với EditText nên cung cấp thuộc tính nào để phục vụ kiểm thử giao diện?',
    Marks: 1,
    AnswerId: 104831,
    Answers: [
      {
        Id: 104829,
        Text: 'android:key',
      },
      {
        Id: 104830,
        Text: 'android:caption',
      },
      {
        Id: 104831,
        Text: 'android:hint',
      },
      {
        Id: 104832,
        Text: 'android:id',
      },
    ],
  },
  {
    Id: 25292,
    Text: 'Khi kiểm thử Service, nếu override phương thức tearDown, phải gọi phương thức nào ở cuối phương thức tearDown?',
    Marks: 1,
    AnswerId: 104835,
    Answers: [
      {
        Id: 104833,
        Text: 'super.tearUp()',
      },
      {
        Id: 104834,
        Text: 'super.settingUp()',
      },
      {
        Id: 104835,
        Text: 'super.tearDown()',
      },
      {
        Id: 104836,
        Text: 'super.setUp()',
      },
    ],
  },
  {
    Id: 25293,
    Text: 'Lớp nào cung cấp đối tượng giả lập Application?',
    Marks: 1,
    AnswerId: 104840,
    Answers: [
      {
        Id: 104837,
        Text: 'ApplicationMock',
      },
      {
        Id: 104838,
        Text: 'Application',
      },
      {
        Id: 104839,
        Text: 'MockApplications',
      },
      {
        Id: 104840,
        Text: 'MockApplication',
      },
    ],
  },
  {
    Id: 25294,
    Text: 'Khi kiểm thử Service, người phát triển nên lưu ý điều gì?',
    Marks: 1,
    AnswerId: 104842,
    Answers: [
      {
        Id: 104841,
        Text: 'Không được kiểm thử các logic nghiệp vụ',
      },
      {
        Id: 104842,
        Text: 'Nên kiểm thử lời gọi dừng Service',
      },
      {
        Id: 104843,
        Text: 'Không được kiểm thử lời gọi dừng Service',
      },
      {
        Id: 104844,
        Text: 'Không nên sử dụng MockApplication khi kiểm thử',
      },
    ],
  },
  {
    Id: 25295,
    Text: 'Khi kiểm thử IntentService, phải sử dụng phương thức nào để kích hoạt gọi phương thức onHandleIntent?',
    Marks: 1,
    AnswerId: 104845,
    Answers: [
      {
        Id: 104845,
        Text: 'TimeUnit.Seconds.sleep',
      },
      {
        Id: 104846,
        Text: 'TimeUnit.Seconds.waiting',
      },
      {
        Id: 104847,
        Text: 'TimeUnit.Seconds.toHours',
      },
      {
        Id: 104848,
        Text: 'TimeUnit.Seconds.valueOf',
      },
    ],
  },
  {
    Id: 25296,
    Text: 'Phương thức nào được sử dụng để truyền đối tượng giả lập MockContext vào Service',
    Marks: 1,
    AnswerId: 104849,
    Answers: [
      {
        Id: 104849,
        Text: 'setContext',
      },
      {
        Id: 104850,
        Text: 'setContextObjects',
      },
      {
        Id: 104851,
        Text: 'setContextObject',
      },
      {
        Id: 104852,
        Text: 'setContexts',
      },
    ],
  },
  {
    Id: 25297,
    Text: 'Lớp ProviderTestCase2 kế thừa lớp nào?',
    Marks: 1,
    AnswerId: 104855,
    Answers: [
      {
        Id: 104853,
        Text: 'AndroidTestCase2',
      },
      {
        Id: 104854,
        Text: 'AndroidTestCase3',
      },
      {
        Id: 104855,
        Text: 'AndroidTestCase',
      },
      {
        Id: 104856,
        Text: 'AndroidTestCase1',
      },
    ],
  },
  {
    Id: 25298,
    Text: 'Khởi tạo lớp kiểm thử được thực hiện trong hàm nào?',
    Marks: 1,
    AnswerId: 104858,
    Answers: [
      {
        Id: 104857,
        Text: 'Hàm IsolatedContext của ProviderTestCase2',
      },
      {
        Id: 104858,
        Text: 'Hàm tạo của ProviderTestCase2',
      },
      {
        Id: 104859,
        Text: 'Hàm MockContentResolver của ProviderTestCase2',
      },
      {
        Id: 104860,
        Text: 'Hàm MockContentResolver của ProviderTestCase2',
      },
    ],
  },
  {
    Id: 25299,
    Text: 'Phương thức ServiceTestCase.bindService() trả về đối tượng kiểu gì?',
    Marks: 1,
    AnswerId: 104864,
    Answers: [
      {
        Id: 104861,
        Text: 'int',
      },
      {
        Id: 104862,
        Text: 'String',
      },
      {
        Id: 104863,
        Text: 'Boolean',
      },
      {
        Id: 104864,
        Text: 'iBinder',
      },
    ],
  },
  {
    Id: 25300,
    Text: 'Lớp nào cung cấp các phương thức kiểm thử ContentProvider?',
    Marks: 1,
    AnswerId: 104866,
    Answers: [
      {
        Id: 104865,
        Text: 'ContentProviderTestCase',
      },
      {
        Id: 104866,
        Text: 'ProviderTestCase2',
      },
      {
        Id: 104867,
        Text: 'ProviderTestCase',
      },
      {
        Id: 104868,
        Text: 'ContentProviderTestCase2',
      },
    ],
  },
  {
    Id: 25301,
    Text: 'Điều gì nên làm khi kiểm thử ContentProvider?',
    Marks: 1,
    AnswerId: 104871,
    Answers: [
      {
        Id: 104869,
        Text: 'Không nên kiểm thử URI không hợp lệ',
      },
      {
        Id: 104870,
        Text: 'Không nên kiểm thử hằng số mà ContentProvider cung cấp',
      },
      {
        Id: 104871,
        Text: 'Kiểm thử tất cả URI mà ContentProvider cung cấp',
      },
      {
        Id: 104872,
        Text: 'Kiểm thử URI truy vấn và URI cập nhật',
      },
    ],
  },
  {
    Id: 25302,
    Text: 'Làm thế nào để gửi sự kiện click vào nút BACK?',
    Marks: 1,
    AnswerId: 104875,
    Answers: [
      {
        Id: 104873,
        Text: 'Gọi phương thức goBackButton của lớp Solo2',
      },
      {
        Id: 104874,
        Text: 'Gọi phương thức goBackButton của lớp Solo',
      },
      {
        Id: 104875,
        Text: 'Gọi phương thức goBack của lớp Solo',
      },
      {
        Id: 104876,
        Text: 'Gọi phương thức goBack của lớp Solo2',
      },
    ],
  },
  {
    Id: 25303,
    Text: 'Phương thức nào được sử dụng để tìm kiếm Fragment theo ID?',
    Marks: 1,
    AnswerId: 104880,
    Answers: [
      {
        Id: 104877,
        Text: 'getCurrentActivity().getFragment() .findFragmentById',
      },
      {
        Id: 104878,
        Text: 'getCurrentActivity().findFragmentById',
      },
      {
        Id: 104879,
        Text: 'getActivity().getFragmentManager() .findFragmentById',
      },
      {
        Id: 104880,
        Text: 'getCurrentActivity().getFragmentManager() .findFragmentById',
      },
    ],
  },
  {
    Id: 25304,
    Text: 'Làm thế nào để sử dụng Robotium để kiểm thử ứng dụng Android?',
    Marks: 1,
    AnswerId: 104881,
    Answers: [
      {
        Id: 104881,
        Text: 'Sử dụng file JAR robotium tải trên trang http://code.google.com/p/robotium/',
      },
      {
        Id: 104882,
        Text: 'Sử dụng file JAR robotium tải trên trang android.google.com/robotium',
      },
      {
        Id: 104883,
        Text: 'Chỉ cần sử dụng android testing framework',
      },
      {
        Id: 104884,
        Text: 'Chỉ cần sử dụng KitKat SDK',
      },
    ],
  },
  {
    Id: 25305,
    Text: 'Làm thế nào để gửi sự kiện click vào nút MENU trên thiết bị?',
    Marks: 1,
    AnswerId: 104888,
    Answers: [
      {
        Id: 104885,
        Text: 'Gọi hàm sendKeys(Solo.MENU)',
      },
      {
        Id: 104886,
        Text: 'Gọi hàm sendMenus(Solo.MENU)',
      },
      {
        Id: 104887,
        Text: 'Gọi hàm sendMenu(Solo.MENU)',
      },
      {
        Id: 104888,
        Text: 'Gọi hàm sendKey(Solo.MENU)',
      },
    ],
  },
  {
    Id: 25306,
    Text: 'Làm thế nào để kiểm tra activity hiện tại có phải là Activity SecondActivity hay không?',
    Marks: 1,
    AnswerId: 104890,
    Answers: [
      {
        Id: 104889,
        Text: 'Gọi phương thức assertCurrentActivity("wrong activity", SecondActivity) của lớp Solo',
      },
      {
        Id: 104890,
        Text: 'Gọi phương thức assertCurrentActivity("wrong activity", SecondActivity.class) của lớp Solo',
      },
      {
        Id: 104891,
        Text: 'Gọi phương thức assertActivity("wrong activity", Activity.class) của lớp Solo',
      },
      {
        Id: 104892,
        Text: 'Gọi phương thức assertCurrentActivity("wrong activity", Activity.class) của lớp Solo',
      },
    ],
  },
  {
    Id: 25307,
    Text: 'Chọn chức năng nào của Robotium Recorder để ghi lại tọa độ màn hình khi kiểm thử?',
    Marks: 1,
    AnswerId: 104896,
    Answers: [
      {
        Id: 104893,
        Text: 'Click and drag',
      },
      {
        Id: 104894,
        Text: 'sleep',
      },
      {
        Id: 104895,
        Text: 'Identify class over string',
      },
      {
        Id: 104896,
        Text: 'Click and drag coordinate',
      },
    ],
  },
  {
    Id: 25308,
    Text: 'Để kiểm tra xem checkbox có được click hay không, phải sử dụng phương thức gì của lớp Solo?',
    Marks: 1,
    AnswerId: 104900,
    Answers: [
      {
        Id: 104897,
        Text: 'isCheckBoxesCheck',
      },
      {
        Id: 104898,
        Text: 'isCheckBoxCheck',
      },
      {
        Id: 104899,
        Text: 'isCheckBoxesChecked',
      },
      {
        Id: 104900,
        Text: 'isCheckBoxChecked',
      },
    ],
  },
  {
    Id: 25309,
    Text: 'Lợi ích của Robotium là gì?',
    Marks: 1,
    AnswerId: 104902,
    Answers: [
      {
        Id: 104901,
        Text: 'Kiểm thử các ứng dụng game trên Android',
      },
      {
        Id: 104902,
        Text: 'Kiểm thử các ứng dụng Android với tốc độ kiểm thử cao',
      },
      {
        Id: 104903,
        Text: 'Kiểm thử các ứng dụng Window Phone',
      },
      {
        Id: 104904,
        Text: 'Kiểm thử các ứng dụng iOS',
      },
    ],
  },
  {
    Id: 25310,
    Text: 'Sử dụng lớp nào của Robotium để kiểm thử giao diện?',
    Marks: 1,
    AnswerId: 104907,
    Answers: [
      {
        Id: 104905,
        Text: 'Solo2',
      },
      {
        Id: 104906,
        Text: 'RobotiumTestCase',
      },
      {
        Id: 104907,
        Text: 'Solo',
      },
      {
        Id: 104908,
        Text: 'RobotiumTestCase2',
      },
    ],
  },
  {
    Id: 25311,
    Text: 'Để có thể ghi thông tin screenshot vào sdcard từ robotium, phải thêm quyền gì vào AndroidManifest?',
    Marks: 1,
    AnswerId: 104912,
    Answers: [
      {
        Id: 104909,
        Text: 'android.permission.WRITE_GSERVICES',
      },
      {
        Id: 104910,
        Text: 'android.permission.WRITE_SECURE_SETTINGS',
      },
      {
        Id: 104911,
        Text: 'android.permission.WRITE_SMS',
      },
      {
        Id: 104912,
        Text: 'android.permission.WRITE_EXTERNAL_STORAGE',
      },
    ],
  },
  {
    Id: 25312,
    Text: 'Giá trị nào không phải giá trị của robolectric.logging?',
    Marks: 1,
    AnswerId: 104914,
    Answers: [
      {
        Id: 104913,
        Text: 'tên file',
      },
      {
        Id: 104914,
        Text: 'stdin',
      },
      {
        Id: 104915,
        Text: 'stdout',
      },
      {
        Id: 104916,
        Text: 'stderr',
      },
    ],
  },
  {
    Id: 25313,
    Text: 'Trong các phương thức kiểm thử của Robolectric, phải sử dụng test annotation nào?',
    Marks: 1,
    AnswerId: 104918,
    Answers: [
      {
        Id: 104917,
        Text: '@RunWithRobolectric',
      },
      {
        Id: 104918,
        Text: '@RunWith',
      },
      {
        Id: 104919,
        Text: '@With',
      },
      {
        Id: 104920,
        Text: '@Run',
      },
    ],
  },
  {
    Id: 25314,
    Text: 'Phải sử dụng file jar nào khi kiểm thử bằng Robolectric?',
    Marks: 1,
    AnswerId: 104923,
    Answers: [
      {
        Id: 104921,
        Text: 'androidjunit.jar',
      },
      {
        Id: 104922,
        Text: 'junit2.jar',
      },
      {
        Id: 104923,
        Text: 'android.jar',
      },
      {
        Id: 104924,
        Text: 'junit1.jar',
      },
    ],
  },
  {
    Id: 25315,
    Text: 'Để thiết lập giá trị mặc định cho các item trong đối tượng Config, phải thiết lập trong file nào?',
    Marks: 1,
    AnswerId: 104928,
    Answers: [
      {
        Id: 104925,
        Text: 'org.Config.properties',
      },
      {
        Id: 104926,
        Text: 'robolectric.Config.properties',
      },
      {
        Id: 104927,
        Text: 'org.robolectric.Config.property',
      },
      {
        Id: 104928,
        Text: 'org.robolectric.Config.properties',
      },
    ],
  },
  {
    Id: 25316,
    Text: 'Câu nào là đúng khi nói về Robolectric?',
    Marks: 1,
    AnswerId: 104930,
    Answers: [
      {
        Id: 104929,
        Text: 'Robolectric chỉ cho phép kiểm thử trên emulator',
      },
      {
        Id: 104930,
        Text: 'Robolectric cho phép kiểm thử không cần thiết bị thật và emulator',
      },
      {
        Id: 104931,
        Text: 'Robolectric chỉ cho phép kiểm thử trên thiết bị thật',
      },
      {
        Id: 104932,
        Text: 'Robolectric cho phép kiểm thử thiết bị iOS',
      },
    ],
  },
  {
    Id: 25317,
    Text: 'Phải sử dụng test annotation nào trước phương thức kiểm thử để có thể sử dụng file AndroidManifest tùy biến tên là ModifiedAndroidManifest?',
    Marks: 1,
    AnswerId: 104936,
    Answers: [
      {
        Id: 104933,
        Text: '@Configs(manifest = "ModifiedAndroidManifest.xml")',
      },
      {
        Id: 104934,
        Text: '@Configuration(manifest = "ModifiedAndroidManifest.xml")',
      },
      {
        Id: 104935,
        Text: '@Config(manifest = "ModifiedAndroidManifest")',
      },
      {
        Id: 104936,
        Text: '@Config(manifest = "ModifiedAndroidManifest.xml")',
      },
    ],
  },
  {
    Id: 25318,
    Text: 'File project.properties phải nằm ở đâu trong project?',
    Marks: 1,
    AnswerId: 104940,
    Answers: [
      {
        Id: 104937,
        Text: 'thư mục image',
      },
      {
        Id: 104938,
        Text: 'thư mục lib',
      },
      {
        Id: 104939,
        Text: 'thư mục test',
      },
      {
        Id: 104940,
        Text: 'thư mục gốc',
      },
    ],
  },
  {
    Id: 25319,
    Text: 'Sử dụng đối tượng nào trong Robolectric để có thể truy xuất thông tin của ImageView?',
    Marks: 1,
    AnswerId: 104944,
    Answers: [
      {
        Id: 104941,
        Text: 'ShadowImage',
      },
      {
        Id: 104942,
        Text: 'ImageView',
      },
      {
        Id: 104943,
        Text: 'Image',
      },
      {
        Id: 104944,
        Text: 'ShadowImageView',
      },
    ],
  },
  {
    Id: 25320,
    Text: 'Robolectric sử dụng JUnit phiên bản nào?',
    Marks: 1,
    AnswerId: 104945,
    Answers: [
      {
        Id: 104945,
        Text: 'JUnit4',
      },
      {
        Id: 104946,
        Text: 'JUnit3',
      },
      {
        Id: 104947,
        Text: 'JUnit2',
      },
      {
        Id: 104948,
        Text: 'JUnit1',
      },
    ],
  },
  {
    Id: 25321,
    Text: 'Đối tượng nào trong Robolectric hoạt động tương tự như các đối tượng của Android SDK?',
    Marks: 1,
    AnswerId: 104950,
    Answers: [
      {
        Id: 104949,
        Text: 'junit object',
      },
      {
        Id: 104950,
        Text: 'Shadow object',
      },
      {
        Id: 104951,
        Text: 'hidden object',
      },
      {
        Id: 104952,
        Text: 'android object',
      },
    ],
  },
  {
    Id: 25322,
    Text: 'Lệnh nào dùng để tạo Activity MyActivity, sau đó khởi tạo Activty, cuối cùng sẽ trả lại một đối tượng Activity?',
    Marks: 1,
    AnswerId: 104954,
    Answers: [
      {
        Id: 104953,
        Text: 'Robolectric.buildActivity(MyActivity.class).onCreate().start().get()',
      },
      {
        Id: 104954,
        Text: 'Robolectric.buildActivity(MyActivity.class).create().start().get()',
      },
      {
        Id: 104955,
        Text: 'Robolectric.createActivity(MyActivity.class).create().start().get()',
      },
      {
        Id: 104956,
        Text: 'Robolectric.buildActivity(MyActivity).create().start().get()',
      },
    ],
  },
  {
    Id: 25323,
    Text: 'Trong roboguide, để khai báo một resource có id là app_desc, phải sử dụng lệnh nào?',
    Marks: 1,
    AnswerId: 104957,
    Answers: [
      {
        Id: 104957,
        Text: '@InjectResources(R.id.app_desc) String app_mota',
      },
      {
        Id: 104958,
        Text: '@InjectView(R.id.app_desc) String app_mota',
      },
      {
        Id: 104959,
        Text: '@InjectResource(R.id.editText1) String app_mota',
      },
      {
        Id: 104960,
        Text: '@InjectView(app_desc) String app_mota',
      },
    ],
  },
  {
    Id: 25324,
    Text: 'RoboGuide có thể sử dụng với framework kiểm thử nào?',
    Marks: 1,
    AnswerId: 104962,
    Answers: [
      {
        Id: 104961,
        Text: 'Mockito',
      },
      {
        Id: 104962,
        Text: 'Robolectric',
      },
      {
        Id: 104963,
        Text: 'Robotium',
      },
      {
        Id: 104964,
        Text: 'Android testing framework',
      },
    ],
  },
  {
    Id: 25325,
    Text: 'Trong Robolectric từ version 2.2, lớp nào hỗ trợ quản lý vòng đời Activity giống với Android SDK?',
    Marks: 1,
    AnswerId: 104965,
    Answers: [
      {
        Id: 104965,
        Text: 'Activities',
      },
      {
        Id: 104966,
        Text: 'ActivityControlling',
      },
      {
        Id: 104967,
        Text: 'ActivityController',
      },
      {
        Id: 104968,
        Text: 'Actiivty',
      },
    ],
  },
  {
    Id: 25326,
    Text: 'Câu nào là đúng đối với việc quản lý tài nguyên trong Robolectric?',
    Marks: 1,
    AnswerId: 104971,
    Answers: [
      {
        Id: 104969,
        Text: 'Chỉ cho phép thay đổi cách tài nguyên được nạp dựa trên yếu tố thiết bị',
      },
      {
        Id: 104970,
        Text: 'Chỉ cho phép thay đổi cách tài nguyên được nạp dựa trên các yếu tố thiết bị, cỡ màn hình',
      },
      {
        Id: 104971,
        Text: 'Cho phép thay đổi cách tài nguyên được nạp dựa trên các yếu tố thiết bị, cỡ màn hình,ngôn ngữ',
      },
      {
        Id: 104972,
        Text: 'Không cho phép thay đổi tài nguyên',
      },
    ],
  },
  {
    Id: 25327,
    Text: 'Để xác định tài nguyên cho phương thức kiểm thử cụ thể, phải sử dụng từ khóa nào trước phương thức đó?',
    Marks: 1,
    AnswerId: 104974,
    Answers: [
      {
        Id: 104973,
        Text: '@Configurtor',
      },
      {
        Id: 104974,
        Text: '@Config',
      },
      {
        Id: 104975,
        Text: '@Configs',
      },
      {
        Id: 104976,
        Text: '@Configuration',
      },
    ],
  },
  {
    Id: 25328,
    Text: 'Để xác định tài nguyên cho cả phương thức cụ thể, phải dùng từ khóa @Config ở đâu?',
    Marks: 1,
    AnswerId: 104978,
    Answers: [
      {
        Id: 104977,
        Text: 'Trong file resource',
      },
      {
        Id: 104978,
        Text: 'Trong từng test case',
      },
      {
        Id: 104979,
        Text: 'Trong file values.xml',
      },
      {
        Id: 104980,
        Text: 'Trong file test',
      },
    ],
  },
  {
    Id: 25329,
    Text: 'Trong Robolectric từ version 2.2, phương thức nào được sử dụng để quản lý Activity?',
    Marks: 1,
    AnswerId: 104982,
    Answers: [
      {
        Id: 104981,
        Text: 'Robolectric.onCreateAcitivity',
      },
      {
        Id: 104982,
        Text: 'Robolectric.buildActivity',
      },
      {
        Id: 104983,
        Text: 'Robolectric.startActivity',
      },
      {
        Id: 104984,
        Text: 'Robolectric.createActivity',
      },
    ],
  },
  {
    Id: 25330,
    Text: 'Trong roboguide, để khai báo một EditText có id là editText1, phải sử dụng lệnh nào?',
    Marks: 1,
    AnswerId: 104988,
    Answers: [
      {
        Id: 104985,
        Text: '@InjectView(editText1) EditText name',
      },
      {
        Id: 104986,
        Text: '@InjectResource(R.id.editText1) EditText name',
      },
      {
        Id: 104987,
        Text: '@Inject(R.id.editText1) EditText name',
      },
      {
        Id: 104988,
        Text: '@InjectView(R.id.editText1) EditText name',
      },
    ],
  },
  {
    Id: 25331,
    Text: 'Roboguice không thể chạy trên IDE nào?',
    Marks: 1,
    AnswerId: 104989,
    Answers: [
      {
        Id: 104989,
        Text: 'Net Bean',
      },
      {
        Id: 104990,
        Text: 'Android Studio',
      },
      {
        Id: 104991,
        Text: 'IntelliJ',
      },
      {
        Id: 104992,
        Text: 'Eclipse',
      },
    ],
  },
  {
    Id: 25332,
    Text: 'Thực thể key.store được lưu trữ ở đâu?',
    Marks: 1,
    AnswerId: 104996,
    Answers: [
      {
        Id: 104993,
        Text: 'ant.prop',
      },
      {
        Id: 104994,
        Text: 'apk.properties',
      },
      {
        Id: 104995,
        Text: 'apk.prop',
      },
      {
        Id: 104996,
        Text: 'ant.properties',
      },
    ],
  },
  {
    Id: 25333,
    Text: 'Khi kiểm tra và cập nhật file manifest trước khi phát hành, ta cần kiểm tra các thành phần nào?',
    Marks: 1,
    AnswerId: 105000,
    Answers: [
      {
        Id: 104997,
        Text: ', android:CodeLabel, android:versionName',
      },
      {
        Id: 104998,
        Text: ', android:versionCode, android:versionLabel',
      },
      {
        Id: 104999,
        Text: ', android:labelCode, android:versionName',
      },
      {
        Id: 105000,
        Text: ', android:versionCode, android:versionName',
      },
    ],
  },
  {
    Id: 25334,
    Text: 'Để xóa các tài nguyên không cần thiết khỏi ứng dụng, ta cần vào các thư mục nào?',
    Marks: 1,
    AnswerId: 105001,
    Answers: [
      {
        Id: 105001,
        Text: 'jni/, lib/, và src/',
      },
      {
        Id: 105002,
        Text: 'jni/, lib/, src/ và code/',
      },
      {
        Id: 105003,
        Text: 'jni/, lib/, src/, code/ và img/',
      },
      {
        Id: 105004,
        Text: 'code/ và img/',
      },
    ],
  },
  {
    Id: 25335,
    Text: 'Google Play là gì?',
    Marks: 1,
    AnswerId: 105005,
    Answers: [
      {
        Id: 105005,
        Text: 'Chợ ứng dụng android',
      },
      {
        Id: 105006,
        Text: 'Thư viện android',
      },
      {
        Id: 105007,
        Text: 'Chợ phần cứng mobile',
      },
      {
        Id: 105008,
        Text: 'Thư viện .net',
      },
    ],
  },
  {
    Id: 25336,
    Text: 'Để ứng dụng có thể phát hành, bạn cần làm gì?',
    Marks: 1,
    AnswerId: 105010,
    Answers: [
      {
        Id: 105009,
        Text: 'Có một khóa riêng phù hợp; Biên dịch ứng dụng trong chế độ phát hành; Đăng ký ứng dụng với khóa riêng;Tạo gói jdk',
      },
      {
        Id: 105010,
        Text: 'Có một khóa riêng phù hợp; Biên dịch ứng dụng trong chế độ phát hành; Đăng ký ứng dụng với khóa riêng;Tạo gói apk',
      },
      {
        Id: 105011,
        Text: 'Có một khóa riêng phù hợp; Biên dịch ứng dụng trong chế độ phát hành; Đăng ký ứng dụng với khóa riêng;Tạo gói apk và gói jdk',
      },
      {
        Id: 105012,
        Text: 'Có một khóa riêng phù hợp; Biên dịch ứng dụng trong chế độ phát hành; Đăng ký ứng dụng với khóa riêng;Tạo gói apk, gói jar và gói jdk',
      },
    ],
  },
  {
    Id: 25337,
    Text: 'Để xây dựng ứng dụng phát hành bằng dòng lệnh, ta dùng lệnh nào?',
    Marks: 1,
    AnswerId: 105013,
    Answers: [
      {
        Id: 105013,
        Text: 'ant release',
      },
      {
        Id: 105014,
        Text: 'ant debug',
      },
      {
        Id: 105015,
        Text: 'apk debug',
      },
      {
        Id: 105016,
        Text: 'apk release',
      },
    ],
  },
  {
    Id: 25338,
    Text: 'Lệnh adb dùng để làm gì?',
    Marks: 1,
    AnswerId: 105018,
    Answers: [
      {
        Id: 105017,
        Text: 'Cài đặt file jdk',
      },
      {
        Id: 105018,
        Text: 'Cài đặt file apk',
      },
      {
        Id: 105019,
        Text: 'Ẩn file apk',
      },
      {
        Id: 105020,
        Text: 'Ẩn file jdk',
      },
    ],
  },
  {
    Id: 25339,
    Text: 'Để chạy ứng dụng trên thiết bị thật, chúng ta cần làm gì?',
    Marks: 1,
    AnswerId: 105021,
    Answers: [
      {
        Id: 105021,
        Text: 'Enable USB debugging',
      },
      {
        Id: 105022,
        Text: 'Disable USB debugging',
      },
      {
        Id: 105023,
        Text: 'Enable Apache debugging',
      },
      {
        Id: 105024,
        Text: 'Enable USB debuger',
      },
    ],
  },
  {
    Id: 25340,
    Text: 'Lệnh jarsigner dùng để làm gì?',
    Marks: 1,
    AnswerId: 105028,
    Answers: [
      {
        Id: 105025,
        Text: 'Xóa ứng dụng',
      },
      {
        Id: 105026,
        Text: 'Đăng nhập ứng dụng',
      },
      {
        Id: 105027,
        Text: 'Đăng xuất ứng dụng',
      },
      {
        Id: 105028,
        Text: 'Đăng ký ứng dụng với khóa riêng',
      },
    ],
  },
  {
    Id: 25341,
    Text: 'Tham số validity của keytool có ý nghĩa gì?',
    Marks: 1,
    AnswerId: 105029,
    Answers: [
      {
        Id: 105029,
        Text: 'Thời gian hiệu lực',
      },
      {
        Id: 105030,
        Text: 'Thời gian upload ứng dụng',
      },
      {
        Id: 105031,
        Text: 'Thuật toán mã hóa',
      },
      {
        Id: 105032,
        Text: 'Bí danh ứng dụng',
      },
    ],
  },
]
export const ADBS = [
  {
    Id: 25026,
    Text: 'Điều khiển được sử dụng để hiển thị nội dụng trang web trong ứng dụng Android?',
    Marks: 1,
    AnswerId: 103784,
    Answers: [
      {
        Id: 103783,
        Text: 'Button',
      },
      {
        Id: 103784,
        Text: 'WebView',
      },
      {
        Id: 103785,
        Text: 'Spinner',
      },
      {
        Id: 103786,
        Text: 'EditText',
      },
    ],
  },
  {
    Id: 25027,
    Text: 'Đối với URLConnection, sử dụng phương thức nào để thiết lập timeout cho connection?',
    Marks: 1,
    AnswerId: 103790,
    Answers: [
      {
        Id: 103787,
        Text: 'setURLTimeout()',
      },
      {
        Id: 103788,
        Text: 'setInternetTimeout()',
      },
      {
        Id: 103789,
        Text: 'setTimeout()',
      },
      {
        Id: 103790,
        Text: 'setConnectTimeout()',
      },
    ],
  },
  {
    Id: 25028,
    Text: 'Cho đoạn mã lệnh sau:wv.setWebChromeClient(new WebChromeClient() { @Override public void onReceivedTitle(WebView view, String title) { getWindow().setTitle(title); } });Hãy cho biết đoạn lệnh trên dùng để làm gì?',
    Marks: 1,
    AnswerId: 103791,
    Answers: [
      {
        Id: 103791,
        Text: 'Thay đổi title của trang web',
      },
      {
        Id: 103792,
        Text: 'Đóng trang web',
      },
      {
        Id: 103793,
        Text: 'Thay đổi nội dung của trang web',
      },
      {
        Id: 103794,
        Text: 'Lấy thông tin title của trang web',
      },
    ],
  },
  {
    Id: 25029,
    Text: 'Sử dụng lớp nào để truy cập và thay đổi thông tin trên trình duyệt mặc định của hệ điều hành Android?',
    Marks: 1,
    AnswerId: 103798,
    Answers: [
      {
        Id: 103795,
        Text: 'WebClient',
      },
      {
        Id: 103796,
        Text: 'WebSafariClient',
      },
      {
        Id: 103797,
        Text: 'WebFirefoxClient',
      },
      {
        Id: 103798,
        Text: 'WebViewClient',
      },
    ],
  },
  {
    Id: 25030,
    Text: 'Câu nào là sai đối với WebView?',
    Marks: 1,
    AnswerId: 103800,
    Answers: [
      {
        Id: 103799,
        Text: 'Không có widget cho brownser activity',
      },
      {
        Id: 103800,
        Text: 'Không thể sử dụng tag trong XML layout',
      },
      {
        Id: 103801,
        Text: 'Click vào link sẽ gọi trình duyệt',
      },
      {
        Id: 103802,
        Text: 'Có thể sử dụng tag trong XML layout',
      },
    ],
  },
  {
    Id: 25031,
    Text: 'Phương thức nào của WebSettings để cho phép WebView hỗ trợ JavaScript?',
    Marks: 1,
    AnswerId: 103806,
    Answers: [
      {
        Id: 103803,
        Text: 'setJavaScriptEnabled(false)',
      },
      {
        Id: 103804,
        Text: 'setJavaScript(true)',
      },
      {
        Id: 103805,
        Text: 'setJavaScriptEnable(true)',
      },
      {
        Id: 103806,
        Text: 'setJavaScriptEnabled(true)',
      },
    ],
  },
  {
    Id: 25032,
    Text: 'Khi thời gian kết nối đến một URL quá timeout, phương thức getInputStream() sẽ đưa ra ngoại lệ nào?',
    Marks: 1,
    AnswerId: 103809,
    Answers: [
      {
        Id: 103807,
        Text: 'java.net.TimeoutException',
      },
      {
        Id: 103808,
        Text: 'java.net.SocketException',
      },
      {
        Id: 103809,
        Text: 'java.net.SocketTimeoutException',
      },
      {
        Id: 103810,
        Text: 'java.net.SocketTimeout',
      },
    ],
  },
  {
    Id: 25033,
    Text: 'Chương trình sử dụng WebView phải có quyền gì?',
    Marks: 1,
    AnswerId: 103811,
    Answers: [
      {
        Id: 103811,
        Text: 'android.permission.AUTHENTICATE_ACCOUNTS',
      },
      {
        Id: 103812,
        Text: 'android.permission.BIND_APPWIDGET',
      },
      {
        Id: 103813,
        Text: 'android.permission.INTERNET',
      },
      {
        Id: 103814,
        Text: 'android.permission.BIND_INPUT_METHOD',
      },
    ],
  },
  {
    Id: 25034,
    Text: 'Sử dụng phương thức nào để lấy thông tin tiêu đề trên trang web chạy trên trình duyệt?',
    Marks: 1,
    AnswerId: 103817,
    Answers: [
      {
        Id: 103815,
        Text: 'onReceiveTitle',
      },
      {
        Id: 103816,
        Text: 'onReceivedHeader',
      },
      {
        Id: 103817,
        Text: 'onReceivedTitle',
      },
      {
        Id: 103818,
        Text: 'onReceiveHeader',
      },
    ],
  },
  {
    Id: 25035,
    Text: 'Để tải thông tin qua HTTP, chúng ta phải làm gì?',
    Marks: 1,
    AnswerId: 103821,
    Answers: [
      {
        Id: 103819,
        Text: 'Sử dụng HttpGet',
      },
      {
        Id: 103820,
        Text: 'Không thể tải thông tin qua HTTP',
      },
      {
        Id: 103821,
        Text: 'Sử dụng thư viện chuẩn của Java',
      },
      {
        Id: 103822,
        Text: 'Sử dụng URLRequesting',
      },
    ],
  },
  {
    Id: 25036,
    Text: 'URI nào được sử dụng để lấy bookmark của trình duyệt?',
    Marks: 1,
    AnswerId: 103824,
    Answers: [
      {
        Id: 103823,
        Text: 'content://firefox/bookmarks',
      },
      {
        Id: 103824,
        Text: 'content://browser/bookmarks',
      },
      {
        Id: 103825,
        Text: 'content://chrome/bookmarks',
      },
      {
        Id: 103826,
        Text: 'content://safari/bookmarks',
      },
    ],
  },
  {
    Id: 25037,
    Text: 'Để lưu trữ SQLite trên thẻ nhớ, phải cung cấp quyền gì trong Android Manifest?',
    Marks: 1,
    AnswerId: 103828,
    Answers: [
      {
        Id: 103827,
        Text: 'android.permission.ACCESS_CHECKIN_PROPERTIES',
      },
      {
        Id: 103828,
        Text: 'android.permission.WRITE_EXTERNAL_STORAGE',
      },
      {
        Id: 103829,
        Text: 'android.permission.ACCESS_CHECKIN_PROPERTIES',
      },
      {
        Id: 103830,
        Text: 'android.permission.WRITE_SETTINGS',
      },
    ],
  },
  {
    Id: 25038,
    Text: 'Để sử dụng ContentProvider truy cập danh sách cuộc gọi gần đây, bạn phải bổ sung thêm quyền gì vào Android Manifest?',
    Marks: 1,
    AnswerId: 103833,
    Answers: [
      {
        Id: 103831,
        Text: 'android.permission.READ_CALLS',
      },
      {
        Id: 103832,
        Text: 'android.permission.READ_CALL',
      },
      {
        Id: 103833,
        Text: 'android.permission.READ_CALL_LOG',
      },
      {
        Id: 103834,
        Text: 'android.permission.READ_HISTORY',
      },
    ],
  },
  {
    Id: 25039,
    Text: 'Trong SQLiteOpenHelper, phương thức nào được gọi khi cơ sở dữ liệu được tạo ra lần đầu tiên?',
    Marks: 1,
    AnswerId: 103835,
    Answers: [
      {
        Id: 103835,
        Text: 'onCreate',
      },
      {
        Id: 103836,
        Text: 'onUpgrade',
      },
      {
        Id: 103837,
        Text: 'onResume',
      },
      {
        Id: 103838,
        Text: 'onOpen',
      },
    ],
  },
  {
    Id: 25040,
    Text: 'URI nào được sử dụng lấy thông tin của liên hệ có ID bằng 6?',
    Marks: 1,
    AnswerId: 103839,
    Answers: [
      {
        Id: 103839,
        Text: 'content://contacts/people/6',
      },
      {
        Id: 103840,
        Text: 'content://contacts/contact/6',
      },
      {
        Id: 103841,
        Text: 'content://contacts/people/3',
      },
      {
        Id: 103842,
        Text: 'content://contacts/person/6',
      },
    ],
  },
  {
    Id: 25041,
    Text: 'Lệnh database.delete("lop",null,null) sẽ xóa toàn bộ dữ liệu của bảng Lớp?',
    Marks: 1,
    AnswerId: 103843,
    Answers: [
      {
        Id: 103843,
        Text: 'Đúng',
      },
      {
        Id: 103844,
        Text: 'array',
      },
      {
        Id: 103845,
        Text: 'cursor',
      },
      {
        Id: 103846,
        Text: 'custom type',
      },
      {
        Id: 103847,
        Text: 'Sai',
      },
      {
        Id: 103848,
        Text: 'String',
      },
    ],
  },
  {
    Id: 25042,
    Text: 'Lớp nào trợ giúp tạo ra cơ sở dữ liệu và phiên bản cho chúng?',
    Marks: 1,
    AnswerId: 103852,
    Answers: [
      {
        Id: 103849,
        Text: 'SQLiteCloseHelper',
      },
      {
        Id: 103850,
        Text: 'SQLiteHelper',
      },
      {
        Id: 103851,
        Text: 'SQLiteOpenHelp',
      },
      {
        Id: 103852,
        Text: 'SQLiteOpenHelper',
      },
    ],
  },
  {
    Id: 25043,
    Text: 'Hãy cho biết điều gì xảy ra sau khi chạy các lệnh sau: ContentValues values = new ContentValues(); values.put("tensinhvien","abc"); values.put("tuoi",20); database.insert(tbSinhvien, null, values);',
    Marks: 1,
    AnswerId: 103853,
    Answers: [
      {
        Id: 103853,
        Text: 'Chương trình có lỗi khi chạy',
      },
      {
        Id: 103854,
        Text: 'Chương trình có lỗi khi biên dịch',
      },
      {
        Id: 103855,
        Text: 'Chương trình sẽ thêm mới sinh viên có tên là abc và tuổi là 20',
      },
      {
        Id: 103856,
        Text: 'Chương trình sẽ thêm mới sinh viên và các trường có giá trị là rỗng',
      },
    ],
  },
  {
    Id: 25044,
    Text: 'Trong SQLiteOpenHelper, phương thức nào được gọi khi cơ sở dữ liệu được mở?',
    Marks: 1,
    AnswerId: 103858,
    Answers: [
      {
        Id: 103857,
        Text: 'upUpgrade',
      },
      {
        Id: 103858,
        Text: 'onOpen',
      },
      {
        Id: 103859,
        Text: 'onCreate',
      },
      {
        Id: 103860,
        Text: 'onResume',
      },
    ],
  },
  {
    Id: 25045,
    Text: 'Hãy cho biết điều gì xảy ra sau khi chạy các lệnh sau: ContentValues values = new ContentValues(); values.put(tensinhvien,abc); values.put(tuoi,30); database.insert(tbSinhvien, null, values);',
    Marks: 1,
    AnswerId: 103862,
    Answers: [
      {
        Id: 103861,
        Text: 'Chương trình sẽ thêm mới sinh viên có tên là abc và tuổi là 30',
      },
      {
        Id: 103862,
        Text: 'Chương trình có lỗi khi biên dịch',
      },
      {
        Id: 103863,
        Text: 'Chương trình có lỗi khi chạy',
      },
      {
        Id: 103864,
        Text: 'Chương trình sẽ thêm mới sinh viên và các trường có giá trị là rỗng',
      },
    ],
  },
  {
    Id: 25046,
    Text: 'Lớp SharedPreferences cung cấp một framework để lưu trữ dữ liệu dưới dạng key value?',
    Marks: 1,
    AnswerId: 103865,
    Answers: [
      {
        Id: 103865,
        Text: 'Đúng',
      },
      {
        Id: 103866,
        Text: 'Sai',
      },
    ],
  },
  {
    Id: 25047,
    Text: 'Để xóa toàn bộ dữ liệu trong SharePreferences, sử dụng phương thức gì?',
    Marks: 1,
    AnswerId: 103870,
    Answers: [
      {
        Id: 103867,
        Text: 'update()',
      },
      {
        Id: 103868,
        Text: 'delete()',
      },
      {
        Id: 103869,
        Text: 'suspend()',
      },
      {
        Id: 103870,
        Text: 'clear()',
      },
    ],
  },
  {
    Id: 25048,
    Text: 'Sử dụng phương thức nào để lấy giá trị có kiểu String từ trong SharePreferences, nếu không có thì để giá trị mặc định là xâu rỗng?',
    Marks: 1,
    AnswerId: 103871,
    Answers: [
      {
        Id: 103871,
        Text: 'getString("cardnumber","")',
      },
      {
        Id: 103872,
        Text: 'getInt("cardnumber","")',
      },
      {
        Id: 103873,
        Text: 'getStringValue("cardnumber","")',
      },
      {
        Id: 103874,
        Text: 'gettingString("cardnumber","")',
      },
    ],
  },
  {
    Id: 25049,
    Text: 'Các thông tin được lưu vào bộ nhớ trong sẽ không bị xóa khi ứng dụng bị xóa?',
    Marks: 1,
    AnswerId: 103875,
    Answers: [
      {
        Id: 103875,
        Text: 'Sai',
      },
      {
        Id: 103876,
        Text: 'Đúng',
      },
    ],
  },
  {
    Id: 25050,
    Text: 'Khi thiết bị Android thiếu dung lượng, hệ điều hành Android sẽ tự động xóa file cache để dọn dẹp bộ nhớ?',
    Marks: 1,
    AnswerId: 103877,
    Answers: [
      {
        Id: 103877,
        Text: 'Đúng',
      },
      {
        Id: 103878,
        Text: 'Sai',
      },
    ],
  },
  {
    Id: 25051,
    Text: 'Ưu điểm của lưu trữ thông tin trên thẻ nhớ so với bộ nhớ trong là bảo mật hơn?',
    Marks: 1,
    AnswerId: 103880,
    Answers: [
      {
        Id: 103879,
        Text: 'Đúng',
      },
      {
        Id: 103880,
        Text: 'Sai',
      },
    ],
  },
  {
    Id: 25052,
    Text: 'Mặc định, thông tin lưu trữ trong bộ nhớ trong của ứng dụng Android là riêng tư đối với các ứng dụng khác?',
    Marks: 1,
    AnswerId: 103881,
    Answers: [
      {
        Id: 103881,
        Text: 'Đúng',
      },
      {
        Id: 103882,
        Text: 'Sai',
      },
    ],
  },
  {
    Id: 25053,
    Text: 'Sử dụng phương thức nào để lấy đường dẫn đến file test.txt trên SDCard?',
    Marks: 1,
    AnswerId: 103885,
    Answers: [
      {
        Id: 103883,
        Text: 'Environment.getExternalStorageDirectory().getPath() + "/test.txt"',
      },
      {
        Id: 103884,
        Text: 'Environment.getStorageDirectory().getAbsolutePath() + "/test.txt"',
      },
      {
        Id: 103885,
        Text: 'Environment.getExternalStorageDirectory().getAbsolutePath() + "/test.txt"',
      },
      {
        Id: 103886,
        Text: 'Environment.getInternalStorageDirectory().getAbsolutePath() + "/test.txt"',
      },
    ],
  },
  {
    Id: 25054,
    Text: 'File SharePreference được lưu dưới dạng định dạng gì?',
    Marks: 1,
    AnswerId: 103889,
    Answers: [
      {
        Id: 103887,
        Text: 'ASP.NET',
      },
      {
        Id: 103888,
        Text: 'HTML5',
      },
      {
        Id: 103889,
        Text: 'XML',
      },
      {
        Id: 103890,
        Text: 'HTML',
      },
    ],
  },
  {
    Id: 25055,
    Text: 'Khi ứng dụng bị đóng, dữ liệu SharedPreferences sẽ tự động bị xóa theo?',
    Marks: 1,
    AnswerId: 103891,
    Answers: [
      {
        Id: 103891,
        Text: 'Đúng',
      },
      {
        Id: 103892,
        Text: 'Sai',
      },
    ],
  },
  {
    Id: 25056,
    Text: 'Intent filter được sử dụng để gọi Activity trong chương trình?',
    Marks: 1,
    AnswerId: 103893,
    Answers: [
      {
        Id: 103893,
        Text: 'FALSE',
      },
      {
        Id: 103894,
        Text: 'TRUE',
      },
    ],
  },
  {
    Id: 25057,
    Text: 'Để khởi tạo Activity và lấy kết quả trả về, phải sử dụng phương thức nào?',
    Marks: 1,
    AnswerId: 103896,
    Answers: [
      {
        Id: 103895,
        Text: 'startActivityResult()',
      },
      {
        Id: 103896,
        Text: 'startActivityForResult()',
      },
      {
        Id: 103897,
        Text: 'startActivity()',
      },
      {
        Id: 103898,
        Text: 'Không có phương thức nào hỗ trợ lấy kết quả trả về khi khởi tạo một Activity',
      },
    ],
  },
  {
    Id: 25058,
    Text: 'Dùng phương thức gì để thêm dữ liệu của Int vào Bundle?',
    Marks: 1,
    AnswerId: 103899,
    Answers: [
      {
        Id: 103899,
        Text: 'putInt',
      },
      {
        Id: 103900,
        Text: 'putInteger',
      },
      {
        Id: 103901,
        Text: 'pushInt',
      },
      {
        Id: 103902,
        Text: 'pushInteger',
      },
    ],
  },
  {
    Id: 25059,
    Text: 'Để thực hiện cuộc gọi trong ứng dụng Android, phải sử dụng perrmission gì?',
    Marks: 1,
    AnswerId: 103906,
    Answers: [
      {
        Id: 103903,
        Text: 'android.permission.CALL',
      },
      {
        Id: 103904,
        Text: 'android.permission.CALL_TEL',
      },
      {
        Id: 103905,
        Text: 'android.permission.CALLING',
      },
      {
        Id: 103906,
        Text: 'android.permission.CALL_PHONE',
      },
    ],
  },
  {
    Id: 25060,
    Text: 'Trong Bundle,dùng phương thức gì để nhận dữ liệu trả về có kiểu Int?',
    Marks: 1,
    AnswerId: 103907,
    Answers: [
      {
        Id: 103907,
        Text: 'getInt',
      },
      {
        Id: 103908,
        Text: 'receiveInteger',
      },
      {
        Id: 103909,
        Text: 'getInteger',
      },
      {
        Id: 103910,
        Text: 'receiveInt',
      },
    ],
  },
  {
    Id: 25061,
    Text: 'Sử dụng đối tượng gì để truyền dữ liệu qua lại giữa các Activity?',
    Marks: 1,
    AnswerId: 103911,
    Answers: [
      {
        Id: 103911,
        Text: 'Bundle',
      },
      {
        Id: 103912,
        Text: 'Package',
      },
      {
        Id: 103913,
        Text: 'BundleData',
      },
      {
        Id: 103914,
        Text: 'PackageData',
      },
    ],
  },
  {
    Id: 25062,
    Text: 'Cặp Action/Data dưới đây dùng để làm gì? ACTION_EDIT content://contacts/people/2',
    Marks: 1,
    AnswerId: 103916,
    Answers: [
      {
        Id: 103915,
        Text: 'Xem thông tin liên hệ có ID bằng 2',
      },
      {
        Id: 103916,
        Text: 'Sửa thông tin liên hệ có ID bằng 2',
      },
      {
        Id: 103917,
        Text: 'Thêm mới thông tin liên hệ có ID bằng 2',
      },
      {
        Id: 103918,
        Text: 'Xóa thông tin liên hệ có ID bằng 2',
      },
    ],
  },
  {
    Id: 25063,
    Text: 'URI viết tắt của từ gì?',
    Marks: 1,
    AnswerId: 103920,
    Answers: [
      {
        Id: 103919,
        Text: 'Uniform Resource Identifying',
      },
      {
        Id: 103920,
        Text: 'Uniform Resource Identifier',
      },
      {
        Id: 103921,
        Text: 'Uniform Resources Identifier',
      },
      {
        Id: 103922,
        Text: 'Unique Resource Identifier',
      },
    ],
  },
  {
    Id: 25064,
    Text: 'Để di chuyển từ Activity này đến Activity khác sử dụng thành phần gì trong Android?',
    Marks: 1,
    AnswerId: 103924,
    Answers: [
      {
        Id: 103923,
        Text: 'Activity',
      },
      {
        Id: 103924,
        Text: 'Intent',
      },
      {
        Id: 103925,
        Text: 'Intent Filter',
      },
      {
        Id: 103926,
        Text: 'Content Provider',
      },
    ],
  },
  {
    Id: 25065,
    Text: 'Để chỉ đến các tài nguyên trong máy, ví dụ như xem file mp3, chúng ta phải sử dụng cái gì?',
    Marks: 1,
    AnswerId: 103930,
    Answers: [
      {
        Id: 103927,
        Text: 'URF',
      },
      {
        Id: 103928,
        Text: 'URL',
      },
      {
        Id: 103929,
        Text: 'URN',
      },
      {
        Id: 103930,
        Text: 'URI',
      },
    ],
  },
  {
    Id: 25066,
    Text: 'Lớp nào được sử dụng để khởi tạo menu từ file XML menu?',
    Marks: 1,
    AnswerId: 103933,
    Answers: [
      {
        Id: 103931,
        Text: 'Menu',
      },
      {
        Id: 103932,
        Text: 'Xmlmenu',
      },
      {
        Id: 103933,
        Text: 'MenuInflater',
      },
      {
        Id: 103934,
        Text: 'MenuInflating',
      },
    ],
  },
  {
    Id: 25067,
    Text: 'Phương thức nào dùng để enable hoặc disable một item trong Menu?',
    Marks: 1,
    AnswerId: 103936,
    Answers: [
      {
        Id: 103935,
        Text: 'Các item trong Menu không thể disable',
      },
      {
        Id: 103936,
        Text: 'onPrepareOptionsMenu',
      },
      {
        Id: 103937,
        Text: 'onCreateOptionsMenu',
      },
      {
        Id: 103938,
        Text: 'onShowOptionsMenu',
      },
    ],
  },
  {
    Id: 25068,
    Text: 'Lệnh nào dùng để hiển thị một thông báo trên màn hình?',
    Marks: 1,
    AnswerId: 103940,
    Answers: [
      {
        Id: 103939,
        Text: 'Toast.makeText(context, “Message”);',
      },
      {
        Id: 103940,
        Text: 'Toast.makeText(context, “Message”, Toast.LENGTH_SHORT).show();',
      },
      {
        Id: 103941,
        Text: 'Toast.makeText(“Message”, Toast.LENGTH_SHORT).show();',
      },
      {
        Id: 103942,
        Text: 'Toast.makeText(context, “Message”, Toast.LENGTH_SHORT);',
      },
      {
        Id: 103943,
        Text: 'Toast.displayText(“Message”, Toast.LENGTH_SHORT).show();',
      },
    ],
  },
  {
    Id: 25069,
    Text: 'Phương thức setOnCreateContextMenuListener được sử dụng để làm gì?',
    Marks: 1,
    AnswerId: 103945,
    Answers: [
      {
        Id: 103944,
        Text: 'Xử lý sự kiện khi một menu item của Context Menu được chọn',
      },
      {
        Id: 103945,
        Text: 'Đăng ký một context menu với một View',
      },
      {
        Id: 103946,
        Text: 'Xử lý sự kiện khi một menu item của Option Menu được chọn',
      },
      {
        Id: 103947,
        Text: 'Đăng ký một option menu với một View',
      },
    ],
  },
  {
    Id: 25070,
    Text: 'Khai báo layout cho XML Menu nằm trong thư mục nào?',
    Marks: 1,
    AnswerId: 103948,
    Answers: [
      {
        Id: 103948,
        Text: 'res/menu',
      },
      {
        Id: 103949,
        Text: 'res/values',
      },
      {
        Id: 103950,
        Text: 'res/drawable-hdpi',
      },
      {
        Id: 103951,
        Text: 'res/layout',
      },
      {
        Id: 103952,
        Text: 'res/drawable-ldpi',
      },
    ],
  },
  {
    Id: 25071,
    Text: 'Thư mục nào để chứa layout cho giao diện khi màn hình ở chế độ portrait mode?',
    Marks: 1,
    AnswerId: 103956,
    Answers: [
      {
        Id: 103953,
        Text: 'res/values',
      },
      {
        Id: 103954,
        Text: 'res/layout-land',
      },
      {
        Id: 103955,
        Text: 'res/menu',
      },
      {
        Id: 103956,
        Text: 'res/layout',
      },
    ],
  },
  {
    Id: 25072,
    Text: 'Làm thế nào để khi chọn một thông báo notification trên Status Bar, sẽ hiển thị một giao diện tương ứng?',
    Marks: 1,
    AnswerId: 103957,
    Answers: [
      {
        Id: 103957,
        Text: 'Tạo một Intent để khởi tạo một Activity khi notification được chọn',
      },
      {
        Id: 103958,
        Text: 'Sử dụng Toast.makeText',
      },
      {
        Id: 103959,
        Text: 'Tạo mới một Diaglog',
      },
      {
        Id: 103960,
        Text: 'Không thể hiển thị một giao diện tương ứng khi chọn một thông báo notification trên Status Bar',
      },
    ],
  },
  {
    Id: 25073,
    Text: 'Câu nào sau đây là đúng?',
    Marks: 1,
    AnswerId: 103964,
    Answers: [
      {
        Id: 103961,
        Text: 'Option Menu hỗ trợ checkbox',
      },
      {
        Id: 103962,
        Text: 'Option Menu và Context Menu xuất hiện khi ấn vào phím Menu trên điện thoại',
      },
      {
        Id: 103963,
        Text: 'Option Menu hỗ trợ radiobutton',
      },
      {
        Id: 103964,
        Text: 'Option Menu xuất hiện khi ấn vào phím Menu, Context Menu xuất hiện khi click vào View một vài giây',
      },
    ],
  },
  {
    Id: 25074,
    Text: 'Phương thức nào được sử dụng để xử lý khi một View được click và giữ một lúc?',
    Marks: 1,
    AnswerId: 103966,
    Answers: [
      {
        Id: 103965,
        Text: 'setOnTouchListener',
      },
      {
        Id: 103966,
        Text: 'setOnLongClickListener',
      },
      {
        Id: 103967,
        Text: 'setOnKeyListener',
      },
      {
        Id: 103968,
        Text: 'setOnClickListener',
      },
    ],
  },
  {
    Id: 25075,
    Text: 'Để tạo mới một Alert Dialog, chúng ta phải sử dụng lớp nào?',
    Marks: 1,
    AnswerId: 103971,
    Answers: [
      {
        Id: 103969,
        Text: 'AlertDialog.Create',
      },
      {
        Id: 103970,
        Text: 'AlertDialog.Building',
      },
      {
        Id: 103971,
        Text: 'AlertDialog.Builder',
      },
      {
        Id: 103972,
        Text: 'AlertDialog.Creating',
      },
    ],
  },
  {
    Id: 25076,
    Text: 'Giá trị mặc định của thuộc tính android:layout_weight là bao nhiêu?',
    Marks: 1,
    AnswerId: 103976,
    Answers: [
      {
        Id: 103973,
        Text: '2',
      },
      {
        Id: 103974,
        Text: '1',
      },
      {
        Id: 103975,
        Text: '3',
      },
      {
        Id: 103976,
        Text: '0',
      },
      {
        Id: 103977,
        Text: '4',
      },
    ],
  },
  {
    Id: 25077,
    Text: 'Mặc định mỗi dòng trong ListView là gì?',
    Marks: 1,
    AnswerId: 103979,
    Answers: [
      {
        Id: 103978,
        Text: 'Button',
      },
      {
        Id: 103979,
        Text: 'TextView',
      },
      {
        Id: 103980,
        Text: 'Spinner',
      },
      {
        Id: 103981,
        Text: 'ProgressBar',
      },
    ],
  },
  {
    Id: 25078,
    Text: 'Thư mục res chứa các thông tin gì?',
    Marks: 1,
    AnswerId: 103984,
    Answers: [
      {
        Id: 103982,
        Text: 'File mã nguồn Java',
      },
      {
        Id: 103983,
        Text: 'ứng dụng',
      },
      {
        Id: 103984,
        Text: 'Tài nguyên',
      },
      {
        Id: 103985,
        Text: 'file tĩnh',
      },
    ],
  },
  {
    Id: 25079,
    Text: 'Hàm nào bắt buộc phải gọi trước khi gọi hàm findViewById?',
    Marks: 1,
    AnswerId: 103989,
    Answers: [
      {
        Id: 103986,
        Text: 'startActivity',
      },
      {
        Id: 103987,
        Text: 'getMenuInflater().inflate',
      },
      {
        Id: 103988,
        Text: 'super.onCreate',
      },
      {
        Id: 103989,
        Text: 'setContentView',
      },
    ],
  },
  {
    Id: 25080,
    Text: 'Layout nào cho phép bố trí giao diện dưới dạng Tab?',
    Marks: 1,
    AnswerId: 103993,
    Answers: [
      {
        Id: 103990,
        Text: 'LinearLayout',
      },
      {
        Id: 103991,
        Text: 'RelativeLayout',
      },
      {
        Id: 103992,
        Text: 'FrameLayout',
      },
      {
        Id: 103993,
        Text: 'TabLayout',
      },
    ],
  },
  {
    Id: 25081,
    Text: 'Giá trị nào của thuộc tính android:layout_width và android:layout_height dùng để xác định View sẽ có chiều rộng và chiều cao bằng đối tượng View cha?',
    Marks: 1,
    AnswerId: 103996,
    Answers: [
      {
        Id: 103994,
        Text: 'full_parent',
      },
      {
        Id: 103995,
        Text: 'wrapper_parent',
      },
      {
        Id: 103996,
        Text: 'fill_parent',
      },
      {
        Id: 103997,
        Text: 'wrap_parent',
      },
    ],
  },
  {
    Id: 25082,
    Text: 'File layout nằm trong thư mục nào của Android Project?',
    Marks: 1,
    AnswerId: 103998,
    Answers: [
      {
        Id: 103998,
        Text: 'res/drawable-ldpi',
      },
      {
        Id: 103999,
        Text: 'res/values',
      },
      {
        Id: 104000,
        Text: 'res/layout',
      },
      {
        Id: 104001,
        Text: 'res/drawable-hdpi',
      },
      {
        Id: 104002,
        Text: 'res/menu',
      },
    ],
  },
  {
    Id: 25083,
    Text: 'Thay đổi thông tin về theme của ứng dụng, chúng ta thay đổi trong file nào?',
    Marks: 1,
    AnswerId: 104003,
    Answers: [
      {
        Id: 104003,
        Text: 'AndroidManifest.xml',
      },
      {
        Id: 104004,
        Text: 'main.xml',
      },
      {
        Id: 104005,
        Text: 'MainActivity.java',
      },
      {
        Id: 104006,
        Text: 'activity_main.xml',
      },
    ],
  },
  {
    Id: 25084,
    Text: 'Tất cả thành phần của chương trình được nhóm trong tag nào của AndroidManifest?',
    Marks: 1,
    AnswerId: 104007,
    Answers: [
      {
        Id: 104007,
        Text: 'application',
      },
      {
        Id: 104008,
        Text: 'applications',
      },
      {
        Id: 104009,
        Text: 'permission',
      },
      {
        Id: 104010,
        Text: 'user-permission',
      },
    ],
  },
  {
    Id: 25085,
    Text: 'Layout nào cho phép sắp xếp các view con ở phía trong theo chiều dọc hoặc chiều ngang?',
    Marks: 1,
    AnswerId: 104012,
    Answers: [
      {
        Id: 104011,
        Text: 'RelativeLayout',
      },
      {
        Id: 104012,
        Text: 'LinearLayout',
      },
      {
        Id: 104013,
        Text: 'FrameLayout',
      },
      {
        Id: 104014,
        Text: 'TabLayout',
      },
    ],
  },
  {
    Id: 25086,
    Text: 'Lớp nào sau đây là lớp cha của lớp ứng dụng chính của ứng dụng Android (lớp có giao diện người dùng)?',
    Marks: 1,
    AnswerId: 104019,
    Answers: [
      {
        Id: 104015,
        Text: 'AppLet',
      },
      {
        Id: 104016,
        Text: 'MIDLet',
      },
      {
        Id: 104017,
        Text: 'AndroidApp',
      },
      {
        Id: 104018,
        Text: 'Application',
      },
      {
        Id: 104019,
        Text: 'Activity',
      },
    ],
  },
  {
    Id: 25087,
    Text: 'Khởi tạo activity bằng cách gọi hàm nào?',
    Marks: 1,
    AnswerId: 104021,
    Answers: [
      {
        Id: 104020,
        Text: 'activitiesStart',
      },
      {
        Id: 104021,
        Text: 'startActivity',
      },
      {
        Id: 104022,
        Text: 'activitiesStarting',
      },
      {
        Id: 104023,
        Text: 'activityStarting',
      },
      {
        Id: 104024,
        Text: 'startActivities',
      },
      {
        Id: 104025,
        Text: 'activityStart',
      },
    ],
  },
  {
    Id: 25088,
    Text: 'Phương thức nào thích hợp nhất để lưu các dữ liệu quan trọng?',
    Marks: 1,
    AnswerId: 104029,
    Answers: [
      {
        Id: 104026,
        Text: 'Activity.onStop()',
      },
      {
        Id: 104027,
        Text: 'Activity.onFreeze()',
      },
      {
        Id: 104028,
        Text: 'Activity.onDestroy()',
      },
      {
        Id: 104029,
        Text: 'Activity.onPause()',
      },
      {
        Id: 104030,
        Text: 'Activity.onPausing()',
      },
    ],
  },
  {
    Id: 25089,
    Text: 'Để thay đổi biểu tưởng của ứng dụng trong launcher, chúng ta phải thay đổi file nào?',
    Marks: 1,
    AnswerId: 104034,
    Answers: [
      {
        Id: 104031,
        Text: 'start.png',
      },
      {
        Id: 104032,
        Text: 'starts.png',
      },
      {
        Id: 104033,
        Text: 'icons.png',
      },
      {
        Id: 104034,
        Text: 'icon.png',
      },
      {
        Id: 104035,
        Text: 'app.png',
      },
    ],
  },
  {
    Id: 25090,
    Text: 'SubActivity là gì?',
    Marks: 1,
    AnswerId: 104036,
    Answers: [
      {
        Id: 104036,
        Text: 'Là activity được gọi bởi activity khác',
      },
      {
        Id: 104037,
        Text: 'Là activity con',
      },
      {
        Id: 104038,
        Text: 'Là activity của hệ thống',
      },
      {
        Id: 104039,
        Text: 'Là activity hiện tại đang hiển thị trên màn hình điện thoại',
      },
      {
        Id: 104040,
        Text: 'Là activity đang bị tạm dừng',
      },
    ],
  },
  {
    Id: 25091,
    Text: 'Phương thức nào được gọi khi activity đầu tiên được tạo?',
    Marks: 1,
    AnswerId: 104044,
    Answers: [
      {
        Id: 104041,
        Text: 'onPause()',
      },
      {
        Id: 104042,
        Text: 'onDestroy()',
      },
      {
        Id: 104043,
        Text: 'onCreating()',
      },
      {
        Id: 104044,
        Text: 'onCreate()',
      },
      {
        Id: 104045,
        Text: 'onPausing()',
      },
      {
        Id: 104046,
        Text: 'onDestroying()',
      },
    ],
  },
  {
    Id: 25092,
    Text: 'File nào chứa thông tin tên ứng dụng, version android tối thiểu mà ứng dụng đòi hỏi?',
    Marks: 1,
    AnswerId: 104049,
    Answers: [
      {
        Id: 104047,
        Text: 'activity_main.xml',
      },
      {
        Id: 104048,
        Text: 'string.xml',
      },
      {
        Id: 104049,
        Text: 'AndroidManifest.xml',
      },
      {
        Id: 104050,
        Text: 'R.java',
      },
    ],
  },
  {
    Id: 25093,
    Text: 'File nào có chứa các thông tin Resource ID dùng để truy cập đến các tài nguyên (drawable, layout, styles, string)?',
    Marks: 1,
    AnswerId: 104055,
    Answers: [
      {
        Id: 104051,
        Text: 'Resource.java',
      },
      {
        Id: 104052,
        Text: 'strings.java',
      },
      {
        Id: 104053,
        Text: 'style.java',
      },
      {
        Id: 104054,
        Text: 'Resources.java',
      },
      {
        Id: 104055,
        Text: 'R.java',
      },
      {
        Id: 104056,
        Text: 'string.java',
      },
    ],
  },
  {
    Id: 25094,
    Text: 'Phương thức nào là phương thức không đồng bộ?',
    Marks: 1,
    AnswerId: 104061,
    Answers: [
      {
        Id: 104057,
        Text: 'startedActivityForResult',
      },
      {
        Id: 104058,
        Text: 'startActivitiesForResult',
      },
      {
        Id: 104059,
        Text: 'startingActivitiesForResult',
      },
      {
        Id: 104060,
        Text: 'startingActivityForResult',
      },
      {
        Id: 104061,
        Text: 'startActivityForResult',
      },
      {
        Id: 104062,
        Text: 'startedActivitiesForResult',
      },
    ],
  },
  {
    Id: 25095,
    Text: 'Android manifest là file có định dạng gì?',
    Marks: 1,
    AnswerId: 104064,
    Answers: [
      {
        Id: 104063,
        Text: 'Java',
      },
      {
        Id: 104064,
        Text: 'XML',
      },
      {
        Id: 104065,
        Text: 'HTML5',
      },
      {
        Id: 104066,
        Text: 'HTML',
      },
      {
        Id: 104067,
        Text: 'C#',
      },
    ],
  },
  {
    Id: 25096,
    Text: 'Công nghệ máy ảo nào do Google tạo ra cho hệ điều hành Android?',
    Marks: 1,
    AnswerId: 104071,
    Answers: [
      {
        Id: 104068,
        Text: 'VMWare',
      },
      {
        Id: 104069,
        Text: 'Virtual Box',
      },
      {
        Id: 104070,
        Text: 'Virtual Driver',
      },
      {
        Id: 104071,
        Text: 'Dalvik Virtual Machine',
      },
    ],
  },
  {
    Id: 25097,
    Text: 'Trong quá trình biên dịch, android project được biên dịch và đóng gói thành file có đuôi gì?',
    Marks: 1,
    AnswerId: 104075,
    Answers: [
      {
        Id: 104072,
        Text: 'exe',
      },
      {
        Id: 104073,
        Text: 'dex',
      },
      {
        Id: 104074,
        Text: 'bat',
      },
      {
        Id: 104075,
        Text: 'apk',
      },
    ],
  },
  {
    Id: 25098,
    Text: 'Các ứng dụng trên android được viết bằng ngôn ngữ nào?',
    Marks: 1,
    AnswerId: 104080,
    Answers: [
      {
        Id: 104076,
        Text: 'Python',
      },
      {
        Id: 104077,
        Text: 'VB.NET',
      },
      {
        Id: 104078,
        Text: 'C#',
      },
      {
        Id: 104079,
        Text: 'C++',
      },
      {
        Id: 104080,
        Text: 'Java',
      },
      {
        Id: 104081,
        Text: 'PHP',
      },
    ],
  },
  {
    Id: 25099,
    Text: 'IDE nào không dùng để phát triển ứng dụng trên Android?',
    Marks: 1,
    AnswerId: 104084,
    Answers: [
      {
        Id: 104082,
        Text: 'Net Bean',
      },
      {
        Id: 104083,
        Text: 'Eclipse',
      },
      {
        Id: 104084,
        Text: 'Visual Studio',
      },
      {
        Id: 104085,
        Text: 'Android Studio',
      },
    ],
  },
  {
    Id: 25100,
    Text: 'Các ứng dụng trên android được chuyển sang định dạng file gì để có thể chạy được trên máy ảo Dalvik?',
    Marks: 1,
    AnswerId: 104090,
    Answers: [
      {
        Id: 104086,
        Text: 'zar',
      },
      {
        Id: 104087,
        Text: 'exe',
      },
      {
        Id: 104088,
        Text: 'bat',
      },
      {
        Id: 104089,
        Text: 'zip',
      },
      {
        Id: 104090,
        Text: 'dex',
      },
    ],
  },
  {
    Id: 25101,
    Text: 'Phiên bản android nào có tên là Ice Cream Sandwich?',
    Marks: 1,
    AnswerId: 104091,
    Answers: [
      {
        Id: 104091,
        Text: '4',
      },
      {
        Id: 104092,
        Text: '2',
      },
      {
        Id: 104093,
        Text: '3',
      },
      {
        Id: 104094,
        Text: '4.4',
      },
      {
        Id: 104095,
        Text: '1.5',
      },
      {
        Id: 104096,
        Text: '1',
      },
    ],
  },
  {
    Id: 25102,
    Text: 'Plugin nào được sử dụng với Eclipse để phát triển ứng dụng android?',
    Marks: 1,
    AnswerId: 104097,
    Answers: [
      {
        Id: 104097,
        Text: 'ADT plugin',
      },
      {
        Id: 104098,
        Text: 'ADF plugin',
      },
      {
        Id: 104099,
        Text: 'ADU plugin',
      },
      {
        Id: 104100,
        Text: 'ADG plugin',
      },
    ],
  },
  {
    Id: 25103,
    Text: 'Android Studio do công ty nào tạo ra?',
    Marks: 1,
    AnswerId: 104103,
    Answers: [
      {
        Id: 104101,
        Text: 'HTC',
      },
      {
        Id: 104102,
        Text: 'Amazon',
      },
      {
        Id: 104103,
        Text: 'Google',
      },
      {
        Id: 104104,
        Text: 'Samsung',
      },
      {
        Id: 104105,
        Text: 'Yahoo',
      },
      {
        Id: 104106,
        Text: 'Nokia',
      },
    ],
  },
  {
    Id: 25104,
    Text: 'Hiện tại nền tảng mobile nào có số lượng người dùng cao nhất?',
    Marks: 1,
    AnswerId: 104109,
    Answers: [
      {
        Id: 104107,
        Text: 'Tizen OS',
      },
      {
        Id: 104108,
        Text: 'Symbian',
      },
      {
        Id: 104109,
        Text: 'Android',
      },
      {
        Id: 104110,
        Text: 'Firefox OS',
      },
      {
        Id: 104111,
        Text: 'Window Phone',
      },
      {
        Id: 104112,
        Text: 'iOS',
      },
    ],
  },
  {
    Id: 25105,
    Text: 'Hãng điện thoại nào đang là hãng sản xuất nhiều nhất điện thoại sử dụng hệ điều hành Android?',
    Marks: 1,
    AnswerId: 104117,
    Answers: [
      {
        Id: 104113,
        Text: 'Motorola',
      },
      {
        Id: 104114,
        Text: 'Lenovo',
      },
      {
        Id: 104115,
        Text: 'LG',
      },
      {
        Id: 104116,
        Text: 'HTC',
      },
      {
        Id: 104117,
        Text: 'Samsung',
      },
    ],
  },
]

export const ADUI = [
  {
    Id: 25183,
    Text: 'System Bar bao gồm các thành phần nào?',
    Marks: 1,
    AnswerId: 104411,
    Answers: [
      {
        Id: 104408,
        Text: 'Navigation Bar',
      },
      {
        Id: 104409,
        Text: 'Status Bar',
      },
      {
        Id: 104410,
        Text: 'Notification Bar',
      },
      {
        Id: 104411,
        Text: 'Status Bar và Navigation Bar',
      },
    ],
  },
  {
    Id: 25184,
    Text: 'Câu nào sau đây đúng khi nói về Frame layout?',
    Marks: 1,
    AnswerId: 104412,
    Answers: [
      {
        Id: 104412,
        Text: 'Frame layout là loại layout luôn lấy tọa độ gốc là top- left và nó xếp chồng view sau lên view trước',
      },
      {
        Id: 104413,
        Text: 'Frame layout sắp xếp các view ở chính xác tọa độ mong muốn thông qua các thuộc tính layout_x và layout_y',
      },
      {
        Id: 104414,
        Text: 'Frame layout sắp xếp các view theo hàng ngang hoặc hàng dọc, trong một cột hoặc một dòng',
      },
      {
        Id: 104415,
        Text: 'Frame layout sắp xếp các view thành các cột và dòng. Mỗi view trong 1 tableRow sẽ là 1 cột',
      },
    ],
  },
  {
    Id: 25185,
    Text: 'Trong android, interface được tạo từ các điều khiển gì?',
    Marks: 1,
    AnswerId: 104416,
    Answers: [
      {
        Id: 104416,
        Text: 'View và View group',
      },
      {
        Id: 104417,
        Text: 'View',
      },
      {
        Id: 104418,
        Text: 'Button',
      },
      {
        Id: 104419,
        Text: 'View group',
      },
    ],
  },
  {
    Id: 25186,
    Text: 'Điều khiển nào sau đây không phải là một layout?',
    Marks: 1,
    AnswerId: 104420,
    Answers: [
      {
        Id: 104420,
        Text: 'LeftAlignLayout',
      },
      {
        Id: 104421,
        Text: 'RelativeLayout',
      },
      {
        Id: 104422,
        Text: 'AbsoluteLayout',
      },
      {
        Id: 104423,
        Text: 'RelativeLayout',
      },
    ],
  },
  {
    Id: 25187,
    Text: 'Các điều khiển nào sau đây hiển thị trên Navigation Bar?',
    Marks: 1,
    AnswerId: 104425,
    Answers: [
      {
        Id: 104424,
        Text: 'Recent',
      },
      {
        Id: 104425,
        Text: 'Tất cả các phương án đều đúng',
      },
      {
        Id: 104426,
        Text: 'Home',
      },
      {
        Id: 104427,
        Text: 'Back',
      },
    ],
  },
  {
    Id: 25188,
    Text: 'Loại layout nào sau đây luôn dùng để gắn các control ở góc bên trái trên cùng màn hình và không cho phép thay đổi vị trí của các control?',
    Marks: 1,
    AnswerId: 104428,
    Answers: [
      {
        Id: 104428,
        Text: 'Frame layout',
      },
      {
        Id: 104429,
        Text: 'Table layout',
      },
      {
        Id: 104430,
        Text: 'Relative layout',
      },
      {
        Id: 104431,
        Text: 'Linear layout',
      },
    ],
  },
  {
    Id: 25189,
    Text: 'Khi viết code, ta có thể thiết lập hướng các control trên Linear layout bằng hàm nào?',
    Marks: 1,
    AnswerId: 104435,
    Answers: [
      {
        Id: 104432,
        Text: 'setVertical()',
      },
      {
        Id: 104433,
        Text: 'setHorizontal()',
      },
      {
        Id: 104434,
        Text: 'setDirection()',
      },
      {
        Id: 104435,
        Text: 'setOrientation()',
      },
    ],
  },
  {
    Id: 25190,
    Text: 'Màn hình Home Screen là màn hình như thế nào?',
    Marks: 1,
    AnswerId: 104437,
    Answers: [
      {
        Id: 104436,
        Text: 'Màn hình cung cấp cho người dùng truy cập đến các ứng dụng Mail được cài trên thiết bị',
      },
      {
        Id: 104437,
        Text: 'Chứa các folder, widgets hoặc các app shortcuts tùy theo ý người dùng',
      },
      {
        Id: 104438,
        Text: 'Màn hình cung cấp cho người dùng truy cập đến các ứng dụng đang chạy gần đây một cách nhanh nhất',
      },
      {
        Id: 104439,
        Text: 'Hiển thị toàn bộ ứng dụng được cài trên máy từ Amazon Store, và có thể đưa một ứng dụng bất kỳ ra màn hình Home',
      },
    ],
  },
  {
    Id: 25191,
    Text: 'Câu nào đúng khi nói về AutoCompleteTextView?',
    Marks: 1,
    AnswerId: 104443,
    Answers: [
      {
        Id: 104440,
        Text: 'Vừa là layout vừa là widget',
      },
      {
        Id: 104441,
        Text: 'Thực chất là một Menu',
      },
      {
        Id: 104442,
        Text: 'Là một layout',
      },
      {
        Id: 104443,
        Text: 'Là một widget',
      },
    ],
  },
  {
    Id: 25192,
    Text: 'Đơn vị đo lường không dùng trong Android là?',
    Marks: 1,
    AnswerId: 104446,
    Answers: [
      {
        Id: 104444,
        Text: 'Db/dip (Density- independent pixel)',
      },
      {
        Id: 104445,
        Text: 'Px (Pixel)',
      },
      {
        Id: 104446,
        Text: 'Ptx',
      },
      {
        Id: 104447,
        Text: 'Pt (Point)',
      },
    ],
  },
  {
    Id: 25193,
    Text: 'Để thêm font vào ứng dụng trong android, khi bạn cần copy thêm fonts thì phải thêm font vào thư mục nào?',
    Marks: 1,
    AnswerId: 104451,
    Answers: [
      {
        Id: 104448,
        Text: '/layout/fonts',
      },
      {
        Id: 104449,
        Text: '/menu/fonts',
      },
      {
        Id: 104450,
        Text: '/value/fonts',
      },
      {
        Id: 104451,
        Text: '/assets/fonts',
      },
    ],
  },
  {
    Id: 25194,
    Text: 'Khi thiết kế bố trí các control trên màn hình, khoảng cách các control nên là bao nhiêu?',
    Marks: 1,
    AnswerId: 104455,
    Answers: [
      {
        Id: 104452,
        Text: '10dp',
      },
      {
        Id: 104453,
        Text: '7dp',
      },
      {
        Id: 104454,
        Text: '9dp',
      },
      {
        Id: 104455,
        Text: '8dp',
      },
    ],
  },
  {
    Id: 25195,
    Text: 'Trong Relative layout, để chỉ ra rằng widget phải được đặt ở bên dưới của widget tham chiếu. ta sử dụng thuộc tính nào?',
    Marks: 1,
    AnswerId: 104458,
    Answers: [
      {
        Id: 104456,
        Text: 'android:layout_above',
      },
      {
        Id: 104457,
        Text: 'android:layout_toRightOf',
      },
      {
        Id: 104458,
        Text: 'android:layout_below',
      },
      {
        Id: 104459,
        Text: 'android:layout_toLeftOf',
      },
    ],
  },
  {
    Id: 25196,
    Text: 'Trong table layout ta dùng thuộc tính nào để giãn đều các control, các cell ?',
    Marks: 1,
    AnswerId: 104461,
    Answers: [
      {
        Id: 104460,
        Text: 'android:stretchColumns="1"',
      },
      {
        Id: 104461,
        Text: 'android:stretchColumns="*"',
      },
      {
        Id: 104462,
        Text: 'android:stretchColumns="+"',
      },
      {
        Id: 104463,
        Text: 'android:stretchColumns="0"',
      },
    ],
  },
  {
    Id: 25197,
    Text: 'Để sử dụng font copy trong file xml, ta sử dụng thuộc tính sau?',
    Marks: 1,
    AnswerId: 104466,
    Answers: [
      {
        Id: 104464,
        Text: 'android:face=‘”serif”',
      },
      {
        Id: 104465,
        Text: 'android:type=‘”serif”',
      },
      {
        Id: 104466,
        Text: 'android:typeface=‘”serif”',
      },
      {
        Id: 104467,
        Text: 'android:font=‘”serif”',
      },
    ],
  },
  {
    Id: 25198,
    Text: 'Trong Relative layout, để chỉ ra rằng widget phải được đặt ở bên trái của widget tham chiếu. ta sử dụng thuộc tính nào?',
    Marks: 1,
    AnswerId: 104471,
    Answers: [
      {
        Id: 104468,
        Text: 'android:layout_toRightOf',
      },
      {
        Id: 104469,
        Text: 'android:layout_alignParentLeft',
      },
      {
        Id: 104470,
        Text: 'android:layout_alignParentRight',
      },
      {
        Id: 104471,
        Text: 'android:layout_toLeftOf',
      },
    ],
  },
  {
    Id: 25199,
    Text: 'Layout nào cho phép sắp xếp các control dưới dạng lưới (cột và hàng)?',
    Marks: 1,
    AnswerId: 104472,
    Answers: [
      {
        Id: 104472,
        Text: 'Table layout',
      },
      {
        Id: 104473,
        Text: 'Relative layout',
      },
      {
        Id: 104474,
        Text: 'Frame layout',
      },
      {
        Id: 104475,
        Text: 'Absolute layout',
      },
    ],
  },
  {
    Id: 25200,
    Text: 'Style có thể được kế thừa bằng cách thêm thuộc tính parent = “@android: style/…” đúng hay sai?',
    Marks: 1,
    AnswerId: 104476,
    Answers: [
      {
        Id: 104476,
        Text: 'Đúng',
      },
      {
        Id: 104477,
        Text: 'Sai',
      },
    ],
  },
  {
    Id: 25201,
    Text: 'Điều khiển nào không phải là một layout?',
    Marks: 1,
    AnswerId: 104481,
    Answers: [
      {
        Id: 104478,
        Text: 'Absolute layout',
      },
      {
        Id: 104479,
        Text: 'Table layout',
      },
      {
        Id: 104480,
        Text: 'Table layout và Absolute layout',
      },
      {
        Id: 104481,
        Text: 'ListView',
      },
    ],
  },
  {
    Id: 25202,
    Text: 'Trong Relative layout, để chỉ ra rằng widget phải được đặt ở đầu của layout mà nó nằm ta sử dụng thuộc tính?',
    Marks: 1,
    AnswerId: 104482,
    Answers: [
      {
        Id: 104482,
        Text: 'android:layout_alignParentTop',
      },
      {
        Id: 104483,
        Text: 'android:layout_above',
      },
      {
        Id: 104484,
        Text: 'android:layout_alignParentBottom',
      },
      {
        Id: 104485,
        Text: 'android:layout_below',
      },
    ],
  },
  {
    Id: 25203,
    Text: 'Với CheckBox để thiết lập trạng thái checked hay unchecked ta dùng lệnh sau?',
    Marks: 1,
    AnswerId: 104486,
    Answers: [
      {
        Id: 104486,
        Text: 'setChecked()',
      },
      {
        Id: 104487,
        Text: 'clearChecked()',
      },
      {
        Id: 104488,
        Text: 'getCheckedRadioButtonId()',
      },
      {
        Id: 104489,
        Text: 'isChecked()',
      },
    ],
  },
  {
    Id: 25204,
    Text: 'Thuộc tính sau có thể áp dụng cho những widget nào? android:src="@drawable/icon"',
    Marks: 1,
    AnswerId: 104493,
    Answers: [
      {
        Id: 104490,
        Text: 'ImageButtion',
      },
      {
        Id: 104491,
        Text: 'ImageView',
      },
      {
        Id: 104492,
        Text: 'EditText',
      },
      {
        Id: 104493,
        Text: 'Cả ImageButtion và ImageView',
      },
    ],
  },
  {
    Id: 25205,
    Text: 'Với RadioButton để thiết lập trạng thái checked hay unchecked ta dùng lệnh sau?',
    Marks: 1,
    AnswerId: 104494,
    Answers: [
      {
        Id: 104494,
        Text: 'isChecked()',
      },
      {
        Id: 104495,
        Text: 'clearChecked()',
      },
      {
        Id: 104496,
        Text: 'getCheckedRadioButtonId()',
      },
      {
        Id: 104497,
        Text: 'setChecked()',
      },
    ],
  },
  {
    Id: 25206,
    Text: 'Trong những câu sau, câu nào đúng khi nói về RadioButton?',
    Marks: 1,
    AnswerId: 104499,
    Answers: [
      {
        Id: 104498,
        Text: 'Những RadioButton cùng nằm trong một RadioGroup thì tại 1 thời điểm có nhiều RadioButton được checked.',
      },
      {
        Id: 104499,
        Text: 'Những RadioButton cùng nằm trong một RadioGroup thì tại 1 thời điểm chỉ có 1 RadioButton được checked mà thôi',
      },
      {
        Id: 104500,
        Text: 'Những RadioButton không cùng nằm trong một RadioGroup thì tại 1 thời điểm chỉ có 1 RadioButton được checked mà thôi',
      },
      {
        Id: 104501,
        Text: 'Không phương án nào đúng.',
      },
    ],
  },
  {
    Id: 25207,
    Text: 'Để lấy dữ liệu bên trong EditText ta thực hiện lệnh sau?',
    Marks: 1,
    AnswerId: 104503,
    Answers: [
      {
        Id: 104502,
        Text: 'doText()',
      },
      {
        Id: 104503,
        Text: 'getText()',
      },
      {
        Id: 104504,
        Text: 'setText()',
      },
      {
        Id: 104505,
        Text: 'Text()',
      },
    ],
  },
  {
    Id: 25208,
    Text: 'Với RadioButton để xóa bỏ checked trong group, ta dùng lệnh sau?',
    Marks: 1,
    AnswerId: 104509,
    Answers: [
      {
        Id: 104506,
        Text: 'setChecked()',
      },
      {
        Id: 104507,
        Text: 'isChecked()',
      },
      {
        Id: 104508,
        Text: 'getCheckedRadioButtonId()',
      },
      {
        Id: 104509,
        Text: 'clearChecked()',
      },
    ],
  },
  {
    Id: 25209,
    Text: 'Trong ImageView và ImageButton khi khai báo thuộc tínhandroid:src="@drawable/icon", thì icon sẽ được lưu ở đâu?',
    Marks: 1,
    AnswerId: 104511,
    Answers: [
      {
        Id: 104510,
        Text: '/res/menu',
      },
      {
        Id: 104511,
        Text: '/res/drawable/',
      },
      {
        Id: 104512,
        Text: '/res/values',
      },
      {
        Id: 104513,
        Text: '/res/layout',
      },
    ],
  },
  {
    Id: 25210,
    Text: 'Trong EditText để nhập một hoặc nhiều dòng dữ liệu ta sử dụng thuộc tính?',
    Marks: 1,
    AnswerId: 104516,
    Answers: [
      {
        Id: 104514,
        Text: 'android:capitalize',
      },
      {
        Id: 104515,
        Text: 'android:textSize',
      },
      {
        Id: 104516,
        Text: 'android:singleLine',
      },
      {
        Id: 104517,
        Text: 'android:digits',
      },
    ],
  },
  {
    Id: 25211,
    Text: 'Trong EditText để hiển thị thông tin gợi ý trong vùng nhập dữ liệu khi bạn chưa nhập bất kỳ dữ liệu nào vào và phần gợi ý sẽ tự động mất đi khi có dữ liệu nhập, người ta sử dụng thuộc tính nào?',
    Marks: 1,
    AnswerId: 104520,
    Answers: [
      {
        Id: 104518,
        Text: 'android: hint',
      },
      {
        Id: 104519,
        Text: 'android:textSize',
      },
      {
        Id: 104520,
        Text: 'android:autoText',
      },
      {
        Id: 104521,
        Text: 'android:capitalize',
      },
    ],
  },
  {
    Id: 25212,
    Text: 'Để Button thực hiện một hành động click ta khai báo thuộc tính sau?',
    Marks: 1,
    AnswerId: 104525,
    Answers: [
      {
        Id: 104522,
        Text: 'android: input=""',
      },
      {
        Id: 104523,
        Text: 'android: Click=""',
      },
      {
        Id: 104524,
        Text: 'android:inClick=""',
      },
      {
        Id: 104525,
        Text: 'android:onClick=""',
      },
    ],
  },
  {
    Id: 25213,
    Text: 'Trong ListView, các dòng dữ liệu có thể chứa những loại nào sau đây?',
    Marks: 1,
    AnswerId: 104526,
    Answers: [
      {
        Id: 104526,
        Text: 'Tất cả các phương án đều đúng',
      },
      {
        Id: 104527,
        Text: 'multi-line items',
      },
      {
        Id: 104528,
        Text: 'custom items',
      },
      {
        Id: 104529,
        Text: 'simple single-line items',
      },
    ],
  },
  {
    Id: 25214,
    Text: 'Để hiển thị thanh cuốn theo chiều dọc người ta dùng điều khiển nào?',
    Marks: 1,
    AnswerId: 104533,
    Answers: [
      {
        Id: 104530,
        Text: 'Button',
      },
      {
        Id: 104531,
        Text: 'Textview',
      },
      {
        Id: 104532,
        Text: 'EditText',
      },
      {
        Id: 104533,
        Text: 'Gridview',
      },
    ],
  },
  {
    Id: 25215,
    Text: 'Trong các dòng dữ liệu ở ListView, ta có thể đặt điều khiển nào?',
    Marks: 1,
    AnswerId: 104536,
    Answers: [
      {
        Id: 104534,
        Text: 'Button action',
      },
      {
        Id: 104535,
        Text: 'Icons',
      },
      {
        Id: 104536,
        Text: 'Tất cả các phương án đều đúng',
      },
      {
        Id: 104537,
        Text: 'Checkbox',
      },
    ],
  },
  {
    Id: 25216,
    Text: 'Để người sử dụng có thể nhập từ mới (không có trong danh sách) hoặc có thể lựa chọn từ ở trong danh sách hiển thị, ta dùng widget nào?',
    Marks: 1,
    AnswerId: 104539,
    Answers: [
      {
        Id: 104538,
        Text: 'Spinner',
      },
      {
        Id: 104539,
        Text: 'AutoCompleteTextView',
      },
      {
        Id: 104540,
        Text: 'GridView',
      },
      {
        Id: 104541,
        Text: 'Textview',
      },
    ],
  },
  {
    Id: 25217,
    Text: 'Trong Gridview để hiển thị 4 cột, phải dùng khai báo nào sau đây?',
    Marks: 1,
    AnswerId: 104542,
    Answers: [
      {
        Id: 104542,
        Text: 'android:numColumns = "4"',
      },
      {
        Id: 104543,
        Text: 'android:Columns = "4"',
      },
      {
        Id: 104544,
        Text: 'android:Col = "4"',
      },
      {
        Id: 104545,
        Text: 'android:numCol= "4"',
      },
    ],
  },
  {
    Id: 25218,
    Text: 'Trong những widget sau đây, đâu không phải là widget lựa chọn?',
    Marks: 1,
    AnswerId: 104546,
    Answers: [
      {
        Id: 104546,
        Text: 'Textview',
      },
      {
        Id: 104547,
        Text: 'ListView',
      },
      {
        Id: 104548,
        Text: 'AutocomplexTextview',
      },
      {
        Id: 104549,
        Text: 'Spinner',
      },
    ],
  },
  {
    Id: 25219,
    Text: 'Để chỉ ra số cột sẽ hiển thị trong GridView, phải sử dụng thuộc tính nào?',
    Marks: 1,
    AnswerId: 104552,
    Answers: [
      {
        Id: 104550,
        Text: 'android:verticalSpacing',
      },
      {
        Id: 104551,
        Text: 'android:columnWidth',
      },
      {
        Id: 104552,
        Text: 'android:numColumns',
      },
      {
        Id: 104553,
        Text: 'android:horizontalSpacing',
      },
    ],
  },
  {
    Id: 25220,
    Text: 'Trong Android, điều khiển nào là một widget chọn dạng drop-down?',
    Marks: 1,
    AnswerId: 104554,
    Answers: [
      {
        Id: 104554,
        Text: 'Spinner',
      },
      {
        Id: 104555,
        Text: 'Listview và Gridview',
      },
      {
        Id: 104556,
        Text: 'Gridview',
      },
      {
        Id: 104557,
        Text: 'Listwiew',
      },
    ],
  },
  {
    Id: 25221,
    Text: 'Trong AutoCompleteTextView thuộc tính nào chỉ ra số ký tự tối thiểu mà người dùng có thể nhập để hiển thị ra danh sách từ gợi ý tương tự?',
    Marks: 1,
    AnswerId: 104561,
    Answers: [
      {
        Id: 104558,
        Text: 'android:completionHintView',
      },
      {
        Id: 104559,
        Text: 'android:dropDownSelector',
      },
      {
        Id: 104560,
        Text: 'android:completionHint',
      },
      {
        Id: 104561,
        Text: 'android:completionThreshold',
      },
    ],
  },
  {
    Id: 25222,
    Text: 'Phương thức sử dụng để gọi ngày tháng năm trong DatePickerDialog là?',
    Marks: 1,
    AnswerId: 104565,
    Answers: [
      {
        Id: 104562,
        Text: 'OnTimeChangedListene',
      },
      {
        Id: 104563,
        Text: 'OnDateChangedListener và OnDateSetListener',
      },
      {
        Id: 104564,
        Text: 'OnDateChangedListener',
      },
      {
        Id: 104565,
        Text: 'OnDateSetListener',
      },
    ],
  },
  {
    Id: 25223,
    Text: 'SlidingDrawer chỉ được sử dụng bên trong layout nào?',
    Marks: 1,
    AnswerId: 104569,
    Answers: [
      {
        Id: 104566,
        Text: 'Absolute Layout',
      },
      {
        Id: 104567,
        Text: 'Relative Layout',
      },
      {
        Id: 104568,
        Text: 'Frame layout',
      },
      {
        Id: 104569,
        Text: 'Frame layout và Relative Layout',
      },
    ],
  },
  {
    Id: 25224,
    Text: 'Trong Android, loại tab nào cố định không thể cuộn được?',
    Marks: 1,
    AnswerId: 104572,
    Answers: [
      {
        Id: 104570,
        Text: 'Home Tabs',
      },
      {
        Id: 104571,
        Text: 'Scrollalbe Tabs',
      },
      {
        Id: 104572,
        Text: 'Fixed Tabs',
      },
      {
        Id: 104573,
        Text: 'Không có tab nào có thể cuộn được',
      },
    ],
  },
  {
    Id: 25225,
    Text: 'Phải sử dụng phương thức OnDateChangedListener khi người dùng thay đổi ngày tháng năm trên điều khiển DatePicker?',
    Marks: 1,
    AnswerId: 104575,
    Answers: [
      {
        Id: 104574,
        Text: 'Sai',
      },
      {
        Id: 104575,
        Text: 'Đúng',
      },
    ],
  },
  {
    Id: 25226,
    Text: 'Tab Selector có những loại sau?',
    Marks: 1,
    AnswerId: 104577,
    Answers: [
      {
        Id: 104576,
        Text: 'Scrollalbe Tabs',
      },
      {
        Id: 104577,
        Text: 'Scrollalbe Tabs và Fixed Tabs',
      },
      {
        Id: 104578,
        Text: 'Fixed Tabs',
      },
      {
        Id: 104579,
        Text: 'Tất cả các phương án đều sai',
      },
    ],
  },
  {
    Id: 25227,
    Text: 'Các thành phần của Tab Selector gồm có?',
    Marks: 1,
    AnswerId: 104581,
    Answers: [
      {
        Id: 104580,
        Text: 'TabHost',
      },
      {
        Id: 104581,
        Text: 'Tất cả các phương án đều đúng',
      },
      {
        Id: 104582,
        Text: 'TabWidget',
      },
      {
        Id: 104583,
        Text: 'FrameLayout',
      },
    ],
  },
  {
    Id: 25228,
    Text: 'Phải sử dụng phương thức OnTimeChangedListener khi người dùng thay đổi thời gian giờ phút giây?',
    Marks: 1,
    AnswerId: 104584,
    Answers: [
      {
        Id: 104584,
        Text: 'Đúng',
      },
      {
        Id: 104585,
        Text: 'Sai',
      },
    ],
  },
  {
    Id: 25229,
    Text: 'Để hiển thị ngày, tháng năm trong Android, ta có thể dùng điều khiển nào?',
    Marks: 1,
    AnswerId: 104589,
    Answers: [
      {
        Id: 104586,
        Text: 'DatePicker',
      },
      {
        Id: 104587,
        Text: 'DatePickerDialog',
      },
      {
        Id: 104588,
        Text: 'TimePicker',
      },
      {
        Id: 104589,
        Text: 'DatePicker và DatePickerDialog',
      },
    ],
  },
  {
    Id: 25230,
    Text: 'Để thiết lập giờ, phút, giây trong Android, ta có thể dùng điều khiển nào?',
    Marks: 1,
    AnswerId: 104593,
    Answers: [
      {
        Id: 104590,
        Text: 'TimePicker',
      },
      {
        Id: 104591,
        Text: 'DatePicker',
      },
      {
        Id: 104592,
        Text: 'TimePickerDialog',
      },
      {
        Id: 104593,
        Text: 'TimePicker và TimePickerDialog',
      },
    ],
  },
  {
    Id: 25231,
    Text: 'Layout được sử dụng trong Tab content là?',
    Marks: 1,
    AnswerId: 104594,
    Answers: [
      {
        Id: 104594,
        Text: 'Frame Layout',
      },
      {
        Id: 104595,
        Text: 'Relative Layout',
      },
      {
        Id: 104596,
        Text: 'Linear Layout',
      },
      {
        Id: 104597,
        Text: 'Table layout',
      },
    ],
  },
  {
    Id: 25232,
    Text: 'EditText cho phép hiển thị action như Send ngay trên bàn phím, hỗ trợ nhanh thao tác gửi tin nhắn bằng cách khai báo thuộc tính như thế nào?',
    Marks: 1,
    AnswerId: 104600,
    Answers: [
      {
        Id: 104598,
        Text: 'android:imeOptions="actionNone"',
      },
      {
        Id: 104599,
        Text: 'android:imeOptions="actionSearch"',
      },
      {
        Id: 104600,
        Text: 'android:imeOptions="actionSend"',
      },
      {
        Id: 104601,
        Text: 'android:imeOptions="actionSend" và android:imeOptions="actionSearch"',
      },
    ],
  },
  {
    Id: 25233,
    Text: 'Khi thực hiện chức năng Search để tạo một truy vấn sử dụng những từ đã truy cập gần đây cần thực hiện bước nào đầu tiên?',
    Marks: 1,
    AnswerId: 104603,
    Answers: [
      {
        Id: 104602,
        Text: 'Tạo một content provider để chứa nội dung search, được kế thừa từ SearchRecentSuggestionsProvider và được khai báo trong manifest',
      },
      {
        Id: 104603,
        Text: 'Tạo một searchable activity',
      },
      {
        Id: 104604,
        Text: 'Lưu chuỗi truy vấn vào content provider mỗi lần thực hiện lệnh search',
      },
      {
        Id: 104605,
        Text: 'Chỉnh sửa cấu hình searchable',
      },
    ],
  },
  {
    Id: 25234,
    Text: 'Để hiển thị thông báo ta có thể sử dụng điều khiển nào?',
    Marks: 1,
    AnswerId: 104609,
    Answers: [
      {
        Id: 104606,
        Text: 'Alert Dialog',
      },
      {
        Id: 104607,
        Text: 'Message',
      },
      {
        Id: 104608,
        Text: 'Toast',
      },
      {
        Id: 104609,
        Text: 'Toast và Alert Dialog',
      },
    ],
  },
  {
    Id: 25235,
    Text: 'Trong EditText để nhập text có chứa dạng số cần nhập giá trị nào vào thuộc tính android:inputType?',
    Marks: 1,
    AnswerId: 104612,
    Answers: [
      {
        Id: 104610,
        Text: 'text',
      },
      {
        Id: 104611,
        Text: 'textEmailAddress',
      },
      {
        Id: 104612,
        Text: 'number',
      },
      {
        Id: 104613,
        Text: 'textUri',
      },
    ],
  },
  {
    Id: 25236,
    Text: 'Để hiển thị thông báo trong các mục thiết lập thông số cấu hình, hay đơn giản chỉ là hiển thị lên để xem thông tin tạm thời nào đó mà không cho phép người sử dụng tương tác ta dùng lớp nào?',
    Marks: 1,
    AnswerId: 104616,
    Answers: [
      {
        Id: 104614,
        Text: 'Notification',
      },
      {
        Id: 104615,
        Text: 'Alert Dialog',
      },
      {
        Id: 104616,
        Text: 'Toast',
      },
      {
        Id: 104617,
        Text: 'Tất cả các phương án đều đúng',
      },
    ],
  },
  {
    Id: 25237,
    Text: 'Để hiển thị Toast trong 2 giây ta sử dụng giá trị sau?',
    Marks: 1,
    AnswerId: 104620,
    Answers: [
      {
        Id: 104618,
        Text: 'Toast.LENGTH_LONG',
      },
      {
        Id: 104619,
        Text: 'Toast.LONG',
      },
      {
        Id: 104620,
        Text: 'Toast.LENGTH_SHORT',
      },
      {
        Id: 104621,
        Text: 'Toast.SHORT',
      },
    ],
  },
  {
    Id: 25238,
    Text: 'Để hiển thị Dialog ta dùng phương thức nào?',
    Marks: 1,
    AnswerId: 104625,
    Answers: [
      {
        Id: 104622,
        Text: 'hide()',
      },
      {
        Id: 104623,
        Text: 'onDialog()',
      },
      {
        Id: 104624,
        Text: 'create()',
      },
      {
        Id: 104625,
        Text: 'show()',
      },
    ],
  },
  {
    Id: 25239,
    Text: 'Trong EditText để nhập text có chứa dạng số điện thoại cần nhập giá trị nào vào thuộc tính android:inputType?',
    Marks: 1,
    AnswerId: 104629,
    Answers: [
      {
        Id: 104626,
        Text: 'android:inputType ="textUri"',
      },
      {
        Id: 104627,
        Text: 'android:inputType ="number"',
      },
      {
        Id: 104628,
        Text: 'android:inputType ="textEmailAddress"',
      },
      {
        Id: 104629,
        Text: 'android:inputType ="phone”',
      },
    ],
  },
  {
    Id: 25240,
    Text: 'Khi cấu hình một thẻ Searchable để gán các thuộc tính như: voice search, search suggestion hoặc hint text cho hộp thoại search, người ta tạo một file searchable.xml trong thư mục nào?',
    Marks: 1,
    AnswerId: 104632,
    Answers: [
      {
        Id: 104630,
        Text: '/res/values',
      },
      {
        Id: 104631,
        Text: '/res/layout',
      },
      {
        Id: 104632,
        Text: '/res/xml',
      },
      {
        Id: 104633,
        Text: '/res/menu',
      },
    ],
  },
  {
    Id: 25241,
    Text: 'Để xóa lịch sửa truy vấn sử dụng phương thức nào của SearchRecentSuggestions?',
    Marks: 1,
    AnswerId: 104635,
    Answers: [
      {
        Id: 104634,
        Text: '.hide()',
      },
      {
        Id: 104635,
        Text: '.clearHistory()',
      },
      {
        Id: 104636,
        Text: '.clear()',
      },
      {
        Id: 104637,
        Text: '.hideHistory()',
      },
    ],
  },
  {
    Id: 25242,
    Text: 'Phương thức nào của WebView dùng để xóa cache trên trình duyệt?',
    Marks: 1,
    AnswerId: 104641,
    Answers: [
      {
        Id: 104638,
        Text: 'clearCacheBrowner()',
      },
      {
        Id: 104639,
        Text: 'clear()',
      },
      {
        Id: 104640,
        Text: 'clearCaches()',
      },
      {
        Id: 104641,
        Text: 'clearCache()',
      },
    ],
  },
  {
    Id: 25243,
    Text: 'Loại menu nào trong Android được kích hoạt bằng cách nhấn vào nút Menu?',
    Marks: 1,
    AnswerId: 104645,
    Answers: [
      {
        Id: 104642,
        Text: 'Popup menu',
      },
      {
        Id: 104643,
        Text: 'Không có loại menu nào',
      },
      {
        Id: 104644,
        Text: 'Context menu',
      },
      {
        Id: 104645,
        Text: 'Option menu',
      },
    ],
  },
  {
    Id: 25244,
    Text: 'Phương thức nào dùng để xử lý sự kiện, để tìm ra xem menu nào được lựa chọn?',
    Marks: 1,
    AnswerId: 104648,
    Answers: [
      {
        Id: 104646,
        Text: 'registerForContextMenu()',
      },
      {
        Id: 104647,
        Text: 'getResources().getColor()',
      },
      {
        Id: 104648,
        Text: 'onContextItemSelected()',
      },
      {
        Id: 104649,
        Text: 'onCreateContextMenu()',
      },
    ],
  },
  {
    Id: 25245,
    Text: 'Thực hiện phương thức nào dùng để nạp Context Menu XML vào ứng dụng. phương thức sẽ được gọi mỗi khi context menu được yêu cầu?',
    Marks: 1,
    AnswerId: 104652,
    Answers: [
      {
        Id: 104650,
        Text: 'registerForContextMenu()',
      },
      {
        Id: 104651,
        Text: 'onContextItemSelected()',
      },
      {
        Id: 104652,
        Text: 'onCreateContextMenu()',
      },
      {
        Id: 104653,
        Text: 'getResources().getColor()',
      },
    ],
  },
  {
    Id: 25246,
    Text: 'Câu nào là đúng đối với menu trong Android?',
    Marks: 1,
    AnswerId: 104654,
    Answers: [
      {
        Id: 104654,
        Text: 'Phải đăng ký Popup Menu cho đối tượng sau đó muốn hiển thị lên thì ta nhấn thật lâu vào đối tượng (long click )',
      },
      {
        Id: 104655,
        Text: 'Không thể tạo Context menu trong code',
      },
      {
        Id: 104656,
        Text: 'Phải đăng ký Option Menu cho đối tượng sau đó muốn hiển thị lên thì ta nhấn thật lâu vào đối tượng (long click )',
      },
      {
        Id: 104657,
        Text: 'Có thể tạo Menu động trong code',
      },
    ],
  },
  {
    Id: 25247,
    Text: 'Để bật Javascript, gọi : myWebView.setSettings().setJavaScriptEnabled(true); đối với đối tượng WebView\u003e, điều này đúng hay sai?',
    Marks: 1,
    AnswerId: 104659,
    Answers: [
      {
        Id: 104658,
        Text: 'Sai',
      },
      {
        Id: 104659,
        Text: 'Đúng',
      },
    ],
  },
  {
    Id: 25248,
    Text: 'Để định nghĩa menu, tạo một file xml trong thư mục nào của dự án?',
    Marks: 1,
    AnswerId: 104662,
    Answers: [
      {
        Id: 104660,
        Text: 'res/values/',
      },
      {
        Id: 104661,
        Text: 'res/layout/',
      },
      {
        Id: 104662,
        Text: 'res/menu/',
      },
      {
        Id: 104663,
        Text: 'res/xml/',
      },
    ],
  },
  {
    Id: 25249,
    Text: 'Sử dụng thuộc tính android:showAsAction="always" cho item của menu có nghĩa là item sẽ luôn xuất hiện trên thanh action bar, điều này đúng hay sai?',
    Marks: 1,
    AnswerId: 104665,
    Answers: [
      {
        Id: 104664,
        Text: 'Đúng',
      },
      {
        Id: 104665,
        Text: 'Sai',
      },
    ],
  },
  {
    Id: 25250,
    Text: 'Để tải trang web cần hiển thị lên WebView ta sử dụng phương thức sau?',
    Marks: 1,
    AnswerId: 104667,
    Answers: [
      {
        Id: 104666,
        Text: '.loadView(….)',
      },
      {
        Id: 104667,
        Text: '.loadUrl(...)',
      },
      {
        Id: 104668,
        Text: '.loadData(….)',
      },
      {
        Id: 104669,
        Text: '.loadWeb(…)',
      },
    ],
  },
  {
    Id: 25251,
    Text: 'Trong android có mấy loại menu?',
    Marks: 1,
    AnswerId: 104671,
    Answers: [
      {
        Id: 104670,
        Text: '4',
      },
      {
        Id: 104671,
        Text: '3',
      },
      {
        Id: 104672,
        Text: '5',
      },
      {
        Id: 104673,
        Text: '2',
      },
    ],
  },
  {
    Id: 25252,
    Text: 'Để Navigation Drawer được gọi từ trái qua phải ta sẽ khai báo như thế nào?',
    Marks: 1,
    AnswerId: 104677,
    Answers: [
      {
        Id: 104674,
        Text: 'android:layout_gravity=”right”',
      },
      {
        Id: 104675,
        Text: 'android:layout_gravity=”left”',
      },
      {
        Id: 104676,
        Text: 'android:layout_gravity=”end”',
      },
      {
        Id: 104677,
        Text: 'android:layout_gravity=”start”',
      },
    ],
  },
  {
    Id: 25253,
    Text: 'Chiều cao của mỗi item trên Navigation Drawer không nên nhỏ hơn bao nhiêu?',
    Marks: 1,
    AnswerId: 104679,
    Answers: [
      {
        Id: 104678,
        Text: '47dp',
      },
      {
        Id: 104679,
        Text: '48dp',
      },
      {
        Id: 104680,
        Text: '49dp',
      },
      {
        Id: 104681,
        Text: '46dp',
      },
    ],
  },
  {
    Id: 25254,
    Text: 'Thông thường ta có thể đặt action bar ở những vị trí nào sau đây?',
    Marks: 1,
    AnswerId: 104685,
    Answers: [
      {
        Id: 104682,
        Text: 'Main action bar',
      },
      {
        Id: 104683,
        Text: 'Top bar',
      },
      {
        Id: 104684,
        Text: 'Bottom bar',
      },
      {
        Id: 104685,
        Text: 'Tất cả các phương án đều đúng',
      },
    ],
  },
  {
    Id: 25255,
    Text: 'Để chứa các action ít thực hiện dưới dạng các menu ta sẽ thiết kế vùng action bar nào?',
    Marks: 1,
    AnswerId: 104686,
    Answers: [
      {
        Id: 104686,
        Text: 'Action Overflow',
      },
      {
        Id: 104687,
        Text: 'App icon',
      },
      {
        Id: 104688,
        Text: 'View Control',
      },
      {
        Id: 104689,
        Text: 'Action Button',
      },
    ],
  },
  {
    Id: 25256,
    Text: 'Thay đổi một Action Bar Icon bằng một icon khác ta sử dụng phương thức nào?',
    Marks: 1,
    AnswerId: 104693,
    Answers: [
      {
        Id: 104690,
        Text: 'actionBar.getIcon(R.drawable.ico_actionbar)',
      },
      {
        Id: 104691,
        Text: 'actionBar.hideIcon(R.drawable.ico_actionbar)',
      },
      {
        Id: 104692,
        Text: 'actionBar.showIcon(R.drawable.ico_actionbar)',
      },
      {
        Id: 104693,
        Text: 'actionBar.setIcon(R.drawable.ico_actionbar)',
      },
    ],
  },
  {
    Id: 25257,
    Text: 'Khởi tạo sự kiện mở, đóng navigation drawer bằng phương thức nào?',
    Marks: 1,
    AnswerId: 104694,
    Answers: [
      {
        Id: 104694,
        Text: 'onDrawerClosed(view)   và onDrawerOpened(drawerView)',
      },
      {
        Id: 104695,
        Text: 'onDrawerClose(view)   và onDrawerOpene(drawerView)',
      },
      {
        Id: 104696,
        Text: 'onClosedDrawer(view)   và onOpenedDrawer(drawerView',
      },
      {
        Id: 104697,
        Text: 'onClosed(view)   và onOpened(drawerView)',
      },
    ],
  },
  {
    Id: 25258,
    Text: 'Khi khai báo một Action item, để hiển thị icon của action nếu không gian màn hình cho phép ta dùng?',
    Marks: 1,
    AnswerId: 104699,
    Answers: [
      {
        Id: 104698,
        Text: 'android:showAsAction="Always"',
      },
      {
        Id: 104699,
        Text: 'android:showAsAction="ifRoom"',
      },
      {
        Id: 104700,
        Text: 'android:showAsAction="Never"',
      },
      {
        Id: 104701,
        Text: 'android:showAsAction="withText"',
      },
    ],
  },
  {
    Id: 25259,
    Text: 'Trong những vùng sau, đâu là vùng chức năng của Action bar?',
    Marks: 1,
    AnswerId: 104704,
    Answers: [
      {
        Id: 104702,
        Text: 'Button Overflow',
      },
      {
        Id: 104703,
        Text: 'Label Overflow',
      },
      {
        Id: 104704,
        Text: 'View Control',
      },
      {
        Id: 104705,
        Text: 'Text Overflow',
      },
    ],
  },
  {
    Id: 25260,
    Text: 'Navigation Drawer là một bảng điều hướng xuất hiện khi nào ?',
    Marks: 1,
    AnswerId: 104706,
    Answers: [
      {
        Id: 104706,
        Text: 'Vuốt từ trên xuống',
      },
      {
        Id: 104707,
        Text: 'Bật ứng dụng Gmail',
      },
      {
        Id: 104708,
        Text: 'Nhìn bằng mắt vào điện thoại',
      },
      {
        Id: 104709,
        Text: 'Lắc điện thoại',
      },
    ],
  },
  {
    Id: 25261,
    Text: 'Action Buttons có phải là một vùng chức năng của Action Bar?',
    Marks: 1,
    AnswerId: 104711,
    Answers: [
      {
        Id: 104710,
        Text: 'Sai',
      },
      {
        Id: 104711,
        Text: 'Đúng',
      },
    ],
  },
]
export const ASNE = [
  {
    Id: 25970,
    Text: 'Lập trình viên thường gán giá trị mặc định cho các điều khiển trong phương thức xử lý sự kiện ........... của trang',
    Marks: 1,
    AnswerId: 107573,
    Answers: [
      {
        Id: 107571,
        Text: 'Prerender',
      },
      {
        Id: 107572,
        Text: 'Init',
      },
      {
        Id: 107573,
        Text: 'Load',
      },
      {
        Id: 107574,
        Text: 'Unload',
      },
    ],
  },
  {
    Id: 25971,
    Text: 'Bạn hãy cho biết định nghĩa nào sau đây là nói về ứng dụng web?',
    Marks: 1,
    AnswerId: 107575,
    Answers: [
      {
        Id: 107575,
        Text: 'Là một ứng dụng client/server được truy cập thông qua trình duyệt Web trên mạng Internet hoặc intranet',
      },
      {
        Id: 107576,
        Text: 'Các phương án đều đúng',
      },
      {
        Id: 107577,
        Text: 'Là ứng dụng chỉ chạy trên một máy tính đơn',
      },
      {
        Id: 107578,
        Text: 'Là ứng dụng chỉ chạy trên môi trường mobile',
      },
    ],
  },
  {
    Id: 25972,
    Text: 'Để hiển thị dòng "Hello World" trên trang web, trong ASP.Net cần dùng lệnh nào?',
    Marks: 1,
    AnswerId: 107582,
    Answers: [
      {
        Id: 107579,
        Text: 'Document.Write("Hello World");',
      },
      {
        Id: 107580,
        Text: '"Hello World"',
      },
      {
        Id: 107581,
        Text: 'Request.Write(("Hello World");',
      },
      {
        Id: 107582,
        Text: 'Response.Write("Hello World");',
      },
    ],
  },
  {
    Id: 25973,
    Text: 'Phát biểu nào sau đây đúng về ASP.NET?',
    Marks: 1,
    AnswerId: 107584,
    Answers: [
      {
        Id: 107583,
        Text: 'ASP.NET là mô hình lập trình hướng cấu trúc',
      },
      {
        Id: 107584,
        Text: 'ASP.NET là mô hình lập trình hướng sự kiện',
      },
      {
        Id: 107585,
        Text: 'ASP.NET là mô hình lập trình hướng thành phần',
      },
      {
        Id: 107586,
        Text: 'ASP.NET là mô hình lập trình hướng đối tượng',
      },
    ],
  },
  {
    Id: 25974,
    Text: 'Khi chạy một ứng dụng ASP.NET, nếu ngoại lệ xảy ra nhưng không được bắt và xử lý, ứng dụng sẽ chuyển sang chế độ ngắt và hộp thoại ............ sẽ hiển thị.',
    Marks: 1,
    AnswerId: 107587,
    Answers: [
      {
        Id: 107587,
        Text: 'Exception Assistant',
      },
      {
        Id: 107588,
        Text: 'Exception Help',
      },
      {
        Id: 107589,
        Text: 'Các phương án đều sai',
      },
      {
        Id: 107590,
        Text: 'Exception',
      },
    ],
  },
  {
    Id: 25975,
    Text: 'Theo bạn, câu nào sau đây là sai khi nói về web động?',
    Marks: 1,
    AnswerId: 107591,
    Answers: [
      {
        Id: 107591,
        Text: 'Viết hoàn toàn bằng ngôn ngữ HTML',
      },
      {
        Id: 107592,
        Text: 'Có tương tác với người dùng, nội dung của trang hiển thị khác nhau đáp ứng các sự kiện.',
      },
      {
        Id: 107593,
        Text: 'Có thể dùng để hiển thị và cung cấp thông tin',
      },
      {
        Id: 107594,
        Text: 'Lưu dữ liệu trong cơ sở dữ liệu',
      },
    ],
  },
  {
    Id: 25976,
    Text: 'Vòng đời của một trang Web bao gồm các các sự kiện:1. PreRender2. Load3. UnLoad4. InitTheo bạn, các sự kiện xảy ra theo thứ tự nào sau đây là đúng?',
    Marks: 1,
    AnswerId: 107595,
    Answers: [
      {
        Id: 107595,
        Text: '4 - 2 – 3 – 1',
      },
      {
        Id: 107596,
        Text: '4 - 3 – 2 – 1',
      },
      {
        Id: 107597,
        Text: '2 - 3 – 4 – 1',
      },
      {
        Id: 107598,
        Text: '1 - 2 - 3 – 4',
      },
    ],
  },
  {
    Id: 25977,
    Text: 'Phím tắt nào sau đây dùng để bắt đầu chạy ứng dụng dưới chế độ gỡ lỗi?',
    Marks: 1,
    AnswerId: 107599,
    Answers: [
      {
        Id: 107599,
        Text: 'F9',
      },
      {
        Id: 107600,
        Text: 'F10',
      },
      {
        Id: 107601,
        Text: 'F5',
      },
      {
        Id: 107602,
        Text: 'F11',
      },
    ],
  },
  {
    Id: 25978,
    Text: 'Lớp nào sau đây được ASP.NET cung cấp để duy trì các thông tin trao đổi giữa Client và Server?',
    Marks: 1,
    AnswerId: 107603,
    Answers: [
      {
        Id: 107603,
        Text: 'HttpResponse',
      },
      {
        Id: 107604,
        Text: 'Các phươn án đều đúng',
      },
      {
        Id: 107605,
        Text: 'HttpServerUtility',
      },
      {
        Id: 107606,
        Text: 'HttpRequest',
      },
    ],
  },
  {
    Id: 25979,
    Text: 'Theo bạn, sự kiện nào sau đây được xem là sự kiện tự động kích hoạt?',
    Marks: 1,
    AnswerId: 107607,
    Answers: [
      {
        Id: 107607,
        Text: 'Tải trang (Page_load)',
      },
      {
        Id: 107608,
        Text: 'Thay đổi giá trị ở TextBox (changeText)',
      },
      {
        Id: 107609,
        Text: 'Nhấn chuột vào một nút (button_click)',
      },
      {
        Id: 107610,
        Text: 'Đóng cửa sổ trình duyệt (close window)',
      },
    ],
  },
  {
    Id: 25980,
    Text: 'Các lớp tạo ra các điều khiển Web server nằm trong namespace nào?',
    Marks: 1,
    AnswerId: 107611,
    Answers: [
      {
        Id: 107611,
        Text: 'System.Web.UI.WebControls',
      },
      {
        Id: 107612,
        Text: 'System.Windows.Page. WebControls',
      },
      {
        Id: 107613,
        Text: 'System.Web.UI.Controls',
      },
      {
        Id: 107614,
        Text: 'System.web.UI.Page',
      },
    ],
  },
  {
    Id: 25981,
    Text: 'Những điều khiển nào sau đây thuộc về loại List Control?',
    Marks: 1,
    AnswerId: 107615,
    Answers: [
      {
        Id: 107615,
        Text: 'DropDownList, ListBox, RadioButtonList, CheckBoxList, BulletedList',
      },
      {
        Id: 107616,
        Text: 'ComboboxList, ListBox, HyperLinkList, CheckBoxList, BulletedList',
      },
      {
        Id: 107617,
        Text: 'ComboboxList, ListBox, RadioButtonList, CheckBoxList, BulletedList',
      },
      {
        Id: 107618,
        Text: 'DropdownList, ButtonList , RadioButtonList, CheckBoxList, ListBox',
      },
    ],
  },
  {
    Id: 25982,
    Text: 'Để che dấu các kí tự nhập vào một text box bạn gán giá trị cho thuộc tính TextMode bằng giá trị nào dưới đây?',
    Marks: 1,
    AnswerId: 107619,
    Answers: [
      {
        Id: 107619,
        Text: 'Password',
      },
      {
        Id: 107620,
        Text: 'Hidden',
      },
      {
        Id: 107621,
        Text: 'Mask',
      },
      {
        Id: 107622,
        Text: 'Các phương án đều sai',
      },
    ],
  },
  {
    Id: 25983,
    Text: 'Chọn phương án đúng về điều khiển FileUpLoad:',
    Marks: 1,
    AnswerId: 107623,
    Answers: [
      {
        Id: 107623,
        Text: 'Sử dụng phương thức SaveAs(String) để lưu file được upload tới một đường dẫn được chỉ định trong tham số String',
      },
      {
        Id: 107624,
        Text: 'Hỗ trợ một button cho phép người dùng gửi yêu cầu upload File được chọn lên Server',
      },
      {
        Id: 107625,
        Text: 'Sử dụng phương thức Save(String) để lưu file được upload tới một đường dẫn được chỉ định trong tham số String',
      },
      {
        Id: 107626,
        Text: 'Các phương án đều sai',
      },
    ],
  },
  {
    Id: 25984,
    Text: 'Để một Check Box hiển thị trên trình duyệt với một dấu tích chọn , bạn gán giá trị True cho thuộc tính nào dưới đây?',
    Marks: 1,
    AnswerId: 107629,
    Answers: [
      {
        Id: 107627,
        Text: 'Selected',
      },
      {
        Id: 107628,
        Text: 'Chosen',
      },
      {
        Id: 107629,
        Text: 'Checked',
      },
      {
        Id: 107630,
        Text: 'Các phương án đều sai',
      },
    ],
  },
  {
    Id: 25985,
    Text: 'Mã lệnh nào sau đây cho phép tạo ra điều khiển Hyperlink trong ASP.Net liên kết đến trang index.aspx của website, có đoạn văn bản hiển thị trên điều khiển là “Trang chủ” và hình ảnh được hiển thị là icon “home.gif”?',
    Marks: 1,
    AnswerId: 107631,
    Answers: [
      {
        Id: 107631,
        Text: '\u003casp:HyperLink ID="HyperLink1" runat="server" ImageUrl="home.gif" NavigateUrl="index.apsx"\u003eTrang chủ\u003c/asp:HyperLink\u003e',
      },
      {
        Id: 107632,
        Text: '\u003casp:HyperLink ID="HyperLink1" runat="server" ImageUrl="home.gif" href="index.apsx" text= “Trang chủ”\u003e\u003c/asp:HyperLink\u003e',
      },
      {
        Id: 107633,
        Text: '\u003casp:HyperLink ID="HyperLink1" runat="server" Image="home.gif" href ="index.apsx"\u003eTrang chủ\u003c/asp:HyperLink\u003e',
      },
      {
        Id: 107634,
        Text: '\u003casp:HyperLink ID="HyperLink1" runat="server" Image="home.gif" NavigateUrl="index.apsx" text= “Trang chủ”\u003e\u003c/asp:HyperLink\u003e',
      },
    ],
  },
  {
    Id: 25986,
    Text: 'Thuộc tính GroupName là thuộc tính của điều khiển nào sau đây?',
    Marks: 1,
    AnswerId: 107638,
    Answers: [
      {
        Id: 107635,
        Text: 'Check box',
      },
      {
        Id: 107636,
        Text: 'Các phương án đều đúng',
      },
      {
        Id: 107637,
        Text: 'Radio button List',
      },
      {
        Id: 107638,
        Text: 'Radio button',
      },
    ],
  },
  {
    Id: 25987,
    Text: 'Để một điều khiển HTML được nhận diện như là một điều khiển trên Server, bạn  phải:A. Gán giá trị cho thuộc tính Runat của điều khiển bằng "Server"B. Gán giá trị cho thuộc tính Server của điều khiển bằng "Runat"',
    Marks: 1,
    AnswerId: 107639,
    Answers: [
      {
        Id: 107639,
        Text: 'Cả A, B đều đúng',
      },
      {
        Id: 107640,
        Text: 'B đúng',
      },
      {
        Id: 107641,
        Text: 'Cả A, B đều sai',
      },
      {
        Id: 107642,
        Text: 'A đúng',
      },
    ],
  },
  {
    Id: 25988,
    Text: 'ddlDay là một drop-down list. Câu lệnh nào sau đây thực hiện thêm một phần tử vào drop-down list',
    Marks: 1,
    AnswerId: 107646,
    Answers: [
      {
        Id: 107643,
        Text: 'Các phương án đều sai',
      },
      {
        Id: 107644,
        Text: 'ddlDay.Add(new ListItem ("Sunday", "1"));',
      },
      {
        Id: 107645,
        Text: 'ddlDay.ListItems.Add(new ListItem("Sunday", "1"));',
      },
      {
        Id: 107646,
        Text: 'ddlDay.Items.Add(new ListItem("Sunday", "1"));',
      },
    ],
  },
  {
    Id: 25989,
    Text: 'Sự kiện Click là sự kiện của điều khiển nào sau đây?A. ImageMapB. ButtonC. Text box',
    Marks: 1,
    AnswerId: 107649,
    Answers: [
      {
        Id: 107647,
        Text: 'A đúng',
      },
      {
        Id: 107648,
        Text: 'B đúng',
      },
      {
        Id: 107649,
        Text: 'A, B đúng',
      },
      {
        Id: 107650,
        Text: 'Cả A, B, C đều đúng',
      },
    ],
  },
  {
    Id: 25990,
    Text: 'Điều khiển nào dùng để hiển thị tổng hợp tất cả lỗi của các Validator trên trang?',
    Marks: 1,
    AnswerId: 107653,
    Answers: [
      {
        Id: 107651,
        Text: 'Các phương án đều sai',
      },
      {
        Id: 107652,
        Text: 'SummaryValidator',
      },
      {
        Id: 107653,
        Text: 'ValidationSummary',
      },
      {
        Id: 107654,
        Text: 'CustomValidator',
      },
    ],
  },
  {
    Id: 25991,
    Text: 'Chọn phương án đúng khi nói về CompareValidator:',
    Marks: 1,
    AnswerId: 107657,
    Answers: [
      {
        Id: 107655,
        Text: 'Kiểm tra kiểu dữ liệu nhập vào điều khiển nhập liệu',
      },
      {
        Id: 107656,
        Text: 'So sánh giá trị điều khiển nhập liệu với hằng số',
      },
      {
        Id: 107657,
        Text: 'Các phương án đều đúng',
      },
      {
        Id: 107658,
        Text: 'So sánh giá trị của điều khiển nhập liệu với giá trị của một điều khiển khác',
      },
    ],
  },
  {
    Id: 25992,
    Text: 'ASP.NET cung cấp mấy loại điều khiển Validation?',
    Marks: 1,
    AnswerId: 107661,
    Answers: [
      {
        Id: 107659,
        Text: '4',
      },
      {
        Id: 107660,
        Text: '3',
      },
      {
        Id: 107661,
        Text: '6',
      },
      {
        Id: 107662,
        Text: '5',
      },
    ],
  },
  {
    Id: 25993,
    Text: 'Phát biểu về Cookie nào sau đây là đúng?',
    Marks: 1,
    AnswerId: 107663,
    Answers: [
      {
        Id: 107663,
        Text: 'Ứng dụng gửi một Cookie tới trình duyệt thông qua hồi đáp HTTP (HTTP Response)',
      },
      {
        Id: 107664,
        Text: 'Lập trình viên không thể sử dụng cookie để lưu trữ dữ liệu của riêng mình',
      },
      {
        Id: 107665,
        Text: 'Session Cookie được lưu trữ vĩnh viễn trên ổ đĩa máy Client',
      },
      {
        Id: 107666,
        Text: 'Các phương án đều sai',
      },
    ],
  },
  {
    Id: 25994,
    Text: 'Để bắt buộc người dùng phải thay đổi giá trị hiển thị mặc định trên một Text box, lập trình viên sử dụng điều khiển nào sau đây:',
    Marks: 1,
    AnswerId: 107667,
    Answers: [
      {
        Id: 107667,
        Text: 'RangeValidator',
      },
      {
        Id: 107668,
        Text: 'RequiredFieldValidator',
      },
      {
        Id: 107669,
        Text: 'CompareValidator',
      },
      {
        Id: 107670,
        Text: 'Các phương án đều sai',
      },
    ],
  },
  {
    Id: 25995,
    Text: 'ASP.NET cung cấp các phương pháp nào để duy trì trạng thái?',
    Marks: 1,
    AnswerId: 107671,
    Answers: [
      {
        Id: 107671,
        Text: 'Cả 3 phương án đã nêu',
      },
      {
        Id: 107672,
        Text: 'Trạng thái phiên làm việc',
      },
      {
        Id: 107673,
        Text: 'Trạng thái hiển thị',
      },
      {
        Id: 107674,
        Text: 'Trạng thái ứng dụng',
      },
    ],
  },
  {
    Id: 25996,
    Text: 'Để kiểm tra tính hợp lệ cho kiểu dữ liệu người dùng nhập lên một điều khiển nhập liệu, cần phải:',
    Marks: 1,
    AnswerId: 107678,
    Answers: [
      {
        Id: 107675,
        Text: 'Gán giá trị cho thuộc tính Operator bằng kiểu dữ liệu cần kiểm tra',
      },
      {
        Id: 107676,
        Text: 'Gán giá trị cho thuộc tính Type bằng kiểu dữ liệu cần kiểm tra',
      },
      {
        Id: 107677,
        Text: 'Các phương án đều sai',
      },
      {
        Id: 107678,
        Text: 'Gán giá trị cho thuộc tính Operator bằng DataCheckType và giá trị cho thuộc tính Type bằng kiểu dữ liệu cần kiểm tra',
      },
    ],
  },
  {
    Id: 25997,
    Text: 'Phát biểu nào sau đây là đúng khi nói đến điều khiển Validation Summary?',
    Marks: 1,
    AnswerId: 107682,
    Answers: [
      {
        Id: 107679,
        Text: 'Thuộc tính ShowMessageBox của điều khiển Validation Summary có giá trị mặc định là “True”',
      },
      {
        Id: 107680,
        Text: 'Được sử dụng để kiểm tra tính hợp lệ của điều khiển nhập liệu có phép tính tổng',
      },
      {
        Id: 107681,
        Text: 'Hiển thị lỗi trong một tập tin xml',
      },
      {
        Id: 107682,
        Text: 'Được sử dụng để hiển thị toàn bộ thông tin lỗi của các validator trên trang',
      },
    ],
  },
  {
    Id: 25998,
    Text: 'Để kiểm tra tính hợp lệ cho một trường bắt buộc người dùng nhập liệu, lập trình viên có thể sử dụng điều khiển ________',
    Marks: 1,
    AnswerId: 107685,
    Answers: [
      {
        Id: 107683,
        Text: 'RequiredValidator',
      },
      {
        Id: 107684,
        Text: 'RequiredFieldValidation',
      },
      {
        Id: 107685,
        Text: 'RequiredFieldValidator',
      },
      {
        Id: 107686,
        Text: 'RequiredFields',
      },
    ],
  },
  {
    Id: 25999,
    Text: 'Nhóm điều khiển nào sau đây trên Toolbox, sử dụng để kiểm tra tính hợp lệ của dữ liệu nhập vào một web form?',
    Marks: 1,
    AnswerId: 107689,
    Answers: [
      {
        Id: 107687,
        Text: 'Navigation',
      },
      {
        Id: 107688,
        Text: 'Data',
      },
      {
        Id: 107689,
        Text: 'Validation',
      },
      {
        Id: 107690,
        Text: 'Standard',
      },
    ],
  },
  {
    Id: 26000,
    Text: 'Để áp dụng theme tùy chỉnh cho toàn bộ các trang của một ứng dụng, bạn phải làm gì?',
    Marks: 1,
    AnswerId: 107694,
    Answers: [
      {
        Id: 107691,
        Text: 'Thêm phần tử Theme vào file web.config. Chỉ định giá trị thuộc tính fileName bằng tên Theme         \u003csystem.web\u003e                   \u003ctheme fileName="ThemeName" /\u003e         \u003c/system.web\u003e',
      },
      {
        Id: 107692,
        Text: 'Thêm thuộc tính Theme vào chỉ dẫn Page     \u003c%@ Page="" Language="C#" Theme=" ThemeName" %\u003e',
      },
      {
        Id: 107693,
        Text: 'Thêm thuộc tính Skin vào chỉ dẫn Page     \u003c%@ Page="" Language="C#" Skin=" ThemeName" %\u003e',
      },
      {
        Id: 107694,
        Text: 'Thêm phần tử Pages vào file web.config. Chỉ định giá trị thuộc tính Theme bằng tên Theme         \u003csystem.web\u003e                   \u003cpages theme="ThemeName" /\u003e         \u003c/system.web\u003e',
      },
    ],
  },
  {
    Id: 26001,
    Text: 'Phát biểu nào sau đây ĐÚNG?',
    Marks: 1,
    AnswerId: 107697,
    Answers: [
      {
        Id: 107695,
        Text: 'Sự kiện của các điều khiển trên trang nội dung sẽ được xử lý sau trang master',
      },
      {
        Id: 107696,
        Text: 'Sự kiện Load của trang nội dung xảy ra sau sự kiện Load của trang master',
      },
      {
        Id: 107697,
        Text: 'Sự kiện Load của trang nội dung xảy ra trước sự kiện Load của trang master',
      },
      {
        Id: 107698,
        Text: 'Các phương án đều sai',
      },
    ],
  },
  {
    Id: 26002,
    Text: 'Để hủy Theme tùy chỉnh cho một trang web, sử dụng phương pháp nào sau đây?',
    Marks: 1,
    AnswerId: 107701,
    Answers: [
      {
        Id: 107699,
        Text: 'Các phương án đều sai',
      },
      {
        Id: 107700,
        Text: 'Thiết lập thuộc tính Theme của chỉ dẫn Page bằng False',
      },
      {
        Id: 107701,
        Text: 'Thiết lập thuộc tính Theme của chỉ dẫn Page bằng xâu rỗng',
      },
      {
        Id: 107702,
        Text: 'Thiết lập thuộc tính Theme của chỉ dẫn Page bằng True',
      },
    ],
  },
  {
    Id: 26003,
    Text: 'Để áp dụng skin cho một điều khiển tại thời gian chạy, bạn cần gán giá trị cho thuộc tính SkinID của điều khiển trong phương thức xử lý sự kiện nào sau đây?',
    Marks: 1,
    AnswerId: 107703,
    Answers: [
      {
        Id: 107703,
        Text: 'PreInit',
      },
      {
        Id: 107704,
        Text: 'PreRender',
      },
      {
        Id: 107705,
        Text: 'Unload',
      },
      {
        Id: 107706,
        Text: 'Load',
      },
    ],
  },
  {
    Id: 26004,
    Text: 'ASP.NET hỗ trợ cách định dạng hiển thị nào cho các thành phần trên trang web?',
    Marks: 1,
    AnswerId: 107707,
    Answers: [
      {
        Id: 107707,
        Text: 'Các phương án đều đúng',
      },
      {
        Id: 107708,
        Text: 'Sử dụng thuộc tính của các điều khiển',
      },
      {
        Id: 107709,
        Text: 'Sử dụng external style (File CSS)',
      },
      {
        Id: 107710,
        Text: 'Sử dụng internal style Sử dụng internal style',
      },
    ],
  },
  {
    Id: 26005,
    Text: 'Phát biểu nào sau đây ĐÚNG ?',
    Marks: 1,
    AnswerId: 107711,
    Answers: [
      {
        Id: 107711,
        Text: 'Hai thành phần cơ bản của Theme là File Skin và File CSS',
      },
      {
        Id: 107712,
        Text: 'Theme chỉ sử dụng để định dạng hiển thị cho các phần tử HTML trên trang',
      },
      {
        Id: 107713,
        Text: 'Theme chỉ sử dụng để định dạng hiển thị cho các điều khiển web server',
      },
      {
        Id: 107714,
        Text: 'Chỉ được áp dụng một Theme cho một trang aspx',
      },
    ],
  },
  {
    Id: 26006,
    Text: 'Điều khiển Navigation nào sau đây hiển thị dãy các liên kết từ trang chủ đến trang hiện tại?',
    Marks: 1,
    AnswerId: 107718,
    Answers: [
      {
        Id: 107715,
        Text: 'Menu',
      },
      {
        Id: 107716,
        Text: 'TreeView',
      },
      {
        Id: 107717,
        Text: 'Các phương án đều sai',
      },
      {
        Id: 107718,
        Text: 'SiteMapPath',
      },
    ],
  },
  {
    Id: 26007,
    Text: 'Điều khiển nào sau đây không cần phải buộc với một điều khiển SiteMapDatasource, để hiển thị cấu trúc phân cấp điều hướng được định nghĩa trong file web.sitemap?',
    Marks: 1,
    AnswerId: 107720,
    Answers: [
      {
        Id: 107719,
        Text: 'TreeView',
      },
      {
        Id: 107720,
        Text: 'SiteMapPath',
      },
      {
        Id: 107721,
        Text: 'Menu',
      },
      {
        Id: 107722,
        Text: 'Tất cả đáp án đều sai',
      },
    ],
  },
  {
    Id: 26008,
    Text: 'Các style của ............ được áp dụng sau external, internal, inline style và các thuộc tính của điều khiển',
    Marks: 1,
    AnswerId: 107724,
    Answers: [
      {
        Id: 107723,
        Text: 'Các phương án đều sai',
      },
      {
        Id: 107724,
        Text: 'Theme tùy chỉnh',
      },
      {
        Id: 107725,
        Text: 'Theme tùy chỉnh và Theme StyleSheet',
      },
      {
        Id: 107726,
        Text: 'Theme StyleSheet',
      },
    ],
  },
  {
    Id: 26009,
    Text: 'Sử dụng phương pháp nào sau đây để áp dụng Theme tùy chỉnh cho một trang web?',
    Marks: 1,
    AnswerId: 107727,
    Answers: [
      {
        Id: 107727,
        Text: 'Cả hai phương án đều đúng',
      },
      {
        Id: 107728,
        Text: 'Cả hai phương án đều sai',
      },
      {
        Id: 107729,
        Text: 'Thêm thuộc tính Theme vào chỉ dẫn Page của trang và gán tên của theme cho thuộc tính này.',
      },
      {
        Id: 107730,
        Text: 'Gán giá trị cho thuộc tính Theme của lớp Page trong phương thức xử lý sự kiện Page_PreInit',
      },
    ],
  },
  {
    Id: 26010,
    Text: 'Phát biểu nào sau đây Đúng về điều khiển data source?',
    Marks: 1,
    AnswerId: 107731,
    Answers: [
      {
        Id: 107731,
        Text: 'Điều khiển data source quản lý các tác vụ kết nối đến CSDL, đọc và ghi dữ liệu.',
      },
      {
        Id: 107732,
        Text: 'Các phương án đều sai',
      },
      {
        Id: 107733,
        Text: 'Mỗi điều khiển data source chỉ được buộc vào một điều khiển hiển thị dữ liệu',
      },
      {
        Id: 107734,
        Text: 'Điều khiển data source dùng để hiển thị dữ liệu cho người dùng',
      },
    ],
  },
  {
    Id: 26011,
    Text: 'Giả sử bạn đã thiết lập một chuỗi kết nối trong file web.config với tên “demoConnectionString” trong thẻ "\u003cconnectionStrings\u003e" Câu lệnh nào trong lớp code-behind để lấy thông tin chuỗi kết nối?',
    Marks: 1,
    AnswerId: 107738,
    Answers: [
      {
        Id: 107735,
        Text: 'ConnectionStrings["demoConnectionString"].ConnectionString',
      },
      {
        Id: 107736,
        Text: 'WebConfigurationManager.ConnectionStrings["demoConnectionString"]',
      },
      {
        Id: 107737,
        Text: 'ConnectionStrings["demoConnectionString"]',
      },
      {
        Id: 107738,
        Text: 'WebConfigurationManager.ConnectionStrings["demoConnectionString"].ConnectionString',
      },
    ],
  },
  {
    Id: 26012,
    Text: 'Đối tượng nào sau đây sử dụng để lấy dữ liệu từ CSDL lưu vào dataset?',
    Marks: 1,
    AnswerId: 107742,
    Answers: [
      {
        Id: 107739,
        Text: 'DataReader',
      },
      {
        Id: 107740,
        Text: 'Các phương án đều đúng',
      },
      {
        Id: 107741,
        Text: 'Dataset',
      },
      {
        Id: 107742,
        Text: 'DataAdapter',
      },
    ],
  },
  {
    Id: 26013,
    Text: 'Phát biểu nào sau đây là sai về ADO.Net?',
    Marks: 1,
    AnswerId: 107745,
    Answers: [
      {
        Id: 107743,
        Text: 'Các lớp của ADO.net được định nghĩa trong namespace System.Data',
      },
      {
        Id: 107744,
        Text: 'ADO.Net hỗ trợ các ứng dụng kết nối đến các cơ sở dữ liệu',
      },
      {
        Id: 107745,
        Text: 'ADO.Net không hỗ trợ kiến trúc không kết nối',
      },
      {
        Id: 107746,
        Text: 'Tất cả các phương án đã nêu',
      },
    ],
  },
  {
    Id: 26014,
    Text: 'Phương thức nào sau đây của đối tượng Command sử dụng để xóa/cập nhật dữ liệu trong CSDL sử dụng kiến trúc kết nối?',
    Marks: 1,
    AnswerId: 107747,
    Answers: [
      {
        Id: 107747,
        Text: 'ExecuteNonQuery()',
      },
      {
        Id: 107748,
        Text: 'ExecuteReader()',
      },
      {
        Id: 107749,
        Text: 'ExecuteScalar()',
      },
      {
        Id: 107750,
        Text: 'Execute()',
      },
    ],
  },
  {
    Id: 26015,
    Text: 'Phương thức nào sau đây không thuộc về lớp SqlDataAdapter?',
    Marks: 1,
    AnswerId: 107751,
    Answers: [
      {
        Id: 107751,
        Text: 'ReadData',
      },
      {
        Id: 107752,
        Text: 'FillSchema',
      },
      {
        Id: 107753,
        Text: 'Fill',
      },
      {
        Id: 107754,
        Text: 'Update',
      },
    ],
  },
  {
    Id: 26016,
    Text: 'Lựa chọn đáp án đúng.Để liên kết điều khiển DataList với một SqlDataSouce, bạn chọn ............ trên menu thông minh',
    Marks: 1,
    AnswerId: 107756,
    Answers: [
      {
        Id: 107755,
        Text: 'Data Binding',
      },
      {
        Id: 107756,
        Text: 'Chose Data Source',
      },
      {
        Id: 107757,
        Text: 'Binding DataSource',
      },
      {
        Id: 107758,
        Text: 'Configure Data Source',
      },
    ],
  },
  {
    Id: 26017,
    Text: 'Điều khiển data source nào sau đây hỗ trợ phát triển ứng dụng Web theo kiến trúc ba tầng?',
    Marks: 1,
    AnswerId: 107759,
    Answers: [
      {
        Id: 107759,
        Text: 'ObjectDataSource',
      },
      {
        Id: 107760,
        Text: 'AccessDataSource',
      },
      {
        Id: 107761,
        Text: 'SQLDataSource',
      },
      {
        Id: 107762,
        Text: 'Các phương án đều đúng',
      },
    ],
  },
  {
    Id: 26018,
    Text: 'Thành phần nào của Data provider dùng để thực thi các lệnh sql lấy dữ liệu từ CSDL hoặc thay đổi dữ liệu trong CSDL?',
    Marks: 1,
    AnswerId: 107764,
    Answers: [
      {
        Id: 107763,
        Text: 'DataAdapter',
      },
      {
        Id: 107764,
        Text: 'SqlCommand',
      },
      {
        Id: 107765,
        Text: 'Connection',
      },
      {
        Id: 107766,
        Text: 'DataReader',
      },
    ],
  },
  {
    Id: 26019,
    Text: 'Đối tượng nào sau đây tham gia trong quá trình truy cập CSDL sử dụng kiến trúc kết nối?A. DataReaderB. DataAdapter',
    Marks: 1,
    AnswerId: 107767,
    Answers: [
      {
        Id: 107767,
        Text: 'Cả A, B đều sai',
      },
      {
        Id: 107768,
        Text: 'A đúng',
      },
      {
        Id: 107769,
        Text: 'Cả A, B đều đúng',
      },
      {
        Id: 107770,
        Text: 'B đúng',
      },
    ],
  },
  {
    Id: 26020,
    Text: 'Để kích hoạt tính năng sắp xếp của điều khiển GridView, bạn cần thực hiện các công việc gì?',
    Marks: 1,
    AnswerId: 107772,
    Answers: [
      {
        Id: 107771,
        Text: 'Thiết lập thuộc tính AllowSorting là “True”, sau đó thêm thuộc tính SortExpression vào mỗi cột muốn sắp xếp và thiết lập thuộc tính DataSourceMode của nguồn dữ liệu đặt ở chế độ DataSet',
      },
      {
        Id: 107772,
        Text: 'Các phương án đều đúng',
      },
      {
        Id: 107773,
        Text: 'Trong bảng Smart tag menu của GridView, kích chọn hộp kiểm “Enable Sorting”',
      },
      {
        Id: 107774,
        Text: 'Các phương án đều sai',
      },
    ],
  },
  {
    Id: 26021,
    Text: 'Các điều khiển nào sau đây cho phép hiển thị một hàng dữ liệu đơn từ datasource?',
    Marks: 1,
    AnswerId: 107778,
    Answers: [
      {
        Id: 107775,
        Text: 'DetailsView, GridView',
      },
      {
        Id: 107776,
        Text: 'GridView, ListView',
      },
      {
        Id: 107777,
        Text: 'DataList, ListView',
      },
      {
        Id: 107778,
        Text: 'DetailsView, FormView',
      },
    ],
  },
  {
    Id: 26022,
    Text: 'Theo bạn, sự khác nhau của điều khiển GridView và ListView là gì?',
    Marks: 1,
    AnswerId: 107779,
    Answers: [
      {
        Id: 107779,
        Text: 'GridView trình bày dữ liệu dưới dạng bảng theo cột và hàng giống bảng trong CSDL còn ListView trình bày dữ liệu dưới dạng danh sách theo một template có sẵn',
      },
      {
        Id: 107780,
        Text: 'GridView có hỗ trợ phân trang còn ListView thì không',
      },
      {
        Id: 107781,
        Text: 'GridView hỗ trợ tính năng cập nhật CSDL, không hỗ trợ tính năng chèn mới dữ liệu còn ListView thì ngược lại, cho phép chèn dữ liệu nhưng không cho phép cập nhật dữ liệu.',
      },
      {
        Id: 107782,
        Text: 'Các phương án đều sai',
      },
    ],
  },
  {
    Id: 26023,
    Text: 'Điều khiển nào sau đây bắt buộc phải dùng Template và biểu thức buộc dữ liệu để hiển thị các trường dữ liệu?',
    Marks: 1,
    AnswerId: 107784,
    Answers: [
      {
        Id: 107783,
        Text: 'GridView',
      },
      {
        Id: 107784,
        Text: 'FormView',
      },
      {
        Id: 107785,
        Text: 'DataList',
      },
      {
        Id: 107786,
        Text: 'DetailsView',
      },
    ],
  },
  {
    Id: 26024,
    Text: 'Hãy chọn một phần tử của GridView',
    Marks: 1,
    AnswerId: 107787,
    Answers: [
      {
        Id: 107787,
        Text: 'Các phương án đều đúng',
      },
      {
        Id: 107788,
        Text: 'Asp:ImageField',
      },
      {
        Id: 107789,
        Text: 'Asp:HyperlinkField',
      },
      {
        Id: 107790,
        Text: 'Asp:CommandField',
      },
    ],
  },
  {
    Id: 26025,
    Text: 'Thuộc tính nào của điều khiển GridView thiết lập số lượng hàng trong một trang ?',
    Marks: 1,
    AnswerId: 107791,
    Answers: [
      {
        Id: 107791,
        Text: 'PageSize',
      },
      {
        Id: 107792,
        Text: 'PageRows',
      },
      {
        Id: 107793,
        Text: 'PageRecords',
      },
      {
        Id: 107794,
        Text: 'PageField',
      },
    ],
  },
  {
    Id: 26026,
    Text: 'Để thêm một trường mới cho một điều khiển GridView, bạn sử dụng phương pháp nào sau đây?A. Sử dụng hộp thoại FieldsB. Sử dụng hộp thoại Add FieldsC. Sử dụng hộp thoại Add Field',
    Marks: 1,
    AnswerId: 107795,
    Answers: [
      {
        Id: 107795,
        Text: 'B, C đúng',
      },
      {
        Id: 107796,
        Text: 'A, B đúng',
      },
      {
        Id: 107797,
        Text: 'A, C đúng',
      },
      {
        Id: 107798,
        Text: 'Tất cả đáp án đều sai',
      },
    ],
  },
  {
    Id: 26027,
    Text: 'Phát biểu nào sau đây ĐÚNG về FormView?',
    Marks: 1,
    AnswerId: 107802,
    Answers: [
      {
        Id: 107799,
        Text: 'Hiển thị dữ liệu dưới dạng danh sách các mẫu tin',
      },
      {
        Id: 107800,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107801,
        Text: 'Không hỗ trợ thao tác thêm dữ liệu vào CSDL',
      },
      {
        Id: 107802,
        Text: 'Hỗ trợ sử dụng CSS để định dạng hiển thị dữ liệu',
      },
    ],
  },
  {
    Id: 26028,
    Text: 'Thuộc tính nào sau đây của phần tử Asp:BoundField chỉ định chuỗi định dạng hiển thị dữ liệu cho một trường dữ liệu của GridView?',
    Marks: 1,
    AnswerId: 107806,
    Answers: [
      {
        Id: 107803,
        Text: 'FieldFormatString',
      },
      {
        Id: 107804,
        Text: 'ColumnFormatString',
      },
      {
        Id: 107805,
        Text: 'FieldFormat',
      },
      {
        Id: 107806,
        Text: 'DataFormatString',
      },
    ],
  },
  {
    Id: 26029,
    Text: 'Lựa chọn phương án ĐÚNG.Sau khi liên kết một SqlDataSource với GridView, mặc định các trường tạo ra là ............',
    Marks: 1,
    AnswerId: 107809,
    Answers: [
      {
        Id: 107807,
        Text: 'Trường TemplateField',
      },
      {
        Id: 107808,
        Text: 'Các phương án đều sai',
      },
      {
        Id: 107809,
        Text: 'Trường BoundField',
      },
      {
        Id: 107810,
        Text: 'Trường BoundField hoặc trường TemplateField tùy theo kiểu dữ liệu của cột trong bảng CSDL',
      },
    ],
  },
  {
    Id: 26030,
    Text: 'Lựa phương án án ĐÚNGĐể một điều khiển DetailsView hiển thị chế độ mặc định là chế độ Insert trên trình duyệt, lập trình viên phải ............',
    Marks: 1,
    AnswerId: 107812,
    Answers: [
      {
        Id: 107811,
        Text: 'Không phải thực hiện bất cứ một thao tác nào, DetailsView được hiển thị mặc định ở chế độ Insert',
      },
      {
        Id: 107812,
        Text: 'Gán giá trị cho thuộc tính DefaultMode bằng Insert',
      },
      {
        Id: 107813,
        Text: 'Gán giá trị cho thuộc tính Mode bằng Insert',
      },
      {
        Id: 107814,
        Text: 'Gán giá trị cho thuộc tính InsertMode bằng True',
      },
    ],
  },
  {
    Id: 26031,
    Text: 'Phương pháp triển khai ứng dụng web nào sau đây không được hỗ trợ bởi phiên bản Visual Studio Express?',
    Marks: 1,
    AnswerId: 107817,
    Answers: [
      {
        Id: 107815,
        Text: 'Xcopy',
      },
      {
        Id: 107816,
        Text: 'Các phương án đều sai',
      },
      {
        Id: 107817,
        Text: 'Tạo Web Setup Project',
      },
      {
        Id: 107818,
        Text: 'Tiền biên dịch',
      },
    ],
  },
  {
    Id: 26032,
    Text: 'Phát biểu nào sau đây là đúng khi đề cập đến ObjectDataSource?',
    Marks: 1,
    AnswerId: 107819,
    Answers: [
      {
        Id: 107819,
        Text: 'ObjectDataSource truy cập cơ sở dữ liệu trực tiếp mà không thông qua lớp truy cập dữ liệu.',
      },
      {
        Id: 107820,
        Text: 'Trong các ứng dụng lớn, nên thiết kế theo kiến trúc ba tầng. Do đó, không nên sử dụng ObjectDataSource',
      },
      {
        Id: 107821,
        Text: 'Trong các ứng dụng nhỏ, sử dụng ObjectDataSource mang lại nhiều lợi ích, không phải viết code C#.',
      },
      {
        Id: 107822,
        Text: 'ObjectDataSource cho phép bạn sử dụng phương pháp buộc dữ liệu cùng với kiến trúc 3 tầng trong ứng dụng cơ sở dữ liệu',
      },
    ],
  },
  {
    Id: 26033,
    Text: 'Để Client có thể truy cập đến một website không nằm trong thư mục gốc (C:\\inetpub\\wwwroot) của web server, ta phải tạo và cấu hình ............ trong IISA. Một Web siteB. Một thư mục ảo',
    Marks: 1,
    AnswerId: 107823,
    Answers: [
      {
        Id: 107823,
        Text: 'B đúng',
      },
      {
        Id: 107824,
        Text: 'Cả A, B đều đúng',
      },
      {
        Id: 107825,
        Text: 'A đúng',
      },
      {
        Id: 107826,
        Text: 'Cả A, B đều sai',
      },
    ],
  },
  {
    Id: 26034,
    Text: 'Điều khiển Object Data Source có thể được buộc vào điều khiển nào sau đây?A. List boxB. Check boxC. Radio buttonD. Drop-down list',
    Marks: 1,
    AnswerId: 107829,
    Answers: [
      {
        Id: 107827,
        Text: 'A, C đúng',
      },
      {
        Id: 107828,
        Text: 'B, C đúng',
      },
      {
        Id: 107829,
        Text: 'A, D đúng',
      },
      {
        Id: 107830,
        Text: 'A, B đúng',
      },
    ],
  },
  {
    Id: 26035,
    Text: 'Phương pháp triển khai nào sau đây làm tăng hiệu năng của người dùng đầu tiên truy cập đến Website?',
    Marks: 1,
    AnswerId: 107832,
    Answers: [
      {
        Id: 107831,
        Text: 'Tạo Web Setup Project',
      },
      {
        Id: 107832,
        Text: 'Tiền biên dịch',
      },
      {
        Id: 107833,
        Text: 'Các phương án đều sai',
      },
      {
        Id: 107834,
        Text: 'Xcopy',
      },
    ],
  },
  {
    Id: 26036,
    Text: 'Trong mô hình 3 tầng, các lớp nghiệp vụ của tầng trung gian được chứa trong thư mục nào của ứng dụng?',
    Marks: 1,
    AnswerId: 107838,
    Answers: [
      {
        Id: 107835,
        Text: 'Logic_Code',
      },
      {
        Id: 107836,
        Text: 'Application',
      },
      {
        Id: 107837,
        Text: 'Images',
      },
      {
        Id: 107838,
        Text: 'App_Code',
      },
    ],
  },
  {
    Id: 26037,
    Text: 'Theo bạn, các bước tạo và cấu hình thư mục ảo trong IIS7 theo thứ tự nào sau đây là đúng?1.Tạo thư mục ảo trong IIS và chuyển thư mục ảo thành ứng dụng2. Cấu hình xác thực 3. Tạo Application Pool và gán Applicaton Pool cho ứng dụng4. Kích hoạt directory b',
    Marks: 1,
    AnswerId: 107840,
    Answers: [
      {
        Id: 107839,
        Text: '3-\u003e2-\u003e1-\u003e5-\u003e4',
      },
      {
        Id: 107840,
        Text: '1-\u003e2-\u003e3-\u003e4-\u003e5',
      },
      {
        Id: 107841,
        Text: '2-\u003e1-\u003e3-\u003e5-\u003e4',
      },
      {
        Id: 107842,
        Text: '1-\u003e2-\u003e3-\u003e5-\u003e4',
      },
    ],
  },
  {
    Id: 26038,
    Text: 'Trong kiến trúc ba tầng, lớp nghiệp vụ thuộc tầng nào sau đây?',
    Marks: 1,
    AnswerId: 107843,
    Answers: [
      {
        Id: 107843,
        Text: 'Tầng trung gian',
      },
      {
        Id: 107844,
        Text: 'Tầng CSDL',
      },
      {
        Id: 107845,
        Text: 'Tầng trình bày',
      },
      {
        Id: 107846,
        Text: 'Các phương án đều sai',
      },
    ],
  },
  {
    Id: 26039,
    Text: 'Trong mô hình 3 tầng, tầng nào chứa các trang ASP.Net chịu trách nhiệm nhận thông tin từ người dùng và xuất kết quả đến người dùng?',
    Marks: 1,
    AnswerId: 107847,
    Answers: [
      {
        Id: 107847,
        Text: 'Tầng trình bày',
      },
      {
        Id: 107848,
        Text: 'Tầng trung gian',
      },
      {
        Id: 107849,
        Text: 'Tầng CSDL',
      },
      {
        Id: 107850,
        Text: 'Các phương án đều sai',
      },
    ],
  },
  {
    Id: 26040,
    Text: 'Để liên kết với CSS từ một file bên ngoài, ta dùng khai báo nào?',
    Marks: 1,
    AnswerId: 107852,
    Answers: [
      {
        Id: 107851,
        Text: '\u003clinked href="my_style_sheet.css" media="screen" rel="stylesheet"  type="text/css"  /\u003e',
      },
      {
        Id: 107852,
        Text: '\u003clink href="my_style_sheet.css" media="screen" rel="stylesheet"  type="text/css"  /\u003e',
      },
      {
        Id: 107853,
        Text: '\u003clink href="my_style_sheet.css" media="screen" type="text/css"  /\u003e',
      },
      {
        Id: 107854,
        Text: 'Tất cả các phương án đều sai',
      },
    ],
  },
  {
    Id: 26041,
    Text: 'Ý nghĩa của thuộc tính Display trong CSS?',
    Marks: 1,
    AnswerId: 107856,
    Answers: [
      {
        Id: 107855,
        Text: 'Tất cả các phương án đều đúng',
      },
      {
        Id: 107856,
        Text: 'Cho phép một thẻ cục bộ lấp đầy thẻ chứa nó',
      },
      {
        Id: 107857,
        Text: 'Không cho phép một thẻ cục bộ lấp đầy thẻ chứa nó',
      },
      {
        Id: 107858,
        Text: 'Tất cả các phương án đều sai',
      },
    ],
  },
  {
    Id: 26042,
    Text: 'Margin trong cấu trúc Box định nghĩa điều gì?',
    Marks: 1,
    AnswerId: 107859,
    Answers: [
      {
        Id: 107859,
        Text: 'Định nghĩa lề cho box',
      },
      {
        Id: 107860,
        Text: 'Tất cả các phương án đều đúng',
      },
      {
        Id: 107861,
        Text: 'Định nghĩa khoảng đệm cho box',
      },
      {
        Id: 107862,
        Text: 'Định nghĩa đường viền cho Box',
      },
    ],
  },
  {
    Id: 26043,
    Text: 'CSS là viết tắt của cụm từ nào?',
    Marks: 1,
    AnswerId: 107866,
    Answers: [
      {
        Id: 107863,
        Text: 'Cascading Style Sheet',
      },
      {
        Id: 107864,
        Text: 'Tất cả các phương án đều sai',
      },
      {
        Id: 107865,
        Text: 'Cascaded Style Sheets',
      },
      {
        Id: 107866,
        Text: 'Cascading Style Sheets',
      },
    ],
  },
  {
    Id: 26044,
    Text: 'Thuộc tính clear trong CSS dùng để làm gì?',
    Marks: 1,
    AnswerId: 107870,
    Answers: [
      {
        Id: 107867,
        Text: 'Cho phép thẻ nổi',
      },
      {
        Id: 107868,
        Text: 'Không cho phép sửa trang web',
      },
      {
        Id: 107869,
        Text: 'Tất cả các đáp án đều sai',
      },
      {
        Id: 107870,
        Text: 'Không cho phép thẻ nổi',
      },
    ],
  },
  {
    Id: 26045,
    Text: 'Giá trị static của thuộc tính position có ý nghĩa gì?',
    Marks: 1,
    AnswerId: 107872,
    Answers: [
      {
        Id: 107871,
        Text: 'Tất cả các phương án đều sai',
      },
      {
        Id: 107872,
        Text: 'Đặt cố định các box để tránh chồng chéo giữa các box',
      },
      {
        Id: 107873,
        Text: 'Tất cả các phương án đều đúng',
      },
      {
        Id: 107874,
        Text: 'Định nghĩa phương thức tĩnh',
      },
    ],
  },
  {
    Id: 26046,
    Text: 'Thuộc tính float trong CSS dùng để làm gì?',
    Marks: 1,
    AnswerId: 107876,
    Answers: [
      {
        Id: 107875,
        Text: 'Dùng đề định nghĩa số thực',
      },
      {
        Id: 107876,
        Text: 'Dùng để nổi những thành phần (box, image, text, …) trên trang',
      },
      {
        Id: 107877,
        Text: 'Tất cả các phương án đều sai',
      },
      {
        Id: 107878,
        Text: 'Dùng để thay đổi những thành phần (box, image, text, …) trên trang',
      },
    ],
  },
  {
    Id: 26047,
    Text: 'Class trong CSS dùng để làm gì?',
    Marks: 1,
    AnswerId: 107882,
    Answers: [
      {
        Id: 107879,
        Text: 'Định nghĩa lớp cho các giá trị của thuộc tính trong CSS',
      },
      {
        Id: 107880,
        Text: 'Định nghĩa một lớp trong lập trình hướng đối tượng',
      },
      {
        Id: 107881,
        Text: 'Tất cả các phương án đều đúng',
      },
      {
        Id: 107882,
        Text: 'Định nghĩa một kiểu định dạng cho nhiều thẻ có cùng class',
      },
    ],
  },
  {
    Id: 26048,
    Text: 'Ý nghĩa của thuộc tính overflow trong CSS?',
    Marks: 1,
    AnswerId: 107883,
    Answers: [
      {
        Id: 107883,
        Text: 'Để tránh hiện tượng xô lệch các cột',
      },
      {
        Id: 107884,
        Text: 'Để tránh tràn số trong ASP.NET',
      },
      {
        Id: 107885,
        Text: 'Để đánh dấu cờ tràn trong ASP.NET',
      },
      {
        Id: 107886,
        Text: 'Tất cả các phương án đều đúng',
      },
    ],
  },
  {
    Id: 26049,
    Text: 'Các giá trị nào là của thuộc tính Display trong CSS?',
    Marks: 1,
    AnswerId: 107888,
    Answers: [
      {
        Id: 107887,
        Text: 'online, block',
      },
      {
        Id: 107888,
        Text: 'inline, block',
      },
      {
        Id: 107889,
        Text: 'inline, online, block',
      },
      {
        Id: 107890,
        Text: 'Tất cả các phương án đều sai',
      },
    ],
  },
]

export const CLCO = [
  {
    Id: 24661,
    Text: 'Dịch vụ Amazon Elastic Compute Cloud có chức năng chính là gì?',
    Marks: 1,
    AnswerId: 102331,
    Answers: [
      {
        Id: 102331,
        Text: 'Hỗ trợ lưu trữ web',
      },
      {
        Id: 102332,
        Text: 'Hỗ trợ cập nhật dữ liệu',
      },
      {
        Id: 102333,
        Text: 'Hỗ trợ thay đổi kiến trúc mô hình cloud',
      },
      {
        Id: 102334,
        Text: 'Hỗ trợ truy xuất dữ liệu',
      },
    ],
  },
  {
    Id: 24662,
    Text: 'Câu nào là đúng đối với UDDI?',
    Marks: 1,
    AnswerId: 102337,
    Answers: [
      {
        Id: 102335,
        Text: 'UDDI là cách viết khác của WSDL',
      },
      {
        Id: 102336,
        Text: 'UDDI tương tự như WSDL',
      },
      {
        Id: 102337,
        Text: 'UDDI cho phép ghi thông tin về doanh nghiệp và chi tiết sử dụng dịch vụ web.',
      },
      {
        Id: 102338,
        Text: 'UDDI không cho phép ghi thông tin về doanh nghiệp và chi tiết sử dụng dịch vụ web, nó chỉ được thực hiện qua WSDL',
      },
    ],
  },
  {
    Id: 24663,
    Text: 'Câu nào là đúng đối với WSDL?',
    Marks: 1,
    AnswerId: 102339,
    Answers: [
      {
        Id: 102339,
        Text: 'WSDL Cho phép các nhà phát triển ghi thông tin dịch vụ web',
      },
      {
        Id: 102340,
        Text: 'WSDL kết nối trực tiếp với cơ sở dữ liệu SQLite và trả về kết quả cho người dùng',
      },
      {
        Id: 102341,
        Text: 'WSDL là cầu nối giữa người sử dụng với Database',
      },
      {
        Id: 102342,
        Text: 'WSDL không cho phép các nhà phát triển ghi thông tin dịch vụ web',
      },
    ],
  },
  {
    Id: 24664,
    Text: 'WSDL là viết tắt của cụm từ nào?',
    Marks: 1,
    AnswerId: 102345,
    Answers: [
      {
        Id: 102343,
        Text: 'Width Server Description Language',
      },
      {
        Id: 102344,
        Text: 'Width Services Description Language',
      },
      {
        Id: 102345,
        Text: 'Web Services Description Language',
      },
      {
        Id: 102346,
        Text: 'Web Server Description Language',
      },
    ],
  },
  {
    Id: 24665,
    Text: 'API là viết tắt của cụm từ nào?',
    Marks: 1,
    AnswerId: 102349,
    Answers: [
      {
        Id: 102347,
        Text: 'Application Private Interface',
      },
      {
        Id: 102348,
        Text: 'Application Programming Internet',
      },
      {
        Id: 102349,
        Text: 'Application Programming Interface',
      },
      {
        Id: 102350,
        Text: 'Application Public Interface',
      },
    ],
  },
  {
    Id: 24666,
    Text: 'Câu nào là đúng đối với API?',
    Marks: 1,
    AnswerId: 102351,
    Answers: [
      {
        Id: 102351,
        Text: 'API cho phép các chương trình sử dụng có thể giao tiếp với nhau mà không cần sự tham gia của người dùng',
      },
      {
        Id: 102352,
        Text: 'API bản chất là một webserver',
      },
      {
        Id: 102353,
        Text: 'Để giao tiếp các chương trình sử dụng API nhất thiết phải có sự tham gia của người dùng',
      },
      {
        Id: 102354,
        Text: 'API bản chất là một không gian lưu trữ web',
      },
    ],
  },
  {
    Id: 24667,
    Text: 'Câu nào là đúng đối với SOAP?',
    Marks: 1,
    AnswerId: 102357,
    Answers: [
      {
        Id: 102355,
        Text: 'Sử dụng để mã hóa thông điệp HTML',
      },
      {
        Id: 102356,
        Text: 'Sử dụng để duy trì kết nối internet',
      },
      {
        Id: 102357,
        Text: 'Sử dụng để mã hóa thông điệp XML',
      },
      {
        Id: 102358,
        Text: 'Sử dụng để mã hóa CSS',
      },
    ],
  },
  {
    Id: 24668,
    Text: 'Câu nào là đúng đối với API?',
    Marks: 1,
    AnswerId: 102362,
    Answers: [
      {
        Id: 102359,
        Text: 'API là một file thư viện dạng dll',
      },
      {
        Id: 102360,
        Text: 'API là một file thực thi dạng exe',
      },
      {
        Id: 102361,
        Text: 'API không cho phép các nhà phát triển khác sử dụng để phát triển sản phẩm của riêng họ',
      },
      {
        Id: 102362,
        Text: 'API cho phép các nhà phát triển khác sử dụng để phát triển sản phẩm của riêng họ',
      },
    ],
  },
  {
    Id: 24669,
    Text: 'AJAX sử dụng công nghệ nào?',
    Marks: 1,
    AnswerId: 102364,
    Answers: [
      {
        Id: 102363,
        Text: 'Sử dụng các công nghệ GSM, CDMA, CSS',
      },
      {
        Id: 102364,
        Text: 'Sử dụng các công nghệ XHTML, CSS, JSON',
      },
      {
        Id: 102365,
        Text: 'Chỉ sử dụng duy nhất công nghệ CDMA',
      },
      {
        Id: 102366,
        Text: 'Sử dụng các công nghẹ XHTML, CMS, CRM, HTML, CSS',
      },
    ],
  },
  {
    Id: 24670,
    Text: 'Bất lợi của AJAX là gì?',
    Marks: 1,
    AnswerId: 102370,
    Answers: [
      {
        Id: 102367,
        Text: 'Có thể hiển thị lịch sử truy cập nhưng tối đa hiển thị là 10 bản ghi',
      },
      {
        Id: 102368,
        Text: 'Phải sử dụng nhiều đoạn kịch bản PHP',
      },
      {
        Id: 102369,
        Text: 'Phải sử dụng nhiều doạn kịch bản JavaScript',
      },
      {
        Id: 102370,
        Text: 'Không hiển thị lịch sử truy cập',
      },
    ],
  },
  {
    Id: 24671,
    Text: 'Dịch vụ nào được MobileMe cung cấp?',
    Marks: 1,
    AnswerId: 102372,
    Answers: [
      {
        Id: 102371,
        Text: 'post',
      },
      {
        Id: 102372,
        Text: 'push',
      },
      {
        Id: 102373,
        Text: 'move',
      },
      {
        Id: 102374,
        Text: 'Get',
      },
    ],
  },
  {
    Id: 24672,
    Text: 'MobileMe là giải pháp của công ty nào?',
    Marks: 1,
    AnswerId: 102378,
    Answers: [
      {
        Id: 102375,
        Text: 'Microsoft',
      },
      {
        Id: 102376,
        Text: 'Google',
      },
      {
        Id: 102377,
        Text: 'IBM',
      },
      {
        Id: 102378,
        Text: 'Apple',
      },
    ],
  },
  {
    Id: 24673,
    Text: 'Dịch vụ Live Mesh là của công ty nào?',
    Marks: 1,
    AnswerId: 102380,
    Answers: [
      {
        Id: 102379,
        Text: 'Yahoo',
      },
      {
        Id: 102380,
        Text: 'Microsoft',
      },
      {
        Id: 102381,
        Text: 'IBM',
      },
      {
        Id: 102382,
        Text: 'Apple',
      },
    ],
  },
  {
    Id: 24674,
    Text: 'Điều nào sau đây đúng về Live Framework?',
    Marks: 1,
    AnswerId: 102384,
    Answers: [
      {
        Id: 102383,
        Text: 'Live Framework là một thư mục chia sẻ, tương tác với các thành phần trong hệ điều hành',
      },
      {
        Id: 102384,
        Text: 'Live Framework là một API cho phép truy cập các dịch vụ Live Mesh trên HTTP',
      },
      {
        Id: 102385,
        Text: 'Live Framework là một file',
      },
      {
        Id: 102386,
        Text: 'Live Framework là một hệ điều hành',
      },
    ],
  },
  {
    Id: 24675,
    Text: 'SDN là viết tắt của cụm từ nào?',
    Marks: 1,
    AnswerId: 102390,
    Answers: [
      {
        Id: 102387,
        Text: 'Storage Develop Network',
      },
      {
        Id: 102388,
        Text: 'Small Delivery Network',
      },
      {
        Id: 102389,
        Text: 'Small Delivery Networking',
      },
      {
        Id: 102390,
        Text: 'Storage Delivery Network',
      },
    ],
  },
  {
    Id: 24676,
    Text: 'Live Mesh có sẵn trong hệ điều hành nào?',
    Marks: 1,
    AnswerId: 102391,
    Answers: [
      {
        Id: 102391,
        Text: 'Có trong windows XP, windows Vista',
      },
      {
        Id: 102392,
        Text: 'Có trong MS-DOS',
      },
      {
        Id: 102393,
        Text: 'Có trong fedora',
      },
      {
        Id: 102394,
        Text: 'Có trong Ubuntu',
      },
    ],
  },
  {
    Id: 24677,
    Text: 'Điều nào sau đây đúng về dịch vụ S3?',
    Marks: 1,
    AnswerId: 102396,
    Answers: [
      {
        Id: 102395,
        Text: 'Là dịch vụ hỗ trợ truy xuất dữ liệu trên cloud nhưng không hỗ trợ lưu trữ',
      },
      {
        Id: 102396,
        Text: 'Là dịch vụ lưu trữ trên cloud',
      },
      {
        Id: 102397,
        Text: 'Là dịch vụ hủy dữ liệu từ cloud',
      },
      {
        Id: 102398,
        Text: 'Là dịch vụ copy dữ liệu giữa 2 máy client',
      },
    ],
  },
  {
    Id: 24678,
    Text: 'MobileMe iDisk dùng để quản lý điều gì?',
    Marks: 1,
    AnswerId: 102402,
    Answers: [
      {
        Id: 102399,
        Text: 'Quản lý thiết bị hỗ trợ bảo mật vân tay',
      },
      {
        Id: 102400,
        Text: 'Quản lý ổ đĩa cứng',
      },
      {
        Id: 102401,
        Text: 'Quản lý các ứng dụng',
      },
      {
        Id: 102402,
        Text: 'Quản lý tập tin hỗ trợ kéo thả',
      },
    ],
  },
  {
    Id: 24679,
    Text: 'Dịch vụ S3 cung cấp cho khách hàng sử dụng giao thức nào?',
    Marks: 1,
    AnswerId: 102406,
    Answers: [
      {
        Id: 102403,
        Text: 'TCP',
      },
      {
        Id: 102404,
        Text: 'UDP',
      },
      {
        Id: 102405,
        Text: 'UDP, TCP, REST, SOAP',
      },
      {
        Id: 102406,
        Text: 'REST và SOAP',
      },
    ],
  },
  {
    Id: 24680,
    Text: 'Hãy cho biết đâu là tính năng chính của dịch vụ S3?',
    Marks: 1,
    AnswerId: 102410,
    Answers: [
      {
        Id: 102407,
        Text: 'Ghi đọc xóa dữ liệu trên máy client',
      },
      {
        Id: 102408,
        Text: 'Chỉ hỗ trợ tính năng Xóa dữ liệu',
      },
      {
        Id: 102409,
        Text: 'Di chuyển dữ liệu',
      },
      {
        Id: 102410,
        Text: 'Ghi dữ liệu, đọc, xóa dữ liệu',
      },
    ],
  },
  {
    Id: 24681,
    Text: 'Dịch vụ Office Live Small Business phù hợp với doanh nghiệp nào?',
    Marks: 1,
    AnswerId: 102411,
    Answers: [
      {
        Id: 102411,
        Text: 'Vừa và nhỏ',
      },
      {
        Id: 102412,
        Text: 'Vừa',
      },
      {
        Id: 102413,
        Text: 'Nhỏ',
      },
      {
        Id: 102414,
        Text: 'Lớn',
      },
    ],
  },
  {
    Id: 24682,
    Text: 'SaaS bao gồm các loại dịch vụ nào?',
    Marks: 1,
    AnswerId: 102418,
    Answers: [
      {
        Id: 102415,
        Text: 'Business services và Customer-oriented services và soft services',
      },
      {
        Id: 102416,
        Text: 'Business service',
      },
      {
        Id: 102417,
        Text: 'Business services, Customer-oriented services, school services',
      },
      {
        Id: 102418,
        Text: 'Business services và Customer-oriented services',
      },
    ],
  },
  {
    Id: 24683,
    Text: 'Đây không phải là một lợi thế của mô hình SaaS',
    Marks: 1,
    AnswerId: 102420,
    Answers: [
      {
        Id: 102419,
        Text: 'Dịch vụ SaaS cần ít chi phí nhất',
      },
      {
        Id: 102420,
        Text: 'Saas hoàn toàn có thể sử dụng mà không cần dùng Internet',
      },
      {
        Id: 102421,
        Text: 'SaaS hỗ trợ kiểm soát an toàn dữ liệu tốt',
      },
      {
        Id: 102422,
        Text: 'SaaS có khả năng áp dụng các chuẩn mực về CNTT cho tất cả các khách hàng sử dụng, do đó tính đồng nhất cao',
      },
    ],
  },
  {
    Id: 24684,
    Text: 'Dịch vụ nào thuộc SaaS?',
    Marks: 1,
    AnswerId: 102425,
    Answers: [
      {
        Id: 102423,
        Text: 'Chỉ có Hotmail',
      },
      {
        Id: 102424,
        Text: 'Chỉ có Gmail',
      },
      {
        Id: 102425,
        Text: 'Gmail, Hotmail, Yahoo Mail',
      },
      {
        Id: 102426,
        Text: 'Gmail, Hotmail, Yahoo Mail, Book Mail',
      },
    ],
  },
  {
    Id: 24685,
    Text: 'Lợi ích của ảo hóa là gì?',
    Marks: 1,
    AnswerId: 102427,
    Answers: [
      {
        Id: 102427,
        Text: 'Ảo hóa giúp bạn dễ dàng di chuyển đến một hệ thống SaaS',
      },
      {
        Id: 102428,
        Text: 'Ảo hóa giúp bạn dễ dàng sử dụng phần mềm mà không cần SaaS',
      },
      {
        Id: 102429,
        Text: 'Để ảo hóa sẽ cần 10 Server thật',
      },
      {
        Id: 102430,
        Text: 'Ảo hóa giúp bạn kết nối với SaaS mà không cần internet',
      },
    ],
  },
  {
    Id: 24686,
    Text: 'Điều nào sau đây đúng về SaaS?',
    Marks: 1,
    AnswerId: 102432,
    Answers: [
      {
        Id: 102431,
        Text: 'Cần thiết phải quản lý cơ sở hạ tầng và nền tảng nó đang chạy',
      },
      {
        Id: 102432,
        Text: 'Không cần quản lý cơ sở hạ tầng và nền tảng nó đang chạy',
      },
      {
        Id: 102433,
        Text: 'Chỉ càn quản lý phần mềm đang chạy, không cần quản lý cơ sở hạ tầng',
      },
      {
        Id: 102434,
        Text: 'Chỉ cần quản lý có sở hạ tầng, không cần quản lý phần mềm đang chạy',
      },
    ],
  },
  {
    Id: 24687,
    Text: 'Google Calendar thuộc nhóm dịch vụ nào?',
    Marks: 1,
    AnswerId: 102438,
    Answers: [
      {
        Id: 102435,
        Text: 'Google Apps Calendar Edition',
      },
      {
        Id: 102436,
        Text: 'Google Apps Premier Edition',
      },
      {
        Id: 102437,
        Text: 'Google Apps Premier Calendar',
      },
      {
        Id: 102438,
        Text: 'Google Apps',
      },
    ],
  },
  {
    Id: 24688,
    Text: 'Google Apps Premier Edition hỗ trợ cho mỗi user miễn phí bao nhiêu GB?',
    Marks: 1,
    AnswerId: 102439,
    Answers: [
      {
        Id: 102439,
        Text: '10GB',
      },
      {
        Id: 102440,
        Text: '5GB',
      },
      {
        Id: 102441,
        Text: '20GB',
      },
      {
        Id: 102442,
        Text: '100GB',
      },
    ],
  },
  {
    Id: 24689,
    Text: 'SaaS là gì?',
    Marks: 1,
    AnswerId: 102445,
    Answers: [
      {
        Id: 102443,
        Text: 'Là một ứng dụng trên Linux client',
      },
      {
        Id: 102444,
        Text: 'Là một dịch vụ lưu trữ trên một máy client',
      },
      {
        Id: 102445,
        Text: 'Là một ứng dụng lưu trữ trên một máy chủ từ xa và truy cập thông qua Internet',
      },
      {
        Id: 102446,
        Text: 'Là một ứng dụng được lưu trữ trên Server Localhost',
      },
    ],
  },
  {
    Id: 24690,
    Text: 'Đâu là dịch vụ SaaS của Google?',
    Marks: 1,
    AnswerId: 102450,
    Answers: [
      {
        Id: 102447,
        Text: 'Google Apps Google Apps Premier Edition, Google List, Google Collection',
      },
      {
        Id: 102448,
        Text: 'Google Apps Google Apps Premier Edition và Google List',
      },
      {
        Id: 102449,
        Text: 'Google Apps và Google Apps Mobile Collection',
      },
      {
        Id: 102450,
        Text: 'Google Apps và Google Apps Premier Edition',
      },
    ],
  },
  {
    Id: 24691,
    Text: 'Nhược điểm của Google App Engine?',
    Marks: 1,
    AnswerId: 102452,
    Answers: [
      {
        Id: 102451,
        Text: 'Không hỗ trợ Python',
      },
      {
        Id: 102452,
        Text: 'Không hỗ trợ tốt về AJAX',
      },
      {
        Id: 102453,
        Text: 'Không hỗ trợ tốt về HTML',
      },
      {
        Id: 102454,
        Text: 'Không hỗ trợ tốt về XML',
      },
    ],
  },
  {
    Id: 24692,
    Text: 'Google Gears làm việc với trình duyệt nào?',
    Marks: 1,
    AnswerId: 102456,
    Answers: [
      {
        Id: 102455,
        Text: 'Safari',
      },
      {
        Id: 102456,
        Text: 'Chrome, firefox, safari',
      },
      {
        Id: 102457,
        Text: 'Chrome',
      },
      {
        Id: 102458,
        Text: 'Firefox',
      },
    ],
  },
  {
    Id: 24693,
    Text: 'Live Services là dịch vụ của thành phần nào sau đây?',
    Marks: 1,
    AnswerId: 102460,
    Answers: [
      {
        Id: 102459,
        Text: 'Google Platform',
      },
      {
        Id: 102460,
        Text: 'Azure Platform',
      },
      {
        Id: 102461,
        Text: 'Window Plathform',
      },
      {
        Id: 102462,
        Text: 'Apple Plathform',
      },
    ],
  },
  {
    Id: 24694,
    Text: 'Điều nào sau đây đúng về Bungee Connect?',
    Marks: 1,
    AnswerId: 102465,
    Answers: [
      {
        Id: 102463,
        Text: 'Tích hợp tự động các ứng dụng truyền thống chạy trên máy client',
      },
      {
        Id: 102464,
        Text: 'Tích hợp tự động các dịch vụ web (SOAP / REST) ​​và cơ sở dữ liệu (Oracle, ASP.NET)',
      },
      {
        Id: 102465,
        Text: 'Tích hợp tự động các dịch vụ web (SOAP / REST) ​​và cơ sở dữ liệu (MySQL / PostgreSQL)',
      },
      {
        Id: 102466,
        Text: 'Không tích hợp dịch vụ nào',
      },
    ],
  },
  {
    Id: 24695,
    Text: 'Azure cho phép các nhà phát triển sử dụng framework nào?',
    Marks: 1,
    AnswerId: 102467,
    Answers: [
      {
        Id: 102467,
        Text: '.NET framework',
      },
      {
        Id: 102468,
        Text: 'Google Framework',
      },
      {
        Id: 102469,
        Text: 'Java Framework',
      },
      {
        Id: 102470,
        Text: 'IBM framework',
      },
    ],
  },
  {
    Id: 24696,
    Text: 'Google Gears hỗ trợ tạo các ứng dụng loại nào?',
    Marks: 1,
    AnswerId: 102474,
    Answers: [
      {
        Id: 102471,
        Text: 'web online',
      },
      {
        Id: 102472,
        Text: 'linux application',
      },
      {
        Id: 102473,
        Text: 'window application',
      },
      {
        Id: 102474,
        Text: 'web offline',
      },
    ],
  },
  {
    Id: 24697,
    Text: 'Điều nào sau đây đúng về Microsoft SQL Services?',
    Marks: 1,
    AnswerId: 102475,
    Answers: [
      {
        Id: 102475,
        Text: 'Có thể lưu trữ và lấy dữ liệu có cấu trúc và không có cấu trúc',
      },
      {
        Id: 102476,
        Text: 'Có thể lưu trữ và lấy dữ liệu có cấu trúc',
      },
      {
        Id: 102477,
        Text: 'Có thể lưu trữ và lấy dữ liệu không có cấu trúc',
      },
      {
        Id: 102478,
        Text: 'Không thể lưu trữ dữ liệu',
      },
    ],
  },
  {
    Id: 24698,
    Text: 'Công cụ nào của Google cho phép tạo ứng dụng trên Cloud?',
    Marks: 1,
    AnswerId: 102482,
    Answers: [
      {
        Id: 102479,
        Text: 'Google Application Engine',
      },
      {
        Id: 102480,
        Text: 'Google Calendar',
      },
      {
        Id: 102481,
        Text: 'Gmail',
      },
      {
        Id: 102482,
        Text: 'Google App Engine',
      },
    ],
  },
  {
    Id: 24699,
    Text: 'Điều nào sau đây đúng cho Intuit QuickBase ?',
    Marks: 1,
    AnswerId: 102485,
    Answers: [
      {
        Id: 102483,
        Text: 'Cho phép các thành viên sử dụng chuyên môn để tạo ra các ứng dụng phục vụ cho những người có chuyên môn kỹ thuật',
      },
      {
        Id: 102484,
        Text: 'Cho phép các thành viên có chuyên môn tạo nên ứng dụng để phục vụ chính họ',
      },
      {
        Id: 102485,
        Text: 'Cho phép các thành viên để tạo ra các ứng dụng phục vụ cho những người không có chuyên môn kỹ thuật',
      },
      {
        Id: 102486,
        Text: 'Cho phép các thành viên không có chuyên môn tạo nên ứng dụng',
      },
    ],
  },
  {
    Id: 24700,
    Text: 'Ngôn ngữ lập trình phổ biến trên đám mây của google là?',
    Marks: 1,
    AnswerId: 102487,
    Answers: [
      {
        Id: 102487,
        Text: 'Java',
      },
      {
        Id: 102488,
        Text: 'ASP',
      },
      {
        Id: 102489,
        Text: 'C#',
      },
      {
        Id: 102490,
        Text: 'VB.NET',
      },
    ],
  },
  {
    Id: 24701,
    Text: 'Điều nào sau đây đúng về Ảo hóa?',
    Marks: 1,
    AnswerId: 102494,
    Answers: [
      {
        Id: 102491,
        Text: 'Chia máy chủ vật lý thành 1 máy chủ ảo',
      },
      {
        Id: 102492,
        Text: 'Chia máy chủ ảo thành nhiều máy chủ vật lý',
      },
      {
        Id: 102493,
        Text: 'Chia máy chủ áo thành 1 máy chủ vật lý',
      },
      {
        Id: 102494,
        Text: 'Chia máy chủ vật lý thành nhiều máy chủ ảo',
      },
    ],
  },
  {
    Id: 24702,
    Text: 'BlueMix là gì?',
    Marks: 1,
    AnswerId: 102495,
    Answers: [
      {
        Id: 102495,
        Text: 'Một nền tảng để chạy bất cứ ứng dụng nào trong các đám mây mà không cần phải lo lắng về phần cứng, phần mềm và mạng',
      },
      {
        Id: 102496,
        Text: 'Là một thành phần của Microsoft Azure, cho phép tải các ứng dụng lên đám mây của Microsoft',
      },
      {
        Id: 102497,
        Text: 'Do Amazon phát triển',
      },
      {
        Id: 102498,
        Text: 'Do google phát triển',
      },
    ],
  },
  {
    Id: 24703,
    Text: 'Đâu là đặc điểm của ảo hóa?',
    Marks: 1,
    AnswerId: 102500,
    Answers: [
      {
        Id: 102499,
        Text: 'Tốn thời gian hơn việc cài đặt trên máy chủ vật lý',
      },
      {
        Id: 102500,
        Text: 'Triển khai nhanh',
      },
      {
        Id: 102501,
        Text: 'Tốn chi phí',
      },
      {
        Id: 102502,
        Text: 'Triển khai chậm',
      },
    ],
  },
  {
    Id: 24704,
    Text: 'Điều nào sau đây đúng về máy ảo?',
    Marks: 1,
    AnswerId: 102506,
    Answers: [
      {
        Id: 102503,
        Text: 'Là ổ đĩa DVD-CD',
      },
      {
        Id: 102504,
        Text: 'Là một hệ điều hành trên ổ đĩa',
      },
      {
        Id: 102505,
        Text: 'Là ổ đĩa cứng',
      },
      {
        Id: 102506,
        Text: 'Là một tập tin trên ổ đĩa',
      },
    ],
  },
  {
    Id: 24705,
    Text: 'BlueMix thuộc loại nào trong các loại sau?',
    Marks: 1,
    AnswerId: 102509,
    Answers: [
      {
        Id: 102507,
        Text: 'SaaS',
      },
      {
        Id: 102508,
        Text: 'RaaS',
      },
      {
        Id: 102509,
        Text: 'PaaS',
      },
      {
        Id: 102510,
        Text: 'DaaS',
      },
    ],
  },
  {
    Id: 24706,
    Text: 'Điểm khác biệt giữa Cloud VPS và VPS truyền thống ?',
    Marks: 1,
    AnswerId: 102513,
    Answers: [
      {
        Id: 102511,
        Text: 'Ảo hóa VPS trên một server thay vì một cụm server duy nhất',
      },
      {
        Id: 102512,
        Text: 'Ảo hóa VPS chỉ thực hiện trên 1 server',
      },
      {
        Id: 102513,
        Text: 'Ảo hóa VPS trên một cụm server thay vì một server duy nhất',
      },
      {
        Id: 102514,
        Text: 'Ảo hóa VPS chỉ thực hiện trên nhiều máy client',
      },
    ],
  },
  {
    Id: 24707,
    Text: 'Meetup ảo là khái niệm của thành phần nào trong các thành phần sau?',
    Marks: 1,
    AnswerId: 102515,
    Answers: [
      {
        Id: 102515,
        Text: 'Bluemix',
      },
      {
        Id: 102516,
        Text: 'Azure',
      },
      {
        Id: 102517,
        Text: 'Bluemix, Azure',
      },
      {
        Id: 102518,
        Text: 'Google Site',
      },
    ],
  },
  {
    Id: 24708,
    Text: 'Có thể tạo loại ứng dụng nào trên BlueMix?',
    Marks: 1,
    AnswerId: 102522,
    Answers: [
      {
        Id: 102519,
        Text: 'Ứng dụng web',
      },
      {
        Id: 102520,
        Text: 'Không cho phép tạo ứng dụng của riêng bạn mà chỉ cho phép bạn sử dụng',
      },
      {
        Id: 102521,
        Text: 'ứng dụng mobile',
      },
      {
        Id: 102522,
        Text: 'Cả ứng dụng web, mobile',
      },
    ],
  },
  {
    Id: 24709,
    Text: 'DevOps Services là dịch vụ của thành phần nào trong các thành phần sau?',
    Marks: 1,
    AnswerId: 102525,
    Answers: [
      {
        Id: 102523,
        Text: 'Apple site',
      },
      {
        Id: 102524,
        Text: 'Google Site',
      },
      {
        Id: 102525,
        Text: 'Bluemix',
      },
      {
        Id: 102526,
        Text: 'Microsoft Azure',
      },
    ],
  },
  {
    Id: 24710,
    Text: 'Hệ thống nào sau đây không tương đồng với hệ thống BlueMix',
    Marks: 1,
    AnswerId: 102530,
    Answers: [
      {
        Id: 102527,
        Text: 'Heroku',
      },
      {
        Id: 102528,
        Text: 'OpenShift',
      },
      {
        Id: 102529,
        Text: 'Google Cloud Environment',
      },
      {
        Id: 102530,
        Text: 'Microsoft Dynamics CRM',
      },
    ],
  },
]

export const DBAV = [
  {
    Id: 24956,
    Text: 'Chọn phát biểu đúng về SQL Server A. Là hệ quản trị nội dung cho phép đồng thời một lúc có nhiều người dùng truy xuất đến dữ liệu. B. SQL Server sử dụng điển hình trong các hệ thống nhỏ đến trung bình chạy trên một hoặc nhiều máy chủ Windows C. Là hệ quản',
    Marks: 1,
    AnswerId: 103506,
    Answers: [
      {
        Id: 103503,
        Text: 'B,D Đúng',
      },
      {
        Id: 103504,
        Text: 'D Đúng',
      },
      {
        Id: 103505,
        Text: 'A,B Đúng',
      },
      {
        Id: 103506,
        Text: 'C, B Đúng',
      },
    ],
  },
  {
    Id: 24957,
    Text: 'SQL sử dụng ngôn ngữ nào sau đây để truy vấn CSDL: A. SQL B. PL-SQL C. Transact-SQL',
    Marks: 1,
    AnswerId: 103508,
    Answers: [
      {
        Id: 103507,
        Text: 'B Đúng',
      },
      {
        Id: 103508,
        Text: 'C Đúng',
      },
      {
        Id: 103509,
        Text: 'Cả A, B, C đều sai',
      },
      {
        Id: 103510,
        Text: 'A Đúng',
      },
    ],
  },
  {
    Id: 24958,
    Text: 'Câu lệnh nào sau đây là câu lệnh điều khiển dữ liệu (DCL) A DENY B CREATE C GRANT D REVOKE',
    Marks: 1,
    AnswerId: 103511,
    Answers: [
      {
        Id: 103511,
        Text: 'A, C, D đúng',
      },
      {
        Id: 103512,
        Text: 'B, C , D đúng',
      },
      {
        Id: 103513,
        Text: 'A, B , Dđúng',
      },
      {
        Id: 103514,
        Text: 'A, B, C đúng',
      },
    ],
  },
  {
    Id: 24959,
    Text: 'Để khởi động và dừng SQL Server sử dụng công cụ nào dưới đây:',
    Marks: 1,
    AnswerId: 103518,
    Answers: [
      {
        Id: 103515,
        Text: 'SQL Server Start/Stop Manager',
      },
      {
        Id: 103516,
        Text: 'SQL Server Configuration Management',
      },
      {
        Id: 103517,
        Text: 'SQL Server Management Studio',
      },
      {
        Id: 103518,
        Text: 'SQL Server Configuration Manager',
      },
    ],
  },
  {
    Id: 24960,
    Text: 'Các ứng dụng nào sau đây có thể truy cập tới hệ quản trị CSDL SQL Server',
    Marks: 1,
    AnswerId: 103520,
    Answers: [
      {
        Id: 103519,
        Text: 'Ứng dụng .NET',
      },
      {
        Id: 103520,
        Text: 'Tất cả đáp án đều đúng',
      },
      {
        Id: 103521,
        Text: 'Ứng dụng Java',
      },
      {
        Id: 103522,
        Text: 'Ứng dụng Visual Basic 6',
      },
    ],
  },
  {
    Id: 24961,
    Text: 'Phát biểu nào sau đây ĐÚNG về T-SQL?',
    Marks: 1,
    AnswerId: 103524,
    Answers: [
      {
        Id: 103523,
        Text: 'Có thể sử dụng T-SQL để thao tác trên mọi hệ quản trị CSDL quan hệ',
      },
      {
        Id: 103524,
        Text: 'T-SQL là ngôn ngữ mở rộng của SQL chuẩn, cung cấp thêm các tính năng lập trình',
      },
      {
        Id: 103525,
        Text: 'T-SQL là tên gọi khác của ngôn ngữ SQL',
      },
      {
        Id: 103526,
        Text: 'Tất cả các đáp án đều sai',
      },
    ],
  },
  {
    Id: 24962,
    Text: 'Nếu quá trình thực thi một câu lệnh SQL xảy ra lỗi cú pháp. SQL Server sẽ thông báo lỗi đó bằng cách',
    Marks: 1,
    AnswerId: 103529,
    Answers: [
      {
        Id: 103527,
        Text: 'Hiển thị đường màu xanh lượn sóng gạch chân phần câu lệnh nhập sai và hiển thị một thông báo lỗi trong Tab Message',
      },
      {
        Id: 103528,
        Text: 'Hiển thị đường màu xanh lượn sóng gạch chân phần câu lệnh nhập sai và hiển thị một thông báo lỗi trong Tab Systax Error',
      },
      {
        Id: 103529,
        Text: 'Hiển thị đường màu đỏ lượn sóng gạch chân phần câu lệnh nhập sai và hiển thị một thông báo lỗi trong Tab Message',
      },
      {
        Id: 103530,
        Text: 'Hiển thị đường màu đỏ lượn sóng gạch chân phần câu lệnh nhập sai và hiển thị một thông báo lỗi trong Tab Systax Error',
      },
    ],
  },
  {
    Id: 24963,
    Text: 'Các lỗi cú pháp nào sau đây thường gặp khi thực thi câu lệnh SQL A. Quên hoặc lựa chọn sai CSDL B. Viết sai tên bảng hoặc tên cột C. Viết sai từ khóa D. Bỏ sót dấu đóng ngoặc với một chuỗi ký tự.',
    Marks: 1,
    AnswerId: 103532,
    Answers: [
      {
        Id: 103531,
        Text: 'B, C , D Đúng',
      },
      {
        Id: 103532,
        Text: 'Cả A, B, C, D đều đúng',
      },
      {
        Id: 103533,
        Text: 'A, D Đúng',
      },
      {
        Id: 103534,
        Text: 'A, B, C Đúng',
      },
    ],
  },
  {
    Id: 24964,
    Text: 'Thao tác nào sau đây có thể thực hiện trên lược đồ CSDL?',
    Marks: 1,
    AnswerId: 103537,
    Answers: [
      {
        Id: 103535,
        Text: 'Định nghĩa độ rộng của cột',
      },
      {
        Id: 103536,
        Text: 'Tất cả đáp án đều đúng',
      },
      {
        Id: 103537,
        Text: 'Thêm cột',
      },
      {
        Id: 103538,
        Text: 'Thêm dữ liệu cho một bảng CSDL',
      },
    ],
  },
  {
    Id: 24965,
    Text: 'Khi kết nối tới CSDL SQL Server, tại hộp thoại Connect to Server của SQL Management Studio, chế độ xác thực nào sau đây người dùng phải nhập User Name và Password',
    Marks: 1,
    AnswerId: 103540,
    Answers: [
      {
        Id: 103539,
        Text: 'Windows Authentication',
      },
      {
        Id: 103540,
        Text: 'SQL Server Authentication',
      },
      {
        Id: 103541,
        Text: 'Windows Authentication và SQL Server Authentication',
      },
      {
        Id: 103542,
        Text: 'Tất cả đáp án đều sai',
      },
    ],
  },
  {
    Id: 24966,
    Text: 'Nên sử dụng kiểu dữ liệu nào sau đây để lưu chuỗi với độ dài cố định hỗ trợ UNICODE',
    Marks: 1,
    AnswerId: 103545,
    Answers: [
      {
        Id: 103543,
        Text: 'Varchar',
      },
      {
        Id: 103544,
        Text: 'Char',
      },
      {
        Id: 103545,
        Text: 'Nchar',
      },
      {
        Id: 103546,
        Text: 'Nvarchar',
      },
    ],
  },
  {
    Id: 24967,
    Text: 'Đâu là chú thích sử dụng trong T-SQL',
    Marks: 1,
    AnswerId: 103548,
    Answers: [
      {
        Id: 103547,
        Text: '*/ Chú thích dung */',
      },
      {
        Id: 103548,
        Text: '--Chú thích đúng',
      },
      {
        Id: 103549,
        Text: '/* Chú thích đúng /*',
      },
      {
        Id: 103550,
        Text: '//Chú thích đúng',
      },
    ],
  },
  {
    Id: 24968,
    Text: 'Lựa chọn nào sau đây không phải là kiểu dữ liệu của SQL Server:',
    Marks: 1,
    AnswerId: 103554,
    Answers: [
      {
        Id: 103551,
        Text: 'datetime2',
      },
      {
        Id: 103552,
        Text: 'datetime',
      },
      {
        Id: 103553,
        Text: 'numeric',
      },
      {
        Id: 103554,
        Text: 'Tất cả đáp án đều sai',
      },
    ],
  },
  {
    Id: 24969,
    Text: 'Có đoạn mã sau đây. DECLARE @a int, @b nchar(50) Đâu là câu lệnh gán giá trị cho @a và @b không gây lỗi định dạng dữ liệu',
    Marks: 1,
    AnswerId: 103557,
    Answers: [
      {
        Id: 103555,
        Text: 'SELECT @a = 1, @b = \u0027kí tự Unicode\u0027',
      },
      {
        Id: 103556,
        Text: 'SET @a = 1, @b = \u0027kí tự Unicode\u0027',
      },
      {
        Id: 103557,
        Text: 'SET @a = 1, @b = N\u0027kí tự Unicode\u0027',
      },
      {
        Id: 103558,
        Text: 'SELECT @a = 1, @b = N\u0027kí tự Unicode\u0027',
      },
    ],
  },
  {
    Id: 24970,
    Text: 'Để chỉnh sửa thuộc tính của các cột trong bảng sử dụng Management Studio, Click chuột phải vào tên bảng và chọn _______',
    Marks: 1,
    AnswerId: 103561,
    Answers: [
      {
        Id: 103559,
        Text: 'Column Modify',
      },
      {
        Id: 103560,
        Text: 'Column Designer',
      },
      {
        Id: 103561,
        Text: 'Design',
      },
      {
        Id: 103562,
        Text: 'Table Design',
      },
    ],
  },
  {
    Id: 24971,
    Text: 'Khi làm việc với hệ thống đa ngôn ngữ, kiểu dữ liệu nào sau đây thường được dùng để lưu trữ chuỗi',
    Marks: 1,
    AnswerId: 103564,
    Answers: [
      {
        Id: 103563,
        Text: 'Char hoặc Varchar',
      },
      {
        Id: 103564,
        Text: 'Nchar hoặc Nvarchar',
      },
      {
        Id: 103565,
        Text: 'Varchar hoặc Nvarchar',
      },
      {
        Id: 103566,
        Text: 'Char hoặc Nchar',
      },
    ],
  },
  {
    Id: 24972,
    Text: 'Phát biểu nào sau đây đúng về biến bảng',
    Marks: 1,
    AnswerId: 103567,
    Answers: [
      {
        Id: 103567,
        Text: 'Có thể sử dụng câu lệnh UPDATE với biến bảng',
      },
      {
        Id: 103568,
        Text: 'Không thể sử dụng câu lệnh UPDATE và INSERT với biến bảng',
      },
      {
        Id: 103569,
        Text: 'Có thể sử dụng câu lệnh mọi câu lệnh INSERT, UPDATE, DELETE… với biến bảng',
      },
      {
        Id: 103570,
        Text: 'Có thể sử dụng câu lệnh SELECT INTO với biến bảng',
      },
    ],
  },
  {
    Id: 24973,
    Text: 'SQL Server cung cấp bao nhiêu kiểu dữ liệu đơn',
    Marks: 1,
    AnswerId: 103572,
    Answers: [
      {
        Id: 103571,
        Text: '25',
      },
      {
        Id: 103572,
        Text: '26',
      },
      {
        Id: 103573,
        Text: '30',
      },
      {
        Id: 103574,
        Text: '20',
      },
    ],
  },
  {
    Id: 24974,
    Text: 'Để gán giá trị cho một biến bảng. Sử dụng câu lệnh nào sau đây',
    Marks: 1,
    AnswerId: 103576,
    Answers: [
      {
        Id: 103575,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 103576,
        Text: 'INSERT',
      },
      {
        Id: 103577,
        Text: 'SET',
      },
      {
        Id: 103578,
        Text: 'SELECT INTO',
      },
    ],
  },
  {
    Id: 24975,
    Text: 'T- SQL hỗ trợ các loại biến nào sau đây:',
    Marks: 1,
    AnswerId: 103582,
    Answers: [
      {
        Id: 103579,
        Text: 'Biến vô hướng',
      },
      {
        Id: 103580,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 103581,
        Text: 'Biến bảng',
      },
      {
        Id: 103582,
        Text: 'Biến vô hướng và biến bảng',
      },
    ],
  },
  {
    Id: 24976,
    Text: 'Giả sử biến @String được khai báo như sau DECLARE @String varchar.Mã kịch bản sau trả về kết quả là SET @String = \u0027SQL Server 2008\u0027 SELECT LEN(@String)',
    Marks: 1,
    AnswerId: 103586,
    Answers: [
      {
        Id: 103583,
        Text: '15',
      },
      {
        Id: 103584,
        Text: '13',
      },
      {
        Id: 103585,
        Text: 'Lỗi',
      },
      {
        Id: 103586,
        Text: '1',
      },
    ],
  },
  {
    Id: 24977,
    Text: 'Cột InvoiceDate có kiểu dữ liệu SmallDatetime. Hàm CONVERT(varchar, InvoiceDate, a) trả lại kết quả cột InvoiceDate có định dạng dd-mm-yyyy. Vậy a có giá trị là bao nhiêu?',
    Marks: 1,
    AnswerId: 103590,
    Answers: [
      {
        Id: 103587,
        Text: '107',
      },
      {
        Id: 103588,
        Text: '101',
      },
      {
        Id: 103589,
        Text: '103',
      },
      {
        Id: 103590,
        Text: '105',
      },
    ],
  },
  {
    Id: 24978,
    Text: 'Biểu thức sau đây thực hiện phép nhân giữa dữ liệu lưu trong cột InvoiceTotal của bảng Invoices: InvoiceTotal * .0775. Nếu cột InvoiceTotal có kiểu money thì SQL sẽ thực hiện phép chuyển đổi ngầm nào sau đây:',
    Marks: 1,
    AnswerId: 103593,
    Answers: [
      {
        Id: 103591,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 103592,
        Text: 'Không thực hiện chuyển đổi ngầm',
      },
      {
        Id: 103593,
        Text: 'InvoiceTotal kiểu money bị chuyển thành kiểu Decimal',
      },
      {
        Id: 103594,
        Text: 'Giá trị .0775 kiểu Decimal bị chuyển thành kiểu money',
      },
    ],
  },
  {
    Id: 24979,
    Text: 'Lệnh gán giá trị cho cột PaymentDate có kiểu SmallDatetime sau đây có thực hiện phép chuyển đổi ngầm không PaymentDate = \u00272008-08-05\u0027',
    Marks: 1,
    AnswerId: 103597,
    Answers: [
      {
        Id: 103595,
        Text: 'Không thực hiện chuyển đổi ngầm',
      },
      {
        Id: 103596,
        Text: 'Thực hiện phép chuyển đổi ngầm, giá trị chuỗi 2008-08-05 sẽ bị chuyển thành kiểu Datetime',
      },
      {
        Id: 103597,
        Text: 'Thực hiện phép chuyển đổi ngầm, giá trị chuỗi 2008-08-05 sẽ bị chuyển thành kiểu SmallDatetime',
      },
      {
        Id: 103598,
        Text: 'Thực hiện phép chuyển đổi ngầm, PaymentDate sẽ bị chuyển thành kiểu varchar',
      },
    ],
  },
  {
    Id: 24980,
    Text: 'Cột InvoiceDate có kiểu dữ liệu SmallDatetime. Hàm CONVERT(varchar, InvoiceDate, 1) trả lại kết quả cột InvoiceDate có định dạng nào sau đây.',
    Marks: 1,
    AnswerId: 103601,
    Answers: [
      {
        Id: 103599,
        Text: 'dd/mm/yyyy',
      },
      {
        Id: 103600,
        Text: 'yy/dd/mm',
      },
      {
        Id: 103601,
        Text: 'mm/dd/yy',
      },
      {
        Id: 103602,
        Text: 'mm/dd/yyyy',
      },
    ],
  },
  {
    Id: 24981,
    Text: 'Đoạn mã kịch bản nào sau đây thực hiện khai báo một biến và gán giá trị cho biến đó bằng 1 A. DECLARE @a int = 1 B. DECLARE @a int SET @a = 1 C. DECLARE @a int SELECT @a = 1 D. DECLARE a int SET a = 1',
    Marks: 1,
    AnswerId: 103603,
    Answers: [
      {
        Id: 103603,
        Text: 'Chỉ A, B, C đúng',
      },
      {
        Id: 103604,
        Text: 'Chỉ B đúng',
      },
      {
        Id: 103605,
        Text: 'Cả A, B, C , D đều đúng',
      },
      {
        Id: 103606,
        Text: 'Chỉ D đúng',
      },
    ],
  },
  {
    Id: 24982,
    Text: 'Câu lệnh SELECT DATEDIFF(month, \u00272008-09-30\u0027, \u00272007-12-01\u0027) sau đây trả về kết quả là:',
    Marks: 1,
    AnswerId: 103609,
    Answers: [
      {
        Id: 103607,
        Text: '9',
      },
      {
        Id: 103608,
        Text: '304',
      },
      {
        Id: 103609,
        Text: '-9',
      },
      {
        Id: 103610,
        Text: '-304',
      },
    ],
  },
  {
    Id: 24983,
    Text: 'Cột StartDate của bảng DateSample có kiểu dữ liệu datetime. Câu lệnh SELECT nào sau đây trả về tất cả các cột của bảng DateSample có StartDate là ngày 28-02-2012 A. SELECT * FROM DateSample WHERE StartDate = \u00272012-02-28\u0027 B. SELECT * FROM DateSample WHERE ',
    Marks: 1,
    AnswerId: 103612,
    Answers: [
      {
        Id: 103611,
        Text: 'B, C đúng',
      },
      {
        Id: 103612,
        Text: 'B, C, D đúng',
      },
      {
        Id: 103613,
        Text: 'B đúng',
      },
      {
        Id: 103614,
        Text: 'Cả A, B, C, D đều đúng',
      },
    ],
  },
  {
    Id: 24984,
    Text: 'Cột InvoiceDate có kiểu dữ liệu SmallDatetime. Hàm CONVERT(varchar, InvoiceDate, a) trả lại kết quả cột InvoiceDate có định dạng dd/mm/yy. Vậy a có giá trị là bao nhiêu?',
    Marks: 1,
    AnswerId: 103617,
    Answers: [
      {
        Id: 103615,
        Text: '101',
      },
      {
        Id: 103616,
        Text: '2',
      },
      {
        Id: 103617,
        Text: '3',
      },
      {
        Id: 103618,
        Text: '7',
      },
    ],
  },
  {
    Id: 24985,
    Text: 'Câu lệnh SELECT CHARINDEX(\u0027SQL\u0027, \u0027HELLO SQL Server\u0027) trả về kết quả là',
    Marks: 1,
    AnswerId: 103622,
    Answers: [
      {
        Id: 103619,
        Text: '6',
      },
      {
        Id: 103620,
        Text: 'TRUE',
      },
      {
        Id: 103621,
        Text: '3',
      },
      {
        Id: 103622,
        Text: '7',
      },
    ],
  },
  {
    Id: 24986,
    Text: 'Để câu lệnh ROLLBACK TRAN quay lui giao dịch đến điểm lưu trữ xác định, thực hiện như sau',
    Marks: 1,
    AnswerId: 103623,
    Answers: [
      {
        Id: 103623,
        Text: 'Viết câu lệnh ROLLBACK TRAN kèm theo tên điểm lưu trữ',
      },
      {
        Id: 103624,
        Text: 'Tạo điểm lưu trữ sử dụng câu lệnh SAVE AS',
      },
      {
        Id: 103625,
        Text: 'Tạo điểm lưu trữ sử dụng câu lệnh SAVE',
      },
      {
        Id: 103626,
        Text: 'Viết câu lệnh ROLL TRAN kèm theo tên điểm lưu trữ',
      },
    ],
  },
  {
    Id: 24987,
    Text: 'Chọn đáp án ĐÚNG điền vào chỗ trống Khi không khai báo điểm bắt đầu cho một giao dịch, SQL Server coi ________ và tự động COMMIT câu lệnh lên Server. Nếu câu lệnh gây lỗi sẽ tự động ROLLBACK ĐÚNG hay SAI?',
    Marks: 1,
    AnswerId: 103627,
    Answers: [
      {
        Id: 103627,
        Text: 'Từng câu lệnh riêng lẻ là một giao dịch',
      },
      {
        Id: 103628,
        Text: 'Toàn bộ mã kịch bản là một giao dịch',
      },
      {
        Id: 103629,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 103630,
        Text: 'Một nhóm câu lệnh là một giao dịch',
      },
    ],
  },
  {
    Id: 24988,
    Text: 'Truyền giá trị tham số cho một Stored Procedure bằng cách nào sau đây?',
    Marks: 1,
    AnswerId: 103633,
    Answers: [
      {
        Id: 103631,
        Text: 'Cả hai đáp án đều sai',
      },
      {
        Id: 103632,
        Text: 'Truyền theo tên',
      },
      {
        Id: 103633,
        Text: 'Cả hai đáp án đều đúng',
      },
      {
        Id: 103634,
        Text: 'Truyền theo vị trí',
      },
    ],
  },
  {
    Id: 24989,
    Text: 'Các trường hợp nào sau đây nên sử dụng giao dịch',
    Marks: 1,
    AnswerId: 103636,
    Answers: [
      {
        Id: 103635,
        Text: 'Bất cứ mã kịch bản nào cũng nên sử dụng Transaction',
      },
      {
        Id: 103636,
        Text: 'Khi sự thất bại của tập câu lệnh SQL nào đó sẽ vi phạm tính toàn vẹn dữ liệu',
      },
      {
        Id: 103637,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 103638,
        Text: 'Một mã kịch bản sử dụng nhiều câu lệnh SELECT',
      },
    ],
  },
  {
    Id: 24990,
    Text: 'Phát biểu nào sau đây ĐÚNG về hàm @@TRANCOUNT',
    Marks: 1,
    AnswerId: 103641,
    Answers: [
      {
        Id: 103639,
        Text: 'Khi thực thi câu lệnh COMMIT TRAN, nếu @@TRANCOUNT = 0, mọi thay đổi đã được thực hiện trên CSDL trong suốt giao dịch sẽ được commit.',
      },
      {
        Id: 103640,
        Text: 'Khi thực thi câu lệnh COMMIT TRAN, nếu @@TRANCOUNT \u003e 1, mọi thay đổi đã được thực hiện trên CSDL trong suốt giao dịch sẽ được commit.',
      },
      {
        Id: 103641,
        Text: 'Khi thực thi câu lệnh COMMIT TRAN, nếu @@TRANCOUNT \u003e 1, các thay đổi sẽ không được commit. Thay vào đó @@TRANCOUNT giảm đi 1.',
      },
      {
        Id: 103642,
        Text: 'Tất cả đáp án đều sai',
      },
    ],
  },
  {
    Id: 24991,
    Text: 'Nên sử dụng giao dịch trong trường hợp nào sau đây?',
    Marks: 1,
    AnswerId: 103644,
    Answers: [
      {
        Id: 103643,
        Text: 'Khi viết mã hai hay nhiều trigger',
      },
      {
        Id: 103644,
        Text: 'Khi cập nhật tham chiếu khóa ngoại',
      },
      {
        Id: 103645,
        Text: 'Khi chuyển hàng từ cột này sang cột khác',
      },
      {
        Id: 103646,
        Text: 'Khi sự thất bại của tập câu lệnh SQL nào đó sẽ vi phạm function',
      },
    ],
  },
  {
    Id: 24992,
    Text: 'Phát biểu nào sau đây đúng về Stored Procedure sau: CREATE PROC spParameters @a int = 0, @b int OUT, @String Nvarchar(50) = \u0027%\u0027 AS',
    Marks: 1,
    AnswerId: 103650,
    Answers: [
      {
        Id: 103647,
        Text: 'Giá trị của tham số @a và @String luôn luôn là 0 và %',
      },
      {
        Id: 103648,
        Text: 'Lời gọi Stored Procedure này không cần truyền giá trị cho các tham số @a, @String, @b',
      },
      {
        Id: 103649,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 103650,
        Text: '@a và @String là tham số đầu vào tùy chọn, @b là tham số đầu ra',
      },
    ],
  },
  {
    Id: 24993,
    Text: 'Chọn phát biểu ĐÚNG?',
    Marks: 1,
    AnswerId: 103651,
    Answers: [
      {
        Id: 103651,
        Text: 'Để khai báo điểm bắt đầu của một giao dịch có thể sử dụng từ khóa BEGIN TRAN hoặc BEGIN TRANSACTION',
      },
      {
        Id: 103652,
        Text: 'Bắt buộc phải viết từ khóa TRAN khi viết câu lệnh BEGIN, COMMIT hoặc ROLLBACK.',
      },
      {
        Id: 103653,
        Text: 'Câu lệnh ROLLBACK chỉ sử dụng để quay lui về thời điểm bắt đầu giao dịch',
      },
      {
        Id: 103654,
        Text: 'Tất cả phát biểu đều sai',
      },
    ],
  },
  {
    Id: 24994,
    Text: 'Đâu là phát biểu đúng về Stored Procedure',
    Marks: 1,
    AnswerId: 103658,
    Answers: [
      {
        Id: 103655,
        Text: 'Một Stored Procedure không có tham số đầu ra',
      },
      {
        Id: 103656,
        Text: 'Một Stored Procedure có thể chứ nhiều nhóm câu lệnh (Batch)',
      },
      {
        Id: 103657,
        Text: 'Một Stored Procedure không có tham số đầu vào',
      },
      {
        Id: 103658,
        Text: 'Stored Procedure là một tập các câu lệnh T-SQL thực hiện một nhiệm vụ cụ thể, được đặt tên và lưu trữ trong CSDL dưới dạng đã biên dịch.',
      },
    ],
  },
  {
    Id: 24995,
    Text: 'Mã kịch bản sau sẽ làm gì khi được thực thi IF OBJECT_ID(\u0027spCopyInvoices\u0027) IS NOT NULL DROP PROC spCopyInvoices CREATE PROC spCopyInvoices AS SELECT * INTO InvoiceCopy FROM Invoices',
    Marks: 1,
    AnswerId: 103660,
    Answers: [
      {
        Id: 103659,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 103660,
        Text: 'Xóa spCopyInvoices nếu Stored Procedure này đã tồn tại và tạo spCopyInvoices mới',
      },
      {
        Id: 103661,
        Text: 'Xóa spCopyInvoices nếu Stored Procedure này đã tồn tại nhưng không tạo spCopyInvoices mới',
      },
      {
        Id: 103662,
        Text: 'Lỗi cú pháp',
      },
    ],
  },
  {
    Id: 24996,
    Text: 'Phát biều nào sau đây đúng về tên cột của một VIEW A. Trong mọi trường hợp, có thể không đặt tên các cột của VIEW trong câu lệnh CRETE VIEW. B. Cột chứa giá trị được tính toán từ nhiều cột khác phải được đặt tên. C. Nếu cột không được đặt tên, tên cột sẽ ',
    Marks: 1,
    AnswerId: 103663,
    Answers: [
      {
        Id: 103663,
        Text: 'B, C Đúng',
      },
      {
        Id: 103664,
        Text: 'C, D Đúng',
      },
      {
        Id: 103665,
        Text: 'D, A Đúng',
      },
      {
        Id: 103666,
        Text: 'A, B Đúng',
      },
    ],
  },
  {
    Id: 24997,
    Text: 'Câu lệnh nào sau đây thực hiện xóa View Vendors_SW',
    Marks: 1,
    AnswerId: 103668,
    Answers: [
      {
        Id: 103667,
        Text: 'DROP \u0027Vendors_SW\u0027',
      },
      {
        Id: 103668,
        Text: 'DROP VIEW Vendors_SW',
      },
      {
        Id: 103669,
        Text: 'DROP VIEW \u0027Vendors_SW\u0027',
      },
      {
        Id: 103670,
        Text: 'DROP Vendors_SW',
      },
    ],
  },
  {
    Id: 24998,
    Text: 'Mã kịch bản nào sau đây khai báo thành công một hàm tính tổng hai số',
    Marks: 1,
    AnswerId: 103671,
    Answers: [
      {
        Id: 103671,
        Text: 'CREATE FUNCTION fnTonghaiso( @a int = 0, @b int = 0) RETURNS int BEGIN RETURN (@a+@b)END',
      },
      {
        Id: 103672,
        Text: 'CREATE FUNCTION fnTonghaiso( @a int = 0, @b int = 0) RETURN int BEGIN RETURN (@a+@b)END',
      },
      {
        Id: 103673,
        Text: 'CREATE FUNCTION fnTonghaiso @a int = 0, @b int = 0 RETURN int BEGIN RETURN (@a+@b)END',
      },
      {
        Id: 103674,
        Text: 'Tất cả đáp án đều sai',
      },
    ],
  },
  {
    Id: 24999,
    Text: 'Để chỉnh sửa một VIEW sử dụng chế độ đồ họa View Designer của Management Studio, Click chuột phải vào tên View trong cửa sổ Objects Explorer chọn ___________',
    Marks: 1,
    AnswerId: 103676,
    Answers: [
      {
        Id: 103675,
        Text: 'View Modifier',
      },
      {
        Id: 103676,
        Text: 'Design',
      },
      {
        Id: 103677,
        Text: 'View Designer',
      },
      {
        Id: 103678,
        Text: 'Modify',
      },
    ],
  },
  {
    Id: 25000,
    Text: 'Có mấy loại hàm người dùng định nghĩa',
    Marks: 1,
    AnswerId: 103681,
    Answers: [
      {
        Id: 103679,
        Text: '2',
      },
      {
        Id: 103680,
        Text: '1',
      },
      {
        Id: 103681,
        Text: '3',
      },
      {
        Id: 103682,
        Text: '4',
      },
    ],
  },
  {
    Id: 25001,
    Text: 'Phát biểu nào ĐÚNG về đoạn mã sau: CREATE VIEW VendorsDESC AS SELECT VendorID, VendorName FROM vendors ORDER BY VendorName DESC',
    Marks: 1,
    AnswerId: 103683,
    Answers: [
      {
        Id: 103683,
        Text: 'Xảy ra lỗi khi thực thi đoạn mã này',
      },
      {
        Id: 103684,
        Text: 'View được tạo ra bởi đoạn mã này là View có thể cập nhật',
      },
      {
        Id: 103685,
        Text: 'View được tạo ra bởi đoạn mã này là View chỉ đọc',
      },
      {
        Id: 103686,
        Text: 'Tất cả đáp án đều sai',
      },
    ],
  },
  {
    Id: 25002,
    Text: 'Phát biểu nào ĐÚNG về đoạn mã dưới đây? CREATE VIEW OutstandingInvoices AS SELECT InvoiceNumber, InvoiceDate, InvoiceTotal, InvoiceTotal - PaymentTotal – CreditTotal AS BalanceDue FROM Invoices WHERE InvoiceTotal - PaymentTotal - CreditTotal \u003e 0',
    Marks: 1,
    AnswerId: 103689,
    Answers: [
      {
        Id: 103687,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 103688,
        Text: 'View tạo ra bởi đoạn mã này là View có thể cập nhật',
      },
      {
        Id: 103689,
        Text: 'View tạo ra bởi đoạn mã này là View chỉ đọc',
      },
      {
        Id: 103690,
        Text: 'Xảy ra lỗi cú pháp khi thực thi đoạn mã',
      },
    ],
  },
  {
    Id: 25003,
    Text: 'Phát biểu nào sau đây đúng về VIEW?',
    Marks: 1,
    AnswerId: 103694,
    Answers: [
      {
        Id: 103691,
        Text: 'Một View chỉ có thể truy xuất dữ liệu từ một bảng trong CSDL',
      },
      {
        Id: 103692,
        Text: 'Có thể tạo một View trùng tên với tên một bảng đã tồn tại',
      },
      {
        Id: 103693,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 103694,
        Text: 'Sử dụng View có thể che dấu và bảo mật dữ liệu',
      },
    ],
  },
  {
    Id: 25004,
    Text: 'Một hàm người dùng định nghĩa có thể trả về giá trị nào sau đây',
    Marks: 1,
    AnswerId: 103696,
    Answers: [
      {
        Id: 103695,
        Text: 'Một bảng dữ liệu',
      },
      {
        Id: 103696,
        Text: 'Tất cả đáp án đều đúng',
      },
      {
        Id: 103697,
        Text: 'Giá trị kiểu int',
      },
      {
        Id: 103698,
        Text: 'Giá trị kiểu char',
      },
    ],
  },
  {
    Id: 25005,
    Text: 'Để trả về giá trị cho một hàm người dùng định nghĩa, có thể sử dụng cách nào sau đây?',
    Marks: 1,
    AnswerId: 103699,
    Answers: [
      {
        Id: 103699,
        Text: 'Sử dụng câu lệnh RETURN',
      },
      {
        Id: 103700,
        Text: 'Sử dụng tham số đầu ra',
      },
      {
        Id: 103701,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 103702,
        Text: 'Sử dụng tham số đầu ra hoặc câu lệnh RETURN',
      },
    ],
  },
  {
    Id: 25006,
    Text: 'Phát biểu nào sau đây ĐÚNG:',
    Marks: 1,
    AnswerId: 103705,
    Answers: [
      {
        Id: 103703,
        Text: 'Câu lệnh tạo Login ID sử dụng tùy chọn DEFAULT_DATABASE để thiết lập CSDL mặc định cho Login ID phải được thực thi trong ngữ cảnh CSDL mặc định đó',
      },
      {
        Id: 103704,
        Text: 'Mỗi CSDL duy trì một danh sách Login ID của riêng CSDL đó.',
      },
      {
        Id: 103705,
        Text: 'Để tạo database user cho một CSDL cụ thể, câu lệnh CREATE USER phải được thực thi trong ngữ cảnh CSDL đó',
      },
      {
        Id: 103706,
        Text: 'Mỗi Login ID chỉ tạo được một database User',
      },
    ],
  },
  {
    Id: 25007,
    Text: 'Lựa chọn nào sau đây là vai trò CSDL mặc định',
    Marks: 1,
    AnswerId: 103710,
    Answers: [
      {
        Id: 103707,
        Text: 'dbcreator',
      },
      {
        Id: 103708,
        Text: 'DbDatawriter',
      },
      {
        Id: 103709,
        Text: 'DbOwner',
      },
      {
        Id: 103710,
        Text: 'Tất cả đáp án đều sai',
      },
    ],
  },
  {
    Id: 25008,
    Text: 'Chế độ xác thực nào sau đây phải nhập UserName và Password khi đăng nhập SQL Server',
    Marks: 1,
    AnswerId: 103711,
    Answers: [
      {
        Id: 103711,
        Text: 'SQL Server Authentication',
      },
      {
        Id: 103712,
        Text: 'Windows Authenticaion',
      },
      {
        Id: 103713,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 103714,
        Text: 'Mixed Mode',
      },
    ],
  },
  {
    Id: 25009,
    Text: 'Sau khi tạo một Database User cho một CSDL thì người dùng có thể thực hiện các quyền nào sau đây?',
    Marks: 1,
    AnswerId: 103716,
    Answers: [
      {
        Id: 103715,
        Text: 'Thêm một bảng vào CSDL',
      },
      {
        Id: 103716,
        Text: 'Chọn CSDL trên combo box chọn ngữ cảnh CSDL',
      },
      {
        Id: 103717,
        Text: 'Xóa một bảng trong CSDL',
      },
      {
        Id: 103718,
        Text: 'Truy vấn một bảng trong một CSDL trên Server',
      },
    ],
  },
  {
    Id: 25010,
    Text: 'Quyền SELECT có thể tác động lên các đối tượng nào dưới đây:',
    Marks: 1,
    AnswerId: 103719,
    Answers: [
      {
        Id: 103719,
        Text: 'Tất cả đáp án đều đúng',
      },
      {
        Id: 103720,
        Text: 'View',
      },
      {
        Id: 103721,
        Text: 'Hàm giá trị bảng',
      },
      {
        Id: 103722,
        Text: 'Bảng',
      },
    ],
  },
  {
    Id: 25011,
    Text: 'Đoạn mã kịch bản nào sau đây thực thi thành công:',
    Marks: 1,
    AnswerId: 103723,
    Answers: [
      {
        Id: 103723,
        Text: 'CREATE LOGIN JohnDoe WITH PASSWORD = \u0027pt8806FG$B\u0027, DEFAULT_DATABASE = AP USE APCREATE USER JohnDoe FOR LOGIN JohnDoe',
      },
      {
        Id: 103724,
        Text: 'CREATE LOGIN ID JohnDoe WITH PASSWORD = \u0027pt8806FG$B\u0027, DEFAULT_DATABASE = AP USE APCREATE USER JohnDoe',
      },
      {
        Id: 103725,
        Text: 'CREATE LOGIN ID JohnDoe WITH PASSWORD = \u0027pt8806FG$B\u0027, DEFAULT_DATABASE = AP USE APCREATE USER JohnDoe FOR LOGIN ID JohnDoe',
      },
      {
        Id: 103726,
        Text: 'CREATE LOGIN JohnDoe WITH PASSWORD = \u0027pt8806FG$B\u0027, DEFAULT_DATABASE = AP USE APCREATE DATABASE USER JohnDoe FOR LOGIN JohnDoe',
      },
    ],
  },
  {
    Id: 25012,
    Text: 'Quyền EXECUTE có thể tác động lên các đối tượng nào sau đây:',
    Marks: 1,
    AnswerId: 103727,
    Answers: [
      {
        Id: 103727,
        Text: 'Stored Procedure',
      },
      {
        Id: 103728,
        Text: 'Bảng',
      },
      {
        Id: 103729,
        Text: 'Tất cả các đối tượng CSDL',
      },
      {
        Id: 103730,
        Text: 'View',
      },
    ],
  },
  {
    Id: 25013,
    Text: 'Vai trò dbcreator có thể thực hiện các thao tác nào sau đây?',
    Marks: 1,
    AnswerId: 103733,
    Answers: [
      {
        Id: 103731,
        Text: 'Phục hồi một CSDL',
      },
      {
        Id: 103732,
        Text: 'Truy vấn các bảng trong một CSDL do người dùng tạo trên server',
      },
      {
        Id: 103733,
        Text: 'Tạo một bảng mới trên một CSDL, do người dùng tạo trên server',
      },
      {
        Id: 103734,
        Text: 'Tất cả đáp án đều đúng',
      },
    ],
  },
  {
    Id: 25014,
    Text: 'Password của một SQL Login ID phải thỏa mãn điều kiện nào sau đây để có tính bảo mật cao?',
    Marks: 1,
    AnswerId: 103735,
    Answers: [
      {
        Id: 103735,
        Text: 'Tất cả đáp án đều đúng',
      },
      {
        Id: 103736,
        Text: 'Không sử dụng các giá trị "sysadmin", "sa", "administrator"',
      },
      {
        Id: 103737,
        Text: 'Không sử dụng tên máy hoặc tên người dùng hiện thời',
      },
      {
        Id: 103738,
        Text: 'Phải chứa ít nhất ba trong số các kí tự sau: chữ cái viết hoa, chữ cái viết thường, kí tự số, các kí tự đặc biệt (#, %, $...)',
      },
    ],
  },
  {
    Id: 25015,
    Text: 'Lựa chọn đáp án đúng? SQL Server dựa vào _________cấp cho người dùng/nhóm người dùng để xác định các đối tượng, câu lệnh SQL… người đùng được phép tác động trên CSDL',
    Marks: 1,
    AnswerId: 103742,
    Answers: [
      {
        Id: 103739,
        Text: 'Quyền',
      },
      {
        Id: 103740,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 103741,
        Text: 'Vai trò',
      },
      {
        Id: 103742,
        Text: 'Quyền và vai trò',
      },
    ],
  },
  {
    Id: 25016,
    Text: 'Invoices là tên một bảng trong CSDL. Câu lệnh sp_Help \u0027Invoices\u0027 trả về___________',
    Marks: 1,
    AnswerId: 103743,
    Answers: [
      {
        Id: 103743,
        Text: 'Câu lệnh tạo bảng Invoices',
      },
      {
        Id: 103744,
        Text: 'Tất cả các thông tin liên quan đến bảng Invoices bao gồm thông tin các cột của bảng, indexes, ràng buộc, khóa ngoại.',
      },
      {
        Id: 103745,
        Text: 'Cả A, B, C đều sai',
      },
      {
        Id: 103746,
        Text: 'Tất cả các thông tin liên quan đến bảng Invoices bao gồm thông tin các cột của bảng, indexes, ràng buộc, khóa ngoại, các Stored Procedure, View, Trigger tham chiếu đến bảng.',
      },
    ],
  },
  {
    Id: 25017,
    Text: 'System Stored Procedure nào sau đây đùng để xem danh sách các Stored Procedure, View mà tham chiếu đến bảng Invoices trong CSDL?',
    Marks: 1,
    AnswerId: 103750,
    Answers: [
      {
        Id: 103747,
        Text: 'sp_help Invoices',
      },
      {
        Id: 103748,
        Text: 'sp_relationship Invoices',
      },
      {
        Id: 103749,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 103750,
        Text: 'sp_depends Invoices',
      },
    ],
  },
  {
    Id: 25018,
    Text: 'Người dùng phải đăng nhạp bằng Login ID có vai trò nào sau đây, để có thể tạo lịch sao lưu tự động cho một CSDL?',
    Marks: 1,
    AnswerId: 103751,
    Answers: [
      {
        Id: 103751,
        Text: 'sysadmin',
      },
      {
        Id: 103752,
        Text: 'db_owner',
      },
      {
        Id: 103753,
        Text: 'admin',
      },
      {
        Id: 103754,
        Text: 'dbcreator',
      },
    ],
  },
  {
    Id: 25019,
    Text: 'Tùy chọn chế độ sao lưu nào sau đây có thể tạo ra nhiều bản sao CSDL, được lưu trong cùng một File .bak?',
    Marks: 1,
    AnswerId: 103758,
    Answers: [
      {
        Id: 103755,
        Text: 'Duplicate',
      },
      {
        Id: 103756,
        Text: 'Overwrite all existing backup sets',
      },
      {
        Id: 103757,
        Text: 'Multiple copies',
      },
      {
        Id: 103758,
        Text: 'Append to the existing backup set',
      },
    ],
  },
  {
    Id: 25020,
    Text: 'Để tạo lịch sao lưu CSDL tự động trong SQL Server 2008, nhấn chuột phải vào Maintenance Plans trong thư mục Management trên cửa sổ Solution Explorer, chọn ________',
    Marks: 1,
    AnswerId: 103759,
    Answers: [
      {
        Id: 103759,
        Text: 'New Maintenance Plan',
      },
      {
        Id: 103760,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 103761,
        Text: 'New backup Schedule',
      },
      {
        Id: 103762,
        Text: 'New backup plan',
      },
    ],
  },
  {
    Id: 25021,
    Text: 'Phát biểu nào sau đây ĐÚNG?',
    Marks: 1,
    AnswerId: 103764,
    Answers: [
      {
        Id: 103763,
        Text: 'Kiểu sao lưu Full backup tốn ít dung lượng bộ nhớ hơn kiểu sao lưu Differential backup',
      },
      {
        Id: 103764,
        Text: 'Kiểu sao lưu Differential backup chỉ sao lưu các dữ liệu mới được cập nhật (thay đổi) kể từ lần full backup trước đó',
      },
      {
        Id: 103765,
        Text: 'Kiểu sao lưu Differential backup sao lưu toàn bộ dữ liệu trong CSDL cùng với bản ghi transaction log ghi nhận các thao tác được thực hiện từ lần sao lưu Full backup gần nhất',
      },
      {
        Id: 103766,
        Text: 'Tất cả đáp án đều sai',
      },
    ],
  },
  {
    Id: 25022,
    Text: 'Để thực hiện phục hồi CSDL từ một bản sao Full backup và sau đó tiếp tục phục hồi CSDL sử dụng bản sao Differential backup, ở mục recovery state của trang option trong hộp thoại Restore database của lần phục hồi từ bản sao Full backup phải chọn radio butt',
    Marks: 1,
    AnswerId: 103769,
    Answers: [
      {
        Id: 103767,
        Text: 'radio button thứ ba',
      },
      {
        Id: 103768,
        Text: 'radio button thứ nhất',
      },
      {
        Id: 103769,
        Text: 'radio button thứ hai',
      },
      {
        Id: 103770,
        Text: 'Tất cả đáp án đều sai',
      },
    ],
  },
  {
    Id: 25023,
    Text: 'Các cấu hình thường phải thực hiện cho một Back Up Database Task trong hộp thoại Back Up Database Task là:A. Ấn định thời gian thực hiện sao lưu CSDLB. Chọn kiểu sao lưu CSDL trong mục Database(s)C. Chọn đường dẫn lưu bản sao CSDL',
    Marks: 1,
    AnswerId: 103773,
    Answers: [
      {
        Id: 103771,
        Text: 'A, B đúng',
      },
      {
        Id: 103772,
        Text: 'Tất cả đáp án đều đúng',
      },
      {
        Id: 103773,
        Text: 'A, C đúng',
      },
      {
        Id: 103774,
        Text: 'B, C đúng',
      },
    ],
  },
  {
    Id: 25024,
    Text: 'Lựa chọn nào sau đây là một system stored procedure?',
    Marks: 1,
    AnswerId: 103777,
    Answers: [
      {
        Id: 103775,
        Text: 'sp_who',
      },
      {
        Id: 103776,
        Text: 'sp_column',
      },
      {
        Id: 103777,
        Text: 'sp_table',
      },
      {
        Id: 103778,
        Text: 'sp_relationship',
      },
    ],
  },
  {
    Id: 25025,
    Text: 'File sử dụng để phục hồi cơ sở dữ liệu có phần mở rộng làA. MdfB. bakC. LdfD. Sử dụng cả ba loại file trên',
    Marks: 1,
    AnswerId: 103779,
    Answers: [
      {
        Id: 103779,
        Text: 'B Đúng',
      },
      {
        Id: 103780,
        Text: 'A Đúng',
      },
      {
        Id: 103781,
        Text: 'D Đúng',
      },
      {
        Id: 103782,
        Text: 'C Đúng',
      },
    ],
  },
]
export const DBBS = [
  {
    Id: 24916,
    Text: 'Phát biểu nào dưới đây là đúng về quản lý dữ liệu?',
    Marks: 1,
    AnswerId: 103344,
    Answers: [
      {
        Id: 103343,
        Text: 'Thực hiện thao tác dữ liệu và truy vấn dữ liệu',
      },
      {
        Id: 103344,
        Text: 'Quản lý lưu trữ dữ liệu, thao tác dữ liệu và truy vấn dữ liệu',
      },
      {
        Id: 103345,
        Text: 'Quản lý lưu trữ dữ liệu, thêm, sửa, xóa dữ liệu',
      },
      {
        Id: 103346,
        Text: 'Cho phép lưu trữ dữ liệu và truy vấn dữ liệu',
      },
    ],
  },
  {
    Id: 24917,
    Text: 'Hệ quản trị cơ sở dữ liệu không mang lại các lợi ích nào sau đây?',
    Marks: 1,
    AnswerId: 103349,
    Answers: [
      {
        Id: 103347,
        Text: 'Hỗ trợ các ngôn ngữ giao tiếp',
      },
      {
        Id: 103348,
        Text: 'Quản trị các cơ sở dữ liệu',
      },
      {
        Id: 103349,
        Text: 'Cung cấp các truy cập đến tổ chức dữ liệu vật lý',
      },
      {
        Id: 103350,
        Text: 'Có cơ chế an toàn, bảo mật cao',
      },
    ],
  },
  {
    Id: 24918,
    Text: 'Phát biểu nào là đúng cho mô hình dữ liệu phân cấp?',
    Marks: 1,
    AnswerId: 103354,
    Answers: [
      {
        Id: 103351,
        Text: 'Liên hệ dữ liệu theo kiểu cha-con, mỗi cha có một con và mỗi con có một cha',
      },
      {
        Id: 103352,
        Text: 'Liên hệ dữ liệu có thể thừa kế giữa cha và con',
      },
      {
        Id: 103353,
        Text: 'Kiểu quan hệ là 1-N và N-N',
      },
      {
        Id: 103354,
        Text: 'Mỗi nút biểu diễn một thực thể dữ liệu và được tổ chức theo hình cây',
      },
    ],
  },
  {
    Id: 24919,
    Text: 'Hệ quản trị cơ sở dữ liệu được hiểu là gì?',
    Marks: 1,
    AnswerId: 103355,
    Answers: [
      {
        Id: 103355,
        Text: 'Phần mềm giúp tạo cơ sở dữ liệu, cung cấp cơ chế lưu trữ, thao tác và truy cập cơ sở dữ liệu theo các mô hình cơ sở dữ liệu',
      },
      {
        Id: 103356,
        Text: 'Công cụ giúp lưu trữ, thao tác và truy cập cơ sở dữ liệu quan hệ',
      },
      {
        Id: 103357,
        Text: 'Phần mềm cung cấp cách thức tổ chức, thao tác dữ liệu theo các mô hình cơ sở dữ liệu',
      },
      {
        Id: 103358,
        Text: 'Công cụ giúp lưu trữ, thao tác và truy cập mô hình cơ sở dữ liệu',
      },
    ],
  },
  {
    Id: 24920,
    Text: 'Dữ liệu (data) được mô tả dưới dạng nào dưới đây:',
    Marks: 1,
    AnswerId: 103361,
    Answers: [
      {
        Id: 103359,
        Text: 'Các ký tự, ký số',
      },
      {
        Id: 103360,
        Text: 'Hình ảnh, âm thanh',
      },
      {
        Id: 103361,
        Text: 'Các phương án đều đúng',
      },
      {
        Id: 103362,
        Text: 'Ký hiệu',
      },
    ],
  },
  {
    Id: 24921,
    Text: 'Bảng hiệu quảng cáo là dữ liệu gì?',
    Marks: 1,
    AnswerId: 103366,
    Answers: [
      {
        Id: 103363,
        Text: 'Dữ liệu dạng âm thanh',
      },
      {
        Id: 103364,
        Text: 'Dữ liệu dạng ký hiệu',
      },
      {
        Id: 103365,
        Text: 'Dữ liệu dạng ký số',
      },
      {
        Id: 103366,
        Text: 'Dữ liệu dạng hình ảnh',
      },
    ],
  },
  {
    Id: 24922,
    Text: 'Phát biểu nào sau đây là không đúng với mô hình cơ sở dữ liệu hướng đối tượng?',
    Marks: 1,
    AnswerId: 103369,
    Answers: [
      {
        Id: 103367,
        Text: 'Các đối tượng trao đổi thông qua các phương thức',
      },
      {
        Id: 103368,
        Text: 'Một đối tượng gồm các thuộc tính, các phương thức',
      },
      {
        Id: 103369,
        Text: 'Các đối tượng không thể được lưu trữ trong cơ sở dữ liệu',
      },
      {
        Id: 103370,
        Text: 'Các đối tượng có thể được sinh ra từ việc thừa kế',
      },
    ],
  },
  {
    Id: 24923,
    Text: 'Hệ quản trị cơ sở dữ liệu phổ biến nhất hiện nay là gì?',
    Marks: 1,
    AnswerId: 103372,
    Answers: [
      {
        Id: 103371,
        Text: 'Hệ quản trị cơ sở dữ liệu phân cấp',
      },
      {
        Id: 103372,
        Text: 'Hệ quản trị cơ sở dữ liệu quan hệ',
      },
      {
        Id: 103373,
        Text: 'Hệ quản trị cơ sở dữ liệu mạng',
      },
      {
        Id: 103374,
        Text: 'Hệ quản trị cơ sở dữ liệu hướng đối tượng',
      },
    ],
  },
  {
    Id: 24924,
    Text: 'Phát biểu nào dưới đây là đúng với hệ quản trị cơ sở dữ liệu MySQL?',
    Marks: 1,
    AnswerId: 103378,
    Answers: [
      {
        Id: 103375,
        Text: 'Một hệ quản trị dữ liệu dạng file, không thể cho nhiều người cùng truy xuất',
      },
      {
        Id: 103376,
        Text: 'Một hệ quản trị cơ sở dữ liệu cỡ nhỏ, chủ yếu dùng cho mục đích cá nhân',
      },
      {
        Id: 103377,
        Text: 'Một hệ quản trị cơ sở dữ liệu của hãng Microsoft',
      },
      {
        Id: 103378,
        Text: 'Một hệ quản trị cơ sở liệu mã nguồn mở rất được ưa chuộng',
      },
    ],
  },
  {
    Id: 24925,
    Text: 'Những thông tin được nhập từ bàn phím là dữ liệu gì?',
    Marks: 1,
    AnswerId: 103382,
    Answers: [
      {
        Id: 103379,
        Text: 'Dữ liệu dạng âm thanh',
      },
      {
        Id: 103380,
        Text: 'Dữ liệu dạng hình ảnh',
      },
      {
        Id: 103381,
        Text: 'Dữ liệu dạng ký hiệu',
      },
      {
        Id: 103382,
        Text: 'Dữ liệu dạng ký tự, ký số',
      },
    ],
  },
  {
    Id: 24926,
    Text: 'Quan hệ N-N là gì?',
    Marks: 1,
    AnswerId: 103386,
    Answers: [
      {
        Id: 103383,
        Text: 'Một thực thể của tập này có thể liên kết nhiều tập thực thể khác, và ngược lại',
      },
      {
        Id: 103384,
        Text: 'Nhiều thực thể của tập này có thể liên kết với nhiều tập kia, và ngược lại',
      },
      {
        Id: 103385,
        Text: 'Một thực thể của tập này có thể liên kết 0, 1 hoặc nhiều tập thực thể khác, và ngược lại',
      },
      {
        Id: 103386,
        Text: 'Một thực thể của tập này có thể liên kết 0, 1 hoặc nhiều thực thể của tập kia, và ngược lại',
      },
    ],
  },
  {
    Id: 24927,
    Text: 'Thứ tự thiết kế cơ sở dữ liệu quan hệ nào dưới đây là đúng?',
    Marks: 1,
    AnswerId: 103389,
    Answers: [
      {
        Id: 103387,
        Text: 'Thiết kế mức khái niệm, thiết kế mức vật lý, thiết kế mức logic',
      },
      {
        Id: 103388,
        Text: 'Thiết kế mức vật lý, thiết kế mức logic, thiết kế mức khái niệm',
      },
      {
        Id: 103389,
        Text: 'Thiết kế mức khái niệm, thiết kế mức logic, thiết kế mức vật lý',
      },
      {
        Id: 103390,
        Text: 'Thiết kế mức vật lý, thiết kế mức khái niệm, thiết kế mức logic',
      },
    ],
  },
  {
    Id: 24928,
    Text: 'Quan hệ 1-1 là gì?',
    Marks: 1,
    AnswerId: 103391,
    Answers: [
      {
        Id: 103391,
        Text: 'Một thực thể của tập này chỉ liên kết với một thực thể của tập kia, và ngược lại',
      },
      {
        Id: 103392,
        Text: 'Một thực thể của tập thực thể này liên kết với nhiều thực thể của tập thực thể kia, và ngược lại',
      },
      {
        Id: 103393,
        Text: 'Một tập thực thể này liên kết với một tập thực thể kia, và ngược lại',
      },
      {
        Id: 103394,
        Text: 'Một thực thể bất kỳ có thể liên kết với một thực thể trong tập thực thể đó, và ngược lại',
      },
    ],
  },
  {
    Id: 24929,
    Text: 'Một thực thể được biểu diễn trong cơ sở dữ liệu mức vật lý thành đối tượng gì?',
    Marks: 1,
    AnswerId: 103398,
    Answers: [
      {
        Id: 103395,
        Text: 'Hàng',
      },
      {
        Id: 103396,
        Text: 'Khóa',
      },
      {
        Id: 103397,
        Text: 'Cột',
      },
      {
        Id: 103398,
        Text: 'Bảng',
      },
    ],
  },
  {
    Id: 24930,
    Text: 'Mối quan hệ giữa các thực thể bao gồm:',
    Marks: 1,
    AnswerId: 103400,
    Answers: [
      {
        Id: 103399,
        Text: 'Quan hệ 0-0, 1-1, n-n',
      },
      {
        Id: 103400,
        Text: 'Quan hệ 1-1, 1-n, n-n',
      },
      {
        Id: 103401,
        Text: 'Quan hệ 0-1, 1-1, n-n',
      },
      {
        Id: 103402,
        Text: 'Quan hệ 1-n, n-n, n-1',
      },
    ],
  },
  {
    Id: 24931,
    Text: 'Ràng buộc nhằm nhấn mạnh sự chính xác của dữ liệu nhập vào là ràng buộc nào dưới đây?',
    Marks: 1,
    AnswerId: 103404,
    Answers: [
      {
        Id: 103403,
        Text: 'Ràng buộc quy tắc',
      },
      {
        Id: 103404,
        Text: 'Ràng buộc toàn vẹn',
      },
      {
        Id: 103405,
        Text: 'Ràng buộc sự kiện',
      },
      {
        Id: 103406,
        Text: 'Ràng buộc chính xác',
      },
    ],
  },
  {
    Id: 24932,
    Text: 'Các thủ tục, nguyên tắc cần phải tuân theo và thể hiện trong cơ sở dữ liệu như là các ràng buộc được gọi là gì?',
    Marks: 1,
    AnswerId: 103409,
    Answers: [
      {
        Id: 103407,
        Text: 'Thủ tục công ty',
      },
      {
        Id: 103408,
        Text: 'Quy trình công việc',
      },
      {
        Id: 103409,
        Text: 'Quy tắc nghiệp vụ',
      },
      {
        Id: 103410,
        Text: 'Quy định công việc',
      },
    ],
  },
  {
    Id: 24933,
    Text: 'Danh từ nào sau đây có thể là thực thể?',
    Marks: 1,
    AnswerId: 103412,
    Answers: [
      {
        Id: 103411,
        Text: 'Company Name',
      },
      {
        Id: 103412,
        Text: 'Customer',
      },
      {
        Id: 103413,
        Text: 'Customer ID',
      },
      {
        Id: 103414,
        Text: 'Address',
      },
    ],
  },
  {
    Id: 24934,
    Text: 'Thuộc tính để xác định duy nhất một bộ dữ liệu trong một quan hệ gọi là gì?',
    Marks: 1,
    AnswerId: 103418,
    Answers: [
      {
        Id: 103415,
        Text: 'Thuộc tính chính',
      },
      {
        Id: 103416,
        Text: 'Khóa ngoại',
      },
      {
        Id: 103417,
        Text: 'Thuộc tính xác định',
      },
      {
        Id: 103418,
        Text: 'Khóa chính',
      },
    ],
  },
  {
    Id: 24935,
    Text: 'Trong Access, các bước thiết kế truy vấn dựa trên bảng điều khiển nào dưới đây là hợp lý?',
    Marks: 1,
    AnswerId: 103421,
    Answers: [
      {
        Id: 103419,
        Text: 'Mô tả tiêu chuẩn, lựa chọn sắp xếp, chọn bảng, chọn cột',
      },
      {
        Id: 103420,
        Text: 'Chọn bảng, mô tả tiêu chuẩn, lựa chọn sắp xếp, chọn trường',
      },
      {
        Id: 103421,
        Text: 'Chọn bảng, chọn cột, mô tả tiêu chuẩn, lựa chọn sắp xếp',
      },
      {
        Id: 103422,
        Text: 'Mô tả tiêu chuẩn, chọn bảng, chọn trường, lựa chọn sắp xếp',
      },
    ],
  },
  {
    Id: 24936,
    Text: 'Truy vấn nào dưới đây lựa chọn tất cả các cột của bảng EMPLOYEES?',
    Marks: 1,
    AnswerId: 103424,
    Answers: [
      {
        Id: 103423,
        Text: 'SELECT ALL FROM EMPLOYEES',
      },
      {
        Id: 103424,
        Text: 'SELECT * FROM EMPLOYEES',
      },
      {
        Id: 103425,
        Text: 'SELECT * WHERE EMPLOYEES',
      },
      {
        Id: 103426,
        Text: 'SELECT ALL WHERE EMPLOYEES',
      },
    ],
  },
  {
    Id: 24937,
    Text: 'Truy vấn nào dưới đây hiển thị thông tin nhân viên có lương lớn hơn 10000 và sắp xếp theo tên, họ ?',
    Marks: 1,
    AnswerId: 103429,
    Answers: [
      {
        Id: 103427,
        Text: 'SELECT * FROM EMPLOYEES WHERE SALARY \u003e 10000 ORDER WITH LAST_NAME, FIRST_NAME',
      },
      {
        Id: 103428,
        Text: 'SELECT * FROM EMPLOYEES WHERE SALARY \u003e 10000 SORT BY LAST_NAME, FIRST_NAME',
      },
      {
        Id: 103429,
        Text: 'SELECT * FROM EMPLOYEES WHERE SALARY \u003e 10000 ORDER BY FIRST_NAME, LAST_NAME',
      },
      {
        Id: 103430,
        Text: 'SELECT * FROM EMPLOYEES WHERE SALARY \u003e 10000 ORDER LAST_NAME, FIRST_NAME',
      },
    ],
  },
  {
    Id: 24938,
    Text: 'Bốn nhóm lệnh SQL nào dưới đây là đúng?',
    Marks: 1,
    AnswerId: 103433,
    Answers: [
      {
        Id: 103431,
        Text: 'Nhóm lựa chọn dữ liệu, nhóm định nghĩa dữ liệu, nhóm thao tác dữ liệu, nhóm nhập dữ liệu',
      },
      {
        Id: 103432,
        Text: 'Nhóm truy vấn dữ liệu, nhóm thay đổi dữ liệu, nhóm thao tác dữ liệu, nhóm điều khiển dữ liệu',
      },
      {
        Id: 103433,
        Text: 'Nhóm truy vấn dữ liệu, nhóm định nghĩa dữ liệu, nhóm thao tác dữ liệu, nhóm điều khiển dữ liệu',
      },
      {
        Id: 103434,
        Text: 'Nhóm lựa chọn dữ liệu, nhóm định nghĩa dữ liệu, nhóm thao tác dữ liệu, nhóm điều khiển dữ liệu',
      },
    ],
  },
  {
    Id: 24939,
    Text: 'Truy vấn nào dưới đây hiển thị thông tin nhân viên có tên họ bắt đầu bằng Pete ?',
    Marks: 1,
    AnswerId: 103435,
    Answers: [
      {
        Id: 103435,
        Text: 'SELECT * FROM EMPLOYEES WHERE FIRST_NAME LIKE \u0027Pete%\u0027',
      },
      {
        Id: 103436,
        Text: 'SELECT * FROM EMPLOYEES WHERE FIRST_NAME LIKE \u0027%Pete%\u0027',
      },
      {
        Id: 103437,
        Text: 'SELECT * FROM EMPLOYEES WHERE FIRST_NAME LIKE \u0027Pete\u0027',
      },
      {
        Id: 103438,
        Text: 'SELECT * FROM EMPLOYEES WHERE FIRST_NAME LIKE \u0027%Pete\u0027',
      },
    ],
  },
  {
    Id: 24940,
    Text: 'Truy vấn nào dưới đây trả về thông tin nhân viên được sắp xếp thứ tự giảm dần theo tên nhân viên ?',
    Marks: 1,
    AnswerId: 103440,
    Answers: [
      {
        Id: 103439,
        Text: 'SELECT * FROM EMPLOYEES ORDER First_Name DESC',
      },
      {
        Id: 103440,
        Text: 'SELECT * FROM EMPLOYEES ORDER BY First_Name DESC',
      },
      {
        Id: 103441,
        Text: 'SELECT * FROM EMPLOYEES SORT \u0027First_Name\u0027 DESC',
      },
      {
        Id: 103442,
        Text: 'SELECT * FROM EMPLOYEES SORT BY \u0027First_Name\u0027 DESC',
      },
    ],
  },
  {
    Id: 24941,
    Text: 'Truy vấn nào dưới đây hiển thị thông tin nhân viên có tên là Peter và họ là Jackson ?',
    Marks: 1,
    AnswerId: 103445,
    Answers: [
      {
        Id: 103443,
        Text: 'SELECT * FROM EMPLOYEES WHERE FIRST_NAME \u003c\u003e\u0027Peter\u0027 AND LAST_NAME\u003c\u003e\u0027Jackson\u0027',
      },
      {
        Id: 103444,
        Text: 'SELECT FIRST_NAME=\u0027Peter\u0027 AND LAST_NAME=\u0027Jackson\u0027 FROM EMPLOYEES WHERE FIRST_NAME =\u0027Peter\u0027 AND LAST_NAME=\u0027Jackson\u0027',
      },
      {
        Id: 103445,
        Text: 'SELECT * FROM EMPLOYEES WHERE FIRST_NAME =\u0027Peter\u0027 AND LAST_NAME=\u0027Jackson\u0027',
      },
      {
        Id: 103446,
        Text: 'SELECT FIRST_NAME=\u0027Peter\u0027 AND LAST_NAME=\u0027Jackson\u0027 FROM EMPLOYEES',
      },
    ],
  },
  {
    Id: 24942,
    Text: 'Từ khóa nào dưới đây của SQL được sử dụng để sắp xếp tập kết quả truy vấn?',
    Marks: 1,
    AnswerId: 103449,
    Answers: [
      {
        Id: 103447,
        Text: 'SORT BY',
      },
      {
        Id: 103448,
        Text: 'SORT',
      },
      {
        Id: 103449,
        Text: 'ORDER BY',
      },
      {
        Id: 103450,
        Text: 'ORDER',
      },
    ],
  },
  {
    Id: 24943,
    Text: 'Truy vấn nào dưới đây hiển thị thông tin nhân viên có tên họ dài bất kỳ, với chữ đầu là A hoặc B hoặc C ?',
    Marks: 1,
    AnswerId: 103453,
    Answers: [
      {
        Id: 103451,
        Text: 'SELECT * FROM EMPLOYEES WHERE FIRST_NAME LIKE \u0027[^ABC]%\u0027',
      },
      {
        Id: 103452,
        Text: 'SELECT * FROM EMPLOYEES WHERE FIRST_NAME LIKE \u0027[ABC]_\u0027',
      },
      {
        Id: 103453,
        Text: 'SELECT * FROM EMPLOYEES WHERE FIRST_NAME LIKE \u0027[ABC]%\u0027',
      },
      {
        Id: 103454,
        Text: 'SELECT * FROM EMPLOYEES WHERE FIRST_NAME LIKE \u0027[ABC]*\u0027',
      },
    ],
  },
  {
    Id: 24944,
    Text: 'Nhóm lệnh định nghĩa dữ liệu của ngôn ngữ SQL là gì?',
    Marks: 1,
    AnswerId: 103458,
    Answers: [
      {
        Id: 103455,
        Text: 'Insert, Update, Delete',
      },
      {
        Id: 103456,
        Text: 'Grant, Revoke',
      },
      {
        Id: 103457,
        Text: 'Select',
      },
      {
        Id: 103458,
        Text: 'Create, Drop, Alter',
      },
    ],
  },
  {
    Id: 24945,
    Text: 'Truy vấn nào dưới đây hiển thị thông tin nhân viên có lương từ 10000 đến 11000 ?',
    Marks: 1,
    AnswerId: 103459,
    Answers: [
      {
        Id: 103459,
        Text: 'SELECT * FROM EMPLOYEES WHERE SALARY BETWEEN 10000 AND 11000',
      },
      {
        Id: 103460,
        Text: 'SELECT * FROM EMPLOYEES WHERE SALARY = 10000 AND 11000',
      },
      {
        Id: 103461,
        Text: 'SELECT * FROM EMPLOYEES WHERE SALARY 10000 AND 11000',
      },
      {
        Id: 103462,
        Text: 'SELECT * FROM EMPLOYEES WHERE SALARY =\u003e 10000 AND \u003c= 11000',
      },
    ],
  },
  {
    Id: 24946,
    Text: 'Câu lệnh SQL nào dưới đây thêm dữ liệu mới vào bảng Employees?',
    Marks: 1,
    AnswerId: 103466,
    Answers: [
      {
        Id: 103463,
        Text: 'INSERT Employees(Employee_ID, First_Name, Last_Name) INTO (213, \u0027Abraham\u0027, \u0027Lincoln\u0027)',
      },
      {
        Id: 103464,
        Text: 'INSERT (213, \u0027Abraham\u0027, \u0027Lincoln\u0027) INTO Employees(Employee_ID, First_Name, Last_Name)',
      },
      {
        Id: 103465,
        Text: 'INSERT VALUES (213, \u0027Abraham\u0027, \u0027Lincoln\u0027) INTO Employees(Employee_ID, First_Name, Last_Name)',
      },
      {
        Id: 103466,
        Text: 'INSERT INTO Employees(Employee_ID, First_Name, Last_Name) VALUES (213, \u0027Abraham\u0027, \u0027Lincoln\u0027)',
      },
    ],
  },
  {
    Id: 24947,
    Text: 'Câu lệnh SQL nào dưới đây để tạo bảng KHACH_HANG ?',
    Marks: 1,
    AnswerId: 103467,
    Answers: [
      {
        Id: 103467,
        Text: 'CREATE TABLE Khach_Hang (MaKH NUMBER(6) NOT NULL, Hoten VARCHAR(30) NOT NULL, Diachi VARCHAR(50) NOT NULL, Dienthoai VARCHAR(15) NOT NULL);',
      },
      {
        Id: 103468,
        Text: 'ALTER TABLE Khach_Hang (MaKH NUMBER(6) NOT NULL, Hoten VARCHAR(30) NOT NULL, Diachi VARCHAR(50) NOT NULL, Dienthoai VARCHAR(15) NOT NULL);',
      },
      {
        Id: 103469,
        Text: 'CREATE TABLE Khach_Hang (MaKH, Hoten, Diachi, Dienthoai);',
      },
      {
        Id: 103470,
        Text: 'NEW TABLE Khach_Hang ( MaKH NUMBER(6) NOT NULL, Hoten VARCHAR(30) NOT NULL, Diachi VARCHAR(50) NOT NULL, Dienthoai VARCHAR(15) NOT NULL);',
      },
    ],
  },
  {
    Id: 24948,
    Text: 'Câu lệnh SQL nào dưới đây để xóa dữ liệu của nhân viên có mã số 213 ?',
    Marks: 1,
    AnswerId: 103474,
    Answers: [
      {
        Id: 103471,
        Text: 'DELETE * FROM Employees WHERE Employee_ID = 213',
      },
      {
        Id: 103472,
        Text: 'DELETE Employees WHERE Employee_ID = 213',
      },
      {
        Id: 103473,
        Text: 'DELETE Employees.Employee_ID = 213',
      },
      {
        Id: 103474,
        Text: 'DELETE FROM Employees WHERE Employee_ID = 213',
      },
    ],
  },
  {
    Id: 24949,
    Text: 'Truy vấn nào dưới đây tìm mức lương nhỏ nhất của các nhân viên theo từng bộ phận?',
    Marks: 1,
    AnswerId: 103475,
    Answers: [
      {
        Id: 103475,
        Text: 'SELECT Department_ID, MIN(Salary) FROM Employees GROUP BY Department_ID',
      },
      {
        Id: 103476,
        Text: 'SELECT Department_ID, MIN(Salary) FROM Employees GROUP Department_ID',
      },
      {
        Id: 103477,
        Text: 'SELECT Department_ID, MIN(Salary) FROM Employees WHERE MIN(Salary)',
      },
      {
        Id: 103478,
        Text: 'SELECT Department_ID, MIN(Salary) FROM Employees.Department_ID',
      },
    ],
  },
  {
    Id: 24950,
    Text: 'Truy vấn nào dưới đây tìm mức lương nhỏ nhất của các nhân viên?',
    Marks: 1,
    AnswerId: 103481,
    Answers: [
      {
        Id: 103479,
        Text: 'SELECT SMALLEST(Salary) FROM Employees',
      },
      {
        Id: 103480,
        Text: 'SELECT MIN Salary FROM Employees',
      },
      {
        Id: 103481,
        Text: 'SELECT MIN(Salary) FROM Employees',
      },
      {
        Id: 103482,
        Text: 'SELECT SMALLEST Salary FROM Employees',
      },
    ],
  },
  {
    Id: 24951,
    Text: 'Câu lệnh SQL nào dưới đây thu hồi quyền UPDATE cho người dùng cơ sở dữ liệu HR ?',
    Marks: 1,
    AnswerId: 103486,
    Answers: [
      {
        Id: 103483,
        Text: 'REVOKE UPDATE ON HR',
      },
      {
        Id: 103484,
        Text: 'REVOKE UPDATE TO HR',
      },
      {
        Id: 103485,
        Text: 'REVOKE UPDATE INTO HR',
      },
      {
        Id: 103486,
        Text: 'REVOKE UPDATE FROM HR',
      },
    ],
  },
  {
    Id: 24952,
    Text: 'Câu lệnh SQL nào dưới đây để xóa bảng Khach_Hang khỏi cơ sở dữ liệu?',
    Marks: 1,
    AnswerId: 103488,
    Answers: [
      {
        Id: 103487,
        Text: 'TRUNCATE TABLE Khach_Hang IGNORE CONSTRAINTS;',
      },
      {
        Id: 103488,
        Text: 'DROP TABLE Khach_Hang CASCADE CONSTRAINTS;',
      },
      {
        Id: 103489,
        Text: 'DROP TABLE Khach_Hang IGNORE CONSTRAINTS;',
      },
      {
        Id: 103490,
        Text: 'ERASE TABLE Khach_Hang CASCADE CONSTRAINTS;',
      },
    ],
  },
  {
    Id: 24953,
    Text: 'Trong mệnh đề SELECT, hàm tìm giá trị lớn nhất trong cột là gì?',
    Marks: 1,
    AnswerId: 103493,
    Answers: [
      {
        Id: 103491,
        Text: 'LARGE',
      },
      {
        Id: 103492,
        Text: 'BEST',
      },
      {
        Id: 103493,
        Text: 'MAX',
      },
      {
        Id: 103494,
        Text: 'BIG',
      },
    ],
  },
  {
    Id: 24954,
    Text: 'Câu lệnh SQL nào dưới đây để thêm một ràng buộc trong đó cột MaKH là duy nhất?',
    Marks: 1,
    AnswerId: 103495,
    Answers: [
      {
        Id: 103495,
        Text: 'ALTER TABLE Khach_Hang ADD CONSTRAINT Khach_Hang_UNQ_MaKH UNIQUE (MaKH);',
      },
      {
        Id: 103496,
        Text: 'ALTER TABLE Khach_Hang NEW CONSTRAINT Khach_Hang_UNQ_MaKH UNIQUE (MaKH);',
      },
      {
        Id: 103497,
        Text: 'ALTER TABLE Khach_Hang INSERT CONSTRAINT Khach_Hang_UNQ_MaKH UNIQUE (MaKH);',
      },
      {
        Id: 103498,
        Text: 'ALTER TABLE Khach_Hang UNIQUE (MaKH);',
      },
    ],
  },
  {
    Id: 24955,
    Text: 'Câu lệnh nào dưới đây được sử dụng để thay đổi cấu trúc của một bảng trong cơ sở dữ liệu?',
    Marks: 1,
    AnswerId: 103502,
    Answers: [
      {
        Id: 103499,
        Text: 'REPAIR TABLE …',
      },
      {
        Id: 103500,
        Text: 'CHANGE TABLE …',
      },
      {
        Id: 103501,
        Text: 'REDO TABLE …',
      },
      {
        Id: 103502,
        Text: 'ALTER TABLE …',
      },
    ],
  },
]
export const GAME = [
  {
    Id: 25420,
    Text: 'Đâu không phải là đặc điểm của Unity?',
    Marks: 1,
    AnswerId: 105301,
    Answers: [
      {
        Id: 105299,
        Text: 'Lighting',
      },
      {
        Id: 105300,
        Text: 'Rendering',
      },
      {
        Id: 105301,
        Text: 'Assets',
      },
      {
        Id: 105302,
        Text: 'Physics',
      },
    ],
  },
  {
    Id: 25421,
    Text: 'Để hiển thị mọi thông tin về đối tượng đang làm việc một cách chi tiết, kể cả những Components được đính kèm và những thuộc tính của nó ta sử dụng mục nào sau đây?',
    Marks: 1,
    AnswerId: 105303,
    Answers: [
      {
        Id: 105303,
        Text: 'Inspector',
      },
      {
        Id: 105304,
        Text: 'Project',
      },
      {
        Id: 105305,
        Text: 'Hierachy',
      },
      {
        Id: 105306,
        Text: 'Game',
      },
    ],
  },
  {
    Id: 25422,
    Text: 'Thanh công cụ nào sau đây điều khiển việc bố trí giao diện màn hình?',
    Marks: 1,
    AnswerId: 105309,
    Answers: [
      {
        Id: 105307,
        Text: 'Control Object',
      },
      {
        Id: 105308,
        Text: 'Layers',
      },
      {
        Id: 105309,
        Text: 'Layout',
      },
      {
        Id: 105310,
        Text: 'TestGame',
      },
    ],
  },
  {
    Id: 25423,
    Text: 'Trên thanh công cụ Control Object, công cụ nào cho phép di chuyển đến một khu vực nào đó trong Scene bằng cách kéo thả chuột?',
    Marks: 1,
    AnswerId: 105312,
    Answers: [
      {
        Id: 105311,
        Text: 'Rotate tool',
      },
      {
        Id: 105312,
        Text: 'Hand tool',
      },
      {
        Id: 105313,
        Text: 'Scale tool',
      },
      {
        Id: 105314,
        Text: 'Move tool',
      },
    ],
  },
  {
    Id: 25424,
    Text: 'Networking không cung cấp tính năng nào sau đây?',
    Marks: 1,
    AnswerId: 105315,
    Answers: [
      {
        Id: 105315,
        Text: 'Physics',
      },
      {
        Id: 105316,
        Text: 'Realtime Networking',
      },
      {
        Id: 105317,
        Text: 'Remote Procedure Call',
      },
      {
        Id: 105318,
        Text: 'State Synchronization',
      },
    ],
  },
  {
    Id: 25425,
    Text: 'Phím E là phím tắt của công cụ nào sau đây?',
    Marks: 1,
    AnswerId: 105320,
    Answers: [
      {
        Id: 105319,
        Text: 'Hand tool',
      },
      {
        Id: 105320,
        Text: 'Rotate tool',
      },
      {
        Id: 105321,
        Text: 'Scale tool',
      },
      {
        Id: 105322,
        Text: 'Move tool',
      },
    ],
  },
  {
    Id: 25426,
    Text: 'Phím tắt nào sau đây được dùng để đổi tên đối tượng nhanh?',
    Marks: 1,
    AnswerId: 105323,
    Answers: [
      {
        Id: 105323,
        Text: 'F2',
      },
      {
        Id: 105324,
        Text: 'F',
      },
      {
        Id: 105325,
        Text: 'Cmd',
      },
      {
        Id: 105326,
        Text: 'Enter',
      },
    ],
  },
  {
    Id: 25427,
    Text: 'Phím R là phím tắt của công cụ nào sau đây?',
    Marks: 1,
    AnswerId: 105328,
    Answers: [
      {
        Id: 105327,
        Text: 'Hand tool',
      },
      {
        Id: 105328,
        Text: 'Scale tool',
      },
      {
        Id: 105329,
        Text: 'Move tool',
      },
      {
        Id: 105330,
        Text: 'Rotate tool',
      },
    ],
  },
  {
    Id: 25428,
    Text: 'Ngôn ngữ nào không được sử dụng trong Unity?',
    Marks: 1,
    AnswerId: 105334,
    Answers: [
      {
        Id: 105331,
        Text: 'Java script',
      },
      {
        Id: 105332,
        Text: 'C#',
      },
      {
        Id: 105333,
        Text: 'Boo',
      },
      {
        Id: 105334,
        Text: 'php',
      },
    ],
  },
  {
    Id: 25429,
    Text: 'Unity hỗ trợ tính năng nào cho phép tạo ra cây cối với hình dạng, kích thước và kiểu dáng đa dạng?',
    Marks: 1,
    AnswerId: 105338,
    Answers: [
      {
        Id: 105335,
        Text: 'Rendering',
      },
      {
        Id: 105336,
        Text: 'Programming',
      },
      {
        Id: 105337,
        Text: 'Physics',
      },
      {
        Id: 105338,
        Text: 'Terrains',
      },
    ],
  },
  {
    Id: 25430,
    Text: 'Để tạo mới một Folder ta vào menu nào sau đây?',
    Marks: 1,
    AnswerId: 105340,
    Answers: [
      {
        Id: 105339,
        Text: 'GameObject',
      },
      {
        Id: 105340,
        Text: 'Assets',
      },
      {
        Id: 105341,
        Text: 'Component',
      },
      {
        Id: 105342,
        Text: 'File',
      },
    ],
  },
  {
    Id: 25431,
    Text: 'Phím Q là phím tắt của công cụ nào sau đây?',
    Marks: 1,
    AnswerId: 105346,
    Answers: [
      {
        Id: 105343,
        Text: 'Scale tool',
      },
      {
        Id: 105344,
        Text: 'Move tool',
      },
      {
        Id: 105345,
        Text: 'Rotate tool',
      },
      {
        Id: 105346,
        Text: 'Hand tool',
      },
    ],
  },
  {
    Id: 25432,
    Text: 'Để tạo mới một Scene ta vào menu nào sau đây?',
    Marks: 1,
    AnswerId: 105350,
    Answers: [
      {
        Id: 105347,
        Text: 'Assets',
      },
      {
        Id: 105348,
        Text: 'GameObject',
      },
      {
        Id: 105349,
        Text: 'Edit',
      },
      {
        Id: 105350,
        Text: 'File',
      },
    ],
  },
  {
    Id: 25433,
    Text: 'Phím W là phím tắt của công cụ nào sau đây?',
    Marks: 1,
    AnswerId: 105352,
    Answers: [
      {
        Id: 105351,
        Text: 'Scale tool',
      },
      {
        Id: 105352,
        Text: 'Move tool',
      },
      {
        Id: 105353,
        Text: 'Hand tool',
      },
      {
        Id: 105354,
        Text: 'Rotate tool',
      },
    ],
  },
  {
    Id: 25434,
    Text: 'Unity có bao nhiêu đặc điểm nào?',
    Marks: 1,
    AnswerId: 105358,
    Answers: [
      {
        Id: 105355,
        Text: '8',
      },
      {
        Id: 105356,
        Text: '5',
      },
      {
        Id: 105357,
        Text: '6',
      },
      {
        Id: 105358,
        Text: '7',
      },
    ],
  },
  {
    Id: 25435,
    Text: 'Đâu là nơi chứa danh sách các GameObject trong scene?',
    Marks: 1,
    AnswerId: 105362,
    Answers: [
      {
        Id: 105359,
        Text: 'Project',
      },
      {
        Id: 105360,
        Text: 'Scene',
      },
      {
        Id: 105361,
        Text: 'Inspector',
      },
      {
        Id: 105362,
        Text: 'Hierachy',
      },
    ],
  },
  {
    Id: 25436,
    Text: 'Đâu không phải là giao diện của unity?',
    Marks: 1,
    AnswerId: 105365,
    Answers: [
      {
        Id: 105363,
        Text: 'Hierachy',
      },
      {
        Id: 105364,
        Text: 'Project',
      },
      {
        Id: 105365,
        Text: 'Physics',
      },
      {
        Id: 105366,
        Text: 'Inspector',
      },
    ],
  },
  {
    Id: 25437,
    Text: 'Mỗi game có thể có bao nhiêu scene?',
    Marks: 1,
    AnswerId: 105367,
    Answers: [
      {
        Id: 105367,
        Text: 'N',
      },
      {
        Id: 105368,
        Text: '2',
      },
      {
        Id: 105369,
        Text: '1',
      },
      {
        Id: 105370,
        Text: '0',
      },
    ],
  },
  {
    Id: 25438,
    Text: 'Để tạo mới một Thư mục Asset ta thực hiện trong cửa sổ nào sau đây?',
    Marks: 1,
    AnswerId: 105371,
    Answers: [
      {
        Id: 105371,
        Text: 'Project',
      },
      {
        Id: 105372,
        Text: 'Inspector',
      },
      {
        Id: 105373,
        Text: 'Hierachy',
      },
      {
        Id: 105374,
        Text: 'Scene',
      },
    ],
  },
  {
    Id: 25439,
    Text: 'Trong Scene, công cụ dùng để điều chỉnh tỷ lệ là công cụ nào?',
    Marks: 1,
    AnswerId: 105378,
    Answers: [
      {
        Id: 105375,
        Text: 'Hand tool',
      },
      {
        Id: 105376,
        Text: 'Rotate tool',
      },
      {
        Id: 105377,
        Text: 'Move tool',
      },
      {
        Id: 105378,
        Text: 'Scale tool',
      },
    ],
  },
  {
    Id: 25440,
    Text: 'Thông tin về vị trí, góc xoay và tỷ lệ của đối tượng được quy định trong thành phần nào?',
    Marks: 1,
    AnswerId: 105382,
    Answers: [
      {
        Id: 105379,
        Text: 'Physics',
      },
      {
        Id: 105380,
        Text: 'UI',
      },
      {
        Id: 105381,
        Text: 'Script',
      },
      {
        Id: 105382,
        Text: 'Transform',
      },
    ],
  },
  {
    Id: 25441,
    Text: 'Tất cả các tập tin, thư mục của các dự án Unity đều được lưu trữ trong một thư mục có tên là?',
    Marks: 1,
    AnswerId: 105384,
    Answers: [
      {
        Id: 105383,
        Text: 'GameObject',
      },
      {
        Id: 105384,
        Text: 'Assets',
      },
      {
        Id: 105385,
        Text: 'Scenes',
      },
      {
        Id: 105386,
        Text: 'ProjectSettings',
      },
    ],
  },
  {
    Id: 25442,
    Text: 'Để lựa chọn một Sprite Render cho Empty GameObject ta thực hiện như sau:',
    Marks: 1,
    AnswerId: 105390,
    Answers: [
      {
        Id: 105387,
        Text: 'Component/Rendering/Sprite Renderer',
      },
      {
        Id: 105388,
        Text: 'ObjectGame/Rendering/Sprite Renderer',
      },
      {
        Id: 105389,
        Text: 'Add Component/Sprite Renderer',
      },
      {
        Id: 105390,
        Text: 'Add Component/Rendering/Sprite Renderer',
      },
    ],
  },
  {
    Id: 25443,
    Text: 'Với kiểu nào, Unity editor sẽ tự động tìm những hình ảnh khác nhau hoặc có thể dùng chuột để chọn vùng ảnh mà ta cần cắt?',
    Marks: 1,
    AnswerId: 105392,
    Answers: [
      {
        Id: 105391,
        Text: 'Cả 2 phương án trên đều sai',
      },
      {
        Id: 105392,
        Text: 'Automatic',
      },
      {
        Id: 105393,
        Text: 'Cả 2 phương án trên đều đúng',
      },
      {
        Id: 105394,
        Text: 'Grid',
      },
    ],
  },
  {
    Id: 25444,
    Text: 'Trong Sprite Editor, khi click vào nút Slice ta có thể cắt ảnh theo mấy kiểu?',
    Marks: 1,
    AnswerId: 105397,
    Answers: [
      {
        Id: 105395,
        Text: '3',
      },
      {
        Id: 105396,
        Text: '4',
      },
      {
        Id: 105397,
        Text: '2',
      },
      {
        Id: 105398,
        Text: '5',
      },
    ],
  },
  {
    Id: 25445,
    Text: 'Đâu là một đối tượng chứa các đối tượng con khác, gắn liền với nhau?',
    Marks: 1,
    AnswerId: 105399,
    Answers: [
      {
        Id: 105399,
        Text: 'Parent object',
      },
      {
        Id: 105400,
        Text: 'Empty Object',
      },
      {
        Id: 105401,
        Text: '3D Object',
      },
      {
        Id: 105402,
        Text: 'Child object',
      },
    ],
  },
  {
    Id: 25446,
    Text: 'Ta có thể tạo những đối tượng GameObject nào sau đây?',
    Marks: 1,
    AnswerId: 105403,
    Answers: [
      {
        Id: 105403,
        Text: 'Tất cả các phương án đều đúng',
      },
      {
        Id: 105404,
        Text: 'UI',
      },
      {
        Id: 105405,
        Text: 'Light',
      },
      {
        Id: 105406,
        Text: 'Particle System',
      },
    ],
  },
  {
    Id: 25447,
    Text: 'Thứ tự sử dụng nào sau đây đúng?',
    Marks: 1,
    AnswerId: 105409,
    Answers: [
      {
        Id: 105407,
        Text: 'GameObject=\u003eProperties=\u003eComponents',
      },
      {
        Id: 105408,
        Text: 'Properties=\u003eComponents=\u003eGameObject',
      },
      {
        Id: 105409,
        Text: 'GameObject=\u003eComponents=\u003eProperties',
      },
      {
        Id: 105410,
        Text: 'Components=\u003eGameObject=\u003eProperties',
      },
    ],
  },
  {
    Id: 25448,
    Text: 'Trong Unity, đâu là một màn chơi riêng biệt hoặc một khu vực hay thành phần có trong nội dung của trò chơi?',
    Marks: 1,
    AnswerId: 105412,
    Answers: [
      {
        Id: 105411,
        Text: 'Assets',
      },
      {
        Id: 105412,
        Text: 'Scene',
      },
      {
        Id: 105413,
        Text: 'GameObject',
      },
      {
        Id: 105414,
        Text: 'Camera',
      },
    ],
  },
  {
    Id: 25449,
    Text: 'Để thực tạo mới một dự án Game 2D ta phải làm bước sau?',
    Marks: 1,
    AnswerId: 105415,
    Answers: [
      {
        Id: 105415,
        Text: 'Tất cả các phương án đều đúng',
      },
      {
        Id: 105416,
        Text: 'Nhập tên project',
      },
      {
        Id: 105417,
        Text: 'Chọn loại project 2D',
      },
      {
        Id: 105418,
        Text: 'Chọn đường dẫn lưu project',
      },
    ],
  },
  {
    Id: 25450,
    Text: 'Thành phần transform có những thuộc tính nào sau đây?',
    Marks: 1,
    AnswerId: 105419,
    Answers: [
      {
        Id: 105419,
        Text: 'Position, rotation, scale',
      },
      {
        Id: 105420,
        Text: 'Rotation',
      },
      {
        Id: 105421,
        Text: 'Position',
      },
      {
        Id: 105422,
        Text: 'Scale',
      },
    ],
  },
  {
    Id: 25451,
    Text: 'Trong Unity 2D có mấy loại Srite?',
    Marks: 1,
    AnswerId: 105426,
    Answers: [
      {
        Id: 105423,
        Text: '1',
      },
      {
        Id: 105424,
        Text: '3',
      },
      {
        Id: 105425,
        Text: '4',
      },
      {
        Id: 105426,
        Text: '2',
      },
    ],
  },
  {
    Id: 25452,
    Text: 'Đâu không phải là Object đặc biệt trong Unity?',
    Marks: 1,
    AnswerId: 105429,
    Answers: [
      {
        Id: 105427,
        Text: 'Particle',
      },
      {
        Id: 105428,
        Text: 'Camera',
      },
      {
        Id: 105429,
        Text: 'Cube',
      },
      {
        Id: 105430,
        Text: 'Light',
      },
    ],
  },
  {
    Id: 25453,
    Text: 'Đâu không phải là một Object cơ bản?',
    Marks: 1,
    AnswerId: 105432,
    Answers: [
      {
        Id: 105431,
        Text: 'Cube',
      },
      {
        Id: 105432,
        Text: 'Light',
      },
      {
        Id: 105433,
        Text: 'Plane',
      },
      {
        Id: 105434,
        Text: 'Sphere',
      },
    ],
  },
  {
    Id: 25454,
    Text: 'Đâu không phải là một thành phần của Game Object?',
    Marks: 1,
    AnswerId: 105438,
    Answers: [
      {
        Id: 105435,
        Text: 'Collision',
      },
      {
        Id: 105436,
        Text: 'Physical',
      },
      {
        Id: 105437,
        Text: 'Script',
      },
      {
        Id: 105438,
        Text: 'Assets',
      },
    ],
  },
  {
    Id: 25455,
    Text: 'Thuộc tính nào của GameObject để xác định và phân biệt các đối tượng với nhau, khi xử lý sự kiện...',
    Marks: 1,
    AnswerId: 105440,
    Answers: [
      {
        Id: 105439,
        Text: 'Light',
      },
      {
        Id: 105440,
        Text: 'Tag',
      },
      {
        Id: 105441,
        Text: 'Script',
      },
      {
        Id: 105442,
        Text: 'Camera',
      },
    ],
  },
  {
    Id: 25456,
    Text: 'Khi mới tạo một đối tượng Empty GameObject, thông số component nào sẽ mặc định có sẵn?',
    Marks: 1,
    AnswerId: 105444,
    Answers: [
      {
        Id: 105443,
        Text: 'Script',
      },
      {
        Id: 105444,
        Text: 'Transform',
      },
      {
        Id: 105445,
        Text: 'Camera',
      },
      {
        Id: 105446,
        Text: 'Rigidbody2D',
      },
    ],
  },
  {
    Id: 25457,
    Text: 'Trong Unity để sử dụng lại các đối tượng giống nhau có trong game bằng cách chỉ cần khởi tạo lại các giá trị vị trí, tỉ lệ biến dạng và góc quay từ một đối tượng ban đầu.',
    Marks: 1,
    AnswerId: 105448,
    Answers: [
      {
        Id: 105447,
        Text: 'Camera',
      },
      {
        Id: 105448,
        Text: 'Prefabs',
      },
      {
        Id: 105449,
        Text: 'Audio',
      },
      {
        Id: 105450,
        Text: 'Collision',
      },
    ],
  },
  {
    Id: 25458,
    Text: 'Nếu ta muốn sử dụng trọn vẹn nội dung của bức ảnh cho một đối tượng game, ta nên chọn kiểu sprite?',
    Marks: 1,
    AnswerId: 105453,
    Answers: [
      {
        Id: 105451,
        Text: 'Multiple Sprite',
      },
      {
        Id: 105452,
        Text: 'Không đáp án nào đúng',
      },
      {
        Id: 105453,
        Text: 'Single Sprite',
      },
      {
        Id: 105454,
        Text: 'Single Sprite và Multiple Sprite',
      },
    ],
  },
  {
    Id: 25459,
    Text: 'Với kiểu nào, Unity editor cắt ảnh theo dạng lưới là những ô hình chữ nhật với kích thước tuỳ chọn.',
    Marks: 1,
    AnswerId: 105456,
    Answers: [
      {
        Id: 105455,
        Text: 'Automatic',
      },
      {
        Id: 105456,
        Text: 'Grid',
      },
      {
        Id: 105457,
        Text: 'Không đáp án nào đúng',
      },
      {
        Id: 105458,
        Text: 'Grid và Automatic',
      },
    ],
  },
  {
    Id: 25460,
    Text: 'Trong thuộc tính Update Mode có bao nhiêu giá trị để lựa chọn',
    Marks: 1,
    AnswerId: 105460,
    Answers: [
      {
        Id: 105459,
        Text: '1',
      },
      {
        Id: 105460,
        Text: '3',
      },
      {
        Id: 105461,
        Text: '4',
      },
      {
        Id: 105462,
        Text: '2',
      },
    ],
  },
  {
    Id: 25461,
    Text: 'Trong thành phần Animator, thuộc tính nào định nghĩa xem animation có ảnh hưởng đến Transform của gameObject hay không và thường được sử dụng với các nhân vật 3D hình người',
    Marks: 1,
    AnswerId: 105466,
    Answers: [
      {
        Id: 105463,
        Text: 'Animate Physics',
      },
      {
        Id: 105464,
        Text: 'Avatar',
      },
      {
        Id: 105465,
        Text: 'Culling Mode',
      },
      {
        Id: 105466,
        Text: 'Apply Root Motion',
      },
    ],
  },
  {
    Id: 25462,
    Text: 'Để thiết lập điều kiện cho một transition, ta click chọn transition đó, sau đó thiết lập giá trị của các tham số ở cửa sổ?',
    Marks: 1,
    AnswerId: 105468,
    Answers: [
      {
        Id: 105467,
        Text: 'Game',
      },
      {
        Id: 105468,
        Text: 'Inspector',
      },
      {
        Id: 105469,
        Text: 'Hierachy',
      },
      {
        Id: 105470,
        Text: 'Animator',
      },
    ],
  },
  {
    Id: 25463,
    Text: 'Trong Animator components không có thuộc tính nào sau đây?',
    Marks: 1,
    AnswerId: 105474,
    Answers: [
      {
        Id: 105471,
        Text: 'Avatar',
      },
      {
        Id: 105472,
        Text: 'Update mode',
      },
      {
        Id: 105473,
        Text: 'Controller',
      },
      {
        Id: 105474,
        Text: 'Position',
      },
    ],
  },
  {
    Id: 25464,
    Text: 'Các tham số Parameter có thể có những kiểu nào?',
    Marks: 1,
    AnswerId: 105477,
    Answers: [
      {
        Id: 105475,
        Text: 'Float, Int',
      },
      {
        Id: 105476,
        Text: 'Float, Int, Bool',
      },
      {
        Id: 105477,
        Text: 'Float, Int, Bool, Trigger',
      },
      {
        Id: 105478,
        Text: 'Bool, Trigger',
      },
    ],
  },
  {
    Id: 25465,
    Text: 'Trong số kỹ thuật tạo animation, kỹ thuật nào người ta sẽ sử dụng một sprite cho một keyframe hành động?',
    Marks: 1,
    AnswerId: 105480,
    Answers: [
      {
        Id: 105479,
        Text: 'Cả hai kỹ thuật trên',
      },
      {
        Id: 105480,
        Text: 'Kỹ thuật Key Frame',
      },
      {
        Id: 105481,
        Text: 'Kỹ thuật Key Skeletal',
      },
      {
        Id: 105482,
        Text: 'Không kỹ thuật nào ở trên',
      },
    ],
  },
  {
    Id: 25466,
    Text: 'Trong Animator components, thuộc tính nào trong Update mode khi được check có nghĩa là animations sẽ được thực thi trong thời gian vật lý (thường thì thuộc tính này được dùng cho đối tượng có rigidbody).',
    Marks: 1,
    AnswerId: 105485,
    Answers: [
      {
        Id: 105483,
        Text: 'Nomal',
      },
      {
        Id: 105484,
        Text: 'Unscaled Time',
      },
      {
        Id: 105485,
        Text: 'Animate Physics',
      },
      {
        Id: 105486,
        Text: 'Always Animate',
      },
    ],
  },
  {
    Id: 25467,
    Text: 'Trong số kỹ thuật tạo animation, kỹ thuật nào sẽ tốn thời gian hơn, nhưng lại hiệu quả và đặc biệt là tiết kiệm thời gian hơn?',
    Marks: 1,
    AnswerId: 105490,
    Answers: [
      {
        Id: 105487,
        Text: 'Kỹ thuật Key Frame',
      },
      {
        Id: 105488,
        Text: 'Không kỹ thuật nào ở trên',
      },
      {
        Id: 105489,
        Text: 'Cả hai kỹ thuật trên',
      },
      {
        Id: 105490,
        Text: 'Kỹ thuật Key Skeletal',
      },
    ],
  },
  {
    Id: 25468,
    Text: 'Khi tạo animation kỹ thuật nào được dùng để chia đối tượng ra thành nhiều sprite, mỗi sprite là một bộ phận của đối tượng (giống như 1 khúc xương của bộ xương).',
    Marks: 1,
    AnswerId: 105492,
    Answers: [
      {
        Id: 105491,
        Text: 'Single',
      },
      {
        Id: 105492,
        Text: 'Skeletal',
      },
      {
        Id: 105493,
        Text: 'Multiple',
      },
      {
        Id: 105494,
        Text: 'Key Frame',
      },
    ],
  },
  {
    Id: 25469,
    Text: 'Trong những thuộc tính của Animator đâu là thuộc tính tạo bởi Unity chứa một hoặt nhiều trạng thái( state machines) dùng để chỉ định animation nào đang được chạy khi sence đang chạy, những trạng thái (state machines) này có thể nằm trên nhiều layers và sử',
    Marks: 1,
    AnswerId: 105498,
    Answers: [
      {
        Id: 105495,
        Text: 'Update mode',
      },
      {
        Id: 105496,
        Text: 'Culling Mode',
      },
      {
        Id: 105497,
        Text: 'Avatar',
      },
      {
        Id: 105498,
        Text: 'Controller',
      },
    ],
  },
  {
    Id: 25470,
    Text: 'Có bao nhiêu bước để thực hiện kỹ thuật Key Frame?',
    Marks: 1,
    AnswerId: 105499,
    Answers: [
      {
        Id: 105499,
        Text: '5',
      },
      {
        Id: 105500,
        Text: '4',
      },
      {
        Id: 105501,
        Text: '7',
      },
      {
        Id: 105502,
        Text: '6',
      },
    ],
  },
  {
    Id: 25471,
    Text: 'Một hình ảnh động mô tả một đối tượng nào đó trong game được gọi là?',
    Marks: 1,
    AnswerId: 105503,
    Answers: [
      {
        Id: 105503,
        Text: 'Animation',
      },
      {
        Id: 105504,
        Text: 'Sprite',
      },
      {
        Id: 105505,
        Text: 'Sound',
      },
      {
        Id: 105506,
        Text: 'Script',
      },
    ],
  },
  {
    Id: 25472,
    Text: 'Trong thuộc tính Culling Mode có bao nhiêu giá trị để lựa chọn',
    Marks: 1,
    AnswerId: 105509,
    Answers: [
      {
        Id: 105507,
        Text: '5',
      },
      {
        Id: 105508,
        Text: '3',
      },
      {
        Id: 105509,
        Text: '2',
      },
      {
        Id: 105510,
        Text: '4',
      },
    ],
  },
  {
    Id: 25473,
    Text: 'Có bao nhiêu kỹ thuật để tạo animation(cả 2D và 3D)',
    Marks: 1,
    AnswerId: 105513,
    Answers: [
      {
        Id: 105511,
        Text: '4',
      },
      {
        Id: 105512,
        Text: '3',
      },
      {
        Id: 105513,
        Text: '2',
      },
      {
        Id: 105514,
        Text: '5',
      },
    ],
  },
  {
    Id: 25474,
    Text: 'Đâu là kỹ thuật tạo animation?',
    Marks: 1,
    AnswerId: 105516,
    Answers: [
      {
        Id: 105515,
        Text: 'Key Frame',
      },
      {
        Id: 105516,
        Text: 'Key Frame và Skeletal',
      },
      {
        Id: 105517,
        Text: 'Skeletal',
      },
      {
        Id: 105518,
        Text: 'Single và Multiple',
      },
    ],
  },
  {
    Id: 25475,
    Text: 'Trong Animator components, thuộc tính nào trong Culling Mode khi được check có nghĩa là animations sẽ được chạy dù không render.',
    Marks: 1,
    AnswerId: 105520,
    Answers: [
      {
        Id: 105519,
        Text: 'Animate Physics',
      },
      {
        Id: 105520,
        Text: 'Always Animate',
      },
      {
        Id: 105521,
        Text: 'Nomal',
      },
      {
        Id: 105522,
        Text: 'Based On Renderens',
      },
    ],
  },
  {
    Id: 25476,
    Text: 'Để xuất hiện cửa sổ Animator, ta thực hiện như sau:',
    Marks: 1,
    AnswerId: 105525,
    Answers: [
      {
        Id: 105523,
        Text: 'Menu-File-Animator',
      },
      {
        Id: 105524,
        Text: 'Menu- Assets- Animator',
      },
      {
        Id: 105525,
        Text: 'Menu-Window-Animator',
      },
      {
        Id: 105526,
        Text: 'Menu- Edit- Animator',
      },
    ],
  },
  {
    Id: 25477,
    Text: 'Trong Animator components, thuộc tính nào trong Culling Mode chỉ định những animations chỉ được chạy khi chúng được render.',
    Marks: 1,
    AnswerId: 105530,
    Answers: [
      {
        Id: 105527,
        Text: 'Animate Physics',
      },
      {
        Id: 105528,
        Text: 'Always Animate',
      },
      {
        Id: 105529,
        Text: 'Nomal',
      },
      {
        Id: 105530,
        Text: 'Based On Renderens',
      },
    ],
  },
  {
    Id: 25478,
    Text: 'Để tạo một clip cho animation ta tạo trong:',
    Marks: 1,
    AnswerId: 105532,
    Answers: [
      {
        Id: 105531,
        Text: 'Animator',
      },
      {
        Id: 105532,
        Text: 'Animation editor',
      },
      {
        Id: 105533,
        Text: 'Scene',
      },
      {
        Id: 105534,
        Text: 'Hierachy',
      },
    ],
  },
  {
    Id: 25479,
    Text: 'Trong những giá trị sau, đâu không phải là giá trị lựa chọn của thuộc ính Update Mode',
    Marks: 1,
    AnswerId: 105538,
    Answers: [
      {
        Id: 105535,
        Text: 'Nomal',
      },
      {
        Id: 105536,
        Text: 'Animate Physics',
      },
      {
        Id: 105537,
        Text: 'Unscaled Time',
      },
      {
        Id: 105538,
        Text: 'Always Animate',
      },
    ],
  },
  {
    Id: 25480,
    Text: 'Hàm nào được gọi khi muốn thoát khỏi Game',
    Marks: 1,
    AnswerId: 105541,
    Answers: [
      {
        Id: 105539,
        Text: 'OnDestroy',
      },
      {
        Id: 105540,
        Text: 'Update',
      },
      {
        Id: 105541,
        Text: 'OnApplicationQuit',
      },
      {
        Id: 105542,
        Text: 'FixedUpdate',
      },
    ],
  },
  {
    Id: 25481,
    Text: 'Trong vòng đời của một script, thứ tự xảy ra các hàm như sau:',
    Marks: 1,
    AnswerId: 105544,
    Answers: [
      {
        Id: 105543,
        Text: 'Start() =\u003eWillRender =\u003e Update =\u003e OnDestroy',
      },
      {
        Id: 105544,
        Text: 'Start() =\u003e Update =\u003eWillRender =\u003e OnDestroy',
      },
      {
        Id: 105545,
        Text: 'Start() =\u003eWillRender =\u003e OnDestroy=\u003e Update',
      },
      {
        Id: 105546,
        Text: 'Start() =\u003eWillRender =\u003e Update =\u003e OnDestroy',
      },
    ],
  },
  {
    Id: 25482,
    Text: 'Hàm nào được gọi 1 lần đầu tiên sau khi khởi tạo đối tượng, trước khi vào Update?',
    Marks: 1,
    AnswerId: 105547,
    Answers: [
      {
        Id: 105547,
        Text: 'Start()',
      },
      {
        Id: 105548,
        Text: 'OnDestroy()',
      },
      {
        Id: 105549,
        Text: 'OnWillRenderObject()',
      },
      {
        Id: 105550,
        Text: 'Update()',
      },
    ],
  },
  {
    Id: 25483,
    Text: 'Để kiểm tra xem một phím được nhả ra, ta dùng hàm sau?',
    Marks: 1,
    AnswerId: 105553,
    Answers: [
      {
        Id: 105551,
        Text: 'Không đáp án nào đúng',
      },
      {
        Id: 105552,
        Text: 'GetKey(keyCode)',
      },
      {
        Id: 105553,
        Text: 'GetKeyUp(keyCode)',
      },
      {
        Id: 105554,
        Text: 'Input.GetKeyDown(keyCode)',
      },
    ],
  },
  {
    Id: 25484,
    Text: 'Để kiểm tra xem một phím được bấm, ta dùng hàm sau?',
    Marks: 1,
    AnswerId: 105556,
    Answers: [
      {
        Id: 105555,
        Text: 'GetKey(keyCode)',
      },
      {
        Id: 105556,
        Text: 'Input.GetKeyDown(keyCode)',
      },
      {
        Id: 105557,
        Text: 'GetKeyUp(keyCode)',
      },
      {
        Id: 105558,
        Text: 'Không đáp án nào đúng',
      },
    ],
  },
  {
    Id: 25485,
    Text: 'Để kiểm tra xem con chuột được thả ta dùng hàm sau?',
    Marks: 1,
    AnswerId: 105562,
    Answers: [
      {
        Id: 105559,
        Text: 'OnMouseDown, OnMouseUp, OnMouseDrag',
      },
      {
        Id: 105560,
        Text: 'OnMouseDown',
      },
      {
        Id: 105561,
        Text: 'OnMouseDrag',
      },
      {
        Id: 105562,
        Text: 'OnMouseUp',
      },
    ],
  },
  {
    Id: 25486,
    Text: 'Để tạo ra các bản sao nhanh của một đối tượng mà không cần thiết lập lại các giá trị khởi tạo của một đối tượng nào đó ngoài trừ các giá trị transform (vị trí, tỉ lệ, quay) ta dùng?',
    Marks: 1,
    AnswerId: 105566,
    Answers: [
      {
        Id: 105563,
        Text: 'Sound',
      },
      {
        Id: 105564,
        Text: 'Scene',
      },
      {
        Id: 105565,
        Text: 'Script',
      },
      {
        Id: 105566,
        Text: 'Prefabs',
      },
    ],
  },
  {
    Id: 25487,
    Text: 'Hàm nào được gọi liên tục sau mỗi frame, sau Start?',
    Marks: 1,
    AnswerId: 105570,
    Answers: [
      {
        Id: 105567,
        Text: 'Start()',
      },
      {
        Id: 105568,
        Text: 'OnWillRenderObject()',
      },
      {
        Id: 105569,
        Text: 'OnDestroy()',
      },
      {
        Id: 105570,
        Text: 'Update()',
      },
    ],
  },
  {
    Id: 25488,
    Text: 'Để kiểm tra xem con chuột đang được bấm ta dùng hàm sau?',
    Marks: 1,
    AnswerId: 105572,
    Answers: [
      {
        Id: 105571,
        Text: 'OnMouseDrag',
      },
      {
        Id: 105572,
        Text: 'OnMouseDown',
      },
      {
        Id: 105573,
        Text: 'OnMouseUp',
      },
      {
        Id: 105574,
        Text: 'OnMouseDown, OnMouseUp, OnMouseDrag',
      },
    ],
  },
  {
    Id: 25489,
    Text: 'Để tạo một Script ta thực hiện như sau?',
    Marks: 1,
    AnswerId: 105577,
    Answers: [
      {
        Id: 105575,
        Text: 'Create- Javascript',
      },
      {
        Id: 105576,
        Text: 'Create- Boo Scrilpt',
      },
      {
        Id: 105577,
        Text: 'Cả ba đáp án trên.',
      },
      {
        Id: 105578,
        Text: 'Create- C# Script',
      },
    ],
  },
  {
    Id: 25490,
    Text: 'Hàm sau đây, hàm nào dùng để xử lý sự kiện liên quan đến chuột?',
    Marks: 1,
    AnswerId: 105582,
    Answers: [
      {
        Id: 105579,
        Text: 'OnMouseUp',
      },
      {
        Id: 105580,
        Text: 'OnMouseDown',
      },
      {
        Id: 105581,
        Text: 'OnMouseDrag',
      },
      {
        Id: 105582,
        Text: 'OnMouseDown, OnMouseUp, OnMouseDrag',
      },
    ],
  },
  {
    Id: 25491,
    Text: 'Hàm nào trả về giá trị số thực trong khoảng -1..1 nếu có sự kiện các key up hoặc down được bấm (key dọc).',
    Marks: 1,
    AnswerId: 105584,
    Answers: [
      {
        Id: 105583,
        Text: 'Input.GetAxis ("Horizontal")',
      },
      {
        Id: 105584,
        Text: 'Input.GetAxis ("Vertical")',
      },
      {
        Id: 105585,
        Text: 'Input.Get ("Vertical")',
      },
      {
        Id: 105586,
        Text: 'Input.Get("Horizontal")',
      },
    ],
  },
  {
    Id: 25492,
    Text: 'Để tạo một prefab trong quá trình thực thi game, ta dùng hàm nào',
    Marks: 1,
    AnswerId: 105587,
    Answers: [
      {
        Id: 105587,
        Text: 'Instantiate(gameObject, Vector3, Quaternion)',
      },
      {
        Id: 105588,
        Text: 'gameObject.GetComponent()',
      },
      {
        Id: 105589,
        Text: 'Input.GetAxis ("Horizontal")',
      },
      {
        Id: 105590,
        Text: 'this.gameObject',
      },
    ],
  },
  {
    Id: 25493,
    Text: 'Hàm nào luôn chạy khi một scene bắt đầu, và đối với các đội tượng được tạo ra trong lúc đã load scene thì ko nên dùng hàm này?',
    Marks: 1,
    AnswerId: 105593,
    Answers: [
      {
        Id: 105591,
        Text: 'Start',
      },
      {
        Id: 105592,
        Text: 'Update',
      },
      {
        Id: 105593,
        Text: 'Awake',
      },
      {
        Id: 105594,
        Text: 'OnDestroy',
      },
    ],
  },
  {
    Id: 25494,
    Text: 'Hàm nào được gọi Được gọi khi đối tượng bị huỷ?',
    Marks: 1,
    AnswerId: 105598,
    Answers: [
      {
        Id: 105595,
        Text: 'Start()',
      },
      {
        Id: 105596,
        Text: 'Update()',
      },
      {
        Id: 105597,
        Text: 'OnWillRenderObject()',
      },
      {
        Id: 105598,
        Text: 'OnDestroy()',
      },
    ],
  },
  {
    Id: 25495,
    Text: 'Để kiểm tra xem một phím được giữ ta dùng hàm sau?',
    Marks: 1,
    AnswerId: 105601,
    Answers: [
      {
        Id: 105599,
        Text: 'Input.GetKeyDown(keyCode)',
      },
      {
        Id: 105600,
        Text: 'GetKeyUp(keyCode)',
      },
      {
        Id: 105601,
        Text: 'GetKey(keyCode)',
      },
      {
        Id: 105602,
        Text: 'Không đáp án nào đúng',
      },
    ],
  },
  {
    Id: 25496,
    Text: 'Hàm nào trả về giá trị số thực trong khoảng -1..1 nếu có sự kiện các key right hoặc left được bấm (key ngang).',
    Marks: 1,
    AnswerId: 105606,
    Answers: [
      {
        Id: 105603,
        Text: 'Input.Get("Horizontal")',
      },
      {
        Id: 105604,
        Text: 'Input.GetAxis ("Vertical")',
      },
      {
        Id: 105605,
        Text: 'Input.Get ("Vertical")',
      },
      {
        Id: 105606,
        Text: 'Input.GetAxis ("Horizontal")',
      },
    ],
  },
  {
    Id: 25497,
    Text: 'Để chỉ định script cho một đối tượng nào đó, ta chỉ cần chọn vào đối tượng, sau đó chọn:',
    Marks: 1,
    AnswerId: 105609,
    Answers: [
      {
        Id: 105607,
        Text: 'Inspector/Script/chọn file script',
      },
      {
        Id: 105608,
        Text: 'Menu/Script/Chọn file script',
      },
      {
        Id: 105609,
        Text: 'Inspector/Add Component/Script/chọn file script',
      },
      {
        Id: 105610,
        Text: 'Menu/Component/Script/Chọn file script',
      },
    ],
  },
  {
    Id: 25498,
    Text: 'Một Component dùng để chứa các mã điều khiển cho một đối tượng nào đó trong Game, được viết bằng C#, JavaScript hay Boo gọi là?',
    Marks: 1,
    AnswerId: 105612,
    Answers: [
      {
        Id: 105611,
        Text: 'Prefabs',
      },
      {
        Id: 105612,
        Text: 'Script',
      },
      {
        Id: 105613,
        Text: 'Scene',
      },
      {
        Id: 105614,
        Text: 'Sound',
      },
    ],
  },
  {
    Id: 25499,
    Text: 'Để kiểm tra xem con chuột được kéo ta dùng hàm sau?',
    Marks: 1,
    AnswerId: 105618,
    Answers: [
      {
        Id: 105615,
        Text: 'OnMouseDown, OnMouseUp, OnMouseDrag',
      },
      {
        Id: 105616,
        Text: 'OnMouseUp',
      },
      {
        Id: 105617,
        Text: 'OnMouseDown',
      },
      {
        Id: 105618,
        Text: 'OnMouseDrag',
      },
    ],
  },
  {
    Id: 25500,
    Text: 'Trong môi trường 3D, thông số nào sau đây không phải là thông số của Collider?',
    Marks: 1,
    AnswerId: 105621,
    Answers: [
      {
        Id: 105619,
        Text: 'Material',
      },
      {
        Id: 105620,
        Text: 'Is Trigger',
      },
      {
        Id: 105621,
        Text: 'Radius',
      },
      {
        Id: 105622,
        Text: 'Center',
      },
    ],
  },
  {
    Id: 25501,
    Text: 'Để quản lý về độ ma sát trượt, ma sát lăn, gia tốc trọng trường…Object cung cấp thành phần nào?',
    Marks: 1,
    AnswerId: 105626,
    Answers: [
      {
        Id: 105623,
        Text: 'Box Collider',
      },
      {
        Id: 105624,
        Text: 'Mesh Collider',
      },
      {
        Id: 105625,
        Text: 'Terrain Collider',
      },
      {
        Id: 105626,
        Text: 'Rigidbody2D',
      },
    ],
  },
  {
    Id: 25502,
    Text: 'Thuộc tính Interpolate trong thành phần Rigidbody 2D có mấy giá trị?',
    Marks: 1,
    AnswerId: 105629,
    Answers: [
      {
        Id: 105627,
        Text: '4',
      },
      {
        Id: 105628,
        Text: '2',
      },
      {
        Id: 105629,
        Text: '3',
      },
      {
        Id: 105630,
        Text: '1',
      },
    ],
  },
  {
    Id: 25503,
    Text: 'Thông số nào trong thành phần Collider (môi trường 2D) xác định loại va chạm là trigger hay collision?',
    Marks: 1,
    AnswerId: 105632,
    Answers: [
      {
        Id: 105631,
        Text: 'Material',
      },
      {
        Id: 105632,
        Text: 'Is Trigger',
      },
      {
        Id: 105633,
        Text: 'Used By Effector',
      },
      {
        Id: 105634,
        Text: 'Offset',
      },
    ],
  },
  {
    Id: 25504,
    Text: 'Trong môi trường 3D, thông số nào sau đây xác định bề mặt va chạm đề tạo hiệu ứng vật lý,  ví dụ như hiệu ứng đàn hồi cần bề mặt đàn hồi...?',
    Marks: 1,
    AnswerId: 105637,
    Answers: [
      {
        Id: 105635,
        Text: 'Tất cả các phương án đều sai',
      },
      {
        Id: 105636,
        Text: 'Is Trigger',
      },
      {
        Id: 105637,
        Text: 'Material',
      },
      {
        Id: 105638,
        Text: 'Center',
      },
    ],
  },
  {
    Id: 25505,
    Text: 'Kiểu Collider nào trong môi trường 3D mà không gian va chạm bao quanh Object là môt khối hình vuông?',
    Marks: 1,
    AnswerId: 105641,
    Answers: [
      {
        Id: 105639,
        Text: 'Capsule Collider',
      },
      {
        Id: 105640,
        Text: 'Wheel Collider',
      },
      {
        Id: 105641,
        Text: 'Box Collider',
      },
      {
        Id: 105642,
        Text: 'Sphere Collider',
      },
    ],
  },
  {
    Id: 25506,
    Text: 'Hàm nào sau đây thường dùng khi viết code xử ý va chạm?',
    Marks: 1,
    AnswerId: 105643,
    Answers: [
      {
        Id: 105643,
        Text: 'Tất cả các phương án đều đúng',
      },
      {
        Id: 105644,
        Text: 'OnTriggerEnter',
      },
      {
        Id: 105645,
        Text: 'OnTriggerExit',
      },
      {
        Id: 105646,
        Text: 'OnCollisionEnter',
      },
    ],
  },
  {
    Id: 25507,
    Text: 'Kiểu Collider nào trong môi trường 3D mà không gian va chạm bao quanh Object là môt khối hình dạng tương ứng với hình dạng của vật thể?',
    Marks: 1,
    AnswerId: 105647,
    Answers: [
      {
        Id: 105647,
        Text: 'Mesh Collider',
      },
      {
        Id: 105648,
        Text: 'Terrain Collider',
      },
      {
        Id: 105649,
        Text: 'Box Collider',
      },
      {
        Id: 105650,
        Text: 'Wheel Collider',
      },
    ],
  },
  {
    Id: 25508,
    Text: 'Trong thành phần Rigidbody2D, thuộc tính nào để giá trị nào quy định cách một Object dừng lại(chậm dần, rung…)',
    Marks: 1,
    AnswerId: 105651,
    Answers: [
      {
        Id: 105651,
        Text: 'Sleeping mode',
      },
      {
        Id: 105652,
        Text: 'Interpolate',
      },
      {
        Id: 105653,
        Text: 'Is Kinematic',
      },
      {
        Id: 105654,
        Text: 'Collision Detection',
      },
    ],
  },
  {
    Id: 25509,
    Text: 'Hàm sự kiện ứng với va chạm loại trigger, khi hai Collider thuộc loại trigger bắt đầu va chạm, hay nói cách khác là collider của object này đi vào collider của object kia là?',
    Marks: 1,
    AnswerId: 105657,
    Answers: [
      {
        Id: 105655,
        Text: 'FixedUpdate',
      },
      {
        Id: 105656,
        Text: 'OnCollisionEnter',
      },
      {
        Id: 105657,
        Text: 'OnTriggerEnter',
      },
      {
        Id: 105658,
        Text: 'OnTriggerExit',
      },
    ],
  },
  {
    Id: 25510,
    Text: 'Collider trong môi trường 2D, thông số nào sau đây không đúng?',
    Marks: 1,
    AnswerId: 105661,
    Answers: [
      {
        Id: 105659,
        Text: 'Material',
      },
      {
        Id: 105660,
        Text: 'Radius',
      },
      {
        Id: 105661,
        Text: 'Gravity Scale',
      },
      {
        Id: 105662,
        Text: 'Is Trigger',
      },
    ],
  },
  {
    Id: 25511,
    Text: 'Trong thành phần Rigidbody2D, thuộc tính nào xác định Mức độ ảnh hưởng của trọng lực lên Object ?',
    Marks: 1,
    AnswerId: 105663,
    Answers: [
      {
        Id: 105663,
        Text: 'Gravity Scale',
      },
      {
        Id: 105664,
        Text: 'Mass',
      },
      {
        Id: 105665,
        Text: 'Linear Drag',
      },
      {
        Id: 105666,
        Text: 'Angular Drag',
      },
    ],
  },
  {
    Id: 25512,
    Text: 'Trong thành phần Rigidbody2D, thuộc tính nào để làm cho Object sẽ không chịu ảnh hưởng của trọng lực cũng như các lực tác động lên nó?',
    Marks: 1,
    AnswerId: 105668,
    Answers: [
      {
        Id: 105667,
        Text: 'Fixed Angle',
      },
      {
        Id: 105668,
        Text: 'Is Kinematic',
      },
      {
        Id: 105669,
        Text: 'Angular Drag',
      },
      {
        Id: 105670,
        Text: 'Mass',
      },
    ],
  },
  {
    Id: 25513,
    Text: 'Trong thành phần Rigidbody2D, thuộc tính nào xác định sức cản không khi khi vật di chuyển?',
    Marks: 1,
    AnswerId: 105673,
    Answers: [
      {
        Id: 105671,
        Text: 'Gravity Scale',
      },
      {
        Id: 105672,
        Text: 'Mass',
      },
      {
        Id: 105673,
        Text: 'Linear Drag',
      },
      {
        Id: 105674,
        Text: 'Angular Drag',
      },
    ],
  },
  {
    Id: 25514,
    Text: 'Trong thành phần Rigidbody2D, thuộc tính nào xác định đối tượng xoay khi tác bị tác dụng của một lực moment xoay ?',
    Marks: 1,
    AnswerId: 105678,
    Answers: [
      {
        Id: 105675,
        Text: 'Is Kinematic',
      },
      {
        Id: 105676,
        Text: 'Angular Drag',
      },
      {
        Id: 105677,
        Text: 'Mass',
      },
      {
        Id: 105678,
        Text: 'Fixed Angle',
      },
    ],
  },
  {
    Id: 25515,
    Text: 'Khi vào Menu-Component-Physics, ta có thể chọn được bao nhiêu kiểu Collider?',
    Marks: 1,
    AnswerId: 105680,
    Answers: [
      {
        Id: 105679,
        Text: '4',
      },
      {
        Id: 105680,
        Text: '6',
      },
      {
        Id: 105681,
        Text: '5',
      },
      {
        Id: 105682,
        Text: '7',
      },
    ],
  },
  {
    Id: 25516,
    Text: 'Để thực hiện va chạm mà 2 đối tượng sẽ không đi xuyên qua nhau, khi đối tượng này gặp đối tượng kia thì sẽ bị cản lại, bật lại tùy theo tính chất vật lý mà chúng ta xét cho đối tượng. Ví dụ : quả bóng rơi từ trên cao rơi xuống sân cỏ sẽ bật lên …ta sử dụn',
    Marks: 1,
    AnswerId: 105684,
    Answers: [
      {
        Id: 105683,
        Text: 'Trigger',
      },
      {
        Id: 105684,
        Text: 'Collision',
      },
      {
        Id: 105685,
        Text: 'Không phải loại trên.',
      },
      {
        Id: 105686,
        Text: 'Collision và Trigger',
      },
    ],
  },
  {
    Id: 25517,
    Text: 'Trong Unity có mấy loại va chạm?',
    Marks: 1,
    AnswerId: 105689,
    Answers: [
      {
        Id: 105687,
        Text: '5',
      },
      {
        Id: 105688,
        Text: '3',
      },
      {
        Id: 105689,
        Text: '2',
      },
      {
        Id: 105690,
        Text: '4',
      },
    ],
  },
  {
    Id: 25518,
    Text: 'Khi vào Physics 2D, kiểu Collider nào mà không gian va chạm bao quanh Object là dạng hình tròn?',
    Marks: 1,
    AnswerId: 105693,
    Answers: [
      {
        Id: 105691,
        Text: 'Box Collider',
      },
      {
        Id: 105692,
        Text: 'Edge Collider',
      },
      {
        Id: 105693,
        Text: 'Circle Collider',
      },
      {
        Id: 105694,
        Text: 'Polygon Collider.',
      },
    ],
  },
  {
    Id: 25519,
    Text: 'Khi vào Menu-Component-Physics 2D, ta có thể chọn được bao nhiêu kiểu Collider?',
    Marks: 1,
    AnswerId: 105696,
    Answers: [
      {
        Id: 105695,
        Text: '2',
      },
      {
        Id: 105696,
        Text: '4',
      },
      {
        Id: 105697,
        Text: '5',
      },
      {
        Id: 105698,
        Text: '3',
      },
    ],
  },
  {
    Id: 25520,
    Text: 'Thuộc tính Rect Transform có những yếu tố sau?',
    Marks: 1,
    AnswerId: 105702,
    Answers: [
      {
        Id: 105699,
        Text: 'Anchor',
      },
      {
        Id: 105700,
        Text: 'Pivot',
      },
      {
        Id: 105701,
        Text: 'Position',
      },
      {
        Id: 105702,
        Text: 'Tất cả các phương án đều đúng',
      },
    ],
  },
  {
    Id: 25521,
    Text: 'Giá trị Transition Mode của thuộc tính Button Script gồm mấy tùy chọn?',
    Marks: 1,
    AnswerId: 105705,
    Answers: [
      {
        Id: 105703,
        Text: '5',
      },
      {
        Id: 105704,
        Text: '2',
      },
      {
        Id: 105705,
        Text: '4',
      },
      {
        Id: 105706,
        Text: '3',
      },
    ],
  },
  {
    Id: 25522,
    Text: 'Trong đối tượng thiết kế UI, có thể tạo những thành phần nào sau đây?',
    Marks: 1,
    AnswerId: 105710,
    Answers: [
      {
        Id: 105707,
        Text: 'Image',
      },
      {
        Id: 105708,
        Text: 'Text',
      },
      {
        Id: 105709,
        Text: 'Button',
      },
      {
        Id: 105710,
        Text: 'Tất cả các phương án đều đúng',
      },
    ],
  },
  {
    Id: 25523,
    Text: 'Thuộc tính nào của Canvas hỗ trợ bắt sự kiện',
    Marks: 1,
    AnswerId: 105713,
    Answers: [
      {
        Id: 105711,
        Text: 'Render Mode',
      },
      {
        Id: 105712,
        Text: 'Tất cả các phương án đều đúng',
      },
      {
        Id: 105713,
        Text: 'Graphic Raycast',
      },
      {
        Id: 105714,
        Text: 'Rect Transform',
      },
    ],
  },
  {
    Id: 25524,
    Text: 'Trong thiết kế UI, thành phần Text sử dụng thuộc tính nào để tự động điều chỉnh kích thước font chữ phù hợp.',
    Marks: 1,
    AnswerId: 105717,
    Answers: [
      {
        Id: 105715,
        Text: 'Line Spacing',
      },
      {
        Id: 105716,
        Text: 'Font Size',
      },
      {
        Id: 105717,
        Text: 'Best Fit',
      },
      {
        Id: 105718,
        Text: 'Alignment',
      },
    ],
  },
  {
    Id: 25525,
    Text: 'Thuộc tính Transition của đối tượng Scroll Bar có những chế độ chuyển tiếp nào?',
    Marks: 1,
    AnswerId: 105719,
    Answers: [
      {
        Id: 105719,
        Text: 'Animation, Sprit Swap,Color Tint,None',
      },
      {
        Id: 105720,
        Text: 'Color Tint, Sprit Swap',
      },
      {
        Id: 105721,
        Text: 'None, Sprit Swap',
      },
      {
        Id: 105722,
        Text: 'Sprit Swap',
      },
    ],
  },
  {
    Id: 25526,
    Text: 'Đâu không phải là thuộc tính của một component Image?',
    Marks: 1,
    AnswerId: 105726,
    Answers: [
      {
        Id: 105723,
        Text: 'Material',
      },
      {
        Id: 105724,
        Text: 'Source Image',
      },
      {
        Id: 105725,
        Text: 'Color',
      },
      {
        Id: 105726,
        Text: 'Position',
      },
    ],
  },
  {
    Id: 25527,
    Text: 'Ở Button Script của UI Button, để xử lý sự kiện khi click nút button ta sử dụng thành phần?',
    Marks: 1,
    AnswerId: 105730,
    Answers: [
      {
        Id: 105727,
        Text: 'Navigation',
      },
      {
        Id: 105728,
        Text: 'Transition',
      },
      {
        Id: 105729,
        Text: 'Interactable',
      },
      {
        Id: 105730,
        Text: 'On Click(Button)',
      },
    ],
  },
  {
    Id: 25528,
    Text: 'Ở thuộc tính Button Script của UI Button, khi chọn giá trị mặc định của Transition mode là ColorTint, ta có thể tác động bao nhiêu thông số giá trị?',
    Marks: 1,
    AnswerId: 105731,
    Answers: [
      {
        Id: 105731,
        Text: '7',
      },
      {
        Id: 105732,
        Text: '6',
      },
      {
        Id: 105733,
        Text: '8',
      },
      {
        Id: 105734,
        Text: '5',
      },
    ],
  },
  {
    Id: 25529,
    Text: 'Trên thành phần Rect Transform (khi thết kế UI) thuộc tính nào là điểm trụ của object, nếu bạn xoay UI thì nó sẽ xoay quanh điểm tâm.',
    Marks: 1,
    AnswerId: 105736,
    Answers: [
      {
        Id: 105735,
        Text: 'Rotation',
      },
      {
        Id: 105736,
        Text: 'Pivot',
      },
      {
        Id: 105737,
        Text: 'Scale',
      },
      {
        Id: 105738,
        Text: 'Anchor',
      },
    ],
  },
  {
    Id: 25530,
    Text: 'Trong thành phần Canvas, thuộc tính Render mode có bao nhiêu tùy chọn hiển thị cho canvas?',
    Marks: 1,
    AnswerId: 105739,
    Answers: [
      {
        Id: 105739,
        Text: '4',
      },
      {
        Id: 105740,
        Text: '5',
      },
      {
        Id: 105741,
        Text: '3',
      },
      {
        Id: 105742,
        Text: '2',
      },
    ],
  },
  {
    Id: 25531,
    Text: 'Để cho phép người dùng di chuyển một hình ảnh hay một khung nhìn nào đó mà kích thước nội dung của nó khá lớn vượt ra ngoài tầm khung nhìn, không thể xem hoàn, ta sử dụng đối tượng UI nào?',
    Marks: 1,
    AnswerId: 105746,
    Answers: [
      {
        Id: 105743,
        Text: 'Button',
      },
      {
        Id: 105744,
        Text: 'Text',
      },
      {
        Id: 105745,
        Text: 'Image',
      },
      {
        Id: 105746,
        Text: 'Scroll Bar',
      },
    ],
  },
  {
    Id: 25532,
    Text: 'Trên thành phần Rect Transform (khi thết kế UI) thuộc tính nào dùng để căn chỉnh tỷ lệ của một đối tượng trong Scene?',
    Marks: 1,
    AnswerId: 105749,
    Answers: [
      {
        Id: 105747,
        Text: 'Anchor',
      },
      {
        Id: 105748,
        Text: 'Position',
      },
      {
        Id: 105749,
        Text: 'Scale',
      },
      {
        Id: 105750,
        Text: 'Rotation',
      },
    ],
  },
  {
    Id: 25533,
    Text: 'Đối với các tuỳ chọn Render mode nào, thành phần Rect Transform sẽ được khoá lại và không thể tuỳ chỉnh?',
    Marks: 1,
    AnswerId: 105751,
    Answers: [
      {
        Id: 105751,
        Text: 'Screen Space- Overlay và Screen Space- Camera',
      },
      {
        Id: 105752,
        Text: 'Screen Space- Camera',
      },
      {
        Id: 105753,
        Text: 'Screen Space- Overlay',
      },
      {
        Id: 105754,
        Text: 'World Space',
      },
    ],
  },
  {
    Id: 25534,
    Text: 'Các thành phần chính trong một đối tượng UI Button?',
    Marks: 1,
    AnswerId: 105758,
    Answers: [
      {
        Id: 105755,
        Text: 'Rect Transform',
      },
      {
        Id: 105756,
        Text: 'Button Script',
      },
      {
        Id: 105757,
        Text: 'Image Script',
      },
      {
        Id: 105758,
        Text: 'Tất cả các phương án đều đúng',
      },
    ],
  },
  {
    Id: 25535,
    Text: 'Để tạo một đối tượng Image ta thực hiện như sau:',
    Marks: 1,
    AnswerId: 105762,
    Answers: [
      {
        Id: 105759,
        Text: 'Menu- GameObject-Image',
      },
      {
        Id: 105760,
        Text: 'Menu- UI-Image',
      },
      {
        Id: 105761,
        Text: 'Menu- Component- UI-Image',
      },
      {
        Id: 105762,
        Text: 'Menu- GameObject- UI-Image',
      },
    ],
  },
  {
    Id: 25536,
    Text: 'Thuộc tính Image Type của UI Image có những loại nào sau đây?',
    Marks: 1,
    AnswerId: 105766,
    Answers: [
      {
        Id: 105763,
        Text: 'Sliced và Title',
      },
      {
        Id: 105764,
        Text: 'Title và Fill',
      },
      {
        Id: 105765,
        Text: 'Simple và Sliced',
      },
      {
        Id: 105766,
        Text: 'Simple, Sliced, Title và Fill',
      },
    ],
  },
  {
    Id: 25537,
    Text: 'Để Canvas sẽ được vẽ lên layer cao nhất của màn hình và nằm trên mọi game object khác và Canvas này hoàn toàn không phụ thuộc vào camera ta chọn Render mode nào?',
    Marks: 1,
    AnswerId: 105769,
    Answers: [
      {
        Id: 105767,
        Text: 'Tất cả các phương án đều đúng',
      },
      {
        Id: 105768,
        Text: 'World Space',
      },
      {
        Id: 105769,
        Text: 'Screen Space- Overlay',
      },
      {
        Id: 105770,
        Text: 'Screen Space- Camera',
      },
    ],
  },
  {
    Id: 25538,
    Text: 'Trong UI Scroll bar, để cho phép sử dụng thành phần này hay không ta sử dụng thuộc tính?',
    Marks: 1,
    AnswerId: 105774,
    Answers: [
      {
        Id: 105771,
        Text: 'Transition',
      },
      {
        Id: 105772,
        Text: 'Navigation',
      },
      {
        Id: 105773,
        Text: 'Handle Rect',
      },
      {
        Id: 105774,
        Text: 'Interactable',
      },
    ],
  },
  {
    Id: 25539,
    Text: 'Thuộc tính nào của UI Image tham chiếu đến sprite để hiển thị hình ảnh?',
    Marks: 1,
    AnswerId: 105777,
    Answers: [
      {
        Id: 105775,
        Text: 'Material',
      },
      {
        Id: 105776,
        Text: 'Image Type',
      },
      {
        Id: 105777,
        Text: 'Source Image',
      },
      {
        Id: 105778,
        Text: 'Color',
      },
    ],
  },
  {
    Id: 25540,
    Text: 'Kỹ thuật tạo ra các hiệu ứng cháy nổ hay sương, khói... trong game được tạo từ đối tượng nào?',
    Marks: 1,
    AnswerId: 105781,
    Answers: [
      {
        Id: 105779,
        Text: 'Camera',
      },
      {
        Id: 105780,
        Text: 'Audio',
      },
      {
        Id: 105781,
        Text: 'Particle System',
      },
      {
        Id: 105782,
        Text: 'Light',
      },
    ],
  },
  {
    Id: 25541,
    Text: 'Trong những thuộc tính sau, đâu là thuộc tính của thành phần Particle System?',
    Marks: 1,
    AnswerId: 105786,
    Answers: [
      {
        Id: 105783,
        Text: 'Duration',
      },
      {
        Id: 105784,
        Text: 'Prewarm',
      },
      {
        Id: 105785,
        Text: 'Looping',
      },
      {
        Id: 105786,
        Text: 'Duration, Looping, Prewarm',
      },
    ],
  },
  {
    Id: 25542,
    Text: 'Thuộc tính nào của thành phần Camera chỉ chiều rộng của góc nhìn Camera. Được đo bằng độ dọc theo trục Local Y.?',
    Marks: 1,
    AnswerId: 105788,
    Answers: [
      {
        Id: 105787,
        Text: 'Size',
      },
      {
        Id: 105788,
        Text: 'Fiel of View',
      },
      {
        Id: 105789,
        Text: 'Clear Flags',
      },
      {
        Id: 105790,
        Text: 'Background',
      },
    ],
  },
  {
    Id: 25543,
    Text: 'Để sử dụng các đối tượng Particle có sẵn, ta thực hiện bước sau:',
    Marks: 1,
    AnswerId: 105791,
    Answers: [
      {
        Id: 105791,
        Text: 'Menu- Assets- Import Pakage- Particle',
      },
      {
        Id: 105792,
        Text: 'Menu- Assets- Import New Asset- Particle',
      },
      {
        Id: 105793,
        Text: 'Menu- Assets- Imort- Particle',
      },
      {
        Id: 105794,
        Text: 'Menu- Assets- Import Asset- Particle',
      },
    ],
  },
  {
    Id: 25544,
    Text: 'Thuộc tính nào của thành phần Sound cho phép chọn file âm thanh sử dụng cho Scene?',
    Marks: 1,
    AnswerId: 105796,
    Answers: [
      {
        Id: 105795,
        Text: 'Bypass Effects',
      },
      {
        Id: 105796,
        Text: 'Audio Clip',
      },
      {
        Id: 105797,
        Text: 'Priority',
      },
      {
        Id: 105798,
        Text: 'Mute',
      },
    ],
  },
  {
    Id: 25545,
    Text: 'Thuộc tính nào của thành phần Sound dùng thay đổi tốc độ của âm thanh?',
    Marks: 1,
    AnswerId: 105802,
    Answers: [
      {
        Id: 105799,
        Text: 'Mute',
      },
      {
        Id: 105800,
        Text: 'Priority',
      },
      {
        Id: 105801,
        Text: 'Spread',
      },
      {
        Id: 105802,
        Text: 'Pitch',
      },
    ],
  },
  {
    Id: 25546,
    Text: 'Để tạo một Scene mới, ta thực hiện như sau?',
    Marks: 1,
    AnswerId: 105803,
    Answers: [
      {
        Id: 105803,
        Text: 'Menu-File- New Scene',
      },
      {
        Id: 105804,
        Text: 'Menu- GameObject- New Scene',
      },
      {
        Id: 105805,
        Text: 'Menu- Component- New Scene',
      },
      {
        Id: 105806,
        Text: 'Menu- Assets- New Scene',
      },
    ],
  },
  {
    Id: 25547,
    Text: 'Để Buil một Scene mới tạo ta vào:',
    Marks: 1,
    AnswerId: 105809,
    Answers: [
      {
        Id: 105807,
        Text: 'Menu-File- Build Setting',
      },
      {
        Id: 105808,
        Text: 'Tất cả các phương án đều sai',
      },
      {
        Id: 105809,
        Text: 'Cả hai đáp án trên',
      },
      {
        Id: 105810,
        Text: 'Menu-File- Buil Run',
      },
    ],
  },
  {
    Id: 25548,
    Text: 'Thuộc tính nào của thành phần Sound: nếu enable, âm thanh sẽ được chạy ngay khi ra mắt Scene. Nếu để Disable, khi cần chạy âm thanh chúng ta phải gọi phương thức/chức năng Play() từ Script.?',
    Marks: 1,
    AnswerId: 105814,
    Answers: [
      {
        Id: 105811,
        Text: 'Priority',
      },
      {
        Id: 105812,
        Text: 'Volumn',
      },
      {
        Id: 105813,
        Text: 'Pitch',
      },
      {
        Id: 105814,
        Text: 'Play on Wake',
      },
    ],
  },
  {
    Id: 25549,
    Text: 'Để chuyển đổi màn chơi, ta dùng hàm sau:',
    Marks: 1,
    AnswerId: 105817,
    Answers: [
      {
        Id: 105815,
        Text: 'Application.Set("GameOver");',
      },
      {
        Id: 105816,
        Text: 'Application.SetLevel("GameOver");',
      },
      {
        Id: 105817,
        Text: 'Application.LoadLevel("GameOver");',
      },
      {
        Id: 105818,
        Text: 'Application.Load("GameOver");',
      },
    ],
  },
  {
    Id: 25550,
    Text: 'Hàm dựng (constructor) để là là kiểu nào để đảm bảo không tạo được đối tượng từ bên ngoài lớp, chỉ cho phép tạo đối tượng từ hàm GetInstance thôi.',
    Marks: 1,
    AnswerId: 105820,
    Answers: [
      {
        Id: 105819,
        Text: 'static',
      },
      {
        Id: 105820,
        Text: 'private',
      },
      {
        Id: 105821,
        Text: 'Tất cả các phương án đều đúng',
      },
      {
        Id: 105822,
        Text: 'public',
      },
    ],
  },
  {
    Id: 25551,
    Text: 'Để tạo hiệu ứng cháy nổ, sương, khói… trong Game ta vào đường dẫn sau:',
    Marks: 1,
    AnswerId: 105823,
    Answers: [
      {
        Id: 105823,
        Text: 'Menu- GameObject- Particle System',
      },
      {
        Id: 105824,
        Text: 'Menu- GameObject- Camera',
      },
      {
        Id: 105825,
        Text: 'Menu- GameObject- UI-Image',
      },
      {
        Id: 105826,
        Text: 'Menu- GameObject- Light',
      },
    ],
  },
  {
    Id: 25552,
    Text: 'Trong một Scene có thể có bao nhiêu Camera?',
    Marks: 1,
    AnswerId: 105829,
    Answers: [
      {
        Id: 105827,
        Text: '3',
      },
      {
        Id: 105828,
        Text: '2',
      },
      {
        Id: 105829,
        Text: 'Nhiều',
      },
      {
        Id: 105830,
        Text: '1',
      },
    ],
  },
  {
    Id: 25553,
    Text: 'Thuộc tính nào quy định khoảng cách xa nhất, gần nhất hiển thị được trong tầm nhìn của Camera.',
    Marks: 1,
    AnswerId: 105833,
    Answers: [
      {
        Id: 105831,
        Text: 'Background',
      },
      {
        Id: 105832,
        Text: 'Fiel of View',
      },
      {
        Id: 105833,
        Text: 'Clipping plane',
      },
      {
        Id: 105834,
        Text: 'Depth',
      },
    ],
  },
  {
    Id: 25554,
    Text: 'Thuộc tính nào của thành phần Camera xác định các bộ phận mà màn hình sẽ bị xóa. Thuận tiện khi sử dụng nhiều máy ảnh và để vẽ nhiều đổi tượng khác nhau. Không xóa nó sẽ hiển thị màu đen xì.',
    Marks: 1,
    AnswerId: 105837,
    Answers: [
      {
        Id: 105835,
        Text: 'Projection',
      },
      {
        Id: 105836,
        Text: 'Culling Mask',
      },
      {
        Id: 105837,
        Text: 'Clear Flags',
      },
      {
        Id: 105838,
        Text: 'Background',
      },
    ],
  },
  {
    Id: 25555,
    Text: 'Trong những thuộc tính sau, đâu không phải là thuộc tính của thành phần Particle System?',
    Marks: 1,
    AnswerId: 105839,
    Answers: [
      {
        Id: 105839,
        Text: 'Position',
      },
      {
        Id: 105840,
        Text: 'Looping',
      },
      {
        Id: 105841,
        Text: 'Prewarm',
      },
      {
        Id: 105842,
        Text: 'Duration',
      },
    ],
  },
  {
    Id: 25556,
    Text: 'Thuộc tính nào của thành phần Sound xác định độ ưu tiên của Audio Source trong số tất cả các Audio Source có trong Scene?',
    Marks: 1,
    AnswerId: 105843,
    Answers: [
      {
        Id: 105843,
        Text: 'Priority',
      },
      {
        Id: 105844,
        Text: 'Play on Wake',
      },
      {
        Id: 105845,
        Text: 'Pitch',
      },
      {
        Id: 105846,
        Text: 'Volumn',
      },
    ],
  },
  {
    Id: 25557,
    Text: 'Thuộc tính nào của thành phần Camera chỉ định các lớp đối tượng của bạn trong Inspector, cho phép hoặc bỏ qua các đối tượng được hiển thị trong Camera.',
    Marks: 1,
    AnswerId: 105850,
    Answers: [
      {
        Id: 105847,
        Text: 'Projection',
      },
      {
        Id: 105848,
        Text: 'Fiel of View',
      },
      {
        Id: 105849,
        Text: 'Size',
      },
      {
        Id: 105850,
        Text: 'Culling Mask',
      },
    ],
  },
  {
    Id: 25558,
    Text: 'Thuộc tính nào của thành phần Sound xác định bao nhiêu hiệu ứng âm thanh Dopper sẽ được áp dụng cho Audio Source(Nếu cài đặt là 0 thì sẽ không có hiệu ứng nào được áp dụng).?',
    Marks: 1,
    AnswerId: 105854,
    Answers: [
      {
        Id: 105851,
        Text: 'Min Distance',
      },
      {
        Id: 105852,
        Text: 'Spread',
      },
      {
        Id: 105853,
        Text: 'Pan Lever',
      },
      {
        Id: 105854,
        Text: 'Doppler Lever',
      },
    ],
  },
  {
    Id: 25559,
    Text: 'Để đối tượng sau khi xuất hiện 3 giây sẽ tự động hủy, ta dùng hàm sau?',
    Marks: 1,
    AnswerId: 105858,
    Answers: [
      {
        Id: 105855,
        Text: 'Exit(gameObject,3)',
      },
      {
        Id: 105856,
        Text: 'Cancel(gameObject, 3)',
      },
      {
        Id: 105857,
        Text: 'Delete(gameObject,3)',
      },
      {
        Id: 105858,
        Text: 'Destroy(gameObject,3)',
      },
    ],
  },
  {
    Id: 25560,
    Text: 'Phần mềm nào sau đây có thể sử dụng để viết cho Unity?',
    Marks: 1,
    AnswerId: 105860,
    Answers: [
      {
        Id: 105859,
        Text: 'UnityScript Editor',
      },
      {
        Id: 105860,
        Text: 'Tất cả các phương án đều đúng',
      },
      {
        Id: 105861,
        Text: 'Notepad, MS word',
      },
      {
        Id: 105862,
        Text: 'MS .Net',
      },
    ],
  },
  {
    Id: 25561,
    Text: 'Trong C#, cấu trúc đầy đủ khi khai báo một method là?',
    Marks: 1,
    AnswerId: 105863,
    Answers: [
      {
        Id: 105863,
        Text: 'private/public/static ([par1,par2]) { … }',
      },
      {
        Id: 105864,
        Text: 'private/public/static { … }',
      },
      {
        Id: 105865,
        Text: 'private/public/static ([par1,par2]) { … }',
      },
      {
        Id: 105866,
        Text: 'Tất cả các phương án đều sai',
      },
    ],
  },
  {
    Id: 25562,
    Text: 'Để tối ưu hóa mã nguồn, ta sử dụng các thành phần của GameObject thông qua biến nào?',
    Marks: 1,
    AnswerId: 105869,
    Answers: [
      {
        Id: 105867,
        Text: 'public',
      },
      {
        Id: 105868,
        Text: 'Tất cả các phương án đều sai',
      },
      {
        Id: 105869,
        Text: 'private',
      },
      {
        Id: 105870,
        Text: 'public và private',
      },
    ],
  },
  {
    Id: 25563,
    Text: 'Unity hỗ trợ bao nhiêu ngôn ngữ?',
    Marks: 1,
    AnswerId: 105873,
    Answers: [
      {
        Id: 105871,
        Text: '5',
      },
      {
        Id: 105872,
        Text: '4',
      },
      {
        Id: 105873,
        Text: '3',
      },
      {
        Id: 105874,
        Text: '2',
      },
    ],
  },
  {
    Id: 25564,
    Text: 'Trong JavaScritp, hàm nào dùng để tìm ra số lớn nhất?',
    Marks: 1,
    AnswerId: 105877,
    Answers: [
      {
        Id: 105875,
        Text: 'Math.random()',
      },
      {
        Id: 105876,
        Text: 'Math.round(1.5)',
      },
      {
        Id: 105877,
        Text: 'Math.max(1,-2)',
      },
      {
        Id: 105878,
        Text: 'Math.pow(-3, 2)',
      },
    ],
  },
  {
    Id: 25565,
    Text: 'Trong JavaScript, khi khai báo một Class, để kế thừa từ MonoBehavior, ta dùng từ khóa nào?',
    Marks: 1,
    AnswerId: 105881,
    Answers: [
      {
        Id: 105879,
        Text: 'private',
      },
      {
        Id: 105880,
        Text: 'inherit',
      },
      {
        Id: 105881,
        Text: 'extend',
      },
      {
        Id: 105882,
        Text: 'class',
      },
    ],
  },
  {
    Id: 25566,
    Text: 'Đâu là cấu trúc khai báo biến đầy đủ dùng trong JavaScript?',
    Marks: 1,
    AnswerId: 105883,
    Answers: [
      {
        Id: 105883,
        Text: 'var [= ];',
      },
      {
        Id: 105884,
        Text: 'var [: Type] [= ];',
      },
      {
        Id: 105885,
        Text: 'private/public/static [=];',
      },
      {
        Id: 105886,
        Text: 'private/public/static [=];',
      },
    ],
  },
  {
    Id: 25567,
    Text: 'Khi click chuột trái thì sự kiện nào được gọi?',
    Marks: 1,
    AnswerId: 105887,
    Answers: [
      {
        Id: 105887,
        Text: 'OnMouseDown',
      },
      {
        Id: 105888,
        Text: 'Awake',
      },
      {
        Id: 105889,
        Text: 'OnMouseUp',
      },
      {
        Id: 105890,
        Text: 'OnMouseOver',
      },
    ],
  },
  {
    Id: 25568,
    Text: 'Đâu là cách khai báo biến private nào là của C#?',
    Marks: 1,
    AnswerId: 105891,
    Answers: [
      {
        Id: 105891,
        Text: 'public class example : MonoBehaviour { private float memberVariable = 0.0F;}',
      },
      {
        Id: 105892,
        Text: 'Tất cả các phương án đều sai',
      },
      {
        Id: 105893,
        Text: 'private var memberVariable = 0.0;',
      },
      {
        Id: 105894,
        Text: 'class example(MonoBehaviour): private memberVariable as single = 0.0F',
      },
    ],
  },
  {
    Id: 25569,
    Text: 'Tạo một biến global bằng cách sử dụng từ khóa nào?',
    Marks: 1,
    AnswerId: 105896,
    Answers: [
      {
        Id: 105895,
        Text: 'Private',
      },
      {
        Id: 105896,
        Text: 'Static',
      },
      {
        Id: 105897,
        Text: 'Public',
      },
      {
        Id: 105898,
        Text: 'Tất cả các phương án đều sai',
      },
    ],
  },
  {
    Id: 25570,
    Text: 'Trong lớp Component, đâu là phương thức có thể sử dụng?',
    Marks: 1,
    AnswerId: 105900,
    Answers: [
      {
        Id: 105899,
        Text: 'GetComponent',
      },
      {
        Id: 105900,
        Text: 'Tất cả các phương án đều đúng',
      },
      {
        Id: 105901,
        Text: 'SendMessage',
      },
      {
        Id: 105902,
        Text: 'CompareTag',
      },
    ],
  },
  {
    Id: 25571,
    Text: 'Trong JavaScritp, để làm tròn lên một số ta dùng hàm nào?',
    Marks: 1,
    AnswerId: 105903,
    Answers: [
      {
        Id: 105903,
        Text: 'Math.round(1.5)',
      },
      {
        Id: 105904,
        Text: 'Math.pow(-3, 2)',
      },
      {
        Id: 105905,
        Text: 'Math.random()',
      },
      {
        Id: 105906,
        Text: 'Math.floor(1.9)',
      },
    ],
  },
  {
    Id: 25572,
    Text: 'Trong JavaScritp, để lấy số ngẫu nhiên ta dùng hàm nào?',
    Marks: 1,
    AnswerId: 105910,
    Answers: [
      {
        Id: 105907,
        Text: 'Math.round(1.5)',
      },
      {
        Id: 105908,
        Text: 'Math.max(1,-2)',
      },
      {
        Id: 105909,
        Text: 'Math.pow(-3, 2)',
      },
      {
        Id: 105910,
        Text: 'Math.random()',
      },
    ],
  },
  {
    Id: 25573,
    Text: 'Những đoạn code thuộc phương thức này sẽ được thực thi khi chuột của người chơi click vào một đối tượng có tích hợp thành phần GUIElement hoặc Collider',
    Marks: 1,
    AnswerId: 105913,
    Answers: [
      {
        Id: 105911,
        Text: 'OnCollisionEnter()',
      },
      {
        Id: 105912,
        Text: 'Awake()',
      },
      {
        Id: 105913,
        Text: 'OnMouseDown()',
      },
      {
        Id: 105914,
        Text: 'Start()',
      },
    ],
  },
  {
    Id: 25574,
    Text: 'Trong những loại biến sau, loại nào không phải của C#?',
    Marks: 1,
    AnswerId: 105916,
    Answers: [
      {
        Id: 105915,
        Text: 'Boolean',
      },
      {
        Id: 105916,
        Text: 'Undefined',
      },
      {
        Id: 105917,
        Text: 'String',
      },
      {
        Id: 105918,
        Text: 'Int',
      },
    ],
  },
  {
    Id: 25575,
    Text: 'Đâu là khai báo mảng nhiều chiều trong C#?',
    Marks: 1,
    AnswerId: 105922,
    Answers: [
      {
        Id: 105919,
        Text: 'int[][] arrInt = new int[2][3]',
      },
      {
        Id: 105920,
        Text: 'Tất cả các phương án đều sai',
      },
      {
        Id: 105921,
        Text: 'var a = new int[16,16];',
      },
      {
        Id: 105922,
        Text: 'int[,] = new int[16,16];',
      },
    ],
  },
  {
    Id: 25576,
    Text: 'Đâu là cấu trúc khai báo biến đầy đủ dùng trong JavaScript?',
    Marks: 1,
    AnswerId: 105926,
    Answers: [
      {
        Id: 105923,
        Text: 'var [= ];',
      },
      {
        Id: 105924,
        Text: 'private/public/static [=];',
      },
      {
        Id: 105925,
        Text: 'private/public/static [=];',
      },
      {
        Id: 105926,
        Text: 'var [: Type] [= ];',
      },
    ],
  },
  {
    Id: 25577,
    Text: 'Đâu là cách khai báo biến static nào là của JavaScript?',
    Marks: 1,
    AnswerId: 105929,
    Answers: [
      {
        Id: 105927,
        Text: 'Tất cả các phương án đều sai',
      },
      {
        Id: 105928,
        Text: 'class example(MonoBehaviour): static globalVariable as single',
      },
      {
        Id: 105929,
        Text: 'static var globalVariable = 0.0;',
      },
      {
        Id: 105930,
        Text: 'public class example : MonoBehaviour { static float globalVariable = 0.0F;}',
      },
    ],
  },
  {
    Id: 25578,
    Text: 'Trong các khai báo biến trong JavaScript sau, khai báo nào không đúng?',
    Marks: 1,
    AnswerId: 105933,
    Answers: [
      {
        Id: 105931,
        Text: 'var name = "String variable"',
      },
      {
        Id: 105932,
        Text: 'var n1;',
      },
      {
        Id: 105933,
        Text: 'var:String="String variable"',
      },
      {
        Id: 105934,
        Text: 'var n:int =0;',
      },
    ],
  },
  {
    Id: 25579,
    Text: 'Quy định đặt tên Class phải đặt giống tên file .cs được quy định trong ngôn ngữ nào?',
    Marks: 1,
    AnswerId: 105937,
    Answers: [
      {
        Id: 105935,
        Text: 'Boo',
      },
      {
        Id: 105936,
        Text: 'Tất cả các phương án đều sai',
      },
      {
        Id: 105937,
        Text: 'C#',
      },
      {
        Id: 105938,
        Text: 'JavaScript',
      },
    ],
  },
]
export const HTCS = [
  {
    Id: 25820,
    Text: 'Sử dụng phần tử nào của HTML5 để xem phim trên Web?',
    Marks: 1,
    AnswerId: 106849,
    Answers: [
      {
        Id: 106846,
        Text: '\u003cyoutube\u003e',
      },
      {
        Id: 106847,
        Text: '\u003cmedia\u003e',
      },
      {
        Id: 106848,
        Text: '\u003cclip\u003e',
      },
      {
        Id: 106849,
        Text: '\u003cvideo\u003e',
      },
      {
        Id: 106850,
        Text: '\u003ccanvas\u003e',
      },
      {
        Id: 106851,
        Text: '\u003cfilm\u003e',
      },
    ],
  },
  {
    Id: 25821,
    Text: 'Trong HTML5, chúng ta sử dụng thẻ mới nào để tạo ra nội dung cho vùng Header của trang?',
    Marks: 1,
    AnswerId: 106857,
    Answers: [
      {
        Id: 106852,
        Text: '\u003cdiv class="head"\u003e\u003c/div\u003e',
      },
      {
        Id: 106853,
        Text: '\u003cdiv class="header"\u003e\u003c/div\u003e',
      },
      {
        Id: 106854,
        Text: '\u003chead\u003e\u003c/head\u003e',
      },
      {
        Id: 106855,
        Text: '\u003cdiv id="head"\u003e\u003c/div\u003e',
      },
      {
        Id: 106856,
        Text: '\u003cdiv id="header"\u003e\u003c/div\u003e',
      },
      {
        Id: 106857,
        Text: '\u003cheader\u003e\u003c/header\u003e',
      },
    ],
  },
  {
    Id: 25822,
    Text: 'Muốn thực hiện vẽ trong HTML5, phải sử dụng phần tử nào sau đây?',
    Marks: 1,
    AnswerId: 106862,
    Answers: [
      {
        Id: 106858,
        Text: '\u003cp\u003e',
      },
      {
        Id: 106859,
        Text: '\u003caudio\u003e',
      },
      {
        Id: 106860,
        Text: '\u003cdraw\u003e',
      },
      {
        Id: 106861,
        Text: '\u003cvideo\u003e',
      },
      {
        Id: 106862,
        Text: '\u003ccanvas\u003e',
      },
      {
        Id: 106863,
        Text: '\u003cdiv\u003e',
      },
    ],
  },
  {
    Id: 25823,
    Text: 'Đâu là công nghệ mới của HTML5 cho phép người dùng lưu trữ dữ liệu ngay trên trình duyệt Web?',
    Marks: 1,
    AnswerId: 106865,
    Answers: [
      {
        Id: 106864,
        Text: 'Web 2.0',
      },
      {
        Id: 106865,
        Text: 'Web storage',
      },
      {
        Id: 106866,
        Text: 'Web server',
      },
      {
        Id: 106867,
        Text: 'Web code',
      },
      {
        Id: 106868,
        Text: 'Web 1.0',
      },
      {
        Id: 106869,
        Text: 'Web design',
      },
    ],
  },
  {
    Id: 25824,
    Text: 'Phần tử transitions thuộc công nghệ nào sau đây?',
    Marks: 1,
    AnswerId: 106872,
    Answers: [
      {
        Id: 106870,
        Text: 'HTML5',
      },
      {
        Id: 106871,
        Text: 'HTML4',
      },
      {
        Id: 106872,
        Text: 'CSS3',
      },
      {
        Id: 106873,
        Text: 'CSS2',
      },
      {
        Id: 106874,
        Text: 'CSS4',
      },
      {
        Id: 106875,
        Text: 'HTML6',
      },
    ],
  },
  {
    Id: 25825,
    Text: 'Với phiên bản nào của HTML bạn có thể xem video và nghe nhạc trực tiếp trên Web mà không cần plug in?',
    Marks: 1,
    AnswerId: 106881,
    Answers: [
      {
        Id: 106876,
        Text: 'HTML8',
      },
      {
        Id: 106877,
        Text: 'HTML6',
      },
      {
        Id: 106878,
        Text: 'HTML4',
      },
      {
        Id: 106879,
        Text: 'HTML7',
      },
      {
        Id: 106880,
        Text: 'HTML3',
      },
      {
        Id: 106881,
        Text: 'HTML5',
      },
    ],
  },
  {
    Id: 25826,
    Text: 'Đâu là từ viết tắt của Giao diện lập trình ứng dụng?',
    Marks: 1,
    AnswerId: 106883,
    Answers: [
      {
        Id: 106882,
        Text: 'AFS',
      },
      {
        Id: 106883,
        Text: 'API',
      },
      {
        Id: 106884,
        Text: 'AKT',
      },
      {
        Id: 106885,
        Text: 'ASK',
      },
      {
        Id: 106886,
        Text: 'ATK',
      },
      {
        Id: 106887,
        Text: 'APP',
      },
    ],
  },
  {
    Id: 25827,
    Text: 'Với máy tính không có font của web, thì giải pháp nào có thể khắc phục được điều này?',
    Marks: 1,
    AnswerId: 106891,
    Answers: [
      {
        Id: 106888,
        Text: 'Sử dụng lệnh @font-size để liên kết tới nơi chứa font và trình duyệt nhận biết được',
      },
      {
        Id: 106889,
        Text: 'Sử dụng lệnh @font-embed để liên kết tới nơi chứa font và trình duyệt nhận biết được',
      },
      {
        Id: 106890,
        Text: 'Sử dụng lệnh @font-style để liên kết tới nơi chứa font và trình duyệt nhận biết được',
      },
      {
        Id: 106891,
        Text: 'Sử dụng lệnh @font-face để liên kết tới nơi chứa font và trình duyệt nhận biết được',
      },
      {
        Id: 106892,
        Text: 'Sử dụng lệnh @font-name để liên kết tới nơi chứa font và trình duyệt nhận biết được',
      },
      {
        Id: 106893,
        Text: 'Sử dụng lệnh @font-type để liên kết tới nơi chứa font và trình duyệt nhận biết được',
      },
    ],
  },
  {
    Id: 25828,
    Text: 'Phát biểu nào sau đây về HTML5 là đúng?',
    Marks: 1,
    AnswerId: 106899,
    Answers: [
      {
        Id: 106894,
        Text: 'HTML5 đã thêm thẻ youtube',
      },
      {
        Id: 106895,
        Text: 'So với HTML4, HTML5 không có các thẻ mới',
      },
      {
        Id: 106896,
        Text: 'HTML5 đã loại bỏ JavaScript',
      },
      {
        Id: 106897,
        Text: 'HTML5 không hỗ trợ các thuộc tính CSS3',
      },
      {
        Id: 106898,
        Text: 'HTML5 ra đời năm 2006',
      },
      {
        Id: 106899,
        Text: 'HTML5 hỗ trợ đầy đủ CSS3',
      },
    ],
  },
  {
    Id: 25829,
    Text: 'Phần tử canvas được sử dụng với mục đích?',
    Marks: 1,
    AnswerId: 106904,
    Answers: [
      {
        Id: 106900,
        Text: 'Tạo ra các phần tử có thể kéo thả',
      },
      {
        Id: 106901,
        Text: 'Thao tác với dữ liệu trong cơ sở dữ liệu MySQL',
      },
      {
        Id: 106902,
        Text: 'Xem video',
      },
      {
        Id: 106903,
        Text: 'Hiển thị bản ghi trong cơ sở dữ liệu',
      },
      {
        Id: 106904,
        Text: 'Vẽ đồ họa',
      },
      {
        Id: 106905,
        Text: 'Chơi nhạc',
      },
    ],
  },
  {
    Id: 25830,
    Text: 'Đâu là cách khai báo đúng về DOCTYPE trong HTML5?',
    Marks: 1,
    AnswerId: 106907,
    Answers: [
      {
        Id: 106906,
        Text: '\u003c!DOCTYPE html PUBLIC \u003e',
      },
      {
        Id: 106907,
        Text: '\u003c!DOCTYPE html\u003e',
      },
      {
        Id: 106908,
        Text: '\u003c!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 5.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"\u003e',
      },
      {
        Id: 106909,
        Text: '\u003c!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" \u003e',
      },
      {
        Id: 106910,
        Text: '\u003c!DOCTYPE html5\u003e',
      },
    ],
  },
  {
    Id: 25831,
    Text: 'Đâu là phát biểu đúng về phần tử \u003cheader\u003e trong HTML5?',
    Marks: 1,
    AnswerId: 106912,
    Answers: [
      {
        Id: 106911,
        Text: 'Phần tử \u003cheader\u003e được sử dụng tối đa 5 lần trên trang',
      },
      {
        Id: 106912,
        Text: 'Phần tử \u003cheader\u003e được sử dụng nhiều lần trên trang',
      },
      {
        Id: 106913,
        Text: 'Phần tử \u003cheader\u003e được sử dụng tối đa 2 lần trên trang',
      },
      {
        Id: 106914,
        Text: 'Phần tử \u003cheader\u003e bắt buộc phải được khai báo ở phía dưới cùng đoạn mã trang',
      },
      {
        Id: 106915,
        Text: 'Phần tử \u003cheader\u003e được sử dụng tối đa 3 lần trên trang',
      },
      {
        Id: 106916,
        Text: 'Phần tử \u003cheader\u003e chỉ được sử dụng một lần trên trang',
      },
    ],
  },
  {
    Id: 25832,
    Text: 'Đâu là cách khai báo đúng trong HTML5 đối với điều khiển cho phép người dùng chọn ngày và thời gian?',
    Marks: 1,
    AnswerId: 106918,
    Answers: [
      {
        Id: 106917,
        Text: '\u003cinput font="datetime" name="bdaytime"\u003e',
      },
      {
        Id: 106918,
        Text: '\u003cinput type="datetime" name="bdaytime"\u003e',
      },
      {
        Id: 106919,
        Text: '\u003cinput style="datetime" name="bdaytime"\u003e',
      },
      {
        Id: 106920,
        Text: '\u003cinput id="datetime" name="bdaytime"\u003e',
      },
      {
        Id: 106921,
        Text: '\u003cinput for="datetime" name="bdaytime"\u003e',
      },
      {
        Id: 106922,
        Text: '\u003cinput format="datetime" name="bdaytime"\u003e',
      },
    ],
  },
  {
    Id: 25833,
    Text: 'Form được sử dụng trên web để?',
    Marks: 1,
    AnswerId: 106928,
    Answers: [
      {
        Id: 106923,
        Text: 'Thiết kế đẹp',
      },
      {
        Id: 106924,
        Text: 'Định nghĩa trang web theo chuẩn HTML5',
      },
      {
        Id: 106925,
        Text: 'Theo xu thế',
      },
      {
        Id: 106926,
        Text: 'Viết code rõ ràng',
      },
      {
        Id: 106927,
        Text: 'Định nghĩa trang web theo chuẩn HTML4',
      },
      {
        Id: 106928,
        Text: 'Tương tác với người dùng',
      },
    ],
  },
  {
    Id: 25834,
    Text: 'Muốn nhóm một vài thẻ tiêu đề trong HTML5 ta có thể sử dụng phần tử nào sau đây?',
    Marks: 1,
    AnswerId: 106929,
    Answers: [
      {
        Id: 106929,
        Text: '\u003chgroup\u003e',
      },
      {
        Id: 106930,
        Text: '\u003chheader\u003e',
      },
      {
        Id: 106931,
        Text: '\u003chembedded\u003e',
      },
      {
        Id: 106932,
        Text: '\u003chsession\u003e',
      },
      {
        Id: 106933,
        Text: '\u003chcontent\u003e',
      },
      {
        Id: 106934,
        Text: '\u003chbody\u003e',
      },
    ],
  },
  {
    Id: 25835,
    Text: 'Trong HTML5, thuộc tính nào dùng để bắt buộc người dùng phải nhập giá trị vào một điều khiển trên form?',
    Marks: 1,
    AnswerId: 106935,
    Answers: [
      {
        Id: 106935,
        Text: 'required',
      },
      {
        Id: 106936,
        Text: 'notnull',
      },
      {
        Id: 106937,
        Text: 'checkempty',
      },
      {
        Id: 106938,
        Text: 'validate',
      },
      {
        Id: 106939,
        Text: 'placeholder',
      },
      {
        Id: 106940,
        Text: 'formvalidate',
      },
    ],
  },
  {
    Id: 25836,
    Text: 'Phần tử nào thường được định nghĩa như nhãn của một phần tử nhập liệu?',
    Marks: 1,
    AnswerId: 106943,
    Answers: [
      {
        Id: 106941,
        Text: '\u003cbrand\u003e',
      },
      {
        Id: 106942,
        Text: '\u003ctext\u003e',
      },
      {
        Id: 106943,
        Text: '\u003clabel\u003e',
      },
      {
        Id: 106944,
        Text: '\u003cinput\u003e',
      },
      {
        Id: 106945,
        Text: '\u003csubmit\u003e',
      },
      {
        Id: 106946,
        Text: '\u003ctop input\u003e',
      },
    ],
  },
  {
    Id: 25837,
    Text: 'Đâu là cách khai báo đúng trong HTML5 đối với label?',
    Marks: 1,
    AnswerId: 106949,
    Answers: [
      {
        Id: 106947,
        Text: '\u003clabel name="male"\u003eMale\u003c/label\u003e',
      },
      {
        Id: 106948,
        Text: '\u003clabel type="label"\u003eMale\u003c/label\u003e',
      },
      {
        Id: 106949,
        Text: '\u003clabel for="male"\u003eMale\u003c/label\u003e',
      },
      {
        Id: 106950,
        Text: '\u003clabel font="arial"\u003eMale\u003c/label\u003e',
      },
      {
        Id: 106951,
        Text: '\u003clabel id="male"\u003eMale\u003c/label\u003e',
      },
      {
        Id: 106952,
        Text: '\u003clabel color="red"\u003eMale\u003c/label\u003e',
      },
    ],
  },
  {
    Id: 25838,
    Text: 'Với HTML5, phần tử nào có thể sử dụng để nhóm các thành phần trong form?',
    Marks: 1,
    AnswerId: 106957,
    Answers: [
      {
        Id: 106953,
        Text: '\u003cfieldstyle\u003e',
      },
      {
        Id: 106954,
        Text: '\u003cfieldshow\u003e',
      },
      {
        Id: 106955,
        Text: '\u003cfieldrow\u003e',
      },
      {
        Id: 106956,
        Text: '\u003cfieldcolumn\u003e',
      },
      {
        Id: 106957,
        Text: '\u003cfieldset\u003e',
      },
      {
        Id: 106958,
        Text: '\u003cfieldground\u003e',
      },
    ],
  },
  {
    Id: 25839,
    Text: 'Đâu là cách khai báo đúng để sử dụng font unicode trong HTML5?',
    Marks: 1,
    AnswerId: 106963,
    Answers: [
      {
        Id: 106959,
        Text: '\u003ccharset\u003eunicode\u003c/charset\u003e',
      },
      {
        Id: 106960,
        Text: '\u003cmeta\u003echarset="utf-8"\u003c/meta\u003e',
      },
      {
        Id: 106961,
        Text: '\u003ccharset\u003eutf-8\u003c/charset\u003e',
      },
      {
        Id: 106962,
        Text: '\u003cmeta style="utf-8"\u003e\u003c/meta\u003e',
      },
      {
        Id: 106963,
        Text: '\u003cmeta charset="utf-8"\u003e\u003c/meta\u003e',
      },
      {
        Id: 106964,
        Text: '\u003cmeta\u003echarset="unicode"\u003c/meta\u003e',
      },
    ],
  },
  {
    Id: 25840,
    Text: 'Trong JavaScript, đoạn mã nào dùng để hiển thị "Hello World"?',
    Marks: 1,
    AnswerId: 106966,
    Answers: [
      {
        Id: 106965,
        Text: 'response.write("Hello World");',
      },
      {
        Id: 106966,
        Text: 'document.write("Hello World");',
      },
      {
        Id: 106967,
        Text: 'request.write("Hello World");',
      },
      {
        Id: 106968,
        Text: 'print "Hello World";',
      },
      {
        Id: 106969,
        Text: '("Hello World");',
      },
      {
        Id: 106970,
        Text: 'echo "Hello World";',
      },
    ],
  },
  {
    Id: 25841,
    Text: 'Từ khóa nào giúp hàm trả lại giá trị?',
    Marks: 1,
    AnswerId: 106975,
    Answers: [
      {
        Id: 106971,
        Text: 'back',
      },
      {
        Id: 106972,
        Text: 'forward',
      },
      {
        Id: 106973,
        Text: 'upward',
      },
      {
        Id: 106974,
        Text: 'backward',
      },
      {
        Id: 106975,
        Text: 'return',
      },
      {
        Id: 106976,
        Text: 'wayback',
      },
    ],
  },
  {
    Id: 25842,
    Text: 'Câu lệnh Jquery nào để thiết lập độ cao cho tất cả phần tử \u003cdiv\u003e là 100 pixel',
    Marks: 1,
    AnswerId: 106980,
    Answers: [
      {
        Id: 106977,
        Text: '$("div").yPos(100);',
      },
      {
        Id: 106978,
        Text: '$("div").length="100";',
      },
      {
        Id: 106979,
        Text: '$("div").xPos(100);',
      },
      {
        Id: 106980,
        Text: '$("div").height(100);',
      },
      {
        Id: 106981,
        Text: '$("div").height="100";',
      },
      {
        Id: 106982,
        Text: '$("div").length(100);',
      },
    ],
  },
  {
    Id: 25843,
    Text: 'Phương thức nào của Jquery để ẩn phần tử?',
    Marks: 1,
    AnswerId: 106983,
    Answers: [
      {
        Id: 106983,
        Text: 'hide();',
      },
      {
        Id: 106984,
        Text: 'visible(false);',
      },
      {
        Id: 106985,
        Text: 'display(none);',
      },
      {
        Id: 106986,
        Text: 'invisable(false);',
      },
      {
        Id: 106987,
        Text: 'invisable(true);',
      },
      {
        Id: 106988,
        Text: 'hidden();',
      },
    ],
  },
  {
    Id: 25844,
    Text: 'Lệnh nào dùng để gọi hàm myFunction trong JavaScript?',
    Marks: 1,
    AnswerId: 106990,
    Answers: [
      {
        Id: 106989,
        Text: 'execute myFunction();',
      },
      {
        Id: 106990,
        Text: 'myFunction();',
      },
      {
        Id: 106991,
        Text: 'call myFunction();',
      },
      {
        Id: 106992,
        Text: 'call function myFunction();',
      },
      {
        Id: 106993,
        Text: 'execute function myFunction();',
      },
      {
        Id: 106994,
        Text: 'run function myFunction();',
      },
    ],
  },
  {
    Id: 25845,
    Text: 'Hàm sau có tác dụng như thế nào? \u003cscript\u003efunction displayShow(){document.getElementById("demo").innerHTML=Date();}\u003c/script\u003e',
    Marks: 1,
    AnswerId: 106997,
    Answers: [
      {
        Id: 106995,
        Text: 'Bật âm thanh',
      },
      {
        Id: 106996,
        Text: 'Hiển thị hình ảnh',
      },
      {
        Id: 106997,
        Text: 'Hiển thị ngày tháng',
      },
      {
        Id: 106998,
        Text: 'Hiển thị màu sắc cho đoạn văn bản',
      },
      {
        Id: 106999,
        Text: 'Xem video',
      },
      {
        Id: 107000,
        Text: 'Hiển thị hình ảnh động',
      },
    ],
  },
  {
    Id: 25846,
    Text: 'Cách viết lệnh if nào trong Javascript là đúng?',
    Marks: 1,
    AnswerId: 107004,
    Answers: [
      {
        Id: 107001,
        Text: 'if i=5 then',
      },
      {
        Id: 107002,
        Text: 'if i=5',
      },
      {
        Id: 107003,
        Text: 'if i==5 then',
      },
      {
        Id: 107004,
        Text: 'if (i==5)',
      },
      {
        Id: 107005,
        Text: 'if (i===5)',
      },
      {
        Id: 107006,
        Text: 'if i===5 then',
      },
    ],
  },
  {
    Id: 25847,
    Text: 'Trong dòng mã sau:\u003cinput type="button" onclick="show" value="Submit"\u003eTừ khóa onclick nhằm tác dụng gì?',
    Marks: 1,
    AnswerId: 107010,
    Answers: [
      {
        Id: 107007,
        Text: 'Thực thi sự kiện show khi trang web được mở',
      },
      {
        Id: 107008,
        Text: 'Thực thi sự kiện show khi nhả nút',
      },
      {
        Id: 107009,
        Text: 'Thực thi sự kiện show khi đóng trình duyệt',
      },
      {
        Id: 107010,
        Text: 'Thực thi sự kiện show khi nhấn nút',
      },
      {
        Id: 107011,
        Text: 'Thực thi sự kiện show khi nhấn đúp chuột vào nút',
      },
      {
        Id: 107012,
        Text: 'Gọi sự kiện show khi thực hiện di chuột qua nút',
      },
    ],
  },
  {
    Id: 25848,
    Text: 'Đâu là phát biểu chính xác về Jquery?',
    Marks: 1,
    AnswerId: 107013,
    Answers: [
      {
        Id: 107013,
        Text: 'Là một thư viện của JavaScript',
      },
      {
        Id: 107014,
        Text: 'Là một tệp tin dạng doc và được trỏ tới thông qua lệnh @font-face của HTML5',
      },
      {
        Id: 107015,
        Text: 'Là một tệp tin dạng excel',
      },
      {
        Id: 107016,
        Text: 'Là một thư viện của PHP',
      },
      {
        Id: 107017,
        Text: 'Là một tệp tin dạng doc',
      },
      {
        Id: 107018,
        Text: 'Là một công nghệ riêng biệt, hình thành song song với công nghệ JavaScript',
      },
    ],
  },
  {
    Id: 25849,
    Text: 'Đâu là cách khai báo biến đúng trong JavaScript?',
    Marks: 1,
    AnswerId: 107021,
    Answers: [
      {
        Id: 107019,
        Text: 'show name=ducati',
      },
      {
        Id: 107020,
        Text: 'var Ducati',
      },
      {
        Id: 107021,
        Text: 'var name="Ducati";',
      },
      {
        Id: 107022,
        Text: 'show name=ducati;',
      },
      {
        Id: 107023,
        Text: 'show name="Ducati";',
      },
      {
        Id: 107024,
        Text: 'showvar name;',
      },
    ],
  },
  {
    Id: 25850,
    Text: 'Phát biểu nào sau đây là đúng?',
    Marks: 1,
    AnswerId: 107025,
    Answers: [
      {
        Id: 107025,
        Text: 'Canvas là hàm API vẽ hai chiều của HTML5',
      },
      {
        Id: 107026,
        Text: 'Canvas là đối tượng hình học trong HTML5',
      },
      {
        Id: 107027,
        Text: 'Canvas là giá trị vẽ hình trong HTML5',
      },
      {
        Id: 107028,
        Text: 'Canvas là thẻ vẽ ba chiều của HTML5',
      },
      {
        Id: 107029,
        Text: 'Canvas là thành phần làm việc chèn ảnh đặc biệt trong HTML5',
      },
      {
        Id: 107030,
        Text: 'Canvas là thuộc tính vẽ hình trong HTML5',
      },
    ],
  },
  {
    Id: 25851,
    Text: 'Phát biểu nào sau đây là đúng?',
    Marks: 1,
    AnswerId: 107031,
    Answers: [
      {
        Id: 107031,
        Text: 'Hình vẽ bởi Canvas không giống với định dạng hình ảnh JPG và có thể cập nhật theo thời gian thực',
      },
      {
        Id: 107032,
        Text: 'Hình vẽ bởi Canvas hoàn toàn giống với định dạng hình ảnh SVG',
      },
      {
        Id: 107033,
        Text: 'Hình vẽ bởi Canvas hoàn toàn giống với định dạng swf',
      },
      {
        Id: 107034,
        Text: 'Hình vẽ bởi Canvas hoàn toàn giống với định dạng GIF',
      },
      {
        Id: 107035,
        Text: 'Hình vẽ bởi Canvas hoàn toàn giống với định dạng hình ảnh JPG',
      },
    ],
  },
  {
    Id: 25852,
    Text: 'Trong HTML5, thuộc tính nào của thẻ video giúp người dùng có thể xem, tạm dừng video?',
    Marks: 1,
    AnswerId: 107038,
    Answers: [
      {
        Id: 107036,
        Text: 'handling',
      },
      {
        Id: 107037,
        Text: 'controlling',
      },
      {
        Id: 107038,
        Text: 'controls',
      },
      {
        Id: 107039,
        Text: 'play',
      },
      {
        Id: 107040,
        Text: 'pause',
      },
      {
        Id: 107041,
        Text: 'handle',
      },
    ],
  },
  {
    Id: 25853,
    Text: 'Phương thức addColorStop được sử dụng để?',
    Marks: 1,
    AnswerId: 107043,
    Answers: [
      {
        Id: 107042,
        Text: 'Quy định dải màu',
      },
      {
        Id: 107043,
        Text: 'Quy định cụ thể một màu và vị trí màu sắc trong đối tượng gradient',
      },
      {
        Id: 107044,
        Text: 'Quy định điểm dừng màu',
      },
      {
        Id: 107045,
        Text: 'Quy định dải màu cho đối tượng Canvas',
      },
      {
        Id: 107046,
        Text: 'Quy định điểm bắt đầu màu',
      },
      {
        Id: 107047,
        Text: 'Quy định màu sắc cho đối tượng Canvas',
      },
    ],
  },
  {
    Id: 25854,
    Text: 'Để sử dụng Canvas, cần thiết cần phải sử dụng thêm công nghệ nào hỗ trợ?',
    Marks: 1,
    AnswerId: 107048,
    Answers: [
      {
        Id: 107048,
        Text: 'JavaScript',
      },
      {
        Id: 107049,
        Text: 'Java',
      },
      {
        Id: 107050,
        Text: 'PHP',
      },
      {
        Id: 107051,
        Text: 'ASP.NET',
      },
      {
        Id: 107052,
        Text: 'Python',
      },
      {
        Id: 107053,
        Text: 'ActionScript',
      },
    ],
  },
  {
    Id: 25855,
    Text: 'Hàm nào di chuyển path tới một điểm xác định trên canvas mà không vẽ thêm một đường thẳng?',
    Marks: 1,
    AnswerId: 107059,
    Answers: [
      {
        Id: 107054,
        Text: 'drawTo',
      },
      {
        Id: 107055,
        Text: 'lineTo',
      },
      {
        Id: 107056,
        Text: 'drawTo(x,y)',
      },
      {
        Id: 107057,
        Text: 'moveTo',
      },
      {
        Id: 107058,
        Text: 'lineTo(x, y)',
      },
      {
        Id: 107059,
        Text: 'moveTo(x,y)',
      },
    ],
  },
  {
    Id: 25856,
    Text: 'Hai thẻ nào của HTML5 được sử dụng để xem video và audio trực tuyến mà không cần plugin?',
    Marks: 1,
    AnswerId: 107063,
    Answers: [
      {
        Id: 107060,
        Text: 'applet và javascript',
      },
      {
        Id: 107061,
        Text: 'video và embed',
      },
      {
        Id: 107062,
        Text: 'applet và span',
      },
      {
        Id: 107063,
        Text: 'video và audio',
      },
      {
        Id: 107064,
        Text: 'video và jscript',
      },
      {
        Id: 107065,
        Text: 'audio và jscript',
      },
    ],
  },
  {
    Id: 25857,
    Text: 'Đối tượng build-in HTML5 được sử dụng để vẽ trên canvas là đối tượng nào?',
    Marks: 1,
    AnswerId: 107070,
    Answers: [
      {
        Id: 107066,
        Text: 'getGraphics',
      },
      {
        Id: 107067,
        Text: 'getCanvas',
      },
      {
        Id: 107068,
        Text: 'getDrawing',
      },
      {
        Id: 107069,
        Text: 'getScreen',
      },
      {
        Id: 107070,
        Text: 'getContext',
      },
    ],
  },
  {
    Id: 25858,
    Text: 'Có thể lưu hình vẽ được tạo ra bởi canvas với định dạng nào?',
    Marks: 1,
    AnswerId: 107075,
    Answers: [
      {
        Id: 107071,
        Text: 'avi',
      },
      {
        Id: 107072,
        Text: 'swf',
      },
      {
        Id: 107073,
        Text: 'saaw',
      },
      {
        Id: 107074,
        Text: 'flash',
      },
      {
        Id: 107075,
        Text: 'png',
      },
      {
        Id: 107076,
        Text: 'mp4',
      },
    ],
  },
  {
    Id: 25859,
    Text: 'Hàm nào sẽ tạo điểm mới và tạo một đường thẳng nối điểm mới này với điểm cuối cùng trên canvas?',
    Marks: 1,
    AnswerId: 107079,
    Answers: [
      {
        Id: 107077,
        Text: 'fillTo',
      },
      {
        Id: 107078,
        Text: 'fillTo(x,y)',
      },
      {
        Id: 107079,
        Text: 'lineTo(x, y)',
      },
      {
        Id: 107080,
        Text: 'strokeTo(x,y)',
      },
      {
        Id: 107081,
        Text: 'strokeTo',
      },
      {
        Id: 107082,
        Text: 'lineTo',
      },
    ],
  },
  {
    Id: 25860,
    Text: 'Giá trị center có thể là giá trị của những thuộc tính nào sau đây?',
    Marks: 1,
    AnswerId: 107085,
    Answers: [
      {
        Id: 107083,
        Text: 'box-show và box-align',
      },
      {
        Id: 107084,
        Text: 'box-align và box-float',
      },
      {
        Id: 107085,
        Text: 'box-pack và box-align',
      },
      {
        Id: 107086,
        Text: 'box-float và box-pack',
      },
    ],
  },
  {
    Id: 25861,
    Text: 'Thuộc tính nào của CSS3 animation dùng để xác định số lần một hình ảnh động được lặp lại',
    Marks: 1,
    AnswerId: 107088,
    Answers: [
      {
        Id: 107087,
        Text: 'animation-duration',
      },
      {
        Id: 107088,
        Text: 'animation-iteration-count',
      },
      {
        Id: 107089,
        Text: 'animation-count',
      },
      {
        Id: 107090,
        Text: 'animation-name',
      },
      {
        Id: 107091,
        Text: 'animation-timing-function',
      },
      {
        Id: 107092,
        Text: 'animation-timing-times',
      },
    ],
  },
  {
    Id: 25862,
    Text: 'Keyframe là gì và nó được sử dụng ở đâu trong CSS3?',
    Marks: 1,
    AnswerId: 107098,
    Answers: [
      {
        Id: 107093,
        Text: 'Một keyframe được sử dụng để thiết lập background image',
      },
      {
        Id: 107094,
        Text: 'Một keyframe được sử dụng để thiết lập border-radius',
      },
      {
        Id: 107095,
        Text: 'Một keyframe được sử dụng trong vẽ canvas',
      },
      {
        Id: 107096,
        Text: 'Một keyframe được sử dụng trong hiển thị video',
      },
      {
        Id: 107097,
        Text: 'Một keyframe được sử dụng trong xem audio',
      },
      {
        Id: 107098,
        Text: 'Một keyframe được sử dụng trong hoạt hình CSS3 và định nghĩa giá trị xác định của một thuộc tính, ví dụ như góc quay',
      },
    ],
  },
  {
    Id: 25863,
    Text: 'Giá trị nào của transition-timing-function chỉ định một hiệu ứng chuyển tiếp với cùng một tốc độ từ đầu đến cuối?',
    Marks: 1,
    AnswerId: 107104,
    Answers: [
      {
        Id: 107099,
        Text: 'Ease',
      },
      {
        Id: 107100,
        Text: 'medium',
      },
      {
        Id: 107101,
        Text: 'Ease-in',
      },
      {
        Id: 107102,
        Text: 'Ease-out',
      },
      {
        Id: 107103,
        Text: 'Ease-in-out',
      },
      {
        Id: 107104,
        Text: 'linear',
      },
    ],
  },
  {
    Id: 25864,
    Text: 'Thuộc tính nào được dùng để tạo ra góc bo tròn?',
    Marks: 1,
    AnswerId: 107110,
    Answers: [
      {
        Id: 107105,
        Text: 'border',
      },
      {
        Id: 107106,
        Text: 'radius-border',
      },
      {
        Id: 107107,
        Text: 'border-round',
      },
      {
        Id: 107108,
        Text: 'round',
      },
      {
        Id: 107109,
        Text: 'round-border',
      },
      {
        Id: 107110,
        Text: 'border-radius',
      },
    ],
  },
  {
    Id: 25865,
    Text: 'Chuẩn CSS nào gần CSS3 nhất?',
    Marks: 1,
    AnswerId: 107111,
    Answers: [
      {
        Id: 107111,
        Text: 'CSS2.1',
      },
      {
        Id: 107112,
        Text: 'CSS2',
      },
      {
        Id: 107113,
        Text: 'Linux',
      },
      {
        Id: 107114,
        Text: 'Flash',
      },
      {
        Id: 107115,
        Text: 'Adobe',
      },
      {
        Id: 107116,
        Text: 'CSS1',
      },
    ],
  },
  {
    Id: 25866,
    Text: 'Thuộc tính background-image trong CSS3 hỗ trợ bao nhiêu ảnh nền?',
    Marks: 1,
    AnswerId: 107118,
    Answers: [
      {
        Id: 107117,
        Text: '3',
      },
      {
        Id: 107118,
        Text: 'Không giới hạn',
      },
      {
        Id: 107119,
        Text: '5',
      },
      {
        Id: 107120,
        Text: '1',
      },
      {
        Id: 107121,
        Text: '4',
      },
      {
        Id: 107122,
        Text: '2',
      },
    ],
  },
  {
    Id: 25867,
    Text: 'Tiền tố -ms được trình duyệt nào sử dụng?',
    Marks: 1,
    AnswerId: 107127,
    Answers: [
      {
        Id: 107123,
        Text: 'Dolphin',
      },
      {
        Id: 107124,
        Text: 'Opera',
      },
      {
        Id: 107125,
        Text: 'Firefox',
      },
      {
        Id: 107126,
        Text: 'Opera Mini',
      },
      {
        Id: 107127,
        Text: 'IE',
      },
      {
        Id: 107128,
        Text: 'Safari',
      },
    ],
  },
  {
    Id: 25868,
    Text: 'Rule mới nào giúp cho việc khắc phục hạn chế của font trên Web?',
    Marks: 1,
    AnswerId: 107131,
    Answers: [
      {
        Id: 107129,
        Text: '@add-font',
      },
      {
        Id: 107130,
        Text: 'edit-font',
      },
      {
        Id: 107131,
        Text: '@font-face',
      },
      {
        Id: 107132,
        Text: 'font-style',
      },
      {
        Id: 107133,
        Text: 'set-font',
      },
      {
        Id: 107134,
        Text: 'Gimme-Gimme',
      },
    ],
  },
  {
    Id: 25869,
    Text: 'Công nghệ nào được sử dụng để tạo hoạt hình (amination) trước khi có CSS3',
    Marks: 1,
    AnswerId: 107136,
    Answers: [
      {
        Id: 107135,
        Text: 'Paint',
      },
      {
        Id: 107136,
        Text: 'Adobe Flash',
      },
      {
        Id: 107137,
        Text: 'Notepad',
      },
      {
        Id: 107138,
        Text: 'Etch-a-Sketch',
      },
    ],
  },
  {
    Id: 25870,
    Text: 'Câu lệnh nào để phát hiện thiết bị di động đặt nằm ngang (landscape mode)?',
    Marks: 1,
    AnswerId: 107140,
    Answers: [
      {
        Id: 107139,
        Text: 'directing:landscape',
      },
      {
        Id: 107140,
        Text: 'orientation:landscape',
      },
      {
        Id: 107141,
        Text: 'oriented:landscape',
      },
      {
        Id: 107142,
        Text: 'orienting:landscape',
      },
      {
        Id: 107143,
        Text: 'direction:landscape',
      },
      {
        Id: 107144,
        Text: 'directed:landscape',
      },
    ],
  },
  {
    Id: 25871,
    Text: 'Thuộc tính max-device-width nhằm tác dụng gì?',
    Marks: 1,
    AnswerId: 107145,
    Answers: [
      {
        Id: 107145,
        Text: 'Quy định chiều rộng lớn nhất của web trên trình duyệt của thiết bị',
      },
      {
        Id: 107146,
        Text: 'Quy định chiều cao lớn nhất của web trên trình duyệt',
      },
      {
        Id: 107147,
        Text: 'Quy định chiều rộng nhỏ nhất của web trên trình duyệt',
      },
      {
        Id: 107148,
        Text: 'Quy định chiều rộng lớn nhất của web trên trình duyệt',
      },
      {
        Id: 107149,
        Text: 'Quy định vị trí xuất hiện của web trên trình duyệt',
      },
    ],
  },
  {
    Id: 25872,
    Text: 'Lệnh nào quy định một thành phần không thể thay đổi kích thước?',
    Marks: 1,
    AnswerId: 107153,
    Answers: [
      {
        Id: 107150,
        Text: 'resizing:none',
      },
      {
        Id: 107151,
        Text: 'change-size:none',
      },
      {
        Id: 107152,
        Text: 'changing-size:none',
      },
      {
        Id: 107153,
        Text: 'resize:none',
      },
    ],
  },
  {
    Id: 25873,
    Text: 'Dạng layout nào được sử dụng để xây dựng trang từ định nghĩa của các thành phần con?',
    Marks: 1,
    AnswerId: 107157,
    Answers: [
      {
        Id: 107154,
        Text: 'Layout 2 cột',
      },
      {
        Id: 107155,
        Text: 'Layout dạng 4 cột',
      },
      {
        Id: 107156,
        Text: 'Layout 3 cột',
      },
      {
        Id: 107157,
        Text: 'Layout dạng hộp linh động',
      },
    ],
  },
  {
    Id: 25874,
    Text: 'Website có độ phản hồi cao (responsive design) là gì?',
    Marks: 1,
    AnswerId: 107160,
    Answers: [
      {
        Id: 107158,
        Text: 'Website có độ phản hồi cao là website được xây dựng bằng PHP',
      },
      {
        Id: 107159,
        Text: 'Website có độ phản hồi cao là website có số lượng người truy cập cao',
      },
      {
        Id: 107160,
        Text: 'Website có độ phản hồi cao đáp ứng mọi thiết bị và môi trường của người dùng theo các tiêu chí kích thước và chiều của màn hình thiết bị',
      },
      {
        Id: 107161,
        Text: 'Website có độ phản hồi cao là website được xây dựng bằng ASP.NET',
      },
      {
        Id: 107162,
        Text: 'Website có độ phản hồi cao là website được xây dựng bằng JSP',
      },
      {
        Id: 107163,
        Text: 'Website có độ phản hồi cao là website CMS',
      },
    ],
  },
  {
    Id: 25875,
    Text: 'Giá trị nào của thuộc tính justify-content khi sử dụng flexbox để căn giữa?',
    Marks: 1,
    AnswerId: 107165,
    Answers: [
      {
        Id: 107164,
        Text: 'Space-around',
      },
      {
        Id: 107165,
        Text: 'center',
      },
      {
        Id: 107166,
        Text: 'flex-start',
      },
      {
        Id: 107167,
        Text: 'Space-between',
      },
      {
        Id: 107168,
        Text: 'flex-center',
      },
      {
        Id: 107169,
        Text: 'flex-end',
      },
    ],
  },
  {
    Id: 25876,
    Text: 'Câu lệnh sau giúp hiển thị trên trình duyệt nào?-webkit-column-count:3;',
    Marks: 1,
    AnswerId: 107172,
    Answers: [
      {
        Id: 107170,
        Text: 'Chrome và Firefox',
      },
      {
        Id: 107171,
        Text: 'Safari và Nestcape',
      },
      {
        Id: 107172,
        Text: 'Safari và Chrome',
      },
      {
        Id: 107173,
        Text: 'Opera và Dolphin',
      },
      {
        Id: 107174,
        Text: 'Firefox và Safari',
      },
      {
        Id: 107175,
        Text: 'Safari và Opera',
      },
    ],
  },
  {
    Id: 25877,
    Text: 'Công nghệ nào của CSS3 giúp tạo ra website có độ phản hồi cao (responsive design)?',
    Marks: 1,
    AnswerId: 107178,
    Answers: [
      {
        Id: 107176,
        Text: 'JavaScript',
      },
      {
        Id: 107177,
        Text: 'CSS3 media',
      },
      {
        Id: 107178,
        Text: 'CSS3 media queries',
      },
      {
        Id: 107179,
        Text: 'CSS3 queries',
      },
      {
        Id: 107180,
        Text: 'Jquery',
      },
      {
        Id: 107181,
        Text: 'PHP',
      },
    ],
  },
  {
    Id: 25878,
    Text: 'Đâu là thuộc tính của layout dạng nhiều cột?',
    Marks: 1,
    AnswerId: 107187,
    Answers: [
      {
        Id: 107182,
        Text: 'column-go',
      },
      {
        Id: 107183,
        Text: 'column-given',
      },
      {
        Id: 107184,
        Text: 'column-space',
      },
      {
        Id: 107185,
        Text: 'column-gud',
      },
      {
        Id: 107186,
        Text: 'column_different',
      },
      {
        Id: 107187,
        Text: 'column-gap',
      },
    ],
  },
  {
    Id: 25879,
    Text: 'Thuộc tính nào dùng để xác định tỷ lệ giữa chiều rộng và chiều cao của thiết bị?',
    Marks: 1,
    AnswerId: 107188,
    Answers: [
      {
        Id: 107188,
        Text: 'Device-aspect-ratio',
      },
      {
        Id: 107189,
        Text: 'Device-aspect-difference',
      },
      {
        Id: 107190,
        Text: 'Max-device',
      },
      {
        Id: 107191,
        Text: 'Min-device-width',
      },
      {
        Id: 107192,
        Text: 'Min-device',
      },
      {
        Id: 107193,
        Text: 'Max-device-width',
      },
    ],
  },
  {
    Id: 25880,
    Text: 'Phương thức nào trả lại số lượng key/value trong localStorage?',
    Marks: 1,
    AnswerId: 107196,
    Answers: [
      {
        Id: 107194,
        Text: 'setItem',
      },
      {
        Id: 107195,
        Text: 'getItem',
      },
      {
        Id: 107196,
        Text: 'length',
      },
      {
        Id: 107197,
        Text: 'count',
      },
      {
        Id: 107198,
        Text: 'total',
      },
      {
        Id: 107199,
        Text: 'value',
      },
    ],
  },
  {
    Id: 25881,
    Text: 'Trong HTML5, phương thức nào để lấy giá trị cho keyname nhất định?',
    Marks: 1,
    AnswerId: 107203,
    Answers: [
      {
        Id: 107200,
        Text: 'getValue',
      },
      {
        Id: 107201,
        Text: 'setItem(key, value)',
      },
      {
        Id: 107202,
        Text: 'setItem',
      },
      {
        Id: 107203,
        Text: 'getItem(key)',
      },
      {
        Id: 107204,
        Text: 'value',
      },
      {
        Id: 107205,
        Text: 'getItem',
      },
    ],
  },
  {
    Id: 25882,
    Text: 'Trong HTML5, có bao nhiêu khả năng lưu trữ dữ liệu offline?',
    Marks: 1,
    AnswerId: 107208,
    Answers: [
      {
        Id: 107206,
        Text: '6',
      },
      {
        Id: 107207,
        Text: '4',
      },
      {
        Id: 107208,
        Text: '2',
      },
      {
        Id: 107209,
        Text: '3',
      },
      {
        Id: 107210,
        Text: '1',
      },
      {
        Id: 107211,
        Text: '5',
      },
    ],
  },
  {
    Id: 25883,
    Text: 'Trong HTML5, phương thức nào được sử dụng để xác định vị trí hiện tại của thiết bị?',
    Marks: 1,
    AnswerId: 107213,
    Answers: [
      {
        Id: 107212,
        Text: 'getPositions()',
      },
      {
        Id: 107213,
        Text: 'getCurrentPosition()',
      },
      {
        Id: 107214,
        Text: 'getUserPosition()',
      },
      {
        Id: 107215,
        Text: 'getPosition()',
      },
      {
        Id: 107216,
        Text: 'getNearestPosition()',
      },
      {
        Id: 107217,
        Text: 'getUserPositions()',
      },
    ],
  },
  {
    Id: 25884,
    Text: 'Phương thức nào để thiết lập kiểu và giá trị của dữ liệu được kéo?',
    Marks: 1,
    AnswerId: 107222,
    Answers: [
      {
        Id: 107218,
        Text: 'setValue',
      },
      {
        Id: 107219,
        Text: 'get',
      },
      {
        Id: 107220,
        Text: 'set',
      },
      {
        Id: 107221,
        Text: 'setValues',
      },
      {
        Id: 107222,
        Text: 'setData',
      },
      {
        Id: 107223,
        Text: 'getData',
      },
    ],
  },
  {
    Id: 25885,
    Text: 'Kiểu giá trị dữ liệu nào có thể transfer trong quá trình drag - drop?',
    Marks: 1,
    AnswerId: 107229,
    Answers: [
      {
        Id: 107224,
        Text: 'var',
      },
      {
        Id: 107225,
        Text: 'number',
      },
      {
        Id: 107226,
        Text: 'int',
      },
      {
        Id: 107227,
        Text: 'bit',
      },
      {
        Id: 107228,
        Text: 'varchar',
      },
      {
        Id: 107229,
        Text: 'string',
      },
    ],
  },
  {
    Id: 25886,
    Text: 'Đối tượng positionOptions để thiết lập cấu hình cho hàm nào?',
    Marks: 1,
    AnswerId: 107232,
    Answers: [
      {
        Id: 107230,
        Text: 'getOptions',
      },
      {
        Id: 107231,
        Text: 'getCurrentPositions',
      },
      {
        Id: 107232,
        Text: 'getCurrentPosition',
      },
      {
        Id: 107233,
        Text: 'getPositions',
      },
      {
        Id: 107234,
        Text: 'getPosition',
      },
      {
        Id: 107235,
        Text: 'getOption',
      },
    ],
  },
  {
    Id: 25887,
    Text: 'Bao nhiêu hình ảnh có thể được sử dụng với hàm setDragImage dưới dạng chỉ số hình ảnh?',
    Marks: 1,
    AnswerId: 107241,
    Answers: [
      {
        Id: 107236,
        Text: '6',
      },
      {
        Id: 107237,
        Text: '7',
      },
      {
        Id: 107238,
        Text: '5',
      },
      {
        Id: 107239,
        Text: '4',
      },
      {
        Id: 107240,
        Text: '3',
      },
      {
        Id: 107241,
        Text: '1',
      },
    ],
  },
  {
    Id: 25888,
    Text: 'Hình thức lưu trữ nào cho phép lưu trữ dữ liệu trên máy tính cho đến khi dữ liệu bị xóa bởi các ứng dụng hoặc người dùng?',
    Marks: 1,
    AnswerId: 107243,
    Answers: [
      {
        Id: 107242,
        Text: 'sessionStorage',
      },
      {
        Id: 107243,
        Text: 'localStorage',
      },
      {
        Id: 107244,
        Text: 'removeItem',
      },
      {
        Id: 107245,
        Text: 'getItem',
      },
    ],
  },
  {
    Id: 25889,
    Text: 'Để hiển thị vị trí người dùng trên Google Map, API nào được sử dụng?',
    Marks: 1,
    AnswerId: 107246,
    Answers: [
      {
        Id: 107246,
        Text: 'Google Map API',
      },
      {
        Id: 107247,
        Text: 'DetectLocation API',
      },
      {
        Id: 107248,
        Text: 'Location API',
      },
      {
        Id: 107249,
        Text: 'Nokia map API',
      },
      {
        Id: 107250,
        Text: 'Bing Map API',
      },
    ],
  },
]
export const INMA = [
  {
    Id: 24711,
    Text: 'Trước khi viết một thông điệp marketing cho website của bạn, bạn cần phải:',
    Marks: 1,
    AnswerId: 102534,
    Answers: [
      {
        Id: 102531,
        Text: 'Tìm hiểu xem khách hàng lý tưởng của mình bao nhiêu tuổi',
      },
      {
        Id: 102532,
        Text: 'Tìm hiểu xem những đối thủ đang viết như thế nào và bắt chước họ',
      },
      {
        Id: 102533,
        Text: 'Tìm hiểu xem khách hàng lý tưởng của mình giới tính là gì',
      },
      {
        Id: 102534,
        Text: 'Tìm hiểu xem khách hàng lý tưởng của mình là ai, đặc điểm của họ là gì',
      },
    ],
  },
  {
    Id: 24712,
    Text: 'Twitter tạo nên sự khác biệt so với tất cả các đối thủ trong lĩnh vực blog cá nhân bằng cách:',
    Marks: 1,
    AnswerId: 102535,
    Answers: [
      {
        Id: 102535,
        Text: 'Chỉ cho phép mỗi bài viết dài không quá 140 ký tự để bắt họ phải cung cấp những bài viết với hàm lượng “mật độ thông tin” cao nhất',
      },
      {
        Id: 102536,
        Text: 'Qui định mỗi người chỉ được phép tạo ra một tài khoản',
      },
      {
        Id: 102537,
        Text: 'Cho phép mỗi bài viết mà user đăng lên được phép viết dài vô hạn',
      },
      {
        Id: 102538,
        Text: 'Cho phép mỗi bài viết mà user đăng lên có thể được định dạng đẹp đẽ và dễ dàng',
      },
    ],
  },
  {
    Id: 24713,
    Text: 'Hai bí quyết để đánh tan sự hoài nghi của khách hàng khi họ vào mua hàng online là (hãy chọn một đáp án đúng):',
    Marks: 1,
    AnswerId: 102541,
    Answers: [
      {
        Id: 102539,
        Text: 'Đưa ra thật nhiều lợi ích của sản phẩm và đưa vào thật nhiều ảnh đẹp về sản phẩm',
      },
      {
        Id: 102540,
        Text: 'Đưa ra bằng chứng chứng minh sản phẩm của bạn hoạt động tốt và viết nhiều bài báo PR về sản phẩm đó',
      },
      {
        Id: 102541,
        Text: 'Đưa ra bằng chứng chứng minh sản phẩm của bạn hoạt động tốt và đưa ra chính sách có lợi nhất cho khách hàng nếu sản phẩm không hoạt động như ý',
      },
      {
        Id: 102542,
        Text: 'Đưa ra thật nhiều đặc tính nổi trội của sản phẩm và viết nhiều bài viết hay về sản phẩm',
      },
    ],
  },
  {
    Id: 24714,
    Text: 'Apple đã làm điều gì để iPhone trở nên khác biệt và nổi bật vào thời điểm ra đời năm 2007? (Hãy chọn đáp án hợp lý nhất)',
    Marks: 1,
    AnswerId: 102546,
    Answers: [
      {
        Id: 102543,
        Text: 'Apple đã đưa ra chức năng Multi-Touch (chạm đa điểm) trong iPhone',
      },
      {
        Id: 102544,
        Text: 'Apple đã đưa thêm rất nhiều tính năng và đặc tính vào trong sản phẩm iPhone',
      },
      {
        Id: 102545,
        Text: 'Apple đã đưa vào chức năng bàn phím ảo trong iPhone',
      },
      {
        Id: 102546,
        Text: 'Apple đã đưa vào chức năng Multi-Touch (chạm đa điểm) trong iPhone và đưa ra kho ứng dụng Apple Store',
      },
    ],
  },
  {
    Id: 24715,
    Text: 'Cách mà Google đánh bại Yahoo để thống lĩnh thị trường dịch vụ tìm kiếm online là:',
    Marks: 1,
    AnswerId: 102549,
    Answers: [
      {
        Id: 102547,
        Text: 'Đưa thêm nhiều tính năng, nhiều đặc tính sản phẩm hơn Yahoo',
      },
      {
        Id: 102548,
        Text: 'Làm cho giao diện đẹp đẽ hơn Yahoo',
      },
      {
        Id: 102549,
        Text: 'Đưa cho user ít chức năng, ít đặc tính hơn, nhưng trả lại kết quả tìm kiếm chính xác và chất lượng hơn Yahoo',
      },
      {
        Id: 102550,
        Text: 'Làm cho giao diện đơn giản hơn Yahoo',
      },
    ],
  },
  {
    Id: 24716,
    Text: 'Khi khách hàng lên website của bạn để xem hàng, điều gì sẽ có thể ngăn cản họ thực hiện hành động mua hàng?',
    Marks: 1,
    AnswerId: 102554,
    Answers: [
      {
        Id: 102551,
        Text: 'Giao diện website quá xấu',
      },
      {
        Id: 102552,
        Text: 'Trang web có quá nhiều mặt hàng',
      },
      {
        Id: 102553,
        Text: 'Trang web có quá ít mặt hàng',
      },
      {
        Id: 102554,
        Text: 'Họ không tin tưởng, họ sợ bị lừa',
      },
    ],
  },
  {
    Id: 24717,
    Text: 'Thị trường là gì?',
    Marks: 1,
    AnswerId: 102556,
    Answers: [
      {
        Id: 102555,
        Text: 'Thị trường của một hàng hóa là số lượng người mua và người bán hàng hóa đó',
      },
      {
        Id: 102556,
        Text: 'Thị trường của một hàng hóa là là tập tất cả những người, những tổ chức có cùng nhu cầu về mặt hàng hóa đó công với tất cả những người đang bán hàng hóa đó',
      },
      {
        Id: 102557,
        Text: 'Thị trường của một hàng hóa là là tập tất cả những người, những tổ chức có cùng nhu cầu về mặt hàng hóa đó',
      },
      {
        Id: 102558,
        Text: 'Thị trường của một hàng hóa là tập tất cả những người đang cung cấp, đang bán hàng hóa đó',
      },
    ],
  },
  {
    Id: 24718,
    Text: 'Hãy chọn ra thông điệp sẽ xóa tan sự nghi ngờ về khả năng hoạt động được của sản phẩm từ khách hàng tốt nhất:',
    Marks: 1,
    AnswerId: 102561,
    Answers: [
      {
        Id: 102559,
        Text: '“Nếu sản phẩm của chúng tôi không hoạt động như cam kết, chúng tôi sẽ hoàn tiền 100% cho bạn”',
      },
      {
        Id: 102560,
        Text: '“Sản phẩm của chúng tôi được bảo hành trong 06 tháng”',
      },
      {
        Id: 102561,
        Text: '“Nếu sản phẩm của chúng tôi không hoạt động như cam kết, chúng tôi sẽ hoàn tiền 150% cho bạn”',
      },
      {
        Id: 102562,
        Text: '“Sản phẩm của chúng tôi được bảo hành trong 05 năm và đã được hàng trăm nghìn người sử dụng”',
      },
    ],
  },
  {
    Id: 24719,
    Text: 'Tập đoàn Tân Hiệp Phát đã chọn thị trường ngách là sản phẩm gì để cạnh tranh lại với 02 đại gia trong lĩnh vực đồ uống là Coca-Cola và Pepsi?',
    Marks: 1,
    AnswerId: 102563,
    Answers: [
      {
        Id: 102563,
        Text: 'Trà xanh không độ',
      },
      {
        Id: 102564,
        Text: 'Nước uống tăng lực Sting',
      },
      {
        Id: 102565,
        Text: 'Sữa đậu nành',
      },
      {
        Id: 102566,
        Text: 'Bia',
      },
    ],
  },
  {
    Id: 24720,
    Text: 'Hãy chọn cách để viết các lời giới thiệu (testimonial) về sản phẩm đúng đắn:',
    Marks: 1,
    AnswerId: 102570,
    Answers: [
      {
        Id: 102567,
        Text: '“Sau đây là ý kiến đánh giá về sản phẩm của chúng tôi từ Mr.H, Hà Nội”',
      },
      {
        Id: 102568,
        Text: '“Sau đây là ý kiến đánh giá về sản phẩm của chúng tôi từ Mr.H, CEO công ty X, Hà Nội”',
      },
      {
        Id: 102569,
        Text: '“Sau đây là ý kiến đánh giá về sản phẩm của chúng tôi từ Mr.H”',
      },
      {
        Id: 102570,
        Text: '“Sau đây là ý kiến đánh giá về sản phẩm của chúng tôi từ Mr.Hoàng Xuân Huy, CEO Công ty Alpha Book, 67 Thái Hà, Hà Nội”',
      },
    ],
  },
  {
    Id: 24721,
    Text: 'Tại sao bạn nên sử dụng những thông điệp dạng như:“Mặt hàng này sẽ không bán nữa vào thứ 6 này”“Chúng tôi chỉ dạy khóa học này cho 10 người”',
    Marks: 1,
    AnswerId: 102571,
    Answers: [
      {
        Id: 102571,
        Text: 'Là để áp dụng yếu tố tâm lý về tính khan hiếm',
      },
      {
        Id: 102572,
        Text: 'Là để áp dụng yếu tố tâm lý về tính nhất quán',
      },
      {
        Id: 102573,
        Text: 'Là để áp dụng yếu tố tâm lý về tính xác thực của xã hội',
      },
      {
        Id: 102574,
        Text: 'Là để áp dụng yếu tố tâm lý về tính tương phản',
      },
    ],
  },
  {
    Id: 24722,
    Text: 'Để tạo ra một Landing-Page tốt bạn nên:',
    Marks: 1,
    AnswerId: 102575,
    Answers: [
      {
        Id: 102575,
        Text: 'Tất cả các đáp án trên',
      },
      {
        Id: 102576,
        Text: 'Chỉ nên sử dụng một lời kêu gọi hành động (call to action) nổi bật nhất',
      },
      {
        Id: 102577,
        Text: 'Để những thông tin quan trọng nhất hiển thị ngay trong 1 màn hình',
      },
      {
        Id: 102578,
        Text: 'Đừng làm cho logo của bạn to quá',
      },
    ],
  },
  {
    Id: 24723,
    Text: 'Tạo sao trong website của bạn lại nên thêm vào danh sách các khách hàng đã sử dụng sản phẩm của bạn?',
    Marks: 1,
    AnswerId: 102582,
    Answers: [
      {
        Id: 102579,
        Text: 'Là để áp dụng yếu tố tâm lý tương phản',
      },
      {
        Id: 102580,
        Text: 'Là để áp dụng yếu tố tâm lý khan hiếm',
      },
      {
        Id: 102581,
        Text: 'Là để áp dụng yếu tố tâm lý nhất quán',
      },
      {
        Id: 102582,
        Text: 'Là để áp dụng yếu tố tâm lý “đã được kiểm chứng của xã hội”',
      },
    ],
  },
  {
    Id: 24724,
    Text: 'Tại sao, trong các form thu thập thông tin về khách hàng, hãy hỏi họ ít thông tin nhất có thể?',
    Marks: 1,
    AnswerId: 102583,
    Answers: [
      {
        Id: 102583,
        Text: 'Vì khách hàng có xu hướng sẽ từ bỏ nếu họ bị hỏi quá nhiều thông tin',
      },
      {
        Id: 102584,
        Text: 'Vì khách hàng sẽ nói dối bạn nếu bạn hỏi họ quá nhiều',
      },
      {
        Id: 102585,
        Text: 'Vì như vậy sẽ làm cho bạn tăng chi phí lập trình',
      },
      {
        Id: 102586,
        Text: 'Vì như vậy sẽ làm cho cơ sở dữ liệu của bạn thêm nặng nề',
      },
    ],
  },
  {
    Id: 24725,
    Text: 'Tạo sao website bán hàng của bạn lại nên tích hợp với Facebook, LinkedIn, Twitter?',
    Marks: 1,
    AnswerId: 102587,
    Answers: [
      {
        Id: 102587,
        Text: 'Tất cả các đáp án trên',
      },
      {
        Id: 102588,
        Text: 'Vì như vậy sẽ giúp bạn có thêm được những bằng chứng và những lời giới thiệu sống động nhất',
      },
      {
        Id: 102589,
        Text: 'Vì như vậy sẽ giúp bạn đạt được hiệu ứng “tâm lý đã được kiểm chứng bởi xã hội”',
      },
      {
        Id: 102590,
        Text: 'Vì như vậy sẽ giúp khách hàng dễ dàng chia sẻ thông tin về website của bạn tới bạn bè của họ',
      },
    ],
  },
  {
    Id: 24726,
    Text: 'Landing-Page là gì?',
    Marks: 1,
    AnswerId: 102592,
    Answers: [
      {
        Id: 102591,
        Text: 'Landing-Page chính là trang chủ (home-page)',
      },
      {
        Id: 102592,
        Text: 'Landing-Page là trang web sẽ mở ra khi khách hàng click vào một đường link nào đó hoặc khi họ click vào một quảng cáo nào đó',
      },
      {
        Id: 102593,
        Text: 'Landing-Page chính là trang giới thiệu về chính sách bán hàng của công ty',
      },
      {
        Id: 102594,
        Text: 'Landing-Page là trang giới thiệu về công ty (About Us)',
      },
    ],
  },
  {
    Id: 24727,
    Text: 'Tại sao khi bạn có rất nhiều sản phẩm cần bán trên website, bạn lại cần phải chia thành nhóm (category) và cung cấp chức năng tìm kiếm sản phẩm?',
    Marks: 1,
    AnswerId: 102595,
    Answers: [
      {
        Id: 102595,
        Text: 'Vì để tránh hiệu ứng tâm lý “khi có quá nhiều lựa chọn, khách hàng sẽ không làm gì cả”',
      },
      {
        Id: 102596,
        Text: 'Vì như vậy sẽ giúp khách hàng không phải kéo màn hình lên lên xuống xuống để xem được hết các sản phẩm',
      },
      {
        Id: 102597,
        Text: 'Vì như vậy sẽ giúp khách hàng tiết kiệm thời gian mua sắm',
      },
      {
        Id: 102598,
        Text: 'Vì đó là chuẩn mực của một website bán hàng',
      },
    ],
  },
  {
    Id: 24728,
    Text: 'Khi website của bạn đã có lượng truy cập cao, làm thế nào để tối đa hóa lợi nhuận từ lượng truy cập cao đó?',
    Marks: 1,
    AnswerId: 102601,
    Answers: [
      {
        Id: 102599,
        Text: 'Bán thêm sản phẩm của đối tác',
      },
      {
        Id: 102600,
        Text: 'Thực hiện liên kết hợp tác với nhiều đối tác khác',
      },
      {
        Id: 102601,
        Text: 'Tất cả các phương án trên',
      },
      {
        Id: 102602,
        Text: 'Bán quảng cáo',
      },
    ],
  },
  {
    Id: 24729,
    Text: 'Trong quá trình thu thập thông tin về khách hàng, bạn không nên:',
    Marks: 1,
    AnswerId: 102603,
    Answers: [
      {
        Id: 102603,
        Text: 'Lấy các thông tin nhạy cảm về khách hàng',
      },
      {
        Id: 102604,
        Text: 'Làm cho form nhập liệu ngắn gọn vì như thế sẽ thu thập không đủ thông tin',
      },
      {
        Id: 102605,
        Text: 'Lấy thông tin về địa chỉ email của khách hàng',
      },
      {
        Id: 102606,
        Text: 'Tất cả các phương án trên',
      },
    ],
  },
  {
    Id: 24730,
    Text: 'Tại sao website của bạn không nên quá phân mảnh bởi quá nhiều ảnh và Button?',
    Marks: 1,
    AnswerId: 102607,
    Answers: [
      {
        Id: 102607,
        Text: 'Vì khách hàng sẽ phải đối mặt với quá nhiều lựa chọn và họ sẽ bối rối và kết quả là họ sẽ không thực hiện hành động gì',
      },
      {
        Id: 102608,
        Text: 'Vì như vậy sẽ làm cho khách hàng phải cuộn màn hình lên xuống nhiều lần để tìm được thông tin mà họ cần',
      },
      {
        Id: 102609,
        Text: 'Vì như vậy sẽ làm cho khách hàng mất thời gian để tìm được thông tin mà họ cần',
      },
      {
        Id: 102610,
        Text: 'Vì như vậy sẽ làm cho website trở nên rất nặng nề và làm giảm tốc độ hiển thị',
      },
    ],
  },
  {
    Id: 24731,
    Text: 'Bạn đang thực hiện việc đẩy nội dung lên máy chủ của Google, để Google thực hiện việc copy nội dung của bạn càng nhanh càng tốt. Vậy thì bạn nên làm gì?',
    Marks: 1,
    AnswerId: 102613,
    Answers: [
      {
        Id: 102611,
        Text: 'Liên hệ tới nhân viên hỗ trợ của Google và đề nghị họ thực hiện việc copy mọi trang web của bạn lên máy chủ Google',
      },
      {
        Id: 102612,
        Text: 'Bạn phải trả tiền cho Google để Google thực hiện việc copy nội dung lên máy chủ nhanh nhất có thể',
      },
      {
        Id: 102613,
        Text: 'Loại bỏ những thứ như Flash, JavaScript, thẻ Frame,..là những thứ mà Google rất khó hiểu sau đó đẩy Sitemap lên Google',
      },
      {
        Id: 102614,
        Text: 'Tất cả đáp án đều sai',
      },
    ],
  },
  {
    Id: 24732,
    Text: 'Giả sử bạn có một Sitemap và bạn đẩy sitemap này lên 3 cỗ máy tìm kiếm khác nhau (Yahoo, Google, Bing). Vậy thì lợi ích bạn thu được là gì?',
    Marks: 1,
    AnswerId: 102615,
    Answers: [
      {
        Id: 102615,
        Text: 'Các trang web xuất hiện trong sitemap sẽ nhanh được xuất hiện trong kết quả tìm kiếm hơn',
      },
      {
        Id: 102616,
        Text: 'Tất cả các trang web được đề cập trong sitemap sẽ có vị trí SEO tốt hơn trong cả 3 cỗ máy tìm kiếm',
      },
      {
        Id: 102617,
        Text: 'Các cỗ máy tìm kiếm đó sẽ không thực hiện việc copy nội dung của các trang web của bạn về máy chủ nữa vì đã có sitemap',
      },
      {
        Id: 102618,
        Text: 'Tất cả đáp án đều sai',
      },
    ],
  },
  {
    Id: 24733,
    Text: 'Hành động nào sau đây thuộc vào việc SEO-Onpage?',
    Marks: 1,
    AnswerId: 102622,
    Answers: [
      {
        Id: 102619,
        Text: 'Tạo link từ website của bạn ra bên ngoài',
      },
      {
        Id: 102620,
        Text: 'Tạo link từ các website bên ngoài tới website của bạn',
      },
      {
        Id: 102621,
        Text: 'Tất cả các đáp án đều sai',
      },
      {
        Id: 102622,
        Text: 'Tạo link giữa các trang web trong cùng website của bạn',
      },
    ],
  },
  {
    Id: 24734,
    Text: 'Việc định tuyến các chức năng trên webiste của bạn được thực hiện bằng Flash và JavaScript. Điều này làm cho Google rất khó khăn trong việc đọc và hiểu nội dung website của bạn. Nhưng bạn lại không muốn bỏ Flash và JavaScript đi. Vậy thì giải pháp của bạn',
    Marks: 1,
    AnswerId: 102623,
    Answers: [
      {
        Id: 102623,
        Text: 'Dùng kỹ thuật khác như CSS để thay thế Flash và JavaScript',
      },
      {
        Id: 102624,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 102625,
        Text: 'Dùng kỹ thuật Cloarking: Với user thì hiển thị nội dung khác, còn với Google thì hiển thị nội dung khác',
      },
      {
        Id: 102626,
        Text: 'Tạo các link có chứa chữ văn bản thông thường ứng với các menu và để vào phần cuối cùng (footer) của trang web',
      },
    ],
  },
  {
    Id: 24735,
    Text: 'Bạn có thể xem chỉ số Page Rank của một trang web ở chỗ nào?',
    Marks: 1,
    AnswerId: 102630,
    Answers: [
      {
        Id: 102627,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 102628,
        Text: 'Trong sitemap của website của bạn',
      },
      {
        Id: 102629,
        Text: 'Trong thư mục của Yahoo',
      },
      {
        Id: 102630,
        Text: 'Trong công cụ Google (Google Toolbar)',
      },
    ],
  },
  {
    Id: 24736,
    Text: 'Giả sử bạn bán váy cưới và công ty của bạn nằm ở TP Hồ Chí Minh. Vậy thì từ khóa nào sẽ ít cạnh tranh nhất và bạn dễ làm SEO cho từ khóa đó lên #1 nhất?',
    Marks: 1,
    AnswerId: 102632,
    Answers: [
      {
        Id: 102631,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 102632,
        Text: 'Bán váy cưới TP HCM',
      },
      {
        Id: 102633,
        Text: 'Bán váy cưới',
      },
      {
        Id: 102634,
        Text: 'Váy cưới',
      },
    ],
  },
  {
    Id: 24737,
    Text: 'Trong quá trình làm SEO, một từ khóa là:',
    Marks: 1,
    AnswerId: 102637,
    Answers: [
      {
        Id: 102635,
        Text: 'Là một từ bạn gõ vào máy để mở khóa máy tính',
      },
      {
        Id: 102636,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 102637,
        Text: 'Là một từ mà user sẽ dùng để gõ vào Google để tìm kiếm thông tin về sản phẩm',
      },
      {
        Id: 102638,
        Text: 'Một từ xuất hiện nhiều nhất trên website',
      },
    ],
  },
  {
    Id: 24738,
    Text: 'Chỉ số Page Rank của Google thay đổi với tần suất bao lâu một lần?',
    Marks: 1,
    AnswerId: 102640,
    Answers: [
      {
        Id: 102639,
        Text: '2 tháng một lần',
      },
      {
        Id: 102640,
        Text: 'Không thể biết được',
      },
      {
        Id: 102641,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 102642,
        Text: 'Thay đổi liên tục',
      },
    ],
  },
  {
    Id: 24739,
    Text: 'Trong quá trình làm SEO, chiến thuật chọn từ khóa dạng nào sẽ tốt hơn?',
    Marks: 1,
    AnswerId: 102646,
    Answers: [
      {
        Id: 102643,
        Text: 'Từ khóa với lượng trang kết quả chứa từ khóa đó nhiều nhất',
      },
      {
        Id: 102644,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 102645,
        Text: 'Từ khóa với lượng tìm kiếm cao nhất',
      },
      {
        Id: 102646,
        Text: 'Từ khóa với chỉ số KEI cao nhất',
      },
    ],
  },
  {
    Id: 24740,
    Text: 'Giả sử website của bạn bán sách, vậy thì URL nào sau đây là thân thiện với SEO nhất?',
    Marks: 1,
    AnswerId: 102649,
    Answers: [
      {
        Id: 102647,
        Text: 'http://www.mybookstore.com/showgood.php?category=31\u0026good=142',
      },
      {
        Id: 102648,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 102649,
        Text: 'http://www.mybookstore.com/fpt/angels-and-demons.html',
      },
      {
        Id: 102650,
        Text: 'http://www.mybookstore.com/fpt\u0026good=angels-and-demons',
      },
    ],
  },
  {
    Id: 24741,
    Text: 'Mối quan hệ giữa AdWords và SEO là (hãy chọn đáp án đúng nhất):',
    Marks: 1,
    AnswerId: 102651,
    Answers: [
      {
        Id: 102651,
        Text: 'AdWords và SEO không ảnh hưởng gì nhau',
      },
      {
        Id: 102652,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 102653,
        Text: 'Bạn làm SEO tốt sẽ giúp cho chỉ số điểm chất lượng (QS) trong AdWords tăng',
      },
      {
        Id: 102654,
        Text: 'Bạn chay AdWords có thể sẽ giúp kết quả SEO tăng hạng',
      },
    ],
  },
  {
    Id: 24742,
    Text: 'Hành động nào cần phải thực hiện để kích hoạt một tài khoản AdWords mới?',
    Marks: 1,
    AnswerId: 102655,
    Answers: [
      {
        Id: 102655,
        Text: 'Bạn cần phải điền thông tin về thanh toán vào AdWords',
      },
      {
        Id: 102656,
        Text: 'Khi bạn bổ sung từ khóa vào chiến dịch quảng cáo AdWords',
      },
      {
        Id: 102657,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 102658,
        Text: 'Bạn cần phải tạo một địa chỉ Gmail',
      },
    ],
  },
  {
    Id: 24743,
    Text: 'Khi chọn từ khóa trong AdWords bạn nên:',
    Marks: 1,
    AnswerId: 102662,
    Answers: [
      {
        Id: 102659,
        Text: 'Không nên sử dụng chế độ đối sánh từ khóa âm (negative matching)',
      },
      {
        Id: 102660,
        Text: 'Chỉ sử dụng chế độ đối sánh theo cụm từ (phrase matching)',
      },
      {
        Id: 102661,
        Text: 'Chỉ nên sử dụng chế độ đối sánh theo nghĩa rộng (broad matching)',
      },
      {
        Id: 102662,
        Text: 'Nên sử dụng kết hợp tất cả các hình thức đối sánh từ khóa',
      },
    ],
  },
  {
    Id: 24744,
    Text: 'Khi bạn chọn chế độ đấu giá CPC trong Google AdWords, vậy khi nào bạn sẽ bị mất tiền?',
    Marks: 1,
    AnswerId: 102664,
    Answers: [
      {
        Id: 102663,
        Text: 'Tất cả các đáp án đều sai',
      },
      {
        Id: 102664,
        Text: 'Khi user click vào quảng cáo của bạn',
      },
      {
        Id: 102665,
        Text: 'Khi quảng cáo xuất hiện trên Google',
      },
      {
        Id: 102666,
        Text: 'Khi user thực hiện hành động mua hàng',
      },
    ],
  },
  {
    Id: 24745,
    Text: 'Giả sử, quảng cáo AdWords của bạn đã chạy. Vậy bạn có thể điều chỉnh ngân sách số tiền chạy quảng cáo mỗi ngày vào lúc nào?',
    Marks: 1,
    AnswerId: 102667,
    Answers: [
      {
        Id: 102667,
        Text: 'Bạn có thể điều chỉnh bất kỳ khi nào bạn muốn',
      },
      {
        Id: 102668,
        Text: 'Mỗi ngày chỉ được điều chỉnh một lần',
      },
      {
        Id: 102669,
        Text: 'Không thể điều chỉnh lại số tiền ngân sách một khi quảng cáo đã chạy',
      },
      {
        Id: 102670,
        Text: 'Tất cả đáp án đều sai',
      },
    ],
  },
  {
    Id: 24746,
    Text: 'Với chế độ đấu giá CPM, khi nào bạn sẽ phải trả tiền cho Google?',
    Marks: 1,
    AnswerId: 102672,
    Answers: [
      {
        Id: 102671,
        Text: 'Khi user click vào quảng cáo của bạn',
      },
      {
        Id: 102672,
        Text: 'Mỗi khi quảng cáo của bạn xuất hiện',
      },
      {
        Id: 102673,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 102674,
        Text: 'Khi user thực hiện hành động mua hàng',
      },
    ],
  },
  {
    Id: 24747,
    Text: 'Với AdWords, bạn có thể cho quảng cáo của bạn xuất hiện trên:',
    Marks: 1,
    AnswerId: 102675,
    Answers: [
      {
        Id: 102675,
        Text: 'Tất cả các đáp án trên',
      },
      {
        Id: 102676,
        Text: 'Yotube.Com',
      },
      {
        Id: 102677,
        Text: 'Google.Com, Google.Com.Vn',
      },
      {
        Id: 102678,
        Text: 'Gmail.Com',
      },
    ],
  },
  {
    Id: 24748,
    Text: 'Bạn có thể chỉnh sửa tài khoản AdWords của bạn:',
    Marks: 1,
    AnswerId: 102679,
    Answers: [
      {
        Id: 102679,
        Text: 'Bất kỳ khi nào bạn muốn',
      },
      {
        Id: 102680,
        Text: 'Tối đa là 50 lần',
      },
      {
        Id: 102681,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 102682,
        Text: 'Mỗi ngày tối đa 1 lần',
      },
    ],
  },
  {
    Id: 24749,
    Text: 'Một chỉ số được dùng để ước lượng số tiền ngân sách quảng cáo hàng ngày của một chiến dịch AdWords là:',
    Marks: 1,
    AnswerId: 102683,
    Answers: [
      {
        Id: 102683,
        Text: 'Tất cả các đáp án đều sai',
      },
      {
        Id: 102684,
        Text: 'Số lần xuất hiện quảng cáo',
      },
      {
        Id: 102685,
        Text: 'Chỉ số CTR',
      },
      {
        Id: 102686,
        Text: 'Số đơn hàng',
      },
    ],
  },
  {
    Id: 24750,
    Text: 'Khi nào thì AdWords sẽ thực hiện cơ chế đấu giá để quyết định xem quảng cáo của ai sẽ được hiển thị?',
    Marks: 1,
    AnswerId: 102689,
    Answers: [
      {
        Id: 102687,
        Text: 'Mỗi ngày 1 lần vào lúc 6 giờ sáng',
      },
      {
        Id: 102688,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 102689,
        Text: 'Mỗi khi user gõ một từ khóa lên Google',
      },
      {
        Id: 102690,
        Text: 'Cứ 2 tiếng một lần, AdWords sẽ thực hiện việc đấu giá',
      },
    ],
  },
  {
    Id: 24751,
    Text: 'Bạn nên làm những gì khi thực hiện marketing trên Facebook',
    Marks: 1,
    AnswerId: 102692,
    Answers: [
      {
        Id: 102691,
        Text: 'Nên tạo ra các sự kiện thú vị và lôi kéo mọi người tham gia',
      },
      {
        Id: 102692,
        Text: 'Tất cả các đáp án đều đúng',
      },
      {
        Id: 102693,
        Text: 'Nên tạo ra một số Group mà bạn đam mê và lôi kéo mọi người tham gia',
      },
      {
        Id: 102694,
        Text: 'Nên tham gia vào càng nhiều Group càng tốt',
      },
    ],
  },
  {
    Id: 24752,
    Text: 'Nên làm những điều gì trên Facebook?',
    Marks: 1,
    AnswerId: 102696,
    Answers: [
      {
        Id: 102695,
        Text: 'Bán hàng trên Facebook',
      },
      {
        Id: 102696,
        Text: 'Giúp đỡ mọi người',
      },
      {
        Id: 102697,
        Text: 'Viết bài thật thường xuyên và liên tục (cập nhật hàng giờ, hàng phút)',
      },
      {
        Id: 102698,
        Text: 'Gửi cùng một thông điệp tới tất cả mọi người',
      },
    ],
  },
  {
    Id: 24753,
    Text: 'Tại sao mọi người lại thích mua hàng từ bạn bè? (chọn đáp án đúng nhất)',
    Marks: 1,
    AnswerId: 102702,
    Answers: [
      {
        Id: 102699,
        Text: 'Tất cả các đáp án đều sai',
      },
      {
        Id: 102700,
        Text: 'Họ hi vọng sẽ được phục vụ tốt hơn',
      },
      {
        Id: 102701,
        Text: 'Họ hi vọng sẽ có sản phẩm chất lượng',
      },
      {
        Id: 102702,
        Text: 'Họ hi vọng sẽ có những ưu đãi đặc biệt',
      },
    ],
  },
  {
    Id: 24754,
    Text: 'Cách đúng đắn để thực hiện Marketing trên mạng xã hội là:',
    Marks: 1,
    AnswerId: 102705,
    Answers: [
      {
        Id: 102703,
        Text: 'Kết bạn với mọi người',
      },
      {
        Id: 102704,
        Text: 'Tạo dựng các mối quan hệ tin cậy và giá trị',
      },
      {
        Id: 102705,
        Text: 'Tất cả các đáp án đều đúng',
      },
      {
        Id: 102706,
        Text: 'Giúp đỡ mọi người',
      },
    ],
  },
  {
    Id: 24755,
    Text: 'Số lượng người dùng mạng xã hội nào ở Việt Nam đông nhất?',
    Marks: 1,
    AnswerId: 102710,
    Answers: [
      {
        Id: 102707,
        Text: 'Twitter',
      },
      {
        Id: 102708,
        Text: 'Yahoo 360 Plus',
      },
      {
        Id: 102709,
        Text: 'LinkedIn',
      },
      {
        Id: 102710,
        Text: 'Facebook',
      },
    ],
  },
  {
    Id: 24756,
    Text: 'Ngân sách chạy quảng cáo trên Facebook tối thiểu là bao nhiêu tiền một ngày?',
    Marks: 1,
    AnswerId: 102714,
    Answers: [
      {
        Id: 102711,
        Text: '20,000 VNĐ',
      },
      {
        Id: 102712,
        Text: '10,000 VNĐ',
      },
      {
        Id: 102713,
        Text: '1,000 VNĐ',
      },
      {
        Id: 102714,
        Text: '1$',
      },
    ],
  },
  {
    Id: 24757,
    Text: 'Cách để quảng cáo của bạn được Facebook duyệt nhanh hơn là:',
    Marks: 1,
    AnswerId: 102717,
    Answers: [
      {
        Id: 102715,
        Text: 'Thuê chuyên gia',
      },
      {
        Id: 102716,
        Text: 'Bỏ ảnh đi để quảng cáo chiếm kích thước nhẹ hơn',
      },
      {
        Id: 102717,
        Text: 'Chỉnh sửa câu quảng cáo sao cho hợp lệ',
      },
      {
        Id: 102718,
        Text: 'Tăng tiền đấu giá lên thật cao',
      },
    ],
  },
  {
    Id: 24758,
    Text: 'Trong mẫu quảng cáo trên Facebook, dòng tiêu đề được phép có tối đa bao nhiêu ký tự?',
    Marks: 1,
    AnswerId: 102719,
    Answers: [
      {
        Id: 102719,
        Text: '30',
      },
      {
        Id: 102720,
        Text: '40',
      },
      {
        Id: 102721,
        Text: '25',
      },
      {
        Id: 102722,
        Text: '35',
      },
    ],
  },
  {
    Id: 24759,
    Text: 'Bạn có thể giúp đỡ mọi người qua mạng xã hội theo các cách nào mà bạn không phải bỏ tiền mặt ra?',
    Marks: 1,
    AnswerId: 102726,
    Answers: [
      {
        Id: 102723,
        Text: 'Trả lời các câu hỏi của họ',
      },
      {
        Id: 102724,
        Text: 'Tìm xem website của họ có đường link nào bị chết không',
      },
      {
        Id: 102725,
        Text: 'Giới thiệu với họ các đường link có bài viết hữu ích với họ',
      },
      {
        Id: 102726,
        Text: 'Tất cả các đáp án đều đúng',
      },
    ],
  },
  {
    Id: 24760,
    Text: 'Bạn cần chạy quảng cáo trên Facebook (dạng Facebook Ads), vậy độ tuổi nhỏ nhất của khách hàng mà bạn được phép tiếp cận là bao nhiêu?',
    Marks: 1,
    AnswerId: 102730,
    Answers: [
      {
        Id: 102727,
        Text: '16 tuổi',
      },
      {
        Id: 102728,
        Text: '18 tuổi',
      },
      {
        Id: 102729,
        Text: '15 tuổi',
      },
      {
        Id: 102730,
        Text: '13 tuổi',
      },
    ],
  },
  {
    Id: 24761,
    Text: 'Số tiền ngân sách chạy quảng cáo trên Facebook tối thiểu phải gấp bao nhiêu lần số tiền Maximum CPC?',
    Marks: 1,
    AnswerId: 102733,
    Answers: [
      {
        Id: 102731,
        Text: '1.5 lần',
      },
      {
        Id: 102732,
        Text: '2.5 lần',
      },
      {
        Id: 102733,
        Text: '2 lần',
      },
      {
        Id: 102734,
        Text: '3 lần',
      },
    ],
  },
  {
    Id: 24762,
    Text: 'Tại sao mọi người lại thích mua hàng từ bạn bè? (chọn đáp án đúng nhất)',
    Marks: 1,
    AnswerId: 102736,
    Answers: [
      {
        Id: 102735,
        Text: 'Tất cả các đáp án đều sai',
      },
      {
        Id: 102736,
        Text: 'Họ hi vọng sẽ có những ưu đãi đặc biệt',
      },
      {
        Id: 102737,
        Text: 'Họ hi vọng sẽ được phục vụ tốt hơn',
      },
      {
        Id: 102738,
        Text: 'Họ hi vọng sẽ có sản phẩm chất lượng',
      },
    ],
  },
  {
    Id: 24763,
    Text: 'Cách đúng đắn để thực hiện Marketing trên mạng xã hội là:',
    Marks: 1,
    AnswerId: 102740,
    Answers: [
      {
        Id: 102739,
        Text: 'Giúp đỡ mọi người',
      },
      {
        Id: 102740,
        Text: 'Tất cả các đáp án khác',
      },
      {
        Id: 102741,
        Text: 'Tạo dựng các mối quan hệ tin cậy và giá trị',
      },
      {
        Id: 102742,
        Text: 'Kết bạn với mọi người',
      },
    ],
  },
  {
    Id: 24764,
    Text: 'Sự khác biệt giữa Facebook và LinkedIn là gì?',
    Marks: 1,
    AnswerId: 102743,
    Answers: [
      {
        Id: 102743,
        Text: 'Facebook nhắm tới mọi user cá nhân; Còn LinkedIn nhắm tới doanh nghiệp',
      },
      {
        Id: 102744,
        Text: 'LinkedIn đông người sử dụng hơn Facebook',
      },
      {
        Id: 102745,
        Text: 'Facebook đông người sử dụng hơn LinkedIn',
      },
      {
        Id: 102746,
        Text: 'Không có sự khác biệt giữa Facebook và LinkedIn',
      },
    ],
  },
  {
    Id: 24765,
    Text: 'Số Friend tối đa mà mỗi người được phép có trên Facebook là:',
    Marks: 1,
    AnswerId: 102748,
    Answers: [
      {
        Id: 102747,
        Text: '2000',
      },
      {
        Id: 102748,
        Text: '5000',
      },
      {
        Id: 102749,
        Text: '1000',
      },
      {
        Id: 102750,
        Text: '3000',
      },
    ],
  },
  {
    Id: 24766,
    Text: 'Trong mẫu quảng cáo trên Facebook, dòng tiêu đề được phép có tối đa bao nhiêu ký tự?',
    Marks: 1,
    AnswerId: 102754,
    Answers: [
      {
        Id: 102751,
        Text: '40',
      },
      {
        Id: 102752,
        Text: '30',
      },
      {
        Id: 102753,
        Text: '35',
      },
      {
        Id: 102754,
        Text: '25',
      },
    ],
  },
  {
    Id: 24767,
    Text: 'Nên tạo ra những video dạng như thế nào trên Youtube để thực hiện marketing?',
    Marks: 1,
    AnswerId: 102756,
    Answers: [
      {
        Id: 102755,
        Text: 'Tạo ra những video độc đáo',
      },
      {
        Id: 102756,
        Text: 'Tất cả các đáp án trên',
      },
      {
        Id: 102757,
        Text: 'Tạo ra những video hữu ích',
      },
      {
        Id: 102758,
        Text: 'Tạo ra những video hài hước',
      },
    ],
  },
  {
    Id: 24768,
    Text: 'Twitter qui định rằng mỗi bài viết (tweet) chỉ được phép không được vượt quá:',
    Marks: 1,
    AnswerId: 102759,
    Answers: [
      {
        Id: 102759,
        Text: '140 ký tự',
      },
      {
        Id: 102760,
        Text: '256 ký tự',
      },
      {
        Id: 102761,
        Text: '128 ký tự',
      },
      {
        Id: 102762,
        Text: '500 ký tự',
      },
    ],
  },
  {
    Id: 24769,
    Text: 'Những công ty muốn thực hiện marketing tới những công ty khác (tức thực hiện marketing B2B - Business to Business) thì sẽ nên sử dụng:',
    Marks: 1,
    AnswerId: 102763,
    Answers: [
      {
        Id: 102763,
        Text: 'LinkedIn',
      },
      {
        Id: 102764,
        Text: 'Facebook',
      },
      {
        Id: 102765,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 102766,
        Text: 'Twitter',
      },
    ],
  },
  {
    Id: 24770,
    Text: 'Kích thước chuẩn của ảnh được sử dụng trong các mẫu quảng cáo của Facebook là',
    Marks: 1,
    AnswerId: 102769,
    Answers: [
      {
        Id: 102767,
        Text: '56 pixel theo chiều rộng X 100 pixel theo chiều cao',
      },
      {
        Id: 102768,
        Text: '32 pixel theo chiều rộng X 48 pixel theo chiều cao',
      },
      {
        Id: 102769,
        Text: '100 pixel theo chiều rộng X 72 pixel theo chiều cao',
      },
      {
        Id: 102770,
        Text: 'Tất cả đáp án đều sai',
      },
    ],
  },
  {
    Id: 24771,
    Text: 'Theo khảo sát gần đây tại Mỹ, chi phí quảng cáo trung bình để thu về được một đơn hàng qua quảng cáo Banner là:',
    Marks: 1,
    AnswerId: 102774,
    Answers: [
      {
        Id: 102771,
        Text: '100$',
      },
      {
        Id: 102772,
        Text: '26.75$',
      },
      {
        Id: 102773,
        Text: '17.47$',
      },
      {
        Id: 102774,
        Text: '71.89$',
      },
    ],
  },
  {
    Id: 24772,
    Text: 'Công thức để làm nội dung trong khi tiến hành Email Marketing là:',
    Marks: 1,
    AnswerId: 102777,
    Answers: [
      {
        Id: 102775,
        Text: 'Tất cả các đáp án khác đều sai',
      },
      {
        Id: 102776,
        Text: '80% nội dung tốt + 20% quảng cáo',
      },
      {
        Id: 102777,
        Text: '95% nội dung tốt + 5% quảng cáo',
      },
      {
        Id: 102778,
        Text: '90% nội dung tốt + 10% quảng cáo',
      },
    ],
  },
  {
    Id: 24773,
    Text: 'Điều gì mang tính quyết định rất lớn đến việc email của bạn gửi đi có được bỏ vào Inbox hay không?',
    Marks: 1,
    AnswerId: 102781,
    Answers: [
      {
        Id: 102779,
        Text: 'Là địa chỉ IP của máy chủ gửi email',
      },
      {
        Id: 102780,
        Text: 'Là kỹ thuật gửi email',
      },
      {
        Id: 102781,
        Text: 'Là nội dung của email',
      },
      {
        Id: 102782,
        Text: 'Tất cả các đáp án đều sai',
      },
    ],
  },
  {
    Id: 24774,
    Text: 'Theo khảo sát gần đây tại Mỹ, chi phí quảng cáo trung bình để thu về được một đơn hàng qua email là:',
    Marks: 1,
    AnswerId: 102785,
    Answers: [
      {
        Id: 102783,
        Text: '71.89$',
      },
      {
        Id: 102784,
        Text: '100$',
      },
      {
        Id: 102785,
        Text: '\u003c7$',
      },
      {
        Id: 102786,
        Text: '17.47$',
      },
    ],
  },
  {
    Id: 24775,
    Text: 'Cách đúng đắn nhất để thực hiện Email Marketing là gì?',
    Marks: 1,
    AnswerId: 102787,
    Answers: [
      {
        Id: 102787,
        Text: 'Tạo ra nội dung thật tốt sau đó tìm cách quảng cáo cho nội dung đó và đề nghị user điền thông tin của họ vào Form',
      },
      {
        Id: 102788,
        Text: 'Nhờ một người làm email marketing chuyên nghiệp gửi email hộ cho bạn',
      },
      {
        Id: 102789,
        Text: 'Tất cả các đáp án đều sai',
      },
      {
        Id: 102790,
        Text: 'Bỏ tiền ra mua danh sách email rồi gửi email cho danh sách đó',
      },
    ],
  },
  {
    Id: 24776,
    Text: 'Làm cách nào để đo đạc khả năng nhận dạng thương hiệu khi thực hiện một chiến dịch email marketing?',
    Marks: 1,
    AnswerId: 102793,
    Answers: [
      {
        Id: 102791,
        Text: 'Dựa vào tỷ lệ click vào đường link bên trong nội dung email',
      },
      {
        Id: 102792,
        Text: 'Dựa vào tỷ lệ mở email',
      },
      {
        Id: 102793,
        Text: 'Dựa vào tỷ lệ mở email và tỷ lệ click vào đường link bên trong nội dung email',
      },
      {
        Id: 102794,
        Text: 'Dựa vào doanh thu',
      },
    ],
  },
  {
    Id: 24777,
    Text: 'Trong cùng 1 thời điểm, số lượng email được gửi đi đồng thời từ một tài khoản Yahoo Mail là',
    Marks: 1,
    AnswerId: 102797,
    Answers: [
      {
        Id: 102795,
        Text: '\u003c 300',
      },
      {
        Id: 102796,
        Text: '\u003c 500',
      },
      {
        Id: 102797,
        Text: '\u003c 200',
      },
      {
        Id: 102798,
        Text: '\u003c 400',
      },
    ],
  },
  {
    Id: 24778,
    Text: 'Hãy để nội dung email của bạn nằm trong một khung với độ rộng trong khoảng từ:',
    Marks: 1,
    AnswerId: 102799,
    Answers: [
      {
        Id: 102799,
        Text: '500-650 pixel là tối đa',
      },
      {
        Id: 102800,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 102801,
        Text: '800-1024 pixel là tối đa',
      },
      {
        Id: 102802,
        Text: 'Rộng thoải mái',
      },
    ],
  },
  {
    Id: 24779,
    Text: 'Khi tạo nội dung email để thực hiện email marketing bạn nên:',
    Marks: 1,
    AnswerId: 102806,
    Answers: [
      {
        Id: 102803,
        Text: 'Cho thật nhiều ảnh vào nội dung để email trông đẹp đẽ chuyên nghiệp',
      },
      {
        Id: 102804,
        Text: 'Tất cả các đáp án đều sai',
      },
      {
        Id: 102805,
        Text: 'Chỉ nên dùng email với nội dung ở định dạng văn bản thuần túy',
      },
      {
        Id: 102806,
        Text: 'Duy trì tỷ lệ ảnh / văn bản thấp',
      },
    ],
  },
  {
    Id: 24780,
    Text: 'Bạn có thể gửi email dưới những định dạng nào?',
    Marks: 1,
    AnswerId: 102809,
    Answers: [
      {
        Id: 102807,
        Text: 'Chỉ được phép gửi email dưới dạng văn bản thuần túy',
      },
      {
        Id: 102808,
        Text: 'Chỉ được phép gửi email dưới dạng HTML',
      },
      {
        Id: 102809,
        Text: 'Được phép gửi email dưới cả 2 dạng là văn bản thuần túy và HTML',
      },
      {
        Id: 102810,
        Text: 'Tất cả các đáp án đều sai',
      },
    ],
  },
  {
    Id: 24781,
    Text: 'Trong Google Analytics:',
    Marks: 1,
    AnswerId: 102814,
    Answers: [
      {
        Id: 102811,
        Text: 'Một hồ sơ (profile) có thể bao gồm một hoặc nhiều tài sản (property)',
      },
      {
        Id: 102812,
        Text: 'Tất cả các đáp án đều sai',
      },
      {
        Id: 102813,
        Text: 'Hồ sơ (profile) và tài sản (property) không liên quan gì nhau',
      },
      {
        Id: 102814,
        Text: 'Một tài sản (Property) có thể bao gồm một hoặc nhiều hồ sơ (Profile)',
      },
    ],
  },
  {
    Id: 24782,
    Text: 'Nếu một user sử dụng trình duyệt đã bị tắt chức năng Java Script, vậy thì:',
    Marks: 1,
    AnswerId: 102815,
    Answers: [
      {
        Id: 102815,
        Text: 'Google Analytics sẽ không theo dõi được các hành động của user đó',
      },
      {
        Id: 102816,
        Text: 'Tất cả các đáp án đều sai',
      },
      {
        Id: 102817,
        Text: 'Google Analytics vẫn theo dõi được các hành động của user đó',
      },
      {
        Id: 102818,
        Text: 'Google Analytics vẫn theo dõi được các hành động của user đó nhưng không ổn định',
      },
    ],
  },
  {
    Id: 24783,
    Text: 'Sản phẩm Google Analytics được xây dựng từ hệ thống phân tích website của công ty Urchin?',
    Marks: 1,
    AnswerId: 102819,
    Answers: [
      {
        Id: 102819,
        Text: 'Đúng',
      },
      {
        Id: 102820,
        Text: 'Sai',
      },
    ],
  },
  {
    Id: 24784,
    Text: 'Bằng việc tích hợp với ____, bạn có thể theo dõi được chất lượng của website và tỷ lệ chuyển đổi thành khách hàng online',
    Marks: 1,
    AnswerId: 102821,
    Answers: [
      {
        Id: 102821,
        Text: 'Google Analytics',
      },
      {
        Id: 102822,
        Text: 'AdWords',
      },
      {
        Id: 102823,
        Text: 'Tất cả các đáp án đều sai',
      },
      {
        Id: 102824,
        Text: 'AdSense',
      },
    ],
  },
  {
    Id: 24785,
    Text: 'Việc thiết lập tài khoản Google Analytics là một việc:',
    Marks: 1,
    AnswerId: 102828,
    Answers: [
      {
        Id: 102825,
        Text: 'Tất cả các đáp án đều sai',
      },
      {
        Id: 102826,
        Text: 'sẽ phải trả tiền cho đại lý của Google',
      },
      {
        Id: 102827,
        Text: 'sẽ phải trả tiền cho Google',
      },
      {
        Id: 102828,
        Text: 'không hề bị mất tiền',
      },
    ],
  },
  {
    Id: 24786,
    Text: 'Nếu một user sử dụng trình duyệt đã bị tắt Cookies, vậy thì:',
    Marks: 1,
    AnswerId: 102832,
    Answers: [
      {
        Id: 102829,
        Text: 'Tất cả các đáp án đều sai',
      },
      {
        Id: 102830,
        Text: 'Google Analytics vẫn theo dõi được các hành động của user đó nhưng không ổn định',
      },
      {
        Id: 102831,
        Text: 'Google Analytics vẫn theo dõi được các hành động của user đó',
      },
      {
        Id: 102832,
        Text: 'Google Analytics sẽ không theo dõi được các hành động của user đó',
      },
    ],
  },
  {
    Id: 24787,
    Text: 'Chúng ta sẽ sử dụng cái gì để login vào hệ thống Google Analytics?',
    Marks: 1,
    AnswerId: 102836,
    Answers: [
      {
        Id: 102833,
        Text: 'Tất cả các đáp án đều sai',
      },
      {
        Id: 102834,
        Text: 'Tài sản (Property)',
      },
      {
        Id: 102835,
        Text: 'Người dùng (User)',
      },
      {
        Id: 102836,
        Text: 'Tài khoản (Account)',
      },
    ],
  },
  {
    Id: 24788,
    Text: 'Làm cách nào để biết được từ khóa nào là đáng giá hay không đáng giá đối với bạn?',
    Marks: 1,
    AnswerId: 102838,
    Answers: [
      {
        Id: 102837,
        Text: 'Sử dụng báo cáo lưu lượng (Over-lay Report)',
      },
      {
        Id: 102838,
        Text: 'Sử dụng báo cáo từ khóa (Keyword report)',
      },
      {
        Id: 102839,
        Text: 'Sử dụng báo cáo về những nội dung đứng đầu (Top Content)',
      },
      {
        Id: 102840,
        Text: 'Sử dụng báo cáo nguồn lưu lượng (Traffic Source Report)',
      },
    ],
  },
  {
    Id: 24789,
    Text: 'Thông tin về địa chỉ IP của người sử dụng cũng được Google Analytics thu thập?',
    Marks: 1,
    AnswerId: 102841,
    Answers: [
      {
        Id: 102841,
        Text: 'Đúng',
      },
      {
        Id: 102842,
        Text: 'Sai',
      },
    ],
  },
  {
    Id: 24790,
    Text: 'Google Analytics hoạt động được dựa trên công nghệ gì?',
    Marks: 1,
    AnswerId: 102844,
    Answers: [
      {
        Id: 102843,
        Text: 'XML và HTML',
      },
      {
        Id: 102844,
        Text: 'Cookies và Java Scripts',
      },
      {
        Id: 102845,
        Text: 'Cookies và XML',
      },
      {
        Id: 102846,
        Text: 'Java Scripts và XML',
      },
    ],
  },
]
export const JAAV = [
  {
    Id: 26120,
    Text: 'Package nào chứa các class kiểu dữ liệu',
    Marks: 1,
    AnswerId: 108224,
    Answers: [
      {
        Id: 108224,
        Text: 'java.lang',
      },
      {
        Id: 108225,
        Text: 'java.io',
      },
      {
        Id: 108226,
        Text: 'java.ouput',
      },
      {
        Id: 108227,
        Text: 'java.swing',
      },
      {
        Id: 108228,
        Text: 'java.util',
      },
      {
        Id: 108229,
        Text: 'java.input',
      },
    ],
  },
  {
    Id: 26121,
    Text: 'Trong file MyCode.java chứa đoạn code sau: public class MyClass{}public interface MyInterface{}Mô tả nào đúng với đoạn code này trong file MyCode?',
    Marks: 1,
    AnswerId: 108230,
    Answers: [
      {
        Id: 108230,
        Text: 'Đoạn code trên không có phương thức main()',
      },
      {
        Id: 108231,
        Text: 'MyClass phải kế thừa từ MyInterface',
      },
      {
        Id: 108232,
        Text: 'Không thể có một public class hoặc interface có cùng tên trong file code Java này.',
      },
      {
        Id: 108233,
        Text: 'MyClass phải thực thi MyInterface',
      },
      {
        Id: 108234,
        Text: 'Phải có một public class hoặc interface có tên là MyCode',
      },
      {
        Id: 108235,
        Text: 'Phải có nhiều public class hoặc interface có tên là MyCode',
      },
    ],
  },
  {
    Id: 26122,
    Text: 'Trong Java, 5/2 có kết quả là:',
    Marks: 1,
    AnswerId: 108240,
    Answers: [
      {
        Id: 108236,
        Text: '0',
      },
      {
        Id: 108237,
        Text: 'Có lỗi',
      },
      {
        Id: 108238,
        Text: '3',
      },
      {
        Id: 108239,
        Text: '2.5',
      },
      {
        Id: 108240,
        Text: '2',
      },
    ],
  },
  {
    Id: 26123,
    Text: 'Trong một package, đối với một thành phần (member) khi không khai báo từ khóa private, public, protected thì quyền truy cập đối với thành phần đó là',
    Marks: 1,
    AnswerId: 108244,
    Answers: [
      {
        Id: 108241,
        Text: 'Có thể truy cập bởi các class bên ngoài package.',
      },
      {
        Id: 108242,
        Text: 'Chỉ có thể truy cập trong cùng một class.',
      },
      {
        Id: 108243,
        Text: 'Có thể truy cập bởi các class kế thừa từ class này.',
      },
      {
        Id: 108244,
        Text: 'Có thể truy cập bởi các class trong cùng một package.',
      },
      {
        Id: 108245,
        Text: 'Có thể truy cập bởi các class là super của class này.',
      },
    ],
  },
  {
    Id: 26124,
    Text: 'Chọn câu trả lời đúng:interface chứa các method là',
    Marks: 1,
    AnswerId: 108248,
    Answers: [
      {
        Id: 108246,
        Text: 'Các method là final',
      },
      {
        Id: 108247,
        Text: 'Các method protected',
      },
      {
        Id: 108248,
        Text: 'Tất cả các method abstract',
      },
      {
        Id: 108249,
        Text: 'Các method là public',
      },
      {
        Id: 108250,
        Text: 'Các method là private',
      },
      {
        Id: 108251,
        Text: 'Một số method là abstract',
      },
    ],
  },
  {
    Id: 26125,
    Text: 'Đoạn code này có lỗi không?import java.util.*;package myPackage;class MyClass extends MyInterface {} interface MyInterface {}',
    Marks: 1,
    AnswerId: 108256,
    Answers: [
      {
        Id: 108252,
        Text: 'Interface MyInterface có thể kế thừa',
      },
      {
        Id: 108253,
        Text: 'Không có lỗi',
      },
      {
        Id: 108254,
        Text: 'Dòng import.java.util.* sai cú pháp',
      },
      {
        Id: 108255,
        Text: 'class MyClass phải được khai báo là public',
      },
      {
        Id: 108256,
        Text: 'Interface MyInterface không thể kế thừa',
      },
    ],
  },
  {
    Id: 26126,
    Text: 'Package nào được dùng để trình bày giao diện đồ họa?',
    Marks: 1,
    AnswerId: 108262,
    Answers: [
      {
        Id: 108257,
        Text: 'java.ouput',
      },
      {
        Id: 108258,
        Text: 'java.io',
      },
      {
        Id: 108259,
        Text: 'java.util',
      },
      {
        Id: 108260,
        Text: 'java.lang',
      },
      {
        Id: 108261,
        Text: 'java.input',
      },
      {
        Id: 108262,
        Text: 'java.swing',
      },
    ],
  },
  {
    Id: 26127,
    Text: 'Trong Java, chỉ số của mảng bắt đầu là',
    Marks: 1,
    AnswerId: 108265,
    Answers: [
      {
        Id: 108263,
        Text: '2',
      },
      {
        Id: 108264,
        Text: 'tùy ý',
      },
      {
        Id: 108265,
        Text: '0',
      },
      {
        Id: 108266,
        Text: '-1',
      },
      {
        Id: 108267,
        Text: '1',
      },
    ],
  },
  {
    Id: 26128,
    Text: 'Chọn câu trả lời đúng:Class abstract là',
    Marks: 1,
    AnswerId: 108270,
    Answers: [
      {
        Id: 108268,
        Text: 'Class chứa các phương thức được khai báo là public',
      },
      {
        Id: 108269,
        Text: 'Class chứa các phương thức được khai báo là private',
      },
      {
        Id: 108270,
        Text: 'Class chứa ít nhất một phương thức được khai báo là abstract',
      },
      {
        Id: 108271,
        Text: 'Class chứa các phương thức được khai báo là abtract',
      },
      {
        Id: 108272,
        Text: 'Class chứa các phương thức được khai báo là final',
      },
      {
        Id: 108273,
        Text: 'Class chứa các phương thức được khai báo là protected',
      },
    ],
  },
  {
    Id: 26129,
    Text: 'Trong Java, phép tính % có nghĩa là',
    Marks: 1,
    AnswerId: 108278,
    Answers: [
      {
        Id: 108274,
        Text: 'Phép chia',
      },
      {
        Id: 108275,
        Text: 'Phép chia lấy phần thập phân',
      },
      {
        Id: 108276,
        Text: 'Phép chia lấy phần nguyên',
      },
      {
        Id: 108277,
        Text: 'Phép tính lấy *',
      },
      {
        Id: 108278,
        Text: 'Phép chia lấy phần dư',
      },
    ],
  },
  {
    Id: 26130,
    Text: 'Class parent của Error là',
    Marks: 1,
    AnswerId: 108283,
    Answers: [
      {
        Id: 108279,
        Text: 'collections',
      },
      {
        Id: 108280,
        Text: 'exception',
      },
      {
        Id: 108281,
        Text: 'Object',
      },
      {
        Id: 108282,
        Text: 'IOException',
      },
      {
        Id: 108283,
        Text: 'throwable',
      },
      {
        Id: 108284,
        Text: 'RuntimeException',
      },
    ],
  },
  {
    Id: 26131,
    Text: 'Đoạn mã sau đây sẽ cho kết quả nào?public class ExceptionExample{ public static void throw_it (){ System.out.print("throw_it "); throw new RuntimeException(); } public static void main(String [] args){ try{ System.out.print("hello "); throwit(); }catch (E',
    Marks: 1,
    AnswerId: 108288,
    Answers: [
      {
        Id: 108285,
        Text: 'Có lỗi khi dịch',
      },
      {
        Id: 108286,
        Text: 'hello throw_it RuntimeException caught after',
      },
      {
        Id: 108287,
        Text: 'hello throw_it caught',
      },
      {
        Id: 108288,
        Text: 'hello throw_it caught finally after',
      },
    ],
  },
  {
    Id: 26132,
    Text: '\u0027throws\u0027 trong xử lý ngoại lệ là',
    Marks: 1,
    AnswerId: 108289,
    Answers: [
      {
        Id: 108289,
        Text: 'Phải xử lý các ngoại lệ đó',
      },
      {
        Id: 108290,
        Text: 'Không có phương án nào đúng',
      },
      {
        Id: 108291,
        Text: 'Nó sẽ được xử lý bởi Java Virtual Machine',
      },
      {
        Id: 108292,
        Text: 'Không cần xử lý',
      },
    ],
  },
  {
    Id: 26133,
    Text: 'Trong Java, các ngoại lệ được chia thành:',
    Marks: 1,
    AnswerId: 108296,
    Answers: [
      {
        Id: 108293,
        Text: '2 nhóm là \u0027error\u0027 và \u0027exception\u0027',
      },
      {
        Id: 108294,
        Text: '2 nhóm là \u0027complier\u0027 and \u0027run\u0027',
      },
      {
        Id: 108295,
        Text: '3 nhóm là \u0027checked\u0027, \u0027unchecked\u0027 and \u0027checking\u0027',
      },
      {
        Id: 108296,
        Text: '2 nhóm là \u0027check\u0027 và \u0027unchecked\u0027',
      },
    ],
  },
  {
    Id: 26134,
    Text: 'Tất cả các \u0027sub\u0027 class của class RuntimeException vàError là các ngoại lệ:',
    Marks: 1,
    AnswerId: 108298,
    Answers: [
      {
        Id: 108297,
        Text: 'Ngoại lệ RuntimeException',
      },
      {
        Id: 108298,
        Text: 'Ngoại lệ \u0027unchecked\u0027',
      },
      {
        Id: 108299,
        Text: 'Ngoại lệ \u0027ClassNotFoundException\u0027',
      },
      {
        Id: 108300,
        Text: 'Ngoại lệ \u0027checked\u0027',
      },
      {
        Id: 108301,
        Text: 'Ngoại lệ \u0027FileNotFoundException\u0027',
      },
      {
        Id: 108302,
        Text: 'Ngoại lệ InputMismatchException',
      },
    ],
  },
  {
    Id: 26135,
    Text: 'Các ngoại lệ \u0027check\u0027 là những ngoại lệ',
    Marks: 1,
    AnswerId: 108306,
    Answers: [
      {
        Id: 108303,
        Text: 'Được \u0027checked\u0027 bởi Java Virtual Machine',
      },
      {
        Id: 108304,
        Text: 'Cả 2 mục trên',
      },
      {
        Id: 108305,
        Text: 'Được check bởi người lập trình',
      },
      {
        Id: 108306,
        Text: 'Được \u0027checked\u0027 bởi Java Compiler',
      },
      {
        Id: 108307,
        Text: 'Không có phương án nào đúng',
      },
      {
        Id: 108308,
        Text: 'Được check bởi người sử dụng',
      },
    ],
  },
  {
    Id: 26136,
    Text: 'Class \u0027Throwable\u0027 là class để thực hiện các công việc',
    Marks: 1,
    AnswerId: 108309,
    Answers: [
      {
        Id: 108309,
        Text: 'Xử lý lỗi và ngoại lệ',
      },
      {
        Id: 108310,
        Text: 'Xử lý lỗi',
      },
      {
        Id: 108311,
        Text: 'Xử lý các thao tác với file',
      },
      {
        Id: 108312,
        Text: 'Xử lý ngoại lệ',
      },
    ],
  },
  {
    Id: 26137,
    Text: 'public class X { public static void main(String [] args) { try { badMethod(); System.out.print("A"); } catch (Exception ex) { System.out.print("B"); } finally { System.out.print("C"); } System.out.print("D"); } public static void badMethod() { throw new E',
    Marks: 1,
    AnswerId: 108316,
    Answers: [
      {
        Id: 108313,
        Text: 'finished',
      },
      {
        Id: 108314,
        Text: 'Finished',
      },
      {
        Id: 108315,
        Text: 'Arithmetic Exception',
      },
      {
        Id: 108316,
        Text: 'Có lỗi khi dịch.',
      },
      {
        Id: 108317,
        Text: 'Exception',
      },
      {
        Id: 108318,
        Text: 'ABCD',
      },
    ],
  },
  {
    Id: 26138,
    Text: 'Ngoại lệ \u0027InputMismatchException\u0027 xảy ra khi nào?',
    Marks: 1,
    AnswerId: 108319,
    Answers: [
      {
        Id: 108319,
        Text: 'Nhập sai kiểu dữ liệu',
      },
      {
        Id: 108320,
        Text: 'Nhập dữ liệu là số',
      },
      {
        Id: 108321,
        Text: 'Không chuyển được kiểu dữ liệu này thành kiểu dữ liệu khác',
      },
      {
        Id: 108322,
        Text: 'Nhập dữ liệu cho xâu ký tự là 1 số nguyên',
      },
      {
        Id: 108323,
        Text: 'Nhập dữ liệu cho xâu ký tự là 1 số thực',
      },
      {
        Id: 108324,
        Text: 'Nhập dữ liệu là xâu ký tự',
      },
    ],
  },
  {
    Id: 26139,
    Text: 'Đoạn code sau đây sẽ cho kết quả nào?public class MyProgram{ public static void main(String args[]){ try{ System.out.print("Hello world "); }finally{ System.out.println("Finally executing "); } }}',
    Marks: 1,
    AnswerId: 108328,
    Answers: [
      {
        Id: 108325,
        Text: 'Chương trình có lỗi vì không có ngoại lệ nào được dùng.',
      },
      {
        Id: 108326,
        Text: 'Chương trình có lỗi vì không có đủ try-catch-finally',
      },
      {
        Id: 108327,
        Text: 'Chương trình có lỗi vì không có mệnh đề \u0027catch\u0027.',
      },
      {
        Id: 108328,
        Text: 'Hello world Finally executing',
      },
      {
        Id: 108329,
        Text: 'Hello world.',
      },
      {
        Id: 108330,
        Text: 'Finally executing',
      },
    ],
  },
  {
    Id: 26140,
    Text: 'Tên của class abstract được sử dụng cho việc xuất dữ liệu luồng byte là:',
    Marks: 1,
    AnswerId: 108334,
    Answers: [
      {
        Id: 108331,
        Text: 'Writer',
      },
      {
        Id: 108332,
        Text: 'Reader',
      },
      {
        Id: 108333,
        Text: 'FileReader',
      },
      {
        Id: 108334,
        Text: 'OuputStream',
      },
      {
        Id: 108335,
        Text: 'FileWriter',
      },
      {
        Id: 108336,
        Text: 'InputStream',
      },
    ],
  },
  {
    Id: 26141,
    Text: 'Đoạn code sau đây sẽ cho kết quả nào? ? public static void main(String ags[]){ String a="abc"; String b=new String("abc"); System.out.println(a.equals(b)); System.out.println(a==b); }',
    Marks: 1,
    AnswerId: 108337,
    Answers: [
      {
        Id: 108337,
        Text: 'true false',
      },
      {
        Id: 108338,
        Text: 'false true',
      },
      {
        Id: 108339,
        Text: 'false false',
      },
      {
        Id: 108340,
        Text: 'true true',
      },
    ],
  },
  {
    Id: 26142,
    Text: 'Một luồng được sử dụng theo một mục đích thông thường, không dùng dữ liệu character được gọi là',
    Marks: 1,
    AnswerId: 108341,
    Answers: [
      {
        Id: 108341,
        Text: 'Luồng Byte (Byte Stream)',
      },
      {
        Id: 108342,
        Text: 'InputStream',
      },
      {
        Id: 108343,
        Text: 'Luồng Character (Character Stream)',
      },
      {
        Id: 108344,
        Text: 'Writer',
      },
      {
        Id: 108345,
        Text: 'Read',
      },
      {
        Id: 108346,
        Text: 'Reader',
      },
    ],
  },
  {
    Id: 26143,
    Text: 'Luồng Character được dùng để làm việc với loại dữ liệu nào',
    Marks: 1,
    AnswerId: 108350,
    Answers: [
      {
        Id: 108347,
        Text: 'Dữ liệu kiểu boolean',
      },
      {
        Id: 108348,
        Text: 'Dữ liệu kiểu Object',
      },
      {
        Id: 108349,
        Text: 'Dữ liệu kiểu float',
      },
      {
        Id: 108350,
        Text: 'Dữ liệu kiểu character',
      },
      {
        Id: 108351,
        Text: 'Dữ liệu kiểu boolean',
      },
      {
        Id: 108352,
        Text: 'Dữ liệu kiểu nguyên thủy',
      },
    ],
  },
  {
    Id: 26144,
    Text: 'Tên của class abstract được sử dụng cho việc đọc dữ liệu luồng character là:',
    Marks: 1,
    AnswerId: 108353,
    Answers: [
      {
        Id: 108353,
        Text: 'Reader',
      },
      {
        Id: 108354,
        Text: 'InputStream',
      },
      {
        Id: 108355,
        Text: 'FileWrite',
      },
      {
        Id: 108356,
        Text: 'FileRead',
      },
      {
        Id: 108357,
        Text: 'Writer',
      },
      {
        Id: 108358,
        Text: 'OuputStream',
      },
    ],
  },
  {
    Id: 26145,
    Text: 'Tên của class abstract được sử dụng cho việc nhập dữ liệu luồng byte là:',
    Marks: 1,
    AnswerId: 108363,
    Answers: [
      {
        Id: 108359,
        Text: 'Reader',
      },
      {
        Id: 108360,
        Text: 'DataInputStream',
      },
      {
        Id: 108361,
        Text: 'OuputStream',
      },
      {
        Id: 108362,
        Text: 'Writer',
      },
      {
        Id: 108363,
        Text: 'InputStream',
      },
      {
        Id: 108364,
        Text: 'DataOutputStream',
      },
    ],
  },
  {
    Id: 26146,
    Text: 'Tên của class abstract được sử dụng cho việc ghi dữ liệu luồng character là:',
    Marks: 1,
    AnswerId: 108367,
    Answers: [
      {
        Id: 108365,
        Text: 'FileReader',
      },
      {
        Id: 108366,
        Text: 'FileWriter',
      },
      {
        Id: 108367,
        Text: 'Writer',
      },
      {
        Id: 108368,
        Text: 'Reader',
      },
      {
        Id: 108369,
        Text: 'OuputStream',
      },
      {
        Id: 108370,
        Text: 'InputStream',
      },
    ],
  },
  {
    Id: 26147,
    Text: 'Đoạn code sau đây in ra kết quả thế nào?public static void changeNumber(int number) { number = number + 1; } public static void main(String ags[]) { int a = 10; System.out.println("a=" + a); changeNumber(a); System.out.println("a=" + a); }',
    Marks: 1,
    AnswerId: 108373,
    Answers: [
      {
        Id: 108371,
        Text: '11 10',
      },
      {
        Id: 108372,
        Text: '10 11',
      },
      {
        Id: 108373,
        Text: '10 10',
      },
      {
        Id: 108374,
        Text: '11 11',
      },
    ],
  },
  {
    Id: 26148,
    Text: 'Buffer là gì?',
    Marks: 1,
    AnswerId: 108379,
    Answers: [
      {
        Id: 108375,
        Text: 'Là một kiểu dữ liệu',
      },
      {
        Id: 108376,
        Text: 'Là cable nối giữa dữ liệu nguồn tới bus.',
      },
      {
        Id: 108377,
        Text: 'Là một luồng bất kỳ',
      },
      {
        Id: 108378,
        Text: 'Là một file chứa dữ liệu nhị phân',
      },
      {
        Id: 108379,
        Text: 'Là một phần bộ nhớ được sử dụng trong quá trình đọc hoặc ghi dữ liệu',
      },
    ],
  },
  {
    Id: 26149,
    Text: 'Đoạn code sau đây sẽ cho kết quả nào?public static void main(String ags[]){ String a="abc"; String b="abc"; System.out.println(a.equals(b)); System.out.println(a==b); }',
    Marks: 1,
    AnswerId: 108382,
    Answers: [
      {
        Id: 108380,
        Text: 'true false',
      },
      {
        Id: 108381,
        Text: 'false false',
      },
      {
        Id: 108382,
        Text: 'true true',
      },
      {
        Id: 108383,
        Text: 'false true',
      },
    ],
  },
  {
    Id: 26150,
    Text: 'Phương thức nào được dùng để bắt đầu một thread?',
    Marks: 1,
    AnswerId: 108384,
    Answers: [
      {
        Id: 108384,
        Text: 'start()',
      },
      {
        Id: 108385,
        Text: 'begin()',
      },
      {
        Id: 108386,
        Text: 'ignore()',
      },
      {
        Id: 108387,
        Text: 'run()',
      },
      {
        Id: 108388,
        Text: 'resume()',
      },
      {
        Id: 108389,
        Text: 'init()',
      },
    ],
  },
  {
    Id: 26151,
    Text: '3 phương thức của class Object là những phương thức nào?1.notify()2.notifyAll()3.isInterrupt()4.synchronized()5.interrupt()6.wait(long millisecond)7.sleep(long millisecond)8.yield()',
    Marks: 1,
    AnswerId: 108394,
    Answers: [
      {
        Id: 108390,
        Text: '1, 2 và 4',
      },
      {
        Id: 108391,
        Text: '2, 4 và 6',
      },
      {
        Id: 108392,
        Text: '2, 4 và 5',
      },
      {
        Id: 108393,
        Text: '2, 3, 4',
      },
      {
        Id: 108394,
        Text: '1, 2 và 6',
      },
      {
        Id: 108395,
        Text: '1, 3 và 4',
      },
    ],
  },
  {
    Id: 26152,
    Text: 'Hiện tượng dead lock xảy ra khi',
    Marks: 1,
    AnswerId: 108396,
    Answers: [
      {
        Id: 108396,
        Text: 'Các thread ở trạng thái \u0027chờ đợi\u0027 lẫn nhau dẫn đến tình trạng \u0027chờ đợi\u0027 mãi mãi',
      },
      {
        Id: 108397,
        Text: 'Các thread thực hiện công việc theo thứ tự ưu tiên',
      },
      {
        Id: 108398,
        Text: 'Có quá nhiều thread hoạt động nên dẫn đến trình trạng treo máy',
      },
      {
        Id: 108399,
        Text: 'Không có thread nào hoạt động',
      },
      {
        Id: 108400,
        Text: 'Các thread được \u0027đánh thức\u0027 bởi phương thức notifyAll()',
      },
    ],
  },
  {
    Id: 26153,
    Text: 'Thứ tự ưu tiên của một thread ở mức độ thông thường là',
    Marks: 1,
    AnswerId: 108401,
    Answers: [
      {
        Id: 108401,
        Text: 'NORM_PRIORITY',
      },
      {
        Id: 108402,
        Text: 'AVER_PRIORITY',
      },
      {
        Id: 108403,
        Text: 'MIN_PRIORITY',
      },
      {
        Id: 108404,
        Text: 'MAX_PRIORITY',
      },
    ],
  },
  {
    Id: 26154,
    Text: 'Phương thức nào được dùng để đăng ký một thread vào \u0027thread scheduler\u0027 ?',
    Marks: 1,
    AnswerId: 108407,
    Answers: [
      {
        Id: 108405,
        Text: 'wait()',
      },
      {
        Id: 108406,
        Text: 'run()',
      },
      {
        Id: 108407,
        Text: 'start()',
      },
      {
        Id: 108408,
        Text: 'notify()',
      },
      {
        Id: 108409,
        Text: 'sleep(500)',
      },
      {
        Id: 108410,
        Text: 'register()',
      },
    ],
  },
  {
    Id: 26155,
    Text: 'Phương thức nào được dùng để đưa một thread vào trạng thái \u0027ready\u0027 ?',
    Marks: 1,
    AnswerId: 108416,
    Answers: [
      {
        Id: 108411,
        Text: 'Phương thức wait()',
      },
      {
        Id: 108412,
        Text: 'Phương thức SetPriority()',
      },
      {
        Id: 108413,
        Text: 'Phương thức notify()',
      },
      {
        Id: 108414,
        Text: 'Phương thức read()',
      },
      {
        Id: 108415,
        Text: 'Phương thức join()',
      },
      {
        Id: 108416,
        Text: 'Khi khởi tạo một đối tượng thread mới và chưa gọi phương thức start()',
      },
    ],
  },
  {
    Id: 26156,
    Text: 'Các phương thức wait(), notify() và notifyAll() được định nghĩa trong class hoặc interface nào?',
    Marks: 1,
    AnswerId: 108417,
    Answers: [
      {
        Id: 108417,
        Text: 'Running',
      },
      {
        Id: 108418,
        Text: 'Runnable',
      },
      {
        Id: 108419,
        Text: 'MyThread',
      },
      {
        Id: 108420,
        Text: 'Thread',
      },
      {
        Id: 108421,
        Text: 'Class',
      },
      {
        Id: 108422,
        Text: 'Object',
      },
    ],
  },
  {
    Id: 26157,
    Text: 'Phương thức join() được dùng để',
    Marks: 1,
    AnswerId: 108424,
    Answers: [
      {
        Id: 108423,
        Text: 'Lấy ra độ ưu tiên của thread',
      },
      {
        Id: 108424,
        Text: 'Chờ đến khi một thread ngừng hoạt động',
      },
      {
        Id: 108425,
        Text: 'Chạy một thread',
      },
      {
        Id: 108426,
        Text: 'Không có phương án nào đúng',
      },
      {
        Id: 108427,
        Text: 'Kết nối 2 thread đang hoạt động',
      },
      {
        Id: 108428,
        Text: 'Kết nối 2 hay nhiều thread đang ở trạng thái \u0027waiting\u0027',
      },
    ],
  },
  {
    Id: 26158,
    Text: 'Phương thức nào được dùng để đưa một thread vào trạng thái \u0027sleeping\u0027 ?',
    Marks: 1,
    AnswerId: 108431,
    Answers: [
      {
        Id: 108429,
        Text: 'Phương thức notify()',
      },
      {
        Id: 108430,
        Text: 'Phương thức setName()',
      },
      {
        Id: 108431,
        Text: 'Phương thức sleep()',
      },
      {
        Id: 108432,
        Text: 'Phương thức SetPriority()',
      },
      {
        Id: 108433,
        Text: 'Phương thức join()',
      },
      {
        Id: 108434,
        Text: 'Phương thức read()',
      },
    ],
  },
  {
    Id: 26159,
    Text: 'Những method nào trong số các method sau đây làm cho một thread không còn ở trạng thái \u0027running\u00271. yield()2. wait()3. notify()4. notifyAll()5.sleep(100)6.aliveThread.join()7.Thread.killThread()',
    Marks: 1,
    AnswerId: 108439,
    Answers: [
      {
        Id: 108435,
        Text: '1, 6 và 7',
      },
      {
        Id: 108436,
        Text: '2, 3 và 5',
      },
      {
        Id: 108437,
        Text: '3, 4 và 7',
      },
      {
        Id: 108438,
        Text: '3, 4 và 6',
      },
      {
        Id: 108439,
        Text: '2, 5 và 6',
      },
      {
        Id: 108440,
        Text: '1, 2 và 3',
      },
    ],
  },
  {
    Id: 26160,
    Text: 'Trong java, enumeration là tập hợp của',
    Marks: 1,
    AnswerId: 108441,
    Answers: [
      {
        Id: 108441,
        Text: 'Các hằng số',
      },
      {
        Id: 108442,
        Text: 'Các giá trị double',
      },
      {
        Id: 108443,
        Text: 'Các giá trị float',
      },
      {
        Id: 108444,
        Text: 'Các giá trị int',
      },
      {
        Id: 108445,
        Text: 'Các biến',
      },
      {
        Id: 108446,
        Text: 'Cả biến và hằng số',
      },
    ],
  },
  {
    Id: 26161,
    Text: 'Đoạn code sau đây cho kết quả nào?Integer i1 = 1; int i2 = 1; System.out.println(i1 == i2);',
    Marks: 1,
    AnswerId: 108451,
    Answers: [
      {
        Id: 108447,
        Text: 'Có lỗi khi dịch',
      },
      {
        Id: 108448,
        Text: 'Không có phương án nào đúng',
      },
      {
        Id: 108449,
        Text: '1',
      },
      {
        Id: 108450,
        Text: 'Có lỗi cú pháp',
      },
      {
        Id: 108451,
        Text: 'TRUE',
      },
      {
        Id: 108452,
        Text: 'FALSE',
      },
    ],
  },
  {
    Id: 26162,
    Text: 'Đoạn code sau đây có hợp lệ?protected enum Test{ RED, GREEN, BLUE}',
    Marks: 1,
    AnswerId: 108453,
    Answers: [
      {
        Id: 108453,
        Text: 'Có lỗi khi dịch',
      },
      {
        Id: 108454,
        Text: 'Có ngoại lệ khi chạy',
      },
      {
        Id: 108455,
        Text: 'Có ngoại lệ ClassNotFound',
      },
      {
        Id: 108456,
        Text: 'Có ngoại lệ EnumNotFound',
      },
      {
        Id: 108457,
        Text: 'Không có lỗi',
      },
      {
        Id: 108458,
        Text: 'Có ngoại lệ FileNotFound',
      },
    ],
  },
  {
    Id: 26163,
    Text: 'Chọn câu trả lời đúng nhất:Class được khai báo là abstract là class có',
    Marks: 1,
    AnswerId: 108459,
    Answers: [
      {
        Id: 108459,
        Text: 'Chỉ chứa các method abstract',
      },
      {
        Id: 108460,
        Text: 'Có ít nhất một thuộc tính là abstract',
      },
      {
        Id: 108461,
        Text: 'Không có phương án nào đúng',
      },
      {
        Id: 108462,
        Text: 'Chứa nhiều method abstract',
      },
      {
        Id: 108463,
        Text: 'Có ít nhất một method là abstract',
      },
    ],
  },
  {
    Id: 26164,
    Text: 'Chọn câu trả lời đúng:final method có ý nghĩa gì?',
    Marks: 1,
    AnswerId: 108465,
    Answers: [
      {
        Id: 108464,
        Text: 'Là phương thức phải ghi đè',
      },
      {
        Id: 108465,
        Text: 'Là phương thức không thể ghi đè',
      },
      {
        Id: 108466,
        Text: 'Là phương thức có phạm vi truy cập là public',
      },
      {
        Id: 108467,
        Text: 'Là phương thức trong đó phải trả về một đối tượng.',
      },
      {
        Id: 108468,
        Text: 'Là phương thức có phạm vi truy cập là private',
      },
      {
        Id: 108469,
        Text: 'Là phương thức có phạm vi truy cập là protected',
      },
    ],
  },
  {
    Id: 26165,
    Text: 'Đoạn code sau đây cho kết quả nào?Integer one = new Integer(1);Integer two = new Integer(1);if(one == two){ System.out.println("Equal");}else{ System.out.println("Not equal");}',
    Marks: 1,
    AnswerId: 108471,
    Answers: [
      {
        Id: 108470,
        Text: 'TRUE',
      },
      {
        Id: 108471,
        Text: 'Not equal',
      },
      {
        Id: 108472,
        Text: 'Equal',
      },
      {
        Id: 108473,
        Text: 'FALSE',
      },
      {
        Id: 108474,
        Text: 'Không có phương án nào đúng',
      },
    ],
  },
  {
    Id: 26166,
    Text: 'Đoạn code sau đây có hợp lệ?1. public class Test{2. protected enum Test{3. RED, GREEN, BLUE }}',
    Marks: 1,
    AnswerId: 108475,
    Answers: [
      {
        Id: 108475,
        Text: 'Không có lỗi',
      },
      {
        Id: 108476,
        Text: 'Có ngoại lệ khi chạy',
      },
      {
        Id: 108477,
        Text: 'Có lỗi cú pháp',
      },
      {
        Id: 108478,
        Text: 'Có lỗi khi dịch',
      },
      {
        Id: 108479,
        Text: 'Có lỗi logic',
      },
      {
        Id: 108480,
        Text: 'Có lỗi ở dòng 2',
      },
    ],
  },
  {
    Id: 26167,
    Text: 'Đoạn code sau đây cho kết quả nào?Integer i1 = 1; Integer i2 = 1; System.out.println(i1 == i2);',
    Marks: 1,
    AnswerId: 108484,
    Answers: [
      {
        Id: 108481,
        Text: '1',
      },
      {
        Id: 108482,
        Text: 'Không có phương án nào đúng',
      },
      {
        Id: 108483,
        Text: 'Có lỗi khi dịch',
      },
      {
        Id: 108484,
        Text: 'TRUE',
      },
      {
        Id: 108485,
        Text: 'Có lỗi cú pháp',
      },
      {
        Id: 108486,
        Text: 'FALSE',
      },
    ],
  },
  {
    Id: 26168,
    Text: 'Chúng ta có thể khai báo một thuộc tính là private bên trong khối enum?',
    Marks: 1,
    AnswerId: 108489,
    Answers: [
      {
        Id: 108487,
        Text: 'Không có phương án nào đúng',
      },
      {
        Id: 108488,
        Text: 'Tùy thuộc vào yêu cầu',
      },
      {
        Id: 108489,
        Text: 'Không',
      },
      {
        Id: 108490,
        Text: 'Có thể',
      },
      {
        Id: 108491,
        Text: 'Có',
      },
      {
        Id: 108492,
        Text: 'Chỉ có thể khai báo public',
      },
    ],
  },
  {
    Id: 26169,
    Text: 'Chọn câu trả lời đúngCác hằng số trong enum phải được viết:',
    Marks: 1,
    AnswerId: 108493,
    Answers: [
      {
        Id: 108493,
        Text: 'Tất cả là chữ hoa',
      },
      {
        Id: 108494,
        Text: 'Tất cả là chữ thường',
      },
      {
        Id: 108495,
        Text: 'Chỉ những ký tự đầu tiên viết hoa',
      },
      {
        Id: 108496,
        Text: 'Viết chữ thường kèm theo số',
      },
      {
        Id: 108497,
        Text: 'Viết chữ thường kèm theo các ký tự * và ?',
      },
      {
        Id: 108498,
        Text: 'Chữ hoa xen kẽ chữ thường',
      },
    ],
  },
  {
    Id: 26170,
    Text: 'Đoạn code sau đây có lỗi ở dòng nào? 1.interface Containment{ 2. boolean contains(T obj); 3. } 4. public class MyClass implements Containment{ 5. T[] arrayRef; 6. MyClass(T[] arr){ 7. arrayRef = arr; 8. }',
    Marks: 1,
    AnswerId: 108499,
    Answers: [
      {
        Id: 108499,
        Text: 'Có lỗi ở dòng 4',
      },
      {
        Id: 108500,
        Text: 'Có lỗi ở dòng 6',
      },
      {
        Id: 108501,
        Text: 'Có lỗi ở dòng 1',
      },
      {
        Id: 108502,
        Text: 'Có lỗi ở dòng 5',
      },
      {
        Id: 108503,
        Text: 'Có lỗi ở dòng 2',
      },
      {
        Id: 108504,
        Text: 'Không có lỗi',
      },
    ],
  },
  {
    Id: 26171,
    Text: 'Đoạn code sau đây có kết quả nào?ArrayList mylist = new ArrayList(); mylist.add(10); mylist.add(“Hello”); mylist.add(15.75); int a = mylist.get(0); System.out.println("a="+a);',
    Marks: 1,
    AnswerId: 108510,
    Answers: [
      {
        Id: 108505,
        Text: 'a = 0',
      },
      {
        Id: 108506,
        Text: 'Có lỗi khi chạy',
      },
      {
        Id: 108507,
        Text: 'a = Hello',
      },
      {
        Id: 108508,
        Text: 'a = 10',
      },
      {
        Id: 108509,
        Text: 'a=',
      },
      {
        Id: 108510,
        Text: 'Có lỗi khi dịch',
      },
    ],
  },
  {
    Id: 26172,
    Text: 'Đoạn code sau đây có lỗi ở dòng nào? 1. class Gen{ 2. public T obj; 3. static T getObj(){ 4. return obj; 5. } 6. }',
    Marks: 1,
    AnswerId: 108511,
    Answers: [
      {
        Id: 108511,
        Text: 'Không có lỗi',
      },
      {
        Id: 108512,
        Text: 'Có lỗi ở dòng 2',
      },
      {
        Id: 108513,
        Text: 'Có lỗi ở dòng 3, 4',
      },
      {
        Id: 108514,
        Text: 'Có lỗi ở dòng 1, 2',
      },
      {
        Id: 108515,
        Text: 'Có lỗi ở dòng 3',
      },
      {
        Id: 108516,
        Text: 'Có lỗi ở dòng 2, 3',
      },
    ],
  },
  {
    Id: 26173,
    Text: 'Đoạn code sau đây có kết quả nào?ArrayList mylist = new ArrayList(); mylist.add(10); mylist.add(“Hello”); mylist.add(15.75); int a = (int)mylist.get(0); System.out.println("a="+a);',
    Marks: 1,
    AnswerId: 108517,
    Answers: [
      {
        Id: 108517,
        Text: 'Có lỗi khi dịch',
      },
      {
        Id: 108518,
        Text: 'a = Hello',
      },
      {
        Id: 108519,
        Text: 'a = 10',
      },
      {
        Id: 108520,
        Text: 'a=',
      },
      {
        Id: 108521,
        Text: 'a = 0',
      },
      {
        Id: 108522,
        Text: 'Có lỗi khi chạy',
      },
    ],
  },
  {
    Id: 26174,
    Text: 'Lập trình generic nghĩa là gì?',
    Marks: 1,
    AnswerId: 108525,
    Answers: [
      {
        Id: 108523,
        Text: 'Viết các chương trình chỉ được sử dụng với kiểu dữ liệu Integer',
      },
      {
        Id: 108524,
        Text: 'Viết chương trình để sử dụng với nhiều kiểu dữ liệu khác nhau kể cả kiểu nguyên thuỷ.',
      },
      {
        Id: 108525,
        Text: 'Viết chương trình để sử dụng với nhiều kiểu dữ liệu đối tượng khác nhau.',
      },
      {
        Id: 108526,
        Text: 'Viết các chương trình được sử dụng với 2 kiểu dữ liệu String và Integer.',
      },
      {
        Id: 108527,
        Text: 'Viết các chương trình chỉ được sử dụng với kiểu dữ liệu String',
      },
    ],
  },
  {
    Id: 26175,
    Text: 'Chọn câu trả lời đúngCó thể thêm các phần tử có kiểu gì vào trong ArrayList?',
    Marks: 1,
    AnswerId: 108528,
    Answers: [
      {
        Id: 108528,
        Text: 'Kiểu bất kỳ, nếu là kiểu nguyên thủy thì sẽ tự autoboxing',
      },
      {
        Id: 108529,
        Text: 'Chỉ có kiểu được kế thừa từ class Number',
      },
      {
        Id: 108530,
        Text: 'Kiểu bất kỳ được kế thừa từ class Object',
      },
      {
        Id: 108531,
        Text: 'Chỉ có kiểu là String và Char',
      },
      {
        Id: 108532,
        Text: 'Chỉ có kiểu Object',
      },
    ],
  },
  {
    Id: 26176,
    Text: 'Tại sao Java không hỗ trợ lập trình generic với kiểu dữ liệu nguyên thủy?',
    Marks: 1,
    AnswerId: 108533,
    Answers: [
      {
        Id: 108533,
        Text: 'Vì generic chỉ làm việc với kiểu Number nên chỉ các kiểu dữ liệu được thực thi từ Number như Integer, Float, Double, Char mới được chấp nhận.',
      },
      {
        Id: 108534,
        Text: 'Vì generic chỉ làm việc với kiểu Number nên chỉ các kiểu dữ liệu được kế thừa từ Number như Integer, Float, Double, Char mới được chấp nhận.',
      },
      {
        Id: 108535,
        Text: 'Vì generic chỉ làm việc với kiểu đối tượng (Object) nên chỉ các kiểu dữ liệu được kế thừa từ class Object mới được chấp nhận.',
      },
      {
        Id: 108536,
        Text: 'Vì generic chỉ làm việc với kiểu Number nên chỉ các kiểu dữ liệu được đóng gói từ Number như Integer, Float, Double, Char mới được chấp nhận.',
      },
      {
        Id: 108537,
        Text: 'Vì generic chỉ làm việc với kiểu đối tượng (Object) nên chỉ các kiểu dữ liệu được thực thi từ class Object mới được chấp nhận.',
      },
    ],
  },
  {
    Id: 26177,
    Text: 'Đoạn code sau đây sẽ in ra màn hình kết quả nào? public class example2 { T number; public example2(T n ){ number=n; } public String toString(){ return "obj="+number.toString(); } public static void main(String[] args) { example2 objs[] = new example2[3]; ',
    Marks: 1,
    AnswerId: 108541,
    Answers: [
      {
        Id: 108538,
        Text: 'Có lỗi khi chạy',
      },
      {
        Id: 108539,
        Text: 'obj=10 obj=15',
      },
      {
        Id: 108540,
        Text: 'obj=15 obj=10',
      },
      {
        Id: 108541,
        Text: 'Có lỗi khi dịch',
      },
      {
        Id: 108542,
        Text: '10 15',
      },
      {
        Id: 108543,
        Text: 'number = 15 10',
      },
    ],
  },
  {
    Id: 26178,
    Text: 'ArrayList là kiểu dữ liệu được lấy từ package nào?',
    Marks: 1,
    AnswerId: 108546,
    Answers: [
      {
        Id: 108544,
        Text: 'java.io',
      },
      {
        Id: 108545,
        Text: 'java.list',
      },
      {
        Id: 108546,
        Text: 'java.util',
      },
      {
        Id: 108547,
        Text: 'java.output',
      },
      {
        Id: 108548,
        Text: 'java.input',
      },
      {
        Id: 108549,
        Text: 'java.lang',
      },
    ],
  },
  {
    Id: 26179,
    Text: 'Đoạn code sau đây có kết quả nào?ArrayList mylist = new ArrayList(); mylist.add(10); mylist.add(“Hello”); mylist.add(15.75); int a = (Integer)mylist.get(0); System.out.println("a="+a);',
    Marks: 1,
    AnswerId: 108554,
    Answers: [
      {
        Id: 108550,
        Text: 'Có lỗi khi chạy',
      },
      {
        Id: 108551,
        Text: 'Có lỗi khi dịch',
      },
      {
        Id: 108552,
        Text: 'a = 0',
      },
      {
        Id: 108553,
        Text: 'a=',
      },
      {
        Id: 108554,
        Text: 'a = 10',
      },
      {
        Id: 108555,
        Text: 'a = Hello',
      },
    ],
  },
  {
    Id: 26180,
    Text: 'Lệnh nào đặt màu nền là màu trắng cho một applet?',
    Marks: 1,
    AnswerId: 108558,
    Answers: [
      {
        Id: 108556,
        Text: 'setForecolor(white)',
      },
      {
        Id: 108557,
        Text: 'setBackGround(Color.white)',
      },
      {
        Id: 108558,
        Text: 'setBackground(Color.white)',
      },
      {
        Id: 108559,
        Text: 'setForecolor(Color.white)',
      },
      {
        Id: 108560,
        Text: 'setColor(Color.white)',
      },
      {
        Id: 108561,
        Text: 'setColor(white)',
      },
    ],
  },
  {
    Id: 26181,
    Text: 'Method nào được chạy một lần duy nhất trong quá trình thực thi một applet ?',
    Marks: 1,
    AnswerId: 108563,
    Answers: [
      {
        Id: 108562,
        Text: 'paint()',
      },
      {
        Id: 108563,
        Text: 'destroy()',
      },
      {
        Id: 108564,
        Text: 'end()',
      },
      {
        Id: 108565,
        Text: 'begin()',
      },
      {
        Id: 108566,
        Text: 'finish()',
      },
      {
        Id: 108567,
        Text: 'start()',
      },
    ],
  },
  {
    Id: 26182,
    Text: 'Method nào được chạy một lần duy nhất trong quá trình thực thi một applet ?',
    Marks: 1,
    AnswerId: 108569,
    Answers: [
      {
        Id: 108568,
        Text: 'paint()',
      },
      {
        Id: 108569,
        Text: 'init()',
      },
      {
        Id: 108570,
        Text: 'begin()',
      },
      {
        Id: 108571,
        Text: 'finish()',
      },
      {
        Id: 108572,
        Text: 'start()',
      },
      {
        Id: 108573,
        Text: 'end()',
      },
    ],
  },
  {
    Id: 26183,
    Text: 'Tại sao một applet không cần phương thức main()?',
    Marks: 1,
    AnswerId: 108574,
    Answers: [
      {
        Id: 108574,
        Text: 'Bởi vì applet được chạy trên trình duyệt web nên không cần phương thức main.',
      },
      {
        Id: 108575,
        Text: 'Các chương trình có giao diện đồ họa không cần phương thức main.Programs that do graphcis don\u0027t need a main.',
      },
      {
        Id: 108576,
        Text: 'Bởi về phương thức paint() hoạt động giống như phương thức main.',
      },
      {
        Id: 108577,
        Text: 'Chỉ những chương trình đơn giản thì mới cần phuwownt thức main.Only simple programs need a main.',
      },
      {
        Id: 108578,
        Text: 'Bởi vì phương thức init() hoạt động giống như phương thức main.',
      },
    ],
  },
  {
    Id: 26184,
    Text: 'Cho biết tên của sự kiện được tạo ra bởi kích chuột vào một nút lệnh (click Button):A. KeyEventB. MouseEventC. ItemEventD. ActionEventE. ListenEventF. AdjustmentEvent',
    Marks: 1,
    AnswerId: 108579,
    Answers: [
      {
        Id: 108579,
        Text: 'D',
      },
      {
        Id: 108580,
        Text: 'A',
      },
      {
        Id: 108581,
        Text: 'E',
      },
      {
        Id: 108582,
        Text: 'C',
      },
      {
        Id: 108583,
        Text: 'B',
      },
      {
        Id: 108584,
        Text: 'F',
      },
    ],
  },
  {
    Id: 26185,
    Text: 'Câu lệnh nào in chữ "Hello" tại vị trí x=20,y= 50 (x:width, y:height)?',
    Marks: 1,
    AnswerId: 108590,
    Answers: [
      {
        Id: 108585,
        Text: 'drawText("Hello",20,50)',
      },
      {
        Id: 108586,
        Text: 'drawStrings("Hello",20,50)',
      },
      {
        Id: 108587,
        Text: 'drawChars("Hello",20,50)',
      },
      {
        Id: 108588,
        Text: 'drawString(20,50,"Hello")',
      },
      {
        Id: 108589,
        Text: 'drawString(50,20,"Hello")',
      },
      {
        Id: 108590,
        Text: 'drawString("Hello",20,50)',
      },
    ],
  },
  {
    Id: 26186,
    Text: 'Class nào phải được kế thừa khi viết code cho một applet?',
    Marks: 1,
    AnswerId: 108593,
    Answers: [
      {
        Id: 108591,
        Text: 'AWT',
      },
      {
        Id: 108592,
        Text: 'Swing',
      },
      {
        Id: 108593,
        Text: 'Applet',
      },
      {
        Id: 108594,
        Text: 'Graphics',
      },
      {
        Id: 108595,
        Text: 'JDK',
      },
    ],
  },
  {
    Id: 26187,
    Text: 'Câu lệnh nào vẽ một hình tròn có bán kính là 50 tại vị trí x=10, y=20?',
    Marks: 1,
    AnswerId: 108596,
    Answers: [
      {
        Id: 108596,
        Text: 'drawCircle(10,20)',
      },
      {
        Id: 108597,
        Text: 'drawOval(10,20,50,50)',
      },
      {
        Id: 108598,
        Text: 'drawOval(20,10,50)',
      },
      {
        Id: 108599,
        Text: 'drawCircle(50)',
      },
      {
        Id: 108600,
        Text: 'drawOval(10,20,50)',
      },
      {
        Id: 108601,
        Text: 'drawCircle(50,50)',
      },
    ],
  },
  {
    Id: 26188,
    Text: 'Cho biết tên của sự kiện được tạo ra khi khi rê chuột trên thanh cuộn?A. KeyEventB. MouseEventC. ItemEventD. ActionEventE. AdjustmentEventF. ListenEvent',
    Marks: 1,
    AnswerId: 108607,
    Answers: [
      {
        Id: 108602,
        Text: 'F',
      },
      {
        Id: 108603,
        Text: 'C',
      },
      {
        Id: 108604,
        Text: 'D',
      },
      {
        Id: 108605,
        Text: 'A',
      },
      {
        Id: 108606,
        Text: 'B',
      },
      {
        Id: 108607,
        Text: 'E',
      },
    ],
  },
  {
    Id: 26189,
    Text: 'Kích thước (0,0) là chiều rộng và chiều cao của vùng vẽ tương ứng với',
    Marks: 1,
    AnswerId: 108608,
    Answers: [
      {
        Id: 108608,
        Text: 'Góc dưới khoảng giữa vùng vẽ',
      },
      {
        Id: 108609,
        Text: 'Góc dưới bên trái vùng vẽ',
      },
      {
        Id: 108610,
        Text: 'Góc trên bên phải vùng vẽ',
      },
      {
        Id: 108611,
        Text: 'Góc trên bên trái vùng vẽ',
      },
      {
        Id: 108612,
        Text: 'Góc dưới bên phải vùng vẽ',
      },
      {
        Id: 108613,
        Text: 'Góc trên khoảng giữa vùng vẽ',
      },
    ],
  },
  {
    Id: 26190,
    Text: 'JComponent là subclass trực tiếp của class nào?',
    Marks: 1,
    AnswerId: 108617,
    Answers: [
      {
        Id: 108614,
        Text: 'JFrame',
      },
      {
        Id: 108615,
        Text: 'AWT',
      },
      {
        Id: 108616,
        Text: 'Component',
      },
      {
        Id: 108617,
        Text: 'Container',
      },
      {
        Id: 108618,
        Text: 'Object',
      },
      {
        Id: 108619,
        Text: 'ButtonGroup',
      },
    ],
  },
  {
    Id: 26191,
    Text: 'Mặc định quản lý layout cho JPanel là?',
    Marks: 1,
    AnswerId: 108622,
    Answers: [
      {
        Id: 108620,
        Text: 'BorderLayout',
      },
      {
        Id: 108621,
        Text: 'Không có mặc định',
      },
      {
        Id: 108622,
        Text: 'FlowLayout',
      },
      {
        Id: 108623,
        Text: 'GridLayout',
      },
      {
        Id: 108624,
        Text: 'BoxLayout',
      },
      {
        Id: 108625,
        Text: 'GridBagLayout',
      },
    ],
  },
  {
    Id: 26192,
    Text: 'Kiểu trình bày nào cho phép đặt các thành phần vào container theo các hướng east, west, south, north, center ?',
    Marks: 1,
    AnswerId: 108627,
    Answers: [
      {
        Id: 108626,
        Text: 'CardLayout',
      },
      {
        Id: 108627,
        Text: 'BorderLayout',
      },
      {
        Id: 108628,
        Text: 'FlowLayout',
      },
      {
        Id: 108629,
        Text: 'GridBagLayout',
      },
      {
        Id: 108630,
        Text: 'BoxLayout',
      },
      {
        Id: 108631,
        Text: 'GridLayout',
      },
    ],
  },
  {
    Id: 26193,
    Text: 'Top-level-container là những thành phần nào?',
    Marks: 1,
    AnswerId: 108632,
    Answers: [
      {
        Id: 108632,
        Text: 'JFrame, JDialog, JWindow, JApplet',
      },
      {
        Id: 108633,
        Text: 'JFrames, JDialog, JWindow, JApplet',
      },
      {
        Id: 108634,
        Text: 'JFrame, JDialog, JWindow, JPanel',
      },
      {
        Id: 108635,
        Text: 'JFrame, JPanel, JWindow, JApplet',
      },
      {
        Id: 108636,
        Text: 'JFrame, JPanel, JRectangle, JApplet',
      },
      {
        Id: 108637,
        Text: 'JFrame, JPanel, JWindows, JApplet',
      },
    ],
  },
  {
    Id: 26194,
    Text: 'Câu lệnh nào sau đây tạo một frame với kích thước rộng là 300 và cao là 200 pixels?',
    Marks: 1,
    AnswerId: 108641,
    Answers: [
      {
        Id: 108638,
        Text: 'frm.setSize( 200, 300 );',
      },
      {
        Id: 108639,
        Text: 'frm.setEnable( 300, 200 );',
      },
      {
        Id: 108640,
        Text: 'frm.setVisible( 300, 200 );',
      },
      {
        Id: 108641,
        Text: 'frm.setSize( 300, 200 );',
      },
      {
        Id: 108642,
        Text: 'frm.repaint( 300, 200 );',
      },
      {
        Id: 108643,
        Text: 'frm.paint( 300, 200 );',
      },
    ],
  },
  {
    Id: 26195,
    Text: 'Kiểu trình bày nào cho phép đặt các thành phần vào container theo chiều ngang hoặc chiều dọc?',
    Marks: 1,
    AnswerId: 108648,
    Answers: [
      {
        Id: 108644,
        Text: 'GridBagLayout',
      },
      {
        Id: 108645,
        Text: 'CardLayout',
      },
      {
        Id: 108646,
        Text: 'BorderLayout',
      },
      {
        Id: 108647,
        Text: 'FlowLayout',
      },
      {
        Id: 108648,
        Text: 'BoxLayout',
      },
      {
        Id: 108649,
        Text: 'GridLayout',
      },
    ],
  },
  {
    Id: 26196,
    Text: 'Để thiết lập kiể trình bày dạng ô lưới với 4 hàng và mỗi hàng 5 cột, sử dụng lệnh nào trong số các lệnh sau đây:',
    Marks: 1,
    AnswerId: 108651,
    Answers: [
      {
        Id: 108650,
        Text: 'setLayout(new GridLayouts(5,4))',
      },
      {
        Id: 108651,
        Text: 'setLayout(new GridLayout(4,5))',
      },
      {
        Id: 108652,
        Text: 'setLayout(new GridBagLayout(4,5))',
      },
      {
        Id: 108653,
        Text: 'setLayout(new GridLayout(5,4))',
      },
      {
        Id: 108654,
        Text: 'setLayout(new GridBagLayout(5,4))',
      },
    ],
  },
  {
    Id: 26197,
    Text: 'Mặc định quản lý layout cho JFrame là?',
    Marks: 1,
    AnswerId: 108655,
    Answers: [
      {
        Id: 108655,
        Text: 'GridBagLayout',
      },
      {
        Id: 108656,
        Text: 'GridLayout',
      },
      {
        Id: 108657,
        Text: 'BoxLayout',
      },
      {
        Id: 108658,
        Text: 'BorderLayout',
      },
      {
        Id: 108659,
        Text: 'Không có mặc định',
      },
      {
        Id: 108660,
        Text: 'FlowLayout',
      },
    ],
  },
  {
    Id: 26198,
    Text: 'Sự kiện nào được tạo ra khi người click vào một JButton ?',
    Marks: 1,
    AnswerId: 108663,
    Answers: [
      {
        Id: 108661,
        Text: 'ButtonSelectionListener',
      },
      {
        Id: 108662,
        Text: 'ActionListener',
      },
      {
        Id: 108663,
        Text: 'ActionEvent',
      },
      {
        Id: 108664,
        Text: 'ActionEventListener',
      },
      {
        Id: 108665,
        Text: 'ValueChangeEvent',
      },
    ],
  },
  {
    Id: 26199,
    Text: 'Đối tượng container trong GUI là gì?',
    Marks: 1,
    AnswerId: 108671,
    Answers: [
      {
        Id: 108666,
        Text: 'Là class bất kỳ có subclass',
      },
      {
        Id: 108667,
        Text: 'Là một tên khác trong một mảng số',
      },
      {
        Id: 108668,
        Text: 'Là một hình có không gian rộng để chứa các hình khác',
      },
      {
        Id: 108669,
        Text: 'Là một hình chữ nhật',
      },
      {
        Id: 108670,
        Text: 'Là một kiểu dữ liệu nguyên thủy được dùng trong Swing',
      },
      {
        Id: 108671,
        Text: 'Là một thành phần có thể chứa các thành phần khác bên trong',
      },
    ],
  },
]
export const JABS = [
  {
    Id: 26050,
    Text: 'Công ty nào đã mua lại Sun microsystem?',
    Marks: 1,
    AnswerId: 107895,
    Answers: [
      {
        Id: 107891,
        Text: 'ibm',
      },
      {
        Id: 107892,
        Text: 'apple',
      },
      {
        Id: 107893,
        Text: 'yahoo',
      },
      {
        Id: 107894,
        Text: 'google',
      },
      {
        Id: 107895,
        Text: 'oracle',
      },
      {
        Id: 107896,
        Text: 'microsoft',
      },
    ],
  },
  {
    Id: 26051,
    Text: 'Kiểu nào không phải là kiểu nguyên thủy của Java?',
    Marks: 1,
    AnswerId: 107899,
    Answers: [
      {
        Id: 107897,
        Text: 'byte',
      },
      {
        Id: 107898,
        Text: 'double',
      },
      {
        Id: 107899,
        Text: 'String',
      },
      {
        Id: 107900,
        Text: 'boolean',
      },
      {
        Id: 107901,
        Text: 'float',
      },
    ],
  },
  {
    Id: 26052,
    Text: 'Từ khóa nào không phải Java keyword?',
    Marks: 1,
    AnswerId: 107904,
    Answers: [
      {
        Id: 107902,
        Text: 'import',
      },
      {
        Id: 107903,
        Text: 'float',
      },
      {
        Id: 107904,
        Text: 'Private',
      },
      {
        Id: 107905,
        Text: 'this',
      },
      {
        Id: 107906,
        Text: 'package',
      },
      {
        Id: 107907,
        Text: 'int',
      },
    ],
  },
  {
    Id: 26053,
    Text: 'Kết quả của lệnh 34/4?',
    Marks: 1,
    AnswerId: 107908,
    Answers: [
      {
        Id: 107908,
        Text: '6',
      },
      {
        Id: 107909,
        Text: '8.5',
      },
      {
        Id: 107910,
        Text: '8',
      },
      {
        Id: 107911,
        Text: '7',
      },
      {
        Id: 107912,
        Text: '9',
      },
    ],
  },
  {
    Id: 26054,
    Text: 'Có thể có bao nhiêu lựa chọn khi sử dụng lệnh if-else?',
    Marks: 1,
    AnswerId: 107914,
    Answers: [
      {
        Id: 107913,
        Text: '1',
      },
      {
        Id: 107914,
        Text: '2',
      },
      {
        Id: 107915,
        Text: '6',
      },
      {
        Id: 107916,
        Text: '3',
      },
      {
        Id: 107917,
        Text: '4',
      },
      {
        Id: 107918,
        Text: '5',
      },
    ],
  },
  {
    Id: 26055,
    Text: 'Đánh giá (true hoặc false) cho mỗi biểu thức sau đây: 14 \u003c= 14 14 \u003c 14 -9 \u003e -25 -25 \u003e -9',
    Marks: 1,
    AnswerId: 107924,
    Answers: [
      {
        Id: 107919,
        Text: 'true false true true',
      },
      {
        Id: 107920,
        Text: 'true true true true',
      },
      {
        Id: 107921,
        Text: 'true false false false',
      },
      {
        Id: 107922,
        Text: 'false true true true',
      },
      {
        Id: 107923,
        Text: 'false false true true',
      },
      {
        Id: 107924,
        Text: 'true false true false',
      },
    ],
  },
  {
    Id: 26056,
    Text: 'Để có thể chạy được java trên máy, chúng ta phải cài đặt phần mềm nào?',
    Marks: 1,
    AnswerId: 107927,
    Answers: [
      {
        Id: 107925,
        Text: 'GCC',
      },
      {
        Id: 107926,
        Text: 'C++ compiler',
      },
      {
        Id: 107927,
        Text: 'JDK',
      },
      {
        Id: 107928,
        Text: '.NET Framework',
      },
      {
        Id: 107929,
        Text: 'Python',
      },
      {
        Id: 107930,
        Text: 'PHP',
      },
    ],
  },
  {
    Id: 26057,
    Text: 'Khối lệnh sau sẽ in ra màn hình cái gì?int sum = 21;if ( sum != 20 ) System.out.print("You win ");else System.out.print("You lose ");System.out.println("the prize.");',
    Marks: 1,
    AnswerId: 107934,
    Answers: [
      {
        Id: 107931,
        Text: 'You win',
      },
      {
        Id: 107932,
        Text: 'You lose',
      },
      {
        Id: 107933,
        Text: 'You lose the prize.',
      },
      {
        Id: 107934,
        Text: 'You win the prize.',
      },
    ],
  },
  {
    Id: 26058,
    Text: 'Phương án nào là định danh Java (Java Identifier) hợp lệ?',
    Marks: 1,
    AnswerId: 107938,
    Answers: [
      {
        Id: 107935,
        Text: '4a',
      },
      {
        Id: 107936,
        Text: '#44',
      },
      {
        Id: 107937,
        Text: '--a',
      },
      {
        Id: 107938,
        Text: 'applet',
      },
      {
        Id: 107939,
        Text: '4a4b',
      },
      {
        Id: 107940,
        Text: 'a++',
      },
    ],
  },
  {
    Id: 26059,
    Text: 'Khối lệnh sau sẽ in ra màn hình cái gì?int sum = 14;if ( sum \u003c 20 ) System.out.print("Under ");else System.out.print("Over ");System.out.println("the limit.");',
    Marks: 1,
    AnswerId: 107941,
    Answers: [
      {
        Id: 107941,
        Text: 'Under the limit.',
      },
      {
        Id: 107942,
        Text: 'Over the limit.',
      },
      {
        Id: 107943,
        Text: 'Over',
      },
      {
        Id: 107944,
        Text: 'Under',
      },
    ],
  },
  {
    Id: 26060,
    Text: 'Kiểu dữ liệu nào không phải kiểu dữ liệu nguyên thủy trong Java?',
    Marks: 1,
    AnswerId: 107949,
    Answers: [
      {
        Id: 107945,
        Text: 'long',
      },
      {
        Id: 107946,
        Text: 'int',
      },
      {
        Id: 107947,
        Text: 'byte',
      },
      {
        Id: 107948,
        Text: 'boolean',
      },
      {
        Id: 107949,
        Text: 'object',
      },
      {
        Id: 107950,
        Text: 'float',
      },
    ],
  },
  {
    Id: 26061,
    Text: 'Kiểu dữ liệu nào chỉ bao gồm 2 giá trị true và false?',
    Marks: 1,
    AnswerId: 107953,
    Answers: [
      {
        Id: 107951,
        Text: 'char',
      },
      {
        Id: 107952,
        Text: 'long',
      },
      {
        Id: 107953,
        Text: 'boolean',
      },
      {
        Id: 107954,
        Text: 'int',
      },
      {
        Id: 107955,
        Text: 'float',
      },
    ],
  },
  {
    Id: 26062,
    Text: 'Escape sequence nào được sử dụng để hiển thị ký tự Tab?',
    Marks: 1,
    AnswerId: 107957,
    Answers: [
      {
        Id: 107956,
        Text: '\\b',
      },
      {
        Id: 107957,
        Text: '\\t',
      },
      {
        Id: 107958,
        Text: '\\\u0027\u0027',
      },
      {
        Id: 107959,
        Text: '\\ddd',
      },
      {
        Id: 107960,
        Text: '\\n',
      },
      {
        Id: 107961,
        Text: '\\\u0027',
      },
    ],
  },
  {
    Id: 26063,
    Text: 'Hãy cho biết kết quả hiển thị trên màn hình sau khi chạy chương trình sau:public static void main(String[] args) { double x,y; int i; x = 10.0; y = 3.0; i = (int)(x/y); System.out.println("i=" + i); }',
    Marks: 1,
    AnswerId: 107967,
    Answers: [
      {
        Id: 107962,
        Text: 'i=4',
      },
      {
        Id: 107963,
        Text: 'i=1',
      },
      {
        Id: 107964,
        Text: 'i=5',
      },
      {
        Id: 107965,
        Text: 'i=2',
      },
      {
        Id: 107966,
        Text: 'i=6',
      },
      {
        Id: 107967,
        Text: 'i=3',
      },
    ],
  },
  {
    Id: 26064,
    Text: 'Kiểu số thực có độ rộng bao nhiêu bit?',
    Marks: 1,
    AnswerId: 107970,
    Answers: [
      {
        Id: 107968,
        Text: '8',
      },
      {
        Id: 107969,
        Text: '18',
      },
      {
        Id: 107970,
        Text: '32',
      },
      {
        Id: 107971,
        Text: '10',
      },
      {
        Id: 107972,
        Text: '16',
      },
      {
        Id: 107973,
        Text: '12',
      },
    ],
  },
  {
    Id: 26065,
    Text: 'Hãy cho biến kết quả sau khi chạy chương trình sau:public static void main(String[] args) { int n,d; n = 10; d = 0; if (d!=0 \u0026\u0026 (n%d) == 0) { System.out.println(n + "chia het cho " + d ); } else if (d==0) { System.out.println("Khong the thuc hien phia chi',
    Marks: 1,
    AnswerId: 107976,
    Answers: [
      {
        Id: 107974,
        Text: 'Chương trình hiển thị lên màn hình kết quả "n chia het cho 0"',
      },
      {
        Id: 107975,
        Text: 'Chương trình báo lỗi khi biên dịch',
      },
      {
        Id: 107976,
        Text: 'Chương trình hiển thị lên màn hình kết quả "Khong the thuc hien phia chia cho 0"',
      },
      {
        Id: 107977,
        Text: 'Chương trình hiển thị lên màn hình kết quả "n chia het cho d"',
      },
    ],
  },
  {
    Id: 26066,
    Text: 'Để khai báo hằng số cho biến kiểu long, cách thức khai báo nào sau đây là đúng?',
    Marks: 1,
    AnswerId: 107981,
    Answers: [
      {
        Id: 107978,
        Text: 'long i = 12k;',
      },
      {
        Id: 107979,
        Text: 'long i = 12i;',
      },
      {
        Id: 107980,
        Text: 'long i = 12f;',
      },
      {
        Id: 107981,
        Text: 'long i = 12L;',
      },
      {
        Id: 107982,
        Text: 'long i = 12M;',
      },
    ],
  },
  {
    Id: 26067,
    Text: 'Kiểu byte có kích thước bao nhiêu bit?',
    Marks: 1,
    AnswerId: 107983,
    Answers: [
      {
        Id: 107983,
        Text: '8',
      },
      {
        Id: 107984,
        Text: '18',
      },
      {
        Id: 107985,
        Text: '20',
      },
      {
        Id: 107986,
        Text: '16',
      },
      {
        Id: 107987,
        Text: '10',
      },
      {
        Id: 107988,
        Text: '12',
      },
    ],
  },
  {
    Id: 26068,
    Text: 'Hãy cho biến kết quả sau khi chạy chương trình sau:public static void main(String[] args) { int n,d; n = 10; d = 0; if (d!=0 \u0026 (n%d) == 0) { System.out.println(n + "chia het cho " + d ); } else if (d==0) { System.out.println("Khong the thuc hien phia chia',
    Marks: 1,
    AnswerId: 107990,
    Answers: [
      {
        Id: 107989,
        Text: 'Chương trình hiển thị lên màn hình kết quả "Khong the thuc hien phia chia cho 0"',
      },
      {
        Id: 107990,
        Text: 'Chương trình báo lỗi khi biên dịch',
      },
      {
        Id: 107991,
        Text: 'Chương trình hiển thị lên màn hình kết quả "n chia het cho d"',
      },
      {
        Id: 107992,
        Text: 'Chương trình hiển thị lên màn hình kết quả "n chia het cho 0"',
      },
    ],
  },
  {
    Id: 26069,
    Text: 'Hãy cho biết giá trị của biến y sau khi chạy chương trình sau đây: public static void main(String[] args) { int x = 10; int y = ++x; System.out.println("y="+y); }',
    Marks: 1,
    AnswerId: 107997,
    Answers: [
      {
        Id: 107993,
        Text: '13',
      },
      {
        Id: 107994,
        Text: '10',
      },
      {
        Id: 107995,
        Text: '12',
      },
      {
        Id: 107996,
        Text: '15',
      },
      {
        Id: 107997,
        Text: '11',
      },
      {
        Id: 107998,
        Text: '14',
      },
    ],
  },
  {
    Id: 26070,
    Text: 'Lệnh nào được sử dụng để nhập ký tự từ bàn phím?',
    Marks: 1,
    AnswerId: 108000,
    Answers: [
      {
        Id: 107999,
        Text: 'System.in.reading()',
      },
      {
        Id: 108000,
        Text: 'System.in.read()',
      },
      {
        Id: 108001,
        Text: 'System.input.read()',
      },
      {
        Id: 108002,
        Text: 'System.out.reading()',
      },
      {
        Id: 108003,
        Text: 'System.out.read()',
      },
    ],
  },
  {
    Id: 26071,
    Text: 'Giá trị của x sau khi đoạn code sau được thi hành? int x = 10, y = 20; while (y \u003c 100) { x += y; }',
    Marks: 1,
    AnswerId: 108005,
    Answers: [
      {
        Id: 108004,
        Text: '120',
      },
      {
        Id: 108005,
        Text: 'Đây là vòng lặp vô hạn',
      },
      {
        Id: 108006,
        Text: '80',
      },
      {
        Id: 108007,
        Text: '100',
      },
      {
        Id: 108008,
        Text: '90',
      },
      {
        Id: 108009,
        Text: '110',
      },
    ],
  },
  {
    Id: 26072,
    Text: 'switch(x) { default: System.out.println("Hello"); }Chọn 2 giá trị chấp nhận được cho x?1. byte2. long3. char4. float5. short6. long',
    Marks: 1,
    AnswerId: 108010,
    Answers: [
      {
        Id: 108010,
        Text: '1 và 3',
      },
      {
        Id: 108011,
        Text: '2 và 4',
      },
      {
        Id: 108012,
        Text: '3 và 5',
      },
      {
        Id: 108013,
        Text: '4 và 6',
      },
    ],
  },
  {
    Id: 26073,
    Text: 'Hãy cho biết giá trị được hiển thị trên màn hình console sau khi thực hiện đoạn code sau: int x = 10; for( x = 1; x \u003c= 5; x++) { System.out.print(x + ","); } System.out.println(x);',
    Marks: 1,
    AnswerId: 108017,
    Answers: [
      {
        Id: 108014,
        Text: '10,10,10,10,10,10',
      },
      {
        Id: 108015,
        Text: '10,11,12,13,14,15',
      },
      {
        Id: 108016,
        Text: '6,6,6,6,6,6',
      },
      {
        Id: 108017,
        Text: '1,2,3,4,5,6',
      },
      {
        Id: 108018,
        Text: '1,1,1,1,1,1',
      },
      {
        Id: 108019,
        Text: '16,16,16,16,16,16',
      },
    ],
  },
  {
    Id: 26074,
    Text: 'Vòng lặp nào được thực thi tốt thiểu 1 lần?',
    Marks: 1,
    AnswerId: 108023,
    Answers: [
      {
        Id: 108020,
        Text: 'for',
      },
      {
        Id: 108021,
        Text: 'if else',
      },
      {
        Id: 108022,
        Text: 'while',
      },
      {
        Id: 108023,
        Text: 'do while',
      },
      {
        Id: 108024,
        Text: 'if',
      },
    ],
  },
  {
    Id: 26075,
    Text: 'Câu lệnh sau sai ở đâu?for (int k=2,k\u003c=12,k++)',
    Marks: 1,
    AnswerId: 108025,
    Answers: [
      {
        Id: 108025,
        Text: 'Dấu phẩy phải thay bằng dấu chấm phẩy',
      },
      {
        Id: 108026,
        Text: 'Toán tử tăng phải là ++k',
      },
      {
        Id: 108027,
        Text: 'Phải có dấu chấm phẩy ở cuối lệnh',
      },
      {
        Id: 108028,
        Text: 'Biến sử dụng cho lệnh for phải có tên là i',
      },
    ],
  },
  {
    Id: 26076,
    Text: 'public void test(int x) { int odd = 1; if(odd) /* Line 4 */ { System.out.println("odd"); } else { System.out.println("even"); } }Câu nào là đúng?',
    Marks: 1,
    AnswerId: 108031,
    Answers: [
      {
        Id: 108029,
        Text: 'Luôn hiển thị "odd" trên màn hình',
      },
      {
        Id: 108030,
        Text: 'Luôn hiển thị "even" trên màn hình',
      },
      {
        Id: 108031,
        Text: 'Có lỗi khi biên dịch',
      },
      {
        Id: 108032,
        Text: '"odd" được hiển thị nếu x là số lẻ, "even" nếu x là số chẵn',
      },
    ],
  },
  {
    Id: 26077,
    Text: 'Cho biết kết quả thực hiện của đoạn chương trình sau?for(int i=1; i\u003c15; i=i+3) { System.out.print(i);}',
    Marks: 1,
    AnswerId: 108036,
    Answers: [
      {
        Id: 108033,
        Text: '15',
      },
      {
        Id: 108034,
        Text: '1',
      },
      {
        Id: 108035,
        Text: '47101316',
      },
      {
        Id: 108036,
        Text: '1471013',
      },
      {
        Id: 108037,
        Text: '147101516',
      },
    ],
  },
  {
    Id: 26078,
    Text: 'Trong vòng lặp while, biểu thức điều kiện kiểu Boolean được kiểm tra khi nào?',
    Marks: 1,
    AnswerId: 108038,
    Answers: [
      {
        Id: 108038,
        Text: 'Trước khi vòng loop được thi hành',
      },
      {
        Id: 108039,
        Text: 'Sau khi vòng loop được thi hành',
      },
      {
        Id: 108040,
        Text: 'Cả trước và sau khi vòng lặp được thi hành',
      },
      {
        Id: 108041,
        Text: 'Không bao giờ được kiểm tra',
      },
    ],
  },
  {
    Id: 26079,
    Text: 'Vòng lặp nào xử lý điều kiện kiểm tra ở cuối vòng lặp?',
    Marks: 1,
    AnswerId: 108044,
    Answers: [
      {
        Id: 108042,
        Text: 'for',
      },
      {
        Id: 108043,
        Text: 'switch',
      },
      {
        Id: 108044,
        Text: 'do while',
      },
      {
        Id: 108045,
        Text: 'Không vòng lặp nào xử lý điều kiện kiểm tra ở cuối vòng lặp',
      },
      {
        Id: 108046,
        Text: 'while',
      },
    ],
  },
  {
    Id: 26080,
    Text: 'Biến đối tượng lưu trữ?',
    Marks: 1,
    AnswerId: 108048,
    Answers: [
      {
        Id: 108047,
        Text: 'Lớp',
      },
      {
        Id: 108048,
        Text: 'Tham chiếu đến đối tượng',
      },
      {
        Id: 108049,
        Text: 'Số nguyên',
      },
      {
        Id: 108050,
        Text: 'Số thực',
      },
      {
        Id: 108051,
        Text: 'Ký tự',
      },
    ],
  },
  {
    Id: 26081,
    Text: 'Điều gì xảy ra sau khi thi hành lệnh sau:Automobile car = new Automobile(1);',
    Marks: 1,
    AnswerId: 108052,
    Answers: [
      {
        Id: 108052,
        Text: 'Một đối tượng kiểu Automobile được tạo',
      },
      {
        Id: 108053,
        Text: 'Một đối tượng kiểu Automobile được khai báo nhưng không được tạo',
      },
      {
        Id: 108054,
        Text: 'Một hàm tạo chấp nhận tham số kiểu string trong lớp Automobile được gọi',
      },
      {
        Id: 108055,
        Text: 'Hàm tạo mặc định của lớp Automobile được gọi',
      },
    ],
  },
  {
    Id: 26082,
    Text: 'Chọn định nghĩa chính xác nhất về đối tượng?',
    Marks: 1,
    AnswerId: 108057,
    Answers: [
      {
        Id: 108056,
        Text: 'Thức ăn',
      },
      {
        Id: 108057,
        Text: 'Thể hiện của một lớp',
      },
      {
        Id: 108058,
        Text: 'Quần áo',
      },
      {
        Id: 108059,
        Text: 'Một thứ gì đó',
      },
      {
        Id: 108060,
        Text: 'Sách',
      },
    ],
  },
  {
    Id: 26083,
    Text: 'Khi một đối tượng không còn được biến tham chiếu nào trỏ tới,điều gì sẽ xảy ra?',
    Marks: 1,
    AnswerId: 108063,
    Answers: [
      {
        Id: 108061,
        Text: 'Nó sẽ được gửi tới Dumpster',
      },
      {
        Id: 108062,
        Text: 'Nó sẽ được gửi tới Dump',
      },
      {
        Id: 108063,
        Text: 'garbage collector sẽ giải phóng bộ nhớ không cần thiết để dùng cho các đối tượng khác',
      },
      {
        Id: 108064,
        Text: 'Nó tồn tại trong bộ nhớ mãi mãi',
      },
    ],
  },
  {
    Id: 26084,
    Text: 'Xem đoạn code sau:void start() { A a = new A(); B b = new B(); /*Dòng 3*/ a.s(b); b = null; /* Dòng 5 */ a = null; /* Dòng 6 */ System.out.println("start completed"); /* Dòng 7 */} Sau khi đối tượng B được tạo ở dòng 3, khi nào garbage sẽ cân nhắc hủy đối',
    Marks: 1,
    AnswerId: 108068,
    Answers: [
      {
        Id: 108065,
        Text: 'Sau dòng 5',
      },
      {
        Id: 108066,
        Text: 'Sau dòng 7',
      },
      {
        Id: 108067,
        Text: 'Sau dòng 6',
      },
      {
        Id: 108068,
        Text: 'Không có cách nào biết được chắc chắn',
      },
      {
        Id: 108069,
        Text: 'Sau dòng 3',
      },
    ],
  },
  {
    Id: 26085,
    Text: 'Từ khóa nào được sử dụng để tạo mới đối tượng?',
    Marks: 1,
    AnswerId: 108074,
    Answers: [
      {
        Id: 108070,
        Text: 'finalize',
      },
      {
        Id: 108071,
        Text: 'new()',
      },
      {
        Id: 108072,
        Text: 'this',
      },
      {
        Id: 108073,
        Text: 'sync',
      },
      {
        Id: 108074,
        Text: 'new',
      },
    ],
  },
  {
    Id: 26086,
    Text: 'Mục đích của hàm tạo (constructor) của lớp là gì?',
    Marks: 1,
    AnswerId: 108076,
    Answers: [
      {
        Id: 108075,
        Text: 'Tạo tên phương thức',
      },
      {
        Id: 108076,
        Text: 'Khởi tạo một đối tượng khi nó được gọi',
      },
      {
        Id: 108077,
        Text: 'Là công cụ của garbage collection',
      },
      {
        Id: 108078,
        Text: 'Dọn dẹp bộ nhớ không cần thiết',
      },
    ],
  },
  {
    Id: 26087,
    Text: 'Toán tử nào được sử dụng để gọi hàm tạo của lớp và tạo mới một đối tượng?',
    Marks: 1,
    AnswerId: 108083,
    Answers: [
      {
        Id: 108079,
        Text: '*',
      },
      {
        Id: 108080,
        Text: '+',
      },
      {
        Id: 108081,
        Text: '-',
      },
      {
        Id: 108082,
        Text: 'instanceof',
      },
      {
        Id: 108083,
        Text: 'new',
      },
    ],
  },
  {
    Id: 26088,
    Text: 'Từ khóa nào giúp cho chúng ta có thể tham chiếu tới lớp và rất tiện lợi khi cần truy cập các biến và phương thức trong lớp?',
    Marks: 1,
    AnswerId: 108085,
    Answers: [
      {
        Id: 108084,
        Text: 'sync',
      },
      {
        Id: 108085,
        Text: 'this',
      },
      {
        Id: 108086,
        Text: 'new',
      },
      {
        Id: 108087,
        Text: 'finalize',
      },
      {
        Id: 108088,
        Text: 'new()',
      },
    ],
  },
  {
    Id: 26089,
    Text: 'Kiểm tra khai báo sau:String strA;String strB = new String("Cheese");Bao nhiêu đối tượng được tạo?',
    Marks: 1,
    AnswerId: 108091,
    Answers: [
      {
        Id: 108089,
        Text: '4',
      },
      {
        Id: 108090,
        Text: '5',
      },
      {
        Id: 108091,
        Text: '1',
      },
      {
        Id: 108092,
        Text: '3',
      },
      {
        Id: 108093,
        Text: '6',
      },
      {
        Id: 108094,
        Text: '2',
      },
    ],
  },
  {
    Id: 26090,
    Text: 'Kết quả nào được hiển thị trên màn hình sau khi chạy đoạn lệnh sau:String strA = new String("Roasted ");String strB = new String("Acorns ");strA = strB;System.out.print ( strA );System.out.println( strB );',
    Marks: 1,
    AnswerId: 108097,
    Answers: [
      {
        Id: 108095,
        Text: 'Roasted Roasted',
      },
      {
        Id: 108096,
        Text: 'Acorns Roasted',
      },
      {
        Id: 108097,
        Text: 'Acorns Acorns',
      },
      {
        Id: 108098,
        Text: 'Roasted Acorns',
      },
    ],
  },
  {
    Id: 26091,
    Text: 'Kết quả hiển thị trên màn hình sau khi thực thi đoạn lệnh sau?int[] ar = {2, 4, 6, 8 };ar[0] = 23;ar[3] = ar[1];System.out.println( ar[0] + " " + ar[3] );',
    Marks: 1,
    AnswerId: 108100,
    Answers: [
      {
        Id: 108099,
        Text: '2 6',
      },
      {
        Id: 108100,
        Text: '23 4',
      },
      {
        Id: 108101,
        Text: '23 2',
      },
      {
        Id: 108102,
        Text: '2 8',
      },
      {
        Id: 108103,
        Text: '31',
      },
    ],
  },
  {
    Id: 26092,
    Text: 'Khai báo mảng 2 chiều như sau:double[][] things = { {1.2, 9.0}, {9.2, 0.5, 0.0}, {7.3, 7.9, 1.2, 3.9} } ;Hãy cho biết giá trị của things[2].length?',
    Marks: 1,
    AnswerId: 108104,
    Answers: [
      {
        Id: 108104,
        Text: '4',
      },
      {
        Id: 108105,
        Text: '3',
      },
      {
        Id: 108106,
        Text: '9',
      },
      {
        Id: 108107,
        Text: '2',
      },
      {
        Id: 108108,
        Text: '10',
      },
    ],
  },
  {
    Id: 26093,
    Text: 'Khai báo mảng 2 chiều như sau:int[][] items = { {0, 1, 3, 4}, {4, 3, 99, 0, 7 }, {3, 2} } ;Lệnh nào dùng để thay thế giá trị 99 bằng giá trị 77?',
    Marks: 1,
    AnswerId: 108111,
    Answers: [
      {
        Id: 108109,
        Text: 'items[2][1] = 77;',
      },
      {
        Id: 108110,
        Text: 'items[2][3] = 77;',
      },
      {
        Id: 108111,
        Text: 'items[1][2] = 77;',
      },
      {
        Id: 108112,
        Text: 'items[ 99 ] = 77;',
      },
    ],
  },
  {
    Id: 26094,
    Text: 'Lệnh nào dùng để gọi phương thức length của xâu str và lưu trữ kết quả trong biến val?',
    Marks: 1,
    AnswerId: 108114,
    Answers: [
      {
        Id: 108113,
        Text: 'val = length.str();',
      },
      {
        Id: 108114,
        Text: 'val = str.length();',
      },
      {
        Id: 108115,
        Text: 'val = length(str);',
      },
      {
        Id: 108116,
        Text: 'val = length().str;',
      },
    ],
  },
  {
    Id: 26095,
    Text: 'Kết quả nào được hiển thị trên màn hình sau khi chạy đoạn lệnh sau:String strA = new String("Roasted ");String strB = new String("Acorns ");strA = strB;if ( strA == strB ) system.out.println("Two copies of a reference.");else system.out.println("Two diffe',
    Marks: 1,
    AnswerId: 108120,
    Answers: [
      {
        Id: 108117,
        Text: 'Two copies of a reference.Two different references.',
      },
      {
        Id: 108118,
        Text: 'Two different references.',
      },
      {
        Id: 108119,
        Text: 'Roasted Acorn references.',
      },
      {
        Id: 108120,
        Text: 'Two copies of a reference.',
      },
    ],
  },
  {
    Id: 26096,
    Text: 'Nếu chúng ta khai báo một mảng như sau:int [ ] nums = {8, 12, 23, 4, 15};Lệnh nào dùng để hiển thị giá trị phần tử đầu tiên của mảng?',
    Marks: 1,
    AnswerId: 108123,
    Answers: [
      {
        Id: 108121,
        Text: 'System.out.print("The number is : " + nums[1]);',
      },
      {
        Id: 108122,
        Text: 'System.out.print("The number is : " + nums[2]);',
      },
      {
        Id: 108123,
        Text: 'System.out.print("The number is : " + nums[0]);',
      },
      {
        Id: 108124,
        Text: 'System.out.print("The number is : " + nums);',
      },
      {
        Id: 108125,
        Text: 'System.out.print("The number is : " + nums[8]);',
      },
    ],
  },
  {
    Id: 26097,
    Text: 'Nếu chúng ta khai báo một mảng như sau:int [ ] ar = {1,2,3,4,5,6};Cỡ của mảng là bao nhiêu?',
    Marks: 1,
    AnswerId: 108126,
    Answers: [
      {
        Id: 108126,
        Text: '6',
      },
      {
        Id: 108127,
        Text: '8',
      },
      {
        Id: 108128,
        Text: '0',
      },
      {
        Id: 108129,
        Text: '5',
      },
      {
        Id: 108130,
        Text: '7',
      },
    ],
  },
  {
    Id: 26098,
    Text: 'Câu nào là đúng về mảng?',
    Marks: 1,
    AnswerId: 108132,
    Answers: [
      {
        Id: 108131,
        Text: 'Phần tử đầu tiên của mảng có chỉ số là 1',
      },
      {
        Id: 108132,
        Text: 'Các giá trị trong mảng có cùng kiểu dữ liệu',
      },
      {
        Id: 108133,
        Text: 'Không thể truy cập đến phần tử trong mảng sử dụng chỉ số',
      },
      {
        Id: 108134,
        Text: 'Phần tử cuối cùng của mảng có chỉ số là length',
      },
    ],
  },
  {
    Id: 26099,
    Text: 'Kết quả nào được hiển thị trên màn hình sau khi chạy đoạn lệnh sau:String strA;String strB = new String("Cheese");System.out.print ( strB );strA = new String(" Whizz");System.out.println( strA );',
    Marks: 1,
    AnswerId: 108137,
    Answers: [
      {
        Id: 108135,
        Text: 'Whizz',
      },
      {
        Id: 108136,
        Text: 'Cheese',
      },
      {
        Id: 108137,
        Text: 'Cheese Whizz',
      },
      {
        Id: 108138,
        Text: 'Whizz Cheese',
      },
    ],
  },
  {
    Id: 26100,
    Text: 'Thành viên của lớp được khai báo private có tác dụng gì?',
    Marks: 1,
    AnswerId: 108141,
    Answers: [
      {
        Id: 108139,
        Text: 'Khi một thành viên của lớp được khai báo private thì nó chỉ được sử dụng bởi một đối tượng của lớp đó, dù có nhiều đối tượng của lớp đó được tạo ra',
      },
      {
        Id: 108140,
        Text: 'Khi một thành viên của lớp được khai báo private thì nó chỉ được sử dụng tại một vị trí trong chương trình',
      },
      {
        Id: 108141,
        Text: 'Khi một thành viên của lớp được khai báo private thì nó chỉ được sử dụng tại các phương thức mà là thành viên của lớp này',
      },
      {
        Id: 108142,
        Text: 'Khi một thành viên của lớp được khai báo private thì nó chỉ được sử dụng bởi các thành viên private khác',
      },
    ],
  },
  {
    Id: 26101,
    Text: 'Đặc tả truy xuất nào thể hiện là phương thức hoặc biến thành viên của một đối tượng có thể truy cập bởi code ở ngoài đối tượng đó?',
    Marks: 1,
    AnswerId: 108147,
    Answers: [
      {
        Id: 108143,
        Text: 'final',
      },
      {
        Id: 108144,
        Text: 'static',
      },
      {
        Id: 108145,
        Text: 'default',
      },
      {
        Id: 108146,
        Text: 'private',
      },
      {
        Id: 108147,
        Text: 'public',
      },
    ],
  },
  {
    Id: 26102,
    Text: 'Hãy cho biết kết quả sau khi chạy đoạn chương trình sau:int i = 0; public static void main(String args[]) { int i = 1; i = change_i(i); System.out.println(i); } public static int change_i(int i) { i = 2; i *= 2; return i; }',
    Marks: 1,
    AnswerId: 108152,
    Answers: [
      {
        Id: 108148,
        Text: '1',
      },
      {
        Id: 108149,
        Text: '2',
      },
      {
        Id: 108150,
        Text: '3',
      },
      {
        Id: 108151,
        Text: '0',
      },
      {
        Id: 108152,
        Text: '4',
      },
    ],
  },
  {
    Id: 26103,
    Text: 'Hãy cho biết kết quả sau khi chạy đoạn chương trình sau: int i[] = {0}; public static void main(String args[]) { int i[] = {1}; change_i(i); System.out.println(i[0]); } public static void change_i(int i[]) { i[0] = 2; i[0] *= 2; }',
    Marks: 1,
    AnswerId: 108153,
    Answers: [
      {
        Id: 108153,
        Text: '4',
      },
      {
        Id: 108154,
        Text: '2',
      },
      {
        Id: 108155,
        Text: '1',
      },
      {
        Id: 108156,
        Text: '0',
      },
      {
        Id: 108157,
        Text: '3',
      },
    ],
  },
  {
    Id: 26104,
    Text: 'Bạn muốn hạn chế truy cập đến một phương thức của một lớp public class A sao cho chỉ các thành viên của lớp A mới có thể truy cập đến phương thức này? Đặc tả truy xuất nào đáp ứng được yêu cầu này?',
    Marks: 1,
    AnswerId: 108160,
    Answers: [
      {
        Id: 108158,
        Text: 'static',
      },
      {
        Id: 108159,
        Text: 'public',
      },
      {
        Id: 108160,
        Text: 'private',
      },
      {
        Id: 108161,
        Text: 'final',
      },
      {
        Id: 108162,
        Text: 'default',
      },
    ],
  },
  {
    Id: 26105,
    Text: 'Điều gì xảy ra khi phương thức main() của lớp A cố gắng truy cập một biến thành viên có đặc tả truy xuất là private của một đối tượng của lớp A?',
    Marks: 1,
    AnswerId: 108165,
    Answers: [
      {
        Id: 108163,
        Text: 'Chương trình sẽ được biên dịch và chạy thành công',
      },
      {
        Id: 108164,
        Text: 'Chương trình sẽ được biên dịch thành công nhưng khi chạy file .class sẽ không ra kết quả chính xác',
      },
      {
        Id: 108165,
        Text: 'Trình biên dịch sẽ tìm ra lỗi và không sinh ra file .class',
      },
      {
        Id: 108166,
        Text: 'Trình biên dịch sẽ tự động thay đổi đặc tả truy xuất của biến từ private thành public',
      },
    ],
  },
  {
    Id: 26106,
    Text: 'Cho biết kết quả sau khi chạy đoạn code sau:package testpackage;public class Test{public static void main(String args[]){System.out.println(goFigure(60));}public static int goFigure(int x){if (x \u003c 100)x = goFigure(x + 10);return (x - 1);}}',
    Marks: 1,
    AnswerId: 108171,
    Answers: [
      {
        Id: 108167,
        Text: '90',
      },
      {
        Id: 108168,
        Text: '96',
      },
      {
        Id: 108169,
        Text: '99',
      },
      {
        Id: 108170,
        Text: '92',
      },
      {
        Id: 108171,
        Text: '95',
      },
    ],
  },
  {
    Id: 26107,
    Text: 'Cho đoạn code sau:class Test{static class C{static int i1;}public static void main(String a[]){System.out.println(Test.C.i1);}}Hãy cho biết kết quả sau khi biên dịch và chạy chương trình?',
    Marks: 1,
    AnswerId: 108173,
    Answers: [
      {
        Id: 108172,
        Text: '1',
      },
      {
        Id: 108173,
        Text: '0',
      },
      {
        Id: 108174,
        Text: 'Lỗi khi chạy chương trình',
      },
      {
        Id: 108175,
        Text: 'Lỗi biên dịch',
      },
    ],
  },
  {
    Id: 26108,
    Text: 'square numbers được định nghĩa như sau:square(1) = 1square(N) = square(N-1) + 2N -1Theo định nghĩa đó, square(3) được tính như thế nào?',
    Marks: 1,
    AnswerId: 108177,
    Answers: [
      {
        Id: 108176,
        Text: 'square(3) = square(2) + square(1)',
      },
      {
        Id: 108177,
        Text: 'square(3) = square(2) + 2*3 -1',
      },
      {
        Id: 108178,
        Text: 'square(3) = square(2) - 2*3 +1',
      },
      {
        Id: 108179,
        Text: 'square(3) = square(3) + 2*3 -1',
      },
    ],
  },
  {
    Id: 26109,
    Text: 'Đây là cấu trúc chung của một phương thứcaccessModifier returnType methodName( parameterList ){ Java statements return returnValue;}Câu nào là đúng đối với accessModifier?',
    Marks: 1,
    AnswerId: 108182,
    Answers: [
      {
        Id: 108180,
        Text: 'Luôn luôn là private hoặc public',
      },
      {
        Id: 108181,
        Text: 'accessModifier phải phù hợp với returnType',
      },
      {
        Id: 108182,
        Text: 'Có thể không có, nhưng nếu có thì có thể có một số giá trị, trong đó có private và public',
      },
      {
        Id: 108183,
        Text: 'Có thể không có, nhưng nếu có thì phải là kiểu private',
      },
    ],
  },
  {
    Id: 26110,
    Text: 'Câu nào là đúng đối với sử dụng tham chiếu super trong hàm tạo?',
    Marks: 1,
    AnswerId: 108187,
    Answers: [
      {
        Id: 108184,
        Text: 'Chỉ một lớp con có thể sử dụng nó',
      },
      {
        Id: 108185,
        Text: 'super phải sử dụng ở lệnh cuối cùng trong hàm tạo',
      },
      {
        Id: 108186,
        Text: 'Chỉ có thể sử dụng trong hàm tạo của lớp cha',
      },
      {
        Id: 108187,
        Text: 'super phải sử dụng ở lệnh đầu tiên trong hàm tạo',
      },
    ],
  },
  {
    Id: 26111,
    Text: 'Cho đoạn code sau:class Super {public float getNum( ) {return 3.0f;}}public class Sub extends Super {} Phương thức nào đặt sau \u0027public class Sub extends Super {\u0027 sẽ gây ra lỗi khi biên dịch?',
    Marks: 1,
    AnswerId: 108191,
    Answers: [
      {
        Id: 108188,
        Text: 'public float getNum( ) { return 4.0f; }',
      },
      {
        Id: 108189,
        Text: 'public double getNum(float d) { return 4.0d; }',
      },
      {
        Id: 108190,
        Text: 'public void getNum(double d) { }',
      },
      {
        Id: 108191,
        Text: 'public void getNum( ) { }',
      },
    ],
  },
  {
    Id: 26112,
    Text: 'Kiểu kế thừa (inheritance) trong Java?',
    Marks: 1,
    AnswerId: 108194,
    Answers: [
      {
        Id: 108192,
        Text: 'multiple inheritance',
      },
      {
        Id: 108193,
        Text: 'double inheritance',
      },
      {
        Id: 108194,
        Text: 'single inheritance',
      },
      {
        Id: 108195,
        Text: 'Không có kế thừa trong Java',
      },
    ],
  },
  {
    Id: 26113,
    Text: 'Cho đoạn code sau:class A{public A(int x){}}class B extends A { }public class test{public static void main (String args []){A a = new B();System.out.println("complete");}}Kết quả chạy chương trình như thế nào?',
    Marks: 1,
    AnswerId: 108197,
    Answers: [
      {
        Id: 108196,
        Text: 'Lỗi khi chạy chương trình',
      },
      {
        Id: 108197,
        Text: 'Lỗi biên dịch',
      },
      {
        Id: 108198,
        Text: 'Chương trình chạy mà không hiển thị gì trên cửa sổ kết quả',
      },
      {
        Id: 108199,
        Text: 'Hiển thị "complete"',
      },
    ],
  },
  {
    Id: 26114,
    Text: 'Bao nhiêu đối tượng của một lớp được sinh ra trong một chương trình?',
    Marks: 1,
    AnswerId: 108203,
    Answers: [
      {
        Id: 108200,
        Text: 'Một đối tượng ứng với một hàm tạo',
      },
      {
        Id: 108201,
        Text: 'Một đối tượng ứng với phương thức main()',
      },
      {
        Id: 108202,
        Text: 'Một đối tượng ứng với một lớp',
      },
      {
        Id: 108203,
        Text: 'Bao nhiêu tùy ý tùy theo yêu cầu của chương trình',
      },
    ],
  },
  {
    Id: 26115,
    Text: 'Một lớp Animal có một lớp con là Mammal. Câu nào sau đây là đúng?',
    Marks: 1,
    AnswerId: 108205,
    Answers: [
      {
        Id: 108204,
        Text: 'Bởi vì tính đơn kế thừa, Mammal chỉ có thể có một lớp con',
      },
      {
        Id: 108205,
        Text: 'Bởi vì tính đơn kế thừa, Mammal không có một lớp cha nào khác ngoài lớp Animal',
      },
      {
        Id: 108206,
        Text: 'Bởi vì tính đơn kế thừa, Mammal có thể không có lớp con',
      },
      {
        Id: 108207,
        Text: 'Bởi vì tính đơn kế thừa, Animal chỉ có một lớp con là lớp Mammal',
      },
    ],
  },
  {
    Id: 26116,
    Text: 'Lớp nào là lớp cha của mọi lớp trong Java?',
    Marks: 1,
    AnswerId: 108209,
    Answers: [
      {
        Id: 108208,
        Text: 'Root',
      },
      {
        Id: 108209,
        Text: 'Object',
      },
      {
        Id: 108210,
        Text: 'Java',
      },
      {
        Id: 108211,
        Text: 'Class',
      },
    ],
  },
  {
    Id: 26117,
    Text: 'Một đối tượng có thể là lớp con của một đối tượng khác?',
    Marks: 1,
    AnswerId: 108213,
    Answers: [
      {
        Id: 108212,
        Text: 'Đúng vậy, miễn là đa thừa kế',
      },
      {
        Id: 108213,
        Text: 'Không,kế thừa là khái niệm đối với các lớp, không phải là các đối tượng',
      },
      {
        Id: 108214,
        Text: 'Đúng vậy, miễn là đơn thừa kế',
      },
      {
        Id: 108215,
        Text: 'Đúng vậy, khi một đối tượng được sử dụng trong hàm tạo của đối tượng khác',
      },
    ],
  },
  {
    Id: 26118,
    Text: 'Lớp trừu tượng là gì?',
    Marks: 1,
    AnswerId: 108217,
    Answers: [
      {
        Id: 108216,
        Text: 'Lớp trừu tượng là lớp mà không có lớp con',
      },
      {
        Id: 108217,
        Text: 'Lớp trừu tượng là lớp mà không thể khởi tạo',
      },
      {
        Id: 108218,
        Text: 'Lớp trừu tượng là tên khác của "base class"',
      },
      {
        Id: 108219,
        Text: 'Lớp trừu tượng là lớp cha mà có nhiều hơn một lớp con',
      },
    ],
  },
  {
    Id: 26119,
    Text: 'Giả sử chúng ta có 3 lớp: Computer, AsusComputer, DellComputer. Mối quan hệ của 3 class này rất có thể là?',
    Marks: 1,
    AnswerId: 108223,
    Answers: [
      {
        Id: 108220,
        Text: 'Computer, AsusComputer,DellComputer là các lớp có cùng lớp cha',
      },
      {
        Id: 108221,
        Text: 'DellComputer là lớp cha, AsusComputer và Computer là lớp con của DellComputer',
      },
      {
        Id: 108222,
        Text: 'Computer là lớp cha, AsusComputer là lớp con của Computer và DellComputer là lớp con của AsusComputer',
      },
      {
        Id: 108223,
        Text: 'Computer là lớp cha, AsusComputer và DellComputer là lớp con của Computer',
      },
    ],
  },
]
export const JSPR = [
  {
    Id: 25740,
    Text: 'Thông thường, cách thức alert() được sử dụng trong các trường hợp nào?',
    Marks: 1,
    AnswerId: 106533,
    Answers: [
      {
        Id: 106530,
        Text: 'Khi dịch vụ chưa sẵn sàng để truy nhập dữ liệu',
      },
      {
        Id: 106531,
        Text: 'Đưa ra một thông điệp cảnh báo đến người dùng',
      },
      {
        Id: 106532,
        Text: 'Kết quả sau khi tính toán không hợp lệ',
      },
      {
        Id: 106533,
        Text: 'Tất cả các trường hợp đã nêu',
      },
    ],
  },
  {
    Id: 25741,
    Text: 'Có bao nhiêu cách để nhúng file JavaScript vào một file HTML?',
    Marks: 1,
    AnswerId: 106534,
    Answers: [
      {
        Id: 106534,
        Text: '4',
      },
      {
        Id: 106535,
        Text: '3',
      },
      {
        Id: 106536,
        Text: '1',
      },
      {
        Id: 106537,
        Text: '2',
      },
    ],
  },
  {
    Id: 25742,
    Text: 'JavaScript có giống với Java không?',
    Marks: 1,
    AnswerId: 106538,
    Answers: [
      {
        Id: 106538,
        Text: 'Không',
      },
      {
        Id: 106539,
        Text: 'Có',
      },
    ],
  },
  {
    Id: 25743,
    Text: 'Cặp thẻ nào được sử dụng để đưa JavaScript vào file HTML?',
    Marks: 1,
    AnswerId: 106540,
    Answers: [
      {
        Id: 106540,
        Text: '\u003cscript\u003e\u003c/script\u003e',
      },
      {
        Id: 106541,
        Text: '\u003cscripting\u003e/\u003cscripting\u003e',
      },
      {
        Id: 106542,
        Text: '\u003cjs\u003e\u003c/js\u003e',
      },
      {
        Id: 106543,
        Text: '\u003cJavaScript\u003e\u003c/JavaScript\u003e',
      },
    ],
  },
  {
    Id: 25744,
    Text: 'JavaScript có khả năng gì?',
    Marks: 1,
    AnswerId: 106546,
    Answers: [
      {
        Id: 106544,
        Text: 'Xử lý file của người dùng',
      },
      {
        Id: 106545,
        Text: 'Hỗ trợ mạng',
      },
      {
        Id: 106546,
        Text: 'Điều khiển trình duyệt',
      },
    ],
  },
  {
    Id: 25745,
    Text: 'Ban đầu, JavaScript do hãng công nghệ nào phát triển?',
    Marks: 1,
    AnswerId: 106547,
    Answers: [
      {
        Id: 106547,
        Text: 'Netscape',
      },
      {
        Id: 106548,
        Text: 'NEC',
      },
      {
        Id: 106549,
        Text: 'Microsoft',
      },
      {
        Id: 106550,
        Text: 'ECMA (European Computer Manufacturers Association)',
      },
    ],
  },
  {
    Id: 25746,
    Text: 'JavaScript hồi đáp lại tương tác của người dùng khi nào?',
    Marks: 1,
    AnswerId: 106553,
    Answers: [
      {
        Id: 106551,
        Text: 'Các phương án đều sai',
      },
      {
        Id: 106552,
        Text: 'Khi người dùng nhấn vào menu',
      },
      {
        Id: 106553,
        Text: 'Các phương án đều đúng',
      },
      {
        Id: 106554,
        Text: 'Khi người dùng nhấn chuột',
      },
    ],
  },
  {
    Id: 25747,
    Text: 'Tên file của các hàm JavaScript bên ngoài trang HTML cần có đuôi gì?',
    Marks: 1,
    AnswerId: 106558,
    Answers: [
      {
        Id: 106555,
        Text: '.jst',
      },
      {
        Id: 106556,
        Text: '.jsc',
      },
      {
        Id: 106557,
        Text: '.jsp',
      },
      {
        Id: 106558,
        Text: '.js',
      },
    ],
  },
  {
    Id: 25748,
    Text: 'Khi ngăn cách các từ trong JavaScript, người ta dùng:',
    Marks: 1,
    AnswerId: 106561,
    Answers: [
      {
        Id: 106559,
        Text: 'dấu chấm (.)',
      },
      {
        Id: 106560,
        Text: 'dấu hai chấm (:)',
      },
      {
        Id: 106561,
        Text: 'dấu cách (space)',
      },
      {
        Id: 106562,
        Text: 'dấu gạch dưới (_)',
      },
    ],
  },
  {
    Id: 25749,
    Text: 'Làm thế nào để bạn xác định đúng 1 đoạn mã của JavaScript trong file HTML?',
    Marks: 1,
    AnswerId: 106566,
    Answers: [
      {
        Id: 106563,
        Text: 'Sử dụng thẻ \u003cJavaScript\u003e mở với thuộc tính type="text/JavaScript"',
      },
      {
        Id: 106564,
        Text: 'Sử dụng thẻ APPLET mở với thuộc tính type="text/JavaScript"',
      },
      {
        Id: 106565,
        Text: 'Viết JavaScript bất cứ nơi nào và trình duyệt luôn luôn nhận ra nó',
      },
      {
        Id: 106566,
        Text: 'Sử dụng thẻ \u003cSCRIPT\u003e mở với thuộc tính type="text/JavaScript"',
      },
    ],
  },
  {
    Id: 25750,
    Text: 'Để phân biệt kiểu dấu phẩy động với kiểu số nguyên, phải có ít nhất bao nhiêu chữ số theo sau dấu chấm hay E?',
    Marks: 1,
    AnswerId: 106568,
    Answers: [
      {
        Id: 106567,
        Text: '3',
      },
      {
        Id: 106568,
        Text: '1',
      },
      {
        Id: 106569,
        Text: '2',
      },
      {
        Id: 106570,
        Text: '4',
      },
    ],
  },
  {
    Id: 25751,
    Text: 'Phép toán (7 \u003e= 5) || (5 \u003e 5) trả về giá trị nào?',
    Marks: 1,
    AnswerId: 106572,
    Answers: [
      {
        Id: 106571,
        Text: 'Không trả về giá trị nào cả',
      },
      {
        Id: 106572,
        Text: 'TRUE',
      },
      {
        Id: 106573,
        Text: 'FALSE',
      },
      {
        Id: 106574,
        Text: 'Đưa ra thông báo lỗi cú pháp',
      },
    ],
  },
  {
    Id: 25752,
    Text: 'Cú pháp lệnh If với "i" không bằng 5 có dạng như thế nào',
    Marks: 1,
    AnswerId: 106576,
    Answers: [
      {
        Id: 106575,
        Text: 'if (i \u003c\u003e 5) {}',
      },
      {
        Id: 106576,
        Text: 'if (i != 5) {}',
      },
      {
        Id: 106577,
        Text: 'if i\u003c\u003e5 {}',
      },
      {
        Id: 106578,
        Text: 'if i=! 5 then {}',
      },
    ],
  },
  {
    Id: 25753,
    Text: 'Từ khóa nào chỉ một giá trị vượt quá giới hạn xử lý của JavaScript?',
    Marks: 1,
    AnswerId: 106582,
    Answers: [
      {
        Id: 106579,
        Text: 'Null',
      },
      {
        Id: 106580,
        Text: 'Break',
      },
      {
        Id: 106581,
        Text: 'Indefined',
      },
      {
        Id: 106582,
        Text: 'Infinity',
      },
    ],
  },
  {
    Id: 25754,
    Text: 'Cách nào sau đây là đúng để làm tròn số 7.25 với giá trị nguyên gần nhất?',
    Marks: 1,
    AnswerId: 106586,
    Answers: [
      {
        Id: 106583,
        Text: 'Math.rnd(7.25)',
      },
      {
        Id: 106584,
        Text: 'round(7.25)',
      },
      {
        Id: 106585,
        Text: 'rnd(7.25)',
      },
      {
        Id: 106586,
        Text: 'Math.round(7.25)',
      },
    ],
  },
  {
    Id: 25755,
    Text: 'Toán tử typeof có ý nghĩa gì?',
    Marks: 1,
    AnswerId: 106589,
    Answers: [
      {
        Id: 106587,
        Text: 'Được dùng như một từ khóa tham chiếu đến một thuộc tính của đối tượng được gọi',
      },
      {
        Id: 106588,
        Text: 'Dùng để tạo ra một thể hiện (instance) của một kiểu đối tượng có hàm khởi dựng',
      },
      {
        Id: 106589,
        Text: 'Trả về một chuỗi ký tự xác định kiểu dữ liệu của toán hạng',
      },
      {
        Id: 106590,
        Text: 'Các phương án đều sai',
      },
    ],
  },
  {
    Id: 25756,
    Text: 'Phương thức "search" của đối tượng String có chức năng gì?',
    Marks: 1,
    AnswerId: 106591,
    Answers: [
      {
        Id: 106591,
        Text: 'Tìm một chuỗi con, trả lại vị trí tìm được trong chuỗi dò tìm, nếu không tìm thấy trả về -1.',
      },
      {
        Id: 106592,
        Text: 'Tìm một chuỗi con và thay thế chuỗi con được sử dụng so khớp bằng một chuỗi con khác.',
      },
      {
        Id: 106593,
        Text: 'Tìm so khớp trong một chuỗi, trả về chuỗi con tìm được hay null',
      },
      {
        Id: 106594,
        Text: 'Tìm so khớp trong một chuỗi, trả về true hay false',
      },
    ],
  },
  {
    Id: 25757,
    Text: 'Khai báo hằng trong JavaScript theo cú pháp nào sau đây là đúng?',
    Marks: 1,
    AnswerId: 106598,
    Answers: [
      {
        Id: 106595,
        Text: 'const giáTrị = tênHằng;',
      },
      {
        Id: 106596,
        Text: 'const giáTrị == tênHằng;',
      },
      {
        Id: 106597,
        Text: 'const tênHằng == giáTrị;',
      },
      {
        Id: 106598,
        Text: 'Trong JavaScript không có kiểu hằng số const',
      },
    ],
  },
  {
    Id: 25758,
    Text: 'Lệnh nào được sử dụng để tạo ra 1 hàm trong JavaScript?',
    Marks: 1,
    AnswerId: 106600,
    Answers: [
      {
        Id: 106599,
        Text: 'function:myFunction()',
      },
      {
        Id: 106600,
        Text: 'function myFunction()',
      },
      {
        Id: 106601,
        Text: 'function=myFunction()',
      },
    ],
  },
  {
    Id: 25759,
    Text: 'Trong JavaScript, hàm eval() dùng để làm gì?',
    Marks: 1,
    AnswerId: 106605,
    Answers: [
      {
        Id: 106602,
        Text: 'Cho phép chương trình chọn một trong nhiều lựa chọn',
      },
      {
        Id: 106603,
        Text: 'Chuyển các số nguyên sang cơ số 10 và đảm bảo rằng các dữ liệu đưọc nhập dưới dạng ký tự được chuyển thành số trước khi tính toán',
      },
      {
        Id: 106604,
        Text: 'Kiểm tra một giá trị nào đó có phải là một số hay không',
      },
      {
        Id: 106605,
        Text: 'Đánh giá một biểu thức và trả giá trị của biểu thức hay giá trị undefined nếu không tính toán được biểu thức',
      },
    ],
  },
  {
    Id: 25760,
    Text: 'Trong JavaScript, sự kiện Onload thực hiện khi:',
    Marks: 1,
    AnswerId: 106609,
    Answers: [
      {
        Id: 106606,
        Text: 'Khi click chuột',
      },
      {
        Id: 106607,
        Text: 'Khi di chuyển chuột qua.',
      },
      {
        Id: 106608,
        Text: 'Khi kết thúc một chương trình',
      },
      {
        Id: 106609,
        Text: 'Khi bắt đầu chương trình chạy',
      },
    ],
  },
  {
    Id: 25761,
    Text: 'Trong JavaScript, sự kiện Onchange thực hiện khi nào?',
    Marks: 1,
    AnswerId: 106613,
    Answers: [
      {
        Id: 106610,
        Text: 'Khi một đối tượng trong form mất focus.',
      },
      {
        Id: 106611,
        Text: 'Khi một đối tượng trong form có focus',
      },
      {
        Id: 106612,
        Text: 'Khi click chuột vào nút lệnh',
      },
      {
        Id: 106613,
        Text: 'Xảy ra khi giá trị của một trường trong form được người dùng thay đổi',
      },
    ],
  },
  {
    Id: 25762,
    Text: 'Lệnh break kết hợp với vòng for dùng để?',
    Marks: 1,
    AnswerId: 106615,
    Answers: [
      {
        Id: 106614,
        Text: 'Không thể kết hợp được.',
      },
      {
        Id: 106615,
        Text: 'Thoát khỏi vòng lặp',
      },
      {
        Id: 106616,
        Text: 'Nhảy đến một tập lệnh khác',
      },
      {
        Id: 106617,
        Text: 'Không có ý nghĩa trong vòng lặp',
      },
    ],
  },
  {
    Id: 25763,
    Text: 'Trong JavaScript đoạn mã sau cho ra kết quả gì? \u003cscript\u003e function kiemtra(){ window.open("http://www.vnn.vn","Chao"); } \u003c/script\u003e \u003c/head\u003e \u003cbody onload ="kiemtra()"\u003e\u003c/body\u003e',
    Marks: 1,
    AnswerId: 106619,
    Answers: [
      {
        Id: 106618,
        Text: 'Khi kết thúc thì một site khác hiện ra',
      },
      {
        Id: 106619,
        Text: 'Khi chạy thì một trang khác (VNN) được hiện ra',
      },
      {
        Id: 106620,
        Text: 'Hiện một trang vnn duy nhất',
      },
      {
        Id: 106621,
        Text: 'Không chạy được vì sai',
      },
    ],
  },
  {
    Id: 25764,
    Text: 'Vòng lặp (Do.. while) là dạng vòng lặp?',
    Marks: 1,
    AnswerId: 106625,
    Answers: [
      {
        Id: 106622,
        Text: 'Không thuộc dạng nào đã nêu',
      },
      {
        Id: 106623,
        Text: 'Cả hai dạng đã nêu',
      },
      {
        Id: 106624,
        Text: 'Không xác định và xét điều kiện rồi mới lặp',
      },
      {
        Id: 106625,
        Text: 'Không xác định và lặp rồi mới xét điều kiện',
      },
    ],
  },
  {
    Id: 25765,
    Text: 'Cú pháp lệnh vòng lặp WHILE có dạng như thế nào?',
    Marks: 1,
    AnswerId: 106627,
    Answers: [
      {
        Id: 106626,
        Text: 'while i=1 to 10 {}',
      },
      {
        Id: 106627,
        Text: 'while (i\u003c=10) {}',
      },
      {
        Id: 106628,
        Text: 'white (i=0;i++;i=10) {}',
      },
      {
        Id: 106629,
        Text: 'while (i\u003c=10;i++) {}',
      },
    ],
  },
  {
    Id: 25766,
    Text: 'Mô tả nào là đúng về hàm?',
    Marks: 1,
    AnswerId: 106633,
    Answers: [
      {
        Id: 106630,
        Text: 'Một hàm có thể định nghĩa mà không có tham số nào nhưng các dấu ngoặc đơn là bắt buộc.',
      },
      {
        Id: 106631,
        Text: 'Trong khối lệnh, hàm có thể gọi một hàm khác và có thể gọi lại chính nó.',
      },
      {
        Id: 106632,
        Text: 'Hàm là một khối lệnh và được gán bởi một tên.',
      },
      {
        Id: 106633,
        Text: 'Các phương án đều đúng',
      },
    ],
  },
  {
    Id: 25767,
    Text: 'Lệnh lặp for có dạng như thế nào?',
    Marks: 1,
    AnswerId: 106637,
    Answers: [
      {
        Id: 106634,
        Text: 'For ( biến = Điều kiện, Giá trị tăng Giá trị cuối)',
      },
      {
        Id: 106635,
        Text: 'Tất cả các dạng đã nêu.',
      },
      {
        Id: 106636,
        Text: 'For ( biến = Giá trị đầu, Giá trị tăng, điều kiện)',
      },
      {
        Id: 106637,
        Text: 'For ( biến = Giá trị đầu, Điều kiện, Giá trị tăng)',
      },
    ],
  },
  {
    Id: 25768,
    Text: 'Vòng lặp While là dạng vòng lặp?',
    Marks: 1,
    AnswerId: 106640,
    Answers: [
      {
        Id: 106638,
        Text: 'Không thuộc dạng nào đã nêu',
      },
      {
        Id: 106639,
        Text: 'Không xác định và lặp rồi mới xét điều kiện',
      },
      {
        Id: 106640,
        Text: 'Không xác định và xét điều kiện rồi mới lặp',
      },
      {
        Id: 106641,
        Text: 'Cả hai dạng đã nêu',
      },
    ],
  },
  {
    Id: 25769,
    Text: 'Trong JavaScript, sự kiện OnMouseOver thực hiện khi nào?',
    Marks: 1,
    AnswerId: 106644,
    Answers: [
      {
        Id: 106642,
        Text: 'Khi một đối tượng trong form có focus',
      },
      {
        Id: 106643,
        Text: 'Khi một đối tượng trong form mất focus.',
      },
      {
        Id: 106644,
        Text: 'Khi di chuyển con chuột qua một đối tượng trong form.',
      },
      {
        Id: 106645,
        Text: 'Khi click chuột vào nút lệnh',
      },
    ],
  },
  {
    Id: 25770,
    Text: 'Trừu tượng hóa trong lập trình hướng đối tượng được hiểu như thế nào?',
    Marks: 1,
    AnswerId: 106648,
    Answers: [
      {
        Id: 106646,
        Text: 'Phân mảnh vấn đề lớn thành các vấn đề con độc lập, từ đó xây dựng nên hàm và thủ tục',
      },
      {
        Id: 106647,
        Text: 'Người viết mã được phép thay đổi nó trạng thái nội tại của một đối tượng',
      },
      {
        Id: 106648,
        Text: 'Chỉ trình bày những đặc điểm cần thiết của vấn đề mà không trình bày chi tiết cụ thể hoặc giải thích tính phức tạp của vấn đề đó',
      },
      {
        Id: 106649,
        Text: 'Tất cả đều đúng',
      },
    ],
  },
  {
    Id: 25771,
    Text: 'Thuộc tính target diễn tả điều gì?',
    Marks: 1,
    AnswerId: 106650,
    Answers: [
      {
        Id: 106650,
        Text: 'Đối tượng mà sự kiện diễn ra trong đó',
      },
      {
        Id: 106651,
        Text: 'Tọa độ của cửa số trang tại vị trí xảy ra sự kiện',
      },
      {
        Id: 106652,
        Text: 'Trả về đối tượng đầu tiên mà sự kiện diễn ra',
      },
      {
        Id: 106653,
        Text: 'Loại sự kiện',
      },
    ],
  },
  {
    Id: 25772,
    Text: 'Đối tượng nào chứa thông tin về URL hiện tại?',
    Marks: 1,
    AnswerId: 106656,
    Answers: [
      {
        Id: 106654,
        Text: 'screen',
      },
      {
        Id: 106655,
        Text: 'navigator',
      },
      {
        Id: 106656,
        Text: 'location',
      },
      {
        Id: 106657,
        Text: 'window',
      },
    ],
  },
  {
    Id: 25773,
    Text: 'Đối tượng quan trọng nhất của BOM là gì?',
    Marks: 1,
    AnswerId: 106661,
    Answers: [
      {
        Id: 106658,
        Text: 'Frames',
      },
      {
        Id: 106659,
        Text: 'History',
      },
      {
        Id: 106660,
        Text: 'Location',
      },
      {
        Id: 106661,
        Text: 'Document',
      },
    ],
  },
  {
    Id: 25774,
    Text: 'Phương thức onAbort() chỉ áp dụng cho phần tử nào?',
    Marks: 1,
    AnswerId: 106665,
    Answers: [
      {
        Id: 106662,
        Text: 'Text area',
      },
      {
        Id: 106663,
        Text: 'Document',
      },
      {
        Id: 106664,
        Text: 'Button',
      },
      {
        Id: 106665,
        Text: 'Image',
      },
    ],
  },
  {
    Id: 25775,
    Text: 'Đối tượng con nào của đối tượng window chứa những URL đã được truy cập',
    Marks: 1,
    AnswerId: 106666,
    Answers: [
      {
        Id: 106666,
        Text: 'history',
      },
      {
        Id: 106667,
        Text: 'opener',
      },
      {
        Id: 106668,
        Text: 'pageYOffset',
      },
      {
        Id: 106669,
        Text: 'back',
      },
    ],
  },
  {
    Id: 25776,
    Text: 'Phương thức nào thực hiện câu lệnh JavaScript một lần sau một thời gian nhất định tính bằng milli giây?',
    Marks: 1,
    AnswerId: 106670,
    Answers: [
      {
        Id: 106670,
        Text: 'setTimeout(câu lệnh JavaScript, số milli giây)',
      },
      {
        Id: 106671,
        Text: 'setTimeOut()',
      },
      {
        Id: 106672,
        Text: 'clearTimeout(số milli giây)',
      },
      {
        Id: 106673,
        Text: 'setInterval(câu lệnh JavaScript, số milli giây)',
      },
    ],
  },
  {
    Id: 25777,
    Text: 'OOP (Lập trình hướng đối tượng) là viết tắt của từ nào?',
    Marks: 1,
    AnswerId: 106674,
    Answers: [
      {
        Id: 106674,
        Text: 'Object Oriented Programming',
      },
      {
        Id: 106675,
        Text: 'Object Operating Programming',
      },
      {
        Id: 106676,
        Text: 'Object Occult Programming',
      },
      {
        Id: 106677,
        Text: 'Object Overloading Programming',
      },
    ],
  },
  {
    Id: 25778,
    Text: 'Phương thức comfirm trong đối tượng window có chức năng gì ?',
    Marks: 1,
    AnswerId: 106681,
    Answers: [
      {
        Id: 106678,
        Text: 'Thực hiện câu lệnh JavaScript một lần sau một thời gian nhất định',
      },
      {
        Id: 106679,
        Text: 'Hiển thị một hộp hội thoại chứa một thông báo do một ứng dụng xác định.',
      },
      {
        Id: 106680,
        Text: 'Hiển thị một hộp hội thoại chứa một thông báo do một ứng dụng xác định và một text box để người sử dụng nhập liệu',
      },
      {
        Id: 106681,
        Text: 'Hiển thị một hộp hội thoại chứa một thông báo do một ứng dụng xác định và hai nút lệnh Yes, No',
      },
    ],
  },
  {
    Id: 25779,
    Text: 'Quá trình tiến hóa của Lập trình hướng đối tượng theo thứ tự nào?',
    Marks: 1,
    AnswerId: 106682,
    Answers: [
      {
        Id: 106682,
        Text: 'Sự trừu tượng hóa dữ liệu -\u003e Lập trình tuyến tính -\u003e Lập trình có cấu trúc -\u003e Lập trình hướng đối tượng',
      },
      {
        Id: 106683,
        Text: 'Lập trình có cấu trúc -\u003e Sự trừu tượng hóa dữ liệu -\u003e Lập trình tuyến tính -\u003e Lập trình hướng đối tượng',
      },
      {
        Id: 106684,
        Text: 'Lập trình tuyến tính -\u003e Lập trình có cấu trúc -\u003e Sự trừu tượng hóa dữ liệu -\u003e Lập trình hướng đối tượng',
      },
      {
        Id: 106685,
        Text: 'Lập trình có cấu trúc -\u003e Lập trình tuyến tính -\u003e Sự trừu tượng hóa dữ liệu -\u003e Lập trình hướng đối tượng',
      },
    ],
  },
  {
    Id: 25780,
    Text: 'Dùng thuộc tính nào để thay đổi lề trái của một phần tử?',
    Marks: 1,
    AnswerId: 106686,
    Answers: [
      {
        Id: 106686,
        Text: 'margin-left:',
      },
      {
        Id: 106687,
        Text: 'indent:',
      },
      {
        Id: 106688,
        Text: 'margin:',
      },
      {
        Id: 106689,
        Text: 'text-indent:',
      },
    ],
  },
  {
    Id: 25781,
    Text: 'Làm sao để mỗi từ trong 1 dòng đều viết hoa ở đầu từ?',
    Marks: 1,
    AnswerId: 106693,
    Answers: [
      {
        Id: 106690,
        Text: 'You can’t do that with CSS',
      },
      {
        Id: 106691,
        Text: 'text-style:capitalize',
      },
      {
        Id: 106692,
        Text: 'text-transform:uppercase',
      },
      {
        Id: 106693,
        Text: 'text-transform:capitalize',
      },
    ],
  },
  {
    Id: 25782,
    Text: 'Khi dữ liệu được mã hóa và gửi đi, phía trang web nhận sẽ giải mã dữ liệu bằng hàm nào sau đây?',
    Marks: 1,
    AnswerId: 106696,
    Answers: [
      {
        Id: 106694,
        Text: 'encodeURI();',
      },
      {
        Id: 106695,
        Text: 'focus();',
      },
      {
        Id: 106696,
        Text: 'decodeURI();',
      },
      {
        Id: 106697,
        Text: 'restore();',
      },
    ],
  },
  {
    Id: 25783,
    Text: 'Thuộc tính vlinkColor của đối tượng document trả về kết quả nào ?',
    Marks: 1,
    AnswerId: 106701,
    Answers: [
      {
        Id: 106698,
        Text: 'Màu của liên kết',
      },
      {
        Id: 106699,
        Text: 'Màu nền của trang web',
      },
      {
        Id: 106700,
        Text: 'Màu của liên kết khi trỏ đến',
      },
      {
        Id: 106701,
        Text: 'Màu của liên kết đã kích hoạt',
      },
    ],
  },
  {
    Id: 25784,
    Text: 'Cho biết kết quả sau khi thực hiện câu lệnh: for(prop in navigator){ document.write(prop+": "+ navigator [prop]+"";}',
    Marks: 1,
    AnswerId: 106703,
    Answers: [
      {
        Id: 106702,
        Text: 'Hiển thị các phương thức của đối tượng navigator',
      },
      {
        Id: 106703,
        Text: 'Hiển thị các thuộc tính của đối tượng navigator',
      },
      {
        Id: 106704,
        Text: 'Hiển thị chức năng của các phương thức của đối tượng navigator',
      },
      {
        Id: 106705,
        Text: 'Hiển thị chức năng của các thuộc tính của đối tượng navigator',
      },
    ],
  },
  {
    Id: 25785,
    Text: 'Thuộc tính appCodeName của đối tượng navigator chứa thông tin gì?',
    Marks: 1,
    AnswerId: 106706,
    Answers: [
      {
        Id: 106706,
        Text: 'Tên mã của trình duyệt',
      },
      {
        Id: 106707,
        Text: 'Hệ điều hành của trình duyệt',
      },
      {
        Id: 106708,
        Text: 'Tên của trình duyệt',
      },
      {
        Id: 106709,
        Text: 'Phiên bản của trình duyệt',
      },
    ],
  },
  {
    Id: 25786,
    Text: 'Sự kiện nào được kích hoạt sau khi trình duyệt đã tải xong tư liệu HTML , applet hay image?',
    Marks: 1,
    AnswerId: 106711,
    Answers: [
      {
        Id: 106710,
        Text: 'onKeyUp();',
      },
      {
        Id: 106711,
        Text: 'onLoad();',
      },
      {
        Id: 106712,
        Text: 'onKeyPress();',
      },
      {
        Id: 106713,
        Text: 'onScroll();',
      },
    ],
  },
  {
    Id: 25787,
    Text: 'Muốn liên kết xHTML với 1 file định nghĩa CSS ta dùng dòng nào sau đây?',
    Marks: 1,
    AnswerId: 106716,
    Answers: [
      {
        Id: 106714,
        Text: '\u003cstyle src=”mystyle.css”\u003e',
      },
      {
        Id: 106715,
        Text: '\u003cstylesheet\u003emystyle.css\u003c/stylesheet\u003e',
      },
      {
        Id: 106716,
        Text: '\u003clink rel=”stylesheet” type=”text/css” href=”mystyle.css”\u003e',
      },
      {
        Id: 106717,
        Text: 'Các phương án đều sai',
      },
    ],
  },
  {
    Id: 25788,
    Text: 'Để hiển thị liên kết mà ko có gạch chân bên dưới, người ta dùng thuộc tính nào?',
    Marks: 1,
    AnswerId: 106721,
    Answers: [
      {
        Id: 106718,
        Text: 'a {underline:none}',
      },
      {
        Id: 106719,
        Text: 'a {decoration:no underline}',
      },
      {
        Id: 106720,
        Text: 'a {text-decoration:no underline}',
      },
      {
        Id: 106721,
        Text: 'a {text-decoration:none}',
      },
    ],
  },
  {
    Id: 25789,
    Text: 'Thuộc tính nào làm chữ trong tag p trở thành chữ đậm?',
    Marks: 1,
    AnswerId: 106723,
    Answers: [
      {
        Id: 106722,
        Text: '{text-size:bold}',
      },
      {
        Id: 106723,
        Text: 'p {font-weight:bold}',
      },
      {
        Id: 106724,
        Text: '\u003cp style=”text-size:bold”\u003e',
      },
      {
        Id: 106725,
        Text: '\u003cp style=”font-size:bold”\u003e',
      },
    ],
  },
  {
    Id: 25790,
    Text: 'Trong cấu trúc form, đa số các phần tử được đặt trong cặp thẻ nào?',
    Marks: 1,
    AnswerId: 106727,
    Answers: [
      {
        Id: 106726,
        Text: '\u003cselect\u003e…\u003c/select\u003e',
      },
      {
        Id: 106727,
        Text: '\u003cinput\u003e…\u003c/input\u003e',
      },
      {
        Id: 106728,
        Text: '\u003cspan\u003e..\u003c/span\u003e',
      },
      {
        Id: 106729,
        Text: '\u003cinsert\u003e…\u003c/insert\u003e',
      },
    ],
  },
  {
    Id: 25791,
    Text: 'Thuộc tính method trong đối tượng form có tác dụng gì ?',
    Marks: 1,
    AnswerId: 106730,
    Answers: [
      {
        Id: 106730,
        Text: 'Thiết lập/Trả về phương thức HTTP để submit một form',
      },
      {
        Id: 106731,
        Text: 'Thiết lập frame để submit dữ liệu đến',
      },
      {
        Id: 106732,
        Text: 'Thiết lập/Trả về các action trên form',
      },
      {
        Id: 106733,
        Text: 'Thiết lập frame để submit dữ liệu đến',
      },
    ],
  },
  {
    Id: 25792,
    Text: 'Thẻ \u003cinput type=”Submit” ...\u003e dùng để làm gì?',
    Marks: 1,
    AnswerId: 106734,
    Answers: [
      {
        Id: 106734,
        Text: 'Tạo một nút lệnh dùng để gửi tin trong form đi',
      },
      {
        Id: 106735,
        Text: 'Tạo một cùng có nhiều cột nhiều dòng',
      },
      {
        Id: 106736,
        Text: 'Tất cả các ý đã nêu',
      },
      {
        Id: 106737,
        Text: 'Tạo một ô text để nhập dữ liệu',
      },
    ],
  },
  {
    Id: 25793,
    Text: 'Phương thức reset có chức năng gì?',
    Marks: 1,
    AnswerId: 106739,
    Answers: [
      {
        Id: 106738,
        Text: 'Gửi dữ liệu trong form',
      },
      {
        Id: 106739,
        Text: 'Thiết lập lại các giá trị của các trường dữ liệu của form',
      },
      {
        Id: 106740,
        Text: 'Thiết lập frame để submit dữ liệu đến',
      },
      {
        Id: 106741,
        Text: 'Trả về phương thức HTTP để submit một form',
      },
    ],
  },
  {
    Id: 25794,
    Text: 'Thẻ \u003cinput type=”checkbox” ...\u003e dùng để làm gì?',
    Marks: 1,
    AnswerId: 106742,
    Answers: [
      {
        Id: 106742,
        Text: 'Tạo một nhóm đối tượng chọn được nhiều đối tượng',
      },
      {
        Id: 106743,
        Text: 'Tất cả các ý đã nâu',
      },
      {
        Id: 106744,
        Text: 'Tạo một ô text để nhập dữ liệu',
      },
      {
        Id: 106745,
        Text: 'Tạo một cùng có nhiều cột nhiều dòng',
      },
    ],
  },
  {
    Id: 25795,
    Text: 'Thuộc tính method, action được dùng khi nào?',
    Marks: 1,
    AnswerId: 106746,
    Answers: [
      {
        Id: 106746,
        Text: 'Khi gửi dữ liệu',
      },
      {
        Id: 106747,
        Text: 'Khi sao chép dữ liệu',
      },
      {
        Id: 106748,
        Text: 'Khi xóa dữ liệu',
      },
      {
        Id: 106749,
        Text: 'Khi nhập dữ liệu',
      },
    ],
  },
  {
    Id: 25796,
    Text: 'Phần tử nào cho phép người sử dụng nhập vào nhiều dòng?',
    Marks: 1,
    AnswerId: 106750,
    Answers: [
      {
        Id: 106750,
        Text: 'TextArea',
      },
      {
        Id: 106751,
        Text: 'Password',
      },
      {
        Id: 106752,
        Text: 'Text',
      },
      {
        Id: 106753,
        Text: 'SelectBox',
      },
    ],
  },
  {
    Id: 25797,
    Text: 'Thẻ \u003ctextarea rows= cols = ...\u003e\u003c/texterea\u003e dùng để làm gì?',
    Marks: 1,
    AnswerId: 106754,
    Answers: [
      {
        Id: 106754,
        Text: 'Tạo một vùng nhập văn bản nhiều cột nhiều dòng',
      },
      {
        Id: 106755,
        Text: 'Tạo một ô text để nhập dữ liệu',
      },
      {
        Id: 106756,
        Text: 'Tất cả các phương án đều đúng',
      },
      {
        Id: 106757,
        Text: 'Tạo một ô password',
      },
    ],
  },
  {
    Id: 25798,
    Text: 'Để truy cập một phần tử option, ta sử dụng tập forms với cú pháp nào?',
    Marks: 1,
    AnswerId: 106760,
    Answers: [
      {
        Id: 106758,
        Text: 'document.forms.options[i];',
      },
      {
        Id: 106759,
        Text: 'document.forms.name_select.options[i];',
      },
      {
        Id: 106760,
        Text: 'document.forms.name_form.name_select.options[i];',
      },
      {
        Id: 106761,
        Text: 'document.name_form.name_select.options[i];',
      },
    ],
  },
  {
    Id: 25799,
    Text: 'Để chỉ định rõ kiểu phần tử trong form, người ta dùng thuộc tính nào?',
    Marks: 1,
    AnswerId: 106762,
    Answers: [
      {
        Id: 106762,
        Text: 'Type',
      },
      {
        Id: 106763,
        Text: 'Name',
      },
      {
        Id: 106764,
        Text: 'Target',
      },
      {
        Id: 106765,
        Text: 'Method',
      },
    ],
  },
  {
    Id: 25800,
    Text: 'Hiệu ứng animate() trong thư viện jQuery có tác dụng gì?',
    Marks: 1,
    AnswerId: 106768,
    Answers: [
      {
        Id: 106766,
        Text: 'Cho phép các phần tử trong tag hiện một cách từ từ, biến thiên theo thời gian đã được thiết lập',
      },
      {
        Id: 106767,
        Text: 'Cho phép các phần tử trong tag ẩn một cách từ từ biến thiên theo thời gian đã được thiết lập',
      },
      {
        Id: 106768,
        Text: 'Thực hiện một tùy biến chuyển động của tập hợp các thuộc tính CSS',
      },
      {
        Id: 106769,
        Text: 'Thiết lập thời gian trì hoãn thực hiện các function sau nó',
      },
    ],
  },
  {
    Id: 25801,
    Text: 'Hiệu ứng .fadeOut() trong thư viện jQuery có tác dụng gì?',
    Marks: 1,
    AnswerId: 106773,
    Answers: [
      {
        Id: 106770,
        Text: 'Thực hiện một tùy biến chuyển động của tập hợp các thuộc tính CSS',
      },
      {
        Id: 106771,
        Text: 'Cho phép các phần tử trong tag hiện một cách từ từ biến thiên theo thời gian đã được thiết lập',
      },
      {
        Id: 106772,
        Text: 'Thiết lập thời gian trì hoãn thực hiện các function sau nó',
      },
      {
        Id: 106773,
        Text: 'Cho phép các phần tử trong tag ẩn một cách từ từ biến thiên theo thời gian đã được thiết lập',
      },
    ],
  },
  {
    Id: 25802,
    Text: 'Hiệu ứng nào được sử dụng để điều chỉnh độ mờ của các phần tử trong jQuery?',
    Marks: 1,
    AnswerId: 106774,
    Answers: [
      {
        Id: 106774,
        Text: '.fadeOut()',
      },
      {
        Id: 106775,
        Text: '.hide()',
      },
      {
        Id: 106776,
        Text: '.fadeTo()',
      },
      {
        Id: 106777,
        Text: '.fadeOff()',
      },
    ],
  },
  {
    Id: 25803,
    Text: 'Để chọn tất cả các phần tử \u003ca\u003e với giá trị thuộc tính bắt đầu bằng “# “, người ta sử dụng câu lênh nào sau đây?',
    Marks: 1,
    AnswerId: 106778,
    Answers: [
      {
        Id: 106778,
        Text: '$(“a[href^=’#’]”)',
      },
      {
        Id: 106779,
        Text: '$(“a[href$=’#’]”)',
      },
      {
        Id: 106780,
        Text: '$(“a[href!=’#’]”)',
      },
      {
        Id: 106781,
        Text: '$(“a[href*=’#’]”)',
      },
    ],
  },
  {
    Id: 25804,
    Text: 'jQuery hỗ trợ phương thức nào để tạo menu chồng nhau?',
    Marks: 1,
    AnswerId: 106785,
    Answers: [
      {
        Id: 106782,
        Text: 'Draggable()',
      },
      {
        Id: 106783,
        Text: 'Dapicker()',
      },
      {
        Id: 106784,
        Text: 'Droppable()',
      },
      {
        Id: 106785,
        Text: 'Accordion()',
      },
    ],
  },
  {
    Id: 25805,
    Text: 'Hàm bind() được sử dụng với cú pháp nào sau đây là đúng?',
    Marks: 1,
    AnswerId: 106788,
    Answers: [
      {
        Id: 106786,
        Text: '$(bind).selector(event, data, handler)',
      },
      {
        Id: 106787,
        Text: '$(bind).selector(data, handler, event)',
      },
      {
        Id: 106788,
        Text: '$(selector).bind(event, data, handler)',
      },
      {
        Id: 106789,
        Text: '$(selector).bind(data, handler, event)',
      },
    ],
  },
  {
    Id: 25806,
    Text: 'Trong cú pháp $(selector).action();"$" có ý nghĩa gì?',
    Marks: 1,
    AnswerId: 106791,
    Answers: [
      {
        Id: 106790,
        Text: 'Chỉ ra các hành động được thực hiện lên các phần tử được chọn',
      },
      {
        Id: 106791,
        Text: 'Chỉ ra việc sử dụng thư viện jQuery',
      },
      {
        Id: 106792,
        Text: 'Chỉ ra các phần tử được chọn',
      },
      {
        Id: 106793,
        Text: 'Chỉ ra thư mục chứa thư viện jQuery',
      },
    ],
  },
  {
    Id: 25807,
    Text: 'Sự kiện live() trong jQuery có tác dụng gì?',
    Marks: 1,
    AnswerId: 106795,
    Answers: [
      {
        Id: 106794,
        Text: 'Thực thi khi ta kéo trượt thanh trượt',
      },
      {
        Id: 106795,
        Text: 'Xử lý tất cả các sự kiện hiện hành',
      },
      {
        Id: 106796,
        Text: 'Load một sự kiện JavaScript',
      },
      {
        Id: 106797,
        Text: 'Bắt sự kiện click',
      },
    ],
  },
  {
    Id: 25808,
    Text: 'Cú pháp truy cập đến phần tử \u003ca\u003e có id là linkID?',
    Marks: 1,
    AnswerId: 106801,
    Answers: [
      {
        Id: 106798,
        Text: '$(\u0027a#linkID\u0027)',
      },
      {
        Id: 106799,
        Text: '$(\u0027a?linkID\u0027)',
      },
      {
        Id: 106800,
        Text: '$("a?linkID")',
      },
      {
        Id: 106801,
        Text: '$("a#linkID")',
      },
    ],
  },
  {
    Id: 25809,
    Text: 'Để chọn tất cả các phần tử \u003ca\u003e với giá trị thuộc tính kết thúc bằng “# “, người ta sử dụng câu lênh nào sau đây?',
    Marks: 1,
    AnswerId: 106803,
    Answers: [
      {
        Id: 106802,
        Text: '$(“a[href^=’#’]”)',
      },
      {
        Id: 106803,
        Text: '$(“a[href$=’#’]”)',
      },
      {
        Id: 106804,
        Text: '$(“a[href!=’#’]”)',
      },
      {
        Id: 106805,
        Text: '$(“a[href*=’#’]”)',
      },
    ],
  },
  {
    Id: 25810,
    Text: 'AngularJS là framework của công ty nào?',
    Marks: 1,
    AnswerId: 106806,
    Answers: [
      {
        Id: 106806,
        Text: 'Google',
      },
      {
        Id: 106807,
        Text: 'Yahoo',
      },
      {
        Id: 106808,
        Text: 'Facebook',
      },
      {
        Id: 106809,
        Text: 'IBM',
      },
    ],
  },
  {
    Id: 25811,
    Text: 'Cách khai báo nào đúng cho AngularJS?',
    Marks: 1,
    AnswerId: 106813,
    Answers: [
      {
        Id: 106810,
        Text: '{data}',
      },
      {
        Id: 106811,
        Text: '{{{data}}}',
      },
      {
        Id: 106812,
        Text: '{(data)}',
      },
      {
        Id: 106813,
        Text: '{{data}}',
      },
    ],
  },
  {
    Id: 25812,
    Text: 'Ưu điểm của framework Emscripten là gì?',
    Marks: 1,
    AnswerId: 106814,
    Answers: [
      {
        Id: 106814,
        Text: 'Chuyển đổi C++ thành asm.js',
      },
      {
        Id: 106815,
        Text: 'Chuyển đổi JavaScript thành asm.js',
      },
      {
        Id: 106816,
        Text: 'Chuyển đổi PHP thành asm.js',
      },
      {
        Id: 106817,
        Text: 'Chuyển đổi C# thành asm.js',
      },
    ],
  },
  {
    Id: 25813,
    Text: 'Khi sử dụng AngularJS, kết quả hiển thị sẽ như thế nào?',
    Marks: 1,
    AnswerId: 106821,
    Answers: [
      {
        Id: 106818,
        Text: 'được cập nhật ngay sau active',
      },
      {
        Id: 106819,
        Text: 'được cập nhật ngay sau khi reload trang',
      },
      {
        Id: 106820,
        Text: 'được cập nhật ngay sau hover',
      },
      {
        Id: 106821,
        Text: 'được cập nhật ngay mà không cần reload',
      },
    ],
  },
  {
    Id: 25814,
    Text: 'ng-app thường được đặt trong thẻ nào?',
    Marks: 1,
    AnswerId: 106822,
    Answers: [
      {
        Id: 106822,
        Text: 'Body',
      },
      {
        Id: 106823,
        Text: 'Head',
      },
      {
        Id: 106824,
        Text: 'Meta Description',
      },
      {
        Id: 106825,
        Text: 'Title',
      },
    ],
  },
  {
    Id: 25815,
    Text: 'Để cài đặt FireBase, ta đưa dòng code: \u003cscript src=\u0027https://cdn.firebase.com/v0/firebase.js\u0027\u003e\u003c/script\u003e vào phần nào?',
    Marks: 1,
    AnswerId: 106828,
    Answers: [
      {
        Id: 106826,
        Text: '\u0027footer',
      },
      {
        Id: 106827,
        Text: 'Content',
      },
      {
        Id: 106828,
        Text: 'Head',
      },
      {
        Id: 106829,
        Text: 'Body',
      },
    ],
  },
  {
    Id: 25816,
    Text: '$scope có ý nghĩa gì?',
    Marks: 1,
    AnswerId: 106830,
    Answers: [
      {
        Id: 106830,
        Text: 'Phân biệt thành phần do AngularJS tạo ra',
      },
      {
        Id: 106831,
        Text: 'Khai báo PHP trong javascript',
      },
      {
        Id: 106832,
        Text: 'Là điểm kết thúc của AngularJS',
      },
      {
        Id: 106833,
        Text: 'Là điểm bắt đầu của AngularJS',
      },
    ],
  },
  {
    Id: 25817,
    Text: 'Để ghi dữ liệu trong FireBase, ta dùng cú pháp nào?',
    Marks: 1,
    AnswerId: 106836,
    Answers: [
      {
        Id: 106834,
        Text: 'myDataRef.write(\u0027dữ liệu\u0027);',
      },
      {
        Id: 106835,
        Text: 'myDataRef.writeln(\u0027dữ liệu\u0027);',
      },
      {
        Id: 106836,
        Text: 'myDataRef.set(\u0027dữ liệu\u0027);',
      },
      {
        Id: 106837,
        Text: 'myDataRef.get(\u0027dữ liệu\u0027);',
      },
    ],
  },
  {
    Id: 25818,
    Text: 'Enyo là một framework hỗ trợ gì?',
    Marks: 1,
    AnswerId: 106838,
    Answers: [
      {
        Id: 106838,
        Text: 'Hỗ trợ Hướng đối tượng',
      },
      {
        Id: 106839,
        Text: 'Hỗ trợ Hướng dịch vụ',
      },
      {
        Id: 106840,
        Text: 'Tất cả các phương án đều sai',
      },
      {
        Id: 106841,
        Text: 'Không hỗ trợ JavaScript',
      },
    ],
  },
  {
    Id: 25819,
    Text: 'Ưu điểm của framework Ember là gì?',
    Marks: 1,
    AnswerId: 106845,
    Answers: [
      {
        Id: 106842,
        Text: 'Phát triển giao diện',
      },
      {
        Id: 106843,
        Text: 'Phát triển ứng dụng PHP',
      },
      {
        Id: 106844,
        Text: 'Phát triển ứng dụng server',
      },
      {
        Id: 106845,
        Text: 'Phát triển ứng dụng MVC',
      },
    ],
  },
]
export const LAYO = [
  {
    Id: 25660,
    Text: 'Có mấy cách sử dụng css cho web?',
    Marks: 1,
    AnswerId: 106230,
    Answers: [
      {
        Id: 106230,
        Text: 'Có 3 cách: inline, embedded và linked',
      },
      {
        Id: 106231,
        Text: 'Có 4 cách: inline, embedded, linked và css riêng',
      },
      {
        Id: 106232,
        Text: 'Có 1 cách: inline',
      },
      {
        Id: 106233,
        Text: 'Có 2 cách: inline và embedded',
      },
    ],
  },
  {
    Id: 25661,
    Text: 'Thẻ dòng (inline) có thể chứa thẻ khối (block)?',
    Marks: 1,
    AnswerId: 106235,
    Answers: [
      {
        Id: 106234,
        Text: 'Đúng',
      },
      {
        Id: 106235,
        Text: 'Sai',
      },
    ],
  },
  {
    Id: 25662,
    Text: 'Để viết chú thích trong các file css người sử dụng có thể sử dụng cách nào dưới đây: a. \u003c!-- chú thích--\u003e b. // chú thích c. -- chú thích d. /* chú thích */',
    Marks: 1,
    AnswerId: 106238,
    Answers: [
      {
        Id: 106236,
        Text: 'a, c',
      },
      {
        Id: 106237,
        Text: 'd',
      },
      {
        Id: 106238,
        Text: 'a',
      },
      {
        Id: 106239,
        Text: 'a, d',
      },
    ],
  },
  {
    Id: 25663,
    Text: 'Nội dung của trang web nằm trong thẻ nào?',
    Marks: 1,
    AnswerId: 106240,
    Answers: [
      {
        Id: 106240,
        Text: 'Thẻ body',
      },
      {
        Id: 106241,
        Text: 'Thẻ title',
      },
      {
        Id: 106242,
        Text: 'Thẻ style',
      },
      {
        Id: 106243,
        Text: 'Thẻ head',
      },
    ],
  },
  {
    Id: 25664,
    Text: 'Đoạn mã nào dưới đây viết thẻ lồng chính xác nhất?',
    Marks: 1,
    AnswerId: 106246,
    Answers: [
      {
        Id: 106244,
        Text: '\u003cdiv id="menu"\u003e   \u003cul\u003e     \u003cli\u003e \u003ca href="#"\u003eTrang chủ\u003c/a\u003e\u003c/li\u003e     \u003cli\u003e \u003ca href="#"\u003eGiới thiệu\u003c/a\u003e\u003c/li\u003e   \u003cdiv\u003e \u003c/ul\u003e',
      },
      {
        Id: 106245,
        Text: '\u003cdiv id="menu"\u003e   \u003cul\u003e     \u003cli\u003e \u003ca href="#"\u003eTrang chủ\u003c/a\u003e\u003c/li\u003e     \u003cli\u003e \u003ca href="#"\u003eGiới thiệu\u003c/a\u003e\u003c/ul\u003e   \u003c/li\u003e \u003c/div\u003e',
      },
      {
        Id: 106246,
        Text: '\u003cdiv id="menu"\u003e   \u003cul\u003e     \u003cli\u003e \u003ca href="#"\u003eTrang chủ\u003c/a\u003e\u003c/li\u003e     \u003cli\u003e \u003ca href="#"\u003eGiới thiệu\u003c/a\u003e\u003c/li\u003e   \u003c/ul\u003e \u003c/div\u003e',
      },
      {
        Id: 106247,
        Text: '\u003cdiv id="menu"\u003e   \u003cul\u003e     \u003cli\u003e \u003ca href="#"\u003eTrang chủ\u003c/li\u003e\u003c/a\u003e     \u003cli\u003e \u003ca href="#"\u003eGiới thiệu\u003c/a\u003e\u003c/li\u003e   \u003c/ul\u003e \u003c/div\u003e',
      },
    ],
  },
  {
    Id: 25665,
    Text: 'Thẻ nào là thẻ khối (block) trong các thẻ sau:',
    Marks: 1,
    AnswerId: 106250,
    Answers: [
      {
        Id: 106248,
        Text: 'Thẻ em',
      },
      {
        Id: 106249,
        Text: 'Thẻ a',
      },
      {
        Id: 106250,
        Text: 'Thẻ h1',
      },
      {
        Id: 106251,
        Text: 'Thẻ strong',
      },
    ],
  },
  {
    Id: 25666,
    Text: 'Ký tự "\u0026lt;" được sử dụng để làm gì trong XHTML?',
    Marks: 1,
    AnswerId: 106252,
    Answers: [
      {
        Id: 106252,
        Text: 'Đại diện cho ký tự \u003c được hiển thị trên màn hình',
      },
      {
        Id: 106253,
        Text: 'Đại diện cho ký tự (©) được hiển thị trên màn hình',
      },
      {
        Id: 106254,
        Text: 'Chỉ là các ký tự bình thường',
      },
      {
        Id: 106255,
        Text: 'Đại diện cho ký tự ® được hiển thị trên màn hình',
      },
    ],
  },
  {
    Id: 25667,
    Text: 'Trong Dreamweaver, khi ở chế độ Code View muốn tự động thụt lề của các thẻ lồng nhau sử dụng cách nào?',
    Marks: 1,
    AnswerId: 106257,
    Answers: [
      {
        Id: 106256,
        Text: 'menu Commands\u003eCheck Spelling',
      },
      {
        Id: 106257,
        Text: 'menu Commands\u003eApply Source Formatting',
      },
      {
        Id: 106258,
        Text: 'menu View\u003eCode',
      },
      {
        Id: 106259,
        Text: 'menu View\u003eDesign',
      },
    ],
  },
  {
    Id: 25668,
    Text: 'Thẻ nào là thẻ cha của thẻ img trong đoạn mã sau? \u003cdiv id="header"\u003e     \u003cdiv id="banner"\u003e         \u003cimg src="Images/Banner.jpg" /\u003e         \u003cp id="logo"\u003eViệt Nam Xuất Khẩu\u003c/p\u003e     \u003c/div\u003e     \u003cdiv id="menu"\u003e \u003c/div\u003e \u003c/div\u003e',
    Marks: 1,
    AnswerId: 106263,
    Answers: [
      {
        Id: 106260,
        Text: '\u003cdiv id="header"\u003e',
      },
      {
        Id: 106261,
        Text: '\u003cdiv id="menu"\u003e',
      },
      {
        Id: 106262,
        Text: '\u003cp id="logo"\u003e',
      },
      {
        Id: 106263,
        Text: '\u003cdiv id="banner"\u003e',
      },
    ],
  },
  {
    Id: 25669,
    Text: 'Xác định luật css viết sai trong đoạn mã sau: \u003cdiv id="header"\u003e     \u003cdiv id="banner"\u003e         \u003cimg src="Images/Banner.jpg" /\u003e         \u003cp id="logo"\u003eViệt Nam Xuất Khẩu\u003c/p\u003e     \u003c/div\u003e     \u003cdiv id="menu"\u003e \u003c/div\u003e \u003c/div\u003e',
    Marks: 1,
    AnswerId: 106265,
    Answers: [
      {
        Id: 106264,
        Text: '#banner #logo{color:#F00;}',
      },
      {
        Id: 106265,
        Text: '#header .banner p{color:#F00;}',
      },
      {
        Id: 106266,
        Text: '#banner p{color:#F00;}',
      },
      {
        Id: 106267,
        Text: '#header #banner p{color:#F00;}',
      },
    ],
  },
  {
    Id: 25670,
    Text: 'Để mỗi khi click chuột vào ô textbox, màu nền ô đó chuyển sang màu đỏ thì lệnh CSS tác dụng lên thẻ \u003cinput type="text" name="user" /\u003e  được viết là:',
    Marks: 1,
    AnswerId: 106271,
    Answers: [
      {
        Id: 106268,
        Text: 'input:befor{background-color:red}',
      },
      {
        Id: 106269,
        Text: 'input:after{background-color:red}',
      },
      {
        Id: 106270,
        Text: 'input:active{background-color:red}',
      },
      {
        Id: 106271,
        Text: 'input:focus{background-color:red}',
      },
    ],
  },
  {
    Id: 25671,
    Text: 'Có thể định nghĩa cùng style cho nhiều selector được không?Ví dụ: h1, h2, h3, p {color:blue; font-weight:bold;}',
    Marks: 1,
    AnswerId: 106272,
    Answers: [
      {
        Id: 106272,
        Text: 'Có',
      },
      {
        Id: 106273,
        Text: 'Không',
      },
    ],
  },
  {
    Id: 25672,
    Text: 'Phạm vi áp dụng cho kiểu tạo CSS dạng Linked style?',
    Marks: 1,
    AnswerId: 106274,
    Answers: [
      {
        Id: 106274,
        Text: 'Áp dụng cho toàn bộ website (nhiều trang khác nhau)',
      },
      {
        Id: 106275,
        Text: 'Áp dụng chỉ 1 trang',
      },
      {
        Id: 106276,
        Text: 'Áp dụng tối đa 5 trang',
      },
      {
        Id: 106277,
        Text: 'Áp dụng tối đa 10 trang',
      },
    ],
  },
  {
    Id: 25673,
    Text: 'Với lệnh CSS: .title_top{color:red} #new_top {color:green} Áp dụng cho đoạn mã XHTML dưới đây, style sẽ hiển thị như thế nào? \u003cp class="title_top" id="new_top"\u003eTái đề xuất xây dựng đường sắt cao tốc Bắc - Nam\u003c/p\u003e',
    Marks: 1,
    AnswerId: 106279,
    Answers: [
      {
        Id: 106278,
        Text: 'Báo lỗi vì viết lệnh sai',
      },
      {
        Id: 106279,
        Text: 'Nội dung trong thẻ p màu xanh lá cây',
      },
      {
        Id: 106280,
        Text: 'Nội dung trong thẻ p màu đen mặc định',
      },
      {
        Id: 106281,
        Text: 'Nội dung trong thẻ p màu đỏ',
      },
    ],
  },
  {
    Id: 25674,
    Text: 'Cách tạo style có tính kế thừa nào có thể sử dụng lại ở nhiều trang web khác?',
    Marks: 1,
    AnswerId: 106284,
    Answers: [
      {
        Id: 106282,
        Text: 'inline style',
      },
      {
        Id: 106283,
        Text: 'Các phương án đều đúng',
      },
      {
        Id: 106284,
        Text: 'linked style',
      },
      {
        Id: 106285,
        Text: 'embedded style',
      },
    ],
  },
  {
    Id: 25675,
    Text: 'Để biểu diễn giá trị số trong css, giá trị nào dưới đây là giá trị tuyệt đối?a. cmb. emc. pxd. %',
    Marks: 1,
    AnswerId: 106288,
    Answers: [
      {
        Id: 106286,
        Text: 'c, d',
      },
      {
        Id: 106287,
        Text: 'b, c',
      },
      {
        Id: 106288,
        Text: 'a, c',
      },
      {
        Id: 106289,
        Text: 'a, b',
      },
    ],
  },
  {
    Id: 25676,
    Text: 'Với lệnh CSS là .title em:last-child {color:red}áp dụng cho đoạn mã XHTML dưới đây, style sẽ hiển thị như thế nào? \u003cp class="title"\u003e\u003cem\u003eCông nghệ\u003c/em\u003e giúp \u003cem\u003enhìn xuyên qua\u003c/em\u003e những \u003cem\u003exe \u003c/em\u003eđi trước\u003c/p\u003e',
    Marks: 1,
    AnswerId: 106293,
    Answers: [
      {
        Id: 106290,
        Text: 'Tất cả nội dung nằm trong thẻ em đều màu đỏ',
      },
      {
        Id: 106291,
        Text: 'Nội dung "Công nghệ" nằm trong thẻ em màu đỏ',
      },
      {
        Id: 106292,
        Text: 'Tất cả nội dung trong thẻ p đều màu đỏ',
      },
      {
        Id: 106293,
        Text: 'Nội dung "xe" nằm trong thẻ em màu đỏ',
      },
    ],
  },
  {
    Id: 25677,
    Text: 'Đối với những thẻ XHTML cùng áp dụng selector ID và selector Class thì selector ID sẽ ghi đè lên selector Class.',
    Marks: 1,
    AnswerId: 106294,
    Answers: [
      {
        Id: 106294,
        Text: 'Đúng',
      },
      {
        Id: 106295,
        Text: 'Sai',
      },
    ],
  },
  {
    Id: 25678,
    Text: 'Với lệnh CSS là p span{color:blue;}áp dụng cho đoạn mã XHTML dưới đây, style sẽ hiển thị: \u003cdiv class="new"\u003e      \u003cp class="title"\u003eHàng trăm người chặn \u003cspan\u003e quốc lộ 1A\u003c/span\u003e\u003c/p\u003e      \u003cp class="content"\u003eThấy \u003cspan\u003etàu quốc tế \u003c/span\u003e đến, doanh nghiệp lạ',
    Marks: 1,
    AnswerId: 106298,
    Answers: [
      {
        Id: 106296,
        Text: 'Đoạn văn bản "quốc lộ 1A" có màu xanh nước biển',
      },
      {
        Id: 106297,
        Text: 'Đoạn văn bản "tàu quốc tế" có màu xanh nước biển',
      },
      {
        Id: 106298,
        Text: 'Tất cả văn bản nằm trong thẻ span có màu xanh nước biển',
      },
      {
        Id: 106299,
        Text: 'Tất cả văn bản đều có màu xanh nước biển',
      },
    ],
  },
  {
    Id: 25679,
    Text: 'Khi viết CSS theo dạng Embedded style cần thiết phải khai báo thêm câu lệnh gì?',
    Marks: 1,
    AnswerId: 106302,
    Answers: [
      {
        Id: 106300,
        Text: '\u003cstyle type="text/javascript"\u003e\u003c/style\u003e',
      },
      {
        Id: 106301,
        Text: '\u003clink href="#" rel="stylesheet" type="text/css" /\u003e',
      },
      {
        Id: 106302,
        Text: '\u003cstyle  type="text/css"\u003e \u003c/style\u003e',
      },
      {
        Id: 106303,
        Text: 'Không cần khai báo thêm',
      },
    ],
  },
  {
    Id: 25680,
    Text: 'Giá trị của thuộc tính text-align bao gồm?',
    Marks: 1,
    AnswerId: 106305,
    Answers: [
      {
        Id: 106304,
        Text: 'left, right, center',
      },
      {
        Id: 106305,
        Text: 'left, right, center, justify',
      },
      {
        Id: 106306,
        Text: 'left, right, justify',
      },
      {
        Id: 106307,
        Text: 'left, right',
      },
    ],
  },
  {
    Id: 25681,
    Text: 'Để đoạn văn bản trong thẻ p thụt vào đầu dòng 0.8em và độ cao của dòng là 21px thì lệnh CSS nào được áp dụng cho đoạn mã XHTML sau: \u003cp class="NoiDung"\u003eNeymar làm lu mờ Gareth Bale trong trận đấu ở La Liga hôm 26/10 là một nội dung trong phần biếm họa bóng',
    Marks: 1,
    AnswerId: 106310,
    Answers: [
      {
        Id: 106308,
        Text: '.NoiDung{text-align:0.8em; line-height:21px;}',
      },
      {
        Id: 106309,
        Text: '.NoiDung{text-indent:0.8em; word-spacing:21px;}',
      },
      {
        Id: 106310,
        Text: '.NoiDung{text-indent:0.8em; line-height:21px;}',
      },
      {
        Id: 106311,
        Text: '.NoiDung{text-align:0.8em; word-spacing:21px;}',
      },
    ],
  },
  {
    Id: 25682,
    Text: 'Muốn nội dung thẻ div trong đoạn mã XHTML dưới đây có khoảng cách giữa các từ giãn cách nhau 0.2em, dùng lệnh CSS nào? \u003cdiv class="cate"\u003e Thể thao trong nước\u003c/div\u003e',
    Marks: 1,
    AnswerId: 106315,
    Answers: [
      {
        Id: 106312,
        Text: '.cate{text-indent:.2em}',
      },
      {
        Id: 106313,
        Text: '.cate{line-height:.2em}',
      },
      {
        Id: 106314,
        Text: '.cate{letter-spacing:.2em}',
      },
      {
        Id: 106315,
        Text: '.cate{word-spacing:.2em}',
      },
    ],
  },
  {
    Id: 25683,
    Text: 'Thuộc tính nào của font thiết lập font được in nghiêng?',
    Marks: 1,
    AnswerId: 106318,
    Answers: [
      {
        Id: 106316,
        Text: 'font-variant',
      },
      {
        Id: 106317,
        Text: 'text-transform',
      },
      {
        Id: 106318,
        Text: 'font-style',
      },
      {
        Id: 106319,
        Text: 'text-align',
      },
    ],
  },
  {
    Id: 25684,
    Text: 'Để khi di chuột qua link có màu xanh lá cây và có gạch chân thì lệnh CSS nào được áp dụng cho đoạn mã XHTML sau: \u003cp class="news"\u003e\u003ca href="#"\u003eGareth Bale đánh giày cho Neymar ở El Clasico\u003c/a\u003e\u003c/p\u003e',
    Marks: 1,
    AnswerId: 106320,
    Answers: [
      {
        Id: 106320,
        Text: '.news a:hover{color:green; text-decoration:underline}',
      },
      {
        Id: 106321,
        Text: '.news a:hover{color:green; text-decoration:none}',
      },
      {
        Id: 106322,
        Text: '.news a:active{color:green; text-decoration:none}',
      },
      {
        Id: 106323,
        Text: '.news a:active{color:green; text-decoration:underline}',
      },
    ],
  },
  {
    Id: 25685,
    Text: 'Thuộc tính text-transform bao gồm bao nhiêu giá trị?',
    Marks: 1,
    AnswerId: 106324,
    Answers: [
      {
        Id: 106324,
        Text: '5 giá trị: capitalize, inherit, lowercase, none, uppercase',
      },
      {
        Id: 106325,
        Text: '3 giá trị: capitalize, lowercase, uppercase',
      },
      {
        Id: 106326,
        Text: '4 giá trị: capitalize, uppercase, lowercase, none',
      },
      {
        Id: 106327,
        Text: '6 giá trị: capitalize, inherit, lowercase, none, uppercase, small-caps',
      },
    ],
  },
  {
    Id: 25686,
    Text: 'Muốn loại bỏ gạch chân cho văn bản trong đoạn mã XHTML dưới đây, lệnh CSS nào đúng? \u003cdiv class="cate"\u003e\u003ca href="#"\u003e Thể thao trong nước\u003c/a\u003e\u003c/div\u003e',
    Marks: 1,
    AnswerId: 106330,
    Answers: [
      {
        Id: 106328,
        Text: '.cate a{text-decoration:overline;}',
      },
      {
        Id: 106329,
        Text: '.cate a{text-decoration:line-through;}',
      },
      {
        Id: 106330,
        Text: '.cate a{text-decoration:none;}',
      },
      {
        Id: 106331,
        Text: '.cate a{text-decoration:underline;}',
      },
    ],
  },
  {
    Id: 25687,
    Text: 'Giá trị nào dưới đây không phải là giá trị của thuộc tính text-decoration?',
    Marks: 1,
    AnswerId: 106332,
    Answers: [
      {
        Id: 106332,
        Text: 'capitalize',
      },
      {
        Id: 106333,
        Text: 'line-through',
      },
      {
        Id: 106334,
        Text: 'underline',
      },
      {
        Id: 106335,
        Text: 'blink',
      },
    ],
  },
  {
    Id: 25688,
    Text: 'Trong thuộc tính font-weight, có thể định nghĩa được độ dày (độ đậm) của font chữ lên giá trị tối đa là bao nhiêu?',
    Marks: 1,
    AnswerId: 106339,
    Answers: [
      {
        Id: 106336,
        Text: '100',
      },
      {
        Id: 106337,
        Text: '500',
      },
      {
        Id: 106338,
        Text: '1000',
      },
      {
        Id: 106339,
        Text: '900',
      },
    ],
  },
  {
    Id: 25689,
    Text: 'Độ ưu tiên khi khai báo font trong CSS(font-family:Georgia, "Times New Roman", Times, serif ) lần lượt là:a.Times New Romanb. Timesc. Georgiad. Font mặc định thuộc họ serif',
    Marks: 1,
    AnswerId: 106342,
    Answers: [
      {
        Id: 106340,
        Text: 'd, b, a, c',
      },
      {
        Id: 106341,
        Text: 'b, a, c, d',
      },
      {
        Id: 106342,
        Text: 'c, a, b, d',
      },
      {
        Id: 106343,
        Text: 'a, b, c, d',
      },
    ],
  },
  {
    Id: 25690,
    Text: 'Để thiết lập khoảng cách giữa hai hộp (box) có thể sử dụng thuộc tính nào?',
    Marks: 1,
    AnswerId: 106346,
    Answers: [
      {
        Id: 106344,
        Text: 'height',
      },
      {
        Id: 106345,
        Text: 'padding',
      },
      {
        Id: 106346,
        Text: 'margin',
      },
      {
        Id: 106347,
        Text: 'width',
      },
    ],
  },
  {
    Id: 25691,
    Text: 'Giá trị nào dưới đây không phải là giá trị của thuộc tính position?',
    Marks: 1,
    AnswerId: 106348,
    Answers: [
      {
        Id: 106348,
        Text: 'inline',
      },
      {
        Id: 106349,
        Text: 'absolute',
      },
      {
        Id: 106350,
        Text: 'static',
      },
      {
        Id: 106351,
        Text: 'fixed',
      },
    ],
  },
  {
    Id: 25692,
    Text: 'Người dùng có thể tổ chức bố cục trang web bằng việc kết hợp kỹ thuật nào?',
    Marks: 1,
    AnswerId: 106355,
    Answers: [
      {
        Id: 106352,
        Text: 'float và padding',
      },
      {
        Id: 106353,
        Text: 'float và display',
      },
      {
        Id: 106354,
        Text: 'float và margin',
      },
      {
        Id: 106355,
        Text: 'float và clear',
      },
    ],
  },
  {
    Id: 25693,
    Text: 'Lệnh CSS nào đúng khi sử dụng thuộc tính position cho mã XHTML dưới đây sẽ không di chuyển khi trang được cuộn? \u003cp class="title"\u003eTin Xã Hội \u003c/p\u003e',
    Marks: 1,
    AnswerId: 106356,
    Answers: [
      {
        Id: 106356,
        Text: '.title{width:200px; height:25px;border:solid 1px red; position:fixed; top:200px; left:200px;}',
      },
      {
        Id: 106357,
        Text: '.title{width:200px; height:25px;border:solid 1px red;position:absolute; top:200px; left:200px;}',
      },
      {
        Id: 106358,
        Text: '.title{width:200px; height:25px;border:solid 1px red; position:relative; top:200px; left:200px;}',
      },
      {
        Id: 106359,
        Text: '.title{width:200px; height:25px;border:solid 1px red; position:inherit; top:200px; left:200px;}',
      },
    ],
  },
  {
    Id: 25694,
    Text: 'Giá trị nào dưới đây không phải là giá trị của thuộc tính float?',
    Marks: 1,
    AnswerId: 106363,
    Answers: [
      {
        Id: 106360,
        Text: 'inherit',
      },
      {
        Id: 106361,
        Text: 'right',
      },
      {
        Id: 106362,
        Text: 'left',
      },
      {
        Id: 106363,
        Text: 'both',
      },
    ],
  },
  {
    Id: 25695,
    Text: 'Khoảng cách giữa nội dung của hộp và đường viền là mặc định, không thể thay đổi.',
    Marks: 1,
    AnswerId: 106364,
    Answers: [
      {
        Id: 106364,
        Text: 'Sai',
      },
      {
        Id: 106365,
        Text: 'Đúng',
      },
    ],
  },
  {
    Id: 25696,
    Text: 'Khi sử dụng thuộc tính position thì giá trị nào của thuộc tính không cần thiết phải sử dụng các yếu tố căn chỉnh tọa độ: top, left, right, bottom?',
    Marks: 1,
    AnswerId: 106368,
    Answers: [
      {
        Id: 106366,
        Text: 'relative',
      },
      {
        Id: 106367,
        Text: 'fixed',
      },
      {
        Id: 106368,
        Text: 'static',
      },
      {
        Id: 106369,
        Text: 'absolute',
      },
    ],
  },
  {
    Id: 25697,
    Text: 'Với lệnh CSS: #box {width:200px; height:100px; background-color:#09F} .Tin{width:100px; height:100px; background-color:#930;} Áp dụng cho đoạn mã XHTML dưới đây: \u003cdiv id="box"\u003e     \u003cp class="Tin"\u003eGareth Bale đánh giày cho Neymar ở El Clasico\u003c/p\u003e \u003c/div\u003e Th',
    Marks: 1,
    AnswerId: 106372,
    Answers: [
      {
        Id: 106370,
        Text: 'Nội dung dòng đầu tiên trong thẻ p có kích thước là 30px và màu là xanh lá cây',
      },
      {
        Id: 106371,
        Text: 'Khi di chuột qua nội dung trong thẻ p có kích thước là 30px và màu là xanh lá cây',
      },
      {
        Id: 106372,
        Text: 'Nội dung kí tư đầu tiên trong thẻ p có kích thước là 30px và màu là xanh lá cây',
      },
      {
        Id: 106373,
        Text: 'Nội dung trong thẻ p có kích thước là 30px và màu là xanh lá cây',
      },
    ],
  },
  {
    Id: 25698,
    Text: 'Thuộc tính nào sau đây không phải là thuộc tính tạo khoảng đệm cho hộp với css?',
    Marks: 1,
    AnswerId: 106377,
    Answers: [
      {
        Id: 106374,
        Text: 'padding-left',
      },
      {
        Id: 106375,
        Text: 'padding-bottom',
      },
      {
        Id: 106376,
        Text: 'padding-top',
      },
      {
        Id: 106377,
        Text: 'padding-down',
      },
    ],
  },
  {
    Id: 25699,
    Text: 'Có những cách nào để khai báo giá trị màu sắc cho thuộc tính border-color?',
    Marks: 1,
    AnswerId: 106379,
    Answers: [
      {
        Id: 106378,
        Text: 'Có 2 cách: hệ Hexa và từ khóa',
      },
      {
        Id: 106379,
        Text: 'Có 3 cách: giá trị RGB, hệ Hexa và từ khóa',
      },
      {
        Id: 106380,
        Text: 'Có 3 cách: giá trị RGB, hệ Hexa',
      },
      {
        Id: 106381,
        Text: 'Có 3 cách: pixel, hệ Hexa và từ khóa',
      },
    ],
  },
  {
    Id: 25700,
    Text: 'Sử dụng tính kế thừa của CSS sẽ thuận lợi về mặt nào?',
    Marks: 1,
    AnswerId: 106383,
    Answers: [
      {
        Id: 106382,
        Text: 'Bố cục',
      },
      {
        Id: 106383,
        Text: 'Dung lượng và tốc độ load',
      },
      {
        Id: 106384,
        Text: 'Thẩm mĩ của trang web',
      },
      {
        Id: 106385,
        Text: 'Hình ảnh',
      },
    ],
  },
  {
    Id: 25701,
    Text: 'Khi thiết kế bố cục (layout) cho trang web điều gì là quan trọng nhất?',
    Marks: 1,
    AnswerId: 106388,
    Answers: [
      {
        Id: 106386,
        Text: 'Màu nền trang Web',
      },
      {
        Id: 106387,
        Text: 'Đường viền hộp CSS',
      },
      {
        Id: 106388,
        Text: 'Chiều ngang',
      },
      {
        Id: 106389,
        Text: 'Chiều cao',
      },
    ],
  },
  {
    Id: 25702,
    Text: 'Đối với IE6, cần khai báo thêm thuộc tính CSS nào cho thẻ body để căn giữa bố cục trên cửa sổ trình duyệt ?',
    Marks: 1,
    AnswerId: 106390,
    Answers: [
      {
        Id: 106390,
        Text: 'text-align: center',
      },
      {
        Id: 106391,
        Text: 'text-align: left',
      },
      {
        Id: 106392,
        Text: 'margin: auto',
      },
      {
        Id: 106393,
        Text: 'padding: auto',
      },
    ],
  },
  {
    Id: 25703,
    Text: 'Để tạo thanh cuộn cho box khi nội dung tràn ra, người dùng chọn giá trị nào cho thuộc tính overflow?',
    Marks: 1,
    AnswerId: 106396,
    Answers: [
      {
        Id: 106394,
        Text: 'inherit',
      },
      {
        Id: 106395,
        Text: 'visible',
      },
      {
        Id: 106396,
        Text: 'scroll',
      },
      {
        Id: 106397,
        Text: 'hidden',
      },
    ],
  },
  {
    Id: 25704,
    Text: 'Có thể thiết kế bố cục (layout) cho trang web bằng cách nào?a. Bố cục nổi (float) b. Bố cục AP divc. Định vị tuyệt đốid. Bố cục Insert Div Tag',
    Marks: 1,
    AnswerId: 106401,
    Answers: [
      {
        Id: 106398,
        Text: 'a, b',
      },
      {
        Id: 106399,
        Text: 'c, d',
      },
      {
        Id: 106400,
        Text: 'a, b, c, d',
      },
      {
        Id: 106401,
        Text: 'a, c',
      },
    ],
  },
  {
    Id: 25705,
    Text: 'Thiết lập thuộc tính CSS nào làm cho hình nền của cột Faux được lặp lại khi chiều dài trang tăng lên ?',
    Marks: 1,
    AnswerId: 106403,
    Answers: [
      {
        Id: 106402,
        Text: 'repeat-x',
      },
      {
        Id: 106403,
        Text: 'repeat-y',
      },
      {
        Id: 106404,
        Text: 'norepeat',
      },
      {
        Id: 106405,
        Text: 'repeat',
      },
    ],
  },
  {
    Id: 25706,
    Text: 'Để chuyển từ bố cục 2 cột với chiều rộng cố định sang bố cục 2 cột linh hoạt không khai báo thuộc tính nào?',
    Marks: 1,
    AnswerId: 106407,
    Answers: [
      {
        Id: 106406,
        Text: 'height',
      },
      {
        Id: 106407,
        Text: 'width',
      },
      {
        Id: 106408,
        Text: 'float',
      },
      {
        Id: 106409,
        Text: 'clear',
      },
    ],
  },
  {
    Id: 25707,
    Text: 'Với lệnh CSS: #content{width:600px; height:200px; background-color:#990} #left{width:200px; height:200px; background-color:#930; margin:10px;float:left} Áp dụng cho đoạn mã XHTML dưới đây: Nên đặt giá trị width của #right bằng bao nhiêu để bố cục trên vừa',
    Marks: 1,
    AnswerId: 106411,
    Answers: [
      {
        Id: 106410,
        Text: 'width:400px;',
      },
      {
        Id: 106411,
        Text: 'Với lệnh CSS: #content{width:600px; height:200px; background-color:#990} #left{width:200px; height:200px; background-color:#930; margin:10px;float:left} Áp dụng cho đoạn mã XHTML dưới đây: \u003cdiv id="content"\u003e      \u003cdiv id="left"\u003e\u003c/div\u003e      \u003cdiv id="right"',
      },
      {
        Id: 106412,
        Text: 'width:390px;',
      },
      {
        Id: 106413,
        Text: 'width:410px;',
      },
    ],
  },
  {
    Id: 25708,
    Text: 'Để điều chỉnh có ảo giác rằng tất cả các cột có cùng chiều cao khi bố cục chia làm nhiều cột, người dùng sử dụng phương pháp nào?a. Đặt kiểu cột Fauxb. Lập trình mở rộng divc. Sử dụng thuộc tính cleard. Sử dụng thuộc tính overflow',
    Marks: 1,
    AnswerId: 106416,
    Answers: [
      {
        Id: 106414,
        Text: 'a, b, c, d',
      },
      {
        Id: 106415,
        Text: 'a, c',
      },
      {
        Id: 106416,
        Text: 'a, b',
      },
      {
        Id: 106417,
        Text: 'a, b, c',
      },
    ],
  },
  {
    Id: 25709,
    Text: 'Với lệnh CSS: #content { width:840px; margin-left:auto; margin-right:auto; position:relative; background-color:#0FF;}  #left { position:absolute; width:240px; left:0px;}  #right { position:absolute; width: 600px; padding:0;} Áp dụng cho đoạn mã XHTML dưới',
    Marks: 1,
    AnswerId: 106418,
    Answers: [
      {
        Id: 106418,
        Text: 'left: 0px;',
      },
      {
        Id: 106419,
        Text: 'left:840px;',
      },
      {
        Id: 106420,
        Text: 'left:240px;',
      },
      {
        Id: 106421,
        Text: 'left:600px;',
      },
    ],
  },
  {
    Id: 25710,
    Text: 'Bố cục nào có khả năng mở rộng nội dung, kích thước chữ?',
    Marks: 1,
    AnswerId: 106422,
    Answers: [
      {
        Id: 106422,
        Text: 'Elastic',
      },
      {
        Id: 106423,
        Text: 'Relative',
      },
      {
        Id: 106424,
        Text: 'Fix',
      },
      {
        Id: 106425,
        Text: 'Absolute',
      },
    ],
  },
  {
    Id: 25711,
    Text: 'Trong table, thành phần \u003ctd\u003e nằm trong thành phần nào sau đây?',
    Marks: 1,
    AnswerId: 106426,
    Answers: [
      {
        Id: 106426,
        Text: '\u003ctr\u003e',
      },
      {
        Id: 106427,
        Text: '\u003clabel\u003e',
      },
      {
        Id: 106428,
        Text: '\u003cdt\u003e',
      },
      {
        Id: 106429,
        Text: '\u003cshow\u003e',
      },
    ],
  },
  {
    Id: 25712,
    Text: 'Bố cục Scaled xây dựng dựa trên công nghệ CSS3, đúng hay sai?',
    Marks: 1,
    AnswerId: 106430,
    Answers: [
      {
        Id: 106430,
        Text: 'Đúng',
      },
      {
        Id: 106431,
        Text: 'Sai',
      },
    ],
  },
  {
    Id: 25713,
    Text: 'Bố cục web dạng Elastic không sử dụng đơn vị em, đúng hay sai?',
    Marks: 1,
    AnswerId: 106433,
    Answers: [
      {
        Id: 106432,
        Text: 'Đúng',
      },
      {
        Id: 106433,
        Text: 'Sai',
      },
    ],
  },
  {
    Id: 25714,
    Text: 'Bố cục web nào thường được sử dụng trên trình duyệt của thiết bị di động?',
    Marks: 1,
    AnswerId: 106435,
    Answers: [
      {
        Id: 106434,
        Text: 'Relative',
      },
      {
        Id: 106435,
        Text: 'Scaled',
      },
      {
        Id: 106436,
        Text: 'Elastic',
      },
      {
        Id: 106437,
        Text: 'Absolute',
      },
    ],
  },
  {
    Id: 25715,
    Text: 'Thành phần table còn được sử dụng để làm gì?',
    Marks: 1,
    AnswerId: 106441,
    Answers: [
      {
        Id: 106438,
        Text: 'Trình bày dữ liệu dạng báo',
      },
      {
        Id: 106439,
        Text: 'Trình bày dữ liệu dạng hàng',
      },
      {
        Id: 106440,
        Text: 'Trình bày dữ liệu dạng RSS',
      },
      {
        Id: 106441,
        Text: 'Trình bày dữ liệu dạng bảng',
      },
    ],
  },
  {
    Id: 25716,
    Text: 'Thành phần nào được sử dụng trong thiết kế website?',
    Marks: 1,
    AnswerId: 106444,
    Answers: [
      {
        Id: 106442,
        Text: 'Content',
      },
      {
        Id: 106443,
        Text: 'Footer',
      },
      {
        Id: 106444,
        Text: 'Table',
      },
      {
        Id: 106445,
        Text: 'Show',
      },
    ],
  },
  {
    Id: 25717,
    Text: 'Bố cục nào sử dụng đơn vị đo lường dạng tuyệt đối?',
    Marks: 1,
    AnswerId: 106446,
    Answers: [
      {
        Id: 106446,
        Text: 'Absolute',
      },
      {
        Id: 106447,
        Text: 'Relative',
      },
      {
        Id: 106448,
        Text: 'Fix',
      },
      {
        Id: 106449,
        Text: 'Elastic',
      },
    ],
  },
  {
    Id: 25718,
    Text: 'Bố cục nào được xây dựng với đơn vị đo lường tính theo điểm ảnh (pixel)?',
    Marks: 1,
    AnswerId: 106450,
    Answers: [
      {
        Id: 106450,
        Text: 'Fixed',
      },
      {
        Id: 106451,
        Text: 'Relative',
      },
      {
        Id: 106452,
        Text: 'Absolute',
      },
      {
        Id: 106453,
        Text: 'Scaled',
      },
    ],
  },
  {
    Id: 25719,
    Text: 'Khi sử dụng min-width, max-width, bắt buộc phải sử dụng max-height. Đúng hay sai?',
    Marks: 1,
    AnswerId: 106455,
    Answers: [
      {
        Id: 106454,
        Text: 'Đúng',
      },
      {
        Id: 106455,
        Text: 'Sai',
      },
    ],
  },
  {
    Id: 25720,
    Text: 'Với đoạn mã XHTML: \u003cul\u003e     \u003cli\u003e Danh sách 1 \u003c/li\u003e     \u003cli\u003e Danh sách 2 \u003c/li\u003e     \u003cli\u003e Danh sách 3 \u003c/li\u003e \u003c/ul\u003e Để tạo đường kẻ dưới nét đứt 1px màu đỏ cho mỗi dòng của danh sách người dùng sử dụng lệnh nào?',
    Marks: 1,
    AnswerId: 106458,
    Answers: [
      {
        Id: 106456,
        Text: 'ul{border-bottom:1px dotted red}',
      },
      {
        Id: 106457,
        Text: 'ul li {border-bottom:1px solid red}',
      },
      {
        Id: 106458,
        Text: 'ul li {border-bottom:1px dotted red}',
      },
      {
        Id: 106459,
        Text: 'ul li {border-bottom:1px solid red}',
      },
    ],
  },
  {
    Id: 25721,
    Text: 'Với đoạn mã XHTML: \u003cul\u003e     \u003cli\u003e Danh sách 1 \u003c/li\u003e     \u003cli\u003e Danh sách 2 \u003c/li\u003e     \u003cli\u003e Danh sách 3 \u003c/li\u003e \u003c/ul\u003e Để xóa bỏ dấu tròn bullet của danh sách người dùng sử dụng lệnh nào?',
    Marks: 1,
    AnswerId: 106463,
    Answers: [
      {
        Id: 106460,
        Text: 'ul li {list-style-position:none}',
      },
      {
        Id: 106461,
        Text: 'ul li {list-style-image:none}',
      },
      {
        Id: 106462,
        Text: 'ul li {list-type:none}',
      },
      {
        Id: 106463,
        Text: 'ul li {list-style-type:none}',
      },
    ],
  },
  {
    Id: 25722,
    Text: 'Có thể đặt thuộc tính id hoặc class vào trong các thẻ của bảng: table, tr,.. và áp dụng luật CSS như với các thẻ XHTML thông thường hay không?',
    Marks: 1,
    AnswerId: 106464,
    Answers: [
      {
        Id: 106464,
        Text: 'Có',
      },
      {
        Id: 106465,
        Text: 'Không',
      },
    ],
  },
  {
    Id: 25723,
    Text: 'Muốn khi click chuột để nhập liệu vào textbox, màu nền textbox chuyển sang màu xanh thì khai báo CSS như thế nào? \u003cinput class="NhapLieu" type="text" name="DiaChi"  /\u003e',
    Marks: 1,
    AnswerId: 106468,
    Answers: [
      {
        Id: 106466,
        Text: 'input.NhapLieu{background-color:green}',
      },
      {
        Id: 106467,
        Text: '.NhapLieu{background-color:green}',
      },
      {
        Id: 106468,
        Text: 'input:focus{background-color:green}',
      },
      {
        Id: 106469,
        Text: 'input{background-color:green}',
      },
    ],
  },
  {
    Id: 25724,
    Text: 'Với đoạn mã XHTML: \u003cdiv id="menu"\u003e     \u003cul\u003e         \u003cli\u003e\u003ca href="#"\u003e Trang chủ\u003c/a\u003e\u003c/li\u003e         \u003cli\u003e\u003ca href="#"\u003e Sản phẩm\u003c/a\u003e\u003c/li\u003e         \u003cli\u003e\u003ca href="#"\u003e Liên hệ\u003c/a\u003e\u003c/li\u003e     \u003c/ul\u003e \u003c/div\u003e và lệnh CSS: #menu ul li{float:left;padding:0 20px;} Muốn mỗi thà',
    Marks: 1,
    AnswerId: 106472,
    Answers: [
      {
        Id: 106470,
        Text: 'Không làm được',
      },
      {
        Id: 106471,
        Text: 'border:1px solid green',
      },
      {
        Id: 106472,
        Text: 'border-right:1px solid green',
      },
      {
        Id: 106473,
        Text: 'border-left:1px solid green',
      },
    ],
  },
  {
    Id: 25725,
    Text: 'Các thẻ nào dưới đây không phải là thẻ để tạo bảng',
    Marks: 1,
    AnswerId: 106474,
    Answers: [
      {
        Id: 106474,
        Text: 'tb',
      },
      {
        Id: 106475,
        Text: 'table',
      },
      {
        Id: 106476,
        Text: 'th',
      },
      {
        Id: 106477,
        Text: 'tr, td',
      },
    ],
  },
  {
    Id: 25726,
    Text: 'Muốn khoảng cách giữa các ô và khoảng đệm của mỗi ô trong bảng bằng 0 thì người dùng thêm thuộc tính nào vào trong thẻ table?',
    Marks: 1,
    AnswerId: 106481,
    Answers: [
      {
        Id: 106478,
        Text: 'cellspacing="0" colspan="0"',
      },
      {
        Id: 106479,
        Text: 'cols="0" cellspacing="0"',
      },
      {
        Id: 106480,
        Text: 'cellpadding="0" cols="0"',
      },
      {
        Id: 106481,
        Text: 'cellpadding="0" cellspacing="0"',
      },
    ],
  },
  {
    Id: 25727,
    Text: 'Những thẻ nào của bảng mà CSS có thể tác động lên:a. tableb. tr, tdc. thd. border',
    Marks: 1,
    AnswerId: 106483,
    Answers: [
      {
        Id: 106482,
        Text: 'a, b, c, d',
      },
      {
        Id: 106483,
        Text: 'a, b, c',
      },
      {
        Id: 106484,
        Text: 'a, c, d',
      },
      {
        Id: 106485,
        Text: 'b, c, d',
      },
    ],
  },
  {
    Id: 25728,
    Text: 'Muốn tạo ra một ô textbox mà người dùng có thể nhập liệu vào thì khai báo như thế nào?',
    Marks: 1,
    AnswerId: 106488,
    Answers: [
      {
        Id: 106486,
        Text: '\u003cinput type="textarea" name="user" /\u003e',
      },
      {
        Id: 106487,
        Text: '\u003cinput type="textfield" name="user" /\u003e',
      },
      {
        Id: 106488,
        Text: '\u003cinput type="text" name="user" /\u003e',
      },
      {
        Id: 106489,
        Text: '\u003cinput type="textbox" name="user" /\u003e',
      },
    ],
  },
  {
    Id: 25729,
    Text: 'Thành phần giao diện nào giúp gửi dữ liệu người dùng từ trình duyệt đến máy chủ thông qua Internet',
    Marks: 1,
    AnswerId: 106492,
    Answers: [
      {
        Id: 106490,
        Text: 'Menu',
      },
      {
        Id: 106491,
        Text: 'Danh sách (List)',
      },
      {
        Id: 106492,
        Text: 'Form',
      },
      {
        Id: 106493,
        Text: 'Bảng (Table)',
      },
    ],
  },
  {
    Id: 25730,
    Text: 'Giả sử có mã XHTML:  \u003cinput class="NhapLieu" type="text" name="User"   /\u003e Muốn để ô textbox có dòng chữ "Điền tên đăng nhập" mặc định, khi click chuột vào dòng chữ biến mất thì người dùng thêm thuộc tính nào vào thẻ input?',
    Marks: 1,
    AnswerId: 106495,
    Answers: [
      {
        Id: 106494,
        Text: 'pattern="Điền tên đăng nhập"',
      },
      {
        Id: 106495,
        Text: 'placeholder="Điền tên đăng nhập"',
      },
      {
        Id: 106496,
        Text: 'value="Điền tên đăng nhập"',
      },
      {
        Id: 106497,
        Text: 'title="Điền tên đăng nhập"',
      },
    ],
  },
  {
    Id: 25731,
    Text: 'Muốn tạo bo góc của box trên trang web, người dùng làm cách nào?a. Sử dụng JavaSscriptb. Sử dụng Ajaxc.Sử dụng HTML5d. Sử dụng tính năng mới của CSS3',
    Marks: 1,
    AnswerId: 106501,
    Answers: [
      {
        Id: 106498,
        Text: 'a, b',
      },
      {
        Id: 106499,
        Text: 'a, c',
      },
      {
        Id: 106500,
        Text: 'b, d',
      },
      {
        Id: 106501,
        Text: 'a, d',
      },
    ],
  },
  {
    Id: 25732,
    Text: 'Để tạo ra menu, người dùng thường sử dụng thẻ XHTML nào?',
    Marks: 1,
    AnswerId: 106503,
    Answers: [
      {
        Id: 106502,
        Text: 'p, br',
      },
      {
        Id: 106503,
        Text: 'ul, li',
      },
      {
        Id: 106504,
        Text: 'select, option',
      },
      {
        Id: 106505,
        Text: 'form, input',
      },
    ],
  },
  {
    Id: 25733,
    Text: 'ISP viết tắt của từ nào?',
    Marks: 1,
    AnswerId: 106506,
    Answers: [
      {
        Id: 106506,
        Text: 'Internet service provider',
      },
      {
        Id: 106507,
        Text: 'Internet server product',
      },
      {
        Id: 106508,
        Text: 'Internet server provider',
      },
      {
        Id: 106509,
        Text: 'Integrate service provider',
      },
    ],
  },
  {
    Id: 25734,
    Text: 'Trong file XHTML chỉ có thể gọi tối đa một file CSS?',
    Marks: 1,
    AnswerId: 106510,
    Answers: [
      {
        Id: 106510,
        Text: 'Sai',
      },
      {
        Id: 106511,
        Text: 'Đúng',
      },
    ],
  },
  {
    Id: 25735,
    Text: 'Để nút Submit sẽ sử dụng ảnh thay vì sử dụng nút mặc định thông thường do hệ thống tạo ra, người dùng sử dụng câu lệnh nào sau đây ?',
    Marks: 1,
    AnswerId: 106514,
    Answers: [
      {
        Id: 106512,
        Text: '\u003cinput name="image" type="submit" /\u003e',
      },
      {
        Id: 106513,
        Text: '\u003cinput name="image" type="button" /\u003e',
      },
      {
        Id: 106514,
        Text: '\u003cinput type="image" src="url" /\u003e',
      },
      {
        Id: 106515,
        Text: '\u003cinput name="image" type="file" /\u003e',
      },
    ],
  },
  {
    Id: 25736,
    Text: 'Để mỗi từ trong 1 dòng đều viết hoa ở đầu từ, người dùng sử dụng thuộc tính CSS nào sau đây?',
    Marks: 1,
    AnswerId: 106518,
    Answers: [
      {
        Id: 106516,
        Text: 'text-transform:uppercase',
      },
      {
        Id: 106517,
        Text: 'không thể làm với CSS',
      },
      {
        Id: 106518,
        Text: 'text-transform:capitalize',
      },
      {
        Id: 106519,
        Text: 'text-transform:lowercase',
      },
    ],
  },
  {
    Id: 25737,
    Text: 'Lệnh CSS ﬁlter:alpha(opacity=90); dùng để thực hiện trên trình duyệt nào?',
    Marks: 1,
    AnswerId: 106523,
    Answers: [
      {
        Id: 106520,
        Text: 'FireFox',
      },
      {
        Id: 106521,
        Text: 'Opera',
      },
      {
        Id: 106522,
        Text: 'Chrome',
      },
      {
        Id: 106523,
        Text: 'IE',
      },
    ],
  },
  {
    Id: 25738,
    Text: 'XHTML không hiển thị được hình nền. Đúng hay sai?',
    Marks: 1,
    AnswerId: 106525,
    Answers: [
      {
        Id: 106524,
        Text: 'Đúng',
      },
      {
        Id: 106525,
        Text: 'Sai',
      },
    ],
  },
  {
    Id: 25739,
    Text: 'Điều gì cần phải chú ý trong trường hợp cần gọi nhiều file CSS vào trong cùng 1 file XHTML ?',
    Marks: 1,
    AnswerId: 106527,
    Answers: [
      {
        Id: 106526,
        Text: 'Bố cục của CSS và XHTML',
      },
      {
        Id: 106527,
        Text: 'Sự ghi đè của các câu lệnh trong các file CSS',
      },
      {
        Id: 106528,
        Text: 'Không có điều gì cả',
      },
      {
        Id: 106529,
        Text: 'Bố cục của class và id',
      },
    ],
  },
]
export const MOWE = [
  {
    Id: 25342,
    Text: 'Phát triển web di động bắt buộc phải sử dụng IDE Dreamweaver, đúng hay sai?',
    Marks: 1,
    AnswerId: 105034,
    Answers: [
      {
        Id: 105033,
        Text: 'Đúng',
      },
      {
        Id: 105034,
        Text: 'Sai',
      },
    ],
  },
  {
    Id: 25343,
    Text: '"Máy chủ web sử dụng chỉ thị AddType trong cấu hình mod_mine để thêm kiểu MIME mới vào file cấu hình mime.types, httpd.conf hay .htaccess" là kiểu máy chủ nào sau đây?',
    Marks: 1,
    AnswerId: 105037,
    Answers: [
      {
        Id: 105035,
        Text: 'Máy chủ Nginx',
      },
      {
        Id: 105036,
        Text: 'Máy chủ Window',
      },
      {
        Id: 105037,
        Text: 'Máy chủ Apache',
      },
      {
        Id: 105038,
        Text: 'Máy chủ Microsoft IIS',
      },
    ],
  },
  {
    Id: 25344,
    Text: 'Những giải pháp dành cho web trên máy tính như: độ phân giải, kích thước hoàn toàn sử dụng được trên thiết bị di động. Đúng hay sai?',
    Marks: 1,
    AnswerId: 105039,
    Answers: [
      {
        Id: 105039,
        Text: 'Sai',
      },
      {
        Id: 105040,
        Text: 'Đúng',
      },
    ],
  },
  {
    Id: 25345,
    Text: 'Danh sách kiểu MIME được hỗ trợ thông qua các giá trị nằm trong trường nào của HTTP Request?',
    Marks: 1,
    AnswerId: 105043,
    Answers: [
      {
        Id: 105041,
        Text: 'Trường Degree',
      },
      {
        Id: 105042,
        Text: 'Trường Save',
      },
      {
        Id: 105043,
        Text: 'Trường Accept',
      },
      {
        Id: 105044,
        Text: 'Trường Agree',
      },
    ],
  },
  {
    Id: 25346,
    Text: 'Thành phần nào mô tả kiểu file tài liệu truyền cho máy khách trong hồi đáp HTTP (HTTP Respone)?',
    Marks: 1,
    AnswerId: 105046,
    Answers: [
      {
        Id: 105045,
        Text: 'MIMI',
      },
      {
        Id: 105046,
        Text: 'MIME',
      },
      {
        Id: 105047,
        Text: 'MIMO',
      },
      {
        Id: 105048,
        Text: 'MIMA',
      },
    ],
  },
  {
    Id: 25347,
    Text: 'Tiêu chuẩn W3C được áp dụng chặt chẽ và rộng rãi trên trình duyệt của thiết bị nào?',
    Marks: 1,
    AnswerId: 105049,
    Answers: [
      {
        Id: 105049,
        Text: 'Thiết bị máy tính',
      },
      {
        Id: 105050,
        Text: 'Thiết bị di động',
      },
    ],
  },
  {
    Id: 25348,
    Text: 'Các kiểu MIME phân biệt ngôn ngữ đánh dấu di động với HTML trên máy tính. ĐÚng hay sai?',
    Marks: 1,
    AnswerId: 105051,
    Answers: [
      {
        Id: 105051,
        Text: 'Đúng',
      },
      {
        Id: 105052,
        Text: 'Sai',
      },
    ],
  },
  {
    Id: 25349,
    Text: 'Kiểu MIME liên kết với mỗi tài liệu web lưu trữ trong trường nào trong hồi đáp HTTP?',
    Marks: 1,
    AnswerId: 105053,
    Answers: [
      {
        Id: 105053,
        Text: 'Content-Type',
      },
      {
        Id: 105054,
        Text: 'Degree',
      },
      {
        Id: 105055,
        Text: 'Save',
      },
      {
        Id: 105056,
        Text: 'Accept',
      },
    ],
  },
  {
    Id: 25350,
    Text: 'Đối với máy chủ Nginx, để cấu hình kiểu MIME phải làm như thế nào?',
    Marks: 1,
    AnswerId: 105057,
    Answers: [
      {
        Id: 105057,
        Text: 'Cấu hình trực tiếp trong file nginx.conf',
      },
      {
        Id: 105058,
        Text: 'Cấu hình trực tiếp trong file nginx.common',
      },
      {
        Id: 105059,
        Text: 'Cấu hình trực tiếp trong file conf.nginx',
      },
      {
        Id: 105060,
        Text: 'Cấu hình trực tiếp trong file common. Nginx',
      },
    ],
  },
  {
    Id: 25351,
    Text: 'Người quản trị web phải thêm bằng tay các kiểu MIME di động còn thiếu, điều này đúng hay sai?',
    Marks: 1,
    AnswerId: 105061,
    Answers: [
      {
        Id: 105061,
        Text: 'Đúng',
      },
      {
        Id: 105062,
        Text: 'Sai',
      },
    ],
  },
  {
    Id: 25352,
    Text: 'Chức năng bộ nhớ đệm của HTML5 được ứng dụng nhiều trên các trình duyệt. Đúng hay sai?',
    Marks: 1,
    AnswerId: 105063,
    Answers: [
      {
        Id: 105063,
        Text: 'Đúng',
      },
      {
        Id: 105064,
        Text: 'Sai',
      },
    ],
  },
  {
    Id: 25353,
    Text: 'XHTML-MP hỗ trợ thành phần nào sau đây?',
    Marks: 1,
    AnswerId: 105065,
    Answers: [
      {
        Id: 105065,
        Text: 'CSS',
      },
      {
        Id: 105066,
        Text: 'Upload',
      },
      {
        Id: 105067,
        Text: 'AJAX',
      },
      {
        Id: 105068,
        Text: 'AS',
      },
    ],
  },
  {
    Id: 25354,
    Text: 'scheme URI tel: và wtai: được hỗ trợ rộng rãi trong các trình duyệt di động. Đúng hay sai?',
    Marks: 1,
    AnswerId: 105070,
    Answers: [
      {
        Id: 105069,
        Text: 'Đúng',
      },
      {
        Id: 105070,
        Text: 'Sai',
      },
    ],
  },
  {
    Id: 25355,
    Text: 'Tính năng nào được sử dụng để bắt đầu các cuộc gọi điện thoại và thêm số điện thoại liên lạc vào sổ địa chỉ của thiết bị di động?',
    Marks: 1,
    AnswerId: 105071,
    Answers: [
      {
        Id: 105071,
        Text: 'Scheme Wtai',
      },
      {
        Id: 105072,
        Text: 'Scheme Day',
      },
      {
        Id: 105073,
        Text: 'Scheme Mobile',
      },
      {
        Id: 105074,
        Text: 'Scheme Tel',
      },
    ],
  },
  {
    Id: 25356,
    Text: 'Phát biểu "Là sự kết hợp của cả 2 dạng cú pháp: XHTML và HTML" là định nghĩa về?',
    Marks: 1,
    AnswerId: 105077,
    Answers: [
      {
        Id: 105075,
        Text: 'XHTML1',
      },
      {
        Id: 105076,
        Text: 'AJAX',
      },
      {
        Id: 105077,
        Text: 'HTML5',
      },
      {
        Id: 105078,
        Text: 'HTML4',
      },
    ],
  },
  {
    Id: 25357,
    Text: 'XHTML được sử dụng cho điện thoại di động thông minh. Đúng hay sai?',
    Marks: 1,
    AnswerId: 105079,
    Answers: [
      {
        Id: 105079,
        Text: 'Đúng',
      },
      {
        Id: 105080,
        Text: 'Sai',
      },
    ],
  },
  {
    Id: 25358,
    Text: 'XHTML-MP không cung cấp hỗ trợ cơ bản cho biểu mẫu (form). Đúng hay sai?',
    Marks: 1,
    AnswerId: 105081,
    Answers: [
      {
        Id: 105081,
        Text: 'Sai',
      },
      {
        Id: 105082,
        Text: 'Đúng',
      },
    ],
  },
  {
    Id: 25359,
    Text: 'Đâu là lý do không chọn HTML khi phát triển web di động?',
    Marks: 1,
    AnswerId: 105083,
    Answers: [
      {
        Id: 105083,
        Text: 'HTML có định dạng kém, nên khi sử dụng, hiệu năng duyệt web của người dùng cũng bị kém đi',
      },
      {
        Id: 105084,
        Text: 'HTML không hiển thị được văn bản dài trong web di động',
      },
      {
        Id: 105085,
        Text: 'HTML không upload được với web di động',
      },
      {
        Id: 105086,
        Text: 'HTML không hiển thị được hình ảnh trong web di động',
      },
    ],
  },
  {
    Id: 25360,
    Text: 'Tính năng chuyên dụng nào cho phép người sử dụng di động bấm vào một liên kết để bắt đầu cuộc gọi điện thoại?',
    Marks: 1,
    AnswerId: 105090,
    Answers: [
      {
        Id: 105087,
        Text: 'Scheme Day',
      },
      {
        Id: 105088,
        Text: 'Scheme Show',
      },
      {
        Id: 105089,
        Text: 'Scheme Mobile',
      },
      {
        Id: 105090,
        Text: 'Scheme Tel',
      },
    ],
  },
  {
    Id: 25361,
    Text: 'XHTML-MP là mã đánh dấu không phù hợp cho trình duyệt trên tất cả các loại thiết bị di động. Đúng hay sai?',
    Marks: 1,
    AnswerId: 105091,
    Answers: [
      {
        Id: 105091,
        Text: 'Sai',
      },
      {
        Id: 105092,
        Text: 'Đúng',
      },
    ],
  },
  {
    Id: 25362,
    Text: 'Chỉ có thể sử dụng những theme mặc định có sẵn trong khai báo khi tạo site. Đúng hay sai?',
    Marks: 1,
    AnswerId: 105094,
    Answers: [
      {
        Id: 105093,
        Text: 'Đúng',
      },
      {
        Id: 105094,
        Text: 'Sai',
      },
    ],
  },
  {
    Id: 25363,
    Text: 'Thành phần nào sau đây được sử dụng để thay đổi theme cho web di động?',
    Marks: 1,
    AnswerId: 105096,
    Answers: [
      {
        Id: 105095,
        Text: 'data-show-theme',
      },
      {
        Id: 105096,
        Text: 'data-theme',
      },
      {
        Id: 105097,
        Text: 'data-add-theme',
      },
      {
        Id: 105098,
        Text: 'data-like-theme',
      },
    ],
  },
  {
    Id: 25364,
    Text: 'Mặc định khi khởi tạo site với Dreamweaver, trên site sẽ gồm bao nhiêu thành phần trang con trên trang?',
    Marks: 1,
    AnswerId: 105100,
    Answers: [
      {
        Id: 105099,
        Text: '2',
      },
      {
        Id: 105100,
        Text: '3',
      },
      {
        Id: 105101,
        Text: '1',
      },
      {
        Id: 105102,
        Text: '4',
      },
    ],
  },
  {
    Id: 25365,
    Text: 'Trong giao dịch AJAX việc xử lý các thay đổi trạng thái của XMLHttpRequest nhằm mục đích gì?',
    Marks: 1,
    AnswerId: 105105,
    Answers: [
      {
        Id: 105103,
        Text: 'Cập nhật CSS cho web',
      },
      {
        Id: 105104,
        Text: 'Phát hiện CSS lỗi cho web',
      },
      {
        Id: 105105,
        Text: 'Phát hiện lỗi và lấy về tài liệu web được gửi phản hồi',
      },
      {
        Id: 105106,
        Text: 'Cập nhật phần động cho web',
      },
    ],
  },
  {
    Id: 25366,
    Text: 'Trong giao dịch AJAX việc sử dụng document.getElementById và element.innerHTML nhằm mục đích gì?',
    Marks: 1,
    AnswerId: 105110,
    Answers: [
      {
        Id: 105107,
        Text: 'Cập nhật Js cho web',
      },
      {
        Id: 105108,
        Text: 'Cập nhật hình ảnh cho web',
      },
      {
        Id: 105109,
        Text: 'Cập nhật CSS cho web',
      },
      {
        Id: 105110,
        Text: 'Cập nhật phần động cho web',
      },
    ],
  },
  {
    Id: 25367,
    Text: 'Đâu là phát biểu đúng về AJAX?',
    Marks: 1,
    AnswerId: 105113,
    Answers: [
      {
        Id: 105111,
        Text: 'Là phương pháp sử dụng CSS để cập nhật từng phần (không phải toàn bộ) thông tin trên trang web thông qua yêu cầu nền gửi tới máy chủ web',
      },
      {
        Id: 105112,
        Text: 'Là phương pháp sử dụng HTML để cập nhật từng phần (không phải toàn bộ) thông tin trên trang web thông qua yêu cầu nền gửi tới máy chủ web',
      },
      {
        Id: 105113,
        Text: 'Là phương pháp sử dụng JavaScript để cập nhật từng phần (không phải toàn bộ) thông tin trên trang web thông qua yêu cầu nền gửi tới máy chủ web',
      },
      {
        Id: 105114,
        Text: 'Là phương pháp sử dụng JavaScript để cập nhật toàn bộ thông tin trên trang web thông qua yêu cầu nền gửi tới máy chủ web',
      },
    ],
  },
  {
    Id: 25368,
    Text: 'Đâu là sự kiện Javascript được hỗ trợ trong XHTML-MP1.1',
    Marks: 1,
    AnswerId: 105117,
    Answers: [
      {
        Id: 105115,
        Text: 'onMouseClick',
      },
      {
        Id: 105116,
        Text: 'onRelease',
      },
      {
        Id: 105117,
        Text: 'onsubmit',
      },
      {
        Id: 105118,
        Text: 'onMouseOver',
      },
    ],
  },
  {
    Id: 25369,
    Text: 'Một số trình duyệt Microsoft (bao gồm Internet Explorer Mobile) hỗ trợ AJAX thông qua đối tượng ActiveX thay vì XMLHttpRequest. Điều này đúng hay sai?',
    Marks: 1,
    AnswerId: 105119,
    Answers: [
      {
        Id: 105119,
        Text: 'Đúng',
      },
      {
        Id: 105120,
        Text: 'Sai',
      },
    ],
  },
  {
    Id: 25370,
    Text: 'API có bản quyền mở rộng thêm các chức năng và đối tượng mới cho máy ảo JavaScript. Điều này đúng hay sai?',
    Marks: 1,
    AnswerId: 105121,
    Answers: [
      {
        Id: 105121,
        Text: 'Đúng',
      },
      {
        Id: 105122,
        Text: 'Sai',
      },
    ],
  },
  {
    Id: 25371,
    Text: 'Đâu là một trong các bước cơ bản để cho phép AJAX nằm trong tài liệu web di động?',
    Marks: 1,
    AnswerId: 105124,
    Answers: [
      {
        Id: 105123,
        Text: 'Dùng nhiều yêu cầu web chạy nền làm tăng hiệu năng của trình duyệt',
      },
      {
        Id: 105124,
        Text: 'Trong JavaScript, tạo đối tượng XMLHttpRequest – là đối tượng AJAX thực hiện yêu cầu gửi cập nhật từng phần đến máy chủ web',
      },
      {
        Id: 105125,
        Text: 'Trong JavaScript, tạo đối tượng XMLHttpRespone – là đối tượng AJAX thực hiện yêu cầu gửi cập nhật từng phần đến máy chủ web',
      },
      {
        Id: 105126,
        Text: 'Trong HTML, sử dụng document.getElementById và element.innerHTML để cập nhật phần động của tài liệu',
      },
    ],
  },
  {
    Id: 25372,
    Text: 'Trang Jquery Mobile không bao gồm CSS. Điều này đúng hay sai?',
    Marks: 1,
    AnswerId: 105128,
    Answers: [
      {
        Id: 105127,
        Text: 'Đúng',
      },
      {
        Id: 105128,
        Text: 'Sai',
      },
    ],
  },
  {
    Id: 25373,
    Text: 'Cách hiển thị Form trên trang web di động hoàn toàn giống với form trên trang web hoạt động trên máy tính. Điều này đúng hay sai?',
    Marks: 1,
    AnswerId: 105130,
    Answers: [
      {
        Id: 105129,
        Text: 'Đúng',
      },
      {
        Id: 105130,
        Text: 'Sai',
      },
    ],
  },
  {
    Id: 25374,
    Text: 'Trong Dreamweaver, sau khi đã khởi tạo site thì không thể thay đổi được kích cỡ hiển thị của trang web. Điều này đúng hay sai?',
    Marks: 1,
    AnswerId: 105132,
    Answers: [
      {
        Id: 105131,
        Text: 'Đúng',
      },
      {
        Id: 105132,
        Text: 'Sai',
      },
    ],
  },
  {
    Id: 25375,
    Text: 'Thành phần nào giúp người dùng dễ dàng đánh giá thông tin (sản phẩm, hình ảnh, ...) trên trang web di động?',
    Marks: 1,
    AnswerId: 105133,
    Answers: [
      {
        Id: 105133,
        Text: 'slider',
      },
      {
        Id: 105134,
        Text: 'star',
      },
      {
        Id: 105135,
        Text: 'vote',
      },
      {
        Id: 105136,
        Text: 'rating',
      },
    ],
  },
  {
    Id: 25376,
    Text: 'Thuộc tính nào giúp định dạng lại kiểu dáng cho thành phần khối Collapsible?',
    Marks: 1,
    AnswerId: 105139,
    Answers: [
      {
        Id: 105137,
        Text: '.ul-collapsible-a',
      },
      {
        Id: 105138,
        Text: '.ul-collapsible-grid',
      },
      {
        Id: 105139,
        Text: '.ul-collapsible',
      },
      {
        Id: 105140,
        Text: '.ul-collapsible-theme',
      },
    ],
  },
  {
    Id: 25377,
    Text: 'Để chèn các thành phần của Jquery mobile, trước hết phải?',
    Marks: 1,
    AnswerId: 105142,
    Answers: [
      {
        Id: 105141,
        Text: 'Khởi tạo file Js',
      },
      {
        Id: 105142,
        Text: 'Khởi tạo trang HTML5',
      },
      {
        Id: 105143,
        Text: 'Khởi tạo file Jquery mobile',
      },
      {
        Id: 105144,
        Text: 'Khởi tạo file CSS',
      },
    ],
  },
  {
    Id: 25378,
    Text: 'Đâu là phát biểu đúng về tùy chọn Remote (CDN) trong hộp thoại Jquery mobile fields?',
    Marks: 1,
    AnswerId: 105148,
    Answers: [
      {
        Id: 105145,
        Text: 'Liên kết các thành phần tương tự như file trong trang web',
      },
      {
        Id: 105146,
        Text: 'Tương tự như file trong trang web',
      },
      {
        Id: 105147,
        Text: 'Liên kết giữa hình ảnh và text trên trang web',
      },
      {
        Id: 105148,
        Text: 'Liên kết các phiên bản của những tập tin cần thiết tại các trang jquery mobile',
      },
    ],
  },
  {
    Id: 25379,
    Text: 'Trên trang web cho di động, thành phần nào hoạt động trên nguyên tắc hiển thị/ ẩn nội dung tùy thuộc vào người dùng?',
    Marks: 1,
    AnswerId: 105149,
    Answers: [
      {
        Id: 105149,
        Text: 'Collapsible block',
      },
      {
        Id: 105150,
        Text: 'header',
      },
      {
        Id: 105151,
        Text: 'footer',
      },
      {
        Id: 105152,
        Text: 'content',
      },
    ],
  },
  {
    Id: 25380,
    Text: 'Đâu là phát biểu đúng về điểm mạnh của trường text trên web?',
    Marks: 1,
    AnswerId: 105155,
    Answers: [
      {
        Id: 105153,
        Text: 'Là phương thức upload thông tin về địa chỉ của người dùng',
      },
      {
        Id: 105154,
        Text: 'Là phương thức truyền tải thông tin',
      },
      {
        Id: 105155,
        Text: 'Là phương thức dễ dàng để thu thập dữ liệu người dùng (tên, mật khẩu, địa chỉ email, ...)',
      },
      {
        Id: 105156,
        Text: 'Là phương thức nên tránh sử dụng trong quá trình thu thập dữ liệu người dùng',
      },
    ],
  },
  {
    Id: 25381,
    Text: 'Theme là mặc định của khối Collapsible, điều này đúng hay sai?',
    Marks: 1,
    AnswerId: 105157,
    Answers: [
      {
        Id: 105157,
        Text: 'Sai',
      },
      {
        Id: 105158,
        Text: 'Đúng',
      },
    ],
  },
  {
    Id: 25382,
    Text: 'Đâu là ưu điểm của app khi chạy trên thiết bị di động, so với web di động?',
    Marks: 1,
    AnswerId: 105160,
    Answers: [
      {
        Id: 105159,
        Text: 'App tải chậm hơn so với web',
      },
      {
        Id: 105160,
        Text: 'Sau khi cài đặt, ứng dụng dễ dàng truy cập trên thiết bị di động - ứng dụng sẽ hiển thị trên màn hình thiết bị và không cần phải truy cập qua trình duyệt',
      },
      {
        Id: 105161,
        Text: 'Sau khi cài đặt, ứng dụng dễ dàng truy cập thông qua trình duyệt',
      },
      {
        Id: 105162,
        Text: 'App sẽ không chạy khi không có kết nối mạng',
      },
    ],
  },
  {
    Id: 25383,
    Text: 'Giá trị user-scalable xác định xem người dùng có thể phóng to/thu nhỏ cửa sổ hiển thị và điều chỉnh tỷ lệ hiển thị của trang web hay không. Điều này đúng hay sai?',
    Marks: 1,
    AnswerId: 105164,
    Answers: [
      {
        Id: 105163,
        Text: 'Sai',
      },
      {
        Id: 105164,
        Text: 'Đúng',
      },
    ],
  },
  {
    Id: 25384,
    Text: 'Trình duyệt IE6 dành cho di động hỗ trợ chuẩn Google Gears. Đúng hay sai?',
    Marks: 1,
    AnswerId: 105165,
    Answers: [
      {
        Id: 105165,
        Text: 'Đúng',
      },
      {
        Id: 105166,
        Text: 'Sai',
      },
    ],
  },
  {
    Id: 25385,
    Text: 'Sự kiện nào trong đối tượng window của Javascript giúp phát hiện sự thay đổi kích thước web từ phía người dùng?',
    Marks: 1,
    AnswerId: 105169,
    Answers: [
      {
        Id: 105167,
        Text: 'onFloat',
      },
      {
        Id: 105168,
        Text: 'onWidth',
      },
      {
        Id: 105169,
        Text: 'onorientationchange',
      },
      {
        Id: 105170,
        Text: 'onHeight',
      },
    ],
  },
  {
    Id: 25386,
    Text: 'Công nghệ nào có thể chuyển đổi web HTML5/ CSS3 thành dạng app?',
    Marks: 1,
    AnswerId: 105174,
    Answers: [
      {
        Id: 105171,
        Text: 'PhoneLine',
      },
      {
        Id: 105172,
        Text: 'PhoneWeb',
      },
      {
        Id: 105173,
        Text: 'PhoneConvert',
      },
      {
        Id: 105174,
        Text: 'PhoneGap',
      },
    ],
  },
  {
    Id: 25387,
    Text: 'Khi thực hiện chuyển đổi thành dạng app trong Dreamweaver, tùy chọn Build and Emulate giúp giải quyết công việc gì?',
    Marks: 1,
    AnswerId: 105175,
    Answers: [
      {
        Id: 105175,
        Text: 'Giúp hiển thị và lựa chọn thiết bị sẽ chạy app sau khi chuyển đổi',
      },
      {
        Id: 105176,
        Text: 'Giúp hiển thị thiết bị Android sẽ chạy app sau khi chuyển đổi',
      },
      {
        Id: 105177,
        Text: 'Giúp hiển thị thiết bị iOS sẽ chạy app sau khi chuyển đổi',
      },
      {
        Id: 105178,
        Text: 'Xác định với người dùng',
      },
    ],
  },
  {
    Id: 25388,
    Text: 'Ngoài cách sử dụng giá trị viewport của thẻ meta, ta còn cách nào để phát hiện sự thay đổi kích thước web từ phía người dùng?',
    Marks: 1,
    AnswerId: 105182,
    Answers: [
      {
        Id: 105179,
        Text: 'Sử dụng PHP',
      },
      {
        Id: 105180,
        Text: 'Sử dụng LiveView',
      },
      {
        Id: 105181,
        Text: 'Sử dụng ActionSript',
      },
      {
        Id: 105182,
        Text: 'Sử dụng Javascript',
      },
    ],
  },
  {
    Id: 25389,
    Text: 'Giá trị nào trong thẻ meta giúp tùy biến được kích thước cho web di động?',
    Marks: 1,
    AnswerId: 105183,
    Answers: [
      {
        Id: 105183,
        Text: 'Viewport',
      },
      {
        Id: 105184,
        Text: 'heightport',
      },
      {
        Id: 105185,
        Text: 'widthport',
      },
      {
        Id: 105186,
        Text: 'allsizeport',
      },
    ],
  },
  {
    Id: 25390,
    Text: 'Trên thực tế, trình duyệt Safari dành cho di động, không hỗ trợ ngôn ngữ nào sau đây?',
    Marks: 1,
    AnswerId: 105188,
    Answers: [
      {
        Id: 105187,
        Text: 'AML',
      },
      {
        Id: 105188,
        Text: 'WML',
      },
      {
        Id: 105189,
        Text: 'XML',
      },
      {
        Id: 105190,
        Text: 'XHTML',
      },
    ],
  },
  {
    Id: 25391,
    Text: 'Đâu là bộ engine để render và tạo bố cục cho trình duyệt web?',
    Marks: 1,
    AnswerId: 105191,
    Answers: [
      {
        Id: 105191,
        Text: 'webkit',
      },
      {
        Id: 105192,
        Text: 'webrender',
      },
      {
        Id: 105193,
        Text: 'webengine',
      },
      {
        Id: 105194,
        Text: 'WebStyle',
      },
    ],
  },
  {
    Id: 25392,
    Text: 'tính hợp lệ là điều cần thiết nhưng chưa đủ để đảm bảo rằng tài liệu đánh dấu phù hợp với trình duyệt trên di động. Điều này đúng hay sai?',
    Marks: 1,
    AnswerId: 105196,
    Answers: [
      {
        Id: 105195,
        Text: 'Sai',
      },
      {
        Id: 105196,
        Text: 'Đúng',
      },
    ],
  },
  {
    Id: 25393,
    Text: 'Trình duyệt trên di động (hoặc trên máy tính) sử dụng header nào trong yêu cầu HTTP để yêu cầu máy chủ web nén thông tin hồi đáp trả về',
    Marks: 1,
    AnswerId: 105197,
    Answers: [
      {
        Id: 105197,
        Text: 'Accept-Encoding',
      },
      {
        Id: 105198,
        Text: 'Flow',
      },
      {
        Id: 105199,
        Text: 'Accept',
      },
      {
        Id: 105200,
        Text: 'Denine',
      },
    ],
  },
  {
    Id: 25394,
    Text: 'Kỹ thuật nào được mô tả là kỹ thuật kế thừa được sử dụng để tăng tốc độ hiển thị web cho di động trên thiết bị di động đời cũ.',
    Marks: 1,
    AnswerId: 105202,
    Answers: [
      {
        Id: 105201,
        Text: 'Đóng gói footer',
      },
      {
        Id: 105202,
        Text: 'Đóng gói MIME đa phần',
      },
      {
        Id: 105203,
        Text: 'Đóng gói header',
      },
      {
        Id: 105204,
        Text: 'Đóng gói content',
      },
    ],
  },
  {
    Id: 25395,
    Text: 'Khi trang web được đóng gói bằng MIME đa phần, ta sử dụng kiểu nội dung của trang là kiểu?',
    Marks: 1,
    AnswerId: 105207,
    Answers: [
      {
        Id: 105205,
        Text: 'multipart',
      },
      {
        Id: 105206,
        Text: 'content',
      },
      {
        Id: 105207,
        Text: 'multipart/related',
      },
      {
        Id: 105208,
        Text: 'related',
      },
    ],
  },
  {
    Id: 25396,
    Text: 'Tối đa hóa khả năng lưu trữ đệm (cache) là một trong những phương pháp tối ưu hóa mã đánh dấu cho di động. Đúng hay sai?',
    Marks: 1,
    AnswerId: 105210,
    Answers: [
      {
        Id: 105209,
        Text: 'Sai',
      },
      {
        Id: 105210,
        Text: 'Đúng',
      },
    ],
  },
  {
    Id: 25397,
    Text: 'Trình duyệt điện thoại thông minh và một số trình duyệt di động khác có thể dùng giải thuật nào để giải nén và hiển thị những nội dung đã được nén',
    Marks: 1,
    AnswerId: 105214,
    Answers: [
      {
        Id: 105211,
        Text: 'chỉ deflate',
      },
      {
        Id: 105212,
        Text: 'nén mất dữ liệu',
      },
      {
        Id: 105213,
        Text: 'chỉ gzip',
      },
      {
        Id: 105214,
        Text: 'gzip hoặc deflate',
      },
    ],
  },
  {
    Id: 25398,
    Text: 'Phương pháp dùng để chỉ việc loại bỏ nội dung không cần thiết ra khỏi tài liệu web, là phương pháp nào sau đây?',
    Marks: 1,
    AnswerId: 105218,
    Answers: [
      {
        Id: 105215,
        Text: 'Phương pháp Content',
      },
      {
        Id: 105216,
        Text: 'Phương pháp Delete',
      },
      {
        Id: 105217,
        Text: 'Phương pháp maxnification',
      },
      {
        Id: 105218,
        Text: 'Phương pháp minification',
      },
    ],
  },
  {
    Id: 25399,
    Text: 'Header Expires trong hồi đáp HTTP cho biết điều gì?',
    Marks: 1,
    AnswerId: 105222,
    Answers: [
      {
        Id: 105219,
        Text: 'cho biết ngày tháng và thời gian hết hạn của hồi đáp từ máy chủ',
      },
      {
        Id: 105220,
        Text: 'cho biết thời gian hết hạn của hồi đáp từ máy chủ',
      },
      {
        Id: 105221,
        Text: 'cho biết ngày tháng và thời gian sử dụng máy chủ',
      },
      {
        Id: 105222,
        Text: 'cho biết ngày tháng và thời gian mà tài liệu hồi đáp sẽ hết hạn và phải được xác nhận lại hoặc xóa khỏi bộ nhớ đệm máy khách',
      },
    ],
  },
  {
    Id: 25400,
    Text: 'Máy chủ web Apache 2 cho phép nén hồi đáp bằng cách sử dụng mô-đun nào sau đây?.',
    Marks: 1,
    AnswerId: 105226,
    Answers: [
      {
        Id: 105223,
        Text: 'min_deflate',
      },
      {
        Id: 105224,
        Text: 'export_deflate',
      },
      {
        Id: 105225,
        Text: 'import_deflate',
      },
      {
        Id: 105226,
        Text: 'mod_deflate',
      },
    ],
  },
  {
    Id: 25401,
    Text: 'Đâu là phương pháp nhằm giảm kích thước file ảnh khi sử dụng trên web di động?',
    Marks: 1,
    AnswerId: 105230,
    Answers: [
      {
        Id: 105227,
        Text: 'giảm mà không ảnh hưởng tới khả năng đọc của hình',
      },
      {
        Id: 105228,
        Text: 'Giảm số lượng màu sắc trong hình ảnh',
      },
      {
        Id: 105229,
        Text: 'sử dụng bộ nén hình ảnh',
      },
      {
        Id: 105230,
        Text: 'tất cả các phương pháp trên',
      },
    ],
  },
  {
    Id: 25402,
    Text: 'Phát biểu "… các bộ công cụ dùng để tìm và đánh chỉ mục tài liệu web đã được tối ưu hóa cho thiết bị di động", nói về?',
    Marks: 1,
    AnswerId: 105231,
    Answers: [
      {
        Id: 105231,
        Text: 'Công cụ tìm kiếm di động',
      },
      {
        Id: 105232,
        Text: 'Công cụ download',
      },
      {
        Id: 105233,
        Text: 'Công cụ upload',
      },
      {
        Id: 105234,
        Text: 'Công cụ online',
      },
    ],
  },
  {
    Id: 25403,
    Text: 'Từ khóa RELATIONSHIP trong thẻ link là từ khóa xác định bản chất của công cụ upload. Đúng hay sai?',
    Marks: 1,
    AnswerId: 105235,
    Answers: [
      {
        Id: 105235,
        Text: 'Sai',
      },
      {
        Id: 105236,
        Text: 'Đúng',
      },
    ],
  },
  {
    Id: 25404,
    Text: 'Đâu là các giải pháp tối ưu hóa cho công cụ tìm kiếm nên tránh?',
    Marks: 1,
    AnswerId: 105240,
    Answers: [
      {
        Id: 105237,
        Text: 'chuyển đổi file',
      },
      {
        Id: 105238,
        Text: 'lưu file trên hệ thống',
      },
      {
        Id: 105239,
        Text: 'liên kết với google',
      },
      {
        Id: 105240,
        Text: 'lặp đi lặp lại các từ khóa trong tài liệu web',
      },
    ],
  },
  {
    Id: 25405,
    Text: 'Đâu là phát biểu đúng về sitemap?',
    Marks: 1,
    AnswerId: 105241,
    Answers: [
      {
        Id: 105241,
        Text: 'Là các file XML được người quản trị web dùng để giới thiệu với các crawler của công cụ tìm kiếm về danh sách các URL sẵn có trên website',
      },
      {
        Id: 105242,
        Text: 'Là các file HXML được người quản trị web dùng để giới thiệu với các crawler của công cụ tìm kiếm về danh sách các URL sẵn có trên website',
      },
      {
        Id: 105243,
        Text: 'Là các file WML được người quản trị web dùng để giới thiệu với các crawler của công cụ tìm kiếm về danh sách các URL sẵn có trên website',
      },
      {
        Id: 105244,
        Text: 'Là các file XHML được người quản trị web dùng để giới thiệu với các crawler của công cụ tìm kiếm về danh sách các URL sẵn có trên website',
      },
    ],
  },
  {
    Id: 25406,
    Text: 'Đâu là phát biểu đúng về Công cụ tìm kiếm di động?',
    Marks: 1,
    AnswerId: 105249,
    Answers: [
      {
        Id: 105245,
        Text: 'Sai',
      },
      {
        Id: 105246,
        Text: 'là các bộ công cụ dùng để upload file lên web di động',
      },
      {
        Id: 105247,
        Text: 'là các bộ công cụ dùng để tìm tài liệu web đã được tối ưu hóa cho thiết bị di động',
      },
      {
        Id: 105248,
        Text: 'là các bộ công cụ tối ưu hóa cho thiết bị di động',
      },
      {
        Id: 105249,
        Text: 'là các bộ công cụ dùng để tìm và đánh chỉ mục tài liệu web đã được tối ưu hóa cho thiết bị di động',
      },
      {
        Id: 105250,
        Text: 'Đúng',
      },
    ],
  },
  {
    Id: 25407,
    Text: 'Người quản trị web cung cấp URL của sitemap bằng cách nào?',
    Marks: 1,
    AnswerId: 105251,
    Answers: [
      {
        Id: 105251,
        Text: 'dùng HTTP ping gửi đến công cụ tìm kiếm hoặc ghi sitemap trong file robot.txt đặt ở thư mục gốc của máy chủ web',
      },
      {
        Id: 105252,
        Text: 'dùng HTTP ftp gửi đến công cụ tìm kiếm hoặc ghi sitemap trong file robot.txt đặt ở thư mục gốc của máy chủ web',
      },
      {
        Id: 105253,
        Text: 'dùng HTTP header gửi đến công cụ tìm kiếm hoặc ghi sitemap trong file robot.txt đặt ở thư mục gốc của máy chủ web',
      },
      {
        Id: 105254,
        Text: 'dùng HTTP footer gửi đến công cụ tìm kiếm hoặc ghi sitemap trong file robot.txt đặt ở thư mục gốc của máy chủ web',
      },
    ],
  },
  {
    Id: 25408,
    Text: 'Việc sử dụng meta data trong mã đánh dấu nhằm tác dụng gì?',
    Marks: 1,
    AnswerId: 105257,
    Answers: [
      {
        Id: 105255,
        Text: 'biểu diễn tab',
      },
      {
        Id: 105256,
        Text: 'biểu diễn link',
      },
      {
        Id: 105257,
        Text: 'biểu diễn liên kết để công cụ tìm kiếm biết được website có được tối ưu hóa cho di động hay không',
      },
      {
        Id: 105258,
        Text: 'biểu diễn liên kết',
      },
    ],
  },
  {
    Id: 25409,
    Text: 'Nên Định vị website cho di động trên cùng miền với website máy tính tương ứng. Đúng hay sai?',
    Marks: 1,
    AnswerId: 105259,
    Answers: [
      {
        Id: 105259,
        Text: 'Đúng',
      },
      {
        Id: 105260,
        Text: 'Sai',
      },
    ],
  },
  {
    Id: 25410,
    Text: 'Bộ chuyển mã không thể chỉnh sửa các header yêu cầu từ thiết bị di động có yêu cầu web. Đúng hay sai?',
    Marks: 1,
    AnswerId: 105261,
    Answers: [
      {
        Id: 105261,
        Text: 'Sai',
      },
      {
        Id: 105262,
        Text: 'Đúng',
      },
    ],
  },
  {
    Id: 25411,
    Text: 'Đâu là một trong những phương pháp lập trình phòng thủ cho trang web cho di động?',
    Marks: 1,
    AnswerId: 105265,
    Answers: [
      {
        Id: 105263,
        Text: 'Dùng footer hồi đáp và kích cỡ tài liệu',
      },
      {
        Id: 105264,
        Text: 'Dùng HTTP hồi đáp và kích cỡ tài liệu',
      },
      {
        Id: 105265,
        Text: 'Dùng header hồi đáp và kích cỡ tài liệu',
      },
      {
        Id: 105266,
        Text: 'Dùng content hồi đáp và kích cỡ tài liệu',
      },
    ],
  },
  {
    Id: 25412,
    Text: 'Sencha Architect là gì?',
    Marks: 1,
    AnswerId: 105267,
    Answers: [
      {
        Id: 105267,
        Text: 'Một IDE hỗ trợ phát triển mobile web sử dụng Sencha',
      },
      {
        Id: 105268,
        Text: 'Một mô hình hoạt động của mobile web',
      },
      {
        Id: 105269,
        Text: 'Một hệ điều hành mobile của sencha',
      },
      {
        Id: 105270,
        Text: 'Một mô hình hoạt động của desktop web',
      },
    ],
  },
  {
    Id: 25413,
    Text: 'Có thể sử dụng Sencha Touch để phát triển mobile web cho HĐH nào?',
    Marks: 1,
    AnswerId: 105272,
    Answers: [
      {
        Id: 105271,
        Text: 'BlackBerry',
      },
      {
        Id: 105272,
        Text: 'Tất cả các phương án đều đúng',
      },
      {
        Id: 105273,
        Text: 'IOS',
      },
      {
        Id: 105274,
        Text: 'Android',
      },
    ],
  },
  {
    Id: 25414,
    Text: 'Trong file app.js, hàm launch() có ý nghĩa gì?',
    Marks: 1,
    AnswerId: 105277,
    Answers: [
      {
        Id: 105275,
        Text: 'hàm không được khởi chạy mặc định khi sencha load hệ thống',
      },
      {
        Id: 105276,
        Text: 'Hàm không bao giờ chạy, cho dù được gọi',
      },
      {
        Id: 105277,
        Text: 'hàm sẽ được khởi chạy mặc định khi sencha load hệ thống',
      },
      {
        Id: 105278,
        Text: 'Hàmchỉ chạy khi được triệu gọi',
      },
    ],
  },
  {
    Id: 25415,
    Text: 'Cho đoạn lệnh sau:Ext.application({ name:"fpoly", launch:function(){ Ext.create(\u0027Ext.Panel\u0027,{ fullscreen:true, html:\u0027hello fpoly\u0027, }) }})Hãy cho biết hàm create dùng để làm gì?',
    Marks: 1,
    AnswerId: 105280,
    Answers: [
      {
        Id: 105279,
        Text: 'gọi panel.master',
      },
      {
        Id: 105280,
        Text: 'gọi API panel',
      },
      {
        Id: 105281,
        Text: 'gọi panel',
      },
      {
        Id: 105282,
        Text: 'gọi dwt panel',
      },
    ],
  },
  {
    Id: 25416,
    Text: 'Trong ứng dụng mobile web được tạo bằng Sencha, thư mục resources dùng để làm gì?',
    Marks: 1,
    AnswerId: 105286,
    Answers: [
      {
        Id: 105283,
        Text: 'chứa css cho ứng dụng',
      },
      {
        Id: 105284,
        Text: 'chứa image cho ứng dụng',
      },
      {
        Id: 105285,
        Text: 'chứa tài nguyên ứng dụng',
      },
      {
        Id: 105286,
        Text: 'Tất cả các phương án đều đúng',
      },
    ],
  },
  {
    Id: 25417,
    Text: 'Trong ứng dụng mobile web được tạo bằng Sencha, file app.js dùng để làm gì?',
    Marks: 1,
    AnswerId: 105290,
    Answers: [
      {
        Id: 105287,
        Text: 'Chỉ chứa hàm loadSencha',
      },
      {
        Id: 105288,
        Text: 'Chứa phần thư viện javascript của Sencha',
      },
      {
        Id: 105289,
        Text: 'Chứa nội dung văn bản',
      },
      {
        Id: 105290,
        Text: 'Chứa phần javascript chính của ứng dụng',
      },
    ],
  },
  {
    Id: 25418,
    Text: 'Trong ứng dụng mobile web được tạo bằng Sencha, thư mục app chứa các thành phần nào?',
    Marks: 1,
    AnswerId: 105291,
    Answers: [
      {
        Id: 105291,
        Text: 'Thư mục Models, Views, Controllers, Stores của ứng dụng',
      },
      {
        Id: 105292,
        Text: 'Thư mục Models, Views, Controllers của ứng dụng',
      },
      {
        Id: 105293,
        Text: 'Chỉ chứa thư múc apps',
      },
      {
        Id: 105294,
        Text: 'Chỉ chứa thư mục app',
      },
    ],
  },
  {
    Id: 25419,
    Text: 'Trong ứng dụng mobile web được tạo bằng Sencha, file app.json dùng để làm gì?',
    Marks: 1,
    AnswerId: 105296,
    Answers: [
      {
        Id: 105295,
        Text: 'Chứa phần thư viện javascript của Sencha',
      },
      {
        Id: 105296,
        Text: 'Cấu hình ứng dụng',
      },
      {
        Id: 105297,
        Text: 'Chứa nội dung văn bản',
      },
      {
        Id: 105298,
        Text: 'Chứa file app.js',
      },
    ],
  },
]
export const PHPP = [
  {
    Id: 25890,
    Text: 'PHP là',
    Marks: 1,
    AnswerId: 107252,
    Answers: [
      {
        Id: 107251,
        Text: 'Trình duyệt web của máy chủ',
      },
      {
        Id: 107252,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107253,
        Text: 'Cơ sở dữ liệu của máy chủ',
      },
      {
        Id: 107254,
        Text: 'Ngôn ngữ phía máy chủ',
      },
    ],
  },
  {
    Id: 25891,
    Text: 'Cú pháp khai báo cho hằng số nào sau đây là đúng',
    Marks: 1,
    AnswerId: 107256,
    Answers: [
      {
        Id: 107255,
        Text: 'define(MAX, 30)',
      },
      {
        Id: 107256,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107257,
        Text: 'MAX = 30',
      },
      {
        Id: 107258,
        Text: 'constant(\u0027max\u0027, 30)',
      },
    ],
  },
  {
    Id: 25892,
    Text: 'Để viết chú thích nhiều dòng cho câu lệnh PHP cần sử dụng kí tự nào',
    Marks: 1,
    AnswerId: 107260,
    Answers: [
      {
        Id: 107259,
        Text: '/',
      },
      {
        Id: 107260,
        Text: '/* */',
      },
      {
        Id: 107261,
        Text: '//',
      },
      {
        Id: 107262,
        Text: '# #',
      },
    ],
  },
  {
    Id: 25893,
    Text: 'Để nhúng mã PHP vào mã HTML cần sử dụng cặp thẻ tag nào',
    Marks: 1,
    AnswerId: 107264,
    Answers: [
      {
        Id: 107263,
        Text: '\u003c?\u003e',
      },
      {
        Id: 107264,
        Text: '\u003c?php ?\u003e',
      },
      {
        Id: 107265,
        Text: '\u003cphp\u003e \u003c/php\u003e',
      },
      {
        Id: 107266,
        Text: '\u003c? ?\u003e',
      },
    ],
  },
  {
    Id: 25894,
    Text: 'Trường hợp nào dưới đây cần sử dụng phương thức POST thay vì GET',
    Marks: 1,
    AnswerId: 107267,
    Answers: [
      {
        Id: 107267,
        Text: 'Cần truyền hơn 4MB dữ liệu',
      },
      {
        Id: 107268,
        Text: 'Muốn truyền tham số vào URL',
      },
      {
        Id: 107269,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107270,
        Text: 'Có yêu cầu xem trang viết dữ liệu lên máy chủ cơ sở dữ liệu',
      },
    ],
  },
  {
    Id: 25895,
    Text: 'Cú pháp khai báo và gán giá trị cho biến nào sau đây là đúng',
    Marks: 1,
    AnswerId: 107271,
    Answers: [
      {
        Id: 107271,
        Text: '$a = 1',
      },
      {
        Id: 107272,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107273,
        Text: 'a = 1',
      },
      {
        Id: 107274,
        Text: '$a == 1',
      },
    ],
  },
  {
    Id: 25896,
    Text: 'Cấu trúc lấy dữ liệu sử dụng mảng $_GET nào sau đây là đúng',
    Marks: 1,
    AnswerId: 107275,
    Answers: [
      {
        Id: 107275,
        Text: '$b = $_GET[\u0027a\u0027]',
      },
      {
        Id: 107276,
        Text: '$a = $_GET[a]',
      },
      {
        Id: 107277,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107278,
        Text: '$a = $_GET(a)',
      },
    ],
  },
  {
    Id: 25897,
    Text: '$i = 1; while ($i \u003c= 7) { $i++; } Sau khi thoát khỏi vòng lặp thì $i có giá trị bao nhiêu',
    Marks: 1,
    AnswerId: 107282,
    Answers: [
      {
        Id: 107279,
        Text: '7',
      },
      {
        Id: 107280,
        Text: '1',
      },
      {
        Id: 107281,
        Text: '0',
      },
      {
        Id: 107282,
        Text: '8',
      },
    ],
  },
  {
    Id: 25898,
    Text: 'Để viết chú thích cho câu lệnh PHP cần sử dụng kí tự nào',
    Marks: 1,
    AnswerId: 107283,
    Answers: [
      {
        Id: 107283,
        Text: '//',
      },
      {
        Id: 107284,
        Text: '# #',
      },
      {
        Id: 107285,
        Text: '/* /*',
      },
      {
        Id: 107286,
        Text: '/',
      },
    ],
  },
  {
    Id: 25899,
    Text: 'Giao diện của XAMPP cho phép thực hiện thao tác nào dưới đây',
    Marks: 1,
    AnswerId: 107289,
    Answers: [
      {
        Id: 107287,
        Text: 'Bật tắt MS SQL',
      },
      {
        Id: 107288,
        Text: 'Bật tắt SQL',
      },
      {
        Id: 107289,
        Text: 'Bật tắt Apache',
      },
      {
        Id: 107290,
        Text: 'Tất cả đáp án đều đúng',
      },
    ],
  },
  {
    Id: 25900,
    Text: 'Trong phpMyAdmin, để xóa dữ liệu của một bảng thì nhấn nút nào dưới đây',
    Marks: 1,
    AnswerId: 107292,
    Answers: [
      {
        Id: 107291,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107292,
        Text: 'Empty',
      },
      {
        Id: 107293,
        Text: 'Delete',
      },
      {
        Id: 107294,
        Text: 'Drop',
      },
    ],
  },
  {
    Id: 25901,
    Text: 'Tầng model của mô hình MVC chứa những gì',
    Marks: 1,
    AnswerId: 107295,
    Answers: [
      {
        Id: 107295,
        Text: 'Các file PHP biểu thị dữ liệu của ứng dụng',
      },
      {
        Id: 107296,
        Text: 'Các file PHP thể hiện giao tiếp với người dùng',
      },
      {
        Id: 107297,
        Text: 'Các file HTML thể hiện giao diện của ứng dụng',
      },
      {
        Id: 107298,
        Text: 'Tất cả đáp án đều sai',
      },
    ],
  },
  {
    Id: 25902,
    Text: 'Cấu trúc try catch dùng để',
    Marks: 1,
    AnswerId: 107301,
    Answers: [
      {
        Id: 107299,
        Text: 'Tăng tốc độ thực thi cho đoạn mã PHP',
      },
      {
        Id: 107300,
        Text: 'Bỏ qua lỗi của đoạn mã PHP',
      },
      {
        Id: 107301,
        Text: 'Bắt ngoại lệ của đoạn mã PHP',
      },
      {
        Id: 107302,
        Text: 'Tất cả đáp án đều sai',
      },
    ],
  },
  {
    Id: 25903,
    Text: 'Để lấy giá trị của phần tử \u0027Ten\u0027 của mảng $a và lưu vào biến $b thì dùng cấu trúc nào sau đây',
    Marks: 1,
    AnswerId: 107306,
    Answers: [
      {
        Id: 107303,
        Text: '$b = $a[Ten]',
      },
      {
        Id: 107304,
        Text: '$b = $a(\u0027Ten\u0027)',
      },
      {
        Id: 107305,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107306,
        Text: '$b = $a[\u0027Ten\u0027]',
      },
    ],
  },
  {
    Id: 25904,
    Text: 'Để gán giá trị \u0027abc\u0027 cho phần tử \u0027Ten\u0027 của mảng $a thì dùng cấu trúc nào sau đây',
    Marks: 1,
    AnswerId: 107307,
    Answers: [
      {
        Id: 107307,
        Text: '$a[\u0027Ten\u0027] = \u0027abc\u0027',
      },
      {
        Id: 107308,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107309,
        Text: '$a(\u0027Ten\u0027) = \u0027abc\u0027',
      },
      {
        Id: 107310,
        Text: '$a[Ten] = abc',
      },
    ],
  },
  {
    Id: 25905,
    Text: 'Để khởi tạo mảng gồm 4 phần tử trong PHP thì dùng cấu trúc nào sau đây',
    Marks: 1,
    AnswerId: 107312,
    Answers: [
      {
        Id: 107311,
        Text: 'array(5)',
      },
      {
        Id: 107312,
        Text: 'array(3)',
      },
      {
        Id: 107313,
        Text: '$a = array(4)',
      },
      {
        Id: 107314,
        Text: 'Tất cả đáp án đều sai',
      },
    ],
  },
  {
    Id: 25906,
    Text: 'Để thực thi câu truy vấn "DELETE * FROM Table" trong PHP với biến kết nối là $db thì dùng cấu trúc nào dưới đây',
    Marks: 1,
    AnswerId: 107318,
    Answers: [
      {
        Id: 107315,
        Text: '$db-\u003equery(DELETE * FROM Table)',
      },
      {
        Id: 107316,
        Text: '$db-\u003eexecute(\u0027DELETE * FROM Table\u0027)',
      },
      {
        Id: 107317,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107318,
        Text: '$db-\u003eexec(\u0027DELETE * FROM Table\u0027)',
      },
    ],
  },
  {
    Id: 25907,
    Text: 'Để lấy giá trị của phần tử thứ 3 của mảng $a và lưu vào biến $b thì dùng cấu trúc nào sau đây',
    Marks: 1,
    AnswerId: 107322,
    Answers: [
      {
        Id: 107319,
        Text: '$b = $a[4]',
      },
      {
        Id: 107320,
        Text: '$b = $a[3]',
      },
      {
        Id: 107321,
        Text: '$b = $a(2)',
      },
      {
        Id: 107322,
        Text: 'Tất cả đáp án đều sai',
      },
    ],
  },
  {
    Id: 25908,
    Text: 'Để lấy dữ liệu từ tất cả các hàng của tập kết quả thì người ta dùng cách nào sau đây',
    Marks: 1,
    AnswerId: 107324,
    Answers: [
      {
        Id: 107323,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107324,
        Text: 'Sử dụng vòng lặp để duyệt từng hàng của tập kết quả',
      },
      {
        Id: 107325,
        Text: 'Gán tập kết quả cho một biến mới',
      },
      {
        Id: 107326,
        Text: 'Truy cập trực tiếp vào các phần tử của tập kết quả',
      },
    ],
  },
  {
    Id: 25909,
    Text: 'Để chuyển tiếp yêu cầu sang một URL khác người ta dùng hàm gì sau đây',
    Marks: 1,
    AnswerId: 107327,
    Answers: [
      {
        Id: 107327,
        Text: 'header',
      },
      {
        Id: 107328,
        Text: 'include',
      },
      {
        Id: 107329,
        Text: 'require_once',
      },
      {
        Id: 107330,
        Text: 'require',
      },
    ],
  },
  {
    Id: 25910,
    Text: 'Hãy cho biết kết quả output của đoạn chương trình sau:$a = 9; function abc(\u0026$b,$c){ $b=$b+$c; return $b; } abc($a,2); echo $a;',
    Marks: 1,
    AnswerId: 107331,
    Answers: [
      {
        Id: 107331,
        Text: '11',
      },
      {
        Id: 107332,
        Text: '-9',
      },
      {
        Id: 107333,
        Text: '10',
      },
      {
        Id: 107334,
        Text: '9',
      },
    ],
  },
  {
    Id: 25911,
    Text: 'Hãy cho biết kết quả output của đoạn chương trình sau:$a = 9; function abc(\u0026$b){ $b=$b++-2; return $b; } abc($a); echo $a;',
    Marks: 1,
    AnswerId: 107336,
    Answers: [
      {
        Id: 107335,
        Text: '9',
      },
      {
        Id: 107336,
        Text: '7',
      },
      {
        Id: 107337,
        Text: '8',
      },
      {
        Id: 107338,
        Text: '10',
      },
    ],
  },
  {
    Id: 25912,
    Text: '$a = 5; function add($b = 3){ global $a; return $a+$b; } $c = add(4); Giá trị cuối cùng của $c là bao nhiêu?',
    Marks: 1,
    AnswerId: 107339,
    Answers: [
      {
        Id: 107339,
        Text: '9',
      },
      {
        Id: 107340,
        Text: '8',
      },
      {
        Id: 107341,
        Text: 'NULL',
      },
      {
        Id: 107342,
        Text: '7',
      },
    ],
  },
  {
    Id: 25913,
    Text: 'Hãy cho biết kết quả output của đoạn chương trình sau:$a = 9; function abc(\u0026$b){ $b=-$b++; return $b; } abc($a); echo $a;',
    Marks: 1,
    AnswerId: 107346,
    Answers: [
      {
        Id: 107343,
        Text: '10',
      },
      {
        Id: 107344,
        Text: '-8',
      },
      {
        Id: 107345,
        Text: '9',
      },
      {
        Id: 107346,
        Text: '-9',
      },
    ],
  },
  {
    Id: 25914,
    Text: '$a = 5; function add($b = 3){ global $a; return $a+$b; } $c = add(5); Giá trị cuối cùng của $c là bao nhiêu?',
    Marks: 1,
    AnswerId: 107350,
    Answers: [
      {
        Id: 107347,
        Text: '9',
      },
      {
        Id: 107348,
        Text: 'NULL',
      },
      {
        Id: 107349,
        Text: '0',
      },
      {
        Id: 107350,
        Text: '10',
      },
    ],
  },
  {
    Id: 25915,
    Text: 'Hãy cho biết kết quả output của đoạn chương trình sau:$a = 10; function abc($b=5){ global $a;$b=5;return $a+$b; } $c = abc(4); echo $c;',
    Marks: 1,
    AnswerId: 107353,
    Answers: [
      {
        Id: 107351,
        Text: '14',
      },
      {
        Id: 107352,
        Text: '19',
      },
      {
        Id: 107353,
        Text: '15',
      },
      {
        Id: 107354,
        Text: '20',
      },
    ],
  },
  {
    Id: 25916,
    Text: '$a = 7; function add($b){ return $b++; } add($a); Giá trị cuối cùng của $a là bao nhiêu?',
    Marks: 1,
    AnswerId: 107358,
    Answers: [
      {
        Id: 107355,
        Text: '6',
      },
      {
        Id: 107356,
        Text: '9',
      },
      {
        Id: 107357,
        Text: '8',
      },
      {
        Id: 107358,
        Text: '7',
      },
    ],
  },
  {
    Id: 25917,
    Text: '$a = 5; function add($b = 3){ global $a; return $a+$b; } $c = add(); Giá trị cuối cùng của $c là bao nhiêu?',
    Marks: 1,
    AnswerId: 107359,
    Answers: [
      {
        Id: 107359,
        Text: '8',
      },
      {
        Id: 107360,
        Text: '1',
      },
      {
        Id: 107361,
        Text: '5',
      },
      {
        Id: 107362,
        Text: 'NULL',
      },
    ],
  },
  {
    Id: 25918,
    Text: '$a = 7; function add(){ $a++; } add($a);Giá trị cuối cùng của $a là bao nhiêu?',
    Marks: 1,
    AnswerId: 107364,
    Answers: [
      {
        Id: 107363,
        Text: '6',
      },
      {
        Id: 107364,
        Text: '7',
      },
      {
        Id: 107365,
        Text: '9',
      },
      {
        Id: 107366,
        Text: '8',
      },
    ],
  },
  {
    Id: 25919,
    Text: 'Hãy cho biết kết quả output của đoạn chương trình sau:$a = 10; function abc($b){ global $a;$b=5;return $a+$b; } $c = abc(4); echo $c;',
    Marks: 1,
    AnswerId: 107368,
    Answers: [
      {
        Id: 107367,
        Text: '19',
      },
      {
        Id: 107368,
        Text: '15',
      },
      {
        Id: 107369,
        Text: '14',
      },
      {
        Id: 107370,
        Text: '0',
      },
    ],
  },
  {
    Id: 25920,
    Text: 'class Number { public $a = 5; public function __construct($b) { $a = $b + 3; } } $num = new Number(3); echo $num-\u003ea; Kết quả màn hình hiện gì?',
    Marks: 1,
    AnswerId: 107371,
    Answers: [
      {
        Id: 107371,
        Text: '5',
      },
      {
        Id: 107372,
        Text: '8',
      },
      {
        Id: 107373,
        Text: '11',
      },
      {
        Id: 107374,
        Text: 'Chương trình báo lỗi',
      },
    ],
  },
  {
    Id: 25921,
    Text: 'Hãy cho biết output của đoạn chương trình sau:class Abc { public $a = 6; public function __construct($b) { $a = $b + 3; } } $num1 = new Abc(4); $num2 = $num1 +1; echo $num2-\u003ea',
    Marks: 1,
    AnswerId: 107377,
    Answers: [
      {
        Id: 107375,
        Text: '10',
      },
      {
        Id: 107376,
        Text: '6',
      },
      {
        Id: 107377,
        Text: 'Không hiển thị kết quả nào',
      },
      {
        Id: 107378,
        Text: '14',
      },
    ],
  },
  {
    Id: 25922,
    Text: 'Hãy cho biết output của đoạn chương trình sau:class Abc { public $a = 6; public function __construct($b) { $a = $b + 3; } } $num1 = new Abc(4); $num2 = clone $num1; echo $num2-\u003ea+1',
    Marks: 1,
    AnswerId: 107381,
    Answers: [
      {
        Id: 107379,
        Text: '6',
      },
      {
        Id: 107380,
        Text: '10',
      },
      {
        Id: 107381,
        Text: '7',
      },
      {
        Id: 107382,
        Text: 'Không hiển thị kết quả nào',
      },
    ],
  },
  {
    Id: 25923,
    Text: 'Hãy cho biết output của đoạn chương trình sau:class Abc { public $a = 6; public function __construct($b) { $a = $b + 3; } } $num1 = new Abc(4); $num2 = clone $num1; if($num1==$num2){ echo "Là thể hiện của cùng 1 lớp";} else { echo "Không phải là thể hiên ',
    Marks: 1,
    AnswerId: 107384,
    Answers: [
      {
        Id: 107383,
        Text: 'Chương trình báo lỗi',
      },
      {
        Id: 107384,
        Text: 'Là thể hiện của cùng 1 lớp',
      },
      {
        Id: 107385,
        Text: 'Không phải là thể hiên của cùng 1 lớp',
      },
      {
        Id: 107386,
        Text: 'Không hiển thị kết quả nào',
      },
    ],
  },
  {
    Id: 25924,
    Text: 'Hãy cho biết output của đoạn chương trình sau:class Abc { public $a = 6; public function __construct($b) { $a = $b + 3; } } $num1 = new Abc(4); $num2 = clone $num1; if($num1===$num2){ echo "Cùng tham chiếu đến 1 instance";} else { echo "Không cùng tham ch',
    Marks: 1,
    AnswerId: 107390,
    Answers: [
      {
        Id: 107387,
        Text: 'Không hiển thị kết quả nào',
      },
      {
        Id: 107388,
        Text: 'Cùng tham chiếu đến 1 instance',
      },
      {
        Id: 107389,
        Text: 'Chương trình báo lỗi',
      },
      {
        Id: 107390,
        Text: 'Không cùng tham chiếu đến 1 instance',
      },
    ],
  },
  {
    Id: 25925,
    Text: 'class Number { public $a = 5; public function __construct($b) { $a = $b + 3; } } $num1 = new Number(4); $num2 = $num1; $num2-\u003e$a + 2; echo $num1-\u003ea;Kết quả màn hình hiển thị gì?',
    Marks: 1,
    AnswerId: 107392,
    Answers: [
      {
        Id: 107391,
        Text: '9',
      },
      {
        Id: 107392,
        Text: 'Chương trình báo lỗi',
      },
      {
        Id: 107393,
        Text: '5',
      },
      {
        Id: 107394,
        Text: '7',
      },
    ],
  },
  {
    Id: 25926,
    Text: 'Hãy cho biết output của đoạn chương trình sau:class Abc { public $a = 6; public function __construct($b) { $a = $b + 3; } } $num1 = new Abc(4); $num2 = $num1; echo $num2-\u003ea',
    Marks: 1,
    AnswerId: 107398,
    Answers: [
      {
        Id: 107395,
        Text: '13',
      },
      {
        Id: 107396,
        Text: '9',
      },
      {
        Id: 107397,
        Text: '5',
      },
      {
        Id: 107398,
        Text: '6',
      },
    ],
  },
  {
    Id: 25927,
    Text: 'class Number { public $a = 5; public function __construct($b) { $a = $b + 3; } } $num = new Number(); echo $num-\u003ea; Kết quả màn hình hiển thị gì?',
    Marks: 1,
    AnswerId: 107399,
    Answers: [
      {
        Id: 107399,
        Text: 'Chương trình báo lỗi',
      },
      {
        Id: 107400,
        Text: '8',
      },
      {
        Id: 107401,
        Text: '11',
      },
      {
        Id: 107402,
        Text: '5',
      },
    ],
  },
  {
    Id: 25928,
    Text: 'class Number { public $a = 5; public function __construct($b) { $a = $b + 3; } } $num1 = new Number(4); $num2 = clone $num1; $num2-\u003e$a + 2; echo $num1-\u003ea;Kết quả màn hình hiển thị gì?',
    Marks: 1,
    AnswerId: 107404,
    Answers: [
      {
        Id: 107403,
        Text: '5',
      },
      {
        Id: 107404,
        Text: 'Chương trình báo lỗi',
      },
      {
        Id: 107405,
        Text: '9',
      },
      {
        Id: 107406,
        Text: '7',
      },
    ],
  },
  {
    Id: 25929,
    Text: 'Hãy cho biết output của đoạn chương trình sau:class Abc { public $a = 6; public function __construct($b) { $a = $b + 3; } } $num1 = new Abc(4); $num2 = clone $num1; echo $num2-\u003ea',
    Marks: 1,
    AnswerId: 107409,
    Answers: [
      {
        Id: 107407,
        Text: '14',
      },
      {
        Id: 107408,
        Text: 'Không hiển thị kết quả nào',
      },
      {
        Id: 107409,
        Text: '6',
      },
      {
        Id: 107410,
        Text: '10',
      },
    ],
  },
  {
    Id: 25930,
    Text: '//Giả sử hiện tại là 1:04:06 sáng ngày 18/02/2012$now = strtotime(\u0027-2 hour\u0027);$date = getdate($now);$a = $date[\u0027day\u0027];echo $a;Kết quả hiện ra màn hình là gì',
    Marks: 1,
    AnswerId: 107412,
    Answers: [
      {
        Id: 107411,
        Text: '23',
      },
      {
        Id: 107412,
        Text: '17',
      },
      {
        Id: 107413,
        Text: '18/2/2012',
      },
      {
        Id: 107414,
        Text: 'Tất cả đáp án đều sai',
      },
    ],
  },
  {
    Id: 25931,
    Text: '$a = 5;$mess = "\\xa9Gia tri cua a la: $a";echo $mess;Kết quả hiện lên màn hình là gì',
    Marks: 1,
    AnswerId: 107415,
    Answers: [
      {
        Id: 107415,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107416,
        Text: '\\xa9Gia tri cua a la: 5',
      },
      {
        Id: 107417,
        Text: '©5',
      },
      {
        Id: 107418,
        Text: '\\xa9Gia tri cua a la: $a',
      },
    ],
  },
  {
    Id: 25932,
    Text: '$a = 5;$mess = "Gia tri cua a la: $a";echo $mess;Kết quả hiện lên màn hình là gì',
    Marks: 1,
    AnswerId: 107419,
    Answers: [
      {
        Id: 107419,
        Text: 'Gia tri cua a la: 5',
      },
      {
        Id: 107420,
        Text: 'Gia tri cua a la: $a',
      },
      {
        Id: 107421,
        Text: '5',
      },
      {
        Id: 107422,
        Text: 'Tất cả đáp án đều sai',
      },
    ],
  },
  {
    Id: 25933,
    Text: '$m = array(\u0027a\u0027, \u0027b\u0027, \u0027c\u0027, \u0027d\u0027);echo array_shift($m); Kết quả hiện lên màn hình là gì',
    Marks: 1,
    AnswerId: 107425,
    Answers: [
      {
        Id: 107423,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107424,
        Text: 'd',
      },
      {
        Id: 107425,
        Text: 'a',
      },
      {
        Id: 107426,
        Text: 'NULL',
      },
    ],
  },
  {
    Id: 25934,
    Text: '$name = \u0027a|b|c|d\u0027;$name1 = explode(\u0027|\u0027, $name);$name2 = implode(\u0027 \u0027, $name1);echo $name2;Kết quả hiện lên màn hình là gì',
    Marks: 1,
    AnswerId: 107427,
    Answers: [
      {
        Id: 107427,
        Text: 'a b c d',
      },
      {
        Id: 107428,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107429,
        Text: 'a|b|c|d',
      },
      {
        Id: 107430,
        Text: 'abcd',
      },
    ],
  },
  {
    Id: 25935,
    Text: '$now = mktime(1, 2, 3, 4, 5, 2012);echo getdate($now)[\u0027hour\u0027];Kết quả hiện ra màn hình là gì',
    Marks: 1,
    AnswerId: 107432,
    Answers: [
      {
        Id: 107431,
        Text: 'NULL',
      },
      {
        Id: 107432,
        Text: '1',
      },
      {
        Id: 107433,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107434,
        Text: '4',
      },
    ],
  },
  {
    Id: 25936,
    Text: '$a = 5;$mess = \u0027Gia tri cua a la: $a\u0027;echo $mess;Kết quả hiện lên màn hình là gì',
    Marks: 1,
    AnswerId: 107436,
    Answers: [
      {
        Id: 107435,
        Text: 'Gia tri cua a la: 5',
      },
      {
        Id: 107436,
        Text: 'Gia tri cua a la: $a',
      },
      {
        Id: 107437,
        Text: '5',
      },
      {
        Id: 107438,
        Text: 'Tất cả đáp án đều sai',
      },
    ],
  },
  {
    Id: 25937,
    Text: '$a = 5;$mess = "Gia tri cua a la: $a";echo substr($mess, 0, 3);Kết quả hiện lên màn hình là gì',
    Marks: 1,
    AnswerId: 107442,
    Answers: [
      {
        Id: 107439,
        Text: 'Gia tri cua a la: 5',
      },
      {
        Id: 107440,
        Text: 'la: 5',
      },
      {
        Id: 107441,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107442,
        Text: 'Gia',
      },
    ],
  },
  {
    Id: 25938,
    Text: '$name = \u0027a|b|c|d\u0027;$name1 = explode(\u0027|\u0027, $name);$name2 = implode(\u0027 \u0027, $name);echo $name2;Kết quả hiện lên màn hình là gì',
    Marks: 1,
    AnswerId: 107443,
    Answers: [
      {
        Id: 107443,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107444,
        Text: 'abcd',
      },
      {
        Id: 107445,
        Text: 'a b c d',
      },
      {
        Id: 107446,
        Text: 'a|b|c|d',
      },
    ],
  },
  {
    Id: 25939,
    Text: '$m = array(\u0027a\u0027=\u003e\u00271\u0027, \u0027b\u0027=\u003e\u00272\u0027, \u0027c\u0027=\u003e\u00273\u0027, \u0027d\u0027=\u003e\u00274\u0027);echo array_pop($m);Kết quả hiện lên màn hình là gì',
    Marks: 1,
    AnswerId: 107449,
    Answers: [
      {
        Id: 107447,
        Text: 'a',
      },
      {
        Id: 107448,
        Text: 'd',
      },
      {
        Id: 107449,
        Text: '4',
      },
      {
        Id: 107450,
        Text: '1',
      },
    ],
  },
  {
    Id: 25940,
    Text: '\u003cselect name=\u0027a[]\u0027 multiple=\u0027multiple\u0027\u003e \u003coption value=\u0027b\u0027\u003e1\u003c/option\u003e \u003coption value=\u0027c\u0027\u003e2\u003c/option\u003e\u003c/select\u003e Biết rằng người dùng đã chọn lựa chọn thứ 1. Hỏi dòng mã echo $POST[\u0027a\u0027][0] cho kết quả là gì (form có method là POST)',
    Marks: 1,
    AnswerId: 107454,
    Answers: [
      {
        Id: 107451,
        Text: '0',
      },
      {
        Id: 107452,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107453,
        Text: '2',
      },
      {
        Id: 107454,
        Text: 'b',
      },
    ],
  },
  {
    Id: 25941,
    Text: '\u003ctextarea name=\u0027a\u0027 rows=\u00273\u0027 cols=\u002750\u0027\u003eabc def\u003c/textarea\u003e Để lấy giá trị của đối tượng textarea và gán cho biến $a (form method là POST) thì cần dùng cú pháp nào sau đây',
    Marks: 1,
    AnswerId: 107456,
    Answers: [
      {
        Id: 107455,
        Text: '$a = getvalue(POST[\u0027a\u0027])',
      },
      {
        Id: 107456,
        Text: '$a = $_POST[\u0027a\u0027]',
      },
      {
        Id: 107457,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107458,
        Text: '$a = getvalue(POST[\u0027a\u0027], 3, 50)',
      },
    ],
  },
  {
    Id: 25942,
    Text: 'Giả sử đối tượng textarea có name=\u0027a\u0027 và người dùng nhập vào đó đoạn văn bản sau:abcdefHỏi sau khi người dùng submit (POST) thì dòng lệnh echo $_POST[\u0027a\u0027] hiển thị kết quả là gì',
    Marks: 1,
    AnswerId: 107459,
    Answers: [
      {
        Id: 107459,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107460,
        Text: 'abc',
      },
      {
        Id: 107461,
        Text: 'abc def',
      },
      {
        Id: 107462,
        Text: 'abcdef',
      },
    ],
  },
  {
    Id: 25943,
    Text: 'Để định dạng các ký tự đặc biệt cần dùng hàm nào',
    Marks: 1,
    AnswerId: 107466,
    Answers: [
      {
        Id: 107463,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107464,
        Text: 'nl2br',
      },
      {
        Id: 107465,
        Text: 'print',
      },
      {
        Id: 107466,
        Text: 'htmlspecialchars',
      },
    ],
  },
  {
    Id: 25944,
    Text: '"Giả sử đối tượng textarea có name=\u0027a\u0027 và người dùng nhập vào đó đoạn văn bản sau: abc\u0026nbsp;def Hỏi sau khi người dùng submit (POST) thì dòng lệnh echo $_POST[\u0027a\u0027] hiển thị kết quả là gì?',
    Marks: 1,
    AnswerId: 107467,
    Answers: [
      {
        Id: 107467,
        Text: 'abc def',
      },
      {
        Id: 107468,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107469,
        Text: 'abc',
      },
      {
        Id: 107470,
        Text: 'Hiển thị lỗi',
      },
    ],
  },
  {
    Id: 25945,
    Text: 'Cú pháp nào sau đây là sai',
    Marks: 1,
    AnswerId: 107473,
    Answers: [
      {
        Id: 107471,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107472,
        Text: 'print (\u0027abcdef\u0027)',
      },
      {
        Id: 107473,
        Text: 'print \u0027abc\u0027,\u0027def\u0027',
      },
      {
        Id: 107474,
        Text: 'print \u0027abcdef\u0027',
      },
    ],
  },
  {
    Id: 25946,
    Text: '\u003cselect name=\u0027a[]\u0027 multiple=\u0027multiple\u0027\u003e \u003coption value=\u0027b\u0027\u003e1\u003c/option\u003e \u003coption value=\u0027c\u0027\u003e2\u003c/option\u003e\u003c/select\u003e Biết rằng người dùng đã chọn lựa chọn thứ 2. Hỏi dòng mã echo $_POST[\u0027a\u0027] cho kết quả là gì (form có method là POST)',
    Marks: 1,
    AnswerId: 107475,
    Answers: [
      {
        Id: 107475,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107476,
        Text: '2',
      },
      {
        Id: 107477,
        Text: 'c',
      },
      {
        Id: 107478,
        Text: 'a',
      },
    ],
  },
  {
    Id: 25947,
    Text: '\u003cinput name=\u0027a\u0027 type=\u0027radio\u0027 value=\u0027visa\u0027\u003e \u003cinput name=\u0027a\u0027 type=\u0027radio\u0027 value=\u0027mastercard\u0027\u003e Để lấy dữ liệu của nhóm radio button trên lưu vào biến $b (gửi bằng phương thức POST)thì dùng cấu trúc nào sau đây?',
    Marks: 1,
    AnswerId: 107481,
    Answers: [
      {
        Id: 107479,
        Text: '$b = POST[\u0027visa\u0027]',
      },
      {
        Id: 107480,
        Text: '$b = \u0027a\u0027',
      },
      {
        Id: 107481,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107482,
        Text: '$b = POST[\u0027mastercard\u0027]',
      },
    ],
  },
  {
    Id: 25948,
    Text: 'Để người dùng nhập dữ liệu vào form dưới dạng một dòng text được mã hóa không cho nhìn thì nên dùng kiểu dữ liệu nào cho thẻ input',
    Marks: 1,
    AnswerId: 107486,
    Answers: [
      {
        Id: 107483,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107484,
        Text: 'hidden',
      },
      {
        Id: 107485,
        Text: 'text',
      },
      {
        Id: 107486,
        Text: 'password',
      },
    ],
  },
  {
    Id: 25949,
    Text: 'Cú pháp nào sau đây là đúng',
    Marks: 1,
    AnswerId: 107487,
    Answers: [
      {
        Id: 107487,
        Text: '($a \u003e 1)? echo (\u0027a\u0027) : echo (\u0027b\u0027)',
      },
      {
        Id: 107488,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107489,
        Text: '($a \u003e 1)? print (\u0027a\u0027) : print (\u0027b\u0027)',
      },
      {
        Id: 107490,
        Text: '($a \u003e 1)? echo \u0027a\u0027 : print \u0027b\u0027',
      },
    ],
  },
  {
    Id: 25950,
    Text: 'Khi máy khách gửi yêu cầu HTTP tới máy chủ, nếu yêu cầu đó không bao gồm session ID thì',
    Marks: 1,
    AnswerId: 107491,
    Answers: [
      {
        Id: 107491,
        Text: 'Máy chủ sẽ tạo session ID',
      },
      {
        Id: 107492,
        Text: 'Máy khách sẽ tạo session ID rồi gửi lại yêu cầu',
      },
      {
        Id: 107493,
        Text: 'Máy khách sẽ gửi yêu cầu khác',
      },
      {
        Id: 107494,
        Text: 'Tất cả đáp án đều sai',
      },
    ],
  },
  {
    Id: 25951,
    Text: 'Để xóa tất cả biến khỏi session thì thực hiện thao tác nào sau đây',
    Marks: 1,
    AnswerId: 107497,
    Answers: [
      {
        Id: 107495,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107496,
        Text: 'unset($_SESSION)',
      },
      {
        Id: 107497,
        Text: '$_SESSION = array()',
      },
      {
        Id: 107498,
        Text: 'delete($_SESSION)',
      },
    ],
  },
  {
    Id: 25952,
    Text: 'Thao tác nào dưới đây không thực hiện được bằng PHP',
    Marks: 1,
    AnswerId: 107499,
    Answers: [
      {
        Id: 107499,
        Text: 'Sinh session ID mới',
      },
      {
        Id: 107500,
        Text: 'Lấy session ID',
      },
      {
        Id: 107501,
        Text: 'Lấy dữ liệu cho session ID',
      },
      {
        Id: 107502,
        Text: 'Tất cả đáp án đều sai',
      },
    ],
  },
  {
    Id: 25953,
    Text: 'Để xóa một biến khỏi session thì dùng hàm gì',
    Marks: 1,
    AnswerId: 107503,
    Answers: [
      {
        Id: 107503,
        Text: 'unset',
      },
      {
        Id: 107504,
        Text: 'remove',
      },
      {
        Id: 107505,
        Text: 'delete',
      },
      {
        Id: 107506,
        Text: 'Tất cả đáp án đều sai',
      },
    ],
  },
  {
    Id: 25954,
    Text: 'Vị trí của hàm session_set_cookie_params là',
    Marks: 1,
    AnswerId: 107507,
    Answers: [
      {
        Id: 107507,
        Text: 'Trước hàm session_start',
      },
      {
        Id: 107508,
        Text: 'Sau hàm session_start',
      },
      {
        Id: 107509,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107510,
        Text: 'Sau hàm session_end',
      },
    ],
  },
  {
    Id: 25955,
    Text: 'Để kiểm tra một phần tử có trong mảng $_SESSION hay không thì dùng hàm gì',
    Marks: 1,
    AnswerId: 107511,
    Answers: [
      {
        Id: 107511,
        Text: 'isset',
      },
      {
        Id: 107512,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107513,
        Text: 'exist',
      },
      {
        Id: 107514,
        Text: 'exists',
      },
    ],
  },
  {
    Id: 25956,
    Text: 'Trong một session, ứng dụng PHP có thể lưu và lấy dữ liệu từ biến nào dưới đây',
    Marks: 1,
    AnswerId: 107515,
    Answers: [
      {
        Id: 107515,
        Text: '$_SESSION',
      },
      {
        Id: 107516,
        Text: '$_SESSIONS',
      },
      {
        Id: 107517,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107518,
        Text: '$_COOKIE',
      },
    ],
  },
  {
    Id: 25957,
    Text: 'Hàm session_write_close có tác dụng gì',
    Marks: 1,
    AnswerId: 107519,
    Answers: [
      {
        Id: 107519,
        Text: 'Buộc PHP lưu dữ liệu của session',
      },
      {
        Id: 107520,
        Text: 'Chuyển hướng session',
      },
      {
        Id: 107521,
        Text: 'Buộc PHP không cho ghi dữ liệu lên session',
      },
      {
        Id: 107522,
        Text: 'Tất cả đáp án đều sai',
      },
    ],
  },
  {
    Id: 25958,
    Text: 'Để xóa một cookie cần làm thao tác gì',
    Marks: 1,
    AnswerId: 107526,
    Answers: [
      {
        Id: 107523,
        Text: 'Xóa biến $_COOKIE',
      },
      {
        Id: 107524,
        Text: 'Dùng hàm remove_cookie',
      },
      {
        Id: 107525,
        Text: 'Dùng hàm delete_cookie',
      },
      {
        Id: 107526,
        Text: 'Tất cả đáp án đều sai',
      },
    ],
  },
  {
    Id: 25959,
    Text: 'Để lấy session ID thì dùng hàm gì',
    Marks: 1,
    AnswerId: 107529,
    Answers: [
      {
        Id: 107527,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107528,
        Text: 'get_session_id',
      },
      {
        Id: 107529,
        Text: 'session_id',
      },
      {
        Id: 107530,
        Text: 'get_sessionID',
      },
    ],
  },
  {
    Id: 25960,
    Text: 'Phát biểu nào sau đây đúng về biến trong PHP',
    Marks: 1,
    AnswerId: 107531,
    Answers: [
      {
        Id: 107531,
        Text: 'Phân biệt chữ hoa và chữ thường',
      },
      {
        Id: 107532,
        Text: 'Cần khai báo loại biến',
      },
      {
        Id: 107533,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107534,
        Text: 'Có thể chứa các ký tự đặc biệt',
      },
    ],
  },
  {
    Id: 25961,
    Text: 'Chỉ mục số của phần tử thứ ba của mảng trong PHP là',
    Marks: 1,
    AnswerId: 107537,
    Answers: [
      {
        Id: 107535,
        Text: '0',
      },
      {
        Id: 107536,
        Text: '4',
      },
      {
        Id: 107537,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107538,
        Text: '3',
      },
    ],
  },
  {
    Id: 25962,
    Text: 'Để tránh trường hợp trùng tên hàm cần sử dụng',
    Marks: 1,
    AnswerId: 107541,
    Answers: [
      {
        Id: 107539,
        Text: 'include_path',
      },
      {
        Id: 107540,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107541,
        Text: 'namespace',
      },
      {
        Id: 107542,
        Text: 'project',
      },
    ],
  },
  {
    Id: 25963,
    Text: 'Để một biến bên ngoài hàm có hiệu lực bên trong hàm thì sử dụng từ khóa gì',
    Marks: 1,
    AnswerId: 107544,
    Answers: [
      {
        Id: 107543,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107544,
        Text: 'global',
      },
      {
        Id: 107545,
        Text: 'local',
      },
      {
        Id: 107546,
        Text: 'available',
      },
    ],
  },
  {
    Id: 25964,
    Text: 'Trong mô hình MVC người ta thường dùng cấu trúc điều kiện nào',
    Marks: 1,
    AnswerId: 107550,
    Answers: [
      {
        Id: 107547,
        Text: 'if',
      },
      {
        Id: 107548,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107549,
        Text: 'for',
      },
      {
        Id: 107550,
        Text: 'switch case',
      },
    ],
  },
  {
    Id: 25965,
    Text: 'Khi đang dò lỗi trong NetBeans nếu nhấn nút Continue thì ứng dụng sẽ',
    Marks: 1,
    AnswerId: 107551,
    Answers: [
      {
        Id: 107551,
        Text: 'Chạy tới điểm dừng kế tiếp',
      },
      {
        Id: 107552,
        Text: 'Loại bỏ điểm dừng',
      },
      {
        Id: 107553,
        Text: 'Thực hiện biểu thức kế tiếp',
      },
      {
        Id: 107554,
        Text: 'Bỏ qua biểu thức hiện tại',
      },
    ],
  },
  {
    Id: 25966,
    Text: 'Để truy cập các đối số của một hàm cần sử dụng',
    Marks: 1,
    AnswerId: 107556,
    Answers: [
      {
        Id: 107555,
        Text: '$_AGRUMENTS',
      },
      {
        Id: 107556,
        Text: 'Hàm func_get_args',
      },
      {
        Id: 107557,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107558,
        Text: '$ARGS',
      },
    ],
  },
  {
    Id: 25967,
    Text: 'Trong PHP, để kết nối với MySQL cần làm thao tác gì',
    Marks: 1,
    AnswerId: 107562,
    Answers: [
      {
        Id: 107559,
        Text: 'Gọi một truy vấn tới cơ sở dữ liệu',
      },
      {
        Id: 107560,
        Text: 'Dùng hàm connect',
      },
      {
        Id: 107561,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107562,
        Text: 'Tạo đối tượng PDO',
      },
    ],
  },
  {
    Id: 25968,
    Text: 'Để thiết lập include path cho một website cần sử dụng hàm nào',
    Marks: 1,
    AnswerId: 107563,
    Answers: [
      {
        Id: 107563,
        Text: 'set_include_path',
      },
      {
        Id: 107564,
        Text: 'set_includepath',
      },
      {
        Id: 107565,
        Text: 'Tất cả đáp án đều sai',
      },
      {
        Id: 107566,
        Text: 'include_path',
      },
    ],
  },
  {
    Id: 25969,
    Text: 'Khi máy chủ nhận được yêu cầu HTTP về một trang PHP thì nó sẽ gọi đến',
    Marks: 1,
    AnswerId: 107569,
    Answers: [
      {
        Id: 107567,
        Text: 'Trình duyệt',
      },
      {
        Id: 107568,
        Text: 'Máy chủ cơ sở dữ liệu',
      },
      {
        Id: 107569,
        Text: 'Bộ dịch PHP',
      },
      {
        Id: 107570,
        Text: 'Tất cả đáp án đều sai',
      },
    ],
  },
]
export const PMAG = [
  {
    Id: 24791,
    Text: 'Phẩm chất nào không nằm trong 7 phẩm chất quan trọng mà Product Owner cần có?',
    Marks: 1,
    AnswerId: 102847,
    Answers: [
      {
        Id: 102847,
        Text: 'Có kỹ năng của một Tester',
      },
      {
        Id: 102848,
        Text: 'Có tầm nhìn và kiến thức rõ ràng về sản phẩm',
      },
      {
        Id: 102849,
        Text: 'Biết cách quản lý thành công kỳ vọng của các bên liên quan và đôi khi là mâu thuẫn về độ ưu tiên',
      },
      {
        Id: 102850,
        Text: 'Biết cách thu thập yêu cầu để chuyển tầm nhìn sản phẩm thành một Product Backlog tốt',
      },
    ],
  },
  {
    Id: 24792,
    Text: 'Cách tiếp cận tầm nhìn sản phẩm sử dụng kỹ thuật gì?',
    Marks: 1,
    AnswerId: 102855,
    Answers: [
      {
        Id: 102851,
        Text: '5X',
      },
      {
        Id: 102852,
        Text: '5S',
      },
      {
        Id: 102853,
        Text: '5A',
      },
      {
        Id: 102854,
        Text: '5Y',
      },
      {
        Id: 102855,
        Text: '5W',
      },
    ],
  },
  {
    Id: 24793,
    Text: 'Phương án nào không phải lợi ích khi xác định mục tiêu của Sprint?',
    Marks: 1,
    AnswerId: 102856,
    Answers: [
      {
        Id: 102856,
        Text: 'Hỗ trợ giao tiếp giữa các phòng ban trong công ty',
      },
      {
        Id: 102857,
        Text: 'Nhận thông tin phản hồi',
      },
      {
        Id: 102858,
        Text: 'Tạo sự tập trung và hỗ trợ nhóm tốt hơn từ khách hàng',
      },
      {
        Id: 102859,
        Text: 'Thuận tiện khi phân tích phản hồi',
      },
    ],
  },
  {
    Id: 24794,
    Text: 'Phương án nào không phải ưu điểm của phương pháp lá bài lập kế hoạch ?',
    Marks: 1,
    AnswerId: 102863,
    Answers: [
      {
        Id: 102860,
        Text: 'Thu được nhiều ý kiến đóng góp của các chuyên gia',
      },
      {
        Id: 102861,
        Text: 'Các nghiên cứu chỉ ra ước lượng trung bình và thảo luận nhóm sẽ cho kết quả tốt hơn',
      },
      {
        Id: 102862,
        Text: 'Hội thoại giữa các thành viên đưa đến kết quả ước lượng chính xác hơn',
      },
      {
        Id: 102863,
        Text: 'Thu được ý kiến đóng góp của khách hàng',
      },
    ],
  },
  {
    Id: 24795,
    Text: 'Sự khác nhau giữa mô hình truyền thống (thác nước) và mô hình tiếp cận tăng trưởng (Scrum) là gì?',
    Marks: 1,
    AnswerId: 102867,
    Answers: [
      {
        Id: 102864,
        Text: 'Khả năng thành công dự án khi áp dụng mô hình thác nước là cao và khả năng thành công dự án khi áp dụng mô hình Scrum là thấp',
      },
      {
        Id: 102865,
        Text: 'Trong mô hình truyền thống (thác nước), quá trình phát triển được chia thành các Sprint. Trong mô hình Scrum, quá trình phát triển không được chia thành các Sprint',
      },
      {
        Id: 102866,
        Text: 'Scrum Master là một vị trí quan trọng trong dự án theo mô hình thác nước. Trong mô hình Scrum không có vị trí Scrum Master',
      },
      {
        Id: 102867,
        Text: 'Trong mô hình thác nước, sản phẩm của khách hàng được xác định ở giai đoạn cuối. Trong mô hình Scrum, sản phẩm được chuyển giao cho khách hàng theo từng Sprint',
      },
    ],
  },
  {
    Id: 24796,
    Text: 'Đối với tổ chức cơ sở hạ tầng kiểm thử, chúng ta nên gặp gỡ thành viên của nhóm kỹ thuật cài đặt môi trường kiểm thử tạm thời ở giai đoạn nào?',
    Marks: 1,
    AnswerId: 102868,
    Answers: [
      {
        Id: 102868,
        Text: 'Ngay từ đầu dự án khi họ cài đặt môi trường kiểm thử tạm thời',
      },
      {
        Id: 102869,
        Text: 'Kết thúc Sprint',
      },
      {
        Id: 102870,
        Text: 'Bàn giao sản phẩm',
      },
      {
        Id: 102871,
        Text: 'Bắt đầu Sprint mới',
      },
    ],
  },
  {
    Id: 24797,
    Text: 'Định nghĩa nhóm Scrum?',
    Marks: 1,
    AnswerId: 102872,
    Answers: [
      {
        Id: 102872,
        Text: 'Là một nhóm liên chức năng gồm Product Owner, Scrum Master và Development Team (Nhóm Phát triển).',
      },
      {
        Id: 102873,
        Text: 'Là một nhóm liên chức năng gồm Development Team (Nhóm Phát triển).',
      },
      {
        Id: 102874,
        Text: 'Là một nhóm liên chức năng gồm Product Owner và Development Team (Nhóm Phát triển).',
      },
      {
        Id: 102875,
        Text: 'Là một nhóm liên chức năng gồm QA, Scrum Master và Development Team (Nhóm Phát triển).',
      },
    ],
  },
  {
    Id: 24798,
    Text: 'Các nhóm Scrum nên có tối đa bao nhiêu thành viên?',
    Marks: 1,
    AnswerId: 102876,
    Answers: [
      {
        Id: 102876,
        Text: '7',
      },
      {
        Id: 102877,
        Text: '50',
      },
      {
        Id: 102878,
        Text: '70',
      },
      {
        Id: 102879,
        Text: '1000',
      },
      {
        Id: 102880,
        Text: '100',
      },
    ],
  },
  {
    Id: 24799,
    Text: 'Chọn phương án không phải danh sách công việc mặc định được trello tạo sẵn?',
    Marks: 1,
    AnswerId: 102883,
    Answers: [
      {
        Id: 102881,
        Text: 'Doing',
      },
      {
        Id: 102882,
        Text: 'Done',
      },
      {
        Id: 102883,
        Text: 'In Progress',
      },
      {
        Id: 102884,
        Text: 'Todo',
      },
    ],
  },
  {
    Id: 24800,
    Text: 'Để xác định tầm nhìn kiến trúc, nhóm phải xem lại tầm nhìn và mục tiêu của sản phẩm để xác định các dữ liệu kinh doanh chính?',
    Marks: 1,
    AnswerId: 102886,
    Answers: [
      {
        Id: 102885,
        Text: 'Sai',
      },
      {
        Id: 102886,
        Text: 'Đúng',
      },
    ],
  },
  {
    Id: 24801,
    Text: 'Mục tiêu của buổi họp cải tiến Sprint?',
    Marks: 1,
    AnswerId: 102890,
    Answers: [
      {
        Id: 102887,
        Text: 'Product Owner sẽ tổ chức cho nhóm thực hiện công việc khảo sát lại toàn bộ quy trình làm việc của Sprint vừa qua để tìm ra các cải tiến trong Sprint tới',
      },
      {
        Id: 102888,
        Text: 'QA sẽ tổ chức cho nhóm thực hiện công việc khảo sát lại toàn bộ quy trình làm việc của Sprint vừa qua để tìm ra các cải tiến trong Sprint tới',
      },
      {
        Id: 102889,
        Text: 'Tester sẽ tổ chức cho nhóm thực hiện công việc khảo sát lại toàn bộ quy trình làm việc của Sprint vừa qua để tìm ra các cải tiến trong Sprint tới',
      },
      {
        Id: 102890,
        Text: 'ScrumMaster sẽ tổ chức cho nhóm thực hiện công việc khảo sát lại toàn bộ quy trình làm việc của Sprint vừa qua để tìm ra các cải tiến trong Sprint tới',
      },
    ],
  },
  {
    Id: 24802,
    Text: 'Mục tiêu của Sprint là gì?',
    Marks: 1,
    AnswerId: 102891,
    Answers: [
      {
        Id: 102891,
        Text: 'Là một bộ các yêu cầu gắn kết khiến nhóm phát triển làm việc cùng nhau thay vì phân rã mỗi người một việc',
      },
      {
        Id: 102892,
        Text: 'Là một bộ yêu cầu mà Product Master phải làm trong Sprint',
      },
      {
        Id: 102893,
        Text: 'Là một bộ yêu cầu mà Scrum Master phải làm trong Sprint',
      },
      {
        Id: 102894,
        Text: 'Là một bộ yêu cầu mà Tester phải làm trong Sprint',
      },
    ],
  },
  {
    Id: 24803,
    Text: 'Phương án nào không phải nguyên tắc phía sau tuyên ngôn Agile?',
    Marks: 1,
    AnswerId: 102896,
    Answers: [
      {
        Id: 102895,
        Text: 'Thường xuyên chuyển giao phần mềm chạy tốt tới khách hàng, từ vài tuần đến vài tháng, ưu tiên cho các khoảng thời gian ngắn hơn',
      },
      {
        Id: 102896,
        Text: 'Nhóm phát triển sẽ thường xuyên tập trung vào phân tích thiết kế, làm xong hết các chức năng của phần mềm rồi demo khách hàng',
      },
      {
        Id: 102897,
        Text: 'Ưu tiên cao nhất của Scrum là thỏa mãn khách hàng thông qua việc chuyển giao sớm và liên tục các phần mềm có giá trị',
      },
      {
        Id: 102898,
        Text: 'Phần mềm chạy tốt là thước đo chính của tiến độ',
      },
    ],
  },
  {
    Id: 24804,
    Text: 'Vai trò nào không có trong Scrum?',
    Marks: 1,
    AnswerId: 102901,
    Answers: [
      {
        Id: 102899,
        Text: 'Nhóm phát triển',
      },
      {
        Id: 102900,
        Text: 'Product Owner',
      },
      {
        Id: 102901,
        Text: 'Project Leader',
      },
      {
        Id: 102902,
        Text: 'Scrum Master',
      },
    ],
  },
  {
    Id: 24805,
    Text: 'Số lần thử ước lượng tối đa trong phương pháp bộ bài lập kế hoạch?',
    Marks: 1,
    AnswerId: 102905,
    Answers: [
      {
        Id: 102903,
        Text: '3',
      },
      {
        Id: 102904,
        Text: '4',
      },
      {
        Id: 102905,
        Text: 'Không có số lần thử ước lượng tối đa, sẽ thử ước lượng đến khi các thành viên thống nhất được về ước lượng đối với User Story',
      },
      {
        Id: 102906,
        Text: '1',
      },
      {
        Id: 102907,
        Text: '2',
      },
    ],
  },
  {
    Id: 24806,
    Text: 'Trong Scrum, cuộc họp giữa các thành viên của nhóm diễn ra theo thời gian như thế nào?',
    Marks: 1,
    AnswerId: 102910,
    Answers: [
      {
        Id: 102908,
        Text: 'Tuần họp 2 lần',
      },
      {
        Id: 102909,
        Text: 'Ngày họp 2 lần',
      },
      {
        Id: 102910,
        Text: 'Hàng ngày',
      },
      {
        Id: 102911,
        Text: 'Hàng tháng',
      },
    ],
  },
  {
    Id: 24807,
    Text: 'Vai trò gì đại diện cho lợi ích của tất cả mọi người có quyền lợi trong dự án và sản phẩm được tạo ra sau dự án?',
    Marks: 1,
    AnswerId: 102913,
    Answers: [
      {
        Id: 102912,
        Text: 'Tester',
      },
      {
        Id: 102913,
        Text: 'Product Owner',
      },
      {
        Id: 102914,
        Text: 'QA',
      },
      {
        Id: 102915,
        Text: 'Scrum Master',
      },
    ],
  },
  {
    Id: 24808,
    Text: 'Vai trò nào trong Scrum đóng vai trò như là khách hàng và sẽ thay khách hàng đưa ra yêu cầu phần mềm đối với nhóm Scrum?',
    Marks: 1,
    AnswerId: 102916,
    Answers: [
      {
        Id: 102916,
        Text: 'Product Owner',
      },
      {
        Id: 102917,
        Text: 'Tester',
      },
      {
        Id: 102918,
        Text: 'Scrum Master',
      },
      {
        Id: 102919,
        Text: 'QA',
      },
    ],
  },
  {
    Id: 24809,
    Text: 'Yếu tố nào không được dùng để ước lượng user story?',
    Marks: 1,
    AnswerId: 102920,
    Answers: [
      {
        Id: 102920,
        Text: 'Quan hệ giữa Tester và khách hàng',
      },
      {
        Id: 102921,
        Text: 'Quy tắc nghiệp vụ',
      },
      {
        Id: 102922,
        Text: 'Số thực thể tham gia vào story',
      },
      {
        Id: 102923,
        Text: 'Dữ liệu được thêm mới, đọc, sửa, xóa',
      },
    ],
  },
  {
    Id: 24810,
    Text: 'Kỹ thuật nào được sử dụng để xác định yêu cầu cho Product Backlog?',
    Marks: 1,
    AnswerId: 102925,
    Answers: [
      {
        Id: 102924,
        Text: 'Tìm đường đi ngắn nhất',
      },
      {
        Id: 102925,
        Text: 'Cây và rừng',
      },
      {
        Id: 102926,
        Text: 'Tìm đường đi trong đồ thị',
      },
      {
        Id: 102927,
        Text: 'Cây nhị phân',
      },
    ],
  },
  {
    Id: 24811,
    Text: 'Mục tiêu của buổi họp sơ kết Sprint?',
    Marks: 1,
    AnswerId: 102929,
    Answers: [
      {
        Id: 102928,
        Text: 'Đội sản xuất cùng với QA đánh giá lại công việc của Sprint vừa kết thúc',
      },
      {
        Id: 102929,
        Text: 'Đội sản xuất cùng với Product Owner đánh giá lại công việc của Sprint vừa kết thúc',
      },
      {
        Id: 102930,
        Text: 'Đội sản xuất cùng với Product Owner đánh giá về công việc của Sprint sắp tới',
      },
      {
        Id: 102931,
        Text: 'Đội sản xuất cùng với QA đánh giá về công việc của Sprint sắp tới',
      },
    ],
  },
  {
    Id: 24812,
    Text: 'Phương án nào không phải đặc điểm của nhóm phát triển trong Scrum?',
    Marks: 1,
    AnswerId: 102935,
    Answers: [
      {
        Id: 102932,
        Text: 'Tạo ra phần tăng trưởng hoàn thành',
      },
      {
        Id: 102933,
        Text: 'Không có Project Leader',
      },
      {
        Id: 102934,
        Text: 'Tự quản lý',
      },
      {
        Id: 102935,
        Text: 'Có Project Leader',
      },
    ],
  },
  {
    Id: 24813,
    Text: 'Câu nào là đúng nhất đối với định nghĩa hoàn thành trong Scrum?',
    Marks: 1,
    AnswerId: 102936,
    Answers: [
      {
        Id: 102936,
        Text: 'Định nghĩa hoàn thành thường khác nhau, tùy thuộc vào tình hình dự án',
      },
      {
        Id: 102937,
        Text: 'Công việc được coi là hoàn thành khi mọi user story mới đã được tích hợp trước buổi sơ kết sprint',
      },
      {
        Id: 102938,
        Text: 'Công việc được coi là hoàn thành khi đã hoàn thành 1 Sprint, chuyển giao phần mềm cho khách hàng khi chưa kiểm thử chấp nhận',
      },
      {
        Id: 102939,
        Text: 'Công việc được coi là hoàn thành khi kết thúc việc lập trình',
      },
    ],
  },
  {
    Id: 24814,
    Text: 'Tính cách nào không phải là loại tích cách Keirsey?',
    Marks: 1,
    AnswerId: 102941,
    Answers: [
      {
        Id: 102940,
        Text: 'Bảo vệ',
      },
      {
        Id: 102941,
        Text: 'Ích kỷ',
      },
      {
        Id: 102942,
        Text: 'Đạo diễn',
      },
      {
        Id: 102943,
        Text: 'Tư vấn',
      },
    ],
  },
  {
    Id: 24815,
    Text: 'Lập kế hoạch phát hành trong Scrum là bắt buộc hay không?',
    Marks: 1,
    AnswerId: 102945,
    Answers: [
      {
        Id: 102944,
        Text: 'Có',
      },
      {
        Id: 102945,
        Text: 'Không',
      },
    ],
  },
  {
    Id: 24816,
    Text: 'Cuộc họp Scrum hàng ngày nên được tổ chức theo kiểu gì?',
    Marks: 1,
    AnswerId: 102946,
    Answers: [
      {
        Id: 102946,
        Text: 'Các thành viên đứng họp trong khoảng thời gian 15 phút',
      },
      {
        Id: 102947,
        Text: 'Các thành viên họp bàn tròn trong khoảng thời gian 1 tiếng',
      },
      {
        Id: 102948,
        Text: 'Các thành viên đứng họp trong khoảng thời gian 1 tiếng',
      },
      {
        Id: 102949,
        Text: 'Các thành viên họp bàn tròn trong khoảng thời gian 2 tiếng',
      },
    ],
  },
  {
    Id: 24817,
    Text: 'Chọn định nghĩa đúng về Burndown chart?',
    Marks: 1,
    AnswerId: 102951,
    Answers: [
      {
        Id: 102950,
        Text: 'Là biểu đồ thể hiện xu hướng của công việc đã làm theo thời gian trong một Sprint',
      },
      {
        Id: 102951,
        Text: 'Là biểu đồ thể hiện xu hướng của công việc còn lại theo thời gian trong một Sprint, một bản phát hành (Release), hoặc sản phẩm',
      },
      {
        Id: 102952,
        Text: 'Là biểu đồ thể hiện xu hướng của công việc mà tester còn lại phải làm theo thời gian trong một Sprint',
      },
      {
        Id: 102953,
        Text: 'Là biểu đồ thể hiện xu hướng của công việc mà tester đã làm theo thời gian trong một Sprint',
      },
    ],
  },
  {
    Id: 24818,
    Text: 'Phương án nào không phải đặc điểm của quy tắc CUTFIT?',
    Marks: 1,
    AnswerId: 102956,
    Answers: [
      {
        Id: 102954,
        Text: 'Độc lập',
      },
      {
        Id: 102955,
        Text: 'Khả thi',
      },
      {
        Id: 102956,
        Text: 'Không theo dõi được',
      },
      {
        Id: 102957,
        Text: 'Nhất quán',
      },
      {
        Id: 102958,
        Text: 'Không mơ hồ',
      },
    ],
  },
  {
    Id: 24819,
    Text: 'Phương pháp nào được sử dụng nhiều nhất trong các dự án phần mềm Agile hiện này?',
    Marks: 1,
    AnswerId: 102961,
    Answers: [
      {
        Id: 102959,
        Text: 'Lean',
      },
      {
        Id: 102960,
        Text: 'Scrumban',
      },
      {
        Id: 102961,
        Text: 'Scrum',
      },
      {
        Id: 102962,
        Text: 'Kanban',
      },
    ],
  },
  {
    Id: 24820,
    Text: 'Kiểm thử phần mềm trong Agile được thực thi ở giai đoạn nào?',
    Marks: 1,
    AnswerId: 102966,
    Answers: [
      {
        Id: 102963,
        Text: 'Trước khi chuyển giao phần mềm',
      },
      {
        Id: 102964,
        Text: 'Trong quá trình thiết kế hệ thống',
      },
      {
        Id: 102965,
        Text: 'Trước khi ký hợp đồng nghiệm thu phần mềm',
      },
      {
        Id: 102966,
        Text: 'Trong quá trình phát triển phần mềm của Sprint',
      },
    ],
  },
  {
    Id: 24821,
    Text: 'Ý tưởng cơ bản của Scrum có xuất xứ từ ngành công nghiệp nào?',
    Marks: 1,
    AnswerId: 102968,
    Answers: [
      {
        Id: 102967,
        Text: 'Máy bay',
      },
      {
        Id: 102968,
        Text: 'Ô tô',
      },
      {
        Id: 102969,
        Text: 'Xe máy',
      },
      {
        Id: 102970,
        Text: 'Vũ trụ',
      },
    ],
  },
  {
    Id: 24822,
    Text: 'Nếu thao tác dữ liệu trên User Story có thao tác cập nhật, user story có giá trị bao nhiêu?',
    Marks: 1,
    AnswerId: 102971,
    Answers: [
      {
        Id: 102971,
        Text: '3',
      },
      {
        Id: 102972,
        Text: '4',
      },
      {
        Id: 102973,
        Text: '1',
      },
      {
        Id: 102974,
        Text: '2',
      },
    ],
  },
  {
    Id: 24823,
    Text: 'Câu nào là sai đối với Scrum?',
    Marks: 1,
    AnswerId: 102976,
    Answers: [
      {
        Id: 102975,
        Text: 'Scrum hoạt động theo nguyên tắc thực nghiệm',
      },
      {
        Id: 102976,
        Text: 'Scrum mang lại giá trị thấp trong thời gian ngắn',
      },
      {
        Id: 102977,
        Text: 'Scrum là khung làm việc linh hoạt để quản lý các dự án',
      },
      {
        Id: 102978,
        Text: 'Các nhóm trong Scrum là tự quản và tự tổ chức và liên chức năng',
      },
    ],
  },
  {
    Id: 24824,
    Text: 'Ai có quyền hủy Sprint khi mục tiêu của Sprint trở nên lỗi thời?',
    Marks: 1,
    AnswerId: 102979,
    Answers: [
      {
        Id: 102979,
        Text: 'QA',
      },
      {
        Id: 102980,
        Text: 'Scrum Master',
      },
      {
        Id: 102981,
        Text: 'Tester',
      },
      {
        Id: 102982,
        Text: 'Product Owner',
      },
    ],
  },
  {
    Id: 24825,
    Text: 'Phần mềm nào là phần mềm quản lý dự án theo Scrum?',
    Marks: 1,
    AnswerId: 102985,
    Answers: [
      {
        Id: 102983,
        Text: 'Eclipse',
      },
      {
        Id: 102984,
        Text: 'Android Studio',
      },
      {
        Id: 102985,
        Text: 'Trello',
      },
      {
        Id: 102986,
        Text: 'NetBean',
      },
    ],
  },
  {
    Id: 24826,
    Text: 'Kỹ thuật nào không nằm trong kỹ thuật để giải quyết xung đột của Kenneth Thomas và Ralph Kilmann?',
    Marks: 1,
    AnswerId: 102987,
    Answers: [
      {
        Id: 102987,
        Text: 'Đối đầu',
      },
      {
        Id: 102988,
        Text: 'Thỏa hiệp',
      },
      {
        Id: 102989,
        Text: 'Cộng tác',
      },
      {
        Id: 102990,
        Text: 'Điều tiết',
      },
      {
        Id: 102991,
        Text: 'Cạnh tranh',
      },
    ],
  },
  {
    Id: 24827,
    Text: 'Ai chịu trách nhiệm đảm bảo mọi người hiểu và dùng được Scrum?',
    Marks: 1,
    AnswerId: 102993,
    Answers: [
      {
        Id: 102992,
        Text: 'Product Owner',
      },
      {
        Id: 102993,
        Text: 'Scrum Master',
      },
      {
        Id: 102994,
        Text: 'QA',
      },
      {
        Id: 102995,
        Text: 'Tester',
      },
    ],
  },
  {
    Id: 24828,
    Text: 'Phương án nào không phải đặc điểm của quy tắc SMART?',
    Marks: 1,
    AnswerId: 102998,
    Answers: [
      {
        Id: 102996,
        Text: 'Rõ ràng',
      },
      {
        Id: 102997,
        Text: 'Thực tế',
      },
      {
        Id: 102998,
        Text: 'Dựa trên chi phí',
      },
      {
        Id: 102999,
        Text: 'Đo được',
      },
      {
        Id: 103000,
        Text: 'Có thể đạt được',
      },
    ],
  },
  {
    Id: 24829,
    Text: 'Phẩm chất nào không nằm trong 7 phẩm chất quan trọng mà Scrum Master cần có?',
    Marks: 1,
    AnswerId: 103002,
    Answers: [
      {
        Id: 103001,
        Text: 'Có kỹ năng tốt về tổ chức',
      },
      {
        Id: 103002,
        Text: 'Có kỹ năng kiểm thử tốt',
      },
      {
        Id: 103003,
        Text: 'Có kỹ năng tốt về giao tiếp',
      },
      {
        Id: 103004,
        Text: 'Có kiến thức chuyên sâu về cả lý thuyết lẫn thực hành Scrum',
      },
    ],
  },
  {
    Id: 24830,
    Text: 'Câu nào là đúng đối với kiểm thử trong Scrum?',
    Marks: 1,
    AnswerId: 103006,
    Answers: [
      {
        Id: 103005,
        Text: 'Không nên thực hiện kiểm thử tự động trong Scrum',
      },
      {
        Id: 103006,
        Text: 'Do scrum chủ yếu là một khung quản lý dự án, nên nó không nhắc tới những phương pháp kỹ thuật liên quan tới lập trình và kiểm thử',
      },
      {
        Id: 103007,
        Text: 'Không nên thực hiện kiểm thử Unit Test trong Scrum',
      },
      {
        Id: 103008,
        Text: 'Không nên thực hiện kiểm thử tích hợp liên tục trong Scrum',
      },
    ],
  },
  {
    Id: 24831,
    Text: 'Sprint thường ngắn hơn bao nhiêu ngày?',
    Marks: 1,
    AnswerId: 103013,
    Answers: [
      {
        Id: 103009,
        Text: '40',
      },
      {
        Id: 103010,
        Text: '50',
      },
      {
        Id: 103011,
        Text: '20',
      },
      {
        Id: 103012,
        Text: '10',
      },
      {
        Id: 103013,
        Text: '30',
      },
    ],
  },
  {
    Id: 24832,
    Text: 'Giai đoạn nào không nằm trong năm giai đoạn mà nhóm sẽ trải qua của Broke Tuckman?',
    Marks: 1,
    AnswerId: 103014,
    Answers: [
      {
        Id: 103014,
        Text: 'Chuẩn hóa',
      },
      {
        Id: 103015,
        Text: 'Chuyển giao',
      },
      {
        Id: 103016,
        Text: 'Hình thành',
      },
      {
        Id: 103017,
        Text: 'Thể hiện',
      },
    ],
  },
  {
    Id: 24833,
    Text: 'Nếu số lượng thực thể liên quan đến user story có từ 1 đến 3 thực thể, user story nên có giá trị bao nhiêu?',
    Marks: 1,
    AnswerId: 103019,
    Answers: [
      {
        Id: 103018,
        Text: '1',
      },
      {
        Id: 103019,
        Text: '2',
      },
      {
        Id: 103020,
        Text: '4',
      },
      {
        Id: 103021,
        Text: '3',
      },
    ],
  },
  {
    Id: 24834,
    Text: 'Một trong những lợi ích chính của kiểm thử tự động là một phần mềm sẽ chạy tất cả kiểm thử cho bạn?',
    Marks: 1,
    AnswerId: 103022,
    Answers: [
      {
        Id: 103022,
        Text: 'Đúng',
      },
      {
        Id: 103023,
        Text: 'Sai',
      },
    ],
  },
  {
    Id: 24835,
    Text: 'Để tích hợp liên tục hiệu quả hơn, các nhóm phát triển Scrum nên sử dụng công cụ gì để quản lý version?',
    Marks: 1,
    AnswerId: 103027,
    Answers: [
      {
        Id: 103024,
        Text: 'Wordpad',
      },
      {
        Id: 103025,
        Text: 'Tortoise',
      },
      {
        Id: 103026,
        Text: 'Notepad',
      },
      {
        Id: 103027,
        Text: 'Git',
      },
    ],
  },
]
export const VBPR = [
  {
    Id: 24836,
    Text: 'Thuộc tính nào để thay đổi màu nền của Form?',
    Marks: 1,
    AnswerId: 103031,
    Answers: [
      {
        Id: 103028,
        Text: 'Color',
      },
      {
        Id: 103029,
        Text: 'BgColor',
      },
      {
        Id: 103030,
        Text: 'BackgroundColor',
      },
      {
        Id: 103031,
        Text: 'BackColor',
      },
    ],
  },
  {
    Id: 24837,
    Text: 'Để kích thước của form mở rộng đầy màn hình khi chạy chương trình thì cần thiết lập giá trị nào cho thuộc tính WindowState?',
    Marks: 1,
    AnswerId: 103032,
    Answers: [
      {
        Id: 103032,
        Text: 'Maximized',
      },
      {
        Id: 103033,
        Text: 'Normal',
      },
      {
        Id: 103034,
        Text: 'Minimized',
      },
      {
        Id: 103035,
        Text: 'MinMax',
      },
    ],
  },
  {
    Id: 24838,
    Text: 'Để hiện cửa sổ Toolbox người dùng chọn thao tác nào?',
    Marks: 1,
    AnswerId: 103039,
    Answers: [
      {
        Id: 103036,
        Text: 'Tools \u003e Toolbox',
      },
      {
        Id: 103037,
        Text: 'Build \u003e Toolbox',
      },
      {
        Id: 103038,
        Text: 'Project \u003e Toolbox',
      },
      {
        Id: 103039,
        Text: 'View \u003e Toolbox',
      },
    ],
  },
  {
    Id: 24839,
    Text: 'Ngôn ngữ lập trình nào dưới đây là ngôn ngữ lập trình bậc thấp?',
    Marks: 1,
    AnswerId: 103041,
    Answers: [
      {
        Id: 103040,
        Text: 'Pascal',
      },
      {
        Id: 103041,
        Text: 'Assembly',
      },
      {
        Id: 103042,
        Text: 'Visual Basic',
      },
      {
        Id: 103043,
        Text: 'C#',
      },
    ],
  },
  {
    Id: 24840,
    Text: 'Ngôn ngữ lập trình nào tập trung vào đối tượng, mỗi đối tượng đều có thuộc tính và phương thức của chính nó?',
    Marks: 1,
    AnswerId: 103047,
    Answers: [
      {
        Id: 103044,
        Text: 'Ngôn ngữ máy',
      },
      {
        Id: 103045,
        Text: 'Ngôn ngữ lập trình cấu trúc',
      },
      {
        Id: 103046,
        Text: 'Ngôn ngữ Assembly',
      },
      {
        Id: 103047,
        Text: 'Ngôn ngữ lập trình hướng đối tượng',
      },
    ],
  },
  {
    Id: 24841,
    Text: 'Thành phần nào trong máy tính chịu trách nhiệm thực hiện tính toán và đưa ra quyết định.',
    Marks: 1,
    AnswerId: 103048,
    Answers: [
      {
        Id: 103048,
        Text: 'Khối số học và lôgic',
      },
      {
        Id: 103049,
        Text: 'Khối xuất',
      },
      {
        Id: 103050,
        Text: 'Khối nhớ',
      },
      {
        Id: 103051,
        Text: 'Khối xử lý trung tâm',
      },
    ],
  },
  {
    Id: 24842,
    Text: 'Để thiết kế giao diện của ứng dụng, người dùng chọn đối tượng nào?',
    Marks: 1,
    AnswerId: 103054,
    Answers: [
      {
        Id: 103052,
        Text: 'Interface',
      },
      {
        Id: 103053,
        Text: 'Module',
      },
      {
        Id: 103054,
        Text: 'Windows Form',
      },
      {
        Id: 103055,
        Text: 'Class',
      },
    ],
  },
  {
    Id: 24843,
    Text: 'Để máy tính hiểu các ngôn ngữ lập trình bậc cao thì cần phải có chương trình nào?',
    Marks: 1,
    AnswerId: 103056,
    Answers: [
      {
        Id: 103056,
        Text: 'Chương trình dịch',
      },
      {
        Id: 103057,
        Text: 'Chương trình tự động hóa',
      },
      {
        Id: 103058,
        Text: 'Chương trình máy',
      },
      {
        Id: 103059,
        Text: 'Chương trình robot',
      },
    ],
  },
  {
    Id: 24844,
    Text: 'Thuộc tính nào của đối tượng trên form không được đặt trùng nhau?',
    Marks: 1,
    AnswerId: 103060,
    Answers: [
      {
        Id: 103060,
        Text: 'Name',
      },
      {
        Id: 103061,
        Text: 'Size',
      },
      {
        Id: 103062,
        Text: 'Text',
      },
      {
        Id: 103063,
        Text: 'Auto size',
      },
    ],
  },
  {
    Id: 24845,
    Text: 'Cửa sổ nào trên IDE hiển thị danh sách các file trong một project và danh sách project',
    Marks: 1,
    AnswerId: 103065,
    Answers: [
      {
        Id: 103064,
        Text: 'Toolbox',
      },
      {
        Id: 103065,
        Text: 'Solution Explorer',
      },
      {
        Id: 103066,
        Text: 'Properties',
      },
      {
        Id: 103067,
        Text: 'Object browser',
      },
    ],
  },
  {
    Id: 24846,
    Text: 'Lời gọi hàm Val(“hello") sẽ trả về kết quả nào?',
    Marks: 1,
    AnswerId: 103068,
    Answers: [
      {
        Id: 103068,
        Text: '0',
      },
      {
        Id: 103069,
        Text: '10',
      },
      {
        Id: 103070,
        Text: '5',
      },
      {
        Id: 103071,
        Text: 'Báo lỗi',
      },
    ],
  },
  {
    Id: 24847,
    Text: 'Để nội dung của Label được căn chỉnh ở giữa và đều trên dòng thì giá trị của TextAlign được thiết lập là:',
    Marks: 1,
    AnswerId: 103074,
    Answers: [
      {
        Id: 103072,
        Text: 'BottomCenter',
      },
      {
        Id: 103073,
        Text: 'TopCenter',
      },
      {
        Id: 103074,
        Text: 'MiddleCenter',
      },
      {
        Id: 103075,
        Text: 'TopLeft',
      },
    ],
  },
  {
    Id: 24848,
    Text: 'Lời gọi hàm Val(“194A Hàm Nghi") sẽ trả về kết quả nào?',
    Marks: 1,
    AnswerId: 103078,
    Answers: [
      {
        Id: 103076,
        Text: 'Báo lỗi',
      },
      {
        Id: 103077,
        Text: '0',
      },
      {
        Id: 103078,
        Text: '194',
      },
      {
        Id: 103079,
        Text: '3',
      },
    ],
  },
  {
    Id: 24849,
    Text: 'Toán tử truy cập thành viên trong Visual Basic là?',
    Marks: 1,
    AnswerId: 103082,
    Answers: [
      {
        Id: 103080,
        Text: 'Dấu phẩy (,)',
      },
      {
        Id: 103081,
        Text: 'Dấu hai chấm (:)',
      },
      {
        Id: 103082,
        Text: 'Dấu chấm (.)',
      },
      {
        Id: 103083,
        Text: 'Dấu chấm phẩy (;)',
      },
    ],
  },
  {
    Id: 24850,
    Text: 'Lời gọi hàm Val(“50a50") sẽ trả về kết quả nào?',
    Marks: 1,
    AnswerId: 103084,
    Answers: [
      {
        Id: 103084,
        Text: '50',
      },
      {
        Id: 103085,
        Text: '100',
      },
      {
        Id: 103086,
        Text: '55',
      },
      {
        Id: 103087,
        Text: '5050',
      },
    ],
  },
  {
    Id: 24851,
    Text: 'Khi muốn hiển thị thông tin, tiêu đề trên Form hay hiển thị kết quả đầu ra, người dùng sử dụng đối tượng nào?',
    Marks: 1,
    AnswerId: 103091,
    Answers: [
      {
        Id: 103088,
        Text: 'TextBox',
      },
      {
        Id: 103089,
        Text: 'ComboBox',
      },
      {
        Id: 103090,
        Text: 'ListBox',
      },
      {
        Id: 103091,
        Text: 'Label',
      },
    ],
  },
  {
    Id: 24852,
    Text: 'Thành phần nằm 2 bên của toán tử gán được gọi là gi?',
    Marks: 1,
    AnswerId: 103095,
    Answers: [
      {
        Id: 103092,
        Text: 'Toán tử',
      },
      {
        Id: 103093,
        Text: 'Tham số',
      },
      {
        Id: 103094,
        Text: 'Đối số',
      },
      {
        Id: 103095,
        Text: 'Toán hạng',
      },
    ],
  },
  {
    Id: 24853,
    Text: 'Để đổi một chuỗi kí tự về một giá trị số người dùng sử dụng Hàm nào?',
    Marks: 1,
    AnswerId: 103099,
    Answers: [
      {
        Id: 103096,
        Text: 'Text()',
      },
      {
        Id: 103097,
        Text: '.ToString()',
      },
      {
        Id: 103098,
        Text: 'Convert()',
      },
      {
        Id: 103099,
        Text: 'Val()',
      },
    ],
  },
  {
    Id: 24854,
    Text: 'Muốn đọc ghi file thì người sử dụng phải khai báo thêm thành phần namespace nào trong chương trình?',
    Marks: 1,
    AnswerId: 103101,
    Answers: [
      {
        Id: 103100,
        Text: 'Imports Microsoft.VisualBasic',
      },
      {
        Id: 103101,
        Text: 'Imports System.IO',
      },
      {
        Id: 103102,
        Text: 'Imports System.IntPtr',
      },
      {
        Id: 103103,
        Text: 'Imports System.OI',
      },
    ],
  },
  {
    Id: 24855,
    Text: 'Khi lưu Form, phần mở rộng tên file của Form là?',
    Marks: 1,
    AnswerId: 103104,
    Answers: [
      {
        Id: 103104,
        Text: '.vb',
      },
      {
        Id: 103105,
        Text: '.txt',
      },
      {
        Id: 103106,
        Text: '.docx',
      },
      {
        Id: 103107,
        Text: '.cs',
      },
    ],
  },
  {
    Id: 24856,
    Text: 'Kiểu dữ liệu trong khai báo biến được viết sau từ khóa nào?',
    Marks: 1,
    AnswerId: 103110,
    Answers: [
      {
        Id: 103108,
        Text: 'Is',
      },
      {
        Id: 103109,
        Text: 'Dim',
      },
      {
        Id: 103110,
        Text: 'As',
      },
      {
        Id: 103111,
        Text: '=',
      },
    ],
  },
  {
    Id: 24857,
    Text: 'Để khai báo biến trong Visual Basic người dùng sử dụng từ khóa nào?',
    Marks: 1,
    AnswerId: 103112,
    Answers: [
      {
        Id: 103112,
        Text: 'Dim',
      },
      {
        Id: 103113,
        Text: 'By Val',
      },
      {
        Id: 103114,
        Text: 'Var',
      },
      {
        Id: 103115,
        Text: 'Declare',
      },
    ],
  },
  {
    Id: 24858,
    Text: 'Khi Visual Basic tự động (không cần viết mã) chuyển đổi giá trị Double thành giá trị Integer thì được gọi là?',
    Marks: 1,
    AnswerId: 103118,
    Answers: [
      {
        Id: 103116,
        Text: 'Ép kiểu tường minh',
      },
      {
        Id: 103117,
        Text: 'Thay đổi kiểu dữ liệu',
      },
      {
        Id: 103118,
        Text: 'Ép kiểu ngầm định',
      },
      {
        Id: 103119,
        Text: 'Phép biến đổi',
      },
    ],
  },
  {
    Id: 24859,
    Text: 'Nếu biến number được khởi tạo giá trị là 8, giá trị của biến này là bao nhiêu sau khi biểu thức number ^= 2 được thực thi?',
    Marks: 1,
    AnswerId: 103121,
    Answers: [
      {
        Id: 103120,
        Text: 'Lỗi xẩy ra',
      },
      {
        Id: 103121,
        Text: '64',
      },
      {
        Id: 103122,
        Text: '10',
      },
      {
        Id: 103123,
        Text: '16',
      },
    ],
  },
  {
    Id: 24860,
    Text: 'Sau khi thực hiện xong lệnh, kết quả biến a bằng bao nhiêu? Dim a As Integer = 50 If a \u003e 100 Then a += 10 Else a -= 10 End If',
    Marks: 1,
    AnswerId: 103125,
    Answers: [
      {
        Id: 103124,
        Text: '60',
      },
      {
        Id: 103125,
        Text: '40',
      },
      {
        Id: 103126,
        Text: '100',
      },
      {
        Id: 103127,
        Text: '50',
      },
    ],
  },
  {
    Id: 24861,
    Text: 'Ngôn ngữ nào không chính quy giúp bạn trình bày tư tưởng thuật giải?',
    Marks: 1,
    AnswerId: 103131,
    Answers: [
      {
        Id: 103128,
        Text: 'Ngôn ngữ lập trình bậc thấp',
      },
      {
        Id: 103129,
        Text: 'Ngôn ngữ máy',
      },
      {
        Id: 103130,
        Text: 'Ngôn ngữ lập trình cấu trúc',
      },
      {
        Id: 103131,
        Text: 'Ngôn ngữ giả',
      },
    ],
  },
  {
    Id: 24862,
    Text: 'Trong Visual Basis, muốn so sánh a khác b người dùng sử dụng toán tử nào?',
    Marks: 1,
    AnswerId: 103134,
    Answers: [
      {
        Id: 103132,
        Text: '≠',
      },
      {
        Id: 103133,
        Text: '\u003e\u003c',
      },
      {
        Id: 103134,
        Text: '\u003c\u003e',
      },
      {
        Id: 103135,
        Text: '!=',
      },
    ],
  },
  {
    Id: 24863,
    Text: 'Việc thực thi các lệnh theo thứ tự được viết trong chương trình được gọi là?',
    Marks: 1,
    AnswerId: 103138,
    Answers: [
      {
        Id: 103136,
        Text: 'Thực thi đệ quy',
      },
      {
        Id: 103137,
        Text: 'Thực thi lặp',
      },
      {
        Id: 103138,
        Text: 'Thực thi tuần tự',
      },
      {
        Id: 103139,
        Text: 'Thực đi rẽ nhánh',
      },
    ],
  },
  {
    Id: 24864,
    Text: 'Kết quả biến a bằng bao nhiêu sau khi thực hiện đoạn mã sau: Dim a As Integer = 50 If a \u003e 100 Then a += 10 End If',
    Marks: 1,
    AnswerId: 103142,
    Answers: [
      {
        Id: 103140,
        Text: 'Báo lỗi',
      },
      {
        Id: 103141,
        Text: '60',
      },
      {
        Id: 103142,
        Text: '50',
      },
      {
        Id: 103143,
        Text: '100',
      },
    ],
  },
  {
    Id: 24865,
    Text: 'Trong biểu đồ hoạt động, ký hiệu nào biểu diễn trạng thái khởi đầu của hoạt động?',
    Marks: 1,
    AnswerId: 103145,
    Answers: [
      {
        Id: 103144,
        Text: 'Hình chữ nhật bo góc',
      },
      {
        Id: 103145,
        Text: 'Hình tròn đặc',
      },
      {
        Id: 103146,
        Text: 'Hình tròn rỗng',
      },
      {
        Id: 103147,
        Text: 'Hình thoi',
      },
    ],
  },
  {
    Id: 24866,
    Text: 'Để có thể chọn một lựa chọn duy nhất trong một nhóm nhiều lựa chọn thì người dùng nên sử dụng điều khiển nào?',
    Marks: 1,
    AnswerId: 103150,
    Answers: [
      {
        Id: 103148,
        Text: 'TextBox',
      },
      {
        Id: 103149,
        Text: 'ListBox',
      },
      {
        Id: 103150,
        Text: 'RadioButton',
      },
      {
        Id: 103151,
        Text: 'CheckBox',
      },
    ],
  },
  {
    Id: 24867,
    Text: 'Hãy cho biết kết quả hiển thị khi thực hiện đoạn mã sau: txtDiem.Text = "0a60"Select Case Val(txtDiem.Text)          Case 0             lblKetQua.Text = "Điểm liệt!"          Case Is \u003e= 50             lblKetQua.Text = "Qua môn!"          Case Else        ',
    Marks: 1,
    AnswerId: 103155,
    Answers: [
      {
        Id: 103152,
        Text: 'Học bổng!',
      },
      {
        Id: 103153,
        Text: 'Báo lỗi',
      },
      {
        Id: 103154,
        Text: 'Trượt!',
      },
      {
        Id: 103155,
        Text: 'Qua môn!',
      },
    ],
  },
  {
    Id: 24868,
    Text: 'Muốn trả về số phần tử trong ListBox1 người dùng sử dụng lệnh nào?',
    Marks: 1,
    AnswerId: 103156,
    Answers: [
      {
        Id: 103156,
        Text: 'ListBox1.Items.Count',
      },
      {
        Id: 103157,
        Text: 'ListBox1.Item.Count',
      },
      {
        Id: 103158,
        Text: 'ListBox1.Rows.Count',
      },
      {
        Id: 103159,
        Text: 'ListBox1.Count',
      },
    ],
  },
  {
    Id: 24869,
    Text: 'Một điều khiển CheckBox khi chọn thuộc tính Checked để thiết lập lựa chọn thì người dùng sử dụng giá trị nào?',
    Marks: 1,
    AnswerId: 103160,
    Answers: [
      {
        Id: 103160,
        Text: 'TRUE',
      },
      {
        Id: 103161,
        Text: 'Checked',
      },
      {
        Id: 103162,
        Text: 'FALSE',
      },
      {
        Id: 103163,
        Text: 'Selected',
      },
    ],
  },
  {
    Id: 24870,
    Text: 'Cách viết nào dưới đây là sai khi cần liệt kê các giá trị trong một mệnh đề Case?',
    Marks: 1,
    AnswerId: 103166,
    Answers: [
      {
        Id: 103164,
        Text: 'Case "A", "B", "C"',
      },
      {
        Id: 103165,
        Text: 'Case "A"',
      },
      {
        Id: 103166,
        Text: 'Case "A" "B"',
      },
      {
        Id: 103167,
        Text: 'Case "A", "B"',
      },
    ],
  },
  {
    Id: 24871,
    Text: 'Từ khóa nào không đúng khi sử dụng lệnh Select Case?',
    Marks: 1,
    AnswerId: 103171,
    Answers: [
      {
        Id: 103168,
        Text: 'to',
      },
      {
        Id: 103169,
        Text: 'is',
      },
      {
        Id: 103170,
        Text: 'case',
      },
      {
        Id: 103171,
        Text: 'between',
      },
    ],
  },
  {
    Id: 24872,
    Text: 'Toán tử logic nào giúp kết hợp kết hợp các điều kiện đơn thành điều kiện phức tạp hơn?',
    Marks: 1,
    AnswerId: 103173,
    Answers: [
      {
        Id: 103172,
        Text: '\u003e=',
      },
      {
        Id: 103173,
        Text: 'XOR',
      },
      {
        Id: 103174,
        Text: '=',
      },
      {
        Id: 103175,
        Text: '\u003c=',
      },
    ],
  },
  {
    Id: 24873,
    Text: 'Muốn thêm một phần tử vào cuối danh sách các phần tử trong ListBox, người dùng sử dụng phương thức nào?',
    Marks: 1,
    AnswerId: 103177,
    Answers: [
      {
        Id: 103176,
        Text: 'Items.Append',
      },
      {
        Id: 103177,
        Text: 'Items.Add',
      },
      {
        Id: 103178,
        Text: 'Items.Insert',
      },
      {
        Id: 103179,
        Text: 'Items.Item',
      },
    ],
  },
  {
    Id: 24874,
    Text: 'Từ khóa nào cho biết điểm kết thúc lệnh Select Case?',
    Marks: 1,
    AnswerId: 103182,
    Answers: [
      {
        Id: 103180,
        Text: 'Case End',
      },
      {
        Id: 103181,
        Text: 'End Select Case',
      },
      {
        Id: 103182,
        Text: 'End Select',
      },
      {
        Id: 103183,
        Text: 'End Case',
      },
    ],
  },
  {
    Id: 24875,
    Text: 'Lệnh Select Case có thể chứa bao nhiêu lựa chọn?',
    Marks: 1,
    AnswerId: 103184,
    Answers: [
      {
        Id: 103184,
        Text: '1 hoặc nhiều lựa chọn',
      },
      {
        Id: 103185,
        Text: '1 lựa chọn',
      },
      {
        Id: 103186,
        Text: '2 lựa chọn',
      },
      {
        Id: 103187,
        Text: '7 lựa chọn',
      },
    ],
  },
  {
    Id: 24876,
    Text: 'Giá trị của biến number sau khi thực hiện xong vòng lặp là bao nhiêu? Dim number As Integer = 2 Do While number \u003c 4   number *= 2 Loop',
    Marks: 1,
    AnswerId: 103188,
    Answers: [
      {
        Id: 103188,
        Text: '4',
      },
      {
        Id: 103189,
        Text: '10',
      },
      {
        Id: 103190,
        Text: '8',
      },
      {
        Id: 103191,
        Text: '2',
      },
    ],
  },
  {
    Id: 24877,
    Text: 'Lệnh For... Next cho phép khai báo biến đếm For i As Integer = 0 To 10. Còn lệnh Do While... có cho phép khai báo Do While i as Integer\u003c10 không?',
    Marks: 1,
    AnswerId: 103193,
    Answers: [
      {
        Id: 103192,
        Text: 'Có cho phép',
      },
      {
        Id: 103193,
        Text: 'Không cho phép',
      },
    ],
  },
  {
    Id: 24878,
    Text: 'Giá trị của biến number sau khi thực hiện xong vòng lặp là bao nhiêu? Dim number As Integer = 2 Dim i As Integer = 0 Do   number += 4 Loop Until i \u003e 2',
    Marks: 1,
    AnswerId: 103196,
    Answers: [
      {
        Id: 103194,
        Text: '6',
      },
      {
        Id: 103195,
        Text: '2',
      },
      {
        Id: 103196,
        Text: 'Lỗi, Lặp vô hạn',
      },
      {
        Id: 103197,
        Text: '4',
      },
    ],
  },
  {
    Id: 24879,
    Text: 'Trong lệnh For…Next, từ khóa nào không bắt buộc phải có?',
    Marks: 1,
    AnswerId: 103200,
    Answers: [
      {
        Id: 103198,
        Text: 'For',
      },
      {
        Id: 103199,
        Text: 'Next',
      },
      {
        Id: 103200,
        Text: 'Step',
      },
      {
        Id: 103201,
        Text: 'To',
      },
    ],
  },
  {
    Id: 24880,
    Text: 'Giá trị của biến number sau khi thực hiện xong vòng lặp là bao nhiêu? Dim number As Integer = 2 Do While number \u003c 4   number *= 2 Loop',
    Marks: 1,
    AnswerId: 103204,
    Answers: [
      {
        Id: 103202,
        Text: '8',
      },
      {
        Id: 103203,
        Text: '10',
      },
      {
        Id: 103204,
        Text: '4',
      },
      {
        Id: 103205,
        Text: '2',
      },
    ],
  },
  {
    Id: 24881,
    Text: 'Lệnh For…Next nếu không có mệnh đề Step thì bước tăng mặc định của vòng lặp là bao nhiêu?',
    Marks: 1,
    AnswerId: 103207,
    Answers: [
      {
        Id: 103206,
        Text: '-1',
      },
      {
        Id: 103207,
        Text: '1',
      },
      {
        Id: 103208,
        Text: '2',
      },
      {
        Id: 103209,
        Text: '0',
      },
    ],
  },
  {
    Id: 24882,
    Text: 'Giá trị của biến number sau khi thực hiện xong vòng lặp là bao nhiêu? Dim number As Integer = 2 Dim i As Integer = 0 Do    number += 4 Loop While i \u003e 2',
    Marks: 1,
    AnswerId: 103210,
    Answers: [
      {
        Id: 103210,
        Text: '6',
      },
      {
        Id: 103211,
        Text: '4',
      },
      {
        Id: 103212,
        Text: 'Lỗi, Lặp vô hạn',
      },
      {
        Id: 103213,
        Text: '2',
      },
    ],
  },
  {
    Id: 24883,
    Text: 'Trong điều khiển NumericUpDown, muốn khi nhấn mũi tên tăng giảm một số lần thì giá trị hiện thời tăng giảm chừng đó lần người sử dụng dùng thuộc tính nào?',
    Marks: 1,
    AnswerId: 103217,
    Answers: [
      {
        Id: 103214,
        Text: 'Value',
      },
      {
        Id: 103215,
        Text: 'Text',
      },
      {
        Id: 103216,
        Text: 'Number',
      },
      {
        Id: 103217,
        Text: 'Increment',
      },
    ],
  },
  {
    Id: 24884,
    Text: 'Lệnh lặp nào thực thi ít nhất một lần và tiếp tục thực thi trong khi biểu thức điều kiện vẫn đạt giá trị True?',
    Marks: 1,
    AnswerId: 103221,
    Answers: [
      {
        Id: 103218,
        Text: 'Do…Loop Until',
      },
      {
        Id: 103219,
        Text: 'Do While…Loop',
      },
      {
        Id: 103220,
        Text: 'Do Until…Loop',
      },
      {
        Id: 103221,
        Text: 'Do…Loop While',
      },
    ],
  },
  {
    Id: 24885,
    Text: 'Giá trị của biến number sau khi thực hiện xong vòng lặp là bao nhiêu? Dim number As Integer = 0 For i As Integer = 0 To 5    number += i Next',
    Marks: 1,
    AnswerId: 103224,
    Answers: [
      {
        Id: 103222,
        Text: '5',
      },
      {
        Id: 103223,
        Text: '0',
      },
      {
        Id: 103224,
        Text: '15',
      },
      {
        Id: 103225,
        Text: '10',
      },
    ],
  },
  {
    Id: 24886,
    Text: 'Phương thức trả về chỉ số cao nhất của mảng?',
    Marks: 1,
    AnswerId: 103226,
    Answers: [
      {
        Id: 103226,
        Text: 'GetUpperBound',
      },
      {
        Id: 103227,
        Text: 'GetUpperLimit',
      },
      {
        Id: 103228,
        Text: 'GetUpperSubscript',
      },
      {
        Id: 103229,
        Text: 'GetHighestIndex',
      },
    ],
  },
  {
    Id: 24887,
    Text: 'Mảng sử dụng hai chỉ số được gọi là mảng ….?',
    Marks: 1,
    AnswerId: 103230,
    Answers: [
      {
        Id: 103230,
        Text: 'Hai chiều',
      },
      {
        Id: 103231,
        Text: 'Kép',
      },
      {
        Id: 103232,
        Text: 'Một chỉ số',
      },
      {
        Id: 103233,
        Text: 'Một chiều',
      },
    ],
  },
  {
    Id: 24888,
    Text: 'Mảng hai chiều thường được sử dụng để biểu diễn?',
    Marks: 1,
    AnswerId: 103236,
    Answers: [
      {
        Id: 103234,
        Text: 'Biểu đồ hình tròn',
      },
      {
        Id: 103235,
        Text: 'Khoảng cách',
      },
      {
        Id: 103236,
        Text: 'Bảng',
      },
      {
        Id: 103237,
        Text: 'Hàng',
      },
    ],
  },
  {
    Id: 24889,
    Text: 'Lệnh nào dưới đây gán một mảng có năm hàng và ba cột cho mảng có kiểu Integer hai chiều có tên là B_ArrB_Arr=New Integer ( 0 to 5, 0 to 3 ) {}B_Arr=New Integer ( 0 to 4, 0 to 2 ) {}B_Arr=New Integer ( 0 to 4, 0 to 3 ) {}B_Arr=New Integer ( 0 to 5, 0 to 2 ',
    Marks: 1,
    AnswerId: 103241,
    Answers: [
      {
        Id: 103238,
        Text: 'B_Arr=New Integer ( 0 to 5, 0 to 3 ) {}',
      },
      {
        Id: 103239,
        Text: 'B_Arr=New Integer ( 0 to 5, 0 to 2 ) {}',
      },
      {
        Id: 103240,
        Text: 'B_Arr=New Integer ( 0 to 4, 0 to 3 ) {}',
      },
      {
        Id: 103241,
        Text: 'B_Arr=New Integer ( 0 to 4, 0 to 2 ) {}',
      },
    ],
  },
  {
    Id: 24890,
    Text: 'Để duyệt tất cả các phần tử của mảng hai chiều ta sử dụng cấu trúc nào dưới đây ?',
    Marks: 1,
    AnswerId: 103245,
    Answers: [
      {
        Id: 103242,
        Text: 'Ba vòng For each',
      },
      {
        Id: 103243,
        Text: 'Hai vòng Select case',
      },
      {
        Id: 103244,
        Text: 'Hai vòng IF',
      },
      {
        Id: 103245,
        Text: 'Hai vòng For .. Next lồng nhau',
      },
    ],
  },
  {
    Id: 24891,
    Text: 'Phát biểu nào dưới đây đúng với độ dài của mảng?',
    Marks: 1,
    AnswerId: 103249,
    Answers: [
      {
        Id: 103246,
        Text: 'Được trả về bởi phương thức Len',
      },
      {
        Id: 103247,
        Text: 'Nhỏ hơn 1 so với chỉ số cuối cùng của mảng',
      },
      {
        Id: 103248,
        Text: 'Bằng với chỉ số cuối cùng của mảng',
      },
      {
        Id: 103249,
        Text: 'Lớn hơn 1 so với chỉ số cuối cùng của mảng',
      },
    ],
  },
  {
    Id: 24892,
    Text: 'Mảng có thể được khai báo để chứa giá trị?',
    Marks: 1,
    AnswerId: 103252,
    Answers: [
      {
        Id: 103250,
        Text: 'Kiểu String',
      },
      {
        Id: 103251,
        Text: 'Kiểu Integer',
      },
      {
        Id: 103252,
        Text: 'Tất cả các kiểu dữ liệu',
      },
      {
        Id: 103253,
        Text: 'Kiểu Double',
      },
    ],
  },
  {
    Id: 24893,
    Text: 'Lệnh nào dưới đây sắp xếp mảng ArrSoLuong?',
    Marks: 1,
    AnswerId: 103256,
    Answers: [
      {
        Id: 103254,
        Text: 'Sort.Array(ArrSoLuong)',
      },
      {
        Id: 103255,
        Text: 'Sort(ArrSoLuong)',
      },
      {
        Id: 103256,
        Text: 'Array.Sort(ArrSoLuong)',
      },
      {
        Id: 103257,
        Text: 'Array(ArrSoLuong).Sort()',
      },
    ],
  },
  {
    Id: 24894,
    Text: 'Các phần tử của mảng có liên quan đến nhau vì chúng có cùng tên và…..?',
    Marks: 1,
    AnswerId: 103258,
    Answers: [
      {
        Id: 103258,
        Text: 'Kiểu',
      },
      {
        Id: 103259,
        Text: 'Giá trị hằng',
      },
      {
        Id: 103260,
        Text: 'Giá trị',
      },
      {
        Id: 103261,
        Text: 'Chỉ số',
      },
    ],
  },
  {
    Id: 24895,
    Text: 'Khi khai báo mảng, một …… bắt buộc phải nằm trong dấu ngoặc đơn để chỉ ra đó là mảng hai chiều?',
    Marks: 1,
    AnswerId: 103263,
    Answers: [
      {
        Id: 103262,
        Text: 'dấu nháy đơn',
      },
      {
        Id: 103263,
        Text: 'dấu phẩy',
      },
      {
        Id: 103264,
        Text: 'dấu sao',
      },
      {
        Id: 103265,
        Text: 'dấu chấm',
      },
    ],
  },
  {
    Id: 24896,
    Text: 'Để bắt đầu định nghĩa một lớp, người dùng sử dụng từ khóa nào?',
    Marks: 1,
    AnswerId: 103267,
    Answers: [
      {
        Id: 103266,
        Text: 'Begin Class',
      },
      {
        Id: 103267,
        Text: 'Class',
      },
      {
        Id: 103268,
        Text: 'Begin',
      },
      {
        Id: 103269,
        Text: 'Start Class',
      },
    ],
  },
  {
    Id: 24897,
    Text: 'Phương thức nào trong lớp String tách rời các từ được phân cách bởi các kí tự giống nhau và lưu trữ trong 1 mảng dữ liệu?',
    Marks: 1,
    AnswerId: 103273,
    Answers: [
      {
        Id: 103270,
        Text: 'SubString()',
      },
      {
        Id: 103271,
        Text: 'Char',
      },
      {
        Id: 103272,
        Text: 'Trim()',
      },
      {
        Id: 103273,
        Text: 'Split()',
      },
    ],
  },
  {
    Id: 24898,
    Text: 'Để loại bỏ các khoảng trắng cho chuỗi kí tự của lớp String người dùng sử dụng phương thức nào?',
    Marks: 1,
    AnswerId: 103276,
    Answers: [
      {
        Id: 103274,
        Text: 'Split()',
      },
      {
        Id: 103275,
        Text: 'Length()',
      },
      {
        Id: 103276,
        Text: 'Trim()',
      },
      {
        Id: 103277,
        Text: 'SubString()',
      },
    ],
  },
  {
    Id: 24899,
    Text: 'Muốn tạo một menubar chứa nhóm các chức năng liên quan trên Form người dùng sử dụng điều khiển nào?',
    Marks: 1,
    AnswerId: 103278,
    Answers: [
      {
        Id: 103278,
        Text: 'MenuStrip',
      },
      {
        Id: 103279,
        Text: 'MenuBar',
      },
      {
        Id: 103280,
        Text: 'MenuItem',
      },
      {
        Id: 103281,
        Text: 'MenuButton',
      },
    ],
  },
  {
    Id: 24900,
    Text: 'Trong quá trình đọc file, phương thức nào xác định đến cuối file hay chưa?',
    Marks: 1,
    AnswerId: 103285,
    Answers: [
      {
        Id: 103282,
        Text: 'ReadToEnd()',
      },
      {
        Id: 103283,
        Text: 'CurrentEncoding()',
      },
      {
        Id: 103284,
        Text: 'Close()',
      },
      {
        Id: 103285,
        Text: 'EndOfStream()',
      },
    ],
  },
  {
    Id: 24901,
    Text: 'Trong Visual Basic, mỗi ký tự gồm mấy byte?',
    Marks: 1,
    AnswerId: 103289,
    Answers: [
      {
        Id: 103286,
        Text: '3 byte',
      },
      {
        Id: 103287,
        Text: '1 byte',
      },
      {
        Id: 103288,
        Text: '4 byte',
      },
      {
        Id: 103289,
        Text: '2 byte',
      },
    ],
  },
  {
    Id: 24902,
    Text: 'Muốn khai báo biến GhiFile để ghi dữ liệu vào cuối file DanhSach.txt, người dùng sử dụng lệnh nào dưới đây?',
    Marks: 1,
    AnswerId: 103292,
    Answers: [
      {
        Id: 103290,
        Text: 'Dim GhiFile As StreamWriter = New StreamWriter("DanhSach.txt", False)',
      },
      {
        Id: 103291,
        Text: 'Dim GhiFile As StreamWriter = New StreamWriter(True, "DanhSach.txt")',
      },
      {
        Id: 103292,
        Text: 'Dim GhiFile As StreamWriter = New StreamWriter("DanhSach.txt", True)',
      },
      {
        Id: 103293,
        Text: 'Dim GhiFile As StreamWriter = New StreamWriter(False, "DanhSach.txt")',
      },
    ],
  },
  {
    Id: 24903,
    Text: 'Muốn đọc dữ liệu từng dòng đầu tiên trong một file văn bản, người dùng sử dụng phương thức đọc dữ liệu nào dưới đây?',
    Marks: 1,
    AnswerId: 103295,
    Answers: [
      {
        Id: 103294,
        Text: 'ReadBlock()',
      },
      {
        Id: 103295,
        Text: 'ReadLine()',
      },
      {
        Id: 103296,
        Text: 'ReadToEnd()',
      },
      {
        Id: 103297,
        Text: 'Read()',
      },
    ],
  },
  {
    Id: 24904,
    Text: 'File mà thông tin được đọc ra theo thứ tự được ghi vào trước đó được gọi là:',
    Marks: 1,
    AnswerId: 103301,
    Answers: [
      {
        Id: 103298,
        Text: 'File truy cập máy tính',
      },
      {
        Id: 103299,
        Text: 'File truy cập chẵn lẻ',
      },
      {
        Id: 103300,
        Text: 'File truy cập ngẫu nhiên',
      },
      {
        Id: 103301,
        Text: 'File truy cập tuần tự',
      },
    ],
  },
  {
    Id: 24905,
    Text: 'File dữ liệu không được lưu trữ ở đâu?',
    Marks: 1,
    AnswerId: 103304,
    Answers: [
      {
        Id: 103302,
        Text: 'Ổ cứng',
      },
      {
        Id: 103303,
        Text: 'USB',
      },
      {
        Id: 103304,
        Text: 'Ram',
      },
      {
        Id: 103305,
        Text: 'CD-ROM, DVD',
      },
    ],
  },
  {
    Id: 24906,
    Text: 'Xây dựng hàm tính chu vi tam giác sau:Private Function CHU_VI(Optional ByVal a As Integer = 10, Optional ByVal b As Integer = 10, Optional ByVal c As Integer = 10) As Integer    Return a + b + cEnd FunctionKết quả chu vi bằng bao nhiêu khi thực hiện lời g',
    Marks: 1,
    AnswerId: 103307,
    Answers: [
      {
        Id: 103306,
        Text: '0',
      },
      {
        Id: 103307,
        Text: '30',
      },
      {
        Id: 103308,
        Text: 'Báo lỗi',
      },
      {
        Id: 103309,
        Text: '50',
      },
    ],
  },
  {
    Id: 24907,
    Text: 'Hàm luôn luôn trả về giá trị thông qua lời gọi Hàm, đúng hay sai?',
    Marks: 1,
    AnswerId: 103311,
    Answers: [
      {
        Id: 103310,
        Text: 'Sai',
      },
      {
        Id: 103311,
        Text: 'Đúng',
      },
    ],
  },
  {
    Id: 24908,
    Text: 'Trong thân hàm Function luôn luôn phải chứa lệnh nào để trả về giá trị cho lệnh gọi hàm?',
    Marks: 1,
    AnswerId: 103313,
    Answers: [
      {
        Id: 103312,
        Text: 'End',
      },
      {
        Id: 103313,
        Text: 'Return',
      },
      {
        Id: 103314,
        Text: 'Back',
      },
      {
        Id: 103315,
        Text: 'Exit Do',
      },
    ],
  },
  {
    Id: 24909,
    Text: 'Khai báo thủ tục theo cách nào dưới đây là đúng?',
    Marks: 1,
    AnswerId: 103316,
    Answers: [
      {
        Id: 103316,
        Text: 'Private Sub KT_Chan(Optional ByVal x As Integer = 3)',
      },
      {
        Id: 103317,
        Text: 'Private Sub KT_Chan(ParamArray x As Integer=3)',
      },
      {
        Id: 103318,
        Text: 'Private Sub KT_Chan(ByVal x As Integer=3)',
      },
      {
        Id: 103319,
        Text: 'Private Sub KT_Chan(ByRef x As Integer=3)',
      },
    ],
  },
  {
    Id: 24910,
    Text: 'Khi Option Strict được thiết lập là On, người dùng phải sử dụng ép kiểu nào?',
    Marks: 1,
    AnswerId: 103322,
    Answers: [
      {
        Id: 103320,
        Text: 'Không ép kiểu',
      },
      {
        Id: 103321,
        Text: 'Ép kiểu ngầm định mở rộng',
      },
      {
        Id: 103322,
        Text: 'Ép kiểu ngầm định thu hẹp',
      },
      {
        Id: 103323,
        Text: 'Mọi loại ép kiểu',
      },
    ],
  },
  {
    Id: 24911,
    Text: 'Hàm và thủ tục có thể chứa bao nhiêu tham số?',
    Marks: 1,
    AnswerId: 103325,
    Answers: [
      {
        Id: 103324,
        Text: 'Chứa 2 tham số',
      },
      {
        Id: 103325,
        Text: 'Nhiều tham số',
      },
      {
        Id: 103326,
        Text: 'Chứa 3 tham số',
      },
      {
        Id: 103327,
        Text: 'Chỉ 1 tham số',
      },
    ],
  },
  {
    Id: 24912,
    Text: 'Phát biểu nào sau đây là đúng ?',
    Marks: 1,
    AnswerId: 103330,
    Answers: [
      {
        Id: 103328,
        Text: 'Thủ tục Function và thủ tục Sub đều không có giá trị trả về',
      },
      {
        Id: 103329,
        Text: 'Thủ tục Function và thủ tục Sub đều có giá trị trả về',
      },
      {
        Id: 103330,
        Text: 'Thủ tục Function có giá trị trả về, thủ tục Sub không có giá trị trả về',
      },
      {
        Id: 103331,
        Text: 'Thủ tục Function không có giá trị trả về, thủ tục Sub có giá trị trả về',
      },
    ],
  },
  {
    Id: 24913,
    Text: 'Khai báo kết thúc thủ tục Function bằng từ khóa nào?',
    Marks: 1,
    AnswerId: 103333,
    Answers: [
      {
        Id: 103332,
        Text: 'Return',
      },
      {
        Id: 103333,
        Text: 'End Function',
      },
      {
        Id: 103334,
        Text: 'End Sub',
      },
      {
        Id: 103335,
        Text: 'Function End',
      },
    ],
  },
  {
    Id: 24914,
    Text: 'Khi viết Hàm hay Thủ tục mà không khai báo toán tử phạm vi [ Public, Private, Protected,...] thì phạm vi truy cập của Hàm và Thủ tục đó sẽ hiểu ngầm định là gì?',
    Marks: 1,
    AnswerId: 103338,
    Answers: [
      {
        Id: 103336,
        Text: 'Protected',
      },
      {
        Id: 103337,
        Text: 'Public',
      },
      {
        Id: 103338,
        Text: 'Private',
      },
    ],
  },
  {
    Id: 24915,
    Text: 'Kĩ thuật nào mà ứng dụng được phân chia thành nhiều thành phần nhỏ hơn để dễ quản lý, từ đó giúp đơn giản hóa việc thiết kế, phát triển và bảo trì ứng dụng cỡ vừa và lớn?',
    Marks: 1,
    AnswerId: 103340,
    Answers: [
      {
        Id: 103339,
        Text: 'Kĩ thuật thác nước',
      },
      {
        Id: 103340,
        Text: 'Kĩ thuật chia để trị',
      },
      {
        Id: 103341,
        Text: 'Kĩ thuật xoáy ốc',
      },
      {
        Id: 103342,
        Text: 'Kỹ thuật lồng chim bồ câu',
      },
    ],
  },
]
export const WEBU = [
  {
    Id: 25580,
    Text: 'Trong Dreamweaver CS4 muốn  liên kết bên ngoài website, người dùng sử dụng loại liên kết nào?',
    Marks: 1,
    AnswerId: 105940,
    Answers: [
      {
        Id: 105939,
        Text: 'Liên kết tương đối',
      },
      {
        Id: 105940,
        Text: 'Liên kết tuyệt đối',
      },
      {
        Id: 105941,
        Text: 'Liên kết tới Email',
      },
    ],
  },
  {
    Id: 25581,
    Text: 'Để xem và thay đổi định dạng hiện tại của một đối tượng (text/image), bạn nên sử dụng',
    Marks: 1,
    AnswerId: 105944,
    Answers: [
      {
        Id: 105942,
        Text: 'Property Inspector',
      },
      {
        Id: 105943,
        Text: 'Insert bar',
      },
      {
        Id: 105944,
        Text: 'Tag Inspector',
      },
      {
        Id: 105945,
        Text: 'File panel',
      },
    ],
  },
  {
    Id: 25582,
    Text: 'Chức năng nào sau đây không phải là một trong những chức năng chính của các công cụ hỗ trợ thiết kế web',
    Marks: 1,
    AnswerId: 105946,
    Answers: [
      {
        Id: 105946,
        Text: 'Hỗ trợ chỉnh sửa ảnh',
      },
      {
        Id: 105947,
        Text: 'Hỗ trợ quản lý site và FTP',
      },
      {
        Id: 105948,
        Text: 'Cung cấp môi trường soạn thảo và code',
      },
      {
        Id: 105949,
        Text: 'Cung cấp tính năng thiết kế giao diện và định dạng trang web',
      },
    ],
  },
  {
    Id: 25583,
    Text: 'Chương trình hoạt động bằng cách dịch mã HTML thành trang Web là',
    Marks: 1,
    AnswerId: 105950,
    Answers: [
      {
        Id: 105950,
        Text: 'Trình duyệt',
      },
      {
        Id: 105951,
        Text: 'Hệ điều hành',
      },
      {
        Id: 105952,
        Text: 'Protocol',
      },
      {
        Id: 105953,
        Text: 'Phần mềm tiện ích',
      },
    ],
  },
  {
    Id: 25584,
    Text: 'Để thêm các ký tự đặc biệt vào trang web, trên menu/thanh Insert, bạn cần chọn mục nào',
    Marks: 1,
    AnswerId: 105955,
    Answers: [
      {
        Id: 105954,
        Text: 'Conment',
      },
      {
        Id: 105955,
        Text: 'HTML/Special characters',
      },
      {
        Id: 105956,
        Text: 'HTML/Text Object',
      },
      {
        Id: 105957,
        Text: 'Image',
      },
    ],
  },
  {
    Id: 25585,
    Text: 'Bước nào sau đây không phải là một bước chính trong quá trình thiết kế web',
    Marks: 1,
    AnswerId: 105958,
    Answers: [
      {
        Id: 105958,
        Text: 'Thiết kế',
      },
      {
        Id: 105959,
        Text: 'Tìm template',
      },
      {
        Id: 105960,
        Text: 'Bảo trì',
      },
      {
        Id: 105961,
        Text: 'Kiểm thử',
      },
    ],
  },
  {
    Id: 25586,
    Text: 'WYSIWYG là viết tắt của',
    Marks: 1,
    AnswerId: 105965,
    Answers: [
      {
        Id: 105962,
        Text: 'Không gì cả',
      },
      {
        Id: 105963,
        Text: 'Tên của một chương trình',
      },
      {
        Id: 105964,
        Text: 'ways you see into Web yellow green',
      },
      {
        Id: 105965,
        Text: 'what you see is what you get',
      },
    ],
  },
  {
    Id: 25587,
    Text: 'Mã mầu trong các trang HTML gồm 6 kí tự và đứng trước là dấu thăng (#) sử dụng hệ cơ số nào?',
    Marks: 1,
    AnswerId: 105967,
    Answers: [
      {
        Id: 105966,
        Text: 'Hệ nhị phân',
      },
      {
        Id: 105967,
        Text: 'Hệ thập lục phân (Hecxa)',
      },
      {
        Id: 105968,
        Text: 'Hệ thập phân',
      },
      {
        Id: 105969,
        Text: 'Hệ BCD nén',
      },
    ],
  },
  {
    Id: 25588,
    Text: 'Giao thức nào là giao thức truyền tải siêu văn bản được dùng giữa Web client và Web server',
    Marks: 1,
    AnswerId: 105972,
    Answers: [
      {
        Id: 105970,
        Text: 'TCP/IP',
      },
      {
        Id: 105971,
        Text: 'WWW',
      },
      {
        Id: 105972,
        Text: 'HTTP',
      },
      {
        Id: 105973,
        Text: 'FTP',
      },
    ],
  },
  {
    Id: 25589,
    Text: 'Thông thường tiêu chuẩn Internet cho việc đặt tên trang chủ, hay trang đầu tiên mà người dùng truy  cập vào website sẽ là',
    Marks: 1,
    AnswerId: 105975,
    Answers: [
      {
        Id: 105974,
        Text: 'Bất kì tên nào',
      },
      {
        Id: 105975,
        Text: 'index.html',
      },
      {
        Id: 105976,
        Text: 'home.html',
      },
      {
        Id: 105977,
        Text: 'default.html',
      },
    ],
  },
  {
    Id: 25590,
    Text: 'Cách đặt Css nào mà chỉ áp dụng được cho một thẻ một lần và không thể tái sử dụng  lại',
    Marks: 1,
    AnswerId: 105980,
    Answers: [
      {
        Id: 105978,
        Text: 'internal style (style nội bộ trong file HTML)',
      },
      {
        Id: 105979,
        Text: 'external style (style lưu ở một file riêng)',
      },
      {
        Id: 105980,
        Text: 'inline style (Style nội tuyến trong thẻ HTML)',
      },
    ],
  },
  {
    Id: 25591,
    Text: 'Để mở cửa sổ Code Navigator người dung sử dụng phím tắt nào',
    Marks: 1,
    AnswerId: 105982,
    Answers: [
      {
        Id: 105981,
        Text: 'Ctrl+Click',
      },
      {
        Id: 105982,
        Text: 'Alt + Click',
      },
      {
        Id: 105983,
        Text: 'Shift + Click',
      },
      {
        Id: 105984,
        Text: 'Alt+Shift + Click',
      },
    ],
  },
  {
    Id: 25592,
    Text: 'Vì HTML không hỗ trợ các thẻ để định dạng về mặt hình thức cho trang web nên người ta mới phải sử dụng CSS ?',
    Marks: 1,
    AnswerId: 105986,
    Answers: [
      {
        Id: 105985,
        Text: 'Đúng',
      },
      {
        Id: 105986,
        Text: 'Sai',
      },
    ],
  },
  {
    Id: 25593,
    Text: 'HTM L bao gồm mấy nhóm thẻ:',
    Marks: 1,
    AnswerId: 105988,
    Answers: [
      {
        Id: 105987,
        Text: '5',
      },
      {
        Id: 105988,
        Text: '4',
      },
      {
        Id: 105989,
        Text: '6',
      },
      {
        Id: 105990,
        Text: '3',
      },
    ],
  },
  {
    Id: 25594,
    Text: 'CSS có thể đặt ở vị trí nào để kết hợp với HTML tạo định dạng cho nội dung  trên trang web',
    Marks: 1,
    AnswerId: 105992,
    Answers: [
      {
        Id: 105991,
        Text: 'Ngay trong mục \u003chead\u003e của trang HTML',
      },
      {
        Id: 105992,
        Text: 'Cả 3 cách trên',
      },
      {
        Id: 105993,
        Text: 'Đặt trong 1 file riêng',
      },
      {
        Id: 105994,
        Text: 'Ngay trong các thẻ của HTML',
      },
    ],
  },
  {
    Id: 25595,
    Text: 'Để khi liên kết, mở ra cho người dung một Tab/ Cửa sổ làm việc mới thì trong thẻ \u003ca\u003e thuộc tính target người dung lựa chọn giá trị:',
    Marks: 1,
    AnswerId: 105997,
    Answers: [
      {
        Id: 105995,
        Text: '_self',
      },
      {
        Id: 105996,
        Text: '_top',
      },
      {
        Id: 105997,
        Text: '_blank',
      },
      {
        Id: 105998,
        Text: '_parent',
      },
    ],
  },
  {
    Id: 25596,
    Text: 'Thẻ HTML cho tiêu đề lớn nhất là:',
    Marks: 1,
    AnswerId: 106002,
    Answers: [
      {
        Id: 105999,
        Text: 'heading',
      },
      {
        Id: 106000,
        Text: 'h4',
      },
      {
        Id: 106001,
        Text: 'h6',
      },
      {
        Id: 106002,
        Text: 'h1',
      },
    ],
  },
  {
    Id: 25597,
    Text: 'Thẻ \u003cfont\u003e và Css đều có khả năng áp dụng style nhất quán lên các thành phần trên một hoặc toàn bộ các trang web của một website',
    Marks: 1,
    AnswerId: 106003,
    Answers: [
      {
        Id: 106003,
        Text: 'Sai',
      },
      {
        Id: 106004,
        Text: 'Đúng',
      },
    ],
  },
  {
    Id: 25598,
    Text: 'Khi muốn tạo CSS được dùng chung cho nhiều trang web trong website thì nên đặt CSS đó ở',
    Marks: 1,
    AnswerId: 106007,
    Answers: [
      {
        Id: 106005,
        Text: 'Trong trang chủ',
      },
      {
        Id: 106006,
        Text: 'Trong phần của mỗi trang web',
      },
      {
        Id: 106007,
        Text: 'Một file riêng',
      },
      {
        Id: 106008,
        Text: 'Đi kèm với từng thẻ',
      },
    ],
  },
  {
    Id: 25599,
    Text: 'Thẻ nào được sử dụng để liên kết tệp css được định nghĩa từ file rời vào trang web',
    Marks: 1,
    AnswerId: 106012,
    Answers: [
      {
        Id: 106009,
        Text: '\u003ca\u003e',
      },
      {
        Id: 106010,
        Text: '\u003ccss\u003e',
      },
      {
        Id: 106011,
        Text: '\u003cstyle\u003e',
      },
      {
        Id: 106012,
        Text: '\u003clink\u003e',
      },
    ],
  },
  {
    Id: 25600,
    Text: 'Người dùng không thể sử dụng đối tượng (thẻ) nào để tạo layout cho một trang Web',
    Marks: 1,
    AnswerId: 106015,
    Answers: [
      {
        Id: 106013,
        Text: 'Table',
      },
      {
        Id: 106014,
        Text: 'Draw AP Div',
      },
      {
        Id: 106015,
        Text: 'Form',
      },
      {
        Id: 106016,
        Text: 'Insert Div Tag',
      },
    ],
  },
  {
    Id: 25601,
    Text: 'Yếu tố nào sau đây không phải là một trong những yếu tố thuộc mô hình hộp của CSS',
    Marks: 1,
    AnswerId: 106020,
    Answers: [
      {
        Id: 106017,
        Text: 'Đường biên',
      },
      {
        Id: 106018,
        Text: 'Độ rộng của phần nhìn thấy',
      },
      {
        Id: 106019,
        Text: 'Lề',
      },
      {
        Id: 106020,
        Text: 'Độ dài của nội dung',
      },
    ],
  },
  {
    Id: 25602,
    Text: 'Thẻ HTML nào thể hiện một dòng trong bảng',
    Marks: 1,
    AnswerId: 106021,
    Answers: [
      {
        Id: 106021,
        Text: 'TR',
      },
      {
        Id: 106022,
        Text: 'ROW',
      },
      {
        Id: 106023,
        Text: 'TD',
      },
      {
        Id: 106024,
        Text: 'TABULAR',
      },
    ],
  },
  {
    Id: 25603,
    Text: 'Phác thảo Web nằm trong pha nào của thiết kế Web',
    Marks: 1,
    AnswerId: 106026,
    Answers: [
      {
        Id: 106025,
        Text: 'Thực thi',
      },
      {
        Id: 106026,
        Text: 'Thiết kế',
      },
      {
        Id: 106027,
        Text: 'Kiểm thử',
      },
      {
        Id: 106028,
        Text: 'Xác định và phân tích yêu cầu',
      },
    ],
  },
  {
    Id: 25604,
    Text: 'Điểm khác biệt giữa bảng có chiều dài cố định và bảng có kích thước theo tỷ lệ phần trăm (%) là',
    Marks: 1,
    AnswerId: 106030,
    Answers: [
      {
        Id: 106029,
        Text: 'Không có khác biệt gì',
      },
      {
        Id: 106030,
        Text: 'Bảng có kích thước theo tỉ lệ % có thể co giãn phù hợp với mọi trình duyệt, còn kích thước cố định thì không.',
      },
      {
        Id: 106031,
        Text: 'Bảng có kích thước theo tỉ lệ % không tương thích với mọi trình duyệt',
      },
      {
        Id: 106032,
        Text: 'Bảng có kích thước cố định có thể co giãn phù hợp với mọi trình duyệt, còn kích thước theo tỉ lệ % thì không.',
      },
    ],
  },
  {
    Id: 25605,
    Text: 'Thao tác nào không được làm trong giai đoạn phác thảo khi thiết kế Website',
    Marks: 1,
    AnswerId: 106036,
    Answers: [
      {
        Id: 106033,
        Text: 'Tạo liên kết giữa các trang',
      },
      {
        Id: 106034,
        Text: 'Tạo layout',
      },
      {
        Id: 106035,
        Text: 'Sơ đồ Website',
      },
      {
        Id: 106036,
        Text: 'Tạo các file CSS',
      },
    ],
  },
  {
    Id: 25606,
    Text: 'Danh sách có thứ tự trong Dreamweaver chỉ có thể bắt đầu từ số 1 ?',
    Marks: 1,
    AnswerId: 106037,
    Answers: [
      {
        Id: 106037,
        Text: 'Sai',
      },
      {
        Id: 106038,
        Text: 'Đúng',
      },
    ],
  },
  {
    Id: 25607,
    Text: 'Muốn bảng tự động giãn ra trên cửa sổ màn hình to và thu lại trên cửa sổ màn hình nhỏ thì phải chọn loại bảng',
    Marks: 1,
    AnswerId: 106039,
    Answers: [
      {
        Id: 106039,
        Text: 'Bảng có kích cỡ dựa trên phần trăm',
      },
      {
        Id: 106040,
        Text: 'Bảng được thiết kế bởi CSS',
      },
      {
        Id: 106041,
        Text: 'Bảng được căn chỉnh giữa',
      },
      {
        Id: 106042,
        Text: 'Bảng có kích cỡ cố định',
      },
    ],
  },
  {
    Id: 25608,
    Text: 'Trong CSS, các hộp (box) có thể lồng nhau',
    Marks: 1,
    AnswerId: 106044,
    Answers: [
      {
        Id: 106043,
        Text: 'Sai',
      },
      {
        Id: 106044,
        Text: 'Đúng',
      },
    ],
  },
  {
    Id: 25609,
    Text: 'Trong kỹ thuật chỉnh nâng cao có những kỹ thuật nào ?',
    Marks: 1,
    AnswerId: 106045,
    Answers: [
      {
        Id: 106045,
        Text: 'Đối xúng',
      },
      {
        Id: 106046,
        Text: 'Bẻ văn bản',
      },
      {
        Id: 106047,
        Text: 'Khối văn bản',
      },
      {
        Id: 106048,
        Text: 'Không đối xứng',
      },
    ],
  },
  {
    Id: 25610,
    Text: 'Định dạng nào sau đây không phải là định dạng của tệp tin chứa hình động ?',
    Marks: 1,
    AnswerId: 106050,
    Answers: [
      {
        Id: 106049,
        Text: 'FLV',
      },
      {
        Id: 106050,
        Text: 'MP3',
      },
      {
        Id: 106051,
        Text: 'AVI',
      },
      {
        Id: 106052,
        Text: 'Mp4',
      },
    ],
  },
  {
    Id: 25611,
    Text: 'Định dạng nào sau đây không phải là định dạng của tệp tin chứa âm thanh ?',
    Marks: 1,
    AnswerId: 106055,
    Answers: [
      {
        Id: 106053,
        Text: 'MP3',
      },
      {
        Id: 106054,
        Text: 'WAV',
      },
      {
        Id: 106055,
        Text: 'GIF',
      },
      {
        Id: 106056,
        Text: 'RM',
      },
    ],
  },
  {
    Id: 25612,
    Text: 'Để xem một file .flv, người sử dụng trình duyệt cần cài đặt Plug-in Flash Player trong máy tính.',
    Marks: 1,
    AnswerId: 106058,
    Answers: [
      {
        Id: 106057,
        Text: 'Sai',
      },
      {
        Id: 106058,
        Text: 'Đúng',
      },
    ],
  },
  {
    Id: 25613,
    Text: 'Định dạng ảnh nào cho kích thước file nhỏ nhất?',
    Marks: 1,
    AnswerId: 106060,
    Answers: [
      {
        Id: 106059,
        Text: 'GIF',
      },
      {
        Id: 106060,
        Text: 'PNG',
      },
      {
        Id: 106061,
        Text: 'JPEG',
      },
    ],
  },
  {
    Id: 25614,
    Text: 'Để thêm các chức năng thường hay sử dụng nhiều hơn các chức năng khác, người sử dụng dùng nhóm thẻ nào?',
    Marks: 1,
    AnswerId: 106062,
    Answers: [
      {
        Id: 106062,
        Text: 'Favorites',
      },
      {
        Id: 106063,
        Text: 'Layout',
      },
      {
        Id: 106064,
        Text: 'Form',
      },
      {
        Id: 106065,
        Text: 'Common',
      },
    ],
  },
  {
    Id: 25615,
    Text: 'Các công cụ nào sau đây không giúp việc thiết kế giao diện website được chính xác hơn',
    Marks: 1,
    AnswerId: 106066,
    Answers: [
      {
        Id: 106066,
        Text: 'Zoom',
      },
      {
        Id: 106067,
        Text: 'Thước kẻ',
      },
      {
        Id: 106068,
        Text: 'Favorite tab',
      },
      {
        Id: 106069,
        Text: 'Grid',
      },
    ],
  },
  {
    Id: 25616,
    Text: 'Người dùng có thể lưu các thành phần mình thường xuyên sử dụng vào đâu để tiện tìm kiếm ?',
    Marks: 1,
    AnswerId: 106070,
    Answers: [
      {
        Id: 106070,
        Text: 'Favorite tab',
      },
      {
        Id: 106071,
        Text: 'Insert panel',
      },
      {
        Id: 106072,
        Text: 'AP Elements',
      },
      {
        Id: 106073,
        Text: 'Files panel',
      },
    ],
  },
  {
    Id: 25617,
    Text: 'Tên nào sau đây KHÔNG phải là tên của một plug-in đa phương tiện',
    Marks: 1,
    AnswerId: 106075,
    Answers: [
      {
        Id: 106074,
        Text: 'Window Media Player',
      },
      {
        Id: 106075,
        Text: 'FTP',
      },
      {
        Id: 106076,
        Text: 'Shockware Flash',
      },
      {
        Id: 106077,
        Text: 'Quicktime player',
      },
    ],
  },
  {
    Id: 25618,
    Text: 'Để lựa chọn chất lượng Flash khi chèn vào trang Web, người sử dụng lựa chọn thuộc tính nào trong Properties Inspector.',
    Marks: 1,
    AnswerId: 106080,
    Answers: [
      {
        Id: 106078,
        Text: 'Align',
      },
      {
        Id: 106079,
        Text: 'Scale',
      },
      {
        Id: 106080,
        Text: 'Qualily',
      },
      {
        Id: 106081,
        Text: 'Wmode',
      },
    ],
  },
  {
    Id: 25619,
    Text: 'Không thể di chuyển được vị trí của Insert Panel trong Dreamweaver',
    Marks: 1,
    AnswerId: 106083,
    Answers: [
      {
        Id: 106082,
        Text: 'Đúng',
      },
      {
        Id: 106083,
        Text: 'Sai',
      },
    ],
  },
  {
    Id: 25620,
    Text: 'Dreamweaver KHÔNG thể kiểm tra tính hợp lệ của loại code nào sau đây',
    Marks: 1,
    AnswerId: 106087,
    Answers: [
      {
        Id: 106084,
        Text: 'CSS',
      },
      {
        Id: 106085,
        Text: 'HTML',
      },
      {
        Id: 106086,
        Text: 'XML',
      },
      {
        Id: 106087,
        Text: 'ActionScript',
      },
    ],
  },
  {
    Id: 25621,
    Text: 'Thành phần nào sau đây không phải là một loại module được hỗ trợ bởi Dreamweaver',
    Marks: 1,
    AnswerId: 106090,
    Answers: [
      {
        Id: 106088,
        Text: 'Template',
      },
      {
        Id: 106089,
        Text: 'Library item',
      },
      {
        Id: 106090,
        Text: 'Image',
      },
      {
        Id: 106091,
        Text: 'Snippet',
      },
    ],
  },
  {
    Id: 25622,
    Text: 'Để thay đổi kích cỡ chữ của đoạn chữ nằm trong thẻ \u003cfont\u003e ở cửa sổ code view, người thiết kế phải thay đổi giá trị của thuộc tính nào ?',
    Marks: 1,
    AnswerId: 106093,
    Answers: [
      {
        Id: 106092,
        Text: 'Font family',
      },
      {
        Id: 106093,
        Text: 'Font size',
      },
      {
        Id: 106094,
        Text: 'Head',
      },
      {
        Id: 106095,
        Text: 'body',
      },
    ],
  },
  {
    Id: 25623,
    Text: 'Trong template, các vùng có nội dung lặp lại ở các trang cụ thể áp dụng template này là các vùng có thể sửa đổi được?',
    Marks: 1,
    AnswerId: 106096,
    Answers: [
      {
        Id: 106096,
        Text: 'Sai',
      },
      {
        Id: 106097,
        Text: 'Đúng',
      },
    ],
  },
  {
    Id: 25624,
    Text: 'Để hiển thị thứ tự dòng trong cửa sổ code view phải đảm bảo mục nào sau đây được chọn trong View Options',
    Marks: 1,
    AnswerId: 106100,
    Answers: [
      {
        Id: 106098,
        Text: 'Rulers',
      },
      {
        Id: 106099,
        Text: 'Auto indent',
      },
      {
        Id: 106100,
        Text: 'Line number',
      },
      {
        Id: 106101,
        Text: 'Word wrap',
      },
    ],
  },
  {
    Id: 25625,
    Text: 'Trên cửa sổ code view, chọn File -\u003e Validate -\u003e Markup, chuyện gì sẽ xảy ra',
    Marks: 1,
    AnswerId: 106104,
    Answers: [
      {
        Id: 106102,
        Text: 'Một danh sách các dòng code hợp lệ sẽ được hiển thị',
      },
      {
        Id: 106103,
        Text: 'Một danh sách các dòng chú thích sẽ được hiển thị',
      },
      {
        Id: 106104,
        Text: 'Một danh sách các dòng code bị sai cú pháp sẽ được hiển thị',
      },
      {
        Id: 106105,
        Text: 'Không có chuyện gì xảy ra',
      },
    ],
  },
  {
    Id: 25626,
    Text: 'Trong template, vùng có thể được sửa đổi từ bất cứ trang web nào dùng template đó được gọi là:',
    Marks: 1,
    AnswerId: 106109,
    Answers: [
      {
        Id: 106106,
        Text: 'Product Category',
      },
      {
        Id: 106107,
        Text: 'Template Object',
      },
      {
        Id: 106108,
        Text: 'Library item',
      },
      {
        Id: 106109,
        Text: 'Editable Region',
      },
    ],
  },
  {
    Id: 25627,
    Text: 'Panel nào được dùng để quản lý các thành phần thư viện và mẫu',
    Marks: 1,
    AnswerId: 106112,
    Answers: [
      {
        Id: 106110,
        Text: 'AP Elements',
      },
      {
        Id: 106111,
        Text: 'Insert',
      },
      {
        Id: 106112,
        Text: 'Assets',
      },
      {
        Id: 106113,
        Text: 'Snippet',
      },
    ],
  },
  {
    Id: 25628,
    Text: 'Mã nguồn của trang Web KHÔNG chứa loại code nào ?',
    Marks: 1,
    AnswerId: 106115,
    Answers: [
      {
        Id: 106114,
        Text: 'HTML',
      },
      {
        Id: 106115,
        Text: 'C#',
      },
      {
        Id: 106116,
        Text: 'JavaScript',
      },
      {
        Id: 106117,
        Text: 'CSS',
      },
    ],
  },
  {
    Id: 25629,
    Text: 'Khi chỉnh sửa snippet, tất cả các trang web sử dụng snippet đấy cũng được cập nhật theo',
    Marks: 1,
    AnswerId: 106118,
    Answers: [
      {
        Id: 106118,
        Text: 'Sai',
      },
      {
        Id: 106119,
        Text: 'Đúng',
      },
    ],
  },
  {
    Id: 25630,
    Text: 'Độ dài của thông tin gửi lên server sẽ bị giới hạn nếu sử dụng phương pháp submit GET',
    Marks: 1,
    AnswerId: 106121,
    Answers: [
      {
        Id: 106120,
        Text: 'Sai',
      },
      {
        Id: 106121,
        Text: 'Đúng',
      },
    ],
  },
  {
    Id: 25631,
    Text: 'Thành phần nào sau đây là một trong những thành phần cơ bản nhất của Spry',
    Marks: 1,
    AnswerId: 106122,
    Answers: [
      {
        Id: 106122,
        Text: 'Widgets',
      },
      {
        Id: 106123,
        Text: 'Template',
      },
      {
        Id: 106124,
        Text: 'Snippet',
      },
      {
        Id: 106125,
        Text: 'Library item',
      },
    ],
  },
  {
    Id: 25632,
    Text: 'Panel nào sau đây hỗ trợ công việc validation trong Dreamweaver',
    Marks: 1,
    AnswerId: 106127,
    Answers: [
      {
        Id: 106126,
        Text: 'CSS style',
      },
      {
        Id: 106127,
        Text: 'Behavior',
      },
      {
        Id: 106128,
        Text: 'AP Elements',
      },
      {
        Id: 106129,
        Text: 'Insert',
      },
    ],
  },
  {
    Id: 25633,
    Text: 'Loại widget nào của spry cho phép bạn tạo một panel có thể đóng/mở được',
    Marks: 1,
    AnswerId: 106133,
    Answers: [
      {
        Id: 106130,
        Text: 'Accordion Panel',
      },
      {
        Id: 106131,
        Text: 'Tabbed Panel',
      },
      {
        Id: 106132,
        Text: 'Menu bar',
      },
      {
        Id: 106133,
        Text: 'Collapsible Panel',
      },
    ],
  },
  {
    Id: 25634,
    Text: 'Tên nào sau đây không phải là tên của một ngôn ngữ lập trình ?',
    Marks: 1,
    AnswerId: 106137,
    Answers: [
      {
        Id: 106134,
        Text: 'Visual Basic',
      },
      {
        Id: 106135,
        Text: 'Pascal',
      },
      {
        Id: 106136,
        Text: 'C++',
      },
      {
        Id: 106137,
        Text: 'AJAX',
      },
    ],
  },
  {
    Id: 25635,
    Text: 'Việc kiểm tra cú pháp của tên tài khoản trong các form đăng ký THƯỜNG được thực hiện ở phía',
    Marks: 1,
    AnswerId: 106138,
    Answers: [
      {
        Id: 106138,
        Text: 'Client',
      },
      {
        Id: 106139,
        Text: 'Server',
      },
    ],
  },
  {
    Id: 25636,
    Text: 'Thành phần giao diện nào trên form cho phép người dùng chọn duy nhất một lựa chọn từ một danh sách cho trước',
    Marks: 1,
    AnswerId: 106141,
    Answers: [
      {
        Id: 106140,
        Text: 'Textbox',
      },
      {
        Id: 106141,
        Text: 'Radio button',
      },
      {
        Id: 106142,
        Text: 'Button',
      },
      {
        Id: 106143,
        Text: 'Checkbox',
      },
    ],
  },
  {
    Id: 25637,
    Text: 'Giá trị  nào sau đây không phải là giá trị của thuộc tính Type của thẻ Button trong HTML',
    Marks: 1,
    AnswerId: 106144,
    Answers: [
      {
        Id: 106144,
        Text: 'OK',
      },
      {
        Id: 106145,
        Text: 'Button',
      },
      {
        Id: 106146,
        Text: 'Reset',
      },
      {
        Id: 106147,
        Text: 'Submit',
      },
    ],
  },
  {
    Id: 25638,
    Text: 'Để thay đổi màu chữ được nhập trong ô textbox trên form bằng CSS, người thiết kế phải thay đổi giá trị thuộc lớp nào ?',
    Marks: 1,
    AnswerId: 106150,
    Answers: [
      {
        Id: 106148,
        Text: 'label',
      },
      {
        Id: 106149,
        Text: 'font-color',
      },
      {
        Id: 106150,
        Text: 'color',
      },
      {
        Id: 106151,
        Text: 'text-color',
      },
    ],
  },
  {
    Id: 25639,
    Text: 'Khi sử dụng Spry data widget, loại dữ liệu nào sau đây sẽ KHÔNG được chấp nhận',
    Marks: 1,
    AnswerId: 106155,
    Answers: [
      {
        Id: 106152,
        Text: 'HTML dataset',
      },
      {
        Id: 106153,
        Text: 'JSON',
      },
      {
        Id: 106154,
        Text: 'XML',
      },
      {
        Id: 106155,
        Text: 'Excel data',
      },
    ],
  },
  {
    Id: 25640,
    Text: 'FTP là viết tắt của',
    Marks: 1,
    AnswerId: 106158,
    Answers: [
      {
        Id: 106156,
        Text: 'File to Program',
      },
      {
        Id: 106157,
        Text: 'File translate protocol',
      },
      {
        Id: 106158,
        Text: 'File transfer protocol',
      },
      {
        Id: 106159,
        Text: 'Fast transfer protocol',
      },
    ],
  },
  {
    Id: 25641,
    Text: 'Tên nào sau đây không phải là tên của một free host',
    Marks: 1,
    AnswerId: 106161,
    Answers: [
      {
        Id: 106160,
        Text: '000Webhost',
      },
      {
        Id: 106161,
        Text: 'microsoft',
      },
      {
        Id: 106162,
        Text: 'Byethost',
      },
      {
        Id: 106163,
        Text: '110MB',
      },
    ],
  },
  {
    Id: 25642,
    Text: 'Thông tin trên BUSINESS CARD bao gồm những thông tin nào ?',
    Marks: 1,
    AnswerId: 106165,
    Answers: [
      {
        Id: 106164,
        Text: 'Dịa chỉ',
      },
      {
        Id: 106165,
        Text: 'Số Điện thoại',
      },
      {
        Id: 106166,
        Text: 'Tên người thân',
      },
      {
        Id: 106167,
        Text: 'Tên công ty, logo',
      },
    ],
  },
  {
    Id: 25643,
    Text: 'Bước nào sau đây KHÔNG phải là một bước xuất bản website',
    Marks: 1,
    AnswerId: 106168,
    Answers: [
      {
        Id: 106168,
        Text: 'Tạo layout',
      },
      {
        Id: 106169,
        Text: 'Lựa chọn tên miền',
      },
      {
        Id: 106170,
        Text: 'Lựa chọn web server',
      },
      {
        Id: 106171,
        Text: 'Quảng bá',
      },
    ],
  },
  {
    Id: 25644,
    Text: 'Website sau khi đã upload lên web server rồi thì không sửa đổi được nữa',
    Marks: 1,
    AnswerId: 106172,
    Answers: [
      {
        Id: 106172,
        Text: 'Sai',
      },
      {
        Id: 106173,
        Text: 'Đúng',
      },
    ],
  },
  {
    Id: 25645,
    Text: 'Kỹ thuật tạo dòng chảy từ ngữ khi thiết kế sản phẩm. Những kỹ thuật nào cần nên tránh?',
    Marks: 1,
    AnswerId: 106176,
    Answers: [
      {
        Id: 106174,
        Text: 'Chọn tiêu đè',
      },
      {
        Id: 106175,
        Text: 'Giữ văn bản phù hợp',
      },
      {
        Id: 106176,
        Text: 'Nhiều kiểu chữ',
      },
      {
        Id: 106177,
        Text: 'Kiểu chữ dễ đọc',
      },
    ],
  },
  {
    Id: 25646,
    Text: 'Để cung cấp danh sách các từ khóa tương ứng với website, người ta thường sử dụng thẻ',
    Marks: 1,
    AnswerId: 106181,
    Answers: [
      {
        Id: 106178,
        Text: 'Thẻ object',
      },
      {
        Id: 106179,
        Text: 'Thẻ h1',
      },
      {
        Id: 106180,
        Text: 'Thẻ table',
      },
      {
        Id: 106181,
        Text: 'Thẻ meta',
      },
    ],
  },
  {
    Id: 25647,
    Text: 'Để kiểm tra tính tương thích với trình duyệt của website, phải sử dụng công cụ nào:',
    Marks: 1,
    AnswerId: 106185,
    Answers: [
      {
        Id: 106182,
        Text: 'Check in',
      },
      {
        Id: 106183,
        Text: 'Check link',
      },
      {
        Id: 106184,
        Text: 'Site report',
      },
      {
        Id: 106185,
        Text: 'Browser Compatibility Check',
      },
    ],
  },
  {
    Id: 25648,
    Text: 'Khi muốn kiểm tra xem các kết nối trong website đã chính xác hay chưa, phải sử dụng công cụ nào sau đây:',
    Marks: 1,
    AnswerId: 106187,
    Answers: [
      {
        Id: 106186,
        Text: 'Check out',
      },
      {
        Id: 106187,
        Text: 'Check link',
      },
      {
        Id: 106188,
        Text: 'Design note',
      },
      {
        Id: 106189,
        Text: 'Check in',
      },
    ],
  },
  {
    Id: 25649,
    Text: 'Giao thức thường được sử dụng để upload website lên web server là giao thức nào  ?',
    Marks: 1,
    AnswerId: 106192,
    Answers: [
      {
        Id: 106190,
        Text: 'HTTP',
      },
      {
        Id: 106191,
        Text: 'DNS',
      },
      {
        Id: 106192,
        Text: 'FTP',
      },
      {
        Id: 106193,
        Text: 'FPT',
      },
    ],
  },
  {
    Id: 25650,
    Text: 'Trong Dreamweaver, muốn kiểm tra tình trạng của link cần thiết phải sử dụng lệnh nào sau đây?',
    Marks: 1,
    AnswerId: 106196,
    Answers: [
      {
        Id: 106194,
        Text: 'Check url',
      },
      {
        Id: 106195,
        Text: 'Check check',
      },
      {
        Id: 106196,
        Text: 'Check link',
      },
      {
        Id: 106197,
        Text: 'Check show',
      },
    ],
  },
  {
    Id: 25651,
    Text: 'Thẻ \u003cmeta\u003e cho phép điều gì xảy ra?',
    Marks: 1,
    AnswerId: 106201,
    Answers: [
      {
        Id: 106198,
        Text: 'Tất cả các ý kiến trên đều sai',
      },
      {
        Id: 106199,
        Text: 'Sắp xếp nội dung',
      },
      {
        Id: 106200,
        Text: 'Sắp xếp thông tin',
      },
      {
        Id: 106201,
        Text: 'Liên kết các trang với một danh sách các chuỗi tìm kiếm khác nhau',
      },
    ],
  },
  {
    Id: 25652,
    Text: 'Đâu là một trong những công việc cần làm cho việc đăng tải site?',
    Marks: 1,
    AnswerId: 106204,
    Answers: [
      {
        Id: 106202,
        Text: 'Kiểm tra toàn bộ liên kết trên web',
      },
      {
        Id: 106203,
        Text: 'Tạo và kiểm tra kết nối FTP',
      },
      {
        Id: 106204,
        Text: 'Tất cả các ý kiến trên đều đúng',
      },
      {
        Id: 106205,
        Text: 'Thực hiện báo cáo site',
      },
    ],
  },
  {
    Id: 25653,
    Text: 'Báo cáo site có thể được lưu dưới dạng nào sau đây?',
    Marks: 1,
    AnswerId: 106209,
    Answers: [
      {
        Id: 106206,
        Text: 'AJAX',
      },
      {
        Id: 106207,
        Text: 'XHTML',
      },
      {
        Id: 106208,
        Text: 'HTML',
      },
      {
        Id: 106209,
        Text: 'XML',
      },
    ],
  },
  {
    Id: 25654,
    Text: 'Để tải file ên server, cần thiết phải biết được thành phần nào sau đây?',
    Marks: 1,
    AnswerId: 106210,
    Answers: [
      {
        Id: 106210,
        Text: 'Tất cả các ý kiến trên đều đúng',
      },
      {
        Id: 106211,
        Text: 'Tên đăng nhập và mật khẩu để truy cập server',
      },
      {
        Id: 106212,
        Text: 'Địa chỉ FTP của web server và thư mục cụ thể',
      },
      {
        Id: 106213,
        Text: 'Thư mục cụ thể, nơi các file sẽ được tải lên',
      },
    ],
  },
  {
    Id: 25655,
    Text: 'Thành công của website bắt nguồn từ khả năng hiện diện trên máy tìm kiếm. ĐÚng hay sai?',
    Marks: 1,
    AnswerId: 106215,
    Answers: [
      {
        Id: 106214,
        Text: 'Sai',
      },
      {
        Id: 106215,
        Text: 'Đúng',
      },
    ],
  },
  {
    Id: 25656,
    Text: 'Bảng Files đáp ứng tất cả các tinh năng của một dứng dụng trueyefn tải và đồng bộ hoá file. ĐÚng hay sai?',
    Marks: 1,
    AnswerId: 106217,
    Answers: [
      {
        Id: 106216,
        Text: 'Sai',
      },
      {
        Id: 106217,
        Text: 'Đúng',
      },
    ],
  },
  {
    Id: 25657,
    Text: 'Theo mặc định, Dreamweaver sẽ tự động chèn thẻ nào sau đây?',
    Marks: 1,
    AnswerId: 106220,
    Answers: [
      {
        Id: 106218,
        Text: '\u003clayer\u003e\u003c/layer\u003e',
      },
      {
        Id: 106219,
        Text: '\u003cshow\u003e\u003c/show\u003e',
      },
      {
        Id: 106220,
        Text: '\u003ctitle\u003e\u003c/title\u003e',
      },
      {
        Id: 106221,
        Text: 'Tất cả các ý kiến trên đều đúng',
      },
    ],
  },
  {
    Id: 25658,
    Text: 'Việc chạy Link CHecker trên toàn bộ site có tác dụng gì?',
    Marks: 1,
    AnswerId: 106224,
    Answers: [
      {
        Id: 106222,
        Text: 'Kiểm tra các link',
      },
      {
        Id: 106223,
        Text: 'Kiểm tra văn bản',
      },
      {
        Id: 106224,
        Text: 'Kiểm tra các liên kết gãy giữa các trang hoặc liên kết sai tới hình ảnh',
      },
      {
        Id: 106225,
        Text: 'Kiểm tra hình ảnh',
      },
    ],
  },
  {
    Id: 25659,
    Text: 'Design Notes có tác dụng gì?',
    Marks: 1,
    AnswerId: 106229,
    Answers: [
      {
        Id: 106226,
        Text: 'Lưu trữ hình ảnh',
      },
      {
        Id: 106227,
        Text: 'Các phương án đều đúng',
      },
      {
        Id: 106228,
        Text: 'Lưu trữ nội dung chữ',
      },
      {
        Id: 106229,
        Text: 'Lưu trữ những thông tin bổ sung về file hay đối tượng đa phương tiện trong web',
      },
    ],
  },
]
