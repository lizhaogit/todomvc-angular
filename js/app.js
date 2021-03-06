(function(angular) {
	'use strict';

	/**
	 * myApp Module
	 * 创建一个新的模板
	 * Description
	 */
	var myApp = angular.module('myApp', []);


	//创建一个控制器
	myApp.controller('TodomvcController', ['$scope', function($scope) {

		//输入框初始化值
		$scope.text = '';

		//初始化列表数据
		$scope.todos = [{
			id: Math.random(),
			text: '吃饭',
			completed: true
		}, {
			id: Math.random(),
			text: '睡觉',
			completed: true
		}, {
			id: Math.random(),
			text: '上学',
			completed: false
		}, {
			id: Math.random(),
			text: '打游戏',
			completed: false
		}];

		//实现增加功能
		$scope.add = function() {
			if ($scope.text) {
				$scope.todos.push({
					id: Math.random(),
					text: $scope.text,
					completed: false
				});
				$scope.text = '';
			} else {
				return;
			}

		};

		//实现删除功能
		$scope.del = function(id) {
			for (var i = 0; i < $scope.todos.length; i++) {
				if (id === $scope.todos[i].id) {
					$scope.todos.splice(i, 1);
				}
			}
		};

		//实现未选中状态的双击编辑
		$scope.editId = -1;
		$scope.editing = function(id) {
			var completed;
			for (var i = 0; i < $scope.todos.length; i++) {
				if ($scope.todos[i].id === id) {
					completed = $scope.todos[i].completed;
				}
			}

			if (completed) {
				return;
			} else {
				$scope.editId = id;
			}
		};

		//编辑状态下敲回车保存
		$scope.save = function(){
			$scope.editId = -1;
		};

		//清空按钮
		$scope.clear = function(){
			var result = [];
			for (var i = 0; i < $scope.todos.length; i++) {
				if (!$scope.todos[i].completed) {
					result.push($scope.todos[i]);
				}
			}
			$scope.todos = result;
		};

		//控制清空按钮
		$scope.exitCompleted = function(){
			for (var i =0; i < $scope.todos.length; i++) {
				if ($scope.todos[i].completed) {
					return true;
				}
			}
			return false;
		};

		//全选按钮
		var state = true;
		$scope.allSele = function(){
			for (var i = 0; i <$scope.todos.length; i++) {
				$scope.todos[i].completed = state;
			}
			state = !state;
		};

		//底部切换
		$scope.num = 1;
		$scope.switch = function(num){
			$scope.num = num;
		};
	}]);


})(angular);