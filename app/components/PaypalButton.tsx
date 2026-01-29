'use client';

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

interface Props {
  amount: string; // El precio en Euros
  onSuccess: () => void; // Qué hacer cuando paga
}

export function PaypalButton({ amount, onSuccess }: Props) {
  return (
    <PayPalScriptProvider options={{ 
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "",
        currency: "EUR" // Cobramos en Euros
    }}>
      <div className="z-0">
        <PayPalButtons 
          style={{ layout: "horizontal", color: "gold", shape: "rect", label: "pay", tagline: false, height: 45 }}
          createOrder={(data, actions) => {
            return actions.order.create({
              intent: "CAPTURE", // Obligatorio para TS
              purchase_units: [
                {
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
                onSuccess(); // Llamamos a la función de éxito
            }
          }}
        />
      </div>
    </PayPalScriptProvider>
  );
}