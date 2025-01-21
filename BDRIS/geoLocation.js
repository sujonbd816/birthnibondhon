var brisGeoId = 5556;

var afterOfficeIdSetCallback;

var officeAddrGeoGroup = "officeAddr";
var birthPlaceGeoGroup = "birthPlace";
var permanentAddressGeoGroup = "permAddr";
var presentAddressGeoGroup = "prsntAddr";
var deathPlaceGeoGroup = "deathPlace";
var deathResidenceGeoGroup = "deathResidence";
var applicantAddressGeoGroup = "applicantAddr";
var parentGeoAddrGeoGroup = "parentGeoAddr";
var parentGeoAddrAccordingToGeoTypeGeoGroup = "parentGeoAddrAccordingToGeoType";

var showUnionWard = true;

var countryDataGeoOrder = 0;
var divisionDataGeoOrder = 1;
var districtDataGeoOrder = 2;
var cityCorpCantOrUpazilaDataGeoOrder = 3;
var paurasavaOrUnionDataGeoOrder = 4;
var wardInCityCorpDataGeoOrder = 5;
var areaDataGeoOrder = 6;
var wardInPaurasavaUnionDataGeoOrder = 7;
var cityDataGeoOrder = 9;
var officeDataGeoOrder = 10;
var villageDataGeoOrder = 11;


// geo type values for geo location add
var divisionGeoTypeVal = 1;
var districtGeoTypeVal = 2;
var upazilaGeoTypeVal = 3;
var paurashavaGeoTypeVal = 4;
var unionParishadGeoTypeVal = 5;
var cityCorporationWardGeoTypeVal = 6;
var cantonmentGeoTypeVal = 7;
var cityCorporationGeoTypeVal = 8;
var countryGeoTypeVal = 10;
var cityGeoTypeVal = 11;
var villageGeoTypeVal = 12;
var paurasavaUnionWardGeoTypeVal = 13;
var areaGeoTypeVal = 14;
var wardInWardTableUnderCitycoporationWardInGeolocationTableGeoTypeVal = 15;
var wardInWardTableUnderCitycoporationInGeolocationTableGeoTypeVal = 16;
var bangladeshGeoTypeVal = 0;
var brisGeoTypeVal = 2020;
//end of geo type values

var divisionElementClass = "colDiv";
var districtElementClass = "colDist";
var cityCorpCantOrUpazilaElementClass = "colCityCorpCantOrUpazila";
var paurasavaOrUnionElementClass = "colPaurasavaOrUnion";
var wardInCityCorpElementClass = "colWardInCityCorp";
var areaElementClass = "colArea";
var wardInPaurasavaOrUnionElementClass = "colWardInPaurasavaOrUnion";
var countryElementClass = "colCountry";
var cityElementClass = "colCity";
var postOfficeClass = "colPostOfc";
var postOfficeEnClass = "colPostOfcEn";
var villageAreaTownBnClass = "colVilAreaTownBn";
var villageAreaTownEnClass = "colVilAreaTownEn";
var houseRoadBnClass = "colHouseRoadBn";
var houseRoadEnClass = "colHouseRoadEn";
var officeElementClass = "colOffice";
var villageElementClass = "colVillage";


var divisionElement;
var districtElement;
var cityCorpCantOrUpazilaElement;
var paurasavaOrUnionElement;
var wardInCityCorpElement;
var areaElement;
var wardInPaurasavaOrUnionElement;
var countryElement;
var cityElement;
var postOfficeElement;
var postOfficeEnElement;
var villageAreaTownBnElement;
var villageAreaTownEnElement;
var houseRoadBnElement;
var houseRoadEnElement;
var officeInputElement;
var geoLocationElement;
var wardIdElement;
var villageElement;

var locationIdElement;
var addrEnElement;
var addrBnElement;


var geoLocationUrl, officeUrl, wardInPaurasavaOrUnionUrl, areaUrl;

var showOrHideArrForBris = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];

var showOrHideArrForCountry = [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];

var showOrHideArrForBangladesh = [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
var showOrHideArrForBangladeshMission = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0];

var showOrHideArrForDivision = [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0];
var showOrHideArrForDistrict = [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0];
var showOrHideArrForCityCorporation = [1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0];
var showOrHideArrForCantonment = [1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0];
var showOrHideArrForUpazila = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0];
var showOrHideArrForPaurasavaOrUnion = [1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0];
var showOrHideArrForPaurasava = [1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0];
var showOrHideArrForUnionParishad = [1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1];
var showOrHideArrForWardInCityCorp = [1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0];
var showOrHideArrForArea = [1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0];
var showOrHideArrForWardInPaurasavaOrUnion = [1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0];

var showOrHideArrForCity = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0];
var showOrHideArrForVillage = [1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1];

var hiddenElementsByExternalFunctionCalls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


