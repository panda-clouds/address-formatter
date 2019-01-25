

class PCAddressFormatter  {
	constructor() {
		//Empty Constructor
	}

	static replaceAll(string,search,replacement){
		return string.split(search).join(replacement);
	}

	static street(street){
		// This function puts the street in a state where
		// the following inputs will have the same output
		// 1234 N Happy St
		// 1234 n. happy Street
		// 1234 North Happy st.

		// 1. all uppercase
		street = street.toUpperCase();

		// 2. add a space at the end so "414 N Rock Street" > "414 N Rock Street "
		street = street + " ";
		// 2. Move NORTH to N
		street = PCAddressFormatter.replaceAll(street," NORTH "," N ");
		street = PCAddressFormatter.replaceAll(street," EAST "," E ");
		street = PCAddressFormatter.replaceAll(street," SOUTH "," S ");
		street = PCAddressFormatter.replaceAll(street," WEST "," W ");

		// 2. Move N. to N
		street = PCAddressFormatter.replaceAll(street," N. "," N ");
		street = PCAddressFormatter.replaceAll(street," E. "," E ");
		street = PCAddressFormatter.replaceAll(street," S. "," S ");
		street = PCAddressFormatter.replaceAll(street," W. "," W ");

		// 3. Move STREET to ST

		// From https://pe.usps.com/text/pub28/28apc_002.htm
		street = PCAddressFormatter.replaceAll(street," ALLEE "," ALY ");
		street = PCAddressFormatter.replaceAll(street," ALLEY "," ALY ");
		street = PCAddressFormatter.replaceAll(street," ALLY "," ALY ");

		street = PCAddressFormatter.replaceAll(street," ANEX "," ANX ");
		street = PCAddressFormatter.replaceAll(street," ANNEX "," ANX ");
		street = PCAddressFormatter.replaceAll(street," ANNX "," ANX ");

		street = PCAddressFormatter.replaceAll(street," ARCADE "," ARC ");

		street = PCAddressFormatter.replaceAll(street," AV "," AVE ");
		street = PCAddressFormatter.replaceAll(street," AVEN "," AVE ");
		street = PCAddressFormatter.replaceAll(street," AVENU "," AVE ");
		street = PCAddressFormatter.replaceAll(street," AVENUE "," AVE ");
		street = PCAddressFormatter.replaceAll(street," AVN "," AVE ");
		street = PCAddressFormatter.replaceAll(street," AVNUE "," AVE ");

		street = PCAddressFormatter.replaceAll(street," BAYOO "," BYU ");
		street = PCAddressFormatter.replaceAll(street," BAYOU "," BYU ");

		street = PCAddressFormatter.replaceAll(street," BEACH "," BCH ");

		street = PCAddressFormatter.replaceAll(street," BEND "," BND ");

		street = PCAddressFormatter.replaceAll(street," BLUF "," BLF ");
		street = PCAddressFormatter.replaceAll(street," BLUFF "," BLF ");

		street = PCAddressFormatter.replaceAll(street," BLUFFS "," BLFS ");

		street = PCAddressFormatter.replaceAll(street," BOT "," BTM ");
		street = PCAddressFormatter.replaceAll(street," BOTTM "," BTM ");
		street = PCAddressFormatter.replaceAll(street," BOTTOM "," BTM ");

		street = PCAddressFormatter.replaceAll(street," BOUL "," BLVD ");
		street = PCAddressFormatter.replaceAll(street," BOULEVARD "," BLVD ");
		street = PCAddressFormatter.replaceAll(street," BOULV "," BLVD ");

		street = PCAddressFormatter.replaceAll(street," BRNCH "," BR ");
		street = PCAddressFormatter.replaceAll(street," BRANCH "," BR ");

		street = PCAddressFormatter.replaceAll(street," BRDGE "," BRG ");
		street = PCAddressFormatter.replaceAll(street," BRIDGE "," BRG ");

		street = PCAddressFormatter.replaceAll(street," BROOK "," BRK ");

		street = PCAddressFormatter.replaceAll(street," BROOKS "," BRKS ");

		street = PCAddressFormatter.replaceAll(street," BURG "," BG ");

		street = PCAddressFormatter.replaceAll(street," BURGS "," BGS ");

		street = PCAddressFormatter.replaceAll(street," BYPA "," BYP ");
		street = PCAddressFormatter.replaceAll(street," BYPAS "," BYP ");
		street = PCAddressFormatter.replaceAll(street," BYPASS "," BYP ");
		street = PCAddressFormatter.replaceAll(street," BYPS"," BYP ");

		street = PCAddressFormatter.replaceAll(street," CAMP "," CP ");
		street = PCAddressFormatter.replaceAll(street," CMP "," CP ");

		street = PCAddressFormatter.replaceAll(street," CANYN "," CYN ");
		street = PCAddressFormatter.replaceAll(street," CANYON "," CYN ");
		street = PCAddressFormatter.replaceAll(street," CNYN "," CYN ");

		street = PCAddressFormatter.replaceAll(street," CAPE "," CPE ");

		street = PCAddressFormatter.replaceAll(street," CAUSEWAY "," CSWY ");
		street = PCAddressFormatter.replaceAll(street," CAUSWA "," CSWY ");

		street = PCAddressFormatter.replaceAll(street," CEN "," CTR ");
		street = PCAddressFormatter.replaceAll(street," CENT "," CTR ");
		street = PCAddressFormatter.replaceAll(street," CENTER "," CTR ");
		street = PCAddressFormatter.replaceAll(street," CENTR "," CTR ");
		street = PCAddressFormatter.replaceAll(street," CENTRE "," CTR ");
		street = PCAddressFormatter.replaceAll(street," CNTER "," CTR ");
		street = PCAddressFormatter.replaceAll(street," CNTR "," CTR ");

		street = PCAddressFormatter.replaceAll(street," CENTERS "," CTRS ");

		street = PCAddressFormatter.replaceAll(street," CIRC "," CIR ");
		street = PCAddressFormatter.replaceAll(street," CIRCL "," CIR ");
		street = PCAddressFormatter.replaceAll(street," CIRCLE "," CIR ");
		street = PCAddressFormatter.replaceAll(street," CRCL "," CIR ");
		street = PCAddressFormatter.replaceAll(street," CRCLE "," CIR ");

		street = PCAddressFormatter.replaceAll(street," CIRCLES "," CIRS ");

		street = PCAddressFormatter.replaceAll(street," CLIFF "," CLF ");

		street = PCAddressFormatter.replaceAll(street," CLIFFS "," CLFS ");

		street = PCAddressFormatter.replaceAll(street," CLUB "," CLB ");

		street = PCAddressFormatter.replaceAll(street," COMMON "," CMN ");

		street = PCAddressFormatter.replaceAll(street," COMMONS "," CMNS ");

		street = PCAddressFormatter.replaceAll(street," CORNER "," COR ");

		street = PCAddressFormatter.replaceAll(street," CORNERS "," CORS ");

		street = PCAddressFormatter.replaceAll(street," COURSE "," CRSE ");

		street = PCAddressFormatter.replaceAll(street," COURT "," CT ");

		street = PCAddressFormatter.replaceAll(street," COURTS "," CTS ");

		street = PCAddressFormatter.replaceAll(street," COVE "," CV ");

		street = PCAddressFormatter.replaceAll(street," COVES "," CVS ");

		street = PCAddressFormatter.replaceAll(street," CREEK "," CRES ");

		street = PCAddressFormatter.replaceAll(street," CREST "," CRST ");

		street = PCAddressFormatter.replaceAll(street," CROSSING "," XING ");
		street = PCAddressFormatter.replaceAll(street," CRSSNG "," XING ");

		street = PCAddressFormatter.replaceAll(street," CROSSROAD "," XRD ");

		street = PCAddressFormatter.replaceAll(street," CROSSROADS "," XRDS ");

		street = PCAddressFormatter.replaceAll(street," CURVE "," CURV ");

		street = PCAddressFormatter.replaceAll(street," DALE "," DL ");
		street = PCAddressFormatter.replaceAll(street," DAM "," DM ");

		street = PCAddressFormatter.replaceAll(street," DIV "," DV ");
		street = PCAddressFormatter.replaceAll(street," DIVIDE "," DV ");
		street = PCAddressFormatter.replaceAll(street," DVD "," DV ");

		street = PCAddressFormatter.replaceAll(street," DRIV "," DR ");
		street = PCAddressFormatter.replaceAll(street," DRIVE "," DR ");
		street = PCAddressFormatter.replaceAll(street," DRV "," DR ");

		street = PCAddressFormatter.replaceAll(street," DRIVES "," DRS ");

		street = PCAddressFormatter.replaceAll(street," ESTATE "," EST ");

		street = PCAddressFormatter.replaceAll(street," ESTATES "," ESTS ");

		//Stoped doing all of them here
		// skipped a bunch

		street = PCAddressFormatter.replaceAll(street," FREEWAY "," FWY ");
		street = PCAddressFormatter.replaceAll(street," FREEWY "," FWY ");
		street = PCAddressFormatter.replaceAll(street," FRWAY "," FWY ");
		street = PCAddressFormatter.replaceAll(street," FRWY "," FWY ");

		// skipped a bunch

		street = PCAddressFormatter.replaceAll(street," LANE "," LN ");

		// skipped a bunch

		street = PCAddressFormatter.replaceAll(street," LOOPS "," LOOP ");

		// skipped a bunch

		street = PCAddressFormatter.replaceAll(street," MANOR "," MNR ");

		street = PCAddressFormatter.replaceAll(street," MANORS "," MNRS ");

		// skipped a bunch

		street = PCAddressFormatter.replaceAll(street," OVERPASS "," OPAS ");

		street = PCAddressFormatter.replaceAll(street," PRK "," PARK ");

		street = PCAddressFormatter.replaceAll(street," PARKS "," PARK ");

		street = PCAddressFormatter.replaceAll(street," PARKWAY "," PKWY ");
		street = PCAddressFormatter.replaceAll(street," PARKWY "," PKWY ");
		street = PCAddressFormatter.replaceAll(street," PKWAY "," PKWY ");
		street = PCAddressFormatter.replaceAll(street," PKY "," PKWY ");

		street = PCAddressFormatter.replaceAll(street," PARKWAYS "," PKWY ");
		street = PCAddressFormatter.replaceAll(street," PKWYS "," PKWY ");

		street = PCAddressFormatter.replaceAll(street," PASSAGE "," PSGE ");

		street = PCAddressFormatter.replaceAll(street," PATHS "," PATH ");

		// skipped a bunch

		street = PCAddressFormatter.replaceAll(street," PLACE "," PL ");

		// skipped a bunch

		street = PCAddressFormatter.replaceAll(street," PLAZA "," PLZ ");
		street = PCAddressFormatter.replaceAll(street," PLZA "," PLZ ");

		street = PCAddressFormatter.replaceAll(street," POINT "," PT ");
		street = PCAddressFormatter.replaceAll(street," POINTS "," PTS ");


		street = PCAddressFormatter.replaceAll(street," PORT "," PRT ");
		street = PCAddressFormatter.replaceAll(street," PORTS "," PRTS ");

		// skipped a bunch

		street = PCAddressFormatter.replaceAll(street," ROAD "," RD ");

		street = PCAddressFormatter.replaceAll(street," ROADS "," RDS ");

		street = PCAddressFormatter.replaceAll(street," ROUTE "," RTE ");

		// skipped a bunch

		street = PCAddressFormatter.replaceAll(street," SQR "," SQ ");
		street = PCAddressFormatter.replaceAll(street," SQRE "," SQ ");
		street = PCAddressFormatter.replaceAll(street," SQU "," SQ ");
		street = PCAddressFormatter.replaceAll(street," SQUARE "," SQ ");

		street = PCAddressFormatter.replaceAll(street," SQRS "," SQS ");
		street = PCAddressFormatter.replaceAll(street," SQUARES "," SQS ");

		street = PCAddressFormatter.replaceAll(street," STATION "," STA ");
		street = PCAddressFormatter.replaceAll(street," STATN "," STA ");
		street = PCAddressFormatter.replaceAll(street," STN "," STA ");

		// skipped a bunch

		street = PCAddressFormatter.replaceAll(street," STREET "," ST ");
		street = PCAddressFormatter.replaceAll(street," STRT "," ST ");
		street = PCAddressFormatter.replaceAll(street," STR "," ST ");
		street = PCAddressFormatter.replaceAll(street," STREETS "," STS ");

		// skipped a bunch

		street = PCAddressFormatter.replaceAll(street," TERR "," TER ");
		street = PCAddressFormatter.replaceAll(street," TERRACE "," TER ");


		street = PCAddressFormatter.replaceAll(street," THROUGHWAY "," TRWY ");

		// skipped a bunch

		street = PCAddressFormatter.replaceAll(street," TRAIL "," TRL ");
		street = PCAddressFormatter.replaceAll(street," TRAILS "," TRL ");
		street = PCAddressFormatter.replaceAll(street," TRLS "," TRL ");

		// skipped a bunch

		street = PCAddressFormatter.replaceAll(street," TRNPK "," TPKE ");
		street = PCAddressFormatter.replaceAll(street," TURNPIKE "," TPKE ");
		street = PCAddressFormatter.replaceAll(street," TURNPK "," TPKE ");

		street = PCAddressFormatter.replaceAll(street," UNDERPASS "," UPAS ");

		// skipped a bunch
		street = PCAddressFormatter.replaceAll(street," VIEW "," VW ");

		street = PCAddressFormatter.replaceAll(street," VIEWS "," VWS ");

		street = PCAddressFormatter.replaceAll(street," VILL "," VLG ");
		street = PCAddressFormatter.replaceAll(street," VILLAG "," VLG ");
		street = PCAddressFormatter.replaceAll(street," VILLAGE "," VLG ");
		street = PCAddressFormatter.replaceAll(street," VILLG "," VLG ");
		street = PCAddressFormatter.replaceAll(street," VILLIAGE "," VLG ");

		street = PCAddressFormatter.replaceAll(street," VILLAGES "," VLGS ");

		street = PCAddressFormatter.replaceAll(street," VILLE "," VL ");

		street = PCAddressFormatter.replaceAll(street," VIST "," VIS ");
		street = PCAddressFormatter.replaceAll(street," VISTA "," VIS ");
		street = PCAddressFormatter.replaceAll(street," VST "," VIS ");
		street = PCAddressFormatter.replaceAll(street," VSTA "," VIS ");

		street = PCAddressFormatter.replaceAll(street," WALKS "," WALK ");

		street = PCAddressFormatter.replaceAll(street," WY "," WAY ");

		street = PCAddressFormatter.replaceAll(street," WELL "," WL ");
		street = PCAddressFormatter.replaceAll(street," WELLS "," WLS ");

		// 4. remove leading and trailing
		street = street.trim();

		return street;
	}

	static city(city){

		// 1. all uppercase
		city = city.toUpperCase();

		// 2. remove leading and trailing
		city = city.trim();

		return city;
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

	static zipCode(zip){

		// 1. force string
		zip = zip + "";

		// 2. remove spaces
		zip = PCAddressFormatter.replaceAll(zip," ","");

		// 3. remove leading and trailing
		zip = zip.trim();

		return zip;
	}

}
module.exports = PCAddressFormatter;
