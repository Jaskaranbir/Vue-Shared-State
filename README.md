A simple shared state implementation for **Vue.js**.

This is designed for use cases involving small applications using Vue.js where Vuex will be an overkill.

It allows Vue to reactively (or non-reactively) share states across different components regardless of component relationships.

**Usage:**

It can be used as Vue plugin:

    import state from './state'

    export default {
      install (Vue, options) {
      Vue.prototype.$state = state
    }

And access it by:

`this.$state`

where `this` refers to an instance of a Vue component.

It has mainly two components:

**Reactive**: For working with reactive props.

**Static**: For working with non-reactive props.

**How does it work?**

It works by just initiating another Vue instance, and this instance is used wherever the shared state needs manipulation. It simply sets the `$data` member of Vue instance, making state changes reactive automatically.

The Static (non-reactive) states are set in immutable pattern.

**Additional Notes:**

**Encapsulation Module** (*roEncapClassObj.js*):

A module to easily encapsulate javascript ES6 classes. The classes are formed into JS objects with functions from classes. The functions are bound to class instance. Custom methods to reveal can be specified and other methods from class will be hidden from user. The user of this object cannot access any other methods or class members except those specified to be exposed (it can still be accessed by deep prototype chains, but that would a very tricky and unrecommended practice). Associated module: [roEncapClassObj.js][1].

 * More detailed example usage: [Async-Utils/utils/apiTrack.js][2]

  [1]: https://github.com/Jaskaranbir/Vue-Shared-State/blob/master/roEncapClassObj.js
  [2]: https://github.com/Jaskaranbir/Async-Utils/blob/master/src/utils/apiTrack.js