// show or hide array according to geo type selection in case of adding geo location
var showOrHideArrForCountryAccordingToGeoTypeSelection = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var showOrHideArrForBangladeshMissionAccordingToGeoTypeSelection = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var showOrHideArrForDivisionAccordingToGeoTypeSelection = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var showOrHideArrForDistrictAccordingToGeoTypeSelection = [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var showOrHideArrForCityCorporationAccordingToGeoTypeSelection = [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var showOrHideArrForCantonmentAccordingToGeoTypeSelection = [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var showOrHideArrForUpazilaAccordingToGeoTypeSelection = [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var showOrHideArrForPaurasavaOrUnionAccordingToGeoTypeSelection = [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
var showOrHideArrForWardInCityCorpAccordingToGeoTypeSelection = [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
var showOrHideArrForAreaAccordingToGeoTypeSelection = [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
var showOrHideArrForWardInPaurasavaOrUnionAccordingToGeoTypeSelection = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0];

var showOrHideArrForCityAccordingToGeoTypeSelection = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var showOrHideArrForVillageAccordingToGeoTypeSelection = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0];
// end of show or hide array according to geo type selection in case of adding geo location


// reset element geo order array
var resetElementGeoOrderArrForCountry = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

var resetElementGeoOrderArrForDivision = [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var resetElementGeoOrderArrForDistrict = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var resetElementGeoOrderArrForCityCorporation = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1];
var resetElementGeoOrderArrForCantonment = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1];
var resetElementGeoOrderArrForUpazila = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1];
var resetElementGeoOrderArrForPaurasava = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1];
var resetElementGeoOrderArrForUnionParishad = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1];
var resetElementGeoOrderArrForWardInCityCorp = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1];
var resetElementGeoOrderArrForArea = [0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1];
var resetElementGeoOrderArrForWardInPaurasavaOrUnion = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0];

var resetElementGeoOrderArrForCity = [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1];
var resetElementGeoOrderArrForVillage = [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0];

// reset element geo order array


function getResetElementGeoOrderArrByGeoType(geoType) {

    var geoOrderArr = [];

    if (geoType == countryGeoTypeVal) {

        geoOrderArr = resetElementGeoOrderArrForCountry;
    } else if (geoType == divisionGeoTypeVal) {

        geoOrderArr = resetElementGeoOrderArrForDivision;
    } else if (geoType == districtGeoTypeVal) {

        geoOrderArr = resetElementGeoOrderArrForDistrict;
    } else if (geoType == cityCorporationGeoTypeVal) {

        geoOrderArr = resetElementGeoOrderArrForCityCorporation;
    } else if (geoType == cantonmentGeoTypeVal) {

        geoOrderArr = resetElementGeoOrderArrForCantonment;
    } else if (geoType == upazilaGeoTypeVal) {

        geoOrderArr = resetElementGeoOrderArrForUpazila;
    } else if (geoType == paurashavaGeoTypeVal) {

        geoOrderArr = resetElementGeoOrderArrForPaurasava;
    } else if (geoType == unionParishadGeoTypeVal) {

        geoOrderArr = resetElementGeoOrderArrForUnionParishad;
    } else if (geoType == cityCorporationWardGeoTypeVal) {

        geoOrderArr = resetElementGeoOrderArrForWardInCityCorp;
    } else if (geoType == areaGeoTypeVal) {

        geoOrderArr = resetElementGeoOrderArrForArea;
    } else if (geoType == paurasavaUnionWardGeoTypeVal) {

        geoOrderArr = resetElementGeoOrderArrForWardInPaurasavaOrUnion;
    } else if (geoType == cityGeoTypeVal) {

        geoOrderArr = resetElementGeoOrderArrForCity;
    } else if (geoType == villageGeoTypeVal) {

        geoOrderArr = resetElementGeoOrderArrForVillage;
    }

    return geoOrderArr;

}

function setHiddenInputsAccordingToGeoGroup(locationGeoGroup) {

    var locationPostOfficeElement = $("input[name='" + locationGeoGroup + "PostOfc']");
    var locationPostOfficeEnElement = $("input[name='" + locationGeoGroup + "PostOfcEn']");

    var locationVillageAreaTownBnElement = $("textarea[name='" + locationGeoGroup + "VilAreaTownBn']");
    var locationVillageAreaTownEnElement = $("textarea[name='" + locationGeoGroup + "VilAreaTownEn']");

    var locationHouseRoadBnElement = $("textarea[name='" + locationGeoGroup + "HouseRoadBn']");
    var locationHouseRoadEnElement = $("textarea[name='" + locationGeoGroup + "HouseRoadEn']");

    var locationAddressEnElement = $("input[name='" + locationGeoGroup + "En']");
    if (locationAddressEnElement) {

        var locationAddressEnStr = locationHouseRoadEnElement.val() + " " + locationVillageAreaTownEnElement.val() + " " + locationPostOfficeEnElement.val();
        $(locationAddressEnElement).val(locationAddressEnStr);
    }

    var locationAddressBnElement = $("input[name='" + locationGeoGroup + "Bn']");
    if (locationAddressBnElement) {

        var locationAddressBnStr = locationHouseRoadBnElement.val() + " " + locationVillageAreaTownBnElement.val() + " " + locationPostOfficeElement.val();
        $(locationAddressBnElement).val(locationAddressBnStr);
    }
}

function resetHiddenInputsAccordingToDefinedGeoGroup() {

    resetLocationIdAccordingToDefinedGeoGroup();
    $(addrBnElement).val("");
    $(addrEnElement).val("");
}

function registerAfterOfficeIdSetCallback(callback) {

    afterOfficeIdSetCallback = callback;
}

