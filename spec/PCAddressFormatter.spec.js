const PCAddressFormatter = require("../src/PCAddressFormatter.js");

describe('PCAddressFormatter.js', () => {


	describe('isValidZip', () => {

		it('should pass 12345 as number', () => {

			const result = PCAddressFormatter.isValidZip(12345);

			expect(result).toBe(true);

		});

		it('should pass 12345', () => {

			const result = PCAddressFormatter.isValidZip("12345");

			expect(result).toBe(true);

		});

		it('should pass 12345-6789', () => {

			const result = PCAddressFormatter.isValidZip("12345-6789");

			expect(result).toBe(true);

		});

		it('should fail w2345', () => {

			const result = PCAddressFormatter.isValidZip("w2345");

			expect(result).toBe(false);

		});

		it('should fail w2345-6789', () => {

			const result = PCAddressFormatter.isValidZip("w2345-6789");

			expect(result).toBe(false);

		});

		it('should fail 12345-w789', () => {

			const result = PCAddressFormatter.isValidZip("12345-w789");

			expect(result).toBe(false);

		});

	});


	describe('street', () => {

		it('should change 123 North Happy Street > 123 N Happy St', () => {

			const result = PCAddressFormatter.street("123 North Happy Street");

			expect(result).toBe("123 N Happy St");

		});

		it('should change 123 N. Happy Street > 123 N Happy St', () => {

			const result = PCAddressFormatter.street("123 N. Happy Street");

			expect(result).toBe("123 N Happy St");

		});

		it('should change 123 n Happy Street > 123 N Happy St', () => {

			const result = PCAddressFormatter.street("123 n Happy Street");

			expect(result).toBe("123 N Happy St");

		});

	});

	describe('city', () => {

		it('should change Gilbert > GILBERT', () => {

			const result = PCAddressFormatter.city("Gilbert");

			expect(result).toBe("Gilbert");

		});

		it('should change San Antonio to SAN ANTONIO', () => {

			const result = PCAddressFormatter.city("San Antonio");

			expect(result).toBe("San Antonio");

		});

	});


	describe('state', () => {

		it('should change Arizona > AZ', () => {

			const result = PCAddressFormatter.state("Arizona");

			expect(result).toBe("AZ");

		});


		it('should change az > AZ', () => {

			const result = PCAddressFormatter.state("az");

			expect(result).toBe("AZ");

		});


		it('should change South Carolina > SC', () => {

			const result = PCAddressFormatter.state("South Carolina");

			expect(result).toBe("SC");

		});

		it('should change S. Carolina > SC', () => {

			const result = PCAddressFormatter.state("S. Carolina");

			expect(result).toBe("SC");

		});

	});

	describe('country', () => {

		it('should change USA > US', () => {

			const result = PCAddressFormatter.country("US");

			expect(result).toBe("US");

		});


		it('should change United States > USA', () => {

			const result = PCAddressFormatter.country("United States");

			expect(result).toBe("US");

		});

		it('should change United States of America > USA', () => {

			const result = PCAddressFormatter.country("United States of America");

			expect(result).toBe("US");

		});


		it('should change Mexico > MEX', () => {

			const result = PCAddressFormatter.country("Mexico");

			expect(result).toBe("MX");

		});

		it('should change Canada > CAN', () => {

			const result = PCAddressFormatter.country("Canada");

			expect(result).toBe("CA");

		});

	});

	describe('zipcode', () => {

		it('should change 8 52 34 > 85234 as String', () => {

			const result = PCAddressFormatter.zipcode("8 52 34");

			expect(result).toBe("85234");

		});

		it('should change 8 52 34 > 85234 as Number', () => {

			const result = PCAddressFormatter.zipcode(85234);

			expect(result).toBe("85234");

		});

	});

});

