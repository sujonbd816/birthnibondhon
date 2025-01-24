/*
 * jQuery File Upload Plugin JS Example
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global $, window */

var fileUploadUrl = context + '/admin/doc/upload';

var fileTypeArray = [];


function emptyFileTypeArray() {

    fileTypeArray = [];
}

function getUploadedFileTypeList() {

    emptyFileTypeArray();

    var fileTypeIds = $(".uploadedAttachmentTypeId");

    for (var i = 0; i < fileTypeIds.length; ++i) {

        var element = $(fileTypeIds[i]);
        var elementVal = $(element).val();

        fileTypeArray.push(parseInt(elementVal));

        console.log("uploaded file type id val - " + elementVal);
    }

    return fileTypeArray;
}

function hasFileWithAttachmentTypeBeenUploaded(attachmentTypeId) {

    let attachmentTypeIdInt = parseInt(attachmentTypeId);

    let uploadedFileTypeArray = getUploadedFileTypeList();

    if (uploadedFileTypeArray.includes(attachmentTypeIdInt)) {

        return true;
    }

    return false;
}


$(function () {
    'use strict';

    // Initialize the jQuery File Upload widget:
    $('#fileupload').fileupload({
        // Uncomment the following to send cross-domain cookies:
        //xhrFields: {withCredentials: true},
        url: fileUploadUrl
    });

    // Enable iframe cross-domain access via redirect option:
    $('#fileupload').fileupload(
        'option',
        'redirect',
        window.location.href.replace(
            /\/[^\/]*$/,
            '/cors/result.html?%s'
        )
    );

    $('#fileupload').fileupload('option', {
        url: fileUploadUrl,
        // Enable image resizing, except for Android and Opera,
        // which actually support image resizing, but fail to
        // send Blob objects via XHR requests:
        maxFileSize: maxAllowedFileSize,
        acceptFileTypes: /(\.|\/)(gif|jpe?g|png|pdf)$/i,
        disableImageResize: false,
        imageMaxWidth: 768,
        imageMaxHeight: 1024,
        imageCrop: false

    });

    // Upload server status check for browsers with CORS support:file
    if ($.support.cors) {
        $.ajax({
            url: fileUploadUrl,
            type: 'GET',
        }).fail(function () {
            $('<div class="alert alert-danger"/>')
                .text('Upload server currently unavailable - ' +
                    new Date())
                .appendTo('#fileupload');
        });
    }


    $('#fileupload').bind('fileuploadsubmit', function (e, data) {

        const name = data['files'][0]['name'].split(' ').join('_');

        const attachmentTypeSelect = $(document.getElementById(name));
        const attachmentTypeId = $(attachmentTypeSelect).val();

        if (hasFileWithAttachmentTypeBeenUploaded(attachmentTypeId)) {
            toastDanger("এই ফাইল ইতিমধ্যে আপলোড করা হয়েছে");
            return false;
        }

        const attachmentSubTypeSelect = $(attachmentTypeSelect).closest("tr").find(".attachment-sub-type-upload");
        var attachmentSubTypeId = $(attachmentSubTypeSelect).val();

        if (attachmentSubTypeId == null) {

            attachmentSubTypeId = -1;
        }

        data.formData = {attachmentType: attachmentTypeId, attachmentSubType: attachmentSubTypeId, '_csrf': csrf};
        // return false;
    });

    $('#fileupload').bind('fileuploadfail', function (e, data) {
        if (data != null && data.jqXHR != null && data.jqXHR.status === 403) {
            toastDanger('Error', 'Your session time out, please refresh this page');
            return;
        }
        if (data != null && data.jqXHR) {
            toastDanger('Error', data.jqXHR.responseJSON.message);
        } else {
            toastDanger('Error', 'File upload cancelled');
        }
    });

    $(document).on("change", ".attchment-type-upload", function (e) {

        var selectedAttachmentTypeId = $(e.target).val();
        // console.log("attachment type upload id - " + selectedAttachmentTypeId);
        // console.log("option - " + getAttachmentSubTypeOptionByAttachmentTypeId(selectedAttachmentTypeId));

        var attachmentSubTypeSelect = $(e.target).closest("tr").find(".attachment-sub-type-upload");
        $(attachmentSubTypeSelect).empty();

        var outputOption = getAttachmentSubTypeOptionByAttachmentTypeId(selectedAttachmentTypeId);
        $(attachmentSubTypeSelect).append(outputOption);
    });

    function getAttachmentSubTypeOptionByAttachmentTypeId(attachmentTypeId) {

        var option = "";

        for (var j = 0; j < attachmentSubType.length; j++) {

            if (attachmentSubType[j].attachmentTypeId == attachmentTypeId) {

                option += "<option value=" + attachmentSubType[j].id + ">" + attachmentSubType[j].attachmentNameBn + "</option>";
            }
        }

        return option;
    }

});
