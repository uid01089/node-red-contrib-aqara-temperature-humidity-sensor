
const helper = require("node-red-node-test-helper");
const lowerNode = require("../src/aqara-temperature-humidity-sensor.js");



describe('lower-case Node', function () {

    beforeEach(function (done) {
        helper.startServer(done);
    });

    afterEach(function (done) {
        helper.unload();
        helper.stopServer(done);
    });

    const flow = [
        {
            id: "AquaraTempSensor", type: "aqara-temperature-humidity-sensor", name: "TmpSens1",
            wires: [
                ["Device"],
                ["Name"],
                ["Temperature"],
                ["Humidity"],
                ["Pressure"],
                ["BatteryVoltage"],
                ["BatteryPercentage"],
                ["Voltage"],
                ["Battery"],
                ["Endpoint"],
                ["LinkQuality"],
                ["Time"],
                ["LinkQuality"],
                ["Time"],
                ["InfluxDbTemp"],
                ["InfluxDbHumidity"]]
        },
        { id: "Device", type: "helper" },
        { id: "Name", type: "helper" },
        { id: "BatteryVoltage", type: "helper" },
        { id: "BatteryPercentage", type: "helper" },
        { id: "Voltage", type: "helper" },
        { id: "Battery", type: "helper" },
        { id: "Temperature", type: "helper" },
        { id: "Humidity", type: "helper" },
        { id: "Endpoint", type: "helper" },
        { id: "LinkQuality", type: "helper" },
        { id: "Time", type: "helper" },
        { id: "Pressure", type: "helper" },
        { id: "InfluxDbTemp", type: "helper" },
        { id: "InfluxDbHumidity", type: "helper" }
    ];



    const testMsg = {
        payload: '{"Device":"0x6DBE","Name":"TmpSens1","BatteryVoltage":3.015,"BatteryPercentage":100,"Voltage":3.015,"Battery":100,"Temperature":23.88,"Humidity":49.5,"Pressure":968,"Endpoint":1,"LinkQuality":105}'
    };

    it('should be loaded', function (done) {
        var flow = [{ id: "AquaraTempSensor", type: "aqara-temperature-humidity-sensor", name: "TmpSens1" }];
        helper.load(lowerNode, flow, function () {
            var underTestNode = helper.getNode("AquaraTempSensor");
            underTestNode.should.have.property('name', 'TmpSens1');
            done();
        });
    });

    it('should return Device', function (done) {
        helper.load(lowerNode, flow, function () {
            var helperNode = helper.getNode("Device");
            var underTestNode = helper.getNode("AquaraTempSensor");

            helperNode.on("input", function (msg) {

                msg.should.have.property('payload', '0x6DBE');
                done();
            });
            underTestNode.receive(testMsg);
        });
    });

    it('should return Name', function (done) {
        helper.load(lowerNode, flow, function () {
            var helperNode = helper.getNode("Name");
            var underTestNode = helper.getNode("AquaraTempSensor");

            helperNode.on("input", function (msg) {

                msg.should.have.property('payload', 'TmpSens1');
                done();
            });
            underTestNode.receive(testMsg);
        });
    });

    it('should return BatteryVoltage', function (done) {
        helper.load(lowerNode, flow, function () {
            var helperNode = helper.getNode("BatteryVoltage");
            var underTestNode = helper.getNode("AquaraTempSensor");

            helperNode.on("input", function (msg) {

                msg.should.have.property('payload', 3.015);
                done();
            });
            underTestNode.receive(testMsg);
        });
    });


    it('should return BatteryPercentage', function (done) {
        helper.load(lowerNode, flow, function () {
            var helperNode = helper.getNode("BatteryPercentage");
            var underTestNode = helper.getNode("AquaraTempSensor");

            helperNode.on("input", function (msg) {

                msg.should.have.property('payload', 100);
                done();
            });
            underTestNode.receive(testMsg);
        });
    });

    it('should return Voltage', function (done) {
        helper.load(lowerNode, flow, function () {
            var helperNode = helper.getNode("Voltage");
            var underTestNode = helper.getNode("AquaraTempSensor");

            helperNode.on("input", function (msg) {

                msg.should.have.property('payload', 3.015);
                done();
            });
            underTestNode.receive(testMsg);
        });
    });

    it('should return Battery', function (done) {
        helper.load(lowerNode, flow, function () {
            var helperNode = helper.getNode("Battery");
            var underTestNode = helper.getNode("AquaraTempSensor");

            helperNode.on("input", function (msg) {

                msg.should.have.property('payload', 100);
                done();
            });
            underTestNode.receive(testMsg);
        });
    });

    it('should return Temperature', function (done) {
        helper.load(lowerNode, flow, function () {
            var helperNode = helper.getNode("Temperature");
            var underTestNode = helper.getNode("AquaraTempSensor");

            helperNode.on("input", function (msg) {

                msg.should.have.property('payload', 23.88);
                done();
            });
            underTestNode.receive(testMsg);
        });
    });

    it('should return Humidity', function (done) {
        helper.load(lowerNode, flow, function () {
            var helperNode = helper.getNode("Humidity");
            var underTestNode = helper.getNode("AquaraTempSensor");

            helperNode.on("input", function (msg) {

                msg.should.have.property('payload', 49.5);
                done();
            });
            underTestNode.receive(testMsg);
        });
    });

    it('should return Endpoint', function (done) {
        helper.load(lowerNode, flow, function () {
            var helperNode = helper.getNode("Endpoint");
            var underTestNode = helper.getNode("AquaraTempSensor");

            helperNode.on("input", function (msg) {

                msg.should.have.property('payload', 1);
                done();
            });
            underTestNode.receive(testMsg);
        });
    });

    it('should return LinkQuality', function (done) {
        helper.load(lowerNode, flow, function () {
            var helperNode = helper.getNode("LinkQuality");
            var underTestNode = helper.getNode("AquaraTempSensor");

            helperNode.on("input", function (msg) {

                msg.should.have.property('payload', 105);
                done();
            });
            underTestNode.receive(testMsg);
        });
    });


    it('should return Time', function (done) {
        helper.load(lowerNode, flow, function () {
            const helperNode = helper.getNode("Time");
            const underTestNode = helper.getNode("AquaraTempSensor");


            helperNode.on("input", function (msg) {

                msg.should.have.property('payload', (new Date()).toString());
                done();
            });
            underTestNode.receive(testMsg);
        });
    });

    it('should return Pressure', function (done) {
        helper.load(lowerNode, flow, function () {
            const helperNode = helper.getNode("Pressure");
            const underTestNode = helper.getNode("AquaraTempSensor");


            helperNode.on("input", function (msg) {

                msg.should.have.property('payload', 968);
                done();
            });
            underTestNode.receive(testMsg);
        });
    });


    it('should return InfluxDbTemp', function (done) {
        helper.load(lowerNode, flow, function () {
            const helperNode = helper.getNode("InfluxDbTemp");
            const underTestNode = helper.getNode("AquaraTempSensor");


            helperNode.on("input", function (msg) {

                //msg.should.have.property('TmpSens1', 23.88);
                done();
            });
            underTestNode.receive(testMsg);
        });
    });

    it('should return InfluxDbHumidity', function (done) {
        helper.load(lowerNode, flow, function () {
            const helperNode = helper.getNode("InfluxDbHumidity");
            const underTestNode = helper.getNode("AquaraTempSensor");


            helperNode.on("input", function (msg) {

                //msg.should.have.property('TmpSens1', 49.5);
                done();
            });
            underTestNode.receive(testMsg);
        });
    });
});