function defineAllElementsByGeoGroup(addrGeoGroup) {

    divisionElement = $("#" + addrGeoGroup + "Div");
    districtElement = $("#" + addrGeoGroup + "Dist");
    cityCorpCantOrUpazilaElement = $("#" + addrGeoGroup + "CityCorpCantOrUpazila");
    paurasavaOrUnionElement = $("#" + addrGeoGroup + "PaurasavaOrUnion");
    wardInCityCorpElement = $("#" + addrGeoGroup + "WardInCityCorp");
    areaElement = $("#" + addrGeoGroup + "Area");
    wardInPaurasavaOrUnionElement = $("#" + addrGeoGroup + "WardInPaurasavaOrUnion");
    villageElement = $("#" + addrGeoGroup + "Village");
    countryElement = $("#" + addrGeoGroup + "Country");
    cityElement = $("#" + addrGeoGroup + "City");
    villageElement = $("#" + addrGeoGroup + "Village");

    postOfficeElement = $("#" + addrGeoGroup + "PostOfc");
    postOfficeEnElement = $("#" + addrGeoGroup + "PostOfcEn");
    villageAreaTownBnElement = $("#" + addrGeoGroup + "VilAreaTownBn");
    villageAreaTownEnElement = $("#" + addrGeoGroup + "VilAreaTownEn");
    houseRoadBnElement = $("#" + addrGeoGroup + "HouseRoadBn");
    houseRoadEnElement = $("#" + addrGeoGroup + "HouseRoadEn");

    locationIdElement = $("#" + addrGeoGroup + "LocationId");
    addrEnElement = $("#" + addrGeoGroup + "En");
    addrBnElement = $("#" + addrGeoGroup + "Bn");

    officeElement = $("#" + addrGeoGroup + "Office");
    defineGeoLocationElement();
}

function defineGeoLocationElement() {
    geoLocationElement = $("input[name='geoLocationId']");
}


function makeDefaultOption() {

    var option = $("<option/>");
    $(option).val("-1");
    $(option).text(geolocationSelectOption);

    return option;
}

function makeOptionForGeoLocation(id, nameBn) {

    var option = $("<option/>");
    $(option).val(id);
    $(option).text(nameBn);

    return option;
}

function makeOptionForGeoLocationWithGeoLocationProjection(geolocationProjection) {

    var option = $("<option/>");
    $(option).val(geolocationProjection.id);
    $(option).text(geolocationProjection.nameBn);

    $(option).attr({
        "data-id": geolocationProjection.id,
        "data-name-bn": geolocationProjection.nameBn,
        "data-name-en": geolocationProjection.nameEn,
        "data-geo-level-id": geolocationProjection.geoLevelId,
        "data-parent-geo-id": geolocationProjection.parentGeoId,
    });

    return option;
}

function removeOptionsAddDefaultOption(element) {

    $(element).empty();
    $(element).prop("disabled", false);
    $(element).append(makeDefaultOption());
}

function removeOldAppendNewOptions(data, element) {

    removeOptionsAddDefaultOption(element);

    $.each(data.geoObject, function (i, item) {

        //var option = makeOptionForGeoLocation( item.id, item.nameBn );
        var option = makeOptionForGeoLocationWithGeoLocationProjection(item);

        $(element).append(option);
    });
}

function resetOfficeValAndText() {

    $(officeInputElement).val("");
}

function putOfficeValAndText(data) {

    if (data.geoGroup == officeAddrGeoGroup) {

        $(officeInputElement).val(data.geoObject.officeNameBn);
        //$( "input[name='officeId']" ).val( data.id );
        const geoLevelId = data.geoType
        if (geoLevelId == 10 || geoLevelId == 11) {
            makeEmailMandatory();
        } else {
            makePhoneMandatory();
        }

        $("." + officeAddrGeoGroup + " .officeId").val(data.geoObject.id);

        if (afterOfficeIdSetCallback) {

            afterOfficeIdSetCallback(data);
        }
    }
}


function makeEmailMandatory() {
    $('label[for="email"]').addClass('required-field');
    $('label[for="phone"]').removeClass('required-field');
}

function makePhoneMandatory() {
    $('label[for="email"]').removeClass('required-field');
    $('label[for="phone"]').addClass('required-field');
}

function resetSelectElementsAccordingToGeoOrderAndGeoTypeInCurrentGeoGroup(geoGroup, geoOrder, geoType) {

    var selectList = $("select.geoSelect");

    var resetGeoOrderArr = getResetElementGeoOrderArrByGeoType(geoType);

    for (var i = 0; i < selectList.length; ++i) {

        var selectElement = $(selectList[i]);
        var selectElementDataGeoGroup = selectElement.attr("data-geo-group");
        var selectElementDataGeoOrder = selectElement.attr("data-geo-order");

        var selectElementDataGeoOrderVal = parseInt(selectElementDataGeoOrder);

        if (geoGroup == selectElementDataGeoGroup && resetGeoOrderArr[selectElementDataGeoOrderVal] == 1) {

            removeOptionsAddDefaultOption(selectElement);
        }
    }

}

function showElementByGeoGroupAndElementClass(geoGroupForShowElement, elementClass) {

    if (geoGroupForShowElement == officeAddrGeoGroup && elementClass == wardInPaurasavaOrUnionElementClass) return;
    $("." + geoGroupForShowElement + " " + "." + elementClass).show();
}

function hideElementByGeoGroupAndElementClass(geoGroupForHideElement, elementClass) {

    $("." + geoGroupForHideElement + " " + "." + elementClass).hide();
}

