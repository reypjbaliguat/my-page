import Header from './components/Header';
import Container from './components/Container';

export default function Home() {
    return (
        <div className="flex flex-col w-screen h-screen bg-neutral-950 min-w-[700px]">
            <Header />
            <Container />
        </div>
    );
}
