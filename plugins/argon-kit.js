import Vue from 'vue';

import "~/assets/vendor/nucleo/css/nucleo.css";
import "~/assets/vendor/font-awesome/css/font-awesome.css";
import "~/assets/scss/argon.scss";

import Badge from "~/components/argon/Badge";
import BaseAlert from "~/components/argon/BaseAlert";
import BaseButton from "~/components/argon/BaseButton";
import BaseCheckbox from "~/components/argon/BaseCheckbox";
import BaseInput from "~/components/argon/BaseInput";
import BasePagination from "~/components/argon/BasePagination";
import BaseProgress from "~/components/argon/BaseProgress";
import BaseRadio from "~/components/argon/BaseRadio";
import BaseSlider from "~/components/argon/BaseSlider";
import BaseSwitch from "~/components/argon/BaseSwitch";
import Card from "~/components/argon/Card";
import Icon from "~/components/argon/Icon";
import BaseNav from "~/components/argon/BaseNav";
import BaseDropdown from "~/components/argon/BaseDropdown";
import CloseButton from "~/components/argon/CloseButton";

Vue.component(Badge.name, Badge);
Vue.component(BaseAlert.name, BaseAlert);
Vue.component(BaseButton.name, BaseButton);
Vue.component(BaseInput.name, BaseInput);
Vue.component(BaseCheckbox.name, BaseCheckbox);
Vue.component(BasePagination.name, BasePagination);
Vue.component(BaseProgress.name, BaseProgress);
Vue.component(BaseRadio.name, BaseRadio);
Vue.component(BaseSlider.name, BaseSlider);
Vue.component(BaseSwitch.name, BaseSwitch);
Vue.component(Card.name, Card);
Vue.component(Icon.name, Icon);
Vue.component(BaseNav.name, BaseNav);
Vue.component(BaseDropdown.name, BaseDropdown);
Vue.component(CloseButton.name, CloseButton);