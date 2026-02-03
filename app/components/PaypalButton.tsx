'use client';

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

interface Props {
  amount: string;
  description: string;
  onSuccess: () => void;
}

export function PaypalButton({ amount, description, onSuccess }: Props) {
  
  // OPCIONES DE CONFIGURACIÓN
  const initialOptions = {
    // Usamos el ID directo para eliminar cualquier duda de variables de entorno
    clientId: "AR9Yv2YCOeVpvyQ_Y_O9Eoci1ID1DfKi87VJSN5gKTO8IIJP87yR1prCvMHjvkUfdPVRpGNLCpYQ6uz3",
    currency: "EUR",
    intent: "capture",
  };

  return (
    <div className="w-full z-0 relative" style={{ minHeight: "50px" }}> {/* Contenedor seguro */}
        <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons 
              style={{ layout: "horizontal", color: "gold", shape: "rect", label: "pay", tagline: false, height: 45 }}
              
              createOrder={(data, actions) => {
                return actions.order.create({
                  intent: "CAPTURE",
                  purchase_units: [
                    {
                      description: description,
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
              
              // Manejo de errores visual
              onError={(err) => {
                  console.error("Error PayPal:", err);
              }}
            />
        </PayPalScriptProvider>
    </div>
  );
}