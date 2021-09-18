class GetAllOrderByUserID {
    constructor({ orderDaos, orderDetailDaos }) {
        this.orderDaos = orderDaos;
        this.orderDetailDaos = orderDetailDaos;

        this.execute = this.execute.bind(this);
    }

    async execute(params) {
        try {
            let orderInfos = [];
            const userID = params.id;
            const orderDaosResult = await this.orderDaos.findAllByUserID(userID);
            if (orderDaosResult.failure || !orderDaosResult.orders.length) throw new Error(orderDaosResult.message || "You don't have any orders.");

            const orders = orderDaosResult.orders;
            for (let order of orders) {
                let orderDetailDaosResult = await this.orderDetailDaos.findAllByOrderID(order._id);
                if (orderDetailDaosResult.failure || !orderDetailDaosResult.orderDetails.length) {
                    let error = "Get detail of orderID " + order._id + " fail!";
                    throw new Error(orderDetailDaosResult.message || error);
                }
                orderInfos.push({
                    orderID: order._id,
                    products: orderDetailDaosResult.orderDetails,
                    totalPrice: order.totalPrice
                })
            }
            return { orderInfos: orderInfos };
        } catch (error) {
            return { failure: true, message: error.message };
        }
    }
}

module.exports = GetAllOrderByUserID;