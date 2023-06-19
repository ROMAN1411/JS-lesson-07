console.log('-------------------------------');
{
    function deliverPizza(pizzaName) {
        return `Delivering ${pizzaName} pizza.`;
    }

    function makePizza(pizzaName) {
        return `Pizza ${pizzaName} is being prepared, please wait...`;
    }

    // Chande code below this line
    function makeMessage(pizzaName, callback) {
        // console.log(callback);
        return callback(pizzaName);
    }

    console.log(makeMessage('Royal Grand', makePizza));
    console.log(makeMessage('Ultracheese', deliverPizza));
}
console.log('-------------------------------');
{
    const pizzaPalace = {
        pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
        order(pizzaName, onSuccess, onError) {
            for (const pizza of this.pizzas) {
                if (pizza === pizzaName) {
                    return makePizza(pizzaName);
                }
            }
            return onOrderError(pizzaName);
        },
    };
    // Change code above this line

    // Callback for onSuccess
    function makePizza(pizzaName) {
        return `Your order is accepted. Cooking pizza ${pizzaName}.`;
    }

    // Callback for onError
    function onOrderError(error) {
        return `Error! ${error}`;
    }

    // Method calls with callbacks
    console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
    // pizzaPalace.order('Smoked', makePizza, onOrderError);
    console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
    // pizzaPalace.order('Four meats', makePizza, onOrderError);
    console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
    // pizzaPalace.order('Big Mike', makePizza, onOrderError);
    console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));
    // pizzaPalace.order('Vienna', makePizza, onOrderError);
}
// console.log('-------------------------------');
