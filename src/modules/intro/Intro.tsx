import Button from "../../components/button/Button.tsx";

export const Intro = () => {
    return (
        <section>
            <h1>I’m Semen Krekotun<strong>Front-end</strong> Developer </h1>
            <p>Frontend-разработчик. Делаю быстрые и адаптивные интерфейсы, оживляю проекты с помощью анимаций и современных технологий.</p>
            <a href={'#'} target={'_blank'}>View Resume</a>
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline" size="lg">Outline Large</Button>
            <Button size="sm" onClick={() => alert("Clicked!")}>Small Button</Button>

        </section>
    );
};
