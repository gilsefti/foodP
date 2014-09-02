
newDishControllers.controller("fileLoadCtrl", function ($scope, fileUpload) {
    $scope.props.Title = "file Load";
    $scope.uploadFileToServer = function () {
        var functionUrl = serverUrl +"files/SaveFile";
        fileUpload.uploadFileToUrl("blob:http%3A//localhost%3A4400/2dbb924b-a238-4fa7-9626-a987c031fa07");
    }
});


