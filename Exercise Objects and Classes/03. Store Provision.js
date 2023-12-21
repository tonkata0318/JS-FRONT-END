function StoreProvision (array1,array2) {
    const products={};
    for (let i = 0; i < array1.length; i+=2) {
        let productName=array1[i];
        let productquantity=Number(array1[i+1]);
        products[productName]=productquantity;
    }
    for (let index = 0; index < array2.length; index+=2) {
        const productName=array2[index];
        const productquantity=array2[index+1];
        if (Object.keys(products).includes(productName)) {
            products[productName]+=Number(productquantity);
        }
        else {
            products[productName]=productquantity;
        }
    }
    for (const key in products) {
        console.log(`${key} -> ${products[key]}`)
    }
}

StoreProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ]
    )