'use strict';

// TODO: test sensor listener. Supplied with a serial port, config (message interval), repository, message parsers
// test that for serial port data coming in, the repository gets the right messages
// cover the listner and the message parsers.

// currently the sensor data path is passed in.
// get tests around it as is
// extract repository construction and inject
// modify/add tests
// inject message parsers
// modify/add tests

// needs refactoring to get repositories and parsers out.
// perhaps even expand the xrf parser to get msg and data out as well as name...
// pattern appears to be:
// /a([A-Z]{2})([A-Z]{4})([A-Z0-9\.-]{5})/

const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');

const SensorListener = require('../sensorlistener').SensorListener;

chai.use(spies);

describe('XRF Sensor Listener', () => {

  let serialPortStub = {
    open: function () {}
  }

  it('should open the serial port', () => {

    let serialPortOpenSpy = chai.spy.on(serialPortStub, 'open');

    const sensorListener = new SensorListener(serialPortStub, 120, '/var/lib/homecontrol/sensordata/temperatureSensors');

    sensorListener.listen();

    expect(serialPortOpenSpy).to.have.been.called();
  });
});
