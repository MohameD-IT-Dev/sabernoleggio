var configBean = {
    getApiEndPoint: function () {
        return window.location.origin + "/";
    },
    getConfigFolderPath: function () {
        var path = "config";
        var appjs = $("script[src*='app'][src$='min.js']").attr('src');
        var basepath = appjs ? appjs.replace(/app.*/, "") : "";
        return basepath + path;
    },
    getServices: getServices
};

(function () {

    angular.module("nf.config").constant('CONF', getProp());

    function getProp() {
        var configFilePath = configBean.getConfigFolderPath() + "/mockedServices/";
        return configurator(
            window.location.hostname,
            configFilePath,
            {
                specific: {
                    locale: {
                        url: "locals.js",
                        name: "Local",
                        regexMatchHost: /127\.0\.0\.1|localhost/i
                    }
                }
            }
        ).getProperties();
    }

    function configurator(host, basePath, options) {
        if (typeof console == "undefined") {
            window.console = {
                log: function () {
                }
            };
        }
        var _opt = {
            common: {
                url: "common.js"
            },
            specific: {
                locale: {
                    url: "",
                    name: "locale"
                }
            }
        };
        var prop = {};
        // clousure
        var basePathJson = basePath || "";
        var opt = $.extend(_opt, options);
        var env = opt.specific.locale; //default

        init();

        function init() {

            resolveEnv();

            loadProp(opt.common.url, doneCommonFunction, failCommonFunction); // carico le proprietà common
            loadProp(env.url, doneCommonFunction, failCommonFunction); // carico le proprieta specifiche per quell'ambiente;

            // function
            function doneCommonFunction(data) {
                $.extend(true, prop, eval(data));  //estendo le proprieta;
            }

            function failCommonFunction(data) {
                console.log("Error while loading common properties!!!");
                console.error(data);
                throw "Error while loading common properties!!!";
            }
        }

        function resolveEnv() {
            for (var e in opt.specific) {
                if (opt.specific.hasOwnProperty(e) &&
                    "regexMatchHost" in opt.specific[e] &&
                    opt.specific[e].regexMatchHost.test(host)) {
                    env = opt.specific[e];
                    break;
                }
            }
        }

        function loadProp(url, doneFunction, failFunction) {
            console.log("*** loadProp " + basePathJson + url + " ***");
            var timestamp = new Date().getTime();
            try {
                $.ajax({
                    type: 'GET',
                    url: basePathJson + url,
                    async: false,
                    context: this
                }).done(doneFunction).fail(failFunction);

            } catch (e) {
                throw "Error while loading properties!!!"
            }
        }

        return {
            getProperties: function () {
                return prop;
            }
        }

    }

})();

function getServices() {
    var timeout_const = 1000;
    var services = [
        {
            "name": "getFurgone",
            "method": "GET",
            "url": "getFurgone/",
            "mocked": {
                isMocked: true,
                file: "../data/getFurgone.json",
                timeout: timeout_const
            }
        },
        {
            "name": "getCars",
            "method": "GET",
            "url": "getCars/",
            "mocked": {
                isMocked: true,
                file: "../data/getCars.json",
                timeout: timeout_const
            }
        }, {
            "name": "getPromotions",
            "method": "GET",
            "url": "getPromotions/",
            "mocked": {
                isMocked: true,
                file: "../data/getPromotions.json",
                timeout: timeout_const
            }
        },{
            "name": "getProductDetail", 
            "method": "GET",
            "url": "getProductDetail/",
            "mocked": {
                isMocked: true,
                file: "../data/getProductDetail.json",
                timeout: timeout_const
            }
        }];
    return services;
}