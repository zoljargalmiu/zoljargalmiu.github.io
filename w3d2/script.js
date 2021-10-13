$(document).ready(function () {
  $("#start").click(function () {
    spheres.setWidth(parseInt($("#width")[0].value));
    spheres.setGrowth(parseInt($("#growth")[0].value));
    spheres.setInterval(parseInt($("#interval")[0].value));
    spheres.setNumber(parseInt($("#number")[0].value));

    for (let i = 0; i < spheres.getNumber(); i++)
      buildSphere(
        spheres.getWidth(),
        spheres.getGrowth(),
        spheres.getInterval(),
        i
      );
  });
});
class Sphere {
  getWidth() {
    return this.width;
  }
  setWidth(width) {
    this.width = width;
  }
  getGrowth() {
    return this.growth;
  }
  setGrowth(growth) {
    this.growth = growth;
  }
  getInterval() {
    return this.interval;
  }
  setInterval(interval) {
    this.interval = interval;
  }
  getNumber() {
    return this.number;
  }
  setNumber(number) {
    this.number = number;
  }
}

const spheres = new Sphere();

$(".sphere").click(function () {
  sphere.hide();
});

let extender = (mySphere, growth) => {
  mySphere.css({
    width: parseInt(mySphere.css("width")) + growth + "px",
    height: parseInt(mySphere.css("height")) + growth + "px",
  });
};

let buildSphere = (width, growth, interval, id) => {
  let mySphere = $("<div>", {
    id: "sphere" + id++,
    class: "sphere",
  });

  mySphere
    .css("width", width)
    .css("height", width)
    .css("left", id + Math.floor(Math.random() * 85) + "%")
    .css("top", id + Math.floor(Math.random() * 85) + "%")
    .css(
      "background-color",
      `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`
    )
    .click(() => {
      mySphere.remove();
    });

  $(".sphere-container").prepend(mySphere);
  let extenderInterval = setInterval(extender, interval, mySphere, growth);
  mySphere.click(() => {
    clearInterval(extenderInterval);
  });
};
