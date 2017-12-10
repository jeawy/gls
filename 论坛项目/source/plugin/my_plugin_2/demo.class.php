<?php  
if(!defined('IN_DISCUZ')) {  
    exit('Access Denied');  
}  
  
class plugin_demo {  
  
    function __construct(){  
          
    }  
  
    function global_footer(){  
          
        return '<script>alert("插件我来了")</script>';  
    }  
      
}  
?>  