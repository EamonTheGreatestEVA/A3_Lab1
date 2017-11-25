(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
  var name = document.querySelector('.modelName')
  var price = document.querySelector('.priceInfo')
  var model = document.querySelector('.modelDetails')
  var car01 = document.querySelector('#F55')
  var car02 = document.querySelector('#F56')
  var car03 = document.querySelector('#R58')
  var appliedClass;

  function opacity() {
    car01.classList.add('nonActive')
    car02.classList.add('nonActive')
    car03.classList.add('nonActive')
  }

  function changeCopy01() {
    let objectIndex = carData[this.id];
    // debugger
    name.firstChild.nodeValue = objectIndex.model;
    price.firstChild.nodeValue = objectIndex.price;
    model.firstChild.nodeValue = objectIndex.description;
    appliedClass = this.id;
    car01.classList.add('focusMini')
    car02.classList.remove('focusMini')
    car03.classList.remove('focusMini')
  }

  function changeCopy02() {
    let objectIndex = carData[this.id];
    // debugger
    name.firstChild.nodeValue = objectIndex.model;
    price.firstChild.nodeValue = objectIndex.price;
    model.firstChild.nodeValue = objectIndex.description;
    appliedClass = this.id;
    car01.classList.remove('focusMini')
    car02.classList.add('focusMini')
    car03.classList.remove('focusMini')
  }

  function changeCopy03() {
    let objectIndex = carData[this.id];
    // debugger
    name.firstChild.nodeValue = objectIndex.model;
    price.firstChild.nodeValue = objectIndex.price;
    model.firstChild.nodeValue = objectIndex.description;
    appliedClass = this.id;
    car01.classList.remove('focusMini')
    car02.classList.remove('focusMini')
    car03.classList.add('focusMini')
  }

  window.addEventListener('load', opacity, false);
  car01.addEventListener('click', changeCopy01, false);
  car02.addEventListener('click', changeCopy02, false);
  car03.addEventListener('click', changeCopy03, false);

})();
