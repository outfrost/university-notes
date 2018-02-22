# Struktury danych i złożoność obliczeniowa

## Ćwiczenia 1. Listy, kopce

Typy złożoności obliczeniowej
* O(n^a) - wielomianowa
* O(b^n) - wykładnicza
* O(log(n)) - logarytmiczna
* O(n!) - typu silnia

Algorytmy o złożonościach wykładniczych, logarytmicznych i typu silnia są uważane za nieefektywne.



**Zadanie domowe:**
* Dodawanie na koniec listy jednokierunkowej
* Usuwanie ostatniego elementu listy jednokierunkowej

##### Dodawanie na koniec listy jednokierunkowej

	void add(ListItem *item, ListItem *list)
	{
		while (list->next != NULL)
			list = list->next;
		list->next = item;
	}

##### Usuwanie ostatniego elementu z listy jednokierunkowej

	void removeLast(ListItem *list)
	{
		while (list->next->next != NULL)
			list = list->next;
		delete list->next;
		list->next = NULL;
	}
