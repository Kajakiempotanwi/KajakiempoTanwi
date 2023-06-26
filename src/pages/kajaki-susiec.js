import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const KajakiSusiecPage = () => {
    return (
        <Layout>
            <div className="overflow-hidden w-full z-10">
                <div className="relative object-bottom flex items-center min-h-[12rem] max-h-[13rem] overflow-hidden justify-center w-full">
                    <div className="w-full -mt-4 -z-20">
                        <StaticImage
                            className="w-full h-full object-cover object-center absolute inset-0"
                            loading="eager"
                            src="../assets/kajaki-tanew.jpg"
                            alt="kajaki susiec"
                            title="kajaki susiec"
                        />
                        <div className="w-full h-full bg-gray-800/80 absolute top-0 left-0" />
                    </div>
                </div>

                <section class="container -mt-32 lg:-mt-24 px-3 mx-auto ">
                    <section class=" mb-6 md:mb-12 text-gray-800">
                        <div class="container mx-auto xl:px-32 text-start lg:text-left">
                            <div class="flex flex-col items-center md:items-center">
                                <div className="md:px-12">
                                    <StaticImage
                                        className="h-72 w-72 lg:py-64 lg:px-96 rounded-xl shadow-xl"
                                        loading="eager"
                                        src="../assets/kajaki-tanew.jpg"
                                        alt="kajaki susiec"
                                        title="kajaki susiec"
                                    />
                                    <div className="flex items-start justify-end mx-3 space-x-4 my-4"></div>
                                </div>
                                <div class="pl-4 px-12 max-w-screen-lg">
                                    <div class="block mt-1 -tracking-wide rounded-lg py-3 md:px-12 lg:-mr-14 text-start">
                                        <h1 class="text-2xl lg:text-3xl font-bold pb-2 mb-5">
                                            Zapraszamy na spływy kajakowe:
                                            <br />
                                            Odkryj urok rzeki Tanew - Kajaki
                                            Susiec !
                                        </h1>
                                        <p class="text-gray-700 text-lg mb-4 pb-2">
                                            Szukasz niezapomnianej przygody na
                                            wodzie? Chciałbyś poczuć dreszczyk
                                            emocji płynący z kajakowego spływu?
                                            Przyjedź do Susiec i dołącz do
                                            naszej wypożyczalni kajaków, gdzie
                                            czeka na Ciebie fascynująca podróż
                                            na rzecze.
                                        </p>
                                        <p class="text-gray-700 text-lg mb-4 pb-2">
                                            Spływ kajakowy to nie tylko
                                            doskonały sposób na aktywne
                                            spędzenie czasu, ale również
                                            wyjątkowa okazja, by cieszyć się
                                            malowniczym krajobrazem Huty Szumy.
                                            Podziwiaj piękno natury, oddając się
                                            rytmowi wody i delektując się
                                            chwilami ciszy.
                                        </p>
                                        <p class="text-gray-700 text-lg mb-4 pb-2">
                                            Nie musisz być doświadczonym
                                            kajakarzem, nasza oferta jest
                                            otwarta dla początkujących. Nasi
                                            wykwalifikowani instruktorzy z
                                            przyjemnością pomogą Ci opanować
                                            podstawy pływania kajakiem.
                                        </p>
                                        <p class="text-gray-700 text-lg mb-4 pb-2">
                                            Przyjedź do naszej wypożyczalni
                                            kajaków w miejscowości Susiec,
                                            położonej pod adresem Huta Szumy 56,
                                            22-672, Tam czeka na Ciebie
                                            niezapomniana przygoda!
                                        </p>
                                        <h2 className="text-xl lg:text-2xl font-bold py-2 mb-5">
                                            Kilka informacji, które warto znać
                                            przed rozpoczęciem spływu Kajaki
                                            Susiec
                                        </h2>

                                        <p class="text-gray-700 text-lg mb-4 pb-2">
                                            Planujesz niezapomnianą przygodę na
                                            wodzie? Spływy kajakowe na Tanwi w
                                            Suscu to doskonały wybór dla
                                            miłośników natury i aktywnego
                                            wypoczynku. Przed rozpoczęciem
                                            przygody, warto zebrać kilka
                                            istotnych informacji.
                                        </p>

                                        <p class="text-gray-700 text-lg mb-4 pb-2">
                                            <strong>Trasa spływu:</strong>{" "}
                                            Spływy kajakowe na Tanwi
                                            rozpoczynają się pod mostem w
                                            miejscowości Paary i kończą pod
                                            mostem w miejscowości Huta Szumy. Ta
                                            malownicza trasa przepływa przez
                                            urokliwe zakątki rezerwatu nad
                                            Tanwią, oferując niepowtarzalną
                                            okazję do podziwiania przyrody.
                                        </p>
                                        <p class="text-gray-700 text-lg mb-4 pb-2">
                                            <strong>Bezpieczeństwo:</strong>{" "}
                                            Przed rozpoczęciem spływu należy
                                            zadbać o swoje bezpieczeństwo.
                                            Kamizelki asekuracyjne są
                                            obowiązkowe i należy je nosić przez
                                            cały czas trwania spływu. Woda na
                                            tej trasie nie przekracza 1 m
                                            głębokości, więc jest to odcinek
                                            bardzo bezpieczny, zwłaszcza dla
                                            osób początkujących i rodzin z
                                            dziećmi.
                                        </p>
                                        <p class="text-gray-700 text-lg mb-4 pb-2">
                                            <strong>Wypożyczalnia:</strong>{" "}
                                            Można skorzystać z usług
                                            wypożyczalni kajaków, dane
                                            kontaktowe znajdują się na serwisie
                                            internetowym. Oferujemy wynajem
                                            kajaków i dostarczenie ich na
                                            początek trasy, co ułatwia
                                            organizację.
                                        </p>
                                        <p class="text-gray-700 text-lg mb-4 pb-2">
                                            <strong>Urok przyrody:</strong>{" "}
                                            Trasa spływu przepływa przez pełne
                                            tajemnic lasy, które przywodzą na
                                            myśl zakątki puszczy solskiej czy
                                            lasy Amazonii. Podczas spływu można
                                            obserwować ptaki siedzące na
                                            gałęziach, podziwiać rzadko
                                            spotykane gatunki roślin i cieszyć
                                            się widokiem kaskady na rzece.
                                        </p>
                                        <p class="text-gray-700 text-lg mb-4 pb-2">
                                            Organizatorzy spływów są
                                            organizowane przez profesjonalnych
                                            organizatorów, którzy zapewniają nie
                                            tylko wypożyczenie sprzętu, ale
                                            również serwis i transport na
                                            początek trasy. Można z nimi
                                            skontaktować się, korzystając z
                                            podanych danych kontaktowych na
                                            kamizelkach.
                                        </p>

                                        <h2 className="text-xl lg:text-2xl font-bold py-2 mb-5">
                                            Skontaktuj się z nami i zarezerwuj
                                            spływ paary – huta szumy
                                        </h2>
                                        <p class="text-gray-700 text-lg mb-4 pb-2">
                                            Chcesz doświadczyć niezapomnianej
                                            przygody na wodzie? Spływy kajakowe
                                            po rzece to doskonały sposób na
                                            połączenie aktywnego wypoczynku z
                                            pięknem natury. Wyjątkowa okazja,
                                            aby odkryć urok rzeki w towarzystwie
                                            profesjonalnych przewodników. Spływy
                                            kajakowe susiec po rzece Tanew,
                                            nasza oferta zapewni Ci
                                            niezapomniane wrażenia. Ciesz się
                                            urokami przyrody, pokonuj zakręty i
                                            napotykaj fascynujące przeszkody.
                                            Poczuj adrenalinę sterowania
                                            kajakiem, a jednocześnie korzystaj z
                                            bezpiecznego środowiska, gdzie
                                            głębokość wody nie przekracza 1m.
                                            Skontaktuj się z nami już teraz i
                                            zarezerwuj swój spływ w krainie
                                            nieskończonych przygód!
                                        </p>
                                        <p class="text-gray-700 text-lg mb-4 pb-2">
                                            Zapewniamy dowóz na początek trasy
                                            oraz pełne wsparcie na górnym
                                            odcinku. Nasze spływy są bezpieczne,
                                            ponieważ dbamy o każdy szczegół.
                                            Odkrywaj tajemnice roztocza i
                                            podziwiaj zaczarowany świat zieleni.
                                            Wyrusz w podróż przez leśny gąszcz,
                                            który przypomina lasy Amazonii.
                                            Przeżyj emocjonujące chwile na
                                            nurcie rzeki, która zaskoczy Cię
                                            swoim ukształtowaniem. Dobra zabawa
                                            jest gwarantowana, zarówno dla osób
                                            indywidualnych, jak i grup
                                            zorganizowanych. Nie czekaj dłużej -
                                            skontaktuj się z nami i zarezerwuj
                                            swój niezapomniany spływ kajakowy
                                            już dziś!
                                        </p>
                                        <div className="text-center space-y-3">
                                            <h3 className="text-xl lg:text-2xl font-bold py-2 mb-2">
                                                Dane kontaktowe:
                                            </h3>
                                            <Link
                                                to="/kontakt"
                                                type="button"
                                                title="Kontakt"
                                                class="btn_main my-1 mr-4"
                                                data-mdb-ripple="true"
                                                data-mdb-ripple-color="light"
                                            >
                                                Kontakt
                                            </Link>
                                            <h3 className="text-xl lg:text-2xl font-bold py-2 mb-5">
                                                Cennik i Trasa
                                            </h3>
                                            <Link
                                                to="/cennik"
                                                type="button"
                                                title="Ceny"
                                                class="btn_main my-1 mr-4"
                                                data-mdb-ripple="true"
                                                data-mdb-ripple-color="light"
                                            >
                                                Cennik
                                            </Link>

                                            <Link
                                                to="/szlak-kajakowy"
                                                type="button"
                                                title="Trasa"
                                                class="btn_main my-1 "
                                                data-mdb-ripple="true"
                                                data-mdb-ripple-color="light"
                                            >
                                                Trasa
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </Layout>
    );
};

export const Head = () => (
    <Seo
        title="Najlepsze spływy kajakowe Susiec - Kajaki Susiec"
        description="Zanurz się w niezapomnianym spływie kajakowym w 22-672 Susiec, odkrywając piękno rzeki Tanew i urok Huty Szumy. Sprawdź nasz serwis!"
    />
);
export default KajakiSusiecPage;
