<?php 
// 2022最新获取QQ用户信息接口
// By HackPig520
header("Content-Type:application/json"); 
error_reporting(E_ALL^E_NOTICE^E_WARNING); 
 
// 获取QQ号 
$qq = $_REQUEST["qq"]; 
 
// 过滤 
if (trim(empty($qq))) { 
    echo json_encode(array('msg' => 'null'),true); 
}else{ 
    // 获取QQ用户信息 
    $urlPre='http://r.qzone.qq.com/fcg-bin/cgi_get_portrait.fcg?g_tk=1518561325&uins='; 
    $data=file_get_contents($urlPre.$qq); 
    $data=iconv("GB2312","UTF-8",$data); 
    $pattern = '/portraitCallBack\((.*)\)/is'; 
    preg_match($pattern,$data,$result); 
    $result=$result[1]; 
    $qqnickname = json_decode($result, true)["$qq"][6]; 
    $qqheadimg = "https://q2.qlogo.cn/headimg_dl?dst_uin=".$qq."&spec=100"; 
 
    // 开始判断这个QQ号是不是有真实用户信息返回 
    if ($qqnickname) { 
        // 如果有，就可以返回JSON数据 
        echo json_encode(array('msg' => 'success','nickname' => $qqnickname,'headimg' => $qqheadimg),true); 
    }else{ 
        //如果没有，那么只能返回获取失败 
        echo json_encode(array('msg' => 'error'),true); 
    } 
} 
?>