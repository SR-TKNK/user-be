

const requiredLogIn = async () => {
    if (!req.session.user_id) {
      return res.redirect("/auth/welcome");
    } else {
      _id = req.session.user_id;
      const user = await User.findById(_id);
      const shop = await Shop.findById(_id);
      req.user = user;
      req.shop = shop;
      next();
      if (!user && !shop) {
        return res.redirect("/auth/welcome");
      }
    }
  };