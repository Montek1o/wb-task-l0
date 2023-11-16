import renderProducts from "./basket/renderProducts";
import renderMissProducts from "./basket/renderMissProducts";
import modalPayController from "./modal/modalPayController";
import modalDeliveryController from "./modal/modalDeliveryController";
import accordion from "./basket/accordion";
import deleteProduct from "./basket/deleteProduct";
import likeProduct from "./basket/likeProduct";
import checkboxPay from "./total/checkboxPay";
import validationForm from "./validation/validationForm";
import selectedProduct from "./basket/selectedProduct";
import counterProduct from "./basket/counterProduct";
import deliveryCounter from "./delivery/deliveryCounter";

export default function app() {
  // basket
  renderProducts();
  renderMissProducts();
  accordion();
  deleteProduct();
  likeProduct();
  selectedProduct();
  counterProduct();

  // modal
  modalPayController();
  modalDeliveryController();

  // total
  checkboxPay();

  // validation 
  validationForm();

  // delivery
  deliveryCounter();
};
