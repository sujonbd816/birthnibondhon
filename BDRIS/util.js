var monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var monthNameBn = ["জানুয়ারি", "ফেব্রুয়ারী", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"];

var numberBn = ["০০", "০১", "০২", "০৩", "০৪", "০৫", "০৬", "০৭", "০৮", "০৯", "১০", "১১", "১২", "১৩", "১৪", "১৫", "১৬", "১৭", "১৮", "১৯", "২০", "২১", "২২", "২৩", "২৪", "২৫", "২৬", "২৭", "২৮", "২৯", "৩০", "৩১", "৩২", "৩৩", "৩৪", "৩৫", "৩৬", "৩৭", "৩৮", "৩৯", "৪০", "৪১", "৪২", "৪৩", "৪৪", "৪৫", "৪৬", "৪৭", "৪৮", "৪৯", "৫০", "৫১", "৫২", "৫৩", "৫৪", "৫৫", "৫৬", "৫৭", "৫৮", "৫৯", "৬০", "৬১", "৬২", "৬৩", "৬৪", "৬৫", "৬৬", "৬৭", "৬৮", "৬৯", "৭০", "৭১", "৭২", "৭৩", "৭৪", "৭৫", "৭৬", "৭৭", "৭৮", "৭৯", "৮০", "৮১", "৮২", "৮৩", "৮৪", "৮৫", "৮৬", "৮৭", "৮৮", "৮৯", "৯০", "৯১", "৯২", "৯৩", "৯৪", "৯৫", "৯৬", "৯৭", "৯৮", "৯৯"];
var numberBnSingleAndDoubleDigit = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯", "১০", "১১", "১২", "১৩", "১৪", "১৫", "১৬", "১৭", "১৮", "১৯", "২০", "২১", "২২", "২৩", "২৪", "২৫", "২৬", "২৭", "২৮", "২৯", "৩০", "৩১", "৩২", "৩৩", "৩৪", "৩৫", "৩৬", "৩৭", "৩৮", "৩৯", "৪০", "৪১", "৪২", "৪৩", "৪৪", "৪৫", "৪৬", "৪৭", "৪৮", "৪৯", "৫০", "৫১", "৫২", "৫৩", "৫৪", "৫৫", "৫৬", "৫৭", "৫৮", "৫৯", "৬০", "৬১", "৬২", "৬৩", "৬৪", "৬৫", "৬৬", "৬৭", "৬৮", "৬৯", "৭০", "৭১", "৭২", "৭৩", "৭৪", "৭৫", "৭৬", "৭৭", "৭৮", "৭৯", "৮০", "৮১", "৮২", "৮৩", "৮৪", "৮৫", "৮৬", "৮৭", "৮৮", "৮৯", "৯০", "৯১", "৯২", "৯৩", "৯৪", "৯৫", "৯৬", "৯৭", "৯৮", "৯৯"];
var numberBnSingleDigit = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
var dayNameBn = ["এক", "দুই", "তিন", "চার", "পাঁচ", "ছয়", "সাত", "আট", "নয়", "দশ", "এগার", "বার", "তেরো", "চৌদ্দ", "পনের", "ষোল", "সতের", "আঠারো", "ঊনিশ", "বিশ", "একুশ", "বাইশ", "তেইশ", "চব্বিশ", "পঁচিশ", "ছাব্বিশ", "সাতাশ", "আটাশ", "ঊনত্রিশ", "ত্রিশ", "একত্রিশ", "বত্রিশ", "তেত্রিশ", "চৌত্রিশ", "পঁয়ত্রিশ", "ছত্রিশ", "সাইত্রিশ", "আটত্রিশ", "উনচল্লিশ", "চল্লিশ", "একচল্লিশ", "বিয়াল্লিশ", "তেতাল্লিশ", "চুয়াল্লিশ", "পয়তাল্লিশ", "ছিচল্লিশ", "সাতচল্লিশ", "আটচল্লিশ", "ঊনপঞ্চাশ", "পঞ্চাশ", "একান্ন", "বায়ান্ন", "তিপ্পান্ন", "চুয়ান্ন", "পঞ্চান্ন", "ছাপ্পান্ন", "সাতান্ন", "আটান্ন", "ঊনষাট", "ষাট", "একষট্টি", "বাষট্টি", "তেষট্টি", "চৌষট্টি", "পঁয়ষট্টি", "ষেষট্টি", "সাতষট্টি", "আটষট্টি", "ঊনসত্তুর", "সত্তুর", "একাত্তর", "বাহাত্তর", "তিয়াত্তর", "চুয়াত্তর", "পঁচাত্তর", "ছিয়াত্তর", "সাতাত্তর", "আটাত্তর", "ঊনাশি", "আশি", "একাশি", "বিরাশি", "তিরাশি", "চুরাশি", "পঁচাশি", "ছিয়াশি", "সাতাশি", "আটাশি", "ঊননব্বই", "নব্বই", "একানব্বই", "বিরানব্বই", "তিরানব্বই", "চুরানব্বই", "পচানব্বই", "ছিয়ানব্বই", "সাতানব্বই", "আটানব্বই", "নিরানব্বই"];
var firstTwoDigitOfYearNameBn = ["একশত", "দুইশত", "তিনশত", "চারশত", "পাঁচশত", "ছয়শত", "সাতশত", "আটশত", "নয়শত", "এক হাজার", "এগারশত", "বারশত", "তেরোশত", "চৌদ্দশত", "পনেরশত", "ষোলশত", "সতেরশত", "আঠারোশত", "ঊনিশশত", "দুই হাজার", "একুশশত", "বাইশশত", "তেইশশত", "চব্বিশশত", "পঁচিশশত", "ছাব্বিশশত", "সাতাশশত", "আটাশশত", "ঊনত্রিশশত", "তিন হাজার", "একত্রিশশত"];
var lastTwoDigitOfYearNameBn = ["এক", "দুই", "তিন", "চার", "পাঁচ", "ছয়", "সাত", "আট", "নয়", "দশ", "এগার", "বার", "তেরো", "চৌদ্দ", "পনের", "ষোল", "সতের", "আঠারো", "ঊনিশ", "বিশ", "একুশ", "বাইশ", "তেইশ", "চব্বিশ", "পঁচিশ", "ছাব্বিশ", "সাতাশ", "আটাশ", "ঊনত্রিশ", "ত্রিশ", "একত্রিশ", "বত্রিশ", "তেত্রিশ", "চৌত্রিশ", "পঁয়ত্রিশ", "ছত্রিশ", "সাইত্রিশ", "আটত্রিশ", "উনচল্লিশ", "চল্লিশ", "একচল্লিশ", "বিয়াল্লিশ", "তেতাল্লিশ", "চুয়াল্লিশ", "পয়তাল্লিশ", "ছিচল্লিশ", "সাতচল্লিশ", "আটচল্লিশ", "ঊনপঞ্চাশ", "পঞ্চাশ", "একান্ন", "বায়ান্ন", "তিপ্পান্ন", "চুয়ান্ন", "পঞ্চান্ন", "ছাপ্পান্ন", "সাতান্ন", "আটান্ন", "ঊনষাট", "ষাট", "একষট্টি", "বাষট্টি", "তেষট্টি", "চৌষট্টি", "পঁয়ষট্টি", "ষেষট্টি", "সাতষট্টি", "আটষট্টি", "ঊনসত্তুর", "সত্তুর", "একাত্তর", "বাহাত্তর", "তিয়াত্তর", "চুয়াত্তর", "পঁচাত্তর", "ছিয়াত্তর", "সাতাত্তর", "আটাত্তর", "ঊনাশি", "আশি", "একাশি", "বিরাশি", "তিরাশি", "চুরাশি", "পঁচাশি", "ছিয়াশি", "সাতাশি", "আটাশি", "ঊননব্বই", "নব্বই", "একানব্বই", "বিরানব্বই", "তিরানব্বই", "চুরানব্বই", "পচানব্বই", "ছিয়ানব্বই", "সাতানব্বই", "আটানব্বই", "নিরানব্বই"];
var loader = document.querySelector(".page-loader");
$(document).on("keyup", ".allupper", function () {

    this.value = this.value.toUpperCase();
});
$(document).ready(function () {
    hideLoader();
    const current_year = new Date().getFullYear();
    const data = '&copy; ' + current_year + ' - Developed and maintained by Office of the Registrar General, Birth and Death Registration, v2';
    $('#admin-footer').empty().html(data);
});

function showLoader() {
    if ($(loader).length) {
        $(".page-loader").removeClass("page-loader-hidden");
        $(".page-loader").addClass("page-loader-show");
    }
}

function hideLoader() {
    if ($(loader).length) {
        $(".page-loader").removeClass("page-loader-show");
        $(".page-loader").addClass("page-loader-hidden");
    }
}

function callAjaxForLoadingButton(url, param, method, successCallback, errorCallback, button) {

    $(button).prop('disabled', true);
    const i = $("<i/>");
    $(i).addClass("fa fa-spinner fa-spin loading");
    $(button).append(i);
    showLoader();
    $.ajax({
        url: url,
        data: param,
        method: method,
        beforeSend: function (request) {
            request.setRequestHeader("client", "bris");
            request.setRequestHeader('X-CSRF-TOKEN', csrf);
        },
        success: function (data) {
            successCallback(data);
        },
        error: function (data) {
            errorCallback(data);
            $(button).prop('disabled', false);
        },
        complete: function () {

            $(".loading").remove();
            $(button).prop('disabled', false);

            hideLoader();
        }
    });
}

function callAjax(url, param, method, successCallback, errorCallback) {
    showLoader();
    let argumentsLength = arguments.length;
    $.ajax({
        url: url,
        data: (argumentsLength < 2) ? {} : param,
        method: (argumentsLength < 3) ? "GET" : method,
        beforeSend: function (request) {
            request.setRequestHeader("client", "bris");
            const headerName = $("meta[name='_csrf_headerName']").attr('content');
            const csrfToken = $("meta[name='_csrf']").attr('content');
            if (headerName && csrfToken) {
                request.setRequestHeader(headerName, csrfToken);
            } else {
                request.setRequestHeader('X-CSRF-TOKEN', csrf);
            }
        },
        success: function (data) {
            (argumentsLength < 4) ? callAjaxDefaultSuccessCallback(data) : successCallback(data, param);
        },
        error: function (data) {
            (argumentsLength == 5) ? errorCallback(data) : callAjaxDefaultErrorCallback(data);
        },
        complete: function () {
            hideLoader();
        }
    });
}

function callAjaxNotAsync(url, param, method, successCallback, errorCallback) {
    showLoader();
    let argumentsLength = arguments.length;
    $.ajax({
        url: url,
        data: (argumentsLength < 2) ? {} : param,
        method: (argumentsLength < 3) ? "GET" : method,
        async: false,
        beforeSend: function (request) {
            request.setRequestHeader("client", "bris");
            const headerName = $("meta[name='_csrf_headerName']").attr('content');
            const csrfToken = $("meta[name='_csrf']").attr('content');
            if (headerName && csrfToken) {
                request.setRequestHeader(headerName, csrfToken);
            } else {
                request.setRequestHeader('X-CSRF-TOKEN', csrf);
            }
        },
        success: function (data) {
            (argumentsLength < 4) ? callAjaxDefaultSuccessCallback(data) : successCallback(data, param);
        },
        error: function (data) {
            (argumentsLength == 5) ? errorCallback(data) : callAjaxDefaultErrorCallback(data);
        },
        complete: function () {
            hideLoader();
        }
    });
}

function callAjaxFormData(url, param, method, successCallback, errorCallback) {
    showLoader();
    let argumentsLength = arguments.length;

    $.ajax({
        url: url,
        data: (argumentsLength < 2) ? {} : param,
        method: (argumentsLength < 3) ? "GET" : method,
        async: false,
        processData: false,
        contentType: false,
        beforeSend: function (request) {
            request.setRequestHeader("client", "bris");
            const headerName = $("meta[name='_csrf_headerName']").attr('content');
            const csrfToken = $("meta[name='_csrf']").attr('content');
            if (headerName && csrfToken) {
                request.setRequestHeader(headerName, csrfToken);
            } else {
                request.setRequestHeader('X-CSRF-TOKEN', csrf);
            }
        },
        success: function (data) {
            (argumentsLength < 4) ? callAjaxDefaultSuccessCallback(data) : successCallback(data, param);
        },
        error: function (data) {
            (argumentsLength == 5) ? errorCallback(data) : callAjaxDefaultErrorCallback(data);
        },
        complete: function () {
            hideLoader();
        }
    });
}

function toastDanger(heading, text) {

    $.toast({

        heading: heading,
        text: text,
        position: 'top-center',
        icon: 'error',
        stack: true,
        hideAfter: 10000
    });
}

function toastSuccess(heading, text) {

    $.toast({

        heading: heading,
        text: text,
        position: 'top-center',
        icon: 'success',
        stack: true,
        hideAfter: 10000
    });
}

function toastWarning(heading, text) {

    $.toast({

        heading: heading,
        text: text,
        position: 'top-center',
        icon: 'warning',
        stack: true,
        hideAfter: 10000
    });
}


function callAjaxDefaultSuccessCallback(response) {
    if (response.error) {
        toastDanger(response.message);
    } else {
        toastSuccess(response.message);
    }
}

function callAjaxDefaultErrorCallback(response) {

    toastDanger(response.responseJSON.message);
    // toastDanger( data['responseJSON']['message'] );
}

$(document).on("click", ".print, #appPrintBtn, #br_cert_print_btn", function (e) {

    e.preventDefault();
    var print = window.open($(this).attr("href"), "_blank", "left=20, top=20,width:800, height=600");
});

var isonfocus = true;
window.onblur = function () {
    //console.log( "infocus == false");
    isonfocus = false;
}
window.onfocus = function () {
    //console.log( "infocus == true");
    isonfocus = true;
}


// check if an element exists in array using a comparer function
// comparer : function(currentElement)
Array.prototype.inArray = function (element, comparer) {

    for (var i = 0; i < this.length; i++) {

        if (comparer(element, this[i]))
            return true;
    }
    return false;
};

// adds an element to the array if it does not already exist using a comparer
// function
Array.prototype.pushIfNotExist = function (element, comparer) {

    if (!this.inArray(element, comparer)) {

        this.push(element);
    }
};

Array.prototype.findInArray = function (obj, comparer) {

    for (let i = 0; i < this.length; i++) {

        if (comparer(obj, this[i]))
            return i;
    }
    return -1;
}

function getUrlParameter(sParam) {
    let sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
}
