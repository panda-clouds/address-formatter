
const kNotFound = "Not Found";
class PCAddressFormatter  {
	constructor() {
		//Empty Constructor
	}

	static replaceAll(string,search,replacement){
		return string.split(search).join(replacement);
	}

	static fullUSAddress(address){

		// let street, city, state, zipcode, country;
		// 1. all uppercase
		address = address.toUpperCase();

		// 2. remove United States

		address = PCAddressFormatter.replaceAll(address,'UNITED STATES OF AMERICA','');
		address = PCAddressFormatter.replaceAll(address,'UNITED STATES','');
		address = PCAddressFormatter.replaceAll(address,'US','');
		address = PCAddressFormatter.replaceAll(address,'USA','');

		// 3. remove leading and trailing spaces
		address = address.trim();

		// 4. remove double spaces '1234  Happy St' > '1234 Happy St'
		address = PCAddressFormatter.replaceAll(address,'  ',' ');
		address = PCAddressFormatter.replaceAll(address,'  ',' ');
		address = PCAddressFormatter.replaceAll(address,'  ',' ');
		address = PCAddressFormatter.replaceAll(address,'  ',' ');
		address = PCAddressFormatter.replaceAll(address,'  ',' ');

		// 4. break up the address
		const words = address.split(' ')

		const maybeZip = words[words.length - 1];
		if(PCAddressFormatter.isValidZip(maybeZip)){
			words.pop()
		}

	}

	// static isValidState(input){
	// 	// accepts
	// 	// Arizona
	// 	// AZ


	// 	return true
	// }

	static isValidZip(input){
		// accepts
		// 12345
		// 12345-6789

		// convert numbers to string
		input = input + '';

		if(input.includes('-')){
			const parts = input.split('-')
			if(parts.length != 2) return false;
			if(parts[0].length != 5) return false;
			if(parts[1].length != 4) return false;
			if(!PCAddressFormatter.isAllNumbers(parts[0])) return false;
			if(!PCAddressFormatter.isAllNumbers(parts[1])) return false;
		}else{
			if(input.length != 5) return false;
			if(!PCAddressFormatter.isAllNumbers(input)) return false;
		}
		return true
	}

