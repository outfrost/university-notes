# Inżynieria Oprogramowania
### Sprawozdanie z laboratorium

## Projekt Hallowed Connection
_Aplikacja do wyszukiwania punktów z dostępem do energii elektrycznej_

Uczestnicy							| Prowadzący			| Termin zajęć			
------------------------------------|-----------------------|-----------------------
Szymon Abramski<br />Iwo Bujkiewicz	| Dr inż. Roman Ptak	| Środa 9:15

### Zadanie 2

Celem laboratorium drugiego było stowrzenie modelu świata biznesowego i rzeczywistego, obecnego przy tworzenie aplikacji. Model miał być stworzony w dowolnym edytorze tekstu i jako jedyne zadanie na laboratoriach nie zawierał diagramów.

### Zadanie 3

Celem laboratorium trzeciego było stworzenie diagramu przypadków użycia, opisującego działanie aplikacji. Diagram pokazuje wszystkie dostępne poziomy dostępu, wraz ze wszystkimi dostępnymi funkcjami aplikacji w zależności od poziomu. Każdy poziom dostępu jest ściśle powiązany z odpowiadającymi im sesjami. Rozróżniamy sesję anoniomwą, sesję użykownika, sesję administratora oraz sesję moderatora. Dla przykładu, administrator w odpowiadającej mu sesji może robić wszystko to co niższe poziomy zabezpieczeń, a oprócz tego nadawać poziomy dotępu innym użytkownikom.

