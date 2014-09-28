newDishControllers.service('fileUpload', function ($http, $state,dataService) {
    this.uploadFileToUrl = function (ImageURI) {
        var options = new FileUploadOptions();
        options.fileKey = "recFile";
        options.fileName = ImageURI.substr(ImageURI.lastIndexOf('/') + 1);
        options.mimeType = "image/jpeg";
        var params = new Object();
        params.dishId= dataService.dishModel.ID;
        options.params = params;
        options.chunkedMode = false;
        options.httpMethod = "POST";
        options.headers = {
            Connection: "close"
        };
        var ft = new FileTransfer();
        ft.upload(ImageURI, serverUrl + "api/Files/Save", win, fail, options);
    }
    function win(r) {
        $state.go("new.addLB");
    }
    function fail(r) {
        $state.go("new.addLB");
    }
});

newDishControllers.config(['$compileProvider',
    function ($compileProvider) {     
        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob):|data:image\//);       
    }
]);
newDishControllers.controller("photoCtrl", function ($scope, $state, fileUpload) {
    $scope.props.Title = "Add a photo";
    $scope.addPhoto = function () {
        navigator.camera.getPicture(onSuccess, onFail, {
            quality: 50,
            destinationType: navigator.camera.DestinationType.FILE_URI
        });


        function onSuccess(imageURI) {
            $scope.$apply(function () {
                $scope.photoSrc = imageURI;
                fileUpload.uploadFileToUrl(imageURI);
                //"blob:http%3A//localhost%3A4400/2dbb924b-a238-4fa7-9626-a987c031fa07"
            });
        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }
        //$state.go("favorites");
    };
});



