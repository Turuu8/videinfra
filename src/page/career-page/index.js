import { Discription, Headline, Vacancies } from "../../component"

export const CareerPage = () => {
    return (
        <div className="career-page">
            <section className="headline-section">
                <Headline />
            </section>
            <section className="discription-section">
                <Discription />
            </section>
            <section className="vacancies-section">
                <Vacancies />
            </section>
        </div>

    )
}
