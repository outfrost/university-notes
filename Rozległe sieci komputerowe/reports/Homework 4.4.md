# Rozległe sieci komputerowe

## Zadanie domowe

Tytuł zadania												| Uczestnicy				
------------------------------------------------------------|---------------------------
Potrafimy używać tras sieciowych							| Iwo Bujkiewicz (226203)

### Odpowiedzi na pytania

1. **Ile tras bezpośrednich jest na routerze Ashland? Która litera w tablicy routingu oznacza bezpośrednie połączenie z siecią?**
	
	Są trzy bezpośrednie połączenia, oznaczone są literą `C`.
	
2. **Znajdź trasę do sieci 192.168.6.0/24. Jakiego rodzaju jest ta trasa? Czy jest to trasa dynamiczna uzyskana przez router Ashland, czy jest to trasa skonfigurowana ręcznie przez administratora sieci na routerze Ashland?**
	
	Jest to trasa statyczna, skonfigurowana ręcznie przez zadministratora.
	
3. **Jak skonfigurujesz domyślną (trasę statyczną) prowadzącą z routera Ashland do dowolnej sieci poprzez adres następnego przeskoku 192.168.2.2?**
	
	```
	Ashland(config)# ip route 0.0.0.0 0.0.0.0 192.168.2.2
	```
	
4. **Jak skonfigurujesz domyślną (trasę statyczną) prowadzącą z routera Ashland do dowolnej sieci poprzez interfejs wyjściowy?**
	
	```
	Ashland(config)# ip route 0.0.0.0 0.0.0.0 <interface>
	```
	
5. **Kiedy zdecydujesz się na użycie routingu statycznego zamiast dynamicznego, aby zapewnić właściwe trasy?**
	
	Gdy z góry znane są preferowane trasy dla pakietów między różnymi węzłami, a konfigurowane węzły są wrażliwymi punktami sieci.
	
6. **Jakie jest znaczenie litery `L` po lewej stronie w tablicy routingu?**
	
	Oznacza ona, że dany wpis odpowiada interfejsowi w tym samym routerze. Trasa reprezentowana w ten sposób jest trasą lokalną dla routera.
	
