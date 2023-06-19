console.log('--------------------  Example - 01 --------------------');
{
    //* Напишіть наступні функції:
    /** createProduct(obj, callback) - приймає об'єкт товару без ID, а також колбек.
     * Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у
     * властивість ID та викликає колбек, передаючи йому створений об'єкт.
     *
     * logProduct(product) - колбек, приймаючий об'єкт продукту і логуючий його в консоль
     *
     * logTotalPrice(product) - колбек, що приймає об'єкт продукту і логує
     * загальну вартість товару в консоль.
     */

    function createProduct(obj, callback) {
        const product = {
            id: Date.now(),
            ...obj,
        };
        callback(product);
        console.log(product);
    }

    function logProduct(obj) {
        console.log(`Product ${obj.name}`);
    }

    function logTotalPrice({ price, quantity }) {
        console.log(`Total price ${price * quantity}`);
    }

    createProduct(
        {
            name: '🍎',
            price: 30,
            quantity: 3,
        },
        logProduct,
    );

    createProduct(
        {
            name: '🍋',
            price: 20,
            quantity: 5,
        },
        logTotalPrice,
    );
}

console.log('--------------------  Example - 02 --------------------');

{
    //* Колбек функції
    /**Додайте в об'єкт account методи withdraw (amount, onSuccess, onError) та
     * deposit(amount, onSuccess, onError), де перший параметр це сума операції,
     * а другий та третій - колбеки.
     *
     * Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT
     * або this.balance, і onSuccess в іншому випадку
     *
     * Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше
     * або дорівнює нулю, і onSuccess в іншому випадку
     * */

    const TRANSACTION_LIMIT = 1000;

    const account = {
        username: 'Jacob',
        balance: 400,

        withdraw(amount, onSuccess, onError) {
            if (amount > TRANSACTION_LIMIT) {
                onError(`TRANSACTION_LIMIT ${TRANSACTION_LIMIT}`);
                return;
            } else if (this.balance < amount) {
                onError(`Not enough in the account`);
                return;
            }
            this.balance -= amount;
            onSuccess(
                `Transaction complete. Successfully ${amount}. Balance ${this.balance}`,
            );
        },

        deposit(amount, onSuccess, onError) {
            if (amount > TRANSACTION_LIMIT) {
                onError(`TRANSACTION_LIMIT ${TRANSACTION_LIMIT}`);
                return;
            } else if (amount <= 0) {
                onError(`Nice try Bro😂`);
                return;
            }
            this.balance += amount;
            onSuccess(`Added ${amount}. Balanse ${this.balance}`);
        },
    };

    function handleSuccess(message) {
        console.log(`✅ Success! ${message}`);
    }

    function handleError(message) {
        console.log(`❌ Error! ${message}`);
    }

    account.withdraw(2000, handleSuccess, handleError);
    account.withdraw(600, handleSuccess, handleError);
    account.withdraw(300, handleSuccess, handleError);

    account.deposit(1700, handleSuccess, handleError);
    account.deposit(0, handleSuccess, handleError);
    account.deposit(-600, handleSuccess, handleError);
    account.deposit(600, handleSuccess, handleError);
}

console.log('--------------------  Example - 03 --------------------');

{
    /** Колбек функції
     *
     * Напишіть функцію each(array, callback), яка першим параметром очікує масив,
     * а другим функцію, яка застосовується до кожного елемента масиву. Функція each
     * повинна повернути новий масив, елементами якого будуть результати виклику колбека.
     * */

    function each(array, callback) {
        let newArr = [];
        for (const el of array) {
            newArr.push(callback(el));
        }
        return newArr;
    }

    console.log(
        each([64, 49, 36, 25, 16], function (value) {
            return value * 2;
        }),
    );

    console.log(
        each([64, 49, 36, 25, 16], function (value) {
            return value - 10;
        }),
    );

    console.log(
        each([64, 49, 36, 25, 16], function (value) {
            return Math.sqrt(value);
        }),
    );

    console.log(
        each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
            return Math.ceil(value);
        }),
    );

    console.log(
        each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
            return Math.floor(value);
        }),
    );
}

console.log('--------------------  Example - 04 --------------------');

