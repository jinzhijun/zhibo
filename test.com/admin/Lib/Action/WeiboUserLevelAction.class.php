<?php
	class WeiboUserLevelAction extends CommonAction{
		public function index(){
			parent::index();
		}
		
		public function add(){
			$this->assign("new_level", M("UserLevel")->max("level")+1);
            $this->assign("old_score", M("UserLevel")->max("score"));
			$this->display();
		}
		
		public function edit(){
			$id = intval($_REQUEST ['id']);
			$condition['id'] = $id;
			$vo = M("UserLevel")->where($condition)->find();
            $old_level = M("UserLevel")->where('level='.($vo['level']-1))->find();
            $this->assign("old_score",$old_level['score']);
			$this->assign ( 'vo', $vo );
			$this->display ();
		}
		
		public function update(){
			B('FilterString');
			$data = M("UserLevel")->create ();
			rm_auto_cache("user_level");
			$log_info = M("UserLevel")->where("id=".intval($data['id']))->getField("name");
			//开始验证有效性
			$this->assign("jumpUrl",u("UserLevel"."/edit",array("id"=>$data['id'])));
            if(!check_empty($data['level']))
            {
                $this->error("请输入等级");
            }
			if(!check_empty($data['name']))
			{
				$this->error("请输入等级名称");
			}
            if(defined('DISTRIBUTION_MODULE')&&DISTRIBUTION_MODULE==1&&!(intval($data['level'])>0))
            {
                $this->error("等级必须大于0");
            }
            $user_level_list = M("UserLevel")->where("level=".intval($data['level']-1))->find();
			if($user_level_list)
			{
                if(intval($data['score'])<=$user_level_list['score']){
                    $this->error('所需积分值必须大于上一级所需积分值');
                }
            }else{
                if(intval($data['score'])<0)
                {
                    $this->error("积分值必须大于等于0");
                }
            }
            $data['point'] = $data['score'];
			$list=M("UserLevel")->save ($data);
			if (false !== $list) {
				//成功提示
				save_log($log_info.L("UPDATE_SUCCESS"),1);
				$this->success(L("UPDATE_SUCCESS"));
			} else {
				//错误提示
				save_log($log_info.L("UPDATE_FAILED"),0);
				$this->error(L("UPDATE_FAILED"),0,$log_info.L("UPDATE_FAILED"));
			}
		}
		
		public function insert() {
			B('FilterString');
			$ajax = intval($_REQUEST['ajax']);
			$data = M("UserLevel")->create ();
			rm_auto_cache("user_level");
			//开始验证有效性
			$this->assign("jumpUrl",u("UserLevel"."/add"));
            if(!check_empty($data['level']))
            {
                $this->error("请输入等级");
            }
			if(!check_empty($data['name']))
			{
				$this->error("请输入等级名称");
			}
            if(defined('DISTRIBUTION_MODULE')&&DISTRIBUTION_MODULE==1&&!(intval($data['level'])>0))
            {
                $this->error("等级必须大于0");
            }
			$user_level_list = M("UserLevel")->where("level=".intval($data['level']-1))->find();
			if($user_level_list)
			{
                if(intval($data['score'])<=$user_level_list['score']){
                    $this->error('所需积分值必须大于上一级所需积分值');
                }
			}else{
                if(intval($data['score'])<0)
                {
                    $this->error("积分值必须大于等于0");
                }
            }
			
			// 更新数据
			$log_info = $data['name'];
            $data['point'] = $data['score'];
			$list=M("UserLevel")->add($data);
			if (false !== $list) {
				//成功提示
				save_log($log_info.L("INSERT_SUCCESS"),1);
				$this->success(L("INSERT_SUCCESS"));
			} else {
				//错误提示
				save_log($log_info.L("INSERT_FAILED"),0);
				$this->error(L("INSERT_FAILED"));
			}
		}
		
		public function delete(){
			//彻底删除指定记录
			$ajax = intval($_REQUEST['ajax']);
			$id = $_REQUEST ['id'];
			rm_auto_cache("user_level");
			if (isset ( $id )) {
					$condition = array ('id' => array ('in', explode ( ',', $id ) ) );			
					$rel_data = M("UserLevel")->where($condition)->findAll();				
					foreach($rel_data as $data)
					{
						$info[] = $data['name'];	
						if(conf("DEFAULT_ADMIN")==$data['name'])
						{
							$this->error ($data['name'].l("DEFAULT_ADMIN_CANNOT_DELETE"),$ajax);
						}	
					}
					if($info) $info = implode(",",$info);
					$list = M("UserLevel")->where ( $condition )->delete();
					if ($list!==false) {
						save_log($info.l("FOREVER_DELETE_SUCCESS"),1);
						$this->success (l("FOREVER_DELETE_SUCCESS"),$ajax);
					} else {
						save_log($info.l("FOREVER_DELETE_FAILED"),0);
						$this->error (l("FOREVER_DELETE_FAILED"),$ajax);
					}
				} else {
					$this->error (l("INVALID_OPERATION"),$ajax);
			}
			
		}
}
?>