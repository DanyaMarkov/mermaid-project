import css from "./AdvantagesTable.module.css";

const AdvantagesTable = () => {
    return (
        <div className={css.advantagesTable}>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Тепловой насос-Тр</th>
                        <th>Другие решения</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Отраслевой эксперт, ориентированный на решения</td>
                        <td>✅</td>
                        <td>❌</td>
                    </tr>
                    <tr>
                        <td>Бесплатное открытие и проект</td>
                        <td>✅</td>
                        <td>❌</td>
                    </tr>
                    <tr>
                        <td>Быстрое применение</td>
                        <td>✅</td>
                        <td>❌</td>
                    </tr>
                    <tr>
                        <td>Гарантия установки</td>
                        <td>✅</td>
                        <td>❌</td>
                    </tr>
                    <tr>
                        <td>Круглосуточная послепродажная поддержка</td>
                        <td>✅</td>
                        <td>❌</td>
                    </tr>
                    <tr>
                        <td>Удобные способы оплаты</td>
                        <td>✅</td>
                        <td>❌</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AdvantagesTable;
