(function () {
    // the code here is executed once in its own scope
    return {
        "name": "common",
        "version": "0.1",
        "baseUrl": configBean.getApiEndPoint(),
        "allServicesMocked": false,
        'repositoryImage': window.location.origin + '',
        "services": configBean.getServices(),
        "userMockedProfile": {}
    };

})();
