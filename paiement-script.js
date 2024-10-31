// Initialisation du bouton PayPal
paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '100.00' // Montant de la transaction (à adapter selon le montant du prêt)
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            // Afficher un message de succès
            alert('Paiement effectué avec succès par ' + details.payer.name.given_name);
            window.location.href = 'confirmation.html'; // Rediriger vers une page de confirmation
        });
    }
}).render('#paypal-button-container');
