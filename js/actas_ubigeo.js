const getDepartamentos = async (ambito) => {
    const data = await fetch(`https://oaemdl.es/onpe_sweb_php/actas/ubigeo/${ambito}`)
    if (data.status == 200) {
        const departamentos = await data.json()
        let html = `
            <select name="cdgoDep" id="cdgoDep" class="form-control" onchange="getProvinciasDepa_acta('', '', this.value);">
                            <option selected="selected" value="">--SELECCIONE--</option>
            `
        departamentos.forEach(departamento => {
            html += `
                <option value="${departamento.id}"${departamento.detalle}</option>
                `
        });
        html += '</select>'
        document.getElementById('departamentos').innerHTML=html
    }
}