{
    /** Стрілочні функції
     *
     * Виконайте рефакторинг коду за допомогою стрілочних функцій*/

    // const createProduct = (partialProduct, callback) {
    //     const product = {
    //         id: Date.now(),
    //         ...partialProduct,
    //     };
    //     callback(product);
    // }

    const createProduct = (partialProduct, callback) =>
        callback({
            id: Date.now(),
            ...partialProduct,
        });

    const logProduct = product => console.log(product.name);

    const logTotalPrice = ({ price, quantity }) =>
        console.log(price * quantity);

    createProduct(
        {
            name: '🍎',
            price: 30,
            quantity: 3,
        },
        logProduct,
    );

    createProduct(
        {
            name: '🍋',
            price: 20,
            quantity: 2,
        },
        logTotalPrice,
    );
}

console.log('--------------------  Example - 05 --------------------');

{
    /** Стрілочні функції
     *
     * Виконайте рефакторинг колбеків за допомогою стрілочних функцій
     */

    const TRANSACTION_LIMIT = 1000;

    const account = {
        username: 'Jacob',
        balance: 400,

        withdraw(amount, onSuccess, onError) {
            if (amount > TRANSACTION_LIMIT) {
                onError(`TRANSACTION_LIMIT ${TRANSACTION_LIMIT}`);
                return;
            } else if (this.balance < amount) {
                onError(`Not enough in the account`);
                return;
            }
            this.balance -= amount;
            onSuccess(
                `Transaction complete. Successfully ${amount}. Balance ${this.balance}`,
            );
        },

        deposit(amount, onSuccess, onError) {
            if (amount > TRANSACTION_LIMIT) {
                onError(`TRANSACTION_LIMIT ${TRANSACTION_LIMIT}`);
                return;
            } else if (amount <= 0) {
                onError(`Nice try Bro😂`);
                return;
            }
            this.balance += amount;
            onSuccess(`Added ${amount}. Balanse ${this.balance}`);
        },
    };

    const handleSuccess = message => console.log(`✅ Success! ${message}`);
    const handleError = message => console.log(`❌ Error! ${message}`);

    account.withdraw(2000, handleSuccess, handleError);
    account.withdraw(600, handleSuccess, handleError);
    account.withdraw(300, handleSuccess, handleError);

    account.deposit(1700, handleSuccess, handleError);
    account.deposit(0, handleSuccess, handleError);
    account.deposit(-600, handleSuccess, handleError);
    account.deposit(600, handleSuccess, handleError);
}

console.log('--------------------  Example - 06 --------------------');

{
    /** Iнлайн стрілочні функції
     *
     * Виконайте рефакторинг коду за допомогою стрілочних функцій.
     */

    const each = (array, callback) => {
        let newArr = [];
        for (const el of array) {
            newArr.push(callback(el));
        }
        return newArr;
    };

    console.log(each([64, 49, 36, 25, 16], value => value * 2));

    console.log(each([64, 49, 36, 25, 16], value => value - 10));

    console.log(each([64, 49, 36, 25, 16], value => Math.sqrt(value)));

    console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));

    console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));
}

console.log('--------------------  Example - 07 --------------------');
{
    /** Метод forEach
     *
     * Виконайте рефакторинг коду за допомогою методу forEach та стрілочної функції
     */
    // function logItems(items) {
    //     console.log(items);
    //     for (let i = 0; i < items.length; i += 1) {
    //         console.log(`${i + 1} - ${i}`);
    //     }
    // }

    const logItems = arr =>
        arr.forEach((item, idx) => console.log(`${idx + 1} - ${item}`));

    logItems(['Mango', 'Poly', 'Ajax']);
    logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
}

console.log('--------------------  Example - 08 --------------------');
{
    /**  Метод forEach
     *
     * Виконайте рефакторинг коду за допомогою методу forEach та стрілочної функції
     */

    // function calculateAverage(...args) {
    //     let total = 0;

    //     for (let i = 0; i < args.length; i += 1) {
    //         total += args[i];
    //     }
    //     return total / args.length;
    // }

    const calculateAverage = (...arr) => {
        // console.log(arr);
        let total = 0;
        arr.forEach(value => (total += value));
        // console.log(total);
        return total / arr.length;
    };

    console.log(calculateAverage(1, 2, 3, 4));
    console.log(calculateAverage(14, 8, 2));
    console.log(calculateAverage(27, 43, 2, 8, 36));
}
