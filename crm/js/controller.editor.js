;
(function () {
  'use strict'
 
  const api = {}
  const idOrder = parseInt(getSearchObject().id)
  const order = Model.getOrderById(idOrder)
  api.start = function start() {
    View.dispatch = smartHandler
    View.setFormData(order)
  }

 
  window.Controller = api

  function smartHandler(element, event) {
    event.preventDefault()
    if (element.dataset.hasOwnProperty('buttonSave')) {
      const data = View.getFormData()
      Model.updateOrder(idOrder, data)
      history.back()
    
    }
  }
  function getSearchObject() {
    return location.search
      .slice(1).split('&')
      .map(x => x.split('='))
      .reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj
      }, {})
  }
})();