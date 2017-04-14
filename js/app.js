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


	}]);


})(angular);