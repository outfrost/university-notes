

### Opis biznesowy

##### Zadanie oprogramowania

Projektowane oprogramowanie ma na celu ułatwienie znajdywania gniazdek elektrycznych w różnego rodzaju ogólnodostępnych budynkach. Użytkownik powinien mieć możliwość odszukać swoją (lub dowolną inną) lokalizację na mapie, wybrać interesujący go budynek, następnie jego część (jeśli budynek jest na tyle duży aby go dzielić) i zobaczyć schematyczny plan danej części budynku z zaznaczonymi miejscami, w których rozmieszczone są gniazdka elektryczne.

Baza lokalizacji gniazdek wraz ze schematami powinna być powiększana przez użytkowników, bezpośrednio w tej samej aplikacji.

##### Architektura

Pierwszą i podstawową planowaną postacią oprogramowania jest aplikacja mobilna na system operacyjny Android w wersji 4.0 lub nowszej. Projekt zakłada możliwość dobudowania aplikacji przeglądarkowej, na desktopowe systemy operacyjne oraz inne urządzenia mobilne.

Pojedynczy schemat rozmieszczenia gniazdek reprezentowany jest przez nazwę części budynku, którą przedstawia, piętro, które opisuje, przesunięcie lokalizacji na mapie względem głównego węzła budynku, unikalny identyfikator reprezentacji graficznej schematu oraz autora - użytkownika, który dodał schemat do systemu.

Schematy rozmieszczenia gniazdek grupowane są w budynki, które z kolei opisane są przez nazwę, lokalizację geograficzną i opcjonalnie adres.

Niektóre budynki są zbyt małe (lub ich ogólnodostępna część jest zbyt mała), aby dzielić je na części i przechowywać osobne schematy. W takim wypadku do budynku przypisany jest tylko jeden schemat o pustej nazwie, a aplikacja od razu wyświetla ten schemat bezpośrednio po wybraniu budynku.
