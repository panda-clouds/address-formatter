const PCAddressFormatter = require("../src/PCAddressFormatter.js");

describe('speed', () => {

	describe('street', () => {

		it('loop', () => {
			const addresses = [];
			for (var j = 200; j >= 1; j--) {
				addresses.push({ "street":"414 N Rock St","result":"414 N Rock St" });
				addresses.push({ "street":"414 N Rock Street","result":"414 N Rock St" });
				addresses.push({ "street":"414 North Rock Street","result":"414 N Rock St" });
				addresses.push({ "street":"414 N. Rock Street","result":"414 N Rock St" });
				addresses.push({ "street":"414 north Rock Street","result":"414 N Rock St" });
			}

			expect(addresses.length).toBe(1000)

			const startTime = new Date();
			for (var i = addresses.length - 1; i >= 0; i--) {
				const anAddress = addresses[i];
				const result = PCAddressFormatter.street(anAddress.street);

				expect(anAddress.result).toBe(result);


			}
			const endTime = new Date();
			// eslint-disable-next-line no-console
			console.log("Total Time:" + (endTime.getTime() - startTime.getTime()))
			// 42
			// 43
			// 46
			// 47
			// 41
		});

	});

});

