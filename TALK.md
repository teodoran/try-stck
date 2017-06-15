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

* Intro slide
    * Noe morsomt om at dette foredrage har tvilsom direkte anvendbarhet
* Hva kunne han ha snakket om?
    * Noe om at jeg meldte inn tre ting, og programkomiteen valgte det minst "enterpisete"
* Hva skal han snakke om?
    * Gå over agenda
    * Noe om at Einar Høst har vist lingnende ting før, men nå er han borte, så da får jeg ta det

### Stack-baserte språk (5 minutter)

* Litt FORTH-historie
    * Her passer det også med et bilde
    * Chuck Moore - 1968
    * Noe om programmering fra bunnen av
* Sovjet trinære maskiner
    * Her passer det med et bilde fra SETUN-artikkelen
* Så hva er stack-baserte språk?
    * All data på stacken
    * Ingen variabler
    * Alt postfiks
    * En illustrasjon av 1 2 +

### STCK (15 minutter)

* Så jeg laget meg et språk...
* Litt vanlig STCK programmering i try-stck
* Vise frem et litt mer komplisert eksempel (euler 2)
* Rart og rotete? Ja kanskje, men...
* Viktig poeng #1: Postfiksete linjer med subrutiner er litt som fluent-api, pipes og |>

### Så hva har dette med hypermedia å gjøre? (15 minutter)

* State + input -> Ny State
* Vent, lenkede ressurser?
* Så hvordan blir dette for rest-stck?
* Vise frem rest-stck enkelt eksempel
* Vise frem rest-stck vanskelig eksempel
* Noe om at Einar selvfølgelig implementerte dette bedre
* Vise frem hyperstck
* Kan det gjøres for andre språk og? Ja hyperlamb!
* Rart og rotete? Ja kanskje, men...
* Viktig poeng #2: REST med hypermedia lar deg lage veldig uttrykksfulle API. Tenk tilstandsmaskin

### Avslutning (5 minutter)

* Viktig poeng #1: Stack-baserte språk er kule! Postfiksete linjer med subrutiner er litt som fluent-api, pipes og |> Embedded DSL?
* Viktig poeng #2: REST med hypermedia lar deg lage veldig uttrykksfulle API. Tenk tilstandsmaskin

Todo
----

* Ferdigstille slides
* Skaff en VGA til HDMI overgang++ (Noe så man slipper å tenke på det igjen)
* Deploy try-stck > talk til Azure
* Deploy hyperstck?
* hyperlamb?
* Løsning for å kjøre alt lokalt? (kan være dårlig internett)

Done
----

* X Skriv om try-stck > talk så man ikke scroller forbi 2/3 ned på siden
* X Bygg inn støtte for slides i try-stck > talk
    * X Vise frem ASCII-slides? (12X16?)
    * X Bilder?
    * X STCK-eksempler som kan kjøre?
* X Marketing?