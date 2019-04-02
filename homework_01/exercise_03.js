window.onload = function () {
    const item = {
        name: "Avocado",
        type: "Fruit",
        category: "Food",
        price: 200
    };

    function applyCoupon(_item) {
        return function (_discountPercent) {
            let _discount = _item.price * _discountPercent / 100;
            _item.price -= _discount;
            return _item;
        }
    }

    console.log(applyCoupon(item)(10).price === 180);
};