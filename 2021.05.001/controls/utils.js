// Array.prototype.remove = function(from, to) {
//   var rest = this.slice((to || from) + 1 || this.length)
//   this.length = from < 0 ? this.length + from : from
//   return this.push.apply(this, rest)
// }

// String.prototype.hashCode = function() {
//   var hash = 0
//   if (Array.prototype.reduce){
//     hash = this.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
//   } else {
//     var i = 0, len = this.length
//     while ( i < len ) {
//       hash  = ((hash << 5) - hash + this.charCodeAt(i++)) << 0
//     }
//   }
//   return abs(hash)
// }

// p5.Element.prototype.isVisible = function() {
//   return (this.elt.style.display != 'none')
// }

// p5.Vector.prototype.isOn = function(location_, radius_ = 10) {
//   var distancesquared = (this.x - location_.x) * (this.x - location_.x) + (this.y - location_.y) * (this.y - location_.y);
//   return round(distancesquared) <= radius_ * radius_;
// }

// p5.Vector.prototype.inRectangle = function(bounds_) {
//   return this.x > bounds_.x1 && this.x < bounds_.x2 && this.y > bounds_.y1 && this.y < bounds_.y2;
// }

const loadScript = (id, src) => {
  return new Promise((resolve, reject) => {
    let script = document.getElementById(id);
    if (!script) {
        script = document.createElement('script');
        script.id = id;
    } else {
      return;
    }
    script.type = 'text/javascript';
    script.onload = resolve;
    script.onerror = reject;
    script.src = src;
    document.head.append(script);
  })
}

function randint(max) {
  var _val = Math.random() * max
  // console.log(_val, Math.floor(_val))
  return (Math.floor(_val));
}

function degreeNormalize(angle_) {
  return (angle_ + 360) % 360
}

function shuffleme(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}

function sortWithIndeces(toSort) {
  for (var i = 0; i < toSort.length; i++) {
    toSort[i] = [toSort[i], i];
  }
  toSort.sort(function(left, right) {
    return left[0] < right[0] ? -1 : 1;
  });
  toSort.sortIndices = [];
  for (var j = 0; j < toSort.length; j++) {
    toSort.sortIndices.push(toSort[j][1]);
    toSort[j] = toSort[j][0];
  }
  return toSort;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
