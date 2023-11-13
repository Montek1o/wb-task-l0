import renderProducts from "./basket/renderProducts";
import renderMissProducts from "./basket/renderMissProducts";
import modalPayController from "./modal/modalPayController";
import modalDeliveryController from "./modal/modalDeliveryController";
import accordion from "./basket/accordion";
import deleteProduct from "./basket/deleteProduct";
import likeProduct from "./basket/likeProduct";
import checkboxPay from "./total/checkboxPay";
import validationForm from "./validation/validationForm";

export default function app() {
  // basket
  renderProducts();
  renderMissProducts();
  accordion();
  deleteProduct();
  likeProduct();

  // modal
  modalPayController();
  modalDeliveryController();

  // total
  checkboxPay();

  // validation 
  validationForm();
};
