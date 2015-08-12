exports.processRecords = function(event, processorFunction) {
  event.Records.forEach(function(record) {
      // Kinesis data is base64 encoded so decode here
      var payload = new Buffer(record.kinesis.data, 'base64').toString('ascii');
      processorFunction(payload)
  });
}
