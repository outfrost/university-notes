# Układy cyfrowe i systemy wbudowane 2

## Spotkanie projektowe 1. Zajęcia organizacyjne

[Tematy dostępne do realizacji](http://www.zsk.iiar.pwr.edu.pl/zsk_ftp/fpga/tematy.pdf)

#### Zadania ogólne

1. Poznać obsługę VGA w trybie graficznym (User guide 230)
	* Wyświetlić cokolwiek na ekranie w trybie graficznym
2. Dodać pamięć do układu
3. Poznać ADC (User guide 230)


### Dokumentacja projektu

* Sprzęt - odwołania do źródeł opisu FPGA, płytki, zewnętrznych urządzeń, protokołów (np. VGA) znajdujących się w Literaturze (bibliografii)

* Hierarchia - schemat, przepływ danych, moduły napisane przez nas
* Wejścia/wyjścia
* Sygnały, procesy, liczniki, rejestry, etc.
* Graf maszyny stanów, idea pracy
* Symulacje - wykresy, któtki opis

* Rozmiar implementacji, procent dostępnych zasobów
* Szybkość pracy
* Podręcznik obsługi urządzenia ze zdjęciami


Przy wprowadzeniu mówił że ma być cel i zakres projektu, a potem odwołania (przez przypisy bibliograficzne[1]) do opisów sprzętu i teorii - układu XC3S500E, płytki Spartan, zewnętrznych urządzeń, protokołów (w tym VGA), itp.
potem w części drugiej, w hierarchii powinien się znaleźć top-level schematic, jakiś opis struktury układu, opis jak przepływają dane (jakie sygnały skąd dokąd są przekazywane i w jaki sposób), i opis co robią moduły (symbole na głównym schemacie) które my napisaliśmy i odniesienie do opisu tych które zrobił Sugier
potem dla modułów mają być opisy, jakie mają wejścia i wyjścia, jakich i do czego używają sygnałów, procesów, liczników, rejestrów itp., do tego graf i idea pracy automatu (maszyny stanów) oraz wykresy i krótkie opisy symulacji
Ok, to ja w piątek już do tego usiądę
potem przy implementacji trzeba napisać jaki rozmiar tego będzie i ile % dostępnych zasobów zajmie (w tym takie rzeczy jak Block RAM itp.)
z szybkością pracy to tam chodzi głównie o porównanie z zegarem 50 MHz (okres 20 ns), nie wiem o co mu tutaj tak dokładnie chodziło
do tego jakiś podręcznik obsługi dla użytkownika (co to robi, co trzeba podłączyć, co nacisnąć, itd.)
chciał zdjęcia w podręczniku obsługi, a ja zapomniałem zrobić zdjęć, ale mogę jakieś schematyczne rysunki ogarnąć
w podsumowaniu rzeczy typu co zrobilibyśmy inaczej jakbyśmy pracowali nad tym od nowa, perspektywy dalszej rozbudowy układu, jakieś inne wnioski
+ na końcu "Literatura" czyli bibliografia z tymi przypisami
gdzie z automatu trzeba wrzucić opisy XC3S500E, User Guide 230 i stronę o układach Sugiera
