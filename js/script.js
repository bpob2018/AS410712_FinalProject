$('#typeOfOrg').on('change', function(){
   console.log($('#typeOfOrg').val());
    $('#goClass').html('');
    if ($('#typeOfOrg').val()=="Bos taurus"){
        $('#goClass').append('<option value="positive regulation of insulin secretion">positive regulation of insulin secretion</option>');
        $('#goClass').append('<option value="chloride transmembrane transport">chloride transmembrane transport</option>');
        $('#goClass').append('<option value="transcription cis-regulatory region binding">transcription cis-regulatory region binding</option>');
    }else if ($('#typeOfOrg').val()=="Canis lupus familiaris"){
        $('#goClass').append('<option value="insulin-like growth factor receptor binding">insulin-like growth factor receptor binding</option>');
        $('#goClass').append('<option value="positive regulation of cell population proliferation">positive regulation of cell population proliferation</option>');
        $('#goClass').append('<option value="regulation of protein phosphorylation">regulation of protein phosphorylation</option>');
        $('#goClass').append('<option value="extracellular space">extracellular space</option>');
        $('#goClass').append('<option value="hormone activity">hormone activity</option>');
        $('#goClass').append('<option value="positive regulation of phosphatidylinositol 3-kinase/protein kinase B signal transduction">positive regulation of phosphatidylinositol 3-kinase/protein kinase B signal transduction</option>');
        $('#goClass').append('<option value="insulin-like growth factor receptor signaling pathway">insulin-like growth factor receptor signaling pathway</option>');
        $('#goClass').append('<option value="cell population proliferation">cell population proliferation</option>');
        $('#goClass').append('<option value="negative regulation of apoptotic process">negative regulation of apoptotic process</option>');
        $('#goClass').append('<option value="bicarbonate transport">bicarbonate transport</option>')
    }else if ($('#typeOfOrg').val()=="Equus caballus"){
        $('#goClass').append('<option value="insulin receptor signaling pathway">insulin receptor signaling pathway</option>');
        $('#goClass').append('<option value="negative regulation of insulin receptor signaling pathway">negative regulation of insulin receptor signaling pathway</option>');
    }else if ($('#typeOfOrg').val()=="Gorilla gorilla gorilla"){
        $('#goClass').append('<option value="cellular response to insulin stimulus">cellular response to insulin stimulus</option>');
        $('#goClass').append('<option value="negative regulation of insulin receptor signaling pathway">negative regulation of insulin receptor signaling pathway</option>');
        $('#goClass').append('<option value="positive regulation of insulin receptor signaling pathway">positive regulation of insulin receptor signaling pathway</option>');
        $('#goClass').append('<option value="regulation of insulin secretion involved in cellular response to glucose stimulus">regulation of insulin secretion involved in cellular response to glucose stimulus</option>');
    }else if ($('#typeOfOrg').val()=="Macaca mulatta"){
        $('#goClass').append('<option value="insulin-like growth factor receptor signaling pathway">insulin-like growth factor receptor signaling pathway</option>');
        $('#goClass').append('<option value="insulin receptor substrate binding">insulin receptor substrate binding</option>');
        $('#goClass').append('<option value="insulin receptor complex">insulin receptor complex</option>');
        $('#goClass').append('<option value="insulin receptor activity">insulin receptor activity</option>');
        $('#goClass').append('<option value="insulin receptor signaling pathway">insulin receptor signaling pathway</option>');
    }else if ($('#typeOfOrg').val()=="Ornithorhynchus anatinus"){
        $('#goClass').append('<option value="insulin receptor signaling pathway">insulin receptor signaling pathway</option>');
    }else if ($('#typeOfOrg').val()=="Oryzias latipes"){
        $('#goClass').append('<option value="insulin secretion">insulin secretion</option>');
    }else if ($('#typeOfOrg').val()=="Pan troglodytes"){
        $('#goClass').append('<option value="insulin receptor signaling pathway">insulin receptor signaling pathway</option>');
        $('#goClass').append('<option value="positive regulation of DNA-templated transcription">positive regulation of DNA-templated transcription</option>');
    } else {
        $('#goClass').append('<option value="collagen-containing extracellular matrix">collagen-containing extracellular matrix</option>');
        $('#goClass').append('<option value="regulation of signal transduction">regulation of signal transduction</option>');
        $('#goClass').append('<option value="extracellular space">extracellular space</option>');
        $('#goClass').append('<option value="response to insulin">response to insulin</option>');
    }
});
