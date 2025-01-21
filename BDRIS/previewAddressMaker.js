

function makeAddrArr( addrGeoGroup ){

    var addrValOrTextArr = [];

    var houseRoadBnVal = $( "textarea#" + addrGeoGroup + "HouseRoadBn" ).val();
    if( houseRoadBnVal != null && houseRoadBnVal != '' ){

        addrValOrTextArr.push( houseRoadBnVal );
    }

    var houseRoadEnVal = $( "textarea#" + addrGeoGroup + "HouseRoadEn" ).val();
    if( houseRoadEnVal != null && houseRoadEnVal != '' ){

        addrValOrTextArr.push( houseRoadEnVal );
    }

    var vilAreaTownBnVal = $( "textarea#" + addrGeoGroup + "VilAreaTownBn" ).val();
    if( vilAreaTownBnVal != null && vilAreaTownBnVal != '' ){

        addrValOrTextArr.push( vilAreaTownBnVal );
    }

    var vilAreaTownEnVal = $( "textarea#" + addrGeoGroup + "VilAreaTownEn" ).val();
    if( vilAreaTownEnVal != null && vilAreaTownEnVal != '' ){

        addrValOrTextArr.push( vilAreaTownEnVal );
    }

    var postOfcVal = $( "#" + addrGeoGroup + "PostOfc" ).val();
    if( postOfcVal != null && postOfcVal != '' ){

        addrValOrTextArr.push( postOfcVal );
    }

    var postOfcEnVal = $( "#" + addrGeoGroup + "PostOfcEn" ).val();
    if( postOfcEnVal != null && postOfcEnVal != '' ){

        addrValOrTextArr.push( postOfcEnVal );
    }

    var wardInPaurasavaOrUnionVal = $( "#" + addrGeoGroup + "WardInPaurasavaOrUnion option:selected" ).val();
    var wardInPaurasavaOrUnionText = $( "#" + addrGeoGroup + "WardInPaurasavaOrUnion option:selected" ).text();
    if( wardInPaurasavaOrUnionVal != null && wardInPaurasavaOrUnionVal > 0 ){

        addrValOrTextArr.push( wardInPaurasavaOrUnionText );
    }

    var cityVal = $( "#" + addrGeoGroup + "City option:selected" ).val();
    var cityText = $( "#" + addrGeoGroup + "City option:selected" ).text();
    if( cityVal != null && cityVal > 0 ){

        addrValOrTextArr.push( cityText );
    }

    var areaVal = $( "#" + addrGeoGroup + "Area option:selected" ).val();
    var areaText = $( "#" + addrGeoGroup + "Area option:selected" ).text();
    if( areaVal != null && areaVal > 0 ){

        addrValOrTextArr.push( areaText );
    }

    var wardInCityCorpVal = $( "#" + addrGeoGroup + "WardInCityCorp option:selected" ).val();
    var wardInCityCorpText = $( "#" + addrGeoGroup + "WardInCityCorp option:selected" ).text();
    if( wardInCityCorpVal != null && wardInCityCorpVal > 0 ){

        addrValOrTextArr.push( wardInCityCorpText );
    }

    var paurasavaOrUnionVal = $( "#" + addrGeoGroup + "PaurasavaOrUnion option:selected" ).val();
    var paurasavaOrUnionText = $( "#" + addrGeoGroup + "PaurasavaOrUnion option:selected" ).text();
    if( paurasavaOrUnionVal != null && paurasavaOrUnionVal > 0 ){

        addrValOrTextArr.push( paurasavaOrUnionText );
    }

    var cityCorpCantOrUpazilaVal = $( "#" + addrGeoGroup + "CityCorpCantOrUpazila option:selected" ).val();
    var cityCorpCantOrUpazilaText = $( "#" + addrGeoGroup + "CityCorpCantOrUpazila option:selected" ).text();
    if( cityCorpCantOrUpazilaVal != null && cityCorpCantOrUpazilaVal > 0 ){

        addrValOrTextArr.push( cityCorpCantOrUpazilaText );
    }

    var countryVal = $( "#" + addrGeoGroup + "Country option:selected" ).val();
    var countryText = $( "#" + addrGeoGroup + "Country option:selected" ).text();
    if( countryVal != null && countryVal > 0 ){

        addrValOrTextArr.push( countryText );
    }

    var distVal = $( "#" + addrGeoGroup + "Dist option:selected" ).val();
    var distText = $( "#" + addrGeoGroup + "Dist option:selected" ).text();
    if( distVal != null && distVal > 0 ){

        addrValOrTextArr.push( distText );
    }

    var divVal = $( "#" + addrGeoGroup + "Div option:selected" ).val();
    var divText = $( "#" + addrGeoGroup + "Div option:selected" ).text();
    if( divVal != null && divVal > 0 ){

        addrValOrTextArr.push( divText );
    }

    return addrValOrTextArr;
}

function makeAddrStringFromArr( addrValOrTextArr ){

    var addrArrLen = addrValOrTextArr.length;
    var addrString = "";

    if( addrArrLen == 1 ){

        addrString = addrValOrTextArr[0];
    }
    else{

        addrString = addrValOrTextArr[0];

        for( var i = 1; i < addrArrLen; i++ ){

            addrString = addrString + ", " + addrValOrTextArr[i];
        }
    }

    return addrString;
}

function makeAddrByGeoGroup( addrGeoGroup ){

    var arr = makeAddrArr( addrGeoGroup );
    var string = makeAddrStringFromArr( arr );

    return string;
}