function hideAllElements(geoGroupForHideElement) {

    hideElementByGeoGroupAndElementClass(geoGroupForHideElement, getElementClassByGeoOrder(0));
    hideElementByGeoGroupAndElementClass(geoGroupForHideElement, getElementClassByGeoOrder(1));
    hideElementByGeoGroupAndElementClass(geoGroupForHideElement, getElementClassByGeoOrder(2));
    hideElementByGeoGroupAndElementClass(geoGroupForHideElement, getElementClassByGeoOrder(3));
    hideElementByGeoGroupAndElementClass(geoGroupForHideElement, getElementClassByGeoOrder(4));
    hideElementByGeoGroupAndElementClass(geoGroupForHideElement, getElementClassByGeoOrder(5));
    hideElementByGeoGroupAndElementClass(geoGroupForHideElement, getElementClassByGeoOrder(6));
    hideElementByGeoGroupAndElementClass(geoGroupForHideElement, getElementClassByGeoOrder(7));
    hideElementByGeoGroupAndElementClass(geoGroupForHideElement, getElementClassByGeoOrder(8));
    hideElementByGeoGroupAndElementClass(geoGroupForHideElement, getElementClassByGeoOrder(9));
    //hideElementByGeoGroupAndElementClass( geoGroupForHideElement, getElementClassByGeoOrder( 10 ) );
    hideElementByGeoGroupAndElementClass(geoGroupForHideElement, getElementClassByGeoOrder(11));
}

function getElementClassByGeoOrder(geoOrderForElementClass) {

    if (geoOrderForElementClass == 0)
        return "colCountry";
    else if (geoOrderForElementClass == 1)
        return "colDiv";
    else if (geoOrderForElementClass == 2)
        return "colDist";
    else if (geoOrderForElementClass == 3)
        return "colCityCorpCantOrUpazila";
    else if (geoOrderForElementClass == 4)
        return "colPaurasavaOrUnion";
    else if (geoOrderForElementClass == 5)
        return "colWardInCityCorp";
    else if (geoOrderForElementClass == 6)
        return "colArea";
    else if (geoOrderForElementClass == 7)
        return "colWardInPaurasavaOrUnion";
    else if (geoOrderForElementClass == 9)
        return "colCity";
    else if (geoOrderForElementClass == 10)
        return "colOffice";
    else if (geoOrderForElementClass == 11)
        return "colVillage";
}

function hideElementsByDataGeoOrder(dataGeoOrder) {

}

function showOrHideElementsOneByOne(geoGroup, geoOrder, geoType) {

    var showOrHideArr = showOrHideArrForBris;

    if (geoType == countryGeoTypeVal)
        showOrHideArr = showOrHideArrForBangladeshMission;
    else if (geoType == bangladeshGeoTypeVal)
        showOrHideArr = showOrHideArrForBangladesh;
    else if (geoType == divisionGeoTypeVal)
        showOrHideArr = showOrHideArrForDivision;
    else if (geoType == districtGeoTypeVal)
        showOrHideArr = showOrHideArrForDistrict;
    else if (geoType == cityCorporationGeoTypeVal)
        showOrHideArr = showOrHideArrForCityCorporation;
    else if (geoType == cantonmentGeoTypeVal)
        showOrHideArr = showOrHideArrForCantonment;
    else if (geoType == upazilaGeoTypeVal)
        showOrHideArr = showOrHideArrForUpazila;
    else if (geoType == paurashavaGeoTypeVal)
        showOrHideArr = showOrHideArrForPaurasava;
    else if (geoType == unionParishadGeoTypeVal)
        showOrHideArr = showOrHideArrForUnionParishad;
    else if (geoType == cityCorporationWardGeoTypeVal)
        showOrHideArr = showOrHideArrForWardInCityCorp;
    else if (geoType == areaGeoTypeVal)
        showOrHideArr = showOrHideArrForArea;
    else if (geoType == paurasavaUnionWardGeoTypeVal)
        showOrHideArr = showOrHideArrForWardInPaurasavaOrUnion;
    else if (geoType == cityGeoTypeVal)
        showOrHideArr = showOrHideArrForCity;
    else if (geoType == villageGeoTypeVal)
        showOrHideArr = showOrHideArrForVillage;

    for (var i = 1; i < hiddenElementsByExternalFunctionCalls.length; i++) {

        if (hiddenElementsByExternalFunctionCalls[i] == 1) {
            showOrHideArr[i] = 0;
        }
    }

    showOrHideElementsByGeoGroupAndShowOrHideArr(geoGroup, showOrHideArr);
}

function showOrHideElementsByGeoGroupAndShowOrHideArr(geoGroup, showOrHideArr) {

    for (var i = 0; i < showOrHideArr.length; i++) {

        var geoOrder = i;
        showOrHideElementByGeoGroupAndGeoOrderAndShowElementCheck(geoGroup, geoOrder, showOrHideArr[i])
    }
}

function showOrHideElementByGeoGroupAndGeoOrderAndShowElementCheck(geoGroup, geoOrder, showElementCheck) {

    if (showElementCheck == 0) {

        hideElementByGeoGroupAndGeoOrder(geoGroup, geoOrder);
    } else if (showElementCheck == 1) {

        showElementByGeoGroupAndGeoOrder(geoGroup, geoOrder);
    }
}

function showElementByGeoGroupAndGeoOrder(geoGroup, geoOrder) {

    var elementClass = getElementClassByGeoOrder(geoOrder);
    showElementByGeoGroupAndElementClass(geoGroup, elementClass);
}

