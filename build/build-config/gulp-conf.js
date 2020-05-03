module.exports = {
    css: [
        "assets/styles/app.css",
        "app/directives/header/header.css",
        "app/directives/productSearch/productSearch.css",
        "app/directives/promotions/promotions.css",
        "app/directives/product/product.css",
        "app/directives/alert/alert.css"
    ],
    devJs: [
        "app/app.module.js",
        "app/config/config.module.js",
        "app/config/config.js",
        "app/config/constants.js",
        "app/services/services.module.js",
        "app/services/dataServices/dataservices.module.js",
        "app/services/dataServices/dataservices.datautil.js",
        "app/services/dataServices/integrationServices/furgone.service.js",
        "app/services/dataServices/integrationServices/cars.service.js",
        "app/services/dataServices/integrationServices/promotions.service.js",
        "app/services/dataServices/integrationServices/product-detail.service.js",

        "app/directives/alert/alert.module.js",
        "app/directives/alert/alert.component.js",
        "app/directives/alert/alert.button.component.js",
        "app/directives/alert/alert.service.js",



        "app/directives/modal/modal.module.js",
        "app/directives/modal/modal.controller.js",
        "app/directives/modal/modal.service.js",
        "app/directives/promotions/promotions.module.js",
        "app/directives/promotions/promotions.directive.js",
        "app/directives/productSearch/productSearch.module.js",
        "app/directives/productSearch/productSearch.directive.js",
        "app/directives/product/product.module.js",
        "app/directives/product/product.directive.js",
        "app/directives/footer/footer.module.js",
        "app/directives/footer/footer.directive.js",
        "app/directives/header/header.module.js",
        "app/directives/header/header.directive.js",
        "app/directives/contacts/contacts.module.js",
        "app/directives/contacts/contacts.directive.js",
        "app/views/policies/policies.module.js",
        "app/views/policies/policies.route.js",
        "app/views/policies/policies.controller.js",
        "app/views/booking/booking.module.js",
        "app/views/booking/booking.route.js",
        "app/views/booking/booking.controller.js",
        "app/views/about/about.module.js",
        "app/views/about/about.route.js",
        "app/views/about/about.controller.js",
        "app/views/contact/contact.module.js",
        "app/views/contact/contact.route.js",
        "app/views/contact/contact.controller.js",
        "app/views/home/home.module.js",
        "app/views/home/home.route.js",
        "app/views/home/home.controller.js",
        "app/templates/templates.module.js",
    ],
    releaseJs: [
        "app/templates/templates.js"
    ],
    basePaths: {
        src: 'app/',
        dest: 'build/source/dist/',
        templates: 'app/templates/',
        maps: 'maps'
    },
    paths: {
        bower: {
            js: 'bower_components/**/*.js',
            css: 'bower_components/**/*.css',
            min: 'bower_components/**/*.min.js',
            html: 'bower_components/**/*.html'
        },
        dist: {
            all: 'build/source/dist/**/*',
            js: 'build/source/dist/*.min.js',
            css: 'build/source/dist/*.min.css'
        },
        index: {
            template: 'app/index-template.html',
            release: 'app/index.html',
            dev: 'app/index-dev.html'
        },
        templates: {
            html: 'app/**/*.html',
            template: 'app/templates/templates.js'
        },
        config: {
            source: 'app/config/**/*',
            dest: 'build/source/dist/config'
        }
    },
    destFiles: {
        js: 'app.min.js',
        css: 'app.min.css'
    }
}
