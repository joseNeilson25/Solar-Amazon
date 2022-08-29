import { RegularText, TitleText } from "../../components/Typography";
import { OrderConfirmedContainer, OrderDetailsContainer } from "./style";
import { useTheme } from "styled-components";
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { InfoWithIcon } from "../CompleteOrder/components/InfoWithIcon";



export function OrderConfirmedPage() {
    const { colors } = useTheme();

    return(
        <OrderConfirmedContainer className="container">
            <div>
                <TitleText size="l">Uhu! Pedido confirmado</TitleText>
                <RegularText size="l" color="subtitle">
                Agora é só aguardar que logo o café chegará até você
                </RegularText>
                <section>
                    <OrderDetailsContainer>
                        <InfoWithIcon 
                            icon={<MapPin weight="fill" />}
                            iconBg={colors["brand-purple'inherit'"]}
                            text={
                            <RegularText>
                                Entrega em <strong> Caruaru PE</strong>
                            </RegularText>
                            } />
                        <InfoWithIcon 
                            icon={<Clock weight="fill" />}
                            iconBg={colors["brand-yellow"]}
                            text={
                            <RegularText>
                                Previsão de entrega
                                <br />
                                <strong>20 min - 30 min</strong>
                            </RegularText>
                            } />
                        <InfoWithIcon 
                            icon={<CurrencyDollar weight="fill" />}
                            iconBg={colors["brand-purple"]}
                            text={
                            <RegularText>
                              Pagamento na entrega
                              <br />
                              <strong>Cartão de credito</strong>
                            </RegularText>
                            } />
                    </OrderDetailsContainer>
                    <img src="" alt="" />
                </section>
            </div>
        </OrderConfirmedContainer>
    )
}