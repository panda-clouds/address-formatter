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

		// Real life examples
		it('should change 123 n Happy St. > 123 N Happy St', () => {

			const result = PCAddressFormatter.street("123 n Happy St.");

			expect(result).toBe("123 N Happy St");

		});

		it('should change 123 n Happy Blvd. > 123 N Happy Bvld', () => {

			const result = PCAddressFormatter.street("123 n Happy Blvd.");

			expect(result).toBe("123 N Happy Blvd");

		});

		// Unit/Lot/Apartment/Apt etc
		function checkStreetAndUnit(street){
			const streetOnly = PCAddressFormatter.street(street);
			expect(streetOnly).toBe("123 N Happy St");

			const unitOnly = PCAddressFormatter.unit(street);
			expect(unitOnly).toBe("456");
		}

		it('should change 123 n Happy St Unit 456 > 123 N Happy St', () => {

			checkStreetAndUnit("123 n Happy St Unit 456");

		});

		it('should change 123 n Happy St unit 456 > 123 N Happy St', () => {

			checkStreetAndUnit("123 n Happy St unit 456");

		});

		it('should change 123 n Happy St Apt 456 > 123 N Happy St', () => {

			checkStreetAndUnit("123 n Happy St Apt 456");

		});

		it('should change 123 n Happy St apt 456 > 123 N Happy St', () => {

			checkStreetAndUnit("123 n Happy St apt 456");

		});

		it('should change 123 n Happy St # 456 > 123 N Happy St', () => {

			checkStreetAndUnit("123 n Happy St # 456");

		});

		it('should change 123 n Happy St #456 > 123 N Happy St', () => {

			checkStreetAndUnit("123 n Happy St #456");

		});

		it('should change 123 n Happy St 456 > 123 N Happy St', () => {

			checkStreetAndUnit("123 n Happy St 456");

		});

		it('should change 123 n Happy St Lot 456 > 123 N Happy St', () => {

			checkStreetAndUnit("123 n Happy St Lot 456");

		});

		it('should change 123 n Happy St lot 456 > 123 N Happy St', () => {

			checkStreetAndUnit("123 n Happy St lot 456");

		});

		it('should change 123 n Happy St, Apartment 456 > 123 N Happy St', () => {

			checkStreetAndUnit("123 n Happy St, Apartment 456");

		});

		it('should change 123 n Happy St, apartment 456 > 123 N Happy St', () => {

			checkStreetAndUnit("123 n Happy St, apartment 456");

		});

		it('should change 123 n Happy St Apartment 456 > 123 N Happy St', () => {

			checkStreetAndUnit("123 n Happy St Apartment 456");

		});

		it('should change 123 n Happy St apartment 456 > 123 N Happy St', () => {

			checkStreetAndUnit("123 n Happy St apartment 456");

		});

		it('should change 123 n Happy St., Apartment 456 > 123 N Happy St', () => {

			checkStreetAndUnit("123 n Happy St., Apartment 456");

		});

		it('should change 123 n Happy St., apartment 456 > 123 N Happy St', () => {

			checkStreetAndUnit("123 n Happy St., apartment 456")

		});


		// Intentional Mispellings
		it('should change 123 n Happy Bvld. > 123 N Happy Blvd', () => {

			const result = PCAddressFormatter.street("123 n Happy Bvld.");

			expect(result).toBe("123 N Happy Blvd");

		});

		it('should change 123 n Happy bvld > 123 N Happy Blvd', () => {

			const result = PCAddressFormatter.street("123 n Happy bvld");

			expect(result).toBe("123 N Happy Blvd");

		});

		it('should change 123 n Happy Steeet > 123 N Happy St', () => {

			const result = PCAddressFormatter.street("123 n Happy Steeet");

			expect(result).toBe("123 N Happy St");

		});

		it('should change 123 n Happy steeet > 123 N Happy St', () => {

			const result = PCAddressFormatter.street("123 n Happy steeet");

			expect(result).toBe("123 N Happy St");

		});

		it('should change 123 n Happy Steet > 123 N Happy St', () => {

			const result = PCAddressFormatter.street("123 n Happy Steet");

			expect(result).toBe("123 N Happy St");

		});

		it('should change 123 n Happy steet > 123 N Happy St', () => {

			const result = PCAddressFormatter.street("123 n Happy steet");

			expect(result).toBe("123 N Happy St");

		});

		it('should change 123 n Happy St, appartment 123 > 123 N Happy St', () => {

			const result = PCAddressFormatter.street("123 n Happy St, appartment 123");

			expect(result).toBe("123 N Happy St");

		});

		it('should change 123 n Happy St Appartment 123 > 123 N Happy St', () => {

			const result = PCAddressFormatter.street("123 n Happy St Appartment 123");

			expect(result).toBe("123 N Happy St");

		});

		it('should change 123 n Happy NotAC1 > 123 N Happy Notac1', () => {

			const result = PCAddressFormatter.street('123 n Happy NotAC1');

			expect(result).toBe("123 N Happy Notac1");

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

