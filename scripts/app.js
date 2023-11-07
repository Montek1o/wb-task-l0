import renderProducts from "./basket/renderProducts";
import renderMissProducts from "./basket/renderMissProducts";
import modalPayController from "./modal/modalPayController";
import modalDeliveryController from "./modal/modalDeliveryController";
import accordion from "./basket/accordion";

export default function app() {
  // basket
  renderProducts();
  renderMissProducts();
  accordion();

  // modal
  modalPayController();
  modalDeliveryController();
};