	static isAllNumbers(input){

		for (var i = input.length - 1; i >= 0; i--) {
			switch(input.charAt(i)){
				case '1': break
				case '2': break
				case '3': break
				case '4': break
				case '5': break
				case '6': break
				case '7': break
				case '8': break
				case '9': break
				case '0': break
				default:
					return false
			}
		}
		return true
	}
	static unifyC1Suffix(word){
		// 1. make case insensitive
		word = word.toUpperCase();

		// 2. trim
		word = word.trim()

		// 3. remove periods and commas
		word = PCAddressFormatter.replaceAll(word,".","");
		word = PCAddressFormatter.replaceAll(word,",","");
		switch(word){

			// These are the most popular C1s
			case 'ST':
				return 'ST';
			case 'STREET':
				return 'ST';
			case 'STRT':
				return 'ST';
			case 'STR':
				return 'ST';
			// Common misspellings
			case 'STEEET':
				return 'ST';
			case 'STEET':
				return 'ST';

			case 'AVE':
				return 'AVE';
			case 'AV':
				return 'AVE';
			case 'AVEN':
				return 'AVE';
			case 'AVENU':
				return 'AVE';
			case 'AVENUE':
				return 'AVE';
			case 'AVN':
				return 'AVE';
			case 'AVNUE':
				return 'AVE';

			case 'WAY':
				return 'WAY';
			case 'WY':
				return 'WAY';

			case 'BLVD':
				return 'BLVD';
			case 'BOUL':
				return 'BLVD';
			case 'BOULEVARD':
				return 'BLVD';
			case 'BOULV':
				return 'BLVD';
			// Common misspellings
			case 'BVLD':
				return 'BLVD';


			case 'DR':
				return 'DR';
			case 'DRIV':
				return 'DR';
			case 'DRIVE':
				return 'DR';
			case 'DRV':
				return 'DR';

			case 'PL':
				return 'PL';
			case 'PLACE':
				return 'PL';

			case 'PKWY':
				return 'PKWY';
			case 'PARKWAY':
				return 'PKWY';
			case 'PARKWY':
				return 'PKWY';
			case 'PKWAY':
				return 'PKWY';
			case 'PKY':
				return 'PKWY';

			case 'ROAD':
				return 'RD';
			case 'RD':
				return 'RD';

			case 'CIR':
				return 'CIR';
			case 'CIRC':
				return 'CIR';
			case 'CIRCL':
				return 'CIR';
			case 'CIRCLE':
				return 'CIR';
			case 'CRCL':
				return 'CIR';
			case 'CRCLE':
				return 'CIR';

			case 'LN':
				return 'LN';
			case 'LANE':
				return 'LN';


			// somewhat popular
			case 'CTR':
				return 'CTR';
			case 'CEN':
				return 'CTR';
			case 'CENT':
				return 'CTR';
			case 'CENTER':
				return 'CTR';
			case 'CENTR':
				return 'CTR';
			case 'CENTRE':
				return 'CTR';
			case 'CNTER':
				return 'CTR';
			case 'CNTR':
				return 'CTR';

			case 'CT':
				return 'CT';
			case 'COURT':
				return 'CT';

			case 'CV':
				return 'CV';
			case 'COVE':
				return 'CV';

			case 'XRD':
				return 'XRD';
			case 'CROSSROAD':
				return 'XRD';

			case 'EST':
				return 'EST';
			case 'ESTATE':
				return 'EST';

			case 'ESTS':
				return 'ESTS';
			case 'ESTATES':
				return 'ESTS';

			case 'PLZ':
				return 'PLZ';
			case 'PLAZA':
				return 'PLZ';
			case 'PLZA':
				return 'PLZ';

			case 'VW':
				return 'VW';
			case 'VIEW':
				return 'VW';

			// All the rest
			case 'ALY':
				return 'ALY';
			case 'ALLEE':
				return 'ALY';
			case 'ALLEY':
				return 'ALY';
			case 'ALLY':
				return 'ALY';

			case 'ANX':
				return 'ANX';
			case 'ANEX':
				return 'ANX';
			case 'ANNEX':
				return 'ANX';
			case 'ANNX':
				return 'ANX';

			case 'ARC':
				return 'ARC';
			case 'ARCADE':
				return 'ARC';

			// Moved up
			// case 'AV':
			// 	return 'AVE';
			// case 'AVEN':
			// 	return 'AVE';
			// case 'AVENU':
			// 	return 'AVE';
			// case 'AVENUE':
			// 	return 'AVE';
			// case 'AVN':
			// 	return 'AVE';
			// case 'AVNUE':
			// 	return 'AVE';
			case 'BYU':
				return 'BYU';
			case 'BAYOO':
				return 'BYU';
			case 'BAYOU':
				return 'BYU';

			case 'BCH':
				return 'BCH';
			case 'BEACH':
				return 'BCH';

			case 'BND':
				return 'BND';
			case 'BEND':
				return 'BND';

			case 'BLF':
				return 'BLF';
			case 'BLUF':
				return 'BLF';
			case 'BLUFF':
				return 'BLF';

			case 'BLFS':
				return 'BLFS';
			case 'BLUFFS':
				return 'BLFS';

			case 'BTM':
				return 'BTM';
			case 'BOT':
				return 'BTM';
			case 'BOTTM':
				return 'BTM';
			case 'BOTTOM':
				return 'BTM';
			// Moved up
			// case 'BOUL':
			// 	return 'BLVD';
			// case 'BOULEVARD':
			// 	return 'BLVD';
			// case 'BOULV':
			// 	return 'BLVD';

			case 'BR':
				return 'BR';
			case 'BRNCH':
				return 'BR';
			case 'BRANCH':
				return 'BR';

			case 'BRG':
				return 'BRG';
			case 'BRDGE':
				return 'BRG';
			case 'BRIDGE':
				return 'BRG';

			case 'BRK':
				return 'BRK';
			case 'BROOK':
				return 'BRK';

			case 'BRKS':
				return 'BRKS';
			case 'BROOKS':
				return 'BRKS';

			case 'BG':
				return 'BG';
			case 'BURG':
				return 'BG';

			case 'BGS':
				return 'BGS';
			case 'BURGS':
				return 'BGS';

			case 'BYP':
				return 'BYP';
			case 'BYPA':
				return 'BYP';
			case 'BYPAS':
				return 'BYP';
			case 'BYPASS':
				return 'BYP';
			case 'BYPS':
				return 'BYP';

			case 'CP':
				return 'CP';
			case 'CAMP':
				return 'CP';
			case 'CMP':
				return 'CP';

			case 'CYN':
				return 'CYN';
			case 'CANYN':
				return 'CYN';
			case 'CANYON':
				return 'CYN';
			case 'CNYN':
				return 'CYN';

			case 'CPE':
				return 'CPE';
			case 'CAPE':
				return 'CPE';

			case 'CSWY':
				return 'CSWY';
			case 'CAUSEWAY':
				return 'CSWY';
			case 'CAUSWA':
				return 'CSWY';
			// moved up
			// case 'CTR':
			// 	return 'CTR';
			// case 'CEN':
			// 	return 'CTR';
			// case 'CENT':
			// 	return 'CTR';
			// case 'CENTER':
			// 	return 'CTR';
			// case 'CENTR':
			// 	return 'CTR';
			// case 'CENTRE':
			// 	return 'CTR';
			// case 'CNTER':
			// 	return 'CTR';
			// case 'CNTR':
			// 	return 'CTR';

			case 'CTRS':
				return 'CTRS';
			case 'CENTERS':
				return 'CTRS';
			//moved up
			// case 'CIR':
			// 	return 'CIR';
			// case 'CIRC':
			// 	return 'CIR';
			// case 'CIRCL':
			// 	return 'CIR';
			// case 'CIRCLE':
			// 	return 'CIR';
			// case 'CRCL':
			// 	return 'CIR';
			// case 'CRCLE':
			// 	return 'CIR';

			case 'CIRS':
				return 'CIRS';
			case 'CIRCLES':
				return 'CIRS';

			case 'CLF':
				return 'CLF';
			case 'CLIFF':
				return 'CLF';

			case 'CLFS':
				return 'CLFS';
			case 'CLIFFS':
				return 'CLFS';

			case 'CLB':
				return 'CLB';
			case 'CLUB':
				return 'CLB';

			case 'CMN':
				return 'CMN';
			case 'COMMON':
				return 'CMN';

			case 'CMNS':
				return 'CMNS';
			case 'COMMONS':
				return 'CMNS';

			case 'COR':
				return 'COR';
			case 'CORNER':
				return 'COR';

			case 'CORS':
				return 'CORS';
			case 'CORNERS':
				return 'CORS';

			case 'CRSE':
				return 'CRSE';
			case 'COURSE':
				return 'CRSE';

			// case 'CT':
			// 	return 'CT';
			// case 'COURT':
			// 	return 'CT';

			case 'COURTS':
				return 'CTS';
			case 'CTS':
				return 'CTS';

			// case 'CV':
			// 	return 'CV';
			// case 'COVE':
			// 	return 'CV';

			case 'CVS':
				return 'CVS';
			case 'COVES':
				return 'CVS';

			case 'CRES':
				return 'CRES';
			case 'CREEK':
				return 'CRES';

			case 'CRST':
				return 'CRST';
			case 'CREST':
				return 'CRST';

			case 'XING':
				return 'XING';
			case 'CROSSING':
				return 'XING';
			case 'CRSSNG':
				return 'XING';

			case 'XRDS':
				return 'XRDS';
			case 'CROSSROADS':
				return 'XRDS';

			case 'CURV':
				return 'CURV';
			case 'CURVE':
				return 'CURV';

			case 'DL':
				return 'DL';
			case 'DALE':
				return 'DL';
			case 'DAM':
				return 'DM';

			case 'DV':
				return 'DV';
			case 'DIV':
				return 'DV';
			case 'DIVIDE':
				return 'DV';
			case 'DVD':
				return 'DV';
			// moved up
			// case 'DRIV':
			// 	return 'DR';
			// case 'DRIVE':
			// 	return 'DR';
			// case 'DRV':
			// 	return 'DR';

			case 'DRS':
				return 'DRS';
			case 'DRIVES':
				return 'DRS';

			// case 'EST':
			// 	return 'EST';
			// case 'ESTATE':
			// 	return 'EST';

			// case 'ESTS':
			// 	return 'ESTS';
			// case 'ESTATES':
			// 	return 'ESTS';

			//Stoped doing all of them here
			// skipped a bunch

			case 'FWY':
				return 'FWY';
			case 'FREEWAY':
				return 'FWY';
			case 'FREEWY':
				return 'FWY';
			case 'FRWAY':
				return 'FWY';
			case 'FRWY':
				return 'FWY';

			// skipped a bunch

			// case 'LN':
			// 	return 'LN';
			// case 'LANE':
			// 	return 'LN';

			// skipped a bunch

			case 'LOOP':
				return 'LOOP';
			case 'LOOPS':
				return 'LOOP';

			// skipped a bunch

			case 'MNR':
				return 'MNR';
			case 'MANOR':
				return 'MNR';

			case 'MANORS':
				return 'MNRS';
			case 'MNRS':
				return 'MNRS';

			// skipped a bunch

			case 'OPAS':
				return 'OPAS';
			case 'OVERPASS':
				return 'OPAS';

			case 'PARK':
				return 'PARK';
			case 'PRK':
				return 'PARK';
			case 'PARKS':
				return 'PARK';
			//moved up
			// case 'PKWY':
			// 	return 'PKWY';
			// case 'PARKWAY':
			// 	return 'PKWY';
			// case 'PARKWY':
			// 	return 'PKWY';
			// case 'PKWAY':
			// 	return 'PKWY';
			// case 'PKY':
			// 	return 'PKWY';

			case 'PARKWAYS':
				return 'PKWY';
			case 'PKWYS':
				return 'PKWY';

			case 'PSGE':
				return 'PSGE';
			case 'PASSAGE':
				return 'PSGE';

			case 'PATH':
				return 'PATH';
			case 'PATHS':
				return 'PATH';

			// skipped a bunch

			// Moved Up
			// case 'PL':
			// 	return 'PL';
			// case 'PLACE':
			// 	return 'PL';

			// skipped a bunch

			// case 'PLZ':
			// 	return 'PLZ';
			// case 'PLAZA':
			// 	return 'PLZ';
			// case 'PLZA':
			// 	return 'PLZ';

			case 'PT':
				return 'PT';
			case 'POINT':
				return 'PT';
			case 'POINTS':
				return 'PTS';


			case 'PRT':
				return 'PRT';
			case 'PORT':
				return 'PRT';

			case 'PRTS':
				return 'PRTS';
			case 'PORTS':
				return 'PRTS';

			// skipped a bunch
			// moved ip
			// case 'ROAD':
			// 	return 'RD';

			case 'RDS':
				return 'RDS';
			case 'ROADS':
				return 'RDS';

			case 'RTE':
				return 'RTE';
			case 'ROUTE':
				return 'RTE';

			// skipped a bunch

			case 'SQ':
				return 'SQ';
			case 'SQR':
				return 'SQ';
			case 'SQRE':
				return 'SQ';
			case 'SQU':
				return 'SQ';
			case 'SQUARE':
				return 'SQ';

			case 'SQS':
				return 'SQS';
			case 'SQRS':
				return 'SQS';
			case 'SQUARES':
				return 'SQS';

			case 'STA':
				return 'STA';
			case 'STATION':
				return 'STA';
			case 'STATN':
				return 'STA';
			case 'STN':
				return 'STA';

			// skipped a bunch

			// Moved to to
			// case 'STREET':
			// 	return 'ST';
			// case 'STRT':
			// 	return 'ST';
			// case 'STR':
			// 	return 'ST';

			case 'STS':
				return 'STS';
			case 'STREETS':
				return 'STS';

			// skipped a bunch

			case 'TER':
				return 'TER';
			case 'TERR':
				return 'TER';
			case 'TERRACE':
				return 'TER';


			case 'TRWY':
				return 'TRWY';
			case 'THROUGHWAY':
				return 'TRWY';

			// skipped a bunch

			case 'TRL':
				return 'TRL';
			case 'TRAIL':
				return 'TRL';
			case 'TRAILS':
				return 'TRL';
			case 'TRLS':
				return 'TRL';

			// skipped a bunch

			case 'TPKE':
				return 'TPKE';
			case 'TRNPK':
				return 'TPKE';
			case 'TURNPIKE':
				return 'TPKE';
			case 'TURNPK':
				return 'TPKE';

			case 'UPAS':
				return 'UPAS';
			case 'UNDERPASS':
				return 'UPAS';

			// skipped a bunch
			// case 'VW':
			// 	return 'VW';
			// case 'VIEW':
			// 	return 'VW';

			case 'VIEWS':
				return 'VWS';
			case 'VWS':
				return 'VWS';

			case 'VLG':
				return 'VLG';
			case 'VILL':
				return 'VLG';
			case 'VILLAG':
				return 'VLG';
			case 'VILLAGE':
				return 'VLG';
			case 'VILLG':
				return 'VLG';
			case 'VILLIAGE':
				return 'VLG';

			case 'VLGS':
				return 'VLGS';
			case 'VILLAGES':
				return 'VLGS';

			case 'VL':
				return 'VL';
			case 'VILLE':
				return 'VL';

			// this causes "Vista de valle" to fail
			// case 'VIST':
			// 	return 'VIS';
			// case 'VISTA':
			// 	return 'VIS';
			// case 'VST':
			// 	return 'VIS';
			// case 'VSTA':
			// 	return 'VIS';

			case 'WALK':
				return 'WALK';
			case 'WALKS':
				return 'WALK';
			// moved up
			// case 'WY':
			// 	return 'WAY';

			case 'WL':
				return 'WL';
			case 'WELL':
				return 'WL';
			case 'WELLS':
				return 'WLS';
			default:
				return kNotFound;
		}

	}
	static streetAndUnit(street){
		// 1. all uppercase "123 N HaPpY StReEt" > "123 n happy st"
		street = street.toLowerCase();

		// 2. Move NORTH to N
		street = PCAddressFormatter.replaceAll(street," north "," N ");
		street = PCAddressFormatter.replaceAll(street," east "," E ");
		street = PCAddressFormatter.replaceAll(street," south "," S ");
		street = PCAddressFormatter.replaceAll(street," west "," W ");

		// 3. Move N. to N
		street = PCAddressFormatter.replaceAll(street," n. "," N ");
		street = PCAddressFormatter.replaceAll(street," e. "," E ");
		street = PCAddressFormatter.replaceAll(street," s. "," S ");
		street = PCAddressFormatter.replaceAll(street," w. "," W ");

		const parts = street.split(' ')
		// This method relies on some assumptions
		// A. There will only ever be 1 “C1 street suffix” (ie. never “bvld rd” just “bvld” or “rd”)
		// B. Some “C1 street suffixes” are more popular than others. (so we can increase efficency by putting them higher in the unifyC1Suffix switch)
		// C. The “C1 street suffix” will most often be the last word of the “street” section. (so we work backwards)

		// start with the last and work backwards
		// looking for the suffix

		let foundSuffix = false;
		let finalStreetString = '';
		let unitString = '';
		let backUpString = '';
		for (var i = parts.length - 1; i >= 0; i--) {
			let aPart = parts[i];
			if(!foundSuffix){
				const replacment = PCAddressFormatter.unifyC1Suffix(aPart);
				if(replacment !== kNotFound){
					// we found the suffix
					aPart = replacment.toLowerCase();
					foundSuffix = true;
				}
			}
			backUpString  = aPart.charAt(0).toUpperCase() + aPart.slice(1) + ' ' + backUpString;
			// create our final string starting with the last word
			// iteration 1: Not Stored '123'
			// iteration 2: Not Stored 'Lot'
			// iteration 3: 'St '
			// iteration 4: 'Happy St '
			// iteration 5: 'N Happy St '
			// iteration 6: '123 N Happy St '
			if(foundSuffix){
				finalStreetString = aPart.charAt(0).toUpperCase() + aPart.slice(1) + ' ' + finalStreetString;
			}else{
				// 1. to lowercase
				let cleanedPart = aPart.toLowerCase()

				// 2. remove periods and commas
				cleanedPart =  PCAddressFormatter.replaceAll(cleanedPart,".","");

				// 3. remove lot unit etc
				cleanedPart =  PCAddressFormatter.replaceAll(cleanedPart,"lot","");
				cleanedPart =  PCAddressFormatter.replaceAll(cleanedPart,"unit","");
				cleanedPart =  PCAddressFormatter.replaceAll(cleanedPart,"appartment","");
				cleanedPart =  PCAddressFormatter.replaceAll(cleanedPart,"apartment","");
				cleanedPart =  PCAddressFormatter.replaceAll(cleanedPart,"apt","");
				cleanedPart =  PCAddressFormatter.replaceAll(cleanedPart,"#","");
				// 4. trim
				cleanedPart = cleanedPart.trim()

				if(cleanedPart && cleanedPart != ''){
					unitString = cleanedPart.toUpperCase() + ' ' + unitString;
				}

			}

		}
		// in case we don't find the suffix return what we have instead of an empty string
		if(!foundSuffix){
			finalStreetString = backUpString;
		}

		// remove the trailing space "123 N Happy St " > "123 N Happy St"
		finalStreetString = finalStreetString.trim();

		// remove the trailing space "123 " > "123"
		unitString = unitString.trim();
		if(unitString == ''){
			unitString = null;
		}

		return {'street':finalStreetString,'unit':unitString };
	}

