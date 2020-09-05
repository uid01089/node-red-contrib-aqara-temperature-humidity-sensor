"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const func = (RED) => {
    const aqaraTemperatureHumiditySensor = function (config) {
        const node = this;
        RED.nodes.createNode(node, config);
        /**
         * Nodes register a listener on the input event
         * to receive messages from the up-stream nodes in a flow.
        */
        node.on("input", function (msg, send, done) {
            // For maximum backwards compatibility, check that send exists.
            // If this node is installed in Node-RED 0.x, it will need to
            // fallback to using `node.send`
            send = send || function () { node.send.apply(node, arguments); };
            /*
             *      {   "Device":"0x6DBE",
             *          "Name":"TmpSens1",
             *          "BatteryVoltage":3.025,
             *          "BatteryPercentage":100,
             *          "Voltage":3.025,
             *          "Battery":100,
             *          "Temperature":24.46,
             *          "Humidity":48.76,
             *          "Endpoint":1,
             *          "LinkQuality":149
             *      }
             *
             *      {"Device":"0x8463",
             *      "Name":"TmpSens2",
             *      "Temperature":25.44,
             *      "Humidity":50.16,
             *      "PressureUnit":"hPa",
             *      "Pressure":968,
             *      "PressureScale":-1,
             *      "PressureScaledValue":9687,
             *      "Endpoint":1,
             *      "LinkQuality":63}}}
             *
             */
            const aquaMsg = [];
            const aquaPayload = JSON.parse(msg.payload);
            if (aquaPayload !== undefined && aquaPayload !== null) {
                if (this.name === aquaPayload.Name) {
                    aquaMsg.push({ payload: aquaPayload.Device });
                    aquaMsg.push({ payload: aquaPayload.Name });
                    aquaMsg.push({ payload: aquaPayload.Temperature });
                    aquaMsg.push({ payload: aquaPayload.Humidity });
                    aquaMsg.push({ payload: aquaPayload.Pressure });
                    aquaMsg.push({ payload: aquaPayload.BatteryVoltage });
                    aquaMsg.push({ payload: aquaPayload.BatteryPercentage });
                    aquaMsg.push({ payload: aquaPayload.Voltage });
                    aquaMsg.push({ payload: aquaPayload.Battery });
                    aquaMsg.push({ payload: aquaPayload.Endpoint });
                    aquaMsg.push({ payload: aquaPayload.LinkQuality });
                    aquaMsg.push({ payload: (new Date()).toString() });
                    aquaMsg.push({ payload: aquaPayload.Endpoint });
                    aquaMsg.push({ payload: aquaPayload.LinkQuality });
                    aquaMsg.push({ payload: { [`${aquaPayload.Name}`]: aquaPayload.Temperature } });
                    aquaMsg.push({ payload: { [`${aquaPayload.Name}`]: aquaPayload.Humidity } });
                    send(aquaMsg);
                }
            }
            // Once finished, call 'done'.
            // This call is wrapped in a check that 'done' exists
            // so the node will work in earlier versions of Node-RED (<1.0)
            if (done) {
                done();
            }
        });
        /**
         * Whenever a new flow is deployed, the existing nodes are deleted.
         * If any of them need to tidy up state when this happens, such as
         * disconnecting from a remote system, they should register a listener
         * on the close event.
        */
        node.on('close', function (removed, done) {
            if (removed) {
                // This node has been disabled/deleted
            }
            else {
                // This node is being restarted
            }
            done();
        });
    };
    RED.nodes.registerType("aqara-temperature-humidity-sensor", aqaraTemperatureHumiditySensor);
};
module.exports = func;
//# sourceMappingURL=aqara-temperature-humidity-sensor.js.map