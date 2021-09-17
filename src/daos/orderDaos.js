class orderDaos {
    constructor({ orderModel }) {
        this.orderModel = orderModel;

        this.findAll = this.findAll.bind(this);
        this.findByID = this.findByID.bind(this);
        this.create = this.create.bind(this);
    }

    async findAll() {
        try {
            const orders = await this.orderModel.find({});
            return { orders };
        } catch (err) {
            return { failure: true, message: err.message || "Something went wrong" };
        }
    }

    async findByID(id) {
        try {
            const order = await this.orderModel.findById(id);
            return { order };
        } catch (err) {
            return { failure: true, message: err.message || "Something went wrong" };
        }
    }

    async create(params) {
        try {
            const newModel = await this.orderModel.insertMany(params)
            if (!newModel) throw new Error("Create model failed")
            return { newOrder: newModel[0] };
        } catch (err) {
            return { failure: true, message: err.message || "Something went wrong" }
        }
    }
}

module.exports = orderDaos;