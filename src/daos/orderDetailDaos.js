class orderDetailDaos {
    constructor({ orderDetailModel }) {
        this.orderDetailModel = orderDetailModel;

        this.findAllByOrderID = this.findAllByOrderID.bind(this);
        this.create = this.create.bind(this);
    }

    async findAllByOrderID(orderID) {
        try {
            const orders = await this.orderDetailModel.find({ orderID });
            return { orders };
        } catch (err) {
            return { failure: true, message: err.message || "Something went wrong" };
        }
    }

    async create(params) {
        try {
            const newModel = await this.orderDetailModel.insertMany(params)
            if (!newModel) throw new Error("Create model failed")
            return { newOrderDetail: newModel[0] };
        } catch (err) {
            return { failure: true, message: err.message || "Something went wrong" }
        }
    }
}

module.exports = orderDetailDaos;