	static street(street){

		return this.streetAndUnit(street).street;

	}

	static unit(street){

		const rawUnit = this.streetAndUnit(street).unit;
		return rawUnit;

	}

	static city(city){

		// 1. all lowercase
		city = city.toLowerCase();

		// 2. remove leading and trailing
		city = city.trim();

		// 3. split into words
		const allWords = city.split(' ')

		// 4. capitalize first letter of each
		let finalString = '';
		for (var i = 0; i < allWords.length; i++) {
			const aWord = allWords[i]
			finalString = finalString + aWord.charAt(0).toUpperCase() + aWord.slice(1) + ' ';
		}

		// 5. remove final space
		finalString = finalString.trim();

		return finalString;
	}
	static state(state){
		// This function changes the state to
		// the following inputs will have the same output
		// Arizona > AZ
		// ARIZONA > AZ
		// az > AZ

		// 1. all uppercase
		state = state.toUpperCase();

		// 2. remove all spaces
		state = PCAddressFormatter.replaceAll(state," ","");

		// 3. remove all periods
		// N.DAKOTA > NDAKOTA
		state = PCAddressFormatter.replaceAll(state,".","");

		// 3. change to abriviation
		// From https://www.softschools.com/social_studies/state_abbreviations/
		state = PCAddressFormatter.replaceAll(state,"ALABAMA","AL");
		state = PCAddressFormatter.replaceAll(state,"ALASKA","AK");
		state = PCAddressFormatter.replaceAll(state,"ARIZONA","AZ");
		state = PCAddressFormatter.replaceAll(state,"ARKANSAS","AR");
		state = PCAddressFormatter.replaceAll(state,"CALIFORNIA","CA");
		state = PCAddressFormatter.replaceAll(state,"COLORADO","CO");
		state = PCAddressFormatter.replaceAll(state,"CONNECTICUT","CT");
		state = PCAddressFormatter.replaceAll(state,"DELAWARE","DE");
		state = PCAddressFormatter.replaceAll(state,"FLORIDA","FL");
		state = PCAddressFormatter.replaceAll(state,"GEORGIA","GA");
		state = PCAddressFormatter.replaceAll(state,"HAWAII","HI");
		state = PCAddressFormatter.replaceAll(state,"IDAHO","ID");
		state = PCAddressFormatter.replaceAll(state,"ILLINOIS","IL");
		state = PCAddressFormatter.replaceAll(state,"INDIANA","IN");
		state = PCAddressFormatter.replaceAll(state,"IOWA","IA");
		state = PCAddressFormatter.replaceAll(state,"KANSAS","KS");
		state = PCAddressFormatter.replaceAll(state,"KENTUCKY","KY");
		state = PCAddressFormatter.replaceAll(state,"LOUISIANA","LA");
		state = PCAddressFormatter.replaceAll(state,"MAINE","ME");
		state = PCAddressFormatter.replaceAll(state,"MARYLAND","MD");
		state = PCAddressFormatter.replaceAll(state,"MASSACHUSETTS","MA");
		state = PCAddressFormatter.replaceAll(state,"MICHIGAN","MI");
		state = PCAddressFormatter.replaceAll(state,"MINNESOTA","MN");
		state = PCAddressFormatter.replaceAll(state,"MISSISSIPPI","MS");
		state = PCAddressFormatter.replaceAll(state,"MISSOURI","MO");
		state = PCAddressFormatter.replaceAll(state,"MONTANA","MT");
		state = PCAddressFormatter.replaceAll(state,"NEBRASKA","NE");
		state = PCAddressFormatter.replaceAll(state,"NEVADA","NV");
		state = PCAddressFormatter.replaceAll(state,"NEWHAMPSHIRE","NH");
		state = PCAddressFormatter.replaceAll(state,"NEWJERSEY","NJ");
		state = PCAddressFormatter.replaceAll(state,"NEWMEXICO","NM");
		state = PCAddressFormatter.replaceAll(state,"NEWYORK","NY");
		state = PCAddressFormatter.replaceAll(state,"NORTHCAROLINA","NC");
		state = PCAddressFormatter.replaceAll(state,"NCAROLINA","NC");   // Manually added
		state = PCAddressFormatter.replaceAll(state,"NORTHDAKOTA","ND");
		state = PCAddressFormatter.replaceAll(state,"NDAKOTA","ND");     // Manually added
		state = PCAddressFormatter.replaceAll(state,"OHIO","OH");
		state = PCAddressFormatter.replaceAll(state,"OKLAHOMA","OK");
		state = PCAddressFormatter.replaceAll(state,"OREGON","OR");
		state = PCAddressFormatter.replaceAll(state,"PENNSYLVANIA","PA");
		state = PCAddressFormatter.replaceAll(state,"RHODEISLAND","RI");
		state = PCAddressFormatter.replaceAll(state,"SOUTHCAROLINA","SC");
		state = PCAddressFormatter.replaceAll(state,"SCAROLINA","SC");     // Manually added
		state = PCAddressFormatter.replaceAll(state,"SOUTHDAKOTA","SD");
		state = PCAddressFormatter.replaceAll(state,"SDAKOTA","SD");     // Manually added
		state = PCAddressFormatter.replaceAll(state,"TENNESSEE","TN");
		state = PCAddressFormatter.replaceAll(state,"TEXAS","TX");
		state = PCAddressFormatter.replaceAll(state,"UTAH","UT");
		state = PCAddressFormatter.replaceAll(state,"VERMONT","VT");
		state = PCAddressFormatter.replaceAll(state,"VIRGINIA","VA");
		state = PCAddressFormatter.replaceAll(state,"WASHINGTON","WA");
		state = PCAddressFormatter.replaceAll(state,"WESTVIRGINIA","WV");
		state = PCAddressFormatter.replaceAll(state,"WISCONSIN","WI");
		state = PCAddressFormatter.replaceAll(state,"WYOMING","WY");

		// 4. remove leading and trailing
		state = state.trim();

		return state;


	}

