import React from 'react';
import aboutimage from '../Pictures/principalBackground.jpeg';

const About = () => {
    return(
        <div className="about">
            <div class="vh-100 dt w-100 tc white cover baskerville" style={{zIndex:"-2", backgroundColor:"#465964"}} >
                <div class="cf mt3 mr3" >
                    <div class=" fl w-100 w-60-ns black-70 pl4-ns pr5-ns ph4 pb6-ns f3 white">
                        <header class="mt6 bb b--white-70">
                            <h3 class="f1 lh-title mt0 mb3" style={{fontFamily:"Mak", zIndex:"-1"}}>About me</h3>
                        </header>
                        <section class="">
                            <p class="tl lh-copy f4 mt2">
                                Die Pianistin Rebeka Stojkoska, geboren
                                1995, wuchs in Skopje (Nordmazedonien)
                                auf. Einen Teil ihrer Kindheit lebte sie in Volos (Griechenland), wo sie im Alter von 4
                                Jahren mit dem Klavierspiel begann.
                                <br/>
                                Von 2002 bis 2013 war sie in der Klavierklasse von Elena Kostovska in Skopje.
                                2013 kam sie nach Deutschland um im Rahmen des Bachelorsstudiums an der
                                Hochschule für Musik Freiburg bei Andreas Bach zu studieren, welches sie 2017
                                erfolgreich abschloss. Ihr Studium setze sie in Freiburg fort und studierte von 2017
                                bis 2019 Master Liedgestaltung bei Pauliina Tukiainen.
                                Seit Herbst 2019 studiert sie Postgraduate Liedduo mit der Mezzosopranistin Céline
                                Akçag am Mozarteum in Salzburg, ebenso bei Pauliina Tukiainen.
                                <br/><br/>
                                Ihre musikalische Ausbildung ergänzte sie mit vielen Meisterkursen, u.a. bei Arbo
                                Valdma, Jerome Rose, Till Fellner, sowie für Kammermusik bei Hansjacob Staemmler.
                                Liedkurse besuchte sie bei Anne Le Bozec, Hartmut Höll, Helmut Deutsch, Jan Philip
                                Schulze, Burkhard Kehring, Axel Bauni, Christiane Iven und Malcolm Walker.
                                <br/><br/>
                                Sie ist Preisträgerin mehrerer internationaler Wettbewerbe für Klavier und
                                Kammermusik. 2016 gewann sie den 1. Preis bei dem Festival für Musik Lake Pearls.
                                2019 bekam sie, im Duo mit Céline Akçag, den Anerkennungspreis beim 3.
                                Internationalen Wettbewerb Karlsruhe für das Lied des 20. und 21. Jahrhunderts.
                                <br/><br/>
                                Des weiteren war sie Stipendiatin der Adelhausenstiftung Freiburg und Yehudi
                                Menuhin Live Music Now. 2017 bekam sie den DAAD Preis für hervorragende
                                Leistungen ausländischer Studierender, sowie das Deutschlandstipendium. 2018
                                gewann sie ein Stipendium der Helene Rosenberg Stiftung.
                                <br/><br/>
                                Seit dem WS 2020/21 hat sie einen Lehrauftrag für Gesangskorrepetition an der
                                Hochschule für Musik und Theater in München inne.
                            </p>
                        </section>
                    </div>
                    <article class="fl w-100 w-40-ns pl3 center mt7-ns ">
                        <div class="center aspect-ratio aspect-ratio--5x7">
                            <img src={aboutimage} alt="portrait"/>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
}

export default About;