![use case diagram1](https://user-images.githubusercontent.com/26509284/35645250-8bae7f26-06cb-11e8-9c2f-5d54b2c88867.jpg)

### Zadanie 4

Celem laboratorium czwartego była budowa diagramu czynności reprezentującego model biznesowy „świata rzeczywistego” na podstawie
wykonanego opisu procesów biznesowych oraz budowa diagramów czynności reprezentujących scenariusze wybranych przypadków użycia.
Każdy diagram powinien zawierać tory, w tym przypadku jest to użytkownik, aplikacja i baza danych. Każdy diagram opisuje drogę przez tory
jaką przebywa dana funkcja. Na torze użytownika, może on dokonowyać wyborów, za pomocą aplikacji, które wpływają na zakończenie przebiegu funkcji. Następnie aplikacja łączy się z bazą danych, z której pobiera informaje żądane przez użytkownika.

![add new outlet information](https://user-images.githubusercontent.com/26509284/35645290-ac73a7a4-06cb-11e8-8c56-2925ad26f896.jpg)

![edit outlet information](https://user-images.githubusercontent.com/26509284/35645297-ae8a0574-06cb-11e8-9bf0-908eee46f882.jpg)

![search for outlet information](https://user-images.githubusercontent.com/26509284/35645300-b0bbbaae-06cb-11e8-961c-38535c004fe9.jpg)

![show outlet information](https://user-images.githubusercontent.com/26509284/35645304-b38754a0-06cb-11e8-91bb-15cf35802a56.jpg)

### Zadanie 5

Celem laboratorium piątego była identyfikacja klas reprezentujących logikę biznesową projektowanego oprogramowania, definicja atrybutów i
operacji klas oraz związków między klasami na podstawie analizy scenariuszy przypadków użycia. W diagrami klas opisane są wszystkie atrybuty i funkcje dostępne w klasie. Na diagramie przedstawiono również związki między klasami.

![class diagram1](https://user-images.githubusercontent.com/26509284/35645338-c6006072-06cb-11e8-9523-1e915aab18c6.jpg)

<div class="page-break"></div>

### Zadanie 6

Celem laboratorium szóstego było opracowanie diagramów sekwencji dla wybranych przypadków użycia reprezentujących usługi oprogramowania wynikających również z wykonanych diagramów czynnośc.

![add comment](https://user-images.githubusercontent.com/26509284/35645369-d9305c2e-06cb-11e8-94ee-6e9a928e0d3a.jpg)

![add outlet](https://user-images.githubusercontent.com/26509284/35645372-d9f78a92-06cb-11e8-8e05-08a063630648.jpg)

![add rating](https://user-images.githubusercontent.com/26509284/35645373-da2771c6-06cb-11e8-9516-2c78b2ecbd44.jpg)

![search for outlet](https://user-images.githubusercontent.com/26509284/35645374-daa2eb12-06cb-11e8-9f75-ea3304ffb692.jpg)

<div class="page-break"></div>

### Zadanie 7

Celem laboratorium siódmego było opracowanie diagramów sekwencji dla wybranych przypadków użycia reprezentujących usługi
oprogramowania wynikających również z wykonanych diagramów czynności.

![add rating](https://user-images.githubusercontent.com/26509284/35645398-f0d766b0-06cb-11e8-8105-b709ebdfd665.jpg)

![searchforoutlet](https://user-images.githubusercontent.com/26509284/35645400-f1f62630-06cb-11e8-9ed5-a64f62ba850e.jpg)

### Zadanie 8

Celem laboratorium ósmego było opracowanie diagramu stanów dla wybranej klasy, reprezentującego wpływ różnych przypadków użycia na
zmiany stanów tej klasy, modelowanych za pomocą diagramów sekwencji.

![app](https://user-images.githubusercontent.com/26509284/35645427-0b0a5e84-06cc-11e8-8877-86b2329a00c2.jpg)

![rating](https://user-images.githubusercontent.com/26509284/35645428-0d0503ba-06cc-11e8-87a5-3b75389586cc.jpg)

<div class="page-break"></div>

### Zadanie 9

Celem laboratorium dziewiątego było napisanie zestawu testów jednostkowych dla projektowanej aplikacji. Opracowano testy jednostkowe testujące przede wszystkim zachowanie klasy reprezentującej logikę dostępu do bazy danych, ale także zachowanie klas encyjnych. Poniżej zaprezentowano kilka przykładowych testów.

```Java
//	class OutletInfoManagerTest

	@Test
	void addNewBuilding() throws SQLException {
		BuildingModification buildingModification = new BuildingModification();
		long randomId = random.nextLong();
		buildingModification.setId(randomId);
		buildingModification.setSubmittedBy(outletInfoManager.getUser(-19248712047002142L));
		buildingModification.setTimeSubmitted(Timestamp.from(Instant.now()));
		buildingModification.setApproved(true);
		buildingModification.setLatAfter(51.2137);
		buildingModification.setLonAfter(17.1410);
		buildingModification.setNameAfter("JUnitTest");
		buildingModification.setDescriptionAfter(Integer.toString(random.nextInt()));
		buildingModification.setFlagsAfter(BuildingFlags.NONE);
		
		outletInfoManager.addNewBuilding(buildingModification);
		
		newBuildingId = outletInfoManager.getBuildingModification(randomId).getBuilding().getId();
	}
```

```Java
//	class UserTest

	@Test
	void getMemberSince() throws SQLException {
		User user = outletInfoManager.getUser(7654723162654012354L);
		assertEquals(Timestamp.valueOf("2018-01-21 20:50:37.61357"), user.getMemberSince());
	}
```

```Java
//	class BuildingTest

	@Test
	void getName() throws SQLException {
		Building building = outletInfoManager.getBuilding(720195837538547236L);
		assertEquals("Pasaż Grunwaldzki", building.getName());
	}
```

```Java
//	class BuildingModificationTest

	@Test
	void getFlagsAfter() throws SQLException {
		BuildingModification buildingModification = outletInfoManager.getBuildingModification(9847211560751L);
		assertEquals(BuildingFlags.NONE, buildingModification.getFlagsAfter());
	}
```

### Zadanie 10

Celem laboratorium dziesiątego było utworzenie testów akceptacyjnych dla projektowanej aplikacji przy użyciu narzędzia FitNesse. Poniżej zaprezentowano przykładowy test w narzędziu FitNesse.

<div class="page-break"></div>

```FitNesse
!define TEST_SYSTEM {slim}
!path /home/outfrost/git/hallowed-connection/app/server/fitnesse/FitNesseRoot/target/test-classes
!path /home/outfrost/git/hallowed-connection/app/server/fitnesse/FitNesseRoot/target/classes
!path /home/outfrost/git/hallowed-connection/app/server/fitnesse/FitNesseRoot/target/libraries

!|import|
|org.postgresql.Driver|
|java.sql.*|
|java.time.LocalDateTime|
|java.util.EnumSet|
|java.util.Random|
|java.util.UUID|
|java.io.Serializable|

!|outfrost.hallowedconnection.server.OutletInfoManagerFixture|
|getUserValidation?|
|OK|
```

```Java
	public void execute() throws SQLException, ClassNotFoundException {
		outletInfoManager = new OutletInfoManager();
		
		User user = outletInfoManager.getUser(28464942894168541L);
		getUserValidation = (user.getDisplayName().equals("mkay") && user.getAccessLevel() == UserAccessLevel.REGISTERED && user.getEmail().equals("idontknow@thispersonsemail.com")) ? "OK" : "FAIL";
		
	}
```

![FitNesse](screenshots/fitnesse.png)