function hideElementByGeoGroupAndGeoOrder(geoGroup, geoOrder) {

    var elementClass = getElementClassByGeoOrder(geoOrder);
    hideElementByGeoGroupAndElementClass(geoGroup, elementClass);
}

function showOrHideElements(geoGroup, geoOrder, geoType) {

    if (geoGroup == parentGeoAddrAccordingToGeoTypeGeoGroup) {

        var selectedGeoTypeElement = $(".geoType");
        getGeoTypeValAndShowOrHideElementsAccordingToGeoType(selectedGeoTypeElement);
    } else {

        showOrHideElementsOneByOne(geoGroup, geoOrder, geoType);
    }

}

function setGeoIdInGeoLocationElement(geolocationElementDataGeoGroup, geoIdForGeolocationElement) {

    var geoLocationElement = $("#" + geolocationElementDataGeoGroup + "LocationId");
    $(geoLocationElement).val(geoIdForGeolocationElement);
}

function setBrisGeoIdInGeoLocationElement(selectedElementDataGeoGroup) {

    setGeoIdInGeoLocationElement(selectedElementDataGeoGroup, brisGeoId);
}

function setBangladeshGeoIdInGeoLocationElement(selectedElementDataGeoGroup) {

    setGeoIdInGeoLocationElement(selectedElementDataGeoGroup, bangladeshId);
}

function disableCountryElement(selectedElementDataGeoGroup) {

    var countryElementByDataGeoGroup = $("#" + selectedElementDataGeoGroup + "Country");
    $(countryElementByDataGeoGroup).attr("disabled", true);
}

function enableCountryElement(selectedElementDataGeoGroup) {

    var countryElementByDataGeoGroup = $("#" + selectedElementDataGeoGroup + "Country");
    $(countryElementByDataGeoGroup).attr("disabled", false);
}

function setBangladeshIdInGeolocationElementAndDisableCountryElement(selectedElementDataGeoGroup) {

    setBangladeshGeoIdInGeoLocationElement(selectedElementDataGeoGroup);
    disableCountryElement(selectedElementDataGeoGroup);
}


function showOrHideElementsAccordingToGeoType(geoGroupForShowOrHideElements, selectedGeoTypeVal) {

    var showOrHideArr = showOrHideArrForCountryAccordingToGeoTypeSelection;

    if (selectedGeoTypeVal == divisionGeoTypeVal)
        showOrHideArr = showOrHideArrForDivisionAccordingToGeoTypeSelection;
    else if (selectedGeoTypeVal == districtGeoTypeVal)
        showOrHideArr = showOrHideArrForDistrictAccordingToGeoTypeSelection;
    else if (selectedGeoTypeVal == upazilaGeoTypeVal)
        showOrHideArr = showOrHideArrForUpazilaAccordingToGeoTypeSelection;
    else if (selectedGeoTypeVal == paurashavaGeoTypeVal)
        showOrHideArr = showOrHideArrForPaurasavaOrUnionAccordingToGeoTypeSelection;
    else if (selectedGeoTypeVal == unionParishadGeoTypeVal)
        showOrHideArr = showOrHideArrForPaurasavaOrUnionAccordingToGeoTypeSelection;
    else if (selectedGeoTypeVal == cityCorporationWardGeoTypeVal)
        showOrHideArr = showOrHideArrForWardInCityCorpAccordingToGeoTypeSelection;
    else if (selectedGeoTypeVal == cantonmentGeoTypeVal)
        showOrHideArr = showOrHideArrForCantonmentAccordingToGeoTypeSelection;
    else if (selectedGeoTypeVal == cityCorporationGeoTypeVal)
        showOrHideArr = showOrHideArrForCityCorporationAccordingToGeoTypeSelection;
    else if (selectedGeoTypeVal == countryGeoTypeVal) {

        showOrHideArr = showOrHideArrForBangladeshMissionAccordingToGeoTypeSelection;
        setBrisGeoIdInGeoLocationElement(geoGroupForShowOrHideElements);
    } else if (selectedGeoTypeVal == cityGeoTypeVal)
        showOrHideArr = showOrHideArrForCityAccordingToGeoTypeSelection;
    else if (selectedGeoTypeVal == villageGeoTypeVal)
        showOrHideArr = showOrHideArrForVillageAccordingToGeoTypeSelection;

    for (var i = 0; i < showOrHideArr.length - 1; i++) {

        var elementClass = getElementClassByGeoOrder(i);
        if (showOrHideArr[i] == 0) {

            hideElementByGeoGroupAndElementClass(geoGroupForShowOrHideElements, elementClass);
        } else if (showOrHideArr[i] == 1) {

            showElementByGeoGroupAndElementClass(geoGroupForShowOrHideElements, elementClass);
        }
    }

    if (selectedGeoTypeVal == countryGeoTypeVal || selectedGeoTypeVal == cityCorporationWardGeoTypeVal) {

        $(".geoCodeDiv").hide();
    } else {

        $(".geoCodeDiv").show();
    }
}

