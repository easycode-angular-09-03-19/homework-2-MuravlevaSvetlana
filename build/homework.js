// ***************** Этот файл можно удалить если он вам не подходит или не нужен. ***************** 
// *************************************************************************************************
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function addItemInfoDecorator(target, method, descriptor) {
    let origFunc = descriptor.value;
    descriptor.value = function () {
        let resOrigFunc = origFunc.apply(this);
        resOrigFunc.date = new Date();
        resOrigFunc.info = `${this.name} - $${this.price}`;
        return resOrigFunc;
    };
}
class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getItemInfo() {
        return {
            name: this.name,
            price: this.price
        };
    }
}
__decorate([
    addItemInfoDecorator
], Item.prototype, "getItemInfo", null);
let item = new Item('Apple', 100);
console.log(item.getItemInfo());
// TASK 2
function decoratorUser(type) {
    return function (targetClass) {
        if (type !== 'user' && type !== 'admin')
            return;
        return class {
            constructor() {
                this.type = type;
                this.createDate = new Date();
            }
        };
    };
}
let User = class User {
};
User = __decorate([
    decoratorUser('admin')
], User);
const user = new User();
console.log(user);
// TASK 3
// News api USA
var NewsUSA;
(function (NewsUSA) {
    class NewsService {
        constructor() {
            this.apiurl = 'https://news_api_usa_url';
        }
        getNews() { } // method
    }
    NewsUSA.NewsService = NewsService;
})(NewsUSA || (NewsUSA = {}));
// News api Ukraine
var NewsUkraine;
(function (NewsUkraine) {
    class NewsService2 {
        constructor() {
            this.apiurl = 'https://news_api_2_url';
        }
        getNews() { } // method get all news
        addToFavorite() { } // method add to favorites
    }
    NewsUkraine.NewsService2 = NewsService2;
})(NewsUkraine || (NewsUkraine = {}));
// TASK 4
class Junior {
    doTasks() {
        console.log('Actions!!!');
    }
}
class Middle {
    createApp() {
        console.log('Creating!!!');
    }
}
class Senior {
    createArchitecture() {
        console.log('Senior = Junior + Middle');
    }
}
function applyMixin(targetClass, baseClasses) {
    baseClasses.forEach((baseClass) => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach((propName) => {
            targetClass.prototype[propName] = baseClass.prototype[propName];
        });
    });
}
applyMixin(Senior, [Junior, Middle]);
