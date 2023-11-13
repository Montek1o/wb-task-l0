import updateNumberProducts from "./updateNumberProducts";
import updateSale from "./updateSale";
import updateTotalAmount from "./updateTotalAmount";

export default function totalUpdate() {
  updateTotalAmount();
  updateNumberProducts();
  updateSale();
}