function showOrHideElementsForCountry(geoGroupForShowOrHideElements) {

    var showOrHideArr = showOrHideArrForCountry;

    for (var i = 0; i < showOrHideArr.length; i++) {

        var elementClass = getElementClassByGeoOrder(i);
        if (showOrHideArr[i] == 0) {

            hideElementByGeoGroupAndElementClass(geoGroupForShowOrHideElements, elementClass);
        } else if (showOrHideArr[i] == 1) {

            showElementByGeoGroupAndElementClass(geoGroupForShowOrHideElements, elementClass);
        }
    }
}

function populateElementsWithGeoGroupAndGeoOrder(data) {

    var geoType = data.geoType;

    var targetSelectElementDataGeoOrder = data.targetGeoOrder;

    if (targetSelectElementDataGeoOrder != officeDataGeoOrder) {
        var targetSelectElementList = $("select.geoSelect");

        for (var i = 0; i < targetSelectElementList.length; ++i) {

            var selectElement = $(targetSelectElementList[i]);
            var selectElementDataGeoGroup = $(selectElement).attr("data-geo-group");
            var selectElementDataGeoOrder = $(selectElement).attr("data-geo-order");

            if (data.geoGroup == selectElementDataGeoGroup && selectElementDataGeoOrder == targetSelectElementDataGeoOrder) {

                removeOldAppendNewOptions(data, selectElement);
            }
        }
    } else {

        putOfficeValAndText(data);
    }
}


function getChildGeoLocationsSuccess(data) {
    if (data["error"] && data["error"] == true) {
        toastDanger("Error", data['message']);
    } else {
        showOrHideElements(data.geoGroup, data.geoOrder, data.geoType);
        populateElementsWithGeoGroupAndGeoOrder(data);
    }
}

function getChildGeoLocationsError(data) {
    if (data['responseJSON']['message']) {
        toastDanger(data['responseJSON']['message']);
        return;
    }
    toastDanger("Error", "Unexpected error occurred, please try again");
}

function getChildGeoLocations(url, async) {

    if (async)
        callAjax(url, {}, "GET", getChildGeoLocationsSuccess, getChildGeoLocationsError);
    else
        callAjaxNotAsync(url, {}, "GET", getChildGeoLocationsSuccess, getChildGeoLocationsError);
}

function buildGeoLocationUrls(geoId, geoGroup, geoOrder, geoType) {

    geoLocationUrl = context + searchGeoLocationHashMapByParentGeoIdGeoGroupAndGeoOrderRestUrl + "/" + geoId + "?geoGroup=" + geoGroup + "&geoOrder=" + geoOrder + "&geoType=" + geoType;
    officeUrl = context + findOfficeGeoProjectionByParentGeoIdRestUrl + "/" + geoId + "?geoGroup=" + geoGroup + "&geoOrder=" + geoOrder + "&geoType=" + geoType;
    wardInPaurasavaOrUnionUrl = context + searchGeoLocationHashMapByParentGeoIdGeoGroupAndGeoOrderRestUrl + "/" + geoId + "?ward=true" + "&geoGroup=" + geoGroup + "&geoOrder=" + geoOrder + "&geoType=" + geoType;
    areaUrl = context + searchGeoLocationHashMapByParentGeoIdGeoGroupAndGeoOrderRestUrl + "/" + geoId + "?ward=true" + "&geoGroup=" + geoGroup + "&geoOrder=" + geoOrder + "&geoType=" + geoType;
}

function resetOfficeElementInGeoGroup(geoGroupToReset) {

    officeInputElement = $("#" + geoGroupToReset + "Office");
    resetOfficeValAndText();
}

function resetDropdownsAndInputElements(geoGroup, geoOrder, geoType) {

    resetSelectElementsAccordingToGeoOrderAndGeoTypeInCurrentGeoGroup(geoGroup, geoOrder, geoType);

    if (geoGroup == officeAddrGeoGroup && geoOrder != wardInPaurasavaUnionDataGeoOrder && geoOrder != areaDataGeoOrder)
        resetOfficeElementInGeoGroup(geoGroup);
}

function setLocationId(geoGroup, geoId) {

    var locationIdElement = $("input[name='" + geoGroup + "LocationId']");
    if (locationIdElement)
        $(locationIdElement).val(geoId);
}

function setLocationIdByGeoGroupAndGeoId(geoGroup, geoId) {

    var locationIdElement = $("#" + geoGroup + "LocationId");
    if (locationIdElement) {

        $(locationIdElement).val(geoId);

        $(locationIdElement).trigger("change");
    }
}

function resetLocationIdAccordingToDefinedGeoGroup() {

    if (locationIdElement)
        $(locationIdElement).val("");
}

function populateOffice() {

    getChildGeoLocations(officeUrl, true);
}

function setLocationIdAndPopulateOffice(geoId, geoGroup, geoType) {

    if (geoType != areaGeoTypeVal && geoType != paurasavaUnionWardGeoTypeVal)
        setLocationId(geoGroup, geoId);

    if (geoGroup == officeAddrGeoGroup)
        populateOffice();
}

function populateWardInPaurasavaOrUnion(geoGroup) {

    if (geoGroup != officeAddrGeoGroup)
        getChildGeoLocations(wardInPaurasavaOrUnionUrl, false);
}

function populateArea() {

    getChildGeoLocations(areaUrl, false);
}

