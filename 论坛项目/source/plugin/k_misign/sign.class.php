<?php
!defined('IN_DISCUZ') && exit('Access Denied');

class plugin_k_misign{
	function _k_misign_showbutton($width) {
		global $_G;
		$setting = $_G['cache']['plugin']['k_misign'];
		$setting['groups'] = unserialize($setting['groups']);
		$setting['ban'] = explode(",",$setting['ban']);
		$setting['width'] = $setting['width'] ? $setting['width'] : 220;
		$setting['bcolor'] = $setting['bcolor'] ? $setting['bcolor'] : '#ff6f3d';
		$setting['hcolor'] = $setting['hcolor'] ? $setting['hcolor'] : '#ff7d49';
		
		$setting['width'] = $width ? $width : $setting['width'];
		
		$stats = DB::fetch_first("SELECT * FROM ".DB::table('plugin_k_misignset')." WHERE id='1'");
		$qiandaodb = DB::fetch_first("SELECT * FROM ".DB::table('plugin_k_misign')." WHERE uid='$_G[uid]'");
		$tdtime = gmmktime(0,0,0,dgmdate($_G['timestamp'], 'n',$setting['tos']),dgmdate($_G['timestamp'], 'j',$setting['tos']),dgmdate($_G['timestamp'], 'Y',$setting['tos'])) - $setting['tos']*3600;
		$allowmem = memory('check');
		
		if((!in_array($_G['uid'], $setting['ban']) && in_array($_G['groupid'], $setting['groups'])) || !$_G['uid']) {
			if($allowmem && $setting['mcacheopen']){
				$signtime = memory('get', 'k_misign_'.$_G['uid']);
			}
			if(!$signtime){
				$htime = dgmdate($_G['timestamp'], 'H',$setting['tos']);
				if($qiandaodb){
					if($allowmem && $setting['mcacheopen']){
						memory('set', 'k_misign_'.$_G['uid'], $qiandaodb['time'], 86400);
					}
					if($qiandaodb['time'] < $tdtime){
						include template("k_misign:hook_indexside");
						return $return;
					}else{
						include template("k_misign:hook_indexside");
						return $return;
					}
				}else{
					include template("k_misign:hook_indexside");
					return $return;
				}
			}else{
				if($signtime < $tdtime){
					include template("k_misign:hook_indexside");
					return $return;
				}else{
					include template("k_misign:hook_indexside");
					return $return;
				}
			}
		}
		return '';
	}
}

class plugin_k_misign_portal extends plugin_k_misign {
	function index_side_k_misign_output() {
		global $_G;
		$setting = $_G['cache']['plugin']['k_misign'];
		$setting['modstatus'] = unserialize($setting['modstatus']);
		if($setting['modstatus']['portal_index']['status']){
			return $this->_k_misign_showbutton($setting['modstatus']['portal_index']['width']);
		}else{
			return;
		}
	}
	function list_side_k_misign_output() {
		global $_G;
		$setting = $_G['cache']['plugin']['k_misign'];
		$setting['modstatus'] = unserialize($setting['modstatus']);
		if($setting['modstatus']['portal_list']['status']){
			return $this->_k_misign_showbutton($setting['modstatus']['portal_list']['width']);
		}else{
			return;
		}
	}
	function view_article_side_top_output() {
		global $_G;
		$setting = $_G['cache']['plugin']['k_misign'];
		$setting['modstatus'] = unserialize($setting['modstatus']);
		if($setting['modstatus']['portal_view']['status']){
			return $this->_k_misign_showbutton($setting['modstatus']['portal_view']['width']);
		}else{
			return;
		}
	}
}
class plugin_k_misign_forum extends plugin_k_misign {
	function index_side_top_output() {
		global $_G;
		$setting = $_G['cache']['plugin']['k_misign'];
		$setting['modstatus'] = unserialize($setting['modstatus']);
		if($setting['modstatus']['forum_index']['status']){
			return $this->_k_misign_showbutton($setting['modstatus']['forum_index']['width']);
		}else{
			return;
		}
	}
	
	function forumdisplay_side_top_output() {
		global $_G;
		$setting = $_G['cache']['plugin']['k_misign'];
		$setting['modstatus'] = unserialize($setting['modstatus']);
		if($setting['modstatus']['forum_forumdisplay']['status']){
			return $this->_k_misign_showbutton($setting['modstatus']['forum_forumdisplay']['width']);
		}else{
			return;
		}
	}
	function viewthread_side_k_misign_output() {
		global $_G;
		$setting = $_G['cache']['plugin']['k_misign'];
		$setting['modstatus'] = unserialize($setting['modstatus']);
		if($setting['modstatus']['forum_viewthread']['status']){
			return $this->_k_misign_showbutton($setting['modstatus']['forum_viewthread']['width']);
		}else{
			return;
		}
	}
}
class plugin_k_misign_group extends plugin_k_misign {
	function index_side_top_output() {
		global $_G;
		$setting = $_G['cache']['plugin']['k_misign'];
		$setting['modstatus'] = unserialize($setting['modstatus']);
		if($setting['modstatus']['group_default']['status']){
			return $this->_k_misign_showbutton($setting['modstatus']['group_default']['width']);
		}else{
			return;
		}
	}
	function group_index_side_output() {
		global $_G;
		$setting = $_G['cache']['plugin']['k_misign'];
		$setting['modstatus'] = unserialize($setting['modstatus']);
		if($setting['modstatus']['group_index']['status']){
			return $this->_k_misign_showbutton($setting['modstatus']['group_index']['width']);
		}else{
			return;
		}
	}
	function forumdisplay_side_top_output() {
		global $_G;
		$setting = $_G['cache']['plugin']['k_misign'];
		$setting['modstatus'] = unserialize($setting['modstatus']);
		if($setting['modstatus']['group_forumdisplay']['status']){
			return $this->_k_misign_showbutton($setting['modstatus']['group_forumdisplay']['width']);
		}else{
			return;
		}
	}
	function group_side_top_output() {
		global $_G;
		print_r($action);
		$setting = $_G['cache']['plugin']['k_misign'];
		$setting['modstatus'] = unserialize($setting['modstatus']);
		if($setting['modstatus']['group_other']['status'] && ($_G['basescript'] == 'group' && ($_GET['action'] && $_GET['action'] != 'index'))){
			return $this->_k_misign_showbutton($setting['modstatus']['group_other']['width']);
		}else{
			return;
		}
	}
	function viewthread_side_k_misign_output() {
		global $_G;
		$setting = $_G['cache']['plugin']['k_misign'];
		$setting['modstatus'] = unserialize($setting['modstatus']);
		if($setting['modstatus']['group_viewthread']['status']){
			return $this->_k_misign_showbutton($setting['modstatus']['group_viewthread']['width']);
		}else{
			return;
		}
	}
}
class plugin_k_misign_home extends plugin_k_misign {
	function space_home_side_top_output() {
		global $_G;
		$setting = $_G['cache']['plugin']['k_misign'];
		$setting['modstatus'] = unserialize($setting['modstatus']);
		if($setting['modstatus']['home_index']['status']){
			return $this->_k_misign_showbutton($setting['modstatus']['home_index']['width']);
		}else{
			return;
		}
	}
}
class plugin_k_misign_plugin extends plugin_k_misign {
	function tie_k_misign_output() {
		global $_G;
		$setting = $_G['cache']['plugin']['k_misign'];
		$setting['pextend'] = unserialize($setting['pextend']);
		if($setting['pextend']['tie_button']['status']){
			return $this->_k_misign_showbutton($setting['pextend']['tie_button']['width']);
		}else{
			return;
		}
	}
}
?>