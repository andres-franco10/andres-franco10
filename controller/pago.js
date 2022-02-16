
// SDK de Mercado Pago
import mercadopago from "mercadopago"

// Agrega credenciales
mercadopago.configure({
  access_token: "APP_USR-3746270722733107-021517-8d01cbc794c715141904b5781c46fb2c-231037826",
});

console.log(`configuracion del SDK de MErcado Pago ok!`)

const feedback = (req, res) => {
	let info = {
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	}

	console.log(info)

    res.redirect('/')
}

export default{
    feedback

}