function selectAndPopulateTargetElement(geoId, geoGroup, geoOrder, geoType) {

    if (geoId >= 0 && geoOrder != wardInPaurasavaUnionDataGeoOrder) {

        if (geoOrder == cityDataGeoOrder) {

            setLocationIdAndPopulateOffice(geoId, geoGroup, geoType);
        } else if (geoOrder == paurasavaOrUnionDataGeoOrder) {

            populateWardInPaurasavaOrUnion(geoGroup);
            setLocationIdAndPopulateOffice(geoId, geoGroup, geoType);

            if (geoType == unionParishadGeoTypeVal) {

                getChildGeoLocations(geoLocationUrl, true);
            }
        } else if (geoOrder == cityCorpCantOrUpazilaDataGeoOrder && geoType == cityCorporationGeoTypeVal) {

            populateWardInPaurasavaOrUnion(geoGroup);
            getChildGeoLocations(geoLocationUrl, true);
            setLocationIdAndPopulateOffice(geoId, geoGroup, geoType);
        } else if (geoOrder == wardInCityCorpDataGeoOrder) {

            populateWardInPaurasavaOrUnion(geoGroup);
            setLocationIdAndPopulateOffice(geoId, geoGroup, geoType);
        } else if (geoOrder == cityCorpCantOrUpazilaDataGeoOrder && geoType == cantonmentGeoTypeVal) {

            populateArea();
            setLocationIdAndPopulateOffice(geoId, geoGroup, geoType);
        } else if (geoOrder == areaDataGeoOrder) {

            return;
        } else if (geoOrder == villageDataGeoOrder) {

            return;
        } else {

            if (geoType == cityCorporationWardGeoTypeVal || geoType == paurashavaGeoTypeVal || geoType == unionParishadGeoTypeVal || geoType == cityGeoTypeVal) {

                setLocationIdAndPopulateOffice(geoId, geoGroup, geoType);
            } else
                getChildGeoLocations(geoLocationUrl, true);
        }
    }
}


function resetAllDropDownElementsInDefinedGeoGroup() {

    $(countryElement).val(bangladeshId);
    $(divisionElement).val(-1);
    // removeOptionsAddDefaultOption( divisionElement );
    removeOptionsAddDefaultOption(districtElement);
    removeOptionsAddDefaultOption(cityCorpCantOrUpazilaElement);
    removeOptionsAddDefaultOption(paurasavaOrUnionElement);
    removeOptionsAddDefaultOption(wardInCityCorpElement);
    removeOptionsAddDefaultOption(areaElement);
    removeOptionsAddDefaultOption(wardInPaurasavaOrUnionElement);
    removeOptionsAddDefaultOption(villageElement);
    removeOptionsAddDefaultOption(cityElement);

}

function checkIfLocationIdIsSelectedInAnyDropDownElementInAGeoGroup(locationIdToCheck, geoGroupToCheck) {

    var divisionElementVal = $("#" + addrGeoGroup + "Div").val();
    if (divisionElementVal == locationIdToCheck) {

        return true;
    }

    var districtElementVal = $("#" + addrGeoGroup + "Dist").val();
    if (districtElementVal == locationIdToCheck) {

        return true;
    }

    var cityCorpCantOrUpazilaElementVal = $("#" + addrGeoGroup + "CityCorpCantOrUpazila").val();
    if (cityCorpCantOrUpazilaElementVal == locationIdToCheck) {

        return true;
    }

    var paurasavaOrUnionElementVal = $("#" + addrGeoGroup + "PaurasavaOrUnion").val();
    if (paurasavaOrUnionElementVal == locationIdToCheck) {

        return true;
    }

    var wardInCityCorpElementVal = $("#" + addrGeoGroup + "WardInCityCorp").val();
    if (wardInCityCorpElementVal == locationIdToCheck) {

        return true;
    }

    var areaElementVal = $("#" + addrGeoGroup + "Area").val();
    if (areaElementVal == locationIdToCheck) {

        return true;
    }

    var wardInPaurasavaOrUnionElementVal = $("#" + addrGeoGroup + "WardInPaurasavaOrUnion").val();
    if (wardInPaurasavaOrUnionElementVal == locationIdToCheck) {

        return true;
    }

    var villageElementVal = $("#" + addrGeoGroup + "Village").val();
    if (villageElementVal == locationIdToCheck) {

        return true;
    }

    var countryElementVal = $("#" + addrGeoGroup + "Country").val();
    if (countryElementVal == locationIdToCheck) {

        return true;
    }

    var cityElementVal = $("#" + addrGeoGroup + "City").val();
    if (cityElementVal == locationIdToCheck) {

        return true;
    }


    var locationIdElementVal = $("#" + addrGeoGroup + "LocationId").val();
    if (locationIdElementVal == locationIdToCheck) {

        return true;
    }

}

function resetTextInputElementsInDefinedGeoGroup() {

    $(postOfficeElement).val("");
    $(villageAreaTownBnElement).val("");
    $(villageAreaTownEnElement).val("");
    $(houseRoadBnElement).val("");
    $(houseRoadEnElement).val("");
}

function resetGeoLocationElement() {

    $(geoLocationElement).val("-1");
}


function resetAllElementsInGeoGroup(geoGroupToReset) {

    defineAllElementsByGeoGroup(geoGroupToReset);
    resetAllDropDownElementsInDefinedGeoGroup();
    resetOfficeElementInGeoGroup(geoGroupToReset);
    resetGeoLocationElement();

    resetTextInputElementsInDefinedGeoGroup();
    resetHiddenInputsAccordingToDefinedGeoGroup();
}

