/* global describe, it */
/* jshint expr: true */

'use strict';

var expect = require('chai').expect;
var requireNested = require('./index.js');

describe('requireNested', function() {

  it('can require normally', function() {
    expect(requireNested('mocha')).to.equal(require('mocha'));
  });

  it('can require nested-ly', function() {
    expect(requireNested('mocha', 'glob')).to.be.a('function');
  });

  it('can require triple nested-ly', function() {
    expect(requireNested('mocha', 'glob', 'minimatch')).to.be.a('function');
  });

  it('throws when no module is found', function() {
    expect(function() {
      requireNested('mocha', 'bleh');
    }).not.to.throw();
  });

});
