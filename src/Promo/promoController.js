const Promo = require("./promoModel");

const postPromoValidate = async (req, res, next) => {
  try {
    const { code, price } = req.body;
    const promo = await Promo.findOne({ code: code });
    if (promo.isActive) {
      if (promo.discountType === "percentage") {
        const discountPrice = price * (promo.discountValue / 100);
        res.json({
          success: true,
          discount: discountPrice,
          final_price: price - discountPrice,
        });
      } else if (promo.discountType === "fixed") {
        res.json({
          success: true,
          discount: promo.discountValue,
          final_price: price - discountValue,
        });
      }
    } else {
      res.status(400).json({
        success: false,
        message: "Promo code invalid.",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { postPromoValidate };
