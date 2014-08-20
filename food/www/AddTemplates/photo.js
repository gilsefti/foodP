newDishControllers.config(['$compileProvider',
    function ($compileProvider) {
        //var currentImgSrcSanitizationWhitelist = $compileProvider.imgSrcSanitizationWhitelist();
        //var newImgSrcSanitizationWhiteList = currentImgSrcSanitizationWhitelist.toString().slice(0, -1)
        //+ '|blob:http'
        //+ currentImgSrcSanitizationWhitelist.toString().slice(-1);
        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob):|data:image\//);
        //console.log("Changing imgSrcSanitizationWhiteList from " + currentImgSrcSanitizationWhitelist + " to " + newImgSrcSanitizationWhiteList);
        //$compileProvider.imgSrcSanitizationWhitelist(newImgSrcSanitizationWhiteList);
    }
]);
newDishControllers.controller("photoCtrl", function ($scope, $state) {
    $scope.props.Title = "Add a photo";
    $scope.addPhoto = function () {
        navigator.camera.getPicture(onSuccess, onFail, {
            quality: 50,
            destinationType: navigator.camera.DestinationType.FILE_URI
        });


        function onSuccess(imageURI) {
            $scope.$apply(function () {
                $scope.photoSrc = imageURI;
            });
        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }
        //$state.go("favorites");
    };
});

