<?php
if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}
class plugin_siancxl_tp{
    function global_header(){
        global $_G;        
        $data = $_G['cache']['plugin']['siancxl_tp'];
       include template('siancxl_tp:siancxl_tp');
       return $return;
    }
}
?>