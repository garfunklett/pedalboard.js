// Copyright 2012 Armagan Amcalar. All Rights Reserved.
//
// This file is part of Pedalboard.js.
//
// Pedalboard.js is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Pedalboard.js is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Pedalboard.js.  If not, see <http://www.gnu.org/licenses/>.

/**
 * @fileoverview Base switch component.
 */


goog.provide('pb.footswitch.toggle.Component');
goog.require('pb.footswitch.Component');



/**
 * Pot component models a virtual switchentiometer. This base class is used to adjust audio parameter values of pedals.
 *
 * @constructor
 * @extends {pb.footswitch.Component}
 *
 * @param {string=} opt_name Name of the switch. Will be written under it.
 */
pb.footswitch.toggle.Component = function(opt_name) {
    goog.base(this, opt_name);
};
goog.inherits(pb.footswitch.toggle.Component, pb.footswitch.Component);