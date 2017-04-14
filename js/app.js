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
        $scope.todos = [
            { id: 1, text: '吃饭', completed: true },
            { id: 2, text: '睡觉', completed: true },
            { id: 3, text: '上学', completed: false },
            { id: 4, text: '打游戏', completed: false }
        ];

    }]);


})(angular);
