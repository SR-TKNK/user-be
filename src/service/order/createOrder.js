class CreateOrder {
    constructor({ orderDaos, orderDetailDaos }) {
        this.orderDaos = orderDaos;
        this.orderDetailDaos = orderDetailDaos;

        this.execute = this.execute.bind(this);
    }

    async execute(params) {
        try {
            let newOrderDetails = [];
            const { userID, products, totalPrice } = params;
            const order = { userID: userID, totalPrice: totalPrice };
            const orderDaosResult = await this.orderDaos.create(order);
            if (orderDaosResult.failure) throw new Error("Create order fail!");

            const orderID = orderDaosResult.newOrder._id;
            for (let product of products) {
                let orderDetailDaosResult = await this.orderDetailDaos.create({
                    orderID: orderID,
                    productCode: product.code,
                    quantity: product.quantity,
                    price: product.price
                });
                if (orderDetailDaosResult.failure) {
                    let error = "Create order detail with product Code " + product.code + " fail!";
                    throw new Error(error);
                }
                newOrderDetails.push(orderDetailDaosResult.newOrderDetail);
            }
            return { newOrder: orderDaosResult.newOrder, newOrderDetails: newOrderDetails };
        } catch (error) {
            return { failure: true, message: error.message };
        }
    }
}

module.exports = CreateOrder;