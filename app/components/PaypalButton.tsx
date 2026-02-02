'use client';

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

interface Props {
  amount: string;     // Precio
  description: string; // <--- NUEVO: Qué está comprando
  onSuccess: () => void;
}

export function PaypalButton({ amount, description, onSuccess }: Props) {
  return (
    <PayPalScriptProvider options={{ 
        // Acordate de dejar tu Client ID aquí (ya sea hardcodeado o con variable)
        clientId: "AR9Yv2YCOeVpvyQ_Y_O9Eoci1ID1DfKi87VJSN5gKTO8IIJP87yR1prCvMHjvkUfdPVRpGNLCpYQ6uz3",
        currency: "EUR"
    }}>
      <div className="z-0 w-full">
        <PayPalButtons 
          style={{ layout: "horizontal", color: "gold", shape: "rect", label: "pay", tagline: false, height: 45 }}
          
          createOrder={(data, actions) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  description: description, // <--- AQUÍ SE ENVÍA EL DATO CLAVE
                  amount: {
                    currency_code: "EUR",
                    value: amount,
                  },
                },
              ],
            });
          }}
          
          onApprove={async (data, actions) => {
            if (actions.order) {
                const order = await actions.order.capture();
                console.log("Pago exitoso:", order);
                onSuccess();
            }
          }}
        />
      </div>
    </PayPalScriptProvider>
  );
}