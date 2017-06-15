// http://www.messletters.com/en/big-text/ style "small" og "standard"
var slides = [
`<pre style="color:yellow;">

Stack-baserte programmeringsspråk + REST =  

     _       ____                   ____  
    / \\     / ___|   ____    ____  / ___| 
   / _ \\   | |      / _  |  / _  | \\___ \\ 
  / ___ \\  | |___  | (_| | | (_| |  ___) |
 /_/   \\_\\  \\____|  \\__,_|  \\__,_| |____/ 

  (Arbitrary Computation as a Service)


</pre>`,
`<pre style="color:yellow;">
+----------------------------------------+
|                                        |
|   Hva kunne han ha snakket om?         |
|   ----------------------------         |
|                                        |
|   * Enteprise PowerShell scriptdeling  |
|   * Enteprise kunnskapsdeling          |
|     i stort prosjekt                   |
|                                        |
|  Klager rettes til programkomiteen :-) |
|                                        |
+----------------------------------------+
</pre>`,
`<pre style="color:yellow;">
+----------------------------------------+
|                                        |
|   Hva skal han egentlig snakke om?     |
|   --------------------------------     |
|                                        |
|   * Litt om stack-baserte språk        |
|   * Litt om STCK                       |
|   * STCK + REST? Hvorfor det?          |
|   * Profit                             |
|                                        |
|                                        |
+----------------------------------------+
</pre>`,
`<pre style="color:yellow;">
  ___   _                 _   
 / __| | |_   ____   __  | |__
 \\__ \\ |  _| / _  | / _| | / /
 |___/  \\__| \\__,_| \\__| |_\\_\\

 ~~~~~~~~~~~ Baserte ~~~~~~~~~~~
  ___                 (o)   _   
 / __|  _ __   _ _   ____  | |__
 \\__ \\ | '_ \\ | '_| / _  | | / /
 |___/ | .__/ |_|   \\__,_| |_\\_\\
       |_|                      

</pre>`,
`<img style="height:15em;" src="images/moore.jpg">`,
// hvordan funker det? Tegning
// Hva er begrensningene?
`<img style="height:15em;" src="images/setun.jpg">`,
`<pre style="color:yellow;">

Et stack-basert programmeringsspråk  

  ____    _____    ____   _  __
 / ___|  |_   _|  / ___| | |/ /
 \\___ \\    | |   | |     | ' / 
  ___) |   | |   | |___  | . \\ 
 |____/    |_|    \\____| |_|\\_\\                               

 (Beware of the Turing tar-pit)


</pre>`,
`<pre style="color:yellow;">Demo</pre>`,
`<pre style="color:yellow;">
+----------------------------------------+
|                                        |
|   Project Euler problem two            |
|   -------------------------            |
|                                        |
|   * Sum all Fibonacci numbers          |
|   * Below four million                 |
|                                        |
|                                        |
|                                        |
|                                        |
+----------------------------------------+
</pre>`,
`<pre style="color:yellow;">
# next-fib
	2dup +
!
</pre>`,
`<pre style="color:yellow;">
# is-even
	dup 2 % 0 =
!

# next-is-zero
	dup 0 =
!
</pre>`,
`<pre style="color:yellow;">
# fib-under-4m
	next-fib
	dup 4000000 > ?
		fib-under-4m
	: . ;
!
</pre>`,
`<pre style="color:yellow;">
# sum-if-even
	swap is-even ?
		+
	: . ;
	swap next-is-zero ?
		.
    : swap sum-if-even ;
!
</pre>`,
`<pre style="color:yellow;">
0 1 2 fib-under-4m sum-if-even !
</pre>`,
// Viktig poeng #1: Postfiksete linjer med subrutiner er litt som fluent-api, pipes og |>
`<pre style="color:yellow;">
    ___   _____    ___   _  __
   / __| |_   _|  / __| | |/ /
   \\__ \\   | |   | (__  | ' < 
   |___/   |_|    \\___| |_|\\_\\
                            
 ~~~~~~~~~~~~ Pluss ~~~~~~~~~~~~
     ___   ___   ___   _____ 
    | _ \\ | __| / __| |_   _|
    |   / | _|  \\__ \\   | |  
    |_|_\\ |___| |___/   |_|  


</pre>`,
`<pre style="color:yellow;">
+----------------------------------------+
|                                        |
|   Hvor passer REST inn? #1             |
|   ------------------------             |
|                                        |
|   * GET /Person/3                      |
|   * DELETE /Sak/19                     |
|                                        |
|                                        |
|   (*host* JSON over *host* HTTP)       |
|                                        |
+----------------------------------------+
</pre>`,
`<pre style="color:yellow;">
+----------------------------------------+
|                                        |
|   Hvor passer REST inn? #2             |
|   ------------------------             |
|                                        |
|   * Representational state transfer    |
|                      --------------    |
|                                        |
|   /Oppgave/1 -- Link1 --> /Trinn/1     |
|              \\- Link2 --> /Trinn/2     |
|                                        |
+----------------------------------------+
</pre>`,
`<pre style="color:yellow;">
+----------------------------------------+
|                                        |
|   Hvor passer REST inn? #3             |
|   ------------------------             |
|                                        |
|  Tilstand og Operasjon = Ny Tilstand   |
|                                        |
|            [1; 1] og + = [2]           |
|                                        |
|                                        |
|                                        |
+----------------------------------------+
</pre>`,
`<pre style="color:yellow;">Demo</pre>`,
// Viktig poeng #2: REST med hypermedia lar deg lage veldig uttrykksfulle API. Tenk tilstandsmaskin
`<img style="height:15em;" src="images/power.gif">`,
`<pre style="color:yellow;">

 

  _   _                               (o)   ___ 
 | | | | __   __   ____     _ __     ____  |__ \\
 | |_| | \\ \\ / /  / _  |   | '_ \\   / _  |   / /
 |  _  |  \\ V /  | (_| |   | | | | | (_| |  |_| 
 |_| |_|   \\_/    \\__,_|   |_| |_|  \\__,_|  (_) 

         (Hva var poenget med dette)


</pre>`,
`<pre style="color:yellow;">
+----------------------------------------+
|                                        |
|   Begrensede språk har fordeler        |
|   -----------------------------        |
|                                        |
|   * Færre ting som kan brukes feil     |
|   * Lett og embedde, DSL?              |
|                                        |
|                                        |
|                                        |
|                                        |
+----------------------------------------+
</pre>`,
`<pre style="color:yellow;">
+----------------------------------------+
|                                        |
|   REST kan være ekstremt fleksibelt    |
|   ---------------------------------    |
|                                        |
|   * Tilstandsmaskin                    |
|   * Vilkårlig komputasjon              |
|                                        |
|                                        |
|                                        |
|                                        |
+----------------------------------------+
</pre>`,
`<pre style="color:yellow;">
         ____  ____  ____  ____ 
        ||t ||||a ||||k ||||k ||
        ||__||||__||||__||||__||
        |/__\\||/__\\||/__\\||/__\\|
            ____  ____  ____ 
           ||f ||||o ||||r ||
           ||__||||__||||__||
           |/__\\||/__\\||/__\\|
         ____  ____  ____  ____ 
        ||m ||||e ||||g ||||! ||
        ||__||||__||||__||||__||
        |/__\\||/__\\||/__\\||/__\\|
</pre>`];