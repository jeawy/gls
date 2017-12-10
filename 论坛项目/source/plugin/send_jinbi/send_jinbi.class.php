<?php
if(!defined('IN_DISCUZ')) {

exit('Access Denied');

}

class plugin_send_jinbi {

	function global_header() {

		global $_G;

		$sendConfig = array();

		$sendConfig = $_G['cache']['plugin']['send_jinbi'];//缓存插件变量值

		if( intval($sendConfig['status']) == 1 ) {//是否启动插件

		if( isset($_POST['regsubmit']) ) { //会员注册后

		$uid = intval($_G['member']['uid']);

		if( $uid ){

		$jinbi_num = intval($sendConfig['jinbi_num']);//送金币数量
        
		//更新金币数 （这个是function_core.php的现成函数）
		updatemembercount($uid,array("extcredits2" => $jinbi_num)); 

		//这里可以进行任何数据库的操作

		}

		}

		}

	}

}

?>