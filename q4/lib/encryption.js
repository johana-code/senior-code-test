const aes_key       = 'CIHCBIVIeVFcUUGWGXMbTEfIKOEPFGHd'
const aes_iv        = 'CIHCBIVIeVFcUUGW'

const encrypt =  ( message, key = aes_key, iv = aes_iv ) => {         

	const { AES, enc } = require ( 'crypto-js' )

	let encrypted =   AES.encrypt ( 
		enc.Utf8.parse ( message ),  
		enc.Utf8.parse( key ), 
		{ 
			iv:  enc.Utf8.parse( iv ) 
		} 
	).toString()

	return encrypted;
	
}
const decrypt =  ( message, key = aes_key, iv = aes_iv ) => {
	
	const { AES, enc } = require ( 'crypto-js' )
	
	
	let decrypted =     AES.decrypt ( 
		message, 
		enc.Utf8.parse( key ), 
		{ iv: enc.Utf8.parse( iv ) }
	).toString ( enc.Utf8)
	

	return decrypted
}

module.exports = {
	encrypt,
	decrypt
}