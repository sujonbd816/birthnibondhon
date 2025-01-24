$("#languageSelector").on("change", function () {
    //language change variable comes from common-js-var.js file
    languageChange($(this).val());
});

function languageChange(lang) {
	const url = context + "/language/change?lang=" + lang;
	callAjax(url, {}, "GET", languageChangeSuccess, languageChangeError);
}

function languageChangeSuccess(data) {

    location.reload();
}

function languageChangeError(data) {

    console.log("error in lang change");
}
