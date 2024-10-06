const { linhasOnibusMetropolitanos } = require('./data.js')

const tarifasMaisCaras = (data) => {  
    console.log( 
        data.filter(data => data.tarifa > 5) 
    )
}

tarifasMaisCaras(linhasOnibusMetropolitanos)