	static country(country){
		// 1. all uppercase
		country = country.toUpperCase();

		// 2. remove spaces
		country = PCAddressFormatter.replaceAll(country," ","");

		// 3. abriviate
		if(country == "UNITEDSTATESOFAMERICA" ||
			country == "UNITEDSTATES" ||
			country == "USA"){
			country = "US";
		}

		if(country == "MEXICO" ||
			country == "MEX"){
			country = "MX";
		}

		if(country == "CANADA" ||
			country == "CAN"){
			country = "CA";
		}

		// 4. remove leading and trailing
		country = country.trim();

		return country;
	}

	static country3Letter(country){
		// 1. all uppercase
		country = country.toUpperCase();

		// 2. remove spaces
		country = PCAddressFormatter.replaceAll(country," ","");

		// 3. abriviate
		if(country == "UNITEDSTATESOFAMERICA" ||
			country == "UNITEDSTATES" ||
			country == "US"){
			country = "USA";
		}

		if(country == "MEXICO" ||
			country == "MX"){
			country = "MEX";
		}

		if(country == "CANADA" ||
			country == "CA"){
			country = "CAN";
		}

		// 4. remove leading and trailing
		country = country.trim();

		return country;
	}

	static zipcodePlusFour(zip){


		// 1. force string
		zip = zip + "";

		// 2. remove spaces
		zip = PCAddressFormatter.replaceAll(zip," ","");

		// 3. remove leading and trailing
		zip = zip.trim();

		if(!PCAddressFormatter.isValidZip(zip)) return null

		return zip;
	}

	static zipcode(zip){

		// 1. force string
		zip = zip + "";

		// 2. remove spaces
		zip = PCAddressFormatter.replaceAll(zip," ","");

		// 3. remove leading and trailing
		zip = zip.trim();

		// 4. keep only the first 5 numbers
		zip = zip.substring(0,5);

		if(!PCAddressFormatter.isValidZip(zip)) return null

		return zip;
	}

	static plusFour(zip){

		// 1. force string
		zip = zip + "";

		// 2. remove spaces
		zip = PCAddressFormatter.replaceAll(zip," ","");

		// 3. remove leading and trailing
		zip = zip.trim();

		if(!PCAddressFormatter.isValidZip(zip)) return null

		let last4 = null;
		if(zip.length == 10){
			const parts = zip.split("-");
			const maybeLast4 = parts[1];
			if(maybeLast4 && maybeLast4.length == 4){
				last4 = maybeLast4;
			}
		}

		return last4;
	}

}
module.exports = PCAddressFormatter;
