function closeToast(o) {
  o.classList.add('hide');
}

function navbarMenu() {
  var element = document.getElementById("navbarMenu");

  element.classList.remove('hidden');
}

// Initialization for ES Users
import {
  Ripple,
  Datepicker,
  Input,
  Tab,
  initTE,
} from "tw-elements";

initTE({ Tab, Ripple, Datepicker, Input });