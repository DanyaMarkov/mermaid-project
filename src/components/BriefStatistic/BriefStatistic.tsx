import css from "./BriefStatistic.module.css";

export const BriefStatistic = () => {
    return (
        <div className={css.briefStatistic}>
            <div className={css.briefStatistic__title}>Годы опыта</div>
            <div className={css.briefStatistic__indicators}>
                <Indicator count={40} label="точек" />
                <Indicator count={35} label="рабочих" />
                <Indicator count={342} label="завершенных проектов" />
                <Indicator count={1248} label="счастливых клиентов" />
            </div>
        </div>
    );
};

type IndicatorProps = {
    label: string;
    count: number;
};
export const Indicator = (props: IndicatorProps) => {
    return (
        <div className={css.indicator}>
            <div className={css.indicator__count}>{props.count}+</div>
            <div className={css.indicator__label}>{props.label}</div>
        </div>
    );
};

export default BriefStatistic;
