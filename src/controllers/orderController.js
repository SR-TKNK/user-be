class OrderController {
  constructor({ createOrderService, getAllOrdersByUserIdService }) {
    this.createOrderService = createOrderService;
    this.getAllOrdersByUserIdService = getAllOrdersByUserIdService;

    this.indexUser = this.indexUser.bind(this);
    this.create = this.create.bind(this);
  }

  async indexUser(req, res) {
    try {
      const params = req.params;
      const serviceResult = await this.getAllOrdersByUserIdService.execute(params);
      if (serviceResult.failure) throw new Error(serviceResult.message);
      res.status(200).send({
        status: "success",
        OrderInfos: serviceResult.orderInfos
      });
    } catch (err) {
      return res.status(400).send({ msg: err.message });
    }
  }

  async create(req, res) {
    try {
      const params = { ...req.body };
      const serviceResult = await this.createOrderService.execute(params);
      if (serviceResult.failure) throw new Error(serviceResult.message);
      res.status(200).send({
        status: "success",
        newOrder: serviceResult.newOrder,
        newOrderDetails: serviceResult.newOrderDetails,
      });
    } catch (err) {
      return res.status(400).send({ msg: err.message });
    }
  }
}

module.exports = OrderController;
