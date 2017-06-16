Stack-baserte programmeringsspråk + REST = ACaaS (Arbitrary Computation as a Service)
=====================================================================================

Teaser
------

Funksjonell programmering er i vinden om dagen, men har du hørt om stack-basert programmering?

Teodor har lekt med stack-baserte språk i det siste og har bygget seg et lite esoterisk programmeringsspråk, et enda mindre økosystem og en løsning for å kjøre arbitrær komputasjon med språket over et REST-endepunkt.

Bli med å lær litt om stack-baserte språk, kompilatorbygging, og skikkelig REST med hypermedia.

Agenda
------

### Intro (5 minutter)

Hva kunne han ha snakket om?
* Enteprise PowerShell scriptdeling
* Enteprise kunnskapsdeling i stort prosjekt
* Klager rettes til programkomiteen :-)

Hva skal han egentlig snakke om?
* Litt om stack-baserte språk
* Litt om STCK
* STCK + REST? Hvorfor det?
* Einar Høst lignende ting, men han er borte, så jeg tar jobben

### Stack-baserte språk (5 minutter)

* moore.jpg
    * FORTHProgrammering fra bunnen av
    * Chuck Moore - 1968

Stack-baserte programmeringsspråk
* Alt er postfiks
* Ingen skikkelige variabler
* Hvordan funker det i praksis?

### STCK (15 minutter)

Demo 1 - Hvoran funker stack-baserte språk
* Verdier på stack 2 3, bare int32 er støttet
* Matteoperasjoner +
* Stack operasjoner . dup rot
* Boolske verdier 0 og 1
* Boolske operasjoner not =
* Conditionals 0 ? 42 : 1337; 1 ? 42 : 1337;
* Subrutiner # add-five 5 +
* hprint

Project Euler problem #2
* Summer alle Fibonacci-tall
* Under 4000000

Esoterisk, ja gjett om! men...
* Lett å embedde => Bra for DSL
* Ingen variabler => Ingen problemer
* Begrensninger kan være en styrke!

Eksempler
* Linq
* F# pipelines
* UNIX pipes

### STCK + REST (15 minutter)

Hvor passer REST inn? #1
* GET /Person/3
* DELETE /Sak/19

Hvor passer REST inn? #2
* Representational state transfer

Hvor passer REST inn? #3
* Tilstand og Operasjon = Ny Tilstand
* [1; 1] og + = [2]

Demo 2 - rest-stck og hyperstck
* 1 1 + i rest-stck
* 1 1 + og define lol i hyperstck

Esoterisk, ja gjett om! men state transfer er:
1) Utrolig uttrykksfullt
2) Veldig fleksibelt
3) Noe noe tilstandsmaskin

### Avslutning (2 minutter)

Begrensede språk har fordeler
* Færre ting som kan brukes feil
* Lett og embedde, DSL?

REST kan være ekstremt fleksibelt
* Tilstandsmaskin
* Vilkårlig komputasjon

Todo
----

* Skaff en VGA til HDMI overgang++ (Noe så man slipper å tenke på det igjen)

Done
----

* X Ferdigstille slides
* X Skrive notater
* X Skriv om try-stck > talk så man ikke scroller forbi 2/3 ned på siden
* X Bygg inn støtte for slides i try-stck > talk
    * X Vise frem ASCII-slides? (12X16?)
    * X Bilder?
    * X STCK-eksempler som kan kjøre?
* X Marketing?
* X Deploy try-stck > talk til heroku
* X Løsning for å kjøre alt lokalt? (kan være dårlig internett)