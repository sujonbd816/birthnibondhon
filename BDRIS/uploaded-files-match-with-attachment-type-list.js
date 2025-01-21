/*<![CDATA[*/


function doAllAttachmentTypeIdsExistInFileTypeArray(){

    if( fileTypeArray.length != attachmentType.length ){

        return false;
    }

    var allFilesExistCheck = true;

    $.each( attachmentType, function( index, data ){

        var present = fileTypeArray.includes( data.id );
        if( !present ){

            allFilesExistCheck = false;
        }
    });

    return allFilesExistCheck;
}

// $( document ).on( "click", ".fileUploadNextBtn", function(){
//
//     emptyFileTypeArray();
//     getUploadedFileTypeList();
//     var check = doAllAttachmentTypeIdsExistInFileTypeArray();
//
//     console.log( "attachment type file type matching check - " + check );
// });


function attachmentTypesMatchWithFileTypes(){

    emptyFileTypeArray();
    getUploadedFileTypeList();


    var check = doAllAttachmentTypeIdsExistInFileTypeArray();

    return check;
}

/*]]>*/