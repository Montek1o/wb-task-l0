import renderProducts from "./basket/renderProducts";
import renderMissProducts from "./basket/renderMissProducts";
import modalPayController from "./modal/modalPayController";
import modalDeliveryController from "./modal/modalDeliveryController";

export default function app() {
  // basket
  renderProducts();
  renderMissProducts();

  // modal
  modalPayController();
  modalDeliveryController();
};
