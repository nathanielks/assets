function checkPageTemplate(pageTemplate){

    var pageTemplateValue = pageTemplate.find(':selected').val(),
    subContent = jQuery('#subcontent');


    if ( pageTemplateValue == 'templates/sidebar-sub-content.php'){
        subContent.show();
    }
    else{
        subContent.hide();
    }
}

jQuery(document).ready(function(){

    var pageTemplate = jQuery('#page_template');

    checkPageTemplate(pageTemplate);

    pageTemplate.change(function(e){

        checkPageTemplate(pageTemplate);

    });
});

