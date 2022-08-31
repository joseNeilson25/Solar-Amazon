import { RegularText, TitleText } from "../../components/Typography";
import { OrderConfirmedContainer, OrderDetailsContainer } from "./style";
import { useTheme } from "styled-components";
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { InfoWithIcon } from "../CompleteOrder/components/InfoWithIcon";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../CompleteOrder";
import { paymentMethods } from "../CompleteOrder/components/CompleteOrderForm/PaymentMethodOptions";
import { useEffect } from "react";
import { SelectedProd } from "./components/SelectedProd";

interface LocationType {
  state: OrderData;
}

export function OrderConfirmedPage() {

  const { colors } = useTheme();

  const { state } = useLocation() as unknown as LocationType;

  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  if (!state) return <></>;
  
  
  return (
    <OrderConfirmedContainer className="container">
      <div>
        <div>
          <TitleText size="l">Pedido confirmado</TitleText>
          <RegularText size="l" color="subtitle">
            Agora é só aguardar que logo os produtos chegaram até você !<br /> <br />
          </RegularText>
        </div>

        <section>
          <OrderDetailsContainer>
            <InfoWithIcon
              icon={<MapPin weight="fill" />}
              iconBg={colors["brand-purple"]}
              text={
                <RegularText>
                  Entrega em <strong>{state.street}</strong>, {state.number}
                  <br />
                  {state.district} - {state.city}, {state.uf}
                </RegularText>
              }
            />

            <InfoWithIcon
              icon={<Clock weight="fill" />}
              iconBg={colors["brand-yellow"]}
              text={
                <RegularText>
                  Previsão de entrega
                  <br />
                  <strong>20 min - 30 min</strong>
                </RegularText>
              }
            />

            <InfoWithIcon
              icon={<CurrencyDollar weight="fill" />}
              iconBg={colors["brand-yellow-dark"]}
              text={
                <RegularText>
                  Pagamento na entrega
                  <br />
                  <strong>{paymentMethods[state.paymentMethod].label}</strong>
                </RegularText>
              }
            />
          </OrderDetailsContainer>
        </section>
      </div>
      <SelectedProd />
    </OrderConfirmedContainer>
  );
}