function changeAddressLineLabel(geoGroup, geoType) {

    if (geoType == countryGeoTypeVal || geoType == cityGeoTypeVal) {

        $("." + geoGroup + "BangladeshAddress").hide();
        $("." + geoGroup + "MissionAddress").show();
    } else {

        $("." + geoGroup + "BangladeshAddress").show();
        $("." + geoGroup + "MissionAddress").hide();
    }
}


function populateTargetGeoLocationElement(geoGroup, geoOrder, geoId, geoType) {

    changeAddressLineLabel(geoGroup, geoType);

    resetDropdownsAndInputElements(geoGroup, geoOrder, geoType);

    buildGeoLocationUrls(geoId, geoGroup, geoOrder, geoType);

    selectAndPopulateTargetElement(geoId, geoGroup, geoOrder, geoType);
}

function populateLastSelectedOptionId(geoGroup, geoId, geoType) {

    geoId = (geoId == null) ? -1 : geoId;

    var geoLocationElement = $("#" + geoGroup + "LocationId");

    if (geoType != paurasavaUnionWardGeoTypeVal && geoType != areaGeoTypeVal && geoType != wardInWardTableUnderCitycoporationWardInGeolocationTableGeoTypeVal && geoType != wardInWardTableUnderCitycoporationInGeolocationTableGeoTypeVal) {

        let geoGroupBasedHiddenGeolocationElement = $("#" + geoGroup + "GeolocationId");
        $(geoGroupBasedHiddenGeolocationElement).val(geoId);

        $(geoLocationElement).val(geoId);
        $(geoLocationElement).trigger("change");
    } else {

        $(wardIdElement).val(geoId);

        let wardElement = $("#" + geoGroup + "WardId");
        $(wardElement).val(geoId);
    }

    /*var officeGeoLocationElement = $( "#" + geoGroup + "OfficeGeoLocationId" );

    if( geoType == cityCorporationWardGeoTypeVal ||
        geoType == cantonmentGeoTypeVal ||
        geoType == paurashavaGeoTypeVal ||
        geoType == unionParishadGeoTypeVal ||
        geoType == cityGeoTypeVal ){

        $( officeGeoLocationElement ).val( geoId );
    }*/
}


$(".geoLocation").on("change", "select", function (e) {

    var selectedElement = $(e.target);

    var geoGroup = $(selectedElement).attr("data-geo-group");
    var geoOrder = $(selectedElement).attr("data-geo-order");
    var geoId = $(selectedElement).val();

    var selectedOption = $(selectedElement).find(":selected");

    var geoType = $(selectedOption).attr("data-geo-level-id");

    populateTargetGeoLocationElement(geoGroup, geoOrder, geoId, geoType);
    populateLastSelectedOptionId(geoGroup, geoId, geoType);

});

function getGeoTypeValAndShowOrHideElementsAccordingToGeoType(selectedGeoTypeElement) {

    var geoTypeVal = $(selectedGeoTypeElement).val();
    var geoGroupOfGeoType = $(selectedGeoTypeElement).attr("data-geo-group");

    showOrHideElementsAccordingToGeoType(geoGroupOfGeoType, geoTypeVal);
}

$(".geoType").on("change", function (e) {

    var selectedElement = $(e.target);

    getGeoTypeValAndShowOrHideElementsAccordingToGeoType(selectedElement);
});

function createWardIdElement() {

    var input = $("<input/>");
    $(input).attr({
        "type": "hidden",
        "name": "wardId",
        "id": "wardId"
    });

    $(input).insertAfter(geoLocationElement);
    wardIdElement = $("#wardId");
}

function permanentlyHideElementsByDataGeoOrder(dataGeoOrder) {

    hiddenElementsByExternalFunctionCalls[dataGeoOrder] = 1;
}

function makeBangladeshDefaultOptionInCountry() {

    $(".country option[value=" + bangladeshId + "]").attr('selected', 'selected');
}

$(document).ready(function ($) {

    // this is the element which is the geo id of the last selected element
    defineGeoLocationElement();
    createWardIdElement();
    // createAndAppendGeolocationResetDiv();

    makeBangladeshDefaultOptionInCountry();
});

function createAndAppendGeolocationResetDiv() {

    var button = $("<button/>");
    $(button).attr({
        "type": "button",
        "class": "btn btn-sm btn-primary resetGeolocationButton"
    });

    $(button).text("Reset");

    var div = $("<div/>");
    $(div).attr({
        "class": "col-md-12"
    });
    $(div).append(button);

    $(".resetGeolocation").append(div);
}

$(document).on("click", ".resetGeolocationButton", function (e) {

    var geoGroup = $(e.target).closest(".resetGeolocation").attr("data-geo-group");
    resetAllElementsInGeoGroup(geoGroup);
});


function isElementVisible(element) {

    //return $( element ).is(":visible");
    return $(element).css('display') != 'none';
}

function showElement(element) {

    $(element).show();
}

function hideElement(element) {

    $(element).hide();
}

$(document).on("change", ".geoType", function (e) {

    var selectedGeoLocationTypeId = $(".geoType option:selected").val();

    for (var i = 0; i < geoLocationTypeList.length; i++) {

        var geoLocationType = geoLocationTypeList[i];

        if (geoLocationType.id == selectedGeoLocationTypeId) {

            $("#rmoCode").val(geoLocationType.rmoCode);
        }
    }
});
