const mysql = require('mysql');
const inquirer = require('inquirer');
const table = require('easy-table');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bamazon'
});

connection.connect();

function menuPrompt(){
    type: 'list',
    name: 'menuSelect',
    message: 'Management console: What would you like to do today?',
    choices: ["view Products for Sale", "view Low Inventory", "Add to inventory", "Add new product", "Exit program"]]).then(function(answers) {
        switch(answers.menuSelect) {
        case "View Products for Sale":
            viewProd();
            break;
         case "View Low Inventory":
            viewLow();
            break;
        case "Add to Inventory":
         addInv();
            break;
        case "Add New Product":
        addProd();
        break;
    case "Exit Program":
    exitProgram();
    break;

        }
    });
}

function viewProd(param, callback);

connection.query("SELECT * FROM products", function(error, results) {
    if(error) throw error;
    console.log("\n\n");
    console.log("Current Inventory:")
    console.log("\n\n");

    var t = new Table;

    results.forEach(function(product) {
        t.cell('Item', product.item_id);
        t.cell('Department', product.department_name);
        t.cell('Quantity', product.stock_quantity)
        t.newRow();
    });
console.log(t.tostring());

if(param) {
    callbackify();
} else{
    menuPrompt();
});

function viewLow(){
   connection.query("Select * FROM products WHERE stock_quantity < 5", function(error,results) {
       var t = new Table;

       results.forEach(function(product) {
           t.cell('Item', product.item_id);
           t.cell('Product', product.product_name);
           t.cell('Department', product.department_name);
           t.cell('Quantity', product.stock_quantity)
           t.newRow();
       });

       console.log(t.toString());
       menuPrompt();
   });
}

function addInv(){
    viewProd("success", promptInv);

    function promptInv(){
        inquirer.prompt([{
            type: 'input',
            name: 'item_id',
            message: 'What is the Item ID of the item you woud like to increase the inventory?'
        }, {
            type: 'input',
            name: 'quantity',
            message: 'How many units would you like to add to the inventory of this item',
           validate function(input){
               if, else...
           }
        }

    }]).then(function(answers) {
        connection.query("UPDATE products SET stock_quantity - stock_quantity  +? WHERE item_id=?",)[answers.quantity, answers.item_id]);
    }



        }])
    }
}