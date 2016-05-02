class HomeController {
  interval: 3000;
  slides: [];
  slideLastId: 0;

  constructor($scope) {
    "ngInject";
    this.name = 'home';
    this.slideLastId = 0;
    this.initSlides([ { src: 'slide1.jpg', title: 'Дома отдыха' },
                      { src: 'slide2.jpg', title: 'Выезды на природу' },
                      { src: 'slide3.jpg', title: 'Спортивные мероприятия' },
                      { src: 'slide4.jpg', title: 'Концерты' },
                      { src: 'slide5.jpg', title: 'Тренинги' } ]);
  }

  initSlides(array) {
    var length = array.length;
    var slidesAdded = 0;
    this.slides = [];
    for (var i = 0; i < length; i++) {
      let src   = array[i].src;
      let title = array[i].title;

      let slide = this.addSlide(src, title);
      if(typeof(slide) == 'object') {
        slidesAdded++;
      } else {
        throw new Error('weird state');
      }
    }

    return slidesAdded;
  }

  addSlide(src, title) {
    if(typeof src != 'string') {
      throw new TypeError('wrong type: expected string, got ' + typeof(src));
    }
    if(typeof title != 'string') {
      throw new TypeError('wrong type: expected string, got ' + typeof(title))
    }
    var self = this;
    var slideObject = {
      id: self.slideLastId++,
      src: require('../../' + src),
      title: title
    };

    this.slides.push(slideObject);

    return slideObject;
  }
}

HomeController.$inject = ['$scope'];

export default HomeController;
