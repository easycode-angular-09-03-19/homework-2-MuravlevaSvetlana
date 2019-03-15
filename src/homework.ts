// ***************** Этот файл можно удалить если он вам не подходит или не нужен. ***************** 
// *************************************************************************************************

function addItemInfoDecorator(target: Object, method: string, descriptor: PropertyDescriptor) {
    let origFunc = descriptor.value;
    descriptor.value = function () {    
        let resOrigFunc = origFunc.apply(this);
        resOrigFunc.date = new Date();
        resOrigFunc.info = `${this.name} - $${this.price}`;
        return resOrigFunc;
    }
}

class Item {
    public price: number;
    public name: string;

    constructor(name: string ,price: number) {
        this.name = name;
        this.price = price;
    }

    @addItemInfoDecorator
    public getItemInfo() {
        return {
            name: this.name, 
            price: this.price
        };
    }
}

let item = new Item('Apple', 100);
console.log(item.getItemInfo());

// TASK 2

function decoratorUser(type: string) {
    return function(targetClass) {
        if (type !== 'user' && type !== 'admin') return;
        return class {
            public type = type;
            public createDate: Date = new Date();
        }        
    }
}

@decoratorUser('admin')
class User {
}

const user = new User();
console.log(user);

// TASK 3

// News api USA
namespace NewsUSA {
    
    export interface INews {
        id: number;
        title: string;
        text: string;
        author: string;
    }

    export class NewsService {
        protected apiurl: string = 'https://news_api_usa_url'
        public getNews() {} // method
    }
}

// News api Ukraine
namespace NewsUkraine {
   
    export interface INews2 {
        uuid: string;
        title: string;
        body: string;
        author: string;
        date: string;
        imgUrl: string;
    }

    export class NewsService2 {
        protected apiurl: string = 'https://news_api_2_url'
        public getNews() {} // method get all news
        public addToFavorite() {} // method add to favorites
    }
}

// TASK 4

class Junior {
    public doTasks(): void {
        console.log('Actions!!!');
    }
}

class Middle {
    public createApp(): void {
        console.log('Creating!!!');
    }
}

class Senior implements Junior, Middle {
    public doTasks: () => void;
    public createApp: () => void;
    public createArchitecture(): void {
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


