
$( document ).ready( function($){

    $( "#phone, #applicantPhone" ).intlTelInput({
        // allowDropdown: false,
        // autoHideDialCode: false,
        // autoPlaceholder: "off",
        dropdownContainer: "body",
        // excludeCountries: ["us"],
        // formatOnDisplay: false,
        /*geoIpLookup: function(callback) {
            $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
                var countryCode = (resp && resp.country) ? resp.country : "";
                callback(countryCode);
            });
        },*/
        // hiddenInput: "full_number",
        initialCountry: "BD",
        nationalMode: false,
        // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
        // placeholderNumberType: "MOBILE",
        // preferredCountries: ['cn', 'jp'],
        // separateDialCode: true,

        utilsScript: context + "/js/intTellUtils.js"
    });


});

function callIntlTelInputByElementId( elementId ){

    $( "#" + elementId ).intlTelInput({
        // allowDropdown: false,
        // autoHideDialCode: false,
        // autoPlaceholder: "off",
        dropdownContainer: "body",
        // excludeCountries: ["us"],
        // formatOnDisplay: false,

        // hiddenInput: "full_number",
        initialCountry: "BD",
        /*geoIpLookup: function(callback) {
            $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
                var countryCode = (resp && resp.country) ? resp.country : "";
                callback(countryCode);
            });
        },*/
        nationalMode: false,
        // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
        // placeholderNumberType: "MOBILE",
        // preferredCountries: ['cn', 'jp'],
        // separateDialCode: true,

        utilsScript: context + "/js/intTellUtils.js"
    });
}