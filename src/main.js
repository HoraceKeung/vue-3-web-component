import { defineCustomElement } from 'vue'
import MyFoo from './MyFoo.vue'

customElements.define('my-foo', defineCustomElement(MyFoo))
