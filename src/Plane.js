function Plane(){}

Plane.prototype.land = function (airport) {
  airport.clearForLanding(this);
  this._location = airport;
};

Plane.prototype.takeoff = function(airport) {
  this._location.clearForTakeOff('');
};
